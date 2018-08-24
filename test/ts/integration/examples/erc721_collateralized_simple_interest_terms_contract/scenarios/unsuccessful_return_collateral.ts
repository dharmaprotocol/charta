import { BigNumber } from "bignumber.js";
import * as _ from "lodash";

import * as Units from "../../../../test_utils/units";

import { DEFAULT_RETURN_COLLATERAL_ARGS, ReturnCollateralScenario } from "./";

const partialAmount = _.clone(DEFAULT_RETURN_COLLATERAL_ARGS.repaymentAmount)
    .minus(Units.ether(1));

// No payment has been made.
const DEFAULT_UNSUCCESSFUL_RETURN_ARGS = {
    succeeds: false,
    reverts: true,
    repaymentAmount: new BigNumber(0),
};

export const UNSUCCESSFUL_RETURN_COLLATERAL_SCENARIOS: ReturnCollateralScenario[] = [
    {
        description: "when no payment has been made",
        ...DEFAULT_RETURN_COLLATERAL_ARGS,
        ...DEFAULT_UNSUCCESSFUL_RETURN_ARGS,
        collateralId: new BigNumber(18),
    },
    {
        description: "when the expected repayment amount has been partially paid",
        ...DEFAULT_RETURN_COLLATERAL_ARGS,
        ...DEFAULT_UNSUCCESSFUL_RETURN_ARGS,
        collateralId: new BigNumber(19),
        repaymentAmount: partialAmount,
    },
    {
        description: "when the collateral is a CryptoKitty",
        ...DEFAULT_RETURN_COLLATERAL_ARGS,
        ...DEFAULT_UNSUCCESSFUL_RETURN_ARGS,
        collateralId: new BigNumber(3),
        isCryptoKitty: true,
    },
];
