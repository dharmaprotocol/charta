type Address = string;
type UInt = number | BigNumber.BigNumber;
type ECDSASignature = [UInt, string, string];

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
