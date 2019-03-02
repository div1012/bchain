const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');

const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    ' 12 words here',
    'https://rinkeby.infura.io/v3/69e5040b0c4e4b6790d6715afd4fa62b'
);

const web3 = new Web3(provider);



const deploy = async () => {
    console.log("hello");
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);

    const result = await new web3.eth.Contract(JSON.parse(interface)).
        deploy({ data: '0x' + bytecode, arguments: ['Hi there!'] }).
        send({ gas: '1000000', from: accounts[0] });

    console.log('Contract deployed to', result.options.address);
};

deploy();