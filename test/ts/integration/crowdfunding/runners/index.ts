// External libraries
export { CreateCrowdfundingTokenRunner } from "./create_crowdfunding_token";
export { WithdrawOnCrowdfundingTokenRunner } from "./withdraw_on_crowdfunding_token";

// Wrappers
import { DummyTokenContract } from "../../../../../types/generated/dummy_token";
import { DebtKernelContract } from "../../../../../types/generated/debt_kernel";
import { TokenTransferProxyContract } from "../../../../../types/generated/token_transfer_proxy";
import { SimpleInterestTermsContractContract } from "../../../../../types/generated/simple_interest_terms_contract";
import { RepaymentRouterContract } from "../../../../../types/generated/repayment_router";
import { TokenRegistryContract } from "../../../../../types/generated/token_registry";
import { DebtTokenContract } from "../../../../../types/generated/debt_token";
import { CrowdfundingTokenRegistryContract } from "../../../../../types/generated/crowdfunding_token_registry";

export interface TestAccounts {
    CONTRACT_OWNER: string;
    CREDITOR_1: string;
    DEBTOR_1: string;
    RELAYER: string;
    UNDERWRITER: string;
}

export interface TestContracts {
    crowdfundingTokenRegistry: CrowdfundingTokenRegistryContract;
    debtTokenContract: DebtTokenContract;
    dummyREPToken: DummyTokenContract;
    dummyTokenRegistryContract: TokenRegistryContract;
    kernel: DebtKernelContract;
    repaymentRouter: RepaymentRouterContract;
    simpleInterestTermsContract: SimpleInterestTermsContractContract;
    tokenTransferProxy: TokenTransferProxyContract;
}
