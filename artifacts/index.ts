/************************************
 *  Core Dharma Protocol Contracts  *
 ************************************/
// A contract for handling the filling of debt orders.
export { DebtKernel } from "./ts/DebtKernel";
// A contract for storing detailed information about debt agreements.
export { DebtRegistry } from "./ts/DebtRegistry";
// A contract for handling loan repayments.
export { RepaymentRouter } from "./ts/RepaymentRouter";
// A contract used for transferring ERC20 tokens among various agents.
export { TokenTransferProxy } from "./ts/TokenTransferProxy";
// Stores the addresses of core Dharma Protocol Contracts.
export { ContractRegistry } from "./ts/ContractRegistry";
// A prototype for terms contracts.
export { TermsContract } from "./ts/TermsContract";
// A wrapper for the Dharma Debt Token (ERC721 standard.)
export { DebtToken } from "./ts/DebtToken";

/************************************
 *  ERC20 Simple Interest Contracts *
 ************************************/
// A contract for storing the addresses of ERC20 contracts.
export { TokenRegistry } from "./ts/TokenRegistry";
// Used to store ("lock") ERC20 collateral used in debt agreements.
export { Collateralizer } from "./ts/Collateralizer";
// A abstract terms contract for simple interest loans.
export { SimpleInterestTermsContract } from "./ts/SimpleInterestTermsContract";
// A terms contract for creating ERC20-collateralized simple interest terms debt agreements.
export {
    CollateralizedSimpleInterestTermsContract,
} from "./ts/CollateralizedSimpleInterestTermsContract";
// A wrapper for the ERC20 token standard.
export { ERC20 } from "./ts/ERC20";
// Used for creating test ERC20 tokens during development and on test networks like Kovan.
export { DummyToken } from "./ts/DummyToken";

/********************************
 *  ERC721 Collateral Contracts *
 ********************************/
// A terms contract for creating ERC721-collateralized simple interest debt agreements.
export {
    ERC721CollateralizedSimpleInterestTermsContract,
} from "./ts/ERC721CollateralizedSimpleInterestTermsContract";
// A contract to store (or "lock") ERC721 assets that are used in debt agreements.
export { ERC721Collateralizer } from "./ts/ERC721Collateralizer";
// A contract used to reference the addresses of various ERC721 contracts.
export { ERC721TokenRegistry } from "./ts/ERC721TokenRegistry";
// The ERC721 token standard.
export { ERC721Token } from "./ts/ERC721Token";
// An ERC721 contract with the ability to mint tokens -- for test purposes.
export { MintableERC721Token } from "./ts/MintableERC721Token";

/************************************
 *  Creditor-Driven Loan Contracts  *
 ************************************/
export { CreditorProxy } from "./ts/CreditorProxy";

/********************
 *  Misc. Contracts *
 ********************/
export { ERC721Receiver } from "./ts/ERC721Receiver";
export { MockERC721Receiver } from "./ts/MockERC721Receiver";
// The core CryptoKitties contract -- used for testing collateralizing CryptoKitties, which
// are a non-standard NFT.
export { KittyCore } from "./ts/KittyCore";
