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


contract SimpleInterestTermsContract {
    using SafeMath for uint;

    enum AmortizationUnitType { HOURS, DAYS, WEEKS, MONTHS, YEARS }

    uint public constant HOUR_LENGTH_IN_SECONDS = 60 * 60;
    uint public constant DAY_LENGTH_IN_SECONDS = HOUR_LENGTH_IN_SECONDS * 24;
    uint public constant WEEK_LENGTH_IN_SECONDS = DAY_LENGTH_IN_SECONDS * 7;
    uint public constant MONTH_LENGTH_IN_SECONDS = DAY_LENGTH_IN_SECONDS * 30;
    uint public constant YEAR_LENGTH_IN_SECONDS = DAY_LENGTH_IN_SECONDS * 365;

    mapping (bytes32 => uint) valueRepaid;

    DebtRegistry debtRegistry;

    address repaymentToken;
    address repaymentRouter;

    function SimpleInterestTermsContract(
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
        returns (bool _success)
    {
        if (msg.sender != repaymentRouter) {
            return false;
        }

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
        returns (uint _expectedRepaymentValue)
    {
        bytes32 parameters = debtRegistry.getTermsContractParameters(agreementId);
        uint issuanceBlockTimestamp = debtRegistry.getIssuanceBlockTimestamp(agreementId);

        var (principalPlusInterest, amortizationUnitType, termLengthInAmortizationUnits) =
            unpackParameters(parameters);

        uint amortizationUnitLength = getAmortizationUnitLengthInSeconds(amortizationUnitType);

        if (timestamp < issuanceBlockTimestamp) {
            return 0;
        } else {
            uint numRepaymentPeriods = 10;

            return 0;
        }
    }

     /// Returns the cumulative units-of-value repaid by the point at which the timestamp of a given block has lapsed.
     /// @param agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.
     /// @param blockTimestamp uint. The timestamp of the block for which repayment value is being queried.
     /// @return uint256 The cumulative units-of-value repaid by the specified block timestamp.
    function getValueRepaid(
        bytes32 agreementId,
        uint256 blockTimestamp
    )
        public
        view
        returns (uint _valueRepaid)
    {
        return valueRepaid[agreementId];
    }

    function unpackParameters(bytes32 parameters)
        public
        pure
        returns (
            uint128 _principalPlusInterest,
            uint8 _amortizationUnitType,
            uint120 _termLengthInAmortizationUnits
        )
    {
        bytes16 principalPlusInterest;
        bytes1 amortizationUnitType;
        bytes15 termLengthInAmortizationUnits;

        assembly {
            principalPlusInterest := calldataload(4)
            amortizationUnitType := calldataload(20)
            termLengthInAmortizationUnits := calldataload(21)
        }

        return (
            uint128(principalPlusInterest),
            uint8(amortizationUnitType),
            uint120(termLengthInAmortizationUnits)
        );
    }

    function getAmortizationUnitLengthInSeconds(uint8 amortizationUnitType)
        public
        pure
        returns (uint _amortizationUnitLengthInBlocks)
    {
        if (amortizationUnitType == uint8(AmortizationUnitType.HOURS)) {
            return HOUR_LENGTH_IN_SECONDS;
        } else if (amortizationUnitType == uint8(AmortizationUnitType.DAYS)) {
            return DAY_LENGTH_IN_SECONDS;
        } else if (amortizationUnitType == uint8(AmortizationUnitType.WEEKS)) {
            return WEEK_LENGTH_IN_SECONDS;
        } else if (amortizationUnitType == uint8(AmortizationUnitType.MONTHS)) {
            return MONTH_LENGTH_IN_SECONDS;
        } else if (amortizationUnitType == uint8(AmortizationUnitType.YEARS)) {
            return YEAR_LENGTH_IN_SECONDS;
        }
    }
}
