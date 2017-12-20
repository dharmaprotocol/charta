/**
 * This file is auto-generated using abi-gen. Don't edit directly.
 * Templates can be found at https://github.com/0xProject/0x.js/tree/development/packages/abi-gen-templates.
 */
// tslint:disable-next-line:no-unused-variable
import {TxData, TxDataPayable} from './common';
import {promisify} from '@0xproject/utils';
import {classUtils} from './common';
import {BigNumber} from 'bignumber.js';
import * as Web3 from 'web3';

import {BaseContract} from './base_contract';

export class RepaymentRouterContract extends BaseContract {
    public repayNFT = {
        async sendTransactionAsync(
            entryHash: string,
            termsContractParameters: string,
            tokenId: BigNumber,
            token: string,
            txData: TxData = {},
        ): Promise<string> {
            const self = this as RepaymentRouterContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
                self.repayNFT.estimateGasAsync.bind(
                    self,
                    entryHash,
                    termsContractParameters,
                    tokenId,
                    token,
                ),
            );
            const txHash = await promisify<string>(
                self.web3ContractInstance.repayNFT, self.web3ContractInstance,
            )(
                entryHash,
                termsContractParameters,
                tokenId,
                token,
                txDataWithDefaults,
            );
            return txHash;
        },
        async estimateGasAsync(
            entryHash: string,
            termsContractParameters: string,
            tokenId: BigNumber,
            token: string,
            txData: TxData = {},
        ): Promise<number> {
            const self = this as RepaymentRouterContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const gas = await promisify<number>(
                self.web3ContractInstance.repayNFT.estimateGas, self.web3ContractInstance,
            )(
                entryHash,
                termsContractParameters,
                tokenId,
                token,
                txDataWithDefaults,
            );
            return gas;
        },
        getABIEncodedTransactionData(
            entryHash: string,
            termsContractParameters: string,
            tokenId: BigNumber,
            token: string,
            txData: TxData = {},
        ): string {
            const self = this as RepaymentRouterContract;
            const abiEncodedTransactionData = self.web3ContractInstance.repayNFT.getData();
            return abiEncodedTransactionData;
        },
    };
    public debtRegistry = {
        async callAsync(
            defaultBlock?: Web3.BlockParam,
        ): Promise<string
    > {
            const self = this as RepaymentRouterContract;
            const result = await promisify<string
    >(
                self.web3ContractInstance.debtRegistry.call,
                self.web3ContractInstance,
            )(
            );
            return result;
        },
    };
    public repay = {
        async sendTransactionAsync(
            entryHash: string,
            termsContractParameters: string,
            amount: BigNumber,
            token: string,
            txData: TxData = {},
        ): Promise<string> {
            const self = this as RepaymentRouterContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
                self.repay.estimateGasAsync.bind(
                    self,
                    entryHash,
                    termsContractParameters,
                    amount,
                    token,
                ),
            );
            const txHash = await promisify<string>(
                self.web3ContractInstance.repay, self.web3ContractInstance,
            )(
                entryHash,
                termsContractParameters,
                amount,
                token,
                txDataWithDefaults,
            );
            return txHash;
        },
        async estimateGasAsync(
            entryHash: string,
            termsContractParameters: string,
            amount: BigNumber,
            token: string,
            txData: TxData = {},
        ): Promise<number> {
            const self = this as RepaymentRouterContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const gas = await promisify<number>(
                self.web3ContractInstance.repay.estimateGas, self.web3ContractInstance,
            )(
                entryHash,
                termsContractParameters,
                amount,
                token,
                txDataWithDefaults,
            );
            return gas;
        },
        getABIEncodedTransactionData(
            entryHash: string,
            termsContractParameters: string,
            amount: BigNumber,
            token: string,
            txData: TxData = {},
        ): string {
            const self = this as RepaymentRouterContract;
            const abiEncodedTransactionData = self.web3ContractInstance.repay.getData();
            return abiEncodedTransactionData;
        },
    };
    constructor(web3ContractInstance: Web3.ContractInstance, defaults: Partial<TxData>) {
        super(web3ContractInstance, defaults);
        classUtils.bindAll(this, ['web3ContractInstance', 'defaults']);
    }
} // tslint:disable:max-file-line-count
