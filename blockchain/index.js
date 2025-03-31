// Este arquivo serve como ponte para acessar o módulo blockchain externo

// Use a sintaxe import do ES6
export {
  getXionAddressFromMnemonic,
  verifyXionOwnership,
  sendEthereumTransaction,
  getBalanceXion,
  getBalanceEthereum,
  getAddressEth,
  getAddressXion
} from './transaction.js';