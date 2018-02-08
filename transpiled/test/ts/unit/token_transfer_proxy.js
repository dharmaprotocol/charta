"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai = require("chai");
const Units = require("../test_utils/units");
const debt_kernel_1 = require("../../../types/generated/debt_kernel");
const repayment_router_1 = require("../../../types/generated/repayment_router");
const token_transfer_proxy_1 = require("../../../types/generated/token_transfer_proxy");
const mock_e_r_c20_token_1 = require("../../../types/generated/mock_e_r_c20_token");
const bignumber_setup_1 = require("../test_utils/bignumber_setup");
const chai_setup_1 = require("../test_utils/chai_setup");
const constants_1 = require("../test_utils/constants");
// Set up Chai
chai_setup_1.default.configure();
const expect = chai.expect;
// Configure BigNumber exponentiation
bignumber_setup_1.BigNumberSetup.configure();
contract("Token Transfer Proxy (Unit Tests)", (ACCOUNTS) => __awaiter(this, void 0, void 0, function* () {
    let proxy;
    let kernel;
    let repaymentRouter;
    let mockToken;
    const CONTRACT_OWNER = ACCOUNTS[0];
    const ATTACKER = ACCOUNTS[1];
    const AGENT = ACCOUNTS[2];
    const SENDER = ACCOUNTS[3];
    const SENDEE = ACCOUNTS[3];
    const TX_DEFAULTS = { from: CONTRACT_OWNER, gas: 4000000 };
    before(() => __awaiter(this, void 0, void 0, function* () {
        proxy = yield token_transfer_proxy_1.TokenTransferProxyContract.deployed(web3, TX_DEFAULTS);
        kernel = yield debt_kernel_1.DebtKernelContract.deployed(web3, TX_DEFAULTS);
        repaymentRouter = yield repayment_router_1.RepaymentRouterContract.deployed(web3, TX_DEFAULTS);
        mockToken = yield mock_e_r_c20_token_1.MockERC20TokenContract.deployed(web3, TX_DEFAULTS);
    }));
    describe("Initialization", () => {
        it("should list the kernel and repayment router as authorized transfer agents", () => __awaiter(this, void 0, void 0, function* () {
            yield expect(proxy.getAuthorizedTransferAgents.callAsync())
                .to.eventually.deep.equal([kernel.address, repaymentRouter.address]);
        }));
    });
    describe("Authorizing and Revoking Transfer Agents", () => {
        describe("non-contract owner attempts to authorize transfer agent", () => {
            it("should throw", () => __awaiter(this, void 0, void 0, function* () {
                yield expect(proxy.addAuthorizedTransferAgent
                    .sendTransactionAsync(ATTACKER, { from: ATTACKER }))
                    .to.eventually.be.rejectedWith(constants_1.REVERT_ERROR);
            }));
        });
        describe("non-contract owner attempts to revoke transfer agent", () => {
            it("should throw", () => __awaiter(this, void 0, void 0, function* () {
                yield expect(proxy.revokeTransferAgentAuthorization
                    .sendTransactionAsync(kernel.address, { from: ATTACKER }))
                    .to.eventually.be.rejectedWith(constants_1.REVERT_ERROR);
            }));
        });
        describe("contract owner authorizes transfer agent", () => {
            before(() => __awaiter(this, void 0, void 0, function* () {
                yield proxy.addAuthorizedTransferAgent.sendTransactionAsync(AGENT);
            }));
            it("should return agent as authorized", () => __awaiter(this, void 0, void 0, function* () {
                yield expect(proxy.getAuthorizedTransferAgents.callAsync())
                    .to.eventually.deep.equal([kernel.address, repaymentRouter.address, AGENT]);
            }));
        });
        describe("contract owner revokes transfer agent", () => {
            before(() => __awaiter(this, void 0, void 0, function* () {
                yield proxy.revokeTransferAgentAuthorization.sendTransactionAsync(AGENT);
            }));
            it("should return agent as unauthorized", () => __awaiter(this, void 0, void 0, function* () {
                yield expect(proxy.getAuthorizedTransferAgents.callAsync())
                    .to.eventually.deep.equal([kernel.address, repaymentRouter.address]);
            }));
        });
    });
    describe("#transferFrom", () => {
        describe("unauthorized agent attempts to transfer tokens via transfer proxy", () => {
            it("should throw", () => __awaiter(this, void 0, void 0, function* () {
                yield expect(proxy.transferFrom.sendTransactionAsync(mockToken.address, CONTRACT_OWNER, ATTACKER, Units.ether(1))).to.eventually.be.rejectedWith(constants_1.REVERT_ERROR);
            }));
        });
        describe("authorized agent transfers tokens via transfer proxy", () => {
            before(() => __awaiter(this, void 0, void 0, function* () {
                yield proxy.addAuthorizedTransferAgent.sendTransactionAsync(AGENT);
                yield proxy.transferFrom.sendTransactionAsync(mockToken.address, SENDER, SENDEE, Units.ether(1), { from: AGENT });
            }));
            it("should call transferFrom on specified token w/ specified parameters", () => __awaiter(this, void 0, void 0, function* () {
                yield expect(mockToken.wasTransferFromCalledWith.callAsync(SENDER, SENDEE, Units.ether(1))).to.eventually.be.true;
            }));
        });
    });
}));
//# sourceMappingURL=token_transfer_proxy.js.map