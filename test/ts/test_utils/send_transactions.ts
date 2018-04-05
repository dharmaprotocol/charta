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

// sendTransaction is a util function to send a transaction to any overloaded
// method of a contract.
// Truffle contract instance cannot handle overloaded methods
// (truffle will only handle the first implementation of the method).
export function sendTransaction(
    truffleContractInstance: Web3.ContractInstance,
    methodName: string,
    inputTypes: string,
    inputVals: any[],
    txData: TxData = {},
): Promise<string> {
    const abiMethod = findMethod(truffleContractInstance.abi, methodName, inputTypes);
    const encodedData = ethjsABI.encodeMethod(abiMethod, inputVals);

    return truffleContractInstance.sendTransaction({
        data: encodedData,
        ...txData,
    });
}
