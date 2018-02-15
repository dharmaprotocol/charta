module.exports = (deployer, network, accounts) => {
    const DebtRegistry = artifacts.require("DebtRegistry");
    const RepaymentRouter = artifacts.require("RepaymentRouter");
    const TermsContractRegistry = artifacts.require("TermsContractRegistry");
    const TokenRegistry = artifacts.require("TokenRegistry");
    const SimpleInterestTermsContract = artifacts.require("SimpleInterestTermsContract");

    const TX_DEFAULTS = { from: accounts[0], gas: 4000000 };

    deployer.deploy(TermsContractRegistry).then(async () => {
        const debtRegistry = await DebtRegistry.deployed(web3);
        const repaymentRouter = await RepaymentRouter.deployed(web3);

        const termsContractRegistry = await TermsContractRegistry.at(TermsContractRegistry.address);

        let addressToTermsContractAddress = {};

        if (network !== "live") {
            const tokenRegistry = await TokenRegistry.deployed(web3);

            const dummyREPTokenAddress = await tokenRegistry.getTokenAddress("REP");
            const dummyMKRTokenAddress = await tokenRegistry.getTokenAddress("MKR");
            const dummyZRXTokenAddress = await tokenRegistry.getTokenAddress("ZRX");

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
                await termsContractRegistry.setSimpleInterestTermsContractAddress(
                    address, addressToTermsContractAddress[address],
                );
            }
        }
    });
};
