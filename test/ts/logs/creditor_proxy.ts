import { Address, Bytes32, UInt } from "../../../types/common";

import * as ABIDecoder from "abi-decoder";
import * as LogUtils from "./log_utils";

export function LogCreditOrderCancelled(
    contract: Address,
    creditor: Address,
    creditorCommitmentHash: Bytes32,
): ABIDecoder.DecodedLog {
    return {
        address: contract,
        events: LogUtils.getParams([
            ["_creditor", creditor],
            ["_creditorCommitmentHash", creditorCommitmentHash],
        ]),
        name: "LogCreditOrderCancelled",
    };
}

export function LogCreditOrderFilled(
    contract: Address,
    creditor: Address,
    creditorCommitmentHash: Bytes32,
    agreementId: Bytes32,
): ABIDecoder.DecodedLog {
    return {
        address: contract,
        events: LogUtils.getParams([
            ["_creditor", creditor],
            ["_creditorCommitmentHash", creditorCommitmentHash],
            ["_agreementId", agreementId],
        ]),
        name: "LogCreditOrderFilled",
    };
}

export function LogError(
    contract: Address,
    errorId: UInt,
    creditor: Address,
    creditorCommitmentHash: Bytes32,
): ABIDecoder.DecodedLog {
    return {
        address: contract,
        events: LogUtils.getParams(
            [
                ["_errorId", errorId],
                ["_creditor", creditor],
                ["_creditorCommitmentHash", creditorCommitmentHash],
            ],
            ["uint8", "bytes32"],
        ),
        name: "LogError",
    };
}
