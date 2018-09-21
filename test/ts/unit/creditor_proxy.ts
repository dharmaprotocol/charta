import { BigNumber } from "bignumber.js";

import * as ABIDecoder from "abi-decoder";
import * as chai from "chai";
import * as _ from "lodash";
import * as moment from "moment";
import * as Web3 from "web3";
import * as Units from "../test_utils/units";

import { LogDebtOfferCancelled, LogDebtOfferFilled, LogError } from "../logs/creditor_proxy";

import { CreditorProxyContract } from "../../../types/generated/creditor_proxy";
import { MockDebtKernelContract } from "../../../types/generated/mock_debt_kernel";
import { MockDebtTokenContract } from "../../../types/generated/mock_debt_token";
import { MockERC20TokenContract } from "../../../types/generated/mock_e_r_c20_token";
import { MockTokenTransferProxyContract } from "../../../types/generated/mock_token_transfer_proxy";
import { RepaymentRouterContract } from "../../../types/generated/repayment_router";
import { ContractRegistryContract } from "../../../types/generated/contract_registry";

import { CreditorProxyErrorCodes } from "../../../types/errors";
import { DebtOffer, SignedDebtOffer } from "../../../types/proxy/debt_offer";

import { BigNumberSetup } from "../test_utils/bignumber_setup";
import ChaiSetup from "../test_utils/chai_setup";
import { REVERT_ERROR } from "../test_utils/constants";
import { Web3Utils } from "../../../utils/web3_utils";

import { DebtOfferFactory } from "../factories/debt_offer_factory";

// Configure BigNumber exponentiation
BigNumberSetup.configure();

// Set up Chai
ChaiSetup.configure();
const expect = chai.expect;

// Set up Web3 utils
const web3Utils = new Web3Utils(web3);

const contractRegistryArtifact = artifacts.require("ContractRegistry");
const creditorProxyArtifact = artifacts.require("CreditorProxy");
const mockDebtKernelArtifact = artifacts.require("MockDebtKernel");
const mockERC20TokenArtifact = artifacts.require("MockERC20Token");

