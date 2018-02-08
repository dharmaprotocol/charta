"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bignumber_js_1 = require("bignumber.js");
const crypto = require("crypto");
const ethUtil = require("ethereumjs-util");
const solidity = require("../../utils/solidity");
class DebtRegistryEntry {
    constructor(params, salt) {
        this.params = params;
        this.salt = salt || this.generateSalt();
    }
    getIssuanceHash() {
        const issuanceHash = solidity.SHA3([
            this.params.version,
            this.params.debtor,
            this.params.underwriter,
            this.params.underwriterRiskRating,
            this.params.termsContract,
            this.params.termsContractParameters,
            this.salt,
        ]);
        const issuanceHashHex = ethUtil.bufferToHex(issuanceHash);
        return issuanceHashHex;
    }
    getDebtor() {
        return this.params.debtor;
    }
    getBeneficiary() {
        return this.params.beneficiary;
    }
    getVersion() {
        return this.params.version;
    }
    getUnderwriter() {
        return this.params.underwriter;
    }
    getUnderwriterRiskRating() {
        return this.params.underwriterRiskRating;
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
    getTokenId() {
        return new bignumber_js_1.default(this.getIssuanceHash());
    }
    generateSalt() {
        const saltBuffer = crypto.randomBytes(32);
        const saltBufferHex = ethUtil.bufferToHex(saltBuffer);
        return new bignumber_js_1.default(saltBufferHex);
    }
}
exports.DebtRegistryEntry = DebtRegistryEntry;
//# sourceMappingURL=entry.js.map