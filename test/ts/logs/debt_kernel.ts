import {Address, Bytes32, Log, UInt} from "../../../types/common";

import * as ABIDecoder from "abi-decoder";
import * as BigNumber from "bignumber.js";
import * as _ from "lodash";
import * as Web3 from "web3";
import * as LogUtils from "./log_utils";

export function LogDebtIssuance(
    contract: Address,
    issuanceHash: Bytes32,
): ABIDecoder.DecodedLog {
    return {
        address: contract,
        events: LogUtils.getParams([
            ["_issuanceHash", issuanceHash],
        ]),
        name: "LogDebtIssuance",
    };
}
