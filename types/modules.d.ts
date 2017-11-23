declare module 'chai-bignumber';

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
    }
}
