# deca_brd

`npm install`
`npm run dev`

1. Go to /ethereum
2. Run node compile.js
3. Run node deploy.js and copy the contract address
4. Create a factory.js file in ethereum/contracts/
5. Paste the code below
6. Replace '***your deployed contract address***' with the contract address from step #3

`
import web3 from './web3';
import Factory from './build/Factory.json';

const instance = new web3.eth.Contract(
  JSON.parse(Factory.interface),
  '***your deployed contract address***'
);

export default instance;
`
