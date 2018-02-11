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


contract NFTTermsContract {
    using SafeMath for uint;

    uint public constant SEVEN_DAYS_IN_BLOCKS = 42300;

    mapping (bytes32 => bool) debtRepaid;
    mapping (bytes32 => mapping (uint => bool)) principalNFTsRepaid;

    DebtRegistry debtRegistry;

    address public repaymentPrincipalNFT;
    address public repaymentRouter;

    function NFTTermsContract(
        address _debtRegistry,
        address _repaymentPrincipalNFT,
        address _repaymentRouter
    )
        public
    {
        debtRegistry = DebtRegistry(_debtRegistry);

        repaymentPrincipalNFT = _repaymentPrincipalNFT;
        repaymentRouter = _repaymentRouter;
    }

    function registerNFTRepayment(
        bytes32 agreementId,
        address payer,
        address beneficiary,
        uint256 tokenId,
        address tokenAddress
    )
        public
        returns (bool _success)
    {
        if (msg.sender != repaymentRouter) {
            return false;
        }

        if (tokenAddress == repaymentPrincipalNFT) {
            principalNFTsRepaid[agreementId][tokenId] = true;
        }

        return true;
    }

    function getExpectedRepaymentValue(
        bytes32 agreementId,
        uint256 blockTimestamp
    )
        public
        view
        returns (uint _expectedRepaymentValue)
    {
        if (debtRegistry.getIssuanceBlockTimestamp(agreementId).add(SEVEN_DAYS_IN_BLOCKS) < blockTimestamp) {
            return 1;
        } else {
            return 0;
        }
    }

    function getValueRepaid(
        bytes32 agreementId,
        uint256 blockTimestamp
    )
        public
        view
        returns (uint _valueRepaid)
    {
        uint tokenId = uint(debtRegistry.getTermsContractParameters(agreementId));

        return principalNFTsRepaid[agreementId][tokenId] ? 1 : 0;
    }
}
