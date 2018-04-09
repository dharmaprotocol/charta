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
    // Maps from agreementId's to the mocked term end timestamp
    mapping (bytes32 => uint) internal termEndTimestamp;

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

    function mockTermEndTimestamp(
        bytes32 agreementId,
        uint timestamp
    ) public {
        termEndTimestamp[agreementId] = timestamp;
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

    function registerTermStart(
        bytes32 agreementId,
        address debtor
    )
        public
        returns (bool _registered)
    {
        functionCalledWithArgs("registerTermStart", keccak256(agreementId, debtor));

        return getMockReturnValue(
            "registerTermStart",
            keccak256(agreementId, debtor)
        ) == bytes32(1);
    }

    function mockRegisterTermStartReturnValue(bytes32 agreementId, address debtor, bool success)
        public
    {
        mockReturnValue(
            "registerTermStart",
            keccak256(agreementId, debtor),
            success ? bytes32(1) : bytes32(0)
        );
    }

    function getTermEndTimestamp(
        bytes32 agreementId
    ) public view returns (uint256) {
        return termEndTimestamp[agreementId];
    }

    function wasRegisterTermStartCalledWith(bytes32 agreementId, address debtor)
        public
        view
        returns (bool _wasCalled)
    {
        return wasFunctionCalledWithArgs("registerTermStart", keccak256(agreementId, debtor));
    }

    function getFunctionList()
        internal
        returns (string[10] functionNames)
    {
        return ["registerRepayment", "registerTermStart", "", "", "", "", "", "", "", ""];
    }
}
