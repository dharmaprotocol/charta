import {DebtRegistryContract} from "../types/generated/debt_registry";
import {DummyTokenRegistryContract} from "../types/generated/dummy_token_registry";
import {RepaymentRouterContract} from "../types/generated/repayment_router";
import {TermsContractRegistryContract} from "../types/generated/terms_contract_registry";

const SimpleInterestTermsContract = artifacts.require("SimpleInterestTermsContract");
const TermsContractRegistry = artifacts.require("TermsContractRegistry");

module.exports = (deployer: any, network: string, accounts: string[]) => {
    const TX_DEFAULTS = { from: accounts[0], gas: 4000000 };

    deployer.deploy(TermsContractRegistry).then(async () => {
        const debtRegistry = await DebtRegistryContract.deployed(web3, TX_DEFAULTS);
        const repaymentRouter = await RepaymentRouterContract.deployed(web3, TX_DEFAULTS);

        const termsContractRegistry = await TermsContractRegistryContract.at(
            TermsContractRegistry.address,
            web3,
            TX_DEFAULTS,
        );

        const addressToTermsContractAddress: { [address: string]: string } = {};

        if (network !== "live") {
            const dummyTokenRegistry = await DummyTokenRegistryContract.deployed(web3, TX_DEFAULTS);

            const dummyREPTokenAddress = await dummyTokenRegistry.getTokenAddress.callAsync("REP");
            const dummyMKRTokenAddress = await dummyTokenRegistry.getTokenAddress.callAsync("MKR");
            const dummyZRXTokenAddress = await dummyTokenRegistry.getTokenAddress.callAsync("ZRX");

            const simpleInterestREPTermsContract = await SimpleInterestTermsContract.new(
                debtRegistry.address,
                dummyREPTokenAddress,
                repaymentRouter.address,
            );

            const simpleInterestMKRTermsContract = await SimpleInterestTermsContract.new(
                debtRegistry.address,
                dummyMKRTokenAddress,
                repaymentRouter.address,
            );

            const simpleInterestZRXTermsContract = await SimpleInterestTermsContract.new(
                debtRegistry.address,
                dummyZRXTokenAddress,
                repaymentRouter.address,
            );

            addressToTermsContractAddress[dummyREPTokenAddress] = simpleInterestREPTermsContract.address;
            addressToTermsContractAddress[dummyMKRTokenAddress] = simpleInterestMKRTermsContract.address;
            addressToTermsContractAddress[dummyZRXTokenAddress] = simpleInterestZRXTermsContract.address;
        } else {
            // TODO fill in mainnet implementation
        }

        for (const address in addressToTermsContractAddress) {
            if (addressToTermsContractAddress.hasOwnProperty(address)) {
                await termsContractRegistry.setSimpleInterestTermsContractAddress.sendTransactionAsync(
                    address, addressToTermsContractAddress[address],
                );
            }
        }
    });
};
