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

export class ERC20Contract extends BaseContract {
    public approve = {
        async sendTransactionAsync(
            spender: string,
            value: BigNumber,
            txData: TxData = {},
        ): Promise<string> {
            const self = this as ERC20Contract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
                self.approve.estimateGasAsync.bind(
                    self,
                    spender,
                    value,
                ),
            );
            const txHash = await promisify<string>(
                self.web3ContractInstance.approve, self.web3ContractInstance,
            )(
                spender,
                value,
                txDataWithDefaults,
            );
            return txHash;
        },
        async estimateGasAsync(
            spender: string,
            value: BigNumber,
            txData: TxData = {},
        ): Promise<number> {
            const self = this as ERC20Contract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const gas = await promisify<number>(
                self.web3ContractInstance.approve.estimateGas, self.web3ContractInstance,
            )(
                spender,
                value,
                txDataWithDefaults,
            );
            return gas;
        },
        getABIEncodedTransactionData(
            spender: string,
            value: BigNumber,
            txData: TxData = {},
        ): string {
            const self = this as ERC20Contract;
            const abiEncodedTransactionData = self.web3ContractInstance.approve.getData();
            return abiEncodedTransactionData;
        },
    };
    public totalSupply = {
        async callAsync(
            defaultBlock?: Web3.BlockParam,
        ): Promise<BigNumber
    > {
            const self = this as ERC20Contract;
            const result = await promisify<BigNumber
    >(
                self.web3ContractInstance.totalSupply.call,
                self.web3ContractInstance,
            )(
            );
            return result;
        },
    };
    public transferFrom = {
        async sendTransactionAsync(
            from: string,
            to: string,
            value: BigNumber,
            txData: TxData = {},
        ): Promise<string> {
            const self = this as ERC20Contract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
                self.transferFrom.estimateGasAsync.bind(
                    self,
                    from,
                    to,
                    value,
                ),
            );
            const txHash = await promisify<string>(
                self.web3ContractInstance.transferFrom, self.web3ContractInstance,
            )(
                from,
                to,
                value,
                txDataWithDefaults,
            );
            return txHash;
        },
        async estimateGasAsync(
            from: string,
            to: string,
            value: BigNumber,
            txData: TxData = {},
        ): Promise<number> {
            const self = this as ERC20Contract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const gas = await promisify<number>(
                self.web3ContractInstance.transferFrom.estimateGas, self.web3ContractInstance,
            )(
                from,
                to,
                value,
                txDataWithDefaults,
            );
            return gas;
        },
        getABIEncodedTransactionData(
            from: string,
            to: string,
            value: BigNumber,
            txData: TxData = {},
        ): string {
            const self = this as ERC20Contract;
            const abiEncodedTransactionData = self.web3ContractInstance.transferFrom.getData();
            return abiEncodedTransactionData;
        },
    };
    public balanceOf = {
        async callAsync(
            who: string,
            defaultBlock?: Web3.BlockParam,
        ): Promise<BigNumber
    > {
            const self = this as ERC20Contract;
            const result = await promisify<BigNumber
    >(
                self.web3ContractInstance.balanceOf.call,
                self.web3ContractInstance,
            )(
                who,
            );
            return result;
        },
    };
    public transfer = {
        async sendTransactionAsync(
            to: string,
            value: BigNumber,
            txData: TxData = {},
        ): Promise<string> {
            const self = this as ERC20Contract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
                self.transfer.estimateGasAsync.bind(
                    self,
                    to,
                    value,
                ),
            );
            const txHash = await promisify<string>(
                self.web3ContractInstance.transfer, self.web3ContractInstance,
            )(
                to,
                value,
                txDataWithDefaults,
            );
            return txHash;
        },
        async estimateGasAsync(
            to: string,
            value: BigNumber,
            txData: TxData = {},
        ): Promise<number> {
            const self = this as ERC20Contract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const gas = await promisify<number>(
                self.web3ContractInstance.transfer.estimateGas, self.web3ContractInstance,
            )(
                to,
                value,
                txDataWithDefaults,
            );
            return gas;
        },
        getABIEncodedTransactionData(
            to: string,
            value: BigNumber,
            txData: TxData = {},
        ): string {
            const self = this as ERC20Contract;
            const abiEncodedTransactionData = self.web3ContractInstance.transfer.getData();
            return abiEncodedTransactionData;
        },
    };
    public allowance = {
        async callAsync(
            owner: string,
            spender: string,
            defaultBlock?: Web3.BlockParam,
        ): Promise<BigNumber
    > {
            const self = this as ERC20Contract;
            const result = await promisify<BigNumber
    >(
                self.web3ContractInstance.allowance.call,
                self.web3ContractInstance,
            )(
                owner,
                spender,
            );
            return result;
        },
    };
    constructor(web3ContractInstance: Web3.ContractInstance, defaults: Partial<TxData>) {
        super(web3ContractInstance, defaults);
        classUtils.bindAll(this, ['web3ContractInstance', 'defaults']);
    }
} // tslint:disable:max-file-line-count
