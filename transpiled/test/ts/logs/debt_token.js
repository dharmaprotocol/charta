"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LogUtils = require("./log_utils");
function LogMint(contract, to, tokenId) {
    return {
        address: contract,
        events: LogUtils.getParams([
            ["_to", to],
            ["_tokenId", tokenId],
        ]),
        name: "Mint",
    };
}
exports.LogMint = LogMint;
function LogTransfer(contract, from, to, tokenId) {
    return {
        address: contract,
        events: LogUtils.getParams([
            ["_from", from],
            ["_to", to],
            ["_tokenId", tokenId],
        ]),
        name: "Transfer",
    };
}
exports.LogTransfer = LogTransfer;
function LogApproval(contract, owner, approved, tokenId) {
    return {
        address: contract,
        events: LogUtils.getParams([["_owner", owner], ["_approved", approved], ["_tokenId", tokenId]]),
        name: "Approval",
    };
}
exports.LogApproval = LogApproval;
//# sourceMappingURL=debt_token.js.map