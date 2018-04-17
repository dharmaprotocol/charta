import { Address, Bytes32, UInt } from "../../../types/common";

import * as ABIDecoder from "abi-decoder";
import { BigNumber } from "bignumber.js";
import * as LogUtils from "./log_utils";

export function LogDebtIssuance(contract: Address, issuanceHash: Bytes32): ABIDecoder.DecodedLog {
    return {
        address: contract,
        events: LogUtils.getParams([["_issuanceHash", issuanceHash]]),
        name: "LogDebtIssuance",
    };
}

export function LogTermBegin(
    contract: Address,
    issuanceHash: Bytes32,
    unixTimestampSec: number,
    blockNumber: number,
): ABIDecoder.DecodedLog {
    return {
        address: contract,
        events: LogUtils.getParams([
            ["_issuanceHash", issuanceHash],
            ["_unixTimestampSec", new BigNumber(unixTimestampSec)],
            ["_blockNumber", new BigNumber(blockNumber)],
        ]),
        name: "LogTermBegin",
    };
}

export function LogDebtOrderFilled(
    contract: Address,
    issuanceHash: Bytes32,
    principal: BigNumber,
    principalToken: Address,
    underwriter: Address,
    underwriterFee: BigNumber,
    relayer: Address,
    relayerFee: BigNumber,
): ABIDecoder.DecodedLog {
    return {
        address: contract,
        events: LogUtils.getParams([
            ["_issuanceHash", issuanceHash],
            ["_principal", principal],
            ["_principalToken", principalToken],
            ["_underwriter", underwriter],
            ["_underwriterFee", underwriterFee],
            ["_relayer", relayer],
            ["_relayerFee", relayerFee],
        ]),
        name: "LogDebtOrderFilled",
    };
}

export function LogIssuanceCancelled(
    contract: Address,
    issuanceHash: Bytes32,
    cancelledBy: Address,
): ABIDecoder.DecodedLog {
    return {
        address: contract,
        events: LogUtils.getParams([
            ["_issuanceHash", issuanceHash],
            ["_cancelledBy", cancelledBy],
        ]),
        name: "LogIssuanceCancelled",
    };
}

export function LogDebtOrderCancelled(
    contract: Address,
    debtOrderHash: Bytes32,
    cancelledBy: Address,
): ABIDecoder.DecodedLog {
    return {
        address: contract,
        events: LogUtils.getParams([
            ["_debtOrderHash", debtOrderHash],
            ["_cancelledBy", cancelledBy],
        ]),
        name: "LogDebtOrderCancelled",
    };
}

export function LogError(
    contract: Address,
    errorId: UInt,
    orderHash: Bytes32,
): ABIDecoder.DecodedLog {
    return {
        address: contract,
        events: LogUtils.getParams(
            [["_errorId", errorId], ["_orderHash", orderHash]],
            ["uint8", "bytes32"],
        ),
        name: "LogError",
    };
}
