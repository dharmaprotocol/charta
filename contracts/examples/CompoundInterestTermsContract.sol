/*

  Copyright 2017 Dharma Labs Inc.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.

*/

pragma solidity 0.4.18;

import "zeppelin-solidity/contracts/math/SafeMath.sol";
import "../DebtRegistry.sol";
import "../TermsContract.sol";


/**
 * TODO: Address known issue: given that Solidity must use integers to compute
 *  compound interest functions, we require interestRates passed into
 *  the function have 9 decimals worth of precision.  This means that,
 *  with the following compound interest formula...
 *
 *      V = P(1+r)^t
 *
 *  Can be translated in solidity to...
 *
 *      V * 10^(9t) = P((1+r) * 10^9)^t
 *
 *  Meaning we compute the expected repayment value with ....
 *
 *      V = P((1+r) * 10^9)^t / 10^(9t)
 *
 *  This is all well and good, but there are scenarios in which
 *  the intermediate value V * 10^(9t) overflows a 256-bit unsigned
 *  integer.
 *
 *  Seeking guidance from security auditors for best practices
 *  in emulating fraction exponentiation in Solidity.
 *
 *  ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ====
 *
 * Example terms contract for issuing debt agreements with compounding interest rates.
 *
 * The compound interest rate formula we're leveraging is
 *  V = P(1 + r/n)^(tn)
 *
 * Given that we assume n = 1 (i.e. compounding happens
 *  once per amortization interval), we can reduce the
 *  formula to
 *  V = P(1 + r)^t
 *
 * Thus, for simplification, we assign the following
 * terms:
 *
 * V := expectedRepaymentValue
 * P := principal
 * (1 + r) := interestRateBase
 * t := termLengthInAmortizationUnits
 *
 */
