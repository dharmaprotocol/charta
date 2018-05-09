// External
import * as ABIDecoder from "abi-decoder";
import { BigNumber } from "bignumber.js";
import * as chai from "chai";
import * as _ from "lodash";
import * as Web3 from "web3";
import * as Units from "../test_utils/units";

// Contracts
import { DebtTokenContract } from "../../../types/generated/debt_token";
import { MockDebtRegistryContract } from "../../../types/generated/mock_debt_registry";
import { MockERC20TokenContract } from "../../../types/generated/mock_e_r_c20_token";
import { MockERC721ReceiverContract } from "../../../types/generated/mock_e_r_c721_receiver";

// Types
import { Address, TxData } from "../../../types/common";
import { DebtRegistryEntry } from "../../../types/registry/entry";

// Logs
import { LogApproval, LogApprovalForAll, LogTransfer } from "../logs/debt_token";
import { AuthorizationRevoked, Authorized, EventNames } from "../logs/permissions_lib";
import { queryLogsForEvent } from "../logs/log_utils";

// Test utils
import { BigNumberSetup } from "../test_utils/bignumber_setup";
import ChaiSetup from "../test_utils/chai_setup";
import { INVALID_OPCODE, REVERT_ERROR } from "../test_utils/constants";
import { sendTransaction } from "../test_utils/send_transactions";

// Configure BigNumber exponentiation
BigNumberSetup.configure();

// Set up Chai
ChaiSetup.configure();
const expect = chai.expect;

const debtTokenContract = artifacts.require("DebtToken");
const repaymentRouterContract = artifacts.require("RepaymentRouter");

