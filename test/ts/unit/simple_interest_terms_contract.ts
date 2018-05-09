// External
import * as chai from "chai";
import * as Units from "../test_utils/units";
import * as ABIDecoder from "abi-decoder";
import * as _ from "lodash";
import { BigNumber } from "bignumber.js";
import * as moment from "moment";

// Wrappers
import { RepaymentRouterContract } from "../../../types/generated/repayment_router";
import { SimpleInterestTermsContractContract } from "../../../types/generated/simple_interest_terms_contract";
import { MockDebtRegistryContract } from "../../../types/generated/mock_debt_registry";
import { MockERC20TokenContract } from "../../../types/generated/mock_e_r_c20_token";
import { MockTokenTransferProxyContract } from "../../../types/generated/mock_token_transfer_proxy";
import { MockTokenRegistryContract } from "../../../types/generated/mock_token_registry";
import { ContractRegistryContract } from "../../../types/generated/contract_registry";

// Constants
import { RepaymentRouterErrorCodes } from "../../../types/errors";

// Test Utils
import { BigNumberSetup } from "../test_utils/bignumber_setup";
import ChaiSetup from "../test_utils/chai_setup";
import { INVALID_OPCODE, REVERT_ERROR } from "../test_utils/constants";
import { LogSimpleInterestTermStart } from "../logs/simple_interest_terms_contract";
import { SimpleInterestParameters } from "../factories/terms_contract_parameters";

// Set up Chai
ChaiSetup.configure();
const expect = chai.expect;

// Configure BigNumber exponentiation
BigNumberSetup.configure();

const repaymentRouterContract = artifacts.require("RepaymentRouter");
const simpleInterestTermsContract = artifacts.require("SimpleInterestTermsContract");
const mockTokenContract = artifacts.require("MockERC20Token");
const contractRegistryArtifact = artifacts.require("ContractRegistry");

