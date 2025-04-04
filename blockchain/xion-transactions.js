// xion-transactions.js
import { getSigningClient } from "./xion-connect.js";
import { getMyAddress } from "./xion-wallets.js";
import config from './config.js';

/**
 * Sends tokens from your address to a recipient
 * Uses the mnemonic from environment variables by default
 * 
 * @param {string} recipientAddress - The recipient's address
 * @param {string} amount - The amount to send
 * @param {string} denom - The token denomination (default: uxion)
 * @param {string} memo - Optional transaction memo
 * @returns {object} Transaction result with hash and gas usage
 */
export async function sendTokens(recipientAddress, amount, denom = "uxion", memo = "") {
  const client = await getSigningClient();
  const senderAddress = await getMyAddress();
  
  const result = await client.sendTokens(
    senderAddress,
    recipientAddress,
    [{ denom, amount }],
    "auto", // fee calculation
    memo || "Transfer via XION backend"
  );
  
  return {
    transactionHash: result.transactionHash,
    gasUsed: result.gasUsed,
    gasWanted: result.gasWanted
  };
}

/**
 * Executes a smart contract function
 * 
 * @param {string} contractAddress - The contract address
 * @param {object} msg - The execute message in JSON format
 * @param {array} funds - Optional funds to send with the execution
 * @returns {object} Transaction result with hash and gas usage
 */
export async function executeContract(contractAddress, msg, funds = []) {
  const client = await getSigningClient();
  const senderAddress = await getMyAddress();
  
  const result = await client.executeContract(
    senderAddress,
    contractAddress,
    msg,
    "auto",
    "Execute contract via XION backend",
    funds
  );
  
  return {
    transactionHash: result.transactionHash,
    gasUsed: result.gasUsed,
    gasWanted: result.gasWanted
  };
}

/**
 * Uploads a smart contract WASM binary
 * 
 * @param {Uint8Array} wasmBinary - The contract WASM binary
 * @returns {object} Upload result with code ID and transaction hash
 */
export async function uploadContract(wasmBinary) {
  const client = await getSigningClient();
  const senderAddress = await getMyAddress();
  
  const result = await client.upload(
    senderAddress,
    wasmBinary,
    "auto"
  );
  
  return {
    codeId: result.codeId,
    transactionHash: result.transactionHash
  };
}

/**
 * Instantiates a smart contract from an uploaded code ID
 * 
 * @param {number} codeId - The uploaded contract code ID
 * @param {object} initMsg - Initialization message in JSON format
 * @param {string} label - Human-readable label for the contract
 * @param {array} funds - Optional funds to send with instantiation
 * @returns {object} Result with contract address and transaction hash
 */
export async function instantiateContract(codeId, initMsg, label, funds = []) {
  const client = await getSigningClient();
  const senderAddress = await getMyAddress();
  
  const result = await client.instantiate(
    senderAddress,
    codeId,
    initMsg,
    label,
    "auto",
    { funds }
  );
  
  return {
    contractAddress: result.contractAddress,
    transactionHash: result.transactionHash
  };
}