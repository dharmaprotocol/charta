import { Address, SolidityType } from "../../../types/common";
import { BigNumber } from "bignumber.js";
import * as ABIDecoder from "abi-decoder";
import * as LogUtils from "./log_utils";

export enum EventNames {
    ContractAddressUpdated = "ContractAddressUpdated",
}

export function ContractAddressUpdated(
    contract: Address,
    contractType: BigNumber,
    oldAddress: Address,
    newAddress: Address,
): ABIDecoder.DecodedLog {
    return {
        address: contract,
        events: [
            LogUtils.generateParam("contractType", SolidityType.uint8, contractType),
            LogUtils.generateParam("oldAddress", SolidityType.address, oldAddress),
            LogUtils.generateParam("newAddress", SolidityType.address, newAddress),
        ],
        name: EventNames.ContractAddressUpdated,
    };
}
