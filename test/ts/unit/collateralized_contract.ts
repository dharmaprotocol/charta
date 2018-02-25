import * as chai from "chai";
import * as Units from "../test_utils/units";
import {BigNumber} from "bignumber.js";

import {DummyCollateralizedContractContract} from "../../../types/generated/dummy_collateralized_contract";

import {MockDebtRegistryContract} from "../../../types/generated/mock_debt_registry";
import {MockERC20TokenContract} from "../../../types/generated/mock_e_r_c20_token";
import {MockTokenTransferProxyContract} from "../../../types/generated/mock_token_transfer_proxy";

import {RepaymentRouterErrorCodes} from "../../../types/errors";

import {BigNumberSetup} from "../test_utils/bignumber_setup";
import ChaiSetup from "../test_utils/chai_setup";
import {INVALID_OPCODE, REVERT_ERROR} from "../test_utils/constants";

import {LogError, LogRepayment} from "../logs/repayment_router";

import * as moment from "moment";

// Set up Chai
ChaiSetup.configure();
const expect = chai.expect;

// Configure BigNumber exponentiation
BigNumberSetup.configure();

const dummyCollateralizedContract = artifacts.require("DummyCollateralizedContract");

contract("CollateralizedContract (Unit Tests)", async (ACCOUNTS) => {

    let collateralContract: DummyCollateralizedContractContract;
    let mockToken: MockERC20TokenContract;
    let mockRegistry: MockDebtRegistryContract;
    let mockTokenTransferProxy: MockTokenTransferProxyContract;

    const CONTRACT_OWNER = ACCOUNTS[0];
    const PAYER = ACCOUNTS[1];
    const BENEFICIARY = ACCOUNTS[2];
    const ATTACKER = ACCOUNTS[3];

    const TERMS_CONTRACT_PARAMETERS =
        web3.sha3("any 32 byte hex value can represent the terms contract's parameters");
    const ARBITRARY_AGREEMENT_ID =
        web3.sha3("any 32 byte hex value can represent an agreement id");

    const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";

    const TX_DEFAULTS = { from: CONTRACT_OWNER, gas: 4000000 };

    before(async () => {
        mockRegistry = await MockDebtRegistryContract.deployed(web3, TX_DEFAULTS);
        mockToken = await MockERC20TokenContract.deployed(web3, TX_DEFAULTS);
        mockTokenTransferProxy = await MockTokenTransferProxyContract.deployed(web3, TX_DEFAULTS);

        const collateralContractTruffle = await dummyCollateralizedContract.new(
            mockRegistry.address
        );

        const collateralContractWeb3Contract =
            web3.eth.contract(dummyCollateralizedContract.abi).at(collateralContractTruffle.address);

        collateralContract = new DummyCollateralizedContractContract(collateralContractWeb3Contract, TX_DEFAULTS);

        // PAYER begins with a balance of 5 ether.
        await mockToken.mockBalanceOfFor.sendTransactionAsync(
            PAYER, Units.ether(5),
        );

        // TransferProxy is granted an allowance of 3 ether from PAYER.
        await mockToken.mockAllowanceFor.sendTransactionAsync(
            PAYER, mockTokenTransferProxy.address, Units.ether(3),
        );

    });

    describe("Initialization", () => {
        it("points to the DebtRegistry passed in through the constructor", async () => {
            await expect(collateralContract.debtRegistry.callAsync()).to.eventually.equal(mockRegistry.address);
        });
    });
});
