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

import "../ContractRegistry.sol";


contract SimpleInterestTermsContract is TermsContract {
    using SafeMath for uint;

    enum AmortizationUnitType { HOURS, DAYS, WEEKS, MONTHS, YEARS }
    uint public constant NUM_AMORTIZATION_UNIT_TYPES = 5;

    struct SimpleInterestParams {
        address principalTokenAddress;
        uint principalAmount;
        uint termStartUnixTimestamp;
        uint termEndUnixTimestamp;
        AmortizationUnitType amortizationUnitType;
        uint termLengthInAmortizationUnits;

        // Given that Solidity does not support floating points, we encode
        // interest rates as percentages scaled up by a factor of 10,000
        // As such, interest rates can, at a maximum, have 4 decimal places
        // of precision.
        uint interestRate;
    }

    uint public constant HOUR_LENGTH_IN_SECONDS = 60 * 60;
    uint public constant DAY_LENGTH_IN_SECONDS = HOUR_LENGTH_IN_SECONDS * 24;
    uint public constant WEEK_LENGTH_IN_SECONDS = DAY_LENGTH_IN_SECONDS * 7;
    uint public constant MONTH_LENGTH_IN_SECONDS = DAY_LENGTH_IN_SECONDS * 30;
    uint public constant YEAR_LENGTH_IN_SECONDS = DAY_LENGTH_IN_SECONDS * 365;

    // To convert an encoded interest rate into its equivalent in percents,
    // divide it by INTEREST_RATE_SCALING_FACTOR_PERCENT -- e.g.
    //     10,000 => 1% interest rate
    uint public constant INTEREST_RATE_SCALING_FACTOR_PERCENT = 10 ** 4;
    // To convert an encoded interest rate into its equivalent multiplier
    // (for purposes of calculating total interest), divide it by INTEREST_RATE_SCALING_FACTOR_PERCENT -- e.g.
    //     10,000 => 0.01 interest multiplier
    uint public constant INTEREST_RATE_SCALING_FACTOR_MULTIPLIER = INTEREST_RATE_SCALING_FACTOR_PERCENT * 100;

    mapping (bytes32 => uint) public valueRepaid;

    ContractRegistry public contractRegistry;

    event LogSimpleInterestTermStart(
        bytes32 indexed agreementId,
        address indexed principalToken,
        uint principalAmount,
        uint interestRate,
        uint indexed amortizationUnitType,
        uint termLengthInAmortizationUnits
    );

    event LogRegisterRepayment(
        bytes32 agreementId,
        address payer,
        address beneficiary,
        uint256 unitsOfRepayment,
        address tokenAddress
    );

    modifier onlyRouter() {
        require(msg.sender == address(contractRegistry.repaymentRouter()));
        _;
    }

    modifier onlyMappedToThisContract(bytes32 agreementId) {
        require(address(this) == contractRegistry.debtRegistry().getTermsContract(agreementId));
        _;
    }

    modifier onlyDebtKernel() {
        require(msg.sender == address(contractRegistry.debtKernel()));
        _;
    }

    function SimpleInterestTermsContract(
        address _contractRegistry
    )
        public
    {
        contractRegistry = ContractRegistry(_contractRegistry);
    }

    /// When called, the registerTermStart function registers the fact that
    ///    the debt agreement has begun.  Given that the SimpleInterestTermsContract
    ///    doesn't rely on taking any sorts of actions when the loan term begins,
    ///    we simply validate DebtKernel is the transaction sender, and return
    ///    `true` if the debt agreement is associated with this terms contract.
    /// @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.
    /// @param  debtor address. The debtor in this particular issuance.
    /// @return _success bool. Acknowledgment of whether
    function registerTermStart(
        bytes32 agreementId,
        address debtor
    )
        public
        onlyDebtKernel
        returns (bool _success)
    {
        address termsContract;
        bytes32 termsContractParameters;

        (termsContract, termsContractParameters) = contractRegistry.debtRegistry().getTerms(agreementId);

        uint principalTokenIndex;
        uint principalAmount;
        uint interestRate;
        uint amortizationUnitType;
        uint termLengthInAmortizationUnits;

        (principalTokenIndex, principalAmount, interestRate, amortizationUnitType, termLengthInAmortizationUnits) =
            unpackParametersFromBytes(termsContractParameters);

        address principalTokenAddress =
            contractRegistry.tokenRegistry().getTokenAddressByIndex(principalTokenIndex);

        // Returns true (i.e. valid) if the specified principal token is valid,
        // the specified amortization unit type is valid, and the terms contract
        // associated with the agreement is this one.  We need not check
        // if any of the other simple interest parameters are valid, because
        // it is impossible to encode invalid values for them.
        if (principalTokenAddress != address(0) &&
            amortizationUnitType < NUM_AMORTIZATION_UNIT_TYPES &&
            termsContract == address(this)) {
            LogSimpleInterestTermStart(
                agreementId,
                principalTokenAddress,
                principalAmount,
                interestRate,
                amortizationUnitType,
                termLengthInAmortizationUnits
            );

            return true;
        }

        return false;
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
        SimpleInterestParams memory params = unpackParamsForAgreementID(agreementId);

        if (tokenAddress == params.principalTokenAddress) {
            valueRepaid[agreementId] = valueRepaid[agreementId].add(unitsOfRepayment);

            LogRegisterRepayment(
                agreementId,
                payer,
                beneficiary,
                unitsOfRepayment,
                tokenAddress
            );

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
        SimpleInterestParams memory params = unpackParamsForAgreementID(agreementId);
        uint principalPlusInterest = calculateTotalPrincipalPlusInterest(params);

        if (timestamp <= params.termStartUnixTimestamp) {
            /* The query occurs before the contract was even initialized so the
            expected value of repayments is 0. */
            return 0;
        } else if (timestamp >= params.termEndUnixTimestamp) {
            /* the query occurs beyond the contract's term, so the expected
            value of repayment is the full principal plus interest. */
            return principalPlusInterest;
        } else {
            uint numUnits = numAmortizationUnitsForTimestamp(timestamp, params);
            return principalPlusInterest.mul(numUnits).div(params.termLengthInAmortizationUnits);
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

    function unpackParametersFromBytes(bytes32 parameters)
        public
        pure
        returns (
            uint _principalTokenIndex,
            uint _principalAmount,
            uint _interestRate,
            uint _amortizationUnitType,
            uint _termLengthInAmortizationUnits
        )
    {
        // The first byte of the parameters encodes the principal token's index in the
        // token registry.
        bytes32 principalTokenIndexShifted =
            parameters & 0xff00000000000000000000000000000000000000000000000000000000000000;
        // The subsequent 12 bytes of the parameters encode the principal amount.
        bytes32 principalAmountShifted =
            parameters & 0x00ffffffffffffffffffffffff00000000000000000000000000000000000000;
        // The subsequent 3 bytes of the parameters encode the interest rate.
        bytes32 interestRateShifted =
            parameters & 0x00000000000000000000000000ffffff00000000000000000000000000000000;
        // The subsequent 4 bits (half byte) encode the amortization unit type code.
        bytes32 amortizationUnitTypeShifted =
            parameters & 0x00000000000000000000000000000000f0000000000000000000000000000000;
        // The subsequent 2 bytes encode the term length, as denominated in
        // the encoded amortization unit.
        bytes32 termLengthInAmortizationUnitsShifted =
            parameters & 0x000000000000000000000000000000000ffff000000000000000000000000000;

        // Note that the remaining 108 bits are reserved for any parameters relevant to a
        // collateralized terms contracts.

        /*
        We then bit shift left each of these values so that the 32-byte uint
        counterpart correctly represents the value that was originally packed
        into the 32 byte string.

        The below chart summarizes where in the 32 byte string each value
        terminates -- which indicates the extent to which each value must be bit
        shifted left.

                                        Location (bytes)	Location (bits)
                                        32                  256
        principalTokenIndex	            31	                248
        principalAmount	                19                  152
        interestRate                    16                  128
        amortizationUnitType            15.5                124
        termLengthInAmortizationUnits   13.5                108
        */
        return (
            bitShiftRight(principalTokenIndexShifted, 248),
            bitShiftRight(principalAmountShifted, 152),
            bitShiftRight(interestRateShifted, 128),
            bitShiftRight(amortizationUnitTypeShifted, 124),
            bitShiftRight(termLengthInAmortizationUnitsShifted, 108)
        );
    }

    function getTermEndTimestamp(
        bytes32 _agreementId
    ) public view returns (uint)
    {
        SimpleInterestParams memory params = unpackParamsForAgreementID(_agreementId);

        return params.termEndUnixTimestamp;
    }

    function bitShiftRight(bytes32 value, uint amount)
        internal
        pure
        returns (uint)
    {
        return uint(value) / 2 ** amount;
    }

    function numAmortizationUnitsForTimestamp(
        uint timestamp,
        SimpleInterestParams params
    )
        internal
        returns (uint units)
    {
        uint delta = timestamp.sub(params.termStartUnixTimestamp);
        uint amortizationUnitLengthInSeconds = getAmortizationUnitLengthInSeconds(params.amortizationUnitType);
        return delta.div(amortizationUnitLengthInSeconds);
    }

    /**
     * Calculates the total repayment value expected at the end of the loan's term.
     *
     * This computation assumes that interest is paid per amortization period.
     *
     * @param params SimpleInterestParams. The parameters that define the simple interest loan.
     * @return uint The total repayment value expected at the end of the loan's term.
     */
    function calculateTotalPrincipalPlusInterest(
        SimpleInterestParams params
    )
        internal
        returns (uint _principalPlusInterest)
    {
        // Since we represent decimal interest rates using their
        // scaled-up, fixed point representation, we have to
        // downscale the result of the interest payment computation
        // by the multiplier scaling factor we choose for interest rates.
        uint totalInterest = params.principalAmount
            .mul(params.interestRate)
            .div(INTEREST_RATE_SCALING_FACTOR_MULTIPLIER);

        return params.principalAmount.add(totalInterest);
    }

    function unpackParamsForAgreementID(
        bytes32 agreementId
    )
        internal
        returns (SimpleInterestParams params)
    {
        bytes32 parameters = contractRegistry.debtRegistry().getTermsContractParameters(agreementId);

        // Index of the token used for principal payments in the Token Registry
        uint principalTokenIndex;
        // The principal amount denominated in the aforementioned token.
        uint principalAmount;
        // The interest rate accrued per amortization unit.
        uint interestRate;
        // The amortization unit in which the repayments installments schedule is defined.
        uint rawAmortizationUnitType;
        // The debt's entire term's length, denominated in the aforementioned amortization units
        uint termLengthInAmortizationUnits;

        (principalTokenIndex, principalAmount, interestRate, rawAmortizationUnitType, termLengthInAmortizationUnits) =
            unpackParametersFromBytes(parameters);

        address principalTokenAddress =
            contractRegistry.tokenRegistry().getTokenAddressByIndex(principalTokenIndex);

        // Ensure that the encoded principal token address is valid
        require(principalTokenAddress != address(0));

        // Before we cast to `AmortizationUnitType`, ensure that the raw value being stored is valid.
        require(rawAmortizationUnitType <= uint(AmortizationUnitType.YEARS));

        AmortizationUnitType amortizationUnitType = AmortizationUnitType(rawAmortizationUnitType);

        uint amortizationUnitLengthInSeconds =
            getAmortizationUnitLengthInSeconds(amortizationUnitType);
        uint issuanceBlockTimestamp =
            contractRegistry.debtRegistry().getIssuanceBlockTimestamp(agreementId);
        uint termLengthInSeconds =
            termLengthInAmortizationUnits.mul(amortizationUnitLengthInSeconds);
        uint termEndUnixTimestamp =
            termLengthInSeconds.add(issuanceBlockTimestamp);

        return SimpleInterestParams({
            principalTokenAddress: principalTokenAddress,
            principalAmount: principalAmount,
            interestRate: interestRate,
            termStartUnixTimestamp: issuanceBlockTimestamp,
            termEndUnixTimestamp: termEndUnixTimestamp,
            amortizationUnitType: amortizationUnitType,
            termLengthInAmortizationUnits: termLengthInAmortizationUnits
        });
    }

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
