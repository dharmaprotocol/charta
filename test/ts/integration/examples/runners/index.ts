// External libraries
import { BigNumber } from "bignumber.js";
import { RegisterRepaymentRunner } from "./register_repayment";
import { RegisterTermStartRunner } from "./register_term_start";

// Wrappers
import { SignedDebtOrder } from "../../../../../types/kernel/debt_order";
import { DummyTokenContract } from "../../../../../types/generated/dummy_token";
import { DebtKernelContract } from "../../../../../types/generated/debt_kernel";
import { TokenTransferProxyContract } from "../../../../../types/generated/token_transfer_proxy";
import { SimpleInterestTermsContractContract } from "../../../../../types/generated/simple_interest_terms_contract";
import {RepaymentRouterContract} from "../../../../../types/generated/repayment_router";
import { TokenRegistryContract } from "../../../../../types/generated/token_registry";

export interface TestAccounts {
    UNDERWRITER: string;
    CONTRACT_OWNER: string;
    DEBTOR_1: string;
    CREDITOR_1: string;
}

export interface TestContracts {
    tokenTransferProxy: TokenTransferProxyContract;
    kernel: DebtKernelContract;
    dummyREPToken: DummyTokenContract;
    simpleInterestTermsContract: SimpleInterestTermsContractContract;
    repaymentRouter: RepaymentRouterContract;
    dummyTokenRegistryContract: TokenRegistryContract;
}

export interface TermsParams {
    AGREEMENT_ID: string;
    PRINCIPAL_AMOUNT: BigNumber;
    INTEREST_RATE: BigNumber;
    AMORTIZATION_UNIT_TYPE: BigNumber;
    TERM_LENGTH_UNITS: BigNumber;
}

export interface RegisterRepaymentScenario {
    // The test's description
    description: string;
    // The amount that the payer is attempting to repay.
    repaymentAmount: BigNumber;
    // The principal token used in this scenario.
    principalToken: (principalToken: DummyTokenContract) => DummyTokenContract;
    // The token used for repayments.
    repaymentToken: (principalToken: DummyTokenContract, otherToken: DummyTokenContract) => DummyTokenContract;
    // The debt order to use in this scenario.
    debtOrder: (debtOrder: SignedDebtOrder) => SignedDebtOrder;
    // True if repayment gets logged.
    succeeds: boolean;
    // True if the transaction is reverted.
    reverts: boolean;
    // True if the repayment makes a payment on behalf of the debtor in the scenario.
    repayFromRouter: boolean;
}

export interface RegisterTermStartScenario {
    // The test's description
    description: string;
    // True if the scenario does not revert and the terms contract is started.
    succeeds: boolean;
    // True if registerTermStart is called by the debt kernel upon an order being filled.
    invokedByDebtKernel: boolean;
}

export { RegisterRepaymentRunner, RegisterTermStartRunner };
