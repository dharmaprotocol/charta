const { generateParamsForDharmaMultiSigWallet, configureTokenRegistry } = require("./utils");

module.exports = (deployer, network, accounts) => {
    const DharmaMultiSigWallet = artifacts.require("DharmaMultiSigWallet");

    const ContractRegistry = artifacts.require("ContractRegistry");
    const CreditorProxy = artifacts.require("CreditorProxy");
    const TokenTransferProxy = artifacts.require("TokenTransferProxy");

    // const TX_DEFAULTS = { from: accounts[0], gas: 4000000 };

    return deployer.then(async () => {
        const proxy = await TokenTransferProxy.deployed();
        const wallet = await DharmaMultiSigWallet.deployed();

        await deployer.deploy(CreditorProxy, ContractRegistry.address);

        const creditorProxy = await CreditorProxy.deployed();
        // Authorize creditor proxy to make `transferFrom` calls on the token transfer proxy.
        //await proxy.addAuthorizedTransferAgent(creditorProxy.address, { from: wallet.address });
    });
}
