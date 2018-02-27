import * as ABIDecoder from "abi-decoder";
import * as chai from "chai";
import * as Units from "../test_utils/units";
import {BigNumber} from "bignumber.js";
import * as Web3 from "web3";

import {
  CollateralLocked,
  CollateralReturned,
  CollateralSeized
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
        const collateralContractTruffle = await dummyCollateralizedContract.new(
            mockRegistry.address
        );

        // Step 2: Instantiate a web3 instance of the contract.
        const collateralContractWeb3Contract =
            web3.eth.contract(dummyCollateralizedContract.abi).at(collateralContractTruffle.address);

        // Step 3: Instantiate a statically-typed version of the contract.
        collateralContract = new DummyCollateralizedContractContract(collateralContractWeb3Contract, TX_DEFAULTS);

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

        const ZERO_AMOUNT = Units.ether(0);

        before(async () => {
            // This balance is not sufficient.
            await mockToken.mockBalanceOfFor.sendTransactionAsync(
                COLLATERALIZER,
                ZERO_AMOUNT
            );

            // This allowance is not sufficient.
            await mockToken.mockAllowanceFor.sendTransactionAsync(
                COLLATERALIZER,
                collateralContract.address,
                ZERO_AMOUNT
            );
        });

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

        it("should throw if the collateralizer does not have sufficient balance", async () => {
            await expect(collateralContract.collateralize.sendTransactionAsync(
                ARBITRARY_AGREEMENT_ID,
                mockToken.address,
                COLLATERAL_AMOUNT,
                new BigNumber(moment().add(2, 'years').unix()),
                { from: COLLATERALIZER }
            )).to.eventually.be.rejectedWith(REVERT_ERROR);
        });

        it("should throw if the custodian is not allotted sufficient allowance by the collateralizer", async () => {
            // set a sufficient balance so that we fall through to the allowance check.
            await mockToken.mockBalanceOfFor.sendTransactionAsync(
                COLLATERALIZER,
                COLLATERAL_AMOUNT
            );

            await expect(collateralContract.collateralize.sendTransactionAsync(
                ARBITRARY_AGREEMENT_ID,
                mockToken.address, // the acting custodian is the collateralized contract.
                COLLATERAL_AMOUNT,
                new BigNumber(moment().add(2, 'years').unix()),
                { from: COLLATERALIZER }
            )).to.eventually.be.rejectedWith(REVERT_ERROR);
        });
      });

      describe("successful collateralization", () => {

        const AGREEMENT_ID = web3.sha3("this agreement will be successfully collateralized");

        let res: Web3.TransactionReceipt;

        before(async () => {

            await mockToken.reset.sendTransactionAsync();

            // this balance is sufficient.
            await mockToken.mockBalanceOfFor.sendTransactionAsync(
              COLLATERALIZER,
              COLLATERAL_AMOUNT
            );

            // this allowance is sufficient.
            await mockToken.mockAllowanceFor.sendTransactionAsync(
              COLLATERALIZER,
              collateralContract.address,
              COLLATERAL_AMOUNT
            );

            const txHash = await collateralContract.collateralize.sendTransactionAsync(
                AGREEMENT_ID,
                mockToken.address,
                COLLATERAL_AMOUNT,
                new BigNumber(moment().add(2, 'years').unix()),
                { from: COLLATERALIZER }
            );

            res = await web3.eth.getTransactionReceipt(txHash);
        });

        it("should call `transferFrom` on specified token w/ collateralContract as receipient", async () => {
            await expect(mockToken.wasTransferFromCalledWith.callAsync(
                COLLATERALIZER,
                collateralContract.address,
                COLLATERAL_AMOUNT,
            )).to.eventually.be.true;
        });

        it("should emit log indicating that the collateral was secured", async () => {
            const [logReturned] = ABIDecoder.decodeLogs(res.logs);
            const logExpected = CollateralLocked(
              collateralContract.address,
              AGREEMENT_ID,
              mockToken.address,
              COLLATERAL_AMOUNT
            );

            expect(logReturned).to.deep.equal(logExpected);
        });

        it("should throw on subsequent calls to `collateralize`", async () => {
            await expect(collateralContract.collateralize.sendTransactionAsync(
                AGREEMENT_ID,
                mockToken.address,
                new BigNumber(1),
                new BigNumber(moment().add(2, 'years').unix()),
                { from: COLLATERALIZER }
            )).to.eventually.be.rejectedWith(REVERT_ERROR);
        });

      });

    });

    describe("#returnCollateral", () => {

      describe("#invariants", () => {

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
                COLLATERAL_AMOUNT,
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
                COLLATERAL_AMOUNT,
                new BigNumber(moment().subtract(2, 'years').unix()),
                true // collateral marked as withdrawn.
            );

            await expect(collateralContract.returnCollateral.sendTransactionAsync(
                ID_FOR_RESOLVED_AGREEMENT
            )).to.eventually.be.rejectedWith(REVERT_ERROR);
        });

        it("should throw if the agreement is in default and the lockup period has expired", async () => {
            const DEFAULTED_AGREEMENT_ID = web3.sha3("this agreement was defaulted upon.");

            await collateralContract.setDummyCollateral.sendTransactionAsync(
                DEFAULTED_AGREEMENT_ID,
                COLLATERALIZER,
                mockToken.address,
                COLLATERAL_AMOUNT,
                new BigNumber(moment().subtract(1, 'month').unix()), // lockup period has expired.
                false
            );

            await collateralContract.setDummyExpectedRepaymentValue.sendTransactionAsync(
                DEFAULTED_AGREEMENT_ID,
                COLLATERAL_AMOUNT
            );

            await expect(collateralContract.returnCollateral.sendTransactionAsync(
                DEFAULTED_AGREEMENT_ID
            )).to.eventually.be.rejectedWith(REVERT_ERROR);
        });
      });

      describe("the successful return of collateral", () => {

        const AGREEMENT_ID = web3.sha3("this agreement will unwind as intended.");

        let res: Web3.TransactionReceipt;

        before(async () => {

            await collateralContract.setDummyCollateral.sendTransactionAsync(
                AGREEMENT_ID,
                COLLATERALIZER,
                mockToken.address,
                COLLATERAL_AMOUNT,
                new BigNumber(moment().subtract(1, 'month').unix()), // lockup period has expired.
                false // collateral has not been withdrawn.
            );

            await collateralContract.setDummyExpectedRepaymentValue.sendTransactionAsync(
                AGREEMENT_ID,
                COLLATERAL_AMOUNT
            );

            await collateralContract.setDummyValueRepaid.sendTransactionAsync(
                AGREEMENT_ID,
                COLLATERAL_AMOUNT
            );

            const txHash = await collateralContract.returnCollateral.sendTransactionAsync(
                AGREEMENT_ID
            );

            res = await web3.eth.getTransactionReceipt(txHash);
        });

        it("should call `transfer` on specified token w/ collateralizer as receipient", async () => {
            await expect(mockToken.wasTransferCalledWith.callAsync(
                COLLATERALIZER,
                COLLATERAL_AMOUNT,
            )).to.eventually.be.true;
        });

        it("should emit log indicating that the collateral was returned", async () => {
            const [logReturned] = ABIDecoder.decodeLogs(res.logs);
            const logExpected = CollateralReturned(
                collateralContract.address,
                AGREEMENT_ID,
                COLLATERALIZER,
                mockToken.address,
                COLLATERAL_AMOUNT
            );

            expect(logReturned).to.deep.equal(logExpected);
        });

        it("should throw on any subsequent calls to withdraw", async () => {
            await expect(collateralContract.returnCollateral.sendTransactionAsync(
                AGREEMENT_ID
            )).to.eventually.be.rejectedWith(REVERT_ERROR);
        });

      });
  });

  describe("#seizeCollateral", () => {

    describe("#invariants", () => {

      it("should throw if no collateral is mapped to the agreement id", async () => {
          const ID_FOR_NON_EXISTENT_AGREEMENT = web3.sha3("this agreement does not exist.");

          await expect(collateralContract.seizeCollateral.sendTransactionAsync(
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
              COLLATERAL_AMOUNT,
              new BigNumber(moment().add(2, 'years').unix()), // lockup period is still in effect.
              false
          );

          await expect(collateralContract.seizeCollateral.sendTransactionAsync(
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
              COLLATERAL_AMOUNT,
              new BigNumber(moment().subtract(2, 'years').unix()),
              true // collateral marked as withdrawn.
          );

          await expect(collateralContract.seizeCollateral.sendTransactionAsync(
              ID_FOR_RESOLVED_AGREEMENT
          )).to.eventually.be.rejectedWith(REVERT_ERROR);
      });

      it("should throw if the agreement is not in default", async () => {
          const AGREEMENT_ID = web3.sha3("this agreement is going just fine.");

          await collateralContract.setDummyCollateral.sendTransactionAsync(
              AGREEMENT_ID,
              COLLATERALIZER,
              mockToken.address,
              COLLATERAL_AMOUNT,
              new BigNumber(moment().subtract(1, 'month').unix()), // lockup period has expired.
              false
          );

          await collateralContract.setDummyExpectedRepaymentValue.sendTransactionAsync(
              AGREEMENT_ID,
              COLLATERAL_AMOUNT
          );

          await collateralContract.setDummyValueRepaid.sendTransactionAsync(
              AGREEMENT_ID,
              COLLATERAL_AMOUNT
          );

          await expect(collateralContract.seizeCollateral.sendTransactionAsync(
              AGREEMENT_ID
          )).to.eventually.be.rejectedWith(REVERT_ERROR);
      });

    });

    describe("the successful seizure of collateral", () => {

      const DEFAULTED_AGREEMENT_ID = web3.sha3("this agreement will require the seizure of collateral.");

      let res: Web3.TransactionReceipt;

      before(async () => {

          await mockRegistry.mockGetBeneficiaryReturnValueFor.sendTransactionAsync(
              DEFAULTED_AGREEMENT_ID,
              BENEFICIARY
          );

          await collateralContract.setDummyCollateral.sendTransactionAsync(
              DEFAULTED_AGREEMENT_ID,
              COLLATERALIZER,
              mockToken.address,
              COLLATERAL_AMOUNT,
              new BigNumber(moment().subtract(1, 'month').unix()), // lockup period has expired.
              false // collateral has not been withdrawn.
          );

          await collateralContract.setDummyExpectedRepaymentValue.sendTransactionAsync(
              DEFAULTED_AGREEMENT_ID,
              COLLATERAL_AMOUNT
          );

          const txHash = await collateralContract.seizeCollateral.sendTransactionAsync(
              DEFAULTED_AGREEMENT_ID
          );

          res = await web3.eth.getTransactionReceipt(txHash);
      });

      it("should call `transfer` on specified token w/ beneficiary as receipient", async () => {
          await expect(mockToken.wasTransferCalledWith.callAsync(
              BENEFICIARY,
              COLLATERAL_AMOUNT,
          )).to.eventually.be.true;
      });

      it("should emit log indicating that the collateral was seized", async () => {
          const [logReturned] = ABIDecoder.decodeLogs(res.logs);
          const logExpected = CollateralSeized(
              collateralContract.address,
              DEFAULTED_AGREEMENT_ID,
              BENEFICIARY,
              mockToken.address,
              COLLATERAL_AMOUNT
          );

          expect(logReturned).to.deep.equal(logExpected);
      });

      it("should throw on any subsequent calls to `seizeCollateral`", async () => {
          await expect(collateralContract.seizeCollateral.sendTransactionAsync(
              DEFAULTED_AGREEMENT_ID
          )).to.eventually.be.rejectedWith(REVERT_ERROR);
      });

    });

  });

});
