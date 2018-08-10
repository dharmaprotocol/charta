import { BigNumber } from "bignumber.js";

export const INVALID_OPCODE = "invalid opcode";
export const REVERT_ERROR = "revert";
export const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";
export const UNLIMITED_PROXY_TOKEN_TRANSFER_ALLOWANCE = new BigNumber(2).pow(256).sub(1);
