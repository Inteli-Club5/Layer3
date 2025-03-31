import { SigningStargateClient, StargateClient } from "@cosmjs/stargate";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import config from "./config.js";

// Validate configuration before proceeding
//config.validateConfig();

let signingClient = null;
let queryClient = null;

/**
 * Gets a signing client for transactions
 * 
 * @returns {SigningStargateClient} A signing client instance
 */
export async function getSigningClient() {
    if (!signingClient) {
        const wallet = await DirectSecp256k1HdWallet.fromMnemonic(config.MNEMONIC, { prefix: "xion" });
        signingClient = await SigningStargateClient.connectWithSigner(config.XION_RPC_URL, wallet);
    }
    return signingClient;
}

/**
 * Gets a query client for blockchain queries
 * 
 * @returns {StargateClient} A query client instance
 */
export async function getQueryClient() {
    if (!queryClient) {
        queryClient = await StargateClient.connect(config.XION_RPC_URL);
    }
    return queryClient;
}

export const CHAIN_ID = config.CHAIN_ID;