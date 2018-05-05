// External Libraries
import * as chai from "chai";

// Utils
import ChaiSetup from "../test_utils/chai_setup";

// Wrappers
import { CollateralizerContract } from "../../../types/generated/collateralizer";
import { DebtKernelContract } from "../../../types/generated/debt_kernel";
import { DebtTokenContract } from "../../../types/generated/debt_token";
import { DebtRegistryContract } from "../../../types/generated/debt_registry";
import { DharmaMultiSigWalletContract } from "../../../types/generated/dharma_multi_sig_wallet";
import { RepaymentRouterContract } from "../../../types/generated/repayment_router";
import { TokenTransferProxyContract } from "../../../types/generated/token_transfer_proxy";
import { ContractRegistryContract } from "../../../types/generated/contract_registry";

ChaiSetup.configure();

const expect = chai.expect;

contract("Migration #6: Transferring Ownership to Multisig", async (ACCOUNTS) => {
    const CONTRACT_OWNER = ACCOUNTS[0];
    const TX_DEFAULTS = { from: CONTRACT_OWNER, gas: 4000000 };

    let multisig: DharmaMultiSigWalletContract;

    before(async () => {
        multisig = await DharmaMultiSigWalletContract.deployed(web3, TX_DEFAULTS);
    });

    describe("Deployment", () => {
        it("should transfer ownership of `DebtRegistry` to the Multisig Wallet", async () => {
            const contract = await DebtRegistryContract.deployed(web3, TX_DEFAULTS);
            const owner = await contract.owner.callAsync();

            expect(owner).to.equal(multisig.address);
        });

        it("should transfer ownership of `DebtToken` to the Multisig Wallet", async () => {
            const contract = await DebtTokenContract.deployed(web3, TX_DEFAULTS);
            const owner = await contract.owner.callAsync();

            expect(owner).to.equal(multisig.address);
        });

        it("should transfer ownership of `DebtKernel` to the Multisig Wallet", async () => {
            const contract = await DebtKernelContract.deployed(web3, TX_DEFAULTS);
            const owner = await contract.owner.callAsync();

            expect(owner).to.equal(multisig.address);
        });

        it("should transfer ownership of `TokenTransferProxy` to the Multisig Wallet", async () => {
            const contract = await TokenTransferProxyContract.deployed(web3, TX_DEFAULTS);
            const owner = await contract.owner.callAsync();

            expect(owner).to.equal(multisig.address);
        });

        it("should transfer ownership of `RepaymentRouter` to the Multisig Wallet", async () => {
            const contract = await RepaymentRouterContract.deployed(web3, TX_DEFAULTS);
            const owner = await contract.owner.callAsync();

            expect(owner).to.equal(multisig.address);
        });

        it("should transfer ownership of `Collateralizer` to the Multisig Wallet", async () => {
            const contract = await CollateralizerContract.deployed(web3, TX_DEFAULTS);
            const owner = await contract.owner.callAsync();

            expect(owner).to.equal(multisig.address);
        });

        it("should transfer ownership of `ContractRegistry` to the Multisig Wallet", async () => {
            const contract = await ContractRegistryContract.deployed(web3, TX_DEFAULTS);
            const owner = await contract.owner.callAsync();

            expect(owner).to.equal(multisig.address);
        });
    });
});
