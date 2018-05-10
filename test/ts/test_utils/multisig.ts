// External Libraries
import { BigNumber } from "bignumber.js";
import * as ABIDecoder from "abi-decoder";
import * as Web3 from "web3";

// Wrappers
import { DharmaMultiSigWalletContract } from "../../../types/generated/dharma_multi_sig_wallet";
import { BaseContract } from "../../../types/base_contract";

// Types
import { Address, DecodedLog, MultiSigSubmissionEventArgs, TxData } from "../../../types/common";
import { NULL_ADDRESS } from "./constants";

// Utils
import { Web3Utils } from "../../../utils/web3_utils";
import { TIMELOCK_IN_SECONDS } from "../../../migrations/migration_constants";

/**
 * Submits a proposed transaction to the multisig wallet.
 *
 * @param multiSig   Multisig wallet contract wrapper
 * @param contract   Contract to which we wish to send a transaction
 * @param methodName Name of the method we wish to call
 * @param args       Arguments to be passed to the method
 * @param txData     Optional transaction data
 * @return Transaction ID assigned by the multisig
 */
export async function submitMultiSigTransaction(
    multiSig: DharmaMultiSigWalletContract,
    contract: BaseContract,
    methodName: string,
    args: any[],
    txData: TxData,
): Promise<BigNumber> {
    ABIDecoder.addABI(multiSig.abi);

    const encodedTransaction = await contract.web3ContractInstance[methodName].getData.apply(
        null,
        args,
    );

    const txHash = await multiSig.submitTransaction.sendTransactionAsync(
        contract.address,
        // Ether value - 0.
        new BigNumber(0),
        encodedTransaction,
        txData,
    );

    // Get the transaction ID from the logs.
    const receipt = await web3.eth.getTransactionReceipt(txHash);

    const submission = ABIDecoder.decodeLogs(receipt.logs)[0] as DecodedLog<
        MultiSigSubmissionEventArgs
    >;
    const transactionId = submission.events[0].value;

    ABIDecoder.removeABI(multiSig.abi);

    return transactionId;
}

async function submitRequisiteMultiSigConfirmations(
    multiSig: DharmaMultiSigWalletContract,
    transactionId: BigNumber,
    accounts: Address[],
): Promise<void> {
    // Send 2 more confirmations.
    for (let i = 1; i < 3; i++) {
        await multiSig.confirmTransaction.sendTransactionAsync(new BigNumber(transactionId), {
            from: accounts[i],
        });
    }
}

async function submitAndConfirmMultiSigTransaction(
    multiSig: DharmaMultiSigWalletContract,
    contract: BaseContract,
    methodName: string,
    accounts: Address[],
    args: any[] = [],
    txData?: TxData,
): Promise<BigNumber> {
    const transactionData = {
        from: accounts[0],
        ...txData,
    };

    // The last argument contains transaction data.
    args.push(transactionData);

    const transactionId = await submitMultiSigTransaction(
        multiSig,
        contract,
        methodName,
        args,
        transactionData,
    );

    await submitRequisiteMultiSigConfirmations(multiSig, transactionId, accounts);

    return transactionId;
}

/**
 * Executes a transaction using the given multi-signature wallet after waiting
 * for the requisite timelock period to pass.
 *
 * @param {Web3} web3
 * @param {DharmaMultiSigWalletContract} multiSig
 * @param contract
 * @param {string} methodName
 * @param {Address[]} accounts
 * @param {any[]} args
 * @param {TxData} txData
 * @returns {Promise<string>} txHash - the hash of the transaction that the multi-sig executed.
 */
export async function multiSigExecuteAfterTimelock(
    web3: Web3,
    multiSig: DharmaMultiSigWalletContract,
    contract: BaseContract,
    methodName: string,
    accounts: Address[],
    args: any[] = [],
    timelock: number = TIMELOCK_IN_SECONDS,
    txData?: TxData,
): Promise<string> {
    const web3Utils = new Web3Utils(web3);

    const transactionId = await submitAndConfirmMultiSigTransaction(
        multiSig,
        contract,
        methodName,
        accounts,
        args,
        txData,
    );

    await web3Utils.increaseTime(timelock);

    const txHash = await multiSig.executeTransaction.sendTransactionAsync(transactionId);

    const transaction = await multiSig.transactions.callAsync(transactionId);

    const [destination, value, data, executedSuccessfully] = transaction;

    if (!executedSuccessfully) {
        throw new Error(`Multisig transaction with ID #${transactionId} failed to execute.`);
    }

    return txHash;
}

/**
 * Executes a transaction using the given multi-signature wallet without waiting
 * for the usually required timelock period to pass -- note that this ought to
 * fail for any transaction that does not call a method matching the `pause()`
 * selector.
 *
 * @param {Web3} web3
 * @param {DharmaMultiSigWalletContract} multiSig
 * @param contract
 * @param {string} methodName
 * @param {Address[]} accounts
 * @param {any[]} args
 * @param {TxData} txData
 * @returns {Promise<void>}
 */
export async function multiSigExecutePauseImmediately(
    web3: Web3,
    multiSig: DharmaMultiSigWalletContract,
    contract: BaseContract,
    methodName: string,
    accounts: Address[],
    args: any[] = [],
    txData?: TxData,
): Promise<string> {
    const web3Utils = new Web3Utils(web3);

    const transactionId = await submitAndConfirmMultiSigTransaction(
        multiSig,
        contract,
        methodName,
        accounts,
        args,
        txData,
    );

    const txHash = await multiSig.executePauseTransactionImmediately.sendTransactionAsync(
        transactionId,
    );

    const transaction = await multiSig.transactions.callAsync(transactionId);

    const [destination, value, data, executedSuccessfully] = transaction;

    if (!executedSuccessfully) {
        throw new Error(`Multisig transaction with ID #${transactionId} failed to execute.`);
    }

    return txHash;
}
