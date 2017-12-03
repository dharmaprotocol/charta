import * as chai from "chai";
import * as _ from "lodash";

/**
 * We define custom chai assertions for comparing logs retrieved from Web3
 * with the log types we have locally.
 *
 * HACK: The DefinitelyTyped definition for Chai are incomplete, and don't
 * include certain properties (i.e. utils for pluging creation, static
 * Assertion object on the ChaiStatic interface, etc.)  We use `any` to
 * circumvent these issues.
 */
export default function ChaiSolidityLogs(chai: any, utils: any): void {
    chai.Assertion.addProperty('solidityLogs', function () {
        utils.flag(this, 'solidityLogs', true);
    });

    const equals = function (_super: () => void) {
        return function (val: any, msg: string) {
            if (!utils.flag(this, 'solidityLogs')) {
                _super.apply(this, arguments);
            } else {
                const expected = {
                    event: val.event,
                    args: val.args
                };
                const actual = {
                    event: this._obj.event,
                    args: this._obj.args,
                }

                this.assert(
                    _.isEqual(expected, actual),
                    "expected #{act} to be #{exp}",
                    "expected #{act} not to be #{exp}",
                    JSON.stringify(expected),
                    JSON.stringify(actual)
                );
            }
        }
    }

    chai.Assertion.overwriteMethod('equal', equals);
    chai.Assertion.overwriteMethod('equals', equals);
    chai.Assertion.overwriteMethod('eq', equals);
}
