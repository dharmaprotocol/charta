import * as ABIDecoder from "abi-decoder";
import {BigNumber} from "bignumber.js";
import * as chai from "chai";
import * as _ from "lodash";
import * as Web3 from "web3";
import * as Units from "../test_utils/units";
import * as ZeroEx from "0x.js";

import {MockDebtRegistryContract} from "../../../types/generated/mock_debt_registry";
import {MockZeroExExchangeContract} from "../../../types/generated/mock_zero_ex_exchange";
import {MockERC20TokenContract} from "../../../types/generated/mock_e_r_c20_token";

import {DebtTokenContract} from "../../../types/generated/debt_token";
import {ZeroX_TokenTransferProxyContract} from "../../../types/generated/zerox_tokentransferproxy";

import {
    Address,
    TxData,
} from "../../../types/common";
import {DebtRegistryEntry} from "../../../types/registry/entry";
import {LogApproval, LogMint, LogTransfer} from "../logs/debt_token";
import {BigNumberSetup} from "../test_utils/bignumber_setup";
import ChaiSetup from "../test_utils/chai_setup";
import {INVALID_OPCODE, REVERT_ERROR} from "../test_utils/constants";

// Configure BigNumber exponentiation
BigNumberSetup.configure();

// Set up Chai
ChaiSetup.configure();
const expect = chai.expect;

const debtTokenContract = artifacts.require("DebtToken");
const repaymentRouterContract = artifacts.require("RepaymentRouter");

