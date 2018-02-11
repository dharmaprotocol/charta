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
        }

        return true;
    }

     /// Returns the cumulative units-of-value expected to be repaid given a block's timestamp.
     ///  Note this is not a constant function -- this value can vary on basis of any number of
     ///  conditions (e.g. interest rates can be renegotiated if repayments are delinquent).
     /// @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.
     /// @param  blockTimestamp uint. The timestamp of the block for which repayment expectation is being queried.
     /// @return uint256 The cumulative units-of-value expected to be repaid given a block's timestamp.
    function getExpectedRepaymentValue(
        bytes32 agreementId,
        uint256 blockTimestamp
    )
        public
        view
        returns (uint _expectedRepaymentValue)
    {
        bytes32 parameters = debtRegistry.getTermsContractParameters(agreementId);

        var (principalPlusInterest, termLengthInBlocks) = unpackParameters(parameters);

        if (debtRegistry.getIssuanceBlockTimestamp(agreementId).add(termLengthInBlocks) < blockTimestamp) {
            return principalPlusInterest;
        } else {
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
        returns (uint128 _principalPlusInterest, uint128 _termLengthInBlocks)
    {
        bytes16[2] memory values = [bytes16(0), 0];

        assembly {
            mstore(values, parameters)
            mstore(add(values, 16), parameters)
        }

        return ( uint128(values[0]), uint128(values[1]) );
    }
}
