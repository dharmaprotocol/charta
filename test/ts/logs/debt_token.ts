import { Address, Log, UInt } from "../../../types/common";

import * as ABIDecoder from "abi-decoder";
import * as BigNumber from "bignumber.js";
import * as LogUtils from "./log_utils";

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

export function LogApprovalForAll(
    contract: Address,
    owner: Address,
    operator: Address,
    approved: boolean,
): ABIDecoder.DecodedLog {
    return {
        address: contract,
        events: LogUtils.getParams([
            ["_owner", owner],
            ["_operator", operator],
            ["_approved", approved],
        ]),
        name: "ApprovalForAll",
    };
}
