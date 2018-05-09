// External
import * as chai from "chai";
import { BigNumber } from "bignumber.js";

// Wrappers
import { DharmaMultiSigWalletContract } from "../../../types/generated/dharma_multi_sig_wallet";
import { MockDebtTokenContract } from "../../../types/generated/mock_debt_token";

// Test Utils
import { BigNumberSetup } from "../test_utils/bignumber_setup";
import ChaiSetup from "../test_utils/chai_setup";
import { REVERT_ERROR } from "../test_utils/constants";
import {
    multiSigExecuteAfterTimelock,
    multiSigExecutePauseImmediately,
    submitMultiSigTransaction,
} from "../test_utils/multisig";
import { Web3Utils } from "../../../utils/web3_utils";

// Configure BigNumber exponentiation
BigNumberSetup.configure();

// Set up Chai
ChaiSetup.configure();
const expect = chai.expect;

const dharmaMultiSigWallet = artifacts.require("DharmaMultiSigWallet");

contract("DharmaMultiSigWallet (Integration Tests)", (ACCOUNTS) => {
    const OWNERS = ACCOUNTS.slice(0, 5);
    const NON_OWNER = ACCOUNTS[5];
    const CONFIRMATION_THRESHOLD = 3;
    const TIMELOCK_IN_SECONDS = 60 * 60 * 24 * 7; // 7 days

    let multisig: DharmaMultiSigWalletContract;

    let mockDebtToken: MockDebtTokenContract;

    const TX_DEFAULTS = { from: OWNERS[0], gas: 4000000 };

    before(async () => {
        multisig = await DharmaMultiSigWalletContract.deployed(web3, TX_DEFAULTS);
        mockDebtToken = await MockDebtTokenContract.deployed(web3, TX_DEFAULTS);

        await mockDebtToken.reset.sendTransactionAsync();
    });

    describe("Initialization", () => {
        it("should have correct test owners", async () => {
            await expect(multisig.getOwners.callAsync()).to.eventually.deep.equal(OWNERS);
        });

        it("should have correct confirmation threshold", async () => {
            await expect(multisig.required.callAsync()).to.eventually.bignumber.equal(
                CONFIRMATION_THRESHOLD,
            );
        });

        it("should have correct timelock in seconds", async () => {
            await expect(multisig.timelockInSeconds.callAsync()).to.eventually.bignumber.equal(
                TIMELOCK_IN_SECONDS,
            );
        });
    });

    describe("#changeTimeLock", () => {
        const ALTERNATIVE_TIMELOCK_IN_SECONDS = 60 * 60 * 24 * 14; // 14 days

        before(async () => {
            await multiSigExecuteAfterTimelock(
                web3,
                multisig,
                multisig,
                "changeTimeLock",
                ACCOUNTS,
                [ALTERNATIVE_TIMELOCK_IN_SECONDS],
            );
        });

        after(async () => {
            await multiSigExecuteAfterTimelock(
                web3,
                multisig,
                multisig,
                "changeTimeLock",
                ACCOUNTS,
                [TIMELOCK_IN_SECONDS],
                ALTERNATIVE_TIMELOCK_IN_SECONDS,
            );
        });

        it("should change time lock period", async () => {
            await expect(multisig.timelockInSeconds.callAsync()).to.eventually.bignumber.equal(
                ALTERNATIVE_TIMELOCK_IN_SECONDS,
            );
        });
    });

    describe("#confirmTransaction", () => {
        const UNSUBMITTED_TRANSACTION_INDEX = new BigNumber(13);

        describe("tx has not been submitted yet", () => {
            it("should throw", async () => {
                await expect(
                    multisig.confirmTransaction.sendTransactionAsync(
                        UNSUBMITTED_TRANSACTION_INDEX,
                        { from: OWNERS[0] },
                    ),
                ).to.eventually.be.rejectedWith(REVERT_ERROR);
            });
        });

        describe("tx has been submitted", () => {
            let transactionId: BigNumber;

            before(async () => {
                transactionId = await submitMultiSigTransaction(
                    multisig,
                    mockDebtToken,
                    "addAuthorizedMintAgent",
                    [NON_OWNER],
                    { from: OWNERS[0] },
                );
            });

            describe("non-owner confirms tx", () => {
                it("should throw", async () => {
                    await expect(
                        multisig.confirmTransaction.sendTransactionAsync(transactionId, {
                            from: NON_OWNER,
                        }),
                    ).to.eventually.be.rejectedWith(REVERT_ERROR);
                });
            });

            describe("owner confirms tx", () => {
                describe("when he has not yet confirmed it", () => {
                    it("should successfully confirm", async () => {
                        await multisig.confirmTransaction.sendTransactionAsync(transactionId, {
                            from: OWNERS[1],
                        });

                        // If tx is confirmed successfully, it should now have 2 confirmations,
                        // given that the transaction submission endowed it with one confirmation
                        // at the outset.
                        const expectedConfirmationCount = 2;

                        await expect(
                            multisig.getConfirmationCount.callAsync(transactionId),
                        ).to.eventually.bignumber.equal(expectedConfirmationCount);
                    });
                });

                describe("when he has already confirmed it", () => {
                    it("should throw", async () => {
                        await expect(
                            multisig.confirmTransaction.sendTransactionAsync(transactionId, {
                                from: OWNERS[1],
                            }),
                        ).to.eventually.be.rejectedWith(REVERT_ERROR);
                    });
                });
            });
        });
    });

    describe("#revokeConfirmation", () => {
        const UNSUBMITTED_TRANSACTION_INDEX = new BigNumber(13);

        describe("tx has not been submitted yet", () => {
            it("should throw", async () => {
                await expect(
                    multisig.revokeConfirmation.sendTransactionAsync(
                        UNSUBMITTED_TRANSACTION_INDEX,
                        { from: OWNERS[0] },
                    ),
                ).to.eventually.be.rejectedWith(REVERT_ERROR);
            });
        });

        describe("tx has been submitted", () => {
            let transactionId: BigNumber;

            before(async () => {
                transactionId = await submitMultiSigTransaction(
                    multisig,
                    mockDebtToken,
                    "addAuthorizedMintAgent",
                    [NON_OWNER],
                    { from: OWNERS[0] },
                );
            });

            describe("non-owner revokes confirmation", () => {
                it("should throw", async () => {
                    await expect(
                        multisig.revokeConfirmation.sendTransactionAsync(transactionId, {
                            from: NON_OWNER,
                        }),
                    ).to.eventually.be.rejectedWith(REVERT_ERROR);
                });
            });

            describe("owner has not already confirmed it", () => {
                it("should throw", async () => {
                    await expect(
                        multisig.revokeConfirmation.sendTransactionAsync(transactionId, {
                            from: OWNERS[1],
                        }),
                    ).to.eventually.be.rejectedWith(REVERT_ERROR);
                });
            });

            describe("owner has already confirmed it", () => {
                it("should successfully revoke", async () => {
                    await multisig.revokeConfirmation.sendTransactionAsync(transactionId, {
                        from: OWNERS[0],
                    });

                    // If tx is confirmed successfully, it should now have 0 confirmations,
                    // given that the transaction submission endowed it with one confirmation
                    // at the outset.
                    const expectedConfirmationCount = 0;

                    await expect(
                        multisig.getConfirmationCount.callAsync(transactionId),
                    ).to.eventually.bignumber.equal(expectedConfirmationCount);
                });
            });
        });
    });

    describe("#executeTransaction", () => {
        const UNSUBMITTED_TRANSACTION_INDEX = new BigNumber(13);

        describe("tx has not been submitted yet", () => {
            it("should throw", async () => {
                await expect(
                    multisig.executeTransaction.sendTransactionAsync(
                        UNSUBMITTED_TRANSACTION_INDEX,
                        { from: OWNERS[0] },
                    ),
                ).to.eventually.be.rejectedWith(REVERT_ERROR);
            });
        });

        describe("transaction has been submitted", () => {
            let transactionId: BigNumber;

            before(async () => {
                transactionId = await submitMultiSigTransaction(
                    multisig,
                    mockDebtToken,
                    "addAuthorizedMintAgent",
                    [NON_OWNER],
                    { from: OWNERS[0] },
                );
            });

            describe("transaction has not been sufficiently confirmed", () => {
                before(async () => {
                    await multisig.confirmTransaction.sendTransactionAsync(transactionId, {
                        from: OWNERS[1],
                    });
                });

                it("should throw", async () => {
                    await expect(
                        multisig.executeTransaction.sendTransactionAsync(transactionId),
                    ).to.eventually.be.rejectedWith(REVERT_ERROR);
                });
            });

            describe("transaction has been sufficiently confirmed", () => {
                before(async () => {
                    await multisig.confirmTransaction.sendTransactionAsync(transactionId, {
                        from: OWNERS[2],
                    });
                });

                describe("timelock period has not yet passed", () => {
                    it("should throw", async () => {
                        await expect(
                            multisig.executeTransaction.sendTransactionAsync(transactionId),
                        ).to.eventually.be.rejectedWith(REVERT_ERROR);
                    });
                });

                describe("timelock period has passed", () => {
                    it("should execute transaction", async () => {
                        const web3Utils = new Web3Utils(web3);

                        await web3Utils.increaseTime(TIMELOCK_IN_SECONDS);

                        await multisig.executeTransaction.sendTransactionAsync(transactionId);

                        await expect(
                            mockDebtToken.wasAddAuthorizedMintAgentCalledWith.callAsync(NON_OWNER),
                        ).to.eventually.be.true;
                    });
                });
            });
        });
    });

    describe("#executePauseTransactionImmediately", () => {
        const UNSUBMITTED_TRANSACTION_INDEX = new BigNumber(13);

        describe("tx has not been submitted yet", () => {
            it("should throw", async () => {
                await expect(
                    multisig.executePauseTransactionImmediately.sendTransactionAsync(
                        UNSUBMITTED_TRANSACTION_INDEX,
                        { from: OWNERS[0] },
                    ),
                ).to.eventually.be.rejectedWith(REVERT_ERROR);
            });
        });

        describe("non-pause tx has been submitted w/ sufficient confirmations", () => {
            let transactionId: BigNumber;

            before(async () => {
                transactionId = await submitMultiSigTransaction(
                    multisig,
                    mockDebtToken,
                    "addAuthorizedMintAgent",
                    [NON_OWNER],
                    { from: OWNERS[0] },
                );

                for (let i = 1; i < 3; i++) {
                    await multisig.confirmTransaction.sendTransactionAsync(transactionId, {
                        from: OWNERS[i],
                    });
                }
            });

            it("should throw", async () => {
                await expect(
                    multisig.executePauseTransactionImmediately.sendTransactionAsync(transactionId),
                ).to.eventually.be.rejectedWith(REVERT_ERROR);
            });
        });

        describe("pause tx has been submitted already", () => {
            let transactionId: BigNumber;

            before(async () => {
                transactionId = await submitMultiSigTransaction(
                    multisig,
                    mockDebtToken,
                    "pause",
                    [],
                    { from: OWNERS[0] },
                );
            });

            describe("transaction has not been sufficiently confirmed", () => {
                before(async () => {
                    await multisig.confirmTransaction.sendTransactionAsync(transactionId, {
                        from: OWNERS[1],
                    });
                });

                it("should throw", async () => {
                    await expect(
                        multisig.executeTransaction.sendTransactionAsync(transactionId),
                    ).to.eventually.be.rejectedWith(REVERT_ERROR);
                });

                it("should throw", async () => {
                    await expect(
                        multisig.executePauseTransactionImmediately.sendTransactionAsync(
                            transactionId,
                        ),
                    ).to.eventually.be.rejectedWith(REVERT_ERROR);
                });
            });

            describe("transaction has been sufficiently confirmed", () => {
                before(async () => {
                    await multisig.confirmTransaction.sendTransactionAsync(transactionId, {
                        from: OWNERS[2],
                    });
                });

                it("should execute transaction", async () => {
                    await multisig.executePauseTransactionImmediately.sendTransactionAsync(
                        transactionId,
                    );

                    await expect(mockDebtToken.wasPauseCalled.callAsync()).to.eventually.be.true;
                });
            });
        });
    });
});
