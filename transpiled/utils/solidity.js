"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const BN = require("bn.js");
const ethUtil = require("ethereumjs-util");
const ABI = require("ethereumjs-abi");
const BigNumber = require("bignumber.js");
/**
 * Deterministically hashes arbitrary arguments in a tightly-packed
 * format that matches the scheme used by Solidity to compute hashes.
 *
 * Code borrowed from the 0x Project contracts repo:
 * https://github.com/0xProject/contracts/blob/master/util/crypto.ts
 *
 * We convert types from JS to Solidity as follows:
 * BigNumber -> uint256
 * number -> uint8
 * string -> string
 * boolean -> bool
 * valid Ethereum address -> address
 *
 */
function SHA3(args) {
    const argTypes = [];
    _.each(args, (arg, i) => {
        const isNumber = _.isFinite(arg);
        if (isNumber) {
            argTypes.push('uint8');
        }
        else if (arg instanceof BigNumber.BigNumber) {
            argTypes.push('uint256');
            args[i] = new BN(arg.toString(10), 10);
        }
        else if (ethUtil.isValidAddress(arg)) {
            argTypes.push('address');
        }
        else if (_.isString(arg)) {
            if (arg.length >= 2 && arg.substr(0, 2) == "0x") {
                argTypes.push('bytes32');
            }
            else {
                argTypes.push('string');
            }
        }
        else if (_.isBoolean(arg)) {
            argTypes.push('bool');
        }
        else {
            throw new Error(`Unable to guess arg type: ${arg}`);
        }
    });
    const hash = ABI.soliditySHA3(argTypes, args);
    return hash;
}
exports.SHA3 = SHA3;
;
//# sourceMappingURL=solidity.js.map