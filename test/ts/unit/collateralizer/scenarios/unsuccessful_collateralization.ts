// External Libraries
import { BigNumber } from "bignumber.js";

import {
    CollateralizeScenario,
} from "../runners/";

// Utils
import * as Units from "../../../test_utils/units";

const defaultArgs = {
    collateralTokenAllowance: Units.ether(1),
    collateralTokenBalance: Units.ether(1),
    collateralTokenIndexInRegistry: new BigNumber(2),
    from: (kernel: string, attacker: string) => kernel,
    succeeds: false,
    termsContract: (collateralizedContract: string, attacker: string) => collateralizedContract,
    // By default, we encode the following collateralization parameters into the parameters string
    //      Collateral Token Index: 2
    //      Collateral Amount: 1 ether
    //      Grace Period: 1 Day
    termsContractParameters: "0x00000000000000000000000000000000000000200000000de0b6b3a764000001",
};

export const UNSUCCESSFUL_COLLATERALIZATION_SCENARIOS: CollateralizeScenario[] = [
    {
        description: "Caller is not terms contract",
        ...defaultArgs,
        agreementId: web3.sha3(
            "Arbitrary 32 byte id for unsuccessful collateralization scenario #1",
        ),
        from: (kernel: string, attacker: string) => attacker,
    },
    {
        description: "Agreement refers to different terms contract",
        ...defaultArgs,
        agreementId: web3.sha3(
            "Arbitrary 32 byte id for unsuccessful collateralization scenario #2",
        ),
        termsContract: (collateralizedContract: string, attacker: string) => attacker,
    },
    {
        description: "Amount being put up for collateral is zero",
        ...defaultArgs,
        agreementId: web3.sha3(
            "Arbitrary 32 byte id for unsuccessful collateralization scenario #3",
        ),
        termsContractParameters:
            "0x0000000000000000000000000000000000000020000000000000000000000001",
    },
    {
        description: "Collateralizer's balance in collateral token is insufficient",
        ...defaultArgs,
        agreementId: web3.sha3(
            "Arbitrary 32 byte id for unsuccessful collateralization scenario #4",
        ),
        collateralTokenBalance: Units.ether(1).minus(1),
    },
    {
        description: "Allowance granted to collateral contract is insufficient",
        ...defaultArgs,
        agreementId: web3.sha3(
            "Arbitrary 32 byte id for unsuccessful collateralization scenario #5",
        ),
        collateralTokenAllowance: Units.ether(1).minus(1),
    },
    {
        description: "Specified collateral token is not stored in token registry",
        ...defaultArgs,
        agreementId: web3.sha3(
            "Arbitrary 32 byte id for unsuccessful collateralization scenario #6",
        ),
        termsContractParameters:
            "0x0000000000000000000000000000000000000ff00000000de0b6b3a764000001",
    },
];
