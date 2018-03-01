const keccak256 = require("js-sha3").keccak_256;

const OWNER_ONE = "0x" + keccak256("test account one");
const OWNER_TWO = "0x" + keccak256("test account two");
const OWNER_THREE = "0x" + keccak256("test account three");
const OWNER_FOUR = "0x" + keccak256("test account four");
const OWNER_FIVE = "0x" + keccak256("test account five");

const SIGNATORIES = [OWNER_ONE, OWNER_TWO, OWNER_THREE, OWNER_FOUR, OWNER_FIVE];

module.exports.SIGNATORIES = SIGNATORIES;
