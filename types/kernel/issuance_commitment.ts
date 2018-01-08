import {promisify} from "@0xproject/utils";
import {BigNumber} from "bignumber.js";
import * as crypto from "crypto";
import * as Web3 from "web3";
import * as solidity from "../../utils/solidity";

import ethUtil = require("ethereumjs-util");
import {
    Address,
    Bytes32,
    UInt,
} from "../common";
import {
    IssuanceCommitmentParams,
    Signatories,
} from "./schema";
import {ECDSASignature, SignableMessage} from "./signable_message";

const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";
const NULL_SIGNATURE = { r: "0x0", s: "0x0", v: 0 };

export class IssuanceCommitment extends SignableMessage {
    public params: IssuanceCommitmentParams;

    constructor(params: IssuanceCommitmentParams, salt?: BigNumber) {
        super();
        this.params = params;
        this.params.salt = salt || this.generateSalt();
    }

    public getVersion(): Address {
        return this.params.version;
    }

    public getDebtor(): Address {
        return this.params.debtor;
    }

    public getUnderwriter(): Address {
        return this.params.underwriter;
    }

    public getUnderwriterRiskRating(): BigNumber {
        return this.params.underwriterRiskRating;
    }

    public getTermsContract(): Address {
        return this.params.termsContract;
    }

    public getTermsContractParameters(): Bytes32 {
        return this.params.termsContractParameters;
    }

    public getSalt(): BigNumber {
        return this.params.salt;
    }

    public async getSignedIssuanceCommitment(
        web3: Web3,
        signatories: Signatories = {},
    ): Promise<SignedIssuanceCommitment> {
        const debtorSignature = signatories.debtor ?
            await this.getSignature(web3, signatories.debtor) : NULL_SIGNATURE;

        const underwriterSignature = signatories.underwriter ?
            await this.getSignature(web3, signatories.underwriter) : NULL_SIGNATURE;

        return new SignedIssuanceCommitment(
            this,
            debtorSignature,
            underwriterSignature,
        );
    }

    public getHash(): string {
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

    public generateSalt(): BigNumber {
        const saltBuffer = crypto.randomBytes(32);
        const saltBufferHex = ethUtil.bufferToHex(saltBuffer);
        return new BigNumber(saltBufferHex);
    }
}

export class SignedIssuanceCommitment extends IssuanceCommitment {
    public issuerSignature: ECDSASignature;
    public underwriterSignature?: ECDSASignature;

    constructor(
        issuanceCommitment: IssuanceCommitment,
        issuerSignature: ECDSASignature,
        underwriterSignature?: ECDSASignature,
    ) {
        super(issuanceCommitment.params, issuanceCommitment.getSalt());

        this.issuerSignature = issuerSignature;
        this.underwriterSignature = underwriterSignature;
    }

    public getIssuanceAddresses(): Address[] {
        return [
            this.getVersion(),
            this.getDebtor(),
            this.getUnderwriter(),
            this.getTermsContract(),
        ];
    }

    public getIssuanceValues(): BigNumber[] {
        return [
            this.getUnderwriterRiskRating(),
            this.getSalt(),
        ];
    }

    public getUnderwriterSignature(): ECDSASignature {
        return this.underwriterSignature;
    }

    public getSignaturesS(): Bytes32[] {
        return [
            this.issuerSignature.s,
            this.underwriterSignature.s,
        ];
    }

    public getSignaturesV(): number[] {
        return [
            this.issuerSignature.v,
            this.underwriterSignature.v,
        ];
    }
}
