import { BigNumber } from "bignumber.js";
import * as Units from "../../../../test_utils/units";

import {
    SimpleInterestContractTerms,
    SimpleInterestParameters,
} from "../../../../factories/terms_contract_parameters";
import { DummyTokenContract } from "../../../../../../types/generated/dummy_token";
import { SignedDebtOrder } from "../../../../../../types/kernel/debt_order";

export const DEFAULT_REGISTER_TERM_START_ARGS = {
    // Simple terms parameters.
    principalAmount: Units.ether(1),
    interestRateFixedPoint: Units.interestRateFixedPoint(2.5),
    amortizationUnitType: new BigNumber(1),
    termLengthUnits: new BigNumber(4),
    // Parameters for collateralization.
    collateralToken: "REP",
    collateralId: new BigNumber(0),
    // Misc parameters.
    debtorFee: Units.ether(0.001),
    invokedByDebtKernel: true,
    permissionToCollateralize: true,
    principalTokenInRegistry: true,
    collateralTokenInRegistry: true,
    succeeds: true,
    isCryptoKitty: false,
    reverts: false,
    termsContractParameters: (terms: SimpleInterestContractTerms) =>
        SimpleInterestParameters.pack(terms),
};

export const DEFAULT_RETURN_COLLATERAL_ARGS = {
    principalAmount: Units.ether(1),
    interestRateFixedPoint: Units.interestRateFixedPoint(2.5),
    amortizationUnitType: new BigNumber(1),
    termLengthUnits: new BigNumber(4),
    repaymentAmount: Units.ether(1.29),
    debtorFee: Units.ether(0.001),
    // Parameters for collateralization.
    collateralToken: "MET",
    collateralId: new BigNumber(0),
    repaymentToken: (principalToken: DummyTokenContract, otherToken: DummyTokenContract) =>
        principalToken,
    debtOrder: (debtOrder: SignedDebtOrder) => debtOrder,
    principalTokenInRegistry: true,
    collateralTokenInRegistry: true,
    isCryptoKitty: false,
    succeeds: true,
    reverts: false,
};

export const DEFAULT_SEIZE_COLLATERAL_ARGS = {
    principalAmount: Units.ether(1),
    interestRateFixedPoint: Units.interestRateFixedPoint(2.5),
    amortizationUnitType: new BigNumber(1),
    termLengthUnits: new BigNumber(4),
    repaymentAmount: Units.ether(1.29),
    debtorFee: Units.ether(0.001),
    // Parameters for collateralization.
    collateralToken: "MET",
    collateralId: new BigNumber(0),
    repaymentToken: (principalToken: DummyTokenContract, otherToken: DummyTokenContract) =>
        principalToken,
    debtOrder: (debtOrder: SignedDebtOrder) => debtOrder,
    principalTokenInRegistry: true,
    collateralTokenInRegistry: true,
    isCryptoKitty: false,
    secondsSinceFill: 0,
    succeeds: true,
    reverts: false,
};

export const DEFAULT_REGISTER_REPAYMENT_ARGS = {
    principalAmount: Units.ether(1),
    interestRateFixedPoint: Units.interestRateFixedPoint(2.5),
    amortizationUnitType: new BigNumber(1),
    termLengthUnits: new BigNumber(4),
    repaymentAmount: Units.ether(1.29),
    debtorFee: Units.ether(0.001),
    // Parameters for collateralization.
    collateralToken: "MET",
    collateralId: new BigNumber(0),
    repaymentToken: (principalToken: DummyTokenContract, otherToken: DummyTokenContract) =>
        principalToken,
    debtOrder: (debtOrder: SignedDebtOrder) => debtOrder,
    repayFromRouter: true,
    principalTokenInRegistry: true,
    collateralTokenInRegistry: true,
    isCryptoKitty: false,
    succeeds: true,
    reverts: false,
};

