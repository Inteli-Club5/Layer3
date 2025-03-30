const fs = require('fs');
const { getMyAddress } = require('./xion-wallets');
const { getBalance, getAccount, queryContract, getChainHeight } = require('./xion-queries');
const { sendTokens, executeContract, uploadContract, instantiateContract } = require('./xion-transactions');
const { ethers } = require("ethers");
const config = require('./config');
const { DirectSecp256k1HdWallet } = require("@cosmjs/proto-signing");

const ALCHEMY_API_URL = config.ALCHEMY_API_URL; 
const SENDER_PRIVATE_KEY = config.ETH_PRIVATE_KEY;

async function getXionAddressFromMnemonic(mnemonic) {
    const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, { prefix: "xion" });
    const accounts = await wallet.getAccounts();
    return accounts[0].address;
}

// Teste com seu mnemonic
const mnemonic = config.MNEMONIC;
getXionAddressFromMnemonic(mnemonic).then((address) => {
    console.log("Endereço gerado da XION:", address);
});

async function verifyXionOwnership(mnemonic, expectedXionAddress) {
    const generatedAddress = await getXionAddressFromMnemonic(mnemonic);
    return generatedAddress === expectedXionAddress;
}

const expectedXionAddress = "xion1l3dskuaz6pn9tv8yyrxm0r3n74m7x7gfzrm9x5";

verifyXionOwnership(mnemonic, expectedXionAddress).then((isValid) => {
    if (isValid) {
        console.log("Endereço XION confirmado! Autorizando a transação na Ethereum...");
        const privateKeyEthereum = config.ETH_PRIVATE_KEY; 
        const recipientEthereum = "0x41C619d460091b9da8A68859ED646b971C83aBA8";
        sendEthereumTransaction(privateKeyEthereum, recipientEthereum, "0.001");
    } else {
        console.log("Erro: O endereço XION gerado não corresponde!");
    }
});


async function sendEthereumTransaction(privateKey, recipient, amount) {
    const provider = new ethers.JsonRpcProvider(ALCHEMY_API_URL);
    const wallet = new ethers.Wallet(SENDER_PRIVATE_KEY, provider);

    const tx = {
        to: recipient,
        value: ethers.parseEther(amount),
        gasLimit: 21000,
        gasPrice: await provider.getFeeData().then((fee) => fee.gasPrice),
    };

    const transaction = await wallet.sendTransaction(tx);
    console.log("🚀 Transação enviada! Hash:", transaction.hash);
}

async function getBalanceXion () {
    const myAddress = await getMyAddress();
    console.log(`Your Xion wallet address: ${myAddress}`);
    
    const balance = await getBalance(myAddress);
    console.log(`Your Xion balance: ${balance} uxion`);
}

getBalanceXion();

async function getBalanceEthereum() {
    const provider = new ethers.JsonRpcProvider(ALCHEMY_API_URL);
    const wallet = new ethers.Wallet(SENDER_PRIVATE_KEY, provider);
    
    const balance = await provider.getBalance(wallet.address);
    console.log(`Your Ethereum wallet address: ${wallet.address}`);
    console.log(`Your Ethereum balance: ${ethers.formatEther(balance)} ETH`);
}

getBalanceEthereum();

// async function runExamples() {
//   try {
//     const height = await getChainHeight();
//     console.log(`Connected to XION blockchain at height: ${height}`);
    
//     const myAddress = await getMyAddress();
//     console.log(`Your wallet address: ${myAddress}`);
    
//     const balance = await getBalance(myAddress);
//     console.log(`Your balance: ${balance} uxion`);

// } catch (error) {
//     console.error("Error running examples:", error);
//     console.error(error.stack);
//   }
// }

// // Execute the examples
// runExamples();