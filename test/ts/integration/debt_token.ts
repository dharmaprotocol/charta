// External Libraries
import * as ABIDecoder from "abi-decoder";
import { BigNumber } from "bignumber.js";
import * as chai from "chai";
import * as _ from "lodash";
import * as Web3 from "web3";

// Test Utils
import * as Units from "../test_utils/units";

import { DebtRegistryContract } from "../../../types/generated/debt_registry";
import { DebtTokenContract } from "../../../types/generated/debt_token";

import { Address } from "../../../types/common";
import { DebtRegistryEntry } from "../../../types/registry/entry";
import { LogInsertEntry, LogModifyEntryBeneficiary } from "../logs/debt_registry";
import { LogApproval, LogTransfer } from "../logs/debt_token";
import { BigNumberSetup } from "../test_utils/bignumber_setup";
import ChaiSetup from "../test_utils/chai_setup";
import { REVERT_ERROR } from "../test_utils/constants";

// Configure BigNumber exponentiation
BigNumberSetup.configure();

// Set up Chai
ChaiSetup.configure();
const expect = chai.expect;

const debtRegistryContract = artifacts.require("DebtRegistry");
const debtTokenContract = artifacts.require("DebtToken");
const repaymentRouterContract = artifacts.require("RepaymentRouter");

