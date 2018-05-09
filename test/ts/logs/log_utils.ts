// External
import * as ABIDecoder from "abi-decoder";
import * as BigNumber from "bignumber.js";
import * as _ from "lodash";
import * as Web3 from "web3";

// Types
import { SolidityType } from "../../../types/common";

export function getParams(
    args: Array<[string, any]>,
    types?: string[],
): ABIDecoder.DecodedMethodParam[] {
    return _.map(args, (param: [string, any], i: number): ABIDecoder.DecodedMethodParam => {
        let type: string;

        const [name, value] = param;

        if (types && i < types.length) {
            type = types[i];
        } else {
            if (typeof value === "string") {
                if (/^(0x)?[0-9a-f]{40}$/i.test(value)) {
                    // check if it has the basic requirements of an address
                    type = "address";
                } else if (/^(0x)?[0-9a-f]{64}$/i.test(value)) {
                    type = "bytes32";
                } else {
                    type = "string";
                }
            } else if (typeof value === "number" || value instanceof BigNumber.BigNumber) {
                type = "uint256";
            } else if (typeof value === "boolean") {
                type = "bool";
            } else {
                throw new Error(`Could not recognize type of value ${value}`);
            }
        }

        return {
            name,
            type,
            value: type === "bool" ? value : value.toString(),
        };
    });
}

export function generateParam(
    name: string,
    type: SolidityType,
    value: any,
): ABIDecoder.DecodedMethodParam {
    return {
        name,
        type,
        value: type === SolidityType.boolean ? value : value.toString(),
    };
}

export async function queryLogsForEvent(
    txHash: string,
    eventName: string,
): Promise<ABIDecoder.DecodedLog | undefined> {
    const receipt = await web3.eth.getTransactionReceipt(txHash);
    return _.find(ABIDecoder.decodeLogs(receipt.logs), { name: eventName });
}
