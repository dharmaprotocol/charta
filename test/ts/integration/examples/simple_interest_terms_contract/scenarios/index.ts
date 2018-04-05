import { BigNumber } from "bignumber.js";
import * as Units from "../../../../test_utils/units";

import { SimpleInterestContractTerms, SimpleInterestParameters } from "../../../../factories/terms_contract_parameters";
import { DummyTokenContract } from "../../../../../../types/generated/dummy_token";
import { SignedDebtOrder } from "../../../../../../types/kernel/debt_order";

export const DEFAULT_REGISTER_TERM_START_ARGS = {
    principalTokenIndex: new BigNumber(0),
    principalAmount: Units.ether(1),
    interestRate: Units.percent(2.5),
    amortizationUnitType: new BigNumber(1),
    termLengthUnits: new BigNumber(4),
    invokedByDebtKernel: true,
    succeeds: true,
    reverts: false,
    termsContractParameters: (terms: SimpleInterestContractTerms) => SimpleInterestParameters.pack(terms),
};

export const DEFAULT_REGISTER_REPAYMENT_ARGS = {
    principalTokenIndex: new BigNumber(0),
    principalAmount: Units.ether(1),
    interestRate: Units.percent(2.5),
    amortizationUnitType: new BigNumber(1),
    termLengthUnits: new BigNumber(4),
    repaymentAmount: Units.ether(1.29),
    repaymentToken: (principalToken: DummyTokenContract, otherToken: DummyTokenContract) => principalToken,
    debtOrder: (debtOrder: SignedDebtOrder) => debtOrder,
    repayFromRouter: true,
    succeeds: true,
    reverts: false,
};
