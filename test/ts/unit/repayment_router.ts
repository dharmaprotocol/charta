import * as ABIDecoder from "abi-decoder";
import * as chai from "chai";
import * as _ from "lodash";
import * as Units from "../test_utils/units";

import { BigNumber } from "bignumber.js";

import { RepaymentRouterContract } from "../../../types/generated/repayment_router";

import { MockDebtRegistryContract } from "../../../types/generated/mock_debt_registry";
import { MockERC20TokenContract } from "../../../types/generated/mock_e_r_c20_token";
import { MockERC721TokenContract } from "../../../types/generated/mock_e_r_c721_token";
import { MockTermsContractContract } from "../../../types/generated/mock_terms_contract";
import { MockTokenTransferProxyContract } from "../../../types/generated/mock_token_transfer_proxy";

import { RepaymentRouterErrorCodes } from "../../../types/errors";

import { BigNumberSetup } from "../test_utils/bignumber_setup";
import ChaiSetup from "../test_utils/chai_setup";
import { INVALID_OPCODE, REVERT_ERROR } from "../test_utils/constants";

import { LogError, LogRepayment } from "../logs/repayment_router";

// Set up Chai
ChaiSetup.configure();
const expect = chai.expect;

// Configure BigNumber exponentiation
BigNumberSetup.configure();

const repaymentRouterContract = artifacts.require("RepaymentRouter");

