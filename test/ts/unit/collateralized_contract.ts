import * as ABIDecoder from "abi-decoder";
import * as chai from "chai";
import * as Units from "../test_utils/units";
import {BigNumber} from "bignumber.js";
import * as Web3 from "web3";

import {
  CollateralLocked
} from "../logs/collateralized_contract";

import {DummyCollateralizedContractContract} from "../../../types/generated/dummy_collateralized_contract";
import {MockDebtRegistryContract} from "../../../types/generated/mock_debt_registry";
import {MockERC20TokenContract} from "../../../types/generated/mock_e_r_c20_token";

import {BigNumberSetup} from "../test_utils/bignumber_setup";
import ChaiSetup from "../test_utils/chai_setup";
import {REVERT_ERROR} from "../test_utils/constants";

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

    const CONTRACT_OWNER = ACCOUNTS[0];
    const COLLATERALIZER = ACCOUNTS[1];
    const BENEFICIARY = ACCOUNTS[2];
    const ATTACKER = ACCOUNTS[3];

    const TX_DEFAULTS = { from: CONTRACT_OWNER, gas: 4000000 };

    const COLLATERAL_AMOUNT = Units.ether(5);

    before(async () => {
        mockRegistry = await MockDebtRegistryContract.deployed(web3, TX_DEFAULTS);
        mockToken = await MockERC20TokenContract.deployed(web3, TX_DEFAULTS);

        const collateralContractTruffle = await dummyCollateralizedContract.new(
            mockRegistry.address
        );

        const collateralContractWeb3Contract =
            web3.eth.contract(dummyCollateralizedContract.abi).at(collateralContractTruffle.address);

        collateralContract = new DummyCollateralizedContractContract(collateralContractWeb3Contract, TX_DEFAULTS);

        // The COLLATERALIZER begins with a balance of 5 ether.
        await mockToken.mockBalanceOfFor.sendTransactionAsync(
            COLLATERALIZER, COLLATERAL_AMOUNT,
        );

        // The COLLATERALIZER has granted an allowance to the collateralized contract.
        await mockToken.mockAllowanceFor.sendTransactionAsync(
            COLLATERALIZER, collateralContract.address, COLLATERAL_AMOUNT,
        );

        // Initialize ABI Decoder for deciphering log receipts
        ABIDecoder.addABI(collateralContract.abi);
    });

    after(() => {
        ABIDecoder.removeABI(collateralContract.abi);
    });

    describe("Initialization", () => {
        it("points to the DebtRegistry passed in through the constructor", async () => {
            await expect(collateralContract.debtRegistry.callAsync()).to.eventually.equal(mockRegistry.address);
        });
    });

    describe("#collateralize", () => {

      describe("#invariants", () => {

        const ARBITRARY_AGREEMENT_ID =
            web3.sha3("any 32 byte hex value can represent an agreement id");

        it("should throw if the amount being put up for collateral is zero", async () => {
            await expect(collateralContract.collateralize.sendTransactionAsync(
              ARBITRARY_AGREEMENT_ID,
              mockToken.address,
              new BigNumber(0), // zero collateral
              new BigNumber(moment().add(2, 'years').unix())
            )).to.eventually.be.rejectedWith(REVERT_ERROR);
        });

        it("should throw if the lockup period occurs in the past", async () => {
            await expect(collateralContract.collateralize.sendTransactionAsync(
              ARBITRARY_AGREEMENT_ID,
              mockToken.address,
              new BigNumber(10),
              new BigNumber(moment().subtract(2, 'years').unix()) // timestamp that occurs in the past.
            )).to.eventually.be.rejectedWith(REVERT_ERROR);
        });

        it("should throw if the agreement already has already been collateralized", async () => {
            // We first colletaralize the contract.
            await collateralContract.collateralize.sendTransactionAsync(
                ARBITRARY_AGREEMENT_ID,
                mockToken.address,
                new BigNumber(5),
                new BigNumber(moment().add(2, 'years').unix()),
                { from: COLLATERALIZER }
            );

            // a second attempt to collateralize the contract should fail.
            await expect(collateralContract.collateralize.sendTransactionAsync(
                ARBITRARY_AGREEMENT_ID,
                mockToken.address,
                new BigNumber(10),
                new BigNumber(moment().add(3, 'years').unix()),
                { from: COLLATERALIZER }
            )).to.eventually.be.rejectedWith(REVERT_ERROR);
        });

        it("should throw if the collateral fails to transfer", async () => {
            await expect(collateralContract.collateralize.sendTransactionAsync(
                ARBITRARY_AGREEMENT_ID,
                mockToken.address,
                new BigNumber(10),
                new BigNumber(moment().add(2, 'years').unix()),
                { from: CONTRACT_OWNER } // the COLLATERALIZER has alloted an allowance, not the CONTRACT_OWNER
            )).to.eventually.be.rejectedWith(REVERT_ERROR);
        });
      });

      describe("successful collateralization", () => {

        const AGREEMENT_ID = web3.sha3("this agreement will be successfully collateralized");

        const collateralAmount = Units.ether(5);
        let res: Web3.TransactionReceipt;

        before(async () => {
            const txHash = await collateralContract.collateralize.sendTransactionAsync(
                AGREEMENT_ID,
                mockToken.address,
                collateralAmount,
                new BigNumber(moment().add(2, 'years').unix()),
                { from: COLLATERALIZER }
            );
            res = await web3.eth.getTransactionReceipt(txHash);
        });

        it("should call `transferFrom` on specified token w/ specified parameters", async () => {
            await expect(mockToken.wasTransferFromCalledWith.callAsync(
                COLLATERALIZER,
                collateralContract.address,
                collateralAmount,
            )).to.eventually.be.true;
        });

        it("should emit log indicating that the collateral was secured", async () => {
            const [logReturned] = ABIDecoder.decodeLogs(res.logs);
            const logExpected = CollateralLocked(
              collateralContract.address,
              AGREEMENT_ID,
              mockToken.address,
              collateralAmount
            );

            expect(logReturned).to.deep.equal(logExpected);
        });

      });

    });

    describe("#returnCollateral", () => {

      describe("#invariants", () => {

        const collateralAmount = Units.ether(5);

        it("should throw if no collateral is mapped to the agreement id", async () => {
            const ID_FOR_NON_EXISTENT_AGREEMENT = web3.sha3("this agreement does not exist.");

            await expect(collateralContract.returnCollateral.sendTransactionAsync(
                ID_FOR_NON_EXISTENT_AGREEMENT
            )).to.eventually.be.rejectedWith(REVERT_ERROR);
        });

        it("should throw if the lockup period is still in effect", async () => {
            const ID_FOR_ACTIVE_AGREEMENT = web3.sha3("this agreement is still in effect.");

            // Collateralize an agreement with a lock up period in the future.
            await collateralContract.setDummyCollateral.sendTransactionAsync(
                ID_FOR_ACTIVE_AGREEMENT,
                COLLATERALIZER,
                mockToken.address,
                collateralAmount,
                new BigNumber(moment().add(2, 'years').unix()), // lockup period is still in effect.
                false
            );

            await expect(collateralContract.returnCollateral.sendTransactionAsync(
                ID_FOR_ACTIVE_AGREEMENT
            )).to.eventually.be.rejectedWith(REVERT_ERROR);
        });

        it("should throw if the collateral has already been withdrawn", async () => {
            const ID_FOR_RESOLVED_AGREEMENT = web3.sha3("this agreement has been resolved.");

            // Collateralize an agreement with a lock up period in the future.
            await collateralContract.setDummyCollateral.sendTransactionAsync(
                ID_FOR_RESOLVED_AGREEMENT,
                COLLATERALIZER,
                mockToken.address,
                collateralAmount,
                new BigNumber(moment().subtract(2, 'years').unix()),
                true // collateral marked as withdrawn.
            );

            await expect(collateralContract.returnCollateral.sendTransactionAsync(
                ID_FOR_RESOLVED_AGREEMENT
            )).to.eventually.be.rejectedWith(REVERT_ERROR);
        });

        it("should throw if the agreement is in default and the lockup period has expired", async () => {
            const DEFAULTED_AGREEMENT_ID = web3.sha3("this agreement was defaulted upon.");

            // Collateralize an agreement with a lock up period in the future.
            await collateralContract.setDummyCollateral.sendTransactionAsync(
                DEFAULTED_AGREEMENT_ID,
                COLLATERALIZER,
                mockToken.address,
                collateralAmount,
                new BigNumber(moment().subtract(1, 'month').unix()), // lockup period has expired.
                false
            );

            await collateralContract.setDummyExpectedRepaymentValue.sendTransactionAsync(
                DEFAULTED_AGREEMENT_ID,
                collateralAmount
            );

            await expect(collateralContract.returnCollateral.sendTransactionAsync(
                DEFAULTED_AGREEMENT_ID
            )).to.eventually.be.rejectedWith(REVERT_ERROR);
        });

    });

    describe("#seizeCollateral", () => {
    });


});
