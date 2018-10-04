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
            this.getRepaymentRouterVersion(),
            this.getCreditorFee(),
            this.getUnderwriter(),
            this.getUnderwriterRiskRating(),
            this.getTermsContract(),
            this.getTermsContractParameters(),
            this.getExpiration(),
            this.getSalt(),
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

export interface VerificationParameters {
    creditorAddress: string;
    decisionEngineAddress: string;
    repaymentRouterAddress: string;
    underwriterAddress: string;
    termsContractAddress: string;
    creditorFee: BigNumber;
    underwriterRiskRating: BigNumber;
    commitmentExpirationTimestampInSec: BigNumber;
    salt: BigNumber;
    termsContractParameters: string;
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

    public getDecisionEngineParams(decisionEngineAddress: string): VerificationParameters {
        return {
            creditorAddress: this.getCreditor(),
            decisionEngineAddress,
            repaymentRouterAddress: this.getRepaymentRouterVersion(),
            underwriterAddress: this.getUnderwriter(),
            termsContractAddress: this.getTermsContract(),
            creditorFee: this.getCreditorFee(),
            underwriterRiskRating: this.getUnderwriterRiskRating(),
            commitmentExpirationTimestampInSec: this.getExpiration(),
            salt: this.getSalt(),
            termsContractParameters: this.getTermsContractParameters(),
        };
    }

    public getPackedDecisionEngineParams(decisionEngineAddress: string) {
        const decisionEngineParams = this.getDecisionEngineParams(decisionEngineAddress);

        const {
            // Addresses
            creditorAddress,
            repaymentRouterAddress,
            underwriterAddress,
            termsContractAddress,
            // uint
            creditorFee,
            underwriterRiskRating,
            commitmentExpirationTimestampInSec,
            salt,
            // bytes32
            termsContractParameters,
        } = decisionEngineParams;

        // Return a list conformable to type bytes32.
        return [
            // Addresses
            this.addressToBytes32(creditorAddress),
            this.addressToBytes32(decisionEngineAddress),
            this.addressToBytes32(repaymentRouterAddress),
            this.addressToBytes32(underwriterAddress),
            this.addressToBytes32(termsContractAddress),
            // uint
            this.bigNumberToBytes32(creditorFee),
            this.bigNumberToBytes32(underwriterRiskRating),
            this.bigNumberToBytes32(commitmentExpirationTimestampInSec),
            this.bigNumberToBytes32(salt),
            // Bytes32
            termsContractParameters,
        ];
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
            this.getRepaymentRouterVersion(),
            this.getUnderwriter(),
            this.getTermsContract(),
        ];
    }

    public getCommitmentValues(): BigNumber[] {
        return [
            this.getCreditorFee(),
            this.getUnderwriterRiskRating(),
            this.getExpiration(),
            this.getSalt(),
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

    public addressToBytes32(address: string): string {
        return "0x" + address.substr(2, address.length - 2).padStart(64, "0");
    }

    public bigNumberToBytes32(value: BigNumber): string {
        const valueNumber = value.toNumber();
        const valueHex = web3.toHex(valueNumber);
        return "0x" + valueHex.substr(2, valueHex.length - 2).padStart(64, "0");
    }
}
