import * as _ from "lodash";
import * as ABIDecoder from "abi-decoder";
import * as BigNumber from "bignumber.js";

export function getParams(args: [string, any][]): ABIDecoder.DecodedMethodParam[] {
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
