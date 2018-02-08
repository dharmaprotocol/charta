var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const PermissionsLib = artifacts.require("PermissionsLib");
const DummyContract = artifacts.require("DummyContract");
const DebtRegistry = artifacts.require("DebtRegistry");
const DebtToken = artifacts.require("DebtToken");
const DebtKernel = artifacts.require("DebtKernel");
const RepaymentRouter = artifacts.require("RepaymentRouter");
const TokenTransferProxy = artifacts.require("TokenTransferProxy");
module.exports = (deployer, network, accounts) => {
    const TX_DEFAULTS = { from: accounts[0], gas: 4000000 };
    deployer.deploy(DebtRegistry);
    deployer.deploy(PermissionsLib);
    deployer.link(PermissionsLib, DummyContract);
    deployer.deploy(DummyContract);
    deployer.link(PermissionsLib, DebtRegistry);
    deployer.deploy(DebtRegistry).then(() => __awaiter(this, void 0, void 0, function* () {
        yield deployer.deploy(DebtToken, DebtRegistry.address);
        yield deployer.deploy(TokenTransferProxy);
        yield deployer.deploy(RepaymentRouter, DebtRegistry.address, TokenTransferProxy.address);
        yield deployer.deploy(DebtKernel, TokenTransferProxy.address);
    }));
};
//# sourceMappingURL=2_deploy_dharma_contracts.js.map