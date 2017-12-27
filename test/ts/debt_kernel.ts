import {BigNumber} from "bignumber.js";
import * as ABIDecoder from "abi-decoder";
import * as chai from "chai";
import * as _ from "lodash";
import * as moment from "moment";
import * as Web3 from "web3";
import * as Units from "./test_utils/units";
import * as utils from "./test_utils/utils";

import {LogDebtIssuance, LogTermBegin} from "./logs/debt_kernel";

import {DebtKernelContract} from "../../types/generated/debt_kernel";
import {DebtRegistryContract} from "../../types/generated/debt_registry";
import {DebtTokenContract} from "../../types/generated/debt_token";
import {RepaymentRouterContract} from "../../types/generated/repayment_router";

import {ZeroEx} from "0x.js";
import {ZeroX_DummyTokenContract} from "../../types/generated/zerox_dummytoken";
import {ZeroX_ExchangeContract} from "../../types/generated/zerox_exchange";
import {ZeroX_TokenRegistryContract} from "../../types/generated/zerox_tokenregistry";
import {ZeroX_TokenTransferProxyContract} from "../../types/generated/zerox_tokentransferproxy";

import {IssuanceCommitment, SignedIssuanceCommitment} from "../../types/kernel/issuance_commitment";
import {DebtOrder, SignedDebtOrder} from "../../types/kernel/debt_order";
import {BigNumberSetup} from "./test_utils/bignumber_setup";
import ChaiSetup from "./test_utils/chai_setup";
import {INVALID_OPCODE, REVERT_ERROR} from "./test_utils/constants";

import {TxDataPayable} from "../../types/common";

// Configure BigNumber exponentiation
BigNumberSetup.configure();

// Set up Chai
ChaiSetup.configure();
const expect = chai.expect;

const debtKernelContract = artifacts.require("DebtKernel");

ABIDecoder.addABI(debtKernelContract.abi);

