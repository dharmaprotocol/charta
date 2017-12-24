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
    ECDSASignature,
    IssuanceCommitmentParams,
} from "./schema";

const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";
const NULL_SIGNATURE = { r: "0x0", s: "0x0", v: 0 };

export class IssuanceCommitment {
    public params: IssuanceCommitmentParams;

    constructor(params: IssuanceCommitmentParams, salt?: BigNumber) {
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

    public async getDebtorSignature(web3: Web3, signer?: Address): Promise<ECDSASignature> {
        signer = signer || this.getDebtor();
        return this.getSignature(web3, signer);
    }

    public async getUnderwriterSignature(web3: Web3, signer?: Address): Promise<ECDSASignature> {
        signer = signer || this.getUnderwriter();
        return this.getSignature(web3, signer);
    }

    public async getSignedIssuanceCommitment(
        web3: Web3,
        debtor?: Address,
        underwriter?: Address,
    ): Promise<SignedIssuanceCommitment> {
        const debtorSignature = await this.getDebtorSignature(web3, debtor);
        const underwriterSignature = this.getUnderwriter() !== NULL_ADDRESS ?
            await this.getUnderwriterSignature(web3, underwriter) : NULL_SIGNATURE;

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

    private async getSignature(web3: Web3, signer: Address): Promise<ECDSASignature> {
        const signature = web3.eth.sign(signer, this.getHash());
        const {v, r, s} = ethUtil.fromRpcSig(signature);
        return {
            r: ethUtil.bufferToHex(r),
            s: ethUtil.bufferToHex(s),
            v,
        };
    }
}

export class SignedIssuanceCommitment extends IssuanceCommitment {
    public debtorSignature: ECDSASignature;
    public underwriterSignature?: ECDSASignature;

    constructor(
        issuanceCommitment: IssuanceCommitment,
        debtorSignature: ECDSASignature,
        underwriterSignature?: ECDSASignature,
    ) {
        super(issuanceCommitment.params, issuanceCommitment.getSalt());

        this.debtorSignature = debtorSignature;
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

    public getSignaturesR(): Bytes32[] {
        return [
            this.debtorSignature.r,
            this.underwriterSignature.r,
        ];
    }

    public getSignaturesS(): Bytes32[] {
        return [
            this.debtorSignature.s,
            this.underwriterSignature.s,
        ];
    }

    public getSignaturesV(): number[] {
        return [
            this.debtorSignature.v,
            this.underwriterSignature.v,
        ];
    }
}
