import { BigNumber } from "bignumber.js";

import { Bytes32 } from "../../../../types/common";

import { SignableMessage } from "../../../../types/kernel/signable_message";

import * as solidity from "../../../../utils/solidity";

import ethUtil = require("ethereumjs-util");

export interface TimestampedPrice {
    timestamp: BigNumber;
    price: BigNumber;
}

export interface PriceScenario {
    creditor: string;
    creditorCommitmentHash: Bytes32;
    priceFeedOperator: string;
    principalTokenPriceDataHash: Bytes32;
    collateralTokenPriceDataHash: Bytes32;
    signaturesV: number[];
    signaturesR: Bytes32[];
    signaturesS: Bytes32[];
}

export class SignablePrice extends SignableMessage {

    private readonly hash: Bytes32;

    constructor(private readonly params: TimestampedPrice) {
        super();

        const hash = solidity.SHA3([
            params.price,
            params.timestamp,
        ]);

        this.hash = ethUtil.bufferToHex(hash);
    }

    public getHash(): Bytes32 {
        return this.hash;
    }
}
