"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const bignumber_js_1 = require("bignumber.js");
const crypto = require("crypto");
const solidity = require("../../utils/solidity");
const ethUtil = require("ethereumjs-util");
const signable_message_1 = require("./signable_message");
const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";
const NULL_SIGNATURE = { r: "0x0", s: "0x0", v: 0 };
class IssuanceCommitment extends signable_message_1.SignableMessage {
    constructor(params, salt) {
        super();
        this.params = params;
        this.params.salt = salt || this.generateSalt();
    }
    getVersion() {
        return this.params.version;
    }
    getDebtor() {
        return this.params.debtor;
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
        return this.params.salt;
    }
    getSignedIssuanceCommitment(web3, signatories = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const debtorSignature = signatories.debtor ?
                yield this.getSignature(web3, signatories.debtor) : NULL_SIGNATURE;
            const underwriterSignature = signatories.underwriter ?
                yield this.getSignature(web3, signatories.underwriter) : NULL_SIGNATURE;
            return new SignedIssuanceCommitment(this, debtorSignature, underwriterSignature);
        });
    }
    getHash() {
        const hash = solidity.SHA3([
            this.getVersion(),
            this.getDebtor(),
            this.getUnderwriter(),
            this.getUnderwriterRiskRating(),
            this.getTermsContract(),
            this.getTermsContractParameters(),
            this.getSalt(),
        ]);
        const hashHex = ethUtil.bufferToHex(hash);
        return hashHex;
    }
    generateSalt() {
        const saltBuffer = crypto.randomBytes(32);
        const saltBufferHex = ethUtil.bufferToHex(saltBuffer);
        return new bignumber_js_1.BigNumber(saltBufferHex);
    }
}
exports.IssuanceCommitment = IssuanceCommitment;
class SignedIssuanceCommitment extends IssuanceCommitment {
    constructor(issuanceCommitment, issuerSignature, underwriterSignature) {
        super(issuanceCommitment.params, issuanceCommitment.getSalt());
        this.issuerSignature = issuerSignature;
        this.underwriterSignature = underwriterSignature;
    }
    getIssuanceAddresses() {
        return [
            this.getVersion(),
            this.getDebtor(),
            this.getUnderwriter(),
            this.getTermsContract(),
        ];
    }
    getIssuanceValues() {
        return [
            this.getUnderwriterRiskRating(),
            this.getSalt(),
        ];
    }
    getUnderwriterSignature() {
        return this.underwriterSignature;
    }
    getSignaturesS() {
        return [
            this.issuerSignature.s,
            this.underwriterSignature.s,
        ];
    }
    getSignaturesV() {
        return [
            this.issuerSignature.v,
            this.underwriterSignature.v,
        ];
    }
}
exports.SignedIssuanceCommitment = SignedIssuanceCommitment;
//# sourceMappingURL=issuance_commitment.js.map