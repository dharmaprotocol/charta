const { CRYPTOKITTIES_CONTRACT, ERC721_CONTRACT_DATA, LIVE_NETWORK_ID } = require("./migration_constants");

module.exports = (deployer, network, accounts) => {
    // Constants
    const CONTRACT_OWNER = accounts[0];
    const TX_DEFAULTS = { from: CONTRACT_OWNER, gas: 4000000 };

    // Core Contracts
    const ContractRegistry = artifacts.require("ContractRegistry");
    const ERC721TokenRegistry = artifacts.require("ERC721TokenRegistry");
    const ERC721Collateralizer = artifacts.require("ERC721Collateralizer");
    const PermissionsLib = artifacts.require("PermissionsLib");

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

        if (network !== LIVE_NETWORK_ID) {
            // Get and registry a mintable ERC721 for test purposes.
            const mintableToken = await MintableERC721Token.deployed();
            const mintableTokenAddress = mintableToken.address;
            const mintableTokenSymbol = await mintableToken.symbol();
            const mintableTokenName = await mintableToken.name();

            await tokenRegistry.setTokenAttributes(
                mintableTokenSymbol,
                mintableTokenAddress,
                mintableTokenName,
                { from: CONTRACT_OWNER }
            );
        }

        ERC721_CONTRACT_DATA.map(async (contractData) => {
            await tokenRegistry.setTokenAttributes(
                contractData.symbol,
                contractData.address,
                contractData.name,
                { from: CONTRACT_OWNER }
            );
        });

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
