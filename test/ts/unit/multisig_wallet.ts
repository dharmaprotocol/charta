// External
import * as ABIDecoder from "abi-decoder";
import { BigNumber } from "bignumber.js";
import * as chai from "chai";
import * as _ from "lodash";
import * as Web3 from "web3";
import * as Units from "../test_utils/units";

// Contracts
import { MultiSigWalletContract } from "../../../types/generated/multi_sig_wallet";

// Types
import { Address, TxData } from "../../../types/common";

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

const MultiSigWallet = artifacts.require("MultiSigWallet");

contract("Multisig Wallet (Unit Tests)", (ACCOUNTS) => {
    let wallet: MultiSigWalletContract;

    const CONTRACT_OWNER = ACCOUNTS[0];
    const TX_DEFAULTS = { from: CONTRACT_OWNER, gas: 4000000 };

    before(async () => {
        const walletTruffle = await MultiSigWallet.new([CONTRACT_OWNER], new BigNumber(1), {
            from: CONTRACT_OWNER,
        }); // truffle
        const walletWeb3 = web3.eth.contract(walletTruffle.abi).at(walletTruffle.address); // web3
        wallet = new MultiSigWalletContract(walletWeb3, TX_DEFAULTS); // typed
    });

    describe("#getTransactionIds", () => {
        describe("from > to", () => {
            it("should throw", async () => {
                await expect(
                    wallet.getTransactionIds.callAsync(
                        new BigNumber(5),
                        new BigNumber(4),
                        true,
                        true,
                    ),
                ).to.eventually.be.rejectedWith(REVERT_ERROR);
            });
        });
    });
});
