import { BigNumber } from "bignumber.js";
import * as Web3 from "web3";
import ethUtil = require("ethereumjs-util");

import * as solidity from "../../utils/solidity";
import { Address, Bytes32 } from "../common";
import { DebtOfferParams } from "./schema";
import { ECDSASignature, SignableMessage } from "../kernel/signable_message";

const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";
const NULL_SIGNATURE = { r: "0x0", s: "0x0", v: 0 };

export interface DebtOfferSignatories {
    creditor?: Address;
    debtor?: Address;
    underwriter?: Address;
}

export class DebtOffer extends SignableMessage {
    public params: DebtOfferParams;

    constructor(params: DebtOfferParams) {
        super();
        this.params = params;
    }

    public getKernelVersion(): Address {
        return this.params.kernelVersion;
    }

    public getCreditor(): Address {
        return this.params.creditor;
    }

    public getRepaymentRouterVersion(): Address {
        return this.params.repaymentRouterVersion;
    }

    public getDebtor(): Address {
        return this.params.debtor;
    }

    public getUnderwriter(): Address {
        return this.params.underwriter;
    }

    public getTermsContract(): Address {
        return this.params.termsContract;
    }

    public getPrincipalToken(): Address {
        return this.params.principalToken;
    }

    public getRelayer(): Address {
        return this.params.relayer;
    }

    public getUnderwriterRiskRating(): BigNumber {
        return this.params.underwriterRiskRating;
    }

    public getSalt(): BigNumber {
        return this.params.salt;
    }

    public getPrincipalAmount(): BigNumber {
        return this.params.principalAmount;
    }

    public getUnderwriterFee(): BigNumber {
        return this.params.underwriterFee;
    }

    public getRelayerFee(): BigNumber {
        return this.params.relayerFee;
    }

    public getCreditorFee(): BigNumber {
        return this.params.creditorFee;
    }

    public getDebtorFee(): BigNumber {
        return this.params.debtorFee;
    }

    public getExpiration(): BigNumber {
        return this.params.expirationTimestampInSec;
    }

    public getTermsContractParameters(): Bytes32 {
        return this.params.termsContractParameters;
    }

    public getCreditorCommitmentHash(): Bytes32 {
        const hash = solidity.SHA3([
            this.getCreditor(),
            this.getKernelVersion(),
            this.getRepaymentRouterVersion(),
            this.getTermsContract(),
            this.getPrincipalToken(),
            this.getSalt(),
            this.getPrincipalAmount(),
            this.getCreditorFee(),
            this.getExpiration(),
            this.getTermsContractParameters(),
        ]);
        const hashHex = ethUtil.bufferToHex(hash);
        return hashHex;
    }

    public getAgreementId(): Bytes32 {
        const hash = solidity.SHA3([
            this.getRepaymentRouterVersion(),
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

    public getUnderwriterCommitmentHash(): Bytes32 {
        const hash = solidity.SHA3([
            this.getKernelVersion(),
            this.getAgreementId(),
            this.getUnderwriterFee(),
            this.getPrincipalAmount(),
            this.getPrincipalToken(),
            this.getExpiration(),
        ]);
        const hashHex = ethUtil.bufferToHex(hash);
        return hashHex;
    }

    public getDebtOrderHash(): Bytes32 {
        const hash = solidity.SHA3([
            this.getKernelVersion(),
            this.getAgreementId(),
            this.getUnderwriterFee(),
            this.getPrincipalAmount(),
            this.getPrincipalToken(),
            this.getDebtorFee(),
            this.getCreditorFee(),
            this.getRelayer(),
            this.getRelayerFee(),
            this.getExpiration(),
        ]);
        const hashHex = ethUtil.bufferToHex(hash);
        return hashHex;
    }

    public getHash(): Bytes32 {
        return this.getCreditorCommitmentHash();
    }

    public async getSignedDebtOffer(
        web3: Web3,
        signatories: DebtOfferSignatories,
    ): Promise<SignedDebtOffer> {
        const creditorSignature = signatories.creditor
            ? await this.getSignature(web3, signatories.creditor, this.getCreditorCommitmentHash())
            : NULL_SIGNATURE;
        const debtorSignature = signatories.debtor
            ? await this.getSignature(web3, signatories.debtor, this.getDebtOrderHash())
            : NULL_SIGNATURE;
        const underwriterSignature = signatories.underwriter
            ? await this.getSignature(
                  web3,
                  signatories.underwriter,
                  this.getUnderwriterCommitmentHash(),
              )
            : NULL_SIGNATURE;

        return new SignedDebtOffer(this, creditorSignature, debtorSignature, underwriterSignature);
    }
}

export class SignedDebtOffer extends DebtOffer {
    private creditorSignature: ECDSASignature;
    private debtorSignature: ECDSASignature;
    private underwriterSignature: ECDSASignature;

    constructor(
        debtOffer: DebtOffer,
        creditorSignature: ECDSASignature,
        debtorSignature: ECDSASignature,
        underwriterSignature: ECDSASignature,
    ) {
        super(debtOffer.params);
        this.creditorSignature = creditorSignature;
        this.debtorSignature = debtorSignature;
        this.underwriterSignature = underwriterSignature;
    }

    public getCreditorSignature(): ECDSASignature {
        return this.creditorSignature;
    }

    public getDebtorSignature(): ECDSASignature {
        return this.debtorSignature;
    }

    public getUnderwriterSignature(): ECDSASignature {
        return this.underwriterSignature;
    }

    public getOrderAddresses(): Address[] {
        return [
            this.getRepaymentRouterVersion(),
            this.getDebtor(),
            this.getUnderwriter(),
            this.getTermsContract(),
            this.getPrincipalToken(),
            this.getRelayer(),
        ];
    }

    public getOrderValues(): BigNumber[] {
        return [
            this.getUnderwriterRiskRating(),
            this.getSalt(),
            this.getPrincipalAmount(),
            this.getUnderwriterFee(),
            this.getRelayerFee(),
            this.getCreditorFee(),
            this.getDebtorFee(),
            this.getExpiration(),
        ];
    }

    public getOrderBytes32(): Bytes32[] {
        return [this.getTermsContractParameters()];
    }

    public getCommitmentAddresses(): Address[] {
        return [
            this.getCreditor(),
            this.getKernelVersion(),
            this.getRepaymentRouterVersion(),
            this.getTermsContract(),
            this.getPrincipalToken(),
        ];
    }

    public getCommitmentValues(): BigNumber[] {
        return [
            this.getSalt(),
            this.getPrincipalAmount(),
            this.getCreditorFee(),
            this.getExpiration(),
        ];
    }

    public getCommitmentBytes32(): Bytes32[] {
        return [this.getTermsContractParameters()];
    }

    public getSignaturesR(): Bytes32[] {
        return [this.debtorSignature.r, this.creditorSignature.r, this.underwriterSignature.r];
    }

    public getSignaturesS(): Bytes32[] {
        return [this.debtorSignature.s, this.creditorSignature.s, this.underwriterSignature.s];
    }

    public getSignaturesV(): number[] {
        return [this.debtorSignature.v, this.creditorSignature.v, this.underwriterSignature.v];
    }
}
