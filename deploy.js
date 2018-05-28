const HDWalletProvider = require('truffle-hdwallet-provider'); 
const Web3 = require('web3');
const { interface,bytecode} = require('./compile');

const provider = new HDWalletProvider(  
  'exist shrug arrive stable matter arena glimpse oven guilt upon cool endless', 
  'https://rinkeby.infura.io/GLm6McXWuaih4gqq8nTY'    
);

const web3 = new Web3(provider);

const deploy = async () => {
    accounts = await web3.eth.getAccounts(); 
  
    console.log('attempting to deploy from account',accounts[0]);
  
    const result = await new web3.eth.Contract(JSON.parse(interface)) 
      .deploy({data:'0x'+ bytecode, arguments:['Hello World']})      
      .send({from: accounts[0], gas:'5000000'});                              
  
    console.log('Contract deployed to', result.options.address); 
};
  
deploy();