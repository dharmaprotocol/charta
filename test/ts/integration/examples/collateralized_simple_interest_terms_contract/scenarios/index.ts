import { BigNumber } from "bignumber.js";
import * as Units from "../../../../test_utils/units";

import { SimpleInterestContractTerms, SimpleInterestParameters } from "../../../../factories/terms_contract_parameters";
import { DummyTokenContract } from "../../../../../../types/generated/dummy_token";
import { SignedDebtOrder } from "../../../../../../types/kernel/debt_order";

export const DEFAULT_REGISTER_TERM_START_ARGS = {
    // Simple terms parameters.
    // Our migrations set REP up to be at index 0 of the registry.
    principalTokenIndex: new BigNumber(0),
    principalAmount: Units.ether(1),
    interestRate: new BigNumber(2500),
    amortizationUnitType: new BigNumber(1),
    termLengthUnits: new BigNumber(4),
    // Parameters for collateralization.
    collateralAmount: Units.ether(0.005),
    collateralToken: "REP",
    gracePeriodInDays: new BigNumber(20),
    collateralTokenIndexInRegistry: new BigNumber(0),
    // Misc parameters.
    collateralTokenAllowance: Units.ether(0.005),
    collateralTokenBalance: Units.ether(0.005),
    debtorFee: Units.ether(0.001),
    invokedByDebtKernel: true,
    permissionToCollateralize: true,
    succeeds: true,
    reverts: false,
    termsContractParameters: (terms: SimpleInterestContractTerms) => SimpleInterestParameters.pack(terms),
};

export const DEFAULT_REGISTER_REPAYMENT_ARGS = {
    principalTokenIndex: new BigNumber(0),
    principalAmount: Units.ether(1),
    interestRate: new BigNumber(2.5),
    amortizationUnitType: new BigNumber(1),
    termLengthUnits: new BigNumber(4),
    repaymentAmount: Units.ether(1.29),
    debtorFee: Units.ether(0.001),
    // Parameters for collateralization.
    collateralAmount: Units.ether(0.005),
    collateralToken: "REP",
    gracePeriodInDays: new BigNumber(20),
    collateralTokenIndexInRegistry: new BigNumber(0),
    // Misc parameters.
    collateralTokenAllowance: Units.ether(0.005),
    collateralTokenBalance: Units.ether(0.005),
    repaymentToken: (principalToken: DummyTokenContract, otherToken: DummyTokenContract) => principalToken,
    debtOrder: (debtOrder: SignedDebtOrder) => debtOrder,
    repayFromRouter: true,
    succeeds: true,
    reverts: false,
};

export interface RegisterRepaymentScenario {
    // The test's description
    description: string;
    // The index of the principal token in the registry.
    principalTokenIndex: BigNumber;
    // The debt order's principal amount.
    principalAmount: BigNumber;
    // The debt order's interest rate.
    interestRate: BigNumber;
    // The index for amortization type, e.g. 0 for hourly, for debt order.
    amortizationUnitType: BigNumber;
    // The number of units of the given amortization type, e.g. 4 hours, for the debt order.
    termLengthUnits: BigNumber;
    // The amount that the payer is attempting to repay.
    repaymentAmount: BigNumber;
    // The token used for repayments.
    repaymentToken: (principalToken: DummyTokenContract, otherToken: DummyTokenContract) => DummyTokenContract;
    // The debt order to use in this scenario.
    debtOrder: (debtOrder: SignedDebtOrder) => SignedDebtOrder;
    debtorFee: BigNumber;
    // Collateralization parameters.
    collateralAmount: BigNumber;
    collateralToken: string;
    gracePeriodInDays: BigNumber;
    collateralTokenIndexInRegistry: BigNumber;
    collateralTokenAllowance: BigNumber;
    collateralTokenBalance: BigNumber;
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
    // The index of the principal token in the registry.
    principalTokenIndex: BigNumber;
    // The debt order's principal amount.
    principalAmount: BigNumber;
    // The debt order's interest rate.
    interestRate: BigNumber;
    // The index for amortization type, e.g. 0 for hourly, for debt order.
    amortizationUnitType: BigNumber;
    // The number of units of the given amortization type, e.g. 4 hours, for the debt order.
    termLengthUnits: BigNumber;
    // Given some contract terms, returns a packed version to be used in the scenario.
    termsContractParameters: (terms: SimpleInterestContractTerms) => string;
    // True if the terms contract gets granted permission to call `collateralize` on the Collateralizer contract.
    permissionToCollateralize: boolean;
    debtorFee: BigNumber;
    // Collateralization parameters.
    collateralAmount: BigNumber;
    collateralToken: string;
    gracePeriodInDays: BigNumber;
    collateralTokenIndexInRegistry: BigNumber;
    collateralTokenAllowance: BigNumber;
    collateralTokenBalance: BigNumber;
    // True if the scenario does not revert and the terms contract is started.
    succeeds: boolean;
    // True if the transaction reverts during the scenario.
    reverts: boolean;
    // True if registerTermStart is called by the debt kernel upon an order being filled.
    invokedByDebtKernel: boolean;
}

export interface UnpackParametersFromBytesScenario {
    // NOTE: The test's description is constructed programmatically from the `input` field.
    // String of type bytes32 that is passed to the `UnpackParametersFromBytes` function.
    input: string;
    // The terms that are expected in the output (NOTE: not the expected output itself.)
    expectedTerms: SimpleInterestContractTerms;
}
