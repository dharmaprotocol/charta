import { BigNumber } from "bignumber.js";
import * as Web3 from "web3";

export function ether(amount: number): BigNumber {
    const weiString = web3.toWei(amount, "ether");
    return new BigNumber(weiString);
}

export function percent(amount: number): BigNumber {
    return new BigNumber(amount).div(100).times(10 ** 5);
}
