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

import "./Collateralized.sol";
import "./CompoundInterestTermsContract.sol";


/**
 * Example collateralized terms contract for usage in compound interest debt agreements
 *
 * Authors: nadavhollander, saturnial, jdkanani
 */
contract CollateralizedCompoundInterestTermsContract is Collateralized, CompoundInterestTermsContract {
    function CollateralizedCompoundInterestTermsContract(
        address _debtRegistry,
        address _debtKernel,
        address _repaymentToken,
        address _repaymentRouter
    )
        public
        CompoundInterestTermsContract(_debtRegistry, _debtKernel, _repaymentToken, _repaymentRouter)
        Collateralized(_debtRegistry)
    {
        // No initialization necessary
    }
}
