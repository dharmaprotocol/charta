// External libraries
import { RegisterRepaymentRunner } from "./register_repayment";
import { RegisterTermStartRunner } from "./register_term_start";
import { UnpackParametersFromBytesRunner } from "./unpack_parameters_from_bytes";
// Wrappers
import { DummyTokenContract } from "../../../../../../types/generated/dummy_token";
import { DebtKernelContract } from "../../../../../../types/generated/debt_kernel";
import { TokenTransferProxyContract } from "../../../../../../types/generated/token_transfer_proxy";
import { RepaymentRouterContract } from "../../../../../../types/generated/repayment_router";
import { TokenRegistryContract } from "../../../../../../types/generated/token_registry";
import { DebtTokenContract } from "../../../../../../types/generated/debt_token";
import { ERC721CollateralizedSimpleInterestTermsContractContract } from "../../../../../../types/generated/e_r_c721_collateralized_simple_interest_terms_contract";
import { ERC721CollateralizerContract } from "../../../../../../types/generated/e_r_c721_collateralizer";

export interface TestAccounts {
    UNDERWRITER: string;
    CONTRACT_OWNER: string;
    DEBTOR_1: string;
    CREDITOR_1: string;
    RELAYER: string;
}

export interface TestContracts {
    erc721CollateralizerContract: ERC721CollateralizerContract;
    tokenTransferProxy: TokenTransferProxyContract;
    kernel: DebtKernelContract;
    dummyREPToken: DummyTokenContract;
    dummyZRXToken: DummyTokenContract;
    erc721CollateralizedSimpleInterestTermsContract: ERC721CollateralizedSimpleInterestTermsContractContract;
    repaymentRouter: RepaymentRouterContract;
    dummyTokenRegistryContract: TokenRegistryContract;
    debtTokenContract: DebtTokenContract;
}

export { RegisterRepaymentRunner, RegisterTermStartRunner, UnpackParametersFromBytesRunner };
