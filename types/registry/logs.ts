import * as _ from "lodash";
import * as ABIDecoder from "abi-decoder";
import * as BigNumber from "bignumber.js";
import {
    Address,
    Bytes32,
} from "../common";

export function LogInsertEntry(
    contract: Address,
    entryHash: Bytes32,
    creditor: Address,
    termsContract: Address,
    termsContractParameters: string,
): ABIDecoder.DecodedLog {
    return {
        address: contract,
        events: _getParams([
            ["entryHash", entryHash],
            ["creditor", creditor],
            ["termsContract", termsContract],
            ["termsContractParameters", termsContractParameters]
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
        events: _getParams([
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
        events: _getParams([
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
        events: _getParams([
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
        events: _getParams([
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
        events: _getParams([
            ["agent", agent]
        ]),
        name: "LogRevokeEditAgentAuthorization",
    };
}

function _getParams(args: [string, any][]): ABIDecoder.DecodedMethodParam[] {
    return _.map(args, (param: [string, any]): ABIDecoder.DecodedMethodParam => {
        let type: string;

        const [name, value] = param;

        if (typeof value == "string") {
            if (/^(0x)?[0-9a-f]{40}$/i.test(value)) {
                // check if it has the basic requirements of an address
                type = "address";
            } else if (/^(0x)?[0-9a-f]{64}$/i.test(value)) {
                type = "bytes32";
            } else {
                type = "string";
            }
        } else if (typeof value == "number" || value instanceof BigNumber.BigNumber) {
            type = "uint256";
        } else {
            throw `Could not recognize type of value ${value}`;
        }

        return {
            name,
            type,
            value: value.toString(),
        };
    });
}
