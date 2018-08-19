import { BigNumber } from "bignumber.js";
import { Address, Bytes32, UInt } from "../common";
import { CreditorCommitment } from "./creditor_commitment";

export interface CreditorCommitmentParams {
    kernelVersion: Address;
    repaymentVersion: Address;
    creditor: Address;
    underwriter: Address;
    termsContract: Address;
    termsContractParameters: Bytes32;
    principalToken: Address;
    principalAmount: Uint;
    minimumRiskRating: Uint;
    maxumumCreditorFee: Uint;
    commitmentExpirationTimestampInSec: Uint;
    nonce: Uint;
}

export interface CreditOrderParams {
    creditorCommitment: CreditorCommitment;
    debtor: Address;
    relayer: Address;
    creditorFee: Uint;
    debtorFee: Uint;
    relayerFee: Uint;
    underwriterFee: Uint;
    underwriterRiskRating: Uint;
    orderExpirationTimestampInSec: Uint;
    salt: Uint;
}
