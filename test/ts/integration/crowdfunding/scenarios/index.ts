import * as _ from "lodash";
import { BigNumber } from "bignumber.js";
import * as Units from "../../../test_utils/units";

import {
    SimpleInterestContractTerms,
    SimpleInterestParameters,
} from "../../../factories/terms_contract_parameters";
import { DummyTokenContract } from "../../../../../types/generated/dummy_token";
import { SignedDebtOrder } from "../../../../../types/kernel/debt_order";

export const DEFAULT_CREATE_CROWDFUNDING_TOKEN_ARGS = {
    description: "default description",
    principalAmount: Units.ether(1),
    interestRateFixedPoint: Units.interestRateFixedPoint(2.5),
    amortizationUnitType: new BigNumber(1),
    termLengthUnits: new BigNumber(4),
    invokedByDebtKernel: true,
    principalTokenInRegistry: true,
    succeeds: true,
    reverts: false,
    termsContractParameters: (terms: SimpleInterestContractTerms) =>
        SimpleInterestParameters.pack(terms),
};

export const DEFAULT_WITHDRAW_ON_CROWDFUNDING_TOKEN_ARGS = _.merge(
    DEFAULT_CREATE_CROWDFUNDING_TOKEN_ARGS,
    {
        repaymentAmount: Units.ether(0.25),
    },
);

export interface CreateCrowdfundingTokenScenario {
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
    // True if registry tracks token with principal token's index.
    principalTokenInRegistry: boolean;
    // True if the scenario does not revert and the terms contract is started.
    succeeds: boolean;
    // True if the transaction reverts during the scenario.
    reverts: boolean;
    // True if registerTermStart is called by the debt kernel upon an order being filled.
    invokedByDebtKernel: boolean;
}

export interface WithdrawOnCrowdfundingTokenScenario extends CreateCrowdfundingTokenScenario {
    // The amount that the CrowdfundingToken issuer repays.
    repaymentAmount: BigNumber;
}
