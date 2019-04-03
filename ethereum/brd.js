import web3 from './web3';
import Brd from './build/Brd.json';

export default address => {
  return new web3.eth.Contract(JSON.parse(Brd.interface), address);
};
