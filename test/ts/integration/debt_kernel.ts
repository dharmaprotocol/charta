import {BigNumber} from "bignumber.js";

import * as ABIDecoder from "abi-decoder";
import * as chai from "chai";
import * as _ from "lodash";
import * as moment from "moment";
import * as Web3 from "web3";
import * as Units from "../test_utils/units";
import * as utils from "../test_utils/utils";

import {LogDebtOrderFilled, LogError} from "../logs/debt_kernel";
import {LogInsertEntry, LogModifyEntryBeneficiary} from "../logs/debt_registry";
import {LogApproval, LogMint, LogTransfer} from "../logs/debt_token";

import {DebtKernelContract} from "../../../types/generated/debt_kernel";
import {DebtRegistryContract} from "../../../types/generated/debt_registry";
import {DebtTokenContract} from "../../../types/generated/debt_token";
import {RepaymentRouterContract} from "../../../types/generated/repayment_router";

import {ZeroEx} from "0x.js";
import {ZeroX_DummyTokenContract} from "../../../types/generated/zerox_dummytoken";
import {ZeroX_ExchangeContract} from "../../../types/generated/zerox_exchange";
import {ZeroX_TokenRegistryContract} from "../../../types/generated/zerox_tokenregistry";
import {ZeroX_TokenTransferProxyContract} from "../../../types/generated/zerox_tokentransferproxy";

import {BigNumberSetup} from "../test_utils/bignumber_setup";
import ChaiSetup from "../test_utils/chai_setup";
import {INVALID_OPCODE, REVERT_ERROR} from "../test_utils/constants";

import {DebtOrderFactory} from "../factories/debt_order_factory";

import {DebtOrder, SignedDebtOrder} from "../../../types/kernel/debt_order";
import {IssuanceCommitment, SignedIssuanceCommitment} from "../../../types/kernel/issuance_commitment";

import {DebtRegistryEntry} from "../../../types/registry/entry";

import {TxDataPayable} from "../../../types/common";
import {DebtKernelErrorCodes} from "../../../types/errors";

// Configure BigNumber exponentiation
BigNumberSetup.configure();

// Set up Chai
ChaiSetup.configure();
const expect = chai.expect;

const debtKernelContract = artifacts.require("DebtKernel");

