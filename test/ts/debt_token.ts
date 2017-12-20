import * as BigNumber from "bignumber.js";
import * as chai from "chai";
import * as _ from "lodash";
import * as ABIDecoder from "abi-decoder";

import {DebtRegistryContract} from "../../types/debt_registry";
import {DebtTokenContract} from "../../types/debt_token";
import {
    Address,
} from "../../types/common";
import {BigNumberSetup} from "./test_utils/bignumber_setup";
import {chaiSetup} from "./test_utils/chai_setup.js";
import {INVALID_OPCODE, REVERT_ERROR} from "./test_utils/constants";
import {DebtRegistryEntry} from "../../types/registry/entry";

// Configure BigNumber exponentiation
BigNumberSetup.configure();

// Set up Chai
chaiSetup.configure();
const expect = chai.expect;

const debtRegistryContract = artifacts.require("DebtRegistry");
const debtTokenContract = artifacts.require("DebtToken");
const repaymentRouterContract = artifacts.require("RepaymentRouter");

// Initialize ABI Decoder for deciphering log receipts
ABIDecoder.addABI(debtRegistryContract.abi);
ABIDecoder.addABI(debtTokenContract.abi);

contract("Debt Token", (ACCOUNTS) => {
    let debtRegistry: DebtRegistryContract;
    let debtToken: DebtTokenContract;

    let debtEntries: DebtRegistryEntry[];

    const NFT_NAME = "DebtToken";
    const NFT_SYMBOL = "DDT";

    const CONTRACT_OWNER = ACCOUNTS[0];
    const TOKEN_OWNER_1 = ACCOUNTS[1];
    const TOKEN_OWNER_2 = ACCOUNTS[2];
    const TOKEN_OWNER_3 = ACCOUNTS[3];
    const TOKEN_OWNERS = [
        TOKEN_OWNER_1,
        TOKEN_OWNER_2,
        TOKEN_OWNER_3
    ]

    const INDEX_0 = new BigNumber.BigNumber(0);
    const INDEX_1 = new BigNumber.BigNumber(1);
    const INDEX_2 = new BigNumber.BigNumber(2);


    const NONEXISTENT_TOKEN_ID = 13;
    const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";

    const ARBITRARY_TERMS_CONTRACT_PARAMS_1
        = "#1: arbitrary terms contract param string";
    const ARBITRARY_TERMS_CONTRACT_PARAMS_2
        = "#2: arbitrary terms contract param string";
    const ARBITRARY_TERMS_CONTRACT_PARAMS_3
        = "#3: arbitrary terms contract param string";
    const ARBITRARY_TERMS_CONTRACT_PARAMS = [
        ARBITRARY_TERMS_CONTRACT_PARAMS_1,
        ARBITRARY_TERMS_CONTRACT_PARAMS_2,
        ARBITRARY_TERMS_CONTRACT_PARAMS_3
    ];

    const TX_DEFAULTS = { from: CONTRACT_OWNER, gas: 4000000 };

    const resetAndInitState = async () => {
        const debtRegistryTruffle = await debtRegistryContract.new({ from: CONTRACT_OWNER });
        const debtTokenTruffle = await debtTokenContract.new(debtRegistryTruffle.address,
            { from: CONTRACT_OWNER });

        // The typings we use ingest vanilla Web3 contracts, so we convert the
        // contract instance deployed by truffle into a Web3 contract instance
        const debtRegistryWeb3Contract =
            web3.eth.contract(debtRegistryTruffle.abi).at(debtRegistryTruffle.address)
        const debtTokenWeb3Contract =
            web3.eth.contract(debtTokenTruffle.abi).at(debtTokenTruffle.address)

        debtRegistry = new DebtRegistryContract(debtRegistryWeb3Contract,
            TX_DEFAULTS);
        debtToken = new DebtTokenContract(debtTokenWeb3Contract,
            TX_DEFAULTS);


        await debtRegistry.addAuthorizedInsertAgent.sendTransactionAsync(CONTRACT_OWNER,
            { from: CONTRACT_OWNER });
        await debtRegistry.addAuthorizedEditAgent.sendTransactionAsync(debtToken.address,
            { from: CONTRACT_OWNER });

        const repaymentRouterContractInstance =
            await repaymentRouterContract.deployed();

        debtEntries = _.map(TOKEN_OWNERS,
            (tokenOwner: Address, i: number) => {
                return new DebtRegistryEntry({
                    version: repaymentRouterContractInstance.address,
                    creditor: tokenOwner,
                    termsContract: debtRegistry.address,
                    termsContractParameters: ARBITRARY_TERMS_CONTRACT_PARAMS[i]
                });
            });

        const registryInsertPromises = _.map(debtEntries,
            (entry: DebtRegistryEntry) => {
                return debtRegistry.insert.sendTransactionAsync(
                    entry.getVersion(),
                    entry.getCreditor(),
                    entry.getTermsContract(),
                    entry.getTermsContractParameters(),
                    entry.getSalt(),
                    { from: CONTRACT_OWNER}
                )
            });

        await Promise.all(registryInsertPromises);
    }

    before(resetAndInitState);

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
        it("should return 3 for total supply", async () => {
            const totalSupply = await debtToken.totalSupply.callAsync();
            expect(totalSupply).to.bignumber.equal(3);
        });
    });

    describe('#balanceOf()', () => {
        before(resetAndInitState);

        it("should return 1 for each owner's balance", async () => {
            const ownerOneBalance = await debtToken.balanceOf.callAsync(TOKEN_OWNER_1);
            const ownerTwoBalance = await debtToken.balanceOf.callAsync(TOKEN_OWNER_2);
            const ownerThreeBalance = await debtToken.balanceOf.callAsync(TOKEN_OWNER_3);

            expect(ownerOneBalance).to.bignumber.equal(1);
            expect(ownerTwoBalance).to.bignumber.equal(1);
            expect(ownerThreeBalance).to.bignumber.equal(1);
        });
    });

    describe('#tokenOfOwnerByIndex()', async () => {
        before(resetAndInitState);

        it("should return current token at index 0 for each user", async () => {
            const ownerOneFirstToken =
                await debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_1, INDEX_0);
            const ownerTwoFirstToken =
                await debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_2, INDEX_0);
            const ownerThreeFirstToken =
                await debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_3, INDEX_0);

            expect(ownerOneFirstToken).to.bignumber.equal(debtEntries[0].getTokenId());
            expect(ownerTwoFirstToken).to.bignumber.equal(debtEntries[1].getTokenId());
            expect(ownerThreeFirstToken).to.bignumber.equal(debtEntries[2].getTokenId());
        });

        it("should throw if called at index > balanceOf(owner)", async () => {
            await expect(debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_1, INDEX_1))
                .to.eventually.be.rejectedWith(REVERT_ERROR);
            await expect(debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_2, INDEX_1))
                .to.eventually.be.rejectedWith(REVERT_ERROR);
            await expect(debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_3, INDEX_1))
                .to.eventually.be.rejectedWith(REVERT_ERROR);
        });
    });
    //
    // describe("#tokenMetadata()", async () => {
    //     before(resetAndInitNft);
    //
    //     it("should return correct metadata for each token", async () => {
    //         await expect(debtToken.tokenMetadata(TOKEN_ID_1))
    //             .to.eventually.equal(METADATA_STRING_1);
    //         await expect(debtToken.tokenMetadata(TOKEN_ID_2))
    //             .to.eventually.equal(METADATA_STRING_2);
    //         await expect(debtToken.tokenMetadata(TOKEN_ID_3))
    //             .to.eventually.equal(METADATA_STRING_3);
    //     });
    // });
    //
    // describe("#transfer()", async () => {
    //     before(resetAndInitNft);
    //
    //     describe("user transfers token he doesn't own", async () => {
    //         it("should throw", async () => {
    //             await expect(debtToken.transfer(TOKEN_OWNER_1, TOKEN_ID_2,
    //                 { from: TOKEN_OWNER_1 })).to.eventually.be
    //                 .rejectedWith(REVERT_ERROR);
    //         });
    //     });
    //
    //     describe("user transfers token that doesn't exist", async () => {
    //         it("should throw", async () => {
    //             await expect(debtToken.transfer(TOKEN_OWNER_1, NONEXISTENT_TOKEN_ID,
    //                 { from: TOKEN_OWNER_1 })).to.eventually.be
    //                 .rejectedWith(REVERT_ERROR);
    //         });
    //     });
    //
    //     describe("user transfers token he owns", async () => {
    //         let res: TransactionReturnPayload;
    //
    //         before(async () => {
    //             res = await debtToken.transfer(TOKEN_OWNER_2, TOKEN_ID_1,
    //                 { from: TOKEN_OWNER_1 });
    //         });
    //
    //         it("should emit transfer log", async () => {
    //             const logReturned = res.logs[0] as Log;
    //             const logExpected =
    //                 LogTransfer(TOKEN_OWNER_1, TOKEN_OWNER_2, TOKEN_ID_1) as Log;
    //
    //             expect(logReturned).to.solidityLogs.equal(logExpected);
    //         });
    //
    //         it("should belong to new owner", async () => {
    //             await expect(debtToken.ownerOf(TOKEN_ID_1))
    //                 .to.eventually.equal(TOKEN_OWNER_2);
    //         });
    //
    //         it("should update owners' token balances correctly", async () => {
    //             await expect(debtToken.balanceOf(TOKEN_OWNER_1))
    //                 .to.eventually.bignumber.equal(0);
    //             await expect(debtToken.balanceOf(TOKEN_OWNER_2))
    //                 .to.eventually.bignumber.equal(2);
    //             await expect(debtToken.balanceOf(TOKEN_OWNER_3))
    //                 .to.eventually.bignumber.equal(1);
    //         });
    //
    //         it("should update owners' iterable token lists", async () => {
    //             // TOKEN_OWNER_1
    //             await expect(debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_1, INDEX_0))
    //                 .to.eventually.be.rejectedWith(INVALID_OPCODE);
    //
    //             // TOKEN_OWNER_2
    //             await expect(debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_2, INDEX_0))
    //                 .to.eventually.bignumber.equal(TOKEN_ID_2);
    //             await expect(debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_2, 1))
    //                 .to.eventually.bignumber.equal(TOKEN_ID_1);
    //             await expect(debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_2, 2))
    //                 .to.eventually.be.rejectedWith(INVALID_OPCODE);
    //
    //             // TOKEN_OWNER_3
    //             await expect(debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_3, INDEX_0))
    //                 .to.eventually.bignumber.equal(TOKEN_ID_3);
    //             await expect(debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_3, 1))
    //                 .to.eventually.be.rejectedWith(INVALID_OPCODE);
    //         });
    //     });
    //
    //     describe("user transfers token he no longer owns", () => {
    //         it("should throw", async () => {
    //             await expect(debtToken.transfer(TOKEN_OWNER_2, TOKEN_ID_1,
    //                 { from: TOKEN_OWNER_1 })).to.eventually.be
    //                 .rejectedWith(REVERT_ERROR);
    //         });
    //     });
    //
    //     describe("user transfers token he owns to 0", () => {
    //         it("should throw", async () => {
    //             await expect(debtToken.transfer(NULL_ADDRESS, TOKEN_ID_1,
    //                 { from: TOKEN_OWNER_1 })).to.eventually.be
    //                 .rejectedWith(REVERT_ERROR);
    //         });
    //     });
    //
    //     describe("user transfers token he owns to himself", () => {
    //         let res: TransactionReturnPayload;
    //
    //         before(async () => {
    //             res = await debtToken.transfer(TOKEN_OWNER_2, TOKEN_ID_1,
    //                 { from: TOKEN_OWNER_2 });
    //         });
    //
    //         it("should emit transfer log", async () => {
    //             const logReturned = res.logs[0] as Log;
    //             const logExpected =
    //                 LogTransfer(TOKEN_OWNER_2, TOKEN_OWNER_2, TOKEN_ID_1) as Log;
    //
    //             expect(logReturned).to.solidityLogs.deep.equal(logExpected);
    //         });
    //
    //         it("should belong to same owner", async () => {
    //             await expect(debtToken.ownerOf(TOKEN_ID_1))
    //                 .to.eventually.equal(TOKEN_OWNER_2);
    //         });
    //
    //         it("should maintain owners' token balances correctly", async () => {
    //             await expect(debtToken.balanceOf(TOKEN_OWNER_1))
    //                 .to.eventually.bignumber.equal(0);
    //             await expect(debtToken.balanceOf(TOKEN_OWNER_2))
    //                 .to.eventually.bignumber.equal(2);
    //             await expect(debtToken.balanceOf(TOKEN_OWNER_3))
    //                 .to.eventually.bignumber.equal(1);
    //         });
    //
    //         it("should not modify owners' iterable token lists", async () => {
    //             // TOKEN_OWNER_1
    //             await expect(debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_1, INDEX_0))
    //                 .to.eventually.be.rejectedWith(INVALID_OPCODE);
    //
    //             // TOKEN_OWNER_2
    //             await expect(debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_2, INDEX_0))
    //                 .to.eventually.bignumber.equal(TOKEN_ID_2);
    //             await expect(debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_2, 1))
    //                 .to.eventually.bignumber.equal(TOKEN_ID_1);
    //             await expect(debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_2, 2))
    //                 .to.eventually.be.rejectedWith(INVALID_OPCODE);
    //
    //             // TOKEN_OWNER_3
    //             await expect(debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_3, INDEX_0))
    //                 .to.eventually.bignumber.equal(TOKEN_ID_3);
    //             await expect(debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_3, 1))
    //                 .to.eventually.be.rejectedWith(INVALID_OPCODE);
    //         });
    //     });
    //
    //
    //     describe("user transfers token with outstanding approval", () => {
    //         let res: TransactionReturnPayload;
    //
    //         before(async () => {
    //             await debtToken.approve(TOKEN_OWNER_1, TOKEN_ID_3,
    //                 { from: TOKEN_OWNER_3 });
    //             res = await debtToken.transfer(TOKEN_OWNER_1, TOKEN_ID_3,
    //                 { from: TOKEN_OWNER_3 });
    //         });
    //
    //         it("should emit approval clear log", () => {
    //             const logReturned = res.logs[0] as Log;
    //             const logExpected =
    //                 LogApproval(TOKEN_OWNER_1, NULL_ADDRESS, TOKEN_ID_3) as Log;
    //
    //             expect(logReturned).to.solidityLogs.deep.equal(logExpected);
    //         });
    //
    //         it("should emit transfer log", () => {
    //             const logReturned = res.logs[1] as Log;
    //             const logExpected =
    //                 LogTransfer(TOKEN_OWNER_3, TOKEN_OWNER_1, TOKEN_ID_3) as Log;
    //
    //             expect(logReturned).to.solidityLogs.deep.equal(logExpected);
    //         });
    //
    //         it("should belong to new owner", async () => {
    //             await expect(debtToken.ownerOf(TOKEN_ID_3))
    //                 .to.eventually.equal(TOKEN_OWNER_1);
    //         });
    //
    //         it("should update owners' token balances correctly", async () => {
    //             await expect(debtToken.balanceOf(TOKEN_OWNER_1))
    //                 .to.eventually.bignumber.equal(1);
    //             await expect(debtToken.balanceOf(TOKEN_OWNER_2))
    //                 .to.eventually.bignumber.equal(2);
    //             await expect(debtToken.balanceOf(TOKEN_OWNER_3))
    //                 .to.eventually.bignumber.equal(0);
    //         });
    //
    //         it("should update owners' iterable token lists", async () => {
    //             // TOKEN_OWNER_1
    //             await expect(debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_1, INDEX_0))
    //                 .to.eventually.bignumber.equal(TOKEN_ID_3);
    //             await expect(debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_1, 1))
    //                 .to.eventually.be.rejectedWith(INVALID_OPCODE);
    //
    //             // TOKEN_OWNER_2
    //             await expect(debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_2, INDEX_0))
    //                 .to.eventually.bignumber.equal(TOKEN_ID_2);
    //             await expect(debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_2, 1))
    //                 .to.eventually.bignumber.equal(TOKEN_ID_1);
    //             await expect(debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_2, 2))
    //                 .to.eventually.be.rejectedWith(INVALID_OPCODE);
    //
    //             // TOKEN_OWNER_3
    //             await expect(debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_3, INDEX_0))
    //                 .to.eventually.be.rejectedWith(INVALID_OPCODE);
    //         });
    //     });
    // });
    //
    // describe("#approve()", () => {
    //     before(resetAndInitNft);
    //
    //     describe("user approves transfer for token he doesn't own", () => {
    //         it("should throw", async () => {
    //             expect(debtToken.approve(TOKEN_OWNER_2, TOKEN_ID_1,
    //                 { from: TOKEN_OWNER_2 }))
    //                 .to.eventually.be.rejectedWith(REVERT_ERROR);
    //         });
    //     });
    //
    //     describe("user approves transfer for nonexistent token", () => {
    //         it("should throw", async () => {
    //             expect(debtToken.approve(TOKEN_OWNER_2, NONEXISTENT_TOKEN_ID,
    //                 { from: TOKEN_OWNER_2 }))
    //                 .to.eventually.be.rejectedWith(REVERT_ERROR);
    //         });
    //     });
    //
    //     describe("user approves himself for transferring token he owns", () => {
    //         it("should throw", async () => {
    //             expect(debtToken.approve(TOKEN_OWNER_1, TOKEN_ID_1,
    //                 { from: TOKEN_OWNER_1 }))
    //                 .to.eventually.be.rejectedWith(REVERT_ERROR);
    //         });
    //     });
    //
    //     describe("user owns token", () => {
    //         describe("user clears unset approval", () => {
    //             let res: TransactionReturnPayload;
    //
    //             before(async () => {
    //                 res = await debtToken.approve(NULL_ADDRESS, TOKEN_ID_1,
    //                     { from: TOKEN_OWNER_1 });
    //             });
    //
    //             it("should NOT emit approval event", async () => {
    //                 expect(res.logs.length).to.equal(0);
    //             });
    //
    //             it("should maintain cleared approval", async () => {
    //                 await expect(debtToken.getApproved(TOKEN_ID_1))
    //                     .to.eventually.equal(NULL_ADDRESS);
    //             });
    //         });
    //
    //         describe("user sets new approval", () => {
    //             let res: TransactionReturnPayload;
    //
    //             before(async () => {
    //                 res = await debtToken.approve(TOKEN_OWNER_2, TOKEN_ID_1,
    //                     { from: TOKEN_OWNER_1 });
    //             });
    //
    //             it("should return newly approved user as approved", async () => {
    //                 await expect(debtToken.getApproved(TOKEN_ID_1))
    //                     .to.eventually.equal(TOKEN_OWNER_2);
    //             });
    //
    //             it("should emit approval log", () => {
    //                 const logReturned = res.logs[0] as Log;
    //                 const logExpected =
    //                     LogApproval(TOKEN_OWNER_1, TOKEN_OWNER_2, TOKEN_ID_1) as Log;
    //
    //                 expect(logReturned).to.solidityLogs.deep.equal(logExpected);
    //             })
    //         });
    //
    //         describe("user changes token approval", () => {
    //             let res: TransactionReturnPayload;
    //
    //             before(async () => {
    //                 res = await debtToken.approve(TOKEN_OWNER_3, TOKEN_ID_1,
    //                     { from: TOKEN_OWNER_1 });
    //             });
    //
    //             it("should return newly approved user as approved", async () => {
    //                 await expect(debtToken.getApproved(TOKEN_ID_1))
    //                     .to.eventually.equal(TOKEN_OWNER_3);
    //             });
    //
    //             it("should emit approval log", () => {
    //                 const logReturned = res.logs[0] as Log;
    //                 const logExpected =
    //                     LogApproval(TOKEN_OWNER_1, TOKEN_OWNER_3, TOKEN_ID_1) as Log;
    //
    //                 expect(logReturned).to.solidityLogs.deep.equal(logExpected);
    //             })
    //         });
    //
    //         describe("user reaffirms approval", () => {
    //             let res: TransactionReturnPayload;
    //
    //             before(async () => {
    //                 res = await debtToken.approve(TOKEN_OWNER_3, TOKEN_ID_1,
    //                     { from: TOKEN_OWNER_1 });
    //             });
    //
    //             it("should return same approved user as approved", async () => {
    //                 await expect(debtToken.getApproved(TOKEN_ID_1))
    //                     .to.eventually.equal(TOKEN_OWNER_3);
    //             });
    //
    //             it("should emit approval log", () => {
    //                 const logReturned = res.logs[0] as Log;
    //                 const logExpected =
    //                     LogApproval(TOKEN_OWNER_1, TOKEN_OWNER_3, TOKEN_ID_1) as Log;
    //
    //                 expect(logReturned).to.solidityLogs.deep.equal(logExpected);
    //             })
    //         });
    //
    //         describe("user clears set approval", () => {
    //             let res: TransactionReturnPayload;
    //
    //             before(async () => {
    //                 res = await debtToken.approve(NULL_ADDRESS, TOKEN_ID_1,
    //                     { from: TOKEN_OWNER_1 });
    //             });
    //
    //             it("should return newly approved user as approved", async () => {
    //                 await expect(debtToken.getApproved(TOKEN_ID_1))
    //                     .to.eventually.equal(NULL_ADDRESS);
    //             });
    //
    //             it("should emit approval log", () => {
    //                 const logReturned = res.logs[0] as Log;
    //                 const logExpected =
    //                     LogApproval(TOKEN_OWNER_1, NULL_ADDRESS, TOKEN_ID_1) as Log;
    //
    //                 expect(logReturned).to.solidityLogs.deep.equal(logExpected);
    //             })
    //         });
    //     });
    // });
    //
    // describe("#transferFrom()", () => {
    //     before(resetAndInitNft);
    //
    //     describe("user transfers token from owner w/o approval...", () => {
    //         it("should throw", async () => {
    //             await expect(debtToken.transferFrom(TOKEN_OWNER_2, TOKEN_OWNER_3,
    //                 TOKEN_ID_1, { from: TOKEN_OWNER_3 }))
    //                 .to.eventually.be.rejectedWith(REVERT_ERROR);
    //         });
    //     });
    //
    //     describe("user transfers non-existent token", () => {
    //         it("should throw", async () => {
    //             await expect(debtToken.transferFrom(TOKEN_OWNER_2, TOKEN_OWNER_3,
    //                 NONEXISTENT_TOKEN_ID, { from: TOKEN_OWNER_3 }))
    //                 .to.eventually.be.rejectedWith(REVERT_ERROR);
    //         });
    //     });
    //
    //     describe("user transfers token from owner w/ approval...", () => {
    //         before(async () => {
    //             await debtToken.approve(TOKEN_OWNER_2, TOKEN_ID_1,
    //                 { from: TOKEN_OWNER_1 });
    //         });
    //
    //         describe("...from himself to himself", () => {
    //             it("should throw", async () => {
    //                 await expect(debtToken.transferFrom(TOKEN_OWNER_2, TOKEN_OWNER_2,
    //                     TOKEN_ID_2, { from: TOKEN_OWNER_2 }))
    //                     .to.eventually.be.rejectedWith(REVERT_ERROR);
    //             });
    //         });
    //
    //         describe("...to null address", () => {
    //             it("should throw", async () => {
    //                 await expect(debtToken.transferFrom(TOKEN_OWNER_1, NULL_ADDRESS,
    //                     TOKEN_ID_1, { from: TOKEN_OWNER_2 }))
    //                     .to.eventually.be.rejectedWith(REVERT_ERROR);
    //             });
    //         });
    //
    //         describe("...from other owner to himself", () => {
    //             let res: TransactionReturnPayload;
    //
    //             before(async () => {
    //                 res = await debtToken.transferFrom(TOKEN_OWNER_1, TOKEN_OWNER_3,
    //                     TOKEN_ID_1, { from: TOKEN_OWNER_2 });
    //             });
    //
    //             it("should emit approval clear log", () => {
    //                 const logReturned = res.logs[0] as Log;
    //                 const logExpected =
    //                     LogApproval(TOKEN_OWNER_1, NULL_ADDRESS, TOKEN_ID_1) as Log;
    //
    //                 expect(logReturned).to.solidityLogs.deep.equal(logExpected);
    //             });
    //
    //             it("should emit transfer log", () => {
    //                 const logReturned = res.logs[1] as Log;
    //                 const logExpected =
    //                     LogTransfer(TOKEN_OWNER_1, TOKEN_OWNER_3, TOKEN_ID_1) as Log;
    //
    //                 expect(logReturned).to.solidityLogs.deep.equal(logExpected);
    //             });
    //
    //             it("should belong to new owner", async () => {
    //                 await expect(debtToken.ownerOf(TOKEN_ID_1))
    //                     .to.eventually.equal(TOKEN_OWNER_3);
    //             });
    //
    //             it("should update owners' token balances correctly", async () => {
    //                 await expect(debtToken.balanceOf(TOKEN_OWNER_1))
    //                     .to.eventually.bignumber.equal(0);
    //                 await expect(debtToken.balanceOf(TOKEN_OWNER_2))
    //                     .to.eventually.bignumber.equal(1);
    //                 await expect(debtToken.balanceOf(TOKEN_OWNER_3))
    //                     .to.eventually.bignumber.equal(2);
    //             });
    //
    //             it("should update owners' iterable token lists", async () => {
    //                 // TOKEN_OWNER_1
    //                 await expect(debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_1, INDEX_0))
    //                     .to.eventually.be.rejectedWith(INVALID_OPCODE);
    //
    //                 // TOKEN_OWNER_2
    //                 await expect(debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_2, INDEX_0))
    //                     .to.eventually.bignumber.equal(TOKEN_ID_2);
    //                 await expect(debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_2, 1))
    //                     .to.eventually.be.rejectedWith(INVALID_OPCODE);
    //
    //                 // TOKEN_OWNER_3
    //                 await expect(debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_3, INDEX_0))
    //                     .to.eventually.bignumber.equal(TOKEN_ID_3);
    //                 await expect(debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_3, 1))
    //                     .to.eventually.bignumber.equal(TOKEN_ID_1);
    //                 await expect(debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_3, 2))
    //                     .to.eventually.be.rejectedWith(INVALID_OPCODE);
    //             });
    //         });
    //     });
    // });

    // TODO: Add tests for getOwnerTokens
});
