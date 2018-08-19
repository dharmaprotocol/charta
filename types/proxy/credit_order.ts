import { BigNumber } from "bignumber.js";
import * as Web3 from "web3";
import ethUtil = require("ethereumjs-util");

import * as solidity from "../../utils/solidity";
import { Address, Bytes32 } from "../common";
import { CreditorCommitment } from "./creditor_commitment";
import { CreditOrderParams } from "./schema";
import { ECDSASignature, SignableMessage } from "../kernel/signable_message";

const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";
const NULL_SIGNATURE = { r: "0x0", s: "0x0", v: 0 };

export interface CreditOrderSignatories {
    creditor?: Address;
    debtor?: Address;
    underwriter?: Address;
}

export class CreditOrder extends SignableMessage {
    public params: CreditOrderParams;

    constructor(params: CreditOrderParams) {
        super();
        this.params = params;
    }

    public getCreditorCommitment(): CreditorCommitment {
        return this.params.creditorCommitment;
    }

    public getDebtor(): Address {
        return this.params.debtor;
    }

    public getRelayer(): Address {
        return this.params.relayer;
    }

    public getCreditorFee(): BigNumber {
        return this.params.creditorFee;
    }

    public getDebtorFee(): BigNumber {
        return this.params.debtorFee;
    }

    public getRelayerFee(): BigNumber {
        return this.params.relayerFee;
    }

    public getUnderwriterFee(): BigNumber {
        return this.params.underwriterFee;
    }

    public getUnderwriterRiskRating(): BigNumber {
        return this.params.underwriterRiskRating;
    }

    public getOrderExpiration(): BigNumber {
        return this.params.orderExpirationTimestampInSec;
    }

    public getSalt(): BigNumber {
        return this.params.salt;
    }

    public getUnderwriterCommitmentHash(): Bytes32 {
        const hash = solidity.SHA3([
            this.getCreditorCommitment().getKernelVersion(),
            this.getUnderwriterFee(),
            this.getCreditorCommitment().getPrincipalAmount(),
            this.getCreditorCommitment().getPrincipalToken(),
            this.getOrderExpiration(),
        ]);
        const hashHex = ethUtil.bufferToHex(hash);
        return hashHex;
    }

    public getIssuanceHash(): Bytes32 {
        const hash = solidity.SHA3([
            this.getCreditorCommitment().getRepaymentVersion(),
            this.getDebtor(),
            this.getCreditorCommitment().getUnderwriter(),
            this.getCreditorCommitment().getTermsContract(),
            this.getUnderwriterRiskRating(),
            this.getSalt(),
            this.getCreditorCommitment().getTermsContractParameters(),
        ]);
        const hashHex = ethUtil.bufferToHex(hash);
        return hashHex;
    }

    public getCreditorCommitmentHash(): Bytes32 {
        return this.getCreditorCommitment().getHash();
    }

    public getCreditOrderHash(): Bytes32 {
        const hash = solidity.SHA3([
            this.getCreditorCommitment().getKernelVersion(),
            this.getIssuanceHash(),
            this.getUnderwriterFee(),
            this.getCreditorCommitment().getPrincipalAmount(),
            this.getCreditorCommitment().getPrincipalToken(),
            this.getDebtorFee(),
            this.getCreditorFee(),
            this.getRelayer(),
            this.getRelayerFee(),
            this.getOrderExpiration(),
        ]);
        const hashHex = ethUtil.bufferToHex(hash);
        return hashHex;
    }

    public getHash(): Bytes32 {
        return this.getCreditOrderHash();
    }

    public async getSignedCreditOrder(
        web3: Web3,
        signatories: CreditOrderSignatories,
    ): Promise<SignedCreditOrder> {
        const creditorSignature = signatories.creditor
            ? await this.getSignature(
                  web3,
                  signatories.creditor,
                  this.getCreditorCommitment().getHash(),
              )
            : NULL_SIGNATURE;

        const debtorSignature = signatories.debtor
            ? await this.getSignature(web3, signatories.debtor, this.getHash())
            : NULL_SIGNATURE;

        const underwriterSignature = signatories.underwriter
            ? await this.getSignature(
                  web3,
                  signatories.underwriter,
                  this.getUnderwriterCommitmentHash(),
              )
            : NULL_SIGNATURE;

        return new SignedCreditOrder(
            this,
            creditorSignature,
            debtorSignature,
            underwriterSignature,
        );
    }
}

export class SignedCreditOrder extends CreditOrder {
    private creditor: Address;

    private creditorSignature: ECDSASignature;
    private debtorSignature: ECDSASignature;
    private underwriterSignature: ECDSASignature;

    constructor(
        creditOrder: CreditOrder,
        creditorSignature: ECDSASignature,
        debtorSignature: ECDSASignature,
        underwriterSignature: ECDSASignature,
    ) {
        super(creditOrder.params);
        this.creditorSignature = creditorSignature;
        this.debtorSignature = debtorSignature;
        this.underwriterSignature = underwriterSignature;
    }

    public getDebtorSignature(): ECDSASignature {
        return this.debtorSignature;
    }

    public getCreditorSignature(): ECDSASignature {
        return this.creditorSignature;
    }

    public getUnderwriterSignature(): ECDSASignature {
        return this.underwriterSignature;
    }

    public getOrderAddresses(): Address[] {
        return [
            this.getCreditorCommitment().getRepaymentVersion(),
            this.getDebtor(),
            this.getCreditorCommitment().getUnderwriter(),
            this.getCreditorCommitment().getTermsContract(),
            this.getCreditorCommitment().getPrincipalToken(),
            this.getRelayer(),
            this.getCreditorCommitment().getKernelVersion(),
            this.getCreditorCommitment().getCreditor(),
        ];
    }

    public getOrderValues(): BigNumber[] {
        return [
            this.getUnderwriterRiskRating(),
            this.getSalt(),
            this.getCreditorCommitment().getPrincipalAmount(),
            this.getUnderwriterFee(),
            this.getRelayerFee(),
            this.getCreditorFee(),
            this.getDebtorFee(),
            this.getOrderExpiration(),
            this.getCreditorCommitment().getMinimumRiskRating(),
            this.getCreditorCommitment().getNonce(),
            this.getCreditorCommitment().getMaximumCreditorFee(),
            this.getCreditorCommitment().getCommitmentExpiration(),
        ];
    }

    public getOrderBytes32(): Bytes32[] {
        return [this.getCreditorCommitment().getTermsContractParameters()];
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
