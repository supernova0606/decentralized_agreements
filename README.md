# deca_brd

Agreements on the ethereum network.
Host agreements in individual "rooms". 

1. Run below commands in /ethereum and copy the contract address
```
node compile.js
node deploy.js
```
2. Replace '***your deployed contract address***' in /ethereum/contracts with the contract address
3. npm run dev

```
import web3 from './web3';
import Factory from './build/Factory.json';

const instance = new web3.eth.Contract(
  JSON.parse(Factory.interface),
  '***your deployed contract address***'
);

export default instance;
```

**Currently setup for Rinkeby network. You can update this in /ethereum/web3.js.**
