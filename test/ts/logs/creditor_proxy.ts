import { Address, Bytes32, UInt } from "../../../types/common";

import * as ABIDecoder from "abi-decoder";
import * as LogUtils from "./log_utils";

export function LogCreditOrderFilled(
    contract: Address,
    creditor: Address,
    creditorNonce: UInt,
    agreementId: Bytes32,
): ABIDecoder.DecodedLog {
    return {
        address: contract,
        events: LogUtils.getParams([
            ["_creditor", creditor],
            ["_creditorNonce", creditorNonce],
            ["_agreementId", agreementId],
        ]),
        name: "LogCreditOrderFilled",
    };
}

export function LogCreditOrderCancelled(
    contract: Address,
    creditor: Address,
    creditorNonce: UInt,
): ABIDecoder.DecodedLog {
    return {
        address: contract,
        events: LogUtils.getParams([["_creditor", creditor], ["_creditorNonce", creditorNonce]]),
        name: "LogCreditOrderCancelled",
    };
}

export function LogError(
    contract: Address,
    errorId: UInt,
    creditorCommitmentHash: Bytes32,
): ABIDecoder.DecodedLog {
    return {
        address: contract,
        events: LogUtils.getParams(
            [["_errorId", errorId], ["_creditorCommitmentHash", creditorCommitmentHash]],
            ["uint8", "bytes32"],
        ),
        name: "LogError",
    };
}
