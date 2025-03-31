import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import config from "./config.js";

let wallet = null;

/**
 * Gets the wallet instance using the mnemonic from the configuration
 * 
 * @returns {Promise} A wallet instance
 */
export async function getWallet() {
    if (!wallet) {
        wallet = await DirectSecp256k1HdWallet.fromMnemonic(config.MNEMONIC, { prefix: "xion" });
    }
    return wallet;
}

/**
 * Gets the address of the wallet
 * 
 * @returns {string} The wallet address
 */
export async function getMyAddress() {
    const wallet = await getWallet();
    const accounts = await wallet.getAccounts();
    return accounts[0].address;
}

/**
 * Generates a new wallet with a random mnemonic
 * 
 * @returns {object} An object containing the mnemonic and address
 */
export async function generateWallet() {
    const newWallet = await DirectSecp256k1HdWallet.generate(24, { prefix: "xion" });
    const accounts = await newWallet.getAccounts();
    return {
        mnemonic: newWallet.mnemonic,
        address: accounts[0].address
    };
}

/**
 * Gets address from a specific mnemonic
 * 
 * @param {string} mnemonic - The wallet mnemonic
 * @returns {Promise<string>} The wallet address
 */
export async function getAddressFromMnemonic(mnemonic) {
    const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
        prefix: "xion" // XION address prefix
    });
    
    const [firstAccount] = await wallet.getAccounts();
    return firstAccount.address;
}