contract("Debt Token", (ACCOUNTS) => {
    let debtToken: DebtTokenContract;

    let mockRegistry: MockDebtRegistryContract;
    let mockExchange: MockZeroExExchangeContract;
    let mockToken: MockERC20TokenContract;

    let debtEntries: DebtRegistryEntry[];

    const NFT_NAME = "DebtToken";
    const NFT_SYMBOL = "DDT";

    const CONTRACT_OWNER = ACCOUNTS[0];
    const NON_CONTRACT_OWNER = ACCOUNTS[1];
    const AUTHORIZED_MINT_AGENT = ACCOUNTS[2];
    const AUTHORIZED_BROKERAGE_AGENT = ACCOUNTS[3];
    const UNAUTHORIZED_MINT_AGENT = ACCOUNTS[4];
    const UNAUTHORIZED_BROKERAGE_AGENT = ACCOUNTS[5];

    const TOKEN_OWNER_1 = ACCOUNTS[6];
    const TOKEN_OWNER_2 = ACCOUNTS[7];
    const TOKEN_OWNER_3 = ACCOUNTS[8];
    const TOKEN_OWNERS = [
        TOKEN_OWNER_1,
        TOKEN_OWNER_2,
        TOKEN_OWNER_3,
    ];

    const UNDERWRITER_1 = ACCOUNTS[9];
    const UNDERWRITER_2 = ACCOUNTS[10];
    const UNDERWRITER_3 = ACCOUNTS[11];
    const UNDERWRITERS = [
        UNDERWRITER_1,
        UNDERWRITER_2,
        UNDERWRITER_3,
    ];

    const BROKER = ACCOUNTS[12];
    const DEBTOR = ACCOUNTS[13];

    const INDEX_0 = new BigNumber(0);
    const INDEX_1 = new BigNumber(1);
    const INDEX_2 = new BigNumber(2);

    const NONEXISTENT_TOKEN_ID = new BigNumber(13);
    const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";

    const TERMS_CONTRACT_ADDRESS = ACCOUNTS[14];
    const ARBITRARY_TERMS_CONTRACT_PARAMS = [
        web3.sha3("#1: arbitrary terms contract param string"),
        web3.sha3("#2: arbitrary terms contract param string"),
        web3.sha3("#3: arbitrary terms contract param string"),
    ];

    const TX_DEFAULTS = { from: CONTRACT_OWNER, gas: 4000000 };

    const resetContracts = async () => {
        mockRegistry = await MockDebtRegistryContract.deployed(web3, TX_DEFAULTS);
        await mockRegistry.reset.sendTransactionAsync();

        mockExchange = await MockZeroExExchangeContract.deployed(web3, TX_DEFAULTS);
        mockToken = await MockERC20TokenContract.deployed(web3, TX_DEFAULTS);

        const debtTokenTruffle = await debtTokenContract.new(mockRegistry.address,
            { from: CONTRACT_OWNER });

        // The typings we use ingest vanilla Web3 contracts, so we convert the
        // contract instance deployed by truffle into a Web3 contract instance
        const debtTokenWeb3Contract =
            web3.eth.contract(debtTokenTruffle.abi).at(debtTokenTruffle.address);

        debtToken = new DebtTokenContract(debtTokenWeb3Contract,
            TX_DEFAULTS);

        const repaymentRouterContractInstance =
            await repaymentRouterContract.deployed();

        debtEntries = _.map(TOKEN_OWNERS,
            (tokenOwner: Address, i: number) => {
                return new DebtRegistryEntry({
                    beneficiary: tokenOwner,
                    debtor: DEBTOR,
                    termsContract: TERMS_CONTRACT_ADDRESS,
                    termsContractParameters: ARBITRARY_TERMS_CONTRACT_PARAMS[i],
                    underwriter: UNDERWRITERS[i],
                    underwriterRiskRating: Units.percent(3.4),
                    version: repaymentRouterContractInstance.address,
                });
            });


        // Initialize ABI Decoders for deciphering log receipts
        ABIDecoder.addABI(debtTokenContract.abi);
    };

    const initState = async () => {
        await debtToken.addAuthorizedMintAgent.sendTransactionAsync(AUTHORIZED_MINT_AGENT,
            { from: CONTRACT_OWNER });
        await debtToken.addAuthorizedBrokerageAgent.sendTransactionAsync(AUTHORIZED_BROKERAGE_AGENT,
            { from: CONTRACT_OWNER });

        for (let i = 0; i < debtEntries.length; i++) {
            const entry = debtEntries[i];
            await mockRegistry.mockInsertReturnValue
                .sendTransactionAsync(entry.getIssuanceHash());

            await debtToken.create.sendTransactionAsync(
                entry.getVersion(),
                entry.getBeneficiary(),
                entry.getDebtor(),
                entry.getUnderwriter(),
                entry.getUnderwriterRiskRating(),
                entry.getTermsContract(),
                entry.getTermsContractParameters(),
                entry.getSalt(),
                { from: AUTHORIZED_MINT_AGENT },
            );
        }
    };

    const resetAndInitState = async () => {
        await resetContracts();
        await initState();
    };

    before(resetContracts);

    after(() => {
        // Tear down ABIDecoder before next set of tests
        ABIDecoder.removeABI(debtTokenContract.abi);
    });

    describe("Permissions", () => {
        it("should initialize with no authorizations", async () => {
            await expect(debtToken.getAuthorizedMintAgents.callAsync())
                .to.eventually.deep.equal([]);
            await expect(debtToken.getAuthorizedBrokerageAgents.callAsync())
                .to.eventually.deep.equal([]);
        });

        describe("non-owner adds mint authorization", () => {
            it("should throw", async () => {
                await expect(debtToken.addAuthorizedMintAgent
                    .sendTransactionAsync(UNAUTHORIZED_MINT_AGENT, { from: NON_CONTRACT_OWNER }))
                    .to.eventually.be.rejectedWith(REVERT_ERROR);
            });
        });

        describe("non-owner adds brokerage authorization", () => {
            it("should throw", async () => {
                await expect(debtToken.addAuthorizedBrokerageAgent
                    .sendTransactionAsync(UNAUTHORIZED_BROKERAGE_AGENT, { from: NON_CONTRACT_OWNER }))
                    .to.eventually.be.rejectedWith(REVERT_ERROR);
            });
        });

        describe("owner adds mint authorization", () => {
            before(async () => {
                await debtToken.addAuthorizedMintAgent
                    .sendTransactionAsync(AUTHORIZED_MINT_AGENT, { from: CONTRACT_OWNER });
            });

            it("should return agent as authorized", async () => {
                await expect(debtToken.getAuthorizedMintAgents.callAsync())
                    .to.eventually.deep.equal([AUTHORIZED_MINT_AGENT]);
            });
        });

        describe("owner adds brokerage authorization", () => {
            before(async () => {
                await debtToken.addAuthorizedBrokerageAgent
                    .sendTransactionAsync(AUTHORIZED_BROKERAGE_AGENT, { from: CONTRACT_OWNER });
            });

            it("should return agent as authorized", async () => {
                await expect(debtToken.getAuthorizedBrokerageAgents.callAsync())
                    .to.eventually.deep.equal([AUTHORIZED_BROKERAGE_AGENT]);
            });
        });
    });

    describe("Minting", () => {
        describe("unauthorized agent tries to mint debt token", () => {
            it("should throw", async () => {
                await expect(debtToken.create.sendTransactionAsync(
                    debtEntries[0].getVersion(),
                    debtEntries[0].getBeneficiary(),
                    debtEntries[0].getDebtor(),
                    debtEntries[0].getUnderwriter(),
                    debtEntries[0].getUnderwriterRiskRating(),
                    debtEntries[0].getTermsContract(),
                    debtEntries[0].getTermsContractParameters(),
                    debtEntries[0].getSalt(),
                    { from: UNAUTHORIZED_MINT_AGENT},
                )).to.eventually.be.rejectedWith(REVERT_ERROR);
            });
        });

        describe("authorized agent mints debt token", () => {
            let mintLog: ABIDecoder.DecodedLog;

            before(async () => {
                await mockRegistry.mockInsertReturnValue
                    .sendTransactionAsync(debtEntries[0].getIssuanceHash());

                const txHash = await debtToken.create.sendTransactionAsync(
                    debtEntries[0].getVersion(),
                    debtEntries[0].getBeneficiary(),
                    debtEntries[0].getDebtor(),
                    debtEntries[0].getUnderwriter(),
                    debtEntries[0].getUnderwriterRiskRating(),
                    debtEntries[0].getTermsContract(),
                    debtEntries[0].getTermsContractParameters(),
                    debtEntries[0].getSalt(),
                    { from: AUTHORIZED_MINT_AGENT },
                );

                const res = await web3.eth.getTransactionReceipt(txHash);
                [mintLog] = _.compact(ABIDecoder.decodeLogs(res.logs));
            });

            it("should call registry.insert function with issuance arguments", async () => {
                await expect(mockRegistry.wasInsertCalledWith.callAsync(
                    debtEntries[0].getVersion(),
                    debtEntries[0].getBeneficiary(),
                    debtEntries[0].getDebtor(),
                    debtEntries[0].getUnderwriter(),
                    debtEntries[0].getUnderwriterRiskRating(),
                    debtEntries[0].getTermsContract(),
                    debtEntries[0].getTermsContractParameters(),
                    debtEntries[0].getSalt(),
                )).to.eventually.equal(true);
            });

            it("should emit minting log event", () => {
                const logExpected = LogMint(
                    debtToken.address,
                    debtEntries[0].getBeneficiary(),
                    debtEntries[0].getTokenId(),
                );

                expect(mintLog).to.deep.equal(logExpected);
            });

            it("should increase total supply by 1", async () => {
                await expect(debtToken.totalSupply.callAsync())
                    .to.eventually.bignumber.equal(1);
            });

            it("should update owner's token list", async () => {
                await expect(debtToken.tokenOfOwnerByIndex.callAsync(debtEntries[0].getBeneficiary(), INDEX_0))
                    .to.eventually.bignumber.equal(debtEntries[0].getTokenId());
                await expect(debtToken.tokenOfOwnerByIndex.callAsync(debtEntries[0].getBeneficiary(), INDEX_1))
                    .to.eventually.be.rejectedWith(INVALID_OPCODE);
            });
        });
        describe("authorized agent mints second debt token to same creditor", () => {
            let res: Web3.TransactionReceipt;
            let secondDebt: DebtRegistryEntry;

            before(async () => {
                secondDebt = new DebtRegistryEntry({
                    beneficiary: debtEntries[0].getBeneficiary(),
                    debtor: DEBTOR,
                    termsContract: debtEntries[1].getTermsContract(),
                    termsContractParameters: debtEntries[1].getTermsContractParameters(),
                    underwriter: debtEntries[1].getUnderwriter(),
                    underwriterRiskRating: debtEntries[1].getUnderwriterRiskRating(),
                    version: debtEntries[1].getVersion(),
                });

                await mockRegistry.mockInsertReturnValue
                    .sendTransactionAsync(secondDebt.getIssuanceHash());

                const txHash = await debtToken.create.sendTransactionAsync(
                    secondDebt.getVersion(),
                    secondDebt.getBeneficiary(),
                    secondDebt.getDebtor(),
                    secondDebt.getUnderwriter(),
                    secondDebt.getUnderwriterRiskRating(),
                    secondDebt.getTermsContract(),
                    secondDebt.getTermsContractParameters(),
                    secondDebt.getSalt(),
                    { from: AUTHORIZED_MINT_AGENT },
                );

                res = await web3.eth.getTransactionReceipt(txHash);
            });

            it("should call registry.insert function with issuance arguments", async () => {
                await expect(mockRegistry.wasInsertCalledWith.callAsync(
                    secondDebt.getVersion(),
                    secondDebt.getBeneficiary(),
                    secondDebt.getDebtor(),
                    secondDebt.getUnderwriter(),
                    secondDebt.getUnderwriterRiskRating(),
                    secondDebt.getTermsContract(),
                    secondDebt.getTermsContractParameters(),
                    secondDebt.getSalt(),
                )).to.eventually.equal(true);
            });

            it("should emit minting log event", () => {
                const [mintLog] = _.compact(ABIDecoder.decodeLogs(res.logs));
                const logExpected = LogMint(
                    debtToken.address,
                    secondDebt.getBeneficiary(),
                    secondDebt.getTokenId(),
                );

                expect(mintLog).to.deep.equal(logExpected);
            });

            it("should increase total supply by 1", async () => {
                await expect(debtToken.totalSupply.callAsync())
                    .to.eventually.bignumber.equal(2);
            });

            it("should update owner's token list", async () => {
                await expect(debtToken.tokenOfOwnerByIndex.callAsync(secondDebt.getBeneficiary(), INDEX_0))
                    .to.eventually.bignumber.equal(debtEntries[0].getTokenId());
                await expect(debtToken.tokenOfOwnerByIndex.callAsync(secondDebt.getBeneficiary(), INDEX_1))
                    .to.eventually.bignumber.equal(secondDebt.getTokenId());
                await expect(debtToken.tokenOfOwnerByIndex.callAsync(secondDebt.getBeneficiary(), INDEX_2))
                    .to.eventually.be.rejectedWith(INVALID_OPCODE);
            });
        });
    });

    describe("Flags", async () => {
        it("should expose implementsERC721 method", async () => {
            await expect(debtToken.implementsERC721.callAsync()).to.eventually.equal(true);
        });
    });

    describe("General NFT Metadata", () => {
        it("should expose name variable", async () => {
            await expect(debtToken.name.callAsync()).to.eventually.equal(NFT_NAME);
        });

        it("should expose symbol variable", async () => {
            await expect(debtToken.symbol.callAsync()).to.eventually.equal(NFT_SYMBOL);
        });
    });

    describe("#totalSupply()", () => {
        before(resetAndInitState);

        it("should return 3 for total supply", async () => {
            const totalSupply = await debtToken.totalSupply.callAsync();
            expect(totalSupply).to.bignumber.equal(3);
        });
    });

    describe("#balanceOf()", () => {
        before(resetAndInitState);

        it("should return 1 for each owner's balance", async () => {
            await expect(debtToken.balanceOf.callAsync(TOKEN_OWNER_1))
                .to.eventually.bignumber.equal(1);
            await expect(debtToken.balanceOf.callAsync(TOKEN_OWNER_2))
                .to.eventually.bignumber.equal(1);
            await expect(debtToken.balanceOf.callAsync(TOKEN_OWNER_3))
                .to.eventually.bignumber.equal(1);
        });
    });

    describe("#tokenOfOwnerByIndex()", async () => {
        before(resetAndInitState);

        it("should return current token at index 0 for each user", async () => {
            await expect(debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_1, INDEX_0))
                .to.eventually.bignumber.equal(debtEntries[0].getTokenId());
            await expect(debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_2, INDEX_0))
                .to.eventually.bignumber.equal(debtEntries[1].getTokenId());
            await expect(debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_3, INDEX_0))
                .to.eventually.bignumber.equal(debtEntries[2].getTokenId());
        });

        it("should throw if called at index > balanceOf.callAsync(owner)", async () => {
            await expect(debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_1, INDEX_1))
                .to.eventually.be.rejectedWith(INVALID_OPCODE);
            await expect(debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_2, INDEX_1))
                .to.eventually.be.rejectedWith(INVALID_OPCODE);
            await expect(debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_3, INDEX_1))
                .to.eventually.be.rejectedWith(INVALID_OPCODE);
        });
    });

    describe("#ownerOf()", async () => {
        before(resetAndInitState);

        describe("user calls ownerOf on a given tokenId", async () => {
            before(async () => {
                mockRegistry.mockGetBeneficiaryReturnValueFor.
                    sendTransactionAsync(debtEntries[0].getIssuanceHash(), TOKEN_OWNER_3);
            });

            it("should return what registry says debt's beneficiary is", async () => {
                await expect(debtToken.ownerOf.callAsync(debtEntries[0].getTokenId()))
                    .to.eventually.equal(TOKEN_OWNER_3);
            });

            describe("...when token is burned / doesn't exist", async () => {
                before(async () => {
                    await mockRegistry.mockGetBeneficiaryReturnValueFor.
                        sendTransactionAsync(debtEntries[0].getIssuanceHash(), NULL_ADDRESS);
                });

                it("should return null address", async () => {
                    await expect(debtToken.ownerOf.callAsync(debtEntries[0].getTokenId()))
                        .to.eventually.equal(NULL_ADDRESS);
                });
            });
        });
    });

    describe("#transfer()", async () => {
        before(resetAndInitState);

        describe("user transfers token he doesn't own", async () => {
            it("should throw", async () => {
                await expect(debtToken.transfer
                    .sendTransactionAsync(TOKEN_OWNER_1, debtEntries[1].getTokenId(),
                        { from: TOKEN_OWNER_1 }))
                        .to.eventually.be.rejectedWith(REVERT_ERROR);
            });
        });

        describe("user transfers token that doesn't exist", async () => {
            it("should throw", async () => {
                await expect(debtToken.transfer
                    .sendTransactionAsync(TOKEN_OWNER_1, NONEXISTENT_TOKEN_ID,
                        { from: TOKEN_OWNER_1 }))
                        .to.eventually.be.rejectedWith(REVERT_ERROR);
            });
        });

        describe("user transfers token he owns", async () => {
            let approvalLog: ABIDecoder.DecodedLog;
            let transferLog: ABIDecoder.DecodedLog;

            before(async () => {
                const txHash = await debtToken.transfer
                    .sendTransactionAsync(TOKEN_OWNER_2, debtEntries[0].getTokenId(),
                        { from: TOKEN_OWNER_1 });
                const res = await web3.eth.getTransactionReceipt(txHash);
                [approvalLog, transferLog] = _.compact(ABIDecoder.decodeLogs(res.logs));
            });

            it("should call modifyBeneficiary on debt registry", async () => {
                await expect(mockRegistry.wasModifyBeneficiaryCalledWith
                    .callAsync(debtEntries[0].getIssuanceHash(), TOKEN_OWNER_2))
                    .to.eventually.be.true;
            })

            it("should emit transfer log", async () => {
                const logExpected =
                    LogTransfer(
                        debtToken.address,
                        TOKEN_OWNER_1,
                        TOKEN_OWNER_2,
                        debtEntries[0].getTokenId(),
                    );

                expect(transferLog).to.deep.equal(logExpected);
            });

            it("should update owners' token balances correctly", async () => {
                await expect(debtToken.balanceOf.callAsync(TOKEN_OWNER_1))
                    .to.eventually.bignumber.equal(0);
                await expect(debtToken.balanceOf.callAsync(TOKEN_OWNER_2))
                    .to.eventually.bignumber.equal(2);
                await expect(debtToken.balanceOf.callAsync(TOKEN_OWNER_3))
                    .to.eventually.bignumber.equal(1);
            });

            it("should update owners' iterable token lists", async () => {
                // TOKEN_OWNER_1
                await expect(debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_1,
                    INDEX_0)).to.eventually.be.rejectedWith(INVALID_OPCODE);

                // TOKEN_OWNER_2
                await expect(debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_2,
                    INDEX_0)).to.eventually.bignumber.equal(debtEntries[1].getTokenId());
                await expect(debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_2,
                    INDEX_1)).to.eventually.bignumber.equal(debtEntries[0].getTokenId());
                await expect(debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_2,
                    INDEX_2)).to.eventually.be.rejectedWith(INVALID_OPCODE);

                // TOKEN_OWNER_3
                await expect(debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_3,
                    INDEX_0)).to.eventually.bignumber.equal(debtEntries[2].getTokenId());
                await expect(debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_3,
                    INDEX_1)).to.eventually.be.rejectedWith(INVALID_OPCODE);
            });
        });

        describe("user transfers token he no longer owns", () => {
            it("should throw", async () => {
                await expect(debtToken.transfer
                    .sendTransactionAsync(TOKEN_OWNER_2, debtEntries[0].getTokenId(),
                        { from: TOKEN_OWNER_1 })).to.eventually.be
                        .rejectedWith(REVERT_ERROR);
            });
        });

        describe("user transfers token he owns to 0", () => {
            it("should throw", async () => {
                await expect(debtToken.transfer
                    .sendTransactionAsync(NULL_ADDRESS, debtEntries[0].getTokenId(),
                        { from: TOKEN_OWNER_1 })).to.eventually.be
                        .rejectedWith(REVERT_ERROR);
            });
        });

        describe("user transfers token he owns to himself", () => {
            let approvalLog: ABIDecoder.DecodedLog;
            let transferLog: ABIDecoder.DecodedLog;

            before(async () => {
                await mockRegistry.reset.sendTransactionAsync();

                await mockRegistry.mockGetBeneficiaryReturnValueFor
                    .sendTransactionAsync(debtEntries[0].getIssuanceHash(), TOKEN_OWNER_2);

                const txHash = await debtToken.transfer
                    .sendTransactionAsync(TOKEN_OWNER_2, debtEntries[0].getTokenId(),
                        { from: TOKEN_OWNER_2 });
                const res = await web3.eth.getTransactionReceipt(txHash);
                [approvalLog, transferLog] = ABIDecoder.decodeLogs(res.logs);
            });

            it("should NOT call registry.modifyBeneficiary", async () => {
                await expect(mockRegistry.wasModifyBeneficiaryCalledWith
                    .callAsync(debtEntries[0].getIssuanceHash(), TOKEN_OWNER_2))
                    .to.eventually.be.false;
            });

            it("should emit transfer log", async () => {
                const logExpected =
                    LogTransfer(debtToken.address, TOKEN_OWNER_2, TOKEN_OWNER_2, debtEntries[0].getTokenId());

                expect(transferLog).to.deep.equal(logExpected);
            });

            it("should maintain owners' token balances correctly", async () => {
                await expect(debtToken.balanceOf.callAsync(TOKEN_OWNER_1))
                    .to.eventually.bignumber.equal(0);
                await expect(debtToken.balanceOf.callAsync(TOKEN_OWNER_2))
                    .to.eventually.bignumber.equal(2);
                await expect(debtToken.balanceOf.callAsync(TOKEN_OWNER_3))
                    .to.eventually.bignumber.equal(1);
            });

            it("should not modify owners' iterable token lists", async () => {
                // TOKEN_OWNER_1
                await expect(debtToken.tokenOfOwnerByIndex
                    .callAsync(TOKEN_OWNER_1, INDEX_0))
                    .to.eventually.be.rejectedWith(INVALID_OPCODE);

                // TOKEN_OWNER_2
                await expect(debtToken.tokenOfOwnerByIndex
                    .callAsync(TOKEN_OWNER_2, INDEX_0))
                    .to.eventually.bignumber.equal(debtEntries[1].getTokenId());
                await expect(debtToken.tokenOfOwnerByIndex
                    .callAsync(TOKEN_OWNER_2, INDEX_1))
                    .to.eventually.bignumber.equal(debtEntries[0].getTokenId());
                await expect(debtToken.tokenOfOwnerByIndex
                    .callAsync(TOKEN_OWNER_2, INDEX_2))
                    .to.eventually.be.rejectedWith(INVALID_OPCODE);

                // TOKEN_OWNER_3
                await expect(debtToken.tokenOfOwnerByIndex
                    .callAsync(TOKEN_OWNER_3, INDEX_0))
                    .to.eventually.bignumber.equal(debtEntries[2].getTokenId());
                await expect(debtToken.tokenOfOwnerByIndex
                    .callAsync(TOKEN_OWNER_3, INDEX_1))
                    .to.eventually.be.rejectedWith(INVALID_OPCODE);
            });
        });

        describe("user transfers token with outstanding approval", () => {
            let approvalLog: ABIDecoder.DecodedLog;
            let transferLog: ABIDecoder.DecodedLog;

            before(async () => {
                await mockRegistry.mockGetBeneficiaryReturnValueFor
                    .sendTransactionAsync(debtEntries[2].getIssuanceHash(), TOKEN_OWNER_3);

                await debtToken.approve.sendTransactionAsync(
                    TOKEN_OWNER_1, debtEntries[2].getTokenId(), { from: TOKEN_OWNER_3 });
                const txHash = await debtToken.transfer
                    .sendTransactionAsync(TOKEN_OWNER_1, debtEntries[2].getTokenId(),
                        { from: TOKEN_OWNER_3 });
                const res = await web3.eth.getTransactionReceipt(txHash);

                [approvalLog, transferLog] = ABIDecoder.decodeLogs(res.logs);
            });

            it("should call modifyBeneficiary on debt registry", async () => {
                await expect(mockRegistry.wasModifyBeneficiaryCalledWith
                    .callAsync(debtEntries[2].getIssuanceHash(), TOKEN_OWNER_1))
                    .to.eventually.be.true;
            })

            it("should emit approval clear log", () => {
                const logExpected =
                    LogApproval(debtToken.address, TOKEN_OWNER_3, NULL_ADDRESS, debtEntries[2].getTokenId());

                expect(approvalLog).to.deep.equal(logExpected);
            });

            it("should emit transfer log", () => {
                const logExpected =
                    LogTransfer(debtToken.address, TOKEN_OWNER_3, TOKEN_OWNER_1, debtEntries[2].getTokenId());

                expect(transferLog).to.deep.equal(logExpected);
            });

            it("should update owners' token balances correctly", async () => {
                await expect(debtToken.balanceOf.callAsync(TOKEN_OWNER_1))
                    .to.eventually.bignumber.equal(1);
                await expect(debtToken.balanceOf.callAsync(TOKEN_OWNER_2))
                    .to.eventually.bignumber.equal(2);
                await expect(debtToken.balanceOf.callAsync(TOKEN_OWNER_3))
                    .to.eventually.bignumber.equal(0);
            });

            it("should update owners' iterable token lists", async () => {
                // TOKEN_OWNER_1
                await expect(debtToken.tokenOfOwnerByIndex
                    .callAsync(TOKEN_OWNER_1, INDEX_0))
                    .to.eventually.bignumber.equal(debtEntries[2].getTokenId());
                await expect(debtToken.tokenOfOwnerByIndex
                    .callAsync(TOKEN_OWNER_1, INDEX_1))
                    .to.eventually.be.rejectedWith(INVALID_OPCODE);

                // TOKEN_OWNER_2
                await expect(debtToken.tokenOfOwnerByIndex
                    .callAsync(TOKEN_OWNER_2, INDEX_0))
                    .to.eventually.bignumber.equal(debtEntries[1].getTokenId());
                await expect(debtToken.tokenOfOwnerByIndex
                    .callAsync(TOKEN_OWNER_2, INDEX_1))
                    .to.eventually.bignumber.equal(debtEntries[0].getTokenId());
                await expect(debtToken.tokenOfOwnerByIndex
                    .callAsync(TOKEN_OWNER_2, INDEX_2))
                    .to.eventually.be.rejectedWith(INVALID_OPCODE);

                // TOKEN_OWNER_3
                await expect(debtToken.tokenOfOwnerByIndex
                    .callAsync(TOKEN_OWNER_3, INDEX_0))
                    .to.eventually.be.rejectedWith(INVALID_OPCODE);
            });
        });
    });

    describe("#approve()", () => {
        before(resetAndInitState);

        describe("user approves transfer for token he doesn't own", () => {
            it("should throw", async () => {
                expect(debtToken.approve.sendTransactionAsync(
                    TOKEN_OWNER_2, debtEntries[0].getTokenId(), { from: TOKEN_OWNER_2 }))
                    .to.eventually.be.rejectedWith(REVERT_ERROR);
            });
        });

        describe("user approves transfer for nonexistent token", () => {
            it("should throw", async () => {
                expect(debtToken.approve.sendTransactionAsync(
                    TOKEN_OWNER_2, NONEXISTENT_TOKEN_ID, { from: TOKEN_OWNER_2 }))
                    .to.eventually.be.rejectedWith(REVERT_ERROR);
            });
        });

        describe("user approves himself for transferring token he owns", () => {
            it("should throw", async () => {
                expect(debtToken.approve.sendTransactionAsync(
                    TOKEN_OWNER_1, debtEntries[0].getTokenId(), { from: TOKEN_OWNER_1 }))
                    .to.eventually.be.rejectedWith(REVERT_ERROR);
            });
        });

        describe("user owns token", () => {
            describe("user clears unset approval", () => {
                let res: Web3.TransactionReceipt;

                before(async () => {
                    const txHash = await debtToken.approve.sendTransactionAsync(
                        NULL_ADDRESS, debtEntries[0].getTokenId(), { from: TOKEN_OWNER_1 });
                    res = await web3.eth.getTransactionReceipt(txHash);
                });

                it("should NOT emit approval event", async () => {
                    expect(res.logs.length).to.equal(0);
                });

                it("should maintain cleared approval", async () => {
                    await expect(debtToken.getApproved.callAsync(debtEntries[0].getTokenId()))
                        .to.eventually.equal(NULL_ADDRESS);
                });
            });

            describe("user sets new approval", () => {
                let res: Web3.TransactionReceipt;

                before(async () => {
                    const txHash = await debtToken.approve.sendTransactionAsync(TOKEN_OWNER_2,
                        debtEntries[0].getTokenId(), { from: TOKEN_OWNER_1 });

                    res = await web3.eth.getTransactionReceipt(txHash);
                });

                it("should return newly approved user as approved", async () => {
                    await expect(debtToken.getApproved.callAsync(debtEntries[0].getTokenId()))
                        .to.eventually.equal(TOKEN_OWNER_2);
                });

                it("should emit approval log", () => {
                    const [approvalLog] = ABIDecoder.decodeLogs(res.logs);
                    const logExpected =
                        LogApproval(debtToken.address, TOKEN_OWNER_1, TOKEN_OWNER_2, debtEntries[0].getTokenId());

                    expect(approvalLog).to.deep.equal(logExpected);
                });
            });

            describe("user changes token approval", () => {
                let res: Web3.TransactionReceipt;

                before(async () => {
                    const txHash = await debtToken.approve.sendTransactionAsync(TOKEN_OWNER_3,
                        debtEntries[0].getTokenId(), { from: TOKEN_OWNER_1 });
                    res = await web3.eth.getTransactionReceipt(txHash);
                });

                it("should return newly approved user as approved", async () => {
                    await expect(debtToken.getApproved.callAsync(debtEntries[0].getTokenId()))
                        .to.eventually.equal(TOKEN_OWNER_3);
                });

                it("should emit approval log", () => {
                    const [approvalLog] = ABIDecoder.decodeLogs(res.logs);
                    const logExpected =
                        LogApproval(debtToken.address, TOKEN_OWNER_1, TOKEN_OWNER_3, debtEntries[0].getTokenId());

                    expect(approvalLog).to.deep.equal(logExpected);
                });
            });

            describe("user reaffirms approval", () => {
                let res: Web3.TransactionReceipt;

                before(async () => {
                    const txHash = await debtToken.approve.sendTransactionAsync(TOKEN_OWNER_3,
                        debtEntries[0].getTokenId(), { from: TOKEN_OWNER_1 });
                    res = await web3.eth.getTransactionReceipt(txHash);
                });

                it("should return same approved user as approved", async () => {
                    await expect(debtToken.getApproved.callAsync(debtEntries[0].getTokenId()))
                        .to.eventually.equal(TOKEN_OWNER_3);
                });

                it("should emit approval log", () => {
                    const [approvalLog] = ABIDecoder.decodeLogs(res.logs);
                    const logExpected =
                        LogApproval(debtToken.address, TOKEN_OWNER_1, TOKEN_OWNER_3, debtEntries[0].getTokenId());

                    expect(approvalLog).to.deep.equal(logExpected);
                });
            });

            describe("user clears set approval", () => {
                let res: Web3.TransactionReceipt;

                before(async () => {
                    const txHash = await debtToken.approve.sendTransactionAsync(NULL_ADDRESS,
                        debtEntries[0].getTokenId(), { from: TOKEN_OWNER_1 });
                    res = await web3.eth.getTransactionReceipt(txHash);
                });

                it("should return newly approved user as approved", async () => {
                    await expect(debtToken.getApproved.callAsync(debtEntries[0].getTokenId()))
                        .to.eventually.equal(NULL_ADDRESS);
                });

                it("should emit approval log", () => {
                    const [approvalLog] = ABIDecoder.decodeLogs(res.logs);
                    const logExpected =
                        LogApproval(debtToken.address, TOKEN_OWNER_1, NULL_ADDRESS, debtEntries[0].getTokenId());

                    expect(approvalLog).to.deep.equal(logExpected);
                });
            });
        });
    });

    describe("#transferFrom()", () => {
        before(resetAndInitState);

        describe("user transfers token from owner w/o approval...", () => {
            it("should throw", async () => {
                await expect(debtToken.transferFrom.sendTransactionAsync(TOKEN_OWNER_2, TOKEN_OWNER_3,
                    debtEntries[1].getTokenId(), { from: TOKEN_OWNER_3 }))
                    .to.eventually.be.rejectedWith(REVERT_ERROR);
            });
        });

        describe("user transfers non-existent token", () => {
            it("should throw", async () => {
                await expect(debtToken.transferFrom.sendTransactionAsync(TOKEN_OWNER_2, TOKEN_OWNER_3,
                    NONEXISTENT_TOKEN_ID, { from: TOKEN_OWNER_3 }))
                    .to.eventually.be.rejectedWith(REVERT_ERROR);
            });
        });

        describe("user transfers token from owner w/ approval...", () => {
            before(async () => {
                await debtToken.approve.sendTransactionAsync(TOKEN_OWNER_2, debtEntries[0].getTokenId(),
                    { from: TOKEN_OWNER_1 });
            });

            describe("...from himself to himself", () => {
                it("should throw", async () => {
                    await expect(debtToken.transferFrom.sendTransactionAsync(TOKEN_OWNER_2, TOKEN_OWNER_2,
                        debtEntries[1].getTokenId(), { from: TOKEN_OWNER_2 }))
                        .to.eventually.be.rejectedWith(REVERT_ERROR);
                });
            });

            describe("...to null address", () => {
                it("should throw", async () => {
                    await expect(debtToken.transferFrom.sendTransactionAsync(TOKEN_OWNER_1, NULL_ADDRESS,
                        debtEntries[0].getTokenId(), { from: TOKEN_OWNER_2 }))
                        .to.eventually.be.rejectedWith(REVERT_ERROR);
                });
            });

            describe("...from other owner to himself", () => {
                let res: Web3.TransactionReceipt;
                let approvalLog: ABIDecoder.DecodedLog;
                let transferLog: ABIDecoder.DecodedLog;
                let modifyBeneficiaryLog: ABIDecoder.DecodedLog;

                before(async () => {
                    const txHash = await debtToken.transferFrom.sendTransactionAsync(TOKEN_OWNER_1, TOKEN_OWNER_2,
                        debtEntries[0].getTokenId(), { from: TOKEN_OWNER_2 });
                    res = await web3.eth.getTransactionReceipt(txHash);

                    [approvalLog, transferLog] = ABIDecoder.decodeLogs(res.logs);
                });

                it("should call registry.modifyBeneficiary with his own address", async () => {
                    await expect(mockRegistry.wasModifyBeneficiaryCalledWith
                        .callAsync(debtEntries[0].getIssuanceHash(), TOKEN_OWNER_2))
                        .to.eventually.be.true;
                });

                it("should emit approval clear log", () => {
                    const logExpected =
                        LogApproval(debtToken.address, TOKEN_OWNER_1, NULL_ADDRESS, debtEntries[0].getTokenId());

                    expect(approvalLog).to.deep.equal(logExpected);
                });

                it("should emit transfer log", () => {
                    const logExpected =
                        LogTransfer(debtToken.address, TOKEN_OWNER_1, TOKEN_OWNER_2, debtEntries[0].getTokenId());

                    expect(transferLog).to.deep.equal(logExpected);
                });

                it("should update owners' token balances correctly", async () => {
                    await expect(debtToken.balanceOf.callAsync(TOKEN_OWNER_1))
                        .to.eventually.bignumber.equal(0);
                    await expect(debtToken.balanceOf.callAsync(TOKEN_OWNER_2))
                        .to.eventually.bignumber.equal(2);
                    await expect(debtToken.balanceOf.callAsync(TOKEN_OWNER_3))
                        .to.eventually.bignumber.equal(1);
                });

                it("should update owners' iterable token lists", async () => {
                    // TOKEN_OWNER_1
                    await expect(debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_1, INDEX_0))
                        .to.eventually.be.rejectedWith(INVALID_OPCODE);

                    // TOKEN_OWNER_2
                    await expect(debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_2, INDEX_0))
                        .to.eventually.bignumber.equal(debtEntries[1].getTokenId());
                    await expect(debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_2, INDEX_1))
                        .to.eventually.bignumber.equal(debtEntries[0].getTokenId());
                    await expect(debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_2, INDEX_2))
                        .to.eventually.be.rejectedWith(INVALID_OPCODE);

                    // TOKEN_OWNER_3
                    await expect(debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_3, INDEX_0))
                        .to.eventually.bignumber.equal(debtEntries[2].getTokenId());
                    await expect(debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_3, INDEX_1))
                        .to.eventually.be.rejectedWith(INVALID_OPCODE);
                });
            });
        });
    });

    describe("#brokerZeroExOrder", () => {
        let zeroExOrder: ZeroEx.SignedOrder;

        const brokerZeroExOrder = (tokenId: BigNumber, order: ZeroEx.SignedOrder, options: TxData) => {
            return debtToken.brokerZeroExOrder.sendTransactionAsync(
                tokenId,
                zeroExOrder.exchangeContractAddress,
                [
                    order.maker,
                    order.taker,
                    order.makerTokenAddress,
                    order.takerTokenAddress,
                    order.feeRecipient,
                ],
                [
                    order.makerTokenAmount,
                    order.takerTokenAmount,
                    order.makerFee,
                    order.takerFee,
                    order.expirationUnixTimestampSec,
                    order.salt,
                ],
                order.ecSignature.v,
                order.ecSignature.r,
                order.ecSignature.s,
                options
            );
        }

        before(async () => {
            await resetAndInitState()

            // We construct an arbitrary zero ex order, given that we are in a unit
            // test conditions and are dealing with a mocked zero ex contract.
            // The only fields whose values triggers some sort of logic in the unit
            // tests are commented with context below
            zeroExOrder = {
                // Used to vary which mock exchange contract we use
                exchangeContractAddress: mockExchange.address,
                maker: TOKEN_OWNER_1,
                taker: NULL_ADDRESS,
                // Used to vary which mock ERC20 token contract we use
                makerTokenAddress: mockToken.address,
                // Used to vary whether order correctly calls transferFrom on brokered token
                takerTokenAddress: debtToken.address,
                feeRecipient: NULL_ADDRESS,
                makerTokenAmount: Units.ether(1),
                takerTokenAmount: new BigNumber(1),
                makerFee: Units.ether(0.001),
                takerFee: Units.ether(0.001),
                expirationUnixTimestampSec: new BigNumber(Date.now()),
                salt: new BigNumber(0),
                ecSignature: {
                    v: 27,
                    r: NULL_ADDRESS,
                    s: NULL_ADDRESS
                }
            }
        });

        describe("user calls brokerZeroExOrder for token he doesn't own", () => {
            it("should throw", async () => {
                await expect(brokerZeroExOrder(debtEntries[0].getTokenId(), zeroExOrder,
                    { from: AUTHORIZED_BROKERAGE_AGENT }))
                    .to.eventually.be.rejectedWith(REVERT_ERROR);
            });
        });

        describe("user calls brokerZeroExOrder for token he is approved for", () => {
            before(async () => {
                await debtToken.approve.sendTransactionAsync(
                    AUTHORIZED_BROKERAGE_AGENT, debtEntries[0].getTokenId(),
                    { from: TOKEN_OWNER_1 });
            });

            it("should throw", async () => {
                await expect(brokerZeroExOrder(debtEntries[0].getTokenId(), zeroExOrder,
                    { from: AUTHORIZED_BROKERAGE_AGENT }))
                    .to.eventually.be.rejectedWith(REVERT_ERROR);
            })
        });

        describe("user calls brokerZeroExOrder for token he owns", () => {
            describe("...when user is not authorized token broker", () => {
                before(async () => {
                    await debtToken.transfer.sendTransactionAsync(UNAUTHORIZED_BROKERAGE_AGENT,
                        debtEntries[0].getTokenId(), { from: TOKEN_OWNER_1 });
                });

                it("should throw", async () => {
                    await expect(brokerZeroExOrder(debtEntries[0].getTokenId(), zeroExOrder,
                        { from: UNAUTHORIZED_BROKERAGE_AGENT }))
                        .to.eventually.be.rejectedWith(REVERT_ERROR);
                });
            });

            describe("...when user is authorized token broker", () => {
                before(async () => {
                    await debtToken.transfer.sendTransactionAsync(AUTHORIZED_BROKERAGE_AGENT,
                        debtEntries[0].getTokenId(), { from: UNAUTHORIZED_BROKERAGE_AGENT });
                });

                describe("and no token is already being brokered", () => {
                    before(async () => {
                        await brokerZeroExOrder(debtEntries[0].getTokenId(), zeroExOrder,
                            { from: AUTHORIZED_BROKERAGE_AGENT });
                    });

                    it("should call fillOrder on the 0x contract with supplied order", async () => {
                        await expect(mockExchange.wasFillOrderCalledWith.callAsync(
                            [
                                zeroExOrder.maker,
                                zeroExOrder.taker,
                                zeroExOrder.makerTokenAddress,
                                zeroExOrder.takerTokenAddress,
                                zeroExOrder.feeRecipient,
                            ],
                            [
                                zeroExOrder.makerTokenAmount,
                                zeroExOrder.takerTokenAmount,
                                zeroExOrder.makerFee,
                                zeroExOrder.takerFee,
                                zeroExOrder.expirationUnixTimestampSec,
                                zeroExOrder.salt,
                            ],
                            new BigNumber(1),
                            true,
                            zeroExOrder.ecSignature.v,
                            zeroExOrder.ecSignature.r,
                            zeroExOrder.ecSignature.s
                        )).to.eventually.be.true;
                    });

                    it("should modify beneficiary on registry to order maker", async () => {
                        await expect(mockRegistry.wasModifyBeneficiaryCalledWith
                            .callAsync(debtEntries[0].getIssuanceHash(), zeroExOrder.maker))
                            .to.eventually.be.true;
                    });

                    it("should call 'transfer' on maker token for specified amount to message sender", async () => {
                        await expect(mockToken.wasTransferCalledWith
                            .callAsync(AUTHORIZED_BROKERAGE_AGENT, zeroExOrder.makerTokenAmount))
                            .to.eventually.be.true;
                    });

                    describe("...and brokered token is never transfered away by 0x exchange contract", () => {
                        before(async () => {
                            await debtToken.transfer.sendTransactionAsync(AUTHORIZED_BROKERAGE_AGENT,
                                debtEntries[1].getTokenId(), { from: TOKEN_OWNER_2 });
                        });

                        it("should throw", async () => {
                            const maliciousZeroExOrder = _.clone(zeroExOrder);
                            maliciousZeroExOrder.takerTokenAddress = mockToken.address;

                            await expect(brokerZeroExOrder(debtEntries[1].getTokenId(), maliciousZeroExOrder,
                                { from: AUTHORIZED_BROKERAGE_AGENT }))
                                .to.eventually.be.rejectedWith(INVALID_OPCODE);
                        });
                    });

                    // TODO: Add test for only trading with permissioned zero ex exchange
                });
            });
        });
    })
});
