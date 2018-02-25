import * as ABIDecoder from "abi-decoder";
import * as BigNumber from "bignumber.js";
import * as LogUtils from "./log_utils";

import {
    Address,
    Bytes32,
    UInt
} from "../../../types/common";


export function CollateralLocked(
    contract: Address,
    agreementID: Bytes32,
    token: Address,
    amount: UInt
): ABIDecoder.DecodedLog {
    return {
        address: contract,
        events: LogUtils.getParams([
            ["agreementID", agreementID],
            ["token", token],
            ["amount", amount],
        ]),
        name: "CollateralLocked",
    };
}
