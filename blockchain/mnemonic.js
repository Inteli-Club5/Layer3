const { EnglishMnemonic } = require("@cosmjs/crypto");

const mnemonic = new EnglishMnemonic();
console.log(mnemonic.words()); 
