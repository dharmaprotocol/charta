// External Libraries
import * as ABIDecoder from "abi-decoder";
import { BigNumber } from "bignumber.js";
import * as chai from "chai";
import * as _ from "lodash";
import * as Web3 from "web3";

// Test Utils
import * as Units from "../test_utils/units";
import {
    multiSigExecuteAfterTimelock,
    multiSigExecutePauseImmediately,
} from "../test_utils/multisig";
import { BigNumberSetup } from "../test_utils/bignumber_setup";
import ChaiSetup from "../test_utils/chai_setup";
import { NULL_ADDRESS, REVERT_ERROR } from "../test_utils/constants";

// Wrappers
import { DebtRegistryContract } from "../../../types/generated/debt_registry";
import { DebtTokenContract } from "../../../types/generated/debt_token";
import { DharmaMultiSigWalletContract } from "../../../types/generated/dharma_multi_sig_wallet";
import { DebtKernelContract } from "../../../types/generated/debt_kernel";

// Types
import { Address } from "../../../types/common";
import { DebtRegistryEntry } from "../../../types/registry/entry";

// Logs
import { LogInsertEntry, LogModifyEntryBeneficiary } from "../logs/debt_registry";
import { LogApproval, LogTransfer } from "../logs/debt_token";

// Configure BigNumber exponentiation
BigNumberSetup.configure();

// Set up Chai
ChaiSetup.configure();
const expect = chai.expect;

const debtRegistryContract = artifacts.require("DebtRegistry");
const debtTokenContract = artifacts.require("DebtToken");

