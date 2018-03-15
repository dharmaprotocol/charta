import * as ABIDecoder from "abi-decoder";
import * as chai from "chai";
import * as Units from "../../test_utils/units";
import { BigNumber } from "bignumber.js";
import * as Web3 from "web3";

import {
    CollateralLocked,
    CollateralReturned,
    CollateralSeized,
} from "../../logs/collateralized_contract";

import {
    MockCollateralizedTermsContractContract,
} from "../../../../types/generated/mock_collateralized_terms_contract";
import { TokenRegistryContract } from "../../../../types/generated/token_registry";
import { MockDebtRegistryContract } from "../../../../types/generated/mock_debt_registry";
import { MockERC20TokenContract } from "../../../../types/generated/mock_e_r_c20_token";
import { MockTokenRegistryContract } from "../../../../types/generated/mock_token_registry";

import { BigNumberSetup } from "../../test_utils/bignumber_setup";
import ChaiSetup from "../../test_utils/chai_setup";
import { REVERT_ERROR } from "../../test_utils/constants";

// scenario runners
import { RegisterTermStartRunner, ReturnCollateralRunner, SeizeCollateralRunner } from "./runners/";

// scenarios
import { UNSUCCESSFUL_COLLATERALIZATION } from "./scenarios/unsuccessful_collateralization";
import { SUCCESSFUL_COLLATERALIZATION } from "./scenarios/successful_collateralization";
import { UNSUCCESSFUL_SEIZURE } from "./scenarios/unsuccessful_seizure";
import { SUCCESSFUL_SEIZURE } from "./scenarios/successful_seizure";
import { UNSUCCESSFUL_RETURN } from "./scenarios/unsuccessful_return";
import { SUCCESSFUL_RETURN } from "./scenarios/successful_return";

import * as moment from "moment";

// Set up Chai
ChaiSetup.configure();
const expect = chai.expect;

// Configure BigNumber exponentiation
BigNumberSetup.configure();

const mockCollateralizedContract = artifacts.require("MockCollateralizedTermsContract");

