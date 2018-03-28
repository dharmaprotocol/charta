// external
import { BigNumber } from "bignumber.js";

import {
    CollateralizeRunner,
    CollateralizeScenario,
    TestContracts,
} from "../runners/";

// utils
import * as Units from "../../../test_utils/units";

const defaultArgs = {
    collateralTokenAllowance: Units.ether(50000),
    collateralTokenBalance: Units.ether(50000),
    from: (kernel: string, attacker: string) => kernel,
    succeeds: true,
    termsContract: (collateralizedContract: string, attacker: string) => collateralizedContract,
};

export const SUCCESSFUL_COLLATERALIZATION_SCENARIOS: CollateralizeScenario[] = [
    {
        description: "Collateralize 0.005 REP with 20 day grace period",
        ...defaultArgs,
        agreementId: web3.sha3("Arbitrary 32 byte id for REP collateralization test"),
        expectedCollateralAmount: Units.ether(0.005),
        expectedCollateralToken: "REP",
        expectedGracePeriodInDays: new BigNumber(20),
        collateralTokenIndexInRegistry: new BigNumber(0),
        // We encode the following collateralization parameters into the parameters string
        //      Collateral Token Index: 0
        //      Collateral Amount: 0.005 REP
        //      Grace Period: 20 Days
        termsContractParameters:
            "0x00000000000000000000000000000000000000000000000011c37937e0800014",
    },
];
