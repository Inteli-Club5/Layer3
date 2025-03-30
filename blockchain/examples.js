// examples.js
const fs = require('fs');
const { getMyAddress } = require('./xion-wallets');
const { getBalance, getAccount, queryContract, getChainHeight } = require('./xion-queries');
const { sendTokens, executeContract, uploadContract, instantiateContract } = require('./xion-transactions');

// Main function to run all examples
async function runExamples() {
  try {
    // Get blockchain height to verify connection
    const height = await getChainHeight();
    console.log(`Connected to XION blockchain at height: ${height}`);
    
    // Get your wallet address from the environment mnemonic
    const myAddress = await getMyAddress();
    console.log(`Your wallet address: ${myAddress}`);
    
    // Check your balance
    const balance = await getBalance(myAddress);
    console.log(`Your balance: ${balance} uxion`);
    
    // // Example: Send tokens
    // if (parseInt(balance) > 1000) {
    //   console.log("\n--- Token Transfer Example ---");
      
    //   // For testing, you could create a recipient address
    //   // In production, you'd use a real recipient address
    //   const { address: recipientAddress } = await require('./xion-wallets').generateWallet();
    //   console.log(`Generated test recipient address: ${recipientAddress}`);
      
    //   // Send a small amount of tokens
    //   const sendResult = await sendTokens(recipientAddress, "1000");
    //   console.log(`Transfer complete! Transaction hash: ${sendResult.transactionHash}`);
    //   console.log(`Gas used: ${sendResult.gasUsed}`);
    // } else {
    //   console.log("Insufficient balance for transfer example");
    // }
    
    // // Example: Query a contract (replace with an actual contract address)
    // /*
    // console.log("\n--- Contract Query Example ---");
    // const contractAddress = "your_contract_address";
    // const queryMsg = { get_count: {} }; // Example for a counter contract
    // const queryResult = await queryContract(contractAddress, queryMsg);
    // console.log("Contract query result:", queryResult);
    
    // // Example: Execute a contract function
    // console.log("\n--- Contract Execution Example ---");
    // const executeMsg = { increment: {} }; // Example for a counter contract
    // const executeResult = await executeContract(contractAddress, executeMsg);
    // console.log(`Contract execution complete! Transaction hash: ${executeResult.transactionHash}`);
    // */
    
    // // Example: Upload and instantiate a contract
    // /*
    // console.log("\n--- Contract Deployment Example ---");
    // const wasmBinary = fs.readFileSync('./counter.wasm');
    // const uploadResult = await uploadContract(wasmBinary);
    // console.log(`Contract uploaded with code ID: ${uploadResult.codeId}`);
    
    // const initMsg = { count: 0 };
    // const instantiateResult = await instantiateContract(
    //   uploadResult.codeId,
    //   initMsg,
    //   "My Counter Contract"
    // );
    // console.log(`Contract instantiated at address: ${instantiateResult.contractAddress}`);
    // */
    
  } catch (error) {
    console.error("Error running examples:", error);
    console.error(error.stack);
  }
}

// Execute the examples
runExamples();