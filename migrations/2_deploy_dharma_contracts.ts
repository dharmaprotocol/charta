import {ZeroX_TokenTransferProxyContract} from "../types/generated/zerox_tokentransferproxy";

const PermissionsLib = artifacts.require("PermissionsLib");
const DummyContract = artifacts.require("DummyContract");
const DebtRegistry = artifacts.require("DebtRegistry");
const DebtToken = artifacts.require("DebtToken");
const DebtKernel = artifacts.require("DebtKernel");
const RepaymentRouter = artifacts.require("RepaymentRouter");

module.exports = (deployer: any, network: string, accounts: string[]) => {
    const TX_DEFAULTS = { from: accounts[0], gas: 4000000 };

    deployer.deploy(DebtRegistry);
    deployer.deploy(PermissionsLib);
    deployer.link(PermissionsLib, DummyContract);
    deployer.deploy(DummyContract);
    deployer.link(PermissionsLib, DebtRegistry);
    deployer.deploy(DebtRegistry).then(() => {
        return deployer.deploy(DebtToken, DebtRegistry.address);
    });
    deployer.deploy(RepaymentRouter);
    deployer.then(async () => {
        const zeroExTokenTransferProxy = await ZeroX_TokenTransferProxyContract.deployed(web3, TX_DEFAULTS);
        await deployer.deploy(DebtKernel, zeroExTokenTransferProxy.address);
    });
};
