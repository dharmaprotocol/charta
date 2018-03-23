import * as ABIDecoder from "abi-decoder";
import * as BigNumber from "bignumber.js";
import * as LogUtils from "./log_utils";

import { Address, Bytes32, UInt } from "../../../types/common";

export function LogSimpleInterestTermStart(
    contract: Address,
    agreementID: Bytes32,
    principalToken: Address,
    principalPlusInterest: UInt,
    amortizationUnitType: UInt,
    termLengthInAmortizationUnits: UInt,
): ABIDecoder.DecodedLog {
    return {
        address: contract,
        events: LogUtils.getParams([
            ["agreementId", agreementID],
            ["principalToken", principalToken],
            ["principalPlusInterest", principalPlusInterest],
            ["amortizationUnitType", amortizationUnitType],
            ["termLengthInAmortizationUnits", termLengthInAmortizationUnits],
        ]),
        name: "LogSimpleInterestTermStart",
    };
}