contract("Creditor Proxy (Unit Tests)", async (ACCOUNTS) => {
    let contractRegistry: ContractRegistryContract;
    let creditorProxy: CreditorProxyContract;
    let mockDebtKernel: MockDebtKernelContract;
    let mockDebtToken: MockDebtTokenContract;
    let mockPrincipalToken: MockERC20TokenContract;
    let mockTokenTransferProxy: MockTokenTransferProxyContract;
    let repaymentRouter: RepaymentRouterContract;

    let offerFactory: DebtOfferFactory;
    let defaultOfferParams: { [key: string]: any };

    const CONTRACT_OWNER = ACCOUNTS[0];
    const ATTACKER = ACCOUNTS[1];
    const RELAYER = ACCOUNTS[2];
    const UNDERWRITER = ACCOUNTS[3];

    const CREDITOR_1 = ACCOUNTS[4];
    const CREDITOR_2 = ACCOUNTS[5];
    const CREDITORS = [CREDITOR_1, CREDITOR_2];

    const DEBTOR_1 = ACCOUNTS[6];
    const DEBTOR_2 = ACCOUNTS[7];
    const DEBTORS = [DEBTOR_1, DEBTOR_2];

    const MOCK_COLLATERALIZER_ADDRESS = ACCOUNTS[8];
    const MOCK_DEBT_REGISTRY_ADDRESS = ACCOUNTS[9];
    const MOCK_TOKEN_REGISTRY_ADDRESS = ACCOUNTS[10];
    const MOCK_TERMS_CONTRACT_ADDRESS = ACCOUNTS[8];

    const TERMS_CONTRACT_PARAMETERS = web3.sha3("arbitrary terms contract parameters");

    const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";
    const NULL_ISSUANCE_HASH = "0x0000000000000000000000000000000000000000000000000000000000000000";

    const TX_DEFAULTS = { from: CONTRACT_OWNER, gas: 4712388 };

    const reset = async () => {
        mockPrincipalToken = await MockERC20TokenContract.deployed(web3, TX_DEFAULTS);
        mockTokenTransferProxy = await MockTokenTransferProxyContract.deployed(web3, TX_DEFAULTS);
        repaymentRouter = await RepaymentRouterContract.deployed(web3, TX_DEFAULTS);
        mockDebtToken = await MockDebtTokenContract.deployed(web3, TX_DEFAULTS);

        // Step 1: Instantiate a truffle instance of the contract.
        const mockDebtKernelArtifactInstance = await mockDebtKernelArtifact.new(
            mockTokenTransferProxy.address,
        );
        const contractRegistryArtifactInstance = await contractRegistryArtifact.new(
            MOCK_COLLATERALIZER_ADDRESS,
            mockDebtKernelArtifactInstance.address,
            MOCK_DEBT_REGISTRY_ADDRESS,
            mockDebtToken.address,
            repaymentRouter.address,
            MOCK_TOKEN_REGISTRY_ADDRESS,
            mockTokenTransferProxy.address,
            { from: CONTRACT_OWNER },
        );
        const creditorProxyArtifactInstance = await creditorProxyArtifact.new(
            contractRegistryArtifactInstance.address,
        );

        // Step 2: Instantiate a web3 instance of the contract.
        const mockDebtKernelWeb3ContractInstance = web3.eth
            .contract(mockDebtKernelArtifact.abi)
            .at(mockDebtKernelArtifactInstance.address);
        const contractRegistryWeb3ContractInstance = web3.eth
            .contract(contractRegistryArtifact.abi)
            .at(contractRegistryArtifactInstance.address);
        const creditorProxyWeb3ContractInstance = web3.eth
            .contract(creditorProxyArtifact.abi)
            .at(creditorProxyArtifactInstance.address);

        // Step 3: Instantiate a statically-typed version of the contract.
        mockDebtKernel = new MockDebtKernelContract(
            mockDebtKernelWeb3ContractInstance,
            TX_DEFAULTS,
        );
        contractRegistry = new ContractRegistryContract(
            contractRegistryWeb3ContractInstance,
            TX_DEFAULTS,
        );
        creditorProxy = new CreditorProxyContract(creditorProxyWeb3ContractInstance, TX_DEFAULTS);

        const latestBlockTime = await web3Utils.getLatestBlockTime();
        defaultOfferParams = {
            kernelVersion: mockDebtKernel.address,
            creditor: CREDITOR_1,
            repaymentRouterVersion: repaymentRouter.address,
            debtor: DEBTOR_1,
            underwriter: UNDERWRITER,
            termsContract: MOCK_TERMS_CONTRACT_ADDRESS,
            principalToken: mockPrincipalToken.address,
            relayer: RELAYER,
            underwriterRiskRating: Units.underwriterRiskRatingFixedPoint(1),
            principalAmount: Units.ether(1),
            underwriterFee: Units.ether(0.0015),
            relayerFee: Units.ether(0.0015),
            creditorFee: Units.ether(0.002),
            debtorFee: Units.ether(0.001),
            expirationTimestampInSec: new BigNumber(
                moment
                    .unix(latestBlockTime)
                    .add(30, "days")
                    .unix(),
            ),
            termsContractParameters: TERMS_CONTRACT_PARAMETERS,
            offerSignatories: { debtor: DEBTOR_1, creditor: CREDITOR_1, underwriter: UNDERWRITER },
        };

        offerFactory = new DebtOfferFactory(defaultOfferParams);

        ABIDecoder.addABI(creditorProxyArtifact.abi);
        ABIDecoder.addABI(mockERC20TokenArtifact.abi);
    };

    before(reset);

    describe("Initialization", () => {
        it("points to the Contract Registry passed in through the constructor", async () => {
            await expect(creditorProxy.contractRegistry.callAsync()).to.eventually.equal(
                contractRegistry.address,
            );
        });
    });

    describe("#cancelDebtOffer", () => {
        let debtOffer: SignedDebtOffer;

        describe("user who is not the creditor cancelled debt offer", () => {
            before(async () => {
                debtOffer = await offerFactory.generateDebtOffer();
            });
            it("should throw", async () => {
                await expect(
                    creditorProxy.cancelDebtOffer.sendTransactionAsync(
                        debtOffer.getCommitmentAddresses(),
                        debtOffer.getCommitmentValues(),
                        debtOffer.getCommitmentBytes32(),
                        { from: ATTACKER },
                    ),
                ).to.eventually.be.rejectedWith(REVERT_ERROR);
            });
        });

        describe("creditor cancels issuance", () => {
            let debtOfferCancelledLog: ABIDecoder.DecodedLog;

            before(async () => {
                debtOffer = await offerFactory.generateDebtOffer();

                const txHash = await creditorProxy.cancelDebtOffer.sendTransactionAsync(
                    debtOffer.getCommitmentAddresses(),
                    debtOffer.getCommitmentValues(),
                    debtOffer.getCommitmentBytes32(),
                    { from: debtOffer.getCreditor() },
                );

                const receipt = await web3.eth.getTransactionReceipt(txHash);
                [debtOfferCancelledLog] = _.compact(ABIDecoder.decodeLogs(receipt.logs));
            });

            it("should emit debt offer cancelled log", async () => {
                expect(debtOfferCancelledLog).to.deep.equal(
                    LogDebtOfferCancelled(
                        creditorProxy.address,
                        debtOffer.getCreditor(),
                        debtOffer.getCreditorCommitmentHash(),
                    ),
                );
            });

            it("should return the debt offer as cancelled", async () => {
                await expect(
                    creditorProxy.debtOfferCancelled.callAsync(
                        debtOffer.getCreditorCommitmentHash(),
                    ),
                ).to.eventually.be.true;
            });
        });
    });

    describe("#fillDebtOffer", () => {
        let debtOffer: SignedDebtOffer;

        const testShouldReturnError = async (
            offer: SignedDebtOffer,
            errorCode: number,
            signaturesV?: number[],
            signaturesR?: string[],
            signaturesS?: string[],
        ) => {
            const txHash = await creditorProxy.fillDebtOffer.sendTransactionAsync(
                offer.getCreditor(),
                offer.getOrderAddresses(),
                offer.getOrderValues(),
                offer.getOrderBytes32(),
                signaturesV || offer.getSignaturesV(),
                signaturesR || offer.getSignaturesR(),
                signaturesS || offer.getSignaturesS(),
            );

            const receipt = await web3.eth.getTransactionReceipt(txHash);
            const [errorLog] = _.compact(ABIDecoder.decodeLogs(receipt.logs));

            expect(errorLog).to.deep.equal(
                LogError(
                    creditorProxy.address,
                    errorCode,
                    offer.getCreditor(),
                    offer.getCreditorCommitmentHash(),
                ),
            );
        };

        const resetMocks = async () => {
            await mockDebtToken.reset.sendTransactionAsync();
            await mockTokenTransferProxy.reset.sendTransactionAsync();
            await mockPrincipalToken.reset.sendTransactionAsync();
        };

        const setupMocks = async () => {
            const creditorPayment = debtOffer.getPrincipalAmount().plus(debtOffer.getCreditorFee());

            await mockDebtToken.reset.sendTransactionAsync();
            await mockDebtToken.mockCreateReturnValue.sendTransactionAsync(
                new BigNumber(debtOffer.getAgreementId()),
            );

            await mockPrincipalToken.reset.sendTransactionAsync();
            await mockPrincipalToken.mockBalanceOfFor.sendTransactionAsync(
                debtOffer.getCreditor(),
                creditorPayment,
            );
            await mockPrincipalToken.mockBalanceOfFor.sendTransactionAsync(
                creditorProxy.address,
                creditorPayment,
            );
            await mockPrincipalToken.mockAllowanceFor.sendTransactionAsync(
                debtOffer.getCreditor(),
                mockTokenTransferProxy.address,
                creditorPayment,
            );

            await mockDebtKernel.reset.sendTransactionAsync();
            await mockDebtKernel.mockCreateReturnValue.sendTransactionAsync(
                debtOffer.getAgreementId(),
            );
        };

        const testOfferFill = (filler: string, setupDebtOffer: () => Promise<void>) => {
            return () => {
                let debtOfferFilledLog: ABIDecoder.DecodedLog;

                before(async () => {
                    await setupDebtOffer();

                    await setupMocks();

                    const txHash = await creditorProxy.fillDebtOffer.sendTransactionAsync(
                        debtOffer.getCreditor(),
                        debtOffer.getOrderAddresses(),
                        debtOffer.getOrderValues(),
                        debtOffer.getOrderBytes32(),
                        debtOffer.getSignaturesV(),
                        debtOffer.getSignaturesR(),
                        debtOffer.getSignaturesS(),
                        { from: filler },
                    );

                    const receipt = await web3.eth.getTransactionReceipt(txHash);
                    [debtOfferFilledLog] = _.compact(ABIDecoder.decodeLogs(receipt.logs));
                });

                it("should approve the transfer proxy to transfer the principal", async () => {
                    if (debtOffer.getPrincipalAmount().greaterThan(0)) {
                        await expect(
                            mockPrincipalToken.wasApproveCalledWith.callAsync(
                                mockTokenTransferProxy.address,
                                debtOffer.getPrincipalAmount().plus(debtOffer.getCreditorFee()),
                            ),
                        ).to.eventually.be.true;
                    }
                });

                it("should transfer principal + creditor fees to creditorProxy", async () => {
                    if (debtOffer.getPrincipalAmount().greaterThan(0)) {
                        await expect(
                            mockTokenTransferProxy.wasTransferFromCalledWith.callAsync(
                                mockPrincipalToken.address,
                                debtOffer.getCreditor(),
                                creditorProxy.address,
                                debtOffer.getPrincipalAmount().plus(debtOffer.getCreditorFee()),
                            ),
                        ).to.eventually.be.true;
                    }
                });

                it("should call the kernel's fillDebtOrder", async () => {
                    await expect(
                        mockDebtKernel.wasFillDebtOrderCalledWith.callAsync(
                            creditorProxy.address,
                            debtOffer.getOrderAddresses(),
                            debtOffer.getOrderValues(),
                            debtOffer.getOrderBytes32(),
                            debtOffer.getSignaturesV(),
                            debtOffer.getSignaturesR(),
                            debtOffer.getSignaturesS(),
                        ),
                    ).to.eventually.be.true;
                });

                it("should transfer a newly minted debt token to the creditor", async () => {
                    await expect(
                        mockDebtToken.wasTransferCalledWith.callAsync(
                            debtOffer.getCreditor(),
                            new BigNumber(debtOffer.getAgreementId()),
                        ),
                    ).to.eventually.be.true;
                });

                it("should emit debtOfferFilled Log", () => {
                    expect(debtOfferFilledLog).to.deep.equal(
                        LogDebtOfferFilled(
                            creditorProxy.address,
                            debtOffer.getCreditor(),
                            debtOffer.getCreditorCommitmentHash(),
                            debtOffer.getAgreementId(),
                        ),
                    );
                });
            };
        };

        describe("User fills valid, consensual debt offer", () => {
            describe(
                "...with underwriter and relayer",
                testOfferFill(CONTRACT_OWNER, async () => {
                    debtOffer = await offerFactory.generateDebtOffer({});
                }),
            );

            describe(
                "...with no principal and no creditor / debtor fees",
                testOfferFill(CONTRACT_OWNER, async () => {
                    debtOffer = await offerFactory.generateDebtOffer({
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
                testOfferFill(CONTRACT_OWNER, async () => {
                    debtOffer = await offerFactory.generateDebtOffer({
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
                testOfferFill(CONTRACT_OWNER, async () => {
                    debtOffer = await offerFactory.generateDebtOffer({
                        creditor: CREDITOR_1,
                        creditorFee: new BigNumber(0),
                        debtor: CREDITOR_1,
                        debtorFee: new BigNumber(0),
                        offerSignatories: {
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
        });

        describe("User fills invalid debt offer", () => {
            describe("...when creditor has granted transfer proxy insufficient allowance", () => {
                before(async () => {
                    debtOffer = await offerFactory.generateDebtOffer();
                    await setupMocks();
                    await mockPrincipalToken.mockAllowanceFor.sendTransactionAsync(
                        debtOffer.getCreditor(),
                        mockTokenTransferProxy.address,
                        debtOffer
                            .getPrincipalAmount()
                            .plus(debtOffer.getCreditorFee())
                            .minus(Units.ether(0.01)),
                    );
                });
                it("should return CREDITOR_BALANCE_OR_ALLOWANCE_INSUFFICIENT error", async () => {
                    await testShouldReturnError(
                        debtOffer,
                        CreditorProxyErrorCodes.CREDITOR_BALANCE_OR_ALLOWANCE_INSUFFICIENT,
                    );
                });
            });

            describe("...when creditor has insufficient balance", () => {
                before(async () => {
                    debtOffer = await offerFactory.generateDebtOffer();
                    await setupMocks();
                    await mockPrincipalToken.mockBalanceOfFor.sendTransactionAsync(
                        debtOffer.getCreditor(),
                        debtOffer
                            .getPrincipalAmount()
                            .plus(debtOffer.getCreditorFee())
                            .minus(Units.ether(0.01)),
                    );
                });
                it("should return CREDITOR_BALANCE_OR_ALLOWANCE_INSUFFICIENT error", async () => {
                    await testShouldReturnError(
                        debtOffer,
                        CreditorProxyErrorCodes.CREDITOR_BALANCE_OR_ALLOWANCE_INSUFFICIENT,
                    );
                });
            });

            describe("...when debt offer has already been filled", () => {
                before(async () => {
                    debtOffer = await offerFactory.generateDebtOffer();
                    await setupMocks();
                    await creditorProxy.fillDebtOffer.sendTransactionAsync(
                        debtOffer.getCreditor(),
                        debtOffer.getOrderAddresses(),
                        debtOffer.getOrderValues(),
                        debtOffer.getOrderBytes32(),
                        debtOffer.getSignaturesV(),
                        debtOffer.getSignaturesR(),
                        debtOffer.getSignaturesS(),
                        { from: CONTRACT_OWNER },
                    );
                });
                it("should return DEBT_OFFER_FILLED error", async () => {
                    await testShouldReturnError(
                        debtOffer,
                        CreditorProxyErrorCodes.DEBT_OFFER_ALREADY_FILLED,
                    );
                });
            });

            describe("...when debt offer has been cancelled", () => {
                before(async () => {
                    debtOffer = await offerFactory.generateDebtOffer();
                    await setupMocks();
                    await creditorProxy.cancelDebtOffer.sendTransactionAsync(
                        debtOffer.getCommitmentAddresses(),
                        debtOffer.getCommitmentValues(),
                        debtOffer.getCommitmentBytes32(),
                        { from: debtOffer.getCreditor() },
                    );
                });
                it("should return DEBT_OFFER_CANCELLED error", async () => {
                    await testShouldReturnError(
                        debtOffer,
                        CreditorProxyErrorCodes.DEBT_OFFER_CANCELLED,
                    );
                });
            });

            describe("...when debt kernel returns null issuance hash", () => {
                before(async () => {
                    debtOffer = await offerFactory.generateDebtOffer();
                    await setupMocks();
                    await mockDebtKernel.reset.sendTransactionAsync();
                    await mockDebtKernel.mockCreateReturnValue.sendTransactionAsync(
                        NULL_ISSUANCE_HASH,
                    );
                });
                it("should throw", async () => {
                    expect(
                        creditorProxy.fillDebtOffer.sendTransactionAsync(
                            debtOffer.getCreditor(),
                            debtOffer.getOrderAddresses(),
                            debtOffer.getOrderValues(),
                            debtOffer.getOrderBytes32(),
                            debtOffer.getSignaturesV(),
                            debtOffer.getSignaturesR(),
                            debtOffer.getSignaturesS(),
                            { from: CONTRACT_OWNER },
                        ),
                    ).to.eventually.be.rejectedWith(REVERT_ERROR);
                });
            });
        });

        describe("User fills nonconsensual debt offer", () => {
            let mismatchedDebtOffer: SignedDebtOffer;
            before(async () => {
                debtOffer = await offerFactory.generateDebtOffer();
                await setupMocks();
            });

            describe("...when submitted by creditor *without* creditor signature attached", async () => {
                it("should return DEBT_OFFER_NON_CONSENSUAL error", async () => {
                    await testShouldReturnError(
                        debtOffer,
                        CreditorProxyErrorCodes.DEBT_OFFER_NON_CONSENSUAL,
                        [debtOffer.getSignaturesV()[0], null, debtOffer.getSignaturesV()[2]],
                        [debtOffer.getSignaturesR()[0], null, debtOffer.getSignaturesR()[2]],
                        [debtOffer.getSignaturesS()[0], null, debtOffer.getSignaturesS()[2]],
                    );
                });
            });

            describe("creditor's signature commits to creditor address =/= offer's", async () => {
                before(async () => {
                    mismatchedDebtOffer = await offerFactory.generateDebtOffer({
                        creditor: CREDITOR_2,
                    });
                });
                it("should return DEBT_OFFER_NON_CONSENSUAL error", async () => {
                    await testShouldReturnError(
                        mismatchedDebtOffer,
                        CreditorProxyErrorCodes.DEBT_OFFER_NON_CONSENSUAL,
                        debtOffer.getSignaturesV(),
                        debtOffer.getSignaturesR(),
                        debtOffer.getSignaturesS(),
                    );
                });
            });

            describe("creditor's signature commits to repayment router =/= offer's", async () => {
                before(async () => {
                    mismatchedDebtOffer = await offerFactory.generateDebtOffer({
                        repaymentRouterVersion: ATTACKER,
                    });
                });
                it("should return DEBT_OFFER_NON_CONSENSUAL error", async () => {
                    await testShouldReturnError(
                        mismatchedDebtOffer,
                        CreditorProxyErrorCodes.DEBT_OFFER_NON_CONSENSUAL,
                        debtOffer.getSignaturesV(),
                        debtOffer.getSignaturesR(),
                        debtOffer.getSignaturesS(),
                    );
                });
            });

            describe("creditor's signature commits to creditor fee =/= offer's", async () => {
                before(async () => {
                    mismatchedDebtOffer = await offerFactory.generateDebtOffer({
                        creditorFee: new BigNumber(0),
                    });
                });
                it("should return DEBT_OFFER_NON_CONSENSUAL error", async () => {
                    await testShouldReturnError(
                        mismatchedDebtOffer,
                        CreditorProxyErrorCodes.DEBT_OFFER_NON_CONSENSUAL,
                        debtOffer.getSignaturesV(),
                        debtOffer.getSignaturesR(),
                        debtOffer.getSignaturesS(),
                    );
                });
            });

            describe("creditor's signature commits to underwriter =/= offer's", async () => {
                before(async () => {
                    mismatchedDebtOffer = await offerFactory.generateDebtOffer({
                        underwriter: ATTACKER,
                    });
                });
                it("should return DEBT_OFFER_NON_CONSENSUAL error", async () => {
                    await testShouldReturnError(
                        mismatchedDebtOffer,
                        CreditorProxyErrorCodes.DEBT_OFFER_NON_CONSENSUAL,
                        debtOffer.getSignaturesV(),
                        debtOffer.getSignaturesR(),
                        debtOffer.getSignaturesS(),
                    );
                });
            });

            describe("creditor's signature commits to risk rating =/= offer's", async () => {
                before(async () => {
                    mismatchedDebtOffer = await offerFactory.generateDebtOffer({
                        underwriterRiskRating: new BigNumber(0),
                    });
                });
                it("should return DEBT_OFFER_NON_CONSENSUAL error", async () => {
                    await testShouldReturnError(
                        mismatchedDebtOffer,
                        CreditorProxyErrorCodes.DEBT_OFFER_NON_CONSENSUAL,
                        debtOffer.getSignaturesV(),
                        debtOffer.getSignaturesR(),
                        debtOffer.getSignaturesS(),
                    );
                });
            });

            describe("creditor's signature commits to terms contract =/= offer's", async () => {
                before(async () => {
                    mismatchedDebtOffer = await offerFactory.generateDebtOffer({
                        termsContract: ATTACKER,
                    });
                });
                it("should return DEBT_OFFER_NON_CONSENSUAL error", async () => {
                    await testShouldReturnError(
                        mismatchedDebtOffer,
                        CreditorProxyErrorCodes.DEBT_OFFER_NON_CONSENSUAL,
                        debtOffer.getSignaturesV(),
                        debtOffer.getSignaturesR(),
                        debtOffer.getSignaturesS(),
                    );
                });
            });

            describe("creditor's signature commits to terms parameters =/= offer's", async () => {
                before(async () => {
                    mismatchedDebtOffer = await offerFactory.generateDebtOffer({
                        termsContractParameters: web3.sha3("mismatched terms contract parameters"),
                    });
                });
                it("should return DEBT_OFFER_NON_CONSENSUAL error", async () => {
                    await testShouldReturnError(
                        mismatchedDebtOffer,
                        CreditorProxyErrorCodes.DEBT_OFFER_NON_CONSENSUAL,
                        debtOffer.getSignaturesV(),
                        debtOffer.getSignaturesR(),
                        debtOffer.getSignaturesS(),
                    );
                });
            });

            describe("creditor's signature commits to expiration =/= offer's", async () => {
                before(async () => {
                    mismatchedDebtOffer = await offerFactory.generateDebtOffer({
                        expirationTimestampInSec: new BigNumber(0),
                    });
                });
                it("should return DEBT_OFFER_NON_CONSENSUAL error", async () => {
                    await testShouldReturnError(
                        mismatchedDebtOffer,
                        CreditorProxyErrorCodes.DEBT_OFFER_NON_CONSENSUAL,
                        debtOffer.getSignaturesV(),
                        debtOffer.getSignaturesR(),
                        debtOffer.getSignaturesS(),
                    );
                });
            });

            describe("creditor's signature commits to salt =/= offer's", async () => {
                before(async () => {
                    mismatchedDebtOffer = await offerFactory.generateDebtOffer({
                        salt: new BigNumber(0),
                    });
                });
                it("should return DEBT_OFFER_NON_CONSENSUAL error", async () => {
                    await testShouldReturnError(
                        mismatchedDebtOffer,
                        CreditorProxyErrorCodes.DEBT_OFFER_NON_CONSENSUAL,
                        debtOffer.getSignaturesV(),
                        debtOffer.getSignaturesR(),
                        debtOffer.getSignaturesS(),
                    );
                });
            });
        });
    });
});
