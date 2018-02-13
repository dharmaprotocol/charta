var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
module.exports = (deployer, network, accounts) => {
    const DebtRegistry = artifacts.require("DebtRegistry");
    const DebtToken = artifacts.require("DebtToken");
    const DebtKernel = artifacts.require("DebtKernel");
    const TokenTransferProxy = artifacts.require("TokenTransferProxy");
    const RepaymentRouter = artifacts.require("RepaymentRouter");
    const TX_DEFAULTS = { from: accounts[0], gas: 4000000 };
    return deployer.then(() => __awaiter(this, void 0, void 0, function* () {
        const registry = yield DebtRegistry.deployed();
        const token = yield DebtToken.deployed();
        const kernel = yield DebtKernel.deployed();
        const proxy = yield TokenTransferProxy.deployed();
        const router = yield RepaymentRouter.deployed();
        // Authorize token contract to make mutations to the registry
        yield registry.addAuthorizedInsertAgent(token.address);
        yield registry.addAuthorizedEditAgent(token.address);
        // Authorize kernel contract to mint and broker debt tokens
        yield token.addAuthorizedMintAgent(kernel.address);
        // Set kernel to point at current debt token contract
        yield kernel.setDebtToken(token.address);
        // Authorize kernel to make `transferFrom` calls on the token transfer proxy
        yield proxy.addAuthorizedTransferAgent(kernel.address);
        // Authorize repayment router to make `transferFrom` calls on the token transfer proxy
        yield proxy.addAuthorizedTransferAgent(router.address);
    }));
};
//# sourceMappingURL=5_authorize_contract_interactions.js.map