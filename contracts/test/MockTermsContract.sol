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
        bytes32 agreementId,
        address payer,
        address beneficiary,
        uint unitsOfRepayment,
        address tokenAddress
    )
        public
        returns (bool _success)
    {
        functionCalledWithArgs("registerRepayment", keccak256(
            agreementId,
            payer,
            beneficiary,
            unitsOfRepayment,
            tokenAddress
        ));

        return getMockReturnValue("registerRepayment", DEFAULT_SIGNATURE_ARGS) == bytes32(1);
    }

    function mockRegisterRepaymentReturnValue(bool success)
        public
    {
        mockReturnValue("registerRepayment", DEFAULT_SIGNATURE_ARGS, success ? bytes32(1) : bytes32(0));
    }

    function wasRegisterRepaymentCalledWith(
        bytes32 agreementId,
        address payer,
        address beneficiary,
        uint unitsOfRepayment,
        address tokenAddress
    )
        public
        view
        returns (bool wasCalled)
    {
        return wasFunctionCalledWithArgs("registerRepayment", keccak256(
            agreementId,
            payer,
            beneficiary,
            unitsOfRepayment,
            tokenAddress
        ));
    }

    function registerNFTRepayment(
        bytes32 agreementId,
        address payer,
        address beneficiary,
        uint tokenId,
        address tokenAddress
    )
        public
        returns (bool _success)
    {
        functionCalledWithArgs("registerNFTRepayment", keccak256(
            agreementId,
            payer,
            beneficiary,
            tokenId,
            tokenAddress
        ));

        return getMockReturnValue("registerNFTRepayment", DEFAULT_SIGNATURE_ARGS) == bytes32(1);
    }

    function mockRegisterNFTRepaymentReturnValue(bool success)
        public
    {
        mockReturnValue("registerNFTRepayment", DEFAULT_SIGNATURE_ARGS, success ? bytes32(1) : bytes32(0));
    }

    function wasRegisterNFTRepaymentCalledWith(
        bytes32 agreementId,
        address payer,
        address beneficiary,
        uint tokenId,
        address tokenAddress
    )
        public
        view
        returns (bool wasCalled)
    {
        return wasFunctionCalledWithArgs("registerNFTRepayment", keccak256(
            agreementId,
            payer,
            beneficiary,
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
