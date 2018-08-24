import { BigNumber } from "bignumber.js";
import * as _ from "lodash";

import * as Units from "../../../../test_utils/units";

import { DEFAULT_RETURN_COLLATERAL_ARGS, ReturnCollateralScenario } from "./";

const greaterRepaymentAmount = _.clone(DEFAULT_RETURN_COLLATERAL_ARGS.repaymentAmount)
    .add(Units.ether(1));

export const SUCCESSFUL_RETURN_COLLATERAL_SCENARIOS: ReturnCollateralScenario[] = [
    {
        ...DEFAULT_RETURN_COLLATERAL_ARGS,
        description: "when the expected repayment amount has been fully paid",
        collateralId: new BigNumber(16),
    },
    {
        ...DEFAULT_RETURN_COLLATERAL_ARGS,
        description: "when payment is greater than the expected repayment amount",
        collateralId: new BigNumber(17),
        repaymentAmount: greaterRepaymentAmount,
    },
    {
        ...DEFAULT_RETURN_COLLATERAL_ARGS,
        description: "when a CryptoKitty is used for collateral",
        isCryptoKitty: true,
        collateralId: new BigNumber(2),
    },
];
