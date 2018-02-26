import { Address, Bytes32, Log, UInt } from "../../../types/common";

import * as ABIDecoder from "abi-decoder";
import { BigNumber } from "bignumber.js";
import * as _ from "lodash";
import * as Web3 from "web3";
import * as LogUtils from "./log_utils";

export function LogRepayment(
    contract: Address,
    agreementId: Bytes32,
    payer: Address,
    beneficiary: Address,
    amount: UInt,
    token: Address,
): ABIDecoder.DecodedLog {
    return {
        address: contract,
        events: LogUtils.getParams([
            ["_agreementId", agreementId],
            ["_payer", payer],
            ["_beneficiary", beneficiary],
            ["_amount", amount],
            ["_token", token],
        ]),
        name: "LogRepayment",
    };
}

export function LogError(
    contract: Address,
    errorId: UInt,
    agreementId: Bytes32,
): ABIDecoder.DecodedLog {
    return {
        address: contract,
        events: LogUtils.getParams(
            [["_errorId", errorId], ["_agreementId", agreementId]],
            ["uint8", "bytes32"],
        ),
        name: "LogError",
    };
}
