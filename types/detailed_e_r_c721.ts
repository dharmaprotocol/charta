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

export class DetailedERC721Contract extends BaseContract {
    public name = {
        async callAsync(
            defaultBlock?: Web3.BlockParam,
        ): Promise<string
    > {
            const self = this as DetailedERC721Contract;
            const result = await promisify<string
    >(
                self.web3ContractInstance.name.call,
                self.web3ContractInstance,
            )(
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
            const self = this as DetailedERC721Contract;
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
            const self = this as DetailedERC721Contract;
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
            const self = this as DetailedERC721Contract;
            const abiEncodedTransactionData = self.web3ContractInstance.approve.getData();
            return abiEncodedTransactionData;
        },
    };
    public implementsERC721 = {
        async callAsync(
            defaultBlock?: Web3.BlockParam,
        ): Promise<boolean
    > {
            const self = this as DetailedERC721Contract;
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
            const self = this as DetailedERC721Contract;
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
            const self = this as DetailedERC721Contract;
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
            const self = this as DetailedERC721Contract;
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
            const self = this as DetailedERC721Contract;
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
            const self = this as DetailedERC721Contract;
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
            const self = this as DetailedERC721Contract;
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
            const self = this as DetailedERC721Contract;
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
            const self = this as DetailedERC721Contract;
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
    public symbol = {
        async callAsync(
            defaultBlock?: Web3.BlockParam,
        ): Promise<string
    > {
            const self = this as DetailedERC721Contract;
            const result = await promisify<string
    >(
                self.web3ContractInstance.symbol.call,
                self.web3ContractInstance,
            )(
            );
            return result;
        },
    };
    public transfer = {
        async sendTransactionAsync(
            _to: string,
            _tokenId: BigNumber,
            txData: TxData = {},
        ): Promise<string> {
            const self = this as DetailedERC721Contract;
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
            const self = this as DetailedERC721Contract;
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
            const self = this as DetailedERC721Contract;
            const abiEncodedTransactionData = self.web3ContractInstance.transfer.getData();
            return abiEncodedTransactionData;
        },
    };
    constructor(web3ContractInstance: Web3.ContractInstance, defaults: Partial<TxData>) {
        super(web3ContractInstance, defaults);
        classUtils.bindAll(this, ['web3ContractInstance', 'defaults']);
    }
} // tslint:disable:max-file-line-count