contract("Debt Token (Unit Tests)", (ACCOUNTS) => {
    let debtToken: DebtTokenContract;

    let debtTokenWeb3ContractInstance: Web3.ContractInstance;
    let receiver: MockERC721ReceiverContract;

    let mockRegistry: MockDebtRegistryContract;
    let mockToken: MockERC20TokenContract;

    let debtEntries: DebtRegistryEntry[];

    const NFT_NAME = "DebtToken";
    const NFT_SYMBOL = "DDT";

    const CONTRACT_OWNER = ACCOUNTS[0];
    const NON_CONTRACT_OWNER = ACCOUNTS[1];
    const AUTHORIZED_MINT_AGENT = ACCOUNTS[2];
    const AUTHORIZED_URI_AGENT = ACCOUNTS[3];
    const UNAUTHORIZED_MINT_AGENT = ACCOUNTS[4];
    const UNAUTHORIZED_URI_AGENT = ACCOUNTS[5];

    const TOKEN_OWNER_1 = ACCOUNTS[6];
    const TOKEN_OWNER_2 = ACCOUNTS[7];
    const TOKEN_OWNER_3 = ACCOUNTS[8];
    const TOKEN_OWNERS = [TOKEN_OWNER_1, TOKEN_OWNER_2, TOKEN_OWNER_3];

    const UNDERWRITER_1 = ACCOUNTS[9];
    const UNDERWRITER_2 = ACCOUNTS[10];
    const UNDERWRITER_3 = ACCOUNTS[11];
    const UNDERWRITERS = [UNDERWRITER_1, UNDERWRITER_2, UNDERWRITER_3];

    const BROKER = ACCOUNTS[12];
    const DEBTOR = ACCOUNTS[13];

    const MALICIOUS_EXCHANGE_CONTRACT = ACCOUNTS[15];

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

        mockToken = await MockERC20TokenContract.deployed(web3, TX_DEFAULTS);

        debtTokenWeb3ContractInstance = await debtTokenContract.new(mockRegistry.address, {
            from: CONTRACT_OWNER,
        });

        receiver = await MockERC721ReceiverContract.deployed(web3, TX_DEFAULTS);
        await receiver.reset.sendTransactionAsync();

        // The typings we use ingest vanilla Web3 contracts, so we convert the
        // contract instance deployed by truffle into a Web3 contract instance
        const debtTokenWeb3Contract = web3.eth
            .contract(debtTokenWeb3ContractInstance.abi)
            .at(debtTokenWeb3ContractInstance.address);

        debtToken = new DebtTokenContract(debtTokenWeb3Contract, TX_DEFAULTS);

        const repaymentRouterContractInstance = await repaymentRouterContract.deployed();

        debtEntries = _.map(TOKEN_OWNERS, (tokenOwner: Address, i: number) => {
            return new DebtRegistryEntry({
                beneficiary: tokenOwner,
                debtor: DEBTOR,
                termsContract: TERMS_CONTRACT_ADDRESS,
                termsContractParameters: ARBITRARY_TERMS_CONTRACT_PARAMS[i],
                underwriter: UNDERWRITERS[i],
                underwriterRiskRating: Units.underwriterRiskRatingFixedPoint(3.4),
                version: repaymentRouterContractInstance.address,
            });
        });

        // Initialize ABI Decoders for deciphering log receipts
        ABIDecoder.addABI(debtTokenContract.abi);
    };

    const initState = async () => {
        await debtToken.addAuthorizedMintAgent.sendTransactionAsync(AUTHORIZED_MINT_AGENT, {
            from: CONTRACT_OWNER,
        });

        for (const entry of debtEntries) {
            await mockRegistry.mockInsertReturnValue.sendTransactionAsync(entry.getIssuanceHash());

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
        describe("Token Creation", () => {
            it("should initialize with no authorizations", async () => {
                await expect(
                    debtToken.getAuthorizedMintAgents.callAsync(),
                ).to.eventually.deep.equal([]);
            });

            describe("non-owner adds mint authorization", () => {
                it("should throw", async () => {
                    await expect(
                        debtToken.addAuthorizedMintAgent.sendTransactionAsync(
                            UNAUTHORIZED_MINT_AGENT,
                            {
                                from: NON_CONTRACT_OWNER,
                            },
                        ),
                    ).to.eventually.be.rejectedWith(REVERT_ERROR);
                });
            });

            describe("#addAuthorizedMintAgent", () => {
                let txHash: string;

                before(async () => {
                    txHash = await debtToken.addAuthorizedMintAgent.sendTransactionAsync(
                        AUTHORIZED_MINT_AGENT,
                        { from: CONTRACT_OWNER },
                    );
                });

                it("should emit event broadcasting mint authorization", async () => {
                    const expectedLogEntry = Authorized(
                        debtToken.address,
                        AUTHORIZED_MINT_AGENT,
                        "debt-token-creation",
                    );
                    const queryResult = await queryLogsForEvent(txHash, EventNames.Authorized);
                    expect(queryResult).to.deep.equal(expectedLogEntry);
                });

                it("should return agent as authorized to mint", async () => {
                    await expect(
                        debtToken.getAuthorizedMintAgents.callAsync(),
                    ).to.eventually.deep.equal([AUTHORIZED_MINT_AGENT]);
                });
            });

            describe("#revokeMintAgentAuthorization", () => {
                describe("non-owner revokes mint authorization", () => {
                    it("should throw", async () => {
                        await expect(
                            debtToken.addAuthorizedMintAgent.sendTransactionAsync(
                                UNAUTHORIZED_MINT_AGENT,
                                { from: NON_CONTRACT_OWNER },
                            ),
                        ).to.eventually.be.rejectedWith(REVERT_ERROR);
                    });
                });

                describe("owner revokes mint authorization", () => {
                    let txHash: string;

                    before(async () => {
                        txHash = await debtToken.revokeMintAgentAuthorization.sendTransactionAsync(
                            AUTHORIZED_MINT_AGENT,
                            { from: CONTRACT_OWNER },
                        );
                    });

                    it("should emit event broadcasting revoking mint authorization", async () => {
                        const expectedLogEntry = AuthorizationRevoked(
                            debtToken.address,
                            AUTHORIZED_MINT_AGENT,
                            "debt-token-creation",
                        );
                        const queryResult = await queryLogsForEvent(
                            txHash,
                            EventNames.AuthorizationRevoked,
                        );
                        expect(queryResult).to.deep.equal(expectedLogEntry);
                    });

                    it("should not list agent as authorized", async () => {
                        const authorizedAgents = await debtToken.getAuthorizedMintAgents.callAsync();
                        await expect(authorizedAgents.includes(AUTHORIZED_MINT_AGENT)).to.be.false;
                    });
                });
            });
        });

        describe("Token URI", () => {
            it("should initialize with no authorizations", async () => {
                await expect(
                    debtToken.getAuthorizedTokenURIAgents.callAsync(),
                ).to.eventually.deep.equal([]);
            });

            describe("non-owner adds uri authorization", () => {
                it("should throw", async () => {
                    await expect(
                        debtToken.addAuthorizedTokenURIAgent.sendTransactionAsync(
                            UNAUTHORIZED_URI_AGENT,
                            {
                                from: NON_CONTRACT_OWNER,
                            },
                        ),
                    ).to.eventually.be.rejectedWith(REVERT_ERROR);
                });
            });

            describe("#addAuthorizedTokenURIAgent", () => {
                let txHash: string;

                before(async () => {
                    txHash = await debtToken.addAuthorizedTokenURIAgent.sendTransactionAsync(
                        AUTHORIZED_URI_AGENT,
                        { from: CONTRACT_OWNER },
                    );
                });

                it("should emit event broadcasting uri authorization", async () => {
                    const expectedLogEntry = Authorized(
                        debtToken.address,
                        AUTHORIZED_URI_AGENT,
                        "debt-token-uri",
                    );
                    const queryResult = await queryLogsForEvent(txHash, EventNames.Authorized);
                    expect(queryResult).to.deep.equal(expectedLogEntry);
                });

                it("should return agent as authorized to set token uri", async () => {
                    await expect(
                        debtToken.getAuthorizedTokenURIAgents.callAsync(),
                    ).to.eventually.deep.equal([AUTHORIZED_URI_AGENT]);
                });
            });

            describe("#revokeTokenURIAuthorization", () => {
                describe("non-owner revokes uri authorization", () => {
                    it("should throw", async () => {
                        await expect(
                            debtToken.revokeTokenURIAuthorization.sendTransactionAsync(
                                AUTHORIZED_URI_AGENT,
                                {
                                    from: NON_CONTRACT_OWNER,
                                },
                            ),
                        ).to.eventually.be.rejectedWith(REVERT_ERROR);
                    });
                });

                describe("owner revokes uri authorization", () => {
                    let txHash: string;

                    before(async () => {
                        txHash = await debtToken.revokeTokenURIAuthorization.sendTransactionAsync(
                            AUTHORIZED_URI_AGENT,
                            { from: CONTRACT_OWNER },
                        );
                    });

                    it("should emit event broadcasting revoking uri authorization", async () => {
                        const expectedLogEntry = AuthorizationRevoked(
                            debtToken.address,
                            AUTHORIZED_URI_AGENT,
                            "debt-token-uri",
                        );
                        const queryResult = await queryLogsForEvent(
                            txHash,
                            EventNames.AuthorizationRevoked,
                        );
                        expect(queryResult).to.deep.equal(expectedLogEntry);
                    });

                    it("should not list agent as authorized", async () => {
                        const authorizedAgents = await debtToken.getAuthorizedTokenURIAgents.callAsync();
                        await expect(authorizedAgents.includes(AUTHORIZED_URI_AGENT)).to.be.false;
                    });
                });
            });
        });
    });

    describe("Minting", () => {
        before(async () => {
            await debtToken.addAuthorizedMintAgent.sendTransactionAsync(AUTHORIZED_MINT_AGENT, {
                from: CONTRACT_OWNER,
            });
        });

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
            let transferLog: ABIDecoder.DecodedLog;

            before(async () => {
                await mockRegistry.mockInsertReturnValue.sendTransactionAsync(
                    debtEntries[0].getIssuanceHash(),
                );

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
                [transferLog] = _.compact(ABIDecoder.decodeLogs(res.logs));
            });

            it("should call registry.insert function with issuance arguments", async () => {
                await expect(
                    mockRegistry.wasInsertCalledWith.callAsync(
                        debtEntries[0].getVersion(),
                        debtEntries[0].getBeneficiary(),
                        debtEntries[0].getDebtor(),
                        debtEntries[0].getUnderwriter(),
                        debtEntries[0].getUnderwriterRiskRating(),
                        debtEntries[0].getTermsContract(),
                        debtEntries[0].getTermsContractParameters(),
                        debtEntries[0].getSalt(),
                    ),
                ).to.eventually.equal(true);
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
                await expect(debtToken.totalSupply.callAsync()).to.eventually.bignumber.equal(1);
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

                await mockRegistry.mockInsertReturnValue.sendTransactionAsync(
                    secondDebt.getIssuanceHash(),
                );

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
                await expect(
                    mockRegistry.wasInsertCalledWith.callAsync(
                        secondDebt.getVersion(),
                        secondDebt.getBeneficiary(),
                        secondDebt.getDebtor(),
                        secondDebt.getUnderwriter(),
                        secondDebt.getUnderwriterRiskRating(),
                        secondDebt.getTermsContract(),
                        secondDebt.getTermsContractParameters(),
                        secondDebt.getSalt(),
                    ),
                ).to.eventually.equal(true);
            });

            it("should emit transfer log event", () => {
                const [transferLog] = _.compact(ABIDecoder.decodeLogs(res.logs));
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
    });

    describe("#supportsInterface()", async () => {
        it("0xffffffff should return false", async () => {
            await expect(debtToken.supportsInterface.callAsync("0xffffffff")).to.eventually.equal(
                false,
            );
        });
        it("should return true for ERC721", async () => {
            await expect(debtToken.supportsInterface.callAsync("0x80ac58cd")).to.eventually.equal(
                true,
            );
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

        describe("owner is zero address", () => {
            it("should throw", async () => {
                await expect(
                    debtToken.tokenOfOwnerByIndex.callAsync(NULL_ADDRESS, INDEX_0),
                ).to.eventually.be.rejectedWith(REVERT_ERROR);
            });
        });

        describe("index > balanceOf(owner)", () => {
            it("should throw", async () => {
                await expect(
                    debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_1, INDEX_2),
                ).to.eventually.be.rejectedWith(REVERT_ERROR);
                await expect(
                    debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_2, INDEX_2),
                ).to.eventually.be.rejectedWith(REVERT_ERROR);
                await expect(
                    debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_3, INDEX_2),
                ).to.eventually.be.rejectedWith(REVERT_ERROR);
            });
        });

        describe("index = balanceOf(owner)", () => {
            it("should throw", async () => {
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
    });

    describe("#ownerOf()", async () => {
        before(resetAndInitState);

        describe("user calls ownerOf on a given tokenId", async () => {
            it("should return the owner of the given token at that point in time", async () => {
                await expect(
                    debtToken.ownerOf.callAsync(debtEntries[1].getTokenId()),
                ).to.eventually.equal(TOKEN_OWNER_2);
            });

            describe("...when token is burned / doesn't exist", async () => {
                it("should throw", async () => {
                    await expect(
                        debtToken.ownerOf.callAsync(NONEXISTENT_TOKEN_ID),
                    ).to.eventually.be.rejectedWith(REVERT_ERROR);
                });
            });
        });
    });

    describe("#exists()", () => {
        before(resetAndInitState);

        describe("token exists", () => {
            it("should return true", async () => {
                await expect(
                    debtToken.exists.callAsync(debtEntries[0].getTokenId()),
                ).to.eventually.equal(true);
            });
        });

        describe("token does not exist", () => {
            it("should return false", async () => {
                await expect(debtToken.exists.callAsync(NONEXISTENT_TOKEN_ID)).to.eventually.equal(
                    false,
                );
            });
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
            let transferLog: ABIDecoder.DecodedLog;

            before(async () => {
                const txHash = await debtToken.transfer.sendTransactionAsync(
                    TOKEN_OWNER_2,
                    debtEntries[0].getTokenId(),
                    { from: TOKEN_OWNER_1 },
                );
                const res = await web3.eth.getTransactionReceipt(txHash);
                [transferLog] = _.compact(ABIDecoder.decodeLogs(res.logs));
            });

            it("should call modifyBeneficiary on debt registry", async () => {
                await expect(
                    mockRegistry.wasModifyBeneficiaryCalledWith.callAsync(
                        debtEntries[0].getIssuanceHash(),
                        TOKEN_OWNER_2,
                    ),
                ).to.eventually.be.true;
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
                await mockRegistry.reset.sendTransactionAsync();

                await mockRegistry.mockGetBeneficiaryReturnValueFor.sendTransactionAsync(
                    debtEntries[0].getIssuanceHash(),
                    TOKEN_OWNER_2,
                );

                const txHash = await debtToken.transfer.sendTransactionAsync(
                    TOKEN_OWNER_2,
                    debtEntries[0].getTokenId(),
                    { from: TOKEN_OWNER_2 },
                );
                const res = await web3.eth.getTransactionReceipt(txHash);
                [transferLog] = ABIDecoder.decodeLogs(res.logs);
            });

            it("should NOT call registry.modifyBeneficiary", async () => {
                await expect(
                    mockRegistry.wasModifyBeneficiaryCalledWith.callAsync(
                        debtEntries[0].getIssuanceHash(),
                        TOKEN_OWNER_2,
                    ),
                ).to.eventually.be.false;
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
            let approvalLog: ABIDecoder.DecodedLog;
            let transferLog: ABIDecoder.DecodedLog;

            before(async () => {
                await mockRegistry.mockGetBeneficiaryReturnValueFor.sendTransactionAsync(
                    debtEntries[2].getIssuanceHash(),
                    TOKEN_OWNER_3,
                );

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

                [approvalLog, transferLog] = ABIDecoder.decodeLogs(res.logs);
            });

            it("should call modifyBeneficiary on debt registry", async () => {
                await expect(
                    mockRegistry.wasModifyBeneficiaryCalledWith.callAsync(
                        debtEntries[2].getIssuanceHash(),
                        TOKEN_OWNER_1,
                    ),
                ).to.eventually.be.true;
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

    describe("#setApprovalForAll()", () => {
        before(resetAndInitState);

        const SENDER = TOKEN_OWNER_1;

        describe("operator is the owner", () => {
            const OPERATOR = SENDER;

            it("should throw", async () => {
                await expect(
                    debtToken.setApprovalForAll.sendTransactionAsync(OPERATOR, true, {
                        from: OPERATOR,
                    }),
                ).to.eventually.be.rejectedWith(REVERT_ERROR);
            });
        });

        describe("operator is not the owner", () => {
            const OPERATOR = TOKEN_OWNER_2;

            describe("no operator approval set by the sender", () => {
                let res: Web3.TransactionReceipt;
                let logs: ABIDecoder.DecodedLog[];

                before(async () => {
                    const txHash = await debtToken.setApprovalForAll.sendTransactionAsync(
                        OPERATOR,
                        true,
                        { from: SENDER },
                    );

                    res = await web3.eth.getTransactionReceipt(txHash);
                    logs = ABIDecoder.decodeLogs(res.logs);
                });

                it("approves the operator", async () => {
                    await expect(
                        debtToken.isApprovedForAll.callAsync(SENDER, OPERATOR),
                    ).to.eventually.equal(true);
                });

                it("emits an approval event", async () => {
                    const [approvalForAllLog] = ABIDecoder.decodeLogs(res.logs);
                    const logExpected = LogApprovalForAll(
                        debtToken.address,
                        SENDER,
                        OPERATOR,
                        true,
                    );

                    expect(logs.length).equal(1);
                    expect(approvalForAllLog).to.deep.equal(logExpected);
                });
            });

            describe("operator was set as not approved", () => {
                beforeEach(async () => {
                    await debtToken.setApprovalForAll.sendTransactionAsync(OPERATOR, false, {
                        from: SENDER,
                    });
                });

                it("approves the operator", async () => {
                    await debtToken.setApprovalForAll.sendTransactionAsync(OPERATOR, true, {
                        from: SENDER,
                    });

                    await expect(
                        debtToken.isApprovedForAll.callAsync(SENDER, OPERATOR),
                    ).to.eventually.equal(true);
                });

                it("emits an approval event", async () => {
                    const txHash = await debtToken.setApprovalForAll.sendTransactionAsync(
                        OPERATOR,
                        true,
                        { from: SENDER },
                    );

                    const res = await web3.eth.getTransactionReceipt(txHash);

                    const [approvalForAllLog] = ABIDecoder.decodeLogs(res.logs);
                    const logExpected = LogApprovalForAll(
                        debtToken.address,
                        SENDER,
                        OPERATOR,
                        true,
                    );

                    expect(approvalForAllLog).to.deep.equal(logExpected);
                });

                it("can unset the operator approval", async () => {
                    await debtToken.setApprovalForAll.sendTransactionAsync(OPERATOR, false, {
                        from: SENDER,
                    });

                    await expect(
                        debtToken.isApprovedForAll.callAsync(SENDER, OPERATOR),
                    ).to.eventually.equal(false);
                });
            });

            describe("operator was already approved", () => {
                beforeEach(async () => {
                    await debtToken.setApprovalForAll.sendTransactionAsync(OPERATOR, true, {
                        from: SENDER,
                    });
                });

                it("keeps the approval to the given address", async () => {
                    await debtToken.setApprovalForAll.sendTransactionAsync(OPERATOR, true, {
                        from: SENDER,
                    });

                    await expect(
                        debtToken.isApprovedForAll.callAsync(SENDER, OPERATOR),
                    ).to.eventually.equal(true);
                });

                it("emits an approval event", async () => {
                    const txHash = await debtToken.setApprovalForAll.sendTransactionAsync(
                        OPERATOR,
                        true,
                        { from: SENDER },
                    );

                    const res = await web3.eth.getTransactionReceipt(txHash);

                    const [approvalForAllLog] = ABIDecoder.decodeLogs(res.logs);
                    const logExpected = LogApprovalForAll(
                        debtToken.address,
                        SENDER,
                        OPERATOR,
                        true,
                    );

                    expect(approvalForAllLog).to.deep.equal(logExpected);
                });
            });
        });
    });

    describe("#getApproved()", () => {
        const SENDER = TOKEN_OWNER_1;
        let SENDER_TOKEN_ID: BigNumber;
        const APPROVED = TOKEN_OWNER_2;

        before(async () => {
            await resetAndInitState();

            // debtEntries is filled after resetAndInitState is called
            SENDER_TOKEN_ID = debtEntries[0].getTokenId();
        });

        describe("token is approved", () => {
            before(async () => {
                await debtToken.approve.sendTransactionAsync(APPROVED, SENDER_TOKEN_ID, {
                    from: SENDER,
                });
            });

            it("should return correct approved address", async () => {
                await expect(debtToken.getApproved.callAsync(SENDER_TOKEN_ID)).to.eventually.equal(
                    APPROVED,
                );
            });
        });

        describe("token is not approved", () => {
            before(async () => {
                // clear approval for sender's token
                await debtToken.approve.sendTransactionAsync(NULL_ADDRESS, SENDER_TOKEN_ID, {
                    from: SENDER,
                });
            });

            it("should return zero address", async () => {
                await expect(
                    debtToken.getApproved.callAsync(SENDER_TOKEN_ID),
                ).to.eventually.bignumber.equal(NULL_ADDRESS);
            });
        });
    });

    describe("#isApprovedForAll", () => {
        before(resetAndInitState);

        const OWNER = TOKEN_OWNER_1;
        const OPERATOR = TOKEN_OWNER_2;

        describe("operator is approved for an owner", () => {
            before(async () => {
                await debtToken.setApprovalForAll.sendTransactionAsync(OPERATOR, true, {
                    from: OWNER,
                });
            });

            it("should return true", async () => {
                await expect(
                    debtToken.isApprovedForAll.callAsync(OWNER, OPERATOR),
                ).to.eventually.equal(true);
            });
        });

        describe("operator is not approved for an owner", () => {
            before(async () => {
                await debtToken.setApprovalForAll.sendTransactionAsync(OPERATOR, false, {
                    from: OWNER,
                });
            });

            it("should return false", async () => {
                await expect(
                    debtToken.isApprovedForAll.callAsync(OWNER, OPERATOR),
                ).to.eventually.equal(false);
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
                        debtEntries[1].getTokenId(),
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
            describe("...from himself to himself", () => {
                let res: Web3.TransactionReceipt;
                let approvalLog: ABIDecoder.DecodedLog;
                let transferLog: ABIDecoder.DecodedLog;
                let debtEntry: DebtRegistryEntry;
                let TOKEN_ID: BigNumber;
                const OWNER = TOKEN_OWNER_1;
                const APPROVED_OWNER = TOKEN_OWNER_2;

                before(async () => {
                    TOKEN_ID = debtEntries[0].getTokenId();
                    debtEntry = debtEntries[0];

                    await debtToken.approve.sendTransactionAsync(APPROVED_OWNER, TOKEN_ID, {
                        from: OWNER,
                    });

                    const txHash = await debtToken.transferFrom.sendTransactionAsync(
                        OWNER,
                        OWNER,
                        TOKEN_ID,
                        { from: OWNER },
                    );

                    res = await web3.eth.getTransactionReceipt(txHash);
                    [approvalLog, transferLog] = ABIDecoder.decodeLogs(res.logs);
                });

                it("should not call registry.modifyBeneficiary with his own address", async () => {
                    await expect(
                        mockRegistry.wasModifyBeneficiaryCalledWith.callAsync(
                            debtEntry.getIssuanceHash(),
                            OWNER,
                        ),
                    ).to.eventually.be.false;
                });

                it("keeps ownership of the token", async () => {
                    await expect(debtToken.ownerOf.callAsync(TOKEN_ID)).to.eventually.be.equal(
                        OWNER,
                    );
                });

                it("clears the approval for the token ID", async () => {
                    await expect(debtToken.getApproved.callAsync(TOKEN_ID)).to.eventually.be.equal(
                        NULL_ADDRESS,
                    );
                });

                it("should emit approval clear log", () => {
                    const logExpected = LogApproval(
                        debtToken.address,
                        OWNER,
                        NULL_ADDRESS,
                        TOKEN_ID,
                    );

                    expect(approvalLog).to.deep.equal(logExpected);
                });

                it("should emit transfer log", () => {
                    const logExpected = LogTransfer(debtToken.address, OWNER, OWNER, TOKEN_ID);

                    expect(transferLog).to.deep.equal(logExpected);
                });

                it("keeps the owner balance", async () => {
                    await expect(
                        debtToken.balanceOf.callAsync(OWNER),
                    ).to.be.eventually.bignumber.equal(1);
                });

                it("keeps same tokens by index", async () => {
                    await expect(
                        debtToken.tokenOfOwnerByIndex.callAsync(OWNER, INDEX_0),
                    ).to.eventually.bignumber.equal(TOKEN_ID);

                    // balance of OWNER is 1. Hence INDEX_1 should throw
                    await expect(
                        debtToken.tokenOfOwnerByIndex.callAsync(OWNER, INDEX_1),
                    ).to.eventually.be.rejectedWith(REVERT_ERROR);
                });
            });

            describe("...to null address", () => {
                before(async () => {
                    await debtToken.approve.sendTransactionAsync(
                        TOKEN_OWNER_2,
                        debtEntries[0].getTokenId(),
                        { from: TOKEN_OWNER_1 },
                    );
                });

                it("should throw", async () => {
                    await expect(
                        debtToken.transferFrom.sendTransactionAsync(
                            TOKEN_OWNER_1,
                            NULL_ADDRESS,
                            debtEntries[0].getTokenId(),
                            { from: TOKEN_OWNER_2 },
                        ),
                    ).to.eventually.be.rejectedWith(REVERT_ERROR);
                });
            });

            describe("...from other owner to himself", () => {
                let res: Web3.TransactionReceipt;
                let approvalLog: ABIDecoder.DecodedLog;
                let transferLog: ABIDecoder.DecodedLog;

                before(async () => {
                    await debtToken.approve.sendTransactionAsync(
                        TOKEN_OWNER_2,
                        debtEntries[0].getTokenId(),
                        { from: TOKEN_OWNER_1 },
                    );

                    const txHash = await debtToken.transferFrom.sendTransactionAsync(
                        TOKEN_OWNER_1,
                        TOKEN_OWNER_2,
                        debtEntries[0].getTokenId(),
                        { from: TOKEN_OWNER_2 },
                    );
                    res = await web3.eth.getTransactionReceipt(txHash);

                    [approvalLog, transferLog] = ABIDecoder.decodeLogs(res.logs);
                });

                it("should call registry.modifyBeneficiary with his own address", async () => {
                    await expect(
                        mockRegistry.wasModifyBeneficiaryCalledWith.callAsync(
                            debtEntries[0].getIssuanceHash(),
                            TOKEN_OWNER_2,
                        ),
                    ).to.eventually.be.true;
                });

                it("should emit approval clear log", () => {
                    const logExpected = LogApproval(
                        debtToken.address,
                        TOKEN_OWNER_1,
                        NULL_ADDRESS,
                        debtEntries[0].getTokenId(),
                    );

                    expect(approvalLog).to.deep.equal(logExpected);
                });

                it("should emit transfer log", () => {
                    const logExpected = LogTransfer(
                        debtToken.address,
                        TOKEN_OWNER_1,
                        TOKEN_OWNER_2,
                        debtEntries[0].getTokenId(),
                    );

                    expect(transferLog).to.deep.equal(logExpected);
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
    });

    describe("#safeTransferFrom()", () => {
        beforeEach(resetAndInitState);

        const safelyTransferWithData = async (
            from: string,
            to: string,
            tokenID: BigNumber,
            data: string,
        ) => {
            return await sendTransaction(
                debtTokenWeb3ContractInstance,
                "safeTransferFrom",
                "address,address,uint256,bytes",
                [from, to, tokenID, data],
                { from: from },
            );
        };

        const safelyTransferWithoutData = async (from: string, to: string, tokenID: BigNumber) => {
            return await sendTransaction(
                debtTokenWeb3ContractInstance,
                "safeTransferFrom",
                "address,address,uint256",
                [from, to, tokenID],
                { from: from },
            );
        };

        const shouldSafelyTransfer = async (to?: string) => {
            describe("with data", () => {
                it("should call `onERC721Received`", async function() {
                    const data = "0x42";
                    const tokenID = debtEntries[0].getTokenId();
                    await safelyTransferWithData(
                        TOKEN_OWNER_1,
                        to ? to : receiver.address,
                        tokenID,
                        data,
                    );
                    expect(
                        receiver.wasOnERC721ReceivedCalledWith.callAsync(
                            TOKEN_OWNER_1,
                            tokenID,
                            data,
                        ),
                    ).to.eventually.be.true;
                });
            });
            describe("without data", () => {
                it("should call `onERC721Received`", async function() {
                    const tokenID = debtEntries[0].getTokenId();
                    await safelyTransferWithoutData(
                        TOKEN_OWNER_1,
                        to ? to : receiver.address,
                        tokenID,
                    );
                    expect(
                        receiver.wasOnERC721ReceivedCalledWith.callAsync(
                            TOKEN_OWNER_1,
                            tokenID,
                            "",
                        ),
                    ).to.eventually.be.true;
                });
            });
        };

        const shouldNotSafelyTransfer = async (toReceiver: boolean = true) => {
            describe("with data", () => {
                it("should revert", async function() {
                    const data = "0x42";
                    const tokenID = debtEntries[0].getTokenId();
                    expect(
                        safelyTransferWithData(
                            TOKEN_OWNER_1,
                            toReceiver ? receiver.address : mockRegistry.address,
                            tokenID,
                            data,
                        ),
                    ).to.eventually.be.rejectedWith(REVERT_ERROR);
                });
            });
            describe("without data", () => {
                it("should revert", async function() {
                    const tokenID = debtEntries[0].getTokenId();
                    expect(
                        safelyTransferWithoutData(
                            TOKEN_OWNER_1,
                            toReceiver ? receiver.address : mockRegistry.address,
                            tokenID,
                        ),
                    ).to.eventually.be.rejectedWith(REVERT_ERROR);
                });
            });
        };

        describe("to a valid receiver contract", () => {
            shouldSafelyTransfer();
        });

        describe("to a receiver contract returning an unexpected value", () => {
            beforeEach(async () => {
                await receiver.setReturnValueForERC721ReceivedHook.sendTransactionAsync("0x42");
            });

            shouldNotSafelyTransfer();
        });

        describe("to a receiver contract that throws", () => {
            beforeEach(async () => {
                await receiver.setShouldRevert.sendTransactionAsync(true);
            });

            shouldNotSafelyTransfer();
        });

        describe("to a contract that does not implement the required function", () => {
            shouldNotSafelyTransfer(false);
        });
    });
});
