import * as chai from "chai";
import * as Units from "../test_utils/units";
import {BigNumber} from "bignumber.js";

import {RepaymentRouterContract} from "../../../types/generated/repayment_router";
import {SimpleInterestTermsContractContract} from "../../../types/generated/simple_interest_terms_contract";
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

const repaymentRouterContract = artifacts.require("RepaymentRouter");
const simpleInterestTermsContract = artifacts.require("SimpleInterestTermsContract");

contract("SimpleInterestTermsContract (Unit Tests)", async (ACCOUNTS) => {
    let termsContract: SimpleInterestTermsContractContract;
    let router: RepaymentRouterContract;
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

        const repaymentRouterTruffle = await repaymentRouterContract.new(
          mockRegistry.address,
          mockTokenTransferProxy.address
        );

        const termsContractTruffle = await simpleInterestTermsContract.new(
            mockRegistry.address,
            mockToken.address,
            repaymentRouterTruffle.address,
        );

        // The typings we use ingest vanilla Web3 contracts, so we convert the
        // contract instance deployed by truffle into a Web3 contract instance
        const repaymentRouterWeb3Contract =
            web3.eth.contract(repaymentRouterTruffle.abi).at(repaymentRouterTruffle.address);

        const termsContractWeb3Contract =
            web3.eth.contract(simpleInterestTermsContract.abi).at(termsContractTruffle.address);

        router = new RepaymentRouterContract(repaymentRouterWeb3Contract, TX_DEFAULTS);
        termsContract = new SimpleInterestTermsContractContract(termsContractWeb3Contract, TX_DEFAULTS);

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
            await expect(termsContract.debtRegistry.callAsync()).to.eventually.equal(mockRegistry.address);
        });
        it("points to the RepaymentRouter passed in through the constructor", async () => {
          await expect(termsContract.repaymentRouter.callAsync()).to.eventually.equal(router.address);
        });
        it("points to the token contract passed in through the constructor", async () => {
          await expect(termsContract.repaymentToken.callAsync()).to.eventually.equal(mockToken.address);
        });
    });

    describe("#registerRepayment", () => {

        describe("agent who is not RepaymentRouter calls registerRepayment", () => {

            it("should throw", async () => {
              await expect(termsContract.registerRepayment.sendTransactionAsync(
                ARBITRARY_AGREEMENT_ID,
                PAYER,
                BENEFICIARY,
                Units.ether(1),
                mockToken.address,
                { from: ATTACKER } // the message is coming from an attacker.
              )).to.eventually.be.rejectedWith(REVERT_ERROR);
            });

        });

        describe("RepaymentRouter calls registerRepayment", () => {

            before(async () => {
                await mockRegistry.mockGetBeneficiaryReturnValueFor.sendTransactionAsync(
                    ARBITRARY_AGREEMENT_ID,
                    BENEFICIARY,
                );

                await mockRegistry.mockGetTermsReturnValueFor.sendTransactionAsync(
                    ARBITRARY_AGREEMENT_ID,
                    termsContract.address,
                    TERMS_CONTRACT_PARAMETERS,
                );

                await mockRegistry.mockGetTermsContractReturnValueFor.sendTransactionAsync(
                    ARBITRARY_AGREEMENT_ID,
                    termsContract.address,
                );
            });

            describe("...with a different `tokenAddress` than expected by the terms contract", () => {

                before(async () => {
                    await expect(router.repay.sendTransactionAsync(
                        ARBITRARY_AGREEMENT_ID,
                        Units.ether(1),
                        ATTACKER // this is not the address it's expecting.
                    )).to.eventually.be.rejectedWith(REVERT_ERROR);
                });

                it("should not record the repayment", async () => {
                    await expect(termsContract.getValueRepaidToDate.callAsync(
                      ARBITRARY_AGREEMENT_ID
                    )).to.eventually.bignumber.equal(Units.ether(0));
                });
            });

            describe("...with terms contract's expected `tokenAddress`", () => {

              const AMOUNT = Units.ether(1);

                before(async () => {
                    await router.repay.sendTransactionAsync(
                        ARBITRARY_AGREEMENT_ID,
                        AMOUNT,
                        mockToken.address, // this is the address it's expecting.
                        { from: PAYER }
                    );
                });

                it("should record the repayment", async () => {
                    await expect(termsContract.getValueRepaidToDate.callAsync(
                      ARBITRARY_AGREEMENT_ID
                    )).to.eventually.bignumber.equal(AMOUNT);
                });

            });
        });
    });

    describe("#getValueRepaidToDate", () => {

        describe("non-existent debt agreement", () => {

          const NON_EXISTENT_AGREEMENT_ID = web3.sha3("this agreement id doesn't exist!");

            before(async () => {
                await mockRegistry.mockGetBeneficiaryReturnValueFor.sendTransactionAsync(
                    NON_EXISTENT_AGREEMENT_ID,
                    NULL_ADDRESS, // no beneficiary indicates non-existent debt agreement.
                );

                await router.repay.sendTransactionAsync(
                  NON_EXISTENT_AGREEMENT_ID,
                  Units.ether(1),
                  mockToken.address
                );
            });

            it("should not register any repayment", async () => {
                await expect(termsContract.getValueRepaidToDate.callAsync(
                  NON_EXISTENT_AGREEMENT_ID
                )).to.eventually.bignumber.equal(Units.ether(0));
            });
        });

        describe("extant debt agreement", () => {

          const EXTANT_AGREEMENT_ID = web3.sha3("this agreement id exists!");

            before(async () => {
                await mockRegistry.mockGetBeneficiaryReturnValueFor.sendTransactionAsync(
                    EXTANT_AGREEMENT_ID,
                    BENEFICIARY,
                );

                await mockRegistry.mockGetTermsReturnValueFor.sendTransactionAsync(
                    EXTANT_AGREEMENT_ID,
                    termsContract.address,
                    TERMS_CONTRACT_PARAMETERS,
                );

                await mockRegistry.mockGetTermsContractReturnValueFor.sendTransactionAsync(
                    EXTANT_AGREEMENT_ID,
                    termsContract.address,
                );
            });

            describe("at time N, PAYER has made an initial payment of 1 ether", () => {

                before(async () => {
                    await router.repay.sendTransactionAsync(
                        EXTANT_AGREEMENT_ID,
                        Units.ether(1),
                        mockToken.address,
                        { from: PAYER }
                    );
                });

                it("returns 1 ether", async () => {
                  await expect(termsContract.getValueRepaidToDate.callAsync(
                    EXTANT_AGREEMENT_ID
                  )).to.eventually.bignumber.equal(Units.ether(1));
                });

            });

            describe("at time M, PAYER has made an additional payment of 1 ether", () => {

                before(async () => {
                    await router.repay.sendTransactionAsync(
                        EXTANT_AGREEMENT_ID,
                        Units.ether(1),
                        mockToken.address,
                        { from: PAYER }
                    );
                });

                it("returns 2 ether", async () => {
                    await expect(termsContract.getValueRepaidToDate.callAsync(
                      EXTANT_AGREEMENT_ID
                    )).to.eventually.bignumber.equal(Units.ether(2));
                });
            });
        });
    });

    describe("#getExpectedRepaymentValue", () => {
        describe("when termsContract associated w/ debt agreement is not `this`", () => {
            it("should throw");
        });

        describe("when termsContractParameters associated w/ debt agreement malformed", () => {
            // the only way this can happen is...
            describe("amortizationUnitType is not one of the valid types", () => {
                const malformedTermsContractParameters =
                    "0x00000000000000002ff62db077c0000010000000000000000000000000000007"

                before(async () => {
                    await mockRegistry.mockGetTermsReturnValueFor.sendTransactionAsync(
                        ARBITRARY_AGREEMENT_ID,
                        termsContract.address,
                        malformedTermsContractParameters
                    );
                });

                it("should throw", async () => {
                    await expect(termsContract.getExpectedRepaymentValue.callAsync(
                        ARBITRARY_AGREEMENT_ID,
                        new BigNumber(moment().unix())
                    )).to.eventually.be.rejectedWith(REVERT_ERROR);
                });
            });
        });

        describe("when termsContractParameters associated /w debt agreement well-formed", () => {
            /**
             * Test to see that math works out correctly given correctly formed
             * parameters
             */
        });
    });
  });
