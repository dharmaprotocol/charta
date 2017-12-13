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

import "./DebtToken.sol";
import "./DebtRegistry.sol";

contract RepaymentRouter {

  DebtRegistry public debtRegistry;

  event LogRepayment(
    bytes32 indexed entryHash,
    address indexed from,
    address indexed creditor,
    uint amount,
    address token
  );

  function RepaymentRouter (address _debtRegistry) public {
    debtRegistry = DebtRegistry(_debtRegistry);
  }

  function repay(bytes32 entryHash, uint amount, address token)
    public
  {
    require(token != address(0));
    require(amount > 0);

    // Get registry entry and check if entry is valid
    var (version, creditor, termsContract, termsContractParameters) = debtRegistry.get(entryHash);
    require(creditor != address(0));

    // Transfer amount to creditor
    DebtToken debtToken = DebtToken(token);
    debtToken.transferFrom(msg.sender, creditor, amount);

    // Notify terms contract
    // TermsContract termsContract = TermsContract(termsContract);
    // termsContract.registerRepayment(msg.sender, termsContractParameters, amount, token);

    // Log event for repayment
    LogRepayment(entryHash, msg.sender, creditor, amount, token);
  }
}
