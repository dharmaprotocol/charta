import {DebtKernelContract} from "../types/generated/debt_kernel";
import {DebtRegistryContract} from "../types/generated/debt_registry";
import {DebtTokenContract} from "../types/generated/debt_token";
import {RepaymentRouterContract} from "../types/generated/repayment_router";
import {TokenTransferProxyContract} from "../types/generated/token_transfer_proxy";

module.exports = (deployer: any, network: string, accounts: string[]) => {
    const TX_DEFAULTS = { from: accounts[0], gas: 4000000 };

    deployer.then(async () => {
        const registry = await DebtRegistryContract.deployed(web3, TX_DEFAULTS);
        const token = await DebtTokenContract.deployed(web3, TX_DEFAULTS);
        const kernel = await DebtKernelContract.deployed(web3, TX_DEFAULTS);
        const proxy = await TokenTransferProxyContract.deployed(web3, TX_DEFAULTS);
        const router = await RepaymentRouterContract.deployed(web3, TX_DEFAULTS);

        // Authorize token contract to make mutations to the registry
        await registry.addAuthorizedInsertAgent.sendTransactionAsync(token.address);
        await registry.addAuthorizedEditAgent.sendTransactionAsync(token.address);

        // Authorize kernel contract to mint and broker debt tokens
        await token.addAuthorizedMintAgent.sendTransactionAsync(kernel.address);

        // Set kernel to point at current debt token contract
        await kernel.setDebtToken.sendTransactionAsync(token.address);

        // Authorize kernel to make `transferFrom` calls on the token transfer proxy
        await proxy.addAuthorizedTransferAgent.sendTransactionAsync(kernel.address);

        // Authorize repayment router to make `transferFrom` calls on the token transfer proxy
        await proxy.addAuthorizedTransferAgent.sendTransactionAsync(router.address);
    });
};
