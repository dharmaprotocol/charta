module.exports = (deployer, network, accounts) => {
    const DebtRegistry = artifacts.require("DebtRegistry");
    const DebtKernel = artifacts.require("DebtKernel");
    const RepaymentRouter = artifacts.require("RepaymentRouter");
    const TermsContractRegistry = artifacts.require("TermsContractRegistry");
    const TokenRegistry = artifacts.require("TokenRegistry");
    const SimpleInterestTermsContract = artifacts.require("SimpleInterestTermsContract");
    const CompoundInterestTermsContract = artifacts.require("CompoundInterestTermsContract");
    const IncompatibleTermsContract = artifacts.require("IncompatibleTermsContract");

    const TX_DEFAULTS = { from: accounts[0], gas: 4000000 };

    deployer.deploy(IncompatibleTermsContract);
    deployer.deploy(TermsContractRegistry).then(async () => {
        const debtRegistry = await DebtRegistry.deployed(web3);
        const debtKernel = await DebtKernel.deployed(web3);
        const repaymentRouter = await RepaymentRouter.deployed(web3);

        const termsContractRegistry = await TermsContractRegistry.at(TermsContractRegistry.address);

        let simpleInterestTermsContracts = {};
        let compoundInterestTermsContracts = {};

        if (network !== "live") {
            const tokenRegistry = await TokenRegistry.deployed(web3);

            const dummyREPTokenAddress = await tokenRegistry.getTokenAddress("REP");
            const dummyMKRTokenAddress = await tokenRegistry.getTokenAddress("MKR");
            const dummyZRXTokenAddress = await tokenRegistry.getTokenAddress("ZRX");

            /*
             * Deploy SimpleInterestTermsContract's for each token type.
             */

            const simpleInterestREPTermsContract = await SimpleInterestTermsContract.new(
                debtRegistry.address,
                debtKernel.address,
                dummyREPTokenAddress,
                repaymentRouter.address,
            );

            const simpleInterestMKRTermsContract = await SimpleInterestTermsContract.new(
                debtRegistry.address,
                debtKernel.address,
                dummyMKRTokenAddress,
                repaymentRouter.address,
            );

            const simpleInterestZRXTermsContract = await SimpleInterestTermsContract.new(
                debtRegistry.address,
                debtKernel.address,
                dummyZRXTokenAddress,
                repaymentRouter.address,
            );

            /*
             * Deploy CompoundInterestTermsContract's for each token type.
             */

            const compoundInterestREPTermsContract = await CompoundInterestTermsContract.new(
                debtRegistry.address,
                debtKernel.address,
                dummyREPTokenAddress,
                repaymentRouter.address,
            );

            const compoundInterestMKRTermsContract = await CompoundInterestTermsContract.new(
                debtRegistry.address,
                debtKernel.address,
                dummyMKRTokenAddress,
                repaymentRouter.address,
            );

            const compoundInterestZRXTermsContract = await CompoundInterestTermsContract.new(
                debtRegistry.address,
                debtKernel.address,
                dummyZRXTokenAddress,
                repaymentRouter.address,
            );

            simpleInterestTermsContracts[dummyREPTokenAddress] =
                simpleInterestREPTermsContract.address;
            simpleInterestTermsContracts[dummyMKRTokenAddress] =
                simpleInterestMKRTermsContract.address;
            simpleInterestTermsContracts[dummyZRXTokenAddress] =
                simpleInterestZRXTermsContract.address;

            compoundInterestTermsContracts[dummyREPTokenAddress] =
                compoundInterestREPTermsContract.address;
            compoundInterestTermsContracts[dummyMKRTokenAddress] =
                compoundInterestMKRTermsContract.address;
            compoundInterestTermsContracts[dummyZRXTokenAddress] =
                compoundInterestZRXTermsContract.address;
        } else {
            // TODO fill in mainnet implementation
        }

        /*
         * Register simple interest terms contracts to TermsContractRegistry
         */
        for (const address in simpleInterestTermsContracts) {
            if (simpleInterestTermsContracts.hasOwnProperty(address)) {
                await termsContractRegistry.setSimpleInterestTermsContractAddress(
                    address,
                    simpleInterestTermsContracts[address],
                );
            }
        }

        /*
         * Register compound interest terms contracts to TermsContractRegistry
         */
        for (const address in compoundInterestTermsContracts) {
            if (compoundInterestTermsContracts.hasOwnProperty(address)) {
                await termsContractRegistry.setCompoundInterestTermsContractAddress(
                    address,
                    compoundInterestTermsContracts[address],
                );
            }
        }
    });
};