contract("Debt Kernel (Integration Tests)", async (ACCOUNTS) => {
    let kernel: DebtKernelContract;
    let repaymentRouter: RepaymentRouterContract;
    let debtTokenContract: DebtTokenContract;
    let debtRegistryContract: DebtRegistryContract;

    let zeroEx: ZeroEx;
    let dummyREPToken: ZeroX_DummyTokenContract;
    let dummyZRXToken: ZeroX_DummyTokenContract;
    let dummyMKRToken: ZeroX_DummyTokenContract;

    let defaultOrderParams: { [key: string]: any };
    let orderFactory: DebtOrderFactory;

    const CONTRACT_OWNER = ACCOUNTS[0];
    const ATTACKER = ACCOUNTS[1];

    const ISSUER_1 = ACCOUNTS[2];
    const ISSUER_2 = ACCOUNTS[3];
    const ISSUER_3 = ACCOUNTS[4];
    const ISSUERS = [
        ISSUER_1,
        ISSUER_2,
        ISSUER_3,
    ];

    const DEBTOR_1 = ACCOUNTS[5];
    const DEBTOR_2 = ACCOUNTS[6];
    const DEBTOR_3 = ACCOUNTS[7];
    const DEBTORS = [
        DEBTOR_1,
        DEBTOR_2,
        DEBTOR_3,
    ];

    const CREDITOR_1 = ACCOUNTS[8];
    const CREDITOR_2 = ACCOUNTS[9];
    const CREDITOR_3 = ACCOUNTS[10];
    const CREDITORS = [
        CREDITOR_1,
        CREDITOR_2,
        CREDITOR_3,
    ];

    const UNDERWRITER = ACCOUNTS[11];
    const RELAYER = ACCOUNTS[12];
    const TERMS_CONTRACT = ACCOUNTS[13];
    const MALICIOUS_TERMS_CONTRACTS = ACCOUNTS[14];
    const MALICIOUS_EXCHANGE_CONTRACT = ACCOUNTS[15];

    const TERMS_CONTRACT_PARAMETERS = web3.sha3("arbitrary terms contract parameters");

    const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";

    const TX_DEFAULTS = { from: CONTRACT_OWNER, gas: 4712388 };

    const reset = async () => {
        // Initialize 0x.js library and retrieve deployed dummy tokens
        const zeroExExchangeContract = await ZeroX_ExchangeContract.deployed(web3, TX_DEFAULTS);
        const zeroExTokenRegistryContract = await ZeroX_TokenRegistryContract.deployed(web3, TX_DEFAULTS);
        const zeroExTokenTransferProxyContract = await ZeroX_TokenTransferProxyContract.deployed(web3, TX_DEFAULTS);

        zeroEx = new ZeroEx(web3.currentProvider, {
            exchangeContractAddress: zeroExExchangeContract.address,
            networkId: parseInt(web3.version.network, 10),
            tokenRegistryContractAddress: zeroExTokenRegistryContract.address,
            tokenTransferProxyContractAddress: zeroExTokenTransferProxyContract.address,
        });

        const dummyREPTokenAddress = await zeroEx.tokenRegistry.getTokenAddressBySymbolIfExistsAsync("REP");
        const dummyZRXTokenAddress = await zeroEx.tokenRegistry.getTokenAddressBySymbolIfExistsAsync("ZRX");
        const dummyMKRTokenAddress = await zeroEx.tokenRegistry.getTokenAddressBySymbolIfExistsAsync("MKR");

        dummyREPToken = await ZeroX_DummyTokenContract.at(dummyREPTokenAddress,
            web3, TX_DEFAULTS);
        dummyZRXToken = await ZeroX_DummyTokenContract.at(dummyZRXTokenAddress,
            web3, TX_DEFAULTS);
        dummyMKRToken = await ZeroX_DummyTokenContract.at(dummyMKRTokenAddress,
            web3, TX_DEFAULTS);

        debtTokenContract = await DebtTokenContract.deployed(web3, TX_DEFAULTS);
        debtRegistryContract = await DebtRegistryContract.deployed(web3, TX_DEFAULTS);

        const kernelContractInstance =
            await debtKernelContract.new(zeroExTokenTransferProxyContract.address);

        // The typings we use ingest vanilla Web3 contracts, so we convert the
        // contract instance deployed by truffle into a Web3 contract instance
        const web3ContractInstance =
            web3.eth.contract(debtKernelContract.abi).at(kernelContractInstance.address);

        kernel = new DebtKernelContract(web3ContractInstance, TX_DEFAULTS);

        // Load current Repayment Router for use as a version address in the Issuance
        // commitments
        repaymentRouter = await RepaymentRouterContract.deployed(web3, TX_DEFAULTS);

        defaultOrderParams = {
            creditorFee: Units.ether(0.002),
            debtKernelContract: kernel.address,
            debtTokenContract: debtTokenContract.address,
            debtor: DEBTOR_1,
            debtorFee: Units.ether(0.001),
            expirationTimestampInSec: new BigNumber(moment().add(1, "days").unix()),
            issuanceVersion: repaymentRouter.address,
            orderSignatories: { debtor: DEBTOR_1, creditor: CREDITOR_1, underwriter: UNDERWRITER },
            principalAmount: Units.ether(1),
            principalTokenAddress: dummyREPToken.address,
            relayer: RELAYER,
            relayerFee: Units.ether(0.0015),
            termsContract: TERMS_CONTRACT,
            termsContractParameters: TERMS_CONTRACT_PARAMETERS,
            underwriter: UNDERWRITER,
            underwriterFee: Units.ether(0.0015),
            underwriterRiskRating: Units.percent(1.35),
            zeroExExchangeContract: zeroExExchangeContract.address,
        };

        orderFactory = new DebtOrderFactory(defaultOrderParams);

        // Setup ABI decoder in order to decode logs
        ABIDecoder.addABI(debtKernelContract.abi);
        ABIDecoder.addABI(debtTokenContract.abi);
        ABIDecoder.addABI(debtRegistryContract.abi);
    };

    const initialize = async () => {
        await kernel.setDebtToken
            .sendTransactionAsync(debtTokenContract.address, { from: CONTRACT_OWNER });

        await debtRegistryContract.addAuthorizedInsertAgent
            .sendTransactionAsync(debtTokenContract.address, { from: CONTRACT_OWNER });
        await debtRegistryContract.addAuthorizedEditAgent
            .sendTransactionAsync(debtTokenContract.address, { from: CONTRACT_OWNER });

        await debtTokenContract.addAuthorizedMintAgent
            .sendTransactionAsync(kernel.address, { from: CONTRACT_OWNER });

        await debtTokenContract.addAuthorizedBrokerageAgent
            .sendTransactionAsync(kernel.address, { from: CONTRACT_OWNER });
    };

    const resetAndInit = async () => {
        await reset();
        await initialize();
    };

    before(reset);

    after(() => {
        // Tear down ABIDecoder before next set of tests
        ABIDecoder.removeABI(debtKernelContract.abi);
    });

    describe("Initialization & Upgrades", async () => {
        describe("non-owner sets debt token contract pointer", () => {
            it("should throw", async () => {
                expect(kernel.setDebtToken.sendTransactionAsync(ATTACKER, { from: ATTACKER }))
                    .to.eventually.be.rejectedWith(REVERT_ERROR);
            });
        });

        describe("owner updates debt token contract pointer", () => {
            before(async () => {
                debtTokenContract = await DebtTokenContract.deployed(web3, TX_DEFAULTS);
                await kernel.setDebtToken
                    .sendTransactionAsync(debtTokenContract.address, { from: CONTRACT_OWNER });
            });

            it("should point to new debt token contract", async () => {
                await expect(kernel.debtToken.callAsync())
                    .to.eventually.equal(debtTokenContract.address);
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
                signaturesR || order.getSignaturesR(),
                signaturesS || order.getSignaturesS(),
                signaturesV || order.getSignaturesV(),
            );

            const receipt = await web3.eth.getTransactionReceipt(txHash);
            const [errorLog] = _.compact(ABIDecoder.decodeLogs(receipt.logs));

            expect(errorLog).to.deep.equal(LogError(
                kernel.address,
                errorCode,
                order.getDebtorSignatureHash(),
            ));
        };

        const setupBalancesAndAllowances = async (): Promise<[BigNumber, BigNumber]> => {
            const token =
                await ZeroX_DummyTokenContract.at(debtOrder.getPrincipalTokenAddress(), web3, TX_DEFAULTS);

            const debtor = debtOrder.getDebtor();
            const creditor = debtOrder.getCreditor();

            await token.setBalance.sendTransactionAsync(debtor, new BigNumber(0),
                { from: CONTRACT_OWNER });
            await token.approve.sendTransactionAsync(zeroEx.proxy.getContractAddress(), new BigNumber(0),
                { from: debtor });

            const creditorBalanceAndAllowance =
                debtOrder.getPrincipalAmount().plus(debtOrder.getCreditorFee());

            await token.setBalance.sendTransactionAsync(creditor, creditorBalanceAndAllowance,
                { from: CONTRACT_OWNER });
            await token.approve.sendTransactionAsync(zeroEx.proxy.getContractAddress(), creditorBalanceAndAllowance,
                { from: creditor });

            return [new BigNumber(0), creditorBalanceAndAllowance];
        };

        const getAgentBalances = async (principalToken: ZeroX_DummyTokenContract) => {
            const debtorBalance = await principalToken.balanceOf.callAsync(debtOrder.getDebtor());
            const creditorBalance = await principalToken.balanceOf.callAsync(debtOrder.getCreditor());
            const underwriterBalance = await principalToken.balanceOf
                .callAsync(debtOrder.getIssuanceCommitment().getUnderwriter());
            const relayerBalance = await principalToken.balanceOf
                .callAsync(debtOrder.getRelayer());

            return [debtorBalance, creditorBalance, underwriterBalance, relayerBalance];
        };

        const testOrderFill = (setupDebtOrder: () => Promise<void>) => {
            return () => {
                let principalToken: ZeroX_DummyTokenContract;

                let debtorBalanceBefore: BigNumber;
                let creditorBalanceBefore: BigNumber;
                let underwriterBalanceBefore: BigNumber;
                let relayerBalanceBefore: BigNumber;

                let receipt: Web3.TransactionReceipt;

                let logs: ABIDecoder.DecodedLog[];

                before(async () => {
                    await setupDebtOrder();
                    await setupBalancesAndAllowances();

                    principalToken = await ZeroX_DummyTokenContract.at(debtOrder.getPrincipalTokenAddress(),
                        web3, TX_DEFAULTS);

                    [debtorBalanceBefore, creditorBalanceBefore,
                        underwriterBalanceBefore, relayerBalanceBefore] = await getAgentBalances(principalToken);

                    const txHash = await kernel.fillDebtOrder.sendTransactionAsync(
                        debtOrder.getCreditor(),
                        debtOrder.getOrderAddresses(),
                        debtOrder.getOrderValues(),
                        debtOrder.getOrderBytes32(),
                        debtOrder.getSignaturesR(),
                        debtOrder.getSignaturesS(),
                        debtOrder.getSignaturesV(),
                    );

                    receipt = await web3.eth.getTransactionReceipt(txHash);

                    logs = _.compact(ABIDecoder.decodeLogs(receipt.logs));
                });

                it("should mint debt token to creditor", async () => {
                    await expect(debtTokenContract.ownerOf.callAsync(
                        new BigNumber(debtOrder.getIssuanceCommitment().getHash()),
                    )).to.eventually.equal(debtOrder.getCreditor());
                });

                it("should make issuance parameters retrievable from registry", async () => {
                    const [
                        version,
                        beneficiary,
                        underwriter,
                        underwriterRiskRating,
                        termsContract,
                        termsContractParameters,
                        issuanceBlockNumber,
                    ] = await debtRegistryContract
                            .get.callAsync(debtOrder.getIssuanceCommitment().getHash());
                    expect(version).to.equal(debtOrder.getIssuanceCommitment().getVersion());
                    expect(beneficiary).to.equal(debtOrder.getCreditor());
                    expect(underwriter).to
                        .equal(debtOrder.getIssuanceCommitment().getUnderwriter());
                    expect(underwriterRiskRating).to.bignumber
                        .equal(debtOrder.getIssuanceCommitment().getUnderwriterRiskRating());
                    expect(termsContract).to
                        .equal(debtOrder.getIssuanceCommitment().getTermsContract());
                    expect(termsContractParameters).to
                        .equal(debtOrder.getIssuanceCommitment().getTermsContractParameters());
                    expect(issuanceBlockNumber).to.bignumber
                        .equal(receipt.blockNumber);
                });

                it("should debit principal + creditor fee from creditor", async () => {
                    const delta = debtOrder.getPrincipalAmount().plus(debtOrder.getCreditorFee());
                    await expect(principalToken.balanceOf.callAsync(debtOrder.getCreditor()))
                        .to.eventually.bignumber.equal(creditorBalanceBefore.minus(delta));
                });

                it("should credit principal - debtor fee to debtor", async () => {
                    const delta = debtOrder.getPrincipalAmount().minus(debtOrder.getDebtorFee());
                    await expect(principalToken.balanceOf.callAsync(debtOrder.getDebtor()))
                        .to.eventually.bignumber.equal(debtorBalanceBefore.plus(delta));
                });

                it("should credit underwriter fee to underwriter", async () => {
                    const delta = debtOrder.getUnderwriterFee();
                    await expect(principalToken.balanceOf
                        .callAsync(debtOrder.getIssuanceCommitment().getUnderwriter()))
                        .to.eventually.bignumber.equal(underwriterBalanceBefore.plus(delta));
                });

                it("should credit relayer fee to relayer", async () => {
                    const delta = debtOrder.getRelayerFee();
                    await expect(principalToken.balanceOf
                        .callAsync(debtOrder.getRelayer()))
                        .to.eventually.bignumber.equal(relayerBalanceBefore.plus(delta));
                });

                describe("Logs Emitted:", () => {
                    it("should emit registry insert log", async () => {
                        await expect(logs.shift()).to.deep.equal(LogInsertEntry(
                            debtRegistryContract.address, new DebtRegistryEntry({
                                beneficiary: kernel.address,
                                debtor: debtOrder.getDebtor(),
                                termsContract: debtOrder.getIssuanceCommitment().getTermsContract(),
                                termsContractParameters:
                                    debtOrder.getIssuanceCommitment().getTermsContractParameters(),
                                underwriter: debtOrder.getIssuanceCommitment().getUnderwriter(),
                                underwriterRiskRating:
                                    debtOrder.getIssuanceCommitment().getUnderwriterRiskRating(),
                                version: debtOrder.getIssuanceCommitment().getVersion(),
                            }, debtOrder.getIssuanceCommitment().getSalt()),
                        ));
                    });

                    it("should emit debt token mint log", async () => {
                        await expect(logs.shift()).to.deep.equal(LogMint(
                            debtTokenContract.address,
                            kernel.address,
                            new BigNumber(debtOrder.getIssuanceCommitment().getHash()),
                        ));
                    });

                    it("should emit transfer logs triggered by 0x order fill (if priced issuance)", async () => {
                        if (debtOrder.getPrincipalAmount().plus(debtOrder.getCreditorFee())
                                .greaterThan(0)) {
                            await expect(logs.shift()).to.deep.equal(LogTransfer(
                                debtOrder.getPrincipalTokenAddress(),
                                debtOrder.getCreditor(),
                                debtTokenContract.address,
                                debtOrder.getPrincipalAmount().plus(debtOrder.getCreditorFee()),
                            ));

                            await expect(logs.shift()).to.deep.equal(LogModifyEntryBeneficiary(
                                debtRegistryContract.address,
                                debtOrder.getIssuanceCommitment().getHash(),
                                kernel.address,
                                debtOrder.getCreditor(),
                            ));

                            await expect(logs.shift()).to.deep.equal(LogApproval(
                                debtTokenContract.address,
                                kernel.address,
                                NULL_ADDRESS,
                                new BigNumber(debtOrder.getIssuanceCommitment().getHash()),
                            ));

                            await expect(logs.shift()).to.deep.equal(LogTransfer(
                                debtTokenContract.address,
                                kernel.address,
                                debtOrder.getCreditor(),
                                new BigNumber(debtOrder.getIssuanceCommitment().getHash()),
                            ));

                            await expect(logs.shift()).to.deep.equal(LogTransfer(
                                debtOrder.getPrincipalTokenAddress(),
                                debtTokenContract.address,
                                kernel.address,
                                debtOrder.getPrincipalAmount().plus(debtOrder.getCreditorFee()),
                            ));
                        }
                    });

                    it("should emit transfer logs for debt token to creditor (if unpriced issuance)", async () => {
                        if (debtOrder.getPrincipalAmount().plus(debtOrder.getCreditorFee())
                                .equals(0)) {
                            await expect(logs.shift()).to.deep.equal(LogModifyEntryBeneficiary(
                                debtRegistryContract.address,
                                debtOrder.getIssuanceCommitment().getHash(),
                                kernel.address,
                                debtOrder.getCreditor(),
                            ));

                            await expect(logs.shift()).to.deep.equal(LogApproval(
                                debtTokenContract.address,
                                kernel.address,
                                NULL_ADDRESS,
                                new BigNumber(debtOrder.getIssuanceCommitment().getHash()),
                            ));

                            await expect(logs.shift()).to.deep.equal(LogTransfer(
                                debtTokenContract.address,
                                kernel.address,
                                debtOrder.getCreditor(),
                                new BigNumber(debtOrder.getIssuanceCommitment().getHash()),
                            ));
                        }
                    });

                    it("should emit transfer log from kernel to debtor (if principal - debtor fee > 0)", async () => {
                        if (debtOrder.getPrincipalAmount().minus(debtOrder.getDebtorFee()).gt(0)) {
                            await expect(logs.shift()).to.deep.equal(LogTransfer(
                                debtOrder.getPrincipalTokenAddress(),
                                kernel.address,
                                debtOrder.getDebtor(),
                                debtOrder.getPrincipalAmount().minus(debtOrder.getDebtorFee()),
                            ));
                        }
                    });

                    it("should emit transfer log from kernel to underwriter (if present)", async () => {
                        if (debtOrder.getIssuanceCommitment().getUnderwriter() !== NULL_ADDRESS) {
                            await expect(logs.shift()).to.deep.equal(LogTransfer(
                                debtOrder.getPrincipalTokenAddress(),
                                kernel.address,
                                debtOrder.getIssuanceCommitment().getUnderwriter(),
                                debtOrder.getUnderwriterFee(),
                            ));
                        }
                    });

                    it("should emit transfer log from kernel to relayer (if present)", async () => {
                        if (debtOrder.getRelayer() !== NULL_ADDRESS) {
                            await expect(logs.shift()).to.deep.equal(LogTransfer(
                                debtOrder.getPrincipalTokenAddress(),
                                kernel.address,
                                debtOrder.getRelayer(),
                                debtOrder.getRelayerFee(),
                            ));
                        }
                    });

                    it("should emit order filled log", () => {
                        expect(logs.shift()).to.deep.equal(LogDebtOrderFilled(
                            kernel.address,
                            debtOrder.getIssuanceCommitment().getHash(),
                            debtOrder.getPrincipalAmount(),
                            debtOrder.getPrincipalTokenAddress(),
                            debtOrder.getIssuanceCommitment().getUnderwriter(),
                            debtOrder.getUnderwriterFee(),
                            debtOrder.getRelayer(),
                            debtOrder.getRelayerFee(),
                        ));
                    });
                });
            };
        };

        before(resetAndInit);

        describe("User fills valid, consensual debt order", () => {
            describe("...with underwriter and relayer", testOrderFill(async () => {
                debtOrder = await orderFactory.generateDebtOrder({
                    principalTokenAddress: dummyMKRToken.address,
                });
            }));
            describe("...with neither underwriter nor relayer", testOrderFill(async () => {
                debtOrder = await orderFactory.generateDebtOrder({
                    creditorFee: new BigNumber(0),
                    debtorFee: new BigNumber(0),
                    relayer: NULL_ADDRESS,
                    relayerFee: new BigNumber(0),
                    underwriter: NULL_ADDRESS,
                    underwriterFee: new BigNumber(0),
                    underwriterRiskRating: new BigNumber(0),
                });
            }));

            describe("...with relayer but no underwriter", testOrderFill(async () => {
                debtOrder = await orderFactory.generateDebtOrder({
                    underwriter: NULL_ADDRESS,
                    underwriterFee: new BigNumber(0),
                    underwriterRiskRating: new BigNumber(0),
                });
            }));

            describe("...with underwriter but no relayer", testOrderFill(async () => {
                debtOrder = await orderFactory.generateDebtOrder({
                    relayer: NULL_ADDRESS,
                    relayerFee: new BigNumber(0),
                    underwriterFee: defaultOrderParams.creditorFee
                        .plus(defaultOrderParams.debtorFee),
                });
            }));

            describe("...with no principal and no creditor / debtor fees", testOrderFill(async () => {
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
            }));

            describe("...with no principal and nonzero creditor fee", testOrderFill(async () => {
                debtOrder = await orderFactory.generateDebtOrder({
                    creditorFee: Units.ether(0.002),
                    debtorFee: new BigNumber(0),
                    principalAmount: new BigNumber(0),
                    relayer: NULL_ADDRESS,
                    relayerFee: new BigNumber(0),
                    underwriter: UNDERWRITER,
                    underwriterFee: Units.ether(0.002),
                });
            }));

            describe("...when creditor and debtor are same address", testOrderFill(async () => {
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
            }));
        });

        describe("User fills invalid debt order", () => {
            describe("...where there is no underwriter, but underwriter fee is nonzero", () => {
                before(async () => {
                    debtOrder = await orderFactory.generateDebtOrder({
                        underwriter: NULL_ADDRESS,
                        underwriterFee: Units.ether(0.001),
                        underwriterRiskRating: new BigNumber(0),
                    });
                    await setupBalancesAndAllowances();
                });

                it("should return UNSPECIFIED_FEE_RECIPIENT error", async () => {
                    await testShouldReturnError(debtOrder,
                        DebtKernelErrorCodes.ORDER_INVALID_UNSPECIFIED_FEE_RECIPIENT);
                });
            });

            describe("...where there is no relayer, but relayer fee is nonzero", () => {
                before(async () => {
                    debtOrder = await orderFactory.generateDebtOrder({
                        relayer: NULL_ADDRESS,
                        relayerFee: Units.ether(0.003),
                        underwriterFee: new BigNumber(0),
                    });
                    await setupBalancesAndAllowances();
                });

                it("should return UNSPECIFIED_FEE_RECIPIENT error", async () => {
                    await testShouldReturnError(debtOrder,
                        DebtKernelErrorCodes.ORDER_INVALID_UNSPECIFIED_FEE_RECIPIENT);
                });
            });

            describe("...when creditor + debtor fees < underwriter + relayer fees", () => {
                before(async () => {
                    debtOrder = await orderFactory.generateDebtOrder({
                        creditorFee: Units.ether(0.001),
                        debtorFee: Units.ether(0.001),
                        relayerFee: Units.ether(0.0025),
                        underwriterFee: Units.ether(0.0025),
                    });
                    await setupBalancesAndAllowances();
                });

                it("should return INSUFFICIENT_FEES error", async () => {
                    await testShouldReturnError(debtOrder,
                        DebtKernelErrorCodes.ORDER_INVALID_INSUFFICIENT_FEES);
                });
            });

            describe("...when creditorFee + principal > 0, but 0x proxy does not have sufficient allowance", () => {
                before(async () => {
                    debtOrder = await orderFactory.generateDebtOrder();
                    await setupBalancesAndAllowances();

                    const token = await ZeroX_DummyTokenContract.at(debtOrder.getPrincipalTokenAddress(),
                        web3, TX_DEFAULTS);
                    await token.approve.sendTransactionAsync(zeroEx.proxy.getContractAddress(),
                        debtOrder.getPrincipalAmount().plus(debtOrder.getCreditorFee().minus(1)),
                        { from: debtOrder.getCreditor() });
                });

                it("should return CREDITOR_BALANCE_OR_ALLOWANCE_INSUFFICIENT error", async () => {
                    await testShouldReturnError(debtOrder,
                        DebtKernelErrorCodes.CREDITOR_BALANCE_OR_ALLOWANCE_INSUFFICIENT);
                });
            });

            describe("...when creditorFee + principal > 0, but creditor does not have sufficient balance", () => {
                before(async () => {
                    debtOrder = await orderFactory.generateDebtOrder();

                    const token = await ZeroX_DummyTokenContract.at(debtOrder.getPrincipalTokenAddress(),
                        web3, TX_DEFAULTS);
                    await token.setBalance.sendTransactionAsync(debtOrder.getCreditor(),
                        debtOrder.getPrincipalAmount().plus(debtOrder.getCreditorFee().minus(1)),
                        { from: CONTRACT_OWNER });
                });

                it("should return CREDITOR_BALANCE_OR_ALLOWANCE_INSUFFICIENT error", async () => {
                    await testShouldReturnError(debtOrder,
                        DebtKernelErrorCodes.CREDITOR_BALANCE_OR_ALLOWANCE_INSUFFICIENT);
                });
            });

            describe("...when debtorFee > principal", () => {
                before(async () => {
                    debtOrder = await orderFactory.generateDebtOrder({
                        debtorFee: Units.ether(1.1),
                        principalAmount: Units.ether(1),
                    });
                    await setupBalancesAndAllowances();
                });

                it("should return INSUFFICIENT_PRINCIPAL error", async () => {
                    await testShouldReturnError(debtOrder,
                        DebtKernelErrorCodes.ORDER_INVALID_INSUFFICIENT_PRINCIPAL);
                });
            });

            describe("...when order has expired", () => {
                before(async () => {
                    debtOrder = await orderFactory.generateDebtOrder({
                        expirationTimestampInSec: new BigNumber(moment().subtract(1, "days").unix()),
                    });
                    await setupBalancesAndAllowances();
                });

                it("should return EXPIRED error", async () => {
                    await testShouldReturnError(debtOrder,
                        DebtKernelErrorCodes.ORDER_INVALID_EXPIRED);
                });
            });

            describe("...when debt order has already been filled", () => {
                before(async () => {
                    debtOrder = await orderFactory.generateDebtOrder();
                    await setupBalancesAndAllowances();

                    await kernel.fillDebtOrder.sendTransactionAsync(
                        debtOrder.getCreditor(),
                        debtOrder.getOrderAddresses(),
                        debtOrder.getOrderValues(),
                        debtOrder.getOrderBytes32(),
                        debtOrder.getSignaturesR(),
                        debtOrder.getSignaturesS(),
                        debtOrder.getSignaturesV(),
                    );
                });

                it("should return DEBT_ISSUED error", async () => {
                    await testShouldReturnError(debtOrder,
                        DebtKernelErrorCodes.DEBT_ISSUED);
                });
            });

            describe("...when issuance has been cancelled", () => {
                before(async () => {
                    debtOrder = await orderFactory.generateDebtOrder();
                    await setupBalancesAndAllowances();

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
                    await testShouldReturnError(debtOrder,
                        DebtKernelErrorCodes.ISSUANCE_CANCELLED);
                });
            });

            describe("...when debt order has been cancelled", () => {
                before(async () => {
                    debtOrder = await orderFactory.generateDebtOrder();
                    await setupBalancesAndAllowances();

                    await kernel.cancelDebtOrder.sendTransactionAsync(
                        debtOrder.getOrderAddresses(),
                        debtOrder.getOrderValues(),
                        debtOrder.getOrderBytes32(),
                        { from: debtOrder.getDebtor() },
                    );
                });

                it("should return ORDER_INVALID_CANCELLED error", async () => {
                    await testShouldReturnError(debtOrder,
                        DebtKernelErrorCodes.ORDER_INVALID_CANCELLED);
                });
            });
        });

        describe("User fills valid, nonconsensual debt order", () => {
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
                debtOrder = await orderFactory.generateDebtOrder();
                await setupBalancesAndAllowances();
            });

            describe("...with mismatched issuance parameters", () => {
                before(async () => {
                    mismatchedOrder = await orderFactory.generateDebtOrder({
                        salt: debtOrder.getIssuanceCommitment().getSalt(),
                        termsContract: MALICIOUS_TERMS_CONTRACTS,
                    });
                });

                describe("creditor's signature commits to issuance parameters =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [signaturesR, signaturesS, signaturesV] = await getMismatchedSignatures(
                            debtOrder,
                            mismatchedOrder,
                            debtOrder,
                        );
                        await testShouldReturnError(
                            debtOrder,
                            DebtKernelErrorCodes.ORDER_INVALID_NON_CONSENSUAL,
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        );
                    });
                });

                describe("debtor's signature commits to issuance parameters =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [signaturesR, signaturesS, signaturesV] = await getMismatchedSignatures(
                            mismatchedOrder,
                            debtOrder,
                            debtOrder,
                        );
                        await testShouldReturnError(
                            debtOrder,
                            DebtKernelErrorCodes.ORDER_INVALID_NON_CONSENSUAL,
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        );
                    });
                });

                describe("underwriter's signature commits to issuance parameters =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [signaturesR, signaturesS, signaturesV] = await getMismatchedSignatures(
                            debtOrder,
                            debtOrder,
                            mismatchedOrder,
                        );
                        await testShouldReturnError(
                            debtOrder,
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
                        salt: debtOrder.getIssuanceCommitment().getSalt(),
                        underwriterFee: Units.ether(0.001),
                    });
                });

                describe("creditor's signature commits to underwriter fee =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [signaturesR, signaturesS, signaturesV] = await getMismatchedSignatures(
                            debtOrder,
                            mismatchedOrder,
                            debtOrder,
                        );
                        await testShouldReturnError(
                            debtOrder,
                            DebtKernelErrorCodes.ORDER_INVALID_NON_CONSENSUAL,
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        );
                    });
                });

                describe("debtor's signature commits to underwriter fee =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [signaturesR, signaturesS, signaturesV] = await getMismatchedSignatures(
                            mismatchedOrder,
                            debtOrder,
                            debtOrder,
                        );
                        await testShouldReturnError(
                            debtOrder,
                            DebtKernelErrorCodes.ORDER_INVALID_NON_CONSENSUAL,
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        );
                    });
                });

                describe("underwriter's signature commits to underwriter fee =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [signaturesR, signaturesS, signaturesV] = await getMismatchedSignatures(
                            debtOrder,
                            debtOrder,
                            mismatchedOrder,
                        );
                        await testShouldReturnError(
                            debtOrder,
                            DebtKernelErrorCodes.ORDER_INVALID_NON_CONSENSUAL,
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        );
                    });
                });
            });

            describe("...with mismatched 0x exchange contract", () => {
                before(async () => {
                    mismatchedOrder = await orderFactory.generateDebtOrder({
                        salt: debtOrder.getIssuanceCommitment().getSalt(),
                        zeroExExchangeContract: MALICIOUS_EXCHANGE_CONTRACT,
                    });
                });

                describe("creditor's signature commits to 0x exchange contract =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [signaturesR, signaturesS, signaturesV] = await getMismatchedSignatures(
                            debtOrder,
                            mismatchedOrder,
                            debtOrder,
                        );
                        await testShouldReturnError(
                            debtOrder,
                            DebtKernelErrorCodes.ORDER_INVALID_NON_CONSENSUAL,
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        );
                    });
                });

                describe("debtor's signature commits to 0x exchange contract =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [signaturesR, signaturesS, signaturesV] = await getMismatchedSignatures(
                            mismatchedOrder,
                            debtOrder,
                            debtOrder,
                        );
                        await testShouldReturnError(
                            debtOrder,
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
                        salt: debtOrder.getIssuanceCommitment().getSalt(),
                        underwriter: ATTACKER,
                    });
                });

                describe("creditor's signature commits to underwriter =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [signaturesR, signaturesS, signaturesV] = await getMismatchedSignatures(
                            debtOrder,
                            mismatchedOrder,
                            debtOrder,
                        );
                        await testShouldReturnError(
                            debtOrder,
                            DebtKernelErrorCodes.ORDER_INVALID_NON_CONSENSUAL,
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        );
                    });
                });

                describe("debtor's signature commits to underwriter =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [signaturesR, signaturesS, signaturesV] = await getMismatchedSignatures(
                            mismatchedOrder,
                            debtOrder,
                            debtOrder,
                        );
                        await testShouldReturnError(
                            debtOrder,
                            DebtKernelErrorCodes.ORDER_INVALID_NON_CONSENSUAL,
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        );
                    });
                });

                describe("underwriter's signature commits to underwriter =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [signaturesR, signaturesS, signaturesV] = await getMismatchedSignatures(
                            debtOrder,
                            debtOrder,
                            mismatchedOrder,
                        );
                        await testShouldReturnError(
                            debtOrder,
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
                        salt: debtOrder.getIssuanceCommitment().getSalt(),
                    });
                });

                describe("creditor's signature commits to principal amount =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [signaturesR, signaturesS, signaturesV] = await getMismatchedSignatures(
                            debtOrder,
                            mismatchedOrder,
                            debtOrder,
                        );
                        await testShouldReturnError(
                            debtOrder,
                            DebtKernelErrorCodes.ORDER_INVALID_NON_CONSENSUAL,
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        );
                    });
                });

                describe("debtor's signature commits to principal amount =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [signaturesR, signaturesS, signaturesV] = await getMismatchedSignatures(
                            mismatchedOrder,
                            debtOrder,
                            debtOrder,
                        );
                        await testShouldReturnError(
                            debtOrder,
                            DebtKernelErrorCodes.ORDER_INVALID_NON_CONSENSUAL,
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        );
                    });
                });

                describe("underwriter's signature commits to principal amount =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [signaturesR, signaturesS, signaturesV] = await getMismatchedSignatures(
                            debtOrder,
                            debtOrder,
                            mismatchedOrder,
                        );
                        await testShouldReturnError(
                            debtOrder,
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
                        salt: debtOrder.getIssuanceCommitment().getSalt(),
                    });
                });

                describe("creditor's signature commits to principal token =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [signaturesR, signaturesS, signaturesV] = await getMismatchedSignatures(
                            debtOrder,
                            mismatchedOrder,
                            debtOrder,
                        );
                        await testShouldReturnError(
                            debtOrder,
                            DebtKernelErrorCodes.ORDER_INVALID_NON_CONSENSUAL,
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        );
                    });
                });

                describe("debtor's signature commits to principal token =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [signaturesR, signaturesS, signaturesV] = await getMismatchedSignatures(
                            mismatchedOrder,
                            debtOrder,
                            debtOrder,
                        );
                        await testShouldReturnError(
                            debtOrder,
                            DebtKernelErrorCodes.ORDER_INVALID_NON_CONSENSUAL,
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        );
                    });
                });

                describe("underwriter's signature commits to principal token =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [signaturesR, signaturesS, signaturesV] = await getMismatchedSignatures(
                            debtOrder,
                            debtOrder,
                            mismatchedOrder,
                        );
                        await testShouldReturnError(
                            debtOrder,
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
                        salt: debtOrder.getIssuanceCommitment().getSalt(),
                    });
                });

                describe("creditor's signature commits to debtor fee =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [signaturesR, signaturesS, signaturesV] = await getMismatchedSignatures(
                            debtOrder,
                            mismatchedOrder,
                            debtOrder,
                        );
                        await testShouldReturnError(
                            debtOrder,
                            DebtKernelErrorCodes.ORDER_INVALID_NON_CONSENSUAL,
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        );
                    });
                });

                describe("debtor's signature commits to debtor fee =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [signaturesR, signaturesS, signaturesV] = await getMismatchedSignatures(
                            mismatchedOrder,
                            debtOrder,
                            debtOrder,
                        );
                        await testShouldReturnError(
                            debtOrder,
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
                        salt: debtOrder.getIssuanceCommitment().getSalt(),
                    });
                });

                describe("creditor's signature commits to creditor fee =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [signaturesR, signaturesS, signaturesV] = await getMismatchedSignatures(
                            debtOrder,
                            mismatchedOrder,
                            debtOrder,
                        );
                        await testShouldReturnError(
                            debtOrder,
                            DebtKernelErrorCodes.ORDER_INVALID_NON_CONSENSUAL,
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        );
                    });
                });

                describe("debtor's signature commits to creditor fee =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [signaturesR, signaturesS, signaturesV] = await getMismatchedSignatures(
                            mismatchedOrder,
                            debtOrder,
                            debtOrder,
                        );
                        await testShouldReturnError(
                            debtOrder,
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
                        salt: debtOrder.getIssuanceCommitment().getSalt(),
                    });
                });

                describe("creditor's signature commits to relayer =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [signaturesR, signaturesS, signaturesV] = await getMismatchedSignatures(
                            debtOrder,
                            mismatchedOrder,
                            debtOrder,
                        );
                        await testShouldReturnError(
                            debtOrder,
                            DebtKernelErrorCodes.ORDER_INVALID_NON_CONSENSUAL,
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        );
                    });
                });

                describe("debtor's signature commits to relayer =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [signaturesR, signaturesS, signaturesV] = await getMismatchedSignatures(
                            mismatchedOrder,
                            debtOrder,
                            debtOrder,
                        );
                        await testShouldReturnError(
                            debtOrder,
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
                        salt: debtOrder.getIssuanceCommitment().getSalt(),
                    });
                });

                describe("creditor's signature commits to relayer fee =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [signaturesR, signaturesS, signaturesV] = await getMismatchedSignatures(
                            debtOrder,
                            mismatchedOrder,
                            debtOrder,
                        );
                        await testShouldReturnError(
                            debtOrder,
                            DebtKernelErrorCodes.ORDER_INVALID_NON_CONSENSUAL,
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        );
                    });
                });

                describe("debtor's signature commits to relayer fee =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [signaturesR, signaturesS, signaturesV] = await getMismatchedSignatures(
                            mismatchedOrder,
                            debtOrder,
                            debtOrder,
                        );
                        await testShouldReturnError(
                            debtOrder,
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
                        expirationTimestampInSec: new BigNumber(moment().add(2, "days").unix()),
                        salt: debtOrder.getIssuanceCommitment().getSalt(),
                    });
                });

                describe("creditor's signature commits to expiration =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [signaturesR, signaturesS, signaturesV] = await getMismatchedSignatures(
                            debtOrder,
                            mismatchedOrder,
                            debtOrder,
                        );
                        await testShouldReturnError(
                            debtOrder,
                            DebtKernelErrorCodes.ORDER_INVALID_NON_CONSENSUAL,
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        );
                    });
                });

                describe("debtor's signature commits to expiration =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [signaturesR, signaturesS, signaturesV] = await getMismatchedSignatures(
                            mismatchedOrder,
                            debtOrder,
                            debtOrder,
                        );
                        await testShouldReturnError(
                            debtOrder,
                            DebtKernelErrorCodes.ORDER_INVALID_NON_CONSENSUAL,
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        );
                    });
                });

                describe("underwriter's signature commits to expiration =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [signaturesR, signaturesS, signaturesV] = await getMismatchedSignatures(
                            debtOrder,
                            debtOrder,
                            mismatchedOrder,
                        );
                        await testShouldReturnError(
                            debtOrder,
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
});
