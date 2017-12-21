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

export class DebtTokenContract extends BaseContract {
    public getAuthorizedMintAgents = {
        async callAsync(
            defaultBlock?: Web3.BlockParam,
        ): Promise<string[]
    > {
            const self = this as DebtTokenContract;
            const result = await promisify<string[]
    >(
                self.web3ContractInstance.getAuthorizedMintAgents.call,
                self.web3ContractInstance,
            )(
            );
            return result;
        },
    };
    public name = {
        async callAsync(
            defaultBlock?: Web3.BlockParam,
        ): Promise<string
    > {
            const self = this as DebtTokenContract;
            const result = await promisify<string
    >(
                self.web3ContractInstance.name.call,
                self.web3ContractInstance,
            )(
            );
            return result;
        },
    };
    public getApproved = {
        async callAsync(
            _tokenId: BigNumber,
            defaultBlock?: Web3.BlockParam,
        ): Promise<string
    > {
            const self = this as DebtTokenContract;
            const result = await promisify<string
    >(
                self.web3ContractInstance.getApproved.call,
                self.web3ContractInstance,
            )(
                _tokenId,
            );
            return result;
        },
    };
    public approve = {
        async sendTransactionAsync(
            _to: string,
            _tokenId: BigNumber,
            txData: TxData = {},
        ): Promise<string> {
            const self = this as DebtTokenContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
                self.approve.estimateGasAsync.bind(
                    self,
                    _to,
                    _tokenId,
                ),
            );
            const txHash = await promisify<string>(
                self.web3ContractInstance.approve, self.web3ContractInstance,
            )(
                _to,
                _tokenId,
                txDataWithDefaults,
            );
            return txHash;
        },
        async estimateGasAsync(
            _to: string,
            _tokenId: BigNumber,
            txData: TxData = {},
        ): Promise<number> {
            const self = this as DebtTokenContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const gas = await promisify<number>(
                self.web3ContractInstance.approve.estimateGas, self.web3ContractInstance,
            )(
                _to,
                _tokenId,
                txDataWithDefaults,
            );
            return gas;
        },
        getABIEncodedTransactionData(
            _to: string,
            _tokenId: BigNumber,
            txData: TxData = {},
        ): string {
            const self = this as DebtTokenContract;
            const abiEncodedTransactionData = self.web3ContractInstance.approve.getData();
            return abiEncodedTransactionData;
        },
    };
    public implementsERC721 = {
        async callAsync(
            defaultBlock?: Web3.BlockParam,
        ): Promise<boolean
    > {
            const self = this as DebtTokenContract;
            const result = await promisify<boolean
    >(
                self.web3ContractInstance.implementsERC721.call,
                self.web3ContractInstance,
            )(
            );
            return result;
        },
    };
    public totalSupply = {
        async callAsync(
            defaultBlock?: Web3.BlockParam,
        ): Promise<BigNumber
    > {
            const self = this as DebtTokenContract;
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
            _from: string,
            _to: string,
            _tokenId: BigNumber,
            txData: TxData = {},
        ): Promise<string> {
            const self = this as DebtTokenContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
                self.transferFrom.estimateGasAsync.bind(
                    self,
                    _from,
                    _to,
                    _tokenId,
                ),
            );
            const txHash = await promisify<string>(
                self.web3ContractInstance.transferFrom, self.web3ContractInstance,
            )(
                _from,
                _to,
                _tokenId,
                txDataWithDefaults,
            );
            return txHash;
        },
        async estimateGasAsync(
            _from: string,
            _to: string,
            _tokenId: BigNumber,
            txData: TxData = {},
        ): Promise<number> {
            const self = this as DebtTokenContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const gas = await promisify<number>(
                self.web3ContractInstance.transferFrom.estimateGas, self.web3ContractInstance,
            )(
                _from,
                _to,
                _tokenId,
                txDataWithDefaults,
            );
            return gas;
        },
        getABIEncodedTransactionData(
            _from: string,
            _to: string,
            _tokenId: BigNumber,
            txData: TxData = {},
        ): string {
            const self = this as DebtTokenContract;
            const abiEncodedTransactionData = self.web3ContractInstance.transferFrom.getData();
            return abiEncodedTransactionData;
        },
    };
    public tokenOfOwnerByIndex = {
        async callAsync(
            _owner: string,
            _index: BigNumber,
            defaultBlock?: Web3.BlockParam,
        ): Promise<BigNumber
    > {
            const self = this as DebtTokenContract;
            const result = await promisify<BigNumber
    >(
                self.web3ContractInstance.tokenOfOwnerByIndex.call,
                self.web3ContractInstance,
            )(
                _owner,
                _index,
            );
            return result;
        },
    };
    public ownerOf = {
        async callAsync(
            _tokenId: BigNumber,
            defaultBlock?: Web3.BlockParam,
        ): Promise<string
    > {
            const self = this as DebtTokenContract;
            const result = await promisify<string
    >(
                self.web3ContractInstance.ownerOf.call,
                self.web3ContractInstance,
            )(
                _tokenId,
            );
            return result;
        },
    };
    public tokenMetadata = {
        async callAsync(
            _tokenId: BigNumber,
            defaultBlock?: Web3.BlockParam,
        ): Promise<string
    > {
            const self = this as DebtTokenContract;
            const result = await promisify<string
    >(
                self.web3ContractInstance.tokenMetadata.call,
                self.web3ContractInstance,
            )(
                _tokenId,
            );
            return result;
        },
    };
    public balanceOf = {
        async callAsync(
            _owner: string,
            defaultBlock?: Web3.BlockParam,
        ): Promise<BigNumber
    > {
            const self = this as DebtTokenContract;
            const result = await promisify<BigNumber
    >(
                self.web3ContractInstance.balanceOf.call,
                self.web3ContractInstance,
            )(
                _owner,
            );
            return result;
        },
    };
    public registry = {
        async callAsync(
            defaultBlock?: Web3.BlockParam,
        ): Promise<string
    > {
            const self = this as DebtTokenContract;
            const result = await promisify<string
    >(
                self.web3ContractInstance.registry.call,
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
            const self = this as DebtTokenContract;
            const result = await promisify<string
    >(
                self.web3ContractInstance.owner.call,
                self.web3ContractInstance,
            )(
            );
            return result;
        },
    };
    public symbol = {
        async callAsync(
            defaultBlock?: Web3.BlockParam,
        ): Promise<string
    > {
            const self = this as DebtTokenContract;
            const result = await promisify<string
    >(
                self.web3ContractInstance.symbol.call,
                self.web3ContractInstance,
            )(
            );
            return result;
        },
    };
    public addAuthorizedMintAgent = {
        async sendTransactionAsync(
            _agent: string,
            txData: TxData = {},
        ): Promise<string> {
            const self = this as DebtTokenContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
                self.addAuthorizedMintAgent.estimateGasAsync.bind(
                    self,
                    _agent,
                ),
            );
            const txHash = await promisify<string>(
                self.web3ContractInstance.addAuthorizedMintAgent, self.web3ContractInstance,
            )(
                _agent,
                txDataWithDefaults,
            );
            return txHash;
        },
        async estimateGasAsync(
            _agent: string,
            txData: TxData = {},
        ): Promise<number> {
            const self = this as DebtTokenContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const gas = await promisify<number>(
                self.web3ContractInstance.addAuthorizedMintAgent.estimateGas, self.web3ContractInstance,
            )(
                _agent,
                txDataWithDefaults,
            );
            return gas;
        },
        getABIEncodedTransactionData(
            _agent: string,
            txData: TxData = {},
        ): string {
            const self = this as DebtTokenContract;
            const abiEncodedTransactionData = self.web3ContractInstance.addAuthorizedMintAgent.getData();
            return abiEncodedTransactionData;
        },
    };
    public transfer = {
        async sendTransactionAsync(
            _to: string,
            _tokenId: BigNumber,
            txData: TxData = {},
        ): Promise<string> {
            const self = this as DebtTokenContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
                self.transfer.estimateGasAsync.bind(
                    self,
                    _to,
                    _tokenId,
                ),
            );
            const txHash = await promisify<string>(
                self.web3ContractInstance.transfer, self.web3ContractInstance,
            )(
                _to,
                _tokenId,
                txDataWithDefaults,
            );
            return txHash;
        },
        async estimateGasAsync(
            _to: string,
            _tokenId: BigNumber,
            txData: TxData = {},
        ): Promise<number> {
            const self = this as DebtTokenContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const gas = await promisify<number>(
                self.web3ContractInstance.transfer.estimateGas, self.web3ContractInstance,
            )(
                _to,
                _tokenId,
                txDataWithDefaults,
            );
            return gas;
        },
        getABIEncodedTransactionData(
            _to: string,
            _tokenId: BigNumber,
            txData: TxData = {},
        ): string {
            const self = this as DebtTokenContract;
            const abiEncodedTransactionData = self.web3ContractInstance.transfer.getData();
            return abiEncodedTransactionData;
        },
    };
    public numTokensTotal = {
        async callAsync(
            defaultBlock?: Web3.BlockParam,
        ): Promise<BigNumber
    > {
            const self = this as DebtTokenContract;
            const result = await promisify<BigNumber
    >(
                self.web3ContractInstance.numTokensTotal.call,
                self.web3ContractInstance,
            )(
            );
            return result;
        },
    };
    public create = {
        async sendTransactionAsync(
            _version: string,
            _creditor: string,
            _termsContract: string,
            _termsContractParameters: string,
            _salt: BigNumber,
            _tokenMetadata: string,
            txData: TxData = {},
        ): Promise<string> {
            const self = this as DebtTokenContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
                self.create.estimateGasAsync.bind(
                    self,
                    _version,
                    _creditor,
                    _termsContract,
                    _termsContractParameters,
                    _salt,
                    _tokenMetadata,
                ),
            );
            const txHash = await promisify<string>(
                self.web3ContractInstance.create, self.web3ContractInstance,
            )(
                _version,
                _creditor,
                _termsContract,
                _termsContractParameters,
                _salt,
                _tokenMetadata,
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
            _tokenMetadata: string,
            txData: TxData = {},
        ): Promise<number> {
            const self = this as DebtTokenContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const gas = await promisify<number>(
                self.web3ContractInstance.create.estimateGas, self.web3ContractInstance,
            )(
                _version,
                _creditor,
                _termsContract,
                _termsContractParameters,
                _salt,
                _tokenMetadata,
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
            _tokenMetadata: string,
            txData: TxData = {},
        ): string {
            const self = this as DebtTokenContract;
            const abiEncodedTransactionData = self.web3ContractInstance.create.getData();
            return abiEncodedTransactionData;
        },
    };
    public mint = {
        async sendTransactionAsync(
            _owner: string,
            _tokenId: BigNumber,
            _metadata: string,
            txData: TxData = {},
        ): Promise<string> {
            const self = this as DebtTokenContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
                self.mint.estimateGasAsync.bind(
                    self,
                    _owner,
                    _tokenId,
                    _metadata,
                ),
            );
            const txHash = await promisify<string>(
                self.web3ContractInstance.mint, self.web3ContractInstance,
            )(
                _owner,
                _tokenId,
                _metadata,
                txDataWithDefaults,
            );
            return txHash;
        },
        async estimateGasAsync(
            _owner: string,
            _tokenId: BigNumber,
            _metadata: string,
            txData: TxData = {},
        ): Promise<number> {
            const self = this as DebtTokenContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const gas = await promisify<number>(
                self.web3ContractInstance.mint.estimateGas, self.web3ContractInstance,
            )(
                _owner,
                _tokenId,
                _metadata,
                txDataWithDefaults,
            );
            return gas;
        },
        getABIEncodedTransactionData(
            _owner: string,
            _tokenId: BigNumber,
            _metadata: string,
            txData: TxData = {},
        ): string {
            const self = this as DebtTokenContract;
            const abiEncodedTransactionData = self.web3ContractInstance.mint.getData();
            return abiEncodedTransactionData;
        },
    };
    public getOwnerTokens = {
        async callAsync(
            _owner: string,
            defaultBlock?: Web3.BlockParam,
        ): Promise<BigNumber[]
    > {
            const self = this as DebtTokenContract;
            const result = await promisify<BigNumber[]
    >(
                self.web3ContractInstance.getOwnerTokens.call,
                self.web3ContractInstance,
            )(
                _owner,
            );
            return result;
        },
    };
    public transferOwnership = {
        async sendTransactionAsync(
            newOwner: string,
            txData: TxData = {},
        ): Promise<string> {
            const self = this as DebtTokenContract;
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
            const self = this as DebtTokenContract;
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
            const self = this as DebtTokenContract;
            const abiEncodedTransactionData = self.web3ContractInstance.transferOwnership.getData();
            return abiEncodedTransactionData;
        },
    };
    constructor(web3ContractInstance: Web3.ContractInstance, defaults: Partial<TxData>) {
        super(web3ContractInstance, defaults);
        classUtils.bindAll(this, ['web3ContractInstance', 'defaults']);
    }
} // tslint:disable:max-file-line-count
