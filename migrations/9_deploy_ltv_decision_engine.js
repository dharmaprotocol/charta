module.exports = (deployer, network, accounts) => {
    const LTVDecisionEngine = artifacts.require("LTVDecisionEngine");

    return deployer.then(async () => {
        await deployer.deploy(LTVDecisionEngine);
    });
};
