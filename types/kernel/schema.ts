import * as ZeroEx from "0x.js";
import {BigNumber} from "bignumber.js";
import {
    Address,
    Bytes32,
    UInt,
} from "../common";

export interface ECDSASignature {
    r: string;
    s: string;
    v: number;
}

export interface IssuanceCommitmentParams {
    version: Address;
    debtor: Address;
    underwriter: Address;
    underwriterRiskRating: BigNumber;
    termsContract: Address;
    termsContractParameters: Bytes32;
    salt?: BigNumber;
}

export interface Order {
    debtIssuanceCommitment: IssuanceCommitmentParams;
    zeroExOrder: ZeroEx.SignedOrder;
    relayer: Address;
    relayerFee: UInt;
}

export interface SignedOrder {
    debtIssuanceCommitment: IssuanceCommitmentParams;
    zeroExOrder: ZeroEx.SignedOrder;
    relayer: Address;
    relayerFee: UInt;
}
