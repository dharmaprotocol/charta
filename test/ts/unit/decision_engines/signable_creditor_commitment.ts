import { Bytes32 } from "../../../../types/common";

import { SignableMessage } from "../../../../types/kernel/signable_message";

import { LTVCreditorCommitmentParams } from "./ltv_creditor_commitment_params";

import * as solidity from "../../../../utils/solidity";

import ethUtil = require("ethereumjs-util");

export class SignableCreditorCommitment extends SignableMessage {

    public static getHashForParams(params: LTVCreditorCommitmentParams): Bytes32 {
        const hash = solidity.SHA3([
            params.maxLTV,
            params.priceFeedOperator,
            params.principalToken,
            params.collateralToken,
            params.principalAmount,
            params.expirationTimestamp,
            params.decisionEngine,
        ]);
        return ethUtil.bufferToHex(hash);
    }

    constructor(private readonly hash: Bytes32) {
        super();
    }

    public getHash(): Bytes32 {
        return this.hash;
    }
}
