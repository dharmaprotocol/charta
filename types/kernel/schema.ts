import * as ZeroEx from "0x.js";
import {BigNumber} from "bignumber.js";
import {
    Address,
    Bytes32,
    UInt,
} from "../common";
import {SignedIssuanceCommitment} from "./issuance_commitment";

export interface IssuanceCommitmentParams {
    version: Address;
    issuer: Address;
    underwriter: Address;
    underwriterRiskRating: BigNumber;
    termsContract: Address;
    termsContractParameters: Bytes32;
    salt?: BigNumber;
}

export interface Signatories {
    underwriter?: Address;
    debtor?: Address;
}

export interface OrderParams {
    debtIssuanceCommitment: SignedIssuanceCommitment;
    zeroExOrder: ZeroEx.SignedOrder;
    underwriterFee: BigNumber;
    relayer: Address;
}

export interface SignedOrder {
    debtIssuanceCommitment: IssuanceCommitmentParams;
    zeroExOrder: ZeroEx.SignedOrder;
    relayer: Address;
    relayerFee: BigNumber;
}
