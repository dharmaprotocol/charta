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

export class TermsContractContract extends BaseContract {
    public getExpectedRepaymentValue = {
        async callAsync(
            debtor: string,
            termsParameters: string,
            blockNumber: BigNumber,
            defaultBlock?: Web3.BlockParam,
        ): Promise<BigNumber
    > {
            const self = this as TermsContractContract;
            const result = await promisify<BigNumber
    >(
                self.web3ContractInstance.getExpectedRepaymentValue.call,
                self.web3ContractInstance,
            )(
                debtor,
                termsParameters,
                blockNumber,
            );
            return result;
        },
    };
    public registerRepayment = {
        async sendTransactionAsync(
            debtor: string,
            termsParameters: string,
            unitsOfRepayment: BigNumber,
            tokenAddress: string,
            txData: TxData = {},
        ): Promise<string> {
            const self = this as TermsContractContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
                self.registerRepayment.estimateGasAsync.bind(
                    self,
                    debtor,
                    termsParameters,
                    unitsOfRepayment,
                    tokenAddress,
                ),
            );
            const txHash = await promisify<string>(
                self.web3ContractInstance.registerRepayment, self.web3ContractInstance,
            )(
                debtor,
                termsParameters,
                unitsOfRepayment,
                tokenAddress,
                txDataWithDefaults,
            );
            return txHash;
        },
        async estimateGasAsync(
            debtor: string,
            termsParameters: string,
            unitsOfRepayment: BigNumber,
            tokenAddress: string,
            txData: TxData = {},
        ): Promise<number> {
            const self = this as TermsContractContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const gas = await promisify<number>(
                self.web3ContractInstance.registerRepayment.estimateGas, self.web3ContractInstance,
            )(
                debtor,
                termsParameters,
                unitsOfRepayment,
                tokenAddress,
                txDataWithDefaults,
            );
            return gas;
        },
        getABIEncodedTransactionData(
            debtor: string,
            termsParameters: string,
            unitsOfRepayment: BigNumber,
            tokenAddress: string,
            txData: TxData = {},
        ): string {
            const self = this as TermsContractContract;
            const abiEncodedTransactionData = self.web3ContractInstance.registerRepayment.getData();
            return abiEncodedTransactionData;
        },
    };
    public registerNFTRepayment = {
        async sendTransactionAsync(
            debtor: string,
            termsParameters: string,
            tokenId: BigNumber,
            tokenAddress: string,
            txData: TxData = {},
        ): Promise<string> {
            const self = this as TermsContractContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
                self.registerNFTRepayment.estimateGasAsync.bind(
                    self,
                    debtor,
                    termsParameters,
                    tokenId,
                    tokenAddress,
                ),
            );
            const txHash = await promisify<string>(
                self.web3ContractInstance.registerNFTRepayment, self.web3ContractInstance,
            )(
                debtor,
                termsParameters,
                tokenId,
                tokenAddress,
                txDataWithDefaults,
            );
            return txHash;
        },
        async estimateGasAsync(
            debtor: string,
            termsParameters: string,
            tokenId: BigNumber,
            tokenAddress: string,
            txData: TxData = {},
        ): Promise<number> {
            const self = this as TermsContractContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const gas = await promisify<number>(
                self.web3ContractInstance.registerNFTRepayment.estimateGas, self.web3ContractInstance,
            )(
                debtor,
                termsParameters,
                tokenId,
                tokenAddress,
                txDataWithDefaults,
            );
            return gas;
        },
        getABIEncodedTransactionData(
            debtor: string,
            termsParameters: string,
            tokenId: BigNumber,
            tokenAddress: string,
            txData: TxData = {},
        ): string {
            const self = this as TermsContractContract;
            const abiEncodedTransactionData = self.web3ContractInstance.registerNFTRepayment.getData();
            return abiEncodedTransactionData;
        },
    };
    public getValueRepaid = {
        async callAsync(
            debtor: string,
            termsParameters: string,
            blockNumber: BigNumber,
            defaultBlock?: Web3.BlockParam,
        ): Promise<BigNumber
    > {
            const self = this as TermsContractContract;
            const result = await promisify<BigNumber
    >(
                self.web3ContractInstance.getValueRepaid.call,
                self.web3ContractInstance,
            )(
                debtor,
                termsParameters,
                blockNumber,
            );
            return result;
        },
    };
    constructor(web3ContractInstance: Web3.ContractInstance, defaults: Partial<TxData>) {
        super(web3ContractInstance, defaults);
        classUtils.bindAll(this, ['web3ContractInstance', 'defaults']);
    }
} // tslint:disable:max-file-line-count
