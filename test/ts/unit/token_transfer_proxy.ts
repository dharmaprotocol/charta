import * as ABIDecoder from "abi-decoder";
import * as chai from "chai";
import * as _ from "lodash";
import * as Units from "../test_utils/units";

import { DebtKernelContract } from "../../../types/generated/debt_kernel";
import { RepaymentRouterContract } from "../../../types/generated/repayment_router";
import { TokenTransferProxyContract } from "../../../types/generated/token_transfer_proxy";

import { MockERC20TokenContract } from "../../../types/generated/mock_e_r_c20_token";

import { BigNumberSetup } from "../test_utils/bignumber_setup";
import ChaiSetup from "../test_utils/chai_setup";
import { INVALID_OPCODE, REVERT_ERROR } from "../test_utils/constants";

import { LogError, LogRepayment } from "../logs/repayment_router";

// Set up Chai
ChaiSetup.configure();
const expect = chai.expect;

// Configure BigNumber exponentiation
BigNumberSetup.configure();

contract("Token Transfer Proxy (Unit Tests)", async ACCOUNTS => {
    let proxy: TokenTransferProxyContract;
    let kernel: DebtKernelContract;
    let repaymentRouter: RepaymentRouterContract;
    let mockToken: MockERC20TokenContract;

    const CONTRACT_OWNER = ACCOUNTS[0];
    const ATTACKER = ACCOUNTS[1];
    const AGENT = ACCOUNTS[2];

    const SENDER = ACCOUNTS[3];
    const SENDEE = ACCOUNTS[3];

    const TX_DEFAULTS = { from: CONTRACT_OWNER, gas: 4000000 };

    before(async () => {
        proxy = await TokenTransferProxyContract.deployed(web3, TX_DEFAULTS);
        kernel = await DebtKernelContract.deployed(web3, TX_DEFAULTS);
        repaymentRouter = await RepaymentRouterContract.deployed(web3, TX_DEFAULTS);
        mockToken = await MockERC20TokenContract.deployed(web3, TX_DEFAULTS);
    });

    describe("Initialization", () => {
        it("should list the kernel and repayment router as authorized transfer agents", async () => {
            await expect(proxy.getAuthorizedTransferAgents.callAsync()).to.eventually.deep.equal([
                kernel.address,
                repaymentRouter.address,
            ]);
        });
    });

    describe("Authorizing and Revoking Transfer Agents", () => {
        describe("non-contract owner attempts to authorize transfer agent", () => {
            it("should throw", async () => {
                await expect(
                    proxy.addAuthorizedTransferAgent.sendTransactionAsync(ATTACKER, {
                        from: ATTACKER,
                    }),
                ).to.eventually.be.rejectedWith(REVERT_ERROR);
            });
        });

        describe("non-contract owner attempts to revoke transfer agent", () => {
            it("should throw", async () => {
                await expect(
                    proxy.revokeTransferAgentAuthorization.sendTransactionAsync(kernel.address, {
                        from: ATTACKER,
                    }),
                ).to.eventually.be.rejectedWith(REVERT_ERROR);
            });
        });

        describe("contract owner authorizes transfer agent", () => {
            before(async () => {
                await proxy.addAuthorizedTransferAgent.sendTransactionAsync(AGENT);
            });

            it("should return agent as authorized", async () => {
                await expect(
                    proxy.getAuthorizedTransferAgents.callAsync(),
                ).to.eventually.deep.equal([kernel.address, repaymentRouter.address, AGENT]);
            });
        });

        describe("contract owner revokes transfer agent", () => {
            before(async () => {
                await proxy.revokeTransferAgentAuthorization.sendTransactionAsync(AGENT);
            });

            it("should return agent as unauthorized", async () => {
                await expect(
                    proxy.getAuthorizedTransferAgents.callAsync(),
                ).to.eventually.deep.equal([kernel.address, repaymentRouter.address]);
            });
        });
    });

    describe("#transferFrom", () => {
        describe("unauthorized agent attempts to transfer tokens via transfer proxy", () => {
            it("should throw", async () => {
                await expect(
                    proxy.transferFrom.sendTransactionAsync(
                        mockToken.address,
                        CONTRACT_OWNER,
                        ATTACKER,
                        Units.ether(1),
                    ),
                ).to.eventually.be.rejectedWith(REVERT_ERROR);
            });
        });

        describe("authorized agent transfers tokens via transfer proxy", () => {
            before(async () => {
                await proxy.addAuthorizedTransferAgent.sendTransactionAsync(AGENT);
                await proxy.transferFrom.sendTransactionAsync(
                    mockToken.address,
                    SENDER,
                    SENDEE,
                    Units.ether(1),
                    { from: AGENT },
                );
            });

            it("should call transferFrom on specified token w/ specified parameters", async () => {
                await expect(
                    mockToken.wasTransferFromCalledWith.callAsync(SENDER, SENDEE, Units.ether(1)),
                ).to.eventually.be.true;
            });
        });
    });
});
