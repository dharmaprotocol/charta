const CONSTANTS = require("./migration_constants");
const { generateParamsForDharmaMultiSigWallet, configureTokenRegistry } = require("./utils");

module.exports = (deployer, network, accounts) => {
    const ContractRegistry = artifacts.require("ContractRegistry");
    const CreditorProxy = artifacts.require("CreditorProxy");
    const TokenTransferProxy = artifacts.require("TokenTransferProxy");

    await deployer.deploy(CreditorProxy, ContractRegistry.address);

    const creditorProxy = await CreditorProxy.deployed();
    const proxy = await TokenTransferProxy.deployed();

    // Authorize creditor proxy to make `transferFrom` calls on the token transfer proxy.
    await proxy.addAuthorizedTransferAgent(creditorProxy.address);
}
