const {
    CRYPTOKITTIES_CONTRACT,
    ERC721_CONTRACT_DATA,
    ERC721_KOVAN_CONTRACT_DATA,
    LIVE_NETWORK_ID,
    KOVAN_NETWORK_ID,
} = require("./migration_constants");

module.exports = (deployer, network, accounts) => {
    // Constants
    const CONTRACT_OWNER = accounts[0];
    const TX_DEFAULTS = { from: CONTRACT_OWNER, gas: 4000000 };

    // Core Contracts
    const ContractRegistry = artifacts.require("ContractRegistry");
    const ERC721TokenRegistry = artifacts.require("ERC721TokenRegistry");
    const ERC721Collateralizer = artifacts.require("ERC721Collateralizer");
    const PermissionsLib = artifacts.require("PermissionsLib");
    const DebtToken = artifacts.require("DebtToken");

    // Terms contracts.
    const ERC721CollateralizedSimpleInterestTermsContract = artifacts.require(
        "ERC721CollateralizedSimpleInterestTermsContract",
    );

    // Test Contracts
    const MintableERC721Token = artifacts.require("MintableERC721Token");
    const KittyCore = artifacts.require("KittyCore");

    // Wallet
    const DharmaMultiSigWallet = artifacts.require("DharmaMultiSigWallet");

    let cryptoKittiesContractAddress;

    deployer.link(PermissionsLib, [
        ERC721Collateralizer,
    ]);

    /************************
     * Contract Deployments *
     ***********************/

    deployer.deploy(ERC721TokenRegistry).then(async () => {
        if (network !== LIVE_NETWORK_ID) {
            // Deploy the standard ERC721 contract.
            await deployer.deploy(MintableERC721Token);

            // Deploy the CryptoKitties contracts for testing.
            await deployer.deploy(KittyCore);

            // Hold onto that address to pass into the ERC721 Collateralizer contract.
            cryptoKittiesContractAddress = KittyCore.address;
        } else {
            // If we're in a live environment, we want to get the mainnet contract address.
            cryptoKittiesContractAddress = CRYPTOKITTIES_CONTRACT;
        }

        await deployer.deploy(
            ERC721Collateralizer,
            ContractRegistry.address,
            ERC721TokenRegistry.address,
            // Includes the CryptoKitties address for specific workarounds for that non-standard
            // contract.
            cryptoKittiesContractAddress
        );

        await deployer.deploy(
            ERC721CollateralizedSimpleInterestTermsContract,
            ContractRegistry.address,
            ERC721Collateralizer.address,
        );

        const tokenRegistry = await ERC721TokenRegistry.deployed();

        /*************************
         * Contract Interactions *
         ************************/

        const erc721Collateralizer = await ERC721Collateralizer.deployed();
        const erc721CollateralizedSimpleInterestTermsContract =
            await ERC721CollateralizedSimpleInterestTermsContract.deployed();

        // Authorize the ERC721-collateralized terms contract to invoke `collateralize`.
        await erc721Collateralizer.addAuthorizedCollateralizeAgent(
            erc721CollateralizedSimpleInterestTermsContract.address
        );

        /********************************
         *  Initial Registry Contents   *
         ********************************/

        if (network === KOVAN_NETWORK_ID) {
            // Add the Kovan contracts to the registry.
            ERC721_KOVAN_CONTRACT_DATA.map(async (contractData) => {
                await tokenRegistry.setTokenAttributes(
                    contractData.symbol,
                    contractData.address,
                    contractData.name,
                    { from: CONTRACT_OWNER }
                );
            });
        }

        if (network !== LIVE_NETWORK_ID) {
            // Get and register ERC721s for test purposes.
            const mintableToken = await MintableERC721Token.deployed();
            const cryptoKittiesToken = await KittyCore.deployed();
            const debtToken = await DebtToken.deployed();

            const developmentTokens = [
                mintableToken,
                cryptoKittiesToken,
                debtToken,
            ];

            // Log progress for debugging during migrations.
            console.log(`\tDeploying ${developmentTokens.length} ERC721 Token Contracts`);

            // Synchronously register all tokens using CONTRACT_OWNER before transferring
            // ownership to the multi-sig wallet.
            await Promise.all(
                developmentTokens.map((tokenContract) => {
                    return new Promise(async (resolve) => {
                        const tokenAddress = tokenContract.address;
                        const tokenSymbol = await tokenContract.symbol();
                        const tokenName = await tokenContract.name();

                        // Log progress for debugging during migrations.
                        console.log(`\t... Deploying ERC721 (${tokenSymbol}):`, tokenAddress);

                        await tokenRegistry.setTokenAttributes(
                            tokenSymbol,
                            tokenAddress,
                            tokenName,
                            { from: CONTRACT_OWNER },
                        );

                        resolve();
                    });
                }),
            );
        } else {
            // Use live ERC721 contract data
            ERC721_CONTRACT_DATA.map(async (contractData) => {
                await tokenRegistry.setTokenAttributes(
                    contractData.symbol,
                    contractData.address,
                    contractData.name,
                    { from: CONTRACT_OWNER }
                );
            });
        }

        /**********************
         * Contract Ownership *
         **********************/

        /*
        * Deploy and the transfer ownership of each of the contracts
        * to the multi-sig wallet.
        */
        const wallet = await DharmaMultiSigWallet.deployed();

        await tokenRegistry.transferOwnership(wallet.address, { from: CONTRACT_OWNER });
        await erc721Collateralizer.transferOwnership(wallet.address, { from: CONTRACT_OWNER });
    });
};
