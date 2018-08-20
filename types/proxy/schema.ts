import { BigNumber } from "bignumber.js";
import { Address, Bytes32 } from "../common";
import { CreditorCommitment } from "./creditor_commitment";

export interface CreditorCommitmentParams {
    kernelVersion: Address;
    repaymentVersion: Address;
    creditor: Address;
    underwriter: Address;
    termsContract: Address;
    termsContractParameters: Bytes32;
    principalToken: Address;
    principalAmount: BigNumber;
    minimumRiskRating: BigNumber;
    maximumCreditorFee: BigNumber;
    commitmentExpirationTimestampInSec: BigNumber;
    nonce: BigNumber;
}

export interface CreditOrderParams {
    creditorCommitment: CreditorCommitment;
    debtor: Address;
    relayer: Address;
    creditorFee: BigNumber;
    debtorFee: BigNumber;
    relayerFee: BigNumber;
    underwriterFee: BigNumber;
    underwriterRiskRating: BigNumber;
    orderExpirationTimestampInSec: BigNumber;
    salt: BigNumber;
}
