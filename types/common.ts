import * as BigNumber from "bignumber.js";

export type Address = string;
export type Bytes32 = string;
export type UInt = number | BigNumber.BigNumber;

export interface Log {
    event: string;
    args: object;
}
