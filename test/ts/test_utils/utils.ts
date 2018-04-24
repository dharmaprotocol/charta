// External Libraries
import { BigNumber } from "bignumber.js";
import * as ABIDecoder from "abi-decoder";

// Wrappers
import { MultiSigWalletContract } from "../../../types/generated/multi_sig_wallet";
import { BaseContract } from "../../../types/base_contract";

// Types
import { Address, DecodedLog, MultiSigSubmissionEventArgs, TxData } from "../../../types/common";
import { NULL_ADDRESS } from "./constants";

/**
 * Executes a transaction using the given multi-signature wallet.
 *
 * @param {MultiSigWalletContract} multiSig
 * @param contract
 * @param {string} methodName
 * @param {Address[]} accounts
 * @param {any[]} args
 * @param {TxData} txData
 * @returns {Promise<void>}
 */
export async function multiSigExecute(
    multiSig: MultiSigWalletContract,
    contract: BaseContract,
    methodName: string,
    accounts: Address[],
    args: any[] = [],
    txData?: TxData,
): Promise<void> {
    ABIDecoder.addABI(multiSig.abi);

    // The last argument contains transaction data.
    args.push(txData || { from: accounts[0] });

    const encodedTransaction = await contract.web3ContractInstance[methodName].getData.apply(
        null,
        args,
    );

    const txHash = await multiSig.submitTransaction.sendTransactionAsync(
        contract.address,
        // Ether value - 0.
        new BigNumber(0),
        encodedTransaction,
        { from: accounts[0] },
    );

    // Get the transaction ID from the logs.
    const receipt = await web3.eth.getTransactionReceipt(txHash);

    const submission = ABIDecoder.decodeLogs(receipt.logs)[0] as DecodedLog<
        MultiSigSubmissionEventArgs
    >;
    const transactionId = submission.events[0].value;

    // Send 2 more confirmations.
    for (let i = 1; i < 3; i++) {
        await multiSig.confirmTransaction.sendTransactionAsync(new BigNumber(transactionId), {
            from: accounts[i],
        });
    }

    ABIDecoder.removeABI(multiSig.abi);
}

export const isBigNumber = (object: any) => {
    return (
        object.isBigNumber ||
        object instanceof BigNumber ||
        (object.constructor && object.constructor.name === "BigNumber")
    );
};

/**
 * Returns true if the given address string matches the format of an Ethereum address,
 * and is not the null address (I.E. 0x0000000000000000000000000000000000000000).
 *
 * @param {string} address
 * @returns {boolean}
 */
export const isNonNullAddress = (address: string) => {
    const addressRegex = new RegExp("^0x[a-fA-F0-9]{40}$");

    return address.match(addressRegex) && address !== NULL_ADDRESS;
};
