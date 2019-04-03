const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/Factory.json');

const provider = new HDWalletProvider(
  'lonely visit code left hour robot furnace snake hint depth stool duck',
  'https://rinkeby.infura.io/00758faf47284f0ab7d124c9efe7f078'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: '0x' + compiledFactory.bytecode })
    .send({ from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
};
deploy();
