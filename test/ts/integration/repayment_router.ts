import * as ABIDecoder from "abi-decoder";
import * as chai from "chai";
import * as _ from "lodash";
import * as moment from "moment";
import * as Web3 from "web3";
import * as Units from "../test_utils/units";

import {BigNumber} from "bignumber.js";

import {DebtKernelContract} from "../../../types/generated/debt_kernel";
import {DebtRegistryContract} from "../../../types/generated/debt_registry";
import {DebtTokenContract} from "../../../types/generated/debt_token";
import {DummyTokenContract} from "../../../types/generated/dummy_token";
import {TokenRegistryContract} from "../../../types/generated/token_registry";
import {MintableNonFungibleTokenContract} from "../../../types/generated/mintable_non_fungible_token";
import {NFTTermsContractContract} from "../../../types/generated/n_f_t_terms_contract";
import {RepaymentRouterContract} from "../../../types/generated/repayment_router";
import {SimpleInterestTermsContractContract} from "../../../types/generated/simple_interest_terms_contract";
import {TokenTransferProxyContract} from "../../../types/generated/token_transfer_proxy";

import {DebtOrderFactory} from "../factories/debt_order_factory";

import {RepaymentRouterErrorCodes} from "../../../types/errors";
import {DebtOrder, SignedDebtOrder} from "../../../types/kernel/debt_order";

import {BigNumberSetup} from "../test_utils/bignumber_setup";
import ChaiSetup from "../test_utils/chai_setup";
import {INVALID_OPCODE, REVERT_ERROR} from "../test_utils/constants";

import {LogError, LogNFTRepayment, LogRepayment} from "../logs/repayment_router";

import leftPad = require("left-pad");

// Set up Chai
ChaiSetup.configure();
const expect = chai.expect;

// Configure BigNumber exponentiation
BigNumberSetup.configure();

const simpleInterestTermsContract = artifacts.require("SimpleInterestTermsContract");
const nftTermsContract = artifacts.require("NFTTermsContract");
const repaymentRouterContract = artifacts.require("RepaymentRouter");

