import {DebtKernelContract} from "../types/generated/debt_kernel";
import {DebtRegistryContract} from "../types/generated/debt_registry";
import {DebtTokenContract} from "../types/generated/debt_token";
import {ZeroX_ExchangeContract} from "../types/generated/zerox_exchange";

module.exports = (deployer: any, network: string, accounts: string[]) => {
    const TX_DEFAULTS = { from: accounts[0], gas: 4000000 };

    deployer.then(async () => {
        const registry = await DebtRegistryContract.deployed(web3, TX_DEFAULTS);
        const token = await DebtTokenContract.deployed(web3, TX_DEFAULTS);
        const kernel = await DebtKernelContract.deployed(web3, TX_DEFAULTS);
        const zeroExExchangeContract = await ZeroX_ExchangeContract.deployed(web3, TX_DEFAULTS);

        // Authorize token contract to make mutations to the registry
        await registry.addAuthorizedInsertAgent.sendTransactionAsync(token.address);
        await registry.addAuthorizedEditAgent.sendTransactionAsync(token.address);

        // Authorize kernel contract to mint and broker debt tokens
        await token.addAuthorizedMintAgent.sendTransactionAsync(kernel.address);
        await token.addAuthorizedBrokerageAgent.sendTransactionAsync(kernel.address);
        await token.addAuthorizedExchangeAgent.sendTransactionAsync(zeroExExchangeContract.address);

        // Set kernel to point at current debt token contract
        await kernel.setDebtToken.sendTransactionAsync(token.address);
    });
};