export interface RegisterRepaymentScenario {
    // The test's description
    description: string;
    // The debt order's principal amount.
    principalAmount: BigNumber;
    // The debt order's interest rate (in fixed point).
    interestRateFixedPoint: BigNumber;
    // The index for amortization type, e.g. 0 for hourly, for debt order.
    amortizationUnitType: BigNumber;
    // The number of units of the given amortization type, e.g. 4 hours, for the debt order.
    termLengthUnits: BigNumber;
    // The amount that the payer is attempting to repay.
    repaymentAmount: BigNumber;
    // The token used for repayments.
    repaymentToken: (
        principalToken: DummyTokenContract,
        otherToken: DummyTokenContract,
    ) => DummyTokenContract;
    // The debt order to use in this scenario.
    debtOrder: (debtOrder: SignedDebtOrder) => SignedDebtOrder;
    debtorFee: BigNumber;
    // Collateralization parameters.
    collateralId: BigNumber;
    collateralToken: string;
    // True if the index associated with the principal token is in the token registry
    principalTokenInRegistry: boolean;
    // True if the index associated with the collateral token is in the token registry
    collateralTokenInRegistry: boolean;
    // True if repayment gets logged.
    succeeds: boolean;
    // True if the transaction is reverted.
    reverts: boolean;
    isCryptoKitty: boolean;
    // True if the repayment makes a payment on behalf of the debtor in the scenario.
    repayFromRouter: boolean;
}

export interface ReturnCollateralScenario {
    // The test's description
    description: string;
    // The debt order's principal amount.
    principalAmount: BigNumber;
    // The debt order's interest rate (in fixed point).
    interestRateFixedPoint: BigNumber;
    // The index for amortization type, e.g. 0 for hourly, for debt order.
    amortizationUnitType: BigNumber;
    // The number of units of the given amortization type, e.g. 4 hours, for the debt order.
    termLengthUnits: BigNumber;
    // The amount that the payer is attempting to repay.
    repaymentAmount: BigNumber;
    // The token used for repayments.
    repaymentToken: (
        principalToken: DummyTokenContract,
        otherToken: DummyTokenContract,
    ) => DummyTokenContract;
    // The debt order to use in this scenario.
    debtOrder: (debtOrder: SignedDebtOrder) => SignedDebtOrder;
    debtorFee: BigNumber;
    // Collateralization parameters.
    collateralId: BigNumber;
    collateralToken: string;
    // True if the index associated with the principal token is in the token registry
    principalTokenInRegistry: boolean;
    // True if the index associated with the collateral token is in the token registry
    collateralTokenInRegistry: boolean;
    // True if repayment gets logged.
    succeeds: boolean;
    isCryptoKitty: boolean;
    // True if the transaction is reverted.
    reverts: boolean;
}

export interface SeizeCollateralScenario {
    // The test's description
    description: string;
    // The debt order's principal amount.
    principalAmount: BigNumber;
    // The debt order's interest rate (in fixed point).
    interestRateFixedPoint: BigNumber;
    // The index for amortization type, e.g. 0 for hourly, for debt order.
    amortizationUnitType: BigNumber;
    // The number of units of the given amortization type, e.g. 4 hours, for the debt order.
    termLengthUnits: BigNumber;
    // The amount that the payer is attempting to repay.
    repaymentAmount: BigNumber;
    // The token used for repayments.
    repaymentToken: (
        principalToken: DummyTokenContract,
        otherToken: DummyTokenContract,
    ) => DummyTokenContract;
    // The debt order to use in this scenario.
    debtOrder: (debtOrder: SignedDebtOrder) => SignedDebtOrder;
    debtorFee: BigNumber;
    // Collateralization parameters.
    collateralId: BigNumber;
    collateralToken: string;
    // True if the index associated with the principal token is in the token registry
    principalTokenInRegistry: boolean;
    // True if the index associated with the collateral token is in the token registry
    collateralTokenInRegistry: boolean;
    // True if repayment gets logged.
    succeeds: boolean;
    isCryptoKitty: boolean;
    secondsSinceFill: number;
    // True if the transaction is reverted.
    reverts: boolean;
}

export interface RegisterTermStartScenario {
    // The test's description
    description: string;
    // The debt order's principal amount.
    principalAmount: BigNumber;
    // The debt order's interest rate (in fixed point).
    interestRateFixedPoint: BigNumber;
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
    collateralId: BigNumber;
    collateralToken: string;
    // True if the index associated with the principal token is in the token registry
    principalTokenInRegistry: boolean;
    // True if the index associated with the collateral token is in the token registry
    collateralTokenInRegistry: boolean;
    // True if the scenario does not revert and the terms contract is started.
    succeeds: boolean;
    // True if the transaction reverts during the scenario.
    reverts: boolean;
    isCryptoKitty: boolean;
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
