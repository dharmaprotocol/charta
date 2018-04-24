// External Libraries
import * as chai from "chai";

// Test Utils
import ChaiSetup from "../test_utils/chai_setup";

// Wrappers
import { TokenRegistryContract } from "../../../types/generated/token_registry";

ChaiSetup.configure();

const expect = chai.expect;

contract("Token Registry (Integration Tests)", async (ACCOUNTS) => {
    const CONTRACT_OWNER = ACCOUNTS[0];
    const TX_DEFAULTS = { from: CONTRACT_OWNER, gas: 4000000 };

    let registry: TokenRegistryContract;

    before(async () => {
        registry = await TokenRegistryContract.deployed(web3, TX_DEFAULTS);
    });

    describe("#getTokenNameBySymbol", () => {
        describe("when given 'WETH'", () => {
            it("returns 'Canonical Wrapped Ether", async () => {
                expect(await registry.getTokenNameBySymbol.callAsync("WETH")).to.equal(
                    "Canonical Wrapped Ether",
                );
            });
        });

        describe("when given 'REP'", () => {
            it("returns 'Augur REP", async () => {
                expect(await registry.getTokenNameBySymbol.callAsync("REP")).to.equal("Augur REP");
            });
        });
    });

    describe("#getNumDecimalsFromSymbol", () => {
        describe("when given 'WETH'", () => {
            it("returns '18'", async () => {
                const numDecimals = await registry.getNumDecimalsFromSymbol.callAsync("WETH");

                expect(numDecimals.toNumber()).to.equal(18);
            });
        });

        describe("when given 'TRX'", () => {
            it("returns '6", async () => {
                const numDecimals = await registry.getNumDecimalsFromSymbol.callAsync("TRX");

                expect(numDecimals.toNumber()).to.equal(6);
            });
        });
    });
});
