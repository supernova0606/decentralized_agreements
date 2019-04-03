import web3 from './web3';
import Factory from './build/Factory.json';

const instance = new web3.eth.Contract(
  // node compile.js
  // node deploy.js
  // put new deployed address below
  JSON.parse(Factory.interface),
  '0x19Ff0862a4ebBd87ea16D2EB162e57d22262dfe5'
);

export default instance;
