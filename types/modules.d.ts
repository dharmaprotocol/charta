/* tslint:disable */
declare module 'chai-bignumber';
declare module 'ethereumjs-abi';
declare module 'child-process-promise';

/**
 * HACK: Merge Chai typings with bignumber assertion added by
 * chai-bignumber.  Code block borrowed from 0x Project:
 * https://github.com/0xProject/contracts/blob/master/globals.d.ts
 */
 declare namespace Chai {
     interface NumberComparer {
         (value: number|BigNumber.BigNumber, message?: string): Assertion;
     }
     interface NumericComparison {
         greaterThan: NumberComparer;
     }
     interface Assertion {
         bignumber: Assertion;
         solidityLogs: Assertion;
     }
     interface PromisedAssertion {
         bignumber: Assertion;
         solidityLogs: Assertion;
     }
 }
/* tslint:enable */

declare module 'abi-decoder' {
    import * as Web3 from "web3";

    interface DecodedLog {
        name: string;
        events: DecodedMethodParam[];
        address: string;
    }

    interface DecodedMethodParam {
        name: string;
        value: string;
        type: string;
    }

    interface DecodedMethod {
        name: string;
        params: DecodedMethodParam[];
    }

    export function addABI(abi: Web3.AbiDefinition[]): void;
    export function removeABI(abi: Web3.AbiDefinition[]): void;
    export function decodeLogs(logs: Web3.LogEntry[]): DecodedLog[];
    export function decodeMethod(data: string): DecodedMethod;
}
