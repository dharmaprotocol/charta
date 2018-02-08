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
const ethUtil = require("ethereumjs-util");
const signable_message_1 = require("./signable_message");
const solidity = require("../../utils/solidity");
const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";
const NULL_SIGNATURE = { r: "0x0", s: "0x0", v: 0 };
class DebtOrder extends signable_message_1.SignableMessage {
    constructor(params) {
        super();
        this.params = params;
    }
    getVersion() {
        return this.params.version;
    }
    getIssuanceCommitment() {
        return this.params.debtIssuanceCommitment;
    }
    getDebtor() {
        return this.params.debtor;
    }
    getDebtKernelContract() {
        return this.params.debtKernelContract;
    }
    getDebtTokenContract() {
        return this.params.debtTokenContract;
    }
    getPrincipalAmount() {
        return this.params.principalAmount;
    }
    getPrincipalTokenAddress() {
        return this.params.principalTokenAddress;
    }
    getRelayer() {
        return this.params.relayer;
    }
    getDebtorFee() {
        return this.params.debtorFee;
    }
    getCreditorFee() {
        return this.params.creditorFee;
    }
    getUnderwriterFee() {
        return this.params.underwriterFee;
    }
    getExpiration() {
        return this.params.expirationTimestampInSec;
    }
    getRelayerFee() {
        return this.params.relayerFee;
    }
    getDebtOrderHash() {
        const hash = solidity.SHA3([
            this.getVersion(),
            this.getIssuanceCommitment().getHash(),
            this.getUnderwriterFee(),
            this.getPrincipalAmount(),
            this.getPrincipalTokenAddress(),
            this.getDebtorFee(),
            this.getCreditorFee(),
            this.getRelayer(),
            this.getRelayerFee(),
            this.getExpiration(),
        ]);
        const hashHex = ethUtil.bufferToHex(hash);
        return hashHex;
    }
    getUnderwriterCommitmentHash() {
        const hash = solidity.SHA3([
            this.getVersion(),
            this.getIssuanceCommitment().getHash(),
            this.getUnderwriterFee(),
            this.getPrincipalAmount(),
            this.getPrincipalTokenAddress(),
            this.getExpiration(),
        ]);
        const hashHex = ethUtil.bufferToHex(hash);
        return hashHex;
    }
    getHash() {
        return this.getDebtOrderHash();
    }
    getSignedDebtOrder(web3, creditor, signatories) {
        return __awaiter(this, void 0, void 0, function* () {
            const creditorSignature = signatories.creditor ?
                yield this.getSignature(web3, signatories.creditor, this.getDebtOrderHash()) : NULL_SIGNATURE;
            const debtorSignature = signatories.debtor ?
                yield this.getSignature(web3, signatories.debtor, this.getDebtOrderHash()) : NULL_SIGNATURE;
            const underwriterSignature = signatories.underwriter ?
                yield this.getSignature(web3, signatories.underwriter, this.getUnderwriterCommitmentHash()) : NULL_SIGNATURE;
            return new SignedDebtOrder(this, creditor, creditorSignature, debtorSignature, underwriterSignature);
        });
    }
}
exports.DebtOrder = DebtOrder;
class SignedDebtOrder extends DebtOrder {
    constructor(debtOrder, creditor, creditorSignature, debtorSignature, underwriterSignature) {
        super(debtOrder.params);
        this.creditor = creditor;
        this.creditorSignature = creditorSignature;
        this.debtorSignature = debtorSignature;
        this.underwriterSignature = underwriterSignature;
    }
    getCreditor() {
        return this.creditor;
    }
    getDebtorSignature() {
        return this.debtorSignature;
    }
    getCreditorSignature() {
        return this.creditorSignature;
    }
    getUnderwriterSignature() {
        return this.underwriterSignature;
    }
    getOrderAddresses() {
        return [
            this.getIssuanceCommitment().getVersion(),
            this.getDebtor(),
            this.getIssuanceCommitment().getUnderwriter(),
            this.getIssuanceCommitment().getTermsContract(),
            this.getPrincipalTokenAddress(),
            this.getRelayer(),
        ];
    }
    getOrderValues() {
        return [
            this.getIssuanceCommitment().getUnderwriterRiskRating(),
            this.getIssuanceCommitment().getSalt(),
            this.getPrincipalAmount(),
            this.getUnderwriterFee(),
            this.getRelayerFee(),
            this.getCreditorFee(),
            this.getDebtorFee(),
            this.getExpiration(),
        ];
    }
    getOrderBytes32() {
        return [
            this.getIssuanceCommitment().getTermsContractParameters(),
        ];
    }
    getSignaturesR() {
        return [
            this.debtorSignature.r,
            this.creditorSignature.r,
            this.underwriterSignature.r,
        ];
    }
    getSignaturesS() {
        return [
            this.debtorSignature.s,
            this.creditorSignature.s,
            this.underwriterSignature.s,
        ];
    }
    getSignaturesV() {
        return [
            this.debtorSignature.v,
            this.creditorSignature.v,
            this.underwriterSignature.v,
        ];
    }
}
exports.SignedDebtOrder = SignedDebtOrder;
//# sourceMappingURL=debt_order.js.map