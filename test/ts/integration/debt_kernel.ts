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
    });

    // describe("Debt Issuance w/ Synchronous Swap Thereafter", () => {
    //     const agents = [...DEBTORS, ...CREDITORS];
    //
    //     let debtOrder: SignedDebtOrder;
    //
    //     let creditorBalanceBefore: BigNumber;
    //     let debtorBalanceBefore: BigNumber;
    //     let underwriterBalanceBefore: BigNumber;
    //     let relayerBalanceBefore: BigNumber;
    //
    //     let DEFAULT_PARAMS: { [key: string]: any };
    //
    //     const generateDebtOrder = async (modifications = {}): Promise<SignedDebtOrder> => {
    //         const params = _.clone(DEFAULT_PARAMS);
    //
    //         Object.assign(params, modifications);
    //
    //         const issuance = new IssuanceCommitment({
    //             issuer: params.debtor,
    //             termsContract: params.termsContract,
    //             termsContractParameters: params.termsContractParameters,
    //             underwriter: params.underwriter,
    //             underwriterRiskRating: params.underwriterRiskRating,
    //             version: params.issuanceVersion,
    //         });
    //
    //         const debtOrder = new DebtOrder({
    //             debtor: params.debtor,
    //             debtKernelContract: params.debtKernelContract,
    //             debtTokenContract: params.debtTokenContract,
    //             zeroExExchangeContract: params.zeroExExchangeContract,
    //             debtIssuanceCommitment: issuance,
    //             principalAmount: params.principalAmount,
    //             principalTokenAddress: params.principalTokenAddress,
    //             debtorFee: params.debtorFee,
    //             creditorFee: params.creditorFee,
    //             underwriterFee: params.underwriterFee,
    //             relayer: params.relayer,
    //             expirationTimestampInSec: params.expirationTimestampInSec,
    //         });
    //
    //         return await debtOrder.getSignedDebtOrder(web3, params.orderSignatories);
    //     };
    //
    //     const getTokenBalances = async (agents: string[], token: ZeroX_DummyTokenContract) => {
    //         const promises = _.map(agents, (agent: string) => {
    //             return token.balanceOf.callAsync(agent);
    //         });
    //
    //         return Promise.all(promises);
    //     }
    //
    //     let fillDebtOrder: (debtOrder: SignedDebtOrder) => Promise<string>;
    //
    //     before(async () => {
    //         const setBalances = _.map(agents, async (agent: string) => {
    //             await dummyMKRToken.setBalance.sendTransactionAsync(agent, Units.ether(1000));
    //             await dummyZRXToken.setBalance.sendTransactionAsync(agent, Units.ether(1000));
    //             await dummyREPToken.setBalance.sendTransactionAsync(agent, Units.ether(1000));
    //         });
    //
    //         await Promise.all(setBalances);
    //
    //         const approveZeroExContract = _.map(agents, async (agent: string) => {
    //             await zeroEx.token.setUnlimitedProxyAllowanceAsync(dummyMKRToken.address, agent);
    //             await zeroEx.token.setUnlimitedProxyAllowanceAsync(dummyZRXToken.address, agent);
    //             await zeroEx.token.setUnlimitedProxyAllowanceAsync(dummyREPToken.address, agent);
    //
    //             await dummyZRXToken.approve.sendTransactionAsync(kernel.address, Units.ether(10), { from: agent });
    //         });
    //
    //         await Promise.all(approveZeroExContract);
    //
    //         DEFAULT_PARAMS = {
    //             termsContract: TERMS_CONTRACT,
    //             termsContractParameters: TERMS_CONTRACT_PARAMETERS,
    //             underwriter: UNDERWRITER,
    //             underwriterRiskRating: Units.percent(1.35),
    //             issuanceVersion: repaymentRouter.address,
    //             debtor: DEBTOR_1,
    //             debtKernelContract: kernel.address,
    //             debtTokenContract: debtTokenContract.address,
    //             zeroExExchangeContract: zeroEx.exchange.getContractAddress(),
    //             principalAmount: Units.ether(1),
    //             principalTokenAddress: dummyMKRToken.address,
    //             debtorFee: Units.ether(0.001),
    //             creditorFee: Units.ether(0.002),
    //             underwriterFee: Units.ether(0.0015),
    //             relayer: RELAYER,
    //             expirationTimestampInSec: new BigNumber(moment().add(1, 'days').valueOf()),
    //             orderSignatories: { debtor: DEBTOR_1, creditor: CREDITOR_1, underwriter: UNDERWRITER }
    //         }
    //
    //         fillDebtOrder = async (debtOrder: SignedDebtOrder) => {
    //             return kernel.fillDebtOrder.sendTransactionAsync(
    //                 debtOrder.getCreditor(),
    //                 debtOrder.getOrderAddresses(),
    //                 debtOrder.getOrderValues(),
    //                 debtOrder.getOrderBytes32(),
    //                 debtOrder.getSignaturesR(),
    //                 debtOrder.getSignaturesS(),
    //                 debtOrder.getSignaturesV()
    //             );
    //         }
    //     });
    //
    //     describe("creditor submits valid signed debt order", () => {
    //         let res: Web3.TransactionReceipt;
    //         let issuanceLog: ABIDecoder.DecodedLog;
    //         let termBeginLog: ABIDecoder.DecodedLog;
    //
    //         before(async () => {
    //             [creditorBalanceBefore, debtorBalanceBefore,
    //                 underwriterBalanceBefore, relayerBalanceBefore] =
    //                     await getTokenBalances([CREDITOR_1, DEBTOR_1, UNDERWRITER, RELAYER], dummyMKRToken);
    //
    //             debtOrder = await generateDebtOrder();
    //
    //             const txHash = await fillDebtOrder(debtOrder);
    //
    //             res = await web3.eth.getTransactionReceipt(txHash);
    //             [issuanceLog, termBeginLog] = _.compact(ABIDecoder.decodeLogs(res.logs));
    //         });
    //
    //         it("should emit debt issuance log", () => {
    //             expect(issuanceLog).to.deep
    //                 .equal(LogDebtIssuance(kernel.address, debtOrder.getIssuanceCommitment().getHash()));
    //         });
    //
    //         it("should emit term start log", async () => {
    //             const block = await web3.eth.getBlock(res.blockHash);
    //
    //             expect(termBeginLog).to.deep
    //                 .equal(LogTermBegin(kernel.address, debtOrder.getIssuanceCommitment().getHash(),
    //                     block.timestamp, block.number));
    //         });
    //
    //         it("should credit debtor with desired principle minus debtor fee", async () => {
    //             const delta = debtOrder.getPrincipalAmount().minus(debtOrder.getDebtorFee());
    //             await expect(dummyMKRToken.balanceOf.callAsync(DEBTOR_1))
    //                 .to.eventually.bignumber.equal(debtorBalanceBefore.plus(delta));
    //         });
    //
    //         it("should debit creditor desired principle", async () => {
    //             const delta = debtOrder.getPrincipalAmount().plus(debtOrder.getCreditorFee());
    //             await expect(dummyMKRToken.balanceOf.callAsync(CREDITOR_1))
    //                 .to.eventually.bignumber.equal(creditorBalanceBefore.minus(delta));
    //         });
    //
    //         it("should credit creditor with newly minted debt token", async () => {
    //             await expect(debtTokenContract.ownerOf.callAsync(
    //                 new BigNumber(debtOrder.getIssuanceCommitment().getHash())))
    //                     .to.eventually.equal(CREDITOR_1);
    //         });
    //
    //         it("should credit underwriter with desired fee", async () => {
    //             const delta = debtOrder.getUnderwriterFee();
    //             await expect(dummyMKRToken.balanceOf.callAsync(UNDERWRITER))
    //                 .to.eventually.bignumber.equal(underwriterBalanceBefore.plus(delta));
    //         });
    //
    //         it("should credit relayer with desired fee", async () => {
    //             const delta = debtOrder.getRelayerFee();
    //             await expect(dummyMKRToken.balanceOf.callAsync(RELAYER))
    //                 .to.eventually.bignumber.equal(relayerBalanceBefore.plus(delta));
    //         });
    //     });
    //
    //     describe("creditor resubmits same valid signed debt order", () => {
    //         it("should throw", async () => {
    //             await expect(fillDebtOrder(debtOrder))
    //                 .to.eventually.be.rejectedWith(REVERT_ERROR);
    //         });
    //     });
    //
    //     describe("creditor submits valid debt order with no creditor / debtor fees", () => {
    //         let res: Web3.TransactionReceipt;
    //         let issuanceLog: ABIDecoder.DecodedLog;
    //         let termBeginLog: ABIDecoder.DecodedLog;
    //
    //
    //         before(async () => {
    //             [creditorBalanceBefore, debtorBalanceBefore,
    //                 underwriterBalanceBefore, relayerBalanceBefore] =
    //                     await getTokenBalances([CREDITOR_2, DEBTOR_2, UNDERWRITER, RELAYER], dummyREPToken);
    //
    //             debtOrder = await generateDebtOrder({
    //                 creditor: CREDITOR_2,
    //                 debtor: DEBTOR_2,
    //                 orderSignatories: {
    //                     debtor: DEBTOR_2,
    //                     creditor: CREDITOR_2,
    //                     underwriter: UNDERWRITER,
    //                 },
    //                 principalTokenAddress: dummyREPToken.address,
    //                 creditorFee: new BigNumber(0),
    //                 debtorFee: new BigNumber(0),
    //                 underwriterFee: new BigNumber(0),
    //                 relayer: NULL_ADDRESS,
    //             });
    //
    //             const txHash = await fillDebtOrder(debtOrder);
    //
    //             res = await web3.eth.getTransactionReceipt(txHash);
    //             [issuanceLog, termBeginLog] = _.compact(ABIDecoder.decodeLogs(res.logs));
    //
    //         });
    //
    //         it("should emit debt issuance log", () => {
    //             expect(issuanceLog).to.deep
    //                 .equal(LogDebtIssuance(kernel.address, debtOrder.getIssuanceCommitment().getHash()));
    //         });
    //
    //         it("should emit term start log", async () => {
    //             const block = await web3.eth.getBlock(res.blockHash);
    //
    //             expect(termBeginLog).to.deep
    //                 .equal(LogTermBegin(kernel.address, debtOrder.getIssuanceCommitment().getHash(),
    //                     block.timestamp, block.number));
    //         });
    //
    //         it("should credit debtor with desired principle", async () => {
    //             const delta = debtOrder.getPrincipalAmount();
    //             await expect(dummyREPToken.balanceOf.callAsync(DEBTOR_2))
    //                 .to.eventually.bignumber.equal(debtorBalanceBefore.plus(delta));
    //         });
    //
    //         it("should debit creditor desired principle", async () => {
    //             const delta = debtOrder.getPrincipalAmount();
    //             await expect(dummyREPToken.balanceOf.callAsync(CREDITOR_2))
    //                 .to.eventually.bignumber.equal(creditorBalanceBefore.minus(delta));
    //         });
    //
    //         it("should credit creditor with newly minted debt token", async () => {
    //             await expect(debtTokenContract.ownerOf.callAsync(
    //                 new BigNumber(debtOrder.getIssuanceCommitment().getHash())))
    //                     .to.eventually.equal(CREDITOR_2);
    //         });
    //
    //         it("should not credit underwriter with fee", async () => {
    //             await expect(dummyREPToken.balanceOf.callAsync(UNDERWRITER))
    //                 .to.eventually.bignumber.equal(underwriterBalanceBefore);
    //         });
    //
    //         it("should not credit relayer with desired fee", async () => {
    //             await expect(dummyREPToken.balanceOf.callAsync(RELAYER))
    //                 .to.eventually.bignumber.equal(relayerBalanceBefore);
    //         });
    //     });
    //
    //     describe("creditor submits valid debt order with relayer but no underwriter", () => {
    //         describe("...with nonzero risk rating", () => {
    //             it("should throw", async () => {
    //                 debtOrder = await generateDebtOrder({
    //                     creditor: CREDITOR_3,
    //                     debtor: DEBTOR_3,
    //                     orderSignatories: {
    //                         debtor: DEBTOR_3,
    //                         creditor: CREDITOR_3,
    //                     },
    //                     principalTokenAddress: dummyZRXToken.address,
    //                     underwriter: NULL_ADDRESS,
    //                     underwriterFee: new BigNumber(0),
    //                     underwriterRiskRating: Units.percent(3),
    //                 });
    //
    //                 await expect(fillDebtOrder(debtOrder)).to.eventually.be.rejectedWith(REVERT_ERROR);
    //             });
    //         });
    //
    //         describe("...with nonzero underwriter fee", () => {
    //             it("should throw", async () => {
    //                 debtOrder = await generateDebtOrder({
    //                     creditor: CREDITOR_3,
    //                     debtor: DEBTOR_3,
    //                     orderSignatories: {
    //                         debtor: DEBTOR_3,
    //                         creditor: CREDITOR_3,
    //                     },
    //                     principalTokenAddress: dummyZRXToken.address,
    //                     underwriter: NULL_ADDRESS,
    //                     underwriterFee: Units.ether(0.001),
    //                     underwriterRiskRating: new BigNumber(0),
    //                 });
    //
    //                 await expect(fillDebtOrder(debtOrder)).to.eventually.be.rejectedWith(REVERT_ERROR);
    //             });
    //         });
    //
    //         describe("with zeroed risk rating / underwriting fee", () => {
    //             let res: Web3.TransactionReceipt;
    //             let issuanceLog: ABIDecoder.DecodedLog;
    //             let termBeginLog: ABIDecoder.DecodedLog;
    //
    //             before(async () => {
    //                 [creditorBalanceBefore, debtorBalanceBefore, relayerBalanceBefore] =
    //                         await getTokenBalances([CREDITOR_3, DEBTOR_3, RELAYER], dummyZRXToken);
    //
    //                 debtOrder = await generateDebtOrder({
    //                     creditor: CREDITOR_3,
    //                     debtor: DEBTOR_3,
    //                     orderSignatories: {
    //                         debtor: DEBTOR_3,
    //                         creditor: CREDITOR_3,
    //                     },
    //                     principalTokenAddress: dummyZRXToken.address,
    //                     underwriter: NULL_ADDRESS,
    //                     underwriterFee: new BigNumber(0),
    //                     underwriterRiskRating: new BigNumber(0),
    //                 });
    //
    //                 const txHash = await fillDebtOrder(debtOrder);
    //
    //                 res = await web3.eth.getTransactionReceipt(txHash);
    //                 [issuanceLog, termBeginLog] = _.compact(ABIDecoder.decodeLogs(res.logs));
    //             });
    //
    //             it("should emit debt issuance log", () => {
    //                 expect(issuanceLog).to.deep
    //                     .equal(LogDebtIssuance(kernel.address, debtOrder.getIssuanceCommitment().getHash()));
    //             });
    //
    //             it("should emit term start log", async () => {
    //                 const block = await web3.eth.getBlock(res.blockHash);
    //
    //                 expect(termBeginLog).to.deep
    //                     .equal(LogTermBegin(kernel.address, debtOrder.getIssuanceCommitment().getHash(),
    //                         block.timestamp, block.number));
    //             });
    //
    //             it("should credit debtor with desired principle", async () => {
    //                 const delta = debtOrder.getPrincipalAmount().minus(debtOrder.getDebtorFee());
    //                 await expect(dummyZRXToken.balanceOf.callAsync(DEBTOR_3))
    //                     .to.eventually.bignumber.equal(debtorBalanceBefore.plus(delta));
    //             });
    //
    //             it("should debit creditor desired principle", async () => {
    //                 const delta = debtOrder.getPrincipalAmount().plus(debtOrder.getCreditorFee());
    //                 await expect(dummyZRXToken.balanceOf.callAsync(CREDITOR_3))
    //                     .to.eventually.bignumber.equal(creditorBalanceBefore.minus(delta));
    //             });
    //
    //             it("should credit creditor with newly minted debt token", async () => {
    //                 await expect(debtTokenContract.ownerOf.callAsync(
    //                     new BigNumber(debtOrder.getIssuanceCommitment().getHash())))
    //                         .to.eventually.equal(CREDITOR_3);
    //             });
    //
    //             it("should credit relayer with desired fee", async () => {
    //                 const delta = debtOrder.getRelayerFee();
    //                 await expect(dummyZRXToken.balanceOf.callAsync(RELAYER))
    //                     .to.eventually.bignumber.equal(relayerBalanceBefore.plus(delta));
    //             });
    //         });
    //     });
    //
    //     describe("creditor submits valid debt order with underwriter but no relayer", () => {
    //         let res: Web3.TransactionReceipt;
    //         let issuanceLog: ABIDecoder.DecodedLog;
    //         let termBeginLog: ABIDecoder.DecodedLog;
    //
    //         before(async () => {
    //             [creditorBalanceBefore, debtorBalanceBefore,
    //                 underwriterBalanceBefore, relayerBalanceBefore] =
    //                     await getTokenBalances([CREDITOR_1, DEBTOR_1, UNDERWRITER], dummyZRXToken);
    //
    //             debtOrder = await generateDebtOrder({
    //                 relayer: NULL_ADDRESS,
    //                 underwriterFee: DEFAULT_PARAMS.debtorFee.plus(DEFAULT_PARAMS.creditorFee),
    //                 principalTokenAddress: dummyZRXToken.address,
    //             });
    //
    //             const txHash = await fillDebtOrder(debtOrder);
    //
    //             res = await web3.eth.getTransactionReceipt(txHash);
    //             [issuanceLog, termBeginLog] = _.compact(ABIDecoder.decodeLogs(res.logs));
    //         });
    //
    //         it("should emit debt issuance log", () => {
    //             expect(issuanceLog).to.deep
    //                 .equal(LogDebtIssuance(kernel.address, debtOrder.getIssuanceCommitment().getHash()));
    //         });
    //
    //         it("should emit term start log", async () => {
    //             const block = await web3.eth.getBlock(res.blockHash);
    //
    //             expect(termBeginLog).to.deep
    //                 .equal(LogTermBegin(kernel.address, debtOrder.getIssuanceCommitment().getHash(),
    //                     block.timestamp, block.number));
    //         });
    //
    //         it("should credit debtor with desired principle", async () => {
    //             const delta = debtOrder.getPrincipalAmount().minus(debtOrder.getDebtorFee());
    //             const currentBalance = await dummyZRXToken.balanceOf.callAsync(DEBTOR_1);
    //
    //             await expect(dummyZRXToken.balanceOf.callAsync(DEBTOR_1))
    //                 .to.eventually.bignumber.equal(debtorBalanceBefore.plus(delta));
    //         });
    //
    //         it("should debit creditor desired principle", async () => {
    //             const delta = debtOrder.getPrincipalAmount().plus(debtOrder.getCreditorFee());
    //             await expect(dummyZRXToken.balanceOf.callAsync(CREDITOR_1))
    //                 .to.eventually.bignumber.equal(creditorBalanceBefore.minus(delta));
    //         });
    //
    //         it("should credit creditor with newly minted debt token", async () => {
    //             await expect(debtTokenContract.ownerOf.callAsync(
    //                 new BigNumber(debtOrder.getIssuanceCommitment().getHash())))
    //                     .to.eventually.equal(CREDITOR_1);
    //         });
    //
    //         it("should credit underwriter with desired fee", async () => {
    //             const delta = debtOrder.getUnderwriterFee();
    //             await expect(dummyZRXToken.balanceOf.callAsync(UNDERWRITER))
    //                 .to.eventually.bignumber.equal(underwriterBalanceBefore.plus(delta));
    //         });
    //     });
    //
    //     describe("creditor submits valid debt order with no underwriter / no relayer", () => {
    //         describe("...with nonzero creditor / debtor fees", () => {
    //             it("should throw", async () => {
    //                 debtOrder = await generateDebtOrder({
    //                     underwriter: NULL_ADDRESS,
    //                     relayer: NULL_ADDRESS,
    //                     underwriterRiskRating: new BigNumber(0),
    //                     underwriterFee: new BigNumber(0),
    //                     debtorFee: Units.ether(0.001),
    //                     creditorFee: Units.ether(0.002)
    //                 });
    //
    //                 await expect(fillDebtOrder(debtOrder)).to.eventually.be.rejectedWith(REVERT_ERROR);
    //             });
    //         });
    //
    //         describe("...with zero creditor / debtor fees", () => {
    //             let res: Web3.TransactionReceipt;
    //             let issuanceLog: ABIDecoder.DecodedLog;
    //             let termBeginLog: ABIDecoder.DecodedLog;
    //
    //             before(async () => {
    //                 [creditorBalanceBefore, debtorBalanceBefore,
    //                     underwriterBalanceBefore, relayerBalanceBefore] =
    //                         await getTokenBalances([CREDITOR_1, DEBTOR_1, UNDERWRITER], dummyMKRToken);
    //
    //                 debtOrder = await generateDebtOrder({
    //                     underwriter: NULL_ADDRESS,
    //                     relayer: NULL_ADDRESS,
    //                     underwriterRiskRating: new BigNumber(0),
    //                     underwriterFee: new BigNumber(0),
    //                     debtorFee: new BigNumber(0),
    //                     creditorFee: new BigNumber(0),
    //                     orderSignatories: {
    //                         debtor: DEBTOR_1,
    //                         creditor: CREDITOR_1
    //                     }
    //                 });
    //
    //                 const txHash = await fillDebtOrder(debtOrder);
    //
    //                 res = await web3.eth.getTransactionReceipt(txHash);
    //                 [issuanceLog, termBeginLog] = _.compact(ABIDecoder.decodeLogs(res.logs));
    //             });
    //
    //             it("should emit debt issuance log", () => {
    //                 expect(issuanceLog).to.deep
    //                     .equal(LogDebtIssuance(kernel.address, debtOrder.getIssuanceCommitment().getHash()));
    //             });
    //
    //             it("should emit term start log", async () => {
    //                 const block = await web3.eth.getBlock(res.blockHash);
    //
    //                 expect(termBeginLog).to.deep
    //                     .equal(LogTermBegin(kernel.address, debtOrder.getIssuanceCommitment().getHash(),
    //                         block.timestamp, block.number));
    //             });
    //
    //             it("should credit debtor with desired principle", async () => {
    //                 const delta = debtOrder.getPrincipalAmount().minus(debtOrder.getDebtorFee());
    //                 await expect(dummyMKRToken.balanceOf.callAsync(DEBTOR_1))
    //                     .to.eventually.bignumber.equal(debtorBalanceBefore.plus(delta));
    //             });
    //
    //             it("should debit creditor desired principle", async () => {
    //                 const delta = debtOrder.getPrincipalAmount().plus(debtOrder.getCreditorFee());
    //                 await expect(dummyMKRToken.balanceOf.callAsync(CREDITOR_1))
    //                     .to.eventually.bignumber.equal(creditorBalanceBefore.minus(delta));
    //             });
    //
    //             it("should credit creditor with newly minted debt token", async () => {
    //                 await expect(debtTokenContract.ownerOf.callAsync(
    //                     new BigNumber(debtOrder.getIssuanceCommitment().getHash())))
    //                         .to.eventually.equal(CREDITOR_1);
    //             });
    //         });
    //     });
    //
    //     describe("Consensuality Invariant: creditor's debt order submission matches entirely with debtor's", () => {
    //         let debtorsOrder: SignedDebtOrder;
    //
    //         const fillMismatchedDebtOrder = async (
    //             debtorsDebtOrder: SignedDebtOrder,
    //             creditorsDebtOrder: SignedDebtOrder
    //         ) => {
    //             const signaturesR = [
    //                 ...debtorsDebtOrder.getSignaturesR().slice(0, 2),
    //                 creditorsDebtOrder.getSignaturesR()[2]
    //             ];
    //
    //             const signaturesS = [
    //                 ...debtorsDebtOrder.getSignaturesS().slice(0, 2),
    //                 creditorsDebtOrder.getSignaturesS()[2]
    //             ];
    //
    //             const signaturesV = [
    //                 ...debtorsDebtOrder.getSignaturesV().slice(0, 2),
    //                 creditorsDebtOrder.getSignaturesV()[2]
    //             ];
    //
    //             return kernel.fillDebtOrder.sendTransactionAsync(
    //                 debtorsDebtOrder.getCreditor(),
    //                 debtorsDebtOrder.getOrderAddresses(),
    //                 debtorsDebtOrder.getOrderValues(),
    //                 debtorsDebtOrder.getOrderBytes32(),
    //                 signaturesR,
    //                 signaturesS,
    //                 signaturesV
    //             );
    //         }
    //
    //         before(async () => {
    //             debtorsOrder = await generateDebtOrder();
    //         });
    //
    //         describe("Control: creditor's signature commits to debt order specified by debtor", async () => {
    //             it("should not throw", async () => {
    //                 await expect(fillDebtOrder(debtorsOrder))
    //                     .to.eventually.not.be.rejectedWith(REVERT_ERROR);
    //             });
    //         });
    //
    //         describe("order submitted with mismatched issuance parameters", () => {
    //             let creditorsOrder: SignedDebtOrder;
    //
    //             before(async () => {
    //                 creditorsOrder = await generateDebtOrder({
    //                     termsContract: MALICIOUS_TERMS_CONTRACTS
    //                 });
    //             });
    //
    //             describe("creditor's signature commits to issuance parameters =/= order's", async () => {
    //                 it("should throw", async () => {
    //                     await expect(fillMismatchedDebtOrder(debtorsOrder, creditorsOrder))
    //                         .to.eventually.be.rejectedWith(REVERT_ERROR);
    //                 });
    //             });
    //
    //             describe("debtor's signature commits to issuance parameters =/= order's", async () => {
    //                 it("should throw", async () => {
    //                     await expect(fillMismatchedDebtOrder(creditorsOrder, debtorsOrder))
    //                         .to.eventually.be.rejectedWith(REVERT_ERROR);
    //                 });
    //             });
    //         });
    //
    //         describe("order submitted with mismatched underwriter fee", () => {
    //             let creditorsOrder: SignedDebtOrder;
    //
    //             before(async () => {
    //                 creditorsOrder = await generateDebtOrder({
    //                     underwriterFee: Units.ether(0.001)
    //                 });
    //             });
    //
    //             describe("creditor's signature commits to underwriter fee =/= order's", async () => {
    //                 it("should throw", async () => {
    //                     await expect(fillMismatchedDebtOrder(debtorsOrder, creditorsOrder))
    //                         .to.eventually.be.rejectedWith(REVERT_ERROR);
    //                 });
    //             });
    //
    //             describe("debtor's signature commits to underwriter fee =/= order's", async () => {
    //                 it("should throw", async () => {
    //                     await expect(fillMismatchedDebtOrder(creditorsOrder, debtorsOrder))
    //                         .to.eventually.be.rejectedWith(REVERT_ERROR);
    //                 });
    //             });
    //         });
    //
    //         describe("order submitted with mismatched 0x exchange contract", () => {
    //             let creditorsOrder: SignedDebtOrder;
    //
    //             before(async () => {
    //                 creditorsOrder = await generateDebtOrder({
    //                     zeroExExchangeContract: MALICIOUS_EXCHANGE_CONTRACT
    //                 });
    //             });
    //
    //             describe("creditor's signature commits to 0x exchange contract =/= order's", async () => {
    //                 it("should throw", async () => {
    //                     await expect(fillMismatchedDebtOrder(debtorsOrder, creditorsOrder))
    //                         .to.eventually.be.rejectedWith(REVERT_ERROR);
    //                 });
    //             });
    //
    //             describe("debtor's signature commits to 0x exchange contract =/= order's", async () => {
    //                 it("should throw", async () => {
    //                     await expect(fillMismatchedDebtOrder(creditorsOrder, debtorsOrder))
    //                         .to.eventually.be.rejectedWith(REVERT_ERROR);
    //                 });
    //             });
    //         });
    //
    //         describe("order submitted with mismatched underwriter", () => {
    //             let creditorsOrder: SignedDebtOrder;
    //
    //             before(async () => {
    //                 creditorsOrder = await generateDebtOrder({
    //                     underwriter: ATTACKER
    //                 });
    //             });
    //
    //             describe("creditor's signature commits to underwriter =/= order's", async () => {
    //                 it("should throw", async () => {
    //                     await expect(fillMismatchedDebtOrder(debtorsOrder, creditorsOrder))
    //                         .to.eventually.be.rejectedWith(REVERT_ERROR);
    //                 });
    //             });
    //
    //             describe("debtor's signature commits to underwriter =/= order's", async () => {
    //                 it("should throw", async () => {
    //                     await expect(fillMismatchedDebtOrder(creditorsOrder, debtorsOrder))
    //                         .to.eventually.be.rejectedWith(REVERT_ERROR);
    //                 });
    //             });
    //         });
    //
    //         describe("order submitted with mismatched principal amount", () => {
    //             let creditorsOrder: SignedDebtOrder;
    //
    //             before(async () => {
    //                 creditorsOrder = await generateDebtOrder({
    //                     principalAmount: Units.ether(0.001)
    //                 });
    //             });
    //
    //             describe("creditor's signature commits to principal amount =/= order's", async () => {
    //                 it("should throw", async () => {
    //                     await expect(fillMismatchedDebtOrder(debtorsOrder, creditorsOrder))
    //                         .to.eventually.be.rejectedWith(REVERT_ERROR);
    //                 });
    //             });
    //
    //             describe("debtor's signature commits to principal amount =/= order's", async () => {
    //                 it("should throw", async () => {
    //                     await expect(fillMismatchedDebtOrder(creditorsOrder, debtorsOrder))
    //                         .to.eventually.be.rejectedWith(REVERT_ERROR);
    //                 });
    //             });
    //         });
    //
    //         describe("order submitted with mismatched principal token", () => {
    //             let creditorsOrder: SignedDebtOrder;
    //
    //             before(async () => {
    //                 creditorsOrder = await generateDebtOrder({
    //                     principalTokenAddress: dummyZRXToken.address
    //                 });
    //             });
    //
    //             describe("creditor's signature commits to principal token =/= order's", async () => {
    //                 it("should throw", async () => {
    //                     await expect(fillMismatchedDebtOrder(debtorsOrder, creditorsOrder))
    //                         .to.eventually.be.rejectedWith(REVERT_ERROR);
    //                 });
    //             });
    //
    //             describe("debtor's signature commits to principal token =/= order's", async () => {
    //                 it("should throw", async () => {
    //                     await expect(fillMismatchedDebtOrder(creditorsOrder, debtorsOrder))
    //                         .to.eventually.be.rejectedWith(REVERT_ERROR);
    //                 });
    //             });
    //         });
    //
    //         describe("order submitted with mismatched debtor fee", () => {
    //             let creditorsOrder: SignedDebtOrder;
    //
    //             before(async () => {
    //                 creditorsOrder = await generateDebtOrder({
    //                     debtorFee: DEFAULT_PARAMS.debtorFee.plus(Units.ether(0.001))
    //                 });
    //             });
    //
    //             describe("creditor's signature commits to debtor fee =/= order's", async () => {
    //                 it("should throw", async () => {
    //                     await expect(fillMismatchedDebtOrder(debtorsOrder, creditorsOrder))
    //                         .to.eventually.be.rejectedWith(REVERT_ERROR);
    //                 });
    //             });
    //
    //             describe("debtor's signature commits to debtor fee =/= order's", async () => {
    //                 it("should throw", async () => {
    //                     await expect(fillMismatchedDebtOrder(creditorsOrder, debtorsOrder))
    //                         .to.eventually.be.rejectedWith(REVERT_ERROR);
    //                 });
    //             });
    //         });
    //
    //         describe("order submitted with mismatched debtor fee", () => {
    //             let creditorsOrder: SignedDebtOrder;
    //
    //             before(async () => {
    //                 creditorsOrder = await generateDebtOrder({
    //                     creditorFee: DEFAULT_PARAMS.creditorFee.plus(Units.ether(0.001))
    //                 });
    //             });
    //
    //             describe("creditor's signature commits to creditor fee =/= order's", async () => {
    //                 it("should throw", async () => {
    //                     await expect(fillMismatchedDebtOrder(debtorsOrder, creditorsOrder))
    //                         .to.eventually.be.rejectedWith(REVERT_ERROR);
    //                 });
    //             });
    //
    //             describe("debtor's signature commits to creditor fee =/= order's", async () => {
    //                 it("should throw", async () => {
    //                     await expect(fillMismatchedDebtOrder(creditorsOrder, debtorsOrder))
    //                         .to.eventually.be.rejectedWith(REVERT_ERROR);
    //                 });
    //             });
    //         });
    //
    //         describe("order submitted with mismatched relayer", () => {
    //             let creditorsOrder: SignedDebtOrder;
    //
    //             before(async () => {
    //                 creditorsOrder = await generateDebtOrder({
    //                     relayer: NULL_ADDRESS
    //                 });
    //             });
    //
    //             describe("creditor's signature commits to relayer =/= order's", async () => {
    //                 it("should throw", async () => {
    //                     await expect(fillMismatchedDebtOrder(debtorsOrder, creditorsOrder))
    //                         .to.eventually.be.rejectedWith(REVERT_ERROR);
    //                 });
    //             });
    //
    //             describe("debtor's signature commits to relayer =/= order's", async () => {
    //                 it("should throw", async () => {
    //                     await expect(fillMismatchedDebtOrder(creditorsOrder, debtorsOrder))
    //                         .to.eventually.be.rejectedWith(REVERT_ERROR);
    //                 });
    //             });
    //         });
    //
    //         describe("order submitted with mismatched relayer fee", () => {
    //             let creditorsOrder: SignedDebtOrder;
    //
    //             before(async () => {
    //                 // Relayer fee is implicitly defined as the total fees
    //                 // paid by both debtors and creditors minus the underwriter's fee
    //                 // We adjust relayer fee by decreasing the underwriter's fee.
    //                 creditorsOrder = await generateDebtOrder({
    //                     underwriterFee: DEFAULT_PARAMS.underwriterFee.minus(Units.ether(0.001))
    //                 });
    //             });
    //
    //             describe("creditor's signature commits to relayer fee =/= order's", async () => {
    //                 it("should throw", async () => {
    //                     await expect(fillMismatchedDebtOrder(debtorsOrder, creditorsOrder))
    //                         .to.eventually.be.rejectedWith(REVERT_ERROR);
    //                 });
    //             });
    //
    //             describe("debtor's signature commits to relayer fee =/= order's", async () => {
    //                 it("should throw", async () => {
    //                     await expect(fillMismatchedDebtOrder(creditorsOrder, debtorsOrder))
    //                         .to.eventually.be.rejectedWith(REVERT_ERROR);
    //                 });
    //             });
    //         });
    //
    //         describe("order submitted with mismatched debtor fee", () => {
    //             let creditorsOrder: SignedDebtOrder;
    //
    //             before(async () => {
    //                 creditorsOrder = await generateDebtOrder({
    //                     debtorFee: DEFAULT_PARAMS.debtorFee.plus(Units.ether(0.001))
    //                 });
    //             });
    //
    //             describe("creditor's signature commits to debtor fee =/= order's", async () => {
    //                 it("should throw", async () => {
    //                     await expect(fillMismatchedDebtOrder(debtorsOrder, creditorsOrder))
    //                         .to.eventually.be.rejectedWith(REVERT_ERROR);
    //                 });
    //             });
    //
    //             describe("debtor's signature commits to debtor fee =/= order's", async () => {
    //                 it("should throw", async () => {
    //                     await expect(fillMismatchedDebtOrder(creditorsOrder, debtorsOrder))
    //                         .to.eventually.be.rejectedWith(REVERT_ERROR);
    //                 });
    //             });
    //         });
});
