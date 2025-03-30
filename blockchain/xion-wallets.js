// xion-wallets.js
const { DirectSecp256k1HdWallet } = require("@cosmjs/proto-signing");
const config = require('./config');

/**
 * Gets the address associated with the configured mnemonic
 * 
 * @returns {Promise<string>} The wallet address
 */
async function getMyAddress() {
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(config.MNEMONIC, {
    prefix: "xion" // XION address prefix
  });
  
  const [firstAccount] = await wallet.getAccounts();
  return firstAccount.address;
}

/**
 * Generates a new wallet (useful for creating recipient wallets for testing)
 * 
 * @returns {Promise<object>} Object containing mnemonic and address
 */
async function generateWallet() {
  const wallet = await DirectSecp256k1HdWallet.generate(24, {
    prefix: "xion" // XION address prefix
  });
  
  const [firstAccount] = await wallet.getAccounts();
  
  return {
    mnemonic: wallet.mnemonic,
    address: firstAccount.address
  };
}

/**
 * Gets address from a specific mnemonic
 * 
 * @param {string} mnemonic - The wallet mnemonic
 * @returns {Promise<string>} The wallet address
 */
async function getAddressFromMnemonic(mnemonic) {
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
    prefix: "xion" // XION address prefix
  });
  
  const [firstAccount] = await wallet.getAccounts();
  return firstAccount.address;
}

module.exports = {
  getMyAddress,
  generateWallet,
  getAddressFromMnemonic
};