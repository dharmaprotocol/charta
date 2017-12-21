/**
 * This file is auto-generated using abi-gen. Don't edit directly.
 * Templates can be found at https://github.com/0xProject/0x.js/tree/development/packages/abi-gen-templates.
 */
// tslint:disable-next-line:no-unused-variable
import {TxData, TxDataPayable} from '../common';
import {promisify} from '@0xproject/utils';
import {classUtils} from '../common';
import {BigNumber} from 'bignumber.js';
import * as Web3 from 'web3';

import {BaseContract} from '../base_contract';

export class DummyContractContract extends BaseContract {
    public revokeInFirstSet = {
        async sendTransactionAsync(
            agent: string,
            txData: TxData = {},
        ): Promise<string> {
            const self = this as DummyContractContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
                self.revokeInFirstSet.estimateGasAsync.bind(
                    self,
                    agent,
                ),
            );
            const txHash = await promisify<string>(
                self.web3ContractInstance.revokeInFirstSet, self.web3ContractInstance,
            )(
                agent,
                txDataWithDefaults,
            );
            return txHash;
        },
        async estimateGasAsync(
            agent: string,
            txData: TxData = {},
        ): Promise<number> {
            const self = this as DummyContractContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const gas = await promisify<number>(
                self.web3ContractInstance.revokeInFirstSet.estimateGas, self.web3ContractInstance,
            )(
                agent,
                txDataWithDefaults,
            );
            return gas;
        },
        getABIEncodedTransactionData(
            agent: string,
            txData: TxData = {},
        ): string {
            const self = this as DummyContractContract;
            const abiEncodedTransactionData = self.web3ContractInstance.revokeInFirstSet.getData();
            return abiEncodedTransactionData;
        },
    };
    public getSecondSetAuthorizedAgents = {
        async callAsync(
            defaultBlock?: Web3.BlockParam,
        ): Promise<string[]
    > {
            const self = this as DummyContractContract;
            const result = await promisify<string[]
    >(
                self.web3ContractInstance.getSecondSetAuthorizedAgents.call,
                self.web3ContractInstance,
            )(
            );
            return result;
        },
    };
    public isAuthorizedInSecondSet = {
        async callAsync(
            agent: string,
            defaultBlock?: Web3.BlockParam,
        ): Promise<boolean
    > {
            const self = this as DummyContractContract;
            const result = await promisify<boolean
    >(
                self.web3ContractInstance.isAuthorizedInSecondSet.call,
                self.web3ContractInstance,
            )(
                agent,
            );
            return result;
        },
    };
    public revokeInSecondSet = {
        async sendTransactionAsync(
            agent: string,
            txData: TxData = {},
        ): Promise<string> {
            const self = this as DummyContractContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
                self.revokeInSecondSet.estimateGasAsync.bind(
                    self,
                    agent,
                ),
            );
            const txHash = await promisify<string>(
                self.web3ContractInstance.revokeInSecondSet, self.web3ContractInstance,
            )(
                agent,
                txDataWithDefaults,
            );
            return txHash;
        },
        async estimateGasAsync(
            agent: string,
            txData: TxData = {},
        ): Promise<number> {
            const self = this as DummyContractContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const gas = await promisify<number>(
                self.web3ContractInstance.revokeInSecondSet.estimateGas, self.web3ContractInstance,
            )(
                agent,
                txDataWithDefaults,
            );
            return gas;
        },
        getABIEncodedTransactionData(
            agent: string,
            txData: TxData = {},
        ): string {
            const self = this as DummyContractContract;
            const abiEncodedTransactionData = self.web3ContractInstance.revokeInSecondSet.getData();
            return abiEncodedTransactionData;
        },
    };
    public getFirstSetAuthorizedAgents = {
        async callAsync(
            defaultBlock?: Web3.BlockParam,
        ): Promise<string[]
    > {
            const self = this as DummyContractContract;
            const result = await promisify<string[]
    >(
                self.web3ContractInstance.getFirstSetAuthorizedAgents.call,
                self.web3ContractInstance,
            )(
            );
            return result;
        },
    };
    public authorizeInSecondSet = {
        async sendTransactionAsync(
            agent: string,
            txData: TxData = {},
        ): Promise<string> {
            const self = this as DummyContractContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
                self.authorizeInSecondSet.estimateGasAsync.bind(
                    self,
                    agent,
                ),
            );
            const txHash = await promisify<string>(
                self.web3ContractInstance.authorizeInSecondSet, self.web3ContractInstance,
            )(
                agent,
                txDataWithDefaults,
            );
            return txHash;
        },
        async estimateGasAsync(
            agent: string,
            txData: TxData = {},
        ): Promise<number> {
            const self = this as DummyContractContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const gas = await promisify<number>(
                self.web3ContractInstance.authorizeInSecondSet.estimateGas, self.web3ContractInstance,
            )(
                agent,
                txDataWithDefaults,
            );
            return gas;
        },
        getABIEncodedTransactionData(
            agent: string,
            txData: TxData = {},
        ): string {
            const self = this as DummyContractContract;
            const abiEncodedTransactionData = self.web3ContractInstance.authorizeInSecondSet.getData();
            return abiEncodedTransactionData;
        },
    };
    public authorizeInFirstSet = {
        async sendTransactionAsync(
            agent: string,
            txData: TxData = {},
        ): Promise<string> {
            const self = this as DummyContractContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
                self.authorizeInFirstSet.estimateGasAsync.bind(
                    self,
                    agent,
                ),
            );
            const txHash = await promisify<string>(
                self.web3ContractInstance.authorizeInFirstSet, self.web3ContractInstance,
            )(
                agent,
                txDataWithDefaults,
            );
            return txHash;
        },
        async estimateGasAsync(
            agent: string,
            txData: TxData = {},
        ): Promise<number> {
            const self = this as DummyContractContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const gas = await promisify<number>(
                self.web3ContractInstance.authorizeInFirstSet.estimateGas, self.web3ContractInstance,
            )(
                agent,
                txDataWithDefaults,
            );
            return gas;
        },
        getABIEncodedTransactionData(
            agent: string,
            txData: TxData = {},
        ): string {
            const self = this as DummyContractContract;
            const abiEncodedTransactionData = self.web3ContractInstance.authorizeInFirstSet.getData();
            return abiEncodedTransactionData;
        },
    };
    public isAuthorizedInFirstSet = {
        async callAsync(
            agent: string,
            defaultBlock?: Web3.BlockParam,
        ): Promise<boolean
    > {
            const self = this as DummyContractContract;
            const result = await promisify<boolean
    >(
                self.web3ContractInstance.isAuthorizedInFirstSet.call,
                self.web3ContractInstance,
            )(
                agent,
            );
            return result;
        },
    };
    constructor(web3ContractInstance: Web3.ContractInstance, defaults: Partial<TxData>) {
        super(web3ContractInstance, defaults);
        classUtils.bindAll(this, ['web3ContractInstance', 'defaults']);
    }
} // tslint:disable:max-file-line-count