contract CompoundInterestTermsContract is TermsContract {
    using SafeMath for uint;

    uint public constant INTEREST_RATE_DECIMALS = 9;

    enum AmortizationUnitType { HOURS, DAYS, WEEKS, MONTHS, YEARS }

    struct CompoundInterestParams {
        uint principal;
        uint interestRate;
        uint termStartUnixTimestamp;
        uint termEndUnixTimestamp;
        AmortizationUnitType amortizationUnitType;
        uint termLengthInAmortizationUnits;
    }

    uint public constant HOUR_LENGTH_IN_SECONDS = 60 * 60;
    uint public constant DAY_LENGTH_IN_SECONDS = HOUR_LENGTH_IN_SECONDS * 24;
    uint public constant WEEK_LENGTH_IN_SECONDS = DAY_LENGTH_IN_SECONDS * 7;
    uint public constant MONTH_LENGTH_IN_SECONDS = DAY_LENGTH_IN_SECONDS * 30;
    uint public constant YEAR_LENGTH_IN_SECONDS = DAY_LENGTH_IN_SECONDS * 365;

    mapping (bytes32 => uint) public valueRepaid;

    DebtRegistry public debtRegistry;

    address public repaymentToken;
    address public repaymentRouter;

    modifier onlyRouter() {
        require(msg.sender == repaymentRouter);
        _;
    }

    modifier onlyMappedToThisContract(bytes32 agreementId) {
        require(address(this) == debtRegistry.getTermsContract(agreementId));
        _;
    }

    ////////////////////////
    // EXTERNAL FUNCTIONS //
    ////////////////////////

    function CompoundInterestTermsContract(
        address _debtRegistry,
        address _repaymentToken,
        address _repaymentRouter
    )
        public
    {
        debtRegistry = DebtRegistry(_debtRegistry);

        repaymentToken = _repaymentToken;
        repaymentRouter = _repaymentRouter;
    }

     /// When called, the registerRepayment function records the debtor's
     ///  repayment, as well as any auxiliary metadata needed by the contract
     ///  to determine ex post facto the value repaid (e.g. current USD
     ///  exchange rate)
     /// @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.
     /// @param  payer address. The address of the payer.
     /// @param  beneficiary address. The address of the payment's beneficiary.
     /// @param  unitsOfRepayment uint. The units-of-value repaid in the transaction.
     /// @param  tokenAddress address. The address of the token with which the repayment transaction was executed.
    function registerRepayment(
        bytes32 agreementId,
        address payer,
        address beneficiary,
        uint256 unitsOfRepayment,
        address tokenAddress
    )
        public
        onlyRouter
        returns (bool _success)
    {
        if (tokenAddress == repaymentToken) {
            valueRepaid[agreementId] = valueRepaid[agreementId].add(unitsOfRepayment);
            return true;
        }

        return false;
    }

     /// Returns the cumulative units-of-value expected to be repaid given a block's timestamp.
     ///  Note this is not a constant function -- this value can vary on basis of any number of
     ///  conditions (e.g. interest rates can be renegotiated if repayments are delinquent).
     /// @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.
     /// @param  timestamp uint. The timestamp for which repayment expectation is being queried.
     /// @return uint256 The cumulative units-of-value expected to be repaid given a block's timestamp.
    function getExpectedRepaymentValue(
        bytes32 agreementId,
        uint256 timestamp
    )
        public
        view
        onlyMappedToThisContract(agreementId)
        returns (uint _expectedRepaymentValue)
    {
        CompoundInterestParams memory params = unpackParamsForAgreementID(agreementId);

        uint numUnits = numAmortizationUnitsForTimestamp(timestamp, params);

        if (numUnits == 0) {
            /* The query occurs before the contract was even initialized so the
            expected value of repayments is 0. */
            return 0;
        } else if (numUnits > params.termLengthInAmortizationUnits) {
            /* the query occurs beyond the contract's term, so the expected
            value of repayment is the full principal plus interest. */
            return calculateCompoundInterestExpectedValue(
                params.principal,
                params.interestRate,
                params.termLengthInAmortizationUnits
            );
        } else {
            return calculateCompoundInterestExpectedValue(
                params.principal,
                params.interestRate,
                numUnits
            );
        }
    }

    /// Returns the cumulative units-of-value repaid to date.
    /// @param agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.
    /// @return uint256 The cumulative units-of-value repaid by the specified block timestamp.
    function getValueRepaidToDate(bytes32 agreementId)
        public
        view
        returns (uint _valueRepaid)
    {
        return valueRepaid[agreementId];
    }

    /**
     * Converts the 32-byte hex encoding of the given terms contract
     * parameters into the principal, interest rate, amortization type,
     * and term length of a CompoundInterestTermsContract parameterized
     * by the given parameters.
     *
     * @param parameters bytes32 Hex-encoded 32-byte terms contract parameters.
     * @return uint128 _principal The debt agreement principal amount.
     * @return uint64 _interestRate The debt agreement's interest rate.
     * @return uint8 _amortizationUnitType The debt agreement's amortization type.
     * @return uint56 _termLengthInAmortizationUnits The debt agreement's term length
     */
    function unpackParametersFromBytes(bytes32 parameters)
        public
        pure
        returns (
            uint128 _principal,
            uint64 _interestRate,
            uint8 _amortizationUnitType,
            uint56 _termLengthInAmortizationUnits
        )
    {
        // The first 16 bytes of the parameters represent the principal
        bytes32 principalShifted =
            parameters & 0xffffffffffffffffffffffffffffffff00000000000000000000000000000000;
        // The subsequent 8 bytes represent the interest rate (with 9 decimals of precision)
        bytes32 interestRateShifted =
            parameters & 0x00000000000000000000000000000000ffffffffffffffff0000000000000000;
        // The subsequent byte represents the amortization unit type code
        bytes32 amortizationUnitTypeShifted =
            parameters & 0x000000000000000000000000000000000000000000000000ff00000000000000;


        // We bit-shift these values, respectively, 16 bytes, 8 bytes, and 7 bytes right using
        // mathematical operations, so that their 32 byte integer counterparts
        // correspond to the intended values packed in the 32 byte string
        uint principal = uint(principalShifted) / 2 ** 128;
        uint interestRate = uint(interestRateShifted) / 2 ** 64;
        uint amortizationUnitType = uint(amortizationUnitTypeShifted) / 2 ** 56;

        // The last 7 bytes of the parameters represents the term length of the loan,
        // as defined in terms of the specified amortization units.
        // Since this value takes the rightmost place in the parameters string,
        // we do not need to bit-shift it.
        bytes32 termLengthInAmortizationUnits =
            parameters & 0x00000000000000000000000000000000000000000000000000ffffffffffffff;

        return (
            uint128(principal),
            uint64(interestRate),
            uint8(amortizationUnitType),
            uint56(termLengthInAmortizationUnits)
        );
    }

    ////////////////////////
    // INTERNAL FUNCTIONS //
    ////////////////////////

    /**
     * Returns the number of amortization units that have
     * elapsed between the term start timestamp
     * specified in `params` and the given `timestamp`
     *
     * @param timestamp uint Unix timestamp for which we are querying elapsed amortization units
     * @param params CompoundInterestParams Unpacked parameters of the debt agreemen
     * @return uint Number of amortization units elapsed between term start and `timestamp`
     */
    function numAmortizationUnitsForTimestamp(
        uint timestamp,
        CompoundInterestParams params
    )
        internal
        returns (uint units)
    {
        if (timestamp <= params.termStartUnixTimestamp) {
            return 0;
        }

        uint delta = timestamp.sub(params.termStartUnixTimestamp);
        uint amortizationUnitLengthInSeconds =
            getAmortizationUnitLengthInSeconds(params.amortizationUnitType);
        return delta.div(amortizationUnitLengthInSeconds);
    }

    /**
     * Retrieves terms contract parameters associated
     * with `agreementId` and unpacks the hex representation
     * into a struct containing the the fields defined in
     * the CompoundInterestParams struct
     *
     * @param agreementId bytes32 The debt agreement's issuance hash
     * @return CompoundInterestParams _params
     */
    function unpackParamsForAgreementID(
        bytes32 agreementId
    )
        internal
        returns (CompoundInterestParams _params)
    {
        bytes32 parameters = debtRegistry.getTermsContractParameters(agreementId);

        uint principal;
        uint interestRate;
        uint amortizationUnitTypeAsUint;
        uint termLengthInAmortizationUnits;

        (principal, interestRate, amortizationUnitTypeAsUint, termLengthInAmortizationUnits) =
            unpackParametersFromBytes(parameters);

        // Before we cast to `AmortizationUnitType`, ensure that the raw value being stored is valid.
        require(amortizationUnitTypeAsUint <= uint(AmortizationUnitType.YEARS));

        AmortizationUnitType amortizationUnitType = AmortizationUnitType(amortizationUnitTypeAsUint);

        uint amortizationUnitLengthInSeconds = getAmortizationUnitLengthInSeconds(amortizationUnitType);
        uint issuanceBlockTimestamp = debtRegistry.getIssuanceBlockTimestamp(agreementId);
        uint termLengthInSeconds = termLengthInAmortizationUnits.mul(amortizationUnitLengthInSeconds);
        uint termEndUnixTimestamp = termLengthInSeconds.add(issuanceBlockTimestamp);

        return CompoundInterestParams({
            principal: principal,
            interestRate: interestRate,
            termStartUnixTimestamp: issuanceBlockTimestamp,
            termEndUnixTimestamp: termEndUnixTimestamp,
            amortizationUnitType: amortizationUnitType,
            termLengthInAmortizationUnits: termLengthInAmortizationUnits
        });
    }

    /**
     * Given a principal amount, interest rate (with 9 decimals of precision),
     * and a number of amortization units, calculates
     * the principal + total expected compound interest by time
     * the specified number of amortization units has elapsed.
     *
     * @param principal uint The principal amount
     * @param interestRate uint The interest rate, with 9 decimals of precision
     * @param numAmortizationUnits uint The number of amortization units elapsed
     * @return uint The sum of the principal and compounded interest rate.
     */
    function calculateCompoundInterestExpectedValue(
        uint principal,
        uint interestRate,
        uint numAmortizationUnits
    )
        internal
        pure
        returns (uint _compoundInterestExpectedValue)
    {
        uint interestRateBase = toInterestRateBase(interestRate);
        uint unnormalizedExpectedValue = principal.mul(
            interestRateBase ** numAmortizationUnits
        );

        // When exponentiating a number with 9 decimals of precision in
        // Solidity by a number N, our result ends up 10 ^ (9*N)
        // overweighted.  Thus, we normalize the value down by a factor
        // of 10 ^ (9*N)
        return normalizeDecimalPlaces(unnormalizedExpectedValue, numAmortizationUnits);
    }

    /**
     * Returns the interest rate incremented by 1
     * (with 9 decimal precision), for usage in
     * the compound interest formula.
     *
     * @param interestRate uint A given interest rate with 9 decimal precision
     * @return uint Interest rate with 9 decimal precision incremented by 1
     */
    function toInterestRateBase(uint interestRate)
        internal
        pure
        returns (uint _interestRateBase)
    {
        // Since interestRate has 9 decimals of precision, incrementing
        // it by 1 is the equivalent of adding 10^9
        return interestRate + 10 ** INTEREST_RATE_DECIMALS;
    }


    /**
     * Divides the given value by 10^(9 * power).  This is necessary because,
     * when we exponentiate a uint with 9 decimals of precision,
     * solidity treats the 9 decimals of precision as significant digits > 1,
     * and, therefore, this utility proves useful for scaling down
     * the results of such mathematical operations.
     *
     * @param value uint The value we wish to normalize
     * @param power uint The power by which we will exponentiate 10^9 in normalizing value
     * @return uint Value divided by 10^(9*power)
     */
    function normalizeDecimalPlaces(uint value, uint power)
        internal
        pure
        returns (uint _normalizedValues)
    {
        return value.div(10 ** (INTEREST_RATE_DECIMALS*power));
    }

    /**
     * Given an amortization unit type, returns that amortization unit's
     * length in seconds.
     *
     * @param amortizationUnitType The amortization unit type
     * @return _amortizationUnitLengthInSeconds The length of the amortization unit in seconds.
     */
    function getAmortizationUnitLengthInSeconds(AmortizationUnitType amortizationUnitType)
        internal
        pure
        returns (uint _amortizationUnitLengthInSeconds)
    {
        if (amortizationUnitType == AmortizationUnitType.HOURS) {
            return HOUR_LENGTH_IN_SECONDS;
        } else if (amortizationUnitType == AmortizationUnitType.DAYS) {
            return DAY_LENGTH_IN_SECONDS;
        } else if (amortizationUnitType == AmortizationUnitType.WEEKS) {
            return WEEK_LENGTH_IN_SECONDS;
        } else if (amortizationUnitType == AmortizationUnitType.MONTHS) {
            return MONTH_LENGTH_IN_SECONDS;
        } else if (amortizationUnitType == AmortizationUnitType.YEARS) {
            return YEAR_LENGTH_IN_SECONDS;
        } else {
            revert();
        }
    }
}
