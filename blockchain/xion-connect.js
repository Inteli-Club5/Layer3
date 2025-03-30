// xion-connect.js
const { StargateClient, SigningStargateClient, GasPrice } = require("@cosmjs/stargate");
const { DirectSecp256k1HdWallet } = require("@cosmjs/proto-signing");
const config = require('./config');

// Validate configuration before proceeding
config.validateConfig();

/**
 * Creates a read-only client for querying the blockchain
 * This client can be used for all operations that don't require signing
 */
async function getQueryClient() {
  return await StargateClient.connect(config.XION_RPC_URL);
}

/**
 * Creates a signing client that can perform transactions
 * By default uses the mnemonic from environment variables
 * Can optionally accept a different mnemonic for multi-wallet scenarios
 */
async function getSigningClient(mnemonic = config.MNEMONIC) {
  // Create wallet from mnemonic
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
    prefix: "xion" // XION address prefix
  });
  
  // Create and return a signing client
  return await SigningStargateClient.connectWithSigner(
    config.XION_RPC_URL,
    wallet,
    { gasPrice: GasPrice.fromString("0.025uxion") }
  );
}

module.exports = {
  getQueryClient,
  getSigningClient,
  CHAIN_ID: config.CHAIN_ID
};