import * as chai from "chai";
import * as Units from "../test_utils/units";
import { BigNumber } from "bignumber.js";
import * as Web3 from "web3";
import * as _ from "lodash";

import { BigNumberSetup } from "../test_utils/bignumber_setup";
import ChaiSetup from "../test_utils/chai_setup";

// Set up Chai
ChaiSetup.configure();
const expect = chai.expect;

// Configure BigNumber exponentiation
BigNumberSetup.configure();

// Dharma Contracts
// import { MultiSigWalletContract } from "../../../types/generated/multi_sig_wallet";
import { DebtTokenContract } from "../../../types/generated/debt_token";
import { DebtRegistryContract } from "../../../types/generated/debt_registry";

contract("Migration #2: Deploying Dharma Contracts", async (ACCOUNTS) => {
    const CONTRACT_OWNER = ACCOUNTS[0];
    const TX_DEFAULTS = { from: CONTRACT_OWNER, gas: 4000000 };

    // let wallet: MultiSigWalletContract;
    let debtToken: DebtTokenContract;
    let debtRegistry: DebtRegistryContract;

    before(async () => {
        // wallet = await MultiSigWalletContract.deployed(web3, TX_DEFAULTS);
        debtToken = await DebtTokenContract.deployed(web3, TX_DEFAULTS);
        debtRegistry = await DebtRegistryContract.deployed(web3, TX_DEFAULTS);
    });

    describe("#DebtToken", () => {
        it("maps to the deployed instance of the debt registry", async () => {
            expect(debtToken.registry.callAsync()).to.eventually.equal(debtRegistry.address);
        });
    });

    // describe("#MultiSigWallet", () => {
    //     it("lists the correct accounts as owner", async () => {
    //         _.forEach(ACCOUNTS, (value: any, i: number) => {
    //             expect(wallet.isOwner.callAsync(value)).to.eventually.be.true;
    //         });
    //     });
    //
    //     it("lists the correct number of required authorizations", async () => {
    //         const requiredComputed = new BigNumber(ACCOUNTS.length / 2);
    //         expect(wallet.required.callAsync()).to.eventually.bignumber.equal(requiredComputed);
    //     });
    // });
});
