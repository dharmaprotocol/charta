// External Libraries
import * as chai from "chai";
import { BigNumber } from "bignumber.js";

// Test Utils
import { BigNumberSetup } from "../test_utils/bignumber_setup";
import ChaiSetup from "../test_utils/chai_setup";
import { multiSigExecute } from "../test_utils/utils";

// Wrappers
import { TokenRegistryContract } from "../../../types/generated/token_registry";
import { MultiSigWalletContract } from "../../../types/generated/multi_sig_wallet";
import { Address, TxData } from "../../../types/common";
import { BaseContract } from "../../../types/base_contract";

ChaiSetup.configure();

// Configure BigNumber exponentiation
BigNumberSetup.configure();

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

    describe("#getTokenIndexBySymbol", () => {
        describe("when given 'WETH'", () => {
            it("returns a number", async () => {
                const index = await registry.getTokenIndexBySymbol.callAsync("WETH");

                expect(index.toNumber()).to.be.at.least(0);
            });
        });
    });

    describe("#getTokenAddressBySymbol", () => {
        describe("when given 'WETH'", () => {
            it("returns a valid address", async () => {
                const address = await registry.getTokenAddressBySymbol.callAsync("WETH");

                expect(address.length).to.eq(42);
            });
        });
    });

    describe("#getTokenAddressByIndex", () => {
        describe("when given '0'", () => {
            it("returns a valid address", async () => {
                const address = await registry.getTokenAddressByIndex.callAsync(new BigNumber(0));

                expect(address.length).to.eq(42);
            });
        });
    });

    describe("#getTokenAttributesBySymbol", () => {
        describe("when given 'WETH'", () => {
            it("returns an array of attributes for WETH", async () => {
                const [
                    address,
                    index,
                    name,
                    numDecimals,
                ] = await registry.getTokenAttributesBySymbol.callAsync("WETH");

                expect(numDecimals.toNumber()).to.equal(18);
                expect(name).to.equal("Canonical Wrapped Ether");
                expect(address.length).to.equal(42);
                expect(index.toNumber()).to.be.at.least(0);
            });
        });
    });

    describe("#setTokenAttributes", () => {
        const symbol = "WETH";

        const testAttributes = {
            address: "0x1111000011110000111100001111000011110000",
            name: "Test Wrapped Ether",
            numDecimals: new BigNumber(2),
        };

        // The contract owner.
        let multiSig: MultiSigWalletContract;

        // Store the token's original attributes, so that we can restore them after tests.
        let originalAddress: string;
        let originalName: string;
        let originalNumDecimals: BigNumber;
        let originalSymbol: string;

        describe("when called by the multi-sig contract owner", () => {
            before("store the original token attributes and then set the new ones", async () => {
                multiSig = await MultiSigWalletContract.deployed(web3, TX_DEFAULTS);

                [
                    originalAddress,
                    originalName,
                    originalSymbol,
                    originalNumDecimals,
                ] = await registry.getTokenAttributesBySymbol.callAsync(symbol);

                await multiSigExecute(multiSig, registry, "setTokenAttributes", ACCOUNTS, [
                    symbol,
                    testAttributes.address,
                    testAttributes.name,
                    testAttributes.numDecimals,
                ]);
            });

            after("restore the original token attributes to the registry", async () => {
                await multiSigExecute(multiSig, registry, "setTokenAttributes", ACCOUNTS, [
                    symbol,
                    originalAddress,
                    originalName,
                    originalNumDecimals,
                ]);
            });

            it("sets the token's name", async () => {
                expect(await registry.getTokenNameBySymbol.callAsync(symbol)).to.equal(
                    testAttributes.name,
                );
            });

            it("sets the token's address", async () => {
                expect(await registry.getTokenAddressBySymbol.callAsync(symbol)).to.equal(
                    testAttributes.address,
                );
            });

            it("sets the token's numDecimals", async () => {
                const result = await registry.getNumDecimalsFromSymbol.callAsync(symbol);
                expect(result.toNumber()).to.deep.equal(testAttributes.numDecimals.toNumber());
            });
        });
    });
});
