"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bignumber_js_1 = require("bignumber.js");
const LogUtils = require("./log_utils");
function LogDebtIssuance(contract, issuanceHash) {
    return {
        address: contract,
        events: LogUtils.getParams([
            ["_issuanceHash", issuanceHash],
        ]),
        name: "LogDebtIssuance",
    };
}
exports.LogDebtIssuance = LogDebtIssuance;
function LogTermBegin(contract, issuanceHash, unixTimestampSec, blockNumber) {
    return {
        address: contract,
        events: LogUtils.getParams([
            ["_issuanceHash", issuanceHash],
            ["_unixTimestampSec", new bignumber_js_1.BigNumber(unixTimestampSec)],
            ["_blockNumber", new bignumber_js_1.BigNumber(blockNumber)],
        ]),
        name: "LogTermBegin",
    };
}
exports.LogTermBegin = LogTermBegin;
function LogDebtOrderFilled(contract, issuanceHash, principal, principalToken, underwriter, underwriterFee, relayer, relayerFee) {
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
exports.LogDebtOrderFilled = LogDebtOrderFilled;
function LogIssuanceCancelled(contract, issuanceHash, cancelledBy) {
    return {
        address: contract,
        events: LogUtils.getParams([
            ["_issuanceHash", issuanceHash],
            ["_cancelledBy", cancelledBy],
        ]),
        name: "LogIssuanceCancelled",
    };
}
exports.LogIssuanceCancelled = LogIssuanceCancelled;
function LogDebtOrderCancelled(contract, debtOrderHash, cancelledBy) {
    return {
        address: contract,
        events: LogUtils.getParams([
            ["_debtOrderHash", debtOrderHash],
            ["_cancelledBy", cancelledBy],
        ]),
        name: "LogDebtOrderCancelled",
    };
}
exports.LogDebtOrderCancelled = LogDebtOrderCancelled;
function LogError(contract, errorId, orderHash) {
    return {
        address: contract,
        events: LogUtils.getParams([
            ["_errorId", errorId],
            ["_orderHash", orderHash],
        ], ["uint8", "bytes32"]),
        name: "LogError",
    };
}
exports.LogError = LogError;
//# sourceMappingURL=debt_kernel.js.map