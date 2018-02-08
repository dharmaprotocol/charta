"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LogUtils = require("./log_utils");
function LogInsertEntry(contract, entry) {
    return {
        address: contract,
        events: LogUtils.getParams([
            ["issuanceHash", entry.getIssuanceHash()],
            ["beneficiary", entry.getBeneficiary()],
            ["underwriter", entry.getUnderwriter()],
            ["underwriterRiskRating", entry.getUnderwriterRiskRating()],
            ["termsContract", entry.getTermsContract()],
            ["termsContractParameters", entry.getTermsContractParameters()],
        ]),
        name: "LogInsertEntry",
    };
}
exports.LogInsertEntry = LogInsertEntry;
function LogModifyEntryBeneficiary(contract, issuanceHash, previousBeneficiary, newBeneficiary) {
    return {
        address: contract,
        events: LogUtils.getParams([
            ["issuanceHash", issuanceHash],
            ["previousBeneficiary", previousBeneficiary],
            ["newBeneficiary", newBeneficiary],
        ]),
        name: "LogModifyEntryBeneficiary",
    };
}
exports.LogModifyEntryBeneficiary = LogModifyEntryBeneficiary;
function LogAddAuthorizedInsertAgent(contract, agent) {
    return {
        address: contract,
        events: LogUtils.getParams([
            ["agent", agent],
        ]),
        name: "LogAddAuthorizedInsertAgent",
    };
}
exports.LogAddAuthorizedInsertAgent = LogAddAuthorizedInsertAgent;
function LogAddAuthorizedEditAgent(contract, agent) {
    return {
        address: contract,
        events: LogUtils.getParams([
            ["agent", agent],
        ]),
        name: "LogAddAuthorizedEditAgent",
    };
}
exports.LogAddAuthorizedEditAgent = LogAddAuthorizedEditAgent;
function LogRevokeInsertAgentAuthorization(contract, agent) {
    return {
        address: contract,
        events: LogUtils.getParams([
            ["agent", agent],
        ]),
        name: "LogRevokeInsertAgentAuthorization",
    };
}
exports.LogRevokeInsertAgentAuthorization = LogRevokeInsertAgentAuthorization;
function LogRevokeEditAgentAuthorization(contract, agent) {
    return {
        address: contract,
        events: LogUtils.getParams([
            ["agent", agent],
        ]),
        name: "LogRevokeEditAgentAuthorization",
    };
}
exports.LogRevokeEditAgentAuthorization = LogRevokeEditAgentAuthorization;
//# sourceMappingURL=debt_registry.js.map