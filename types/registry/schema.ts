import {Address, Bytes32, UInt} from "../common";

export type TermsContractParameters = string;
export type SemanticVersion = string;

export interface RegistryEntryParameters {
    version: SemanticVersion;
    creditor: Address;
    termsContract: Address;
    termsContractParameters: TermsContractParameters;
}
