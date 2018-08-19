import { BigNumber } from "bignumber.js";
import * as Web3 from "web3";
import ethUtil = require("ethereumjs-util");

import * as solidity from "../../utils/solidity";
import { Address, Bytes32, UInt } from "../common";
import { CreditorCommitmentParams } from "./schema";
import { ECDSASignature, SignableMessage } from "../kernel/signable_message";

const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";
const NULL_SIGNATURE = { r: "0x0", s: "0x0", v: 0 };

export interface CreditCommitmentSignatories {
    creditor?: Address;
}

export class CreditorCommitment extends SignableMessage {
    public params: CreditorCommitmentParams;

    constructor(params: CreditorCommitmentParams) {
        super();
        this.params = params;
    }

    public getKernelVersion(): Address {
        return this.params.kernelVersion;
    }

    public getRepaymentVersion(): Address {
        return this.params.repaymentVersion;
    }

    public getCreditor(): Address {
        return this.params.creditor;
    }

    public getUnderwriter(): Address {
        return this.params.underwriter;
    }

    public getTermsContract(): Address {
        return this.params.termsContract;
    }

    public getTermsContractParameters(): Bytes32 {
        return this.params.termsContractParameters;
    }

    public getPrincipalToken(): Address {
        return this.params.principalTokenAddress;
    }

    public getPrincipalAmount(): BigNumber {
        return this.params.principalAmount;
    }

    public getMinimumRiskRating(): BigNumber {
        return this.params.minimumRiskRating;
    }

    public getMaximumCreditorFee(): BigNumber {
        return this.params.maximumCreditorFee;
    }

    public getCommitmentExpiration(): BigNumber {
        return this.params.commitmentExpirationTimestampInSec;
    }

    public getNonce(): BigNumber {
        return this.params.nonce;
    }

    public getCreditCommitmentHash(): Bytes32 {
        const hash = solidity.SHA3([
            this.getKernelVersion(),
            this.getRepaymentVersion(),
            this.getCreditor(),
            this.getUnderwriter(),
            this.getTermsContract(),
            this.getTermsContractParameters(),
            this.getPrincipalToken(),
            this.getPrincipalAmount(),
            this.getMinimumRiskRating(),
            this.getMaximumCreditorFee(),
            this.getCommitmentExpiration(),
            this.getNonce(),
        ]);
        const hashHex = ethUtil.bufferToHex(hash);
        return hashHex;
    }

    public getHash(): Bytes32 {
        return this.getCreditCommitmentHash();
    }

    public async getSignedCreditorCommitment(
        web3: Web3,
        signatories: CreditCommitmentSignatories = {},
    ): Promise<SignedCreditorCommitment> {
        const creditorSignature = signatories.creditor
            ? await this.getSignature(web3, signatories.creditor)
            : NULL_SIGNATURE;
        return new SignedCreditorCommitment(this, creditorSignature);
    }
}

export class SignedCreditorCommitment extends CreditorCommitment {
    public creditorSignature: ECDSASignature;

    constructor(creditorCommitment: CreditorCommitment, creditorSignature: ECDSASignature) {
        super(creditorCommitment.params);
        this.creditorSignature = creditorSignature;
    }

    public getCreditorSignature(): ECDSASignature {
        return this.creditorSignature;
    }
}
