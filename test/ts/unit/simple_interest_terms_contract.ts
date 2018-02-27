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
const mockTokenContract = artifacts.require("MockERC20Token");

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

    function hexifyParams(
        principalPlusInterest: BigNumber,
        amortizationUnitType: BigNumber,
        termLength: BigNumber
    ): string {

      const principalPlusInterestHex = principalPlusInterest.toString(16);
      const amortizationUnitTypeHex = amortizationUnitType.toString(16);
      const termLengthHex = termLength.toString(16);

      return (
          "0x" +
          principalPlusInterestHex.padStart(32, "0") +
          amortizationUnitTypeHex.padStart(2, "0") +
          termLengthHex.padStart(30, "0")
      );
    }

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

              let dummyToken: MockERC20TokenContract;

                before(async () => {
                  const mockTokenContractTruffle = await mockTokenContract.new();
                  const mockTokenContractWeb3 = web3.eth.contract(mockTokenContractTruffle.abi).at(mockTokenContractTruffle.address);
                  dummyToken = new MockERC20TokenContract(mockTokenContractWeb3, TX_DEFAULTS);

                  await router.repay.sendTransactionAsync(
                      ARBITRARY_AGREEMENT_ID,
                      Units.ether(10),
                      dummyToken.address // this is not the token that it's expecting.
                  )
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

    describe("#unpackParametersFromBytes", () => {

        const principalPlusInterest = Units.ether(200); // 200 ether.
        const amortizationUnitType = new BigNumber(4); // unit code for years.
        const termLength = new BigNumber(10); // term is for 10 years.

        const inputParamsAsHex = hexifyParams(principalPlusInterest,
            amortizationUnitType, termLength);

        it("correctly unpacks parameters into their respective types given raw byte data", async () => {
            let outputParams = await termsContract.unpackParametersFromBytes.callAsync(
              inputParamsAsHex
            );
            expect(outputParams[0]).to.bignumber.equal(principalPlusInterest);
            expect(outputParams[1]).to.bignumber.equal(amortizationUnitType);
            expect(outputParams[2]).to.bignumber.equal(termLength);
        });
    });

    describe("#getExpectedRepaymentValue", () => {

        describe("when termsContract associated w/ debt agreement is not `this`", () => {

            before(async () => {
                await mockRegistry.mockGetTermsContractReturnValueFor.sendTransactionAsync(
                    ARBITRARY_AGREEMENT_ID,
                    ATTACKER // this is an attacker's address and not the contract's address.
                );
            });

            it("should throw", async () => {
                await expect(termsContract.getExpectedRepaymentValue.callAsync(
                    ARBITRARY_AGREEMENT_ID,
                    new BigNumber(moment().unix())
                )).to.eventually.be.rejectedWith(REVERT_ERROR);
            });
        });

        describe("when termsContractParameters associated w/ debt agreement malformed", () => {

          const principalPlusInterest = Units.ether(10);
          const amortizationUnitType = new BigNumber(10); // invalid unit code.
          const termLength = new BigNumber(10);

          const invalidTermsParams = hexifyParams(principalPlusInterest, amortizationUnitType, termLength);

            describe("amortizationUnitType is not one of the valid types", () => {

                before(async () => {
                  await mockRegistry.mockGetTermsContractReturnValueFor.sendTransactionAsync(
                      ARBITRARY_AGREEMENT_ID,
                      termsContract.address
                  );

                    await mockRegistry.mockGetTermsContractParameters.sendTransactionAsync(
                        ARBITRARY_AGREEMENT_ID,
                        invalidTermsParams
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

        describe("when termsContractParameters associated w/ debt agreement are well-formed", () => {

            /*
            The params define a simple interest contract with the below valid terms:
              - Principal plus interest: 12 ether
              - Amortization Unit Type: year
              - Term length: 3 years
            */
            const principalPlusInterest = Units.ether(12);
            const amortizationUnitType = new BigNumber(4); // unit code for years.
            const termLength = new BigNumber(3); // term is three years.

            const validTermsParams = hexifyParams(principalPlusInterest, amortizationUnitType, termLength);

            const ORIGIN_MOMENT = moment();
            const BLOCK_ISSUANCE_TIMESTAMP = ORIGIN_MOMENT.unix();

            const ZERO_AMOUNT = Units.ether(0);
            const INSTALLMENT_AMOUNT = principalPlusInterest.div(termLength);
            const FULL_AMOUNT = principalPlusInterest;

            before(async () => {
                await mockRegistry.mockGetTermsContractReturnValueFor.sendTransactionAsync(
                    ARBITRARY_AGREEMENT_ID,
                    termsContract.address
                );

                await mockRegistry.mockGetTermsContractParameters.sendTransactionAsync(
                    ARBITRARY_AGREEMENT_ID,
                    validTermsParams
                );

                await mockRegistry.mockGetIssuanceBlockTimestamp.sendTransactionAsync(
                    ARBITRARY_AGREEMENT_ID,
                    new BigNumber(BLOCK_ISSUANCE_TIMESTAMP)
                );
            });

            describe("timestamps that occur BEFORE the block issuance's timestamp", () => {

                const ONE_YEAR_BEFORE = moment(ORIGIN_MOMENT).subtract(1, 'year').unix(); // zero-amount
                const ONE_DAY_BEFORE = moment(ORIGIN_MOMENT).subtract(1, 'day').unix(); // zero-amount

                it("should return an expected value of 0", async () => {
                    await expect(termsContract.getExpectedRepaymentValue.callAsync(
                        ARBITRARY_AGREEMENT_ID,
                        new BigNumber(ONE_YEAR_BEFORE)
                    )).to.eventually.bignumber.equal(ZERO_AMOUNT);
                });

                it("should return an expected value of 0", async () => {
                    await expect(termsContract.getExpectedRepaymentValue.callAsync(
                        ARBITRARY_AGREEMENT_ID,
                        new BigNumber(ONE_DAY_BEFORE)
                    )).to.eventually.bignumber.equal(ZERO_AMOUNT);
                });
            });

            describe("timestamps that occur DURING the issuance's term length", () => {

                const SIXTEEN_DAYS_AFTER = moment(ORIGIN_MOMENT).add(16, 'days').unix(); // zero-amount
                const ONE_YEAR_AFTER = moment(ORIGIN_MOMENT).add(1, 'year').unix(); // one-installment
                const TWO_YEARS_AFTER = moment(ORIGIN_MOMENT).add(2, 'years').unix(); // two-installments
                const TWO_PLUS_YEARS_AFTER = moment(ORIGIN_MOMENT).add(2, 'years').add(4, 'months').unix(); // two-installments
                const THREE_YEARS_AFTER = moment(ORIGIN_MOMENT).add(3, 'years').unix(); // full-amount

                it("should return an expected value of 0", async () => {

                    await expect(termsContract.getExpectedRepaymentValue.callAsync(
                        ARBITRARY_AGREEMENT_ID,
                        new BigNumber(SIXTEEN_DAYS_AFTER)
                    )).to.eventually.bignumber.equal(ZERO_AMOUNT);
                });

                it("should return an expected value equivalent to one installment", async () => {
                    await expect(termsContract.getExpectedRepaymentValue.callAsync(
                        ARBITRARY_AGREEMENT_ID,
                        new BigNumber(ONE_YEAR_AFTER)
                    )).to.eventually.bignumber.equal(INSTALLMENT_AMOUNT);
                });

                it("should return an expected value equivalent to two installments", async () => {
                    await expect(termsContract.getExpectedRepaymentValue.callAsync(
                        ARBITRARY_AGREEMENT_ID,
                        new BigNumber(TWO_YEARS_AFTER)
                    )).to.eventually.bignumber.equal(INSTALLMENT_AMOUNT.mul(2));
                });

                it("should return an expected value equivalent to two installments", async () => {
                    await expect(termsContract.getExpectedRepaymentValue.callAsync(
                        ARBITRARY_AGREEMENT_ID,
                        new BigNumber(TWO_PLUS_YEARS_AFTER)
                    )).to.eventually.bignumber.equal(INSTALLMENT_AMOUNT.mul(2));
                });

                it("should return the full amount of the principal plus interest", async () => {
                    await expect(termsContract.getExpectedRepaymentValue.callAsync(
                        ARBITRARY_AGREEMENT_ID,
                        new BigNumber(THREE_YEARS_AFTER)
                    )).to.eventually.bignumber.equal(FULL_AMOUNT);
                });
            });

            describe("timestamps that occur AFTER the issuance's full term has elapsed", () => {

                const ONE_DAY_AFTER_EXPIRATION = moment(ORIGIN_MOMENT).add(3, 'years').add(1, 'day').unix(); // full-amount
                const FOUR_YEARS_AFTER = moment(ORIGIN_MOMENT).add(4, 'years').unix(); // full-amount

                it("should return the full amount of the principal plus interest", async () => {
                    await expect(termsContract.getExpectedRepaymentValue.callAsync(
                        ARBITRARY_AGREEMENT_ID,
                        new BigNumber(ONE_DAY_AFTER_EXPIRATION)
                    )).to.eventually.bignumber.equal(FULL_AMOUNT);
                });

                it("should return the full amount of the principal plus interest", async () => {
                    await expect(termsContract.getExpectedRepaymentValue.callAsync(
                        ARBITRARY_AGREEMENT_ID,
                        new BigNumber(FOUR_YEARS_AFTER)
                    )).to.eventually.bignumber.equal(FULL_AMOUNT);
                });
            });
        });
    });
  });
