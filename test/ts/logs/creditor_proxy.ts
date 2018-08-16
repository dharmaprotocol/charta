import { Address, Bytes32, UInt } from "../../../types/common";

import * as ABIDecoder from "abi-decoder";
import { BigNumber } from "bignumber.js";
import * as LogUtils from "./log_utils";

export function LogError(contract: Address, errorId: UInt): ABIDecoder.DecodedLog {
    return {
        address: contract,
        events: LogUtils.getParams([["_errorId", errorId]], ["uint8"]),
        name: "LogError",
    };
}