contract("Debt Token (Integration Tests)", (ACCOUNTS) => {
    let debtRegistry: DebtRegistryContract;
    let debtToken: DebtTokenContract;

    let debtEntries: DebtRegistryEntry[];

    const NFT_NAME = "DebtToken";
    const NFT_SYMBOL = "DDT";

    const CONTRACT_OWNER = ACCOUNTS[0];
    const NON_CONTRACT_OWNER = ACCOUNTS[1];
    const AUTHORIZED_MINT_AGENT = ACCOUNTS[2];
    const UNAUTHORIZED_MINT_AGENT = ACCOUNTS[3];

    const TOKEN_OWNER_1 = ACCOUNTS[4];
    const TOKEN_OWNER_2 = ACCOUNTS[5];
    const TOKEN_OWNER_3 = ACCOUNTS[6];
    const TOKEN_OWNERS = [TOKEN_OWNER_1, TOKEN_OWNER_2, TOKEN_OWNER_3];

    const UNDERWRITER_1 = ACCOUNTS[7];
    const UNDERWRITER_2 = ACCOUNTS[8];
    const UNDERWRITER_3 = ACCOUNTS[9];
    const UNDERWRITERS = [UNDERWRITER_1, UNDERWRITER_2, UNDERWRITER_3];

    const BROKER = ACCOUNTS[10];
    const DEBTOR = ACCOUNTS[11];

    const INDEX_0 = new BigNumber(0);
    const INDEX_1 = new BigNumber(1);
    const INDEX_2 = new BigNumber(2);

    const NONEXISTENT_TOKEN_ID = new BigNumber(13);
    const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";

    const ARBITRARY_TERMS_CONTRACT_PARAMS = [
        web3.sha3("#1: arbitrary terms contract param string"),
        web3.sha3("#2: arbitrary terms contract param string"),
        web3.sha3("#3: arbitrary terms contract param string"),
    ];

    const TX_DEFAULTS = { from: CONTRACT_OWNER, gas: 4000000 };

    const resetContracts = async () => {
        const debtRegistryTruffle = await debtRegistryContract.new({ from: CONTRACT_OWNER });
        const debtTokenTruffle = await debtTokenContract.new(debtRegistryTruffle.address, {
            from: CONTRACT_OWNER,
        });

        // The typings we use ingest vanilla Web3 contracts, so we convert the
        // contract instance deployed by truffle into a Web3 contract instance
        const debtRegistryWeb3Contract = web3.eth
            .contract(debtRegistryTruffle.abi)
            .at(debtRegistryTruffle.address);
        const debtTokenWeb3Contract = web3.eth
            .contract(debtTokenTruffle.abi)
            .at(debtTokenTruffle.address);

        debtRegistry = new DebtRegistryContract(debtRegistryWeb3Contract, TX_DEFAULTS);
        debtToken = new DebtTokenContract(debtTokenWeb3Contract, TX_DEFAULTS);

        await debtRegistry.addAuthorizedInsertAgent.sendTransactionAsync(debtToken.address, {
            from: CONTRACT_OWNER,
        });
        await debtRegistry.addAuthorizedEditAgent.sendTransactionAsync(debtToken.address, {
            from: CONTRACT_OWNER,
        });

        const repaymentRouterContractInstance = await repaymentRouterContract.deployed();

        debtEntries = _.map(TOKEN_OWNERS, (tokenOwner: Address, i: number) => {
            return new DebtRegistryEntry({
                beneficiary: tokenOwner,
                debtor: DEBTOR,
                termsContract: debtRegistry.address,
                termsContractParameters: ARBITRARY_TERMS_CONTRACT_PARAMS[i],
                underwriter: UNDERWRITERS[i],
                underwriterRiskRating: Units.underwriterRiskRatingFixedPoint(3.4),
                version: repaymentRouterContractInstance.address,
            });
        });

        // Initialize ABI Decoders for deciphering log receipts
        ABIDecoder.addABI(debtRegistryContract.abi);
        ABIDecoder.addABI(debtTokenContract.abi);
    };

    const initState = async () => {
        await debtToken.addAuthorizedMintAgent.sendTransactionAsync(AUTHORIZED_MINT_AGENT, {
            from: CONTRACT_OWNER,
        });

        const registryInsertPromises = _.map(debtEntries, (entry: DebtRegistryEntry, i: number) => {
            return debtToken.create.sendTransactionAsync(
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
        });

        await Promise.all(registryInsertPromises);
    };

    const resetAndInitState = async () => {
        await resetContracts();
        await initState();
    };

    before(resetContracts);

    after(() => {
        // Tear down ABIDecoder before next set of tests
        ABIDecoder.removeABI(debtRegistryContract.abi);
        ABIDecoder.removeABI(debtTokenContract.abi);
    });

    describe("Permissions", () => {
        it("should initialize with no mint authorizations", async () => {
            await expect(debtToken.getAuthorizedMintAgents.callAsync()).to.eventually.deep.equal(
                [],
            );
        });

        describe("non-owner adds mint authorization", () => {
            it("should throw", async () => {
                await expect(
                    debtToken.addAuthorizedMintAgent.sendTransactionAsync(UNAUTHORIZED_MINT_AGENT, {
                        from: NON_CONTRACT_OWNER,
                    }),
                ).to.eventually.be.rejectedWith(REVERT_ERROR);
            });
        });

        describe("owner adds mint authorization", () => {
            before(async () => {
                await debtToken.addAuthorizedMintAgent.sendTransactionAsync(AUTHORIZED_MINT_AGENT, {
                    from: CONTRACT_OWNER,
                });
            });

            it("should return agent as authorized", async () => {
                await expect(
                    debtToken.getAuthorizedMintAgents.callAsync(),
                ).to.eventually.deep.equal([AUTHORIZED_MINT_AGENT]);
            });
        });
    });

    describe("Minting", () => {
        describe("unauthorized agent tries to mint debt token", () => {
            it("should throw", async () => {
                await expect(
                    debtToken.create.sendTransactionAsync(
                        debtEntries[0].getVersion(),
                        debtEntries[0].getBeneficiary(),
                        debtEntries[0].getDebtor(),
                        debtEntries[0].getUnderwriter(),
                        debtEntries[0].getUnderwriterRiskRating(),
                        debtEntries[0].getTermsContract(),
                        debtEntries[0].getTermsContractParameters(),
                        debtEntries[0].getSalt(),
                        { from: UNAUTHORIZED_MINT_AGENT },
                    ),
                ).to.eventually.be.rejectedWith(REVERT_ERROR);
            });
        });

        describe("authorized agent mints debt token", () => {
            describe("...when debt token is paused", () => {
                before(async () => {
                    await debtToken.pause.sendTransactionAsync({ from: CONTRACT_OWNER });
                });

                after(async () => {
                    await debtToken.unpause.sendTransactionAsync({ from: CONTRACT_OWNER });
                });

                it("should throw", async () => {
                    await expect(
                        debtToken.create.sendTransactionAsync(
                            debtEntries[0].getVersion(),
                            debtEntries[0].getBeneficiary(),
                            debtEntries[0].getDebtor(),
                            debtEntries[0].getUnderwriter(),
                            debtEntries[0].getUnderwriterRiskRating(),
                            debtEntries[0].getTermsContract(),
                            debtEntries[0].getTermsContractParameters(),
                            debtEntries[0].getSalt(),
                            { from: AUTHORIZED_MINT_AGENT },
                        ),
                    ).to.eventually.be.rejectedWith(REVERT_ERROR);
                });
            });

            describe("...when debt token not paused", () => {
                let insertRegistryLog: ABIDecoder.DecodedLog;
                let transferLog: ABIDecoder.DecodedLog;

                before(async () => {
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
                    [insertRegistryLog, transferLog] = ABIDecoder.decodeLogs(res.logs);
                });

                it("should emit registry insert log event", () => {
                    const logExpected = LogInsertEntry(debtRegistry.address, debtEntries[0]);

                    expect(insertRegistryLog).to.deep.equal(logExpected);
                });

                it("should emit transfer log event", () => {
                    const logExpected = LogTransfer(
                        debtToken.address,
                        NULL_ADDRESS,
                        debtEntries[0].getBeneficiary(),
                        debtEntries[0].getTokenId(),
                    );

                    expect(transferLog).to.deep.equal(logExpected);
                });

                it("should increase total supply by 1", async () => {
                    await expect(debtToken.totalSupply.callAsync()).to.eventually.bignumber.equal(
                        1,
                    );
                });

                it("should assign new token to creditor", async () => {
                    await expect(
                        debtToken.ownerOf.callAsync(debtEntries[0].getTokenId()),
                    ).to.eventually.bignumber.equal(debtEntries[0].getBeneficiary());
                });

                it("should update owner's token list", async () => {
                    await expect(
                        debtToken.tokenOfOwnerByIndex.callAsync(
                            debtEntries[0].getBeneficiary(),
                            INDEX_0,
                        ),
                    ).to.eventually.bignumber.equal(debtEntries[0].getTokenId());
                    await expect(
                        debtToken.tokenOfOwnerByIndex.callAsync(
                            debtEntries[0].getBeneficiary(),
                            INDEX_1,
                        ),
                    ).to.eventually.be.rejectedWith(REVERT_ERROR);
                });
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

            it("should emit transfer log event", () => {
                const [insertRegistryLog, transferLog] = ABIDecoder.decodeLogs(res.logs);
                const logExpected = LogTransfer(
                    debtToken.address,
                    NULL_ADDRESS,
                    secondDebt.getBeneficiary(),
                    secondDebt.getTokenId(),
                );

                expect(transferLog).to.deep.equal(logExpected);
            });

            it("should increase total supply by 1", async () => {
                await expect(debtToken.totalSupply.callAsync()).to.eventually.bignumber.equal(2);
            });

            it("should assign new token to creditor", async () => {
                await expect(
                    debtToken.ownerOf.callAsync(secondDebt.getTokenId()),
                ).to.eventually.bignumber.equal(secondDebt.getBeneficiary());
            });

            it("should update owner's token list", async () => {
                await expect(
                    debtToken.tokenOfOwnerByIndex.callAsync(secondDebt.getBeneficiary(), INDEX_0),
                ).to.eventually.bignumber.equal(debtEntries[0].getTokenId());
                await expect(
                    debtToken.tokenOfOwnerByIndex.callAsync(secondDebt.getBeneficiary(), INDEX_1),
                ).to.eventually.bignumber.equal(secondDebt.getTokenId());
                await expect(
                    debtToken.tokenOfOwnerByIndex.callAsync(secondDebt.getBeneficiary(), INDEX_2),
                ).to.eventually.be.rejectedWith(REVERT_ERROR);
            });
        });

        describe("authorized agent mints debt token that already exists", () => {
            it("should throw", async () => {
                await expect(
                    debtToken.create.sendTransactionAsync(
                        debtEntries[0].getVersion(),
                        debtEntries[0].getBeneficiary(),
                        debtEntries[0].getDebtor(),
                        debtEntries[0].getUnderwriter(),
                        debtEntries[0].getUnderwriterRiskRating(),
                        debtEntries[0].getTermsContract(),
                        debtEntries[0].getTermsContractParameters(),
                        debtEntries[0].getSalt(),
                        { from: AUTHORIZED_MINT_AGENT },
                    ),
                ).to.eventually.be.rejectedWith(REVERT_ERROR);
            });
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
            await expect(
                debtToken.balanceOf.callAsync(TOKEN_OWNER_1),
            ).to.eventually.bignumber.equal(1);
            await expect(
                debtToken.balanceOf.callAsync(TOKEN_OWNER_2),
            ).to.eventually.bignumber.equal(1);
            await expect(
                debtToken.balanceOf.callAsync(TOKEN_OWNER_3),
            ).to.eventually.bignumber.equal(1);
        });
    });

    describe("#tokenOfOwnerByIndex()", async () => {
        before(resetAndInitState);

        it("should return current token at index 0 for each user", async () => {
            await expect(
                debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_1, INDEX_0),
            ).to.eventually.bignumber.equal(debtEntries[0].getTokenId());
            await expect(
                debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_2, INDEX_0),
            ).to.eventually.bignumber.equal(debtEntries[1].getTokenId());
            await expect(
                debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_3, INDEX_0),
            ).to.eventually.bignumber.equal(debtEntries[2].getTokenId());
        });

        it("should throw if called at index > balanceOf.callAsync(owner)", async () => {
            await expect(
                debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_1, INDEX_1),
            ).to.eventually.be.rejectedWith(REVERT_ERROR);
            await expect(
                debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_2, INDEX_1),
            ).to.eventually.be.rejectedWith(REVERT_ERROR);
            await expect(
                debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_3, INDEX_1),
            ).to.eventually.be.rejectedWith(REVERT_ERROR);
        });
    });

    describe("#transfer()", async () => {
        before(resetAndInitState);

        describe("user transfers token he doesn't own", async () => {
            it("should throw", async () => {
                await expect(
                    debtToken.transfer.sendTransactionAsync(
                        TOKEN_OWNER_1,
                        debtEntries[1].getTokenId(),
                        {
                            from: TOKEN_OWNER_1,
                        },
                    ),
                ).to.eventually.be.rejectedWith(REVERT_ERROR);
            });
        });

        describe("user transfers token that doesn't exist", async () => {
            it("should throw", async () => {
                await expect(
                    debtToken.transfer.sendTransactionAsync(TOKEN_OWNER_1, NONEXISTENT_TOKEN_ID, {
                        from: TOKEN_OWNER_1,
                    }),
                ).to.eventually.be.rejectedWith(REVERT_ERROR);
            });
        });

        describe("user transfers token he owns", async () => {
            describe("...when debt token is paused", () => {
                before(async () => {
                    await debtToken.pause.sendTransactionAsync({ from: CONTRACT_OWNER });
                });

                after(async () => {
                    await debtToken.unpause.sendTransactionAsync({ from: CONTRACT_OWNER });
                });

                it("should throw", async () => {
                    await expect(
                        debtToken.transfer.sendTransactionAsync(
                            TOKEN_OWNER_2,
                            debtEntries[0].getTokenId(),
                            {
                                from: TOKEN_OWNER_1,
                            },
                        ),
                    ).to.eventually.be.rejectedWith(REVERT_ERROR);
                });
            });

            describe("...when debt token not paused", () => {
                let modifyBeneficiaryLog: ABIDecoder.DecodedLog;
                let transferLog: ABIDecoder.DecodedLog;

                before(async () => {
                    const txHash = await debtToken.transfer.sendTransactionAsync(
                        TOKEN_OWNER_2,
                        debtEntries[0].getTokenId(),
                        { from: TOKEN_OWNER_1 },
                    );
                    const res = await web3.eth.getTransactionReceipt(txHash);
                    [modifyBeneficiaryLog, transferLog] = ABIDecoder.decodeLogs(res.logs);
                });

                it("should emit registry modification log", async () => {
                    const logExpected = LogModifyEntryBeneficiary(
                        debtRegistry.address,
                        debtEntries[0].getIssuanceHash(),
                        TOKEN_OWNER_1,
                        TOKEN_OWNER_2,
                    );

                    expect(modifyBeneficiaryLog).to.deep.equal(logExpected);
                });

                it("should emit transfer log", async () => {
                    const logExpected = LogTransfer(
                        debtToken.address,
                        TOKEN_OWNER_1,
                        TOKEN_OWNER_2,
                        debtEntries[0].getTokenId(),
                    );

                    expect(transferLog).to.deep.equal(logExpected);
                });

                it("should belong to new owner", async () => {
                    await expect(
                        debtToken.ownerOf.callAsync(debtEntries[0].getTokenId()),
                    ).to.eventually.equal(TOKEN_OWNER_2);
                });

                it("should update owners' token balances correctly", async () => {
                    await expect(
                        debtToken.balanceOf.callAsync(TOKEN_OWNER_1),
                    ).to.eventually.bignumber.equal(0);
                    await expect(
                        debtToken.balanceOf.callAsync(TOKEN_OWNER_2),
                    ).to.eventually.bignumber.equal(2);
                    await expect(
                        debtToken.balanceOf.callAsync(TOKEN_OWNER_3),
                    ).to.eventually.bignumber.equal(1);
                });

                it("should update owners' iterable token lists", async () => {
                    // TOKEN_OWNER_1
                    await expect(
                        debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_1, INDEX_0),
                    ).to.eventually.be.rejectedWith(REVERT_ERROR);

                    // TOKEN_OWNER_2
                    await expect(
                        debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_2, INDEX_0),
                    ).to.eventually.bignumber.equal(debtEntries[1].getTokenId());
                    await expect(
                        debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_2, INDEX_1),
                    ).to.eventually.bignumber.equal(debtEntries[0].getTokenId());
                    await expect(
                        debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_2, INDEX_2),
                    ).to.eventually.be.rejectedWith(REVERT_ERROR);

                    // TOKEN_OWNER_3
                    await expect(
                        debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_3, INDEX_0),
                    ).to.eventually.bignumber.equal(debtEntries[2].getTokenId());
                    await expect(
                        debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_3, INDEX_1),
                    ).to.eventually.be.rejectedWith(REVERT_ERROR);
                });
            });
        });

        describe("user transfers token he no longer owns", () => {
            it("should throw", async () => {
                await expect(
                    debtToken.transfer.sendTransactionAsync(
                        TOKEN_OWNER_2,
                        debtEntries[0].getTokenId(),
                        {
                            from: TOKEN_OWNER_1,
                        },
                    ),
                ).to.eventually.be.rejectedWith(REVERT_ERROR);
            });
        });

        describe("user transfers token he owns to 0", () => {
            it("should throw", async () => {
                await expect(
                    debtToken.transfer.sendTransactionAsync(
                        NULL_ADDRESS,
                        debtEntries[0].getTokenId(),
                        {
                            from: TOKEN_OWNER_1,
                        },
                    ),
                ).to.eventually.be.rejectedWith(REVERT_ERROR);
            });
        });

        describe("user transfers token he owns to himself", () => {
            let transferLog: ABIDecoder.DecodedLog;

            before(async () => {
                const txHash = await debtToken.transfer.sendTransactionAsync(
                    TOKEN_OWNER_2,
                    debtEntries[0].getTokenId(),
                    { from: TOKEN_OWNER_2 },
                );
                const res = await web3.eth.getTransactionReceipt(txHash);
                [transferLog] = ABIDecoder.decodeLogs(res.logs);
            });

            it("should emit transfer log", async () => {
                const logExpected = LogTransfer(
                    debtToken.address,
                    TOKEN_OWNER_2,
                    TOKEN_OWNER_2,
                    debtEntries[0].getTokenId(),
                );

                expect(transferLog).to.deep.equal(logExpected);
            });

            it("should belong to same owner", async () => {
                await expect(
                    debtToken.ownerOf.callAsync(debtEntries[0].getTokenId()),
                ).to.eventually.equal(TOKEN_OWNER_2);
            });

            it("should maintain owners' token balances correctly", async () => {
                await expect(
                    debtToken.balanceOf.callAsync(TOKEN_OWNER_1),
                ).to.eventually.bignumber.equal(0);
                await expect(
                    debtToken.balanceOf.callAsync(TOKEN_OWNER_2),
                ).to.eventually.bignumber.equal(2);
                await expect(
                    debtToken.balanceOf.callAsync(TOKEN_OWNER_3),
                ).to.eventually.bignumber.equal(1);
            });

            it("should not modify owners' iterable token lists", async () => {
                // TOKEN_OWNER_1
                await expect(
                    debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_1, INDEX_0),
                ).to.eventually.be.rejectedWith(REVERT_ERROR);

                // TOKEN_OWNER_2
                await expect(
                    debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_2, INDEX_0),
                ).to.eventually.bignumber.equal(debtEntries[1].getTokenId());
                await expect(
                    debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_2, INDEX_1),
                ).to.eventually.bignumber.equal(debtEntries[0].getTokenId());
                await expect(
                    debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_2, INDEX_2),
                ).to.eventually.be.rejectedWith(REVERT_ERROR);

                // TOKEN_OWNER_3
                await expect(
                    debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_3, INDEX_0),
                ).to.eventually.bignumber.equal(debtEntries[2].getTokenId());
                await expect(
                    debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_3, INDEX_1),
                ).to.eventually.be.rejectedWith(REVERT_ERROR);
            });
        });

        describe("user transfers token with outstanding approval", () => {
            let modifyBeneficiaryLog: ABIDecoder.DecodedLog;
            let approvalLog: ABIDecoder.DecodedLog;
            let transferLog: ABIDecoder.DecodedLog;

            before(async () => {
                await debtToken.approve.sendTransactionAsync(
                    TOKEN_OWNER_1,
                    debtEntries[2].getTokenId(),
                    {
                        from: TOKEN_OWNER_3,
                    },
                );
                const txHash = await debtToken.transfer.sendTransactionAsync(
                    TOKEN_OWNER_1,
                    debtEntries[2].getTokenId(),
                    { from: TOKEN_OWNER_3 },
                );
                const res = await web3.eth.getTransactionReceipt(txHash);

                [modifyBeneficiaryLog, approvalLog, transferLog] = ABIDecoder.decodeLogs(res.logs);
            });

            it("should emit registry modification log", () => {
                const logExpected = LogModifyEntryBeneficiary(
                    debtRegistry.address,
                    debtEntries[2].getIssuanceHash(),
                    TOKEN_OWNER_3,
                    TOKEN_OWNER_1,
                );

                expect(modifyBeneficiaryLog).to.deep.equal(logExpected);
            });

            it("should emit approval clear log", () => {
                const logExpected = LogApproval(
                    debtToken.address,
                    TOKEN_OWNER_3,
                    NULL_ADDRESS,
                    debtEntries[2].getTokenId(),
                );

                expect(approvalLog).to.deep.equal(logExpected);
            });

            it("should emit transfer log", () => {
                const logExpected = LogTransfer(
                    debtToken.address,
                    TOKEN_OWNER_3,
                    TOKEN_OWNER_1,
                    debtEntries[2].getTokenId(),
                );

                expect(transferLog).to.deep.equal(logExpected);
            });

            it("should belong to new owner", async () => {
                await expect(
                    debtToken.ownerOf.callAsync(debtEntries[2].getTokenId()),
                ).to.eventually.equal(TOKEN_OWNER_1);
            });

            it("should update owners' token balances correctly", async () => {
                await expect(
                    debtToken.balanceOf.callAsync(TOKEN_OWNER_1),
                ).to.eventually.bignumber.equal(1);
                await expect(
                    debtToken.balanceOf.callAsync(TOKEN_OWNER_2),
                ).to.eventually.bignumber.equal(2);
                await expect(
                    debtToken.balanceOf.callAsync(TOKEN_OWNER_3),
                ).to.eventually.bignumber.equal(0);
            });

            it("should update owners' iterable token lists", async () => {
                // TOKEN_OWNER_1
                await expect(
                    debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_1, INDEX_0),
                ).to.eventually.bignumber.equal(debtEntries[2].getTokenId());
                await expect(
                    debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_1, INDEX_1),
                ).to.eventually.be.rejectedWith(REVERT_ERROR);

                // TOKEN_OWNER_2
                await expect(
                    debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_2, INDEX_0),
                ).to.eventually.bignumber.equal(debtEntries[1].getTokenId());
                await expect(
                    debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_2, INDEX_1),
                ).to.eventually.bignumber.equal(debtEntries[0].getTokenId());
                await expect(
                    debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_2, INDEX_2),
                ).to.eventually.be.rejectedWith(REVERT_ERROR);

                // TOKEN_OWNER_3
                await expect(
                    debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_3, INDEX_0),
                ).to.eventually.be.rejectedWith(REVERT_ERROR);
            });
        });
    });

    describe("#approve()", () => {
        before(resetAndInitState);

        describe("user approves transfer for token he doesn't own", () => {
            it("should throw", async () => {
                expect(
                    debtToken.approve.sendTransactionAsync(
                        TOKEN_OWNER_2,
                        debtEntries[0].getTokenId(),
                        {
                            from: TOKEN_OWNER_2,
                        },
                    ),
                ).to.eventually.be.rejectedWith(REVERT_ERROR);
            });
        });

        describe("user approves transfer for nonexistent token", () => {
            it("should throw", async () => {
                expect(
                    debtToken.approve.sendTransactionAsync(TOKEN_OWNER_2, NONEXISTENT_TOKEN_ID, {
                        from: TOKEN_OWNER_2,
                    }),
                ).to.eventually.be.rejectedWith(REVERT_ERROR);
            });
        });

        describe("user approves himself for transferring token he owns", () => {
            it("should throw", async () => {
                expect(
                    debtToken.approve.sendTransactionAsync(
                        TOKEN_OWNER_1,
                        debtEntries[0].getTokenId(),
                        {
                            from: TOKEN_OWNER_1,
                        },
                    ),
                ).to.eventually.be.rejectedWith(REVERT_ERROR);
            });
        });

        describe("user owns token", () => {
            describe("user clears unset approval", () => {
                let res: Web3.TransactionReceipt;

                before(async () => {
                    const txHash = await debtToken.approve.sendTransactionAsync(
                        NULL_ADDRESS,
                        debtEntries[0].getTokenId(),
                        { from: TOKEN_OWNER_1 },
                    );
                    res = await web3.eth.getTransactionReceipt(txHash);
                });

                it("should NOT emit approval event", async () => {
                    expect(res.logs.length).to.equal(0);
                });

                it("should maintain cleared approval", async () => {
                    await expect(
                        debtToken.getApproved.callAsync(debtEntries[0].getTokenId()),
                    ).to.eventually.equal(NULL_ADDRESS);
                });
            });

            describe("user sets new approval", () => {
                let res: Web3.TransactionReceipt;

                before(async () => {
                    const txHash = await debtToken.approve.sendTransactionAsync(
                        TOKEN_OWNER_2,
                        debtEntries[0].getTokenId(),
                        { from: TOKEN_OWNER_1 },
                    );

                    res = await web3.eth.getTransactionReceipt(txHash);
                });

                it("should return newly approved user as approved", async () => {
                    await expect(
                        debtToken.getApproved.callAsync(debtEntries[0].getTokenId()),
                    ).to.eventually.equal(TOKEN_OWNER_2);
                });

                it("should emit approval log", () => {
                    const [approvalLog] = ABIDecoder.decodeLogs(res.logs);
                    const logExpected = LogApproval(
                        debtToken.address,
                        TOKEN_OWNER_1,
                        TOKEN_OWNER_2,
                        debtEntries[0].getTokenId(),
                    );

                    expect(approvalLog).to.deep.equal(logExpected);
                });
            });

            describe("user changes token approval", () => {
                let res: Web3.TransactionReceipt;

                before(async () => {
                    const txHash = await debtToken.approve.sendTransactionAsync(
                        TOKEN_OWNER_3,
                        debtEntries[0].getTokenId(),
                        { from: TOKEN_OWNER_1 },
                    );
                    res = await web3.eth.getTransactionReceipt(txHash);
                });

                it("should return newly approved user as approved", async () => {
                    await expect(
                        debtToken.getApproved.callAsync(debtEntries[0].getTokenId()),
                    ).to.eventually.equal(TOKEN_OWNER_3);
                });

                it("should emit approval log", () => {
                    const [approvalLog] = ABIDecoder.decodeLogs(res.logs);
                    const logExpected = LogApproval(
                        debtToken.address,
                        TOKEN_OWNER_1,
                        TOKEN_OWNER_3,
                        debtEntries[0].getTokenId(),
                    );

                    expect(approvalLog).to.deep.equal(logExpected);
                });
            });

            describe("user reaffirms approval", () => {
                let res: Web3.TransactionReceipt;

                before(async () => {
                    const txHash = await debtToken.approve.sendTransactionAsync(
                        TOKEN_OWNER_3,
                        debtEntries[0].getTokenId(),
                        { from: TOKEN_OWNER_1 },
                    );
                    res = await web3.eth.getTransactionReceipt(txHash);
                });

                it("should return same approved user as approved", async () => {
                    await expect(
                        debtToken.getApproved.callAsync(debtEntries[0].getTokenId()),
                    ).to.eventually.equal(TOKEN_OWNER_3);
                });

                it("should emit approval log", () => {
                    const [approvalLog] = ABIDecoder.decodeLogs(res.logs);
                    const logExpected = LogApproval(
                        debtToken.address,
                        TOKEN_OWNER_1,
                        TOKEN_OWNER_3,
                        debtEntries[0].getTokenId(),
                    );

                    expect(approvalLog).to.deep.equal(logExpected);
                });
            });

            describe("user clears set approval", () => {
                let res: Web3.TransactionReceipt;

                before(async () => {
                    const txHash = await debtToken.approve.sendTransactionAsync(
                        NULL_ADDRESS,
                        debtEntries[0].getTokenId(),
                        { from: TOKEN_OWNER_1 },
                    );
                    res = await web3.eth.getTransactionReceipt(txHash);
                });

                it("should return newly approved user as approved", async () => {
                    await expect(
                        debtToken.getApproved.callAsync(debtEntries[0].getTokenId()),
                    ).to.eventually.equal(NULL_ADDRESS);
                });

                it("should emit approval log", () => {
                    const [approvalLog] = ABIDecoder.decodeLogs(res.logs);
                    const logExpected = LogApproval(
                        debtToken.address,
                        TOKEN_OWNER_1,
                        NULL_ADDRESS,
                        debtEntries[0].getTokenId(),
                    );

                    expect(approvalLog).to.deep.equal(logExpected);
                });
            });
        });
    });

    describe("#transferFrom()", () => {
        before(resetAndInitState);

        describe("user transfers token from owner w/o approval...", () => {
            it("should throw", async () => {
                await expect(
                    debtToken.transferFrom.sendTransactionAsync(
                        TOKEN_OWNER_2,
                        TOKEN_OWNER_3,
                        debtEntries[0].getTokenId(),
                        { from: TOKEN_OWNER_3 },
                    ),
                ).to.eventually.be.rejectedWith(REVERT_ERROR);
            });
        });

        describe("user transfers non-existent token", () => {
            it("should throw", async () => {
                await expect(
                    debtToken.transferFrom.sendTransactionAsync(
                        TOKEN_OWNER_2,
                        TOKEN_OWNER_3,
                        NONEXISTENT_TOKEN_ID,
                        { from: TOKEN_OWNER_3 },
                    ),
                ).to.eventually.be.rejectedWith(REVERT_ERROR);
            });
        });

        // describe("user transfers token from owner w/ approval...", () => {
        //     beforeEach(async () => {
        //         await debtToken.approve.sendTransactionAsync(
        //             TOKEN_OWNER_2,
        //             debtEntries[0].getTokenId(),
        //             {
        //                 from: TOKEN_OWNER_1,
        //             },
        //         );
        //     });
        //
        //     describe("...from himself to himself", () => {
        //         let logs: ABIDecoder.DecodedLog[];
        //
        //         before(async () => {
        //             await debtToken.approve.sendTransactionAsync(
        //                 TOKEN_OWNER_2,
        //                 debtEntries[0].getTokenId(),
        //                 { from: TOKEN_OWNER_1, }
        //             );
        //
        //             const txHash = await debtToken.transferFrom.sendTransactionAsync(
        //                 TOKEN_OWNER_1,
        //                 TOKEN_OWNER_1,
        //                 debtEntries[0].getTokenId(),
        //                 { from: TOKEN_OWNER_1 },
        //             );
        //
        //             const res = await web3.eth.getTransactionReceipt(txHash);
        //             logs = ABIDecoder.decodeLogs(res.logs);
        //         });
        //
        //         it("should not emit registry modification log", async () => {
        //             expect(logs.length).equal(2);
        //             // const logExpected = LogModifyEntryBeneficiary(
        //             //     debtRegistry.address,
        //             //     debtEntries[0].getIssuanceHash(),
        //             //     TOKEN_OWNER_1,
        //             //     TOKEN_OWNER_1,
        //             // );
        //             //
        //             // expect(modifyBeneficiaryLog).to.deep.equal(logExpected);
        //         });
        //     });
        //
        //     describe("...to null address", () => {
        //         it("should throw", async () => {
        //             await expect(
        //                 debtToken.transferFrom.sendTransactionAsync(
        //                     TOKEN_OWNER_1,
        //                     NULL_ADDRESS,
        //                     debtEntries[0].getTokenId(),
        //                     { from: TOKEN_OWNER_2 },
        //                 ),
        //             ).to.eventually.be.rejectedWith(REVERT_ERROR);
        //         });
        //     });
        //
        //     describe("...from other owner to himself", () => {
        //         describe("...when debt token is paused", () => {
        //             before(async () => {
        //                 await debtToken.pause.sendTransactionAsync({ from: CONTRACT_OWNER });
        //             });
        //
        //             after(async () => {
        //                 await debtToken.unpause.sendTransactionAsync({ from: CONTRACT_OWNER });
        //             });
        //
        //             it("should throw", async () => {
        //                 await expect(
        //                     debtToken.transferFrom.sendTransactionAsync(
        //                         TOKEN_OWNER_1,
        //                         TOKEN_OWNER_3,
        //                         debtEntries[0].getTokenId(),
        //                         { from: TOKEN_OWNER_2 },
        //                     ),
        //                 ).to.eventually.be.rejectedWith(REVERT_ERROR);
        //             });
        //         });
        //
        //         describe("...when debt token not paused", () => {
        //             let res: Web3.TransactionReceipt;
        //             let approvalLog: ABIDecoder.DecodedLog;
        //             let transferLog: ABIDecoder.DecodedLog;
        //             let modifyBeneficiaryLog: ABIDecoder.DecodedLog;
        //
        //             before(async () => {
        //                 const txHash = await debtToken.transferFrom.sendTransactionAsync(
        //                     TOKEN_OWNER_1,
        //                     TOKEN_OWNER_3,
        //                     debtEntries[0].getTokenId(),
        //                     { from: TOKEN_OWNER_2 },
        //                 );
        //                 res = await web3.eth.getTransactionReceipt(txHash);
        //
        //                 [modifyBeneficiaryLog, approvalLog, transferLog] = ABIDecoder.decodeLogs(
        //                     res.logs,
        //                 );
        //             });
        //
        //             it("should emit registry modification log", async () => {
        //                 const logExpected = LogModifyEntryBeneficiary(
        //                     debtRegistry.address,
        //                     debtEntries[0].getIssuanceHash(),
        //                     TOKEN_OWNER_1,
        //                     TOKEN_OWNER_3,
        //                 );
        //
        //                 expect(modifyBeneficiaryLog).to.deep.equal(logExpected);
        //             });
        //
        //             it("should emit approval clear log", () => {
        //                 const logExpected = LogApproval(
        //                     debtToken.address,
        //                     TOKEN_OWNER_1,
        //                     NULL_ADDRESS,
        //                     debtEntries[0].getTokenId(),
        //                 );
        //
        //                 expect(approvalLog).to.deep.equal(logExpected);
        //             });
        //
        //             it("should emit transfer log", () => {
        //                 const logExpected = LogTransfer(
        //                     debtToken.address,
        //                     TOKEN_OWNER_1,
        //                     TOKEN_OWNER_3,
        //                     debtEntries[0].getTokenId(),
        //                 );
        //
        //                 expect(transferLog).to.deep.equal(logExpected);
        //             });
        //
        //             it("should belong to new owner", async () => {
        //                 await expect(
        //                     debtToken.ownerOf.callAsync(debtEntries[0].getTokenId()),
        //                 ).to.eventually.equal(TOKEN_OWNER_3);
        //             });
        //
        //             it("should update owners' token balances correctly", async () => {
        //                 await expect(
        //                     debtToken.balanceOf.callAsync(TOKEN_OWNER_1),
        //                 ).to.eventually.bignumber.equal(0);
        //                 await expect(
        //                     debtToken.balanceOf.callAsync(TOKEN_OWNER_2),
        //                 ).to.eventually.bignumber.equal(1);
        //                 await expect(
        //                     debtToken.balanceOf.callAsync(TOKEN_OWNER_3),
        //                 ).to.eventually.bignumber.equal(2);
        //             });
        //
        //             it("should update owners' iterable token lists", async () => {
        //                 // TOKEN_OWNER_1
        //                 await expect(
        //                     debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_1, INDEX_0),
        //                 ).to.eventually.be.rejectedWith(REVERT_ERROR);
        //
        //                 // TOKEN_OWNER_2
        //                 await expect(
        //                     debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_2, INDEX_0),
        //                 ).to.eventually.bignumber.equal(debtEntries[1].getTokenId());
        //                 await expect(
        //                     debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_2, INDEX_1),
        //                 ).to.eventually.be.rejectedWith(REVERT_ERROR);
        //
        //                 // TOKEN_OWNER_3
        //                 await expect(
        //                     debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_3, INDEX_0),
        //                 ).to.eventually.bignumber.equal(debtEntries[2].getTokenId());
        //                 await expect(
        //                     debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_3, INDEX_1),
        //                 ).to.eventually.bignumber.equal(debtEntries[0].getTokenId());
        //                 await expect(
        //                     debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_3, INDEX_2),
        //                 ).to.eventually.be.rejectedWith(REVERT_ERROR);
        //             });
        //         });
        //     });
        // });
    });

    describe("#setTokenURI", () => {
        let tokenId: BigNumber;
        const tokenURI = "https://www.example.com/image.jpeg";

        before(async () => {
            tokenId = debtEntries[0].getTokenId();
        });

        describe("when called by an account that has permission", () => {
            before(async () => {
                await debtToken.addAuthorizedTokenURIAgent.sendTransactionAsync(NON_CONTRACT_OWNER);
            });

            it("sets the debt token's URI", async () => {
                await debtToken.setTokenURI.sendTransactionAsync(tokenId, tokenURI, {
                    from: NON_CONTRACT_OWNER,
                });

                expect(await debtToken.tokenURI.callAsync(tokenId)).to.equal(tokenURI);
            });
        });

        describe("when called by an account that does not have permission", () => {
            before(async () => {
                await debtToken.revokeTokenURIAuthorization.sendTransactionAsync(
                    NON_CONTRACT_OWNER,
                );
            });

            it("reverts the transaction", async () => {
                await expect(
                    debtToken.setTokenURI.sendTransactionAsync(tokenId, tokenURI, {
                        from: NON_CONTRACT_OWNER,
                    }),
                ).to.eventually.be.rejectedWith(REVERT_ERROR);
            });
        });
    });
});
