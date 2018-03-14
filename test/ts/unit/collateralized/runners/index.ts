// Contract Wrappers
import { DummyCollateralizedContractContract } from "types/generated/dummy_collateralized_contract";
import { MockDebtRegistryContract } from "types/generated/mock_debt_registry";
import { MockERC20TokenContract } from "types/generated/mock_e_r_c20_token";
import { MockTokenRegistryContract } from "types/generated/mock_token_registry";

import { RegisterTermStartRunner } from "./register_term_start";
import { SeizeCollateralRunner } from "./seize_collateral";

import { BigNumber } from "bignumber.js";

export interface TestContracts {
    dummyCollateralizedContract: DummyCollateralizedContractContract;
    mockDebtRegistry: MockDebtRegistryContract;
    mockCollateralToken: MockERC20TokenContract;
    mockTokenRegistry: MockTokenRegistryContract;
}

export interface TestAccounts {
    BENEFICIARY_1: string;
    BENEFICIARY_2: string;
    COLLATERALIZER: string;
    MOCK_DEBT_KERNEL_ADDRESS: string;
    ATTACKER: string;
}

export interface ExpectedRepaymentValueDate {
    timestamp: number;
    expectedRepaymentValue: BigNumber;
}

export interface RegisterTermStartScenario {
    // Description string
    description: string;
    // Arbitrary agreement id used in this scenario
    agreementId: string;
    // Specifies whether the terms contract associated with
    // the given issuance is the collateralized contract
    termsContract: (collateralizedContract: string, attacker: string) => string;
    // The tightly-packed terms contract parameters
    termsContractParameters: string;
    // Specifies whether the transaction is coming from the
    // DebtKernel or an attacker
    from: (kernel: string, attacker: string) => string;
    // Specifies the balance the collateralizer has in the expected collateral token
    collateralTokenBalance: BigNumber;
    // Specifies the allowance granted by the collateralizer in collateral token to the contract
    collateralTokenAllowance: BigNumber;
    // Specifies the index of the specified collateral token in the token registry
    collateralTokenIndexInRegistry: BigNumber;
    // Specifies whether the call is expected to succeed.
    succeeds: boolean;
    // Specifies the expected token to be used as collateral
    expectedCollateralToken?: string;
    // Specifies the expected collateral amount
    expectedCollateralAmount?: BigNumber;
    // Specifies the expected grace period that should be adhered to
    expectedGracePeriodInDays?: BigNumber;
}

export interface SeizeCollateralScenario {
    // Description string
    description: string;
    // Arbitrary agreement id used in this scenario
    agreementId: string;
    // The amount collateralized
    collateralAmount: BigNumber;
    // The grace period, encoded in days
    gracePeriodInDays: BigNumber;
    // Current value repaid to date
    valueRepaidToDate: BigNumber;
    // Schedule for expected repayment value
    expectedRepaymentValueSchedule: ExpectedRepaymentValueDate[];
    // Specifies whether the debt is currently owned by the
    // original beneficiary or some other party
    beneficiary: (originalBeneficiary: string, other: string) => string;
    // Specifies whether the transaction is coming from the original
    // beneficiary or someone else
    from: (originalBeneficiary: string, other: string) => string;
    // Specifies whether the call is expected to succeed.
    succeeds: boolean;
}

export { RegisterTermStartRunner, SeizeCollateralRunner };
