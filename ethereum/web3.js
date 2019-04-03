import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && window.web3 !== 'undefined') {
  // in browser and metamask is running
  web3 = new Web3(window.web3.currentProvider);
} else {
  // on server OR not running metamask
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/00758faf47284f0ab7d124c9efe7f078'
  );
  web3 = new Web3(provider);
}

export default web3;
