import * as ABIDecoder from "abi-decoder";
import * as LogUtils from "./log_utils";

import { Address } from "../../../types/common";

export function Authorized(contract: Address, agent: Address): ABIDecoder.DecodedLog {
    return {
        address: contract,
        events: LogUtils.getParams([["agent", agent]]),
        name: "Authorized",
    };
}

export function AuthorizationRevoked(contract: Address, agent: Address): ABIDecoder.DecodedLog {
    return {
        address: contract,
        events: LogUtils.getParams([["agent", agent]]),
        name: "AuthorizationRevoked",
    };
}
