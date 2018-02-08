"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const dummy_token_registry_1 = require("../types/generated/dummy_token_registry");
const PermissionsLib = artifacts.require("PermissionsLib");
const DummyContract = artifacts.require("DummyContract");
const DummyToken = artifacts.require("DummyToken");
const DummyTokenRegistry = artifacts.require("DummyTokenRegistry");
const MockDebtRegistry = artifacts.require("MockDebtRegistry");
const MockERC20Token = artifacts.require("MockERC20Token");
const MockERC721Token = artifacts.require("MockERC721Token");
const MockDebtToken = artifacts.require("MockDebtToken");
const MockTermsContract = artifacts.require("MockTermsContract");
const MockTokenTransferProxyContract = artifacts.require("MockTokenTransferProxy");
const MintableNonFungibleToken = artifacts.require("MintableNonFungibleToken");
const DUMMY_TOKEN_SUPPLY = Math.pow(10, 27);
const DUMMY_TOKEN_DECIMALS = 18;
module.exports = (deployer, network, accounts) => {
    const TX_DEFAULTS = { from: accounts[0], gas: 4000000 };
    if (network !== "live") {
        deployer.link(PermissionsLib, DummyContract);
        deployer.deploy(DummyContract);
        deployer.deploy(MockDebtRegistry);
        deployer.deploy(MockERC20Token);
        deployer.deploy(MockERC721Token);
        deployer.deploy(MockDebtToken);
        deployer.deploy(MockTermsContract);
        deployer.deploy(MockTokenTransferProxyContract);
        deployer.deploy(MintableNonFungibleToken);
        deployer.deploy(DummyTokenRegistry).then(() => __awaiter(this, void 0, void 0, function* () {
            const dummyTokenRegistry = yield dummy_token_registry_1.DummyTokenRegistryContract.at(DummyTokenRegistry.address, web3, TX_DEFAULTS);
            const dummyREPToken = yield DummyToken.new("Augur REP", "REP", DUMMY_TOKEN_DECIMALS, DUMMY_TOKEN_SUPPLY);
            yield dummyTokenRegistry.setTokenAddress.sendTransactionAsync("REP", dummyREPToken.address);
            const dummyMKRToken = yield DummyToken.new("Maker DAO", "MKR", DUMMY_TOKEN_DECIMALS, DUMMY_TOKEN_SUPPLY);
            yield dummyTokenRegistry.setTokenAddress.sendTransactionAsync("MKR", dummyMKRToken.address);
            const dummyZRXToken = yield DummyToken.new("0x Token", "ZRX", DUMMY_TOKEN_DECIMALS, DUMMY_TOKEN_SUPPLY);
            yield dummyTokenRegistry.setTokenAddress.sendTransactionAsync("ZRX", dummyZRXToken.address);
        }));
    }
};
//# sourceMappingURL=3_deploy_test_contracts.js.map