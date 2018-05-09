const { NAMES_OF_CONTRACTS_OWNED_BY_MULTISIG } = require("./migration_constants");

module.exports = (deployer, network, accounts) => {
    const CONTRACT_OWNER = accounts[0];
    const DharmaMultiSigWallet = artifacts.require("DharmaMultiSigWallet");

    /**
     * A list of contract instances to deploy.
     *
     * @type {Web3.ContractInstance[]}
     */
    const contractInstances = NAMES_OF_CONTRACTS_OWNED_BY_MULTISIG.map((contractName) => {
        return artifacts.require(contractName);
    });

    return deployer.then(async () => {
        // Deploy the multi-sig wallet, which will own each of the contracts.
        const wallet = await DharmaMultiSigWallet.deployed();

        /*
         * Deploy and the transfer ownership of each of the contracts
         * to the multi-sig wallet.
         */
        await Promise.all(
            contractInstances.map(async (artifact) => {
                const contract = await artifact.deployed();

                return contract.transferOwnership(wallet.address, { from: CONTRACT_OWNER });
            }),
        );
    });
};
