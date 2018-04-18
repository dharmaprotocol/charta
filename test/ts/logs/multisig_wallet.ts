import * as ABIDecoder from "abi-decoder";
import { BigNumber } from "bignumber.js";
import * as LogUtils from "./log_utils";

import { Address, UInt } from "../../../types/common";

export function Submission(contract: Address, transactionId: UInt): ABIDecoder.DecodedLog {
    return {
        address: contract,
        events: LogUtils.getParams([["transactionId", new BigNumber(transactionId)]]),
        name: "Submission",
    };
}

export function Confirmation(
    contract: Address,
    sender: Address,
    transactionId: UInt,
): ABIDecoder.DecodedLog {
    return {
        address: contract,
        events: LogUtils.getParams([
            ["sender", sender],
            ["transactionId", new BigNumber(transactionId)],
        ]),
        name: "Confirmation",
    };
}

export function Execution(contract: Address, transactionId: UInt): ABIDecoder.DecodedLog {
    return {
        address: contract,
        events: LogUtils.getParams([["transactionId", new BigNumber(transactionId)]]),
        name: "Execution",
    };
}
