// Web3 types can be found here:
// https://github.com/0xProject/0x-monorepo/tree/development/packages/types

import * as Web3 from "web3";
import ethjsABI = require("ethjs-abi");
import { TxData } from "../../../types/common";

function filterMethodABI(abi: any[]): Web3.MethodAbi[] {
    return abi.filter((abiDef) => abiDef.type === "function");
}

function findMethod(abi: Web3.AbiDefinition[], name: string, inputTypes: string): Web3.MethodAbi {
    const methodAbi = filterMethodABI(abi).find((abiDef) => {
        const methodArgs = abiDef.inputs.map((input) => input.type).join(",");
        return abiDef.name === name && methodArgs === inputTypes;
    });

    if (methodAbi) {
        return methodAbi;
    }

    throw new Error(`Method: ${name} with input types: ${inputTypes} is not found`);
}

/**
 * Utility function to send transactions to overloaded methods.
 *
 * TODO(kayvon): we should delete out this function as soon as it's no longer necessary.
 *
 * Example usage:
 *
 * // send tx to safeTransferFrom(address _from, address _to, uint256 _tokenId, bytes _data)
 * await sendTransaction(
 *      contract,
 *      "safeTransferFrom",
 *      "address,address,uint256,bytes",
 *      [
 *          TOKEN_OWNER_1,
 *          TOKEN_OWNER_2,
 *          TOKEN_ID_1,
 *          "some data",
 *      ],
 *      { from: TOKEN_OWNER_1 }
 * );
 *
 * @param  contract   the Web3 contract instance to which the transaction will be sent.
 * @param  methodName the method name on the contract that will be invoked.
 * @param  inputTypes the type for each param (as a comma-separated string).
 * @param  inputVals  the value for each param.
 * @param  txData     params by which to modify the transaction (optional).
 * @return            the hash of the transaction.
 */
export function sendTransaction(
    contract: Web3.ContractInstance,
    methodName: string,
    inputTypes: string,
    inputVals: any[],
    txData: TxData = {},
): Promise<string> {
    const abiMethod = findMethod(contract.abi, methodName, inputTypes);
    const encodedData = ethjsABI.encodeMethod(abiMethod, inputVals);

    return contract.sendTransaction({
        data: encodedData,
        ...txData,
    });
}