contract("Repayment Router (Unit Tests)", async (ACCOUNTS) => {
    let router: RepaymentRouterContract;

    let mockToken: MockERC20TokenContract;
    let mockNonFungibleToken: MockERC721TokenContract;
    let mockRegistry: MockDebtRegistryContract;
    let mockTermsContract: MockTermsContractContract;
    let mockTokenTransferProxy: MockTokenTransferProxyContract;

    const CONTRACT_OWNER = ACCOUNTS[0];
    const PAYER = ACCOUNTS[1];
    const BENEFICIARY = ACCOUNTS[2];

    const TERMS_CONTRACT_PARAMETERS = web3.sha3(
        "any 32 byte hex value can represent the terms contract's parameters",
    );
    const ARBITRARY_AGREEMENT_ID = web3.sha3("any 32 byte hex value can represent an agreement id");

    const NON_FUNGIBLE_TOKEN_ID = new BigNumber(13);

    const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";

    const TX_DEFAULTS = { from: CONTRACT_OWNER, gas: 4000000 };

    before(async () => {
        mockRegistry = await MockDebtRegistryContract.deployed(web3, TX_DEFAULTS);
        mockToken = await MockERC20TokenContract.deployed(web3, TX_DEFAULTS);
        mockNonFungibleToken = await MockERC721TokenContract.deployed(web3, TX_DEFAULTS);
        mockTermsContract = await MockTermsContractContract.deployed(web3, TX_DEFAULTS);
        mockTokenTransferProxy = await MockTokenTransferProxyContract.deployed(web3, TX_DEFAULTS);

        const repaymentRouterTruffle = await repaymentRouterContract.new(
            mockRegistry.address,
            mockTokenTransferProxy.address,
        );

        // The typings we use ingest vanilla Web3 contracts, so we convert the
        // contract instance deployed by truffle into a Web3 contract instance
        const repaymentRouterWeb3Contract = web3.eth
            .contract(repaymentRouterTruffle.abi)
            .at(repaymentRouterTruffle.address);

        router = new RepaymentRouterContract(repaymentRouterWeb3Contract, TX_DEFAULTS);

        ABIDecoder.addABI(router.abi);
    });

    after(() => {
        ABIDecoder.removeABI(router.abi);
    });

    describe("#repay", () => {
        describe("called for nonexistent debt agreement", () => {
            let errorLog: ABIDecoder.DecodedLog;

            before(async () => {
                await mockRegistry.mockGetBeneficiaryReturnValueFor.sendTransactionAsync(
                    ARBITRARY_AGREEMENT_ID,
                    NULL_ADDRESS,
                );

                const txHash = await router.repay.sendTransactionAsync(
                    ARBITRARY_AGREEMENT_ID,
                    Units.ether(1),
                    mockToken.address,
                );
                const receipt = await web3.eth.getTransactionReceipt(txHash);

                [errorLog] = _.compact(ABIDecoder.decodeLogs(receipt.logs));
            });

            it("should return DEBT_AGREEMENT_NONEXISTENT error", () => {
                expect(errorLog).to.deep.equal(
                    LogError(
                        router.address,
                        RepaymentRouterErrorCodes.DEBT_AGREEMENT_NONEXISTENT,
                        ARBITRARY_AGREEMENT_ID,
                    ),
                );
            });

            it("should not transfer tokens from payer", async () => {
                await expect(
                    mockToken.wasTransferFromCalledWith.callAsync(
                        NULL_ADDRESS,
                        NULL_ADDRESS,
                        Units.ether(1),
                    ),
                ).to.eventually.be.false;
            });

            it("should not register repayment with terms contract", async () => {
                await expect(
                    mockTermsContract.wasRegisterRepaymentCalledWith.callAsync(
                        ARBITRARY_AGREEMENT_ID,
                        NULL_ADDRESS,
                        NULL_ADDRESS,
                        Units.ether(1),
                        mockToken.address,
                    ),
                ).to.eventually.be.false;
            });
        });

        describe("called for issued debt agreement", () => {
            before(async () => {
                await mockRegistry.mockGetBeneficiaryReturnValueFor.sendTransactionAsync(
                    ARBITRARY_AGREEMENT_ID,
                    BENEFICIARY,
                );

                await mockRegistry.mockGetTermsReturnValueFor.sendTransactionAsync(
                    ARBITRARY_AGREEMENT_ID,
                    mockTermsContract.address,
                    TERMS_CONTRACT_PARAMETERS,
                );

                await mockRegistry.mockGetTermsContractReturnValueFor.sendTransactionAsync(
                    ARBITRARY_AGREEMENT_ID,
                    mockTermsContract.address,
                );
            });

            describe("...with insufficient balance for payment", () => {
                let errorLog: ABIDecoder.DecodedLog;

                before(async () => {
                    await mockToken.mockBalanceOfFor.sendTransactionAsync(
                        PAYER,
                        Units.ether(1).minus(1),
                    );

                    await mockToken.mockAllowanceFor.sendTransactionAsync(
                        PAYER,
                        router.address,
                        Units.ether(1),
                    );

                    const txHash = await router.repay.sendTransactionAsync(
                        ARBITRARY_AGREEMENT_ID,
                        Units.ether(1),
                        mockToken.address,
                        { from: PAYER },
                    );
                    const receipt = await web3.eth.getTransactionReceipt(txHash);

                    [errorLog] = _.compact(ABIDecoder.decodeLogs(receipt.logs));
                });

                it("should return PAYER_BALANCE_OR_ALLOWANCE_INSUFFICIENT error", () => {
                    expect(errorLog).to.deep.equal(
                        LogError(
                            router.address,
                            RepaymentRouterErrorCodes.PAYER_BALANCE_OR_ALLOWANCE_INSUFFICIENT,
                            ARBITRARY_AGREEMENT_ID,
                        ),
                    );
                });

                it("should not transfer tokens from payer", async () => {
                    await expect(
                        mockTokenTransferProxy.wasTransferFromCalledWith.callAsync(
                            mockToken.address,
                            PAYER,
                            BENEFICIARY,
                            Units.ether(1),
                        ),
                    ).to.eventually.be.false;
                });

                it("should not register repayment with terms contract", async () => {
                    await expect(
                        mockTermsContract.wasRegisterRepaymentCalledWith.callAsync(
                            ARBITRARY_AGREEMENT_ID,
                            PAYER,
                            BENEFICIARY,
                            Units.ether(1),
                            mockToken.address,
                        ),
                    ).to.eventually.be.false;
                });
            });

            describe("...with insufficient allowance for payment", () => {
                let errorLog: ABIDecoder.DecodedLog;

                before(async () => {
                    await mockToken.mockBalanceOfFor.sendTransactionAsync(PAYER, Units.ether(1));

                    await mockToken.mockAllowanceFor.sendTransactionAsync(
                        PAYER,
                        mockTokenTransferProxy.address,
                        Units.ether(1).minus(1),
                    );

                    const txHash = await router.repay.sendTransactionAsync(
                        ARBITRARY_AGREEMENT_ID,
                        Units.ether(1),
                        mockToken.address,
                        { from: PAYER },
                    );
                    const receipt = await web3.eth.getTransactionReceipt(txHash);

                    [errorLog] = _.compact(ABIDecoder.decodeLogs(receipt.logs));
                });

                it("should return PAYER_BALANCE_OR_ALLOWANCE_INSUFFICIENT error", () => {
                    expect(errorLog).to.deep.equal(
                        LogError(
                            router.address,
                            RepaymentRouterErrorCodes.PAYER_BALANCE_OR_ALLOWANCE_INSUFFICIENT,
                            ARBITRARY_AGREEMENT_ID,
                        ),
                    );
                });

                it("should not transfer tokens from payer", async () => {
                    await expect(
                        mockTokenTransferProxy.wasTransferFromCalledWith.callAsync(
                            mockToken.address,
                            PAYER,
                            BENEFICIARY,
                            Units.ether(1),
                        ),
                    ).to.eventually.be.false;
                });

                it("should not register repayment with terms contract", async () => {
                    await expect(
                        mockTermsContract.wasRegisterRepaymentCalledWith.callAsync(
                            ARBITRARY_AGREEMENT_ID,
                            PAYER,
                            BENEFICIARY,
                            Units.ether(1),
                            mockToken.address,
                        ),
                    ).to.eventually.be.false;
                });
            });

            describe("...with terms contract that rejects repayment", () => {
                let errorLog: ABIDecoder.DecodedLog;

                before(async () => {
                    await mockToken.mockBalanceOfFor.sendTransactionAsync(PAYER, Units.ether(1));

                    await mockToken.mockAllowanceFor.sendTransactionAsync(
                        PAYER,
                        mockTokenTransferProxy.address,
                        Units.ether(1),
                    );

                    await mockTermsContract.mockRegisterRepaymentReturnValue.sendTransactionAsync(
                        false,
                    );

                    const txHash = await router.repay.sendTransactionAsync(
                        ARBITRARY_AGREEMENT_ID,
                        Units.ether(1),
                        mockToken.address,
                        { from: PAYER },
                    );
                    const receipt = await web3.eth.getTransactionReceipt(txHash);

                    [errorLog] = _.compact(ABIDecoder.decodeLogs(receipt.logs));
                });

                it("should return REPAYMENT_REJECTED_BY_TERMS_CONTRACT error", () => {
                    expect(errorLog).to.deep.equal(
                        LogError(
                            router.address,
                            RepaymentRouterErrorCodes.REPAYMENT_REJECTED_BY_TERMS_CONTRACT,
                            ARBITRARY_AGREEMENT_ID,
                        ),
                    );
                });

                it("should not transfer tokens from payer", async () => {
                    await expect(
                        mockTokenTransferProxy.wasTransferFromCalledWith.callAsync(
                            mockToken.address,
                            PAYER,
                            BENEFICIARY,
                            Units.ether(1),
                        ),
                    ).to.eventually.be.false;
                });
            });

            describe("...with sufficient balance and allowance for payment", () => {
                let repaymentLog: ABIDecoder.DecodedLog;

                before(async () => {
                    await mockToken.mockBalanceOfFor.sendTransactionAsync(PAYER, Units.ether(1));

                    await mockToken.mockAllowanceFor.sendTransactionAsync(
                        PAYER,
                        mockTokenTransferProxy.address,
                        Units.ether(1),
                    );

                    await mockTermsContract.mockRegisterRepaymentReturnValue.sendTransactionAsync(
                        true,
                    );

                    const txHash = await router.repay.sendTransactionAsync(
                        ARBITRARY_AGREEMENT_ID,
                        Units.ether(1),
                        mockToken.address,
                        { from: PAYER },
                    );
                    const receipt = await web3.eth.getTransactionReceipt(txHash);

                    [repaymentLog] = _.compact(ABIDecoder.decodeLogs(receipt.logs));
                });

                it("should transfer tokens of specified amount from payer", async () => {
                    await expect(
                        mockTokenTransferProxy.wasTransferFromCalledWith.callAsync(
                            mockToken.address,
                            PAYER,
                            BENEFICIARY,
                            Units.ether(1),
                        ),
                    ).to.eventually.be.true;
                });

                it("should register repayment with terms contract", async () => {
                    await expect(
                        mockTermsContract.wasRegisterRepaymentCalledWith.callAsync(
                            ARBITRARY_AGREEMENT_ID,
                            PAYER,
                            BENEFICIARY,
                            Units.ether(1),
                            mockToken.address,
                        ),
                    ).to.eventually.be.true;
                });

                it("should emit repayment log", () => {
                    expect(repaymentLog).to.deep.equal(
                        LogRepayment(
                            router.address,
                            ARBITRARY_AGREEMENT_ID,
                            PAYER,
                            BENEFICIARY,
                            Units.ether(1),
                            mockToken.address,
                        ),
                    );
                });
            });
        });

        describe("Global Invariants", () => {
            describe("called with null token address", () => {
                it("should throw", async () => {
                    await expect(
                        router.repay.sendTransactionAsync(
                            ARBITRARY_AGREEMENT_ID,
                            Units.ether(1),
                            NULL_ADDRESS,
                            { from: PAYER },
                        ),
                    ).to.eventually.be.rejectedWith(REVERT_ERROR);
                });
            });

            describe("called with zero token amount", () => {
                it("should throw", async () => {
                    await expect(
                        router.repay.sendTransactionAsync(
                            ARBITRARY_AGREEMENT_ID,
                            new BigNumber(0),
                            mockToken.address,
                            { from: PAYER },
                        ),
                    ).to.eventually.be.rejectedWith(REVERT_ERROR);
                });
            });
        });
    });
});
