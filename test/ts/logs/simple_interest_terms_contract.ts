import * as ABIDecoder from "abi-decoder";
import * as BigNumber from "bignumber.js";
import * as LogUtils from "./log_utils";

import { Address, Bytes32, UInt } from "../../../types/common";

export function LogRegisterRepayment(
    contract: Address,
    agreementID: Bytes32,
    payer: Address,
    beneficiary: Address,
    unitsOfRepayment: UInt,
    tokenAddress: Address,
): ABIDecoder.DecodedLog {
    return {
        address: contract,
        events: LogUtils.getParams([
            ["agreementId", agreementID],
            ["payer", payer],
            ["beneficiary", beneficiary],
            ["unitsOfRepayment", unitsOfRepayment],
            ["tokenAddress", tokenAddress],
        ]),
        name: "LogRegisterRepayment",
    };
}

export function LogSimpleInterestTermStart(
    contract: Address,
    agreementID: Bytes32,
    principalToken: Address,
    principalAmount: UInt,
    interestRate: UInt,
    amortizationUnitType: UInt,
    termLengthInAmortizationUnits: UInt,
): ABIDecoder.DecodedLog {
    return {
        address: contract,
        events: LogUtils.getParams([
            ["agreementId", agreementID],
            ["principalToken", principalToken],
            ["principalAmount", principalAmount],
            ["interestRate", interestRate],
            ["amortizationUnitType", amortizationUnitType],
            ["termLengthInAmortizationUnits", termLengthInAmortizationUnits],
        ]),
        name: "LogSimpleInterestTermStart",
    };
}
