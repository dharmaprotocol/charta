import {BigNumber} from "bignumber.js";

import * as ABIDecoder from "abi-decoder";
import * as chai from "chai";
import * as _ from "lodash";
import * as Web3 from "web3";
import * as Units from "./test_utils/units";
import * as utils from "./test_utils/utils";

import {LogDebtIssuance} from "./logs/debt_kernel";

import {DebtKernelContract} from "../../types/generated/debt_kernel";
import {DebtRegistryContract} from "../../types/generated/debt_registry";
import {DebtTokenContract} from "../../types/generated/debt_token";
import {RepaymentRouterContract} from "../../types/generated/repayment_router";

import {IssuanceCommitment, SignedIssuanceCommitment} from "../../types/kernel/issuance_commitment";
import {BigNumberSetup} from "./test_utils/bignumber_setup";
import ChaiSetup from "./test_utils/chai_setup";
import {INVALID_OPCODE, REVERT_ERROR} from "./test_utils/constants";

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

    const CONTRACT_OWNER = ACCOUNTS[0];
    const ATTACKER = ACCOUNTS[1];

    const DEBTOR = ACCOUNTS[2];
    const UNDERWRITER = ACCOUNTS[3];
    const TERMS_CONTRACT = ACCOUNTS[4];
    const TERMS_CONTRACT_PARAMETERS = web3.sha3("arbitrary terms contract parameters");

    const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";

    let generateIssuanceCommitment: () => IssuanceCommitment;
    let issueDebtAgreement: (signedIssuance: SignedIssuanceCommitment)
        => Promise<string>;

    const TX_DEFAULTS = { from: CONTRACT_OWNER, gas: 4712388 };

    const reset = async () => {
        const kernelContractInstance = await debtKernelContract.new();

        // The typings we use ingest vanilla Web3 contracts, so we convert the
        // contract instance deployed by truffle into a Web3 contract instance
        const web3ContractInstance =
            web3.eth.contract(debtKernelContract.abi).at(kernelContractInstance.address);

        kernel = new DebtKernelContract(web3ContractInstance, TX_DEFAULTS);

        // Load current Repayment Router for use as a version address in the Issuance
        // commitmentsr
        repaymentRouter = await RepaymentRouterContract.deployed(web3, TX_DEFAULTS);

        generateIssuanceCommitment = () => {
            return new IssuanceCommitment({
                debtor: DEBTOR,
                termsContract: TERMS_CONTRACT,
                termsContractParameters: TERMS_CONTRACT_PARAMETERS,
                underwriter: UNDERWRITER,
                underwriterRiskRating: Units.percent(1.35),
                version: repaymentRouter.address,
            });
        };

        issueDebtAgreement = async (signedIssuance: SignedIssuanceCommitment) => {
            return kernel.issueDebtAgreement.sendTransactionAsync(
                signedIssuance.getIssuanceAddresses(),
                signedIssuance.getIssuanceValues(),
                signedIssuance.getTermsContractParameters(),
                signedIssuance.getSignaturesR(),
                signedIssuance.getSignaturesS(),
                signedIssuance.getSignaturesV(),
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

        describe("user issues debt agreement...", () => {
            before(() => {
                issuance = generateIssuanceCommitment();
            });

            describe("...with a malformed debtor signature", () => {
                before(async () => {
                    signedIssuance = await issuance.getSignedIssuanceCommitment(web3,
                            ATTACKER, issuance.getUnderwriter());
                });

                it("should throw", async () => {
                    await expect(issueDebtAgreement(signedIssuance))
                        .to.eventually.be.rejectedWith(REVERT_ERROR);
                });
            });

            describe("...with a malformed underwriter signature", () => {
                before(async () => {
                    signedIssuance = await issuance.getSignedIssuanceCommitment(web3,
                            issuance.getDebtor(), ATTACKER);
                });

                it("should throw", async () => {
                    await expect(issueDebtAgreement(signedIssuance))
                        .to.eventually.be.rejectedWith(REVERT_ERROR);
                });
            });

            describe("...with properly formed signatures", () => {
                let res: Web3.TransactionReceipt;

                before(async () => {
                    signedIssuance = await issuance.getSignedIssuanceCommitment(web3,
                        issuance.getDebtor(), issuance.getUnderwriter());
                    const txHash = await issueDebtAgreement(signedIssuance);
                    res = await web3.eth.getTransactionReceipt(txHash);
                });

                it("should emit debt issuance log", () => {
                    const [insertEntryLog, mintTokenLog, debtIssuanceLog] = ABIDecoder.decodeLogs(res.logs);
                    const logExpected = LogDebtIssuance(kernel.address, issuance.getHash());

                    expect(debtIssuanceLog).to.deep.equal(logExpected);
                });

                it("should mint debt token to debtor", async () => {
                    await expect(debtTokenContract.tokenOfOwnerByIndex.callAsync(DEBTOR, new BigNumber(0)))
                        .to.eventually.bignumber.equal(issuance.getHash());
                });

                it("should retrieve correct debt parameters from registry", async () => {
                    const retrievedEntry = await debtRegistryContract.get.callAsync(issuance.getHash());
                    const expectedEntry = [
                            issuance.getVersion(),
                            issuance.getDebtor(),
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

        describe("user issues duplicate debt agreement", () => {
            it("should throw", async () => {
                await expect(issueDebtAgreement(signedIssuance))
                    .to.eventually.be.rejectedWith(REVERT_ERROR);
            });
        });

        describe("user issues duplicate debt agreement with new salt", () => {
            let res: Web3.TransactionReceipt;

            before(async () => {
                // Re-initialize debt issuance commitment with new salt
                issuance = new IssuanceCommitment(issuance.params, issuance.generateSalt());
                signedIssuance = await issuance.getSignedIssuanceCommitment(web3,
                    issuance.getDebtor(), issuance.getUnderwriter());
                const txHash = await issueDebtAgreement(signedIssuance);
                res = await web3.eth.getTransactionReceipt(txHash);
            });

            it("should emit debt issuance log", () => {
                const [insertEntryLog, mintTokenLog, debtIssuanceLog] = ABIDecoder.decodeLogs(res.logs);
                const logExpected = LogDebtIssuance(kernel.address, issuance.getHash());

                expect(debtIssuanceLog).to.deep.equal(logExpected);
            });

            it("should mint debt token to debtor", async () => {
                await expect(debtTokenContract.tokenOfOwnerByIndex.callAsync(DEBTOR, new BigNumber(1)))
                    .to.eventually.bignumber.equal(issuance.getHash());
            });

            it("should retrieve correct debt parameters from registry", async () => {
                const retrievedEntry = await debtRegistryContract.get.callAsync(issuance.getHash());
                const expectedEntry = [
                        issuance.getVersion(),
                        issuance.getDebtor(),
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

        describe("user issues debt agreement with no underwriter", () => {
            let res: Web3.TransactionReceipt;

            before(async () => {
                // Re-initialize debt issuance commitment with no underwriter or underwriterRiskRating
                issuance = new IssuanceCommitment({
                    debtor: DEBTOR,
                    termsContract: TERMS_CONTRACT,
                    termsContractParameters: TERMS_CONTRACT_PARAMETERS,
                    underwriter: NULL_ADDRESS,
                    underwriterRiskRating: new BigNumber(0),
                    version: repaymentRouter.address,
                });

                signedIssuance = await issuance.getSignedIssuanceCommitment(web3,
                    issuance.getDebtor(), issuance.getUnderwriter());
                const txHash = await issueDebtAgreement(signedIssuance);
                res = await web3.eth.getTransactionReceipt(txHash);
            });

            it("should emit debt issuance log", () => {
                const [insertEntryLog, mintTokenLog, debtIssuanceLog] = ABIDecoder.decodeLogs(res.logs);
                const logExpected = LogDebtIssuance(kernel.address, issuance.getHash());

                expect(debtIssuanceLog).to.deep.equal(logExpected);
            });

            it("should mint debt token to debtor", async () => {
                await expect(debtTokenContract.tokenOfOwnerByIndex.callAsync(DEBTOR, new BigNumber(2)))
                    .to.eventually.bignumber.equal(issuance.getHash());
            });

            it("should retrieve correct debt parameters from registry", async () => {
                const retrievedEntry = await debtRegistryContract.get.callAsync(issuance.getHash());
                const expectedEntry = [
                        issuance.getVersion(),
                        issuance.getDebtor(),
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

        describe("user issues debt agreement with no underwriter and nonzero risk rating", () => {
            it("should throw", async () => {
                // Re-initialize debt issuance commitment with no underwriter or nonzero riskRating
                issuance = new IssuanceCommitment({
                    debtor: DEBTOR,
                    termsContract: TERMS_CONTRACT,
                    termsContractParameters: TERMS_CONTRACT_PARAMETERS,
                    underwriter: NULL_ADDRESS,
                    underwriterRiskRating: Units.percent(0.001),
                    version: repaymentRouter.address,
                });

                signedIssuance = await issuance.getSignedIssuanceCommitment(web3,
                    issuance.getDebtor(), issuance.getUnderwriter());
                await expect(issueDebtAgreement(signedIssuance))
                    .to.eventually.be.rejectedWith(REVERT_ERROR);
            });
        });
    });
});
