import {Order, ZeroEx} from "0x.js";
import {BigNumber} from "bignumber.js";
import ethUtil = require("ethereumjs-util");
import * as Web3 from "web3";

import {IssuanceCommitment} from "./issuance_commitment";
import {OrderParams} from "./schema";
import {ECDSASignature, SignableMessage} from "./signable_message";

import {
    Address,
    Bytes32,
} from "../common";

import * as solidity from "../../utils/solidity";

const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";
const NULL_SIGNATURE = { r: "0x0", s: "0x0", v: 0 };

export interface DebtOrderSignatories {
    creditor?: Address;
    debtor?: Address;
    underwriter?: Address;
}

export class DebtOrder extends SignableMessage {
    public params: OrderParams;

    constructor(params: OrderParams) {
        super();
        this.params = params;
    }

    public getVersion(): Address {
        return this.params.version;
    }

    public getIssuanceCommitment(): IssuanceCommitment {
        return this.params.debtIssuanceCommitment;
    }

    public getDebtor(): Address {
        return this.params.debtor;
    }

    public getDebtKernelContract(): Address {
        return this.params.debtKernelContract;
    }

    public getDebtTokenContract(): Address {
        return this.params.debtTokenContract;
    }

    public getPrincipalAmount(): BigNumber {
        return this.params.principalAmount;
    }

    public getPrincipalTokenAddress(): Address {
        return this.params.principalTokenAddress;
    }

    public getRelayer(): Address {
        return this.params.relayer;
    }

    public getDebtorFee(): BigNumber {
        return this.params.debtorFee;
    }

    public getCreditorFee(): BigNumber {
        return this.params.creditorFee;
    }

    public getUnderwriterFee(): BigNumber {
        return this.params.underwriterFee;
    }

    public getExpiration(): BigNumber {
        return this.params.expirationTimestampInSec;
    }

    public getRelayerFee(): BigNumber {
        return this.params.relayerFee;
    }

    public getDebtOrderHash(): Bytes32 {
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

    public getUnderwriterCommitmentHash(): Bytes32 {
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

    public getHash(): Bytes32 {
        return this.getDebtOrderHash();
    }

    public async getSignedDebtOrder(
        web3: Web3,
        creditor: Address,
        signatories: DebtOrderSignatories,
    ): Promise<SignedDebtOrder> {
        const creditorSignature = signatories.creditor ?
            await this.getSignature(web3, signatories.creditor,
                this.getDebtOrderHash()) : NULL_SIGNATURE;

        const debtorSignature = signatories.debtor ?
            await this.getSignature(web3, signatories.debtor, this.getDebtOrderHash()) : NULL_SIGNATURE;

        const underwriterSignature = signatories.underwriter ?
            await this.getSignature(web3, signatories.underwriter,
                this.getUnderwriterCommitmentHash()) : NULL_SIGNATURE;

        return new SignedDebtOrder(this, creditor,
            creditorSignature, debtorSignature, underwriterSignature);
    }
}

export class SignedDebtOrder extends DebtOrder {
    private creditor: Address;

    private creditorSignature: ECDSASignature;
    private debtorSignature: ECDSASignature;
    private underwriterSignature: ECDSASignature;

    constructor(
        debtOrder: DebtOrder,
        creditor: Address,
        creditorSignature: ECDSASignature,
        debtorSignature: ECDSASignature,
        underwriterSignature: ECDSASignature,
    ) {
        super(debtOrder.params);
        this.creditor = creditor;
        this.creditorSignature = creditorSignature;
        this.debtorSignature = debtorSignature;
        this.underwriterSignature = underwriterSignature;
    }

    public getCreditor(): Address {
        return this.creditor;
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
            this.getIssuanceCommitment().getVersion(),
            this.getDebtor(),
            this.getIssuanceCommitment().getUnderwriter(),
            this.getIssuanceCommitment().getTermsContract(),
            this.getPrincipalTokenAddress(),
            this.getRelayer(),
        ];
    }

    public getOrderValues(): BigNumber[] {
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

    public getOrderBytes32(): Bytes32[] {
        return [
            this.getIssuanceCommitment().getTermsContractParameters(),
        ];
    }

    public getSignaturesR(): Bytes32[] {
        return [
            this.debtorSignature.r,
            this.creditorSignature.r,
            this.underwriterSignature.r,
        ];
    }

    public getSignaturesS(): Bytes32[] {
        return [
            this.debtorSignature.s,
            this.creditorSignature.s,
            this.underwriterSignature.s,
        ];
    }

    public getSignaturesV(): number[] {
        return [
            this.debtorSignature.v,
            this.creditorSignature.v,
            this.underwriterSignature.v,
        ];
    }
}
