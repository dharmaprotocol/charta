import * as ABIDecoder from "abi-decoder";
import * as chai from "chai";
import * as _ from "lodash";
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

import {LogError, LogNFTRepayment, LogRepayment} from "../logs/repayment_router";

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

        ABIDecoder.addABI(router.abi);
    });

    after(() => {
        ABIDecoder.removeABI(router.abi);
    });

    describe("Initialization", () => {
        it("points to DebtRegistry passed in through the constructor");
        it("points to RepaymentRouter passed in through the constructor");
    });

    describe("#registerRepayment", () => {
        describe("agent who is not RepaymentRouter calls registerRepayment", () => {
            it("should throw");
        });

        describe("RepaymentRouter calls registerRepayment", () => {
            describe("...with a different `tokenAddress` than expected by the terms contract", () => {
                // Not entirely sure if you can test this without creating some sort of mock
                // contract to do this on your behalf -- to my knowledge, return values
                // from solidity methods can only be accessed by contracts (and not just
                // end users).  Double check this, though
                it("should return false");
                it("should not record the repayment in any capacity");
            });

            describe("...with terms contract's expected `tokenAddress`", () => {
                it("should return true (indicating success)");

                // Up to you whether we test for some sort of internal representation of this,
                // or we just use the #getValueRepaid method to check this.
                it("should record the repayment");
            });
        });
    });

    describe("#getValueRepaid", () => {
        describe("nonexistent debt agreement", () => {
            it("should throw");
        });

        describe("extant debt agreement", () => {
            describe("at time 0", () => {
                it("returns 0");
            });

            describe("at time N, when user has repaid X amount", () => {
                it("returns X");
            });

            describe("at time Z > N, when user queries amount repaid at time N", () => {
                it("returns X");
            });

            describe("at time Z, when user has repaid Y amount", () => {
                it("returns Y");
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
