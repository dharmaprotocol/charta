"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bignumber_js_1 = require("bignumber.js");
const crypto = require("crypto");
const ethUtil = require("ethereumjs-util");
const solidity = require("../../utils/solidity");
const logs_1 = require("./logs");
class DebtRegistryEntry {
    constructor(params, salt) {
        this.params = params;
        this.salt = salt || this.generateSalt();
    }
    getEntryHash() {
        const entryHash = solidity.SHA3([
            this.params.version,
            this.params.creditor,
            this.params.termsContract,
            this.params.termsContractParameters,
            this.salt,
        ]);
        const entryHashHex = ethUtil.bufferToHex(entryHash);
        return entryHashHex;
    }
    getCreditor() {
        return this.params.creditor;
    }
    getVersion() {
        return this.params.version;
    }
    getTermsContract() {
        return this.params.termsContract;
    }
    getTermsContractParameters() {
        return this.params.termsContractParameters;
    }
    getSalt() {
        return this.salt;
    }
    getLogInsertEntry() {
        return logs_1.LogInsertEntry(this.getEntryHash(), this.getCreditor(), this.getTermsContract(), this.getTermsContractParameters());
    }
    generateSalt() {
        const saltBuffer = crypto.randomBytes(32);
        const saltBufferHex = ethUtil.bufferToHex(saltBuffer);
        return new bignumber_js_1.default(saltBufferHex);
    }
}
exports.DebtRegistryEntry = DebtRegistryEntry;
//# sourceMappingURL=entry.js.map