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
const debt_registry_1 = require("../types/generated/debt_registry");
const repayment_router_1 = require("../types/generated/repayment_router");
const terms_contract_registry_1 = require("../types/generated/terms_contract_registry");
const token_registry_1 = require("../types/generated/token_registry");
const SimpleInterestTermsContract = artifacts.require("SimpleInterestTermsContract");
const TermsContractRegistry = artifacts.require("TermsContractRegistry");
module.exports = (deployer, network, accounts) => {
    const TX_DEFAULTS = { from: accounts[0], gas: 4000000 };
    deployer.deploy(TermsContractRegistry).then(() => __awaiter(this, void 0, void 0, function* () {
        const debtRegistry = yield debt_registry_1.DebtRegistryContract.deployed(web3, TX_DEFAULTS);
        const repaymentRouter = yield repayment_router_1.RepaymentRouterContract.deployed(web3, TX_DEFAULTS);
        const termsContractRegistry = yield terms_contract_registry_1.TermsContractRegistryContract.at(TermsContractRegistry.address, web3, TX_DEFAULTS);
        const addressToTermsContractAddress = {};
        if (network !== "live") {
            const tokenRegistry = yield token_registry_1.TokenRegistryContract.deployed(web3, TX_DEFAULTS);
            const dummyREPTokenAddress = yield tokenRegistry.getTokenAddress.callAsync("REP");
            const dummyMKRTokenAddress = yield tokenRegistry.getTokenAddress.callAsync("MKR");
            const dummyZRXTokenAddress = yield tokenRegistry.getTokenAddress.callAsync("ZRX");
            const simpleInterestREPTermsContract = yield SimpleInterestTermsContract.new(debtRegistry.address, dummyREPTokenAddress, repaymentRouter.address);
            const simpleInterestMKRTermsContract = yield SimpleInterestTermsContract.new(debtRegistry.address, dummyMKRTokenAddress, repaymentRouter.address);
            const simpleInterestZRXTermsContract = yield SimpleInterestTermsContract.new(debtRegistry.address, dummyZRXTokenAddress, repaymentRouter.address);
            addressToTermsContractAddress[dummyREPTokenAddress] = simpleInterestREPTermsContract.address;
            addressToTermsContractAddress[dummyMKRTokenAddress] = simpleInterestMKRTermsContract.address;
            addressToTermsContractAddress[dummyZRXTokenAddress] = simpleInterestZRXTermsContract.address;
        }
        else {
            // TODO fill in mainnet implementation
        }
        for (const address in addressToTermsContractAddress) {
            if (addressToTermsContractAddress.hasOwnProperty(address)) {
                yield termsContractRegistry.setSimpleInterestTermsContractAddress.sendTransactionAsync(address, addressToTermsContractAddress[address]);
            }
        }
    }));
};
//# sourceMappingURL=4_deploy_terms_contracts.js.map