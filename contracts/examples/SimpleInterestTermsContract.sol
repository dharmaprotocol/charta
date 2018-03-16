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
import "../TokenRegistry.sol";


contract SimpleInterestTermsContract is TermsContract {
    using SafeMath for uint;

    enum AmortizationUnitType { HOURS, DAYS, WEEKS, MONTHS, YEARS }
    uint public constant NUM_AMORTIZATION_UNIT_TYPES = 5;

    struct SimpleInterestParams {
        address principalTokenAddress;
        uint principalPlusInterest;
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
    TokenRegistry public tokenRegistry;

    address public debtKernel;
    address public repaymentRouter;

    event LogSimpleInterestTermStart(
        bytes32 indexed agreementId,
        address indexed principalToken,
        uint principalPlusInterest,
        uint indexed amortizationUnitType,
        uint termLengthInAmortizationUnits
    );

    modifier onlyRouter() {
        require(msg.sender == repaymentRouter);
        _;
    }

    modifier onlyMappedToThisContract(bytes32 agreementId) {
        require(address(this) == debtRegistry.getTermsContract(agreementId));
        _;
    }

    modifier onlyDebtKernel() {
        require(msg.sender == debtKernel);
        _;
    }

    function SimpleInterestTermsContract(
        address _debtKernel,
        address _debtRegistry,
        address _tokenRegistry,
        address _repaymentRouter
    )
        public
    {
        debtRegistry = DebtRegistry(_debtRegistry);
        tokenRegistry = TokenRegistry(_tokenRegistry);

        debtKernel = _debtKernel;
        repaymentRouter = _repaymentRouter;
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

        (termsContract, termsContractParameters) = debtRegistry.getTerms(agreementId);

        uint principalTokenIndex;
        uint principalPlusInterest;
        uint amortizationUnitType;
        uint termLengthInAmortizationUnits;

        (principalTokenIndex, principalPlusInterest, amortizationUnitType, termLengthInAmortizationUnits) =
            unpackParametersFromBytes(termsContractParameters);

        address principalTokenAddress =
            tokenRegistry.getTokenAddressByIndex(principalTokenIndex);

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
                principalPlusInterest,
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

        if (timestamp <= params.termStartUnixTimestamp) {
            /* The query occurs before the contract was even initialized so the
            expected value of repayments is 0. */
            return 0;
        } else if (timestamp >= params.termEndUnixTimestamp) {
            /* the query occurs beyond the contract's term, so the expected
            value of repayment is the full principal plus interest. */
            return params.principalPlusInterest;
        } else {
            uint numUnits = numAmortizationUnitsForTimestamp(timestamp, params);
            return params.principalPlusInterest.mul(numUnits).div(params.termLengthInAmortizationUnits);
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
            uint _principalPlusInterest,
            uint _amortizationUnitType,
            uint _termLengthInAmortizationUnits
        )
    {
        // The first byte of the parameters encodes the principal token's index in the
        // token registry.
        bytes32 principalTokenIndexShifted =
            parameters & 0xff00000000000000000000000000000000000000000000000000000000000000;
        // The subsequent 15 bytes of the parameters encode the total principal + interest
        bytes32 principalPlusInterestShifted =
            parameters & 0x00ffffffffffffffffffffffffffffff00000000000000000000000000000000;
        // The subsequent 4 bits encode the amortization unit type code
        bytes32 amortizationUnitTypeShifted =
            parameters & 0x00000000000000000000000000000000f0000000000000000000000000000000;
        // The subsequent 2 bytes encode the term length, as denominated in
        // the encoded amortization unit.
        bytes32 termLengthInAmortizationUnitsShifted =
            parameters & 0x000000000000000000000000000000000ffff000000000000000000000000000;

        // We bit-shift these values, respectively, 248 bits, 126 bits, 124 bits,
        // and 108 bits right mathematical operations, so that their 32 byte
        // integer counterparts correspond to the intended values packed in the 32 byte string
        uint principalTokenIndex = uint(principalTokenIndexShifted) / 2 ** 248;
        uint principalPlusInterest = uint(principalPlusInterestShifted) / 2 ** 128;
        uint amortizationUnitType = uint(amortizationUnitTypeShifted) / 2 ** 124;
        uint termLengthInAmortizationUnits =
            uint(termLengthInAmortizationUnitsShifted) / 2 ** 108;

        return (
            principalTokenIndex,
            principalPlusInterest,
            amortizationUnitType,
            termLengthInAmortizationUnits
        );
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

    function unpackParamsForAgreementID(
        bytes32 agreementId
    )
        internal
        returns (SimpleInterestParams params)
    {
        bytes32 parameters = debtRegistry.getTermsContractParameters(agreementId);

        // Index of the token used for principal payments in the Token Registry
        uint principalTokenIndex;
        // Amount, denominated in the aforementioned token, expected in total principal
        // plus interest.
        uint principalPlusInterest;
        // The amortization unit in which the repayments installments schedule is defined
        uint amortizationUnitTypeAsUint;
        // The debt's entire term's length, denominated in the aforementioned amortization units
        uint termLengthInAmortizationUnits;

        (principalTokenIndex, principalPlusInterest, amortizationUnitTypeAsUint, termLengthInAmortizationUnits) =
            unpackParametersFromBytes(parameters);

        address principalTokenAddress =
            tokenRegistry.getTokenAddressByIndex(principalTokenIndex);

        // Ensure that the encoded principal token address is valid
        require(principalTokenAddress != address(0));

        // Before we cast to `AmortizationUnitType`, ensure that the raw value being stored is valid.
        require(amortizationUnitTypeAsUint <= uint(AmortizationUnitType.YEARS));

        AmortizationUnitType amortizationUnitType = AmortizationUnitType(amortizationUnitTypeAsUint);

        uint amortizationUnitLengthInSeconds =
            getAmortizationUnitLengthInSeconds(amortizationUnitType);
        uint issuanceBlockTimestamp =
            debtRegistry.getIssuanceBlockTimestamp(agreementId);
        uint termLengthInSeconds =
            termLengthInAmortizationUnits.mul(amortizationUnitLengthInSeconds);
        uint termEndUnixTimestamp =
            termLengthInSeconds.add(issuanceBlockTimestamp);

        return SimpleInterestParams({
            principalTokenAddress: principalTokenAddress,
            principalPlusInterest: principalPlusInterest,
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
