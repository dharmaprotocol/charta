/* tslint:disable */
declare module 'chai-bignumber';
declare module 'ethereumjs-abi';
declare module 'solidity-sha3';

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
}
/* tslint:enable */
