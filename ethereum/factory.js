import web3 from './web3';
import Factory from './build/Factory.json';

const instance = new web3.eth.Contract(
  // node compile.js
  // node deploy.js
  // put new deployed address below
  JSON.parse(Factory.interface),
  '0x501B45720BB657A9fCD2733d07D2718730d8A5c1'
);

export default instance;
