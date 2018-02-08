"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BigNumber = require("bignumber.js");
const _ = require("lodash");
function getParams(args, types) {
    return _.map(args, (param, i) => {
        let type;
        const [name, value] = param;
        if (types && i < types.length) {
            type = types[i];
        }
        else {
            if (typeof value === "string") {
                if (/^(0x)?[0-9a-f]{40}$/i.test(value)) {
                    // check if it has the basic requirements of an address
                    type = "address";
                }
                else if (/^(0x)?[0-9a-f]{64}$/i.test(value)) {
                    type = "bytes32";
                }
                else {
                    type = "string";
                }
            }
            else if (typeof value === "number" || value instanceof BigNumber.BigNumber) {
                type = "uint256";
            }
            else {
                throw new Error(`Could not recognize type of value ${value}`);
            }
        }
        return {
            name,
            type,
            value: value.toString(),
        };
    });
}
exports.getParams = getParams;
//# sourceMappingURL=log_utils.js.map