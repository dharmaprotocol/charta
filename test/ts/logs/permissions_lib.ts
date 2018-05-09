import * as ABIDecoder from "abi-decoder";
import { generateParam } from "./log_utils";
import { Address, SolidityType } from "../../../types/common";

export enum EventNames {
    Authorized = "Authorized",
    AuthorizationRevoked = "AuthorizationRevoked",
}

export function Authorized(
    contract: Address,
    agent: Address,
    callingContext: string,
): ABIDecoder.DecodedLog {
    return {
        address: contract,
        events: [
            generateParam("agent", SolidityType.address, agent),
            generateParam("callingContext", SolidityType.string, callingContext),
        ],
        name: EventNames.Authorized,
    };
}

export function AuthorizationRevoked(
    contract: Address,
    agent: Address,
    callingContext: string,
): ABIDecoder.DecodedLog {
    return {
        address: contract,
        events: [
            generateParam("agent", SolidityType.address, agent),
            generateParam("callingContext", SolidityType.string, callingContext),
        ],
        name: EventNames.AuthorizationRevoked,
    };
}
