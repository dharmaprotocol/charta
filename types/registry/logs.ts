import {
    Address,
    Bytes32,
    Log,
} from "../common";

export function LogInsertEntry(
    entryHash: Bytes32,
    creditor: Address,
    termsContract: Address,
    termsContractParameters: string,
): Log {
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

export function LogModifyEntryCreditor(
    entryHash: Bytes32,
    previousCreditor: Address,
    newCreditor: Address,
): Log {
    return {
        args: {
            entryHash,
            newCreditor,
            previousCreditor,
        },
        event: "LogModifyEntryCreditor",
    };
}

export function LogAddAuthorizedInsertAgent(agent: Address): Log {
    return {
        args: {agent},
        event: "LogAddAuthorizedInsertAgent",
    };
}

export function LogAddAuthorizedEditAgent(agent: Address): Log {
    return {
        args: {agent},
        event: "LogAddAuthorizedEditAgent",
    };
}

export function LogRevokeInsertAgentAuthorization(agent: Address): Log {
    return {
        args: {agent},
        event: "LogRevokeInsertAgentAuthorization",
    };
}

export function LogRevokeEditAgentAuthorization(agent: Address): Log {
    return {
        args: {agent},
        event: "LogRevokeEditAgentAuthorization",
    };
}
