import {
    Address,
    UInt,
    Bytes32
} from "./common";

declare type ECDSASignature = [UInt, Bytes32, Bytes32];

declare type TermsContractParameter = Address|UInt;
declare type SemanticVersion = string;

export interface DebtRegistryRowSchema {
    version: SemanticVersion;
    hash: Bytes32;
    creditor: Address;
    termsContract: Address;
    termsContractParameters: TermsContractParameter[];
}

export interface DebtIssuanceCommitment {
    version: Address;
    debtor: Address;
    underwriter?: Address;
    underwriterFee?: UInt;
    underwriterRiskRating?: UInt;
    termsContract: Address;
    termsContractParameters: string;
    debtorSignature?: ECDSASignature;
    underwriterSignature?: ECDSASignature;
}

export interface DebtOrder {
    debtIssuanceCommitment: DebtIssuanceCommitment;
    zeroExOrder: ZeroExOrder;
    relayer?: Address;
    relayerFee?: UInt;
    debtorSignature: ECDSASignature;
    makerSignature: ECDSASignature;
    relayerSignature?: ECDSASignature;
}

export interface ZeroExOrder {
    exchangeContractAddress: Address;
    maker: Address;
    taker: Address;
    feeRecipient: Address;
    makerToken: Address;
    takerToken: Address;
    makerTokenAmount: UInt;
    takerTokenAmount: UInt;
    makerFee: UInt;
    takerFee: UInt;
    expirationTimestampInSec: UInt;
    salt: UInt;
    orderHashHex?: string;
    signature?: ECDSASignature;
}
