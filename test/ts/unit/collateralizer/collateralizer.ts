// External Libraries
import * as ABIDecoder from "abi-decoder";
import * as chai from "chai";
import * as Units from "../../test_utils/units";

// Utils
import { BigNumberSetup } from "../../test_utils/bignumber_setup";
import ChaiSetup from "../../test_utils/chai_setup";

// Generated Types
import { CollateralizerContract } from "../../../../types/generated/collateralizer";
import { TokenRegistryContract } from "../../../../types/generated/token_registry";
import { MockDebtRegistryContract } from "../../../../types/generated/mock_debt_registry";
import { MockERC20TokenContract } from "../../../../types/generated/mock_e_r_c20_token";
import { MockTokenRegistryContract } from "../../../../types/generated/mock_token_registry";
import { MockTokenTransferProxyContract } from "../../../../types/generated/mock_token_transfer_proxy";
import { MockCollateralizedTermsContractContract } from "../../../../types/generated/mock_collateralized_terms_contract";

// Scenario Runners
import { CollateralizeRunner, ReturnCollateralRunner } from "./runners";

// Scenario Constants
import { SUCCESSFUL_COLLATERALIZATION_SCENARIOS } from "./scenarios/successful_collateralization";
import { UNSUCCESSFUL_COLLATERALIZATION_SCENARIOS } from "./scenarios/unsuccessful_collateralization";
import { SUCCESSFUL_RETURN_SCENARIOS } from "./scenarios/successful_return";
import { UNSUCCESSFUL_RETURN_SCENARIOS } from "./scenarios/unsuccessful_return";
import {MockTokenTransferProxy} from "../../../../artifacts/ts/MockTokenTransferProxy";

// Set up Chai
ChaiSetup.configure();
const expect = chai.expect;

// Configure BigNumber exponentiation
BigNumberSetup.configure();

const collateralizer = artifacts.require("Collateralizer");

