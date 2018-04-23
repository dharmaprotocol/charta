// External Libraries
import * as chai from "chai";

// Utils
import ChaiSetup from "../test_utils/chai_setup";

import { TOKEN_URI_OPERATOR } from "../../../migrations/migration_constants.js";

// Wrappers
import { CollateralizedSimpleInterestTermsContractContract as CollateralizedTermsContract } from "../../../types/generated/collateralized_simple_interest_terms_contract";
import { CollateralizerContract as Collateralizer } from "../../../types/generated/collateralizer";
import { DebtKernelContract } from "../../../types/generated/debt_kernel";
import { DebtTokenContract } from "../../../types/generated/debt_token";
import { DebtRegistryContract } from "../../../types/generated/debt_registry";
import { TokenTransferProxyContract } from "../../../types/generated/token_transfer_proxy";
import { RepaymentRouterContract } from "../../../types/generated/repayment_router";

ChaiSetup.configure();

const expect = chai.expect;

contract("Migration #5: Authorizing Contract Interactions", async (ACCOUNTS) => {
    const CONTRACT_OWNER = ACCOUNTS[0];
    const TX_DEFAULTS = { from: CONTRACT_OWNER, gas: 4000000 };

    let collateralizer: Collateralizer;
    let kernel: DebtKernelContract;
    let debtToken: DebtTokenContract;
    let registry: DebtRegistryContract;

    describe("Deployment", () => {
        before(async () => {
            collateralizer = await Collateralizer.deployed(web3, TX_DEFAULTS);
            debtToken = await DebtTokenContract.deployed(web3, TX_DEFAULTS);
            kernel = await DebtKernelContract.deployed(web3, TX_DEFAULTS);
            registry = await DebtRegistryContract.deployed(web3, TX_DEFAULTS);
        });

        it("should authorize `DebtToken` to insert into the registry", async () => {
            const approved = await registry.getAuthorizedInsertAgents.callAsync();

            expect(approved).to.deep.eq([debtToken.address]);
        });

        it("should authorize `DebtToken` to edit the registry", async () => {
            const approved = await registry.getAuthorizedEditAgents.callAsync();

            expect(approved).to.deep.eq([debtToken.address]);
        });

        it("should authorize the kernel to mint debt tokens", async () => {
            const approvals = await debtToken.getAuthorizedMintAgents.callAsync();

            expect(approvals).to.deep.eq([kernel.address]);
        });

        it("should set the kernel to point at current debt token contract", async () => {
            await expect(kernel.debtToken.callAsync()).to.eventually.equal(debtToken.address);
        });

        it(
            "should authorize only the kernel, repayment router, and collateralizer " +
                "to make `transferFrom` calls on the token transfer proxy",
            async () => {
                const proxy = await TokenTransferProxyContract.deployed(web3, TX_DEFAULTS);

                const repaymentRouter = await RepaymentRouterContract.deployed(web3, TX_DEFAULTS);

                const approved = await proxy.getAuthorizedTransferAgents.callAsync();

                expect(approved).to.deep.eq([
                    kernel.address,
                    repaymentRouter.address,
                    collateralizer.address,
                ]);
            },
        );

        it("should authorize the collateralized simple interest terms contract to invoke `collateralize`", async () => {
            const collateralizedTermsContract = await CollateralizedTermsContract.deployed(
                web3,
                TX_DEFAULTS,
            );

            const approved = await collateralizer.getAuthorizedCollateralizeAgents.callAsync();

            expect(approved).to.deep.eq([collateralizedTermsContract.address]);
        });

        it("should authorize the token-uri operator to call setTokenURI", async () => {
            const approved = await debtToken.getAuthorizedTokenURIAgents.callAsync();

            expect(approved).to.deep.eq([TOKEN_URI_OPERATOR]);
        });
    });
});
