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

import "./MockContract.sol";


contract MockTermsContract is MockContract {
    function registerRepayment(
        address payer,
        address beneficiary,
        bytes32 parameters,
        uint unitsOfRepayment,
        address tokenAddress
    )
        public
    {
        functionCalledWithArgs("registerRepayment", keccak256(
            payer,
            beneficiary,
            parameters,
            unitsOfRepayment,
            tokenAddress
        ));
    }

    function wasRegisterRepaymentCalledWith(
        address payer,
        address beneficiary,
        bytes32 parameters,
        uint unitsOfRepayment,
        address tokenAddress
    )
        public
        view
        returns (bool wasCalled)
    {
        return wasFunctionCalledWithArgs("registerRepayment", keccak256(
            payer,
            beneficiary,
            parameters,
            unitsOfRepayment,
            tokenAddress
        ));
    }

    function registerNFTRepayment(
        address payer,
        address beneficiary,
        bytes32 parameters,
        uint tokenId,
        address tokenAddress
    )
        public
    {
        functionCalledWithArgs("registerNFTRepayment", keccak256(
            payer,
            beneficiary,
            parameters,
            tokenId,
            tokenAddress
        ));
    }

    function wasRegisterNFTRepaymentCalledWith(
        address payer,
        address beneficiary,
        bytes32 parameters,
        uint tokenId,
        address tokenAddress
    )
        public
        view
        returns (bool wasCalled)
    {
        return wasFunctionCalledWithArgs("registerNFTRepayment", keccak256(
            payer,
            beneficiary,
            parameters,
            tokenId,
            tokenAddress
        ));
    }

    function getFunctionList()
        internal
        returns (string[10] functionNames)
    {
        return ["registerRepayment", "registerNFTRepayment", "", "", "", "", "", "", "", ""];
    }
}