contract("CollateralizedContract (Unit Tests)", async (ACCOUNTS) => {
    let collateralContract: MockCollateralizedTermsContractContract;
    let tokenRegistry: TokenRegistryContract;
    let mockToken: MockERC20TokenContract;
    let mockDebtRegistry: MockDebtRegistryContract;
    let mockTokenRegistry: MockTokenRegistryContract;

    // Scenario runnner
    const registerTermStartRunner = new RegisterTermStartRunner();
    const returnCollateralRunner = new ReturnCollateralRunner();
    const seizeCollateralRunner = new SeizeCollateralRunner();

    const CONTRACT_OWNER = ACCOUNTS[0];
    const COLLATERALIZER = ACCOUNTS[1];
    const NON_COLLATERALIZER = ACCOUNTS[2];
    const BENEFICIARY_1 = ACCOUNTS[3];
    const BENEFICIARY_2 = ACCOUNTS[4];
    const MOCK_DEBT_KERNEL_ADDRESS = ACCOUNTS[5];
    const ATTACKER = ACCOUNTS[6];

    const NULL_PARAMETERS = "0x0000000000000000000000000000000000000000000000000000000000000000";

    const TX_DEFAULTS = { from: CONTRACT_OWNER, gas: 4000000 };

    const COLLATERAL_AMOUNT = Units.ether(5);

    before(async () => {
        tokenRegistry = await TokenRegistryContract.deployed(web3, TX_DEFAULTS);

        mockDebtRegistry = await MockDebtRegistryContract.deployed(web3, TX_DEFAULTS);
        mockToken = await MockERC20TokenContract.deployed(web3, TX_DEFAULTS);
        mockTokenRegistry = await MockTokenRegistryContract.deployed(web3, TX_DEFAULTS);

        /*
        In our test environment, we want to interact with the contract being
        unit tested as a statically-typed entity. In order to accomplish this,
        we take the following steps:

          1 - Instantiate an instance of the contract through the Truffle
              framework.
          2 - Instantiate an instance of the contract through the Web3 API using
              the truffle instance's ABI.
          3 - Use the Web3 contract instance to instantiate a statically-typed
              version of the contract as handled by ABI-GEN, which generates
              a contract wrapper with types pulled from the contract's ABI.
         */

        // Step 1: Instantiate a truffle instance of the contract.
        const collateralContractTruffle = await mockCollateralizedContract.new(
            MOCK_DEBT_KERNEL_ADDRESS,
            mockDebtRegistry.address,
            mockTokenRegistry.address,
            { from: CONTRACT_OWNER },
        );

        // Step 2: Instantiate a web3 instance of the contract.
        const collateralContractWeb3Contract = web3.eth
            .contract(mockCollateralizedContract.abi)
            .at(collateralContractTruffle.address);

        // Step 3: Instantiate a statically-typed version of the contract.
        collateralContract = new MockCollateralizedTermsContractContract(
            collateralContractWeb3Contract,
            TX_DEFAULTS,
        );

        // Initialize scenario runners
        registerTermStartRunner.initialize(
            {
                mockCollateralizedTermsContract: collateralContract,
                mockCollateralToken: mockToken,
                mockDebtRegistry,
                mockTokenRegistry,
            },
            {
                ATTACKER,
                BENEFICIARY_1,
                BENEFICIARY_2,
                COLLATERALIZER,
                NON_COLLATERALIZER,
                MOCK_DEBT_KERNEL_ADDRESS,
            },
        );
        seizeCollateralRunner.initialize(
            {
                mockCollateralizedTermsContract: collateralContract,
                mockCollateralToken: mockToken,
                mockDebtRegistry,
                mockTokenRegistry,
            },
            {
                ATTACKER,
                BENEFICIARY_1,
                BENEFICIARY_2,
                COLLATERALIZER,
                NON_COLLATERALIZER,
                MOCK_DEBT_KERNEL_ADDRESS,
            },
        );
        returnCollateralRunner.initialize(
            {
                mockCollateralizedTermsContract: collateralContract,
                mockCollateralToken: mockToken,
                mockDebtRegistry,
                mockTokenRegistry,
            },
            {
                ATTACKER,
                BENEFICIARY_1,
                BENEFICIARY_2,
                COLLATERALIZER,
                NON_COLLATERALIZER,
                MOCK_DEBT_KERNEL_ADDRESS,
            },
        );

        // Initialize ABI Decoder for deciphering log receipts
        ABIDecoder.addABI(collateralContract.abi);
    });

    after(() => {
        ABIDecoder.removeABI(collateralContract.abi);
    });

    describe("Initialization", () => {
        it("points to the DebtKernel passed in through the constructor", async () => {
            await expect(collateralContract.debtKernelAddress.callAsync()).to.eventually.equal(
                MOCK_DEBT_KERNEL_ADDRESS,
            );
        });

        it("points to the DebtRegistry passed in through the constructor", async () => {
            await expect(collateralContract.debtRegistry.callAsync()).to.eventually.equal(
                mockDebtRegistry.address,
            );
        });

        it("points to the TokenRegistry passed in through the constructor", async () => {
            await expect(collateralContract.tokenRegistry.callAsync()).to.eventually.equal(
                mockTokenRegistry.address,
            );
        });
    });

    describe("#unpackCollateralParametersFromBytes", () => {
        describe("it should unpack collateral parameters correctly", () => {
            it("Scenario #1", async () => {
                const packedParameters = NULL_PARAMETERS;
                const expectedUnpackedParameters = [0, 0, 0];

                const unpackedParameters = await collateralContract.unpackCollateralParametersFromBytes.callAsync(
                    packedParameters,
                );

                expect(unpackedParameters[0]).to.bignumber.equal(expectedUnpackedParameters[0]);
                expect(unpackedParameters[1]).to.bignumber.equal(expectedUnpackedParameters[1]);
                expect(unpackedParameters[2]).to.bignumber.equal(expectedUnpackedParameters[2]);
            });

            it("Scenario #2", async () => {
                const packedParameters =
                    "0x0000000000000000000000000000000000000ff00000000de0b6b3a764000001";
                const expectedUnpackedParameters = [255, Units.ether(1), 1];

                const unpackedParameters = await collateralContract.unpackCollateralParametersFromBytes.callAsync(
                    packedParameters,
                );

                expect(unpackedParameters[0]).to.bignumber.equal(expectedUnpackedParameters[0]);
                expect(unpackedParameters[1]).to.bignumber.equal(expectedUnpackedParameters[1]);
                expect(unpackedParameters[2]).to.bignumber.equal(expectedUnpackedParameters[2]);
            });

            it("Scenario #3", async () => {
                const packedParameters =
                    "0x00000abcd000000000000000000000000000012008060e0dbc5d6766800000ff";
                const expectedUnpackedParameters = [18, Units.ether(9700000), 255];

                const unpackedParameters = await collateralContract.unpackCollateralParametersFromBytes.callAsync(
                    packedParameters,
                );

                expect(unpackedParameters[0]).to.bignumber.equal(expectedUnpackedParameters[0]);
                expect(unpackedParameters[1]).to.bignumber.equal(expectedUnpackedParameters[1]);
                expect(unpackedParameters[2]).to.bignumber.equal(expectedUnpackedParameters[2]);
            });
        });
    });

    describe("#registerTermStart", () => {
        describe("unsuccessful collateralizations", () => {
            UNSUCCESSFUL_COLLATERALIZATION.forEach(registerTermStartRunner.testScenario);
        });

        describe("successful collateralizations", () => {
            SUCCESSFUL_COLLATERALIZATION.forEach(registerTermStartRunner.testScenario);
        });
    });

    describe("#seizeCollateral", () => {
        describe("Unsuccessful Collateral Seizure", () => {
            UNSUCCESSFUL_SEIZURE.forEach(seizeCollateralRunner.testScenario);
        });

        describe("Successful Collateral Seizure", () => {
            SUCCESSFUL_SEIZURE.forEach(seizeCollateralRunner.testScenario);
        });
    });

    describe("#returnCollateral", () => {
        describe("Unsuccessful Collateral Return", () => {
            UNSUCCESSFUL_RETURN.forEach(returnCollateralRunner.testScenario);
        });

        describe("Successful Collateral Return", () => {
            SUCCESSFUL_RETURN.forEach(returnCollateralRunner.testScenario);
        });
    });
});
