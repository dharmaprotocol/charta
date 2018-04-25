// External
import * as chai from "chai";

// Wrappers
import { DharmaMultiSigWalletContract } from "../../../types/generated/dharma_multi_sig_wallet";

// Test Utils
import { BigNumberSetup } from "../test_utils/bignumber_setup";
import ChaiSetup from "../test_utils/chai_setup";
import { REVERT_ERROR } from "../test_utils/constants";
import {
    multiSigExecuteAfterTimelock,
    multiSigExecutePauseImmediately,
} from "../test_utils/multisig";

// Configure BigNumber exponentiation
BigNumberSetup.configure();

// Set up Chai
ChaiSetup.configure();
const expect = chai.expect;

const dharmaMultiSigWallet = artifacts.require("DharmaMultiSigWallet");

contract("DharmaMultiSigWallet (Integration Tests)", (ACCOUNTS) => {
    const OWNERS = ACCOUNTS.slice(0, 5);
    const CONFIRMATION_THRESHOLD = 3;
    const TIMELOCK_IN_SECONDS = 60 * 60 * 24 * 7; // 7 days

    let multisig: DharmaMultiSigWalletContract;

    const TX_DEFAULTS = { from: OWNERS[0], gas: 4000000 };

    before(async () => {
        multisig = await DharmaMultiSigWalletContract.deployed(web3, TX_DEFAULTS);
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
            );
        });

        it("should change time lock period", async () => {
            await expect(multisig.timelockInSeconds.callAsync()).to.eventually.bignumber.equal(
                ALTERNATIVE_TIMELOCK_IN_SECONDS,
            );
        });
    });

    // describe("#confirmTransaction", () => {
    //     const UNSUBMITTED_TRANSACTION_INDEX = new BigNumber(13);
    //
    //     describe("unsubmitted transaction", () => {});
    // });

    // describe("#revokeConfirmation", () => {});
    //
    // describe("#executeTransaction", () => {});
    //
    // describe("#executePauseTransactionImmediately", () => {});
});
