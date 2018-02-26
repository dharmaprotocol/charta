import { Address, Log, UInt } from "../../../types/common";

import * as ABIDecoder from "abi-decoder";
import * as BigNumber from "bignumber.js";
import * as _ from "lodash";
import * as Web3 from "web3";
import * as LogUtils from "./log_utils";

export function LogMint(
    contract: Address,
    to: Address,
    tokenId: BigNumber.BigNumber,
): ABIDecoder.DecodedLog {
    return {
        address: contract,
        events: LogUtils.getParams([["_to", to], ["_tokenId", tokenId]]),
        name: "Mint",
    };
}

export function LogTransfer(
    contract: Address,
    from: Address,
    to: Address,
    tokenId: BigNumber.BigNumber,
): ABIDecoder.DecodedLog {
    return {
        address: contract,
        events: LogUtils.getParams([["_from", from], ["_to", to], ["_tokenId", tokenId]]),
        name: "Transfer",
    };
}

export function LogApproval(
    contract: Address,
    owner: Address,
    approved: Address,
    tokenId: UInt,
): ABIDecoder.DecodedLog {
    return {
        address: contract,
        events: LogUtils.getParams([
            ["_owner", owner],
            ["_approved", approved],
            ["_tokenId", tokenId],
        ]),
        name: "Approval",
    };
}
