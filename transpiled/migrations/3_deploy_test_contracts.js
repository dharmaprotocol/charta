var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
module.exports = (deployer, network, accounts) => {
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
    const TokenRegistry = artifacts.require("TokenRegistry");
    const DUMMY_TOKEN_SUPPLY = Math.pow(10, 27);
    const DUMMY_TOKEN_DECIMALS = 18;
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
        deployer.deploy(TokenRegistry).then(() => __awaiter(this, void 0, void 0, function* () {
            const tokenRegistry = yield TokenRegistry.deployed();
            const dummyREPToken = yield DummyToken.new("Augur REP", "REP", DUMMY_TOKEN_DECIMALS, DUMMY_TOKEN_SUPPLY);
            yield tokenRegistry.setTokenAddress("REP", dummyREPToken.address, { from: accounts[0] });
            const dummyMKRToken = yield DummyToken.new("Maker DAO", "MKR", DUMMY_TOKEN_DECIMALS, DUMMY_TOKEN_SUPPLY);
            yield tokenRegistry.setTokenAddress("MKR", dummyMKRToken.address, { from: accounts[0] });
            const dummyZRXToken = yield DummyToken.new("0x Token", "ZRX", DUMMY_TOKEN_DECIMALS, DUMMY_TOKEN_SUPPLY);
            yield tokenRegistry.setTokenAddress("ZRX", dummyZRXToken.address, { from: accounts[0] });
        }));
    } // TODO Add some sort of linking for live tokens to token registry
};
//# sourceMappingURL=3_deploy_test_contracts.js.map