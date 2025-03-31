import { EnglishMnemonic } from "@cosmjs/crypto";

const mnemonic = new EnglishMnemonic();
console.log(mnemonic.words());
