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
import "./SimpleInterestTermsContract.sol";


/**
 * Example collateralized terms contract for usage in simple interest debt agreements
 *
 * Authors: nadavhollander, saturnial, jdkanani
 */
contract CollateralizedSimpleInterestTermsContract is Collateralized, SimpleInterestTermsContract {
    function CollateralizedSimpleInterestTermsContract(
        address _debtKernel,
        address _debtRegistry,
        address _tokenRegistry,
        address _repaymentRouter
    )
        public
        SimpleInterestTermsContract(_debtKernel, _debtRegistry, _tokenRegistry, _repaymentRouter)
        Collateralized(_debtKernel, _debtRegistry, _tokenRegistry)
    {
        // No initialization necessary
    }

    function getTermEndTimestamp(
        bytes32 _agreementId
    )
        public
        view
        returns (uint)
    {
        SimpleInterestParams memory params = unpackParamsForAgreementID(_agreementId);

        return params.termEndUnixTimestamp;
    }
}
