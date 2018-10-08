// External Libraries
import * as ABIDecoder from "abi-decoder";
import * as Web3 from "web3";
import * as _ from "lodash";
import * as chai from "chai";
import * as moment from "moment";
import { BigNumber } from "bignumber.js";

// Test Utils
import * as Units from "../test_utils/units";
import {
    multiSigExecuteAfterTimelock,
    multiSigExecutePauseImmediately,
} from "../test_utils/multisig";
import ChaiSetup from "../test_utils/chai_setup";
import { BigNumberSetup } from "../test_utils/bignumber_setup";
import { Web3Utils } from "../../../utils/web3_utils";

// Types
import { SignedDebtOffer } from "../../../types/proxy/debt_offer";

// Logs
import { LogApproval, LogTransfer } from "../logs/debt_token";
import { LogInsertEntry, LogModifyEntryBeneficiary } from "../logs/debt_registry";
import { LogDebtOrderFilled } from "../logs/debt_kernel";
import { LogDebtOfferFilled, LogError } from "../logs/creditor_proxy";

// Factories
import { SimpleInterestParameters } from "../factories/terms_contract_parameters";
import { DebtOfferFactory } from "../factories/debt_offer_factory";

// Wrappers
import { CreditorProxyContract } from "../../../types/generated/creditor_proxy";
import { ContractRegistryContract } from "../../../types/generated/contract_registry";
import { CreditorProxyErrorCodes } from "../../../types/errors";
import { DebtKernelContract } from "../../../types/generated/debt_kernel";
import { DebtRegistryContract } from "../../../types/generated/debt_registry";
import { DebtRegistryEntry } from "../../../types/registry/entry";
import { DebtTokenContract } from "../../../types/generated/debt_token";
import { DummyTokenContract } from "../../../types/generated/dummy_token";
import { RepaymentRouterContract } from "../../../types/generated/repayment_router";
import { SimpleInterestTermsContractContract } from "../../../types/generated/simple_interest_terms_contract";
import { TokenRegistryContract } from "../../../types/generated/token_registry";
import { TokenTransferProxyContract } from "../../../types/generated/token_transfer_proxy";
import { DharmaMultiSigWalletContract } from "../../../types/generated/dharma_multi_sig_wallet";

// Constants
import { REVERT_ERROR } from "../test_utils/constants";

// Configure BigNumber exponentiation
BigNumberSetup.configure();

// Set up Chai
ChaiSetup.configure();
const expect = chai.expect;

// Set up utils
const web3Utils = new Web3Utils(web3);

const creditorProxyArtifacts = artifacts.require("CreditorProxy");
const debtTokenArtifacts = artifacts.require("DebtToken");
const debtKernelArtifacts = artifacts.require("DebtKernel");

