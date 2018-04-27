import { BigNumber } from "bignumber.js";

import * as ABIDecoder from "abi-decoder";
import * as chai from "chai";
import * as _ from "lodash";
import * as moment from "moment";
import * as Web3 from "web3";
import * as Units from "../test_utils/units";

import {
    LogDebtOrderCancelled,
    LogDebtOrderFilled,
    LogError,
    LogIssuanceCancelled,
} from "../logs/debt_kernel";

import { DebtKernelContract } from "../../../types/generated/debt_kernel";
import { MockDebtTokenContract } from "../../../types/generated/mock_debt_token";
import { MockERC20TokenContract } from "../../../types/generated/mock_e_r_c20_token";
import { MockTokenTransferProxyContract } from "../../../types/generated/mock_token_transfer_proxy";
import { MockTermsContractContract } from "../../../types/generated/mock_terms_contract";
import { RepaymentRouterContract } from "../../../types/generated/repayment_router";

import { DebtKernelErrorCodes } from "../../../types/errors";
import { DebtOrder, SignedDebtOrder } from "../../../types/kernel/debt_order";
import {
    IssuanceCommitment,
    SignedIssuanceCommitment,
} from "../../../types/kernel/issuance_commitment";

import { BigNumberSetup } from "../test_utils/bignumber_setup";
import ChaiSetup from "../test_utils/chai_setup";
import { INVALID_OPCODE, REVERT_ERROR } from "../test_utils/constants";
import { Web3Utils } from "../../../utils/web3_utils";

import { DebtOrderFactory } from "../factories/debt_order_factory";

import { TxDataPayable } from "../../../types/common";

// Configure BigNumber exponentiation
BigNumberSetup.configure();

// Set up Chai
ChaiSetup.configure();
const expect = chai.expect;

// Set up Web3 utils
const web3Utils = new Web3Utils(web3);

const debtKernelContract = artifacts.require("DebtKernel");
const mockDebtTokenContract = artifacts.require("MockDebtToken");
const mockTermsContractArtifacts = artifacts.require("MockTermsContract");

