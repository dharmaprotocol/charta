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

contract("Creditor Proxy (Unit Tests)", async (ACCOUNTS) => {
    let contractRegistry: ContractRegistryContract;
    let creditorProxy: CreditorProxyContract;
    let mockDebtKernel: MockDebtKernelContract;
    let mockDebtToken: MockDebtTokenContract;
    let mockPrincipalToken: MockERC20TokenContract;
    let mockTokenTransferProxy: MockTokenTransferProxyContract;
    let repaymentRouter: RepaymentRouterContract;

    let orderFactory: DebtOfferFactory;
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
            orderSignatories: { debtor: DEBTOR_1, creditor: CREDITOR_1, underwriter: UNDERWRITER },
        };

        orderFactory = new DebtOfferFactory(defaultOfferParams);

        // Setup ABI decoder in order to decode logs
        ABIDecoder.addABI(creditorProxyArtifact.abi);
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

        describe("user who is not the creditor cancelled debt order", () => {
            before(async () => {
                debtOffer = await orderFactory.generateDebtOffer();
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
                debtOffer = await orderFactory.generateDebtOffer();

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
            signaturesR?: string[],
            signaturesS?: string[],
            signaturesV?: number[],
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

        const testOfferFill = (filler: string, setupDebtOffer: () => Promise<void>) => {
            return () => {
                let debtOfferFilledLog: ABIDecoder.DecodedLog;

                before(async () => {
                    await setupDebtOffer();

                    const creditorPayment = debtOffer
                        .getPrincipalAmount()
                        .plus(debtOffer.getCreditorFee());

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
                    await expect(
                        mockPrincipalToken.wasApproveCalledWith.callAsync(
                            mockTokenTransferProxy.address,
                            debtOffer.getPrincipalAmount().plus(debtOffer.getCreditorFee()),
                        ),
                    ).to.eventually.be.true;
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

        describe("User fills valid, consentual debt offer", () => {
            describe.only(
                "...with underwriter and relayer",
                testOfferFill(CONTRACT_OWNER, async () => {
                    debtOffer = await orderFactory.generateDebtOffer({});
                }),
            );

            describe(
                "...with neither underwriter nor relayer",
                testOfferFill(CONTRACT_OWNER, async () => {
                    debtOffer = await orderFactory.generateDebtOffer({
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
                "...with underwriter but no relayer",
                testOfferFill(CONTRACT_OWNER, async () => {
                    debtOffer = await orderFactory.generateDebtOffer({
                        relayer: NULL_ADDRESS,
                        relayerFee: new BigNumber(0),
                        underwriterFee: defaultOfferParams.creditorFee.plus(
                            defaultOfferParams.debtorFee,
                        ),
                    });
                }),
            );

            describe(
                "...with relayer but no underwriter",
                testOfferFill(CONTRACT_OWNER, async () => {
                    debtOffer = await orderFactory.generateDebtOffer({
                        creditorFee: defaultOfferParams.relayerFee.dividedBy(2),
                        debtorFee: defaultOfferParams.relayerFee.dividedBy(2),
                        underwriter: NULL_ADDRESS,
                        underwriterFee: new BigNumber(0),
                        underwriterRiskRating: new BigNumber(0),
                    });
                }),
            );

            describe(
                "...with no principal and no creditor / debtor fees",
                testOfferFill(CONTRACT_OWNER, async () => {
                    debtOffer = await orderFactory.generateDebtOffer({
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
                    debtOffer = await orderFactory.generateDebtOffer({
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
                    debtOffer = await orderFactory.generateDebtOffer({
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
        });

        describe("User fills invalid debt offer", () => {
            describe("...when creditor has granted transfer proxy insufficient allowance", () => {
                before(async () => {
                    const creditorPayment = debtOffer
                        .getPrincipalAmount()
                        .plus(debtOffer.getCreditorFee());
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
                        creditorPayment.minus(Units.ether(0.01)),
                    );
                    await mockPrincipalToken.mockAllowanceFor.sendTransactionAsync(
                        creditorProxy.address,
                        mockTokenTransferProxy.address,
                        creditorPayment,
                    );
                    debtOffer = await orderFactory.generateDebtOffer();
                });

                it("should return CREDITOR_BALANCE_OR_ALLOWANCE_INSUFFICIENT error", async () => {
                    await testShouldReturnError(
                        debtOffer,
                        CreditorProxyErrorCodes.CREDITOR_BALANCE_OR_ALLOWANCE_INSUFFICIENT,
                    );
                });
            });

            describe("...when creditor has insufficient balance", () => {
                it("should return CREDITOR_BALANCE_OR_ALLOWANCE_INSUFFICIENT error", async () => {});
            });

            describe("...when debt offer has already been filled", () => {
                it("should return DEBT_OFFER_FILLED error", async () => {});
            });

            describe("...when debt offer has been cancelled", () => {
                it("should return DEBT_OFFER_CANCELLED error", async () => {});
            });

            describe("...when debt kernel returns null issuance hash", () => {
                it("should throw", async () => {});
            });
        });

        describe("User fills nonconsensual debt offer", () => {
            describe("...when submitted by debtor *without* debtor signature attached", async () => {
                it("should return DEBT_OFFER_NON_CONSENSUAL error", async () => {});
            });

            describe("...when submitted by underwriter *without* underwriter signature attached", async () => {
                it("should return DEBT_OFFER_NON_CONSENSUAL error", async () => {});
            });

            describe("...when submitted by creditor *without* creditor signature attached", async () => {
                it("should return DEBT_OFFER_NON_CONSENSUAL error", async () => {});
            });

            describe("creditor's signature commits to creditor address =/= order's", async () => {
                it("should return DEBT_OFFER_NON_CONSENSUAL error", async () => {});
            });

            describe("creditor's signature commits to repayment router =/= order's", async () => {
                it("should return DEBT_OFFER_NON_CONSENSUAL error", async () => {});
            });

            describe("creditor's signature commits to creditor fee =/= order's", async () => {
                it("should return DEBT_OFFER_NON_CONSENSUAL error", async () => {});
            });

            describe("creditor's signature commits to underwriter =/= order's", async () => {
                it("should return DEBT_OFFER_NON_CONSENSUAL error", async () => {});
            });

            describe("creditor's signature commits to risk rating =/= order's", async () => {
                it("should return DEBT_OFFER_NON_CONSENSUAL error", async () => {});
            });

            describe("creditor's signature commits to terms contract =/= order's", async () => {
                it("should return DEBT_OFFER_NON_CONSENSUAL error", async () => {});
            });

            describe("creditor's signature commits to terms parameters =/= order's", async () => {
                it("should return DEBT_OFFER_NON_CONSENSUAL error", async () => {});
            });

            describe("creditor's signature commits to expiration =/= order's", async () => {
                it("should return DEBT_OFFER_NON_CONSENSUAL error", async () => {});
            });

            describe("creditor's signature commits to salt =/= order's", async () => {
                it("should return DEBT_OFFER_NON_CONSENSUAL error", async () => {});
            });
        });
    });
});
