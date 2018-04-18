const CONSTANTS = require("./migration_constants");

module.exports = (deployer, network, accounts) => {
    const CONTRACT_OWNER = accounts[0];
    const MultiSigWallet = artifacts.require("MultiSigWallet");

    /**
     * A list of contract instances to deploy.
     *
     * @type {Web3.ContractInstance[]}
     */
    const contractInstances = CONSTANTS.CONTRACT_NAMES.map((contractName) => {
        return artifacts.require(contractName);
    });

    return deployer.then(async () => {
        // Deploy the multi-sig wallet, which will own each of the contracts.
        const wallet = await MultiSigWallet.deployed();

        /*
         * Deploy and the transfer ownership of each of the contracts
         * to the multi-sig wallet.
         */
        contractInstances.forEach(async (artifact) => {
            const contract = await artifact.deployed();

            contract.transferOwnership(
                wallet.address,
                { from: CONTRACT_OWNER },
            );
        });
    });
};
