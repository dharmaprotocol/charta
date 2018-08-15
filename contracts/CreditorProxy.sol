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

import "./DebtKernel.sol";
import "./DebtToken.sol";
import "./TokenTransferProxy.sol";
import "zeppelin-solidity/contracts/lifecycle/Pausable.sol";
import "zeppelin-solidity/contracts/math/SafeMath.sol";
import "zeppelin-solidity/contracts/token/ERC20/ERC20.sol";


contract CreditorProxy is Pausable {
    using SafeMath for uint;

    enum Errors {
        CREDITOR_MISSING
    }

    event LogError(
        uint8 indexed _errorId
    );

    /**
     * takes signed creditor interest as argument
     * activates on signed (as debtor and underwritter) debt order from debtor/relayer
     * approve debt kernel to transfer token (if not already)
     * transfer token from creditor to itself
     * sign debt order as creditor
     * submits debt order to debt kernel
     * transfers debt token to creditor
     */
    function submitDebtOrder(
        address creditor
    )
        public
        whenNotPaused
        returns (bool result)
    {
        if (!creditor) {
            LogError(uint8(Errors.CREDITOR_MISSING));
            return false;
        }
        return true;
    }
}
