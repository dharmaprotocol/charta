const fs = require("fs");

// The location of data files, especially relate to token and contract addresses.
const dataDir = `${projectRoot()}/data`;

const ERC20_TOKEN_LIST = readJsonSync(`${dataDir}/erc20_tokens.json`);
const ERC721_CONTRACT_ADDRESSES = readJsonSync(`${dataDir}/erc721_addresses.json`);

const OWNER_ONE = "0x5d497982326f641e0b374585ff7c1c1be9878560";
const OWNER_TWO = "0x8f8c5ebde485dfcb64d8e6d1dea833b2d43fb9de";
const OWNER_THREE = "0xb41411e8cfae259a6494ecdc81833b627f051be4";
const OWNER_FOUR = "0xfefdde6a490cd4095de204b6fe31ba1607b19e3f";
const OWNER_FIVE = "0xa32d732ab0096dbf837f3e5d358ac5b597dcbf73";

const SIGNATORIES = [OWNER_ONE, OWNER_TWO, OWNER_THREE, OWNER_FOUR, OWNER_FIVE];
const THRESHOLD = 1 / 2; // 50%
const TIMELOCK_IN_SECONDS = 60 * 60 * 24 * 7; // 7 Days
const LIVE_NETWORK_ID = "live";
const KOVAN_NETWORK_ID = "kovan";
const DUMMY_TOKEN_SUPPLY = 1000 * 10 ** 18;
const DUMMY_TOKEN_DECIMALS = 18;
const NUM_INITIAL_BALANCE_HOLDERS = 10;

/**
 * The address of the CryptoKitties ERC721 contract.
 *
 * Retrieved August 23, 2018 from: https://etherscan.io/address/0x06012c8cf97bead5deae237070f9587f8e7a266d
 *
 * @type {string}
 */
const CRYPTOKITTIES_CONTRACT_ADDRESS = "0x06012c8cf97BEaD5deAe237070F9587f8E7A266d";

/**
 * The secure address that is allowed to set DebtToken URIs.
 *
 * @type {string}
 */
const TOKEN_URI_OPERATOR = "0x5d497982326f641e0b374585ff7c1c1be9878560";

/**
 * A list of the contract names, representing the instances
 * that will be transferred to the multi-sig wallet.
 *
 * NOTE: These do not include contracts related to ERC721 Collateral.
 *
 * @type {string[]}
 */
const NAMES_OF_CONTRACTS_OWNED_BY_MULTISIG = [
    "DebtRegistry",
    "DebtToken",
    "DebtKernel",
    "TokenTransferProxy",
    "RepaymentRouter",
    "Collateralizer",
    "TokenRegistry",
    "ContractRegistry",
];

/**
 * Given that the Canonical WETH has an instance deployed onto Kovan
 * and there are numerous tools that can be used to interact with WETH,
 * even in a testnet context, we store its address so we can use it
 * in our migrations.
 *
 * @type {String}
 */
const KOVAN_WETH_ADDRESS = "0xd0a1e359811322d97991e03f863a0c30c2cf029c";

module.exports = {
    SIGNATORIES,
    THRESHOLD,
    TIMELOCK_IN_SECONDS,
    LIVE_NETWORK_ID,
    KOVAN_NETWORK_ID,
    DUMMY_TOKEN_SUPPLY,
    DUMMY_TOKEN_DECIMALS,
    KOVAN_WETH_ADDRESS,
    NAMES_OF_CONTRACTS_OWNED_BY_MULTISIG,
    NUM_INITIAL_BALANCE_HOLDERS,
    TOKEN_URI_OPERATOR,
    TOKEN_LIST: ERC20_TOKEN_LIST,
    ERC721_CONTRACT_ADDRESSES,
    CRYPTOKITTIES_CONTRACT: CRYPTOKITTIES_CONTRACT_ADDRESS,
};

/**
 * Reads a JSON file synchronously and returns the contents as JSON.
 *
 * @param path
 * @returns {any}
 */
function readJsonSync(path) {
    return JSON.parse(
        fs.readFileSync(path, "utf8"),
    );
}

/**
 * Returns the project's root directory.
 *
 * @returns {string} root
 */
function projectRoot() {
    // The "main" directory here will be node_modules/truffle/build,
    // and so we split that to find the directory above node_modules, which is
    // the project root.
    return process.mainModule.paths[0].split('node_modules')[0].slice(0, -1);
}
