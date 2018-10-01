import { BigNumber } from "bignumber.js";

import { ECDSASignature } from "../../../../types/kernel/signable_message";

import { Bytes32, TxData } from "../../../../types/common";

export interface LTVCreditorCommitmentParams {
    maxLTV: BigNumber;
    priceFeedOperator: string;
    decisionEngine: string;
    collateralToken: string;
    principalToken: string;
    principalAmount: BigNumber;
    expirationTimestamp: BigNumber;
}
