"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LogUtils = require("./log_utils");
function LogRepayment(contract, agreementId, payer, beneficiary, amount, token) {
    return {
        address: contract,
        events: LogUtils.getParams([
            ["_agreementId", agreementId],
            ["_payer", payer],
            ["_beneficiary", beneficiary],
            ["_amount", amount],
            ["_token", token],
        ]),
        name: "LogRepayment",
    };
}
exports.LogRepayment = LogRepayment;
function LogNFTRepayment(contract, agreementId, payer, beneficiary, tokenId, token) {
    return {
        address: contract,
        events: LogUtils.getParams([
            ["_agreementId", agreementId],
            ["_payer", payer],
            ["_beneficiary", beneficiary],
            ["_tokenId", tokenId],
            ["_token", token],
        ]),
        name: "LogNFTRepayment",
    };
}
exports.LogNFTRepayment = LogNFTRepayment;
function LogError(contract, errorId, agreementId) {
    return {
        address: contract,
        events: LogUtils.getParams([
            ["_errorId", errorId],
            ["_agreementId", agreementId],
        ], ["uint8", "bytes32"]),
        name: "LogError",
    };
}
exports.LogError = LogError;
//# sourceMappingURL=repayment_router.js.map