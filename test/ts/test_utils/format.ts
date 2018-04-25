// External Libraries
import { BigNumber } from "bignumber.js";

// Types
import { NULL_ADDRESS } from "./constants";

export const isBigNumber = (object: any) => {
    return (
        object.isBigNumber ||
        object instanceof BigNumber ||
        (object.constructor && object.constructor.name === "BigNumber")
    );
};

/**
 * Returns true if the given address string matches the format of an Ethereum address,
 * and is not the null address (I.E. 0x0000000000000000000000000000000000000000).
 *
 * @param {string} address
 * @returns {boolean}
 */
export const isNonNullAddress = (address: string) => {
    const addressRegex = new RegExp("^0x[a-fA-F0-9]{40}$");

    return address.match(addressRegex) && address !== NULL_ADDRESS;
};
