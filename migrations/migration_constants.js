const keccak256 = require("js-sha3").keccak_256;

const OWNER_ONE = "0x" + keccak256("test account one");
const OWNER_TWO = "0x" + keccak256("test account two");
const OWNER_THREE = "0x" + keccak256("test account three");
const OWNER_FOUR = "0x" + keccak256("test account four");
const OWNER_FIVE = "0x" + keccak256("test account five");

const SIGNATORIES = [OWNER_ONE, OWNER_TWO, OWNER_THREE, OWNER_FOUR, OWNER_FIVE];
const THRESHOLD = 1 / 2; // 50%
const LIVE_NETWORK_ID = "live";
const DUMMY_TOKEN_SUPPLY = 10 ** 27;
const DUMMY_TOKEN_DECIMALS = 18;

const REP_TOKEN_SYMBOL = "REP";
const MKR_TOKEN_SYMBOL = "MKR";
const ZRX_TOKEN_SYMBOL = "ZRX";

module.exports = {
    SIGNATORIES,
    THRESHOLD,
    LIVE_NETWORK_ID,
    DUMMY_TOKEN_SUPPLY,
    DUMMY_TOKEN_DECIMALS,
    REP_TOKEN_SYMBOL,
    MKR_TOKEN_SYMBOL,
    ZRX_TOKEN_SYMBOL,
};
