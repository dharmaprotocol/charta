import {BigNumber} from "bignumber.js";
import * as Web3 from "web3";
import {ZeroEx, Order} from "0x.js";
import {OrderParams} from "./schema";
import {IssuanceCommitment} from "./issuance_commitment";
import {
    Address,
    Bytes32,
} from "../common";
import {ECDSASignature, SignableMessage} from "./signable_message";
import * as solidity from "../../utils/solidity";
import ethUtil = require("ethereumjs-util");

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

    public getIssuanceCommitment(): IssuanceCommitment {
        return this.params.debtIssuanceCommitment;
    }

    public getZeroExExchangeContract(): Address {
        return this.params.zeroExExchangeContract;
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

    public getPrincipleAmount(): BigNumber {
        return this.params.principleAmount;
    }

    public getPrincipleTokenAddress(): Address {
        return this.params.principleTokenAddress;
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
        return this.getDebtorFee().plus(this.getCreditorFee()).minus(this.getUnderwriterFee());
    }

    public getDebtorSignatureHash(): Bytes32 {
        const hash = solidity.SHA3([
            this.getIssuanceCommitment().getHash(),
            this.getUnderwriterFee(),
            this.getZeroExExchangeContract(),
            this.getPrincipleAmount(),
            this.getPrincipleTokenAddress(),
            this.getDebtorFee(),
            this.getCreditorFee(),
            this.getRelayer(),
            this.getExpiration(),
        ]);

        const hashHex = ethUtil.bufferToHex(hash);
        return hashHex;
    }

    public getUnderwriterSignatureHash(): Bytes32 {
        const hash = solidity.SHA3([
            this.getIssuanceCommitment().getHash(),
            this.getUnderwriterFee(),
            this.getPrincipleAmount(),
            this.getPrincipleTokenAddress(),
        ]);

        const hashHex = ethUtil.bufferToHex(hash);
        return hashHex;
    }

    public getCreditorSignatureHash(creditor: Address, zeroExOrder?: Order): Bytes32 {
        zeroExOrder = zeroExOrder || {
            exchangeContractAddress: this.getZeroExExchangeContract(),
        	expirationUnixTimestampSec: this.getExpiration(),
        	feeRecipient: NULL_ADDRESS,
        	maker: creditor,
        	makerFee: new BigNumber(0),
        	makerTokenAddress: this.getPrincipleTokenAddress(),
        	makerTokenAmount: this.getPrincipleAmount().plus(this.getCreditorFee()),
        	salt: new BigNumber(this.getIssuanceCommitment().getHash()),
        	taker: NULL_ADDRESS,
        	takerFee: new BigNumber(0),
        	takerTokenAddress: this.getDebtTokenContract(),
        	takerTokenAmount: new BigNumber(1),
        }

        return ZeroEx.getOrderHashHex(zeroExOrder);
    }

    public getHash(): Bytes32 {
        return this.getDebtorSignatureHash();
    }

    public async getSignedDebtOrder(web3: Web3, signatories: DebtOrderSignatories): Promise<SignedDebtOrder> {
        const creditorSignature = signatories.creditor ?
            await this.getSignature(web3, signatories.creditor,
                this.getCreditorSignatureHash(signatories.creditor)) : NULL_SIGNATURE;

        const debtorSignature = signatories.debtor ?
            await this.getSignature(web3, signatories.debtor, this.getDebtorSignatureHash()) : NULL_SIGNATURE;

        const underwriterSignature = signatories.underwriter ?
            await this.getSignature(web3, signatories.underwriter,
                this.getUnderwriterSignatureHash()) : NULL_SIGNATURE;

        return new SignedDebtOrder(this, signatories.creditor,
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

    public getUnderwriterSignature(): ECDSASignature {
        return this.underwriterSignature;
    }

    public getOrderAddresses(): Address[] {
        return [
            this.getDebtor(),
            this.getIssuanceCommitment().getVersion(),
            this.getIssuanceCommitment().getUnderwriter(),
            this.getIssuanceCommitment().getTermsContract(),
            this.getZeroExExchangeContract(),
            this.getCreditor(),
            this.getPrincipleTokenAddress(),
            this.getRelayer(),
        ];
    }

    public getOrderValues(): BigNumber[] {
        return [
            this.getIssuanceCommitment().getUnderwriterRiskRating(),
            this.getIssuanceCommitment().getSalt(),
            this.getUnderwriterFee(),
            this.getPrincipleAmount(),
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
            this.underwriterSignature.r,
            this.debtorSignature.r,
            this.creditorSignature.r,
        ];
    }

    public getSignaturesS(): Bytes32[] {
        return [
            this.underwriterSignature.s,
            this.debtorSignature.s,
            this.creditorSignature.s,
        ];
    }

    public getSignaturesV(): number[] {
        return [
            this.underwriterSignature.v,
            this.debtorSignature.v,
            this.creditorSignature.v,
        ];
    }
}
