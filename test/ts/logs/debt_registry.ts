import * as _ from "lodash";
import * as ABIDecoder from "abi-decoder";
import * as BigNumber from "bignumber.js";
import * as LogUtils from "./log_utils";

import {
    Address,
    Bytes32,
} from "../../../types/common";
import {DebtRegistryEntry} from "../../../types/registry/entry";

export function LogInsertEntry(
    contract: Address,
    entry: DebtRegistryEntry,
): ABIDecoder.DecodedLog {
    return {
        address: contract,
        events: LogUtils.getParams([
            ["entryHash", entry.getEntryHash()],
            ["creditor", entry.getCreditor()],
            ["termsContract", entry.getTermsContract()],
            ["termsContractParameters", entry.getTermsContractParameters()]
        ]),
        name: "LogInsertEntry",
    };
}

export function LogModifyEntryCreditor(
    contract: Address,
    entryHash: Bytes32,
    previousCreditor: Address,
    newCreditor: Address,
): ABIDecoder.DecodedLog {
    return {
        address: contract,
        events: LogUtils.getParams([
            ["entryHash", entryHash],
            ["previousCreditor", previousCreditor],
            ["newCreditor", newCreditor],
        ]),
        name: "LogModifyEntryCreditor",
    };
}

export function LogAddAuthorizedInsertAgent(
    contract: Address,
    agent: Address
): ABIDecoder.DecodedLog {
    return {
        address: contract,
        events: LogUtils.getParams([
            ["agent", agent]
        ]),
        name: "LogAddAuthorizedInsertAgent",
    };
}

export function LogAddAuthorizedEditAgent(
    contract: Address,
    agent: Address
): ABIDecoder.DecodedLog {
    return {
        address: contract,
        events: LogUtils.getParams([
            ["agent", agent]
        ]),
        name: "LogAddAuthorizedEditAgent",
    };
}

export function LogRevokeInsertAgentAuthorization(
    contract: Address,
    agent: Address
): ABIDecoder.DecodedLog {
    return {
        address: contract,
        events: LogUtils.getParams([
            ["agent", agent]
        ]),
        name: "LogRevokeInsertAgentAuthorization",
    };
}

export function LogRevokeEditAgentAuthorization(
    contract: Address,
    agent: Address
): ABIDecoder.DecodedLog {
    return {
        address: contract,
        events: LogUtils.getParams([
            ["agent", agent]
        ]),
        name: "LogRevokeEditAgentAuthorization",
    };
}
