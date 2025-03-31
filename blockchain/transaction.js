import fs from 'fs';
import { getMyAddress } from './xion-wallets.js';
import { getBalance, getAccount, queryContract, getChainHeight } from './xion-queries.js';
import { sendTokens, executeContract, uploadContract, instantiateContract } from './xion-transactions.js';
import { ethers } from "ethers";
import config from './config.js';
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";

const ALCHEMY_API_URL = config.ALCHEMY_API_URL; 
const SENDER_PRIVATE_KEY = config.ETH_PRIVATE_KEY;

export async function getXionAddressFromMnemonic(mnemonic) {
    const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, { prefix: "xion" });
    const accounts = await wallet.getAccounts();
    return accounts[0].address;
}

export async function verifyXionOwnership(mnemonic, expectedXionAddress) {
    const generatedAddress = await getXionAddressFromMnemonic(mnemonic);
    return generatedAddress === expectedXionAddress;
}

// const expectedXionAddress = "xion1l3dskuaz6pn9tv8yyrxm0r3n74m7x7gfzrm9x5";

// verifyXionOwnership(mnemonic, expectedXionAddress).then((isValid) => {
//     if (isValid) {
//         console.log("Endereço XION confirmado! Autorizando a transação na Ethereum...");
//         const privateKeyEthereum = config.ETH_PRIVATE_KEY; 
//         const recipientEthereum = "0x41C619d460091b9da8A68859ED646b971C83aBA8";
//         sendEthereumTransaction(privateKeyEthereum, recipientEthereum, "0.001");
//     } else {
//         console.log("Erro: O endereço XION gerado não corresponde!");
//     }
// });


export async function sendEthereumTransaction(privateKey, recipient, amount) {
    const provider = new ethers.JsonRpcProvider(ALCHEMY_API_URL);
    const wallet = new ethers.Wallet(SENDER_PRIVATE_KEY, provider);

    const tx = {
        to: recipient,
        value: ethers.parseEther(amount),
        gasLimit: 21000,
        gasPrice: await provider.getFeeData().then((fee) => fee.gasPrice),
    };

    const transaction = await wallet.sendTransaction(tx);
    console.log("Transação enviada! Hash:", transaction.hash);
}

export async function getBalanceXion () {
    const myAddress = await getMyAddress();
    console.log(`Your Xion wallet address: ${myAddress}`);
    
    const balance = await getBalance(myAddress);
    console.log(`Your Xion balance: ${balance} uxion`);
}

export async function getBalanceEthereum() {
    const provider = new ethers.JsonRpcProvider(ALCHEMY_API_URL);
    const wallet = new ethers.Wallet(SENDER_PRIVATE_KEY, provider);
    
    const balance = await provider.getBalance(wallet.address);
    console.log(`Your Ethereum wallet address: ${wallet.address}`);
    console.log(`Your Ethereum balance: ${ethers.formatEther(balance)} ETH`);
}