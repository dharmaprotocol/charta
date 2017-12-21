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

export class DebtRegistryContract extends BaseContract {
    public getCreditor = {
        async callAsync(
            entryHash: string,
            defaultBlock?: Web3.BlockParam,
        ): Promise<string
    > {
            const self = this as DebtRegistryContract;
            const result = await promisify<string
    >(
                self.web3ContractInstance.getCreditor.call,
                self.web3ContractInstance,
            )(
                entryHash,
            );
            return result;
        },
    };
    public getTermsContractParametersHash = {
        async callAsync(
            entryHash: string,
            defaultBlock?: Web3.BlockParam,
        ): Promise<string
    > {
            const self = this as DebtRegistryContract;
            const result = await promisify<string
    >(
                self.web3ContractInstance.getTermsContractParametersHash.call,
                self.web3ContractInstance,
            )(
                entryHash,
            );
            return result;
        },
    };
    public addAuthorizedEditAgent = {
        async sendTransactionAsync(
            agent: string,
            txData: TxData = {},
        ): Promise<string> {
            const self = this as DebtRegistryContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
                self.addAuthorizedEditAgent.estimateGasAsync.bind(
                    self,
                    agent,
                ),
            );
            const txHash = await promisify<string>(
                self.web3ContractInstance.addAuthorizedEditAgent, self.web3ContractInstance,
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
            const self = this as DebtRegistryContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const gas = await promisify<number>(
                self.web3ContractInstance.addAuthorizedEditAgent.estimateGas, self.web3ContractInstance,
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
            const self = this as DebtRegistryContract;
            const abiEncodedTransactionData = self.web3ContractInstance.addAuthorizedEditAgent.getData();
            return abiEncodedTransactionData;
        },
    };
    public getAuthorizedInsertAgents = {
        async callAsync(
            defaultBlock?: Web3.BlockParam,
        ): Promise<string[]
    > {
            const self = this as DebtRegistryContract;
            const result = await promisify<string[]
    >(
                self.web3ContractInstance.getAuthorizedInsertAgents.call,
                self.web3ContractInstance,
            )(
            );
            return result;
        },
    };
    public owner = {
        async callAsync(
            defaultBlock?: Web3.BlockParam,
        ): Promise<string
    > {
            const self = this as DebtRegistryContract;
            const result = await promisify<string
    >(
                self.web3ContractInstance.owner.call,
                self.web3ContractInstance,
            )(
            );
            return result;
        },
    };
    public get = {
        async callAsync(
            entryHash: string,
            defaultBlock?: Web3.BlockParam,
        ): Promise<[string, string, string, string]
    > {
            const self = this as DebtRegistryContract;
            const result = await promisify<[string, string, string, string]
    >(
                self.web3ContractInstance.get.call,
                self.web3ContractInstance,
            )(
                entryHash,
            );
            return result;
        },
    };
    public revokeEditAgentAuthorization = {
        async sendTransactionAsync(
            agent: string,
            txData: TxData = {},
        ): Promise<string> {
            const self = this as DebtRegistryContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
                self.revokeEditAgentAuthorization.estimateGasAsync.bind(
                    self,
                    agent,
                ),
            );
            const txHash = await promisify<string>(
                self.web3ContractInstance.revokeEditAgentAuthorization, self.web3ContractInstance,
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
            const self = this as DebtRegistryContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const gas = await promisify<number>(
                self.web3ContractInstance.revokeEditAgentAuthorization.estimateGas, self.web3ContractInstance,
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
            const self = this as DebtRegistryContract;
            const abiEncodedTransactionData = self.web3ContractInstance.revokeEditAgentAuthorization.getData();
            return abiEncodedTransactionData;
        },
    };
    public insert = {
        async sendTransactionAsync(
            _version: string,
            _creditor: string,
            _termsContract: string,
            _termsContractParameters: string,
            _salt: BigNumber,
            txData: TxData = {},
        ): Promise<string> {
            const self = this as DebtRegistryContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
                self.insert.estimateGasAsync.bind(
                    self,
                    _version,
                    _creditor,
                    _termsContract,
                    _termsContractParameters,
                    _salt,
                ),
            );
            const txHash = await promisify<string>(
                self.web3ContractInstance.insert, self.web3ContractInstance,
            )(
                _version,
                _creditor,
                _termsContract,
                _termsContractParameters,
                _salt,
                txDataWithDefaults,
            );
            return txHash;
        },
        async estimateGasAsync(
            _version: string,
            _creditor: string,
            _termsContract: string,
            _termsContractParameters: string,
            _salt: BigNumber,
            txData: TxData = {},
        ): Promise<number> {
            const self = this as DebtRegistryContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const gas = await promisify<number>(
                self.web3ContractInstance.insert.estimateGas, self.web3ContractInstance,
            )(
                _version,
                _creditor,
                _termsContract,
                _termsContractParameters,
                _salt,
                txDataWithDefaults,
            );
            return gas;
        },
        getABIEncodedTransactionData(
            _version: string,
            _creditor: string,
            _termsContract: string,
            _termsContractParameters: string,
            _salt: BigNumber,
            txData: TxData = {},
        ): string {
            const self = this as DebtRegistryContract;
            const abiEncodedTransactionData = self.web3ContractInstance.insert.getData();
            return abiEncodedTransactionData;
        },
    };
    public addAuthorizedInsertAgent = {
        async sendTransactionAsync(
            agent: string,
            txData: TxData = {},
        ): Promise<string> {
            const self = this as DebtRegistryContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
                self.addAuthorizedInsertAgent.estimateGasAsync.bind(
                    self,
                    agent,
                ),
            );
            const txHash = await promisify<string>(
                self.web3ContractInstance.addAuthorizedInsertAgent, self.web3ContractInstance,
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
            const self = this as DebtRegistryContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const gas = await promisify<number>(
                self.web3ContractInstance.addAuthorizedInsertAgent.estimateGas, self.web3ContractInstance,
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
            const self = this as DebtRegistryContract;
            const abiEncodedTransactionData = self.web3ContractInstance.addAuthorizedInsertAgent.getData();
            return abiEncodedTransactionData;
        },
    };
    public revokeInsertAgentAuthorization = {
        async sendTransactionAsync(
            agent: string,
            txData: TxData = {},
        ): Promise<string> {
            const self = this as DebtRegistryContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
                self.revokeInsertAgentAuthorization.estimateGasAsync.bind(
                    self,
                    agent,
                ),
            );
            const txHash = await promisify<string>(
                self.web3ContractInstance.revokeInsertAgentAuthorization, self.web3ContractInstance,
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
            const self = this as DebtRegistryContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const gas = await promisify<number>(
                self.web3ContractInstance.revokeInsertAgentAuthorization.estimateGas, self.web3ContractInstance,
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
            const self = this as DebtRegistryContract;
            const abiEncodedTransactionData = self.web3ContractInstance.revokeInsertAgentAuthorization.getData();
            return abiEncodedTransactionData;
        },
    };
    public modifyCreditor = {
        async sendTransactionAsync(
            entryHash: string,
            newCreditor: string,
            txData: TxData = {},
        ): Promise<string> {
            const self = this as DebtRegistryContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
                self.modifyCreditor.estimateGasAsync.bind(
                    self,
                    entryHash,
                    newCreditor,
                ),
            );
            const txHash = await promisify<string>(
                self.web3ContractInstance.modifyCreditor, self.web3ContractInstance,
            )(
                entryHash,
                newCreditor,
                txDataWithDefaults,
            );
            return txHash;
        },
        async estimateGasAsync(
            entryHash: string,
            newCreditor: string,
            txData: TxData = {},
        ): Promise<number> {
            const self = this as DebtRegistryContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const gas = await promisify<number>(
                self.web3ContractInstance.modifyCreditor.estimateGas, self.web3ContractInstance,
            )(
                entryHash,
                newCreditor,
                txDataWithDefaults,
            );
            return gas;
        },
        getABIEncodedTransactionData(
            entryHash: string,
            newCreditor: string,
            txData: TxData = {},
        ): string {
            const self = this as DebtRegistryContract;
            const abiEncodedTransactionData = self.web3ContractInstance.modifyCreditor.getData();
            return abiEncodedTransactionData;
        },
    };
    public transferOwnership = {
        async sendTransactionAsync(
            newOwner: string,
            txData: TxData = {},
        ): Promise<string> {
            const self = this as DebtRegistryContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
                self.transferOwnership.estimateGasAsync.bind(
                    self,
                    newOwner,
                ),
            );
            const txHash = await promisify<string>(
                self.web3ContractInstance.transferOwnership, self.web3ContractInstance,
            )(
                newOwner,
                txDataWithDefaults,
            );
            return txHash;
        },
        async estimateGasAsync(
            newOwner: string,
            txData: TxData = {},
        ): Promise<number> {
            const self = this as DebtRegistryContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const gas = await promisify<number>(
                self.web3ContractInstance.transferOwnership.estimateGas, self.web3ContractInstance,
            )(
                newOwner,
                txDataWithDefaults,
            );
            return gas;
        },
        getABIEncodedTransactionData(
            newOwner: string,
            txData: TxData = {},
        ): string {
            const self = this as DebtRegistryContract;
            const abiEncodedTransactionData = self.web3ContractInstance.transferOwnership.getData();
            return abiEncodedTransactionData;
        },
    };
    public getAuthorizedEditAgents = {
        async callAsync(
            defaultBlock?: Web3.BlockParam,
        ): Promise<string[]
    > {
            const self = this as DebtRegistryContract;
            const result = await promisify<string[]
    >(
                self.web3ContractInstance.getAuthorizedEditAgents.call,
                self.web3ContractInstance,
            )(
            );
            return result;
        },
    };
    constructor(web3ContractInstance: Web3.ContractInstance, defaults: Partial<TxData>) {
        super(web3ContractInstance, defaults);
        classUtils.bindAll(this, ['web3ContractInstance', 'defaults']);
    }
} // tslint:disable:max-file-line-count