contract("SimpleInterestTermsContract (Unit Tests)", async (ACCOUNTS) => {
    let termsContract: SimpleInterestTermsContractContract;
    let router: RepaymentRouterContract;
    let mockToken: MockERC20TokenContract;
    let mockRegistry: MockDebtRegistryContract;
    let mockTokenTransferProxy: MockTokenTransferProxyContract;
    let mockTokenRegistry: MockTokenRegistryContract;
    let contractRegistry: ContractRegistryContract;

    const CONTRACT_OWNER = ACCOUNTS[0];
    const DEBTOR = ACCOUNTS[1];
    const PAYER = ACCOUNTS[2];
    const BENEFICIARY = ACCOUNTS[3];
    const MOCK_DEBT_KERNEL_ADDRESS = ACCOUNTS[4];
    const MOCK_DEBT_TOKEN_ADDRESS = ACCOUNTS[5];
    const MOCK_COLLATERALIZER_ADDRESS = ACCOUNTS[6];
    const ATTACKER = ACCOUNTS[7];

    const TERMS_CONTRACT_PARAMETERS = web3.sha3(
        "any 32 byte hex value can represent the terms contract's parameters",
    );
    const ARBITRARY_AGREEMENT_ID = web3.sha3("any 32 byte hex value can represent an agreement id");

    const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";

    const TX_DEFAULTS = { from: CONTRACT_OWNER, gas: 4000000 };

    before(async () => {
        mockRegistry = await MockDebtRegistryContract.deployed(web3, TX_DEFAULTS);
        mockToken = await MockERC20TokenContract.deployed(web3, TX_DEFAULTS);
        mockTokenTransferProxy = await MockTokenTransferProxyContract.deployed(web3, TX_DEFAULTS);
        mockTokenRegistry = await MockTokenRegistryContract.deployed(web3, TX_DEFAULTS);

        const repaymentRouterTruffle = await repaymentRouterContract.new(
            mockRegistry.address,
            mockTokenTransferProxy.address,
        );

        const contractRegistryTruffle = await contractRegistryArtifact.new(
            MOCK_COLLATERALIZER_ADDRESS,
            MOCK_DEBT_KERNEL_ADDRESS,
            mockRegistry.address,
            MOCK_DEBT_TOKEN_ADDRESS,
            repaymentRouterTruffle.address,
            mockTokenRegistry.address,
            mockTokenTransferProxy.address,
            { from: CONTRACT_OWNER },
        );

        const termsContractTruffle = await simpleInterestTermsContract.new(
            contractRegistryTruffle.address,
        );

        // The typings we use ingest vanilla Web3 contracts, so we convert the
        // contract instance deployed by truffle into a Web3 contract instance
        const repaymentRouterWeb3Contract = web3.eth
            .contract(repaymentRouterTruffle.abi)
            .at(repaymentRouterTruffle.address);

        const termsContractWeb3Contract = web3.eth
            .contract(simpleInterestTermsContract.abi)
            .at(termsContractTruffle.address);

        const contractRegistryAsWeb3Contract = web3.eth
            .contract(contractRegistryArtifact.abi)
            .at(contractRegistryTruffle.address);

        router = new RepaymentRouterContract(repaymentRouterWeb3Contract, TX_DEFAULTS);
        termsContract = new SimpleInterestTermsContractContract(
            termsContractWeb3Contract,
            TX_DEFAULTS,
        );

        contractRegistry = new ContractRegistryContract(
            contractRegistryAsWeb3Contract,
            TX_DEFAULTS,
        );

        // PAYER begins with a balance of 5 ether.
        await mockToken.mockBalanceOfFor.sendTransactionAsync(PAYER, Units.ether(5));

        // TransferProxy is granted an allowance of 3 ether from PAYER.
        await mockToken.mockAllowanceFor.sendTransactionAsync(
            PAYER,
            mockTokenTransferProxy.address,
            Units.ether(3),
        );

        ABIDecoder.addABI(termsContract.abi);
    });

    after(() => {
        ABIDecoder.removeABI(termsContract.abi);
    });

    describe("Initialization", () => {
        it("points to the Contract Registry passed in through the constructor", async () => {
            await expect(termsContract.contractRegistry.callAsync()).to.eventually.equal(
                contractRegistry.address,
            );
        });
    });

    describe("#registerTermStart", async () => {
        describe("agent who is not DebtKernel calls registerTermStart", () => {
            it("should throw", async () => {
                await expect(
                    termsContract.registerTermStart.sendTransactionAsync(
                        ARBITRARY_AGREEMENT_ID,
                        DEBTOR,
                        {
                            from: ATTACKER,
                        },
                    ),
                ).to.eventually.be.rejectedWith(REVERT_ERROR);
            });
        });

        describe("agent who is DebtKernel calls registerTermStart", () => {
            const principalTokenIndex = new BigNumber(8); // token at index 8
            const principalAmount = Units.ether(1); // 1 ether.
            const interestRateFixedPoint = Units.interestRateFixedPoint(2.5); // 2.5% interest rate.
            const amortizationUnitType = new BigNumber(2); // unit code for weeks.
            const termLengthUnits = new BigNumber(4); // term is for 4 weeks.

            const termsParams = SimpleInterestParameters.pack({
                principalTokenIndex,
                principalAmount,
                interestRateFixedPoint,
                amortizationUnitType,
                termLengthUnits,
            });

            describe("agreement refers to different terms contract", () => {
                before(async () => {
                    await mockRegistry.mockGetTermsReturnValueFor.sendTransactionAsync(
                        ARBITRARY_AGREEMENT_ID,
                        NULL_ADDRESS, // NOT the terms contract's address
                        termsParams,
                    );

                    await mockTokenRegistry.mockGetTokenAddressByIndex.sendTransactionAsync(
                        principalTokenIndex,
                        mockToken.address,
                    );
                });

                it("should not emit log indicating success", async () => {
                    const txHash = await termsContract.registerTermStart.sendTransactionAsync(
                        ARBITRARY_AGREEMENT_ID,
                        DEBTOR,
                        {
                            from: MOCK_DEBT_KERNEL_ADDRESS,
                        },
                    );

                    const receipt = await web3.eth.getTransactionReceipt(txHash);
                    expect(_.compact(ABIDecoder.decodeLogs(receipt.logs))).to.be.empty;
                });
            });

            describe("terms contract parameters are invalid", () => {
                describe("token at principalTokenIndex is undefined in registry", () => {
                    before(async () => {
                        await mockRegistry.mockGetTermsReturnValueFor.sendTransactionAsync(
                            ARBITRARY_AGREEMENT_ID,
                            termsContract.address,
                            termsParams,
                        );

                        await mockTokenRegistry.mockGetTokenAddressByIndex.sendTransactionAsync(
                            principalTokenIndex,
                            NULL_ADDRESS,
                        );
                    });

                    it("should not emit log indicating success", async () => {
                        const txHash = await termsContract.registerTermStart.sendTransactionAsync(
                            ARBITRARY_AGREEMENT_ID,
                            DEBTOR,
                            {
                                from: MOCK_DEBT_KERNEL_ADDRESS,
                            },
                        );

                        const receipt = await web3.eth.getTransactionReceipt(txHash);
                        expect(_.compact(ABIDecoder.decodeLogs(receipt.logs))).to.be.empty;
                    });
                });

                describe("amortizationUnitType is not a valid value", () => {
                    before(async () => {
                        const invalidTermsParams = SimpleInterestParameters.pack({
                            principalTokenIndex,
                            principalAmount,
                            interestRateFixedPoint,
                            // Invalid value for the amortizationUnitType
                            amortizationUnitType: new BigNumber(5),
                            termLengthUnits,
                        });

                        await mockRegistry.mockGetTermsReturnValueFor.sendTransactionAsync(
                            ARBITRARY_AGREEMENT_ID,
                            termsContract.address,
                            invalidTermsParams,
                        );

                        await mockTokenRegistry.mockGetTokenAddressByIndex.sendTransactionAsync(
                            principalTokenIndex,
                            mockToken.address,
                        );
                    });

                    it("should not emit log indicating success", async () => {
                        const txHash = await termsContract.registerTermStart.sendTransactionAsync(
                            ARBITRARY_AGREEMENT_ID,
                            DEBTOR,
                            {
                                from: MOCK_DEBT_KERNEL_ADDRESS,
                            },
                        );

                        const receipt = await web3.eth.getTransactionReceipt(txHash);
                        expect(_.compact(ABIDecoder.decodeLogs(receipt.logs))).to.be.empty;
                    });
                });
            });

            describe("Terms are valid for SimpleInterestTermsContract", () => {
                before(async () => {
                    await mockRegistry.mockGetTermsReturnValueFor.sendTransactionAsync(
                        ARBITRARY_AGREEMENT_ID,
                        termsContract.address,
                        termsParams,
                    );

                    await mockTokenRegistry.mockGetTokenAddressByIndex.sendTransactionAsync(
                        principalTokenIndex,
                        mockToken.address,
                    );
                });

                it("should emit log indicating success", async () => {
                    const txHash = await termsContract.registerTermStart.sendTransactionAsync(
                        ARBITRARY_AGREEMENT_ID,
                        DEBTOR,
                        {
                            from: MOCK_DEBT_KERNEL_ADDRESS,
                        },
                    );

                    const receipt = await web3.eth.getTransactionReceipt(txHash);
                    const [logTermStart] = _.compact(ABIDecoder.decodeLogs(receipt.logs));

                    expect(logTermStart).to.deep.equal(
                        LogSimpleInterestTermStart(
                            termsContract.address,
                            ARBITRARY_AGREEMENT_ID,
                            mockToken.address,
                            principalAmount,
                            interestRateFixedPoint,
                            amortizationUnitType,
                            termLengthUnits,
                        ),
                    );
                });
            });
        });
    });

    describe("#registerRepayment", () => {
        describe("agent who is not RepaymentRouter calls registerRepayment", () => {
            it("should throw", async () => {
                await expect(
                    termsContract.registerRepayment.sendTransactionAsync(
                        ARBITRARY_AGREEMENT_ID,
                        PAYER,
                        BENEFICIARY,
                        Units.ether(1),
                        mockToken.address,
                        { from: ATTACKER }, // the message is coming from an attacker.
                    ),
                ).to.eventually.be.rejectedWith(REVERT_ERROR);
            });
        });

        describe("RepaymentRouter calls registerRepayment", () => {
            before(async () => {
                const principalTokenIndex = new BigNumber(0);
                const principalAmount = Units.ether(1);
                const interestRateFixedPoint = Units.interestRateFixedPoint(1);
                const amortizationUnitType = new BigNumber(0);
                const termLengthUnits = new BigNumber(3);

                const termsContractParameters = SimpleInterestParameters.pack({
                    principalTokenIndex,
                    principalAmount,
                    interestRateFixedPoint,
                    amortizationUnitType,
                    termLengthUnits,
                });

                await mockRegistry.mockGetBeneficiaryReturnValueFor.sendTransactionAsync(
                    ARBITRARY_AGREEMENT_ID,
                    BENEFICIARY,
                );

                await mockRegistry.mockGetTermsReturnValueFor.sendTransactionAsync(
                    ARBITRARY_AGREEMENT_ID,
                    termsContract.address,
                    termsContractParameters,
                );

                await mockRegistry.mockGetTermsContractReturnValueFor.sendTransactionAsync(
                    ARBITRARY_AGREEMENT_ID,
                    termsContract.address,
                );

                await mockTokenRegistry.mockGetTokenAddressByIndex.sendTransactionAsync(
                    new BigNumber(0),
                    mockToken.address,
                );
            });

            describe("...with a different `tokenAddress` than expected by the terms contract", () => {
                let dummyToken: MockERC20TokenContract;

                before(async () => {
                    const mockTokenContractTruffle = await mockTokenContract.new();
                    const mockTokenContractWeb3 = web3.eth
                        .contract(mockTokenContractTruffle.abi)
                        .at(mockTokenContractTruffle.address);
                    dummyToken = new MockERC20TokenContract(mockTokenContractWeb3, TX_DEFAULTS);

                    await router.repay.sendTransactionAsync(
                        ARBITRARY_AGREEMENT_ID,
                        Units.ether(10),
                        dummyToken.address, // this is not the token that it's expecting.
                    );
                });

                it("should not record the repayment", async () => {
                    await expect(
                        termsContract.getValueRepaidToDate.callAsync(ARBITRARY_AGREEMENT_ID),
                    ).to.eventually.bignumber.equal(Units.ether(0));
                });
            });

            describe("...with terms contract's expected `tokenAddress`", () => {
                const AMOUNT = Units.ether(1);

                before(async () => {
                    await router.repay.sendTransactionAsync(
                        ARBITRARY_AGREEMENT_ID,
                        AMOUNT,
                        mockToken.address, // this is the address it's expecting.
                        { from: PAYER },
                    );
                });

                it("should record the repayment", async () => {
                    await expect(
                        termsContract.getValueRepaidToDate.callAsync(ARBITRARY_AGREEMENT_ID),
                    ).to.eventually.bignumber.equal(AMOUNT);
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
                    mockToken.address,
                );
            });

            it("should not register any repayment", async () => {
                await expect(
                    termsContract.getValueRepaidToDate.callAsync(NON_EXISTENT_AGREEMENT_ID),
                ).to.eventually.bignumber.equal(Units.ether(0));
            });
        });

        describe("extant debt agreement", () => {
            const EXTANT_AGREEMENT_ID = web3.sha3("this agreement id exists!");

            const principalTokenIndex = new BigNumber(2); // token at index 2 of token registry.
            const principalAmount = Units.ether(100); // 100 ether.
            const interestRate = 1.0; // 1% interest rate (decimal)
            const interestRateFixedPoint = Units.interestRateFixedPoint(interestRate); // 1% interest rate (fixed point)
            const amortizationUnitType = new BigNumber(2); // unit code for weeks.
            const termLengthUnits = new BigNumber(10); // term is for 10 weeks.

            const inputParamsAsHex = SimpleInterestParameters.pack({
                principalTokenIndex,
                principalAmount,
                interestRateFixedPoint,
                amortizationUnitType,
                termLengthUnits,
            });

            before(async () => {
                await mockRegistry.mockGetBeneficiaryReturnValueFor.sendTransactionAsync(
                    EXTANT_AGREEMENT_ID,
                    BENEFICIARY,
                );

                await mockRegistry.mockGetTermsReturnValueFor.sendTransactionAsync(
                    EXTANT_AGREEMENT_ID,
                    termsContract.address,
                    inputParamsAsHex,
                );

                await mockRegistry.mockGetTermsContractReturnValueFor.sendTransactionAsync(
                    EXTANT_AGREEMENT_ID,
                    termsContract.address,
                );

                await mockTokenRegistry.mockGetTokenAddressByIndex.sendTransactionAsync(
                    new BigNumber(2),
                    mockToken.address,
                );
            });

            describe("at time N, PAYER has made an initial payment of 1 ether", () => {
                before(async () => {
                    await router.repay.sendTransactionAsync(
                        EXTANT_AGREEMENT_ID,
                        Units.ether(1),
                        mockToken.address,
                        { from: PAYER },
                    );
                });

                it("returns 1 ether", async () => {
                    await expect(
                        termsContract.getValueRepaidToDate.callAsync(EXTANT_AGREEMENT_ID),
                    ).to.eventually.bignumber.equal(Units.ether(1));
                });
            });

            describe("at time M, PAYER has made an additional payment of 1 ether", () => {
                before(async () => {
                    await router.repay.sendTransactionAsync(
                        EXTANT_AGREEMENT_ID,
                        Units.ether(1),
                        mockToken.address,
                        { from: PAYER },
                    );
                });

                it("returns 2 ether", async () => {
                    await expect(
                        termsContract.getValueRepaidToDate.callAsync(EXTANT_AGREEMENT_ID),
                    ).to.eventually.bignumber.equal(Units.ether(2));
                });
            });
        });
    });

    describe("#unpackParametersFromBytes", () => {
        const principalTokenIndex = new BigNumber(6); // token at index 6 of token registry.
        const principalAmount = Units.ether(200); // 200 ether.
        const interestRateFixedPoint = Units.interestRateFixedPoint(1.5); // 1.5% interest rate (fixed point).
        const amortizationUnitType = new BigNumber(4); // unit code for years.
        const termLengthUnits = new BigNumber(10); // term is for 10 years.

        const inputParamsAsHex = SimpleInterestParameters.pack({
            principalTokenIndex,
            principalAmount,
            interestRateFixedPoint,
            amortizationUnitType,
            termLengthUnits,
        });

        it("correctly unpacks parameters into their respective types given raw byte data", async () => {
            const [
                unpackedPrincipalTokenIndex,
                unpackedPrincipalAmount,
                unpackedFixedPointInterestRate,
                unpackedAmortizationUnitType,
                unpackedTermLength,
            ] = await termsContract.unpackParametersFromBytes.callAsync(inputParamsAsHex);

            expect(unpackedPrincipalTokenIndex).to.bignumber.equal(principalTokenIndex);
            expect(unpackedPrincipalAmount).to.bignumber.equal(principalAmount);
            expect(unpackedFixedPointInterestRate).to.bignumber.equal(interestRateFixedPoint);
            expect(unpackedAmortizationUnitType).to.bignumber.equal(amortizationUnitType);
            expect(unpackedTermLength).to.bignumber.equal(termLengthUnits);
        });
    });

    describe("#getExpectedRepaymentValue", () => {
        describe("when termsContract associated w/ debt agreement is not `this`", () => {
            before(async () => {
                await mockRegistry.mockGetTermsContractReturnValueFor.sendTransactionAsync(
                    ARBITRARY_AGREEMENT_ID,
                    ATTACKER, // this is an attacker's address and not the contract's address.
                );
            });

            it("should throw", async () => {
                await expect(
                    termsContract.getExpectedRepaymentValue.callAsync(
                        ARBITRARY_AGREEMENT_ID,
                        new BigNumber(moment().unix()),
                    ),
                ).to.eventually.be.rejectedWith(REVERT_ERROR);
            });
        });

        describe("when termsContractParameters associated w/ debt agreement malformed", () => {
            const principalTokenIndex = new BigNumber(0);
            const principalAmount = Units.ether(10);
            const interestRateFixedPoint = Units.interestRateFixedPoint(1);
            const amortizationUnitType = new BigNumber(10); // invalid unit code.
            const termLengthUnits = new BigNumber(10);

            const invalidTermsParams = SimpleInterestParameters.pack({
                principalTokenIndex,
                principalAmount,
                interestRateFixedPoint,
                amortizationUnitType,
                termLengthUnits,
            });

            describe("amortizationUnitType is not one of the valid types", () => {
                before(async () => {
                    await mockRegistry.mockGetTermsContractReturnValueFor.sendTransactionAsync(
                        ARBITRARY_AGREEMENT_ID,
                        termsContract.address,
                    );

                    await mockRegistry.mockGetTermsContractParameters.sendTransactionAsync(
                        ARBITRARY_AGREEMENT_ID,
                        invalidTermsParams,
                    );

                    await mockTokenRegistry.mockGetTokenAddressByIndex.sendTransactionAsync(
                        principalTokenIndex,
                        mockToken.address,
                    );
                });

                it("should throw", async () => {
                    await expect(
                        termsContract.getExpectedRepaymentValue.callAsync(
                            ARBITRARY_AGREEMENT_ID,
                            new BigNumber(moment().unix()),
                        ),
                    ).to.eventually.be.rejectedWith(REVERT_ERROR);
                });
            });
        });

        describe("when termsContractParameters associated w/ debt agreement are well-formed", () => {
            /*
            The params define a simple interest contract with the below valid terms:
              - Principal: 12 ether
              - Interest rate: 1%
              - Amortization Unit Type: year
              - Term length: 3
            */
            const principalTokenIndex = new BigNumber(0); // arbitrary index for principal token in registry
            const principalAmount = Units.ether(12); // 12 ether principal.
            const interestRateDecimalPercentage = 1; // 1% interest rate (decimal percentage).
            const interestRateFixedPoint = Units.interestRateFixedPoint(1); // 1% interest rate (fixed point).
            const amortizationUnitType = new BigNumber(4); // unit code for years.
            const termLengthUnits = new BigNumber(3); // term is three years.

            const validTermsParams = SimpleInterestParameters.pack({
                principalTokenIndex,
                principalAmount,
                interestRateFixedPoint,
                amortizationUnitType,
                termLengthUnits,
            });

            const PERCENTAGE_SCALING_FACTOR = 100;

            const ORIGIN_MOMENT = moment();
            const BLOCK_ISSUANCE_TIMESTAMP = ORIGIN_MOMENT.unix();

            const ZERO_AMOUNT = Units.ether(0);
            let INSTALLMENT_AMOUNT: BigNumber;
            let FULL_AMOUNT: BigNumber;

            before(async () => {
                const TOTAL_INTEREST = principalAmount
                    .mul(interestRateDecimalPercentage)
                    .div(PERCENTAGE_SCALING_FACTOR);

                FULL_AMOUNT = principalAmount.add(TOTAL_INTEREST);

                INSTALLMENT_AMOUNT = FULL_AMOUNT.div(termLengthUnits);

                await mockRegistry.mockGetTermsContractReturnValueFor.sendTransactionAsync(
                    ARBITRARY_AGREEMENT_ID,
                    termsContract.address,
                );

                await mockRegistry.mockGetTermsContractParameters.sendTransactionAsync(
                    ARBITRARY_AGREEMENT_ID,
                    validTermsParams,
                );

                await mockRegistry.mockGetIssuanceBlockTimestamp.sendTransactionAsync(
                    ARBITRARY_AGREEMENT_ID,
                    new BigNumber(BLOCK_ISSUANCE_TIMESTAMP),
                );

                await mockTokenRegistry.mockGetTokenAddressByIndex.sendTransactionAsync(
                    principalTokenIndex,
                    mockToken.address,
                );
            });

            describe("timestamps that occur BEFORE the block issuance's timestamp", () => {
                const ONE_YEAR_BEFORE = moment(ORIGIN_MOMENT)
                    .subtract(1, "year")
                    .unix(); // zero-amount
                const ONE_DAY_BEFORE = moment(ORIGIN_MOMENT)
                    .subtract(1, "day")
                    .unix(); // zero-amount

                it("should return an expected value of 0", async () => {
                    await expect(
                        termsContract.getExpectedRepaymentValue.callAsync(
                            ARBITRARY_AGREEMENT_ID,
                            new BigNumber(ONE_YEAR_BEFORE),
                        ),
                    ).to.eventually.bignumber.equal(ZERO_AMOUNT);
                });

                it("should return an expected value of 0", async () => {
                    await expect(
                        termsContract.getExpectedRepaymentValue.callAsync(
                            ARBITRARY_AGREEMENT_ID,
                            new BigNumber(ONE_DAY_BEFORE),
                        ),
                    ).to.eventually.bignumber.equal(ZERO_AMOUNT);
                });
            });

            describe("timestamps that occur DURING the issuance's term length", () => {
                const SIXTEEN_DAYS_AFTER = moment(ORIGIN_MOMENT)
                    .add(16, "days")
                    .unix(); // zero-amount
                const ONE_YEAR_AFTER = moment(ORIGIN_MOMENT)
                    .add(1, "year")
                    .unix(); // one-installment
                const TWO_YEARS_AFTER = moment(ORIGIN_MOMENT)
                    .add(2, "years")
                    .unix(); // two-installments
                const TWO_PLUS_YEARS_AFTER = moment(ORIGIN_MOMENT)
                    .add(2, "years")
                    .add(4, "months")
                    .unix(); // two-installments
                const THREE_YEARS_AFTER = moment(ORIGIN_MOMENT)
                    .add(3, "years")
                    .unix(); // full-amount

                it("should return an expected value of 0", async () => {
                    await expect(
                        termsContract.getExpectedRepaymentValue.callAsync(
                            ARBITRARY_AGREEMENT_ID,
                            new BigNumber(SIXTEEN_DAYS_AFTER),
                        ),
                    ).to.eventually.bignumber.equal(ZERO_AMOUNT);
                });

                it("should return an expected value equivalent to one installment", async () => {
                    await expect(
                        termsContract.getExpectedRepaymentValue.callAsync(
                            ARBITRARY_AGREEMENT_ID,
                            new BigNumber(ONE_YEAR_AFTER),
                        ),
                    ).to.eventually.bignumber.equal(INSTALLMENT_AMOUNT);
                });

                it("should return an expected value equivalent to two installments", async () => {
                    await expect(
                        termsContract.getExpectedRepaymentValue.callAsync(
                            ARBITRARY_AGREEMENT_ID,
                            new BigNumber(TWO_YEARS_AFTER),
                        ),
                    ).to.eventually.bignumber.equal(INSTALLMENT_AMOUNT.mul(2));
                });

                it("should return an expected value equivalent to two installments", async () => {
                    await expect(
                        termsContract.getExpectedRepaymentValue.callAsync(
                            ARBITRARY_AGREEMENT_ID,
                            new BigNumber(TWO_PLUS_YEARS_AFTER),
                        ),
                    ).to.eventually.bignumber.equal(INSTALLMENT_AMOUNT.mul(2));
                });

                it("should return the full amount of the principal plus interest", async () => {
                    await expect(
                        termsContract.getExpectedRepaymentValue.callAsync(
                            ARBITRARY_AGREEMENT_ID,
                            new BigNumber(THREE_YEARS_AFTER),
                        ),
                    ).to.eventually.bignumber.equal(FULL_AMOUNT);
                });
            });

            describe("timestamps that occur AFTER the issuance's full term has elapsed", () => {
                const ONE_DAY_AFTER_EXPIRATION = moment(ORIGIN_MOMENT)
                    .add(3, "years")
                    .add(1, "day")
                    .unix(); // full-amount
                const FOUR_YEARS_AFTER = moment(ORIGIN_MOMENT)
                    .add(4, "years")
                    .unix(); // full-amount

                it("should return the full amount of the principal plus interest", async () => {
                    await expect(
                        termsContract.getExpectedRepaymentValue.callAsync(
                            ARBITRARY_AGREEMENT_ID,
                            new BigNumber(ONE_DAY_AFTER_EXPIRATION),
                        ),
                    ).to.eventually.bignumber.equal(FULL_AMOUNT);
                });

                it("should return the full amount of the principal plus interest", async () => {
                    await expect(
                        termsContract.getExpectedRepaymentValue.callAsync(
                            ARBITRARY_AGREEMENT_ID,
                            new BigNumber(FOUR_YEARS_AFTER),
                        ),
                    ).to.eventually.bignumber.equal(FULL_AMOUNT);
                });
            });
        });
    });
});