contract("Debt Kernel (Unit Tests)", async (ACCOUNTS) => {
    let kernel: DebtKernelContract;
    let repaymentRouter: RepaymentRouterContract;
    let mockDebtToken: MockDebtTokenContract;
    let mockPrincipalToken: MockERC20TokenContract;
    let mockTokenTransferProxy: MockTokenTransferProxyContract;
    let mockTermsContract: MockTermsContractContract;

    let orderFactory: DebtOrderFactory;
    let defaultOrderParams: { [key: string]: any };

    const CONTRACT_OWNER = ACCOUNTS[0];
    const ATTACKER = ACCOUNTS[1];

    const DEBTOR_1 = ACCOUNTS[5];
    const DEBTOR_2 = ACCOUNTS[6];
    const DEBTOR_3 = ACCOUNTS[7];
    const DEBTORS = [DEBTOR_1, DEBTOR_2, DEBTOR_3];

    const CREDITOR_1 = ACCOUNTS[8];
    const CREDITOR_2 = ACCOUNTS[9];
    const CREDITOR_3 = ACCOUNTS[10];
    const CREDITORS = [CREDITOR_1, CREDITOR_2, CREDITOR_3];

    const UNDERWRITER = ACCOUNTS[11];
    const RELAYER = ACCOUNTS[12];

    const MALICIOUS_TERMS_CONTRACTS = ACCOUNTS[13];

    const TERMS_CONTRACT_PARAMETERS = web3.sha3("arbitrary terms contract parameters");

    const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";

    const TX_DEFAULTS = { from: CONTRACT_OWNER, gas: 4712388 };

    const reset = async () => {
        mockTokenTransferProxy = await MockTokenTransferProxyContract.deployed(web3, TX_DEFAULTS);

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
        const kernelContractInstance = await debtKernelContract.new(mockTokenTransferProxy.address);
        const mockTermsContractInstance = await mockTermsContractArtifacts.new();

        // Step 2: Instantiate a web3 instance of the contract.
        const kernelWeb3ContractInstance = web3.eth
            .contract(debtKernelContract.abi)
            .at(kernelContractInstance.address);
        const mockTermsContractWeb3ContractInstance = web3.eth
            .contract(mockTermsContractArtifacts.abi)
            .at(mockTermsContractInstance.address);

        // Step 3: Instantiate a statically-typed version of the contract.
        kernel = new DebtKernelContract(kernelWeb3ContractInstance, TX_DEFAULTS);
        mockTermsContract = new MockTermsContractContract(
            mockTermsContractWeb3ContractInstance,
            TX_DEFAULTS,
        );

        // Load current Repayment Router for use as a version address in the Issuance
        // commitments
        repaymentRouter = await RepaymentRouterContract.deployed(web3, TX_DEFAULTS);

        mockDebtToken = await MockDebtTokenContract.deployed(web3, TX_DEFAULTS);
        mockPrincipalToken = await MockERC20TokenContract.deployed(web3, TX_DEFAULTS);

        const latestBlockTime = await web3Utils.getLatestBlockTime();

        defaultOrderParams = {
            creditor: CREDITOR_1,
            creditorFee: Units.ether(0.002),
            debtKernelContract: kernel.address,
            debtOrderVersion: kernel.address,
            debtTokenContract: mockDebtToken.address,
            debtor: DEBTOR_1,
            debtorFee: Units.ether(0.001),
            expirationTimestampInSec: new BigNumber(
                moment
                    .unix(latestBlockTime)
                    .add(30, "days")
                    .unix(),
            ),
            issuanceVersion: repaymentRouter.address,
            orderSignatories: { debtor: DEBTOR_1, creditor: CREDITOR_1, underwriter: UNDERWRITER },
            principalAmount: Units.ether(1),
            principalTokenAddress: mockPrincipalToken.address,
            relayer: RELAYER,
            relayerFee: Units.ether(0.0015),
            termsContract: mockTermsContract.address,
            termsContractParameters: TERMS_CONTRACT_PARAMETERS,
            underwriter: UNDERWRITER,
            underwriterFee: Units.ether(0.0015),
            underwriterRiskRating: Units.underwriterRiskRatingFixedPoint(1.35),
        };

        orderFactory = new DebtOrderFactory(defaultOrderParams);

        // Setup ABI decoder in order to decode logs
        ABIDecoder.addABI(debtKernelContract.abi);
        ABIDecoder.addABI(mockDebtTokenContract.abi);
    };

    before(reset);

    describe("Initialization & Upgrades", async () => {
        describe("non-owner sets debt token contract pointer", () => {
            it("should throw", async () => {
                expect(
                    kernel.setDebtToken.sendTransactionAsync(ATTACKER, { from: ATTACKER }),
                ).to.eventually.be.rejectedWith(REVERT_ERROR);
            });
        });

        describe("owner updates debt token contract pointer", () => {
            before(async () => {
                await kernel.setDebtToken.sendTransactionAsync(mockDebtToken.address, {
                    from: CONTRACT_OWNER,
                });
            });

            it("should point to new debt token contract", async () => {
                await expect(kernel.debtToken.callAsync()).to.eventually.equal(
                    mockDebtToken.address,
                );
            });
        });
    });

    describe("#fillDebtOrder", () => {
        let debtOrder: SignedDebtOrder;

        const testShouldReturnError = async (
            order: SignedDebtOrder,
            errorCode: number,
            signaturesR?: string[],
            signaturesS?: string[],
            signaturesV?: number[],
        ) => {
            const txHash = await kernel.fillDebtOrder.sendTransactionAsync(
                order.getCreditor(),
                order.getOrderAddresses(),
                order.getOrderValues(),
                order.getOrderBytes32(),
                signaturesV || order.getSignaturesV(),
                signaturesR || order.getSignaturesR(),
                signaturesS || order.getSignaturesS(),
            );

            const receipt = await web3.eth.getTransactionReceipt(txHash);
            const [errorLog] = _.compact(ABIDecoder.decodeLogs(receipt.logs));

            expect(errorLog).to.deep.equal(
                LogError(kernel.address, errorCode, order.getDebtOrderHash()),
            );
        };

        const resetMocks = async () => {
            await mockDebtToken.reset.sendTransactionAsync();
            await mockTokenTransferProxy.reset.sendTransactionAsync();
            await mockPrincipalToken.reset.sendTransactionAsync();
        };

        const testOrderFill = (filler: string, setupDebtOrder: () => Promise<void>) => {
            return () => {
                let orderFilledLog: ABIDecoder.DecodedLog;

                before(async () => {
                    await setupDebtOrder();

                    await mockDebtToken.reset.sendTransactionAsync();
                    await mockDebtToken.mockCreateReturnValue.sendTransactionAsync(
                        new BigNumber(debtOrder.getIssuanceCommitment().getHash()),
                    );

                    await mockPrincipalToken.reset.sendTransactionAsync();
                    await mockPrincipalToken.mockBalanceOfFor.sendTransactionAsync(
                        debtOrder.getCreditor(),
                        debtOrder.getPrincipalAmount().plus(debtOrder.getCreditorFee()),
                    );
                    await mockPrincipalToken.mockAllowanceFor.sendTransactionAsync(
                        debtOrder.getCreditor(),
                        mockTokenTransferProxy.address,
                        debtOrder.getPrincipalAmount().plus(debtOrder.getCreditorFee()),
                    );

                    await mockTermsContract.reset.sendTransactionAsync();
                    await mockTermsContract.mockRegisterTermStartReturnValue.sendTransactionAsync(
                        debtOrder.getIssuanceCommitment().getHash(),
                        debtOrder.getDebtor(),
                        true,
                    );

                    const txHash = await kernel.fillDebtOrder.sendTransactionAsync(
                        debtOrder.getCreditor(),
                        debtOrder.getOrderAddresses(),
                        debtOrder.getOrderValues(),
                        debtOrder.getOrderBytes32(),
                        debtOrder.getSignaturesV(),
                        debtOrder.getSignaturesR(),
                        debtOrder.getSignaturesS(),
                        { from: filler },
                    );

                    const receipt = await web3.eth.getTransactionReceipt(txHash);
                    [orderFilledLog] = _.compact(ABIDecoder.decodeLogs(receipt.logs));
                });

                it("should mint debt token to creditor with issuance parameters", async () => {
                    await expect(
                        mockDebtToken.wasCreateCalledWith.callAsync(
                            debtOrder.getIssuanceCommitment().getVersion(),
                            debtOrder.getCreditor(),
                            debtOrder.getDebtor(),
                            debtOrder.getIssuanceCommitment().getUnderwriter(),
                            debtOrder.getIssuanceCommitment().getUnderwriterRiskRating(),
                            debtOrder.getIssuanceCommitment().getTermsContract(),
                            debtOrder.getIssuanceCommitment().getTermsContractParameters(),
                            debtOrder.getIssuanceCommitment().getSalt(),
                        ),
                    ).to.eventually.be.true;
                });

                it("should transfer underwriter fee to underwriter", async () => {
                    if (debtOrder.getIssuanceCommitment().getUnderwriter() !== NULL_ADDRESS) {
                        await expect(
                            mockTokenTransferProxy.wasTransferFromCalledWith.callAsync(
                                mockPrincipalToken.address,
                                debtOrder.getCreditor(),
                                debtOrder.getIssuanceCommitment().getUnderwriter(),
                                debtOrder.getUnderwriterFee(),
                            ),
                        ).to.eventually.be.true;
                    }
                });

                it("should transfer relayer fee to relayer", async () => {
                    if (debtOrder.getRelayer() !== NULL_ADDRESS) {
                        await expect(
                            mockTokenTransferProxy.wasTransferFromCalledWith.callAsync(
                                mockPrincipalToken.address,
                                debtOrder.getCreditor(),
                                debtOrder.getRelayer(),
                                debtOrder.getRelayerFee(),
                            ),
                        ).to.eventually.be.true;
                    }
                });

                it("should transfer principal minus debtorFee to debtor", async () => {
                    if (debtOrder.getPrincipalAmount().greaterThan(0)) {
                        await expect(
                            mockTokenTransferProxy.wasTransferFromCalledWith.callAsync(
                                mockPrincipalToken.address,
                                debtOrder.getCreditor(),
                                debtOrder.getDebtor(),
                                debtOrder.getPrincipalAmount().minus(debtOrder.getDebtorFee()),
                            ),
                        ).to.eventually.be.true;
                    }
                });

                it("should emit order filled log", () => {
                    expect(orderFilledLog).to.deep.equal(
                        LogDebtOrderFilled(
                            kernel.address,
                            debtOrder.getIssuanceCommitment().getHash(),
                            debtOrder.getPrincipalAmount(),
                            debtOrder.getPrincipalTokenAddress(),
                            debtOrder.getIssuanceCommitment().getUnderwriter(),
                            debtOrder.getUnderwriterFee(),
                            debtOrder.getRelayer(),
                            debtOrder.getRelayerFee(),
                        ),
                    );
                });

                it("should register term start with terms contract", async () => {
                    await expect(
                        mockTermsContract.wasRegisterTermStartCalledWith.callAsync(
                            debtOrder.getIssuanceCommitment().getHash(),
                            debtOrder.getDebtor(),
                        ),
                    ).to.eventually.be.true;
                });
            };
        };

        describe("User fills valid, consensual debt order", () => {
            describe(
                "...with underwriter and relayer",
                testOrderFill(CONTRACT_OWNER, async () => {
                    debtOrder = await orderFactory.generateDebtOrder();
                }),
            );

            describe(
                "...with neither underwriter nor relayer",
                testOrderFill(CONTRACT_OWNER, async () => {
                    debtOrder = await orderFactory.generateDebtOrder({
                        creditorFee: new BigNumber(0),
                        debtorFee: new BigNumber(0),
                        relayer: NULL_ADDRESS,
                        relayerFee: new BigNumber(0),
                        underwriter: NULL_ADDRESS,
                        underwriterFee: new BigNumber(0),
                        underwriterRiskRating: new BigNumber(0),
                    });
                }),
            );

            describe(
                "...with relayer but no underwriter",
                testOrderFill(CONTRACT_OWNER, async () => {
                    debtOrder = await orderFactory.generateDebtOrder({
                        creditorFee: defaultOrderParams.relayerFee.dividedBy(2),
                        debtorFee: defaultOrderParams.relayerFee.dividedBy(2),
                        underwriter: NULL_ADDRESS,
                        underwriterFee: new BigNumber(0),
                        underwriterRiskRating: new BigNumber(0),
                    });
                }),
            );

            describe(
                "...with underwriter but no relayer",
                testOrderFill(CONTRACT_OWNER, async () => {
                    debtOrder = await orderFactory.generateDebtOrder({
                        relayer: NULL_ADDRESS,
                        relayerFee: new BigNumber(0),
                        underwriterFee: defaultOrderParams.creditorFee.plus(
                            defaultOrderParams.debtorFee,
                        ),
                    });
                }),
            );

            describe(
                "...with no principal and no creditor / debtor fees",
                testOrderFill(CONTRACT_OWNER, async () => {
                    debtOrder = await orderFactory.generateDebtOrder({
                        creditorFee: new BigNumber(0),
                        debtorFee: new BigNumber(0),
                        principalAmount: new BigNumber(0),
                        relayer: NULL_ADDRESS,
                        relayerFee: new BigNumber(0),
                        underwriter: NULL_ADDRESS,
                        underwriterFee: new BigNumber(0),
                        underwriterRiskRating: new BigNumber(0),
                    });
                }),
            );

            describe(
                "...with no principal and nonzero creditor fee",
                testOrderFill(CONTRACT_OWNER, async () => {
                    debtOrder = await orderFactory.generateDebtOrder({
                        creditorFee: Units.ether(0.002),
                        debtorFee: new BigNumber(0),
                        principalAmount: new BigNumber(0),
                        relayer: NULL_ADDRESS,
                        relayerFee: new BigNumber(0),
                        underwriter: UNDERWRITER,
                        underwriterFee: Units.ether(0.002),
                    });
                }),
            );

            describe(
                "...when creditor and debtor are same address",
                testOrderFill(CONTRACT_OWNER, async () => {
                    debtOrder = await orderFactory.generateDebtOrder({
                        creditor: CREDITOR_1,
                        creditorFee: new BigNumber(0),
                        debtor: CREDITOR_1,
                        debtorFee: new BigNumber(0),
                        orderSignatories: {
                            creditor: CREDITOR_1,
                            debtor: CREDITOR_1,
                        },
                        principalAmount: new BigNumber(0),
                        relayer: NULL_ADDRESS,
                        relayerFee: new BigNumber(0),
                        underwriter: NULL_ADDRESS,
                        underwriterFee: new BigNumber(0),
                        underwriterRiskRating: new BigNumber(0),
                    });
                }),
            );

            describe(
                "...when submitted by creditor *without* creditor signature attached",
                testOrderFill(CREDITOR_1, async () => {
                    debtOrder = await orderFactory.generateDebtOrder({
                        creditor: CREDITOR_1,
                        orderSignatories: {
                            debtor: DEBTOR_1,
                            underwriter: UNDERWRITER,
                        },
                    });
                }),
            );

            describe(
                "...when submitted by debtor *without* debtor signature attached",
                testOrderFill(DEBTOR_1, async () => {
                    debtOrder = await orderFactory.generateDebtOrder({
                        debtor: DEBTOR_1,
                        orderSignatories: {
                            creditor: CREDITOR_1,
                            underwriter: UNDERWRITER,
                        },
                    });
                }),
            );

            describe(
                "...when submitted by underwriter *without* underwriter signature attached",
                testOrderFill(UNDERWRITER, async () => {
                    debtOrder = await orderFactory.generateDebtOrder({
                        orderSignatories: {
                            creditor: CREDITOR_1,
                            debtor: DEBTOR_1,
                        },
                        underwriter: UNDERWRITER,
                    });
                }),
            );
        });

        describe("User fills invalid debt order", () => {
            describe("...where there is no underwriter, but underwriter fee is nonzero", () => {
                before(async () => {
                    await resetMocks();
                    debtOrder = await orderFactory.generateDebtOrder({
                        creditorFee: defaultOrderParams.relayerFee
                            .plus(Units.ether(0.001))
                            .dividedBy(2),
                        debtorFee: defaultOrderParams.relayerFee
                            .plus(Units.ether(0.001))
                            .dividedBy(2),
                        underwriter: NULL_ADDRESS,
                        underwriterFee: Units.ether(0.001),
                        underwriterRiskRating: new BigNumber(0),
                    });
                });

                it("should return UNSPECIFIED_FEE_RECIPIENT error", async () => {
                    await testShouldReturnError(
                        debtOrder,
                        DebtKernelErrorCodes.ORDER_INVALID_UNSPECIFIED_FEE_RECIPIENT,
                    );
                });
            });

            describe("...where there is no relayer, but relayer fee is nonzero", () => {
                before(async () => {
                    await resetMocks();
                    debtOrder = await orderFactory.generateDebtOrder({
                        relayer: NULL_ADDRESS,
                        relayerFee: Units.ether(0.003),
                        underwriterFee: new BigNumber(0),
                    });
                });

                it("should return UNSPECIFIED_FEE_RECIPIENT error", async () => {
                    await testShouldReturnError(
                        debtOrder,
                        DebtKernelErrorCodes.ORDER_INVALID_UNSPECIFIED_FEE_RECIPIENT,
                    );
                });
            });

            describe("...when creditor + debtor fees < underwriter + relayer fees", () => {
                before(async () => {
                    await resetMocks();
                    debtOrder = await orderFactory.generateDebtOrder({
                        creditorFee: Units.ether(0.001),
                        debtorFee: Units.ether(0.001),
                        relayerFee: Units.ether(0.0025),
                        underwriterFee: Units.ether(0.0025),
                    });
                });

                it("should return INSUFFICIENT_OR_EXCESSIVE_FEES error", async () => {
                    await testShouldReturnError(
                        debtOrder,
                        DebtKernelErrorCodes.ORDER_INVALID_INSUFFICIENT_OR_EXCESSIVE_FEES,
                    );
                });
            });

            describe("...when creditor + debtor fees > underwriter + relayer fees", () => {
                before(async () => {
                    await resetMocks();
                    debtOrder = await orderFactory.generateDebtOrder({
                        creditorFee: Units.ether(0.006),
                        debtorFee: Units.ether(0.001),
                        relayerFee: Units.ether(0.0025),
                        underwriterFee: Units.ether(0.0025),
                    });
                });

                it("should return INSUFFICIENT_OR_EXCESSIVE_FEES error", async () => {
                    await testShouldReturnError(
                        debtOrder,
                        DebtKernelErrorCodes.ORDER_INVALID_INSUFFICIENT_OR_EXCESSIVE_FEES,
                    );
                });
            });

            describe("...when creditorFee + principal > 0, but transfer proxy has insufficient allowance", () => {
                before(async () => {
                    await resetMocks();
                    await mockPrincipalToken.mockBalanceOfFor.sendTransactionAsync(
                        debtOrder.getCreditor(),
                        debtOrder.getPrincipalAmount().plus(debtOrder.getCreditorFee()),
                    );
                    await mockPrincipalToken.mockAllowanceFor.sendTransactionAsync(
                        debtOrder.getCreditor(),
                        mockTokenTransferProxy.address,
                        debtOrder
                            .getPrincipalAmount()
                            .plus(debtOrder.getCreditorFee())
                            .minus(Units.ether(0.5)),
                    );

                    debtOrder = await orderFactory.generateDebtOrder();
                });

                it("should return CREDITOR_BALANCE_OR_ALLOWANCE_INSUFFICIENT error", async () => {
                    await testShouldReturnError(
                        debtOrder,
                        DebtKernelErrorCodes.CREDITOR_BALANCE_OR_ALLOWANCE_INSUFFICIENT,
                    );
                });
            });

            describe("...when creditorFee + principal > 0, but creditor does not have sufficient balance", () => {
                before(async () => {
                    await resetMocks();
                    await mockPrincipalToken.mockBalanceOfFor.sendTransactionAsync(
                        debtOrder.getCreditor(),
                        debtOrder
                            .getPrincipalAmount()
                            .plus(debtOrder.getCreditorFee())
                            .minus(1),
                    );
                    await mockPrincipalToken.mockAllowanceFor.sendTransactionAsync(
                        debtOrder.getCreditor(),
                        mockTokenTransferProxy.address,
                        debtOrder.getPrincipalAmount().plus(debtOrder.getCreditorFee()),
                    );

                    debtOrder = await orderFactory.generateDebtOrder();
                });

                it("should return CREDITOR_BALANCE_OR_ALLOWANCE_INSUFFICIENT error", async () => {
                    await testShouldReturnError(
                        debtOrder,
                        DebtKernelErrorCodes.CREDITOR_BALANCE_OR_ALLOWANCE_INSUFFICIENT,
                    );
                });
            });

            describe("...when debtorFee > principal", () => {
                before(async () => {
                    await resetMocks();
                    debtOrder = await orderFactory.generateDebtOrder({
                        creditorFee: new BigNumber(0),
                        debtorFee: Units.ether(1.1),
                        principalAmount: Units.ether(1),
                        relayerFee: Units.ether(0.55),
                        underwriterFee: Units.ether(0.55),
                    });
                });

                it("should return INSUFFICIENT_PRINCIPAL error", async () => {
                    await testShouldReturnError(
                        debtOrder,
                        DebtKernelErrorCodes.ORDER_INVALID_INSUFFICIENT_PRINCIPAL,
                    );
                });
            });

            describe("...when order has expired", () => {
                before(async () => {
                    await resetMocks();
                    debtOrder = await orderFactory.generateDebtOrder({
                        expirationTimestampInSec: new BigNumber(
                            moment()
                                .subtract(1, "days")
                                .unix(),
                        ),
                    });
                });

                it("should return EXPIRED error", async () => {
                    await testShouldReturnError(
                        debtOrder,
                        DebtKernelErrorCodes.ORDER_INVALID_EXPIRED,
                    );
                });
            });

            describe("...when debt order has already been filled", () => {
                before(async () => {
                    await resetMocks();

                    debtOrder = await orderFactory.generateDebtOrder();

                    await mockDebtToken.mockOwnerOfFor.sendTransactionAsync(
                        new BigNumber(debtOrder.getIssuanceCommitment().getHash()),
                        CREDITOR_1,
                    );
                });

                it("should return DEBT_ISSUED error", async () => {
                    await testShouldReturnError(debtOrder, DebtKernelErrorCodes.DEBT_ISSUED);
                });
            });

            describe("...when issuance has been cancelled", () => {
                before(async () => {
                    await resetMocks();

                    debtOrder = await orderFactory.generateDebtOrder();

                    await kernel.cancelIssuance.sendTransactionAsync(
                        debtOrder.getIssuanceCommitment().getVersion(),
                        debtOrder.getIssuanceCommitment().getDebtor(),
                        debtOrder.getIssuanceCommitment().getTermsContract(),
                        debtOrder.getIssuanceCommitment().getTermsContractParameters(),
                        debtOrder.getIssuanceCommitment().getUnderwriter(),
                        debtOrder.getIssuanceCommitment().getUnderwriterRiskRating(),
                        debtOrder.getIssuanceCommitment().getSalt(),
                        { from: debtOrder.getIssuanceCommitment().getUnderwriter() },
                    );
                });

                it("should return ISSUANCE_CANCELLED error", async () => {
                    await testShouldReturnError(debtOrder, DebtKernelErrorCodes.ISSUANCE_CANCELLED);
                });
            });

            describe("...when debt order has been cancelled", () => {
                before(async () => {
                    await resetMocks();

                    debtOrder = await orderFactory.generateDebtOrder();

                    await kernel.cancelDebtOrder.sendTransactionAsync(
                        debtOrder.getOrderAddresses(),
                        debtOrder.getOrderValues(),
                        debtOrder.getOrderBytes32(),
                        { from: debtOrder.getDebtor() },
                    );
                });

                it("should return ORDER_INVALID_CANCELLED error", async () => {
                    await testShouldReturnError(
                        debtOrder,
                        DebtKernelErrorCodes.ORDER_INVALID_CANCELLED,
                    );
                });
            });

            describe("...when terms contract returns false for `registerTermStart`", () => {
                before(async () => {
                    await resetMocks();

                    debtOrder = await orderFactory.generateDebtOrder();

                    await mockDebtToken.mockCreateReturnValue.sendTransactionAsync(
                        new BigNumber(debtOrder.getIssuanceCommitment().getHash()),
                    );

                    await mockPrincipalToken.mockBalanceOfFor.sendTransactionAsync(
                        debtOrder.getCreditor(),
                        debtOrder.getPrincipalAmount().plus(debtOrder.getCreditorFee()),
                    );
                    await mockPrincipalToken.mockAllowanceFor.sendTransactionAsync(
                        debtOrder.getCreditor(),
                        mockTokenTransferProxy.address,
                        debtOrder.getPrincipalAmount().plus(debtOrder.getCreditorFee()),
                    );

                    await mockTermsContract.mockRegisterTermStartReturnValue.sendTransactionAsync(
                        debtOrder.getIssuanceCommitment().getHash(),
                        debtOrder.getDebtor(),
                        false,
                    );
                });

                it("should throw", async () => {
                    await expect(
                        kernel.fillDebtOrder.sendTransactionAsync(
                            debtOrder.getCreditor(),
                            debtOrder.getOrderAddresses(),
                            debtOrder.getOrderValues(),
                            debtOrder.getOrderBytes32(),
                            debtOrder.getSignaturesV(),
                            debtOrder.getSignaturesR(),
                            debtOrder.getSignaturesS(),
                            { from: debtOrder.getCreditor() },
                        ),
                    ).to.eventually.be.rejectedWith(REVERT_ERROR);
                });
            });
        });

        describe("User fills valid, nonconsensual debt order", () => {
            let order: SignedDebtOrder;
            let mismatchedOrder: SignedDebtOrder;

            const getMismatchedSignatures = async (
                debtorsDebtOrder: SignedDebtOrder,
                creditorsDebtOrder: SignedDebtOrder,
                underwritersDebtOrder: SignedDebtOrder,
            ): Promise<any[]> => {
                const signaturesR = [
                    underwritersDebtOrder.getUnderwriterSignature().r,
                    debtorsDebtOrder.getDebtorSignature().r,
                    creditorsDebtOrder.getCreditorSignature().r,
                ];

                const signaturesS = [
                    underwritersDebtOrder.getUnderwriterSignature().s,
                    debtorsDebtOrder.getDebtorSignature().s,
                    creditorsDebtOrder.getCreditorSignature().s,
                ];

                const signaturesV = [
                    underwritersDebtOrder.getUnderwriterSignature().v,
                    debtorsDebtOrder.getDebtorSignature().v,
                    creditorsDebtOrder.getCreditorSignature().v,
                ];

                return [signaturesR, signaturesS, signaturesV];
            };

            before(async () => {
                await resetMocks();

                order = await orderFactory.generateDebtOrder();

                await mockDebtToken.mockCreateReturnValue.sendTransactionAsync(
                    new BigNumber(order.getIssuanceCommitment().getHash()),
                );

                await mockPrincipalToken.mockBalanceOfFor.sendTransactionAsync(
                    order.getCreditor(),
                    order.getPrincipalAmount().plus(order.getCreditorFee()),
                );
                await mockPrincipalToken.mockAllowanceFor.sendTransactionAsync(
                    order.getCreditor(),
                    mockTokenTransferProxy.address,
                    order.getPrincipalAmount().plus(order.getCreditorFee()),
                );
            });

            describe("...with mismatched issuance parameters", () => {
                before(async () => {
                    mismatchedOrder = await orderFactory.generateDebtOrder({
                        salt: order.getIssuanceCommitment().getSalt(),
                        termsContract: MALICIOUS_TERMS_CONTRACTS,
                    });
                });

                describe("creditor's signature commits to issuance parameters =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        ] = await getMismatchedSignatures(order, mismatchedOrder, order);
                        await testShouldReturnError(
                            order,
                            DebtKernelErrorCodes.ORDER_INVALID_NON_CONSENSUAL,
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        );
                    });
                });

                describe("debtor's signature commits to issuance parameters =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        ] = await getMismatchedSignatures(mismatchedOrder, order, order);
                        await testShouldReturnError(
                            order,
                            DebtKernelErrorCodes.ORDER_INVALID_NON_CONSENSUAL,
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        );
                    });
                });

                describe("underwriter's signature commits to issuance parameters =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        ] = await getMismatchedSignatures(order, order, mismatchedOrder);
                        await testShouldReturnError(
                            order,
                            DebtKernelErrorCodes.ORDER_INVALID_NON_CONSENSUAL,
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        );
                    });
                });
            });

            describe("...with mismatched underwriter fee", () => {
                before(async () => {
                    mismatchedOrder = await orderFactory.generateDebtOrder({
                        salt: order.getIssuanceCommitment().getSalt(),
                        underwriterFee: Units.ether(0.001),
                    });
                });

                describe("creditor's signature commits to underwriter fee =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        ] = await getMismatchedSignatures(order, mismatchedOrder, order);
                        await testShouldReturnError(
                            order,
                            DebtKernelErrorCodes.ORDER_INVALID_NON_CONSENSUAL,
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        );
                    });
                });

                describe("debtor's signature commits to underwriter fee =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        ] = await getMismatchedSignatures(mismatchedOrder, order, order);
                        await testShouldReturnError(
                            order,
                            DebtKernelErrorCodes.ORDER_INVALID_NON_CONSENSUAL,
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        );
                    });
                });

                describe("underwriter's signature commits to underwriter fee =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        ] = await getMismatchedSignatures(order, order, mismatchedOrder);
                        await testShouldReturnError(
                            order,
                            DebtKernelErrorCodes.ORDER_INVALID_NON_CONSENSUAL,
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        );
                    });
                });
            });

            describe("...with mismatched underwriter", () => {
                before(async () => {
                    mismatchedOrder = await orderFactory.generateDebtOrder({
                        salt: order.getIssuanceCommitment().getSalt(),
                        underwriter: ATTACKER,
                    });
                });

                describe("creditor's signature commits to underwriter =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        ] = await getMismatchedSignatures(order, mismatchedOrder, order);
                        await testShouldReturnError(
                            order,
                            DebtKernelErrorCodes.ORDER_INVALID_NON_CONSENSUAL,
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        );
                    });
                });

                describe("debtor's signature commits to underwriter =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        ] = await getMismatchedSignatures(mismatchedOrder, order, order);
                        await testShouldReturnError(
                            order,
                            DebtKernelErrorCodes.ORDER_INVALID_NON_CONSENSUAL,
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        );
                    });
                });

                describe("underwriter's signature commits to underwriter =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        ] = await getMismatchedSignatures(order, order, mismatchedOrder);
                        await testShouldReturnError(
                            order,
                            DebtKernelErrorCodes.ORDER_INVALID_NON_CONSENSUAL,
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        );
                    });
                });
            });

            describe("...with mismatched principal amount", () => {
                before(async () => {
                    mismatchedOrder = await orderFactory.generateDebtOrder({
                        principalAmount: Units.ether(1.1),
                        salt: order.getIssuanceCommitment().getSalt(),
                    });
                });

                describe("creditor's signature commits to principal amount =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        ] = await getMismatchedSignatures(order, mismatchedOrder, order);
                        await testShouldReturnError(
                            order,
                            DebtKernelErrorCodes.ORDER_INVALID_NON_CONSENSUAL,
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        );
                    });
                });

                describe("debtor's signature commits to principal amount =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        ] = await getMismatchedSignatures(mismatchedOrder, order, order);
                        await testShouldReturnError(
                            order,
                            DebtKernelErrorCodes.ORDER_INVALID_NON_CONSENSUAL,
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        );
                    });
                });

                describe("underwriter's signature commits to principal amount =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        ] = await getMismatchedSignatures(order, order, mismatchedOrder);
                        await testShouldReturnError(
                            order,
                            DebtKernelErrorCodes.ORDER_INVALID_NON_CONSENSUAL,
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        );
                    });
                });
            });

            describe("...with mismatched principal token", () => {
                before(async () => {
                    mismatchedOrder = await orderFactory.generateDebtOrder({
                        principalTokenAddress: NULL_ADDRESS,
                        salt: order.getIssuanceCommitment().getSalt(),
                    });
                });

                describe("creditor's signature commits to principal token =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        ] = await getMismatchedSignatures(order, mismatchedOrder, order);
                        await testShouldReturnError(
                            order,
                            DebtKernelErrorCodes.ORDER_INVALID_NON_CONSENSUAL,
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        );
                    });
                });

                describe("debtor's signature commits to principal token =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        ] = await getMismatchedSignatures(mismatchedOrder, order, order);
                        await testShouldReturnError(
                            order,
                            DebtKernelErrorCodes.ORDER_INVALID_NON_CONSENSUAL,
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        );
                    });
                });

                describe("underwriter's signature commits to principal token =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        ] = await getMismatchedSignatures(order, order, mismatchedOrder);
                        await testShouldReturnError(
                            order,
                            DebtKernelErrorCodes.ORDER_INVALID_NON_CONSENSUAL,
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        );
                    });
                });
            });

            describe("...with mismatched debtor fee", () => {
                before(async () => {
                    mismatchedOrder = await orderFactory.generateDebtOrder({
                        debtorFee: Units.ether(0.0004),
                        salt: order.getIssuanceCommitment().getSalt(),
                    });
                });

                describe("creditor's signature commits to debtor fee =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        ] = await getMismatchedSignatures(order, mismatchedOrder, order);
                        await testShouldReturnError(
                            order,
                            DebtKernelErrorCodes.ORDER_INVALID_NON_CONSENSUAL,
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        );
                    });
                });

                describe("debtor's signature commits to debtor fee =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        ] = await getMismatchedSignatures(mismatchedOrder, order, order);
                        await testShouldReturnError(
                            order,
                            DebtKernelErrorCodes.ORDER_INVALID_NON_CONSENSUAL,
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        );
                    });
                });
            });

            describe("...with mismatched creditor fee", () => {
                before(async () => {
                    mismatchedOrder = await orderFactory.generateDebtOrder({
                        creditorFee: Units.ether(0.0004),
                        salt: order.getIssuanceCommitment().getSalt(),
                    });
                });

                describe("creditor's signature commits to creditor fee =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        ] = await getMismatchedSignatures(order, mismatchedOrder, order);
                        await testShouldReturnError(
                            order,
                            DebtKernelErrorCodes.ORDER_INVALID_NON_CONSENSUAL,
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        );
                    });
                });

                describe("debtor's signature commits to creditor fee =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        ] = await getMismatchedSignatures(mismatchedOrder, order, order);
                        await testShouldReturnError(
                            order,
                            DebtKernelErrorCodes.ORDER_INVALID_NON_CONSENSUAL,
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        );
                    });
                });
            });

            describe("...with mismatched relayer", () => {
                before(async () => {
                    mismatchedOrder = await orderFactory.generateDebtOrder({
                        relayer: NULL_ADDRESS,
                        salt: order.getIssuanceCommitment().getSalt(),
                    });
                });

                describe("creditor's signature commits to relayer =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        ] = await getMismatchedSignatures(order, mismatchedOrder, order);
                        await testShouldReturnError(
                            order,
                            DebtKernelErrorCodes.ORDER_INVALID_NON_CONSENSUAL,
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        );
                    });
                });

                describe("debtor's signature commits to relayer =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        ] = await getMismatchedSignatures(mismatchedOrder, order, order);
                        await testShouldReturnError(
                            order,
                            DebtKernelErrorCodes.ORDER_INVALID_NON_CONSENSUAL,
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        );
                    });
                });
            });

            describe("...with mismatched relayer fee", () => {
                before(async () => {
                    mismatchedOrder = await orderFactory.generateDebtOrder({
                        relayerFee: new BigNumber(0),
                        salt: order.getIssuanceCommitment().getSalt(),
                    });
                });

                describe("creditor's signature commits to relayer fee =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        ] = await getMismatchedSignatures(order, mismatchedOrder, order);
                        await testShouldReturnError(
                            order,
                            DebtKernelErrorCodes.ORDER_INVALID_NON_CONSENSUAL,
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        );
                    });
                });

                describe("debtor's signature commits to relayer fee =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        ] = await getMismatchedSignatures(mismatchedOrder, order, order);
                        await testShouldReturnError(
                            order,
                            DebtKernelErrorCodes.ORDER_INVALID_NON_CONSENSUAL,
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        );
                    });
                });
            });

            describe("...with mismatched expiration", () => {
                before(async () => {
                    mismatchedOrder = await orderFactory.generateDebtOrder({
                        expirationTimestampInSec: new BigNumber(
                            moment()
                                .add(2, "days")
                                .unix(),
                        ),
                        salt: order.getIssuanceCommitment().getSalt(),
                    });
                });

                describe("creditor's signature commits to expiration =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        ] = await getMismatchedSignatures(order, mismatchedOrder, order);
                        await testShouldReturnError(
                            order,
                            DebtKernelErrorCodes.ORDER_INVALID_NON_CONSENSUAL,
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        );
                    });
                });

                describe("debtor's signature commits to expiration =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        ] = await getMismatchedSignatures(mismatchedOrder, order, order);
                        await testShouldReturnError(
                            order,
                            DebtKernelErrorCodes.ORDER_INVALID_NON_CONSENSUAL,
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        );
                    });
                });

                describe("underwriter's signature commits to expiration =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        ] = await getMismatchedSignatures(order, order, mismatchedOrder);
                        await testShouldReturnError(
                            order,
                            DebtKernelErrorCodes.ORDER_INVALID_NON_CONSENSUAL,
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        );
                    });
                });
            });
        });
    });

    describe("#cancelIssuance", () => {
        let order: SignedDebtOrder;

        describe("user who is neither debtor nor underwriter cancels order", () => {
            before(async () => {
                order = await orderFactory.generateDebtOrder();
            });

            it("should throw", async () => {
                await expect(
                    kernel.cancelIssuance.sendTransactionAsync(
                        order.getIssuanceCommitment().getVersion(),
                        order.getIssuanceCommitment().getDebtor(),
                        order.getIssuanceCommitment().getTermsContract(),
                        order.getIssuanceCommitment().getTermsContractParameters(),
                        order.getIssuanceCommitment().getUnderwriter(),
                        order.getIssuanceCommitment().getUnderwriterRiskRating(),
                        order.getIssuanceCommitment().getSalt(),
                        { from: ATTACKER },
                    ),
                ).to.eventually.be.rejectedWith(REVERT_ERROR);
            });
        });

        describe("debtor cancels issuance", () => {
            let issuanceCancelledLog: ABIDecoder.DecodedLog;

            before(async () => {
                order = await orderFactory.generateDebtOrder();

                const txHash = await kernel.cancelIssuance.sendTransactionAsync(
                    order.getIssuanceCommitment().getVersion(),
                    order.getIssuanceCommitment().getDebtor(),
                    order.getIssuanceCommitment().getTermsContract(),
                    order.getIssuanceCommitment().getTermsContractParameters(),
                    order.getIssuanceCommitment().getUnderwriter(),
                    order.getIssuanceCommitment().getUnderwriterRiskRating(),
                    order.getIssuanceCommitment().getSalt(),
                    { from: order.getIssuanceCommitment().getDebtor() },
                );

                const receipt = await web3.eth.getTransactionReceipt(txHash);

                [issuanceCancelledLog] = _.compact(ABIDecoder.decodeLogs(receipt.logs));
            });

            it("should emit issuance cancellation log", () => {
                expect(issuanceCancelledLog).to.deep.equal(
                    LogIssuanceCancelled(
                        kernel.address,
                        order.getIssuanceCommitment().getHash(),
                        order.getIssuanceCommitment().getDebtor(),
                    ),
                );
            });

            it("should return issuance as cancelled", async () => {
                await expect(
                    kernel.issuanceCancelled.callAsync(order.getIssuanceCommitment().getHash()),
                ).to.eventually.be.true;
            });
        });

        describe("underwriter cancels issuance", () => {
            let issuanceCancelledLog: ABIDecoder.DecodedLog;

            before(async () => {
                order = await orderFactory.generateDebtOrder();

                const txHash = await kernel.cancelIssuance.sendTransactionAsync(
                    order.getIssuanceCommitment().getVersion(),
                    order.getIssuanceCommitment().getDebtor(),
                    order.getIssuanceCommitment().getTermsContract(),
                    order.getIssuanceCommitment().getTermsContractParameters(),
                    order.getIssuanceCommitment().getUnderwriter(),
                    order.getIssuanceCommitment().getUnderwriterRiskRating(),
                    order.getIssuanceCommitment().getSalt(),
                    { from: order.getIssuanceCommitment().getUnderwriter() },
                );

                const receipt = await web3.eth.getTransactionReceipt(txHash);

                [issuanceCancelledLog] = _.compact(ABIDecoder.decodeLogs(receipt.logs));
            });

            it("should emit issuance cancellation log", () => {
                expect(issuanceCancelledLog).to.deep.equal(
                    LogIssuanceCancelled(
                        kernel.address,
                        order.getIssuanceCommitment().getHash(),
                        order.getIssuanceCommitment().getUnderwriter(),
                    ),
                );
            });

            it("should return issuance as cancelled", async () => {
                await expect(
                    kernel.issuanceCancelled.callAsync(order.getIssuanceCommitment().getHash()),
                ).to.eventually.be.true;
            });
        });
    });

    describe("#cancelDebtOrder", () => {
        let order: SignedDebtOrder;

        describe("user who is not debtor cancels order", () => {
            before(async () => {
                order = await orderFactory.generateDebtOrder();
            });

            it("should throw", async () => {
                await expect(
                    kernel.cancelDebtOrder.sendTransactionAsync(
                        order.getOrderAddresses(),
                        order.getOrderValues(),
                        order.getOrderBytes32(),
                        { from: ATTACKER },
                    ),
                ).to.eventually.be.rejectedWith(REVERT_ERROR);
            });
        });

        describe("debtor cancels debtor", () => {
            let debtOrderCancelledLog: ABIDecoder.DecodedLog;

            before(async () => {
                order = await orderFactory.generateDebtOrder();

                const txHash = await kernel.cancelDebtOrder.sendTransactionAsync(
                    order.getOrderAddresses(),
                    order.getOrderValues(),
                    order.getOrderBytes32(),
                    { from: order.getIssuanceCommitment().getDebtor() },
                );

                const receipt = await web3.eth.getTransactionReceipt(txHash);

                [debtOrderCancelledLog] = _.compact(ABIDecoder.decodeLogs(receipt.logs));
            });

            it("should emit debt order cancellation log", () => {
                expect(debtOrderCancelledLog).to.deep.equal(
                    LogDebtOrderCancelled(
                        kernel.address,
                        order.getDebtOrderHash(),
                        order.getIssuanceCommitment().getDebtor(),
                    ),
                );
            });

            it("should return debt order as cancelled", async () => {
                await expect(kernel.debtOrderCancelled.callAsync(order.getDebtOrderHash())).to
                    .eventually.be.true;
            });
        });
    });
});
