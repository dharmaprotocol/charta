import {BigNumber} from "bignumber.js";
import {
    Address,
    Bytes32,
    UInt,
} from "../common";
import {IssuanceCommitment} from "./issuance_commitment";

export interface IssuanceCommitmentParams {
    version: Address;
    debtor: Address;
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
    version: Address;
    debtor: Address;
    debtKernelContract: Address;
    debtTokenContract: Address;
    debtIssuanceCommitment: IssuanceCommitment;
    principalAmount: BigNumber;
    principalTokenAddress: Address;
    debtorFee: BigNumber;
    creditorFee: BigNumber;
    underwriterFee: BigNumber;
    relayerFee: BigNumber;
    relayer: Address;
    expirationTimestampInSec: BigNumber;
}