contract("Debt Token (Integration Tests)", (ACCOUNTS) => {
    const NFT_NAME = "DebtToken";
    const NFT_SYMBOL = "DDT";

    const CONTRACT_OWNER = ACCOUNTS[0];
    const NON_CONTRACT_OWNER = ACCOUNTS[1];
    const AUTHORIZED_MINT_AGENT = ACCOUNTS[2];
    const UNAUTHORIZED_MINT_AGENT = ACCOUNTS[3];

    const TOKEN_OWNER_1 = ACCOUNTS[4];
    const TOKEN_OWNER_2 = ACCOUNTS[5];
    const TOKEN_OWNER_3 = ACCOUNTS[6];

    const UNDERWRITER = ACCOUNTS[7];
    const BROKER = ACCOUNTS[8];
    const DEBTOR = ACCOUNTS[9];

    const MOCK_REPAYMENT_ROUTER_ADDRESS = ACCOUNTS[10];
    const MOCK_TERMS_CONTRACT_ADDRESS = ACCOUNTS[11];

    const INDEX_0 = new BigNumber(0);
    const INDEX_1 = new BigNumber(1);
    const INDEX_2 = new BigNumber(2);

    const NONEXISTENT_TOKEN_ID = new BigNumber(13);

    const TX_DEFAULTS = { from: CONTRACT_OWNER, gas: 4000000 };

    const [DEBT_ENTRY_1, DEBT_ENTRY_2, DEBT_ENTRY_3, DEBT_ENTRY_4] = [
        TOKEN_OWNER_1,
        TOKEN_OWNER_1,
        TOKEN_OWNER_2,
        TOKEN_OWNER_3,
    ].map(generateDebtEntry);

    function generateDebtEntry(creditor: Address): DebtRegistryEntry {
        return new DebtRegistryEntry({
            beneficiary: creditor,
            debtor: DEBTOR,
            termsContract: MOCK_TERMS_CONTRACT_ADDRESS,
            termsContractParameters: generateRandom32ByteString(),
            underwriter: UNDERWRITER,
            underwriterRiskRating: Units.underwriterRiskRatingFixedPoint(3.4),
            version: MOCK_REPAYMENT_ROUTER_ADDRESS,
        });
    }

    function generateRandom32ByteString(): string {
        return web3.sha3(Math.random().toString(36));
    }

    async function mintDebtToken(entry: DebtRegistryEntry, sender: Address): Promise<string> {
        return debtToken.create.sendTransactionAsync(
            entry.getVersion(),
            entry.getBeneficiary(),
            entry.getDebtor(),
            entry.getUnderwriter(),
            entry.getUnderwriterRiskRating(),
            entry.getTermsContract(),
            entry.getTermsContractParameters(),
            entry.getSalt(),
            { from: sender },
        );
    }

    async function authorizeMintAgent(agent: Address): Promise<string> {
        return multiSigExecuteAfterTimelock(
            web3,
            multiSig,
            debtToken,
            "addAuthorizedMintAgent",
            ACCOUNTS,
            [agent],
        );
    }

    async function revokeMintAuthorization(agent: Address): Promise<string> {
        return multiSigExecuteAfterTimelock(
            web3,
            multiSig,
            debtToken,
            "revokeMintAgentAuthorization",
            ACCOUNTS,
            [agent],
        );
    }

    async function pauseDebtTokenContract(): Promise<string> {
        return multiSigExecutePauseImmediately(web3, multiSig, debtToken, "pause", ACCOUNTS);
    }

    async function unpauseDebtTokenContract(): Promise<string> {
        return multiSigExecuteAfterTimelock(web3, multiSig, debtToken, "unpause", ACCOUNTS);
    }

    let debtRegistry: DebtRegistryContract;
    let debtToken: DebtTokenContract;
    let debtKernel: DebtKernelContract;
    let multiSig: DharmaMultiSigWalletContract;

    before(async () => {
        multiSig = await DharmaMultiSigWalletContract.deployed(web3, TX_DEFAULTS);
        debtRegistry = await DebtRegistryContract.deployed(web3, TX_DEFAULTS);
        debtToken = await DebtTokenContract.deployed(web3, TX_DEFAULTS);
        debtKernel = await DebtKernelContract.deployed(web3, TX_DEFAULTS);

        ABIDecoder.addABI(debtRegistryContract.abi);
        ABIDecoder.addABI(debtTokenContract.abi);
    });

    after(() => {
        ABIDecoder.removeABI(debtRegistryContract.abi);
        ABIDecoder.removeABI(debtTokenContract.abi);
    });

    describe("Permissions", () => {
        it("should be deployed with the debt kernel as authorized to mint", async () => {
            await expect(debtToken.getAuthorizedMintAgents.callAsync()).to.eventually.deep.equal([
                debtKernel.address,
            ]);
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
                await authorizeMintAgent(AUTHORIZED_MINT_AGENT);
            });

            it("should return agent as authorized", async () => {
                await expect(
                    debtToken.getAuthorizedMintAgents.callAsync(),
                ).to.eventually.deep.equal([debtKernel.address, AUTHORIZED_MINT_AGENT]);
            });
        });

        describe("owner revokes mint authorization", () => {
            before(async () => {
                await revokeMintAuthorization(AUTHORIZED_MINT_AGENT);
            });

            it("should not return agent as authorized", async () => {
                await expect(
                    debtToken.getAuthorizedMintAgents.callAsync(),
                ).to.eventually.deep.equal([debtKernel.address]);
            });
        });
    });

    describe("Minting", () => {
        before(async () => {
            await authorizeMintAgent(AUTHORIZED_MINT_AGENT);
        });

        after(async () => {
            await revokeMintAuthorization(AUTHORIZED_MINT_AGENT);
        });

        describe("unauthorized agent tries to mint debt token", () => {
            it("should throw", async () => {
                await expect(
                    mintDebtToken(DEBT_ENTRY_1, UNAUTHORIZED_MINT_AGENT),
                ).to.eventually.be.rejectedWith(REVERT_ERROR);
            });
        });

        describe("authorized agent mints debt token", () => {
            describe("...when debt token is paused", () => {
                before(async () => {
                    await pauseDebtTokenContract();
                });

                after(async () => {
                    await unpauseDebtTokenContract();
                });

                it("should throw", async () => {
                    await expect(
                        mintDebtToken(DEBT_ENTRY_1, AUTHORIZED_MINT_AGENT),
                    ).to.eventually.be.rejectedWith(REVERT_ERROR);
                });
            });

            describe("...when debt token not paused", () => {
                let insertRegistryLog: ABIDecoder.DecodedLog;
                let transferLog: ABIDecoder.DecodedLog;

                before(async () => {
                    const txHash = await mintDebtToken(DEBT_ENTRY_1, AUTHORIZED_MINT_AGENT);
                    const res = await web3.eth.getTransactionReceipt(txHash);
                    [insertRegistryLog, transferLog] = ABIDecoder.decodeLogs(res.logs);
                });

                it("should emit registry insert log event", () => {
                    const logExpected = LogInsertEntry(debtRegistry.address, DEBT_ENTRY_1);

                    expect(insertRegistryLog).to.deep.equal(logExpected);
                });

                it("should emit transfer log event", () => {
                    const logExpected = LogTransfer(
                        debtToken.address,
                        NULL_ADDRESS,
                        DEBT_ENTRY_1.getBeneficiary(),
                        DEBT_ENTRY_1.getTokenId(),
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
                        debtToken.ownerOf.callAsync(DEBT_ENTRY_1.getTokenId()),
                    ).to.eventually.bignumber.equal(DEBT_ENTRY_1.getBeneficiary());
                });

                it("should update owner's token list", async () => {
                    await expect(
                        debtToken.tokenOfOwnerByIndex.callAsync(
                            DEBT_ENTRY_1.getBeneficiary(),
                            INDEX_0,
                        ),
                    ).to.eventually.bignumber.equal(DEBT_ENTRY_1.getTokenId());
                    await expect(
                        debtToken.tokenOfOwnerByIndex.callAsync(
                            DEBT_ENTRY_1.getBeneficiary(),
                            INDEX_1,
                        ),
                    ).to.eventually.be.rejectedWith(REVERT_ERROR);
                });
            });
        });

        describe("authorized agent mints second debt token to same creditor", () => {
            let res: Web3.TransactionReceipt;

            before(async () => {
                const txHash = await mintDebtToken(DEBT_ENTRY_2, AUTHORIZED_MINT_AGENT);
                res = await web3.eth.getTransactionReceipt(txHash);
            });

            it("should emit transfer log event", () => {
                const [insertRegistryLog, transferLog] = ABIDecoder.decodeLogs(res.logs);
                const logExpected = LogTransfer(
                    debtToken.address,
                    NULL_ADDRESS,
                    DEBT_ENTRY_2.getBeneficiary(),
                    DEBT_ENTRY_2.getTokenId(),
                );

                expect(transferLog).to.deep.equal(logExpected);
            });

            it("should increase total supply by 1", async () => {
                await expect(debtToken.totalSupply.callAsync()).to.eventually.bignumber.equal(2);
            });

            it("should assign new token to creditor", async () => {
                await expect(
                    debtToken.ownerOf.callAsync(DEBT_ENTRY_2.getTokenId()),
                ).to.eventually.bignumber.equal(DEBT_ENTRY_2.getBeneficiary());
            });

            it("should update owner's token list", async () => {
                await expect(
                    debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_1, INDEX_0),
                ).to.eventually.bignumber.equal(DEBT_ENTRY_1.getTokenId());
                await expect(
                    debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_1, INDEX_1),
                ).to.eventually.bignumber.equal(DEBT_ENTRY_2.getTokenId());
                await expect(
                    debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_1, INDEX_2),
                ).to.eventually.be.rejectedWith(REVERT_ERROR);
            });
        });

        describe("authorized agent mints debt token that already exists", () => {
            it("should throw", async () => {
                await expect(
                    mintDebtToken(DEBT_ENTRY_1, AUTHORIZED_MINT_AGENT),
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

    describe("authorized mint agent mints an additional two debt tokens ", () => {
        before(async () => {
            await authorizeMintAgent(AUTHORIZED_MINT_AGENT);
            await mintDebtToken(DEBT_ENTRY_3, AUTHORIZED_MINT_AGENT);
            await mintDebtToken(DEBT_ENTRY_4, AUTHORIZED_MINT_AGENT);
        });

        after(async () => {
            await revokeMintAuthorization(AUTHORIZED_MINT_AGENT);
        });

        describe("#totalSupply()", () => {
            it("should return 4 for total supply", async () => {
                const totalSupply = await debtToken.totalSupply.callAsync();
                expect(totalSupply).to.bignumber.equal(4);
            });
        });

        describe("#balanceOf()", () => {
            it("should return the correct balances for each token holder", async () => {
                await expect(
                    debtToken.balanceOf.callAsync(TOKEN_OWNER_1),
                ).to.eventually.bignumber.equal(2);
                await expect(
                    debtToken.balanceOf.callAsync(TOKEN_OWNER_2),
                ).to.eventually.bignumber.equal(1);
                await expect(
                    debtToken.balanceOf.callAsync(TOKEN_OWNER_3),
                ).to.eventually.bignumber.equal(1);
            });
        });

        describe("#tokenOfOwnerByIndex()", async () => {
            it("should return current token at index 0 for each user", async () => {
                await expect(
                    debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_1, INDEX_0),
                ).to.eventually.bignumber.equal(DEBT_ENTRY_1.getTokenId());

                await expect(
                    debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_2, INDEX_0),
                ).to.eventually.bignumber.equal(DEBT_ENTRY_3.getTokenId());

                await expect(
                    debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_3, INDEX_0),
                ).to.eventually.bignumber.equal(DEBT_ENTRY_4.getTokenId());
            });

            it("should throw if called at index > balanceOf.callAsync(owner)", async () => {
                await expect(
                    debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_1, INDEX_2),
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
            describe("user transfers token he doesn't own", async () => {
                it("should throw", async () => {
                    await expect(
                        debtToken.transfer.sendTransactionAsync(
                            TOKEN_OWNER_1,
                            DEBT_ENTRY_3.getTokenId(),
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
                        debtToken.transfer.sendTransactionAsync(
                            TOKEN_OWNER_1,
                            NONEXISTENT_TOKEN_ID,
                            {
                                from: TOKEN_OWNER_1,
                            },
                        ),
                    ).to.eventually.be.rejectedWith(REVERT_ERROR);
                });
            });

            describe("user transfers token he owns", async () => {
                describe("...when debt token is paused", () => {
                    before(async () => {
                        await pauseDebtTokenContract();
                    });

                    after(async () => {
                        await unpauseDebtTokenContract();
                    });

                    it("should throw", async () => {
                        await expect(
                            debtToken.transfer.sendTransactionAsync(
                                TOKEN_OWNER_2,
                                DEBT_ENTRY_1.getTokenId(),
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
                            DEBT_ENTRY_1.getTokenId(),
                            { from: TOKEN_OWNER_1 },
                        );
                        const res = await web3.eth.getTransactionReceipt(txHash);
                        [modifyBeneficiaryLog, transferLog] = ABIDecoder.decodeLogs(res.logs);
                    });

                    it("should emit registry modification log", async () => {
                        const logExpected = LogModifyEntryBeneficiary(
                            debtRegistry.address,
                            DEBT_ENTRY_1.getIssuanceHash(),
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
                            DEBT_ENTRY_1.getTokenId(),
                        );

                        expect(transferLog).to.deep.equal(logExpected);
                    });

                    it("should belong to new owner", async () => {
                        await expect(
                            debtToken.ownerOf.callAsync(DEBT_ENTRY_1.getTokenId()),
                        ).to.eventually.equal(TOKEN_OWNER_2);
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
                        ).to.eventually.bignumber.equal(1);
                    });

                    it("should update owners' iterable token lists", async () => {
                        // TOKEN_OWNER_1
                        await expect(
                            debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_1, INDEX_0),
                        ).to.eventually.bignumber.equal(DEBT_ENTRY_2.getTokenId());
                        await expect(
                            debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_1, INDEX_1),
                        ).to.eventually.be.rejectedWith(REVERT_ERROR);

                        // TOKEN_OWNER_2
                        await expect(
                            debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_2, INDEX_0),
                        ).to.eventually.bignumber.equal(DEBT_ENTRY_3.getTokenId());
                        await expect(
                            debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_2, INDEX_1),
                        ).to.eventually.bignumber.equal(DEBT_ENTRY_1.getTokenId());
                        await expect(
                            debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_2, INDEX_2),
                        ).to.eventually.be.rejectedWith(REVERT_ERROR);

                        // TOKEN_OWNER_3
                        await expect(
                            debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_3, INDEX_0),
                        ).to.eventually.bignumber.equal(DEBT_ENTRY_4.getTokenId());
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
                            DEBT_ENTRY_1.getTokenId(),
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
                            DEBT_ENTRY_2.getTokenId(),
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
                        DEBT_ENTRY_1.getTokenId(),
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
                        DEBT_ENTRY_1.getTokenId(),
                    );

                    expect(transferLog).to.deep.equal(logExpected);
                });

                it("should belong to same owner", async () => {
                    await expect(
                        debtToken.ownerOf.callAsync(DEBT_ENTRY_1.getTokenId()),
                    ).to.eventually.equal(TOKEN_OWNER_2);
                });

                it("should maintain owners' token balances correctly", async () => {
                    await expect(
                        debtToken.balanceOf.callAsync(TOKEN_OWNER_1),
                    ).to.eventually.bignumber.equal(1);
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
                    ).to.eventually.bignumber.equal(DEBT_ENTRY_2.getTokenId());
                    await expect(
                        debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_1, INDEX_1),
                    ).to.eventually.be.rejectedWith(REVERT_ERROR);

                    // TOKEN_OWNER_2
                    await expect(
                        debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_2, INDEX_0),
                    ).to.eventually.bignumber.equal(DEBT_ENTRY_3.getTokenId());
                    await expect(
                        debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_2, INDEX_1),
                    ).to.eventually.bignumber.equal(DEBT_ENTRY_1.getTokenId());
                    await expect(
                        debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_2, INDEX_2),
                    ).to.eventually.be.rejectedWith(REVERT_ERROR);

                    // TOKEN_OWNER_3
                    await expect(
                        debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_3, INDEX_0),
                    ).to.eventually.bignumber.equal(DEBT_ENTRY_4.getTokenId());
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
                        DEBT_ENTRY_4.getTokenId(),
                        {
                            from: TOKEN_OWNER_3,
                        },
                    );
                    const txHash = await debtToken.transfer.sendTransactionAsync(
                        TOKEN_OWNER_1,
                        DEBT_ENTRY_4.getTokenId(),
                        { from: TOKEN_OWNER_3 },
                    );
                    const res = await web3.eth.getTransactionReceipt(txHash);

                    [modifyBeneficiaryLog, approvalLog, transferLog] = ABIDecoder.decodeLogs(
                        res.logs,
                    );
                });

                it("should emit registry modification log", () => {
                    const logExpected = LogModifyEntryBeneficiary(
                        debtRegistry.address,
                        DEBT_ENTRY_4.getIssuanceHash(),
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
                        DEBT_ENTRY_4.getTokenId(),
                    );

                    expect(approvalLog).to.deep.equal(logExpected);
                });

                it("should emit transfer log", () => {
                    const logExpected = LogTransfer(
                        debtToken.address,
                        TOKEN_OWNER_3,
                        TOKEN_OWNER_1,
                        DEBT_ENTRY_4.getTokenId(),
                    );

                    expect(transferLog).to.deep.equal(logExpected);
                });

                it("should belong to new owner", async () => {
                    await expect(
                        debtToken.ownerOf.callAsync(DEBT_ENTRY_4.getTokenId()),
                    ).to.eventually.equal(TOKEN_OWNER_1);
                });

                it("should update owners' token balances correctly", async () => {
                    await expect(
                        debtToken.balanceOf.callAsync(TOKEN_OWNER_1),
                    ).to.eventually.bignumber.equal(2);
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
                    ).to.eventually.bignumber.equal(DEBT_ENTRY_2.getTokenId());
                    await expect(
                        debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_1, INDEX_1),
                    ).to.eventually.bignumber.equal(DEBT_ENTRY_4.getTokenId());
                    await expect(
                        debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_1, INDEX_2),
                    ).to.eventually.be.rejectedWith(REVERT_ERROR);

                    // TOKEN_OWNER_2
                    await expect(
                        debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_2, INDEX_0),
                    ).to.eventually.bignumber.equal(DEBT_ENTRY_3.getTokenId());
                    await expect(
                        debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_2, INDEX_1),
                    ).to.eventually.bignumber.equal(DEBT_ENTRY_1.getTokenId());
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
            describe("user approves transfer for token he doesn't own", () => {
                it("should throw", async () => {
                    expect(
                        debtToken.approve.sendTransactionAsync(
                            TOKEN_OWNER_2,
                            DEBT_ENTRY_2.getTokenId(),
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
                        debtToken.approve.sendTransactionAsync(
                            TOKEN_OWNER_2,
                            NONEXISTENT_TOKEN_ID,
                            {
                                from: TOKEN_OWNER_2,
                            },
                        ),
                    ).to.eventually.be.rejectedWith(REVERT_ERROR);
                });
            });

            describe("user approves himself for transferring token he owns", () => {
                it("should throw", async () => {
                    expect(
                        debtToken.approve.sendTransactionAsync(
                            TOKEN_OWNER_1,
                            DEBT_ENTRY_2.getTokenId(),
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
                            DEBT_ENTRY_2.getTokenId(),
                            { from: TOKEN_OWNER_1 },
                        );
                        res = await web3.eth.getTransactionReceipt(txHash);
                    });

                    it("should NOT emit approval event", async () => {
                        expect(res.logs.length).to.equal(0);
                    });

                    it("should maintain cleared approval", async () => {
                        await expect(
                            debtToken.getApproved.callAsync(DEBT_ENTRY_2.getTokenId()),
                        ).to.eventually.equal(NULL_ADDRESS);
                    });
                });

                describe("user sets new approval", () => {
                    let res: Web3.TransactionReceipt;

                    before(async () => {
                        const txHash = await debtToken.approve.sendTransactionAsync(
                            TOKEN_OWNER_2,
                            DEBT_ENTRY_2.getTokenId(),
                            { from: TOKEN_OWNER_1 },
                        );

                        res = await web3.eth.getTransactionReceipt(txHash);
                    });

                    it("should return newly approved user as approved", async () => {
                        await expect(
                            debtToken.getApproved.callAsync(DEBT_ENTRY_2.getTokenId()),
                        ).to.eventually.equal(TOKEN_OWNER_2);
                    });

                    it("should emit approval log", () => {
                        const [approvalLog] = ABIDecoder.decodeLogs(res.logs);
                        const logExpected = LogApproval(
                            debtToken.address,
                            TOKEN_OWNER_1,
                            TOKEN_OWNER_2,
                            DEBT_ENTRY_2.getTokenId(),
                        );

                        expect(approvalLog).to.deep.equal(logExpected);
                    });
                });

                describe("user changes token approval", () => {
                    let res: Web3.TransactionReceipt;

                    before(async () => {
                        const txHash = await debtToken.approve.sendTransactionAsync(
                            TOKEN_OWNER_3,
                            DEBT_ENTRY_2.getTokenId(),
                            { from: TOKEN_OWNER_1 },
                        );
                        res = await web3.eth.getTransactionReceipt(txHash);
                    });

                    it("should return newly approved user as approved", async () => {
                        await expect(
                            debtToken.getApproved.callAsync(DEBT_ENTRY_2.getTokenId()),
                        ).to.eventually.equal(TOKEN_OWNER_3);
                    });

                    it("should emit approval log", () => {
                        const [approvalLog] = ABIDecoder.decodeLogs(res.logs);
                        const logExpected = LogApproval(
                            debtToken.address,
                            TOKEN_OWNER_1,
                            TOKEN_OWNER_3,
                            DEBT_ENTRY_2.getTokenId(),
                        );

                        expect(approvalLog).to.deep.equal(logExpected);
                    });
                });

                describe("user reaffirms approval", () => {
                    let res: Web3.TransactionReceipt;

                    before(async () => {
                        const txHash = await debtToken.approve.sendTransactionAsync(
                            TOKEN_OWNER_3,
                            DEBT_ENTRY_2.getTokenId(),
                            { from: TOKEN_OWNER_1 },
                        );
                        res = await web3.eth.getTransactionReceipt(txHash);
                    });

                    it("should return same approved user as approved", async () => {
                        await expect(
                            debtToken.getApproved.callAsync(DEBT_ENTRY_2.getTokenId()),
                        ).to.eventually.equal(TOKEN_OWNER_3);
                    });

                    it("should emit approval log", () => {
                        const [approvalLog] = ABIDecoder.decodeLogs(res.logs);
                        const logExpected = LogApproval(
                            debtToken.address,
                            TOKEN_OWNER_1,
                            TOKEN_OWNER_3,
                            DEBT_ENTRY_2.getTokenId(),
                        );

                        expect(approvalLog).to.deep.equal(logExpected);
                    });
                });

                describe("user clears set approval", () => {
                    let res: Web3.TransactionReceipt;

                    before(async () => {
                        const txHash = await debtToken.approve.sendTransactionAsync(
                            NULL_ADDRESS,
                            DEBT_ENTRY_2.getTokenId(),
                            { from: TOKEN_OWNER_1 },
                        );
                        res = await web3.eth.getTransactionReceipt(txHash);
                    });

                    it("should return null address user as approved", async () => {
                        await expect(
                            debtToken.getApproved.callAsync(DEBT_ENTRY_2.getTokenId()),
                        ).to.eventually.equal(NULL_ADDRESS);
                    });

                    it("should emit approval log", () => {
                        const [approvalLog] = ABIDecoder.decodeLogs(res.logs);
                        const logExpected = LogApproval(
                            debtToken.address,
                            TOKEN_OWNER_1,
                            NULL_ADDRESS,
                            DEBT_ENTRY_2.getTokenId(),
                        );

                        expect(approvalLog).to.deep.equal(logExpected);
                    });
                });
            });
        });

        describe("#transferFrom()", () => {
            describe("user transfers token from owner w/o approval...", () => {
                it("should throw", async () => {
                    await expect(
                        debtToken.transferFrom.sendTransactionAsync(
                            TOKEN_OWNER_2,
                            TOKEN_OWNER_3,
                            DEBT_ENTRY_2.getTokenId(),
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

            describe("user transfers token from owner w/ approval...", () => {
                before(async () => {
                    await debtToken.approve.sendTransactionAsync(
                        TOKEN_OWNER_2,
                        DEBT_ENTRY_2.getTokenId(),
                        { from: TOKEN_OWNER_1 },
                    );
                });

                describe("...to null address", () => {
                    it("should throw", async () => {
                        await expect(
                            debtToken.transferFrom.sendTransactionAsync(
                                TOKEN_OWNER_1,
                                NULL_ADDRESS,
                                DEBT_ENTRY_2.getTokenId(),
                                { from: TOKEN_OWNER_2 },
                            ),
                        ).to.eventually.be.rejectedWith(REVERT_ERROR);
                    });
                });

                describe("...from other owner to himself", () => {
                    describe("...when debt token is paused", () => {
                        before(async () => {
                            await pauseDebtTokenContract();
                        });

                        after(async () => {
                            await unpauseDebtTokenContract();
                        });

                        it("should throw", async () => {
                            await expect(
                                debtToken.transferFrom.sendTransactionAsync(
                                    TOKEN_OWNER_1,
                                    TOKEN_OWNER_3,
                                    DEBT_ENTRY_2.getTokenId(),
                                    { from: TOKEN_OWNER_2 },
                                ),
                            ).to.eventually.be.rejectedWith(REVERT_ERROR);
                        });
                    });

                    describe("...when debt token not paused", () => {
                        let res: Web3.TransactionReceipt;
                        let approvalLog: ABIDecoder.DecodedLog;
                        let transferLog: ABIDecoder.DecodedLog;
                        let modifyBeneficiaryLog: ABIDecoder.DecodedLog;

                        before(async () => {
                            const txHash = await debtToken.transferFrom.sendTransactionAsync(
                                TOKEN_OWNER_1,
                                TOKEN_OWNER_3,
                                DEBT_ENTRY_2.getTokenId(),
                                { from: TOKEN_OWNER_2 },
                            );
                            res = await web3.eth.getTransactionReceipt(txHash);

                            [
                                modifyBeneficiaryLog,
                                approvalLog,
                                transferLog,
                            ] = ABIDecoder.decodeLogs(res.logs);
                        });

                        it("should emit registry modification log", async () => {
                            const logExpected = LogModifyEntryBeneficiary(
                                debtRegistry.address,
                                DEBT_ENTRY_2.getIssuanceHash(),
                                TOKEN_OWNER_1,
                                TOKEN_OWNER_3,
                            );

                            expect(modifyBeneficiaryLog).to.deep.equal(logExpected);
                        });

                        it("should emit approval clear log", () => {
                            const logExpected = LogApproval(
                                debtToken.address,
                                TOKEN_OWNER_1,
                                NULL_ADDRESS,
                                DEBT_ENTRY_2.getTokenId(),
                            );

                            expect(approvalLog).to.deep.equal(logExpected);
                        });

                        it("should emit transfer log", () => {
                            const logExpected = LogTransfer(
                                debtToken.address,
                                TOKEN_OWNER_1,
                                TOKEN_OWNER_3,
                                DEBT_ENTRY_2.getTokenId(),
                            );

                            expect(transferLog).to.deep.equal(logExpected);
                        });

                        it("should belong to new owner", async () => {
                            await expect(
                                debtToken.ownerOf.callAsync(DEBT_ENTRY_2.getTokenId()),
                            ).to.eventually.equal(TOKEN_OWNER_3);
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
                            ).to.eventually.bignumber.equal(1);
                        });

                        it("should update owners' iterable token lists", async () => {
                            // TOKEN_OWNER_1
                            await expect(
                                debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_1, INDEX_0),
                            ).to.eventually.bignumber.equal(DEBT_ENTRY_4.getTokenId());
                            await expect(
                                debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_1, INDEX_1),
                            ).to.eventually.be.rejectedWith(REVERT_ERROR);

                            // TOKEN_OWNER_2
                            await expect(
                                debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_2, INDEX_0),
                            ).to.eventually.bignumber.equal(DEBT_ENTRY_3.getTokenId());
                            await expect(
                                debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_2, INDEX_1),
                            ).to.eventually.bignumber.equal(DEBT_ENTRY_1.getTokenId());
                            await expect(
                                debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_2, INDEX_2),
                            ).to.eventually.be.rejectedWith(REVERT_ERROR);

                            // TOKEN_OWNER_3
                            await expect(
                                debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_3, INDEX_0),
                            ).to.eventually.bignumber.equal(DEBT_ENTRY_2.getTokenId());
                            await expect(
                                debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_3, INDEX_1),
                            ).to.eventually.be.rejectedWith(REVERT_ERROR);
                        });
                    });
                });
            });
        });

        describe("#setTokenURI", () => {
            const tokenId = DEBT_ENTRY_1.getTokenId();
            const tokenURI = "https://www.example.com/image.jpeg";

            describe("when called by an account that has permission", () => {
                before(async () => {
                    await multiSigExecuteAfterTimelock(
                        web3,
                        multiSig,
                        debtToken,
                        "addAuthorizedTokenURIAgent",
                        ACCOUNTS,
                        [NON_CONTRACT_OWNER],
                    );
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
                    await multiSigExecuteAfterTimelock(
                        web3,
                        multiSig,
                        debtToken,
                        "revokeTokenURIAuthorization",
                        ACCOUNTS,
                        [NON_CONTRACT_OWNER],
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
});
