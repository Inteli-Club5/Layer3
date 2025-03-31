import { getQueryClient } from "./xion-connect.js";

/**
 * Gets an account's balance for a specific token
 * 
 * @param {string} address - The account address to check
 * @param {string} denom - The token denomination (default: uxion)
 * @returns {string} The account balance amount
 */
export async function getBalance(address, denom = "uxion") {
  const client = getQueryClient();
  const balance = await client.getBalance(address, denom);
  return balance.amount;
}

/**
 * Gets detailed account information
 * 
 * @param {string} address - The account address to check
 * @returns {object} Account information including sequence numbers
 */
export async function getAccount(address) {
  const client = getQueryClient();
  return await client.getAccount(address);
}

/**
 * Gets transaction details by hash
 * 
 * @param {string} hash - The transaction hash
 * @returns {object} Complete transaction details
 */
export async function getTransaction(hash) {
  const client = getQueryClient();
  return await client.getTx(hash);
}

/**
 * Gets block data at a specific height
 * If no height is provided, gets the latest block
 * 
 * @param {number} height - The block height (optional)
 * @returns {object} Block data including transactions
 */
export async function getBlock(height) {
  const client = getQueryClient();
  return await client.getBlock(height);
}

/**
 * Gets the current blockchain height
 * 
 * @returns {number} The current block height
 */
export async function getChainHeight() {
  const client = getQueryClient();
  return await client.getHeight();
}

/**
 * Queries a smart contract
 * 
 * @param {string} contractAddress - The contract address
 * @param {object} queryMsg - The query message in JSON format
 * @returns {object} Query result from the contract
 */
export async function queryContract(contractAddress, queryMsg) {
  const client = getQueryClient();
  return await client.queryContractSmart(contractAddress, queryMsg);
}