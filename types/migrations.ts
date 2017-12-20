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

export class MigrationsContract extends BaseContract {
    public upgrade = {
        async sendTransactionAsync(
            newAddress: string,
            txData: TxData = {},
        ): Promise<string> {
            const self = this as MigrationsContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
                self.upgrade.estimateGasAsync.bind(
                    self,
                    newAddress,
                ),
            );
            const txHash = await promisify<string>(
                self.web3ContractInstance.upgrade, self.web3ContractInstance,
            )(
                newAddress,
                txDataWithDefaults,
            );
            return txHash;
        },
        async estimateGasAsync(
            newAddress: string,
            txData: TxData = {},
        ): Promise<number> {
            const self = this as MigrationsContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const gas = await promisify<number>(
                self.web3ContractInstance.upgrade.estimateGas, self.web3ContractInstance,
            )(
                newAddress,
                txDataWithDefaults,
            );
            return gas;
        },
        getABIEncodedTransactionData(
            newAddress: string,
            txData: TxData = {},
        ): string {
            const self = this as MigrationsContract;
            const abiEncodedTransactionData = self.web3ContractInstance.upgrade.getData();
            return abiEncodedTransactionData;
        },
    };
    public owner = {
        async callAsync(
            defaultBlock?: Web3.BlockParam,
        ): Promise<string
    > {
            const self = this as MigrationsContract;
            const result = await promisify<string
    >(
                self.web3ContractInstance.owner.call,
                self.web3ContractInstance,
            )(
            );
            return result;
        },
    };
    public lastCompletedMigration = {
        async callAsync(
            defaultBlock?: Web3.BlockParam,
        ): Promise<BigNumber
    > {
            const self = this as MigrationsContract;
            const result = await promisify<BigNumber
    >(
                self.web3ContractInstance.lastCompletedMigration.call,
                self.web3ContractInstance,
            )(
            );
            return result;
        },
    };
    public setCompleted = {
        async sendTransactionAsync(
            completed: BigNumber,
            txData: TxData = {},
        ): Promise<string> {
            const self = this as MigrationsContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
                self.setCompleted.estimateGasAsync.bind(
                    self,
                    completed,
                ),
            );
            const txHash = await promisify<string>(
                self.web3ContractInstance.setCompleted, self.web3ContractInstance,
            )(
                completed,
                txDataWithDefaults,
            );
            return txHash;
        },
        async estimateGasAsync(
            completed: BigNumber,
            txData: TxData = {},
        ): Promise<number> {
            const self = this as MigrationsContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const gas = await promisify<number>(
                self.web3ContractInstance.setCompleted.estimateGas, self.web3ContractInstance,
            )(
                completed,
                txDataWithDefaults,
            );
            return gas;
        },
        getABIEncodedTransactionData(
            completed: BigNumber,
            txData: TxData = {},
        ): string {
            const self = this as MigrationsContract;
            const abiEncodedTransactionData = self.web3ContractInstance.setCompleted.getData();
            return abiEncodedTransactionData;
        },
    };
    constructor(web3ContractInstance: Web3.ContractInstance, defaults: Partial<TxData>) {
        super(web3ContractInstance, defaults);
        classUtils.bindAll(this, ['web3ContractInstance', 'defaults']);
    }
} // tslint:disable:max-file-line-count