contract("CollateralizedContract (Unit Tests)", async (ACCOUNTS) => {
    let collateralizerContract: CollateralizerContract;
    let tokenRegistry: TokenRegistryContract;
    let mockToken: MockERC20TokenContract;
    let mockDebtRegistry: MockDebtRegistryContract;
    let mockTokenRegistry: MockTokenRegistryContract;
    let mockTokenTransferProxy: MockTokenTransferProxyContract;
    let mockTermsContract: MockCollateralizedTermsContractContract;

    const collateralizeRunner = new CollateralizeRunner();
    const returnCollateralRunner = new ReturnCollateralRunner();

    const CONTRACT_OWNER = ACCOUNTS[0];
    const COLLATERALIZER = ACCOUNTS[1];
    const NON_COLLATERALIZER = ACCOUNTS[2];
    const BENEFICIARY_1 = ACCOUNTS[3];
    const BENEFICIARY_2 = ACCOUNTS[4];
    const MOCK_DEBT_KERNEL_ADDRESS = ACCOUNTS[5];
    const MOCK_TERMS_CONTRACT_ADDRESS = ACCOUNTS[6];
    const ATTACKER = ACCOUNTS[7];

    const NULL_PARAMETERS = "0x0000000000000000000000000000000000000000000000000000000000000000";

    const TX_DEFAULTS = { from: CONTRACT_OWNER, gas: 4000000 };

    before(async () => {
        tokenRegistry = await TokenRegistryContract.deployed(web3, TX_DEFAULTS);
        mockDebtRegistry = await MockDebtRegistryContract.deployed(web3, TX_DEFAULTS);
        mockToken = await MockERC20TokenContract.deployed(web3, TX_DEFAULTS);
        mockTokenRegistry = await MockTokenRegistryContract.deployed(web3, TX_DEFAULTS);
        mockTokenTransferProxy = await MockTokenTransferProxyContract.deployed(web3, TX_DEFAULTS);
        mockTermsContract = await MockCollateralizedTermsContractContract.deployed(web3, TX_DEFAULTS);

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
        const collateralContractTruffle = await collateralizer.new(
            MOCK_DEBT_KERNEL_ADDRESS,
            mockDebtRegistry.address,
            mockTokenRegistry.address,
            mockTokenTransferProxy.address,
            { from: CONTRACT_OWNER },
        );

        // Step 2: Instantiate a web3 instance of the contract.
        const collateralContractWeb3Contract = web3.eth
            .contract(collateralizer.abi)
            .at(collateralContractTruffle.address);

        // Step 3: Instantiate a statically-typed version of the contract.
        collateralizerContract = new CollateralizerContract(
            collateralContractWeb3Contract,
            TX_DEFAULTS,
        );

        const testContracts = {
            collateralizer: collateralizerContract,
            mockCollateralToken: mockToken,
            mockDebtRegistry,
            mockTokenRegistry,
            mockTokenTransferProxy,
            mockTermsContract,
        };

        const testAccounts = {
            ATTACKER,
            BENEFICIARY_1,
            BENEFICIARY_2,
            COLLATERALIZER,
            NON_COLLATERALIZER,
            MOCK_DEBT_KERNEL_ADDRESS,
            MOCK_TERMS_CONTRACT_ADDRESS,
        };

        // Grant the terms contract authorization to call the `collateralize` function.
        await collateralizerContract.addAuthorizedCollateralizeAgent.sendTransactionAsync(
            mockTermsContract.address,
        );

        await collateralizerContract.addAuthorizedCollateralizeAgent.sendTransactionAsync(
            MOCK_TERMS_CONTRACT_ADDRESS,
        );

        // Initialize runners.
        collateralizeRunner.initialize(testContracts, testAccounts);
        returnCollateralRunner.initialize(testContracts, testAccounts);

        // Initialize ABI Decoder for deciphering log receipts
        ABIDecoder.addABI(collateralizerContract.abi);
    });

    after(() => {
        ABIDecoder.removeABI(collateralizerContract.abi);
    });

    describe("Initialization", () => {
        it("points to the DebtKernel passed in through the constructor", async () => {
            await expect(collateralizerContract.debtKernelAddress.callAsync()).to.eventually.equal(
                MOCK_DEBT_KERNEL_ADDRESS,
            );
        });

        it("points to the DebtRegistry passed in through the constructor", async () => {
            await expect(collateralizerContract.debtRegistry.callAsync()).to.eventually.equal(
                mockDebtRegistry.address,
            );
        });

        it("points to the TokenRegistry passed in through the constructor", async () => {
            await expect(collateralizerContract.tokenRegistry.callAsync()).to.eventually.equal(
                mockTokenRegistry.address,
            );
        });
    });

    describe("#unpackCollateralParametersFromBytes", () => {
        describe("it should unpack collateral parameters correctly", () => {
            it("Scenario #1", async () => {
                const packedParameters = NULL_PARAMETERS;
                const expectedUnpackedParameters = [0, 0, 0];

                const unpackedParameters = await collateralizerContract.unpackCollateralParametersFromBytes.callAsync(
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

                const unpackedParameters = await collateralizerContract.unpackCollateralParametersFromBytes.callAsync(
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

                const unpackedParameters = await collateralizerContract.unpackCollateralParametersFromBytes.callAsync(
                    packedParameters,
                );

                expect(unpackedParameters[0]).to.bignumber.equal(expectedUnpackedParameters[0]);
                expect(unpackedParameters[1]).to.bignumber.equal(expectedUnpackedParameters[1]);
                expect(unpackedParameters[2]).to.bignumber.equal(expectedUnpackedParameters[2]);
            });
        });
    });

    describe("#collateralize", () => {
       describe("Successful collateralization", () => {
           SUCCESSFUL_COLLATERALIZATION_SCENARIOS.forEach(collateralizeRunner.testScenario);
       });

       describe("Unsuccessful collateralization", () => {
            UNSUCCESSFUL_COLLATERALIZATION_SCENARIOS.forEach(collateralizeRunner.testScenario);
       });
    });

    describe("#returnCollateral", () => {
        describe("Successful collateral return", () => {
            SUCCESSFUL_RETURN_SCENARIOS.forEach(returnCollateralRunner.testScenario);
        });

        describe("Unsuccessful collateral return", () => {
            UNSUCCESSFUL_RETURN_SCENARIOS.forEach(returnCollateralRunner.testScenario);
        });
    });
});
