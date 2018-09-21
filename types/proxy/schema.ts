import { BigNumber } from "bignumber.js";
import { Address, Bytes32 } from "../common";

export interface DebtOfferParams {
    kernelVersion: Address;
    creditor: Address;
    repaymentRouterVersion: Address;
    debtor: Address;
    underwriter: Address;
    termsContract: Address;
    principalToken: Address;
    relayer: Address;
    underwriterRiskRating: BigNumber;
    salt: BigNumber;
    principalAmount: BigNumber;
    underwriterFee: BigNumber;
    relayerFee: BigNumber;
    creditorFee: BigNumber;
    debtorFee: BigNumber;
    expirationTimestampInSec: BigNumber;
    termsContractParameters: Bytes32;
}
