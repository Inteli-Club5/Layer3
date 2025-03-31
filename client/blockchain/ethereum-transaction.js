const { ethers } = require("ethers");
const config = require('./config');

const ALCHEMY_API_URL = config.ALCHEMY_API_URL; 
const SENDER_PRIVATE_KEY = config.ETH_PRIVATE_KEY;

const provider = new ethers.JsonRpcProvider(ALCHEMY_API_URL);
const senderWallet = new ethers.Wallet(SENDER_PRIVATE_KEY, provider);

async function createRecipientAndSendETH() {
    console.log(`\n🔵 Sua carteira Ethereum existente: ${senderWallet.address}`);

    // Criar nova carteira (destinatário)
    const recipientWallet = ethers.Wallet.createRandom();
    console.log(`\n🆕 Carteira destinatária criada!`);
    console.log(`📩 Endereço: ${recipientWallet.address}`);
    console.log(`🔑 Chave privada: ${recipientWallet.privateKey}`);

    // Verifica saldo do remetente
    let senderBalance = await provider.getBalance(senderWallet.address);
    console.log(`\n💰 Saldo do remetente: ${ethers.formatEther(senderBalance)} ETH`);

    // Se saldo for menor que 0.01 ETH, aborta
    const sendAmount = ethers.parseEther("0.001");
    if (senderBalance < sendAmount) {
        console.log("❌ Saldo insuficiente para enviar ETH!");
        return;
    }

    // Enviar ETH para o destinatário
    console.log(`\n⚡ Enviando 0.001 ETH para ${recipientWallet.address}...`);
    const tx = await senderWallet.sendTransaction({
        to: recipientWallet.address,
        value: sendAmount,
    });
    await tx.wait();
    console.log(`✅ Transação confirmada! Hash: ${tx.hash}`);

    // Verifica saldo do destinatário
    let recipientBalance = await provider.getBalance(recipientWallet.address);
    console.log(`\n💰 Saldo do destinatário: ${ethers.formatEther(recipientBalance)} ETH`);
}

// Executa a função
createRecipientAndSendETH();