contract("Debt Kernel", async (ACCOUNTS) => {
    let kernel: DebtKernelContract;
    let repaymentRouter: RepaymentRouterContract;
    let debtTokenContract: DebtTokenContract;
    let debtRegistryContract: DebtRegistryContract;

    let zeroEx: ZeroEx;
    let dummyREPToken: ZeroX_DummyTokenContract;
    let dummyZRXToken: ZeroX_DummyTokenContract;
    let dummyMKRToken: ZeroX_DummyTokenContract;

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
    const TERMS_CONTRACT_PARAMETERS = web3.sha3("arbitrary terms contract parameters");

    const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";

    let generateIssuanceCommitment: () => IssuanceCommitment;
    let issueDebtAgreement: (signedIssuance: SignedIssuanceCommitment,
                             options?: TxDataPayable)
        => Promise<string>;

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

        const kernelContractInstance = await debtKernelContract.new(dummyZRXToken.address);

        // The typings we use ingest vanilla Web3 contracts, so we convert the
        // contract instance deployed by truffle into a Web3 contract instance
        const web3ContractInstance =
            web3.eth.contract(debtKernelContract.abi).at(kernelContractInstance.address);

        kernel = new DebtKernelContract(web3ContractInstance, TX_DEFAULTS);

        // Load current Repayment Router for use as a version address in the Issuance
        // commitments
        repaymentRouter = await RepaymentRouterContract.deployed(web3, TX_DEFAULTS);

        // Initialize utility methods for generating and submitting debt issuances
        generateIssuanceCommitment = () => {
            return new IssuanceCommitment({
                issuer: ISSUER_1,
                termsContract: TERMS_CONTRACT,
                termsContractParameters: TERMS_CONTRACT_PARAMETERS,
                underwriter: UNDERWRITER,
                underwriterRiskRating: Units.percent(1.35),
                version: repaymentRouter.address,
            });
        };

        issueDebtAgreement = async (signedIssuance: SignedIssuanceCommitment, options?: TxDataPayable) => {
            return kernel.issueDebtAgreement.sendTransactionAsync(
                signedIssuance.getIssuanceAddresses(),
                signedIssuance.getIssuanceValues(),
                signedIssuance.getTermsContractParameters(),
                signedIssuance.getUnderwriterSignature().r,
                signedIssuance.getUnderwriterSignature().s,
                signedIssuance.getUnderwriterSignature().v,
                options || TX_DEFAULTS,
            );
        };
    };

    const initialize = async () => {
        debtTokenContract = await DebtTokenContract.deployed(web3, TX_DEFAULTS);
        debtRegistryContract = await DebtRegistryContract.deployed(web3, TX_DEFAULTS);

        await kernel.setDebtToken
            .sendTransactionAsync(debtTokenContract.address, { from: CONTRACT_OWNER });

        await debtRegistryContract.addAuthorizedInsertAgent
            .sendTransactionAsync(debtTokenContract.address, { from: CONTRACT_OWNER });
        await debtRegistryContract.addAuthorizedEditAgent
            .sendTransactionAsync(debtTokenContract.address, { from: CONTRACT_OWNER });

        await debtTokenContract.addAuthorizedMintAgent
            .sendTransactionAsync(kernel.address, { from: CONTRACT_OWNER });
    };

    const resetAndInit = async () => {
        await reset();
        await initialize();
    };

    before(reset);

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

    describe("Debt Issuance", async () => {
        let issuance: IssuanceCommitment;
        let signedIssuance: SignedIssuanceCommitment;

        before(resetAndInit);

        describe("issuer submits debt issuance...", () => {
            before(() => {
                issuance = generateIssuanceCommitment();
            });

            describe("...with a malformed underwriter signature", () => {
                before(async () => {
                    signedIssuance = await issuance.getSignedIssuanceCommitment(web3,
                            { underwriter: ATTACKER });
                });

                it("should throw", async () => {
                    await expect(issueDebtAgreement(signedIssuance, { from: ISSUER_1 }))
                        .to.eventually.be.rejectedWith(REVERT_ERROR);
                });
            });

            describe("...with properly formed signatures", () => {
                let res: Web3.TransactionReceipt;

                before(async () => {
                    signedIssuance = await issuance.getSignedIssuanceCommitment(web3,
                        { underwriter: issuance.getUnderwriter() });
                    const txHash = await issueDebtAgreement(signedIssuance, { from: ISSUER_1 });
                    res = await web3.eth.getTransactionReceipt(txHash);
                });

                it("should emit debt issuance log", () => {
                    const [insertEntryLog, mintTokenLog, debtIssuanceLog] = ABIDecoder.decodeLogs(res.logs);
                    const logExpected = LogDebtIssuance(kernel.address, issuance.getHash());

                    expect(debtIssuanceLog).to.deep.equal(logExpected);
                });

                it("should mint debt token to debtor", async () => {
                    await expect(debtTokenContract.tokenOfOwnerByIndex.callAsync(ISSUER_1, new BigNumber(0)))
                        .to.eventually.bignumber.equal(issuance.getHash());
                });

                it("should retrieve correct debt parameters from registry", async () => {
                    const retrievedEntry = await debtRegistryContract.get.callAsync(issuance.getHash());
                    const expectedEntry = [
                            issuance.getVersion(),
                            issuance.getIssuer(),
                            issuance.getUnderwriter(),
                            issuance.getUnderwriterRiskRating(),
                            issuance.getTermsContract(),
                            issuance.getTermsContractParameters(),
                    ];

                    _.forEach(retrievedEntry, (value: any, i: number) => {
                        if (utils.isBigNumber(value)) {
                            expect(value).to.bignumber.deep.equal(expectedEntry[i]);
                        } else {
                            expect(value).to.equal(expectedEntry[i]);
                        }
                    });
                });
            });
        });

        describe("issuer submits duplicate debt issuance", () => {
            it("should throw", async () => {
                await expect(issueDebtAgreement(signedIssuance, { from: ISSUER_1 }))
                    .to.eventually.be.rejectedWith(REVERT_ERROR);
            });
        });

        describe("issuer submits duplicate debt issuance with new salt", () => {
            let res: Web3.TransactionReceipt;

            before(async () => {
                // Re-initialize debt issuance commitment with new salt
                issuance = new IssuanceCommitment(issuance.params, issuance.generateSalt());
                signedIssuance = await issuance.getSignedIssuanceCommitment(web3,
                    { underwriter: issuance.getUnderwriter() });
                const txHash = await issueDebtAgreement(signedIssuance, { from: ISSUER_1 });
                res = await web3.eth.getTransactionReceipt(txHash);
            });

            it("should emit debt issuance log", () => {
                const [insertEntryLog, mintTokenLog, debtIssuanceLog] = ABIDecoder.decodeLogs(res.logs);
                const logExpected = LogDebtIssuance(kernel.address, issuance.getHash());

                expect(debtIssuanceLog).to.deep.equal(logExpected);
            });

            it("should mint debt token to debtor", async () => {
                await expect(debtTokenContract.tokenOfOwnerByIndex.callAsync(ISSUER_1, new BigNumber(1)))
                    .to.eventually.bignumber.equal(issuance.getHash());
            });

            it("should retrieve correct debt parameters from registry", async () => {
                const retrievedEntry = await debtRegistryContract.get.callAsync(issuance.getHash());
                const expectedEntry = [
                        issuance.getVersion(),
                        issuance.getIssuer(),
                        issuance.getUnderwriter(),
                        issuance.getUnderwriterRiskRating(),
                        issuance.getTermsContract(),
                        issuance.getTermsContractParameters(),
                ];

                _.forEach(retrievedEntry, (value: any, i: number) => {
                    if (utils.isBigNumber(value)) {
                        expect(value).to.bignumber.deep.equal(expectedEntry[i]);
                    } else {
                        expect(value).to.equal(expectedEntry[i]);
                    }
                });
            });
        });

        describe("issuer submits debt issuance with no underwriter", () => {
            let res: Web3.TransactionReceipt;

            before(async () => {
                // Re-initialize debt issuance commitment with no underwriter or underwriterRiskRating
                issuance = new IssuanceCommitment({
                    issuer: ISSUER_2,
                    termsContract: TERMS_CONTRACT,
                    termsContractParameters: TERMS_CONTRACT_PARAMETERS,
                    underwriter: NULL_ADDRESS,
                    underwriterRiskRating: Units.percent(0),
                    version: repaymentRouter.address,
                });

                signedIssuance = await issuance.getSignedIssuanceCommitment(web3);
                const txHash = await issueDebtAgreement(signedIssuance, { from: ISSUER_2 });
                res = await web3.eth.getTransactionReceipt(txHash);
            });

            it("should emit debt issuance log", () => {
                const [insertEntryLog, mintTokenLog, debtIssuanceLog] = ABIDecoder.decodeLogs(res.logs);
                const logExpected = LogDebtIssuance(kernel.address, issuance.getHash());

                expect(debtIssuanceLog).to.deep.equal(logExpected);
            });

            it("should mint debt token to debtor", async () => {
                await expect(debtTokenContract.tokenOfOwnerByIndex.callAsync(ISSUER_2, new BigNumber(0)))
                    .to.eventually.bignumber.equal(issuance.getHash());
            });

            it("should retrieve correct debt parameters from registry", async () => {
                const retrievedEntry = await debtRegistryContract.get.callAsync(issuance.getHash());
                const expectedEntry = [
                        issuance.getVersion(),
                        issuance.getIssuer(),
                        issuance.getUnderwriter(),
                        issuance.getUnderwriterRiskRating(),
                        issuance.getTermsContract(),
                        issuance.getTermsContractParameters(),
                ];

                _.forEach(retrievedEntry, (value: any, i: number) => {
                    if (utils.isBigNumber(value)) {
                        expect(value).to.bignumber.deep.equal(expectedEntry[i]);
                    } else {
                        expect(value).to.equal(expectedEntry[i]);
                    }
                });
            });
        });

        describe("issuer submits debt issuance with no underwriter and nonzero risk rating", () => {
            it("should throw", async () => {
                // Re-initialize debt issuance commitment with no underwriter or nonzero riskRating
                issuance = new IssuanceCommitment({
                    issuer: ISSUER_3,
                    termsContract: TERMS_CONTRACT,
                    termsContractParameters: TERMS_CONTRACT_PARAMETERS,
                    underwriter: NULL_ADDRESS,
                    underwriterRiskRating: Units.percent(0.001),
                    version: repaymentRouter.address,
                });

                signedIssuance = await issuance.getSignedIssuanceCommitment(web3);
                await expect(issueDebtAgreement(signedIssuance, { from: ISSUER_3 }))
                    .to.eventually.be.rejectedWith(REVERT_ERROR);
            });
        });

        describe("user submits debt agreement for issuer who is a different address", () => {
            it("should throw", async () => {
                // Re-initialize debt issuance commitment with no underwriter or nonzero riskRating
                issuance = new IssuanceCommitment({
                    issuer: ISSUER_3,
                    termsContract: TERMS_CONTRACT,
                    termsContractParameters: TERMS_CONTRACT_PARAMETERS,
                    underwriter: NULL_ADDRESS,
                    underwriterRiskRating: Units.percent(0.001),
                    version: repaymentRouter.address,
                });

                signedIssuance = await issuance.getSignedIssuanceCommitment(web3);
                await expect(issueDebtAgreement(signedIssuance, { from: ATTACKER }))
                    .to.eventually.be.rejectedWith(REVERT_ERROR);
            });
        });
    });

    describe("Debt Issuance w/ Synchronous Swap Thereafter", () => {
        const agents = [...DEBTORS, ...CREDITORS];

        let DEFAULT_PARAMS: { [key: string]: any };

        const generateDebtOrder = async (parameters = {}): Promise<SignedDebtOrder> => {
            const params = Object.assign(DEFAULT_PARAMS, parameters);

            const issuance = new IssuanceCommitment({
                issuer: params.issuer,
                termsContract: params.termsContract,
                termsContractParameters: params.termsContractParameters,
                underwriter: params.underwriter,
                underwriterRiskRating: params.underwriterRiskRating,
                version: params.issuanceVersion,
            });

            const debtOrder = new DebtOrder({
                debtor: params.debtor,
                debtKernelContract: params.debtKernelContract,
                debtTokenContract: params.debtTokenContract,
                zeroExExchangeContract: params.zeroExExchangeContract,
                debtIssuanceCommitment: issuance,
                principleAmount: params.principleAmount,
                principleTokenAddress: params.principleTokenAddress,
                debtorFee: params.debtorFee,
                creditorFee: params.creditorFee,
                underwriterFee: params.underwriterFee,
                relayer: params.relayer,
                expirationTimestampInSec: params.expirationTimestampInSec,
            });

            return await debtOrder.getSignedDebtOrder(web3, params.orderSignatories);
        };

        const getTokenBalances = async (agents: string[], token: ZeroX_DummyTokenContract) => {
            const promises = _.map(agents, (agent: string) => {
                return token.balanceOf.callAsync(agent);
            });

            return Promise.all(promises);
        }

        before(async () => {
            const setBalances = _.map(agents, async (agent: string) => {
                await dummyMKRToken.setBalance.sendTransactionAsync(agent, Units.ether(1000));
                await dummyZRXToken.setBalance.sendTransactionAsync(agent, Units.ether(1000));
                await dummyREPToken.setBalance.sendTransactionAsync(agent, Units.ether(1000));
            });

            await Promise.all(setBalances);

            const approveZeroExContract = _.map(agents, async (agent: string) => {
                await zeroEx.token.setUnlimitedProxyAllowanceAsync(dummyMKRToken.address, agent);
                await zeroEx.token.setUnlimitedProxyAllowanceAsync(dummyZRXToken.address, agent);
                await zeroEx.token.setUnlimitedProxyAllowanceAsync(dummyREPToken.address, agent);

                await dummyZRXToken.approve.sendTransactionAsync(kernel.address, Units.ether(10), { from: agent });
            });

            await Promise.all(approveZeroExContract);

            DEFAULT_PARAMS = {
                issuer: kernel.address,
                termsContract: TERMS_CONTRACT,
                termsContractParameters: TERMS_CONTRACT_PARAMETERS,
                underwriter: UNDERWRITER,
                underwriterRiskRating: Units.percent(1.35),
                issuanceVersion: repaymentRouter.address,
                debtor: DEBTOR_1,
                debtKernelContract: kernel.address,
                debtTokenContract: debtTokenContract.address,
                zeroExExchangeContract: zeroEx.exchange.getContractAddress(),
                principleAmount: Units.ether(1),
                principleTokenAddress: dummyMKRToken.address,
                debtorFee: Units.ether(0.001),
                creditorFee: Units.ether(0.002),
                underwriterFee: Units.ether(0.0015),
                relayer: RELAYER,
                expirationTimestampInSec: new BigNumber(moment().add(1, 'days').valueOf()),
                orderSignatories: { debtor: DEBTOR_1, creditor: CREDITOR_1, underwriter: UNDERWRITER }
            }
        });

        describe("creditor submits valid signed debt order", () => {
            let debtOrder: SignedDebtOrder;
            let res: Web3.TransactionReceipt;

            let creditorBalanceBefore: BigNumber;
            let debtorBalanceBefore: BigNumber;
            let underwriterBalanceBefore: BigNumber;
            let relayerBalanceBefore: BigNumber;

            before(async () => {
                [creditorBalanceBefore, debtorBalanceBefore,
                    underwriterBalanceBefore, relayerBalanceBefore] =
                        await getTokenBalances([CREDITOR_1, DEBTOR_1, UNDERWRITER, RELAYER], dummyMKRToken);

                debtOrder = await generateDebtOrder();

                const txHash = await kernel.fillDebtOrder.sendTransactionAsync(
                    debtOrder.getOrderAddresses(),
                    debtOrder.getOrderValues(),
                    debtOrder.getOrderBytes32(),
                    debtOrder.getSignaturesR(),
                    debtOrder.getSignaturesS(),
                    debtOrder.getSignaturesV()
                );

                res = await web3.eth.getTransactionReceipt(txHash);
            });

            it("should emit debt issuance log", () => {
                const [, , issuanceLog] = ABIDecoder.decodeLogs(res.logs);
                expect(issuanceLog).to.deep
                    .equal(LogDebtIssuance(kernel.address, debtOrder.getIssuanceCommitment().getHash()));
            });

            it("should emit term start log", async () => {
                const [,,,,,,,,, termBeginLog] = ABIDecoder.decodeLogs(res.logs);
                const block = await web3.eth.getBlock(res.blockHash);

                expect(termBeginLog).to.deep
                    .equal(LogTermBegin(kernel.address, debtOrder.getIssuanceCommitment().getHash(),
                        block.timestamp, block.number));
            });

            it("should credit debtor with desired principle minus debtor fee", async () => {
                const delta = debtOrder.getPrincipleAmount().minus(debtOrder.getDebtorFee());
                await expect(dummyMKRToken.balanceOf.callAsync(DEBTOR_1))
                    .to.eventually.bignumber.equal(debtorBalanceBefore.plus(delta));
            });

            it("should debit creditor desired principle", async () => {
                const delta = debtOrder.getPrincipleAmount().plus(debtOrder.getCreditorFee());
                await expect(dummyMKRToken.balanceOf.callAsync(CREDITOR_1))
                    .to.eventually.bignumber.equal(creditorBalanceBefore.minus(delta));
            });

            it("should credit creditor with newly minted debt token", async () => {
                await expect(debtTokenContract.ownerOf.callAsync(
                    new BigNumber(debtOrder.getIssuanceCommitment().getHash())))
                        .to.eventually.equal(CREDITOR_1);
            });

            it("should credit underwriter with desired fee", async () => {
                const delta = debtOrder.getUnderwriterFee();
                await expect(dummyMKRToken.balanceOf.callAsync(UNDERWRITER))
                    .to.eventually.bignumber.equal(underwriterBalanceBefore.plus(delta));
            });

            it("should credit relayer with desired fee", async () => {
                const delta = debtOrder.getRelayerFee();
                await expect(dummyMKRToken.balanceOf.callAsync(RELAYER))
                    .to.eventually.bignumber.equal(relayerBalanceBefore.plus(delta));
            });
        });
    });
});
