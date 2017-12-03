"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function LogInsertEntry(entryHash, creditor, termsContract, termsContractParameters) {
    return {
        args: {
            creditor,
            entryHash,
            termsContract,
            termsContractParameters,
        },
        event: "LogInsertEntry",
    };
}
exports.LogInsertEntry = LogInsertEntry;
function LogModifyEntryCreditor(entryHash, previousCreditor, newCreditor) {
    return {
        args: {
            entryHash,
            newCreditor,
            previousCreditor,
        },
        event: "LogModifyEntryCreditor",
    };
}
exports.LogModifyEntryCreditor = LogModifyEntryCreditor;
function LogAddAuthorizedInsertAgent(agent) {
    return {
        args: { agent },
        event: "LogAddAuthorizedInsertAgent",
    };
}
exports.LogAddAuthorizedInsertAgent = LogAddAuthorizedInsertAgent;
function LogAddAuthorizedEditAgent(agent) {
    return {
        args: { agent },
        event: "LogAddAuthorizedEditAgent",
    };
}
exports.LogAddAuthorizedEditAgent = LogAddAuthorizedEditAgent;
function LogRevokeInsertAgentAuthorization(agent) {
    return {
        args: { agent },
        event: "LogRevokeInsertAgentAuthorization",
    };
}
exports.LogRevokeInsertAgentAuthorization = LogRevokeInsertAgentAuthorization;
function LogRevokeEditAgentAuthorization(agent) {
    return {
        args: { agent },
        event: "LogRevokeEditAgentAuthorization",
    };
}
exports.LogRevokeEditAgentAuthorization = LogRevokeEditAgentAuthorization;
//# sourceMappingURL=logs.js.map