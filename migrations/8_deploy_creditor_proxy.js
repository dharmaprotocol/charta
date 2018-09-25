module.exports = (deployer, network, accounts) => {
    const CreditorProxy = artifacts.require("CreditorProxy");
    const ContractRegistry = artifacts.require("ContractRegistry");
    const DharmaMultiSigWallet = artifacts.require("DharmaMultiSigWallet");

    return deployer.then(async () => {
        const registry = await ContractRegistry.deployed();
        const wallet = await DharmaMultiSigWallet.deployed();

        await deployer.deploy(CreditorProxy, registry.address);
        const creditorProxy = await CreditorProxy.deployed();

        await creditorProxy.transferOwnership(wallet.address, { from: accounts[0] });
    });
};
