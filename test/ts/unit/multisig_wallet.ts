// External
import { BigNumber } from "bignumber.js";
import * as chai from "chai";
import * as Web3 from "web3";
import * as Units from "../test_utils/units";

// Contracts
import { MultiSigWalletContract } from "../../../types/generated/multi_sig_wallet";

// Test utils
import { BigNumberSetup } from "../test_utils/bignumber_setup";
import ChaiSetup from "../test_utils/chai_setup";
import { INVALID_OPCODE, REVERT_ERROR } from "../test_utils/constants";

// Configure BigNumber exponentiation
BigNumberSetup.configure();

// Set up Chai
ChaiSetup.configure();
const expect = chai.expect;

const MultiSigWallet = artifacts.require("MultiSigWallet");

contract("Multisig Wallet (Unit Tests)", (ACCOUNTS) => {
    let wallet: MultiSigWalletContract;

    const CONTRACT_OWNER = ACCOUNTS[0];
    const DESTINATION = ACCOUNTS[1];
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
            it("should throw REVERT_ERROR", async () => {
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
        describe("from <= to", () => {
            before(async () => {
                await wallet.submitTransaction.sendTransactionAsync(
                    DESTINATION,
                    Units.ether(1),
                    web3.sha3("give me data or give me death"),
                );
            });

            it("should return the empty array", async () => {
                await expect(
                    wallet.getTransactionIds.callAsync(
                        new BigNumber(0),
                        new BigNumber(0),
                        true,
                        true,
                    ),
                ).to.eventually.deep.equal([]);
            });

            it("should return an array of length one", async () => {
                const result = await wallet.getTransactionIds.callAsync(
                    new BigNumber(0),
                    new BigNumber(1),
                    true,
                    true,
                );
                expect(result.length).to.bignumber.equal(new BigNumber(1));
            });

            it("should throw INVALID_OPCODE", async () => {
                await expect(
                    wallet.getTransactionIds.callAsync(
                        new BigNumber(0),
                        new BigNumber(2),
                        true,
                        true,
                    ),
                ).to.eventually.be.rejectedWith(INVALID_OPCODE);
            });
        });
    });
});