contract("Repayment Router (Integration Tests)", async (ACCOUNTS) => {
    let router: RepaymentRouterContract;
    let kernel: DebtKernelContract;
    let debtToken: DebtTokenContract;
    let principalToken: DummyTokenContract;
    let principalNFT: MintableNonFungibleTokenContract;
    let termsContract: SimpleInterestTermsContractContract;
    let termsContractNFT: NFTTermsContractContract;
    let tokenTransferProxy: TokenTransferProxyContract;

    let orderFactory: DebtOrderFactory;
    let order: SignedDebtOrder;
    let agreementId: string;

    const CONTRACT_OWNER = ACCOUNTS[0];
    const PAYER = ACCOUNTS[1];
    const BENEFICIARY_1 = ACCOUNTS[2];
    const BENEFICIARY_2 = ACCOUNTS[3];
    const DEBTOR = ACCOUNTS[4];
    const UNDERWRITER = ACCOUNTS[5];
    const RELAYER = ACCOUNTS[6];

    const EXAMPLE_NFT_ID = new BigNumber(13);
    const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";

    const TX_DEFAULTS = { from: CONTRACT_OWNER, gas: 4000000 };

    before(async () => {
        const dummyTokenRegistryContract = await TokenRegistryContract.deployed(web3, TX_DEFAULTS);
        const dummyREPTokenAddress = await dummyTokenRegistryContract.getTokenAddress.callAsync("REP");

        principalToken = await DummyTokenContract.at(dummyREPTokenAddress, web3, TX_DEFAULTS);
        principalNFT = await MintableNonFungibleTokenContract.deployed(web3, TX_DEFAULTS);

        kernel = await DebtKernelContract.deployed(web3, TX_DEFAULTS);
        debtToken = await DebtTokenContract.deployed(web3, TX_DEFAULTS);
        tokenTransferProxy = await TokenTransferProxyContract.deployed(web3, TX_DEFAULTS);

        await principalToken.setBalance.sendTransactionAsync(BENEFICIARY_1, Units.ether(100));
        await principalToken.setBalance.sendTransactionAsync(BENEFICIARY_2, Units.ether(100));
        await principalToken.approve.sendTransactionAsync(tokenTransferProxy.address,
            Units.ether(100), { from: BENEFICIARY_1 });
        await principalToken.approve.sendTransactionAsync(tokenTransferProxy.address,
            Units.ether(100), { from: BENEFICIARY_2 });

        const debtRegistry = await DebtRegistryContract.deployed(web3, TX_DEFAULTS);
        const repaymentRouterTruffle = await repaymentRouterContract.new(debtRegistry.address,
            tokenTransferProxy.address);
        const termsContractTruffle = await simpleInterestTermsContract.new(
            debtRegistry.address,
            principalToken.address,
            repaymentRouterTruffle.address,
        );
        const termsContractNftTruffle = await nftTermsContract.new(
            debtRegistry.address,
            principalNFT.address,
            repaymentRouterTruffle.address,
        );

        // The typings we use ingest vanilla Web3 contracts, so we convert the
        // contract instance deployed by truffle into a Web3 contract instance
        const repaymentRouterWeb3Contract =
            web3.eth.contract(repaymentRouterTruffle.abi).at(repaymentRouterTruffle.address);
        const termsContractWeb3Contract =
            web3.eth.contract(simpleInterestTermsContract.abi).at(termsContractTruffle.address);
        const termsContractNftWeb3Contract =
            web3.eth.contract(nftTermsContract.abi).at(termsContractNftTruffle.address);

        router = new RepaymentRouterContract(repaymentRouterWeb3Contract, TX_DEFAULTS);
        termsContract = new SimpleInterestTermsContractContract(termsContractWeb3Contract, TX_DEFAULTS);
        termsContractNFT = new NFTTermsContractContract(termsContractNftWeb3Contract, TX_DEFAULTS);

        await tokenTransferProxy.addAuthorizedTransferAgent.sendTransactionAsync(router.address);

        const termLengthInBlocks = 43200;
        const principalPlusInterest = Units.ether(1.1);

        const uint16PrincipalPlusInterest = leftPad(web3.toHex(principalPlusInterest).substr(2), 32, "0");
        const uint16TermLength = leftPad(web3.toHex(termLengthInBlocks).substr(2), 32, "0");

        const termsContractParameters = "0x" + uint16PrincipalPlusInterest + uint16TermLength;

        const defaultOrderParams = {
            creditorFee: Units.ether(0.002),
            debtKernelContract: kernel.address,
            debtOrderVersion: kernel.address,
            debtTokenContract: debtToken.address,
            debtor: DEBTOR,
            debtorFee: Units.ether(0.001),
            expirationTimestampInSec: new BigNumber(moment().add(1, "days").unix()),
            issuanceVersion: router.address,
            orderSignatories: { debtor: DEBTOR, creditor: BENEFICIARY_1, underwriter: UNDERWRITER },
            principalAmount: Units.ether(1),
            principalTokenAddress: principalToken.address,
            relayer: RELAYER,
            relayerFee: Units.ether(0.0015),
            termsContract: termsContract.address,
            termsContractParameters,
            underwriter: UNDERWRITER,
            underwriterFee: Units.ether(0.0015),
            underwriterRiskRating: Units.percent(1.35),
        };

        orderFactory = new DebtOrderFactory(defaultOrderParams);

        order = await orderFactory.generateDebtOrder();
        agreementId = order.getIssuanceCommitment().getHash();

        ABIDecoder.addABI(router.abi);
    });

    after(() => {
        ABIDecoder.removeABI(router.abi);
    });

    describe("#repay", () => {
        let receipt: Web3.TransactionReceipt;
        let errorLog: ABIDecoder.DecodedLog;
        let payerBalanceBefore: BigNumber;
        let beneficiaryBalanceBefore: BigNumber;

        describe("called for nonexistent debt agreement", () => {
            before(async () => {
                payerBalanceBefore = await principalToken.balanceOf.callAsync(PAYER);
                beneficiaryBalanceBefore = await principalToken.balanceOf.callAsync(BENEFICIARY_1);

                const txHash = await router.repay.sendTransactionAsync(
                    agreementId,
                    Units.ether(1.1), principalToken.address);
                receipt = await web3.eth.getTransactionReceipt(txHash);

                [errorLog] = _.compact(ABIDecoder.decodeLogs(receipt.logs));
            });

            it("should return DEBT_AGREEMENT_NONEXISTENT error", () => {
                expect(errorLog).to.deep.equal(LogError(
                    router.address,
                    RepaymentRouterErrorCodes.DEBT_AGREEMENT_NONEXISTENT,
                    agreementId,
                ));
            });

            it("should not transfer tokens from payer", async () => {
                await expect(principalToken.balanceOf.callAsync(PAYER))
                    .to.eventually.bignumber.equal(payerBalanceBefore);
                await expect(principalToken.balanceOf.callAsync(BENEFICIARY_1))
                    .to.eventually.bignumber.equal(beneficiaryBalanceBefore);
            });

            it("should not register repayment with terms contract", async () => {
                await expect(termsContract.getValueRepaid.callAsync(
                    agreementId,
                    new BigNumber(receipt.blockNumber),
                )).to.eventually.bignumber.equal(0);
            });
        });

        describe("called for issued debt agreement", () => {
            before(async () => {
                await kernel.fillDebtOrder.sendTransactionAsync(
                    BENEFICIARY_1,
                    order.getOrderAddresses(),
                    order.getOrderValues(),
                    order.getOrderBytes32(),
                    order.getSignaturesV(),
                    order.getSignaturesR(),
                    order.getSignaturesS(),
                );
            });

            describe("...when repayment router is paused", () => {
                before(async () => {
                    await router.pause.sendTransactionAsync({ from: CONTRACT_OWNER });
                });

                after(async () => {
                    await router.unpause.sendTransactionAsync({ from: CONTRACT_OWNER });
                });

                it("should throw", async () => {
                    await expect(router.repay.sendTransactionAsync(agreementId,
                        Units.ether(1.1), principalToken.address, { from: PAYER }))
                        .to.eventually.be.rejectedWith(REVERT_ERROR);
                });
            });

            describe("...with insufficient balance for payment", () => {
                before(async () => {
                    payerBalanceBefore = await principalToken.balanceOf.callAsync(PAYER);
                    beneficiaryBalanceBefore = await principalToken.balanceOf.callAsync(BENEFICIARY_1);

                    const txHash = await router.repay.sendTransactionAsync(agreementId,
                        Units.ether(1.1), principalToken.address, { from: PAYER });
                    receipt = await web3.eth.getTransactionReceipt(txHash);

                    [errorLog] = _.compact(ABIDecoder.decodeLogs(receipt.logs));
                });

                it("should return PAYER_BALANCE_OR_ALLOWANCE_INSUFFICIENT error", () => {
                    expect(errorLog).to.deep.equal(LogError(
                        router.address,
                        RepaymentRouterErrorCodes.PAYER_BALANCE_OR_ALLOWANCE_INSUFFICIENT,
                        agreementId,
                    ));
                });

                it("should not transfer tokens from payer", async () => {
                    await expect(principalToken.balanceOf.callAsync(PAYER))
                        .to.eventually.bignumber.equal(payerBalanceBefore);
                    await expect(principalToken.balanceOf.callAsync(BENEFICIARY_1))
                        .to.eventually.bignumber.equal(beneficiaryBalanceBefore);
                });

                it("should not register repayment with terms contract", async () => {
                    await expect(termsContract.getValueRepaid.callAsync(
                        agreementId,
                        new BigNumber(receipt.blockNumber),
                    )).to.eventually.bignumber.equal(0);
                });
            });

            describe("...with insufficient allowance for payment", () => {
                before(async () => {
                    await principalToken.setBalance.sendTransactionAsync(
                        PAYER, Units.ether(1.1), { from: CONTRACT_OWNER },
                    );
                    await principalToken.approve.sendTransactionAsync(
                        tokenTransferProxy.address, Units.ether(1), { from: PAYER },
                    );

                    payerBalanceBefore = await principalToken.balanceOf.callAsync(PAYER);
                    beneficiaryBalanceBefore = await principalToken.balanceOf.callAsync(BENEFICIARY_1);

                    const txHash = await router.repay.sendTransactionAsync(agreementId,
                        Units.ether(1.1), principalToken.address, { from: PAYER });
                    receipt = await web3.eth.getTransactionReceipt(txHash);

                    [errorLog] = _.compact(ABIDecoder.decodeLogs(receipt.logs));
                });

                it("should return PAYER_BALANCE_OR_ALLOWANCE_INSUFFICIENT error", () => {
                    expect(errorLog).to.deep.equal(LogError(
                        router.address,
                        RepaymentRouterErrorCodes.PAYER_BALANCE_OR_ALLOWANCE_INSUFFICIENT,
                        agreementId,
                    ));
                });

                it("should not transfer tokens from payer", async () => {
                    await expect(principalToken.balanceOf.callAsync(PAYER))
                        .to.eventually.bignumber.equal(payerBalanceBefore);
                    await expect(principalToken.balanceOf.callAsync(BENEFICIARY_1))
                        .to.eventually.bignumber.equal(beneficiaryBalanceBefore);
                });

                it("should not register repayment with terms contract", async () => {
                    await expect(termsContract.getValueRepaid.callAsync(
                        agreementId,
                        new BigNumber(receipt.blockNumber),
                    )).to.eventually.bignumber.equal(0);
                });
            });

            describe("...with sufficient balance and allowance for payment", () => {
                let repaymentLog: ABIDecoder.DecodedLog;

                before(async () => {
                    await principalToken.setBalance.sendTransactionAsync(
                        PAYER, Units.ether(1.1), { from: CONTRACT_OWNER },
                    );
                    await principalToken.approve.sendTransactionAsync(
                        tokenTransferProxy.address, Units.ether(1.1), { from: PAYER },
                    );

                    payerBalanceBefore = await principalToken.balanceOf.callAsync(PAYER);
                    beneficiaryBalanceBefore = await principalToken.balanceOf.callAsync(BENEFICIARY_1);

                    const txHash = await router.repay.sendTransactionAsync(agreementId,
                        Units.ether(1.1), principalToken.address, { from: PAYER });
                    receipt = await web3.eth.getTransactionReceipt(txHash);

                    [repaymentLog] = _.compact(ABIDecoder.decodeLogs(receipt.logs));
                });

                it("should transfer tokens of specified amount from payer", async () => {
                    await expect(principalToken.balanceOf.callAsync(PAYER))
                        .to.eventually.bignumber.equal(payerBalanceBefore.minus(Units.ether(1.1)));
                    await expect(principalToken.balanceOf.callAsync(BENEFICIARY_1))
                        .to.eventually.bignumber.equal(beneficiaryBalanceBefore.plus(Units.ether(1.1)));
                });

                it("should register repayment with terms contract", async () => {
                    await expect(termsContract.getValueRepaid.callAsync(
                        agreementId, new BigNumber(receipt.blockNumber)))
                        .to.eventually.bignumber.equal(Units.ether(1.1));
                });

                it("should emit repayment log", () => {
                    expect(repaymentLog).to.deep.equal(LogRepayment(
                        router.address,
                        agreementId,
                        PAYER,
                        BENEFICIARY_1,
                        Units.ether(1.1),
                        principalToken.address,
                    ));
                });
            });
        });

        describe("Global Invariants", () => {
            describe("called with null token address", () => {
                it("should throw", async () => {
                    await expect(router.repay.sendTransactionAsync(agreementId,
                        Units.ether(1), NULL_ADDRESS, { from: PAYER }))
                        .to.eventually.be.rejectedWith(REVERT_ERROR);
                });
            });

            describe("called with zero token amount", () => {
                it("should throw", async () => {
                    await expect(router.repay.sendTransactionAsync(agreementId,
                        new BigNumber(0), principalToken.address, { from: PAYER }))
                        .to.eventually.be.rejectedWith(REVERT_ERROR);
                });
            });
        });
    });

    describe("#repayNFT", () => {
        let nftOwnershipBefore: string;
        let receipt: Web3.TransactionReceipt;
        let errorLog: ABIDecoder.DecodedLog;
        let repaymentLog: ABIDecoder.DecodedLog;

        before(async () => {
            // reset debt order to one that points to NFT terms contract
            order = await orderFactory.generateDebtOrder({
                termsContract: termsContractNFT.address,
                termsContractParameters: "0x" + leftPad(web3.toHex(EXAMPLE_NFT_ID).substr(2), 64, "0"),
            });

            agreementId = order.getIssuanceCommitment().getHash();

            await principalNFT.mint.sendTransactionAsync(CONTRACT_OWNER, EXAMPLE_NFT_ID);
        });

        describe("called for nonexistent debt agreement", () => {
            before(async () => {
                nftOwnershipBefore = await principalNFT.ownerOf.callAsync(EXAMPLE_NFT_ID);

                const txHash = await router.repayNFT.sendTransactionAsync(
                    agreementId, EXAMPLE_NFT_ID, principalNFT.address);
                receipt = await web3.eth.getTransactionReceipt(txHash);

                [errorLog] = _.compact(ABIDecoder.decodeLogs(receipt.logs));
            });

            it("should return DEBT_AGREEMENT_NONEXISTENT error", () => {
                expect(errorLog).to.deep.equal(LogError(
                    router.address,
                    RepaymentRouterErrorCodes.DEBT_AGREEMENT_NONEXISTENT,
                    agreementId,
                ));
            });

            it("should not transfer token from owner", async () => {
                await expect(principalNFT.ownerOf.callAsync(EXAMPLE_NFT_ID))
                    .to.eventually.equal(CONTRACT_OWNER);
            });

            it("should not register repayment with terms contract", async () => {
                await expect(termsContractNFT.getValueRepaid.callAsync(
                    agreementId, new BigNumber(receipt.blockNumber),
                )).to.eventually.bignumber.equal(0);
            });
        });

        describe("called for issued debt agreement", () => {
            before(async () => {
                await kernel.fillDebtOrder.sendTransactionAsync(
                    BENEFICIARY_1,
                    order.getOrderAddresses(),
                    order.getOrderValues(),
                    order.getOrderBytes32(),
                    order.getSignaturesV(),
                    order.getSignaturesR(),
                    order.getSignaturesS(),
                );

                await debtToken.transfer.sendTransactionAsync(BENEFICIARY_2,
                    new BigNumber(agreementId), { from: BENEFICIARY_1 });
            });

            describe("...when repayment router is paused", () => {
                before(async () => {
                    await router.pause.sendTransactionAsync({ from: CONTRACT_OWNER });
                });

                after(async () => {
                    await router.unpause.sendTransactionAsync({ from: CONTRACT_OWNER });
                });

                it("should throw", async () => {
                    await expect(router.repayNFT.sendTransactionAsync(
                        agreementId, EXAMPLE_NFT_ID, principalNFT.address,
                        { from: PAYER }))
                        .to.eventually.be.rejectedWith(REVERT_ERROR);
                });
            });

            describe("...with token that payer doesn't own", () => {
                before(async () => {
                    nftOwnershipBefore = await principalNFT.ownerOf.callAsync(EXAMPLE_NFT_ID);

                    const txHash = await router.repayNFT.sendTransactionAsync(
                        agreementId, EXAMPLE_NFT_ID, principalNFT.address,
                        { from: PAYER });
                    receipt = await web3.eth.getTransactionReceipt(txHash);

                    [errorLog] = _.compact(ABIDecoder.decodeLogs(receipt.logs));
                });

                it("should return PAYER_OWNERSHIP_OR_ROUTER_APPROVAL_MISSING error", () => {
                    expect(errorLog).to.deep.equal(LogError(
                        router.address,
                        RepaymentRouterErrorCodes.PAYER_OWNERSHIP_OR_ROUTER_APPROVAL_MISSING,
                        agreementId,
                    ));
                });

                it("should not transfer token from owner", async () => {
                    await expect(principalNFT.ownerOf.callAsync(EXAMPLE_NFT_ID))
                        .to.eventually.equal(CONTRACT_OWNER);
                });

                it("should not register repayment with terms contract", async () => {
                    await expect(termsContractNFT.getValueRepaid.callAsync(
                        agreementId, new BigNumber(receipt.blockNumber),
                    )).to.eventually.bignumber.equal(0);
                });
            });

            describe("...with token that router has not been approved to transfer", () => {
                before(async () => {
                    await principalNFT.transfer.sendTransactionAsync(PAYER, EXAMPLE_NFT_ID,
                        { from: CONTRACT_OWNER });

                    const txHash = await router.repayNFT.sendTransactionAsync(
                        agreementId, EXAMPLE_NFT_ID, principalNFT.address,
                        { from: PAYER });
                    receipt = await web3.eth.getTransactionReceipt(txHash);

                    [errorLog] = _.compact(ABIDecoder.decodeLogs(receipt.logs));
                });

                it("should return PAYER_OWNERSHIP_OR_ROUTER_APPROVAL_MISSING error", () => {
                    expect(errorLog).to.deep.equal(LogError(
                        router.address,
                        RepaymentRouterErrorCodes.PAYER_OWNERSHIP_OR_ROUTER_APPROVAL_MISSING,
                        agreementId,
                    ));
                });

                it("should not transfer token from owner", async () => {
                    await expect(principalNFT.ownerOf.callAsync(EXAMPLE_NFT_ID))
                        .to.eventually.equal(PAYER);
                });

                it("should not register repayment with terms contract", async () => {
                    await expect(termsContractNFT.getValueRepaid.callAsync(
                        agreementId, new BigNumber(receipt.blockNumber),
                    )).to.eventually.bignumber.equal(0);
                });
            });

            describe("...with token that payer owns and has approved router to transfer", () => {
                before(async () => {
                    await principalNFT.approve.sendTransactionAsync(tokenTransferProxy.address, EXAMPLE_NFT_ID,
                        { from: PAYER });

                    const txHash = await router.repayNFT.sendTransactionAsync(agreementId,
                        EXAMPLE_NFT_ID, principalNFT.address, { from: PAYER });
                    receipt = await web3.eth.getTransactionReceipt(txHash);

                    [repaymentLog] = _.compact(ABIDecoder.decodeLogs(receipt.logs));
                });

                it("should transfer tokens of specified amount from payer", async () => {
                    await expect(principalNFT.ownerOf.callAsync(EXAMPLE_NFT_ID))
                        .to.eventually.equal(BENEFICIARY_2);
                });

                it("should register repayment with terms contract", async () => {
                    await expect(termsContractNFT.getValueRepaid.callAsync(
                        agreementId, new BigNumber(receipt.blockNumber)))
                        .to.eventually.bignumber.equal(1);
                });

                it("should emit repayment log", () => {
                    expect(repaymentLog).to.deep.equal(LogNFTRepayment(
                        router.address,
                        agreementId,
                        PAYER,
                        BENEFICIARY_2,
                        EXAMPLE_NFT_ID,
                        principalNFT.address,
                    ));
                });
            });
        });

        describe("Global Invariants", () => {
            describe("called with null token address", () => {
                it("should throw", async () => {
                    await expect(router.repayNFT.sendTransactionAsync(agreementId,
                        EXAMPLE_NFT_ID, NULL_ADDRESS))
                        .to.eventually.be.rejectedWith(REVERT_ERROR);
                });
            });
        });
    });
});
