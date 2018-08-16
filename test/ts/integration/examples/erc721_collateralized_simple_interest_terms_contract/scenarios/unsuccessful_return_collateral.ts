import { BigNumber } from "bignumber.js";
import * as _ from "lodash";

import * as Units from "../../../../test_utils/units";

import { DEFAULT_RETURN_COLLATERAL_ARGS, ReturnCollateralScenario } from "./";

const partialAmount = _.clone(DEFAULT_RETURN_COLLATERAL_ARGS.repaymentAmount)
    .minus(Units.ether(1));

export const UNSUCCESSFUL_RETURN_COLLATERAL_SCENARIOS: ReturnCollateralScenario[] = [
    {
        ...DEFAULT_RETURN_COLLATERAL_ARGS,
        description: "when the expected repayment amount has been partially paid",
        collateralId: new BigNumber(18),
        succeeds: false,
        reverts: true,
        repaymentAmount: partialAmount,
    },
    {
        ...DEFAULT_RETURN_COLLATERAL_ARGS,
        description: "when no payment has been made",
        collateralId: new BigNumber(19),
        succeeds: false,
        reverts: true,
        repaymentAmount: new BigNumber(0),
    },
];
