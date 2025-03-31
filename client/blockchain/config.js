// ES Module version of config.js

// For Vite, we can use import.meta.env instead of dotenv
// If you need dotenv in a browser environment, you'd need to handle it differently

const config = {
  // Network configuration
  XION_RPC_URL: import.meta.env.VITE_XION_RPC_URL || "https://rpc.xion-testnet-2.burnt.com",
  CHAIN_ID: import.meta.env.VITE_XION_CHAIN_ID || "xion-testnet-2",
  ALCHEMY_API_URL: import.meta.env.VITE_ALCHEMY_API_URL,
  
  // Wallet configuration
  MNEMONIC: import.meta.env.VITE_XION_MNEMONIC,
  ETH_PRIVATE_KEY: import.meta.env.VITE_ETH_PRIVATE_KEY,
  
  // Make sure we have required values
  validateConfig: function() {
    if (!this.MNEMONIC) {
      throw new Error("VITE_XION_MNEMONIC is required in .env file");
    }
    if (!this.XION_RPC_URL) {
      throw new Error("VITE_XION_RPC_URL is required in .env file");
    }
    return true;
  }
};

// Named exports
export const XION_RPC_URL = config.XION_RPC_URL;
export const CHAIN_ID = config.CHAIN_ID;
export const ALCHEMY_API_URL = config.ALCHEMY_API_URL;
export const MNEMONIC = config.MNEMONIC;
export const ETH_PRIVATE_KEY = config.ETH_PRIVATE_KEY;
export const validateConfig = config.validateConfig;

// Default export for the entire config object
export default config;