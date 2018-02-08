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
const debt_kernel_1 = require("../types/generated/debt_kernel");
const debt_registry_1 = require("../types/generated/debt_registry");
const debt_token_1 = require("../types/generated/debt_token");
const repayment_router_1 = require("../types/generated/repayment_router");
const token_transfer_proxy_1 = require("../types/generated/token_transfer_proxy");
module.exports = (deployer, network, accounts) => {
    const TX_DEFAULTS = { from: accounts[0], gas: 4000000 };
    deployer.then(() => __awaiter(this, void 0, void 0, function* () {
        const registry = yield debt_registry_1.DebtRegistryContract.deployed(web3, TX_DEFAULTS);
        const token = yield debt_token_1.DebtTokenContract.deployed(web3, TX_DEFAULTS);
        const kernel = yield debt_kernel_1.DebtKernelContract.deployed(web3, TX_DEFAULTS);
        const proxy = yield token_transfer_proxy_1.TokenTransferProxyContract.deployed(web3, TX_DEFAULTS);
        const router = yield repayment_router_1.RepaymentRouterContract.deployed(web3, TX_DEFAULTS);
        // Authorize token contract to make mutations to the registry
        yield registry.addAuthorizedInsertAgent.sendTransactionAsync(token.address);
        yield registry.addAuthorizedEditAgent.sendTransactionAsync(token.address);
        // Authorize kernel contract to mint and broker debt tokens
        yield token.addAuthorizedMintAgent.sendTransactionAsync(kernel.address);
        // Set kernel to point at current debt token contract
        yield kernel.setDebtToken.sendTransactionAsync(token.address);
        // Authorize kernel to make `transferFrom` calls on the token transfer proxy
        yield proxy.addAuthorizedTransferAgent.sendTransactionAsync(kernel.address);
        // Authorize repayment router to make `transferFrom` calls on the token transfer proxy
        yield proxy.addAuthorizedTransferAgent.sendTransactionAsync(router.address);
    }));
};
//# sourceMappingURL=5_authorize_contract_interactions.js.map