module.exports = (deployer, network, accounts) => {
    const CreditorProxyDecisionEngine = artifacts.require("CreditorProxyDecisionEngine");
    const LTVDecisionEngine = artifacts.require("LTVDecisionEngine");

    return deployer.then(async () => {
        await deployer.deploy(CreditorProxyDecisionEngine);
        await deployer.deploy(LTVDecisionEngine);
    });
};