contract("Creditor Proxy (Integration Tests)", async (ACCOUNTS) => {
    let creditorProxy: CreditorProxyContract;
    let contractRegistry: ContractRegistryContract;
    let kernel: DebtKernelContract;
    let repaymentRouter: RepaymentRouterContract;
    let simpleInterestTermsContract: SimpleInterestTermsContractContract;
    let tokenTransferProxy: TokenTransferProxyContract;
    let debtTokenContract: DebtTokenContract;
    let debtRegistryContract: DebtRegistryContract;

    let dummyREPToken: DummyTokenContract;
    let dummyZRXToken: DummyTokenContract;

    let defaultOfferParams: { [key: string]: any };
    let offerFactory: DebtOfferFactory;

    let multiSig: DharmaMultiSigWalletContract;

    const CONTRACT_OWNER = ACCOUNTS[0];
    const ATTACKER = ACCOUNTS[1];
    const DEBTOR_1 = ACCOUNTS[2];
    const CREDITOR_1 = ACCOUNTS[3];
    const CREDITOR_2 = ACCOUNTS[5];
    const UNDERWRITER = ACCOUNTS[4];
    const RELAYER = ACCOUNTS[6];
    const MALICIOUS_TERMS_CONTRACTS = ACCOUNTS[7];
    const ALTERNATIVE_TOKEN_ADDRESS = ACCOUNTS[8];

    const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";

    const TX_DEFAULTS = { from: CONTRACT_OWNER, gas: 4712388 };

    const reset = async () => {
        const dummyTokenRegistryContract = await TokenRegistryContract.deployed(web3, TX_DEFAULTS);
        const dummyREPTokenAddress = await dummyTokenRegistryContract.getTokenAddressBySymbol.callAsync(
            "REP",
        );
        dummyREPToken = await DummyTokenContract.at(dummyREPTokenAddress, web3, TX_DEFAULTS);

        const dummyZRXTokenAddress = await dummyTokenRegistryContract.getTokenAddressBySymbol.callAsync(
            "ZRX",
        );
        dummyZRXToken = await DummyTokenContract.at(dummyZRXTokenAddress, web3, TX_DEFAULTS);

        debtTokenContract = await DebtTokenContract.deployed(web3, TX_DEFAULTS);
        debtRegistryContract = await DebtRegistryContract.deployed(web3, TX_DEFAULTS);
        tokenTransferProxy = await TokenTransferProxyContract.deployed(web3, TX_DEFAULTS);
        creditorProxy = await CreditorProxyContract.deployed(web3, TX_DEFAULTS);
        contractRegistry = await ContractRegistryContract.deployed(web3, TX_DEFAULTS);
        kernel = await DebtKernelContract.deployed(web3, TX_DEFAULTS);
        multiSig = await DharmaMultiSigWalletContract.deployed(web3, TX_DEFAULTS);
        repaymentRouter = await RepaymentRouterContract.deployed(web3, TX_DEFAULTS);
        simpleInterestTermsContract = await SimpleInterestTermsContractContract.deployed(
            web3,
            TX_DEFAULTS,
        );

        const termsContractParameters = SimpleInterestParameters.pack({
            principalTokenIndex: new BigNumber(0), // Our migrations set REP up to be at index 0 of the registry
            principalAmount: Units.ether(1), // principal of 1 ether
            interestRateFixedPoint: Units.interestRateFixedPoint(2.5), // interest rate of 2.5%
            amortizationUnitType: new BigNumber(1), // The amortization unit type (weekly)
            termLengthUnits: new BigNumber(4), // Term length in amortization units.
        });

        const latestBlockTime = await web3Utils.getLatestBlockTime();

        defaultOfferParams = {
            kernelVersion: kernel.address,
            creditor: CREDITOR_1,
            repaymentRouterVersion: repaymentRouter.address,
            debtor: DEBTOR_1,
            underwriter: UNDERWRITER,
            termsContract: simpleInterestTermsContract.address,
            principalToken: dummyREPToken.address,
            relayer: RELAYER,
            underwriterRiskRating: Units.underwriterRiskRatingFixedPoint(1.35),
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
            termsContractParameters,
            offerSignatories: { debtor: DEBTOR_1, creditor: CREDITOR_1, underwriter: UNDERWRITER },
        };

        offerFactory = new DebtOfferFactory(defaultOfferParams);

        // Setup ABI decoder in order to decode logs
        ABIDecoder.addABI(creditorProxyArtifacts.abi);
        ABIDecoder.addABI(debtTokenArtifacts.abi);
        ABIDecoder.addABI(debtRegistryContract.abi);
        ABIDecoder.addABI(debtKernelArtifacts.abi);
    };

    before(reset);

    after(() => {
        // Tear down ABIDecoder before next set of tests
        ABIDecoder.removeABI(creditorProxyArtifacts.abi);
    });

    describe("Initialization & Upgrades", async () => {
        it("points to correct contract registry", async () => {
            expect(creditorProxy.contractRegistry.callAsync()).to.eventually.equal(
                contractRegistry.address,
            );
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
            errorEmitterAddress = creditorProxy.address,
            offerForParams = offer,
        ) => {
            const txHash = await creditorProxy.fillDebtOffer.sendTransactionAsync(
                offerForParams.getCreditor(),
                offerForParams.getOrderAddresses(),
                offerForParams.getOrderValues(),
                offerForParams.getOrderBytes32(),
                signaturesV || offer.getSignaturesV(),
                signaturesR || offer.getSignaturesR(),
                signaturesS || offer.getSignaturesS(),
            );

            const receipt = await web3.eth.getTransactionReceipt(txHash);
            const [errorLog] = _.compact(ABIDecoder.decodeLogs(receipt.logs));

            expect(errorLog).to.deep.equal(
                LogError(
                    errorEmitterAddress,
                    errorCode,
                    offer.getCreditor(),
                    offer.getCreditorCommitmentHash(),
                ),
            );
        };

        const setupBalancesAndAllowances = async (): Promise<[BigNumber, BigNumber]> => {
            const token = await DummyTokenContract.at(
                debtOffer.getPrincipalToken(),
                web3,
                TX_DEFAULTS,
            );

            const debtor = debtOffer.getDebtor();
            const creditor = debtOffer.getCreditor();

            const debtorBalanceAndAllowance = new BigNumber(0);
            const creditorBalanceAndAllowance = debtOffer
                .getPrincipalAmount()
                .times(2)
                .plus(debtOffer.getCreditorFee());

            await token.setBalance.sendTransactionAsync(debtor, debtorBalanceAndAllowance, {
                from: CONTRACT_OWNER,
            });
            await token.approve.sendTransactionAsync(
                tokenTransferProxy.address,
                debtorBalanceAndAllowance,
                {
                    from: debtor,
                },
            );

            await token.approve.sendTransactionAsync(
                creditorProxy.address,
                debtorBalanceAndAllowance,
                {
                    from: debtor,
                },
            );

            await token.setBalance.sendTransactionAsync(creditor, creditorBalanceAndAllowance, {
                from: CONTRACT_OWNER,
            });

            await token.approve.sendTransactionAsync(
                creditorProxy.address,
                creditorBalanceAndAllowance,
                { from: creditor },
            );

            return [debtorBalanceAndAllowance, creditorBalanceAndAllowance];
        };

        const getAgentBalances = async (principalToken: DummyTokenContract) => {
            const debtorBalance = await principalToken.balanceOf.callAsync(debtOffer.getDebtor());
            const creditorBalance = await principalToken.balanceOf.callAsync(
                debtOffer.getCreditor(),
            );
            const underwriterBalance = await principalToken.balanceOf.callAsync(
                debtOffer.getUnderwriter(),
            );
            const relayerBalance = await principalToken.balanceOf.callAsync(debtOffer.getRelayer());
            const creditorProxyBalance = await principalToken.balanceOf.callAsync(
                creditorProxy.address,
            );

            return [
                debtorBalance,
                creditorBalance,
                underwriterBalance,
                relayerBalance,
                creditorProxyBalance,
            ];
        };

        const testOfferFill = (filler: string, setupDebtOffer: () => Promise<void>) => {
            return () => {
                let principalToken: DummyTokenContract;

                let debtorBalanceBefore: BigNumber;
                let creditorBalanceBefore: BigNumber;
                let underwriterBalanceBefore: BigNumber;
                let relayerBalanceBefore: BigNumber;
                let creditorProxyBalanceBefore: BigNumber;

                let receipt: Web3.TransactionReceipt;
                let block: Web3.BlockWithoutTransactionData;

                let logs: ABIDecoder.DecodedLog[];

                before(async () => {
                    await setupDebtOffer();
                    await setupBalancesAndAllowances();

                    principalToken = await DummyTokenContract.at(
                        debtOffer.getPrincipalToken(),
                        web3,
                        TX_DEFAULTS,
                    );

                    [
                        debtorBalanceBefore,
                        creditorBalanceBefore,
                        underwriterBalanceBefore,
                        relayerBalanceBefore,
                        creditorProxyBalanceBefore,
                    ] = await getAgentBalances(principalToken);

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

                    receipt = await web3.eth.getTransactionReceipt(txHash);
                    block = await web3.eth.getBlock(receipt.blockNumber);

                    logs = _.compact(ABIDecoder.decodeLogs(receipt.logs));
                });

                it("should deduct principal + creditor fee from creditor account", async () => {
                    const balance = await principalToken.balanceOf.callAsync(
                        debtOffer.getCreditor(),
                    );
                    const expectedBalance = creditorBalanceBefore.minus(
                        debtOffer.getPrincipalAmount().plus(debtOffer.getCreditorFee()),
                    );
                    expect(balance.toString()).to.equal(expectedBalance.toString());
                });

                it("should transfer newly minted debt token to creditor", async () => {
                    await expect(
                        debtTokenContract.ownerOf.callAsync(
                            new BigNumber(debtOffer.getAgreementId()),
                        ),
                    ).to.eventually.equal(debtOffer.getCreditor());
                });

                it("should not change the creditor proxy balance", async () => {
                    const balance = await principalToken.balanceOf.callAsync(creditorProxy.address);
                    expect(balance.toString()).to.equal(creditorProxyBalanceBefore.toString());
                });

                it("should transfer principal - debtor fee to debtor via debt kernel", async () => {
                    const balance = await principalToken.balanceOf.callAsync(debtOffer.getDebtor());
                    const expectedBalance = debtorBalanceBefore.plus(
                        debtOffer.getPrincipalAmount().minus(debtOffer.getDebtorFee()),
                    );
                    expect(balance.toString()).to.equal(expectedBalance.toString());
                });

                describe("Logs Emitted:", () => {
                    it("should emit approval log allowing transfer proxy to tranfer by creditor proxy", async () => {
                        if (
                            debtOffer
                                .getPrincipalAmount()
                                .plus(debtOffer.getCreditorFee())
                                .gt(0)
                        ) {
                            await expect(logs.shift()).to.deep.equal(
                                LogApproval(
                                    debtOffer.getPrincipalToken(),
                                    creditorProxy.address,
                                    tokenTransferProxy.address,
                                    debtOffer.getPrincipalAmount().plus(debtOffer.getCreditorFee()),
                                ),
                            );
                        }
                    });

                    it("should emit transfer log from creditor to creditor proxy", async () => {
                        if (
                            debtOffer
                                .getPrincipalAmount()
                                .plus(debtOffer.getCreditorFee())
                                .gt(0)
                        ) {
                            expect(logs.shift()).to.deep.equal(
                                LogTransfer(
                                    debtOffer.getPrincipalToken(),
                                    debtOffer.getCreditor(),
                                    creditorProxy.address,
                                    debtOffer.getPrincipalAmount().plus(debtOffer.getCreditorFee()),
                                ),
                            );
                        }
                    });

                    it("should emit registry insert log", async () => {
                        await expect(logs.shift()).to.deep.equal(
                            LogInsertEntry(
                                debtRegistryContract.address,
                                new DebtRegistryEntry(
                                    {
                                        beneficiary: creditorProxy.address,
                                        debtor: debtOffer.getDebtor(),
                                        termsContract: debtOffer.getTermsContract(),
                                        termsContractParameters: debtOffer.getTermsContractParameters(),
                                        underwriter: debtOffer.getUnderwriter(),
                                        underwriterRiskRating: debtOffer.getUnderwriterRiskRating(),
                                        version: debtOffer.getRepaymentRouterVersion(),
                                    },
                                    debtOffer.getSalt(),
                                ),
                            ),
                        );
                    });

                    it("should emit debt token transfer log", async () => {
                        expect(logs.shift()).to.deep.equal(
                            LogTransfer(
                                debtTokenContract.address,
                                NULL_ADDRESS,
                                creditorProxy.address,
                                new BigNumber(debtOffer.getAgreementId()),
                            ),
                        );
                    });

                    it("should emit transfer log from creditor proxy to debtor (if principal - debtor fee > 0)", async () => {
                        if (
                            debtOffer
                                .getPrincipalAmount()
                                .minus(debtOffer.getDebtorFee())
                                .gt(0)
                        ) {
                            expect(logs.shift()).to.deep.equal(
                                LogTransfer(
                                    debtOffer.getPrincipalToken(),
                                    creditorProxy.address,
                                    debtOffer.getDebtor(),
                                    debtOffer.getPrincipalAmount().minus(debtOffer.getDebtorFee()),
                                ),
                            );
                        }
                    });

                    it("should emit transfer log from creditor proxy to underwriter (if present)", async () => {
                        if (debtOffer.getUnderwriter() !== NULL_ADDRESS) {
                            await expect(logs.shift()).to.deep.equal(
                                LogTransfer(
                                    debtOffer.getPrincipalToken(),
                                    creditorProxy.address,
                                    debtOffer.getUnderwriter(),
                                    debtOffer.getUnderwriterFee(),
                                ),
                            );
                        }
                    });

                    it("should emit transfer log from creditor proxy to relayer (if present)", async () => {
                        if (debtOffer.getRelayer() !== NULL_ADDRESS) {
                            await expect(logs.shift()).to.deep.equal(
                                LogTransfer(
                                    debtOffer.getPrincipalToken(),
                                    creditorProxy.address,
                                    debtOffer.getRelayer(),
                                    debtOffer.getRelayerFee(),
                                ),
                            );
                        }
                    });

                    it("should emit debt order filled log", () => {
                        expect(logs.shift()).to.deep.equal(
                            LogDebtOrderFilled(
                                kernel.address,
                                debtOffer.getAgreementId(),
                                debtOffer.getPrincipalAmount(),
                                debtOffer.getPrincipalToken(),
                                debtOffer.getUnderwriter(),
                                debtOffer.getUnderwriterFee(),
                                debtOffer.getRelayer(),
                                debtOffer.getRelayerFee(),
                            ),
                        );
                    });

                    it("should emit modify benefeciary log", async () => {
                        expect(logs.shift()).to.deep.equal(
                            LogModifyEntryBeneficiary(
                                debtRegistryContract.address,
                                debtOffer.getAgreementId(),
                                creditorProxy.address,
                                debtOffer.getCreditor(),
                            ),
                        );
                    });

                    it("should emit transfer log from creditor proxy to creditor", async () => {
                        await expect(logs.shift()).to.deep.equal(
                            LogTransfer(
                                debtTokenContract.address,
                                creditorProxy.address,
                                debtOffer.getCreditor(),
                                new BigNumber(debtOffer.getAgreementId()),
                            ),
                        );
                    });

                    it("should emit debt offer filled log", async () => {
                        expect(logs.shift()).to.deep.equal(
                            LogDebtOfferFilled(
                                creditorProxy.address,
                                debtOffer.getCreditor(),
                                debtOffer.getCreditorCommitmentHash(),
                                debtOffer.getAgreementId(),
                            ),
                        );
                    });
                });
            };
        };

        before(reset);

        describe("User fills valid, consentual debt offer", () => {
            describe("...and creditor proxy is paused by owner via multi-sig", async () => {
                before(async () => {
                    debtOffer = await offerFactory.generateDebtOffer();
                    await multiSigExecutePauseImmediately(
                        web3,
                        multiSig,
                        creditorProxy,
                        "pause",
                        ACCOUNTS,
                    );
                });
                after(async () => {
                    await multiSigExecuteAfterTimelock(
                        web3,
                        multiSig,
                        creditorProxy,
                        "unpause",
                        ACCOUNTS,
                    );
                });
                it("should throw", async () => {
                    await expect(
                        creditorProxy.fillDebtOffer.sendTransactionAsync(
                            debtOffer.getCreditor(),
                            debtOffer.getOrderAddresses(),
                            debtOffer.getOrderValues(),
                            debtOffer.getOrderBytes32(),
                            debtOffer.getSignaturesV(),
                            debtOffer.getSignaturesR(),
                            debtOffer.getSignaturesS(),
                        ),
                    ).to.eventually.be.rejectedWith(REVERT_ERROR);
                });
            });

            describe(
                "...with valid params",
                testOfferFill(CONTRACT_OWNER, async () => {
                    debtOffer = await offerFactory.generateDebtOffer();
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

        describe("User fills invalid debt order", () => {
            describe("...when creditor has not granted the creditor proxy contract sufficient allowance", () => {
                before(async () => {
                    debtOffer = await offerFactory.generateDebtOffer();
                    await setupBalancesAndAllowances();

                    const token = await DummyTokenContract.at(
                        debtOffer.getPrincipalToken(),
                        web3,
                        TX_DEFAULTS,
                    );

                    await token.approve.sendTransactionAsync(
                        creditorProxy.address,
                        debtOffer.getPrincipalAmount().plus(debtOffer.getCreditorFee().minus(1)),
                        { from: debtOffer.getCreditor() },
                    );
                });

                it("should return CREDITOR_BALANCE_OR_ALLOWANCE_INSUFFICIENT error", async () => {
                    await testShouldReturnError(
                        debtOffer,
                        CreditorProxyErrorCodes.CREDITOR_BALANCE_OR_ALLOWANCE_INSUFFICIENT,
                    );
                });
            });

            describe("...when creditor does not have sufficient balance", () => {
                before(async () => {
                    debtOffer = await offerFactory.generateDebtOffer();

                    const token = await DummyTokenContract.at(
                        debtOffer.getPrincipalToken(),
                        web3,
                        TX_DEFAULTS,
                    );
                    await token.setBalance.sendTransactionAsync(
                        debtOffer.getCreditor(),
                        debtOffer.getPrincipalAmount().plus(debtOffer.getCreditorFee().minus(1)),
                        { from: CONTRACT_OWNER },
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
                    await setupBalancesAndAllowances();

                    await creditorProxy.fillDebtOffer.sendTransactionAsync(
                        debtOffer.getCreditor(),
                        debtOffer.getOrderAddresses(),
                        debtOffer.getOrderValues(),
                        debtOffer.getOrderBytes32(),
                        debtOffer.getSignaturesV(),
                        debtOffer.getSignaturesR(),
                        debtOffer.getSignaturesS(),
                    );
                });

                it("should return DEBT_OFFER_ALREADY_FILLED error", async () => {
                    await testShouldReturnError(
                        debtOffer,
                        CreditorProxyErrorCodes.DEBT_OFFER_ALREADY_FILLED,
                    );
                });
            });

            describe("...when debt offer has been cancelled", () => {
                before(async () => {
                    debtOffer = await offerFactory.generateDebtOffer();
                    await setupBalancesAndAllowances();

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

            describe("...when debt kernel returns NULL_ISSUANCE_HASH", () => {
                before(async () => {
                    debtOffer = await offerFactory.generateDebtOffer();
                    await setupBalancesAndAllowances();
                });

                it("should throw", async () => {
                    await expect(
                        creditorProxy.fillDebtOffer.sendTransactionAsync(
                            debtOffer.getCreditor(),
                            debtOffer.getOrderAddresses(),
                            debtOffer.getOrderValues(),
                            debtOffer.getOrderBytes32(),
                            [null, debtOffer.getSignaturesV()[1], debtOffer.getSignaturesV()[2]],
                            [null, debtOffer.getSignaturesR()[1], debtOffer.getSignaturesR()[2]],
                            [null, debtOffer.getSignaturesS()[1], debtOffer.getSignaturesS()[2]],
                        ),
                    ).to.eventually.be.rejectedWith(REVERT_ERROR);
                });
            });
        });

        describe("User fills valid, nonconsensual debt offer", () => {
            let mismatchedOffer: SignedDebtOffer;
            before(async () => {
                debtOffer = await offerFactory.generateDebtOffer();
                await setupBalancesAndAllowances();
            });

            describe("...with mismatched issuance parameters", () => {
                describe("creditor's signature not attached", () => {
                    before(async () => {
                        mismatchedOffer = await offerFactory.generateDebtOffer();
                        await setupBalancesAndAllowances();
                    });

                    it("should return DEBT_OFFER_NON_CONSENSUAL error", async () => {
                        await testShouldReturnError(
                            mismatchedOffer,
                            CreditorProxyErrorCodes.DEBT_OFFER_NON_CONSENSUAL,
                            [
                                mismatchedOffer.getSignaturesV()[0],
                                null,
                                mismatchedOffer.getSignaturesV()[2],
                            ],
                            [
                                mismatchedOffer.getSignaturesR()[0],
                                null,
                                mismatchedOffer.getSignaturesR()[2],
                            ],
                            [
                                mismatchedOffer.getSignaturesS()[0],
                                null,
                                mismatchedOffer.getSignaturesS()[2],
                            ],
                        );
                    });
                });

                describe("creditor's signature commits to creditor address =/= offer's", async () => {
                    before(async () => {
                        mismatchedOffer = await offerFactory.generateDebtOffer({
                            creditor: CREDITOR_2,
                        });
                        await setupBalancesAndAllowances();
                    });

                    it("should return DEBT_OFFER_NON_CONSENSUAL error", async () => {
                        await testShouldReturnError(
                            mismatchedOffer,
                            CreditorProxyErrorCodes.DEBT_OFFER_NON_CONSENSUAL,
                            debtOffer.getSignaturesV(),
                            debtOffer.getSignaturesR(),
                            debtOffer.getSignaturesS(),
                        );
                    });
                });

                describe("creditor's signature commits to repayment router =/= offer's", async () => {
                    before(async () => {
                        mismatchedOffer = await offerFactory.generateDebtOffer({
                            repaymentRouterVersion: ATTACKER,
                        });
                        await setupBalancesAndAllowances();
                    });

                    it("should return DEBT_OFFER_NON_CONSENSUAL error", async () => {
                        await testShouldReturnError(
                            mismatchedOffer,
                            CreditorProxyErrorCodes.DEBT_OFFER_NON_CONSENSUAL,
                            debtOffer.getSignaturesV(),
                            debtOffer.getSignaturesR(),
                            debtOffer.getSignaturesS(),
                        );
                    });
                });

                describe("creditor's signature commits to creditor fee =/= offer's", async () => {
                    before(async () => {
                        mismatchedOffer = await offerFactory.generateDebtOffer({
                            creditorFee: new BigNumber(0),
                        });
                        await setupBalancesAndAllowances();
                    });

                    it("should return DEBT_OFFER_NON_CONSENSUAL error", async () => {
                        await testShouldReturnError(
                            mismatchedOffer,
                            CreditorProxyErrorCodes.DEBT_OFFER_NON_CONSENSUAL,
                            debtOffer.getSignaturesV(),
                            debtOffer.getSignaturesR(),
                            debtOffer.getSignaturesS(),
                        );
                    });
                });

                describe("creditor's signature commits to underwriter =/= offer's", async () => {
                    before(async () => {
                        mismatchedOffer = await offerFactory.generateDebtOffer({
                            underwriter: ATTACKER,
                        });
                        await setupBalancesAndAllowances();
                    });

                    it("should return DEBT_OFFER_NON_CONSENSUAL error", async () => {
                        await testShouldReturnError(
                            mismatchedOffer,
                            CreditorProxyErrorCodes.DEBT_OFFER_NON_CONSENSUAL,
                            debtOffer.getSignaturesV(),
                            debtOffer.getSignaturesR(),
                            debtOffer.getSignaturesS(),
                        );
                    });
                });

                describe("creditor's signature commits to risk rating =/= offer's", async () => {
                    before(async () => {
                        mismatchedOffer = await offerFactory.generateDebtOffer({
                            underwriterRiskRating: new BigNumber(0),
                        });
                        await setupBalancesAndAllowances();
                    });

                    it("should return DEBT_OFFER_NON_CONSENSUAL error", async () => {
                        await testShouldReturnError(
                            mismatchedOffer,
                            CreditorProxyErrorCodes.DEBT_OFFER_NON_CONSENSUAL,
                            debtOffer.getSignaturesV(),
                            debtOffer.getSignaturesR(),
                            debtOffer.getSignaturesS(),
                        );
                    });
                });

                describe("creditor's signature commits to terms contract =/= offer's", async () => {
                    before(async () => {
                        mismatchedOffer = await offerFactory.generateDebtOffer({
                            termsContract: ATTACKER,
                        });
                        await setupBalancesAndAllowances();
                    });

                    it("should return DEBT_OFFER_NON_CONSENSUAL error", async () => {
                        await testShouldReturnError(
                            mismatchedOffer,
                            CreditorProxyErrorCodes.DEBT_OFFER_NON_CONSENSUAL,
                            debtOffer.getSignaturesV(),
                            debtOffer.getSignaturesR(),
                            debtOffer.getSignaturesS(),
                        );
                    });
                });

                describe("creditor's signature commits to terms parameters =/= offer's", async () => {
                    before(async () => {
                        mismatchedOffer = await offerFactory.generateDebtOffer({
                            termsContractParameters: web3.sha3(
                                "mismatched terms contract parameters",
                            ),
                        });
                        await setupBalancesAndAllowances();
                    });

                    it("should return DEBT_OFFER_NON_CONSENSUAL error", async () => {
                        await testShouldReturnError(
                            mismatchedOffer,
                            CreditorProxyErrorCodes.DEBT_OFFER_NON_CONSENSUAL,
                            debtOffer.getSignaturesV(),
                            debtOffer.getSignaturesR(),
                            debtOffer.getSignaturesS(),
                        );
                    });
                });

                describe("creditor's signature commits to expiration =/= offer's", async () => {
                    before(async () => {
                        mismatchedOffer = await offerFactory.generateDebtOffer({
                            expirationTimestampInSec: new BigNumber(0),
                        });
                        await setupBalancesAndAllowances();
                    });

                    it("should return DEBT_OFFER_NON_CONSENSUAL error", async () => {
                        await testShouldReturnError(
                            mismatchedOffer,
                            CreditorProxyErrorCodes.DEBT_OFFER_NON_CONSENSUAL,
                            debtOffer.getSignaturesV(),
                            debtOffer.getSignaturesR(),
                            debtOffer.getSignaturesS(),
                        );
                    });
                });

                describe("creditor's signature commits to salt =/= offer's", async () => {
                    before(async () => {
                        mismatchedOffer = await offerFactory.generateDebtOffer({
                            salt: new BigNumber(0),
                        });
                        await setupBalancesAndAllowances();
                    });

                    it("should return DEBT_OFFER_NON_CONSENSUAL error", async () => {
                        await testShouldReturnError(
                            mismatchedOffer,
                            CreditorProxyErrorCodes.DEBT_OFFER_NON_CONSENSUAL,
                            debtOffer.getSignaturesV(),
                            debtOffer.getSignaturesR(),
                            debtOffer.getSignaturesS(),
                        );
                    });
                });

                describe("principal amount is above the value signed off by the creditor", async () => {
                    before(async () => {
                        mismatchedOffer = await offerFactory.generateDebtOffer({
                            principalAmount: debtOffer.getPrincipalAmount().plus(10000),
                        });
                        await setupBalancesAndAllowances();
                    });

                    it("should not fill", async () => {
                        const signaturesV = mismatchedOffer.getSignaturesV();
                        const signaturesR = mismatchedOffer.getSignaturesR();
                        const signaturesS = mismatchedOffer.getSignaturesS();

                        signaturesV[1] = debtOffer.getSignaturesV()[1];
                        signaturesR[1] = debtOffer.getSignaturesR()[1];
                        signaturesS[1] = debtOffer.getSignaturesS()[1];

                        await testShouldReturnError(
                            debtOffer,
                            CreditorProxyErrorCodes.DEBT_OFFER_NON_CONSENSUAL,
                            signaturesV,
                            signaturesR,
                            signaturesS,
                            creditorProxy.address,
                            mismatchedOffer,
                        );
                    });
                });

                describe("principal token is not the token signed off by the creditor", async () => {
                    before(async () => {
                        debtOffer = await offerFactory.generateDebtOffer({
                            principalToken: dummyZRXToken.address,
                        });
                        await setupBalancesAndAllowances();
                    });

                    it("should not fill", async () => {
                        const signaturesV = debtOffer.getSignaturesV();
                        const signaturesR = debtOffer.getSignaturesR();
                        const signaturesS = debtOffer.getSignaturesS();

                        await testShouldReturnError(
                            debtOffer,
                            CreditorProxyErrorCodes.DEBT_OFFER_NON_CONSENSUAL,
                            signaturesV,
                            signaturesR,
                            signaturesS,
                            creditorProxy.address,
                        );
                    });
                });

                describe("repayment router is not the router signed off by the creditor", async () => {
                    before(async () => {
                        debtOffer.params.repaymentRouterVersion = dummyZRXToken.address;
                        await setupBalancesAndAllowances();
                    });

                    it("should not fill", async () => {
                        const signaturesV = debtOffer.getSignaturesV();
                        const signaturesR = debtOffer.getSignaturesR();
                        const signaturesS = debtOffer.getSignaturesS();

                        await testShouldReturnError(
                            debtOffer,
                            CreditorProxyErrorCodes.DEBT_OFFER_NON_CONSENSUAL,
                            signaturesV,
                            signaturesR,
                            signaturesS,
                            creditorProxy.address,
                        );
                    });
                });
            });
        });
    });
});
