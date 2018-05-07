import { Address, UInt } from "../../../types/common";
import * as ABIDecoder from "abi-decoder";
import * as LogUtils from "./log_utils";

export function ContractAddressUpdated(
    contract: Address,
    contractType: UInt,
    oldAddress: Address,
    newAddress: Address,
): ABIDecoder.DecodedLog {
    return {
        address: contract,
        events: LogUtils.getParams([
            ["contractType", contractType],
            ["oldAddress", oldAddress],
            ["newAddress", newAddress],
        ]),
        name: "ContractAddressUpdated",
    };
}
