import {BigNumber} from "bignumber.js";
import {Address, Bytes32, UInt} from "../common";

export type SemanticVersion = string;

export interface RegistryEntryParameters {
    version: SemanticVersion;
    beneficiary: Address;
    debtor: Address;
    underwriter: Address;
    underwriterRiskRating: BigNumber;
    termsContract: Address;
    termsContractParameters: Bytes32;
}
