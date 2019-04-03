const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledFactory = require('../ethereum/build/Factory.json');
const compiledBrd = require('../ethereum/build/Brd.json');

let accounts;
let factory;
let brdAddress;
let brd;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();

  factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ from: accounts[0], gas: '1000000' });

  await factory.methods.createBrd('100').send({
    from: accounts[0],
    gas: '1000000'
  });

  [brdAddress] = await factory.methods.getDeployedBrds().call();
  brd = await new web3.eth.Contract(
    JSON.parse(compiledBrd.interface),
    brdAddress
  );
});

describe('Brds', () => {
  it('deploys a factory and a brd', () => {
    assert.ok(factory.options.address);
    assert.ok(brd.options.address);
  });

  it('marks caller as the brd manager', async () => {
    const manager = await brd.methods.manager().call();
    assert.equal(accounts[0], manager);
  });

  it('allows others to contribute money and marks them as approvers', async () => {
    await brd.methods.contribute().send({
      value: '200',
      from: accounts[1]
    });
    const isContributor = await brd.methods.approvers(accounts[1]).call();
    assert(isContributor);
  });

  it('requires minimum contribution', async () => {
    try {
      await brd.methods.contribute().send({
        value: '5',
        from: accounts[1]
      });
      assert(false);
    } catch (err) {
      assert(err);
    }
  });

  it('allows manager to make a payment request', async () => {
    await brd.methods.createRequest('Buy batteries', '100', accounts[1]).send({
      from: accounts[0],
      gas: '1000000'
    });
    const request = await brd.methods.requests(0).call();

    assert.equal('Buy batteries', request.description);
  });

  it('processes requests', async () => {
    await brd.methods.contribute().send({
      from: accounts[0],
      value: web3.utils.toWei('10', 'ether')
    });

    await brd.methods
      .createRequest('A', web3.utils.toWei('5', 'ether'), accounts[1])
      .send({ from: accounts[0], gas: '1000000' });

    await brd.methods.approveRequest(0).send({
      from: accounts[0],
      gas: '1000000'
    });

    await brd.methods.finalizeRequest(0).send({
      from: accounts[0],
      gas: '1000000'
    });

    let balance = await web3.eth.getBalance(accounts[1]);
    balance = web3.utils.fromWei(balance, 'ether');
    balance = parseFloat(balance);

    assert(balance > 104);
  });
});
