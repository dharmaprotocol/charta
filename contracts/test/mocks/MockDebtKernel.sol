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


contract MockDebtKernel is MockContract {

    function mockCreateReturnValue(bytes32 _agreementId)
        public
    {
        mockReturnValue("fillDebtOrder", DEFAULT_SIGNATURE_ARGS, bytes32(_agreementId));
    }

    function fillDebtOrder(
        address creditor,
        address[6] orderAddresses,
        uint[8] orderValues,
        bytes32[1] orderBytes32,
        uint8[3] signaturesV,
        bytes32[3] signaturesR,
        bytes32[3] signaturesS
    )
        public
        returns (bytes32 _agreementId)
    {
        bytes32 argsSignature = keccak256(
            creditor,
            orderAddresses,
            orderValues,
            orderBytes32,
            signaturesV,
            signaturesR,
            signaturesS
        );
        functionCalledWithArgs("fillDebtOrder", argsSignature);
        return getMockReturnValue("fillDebtOrder", DEFAULT_SIGNATURE_ARGS);
    }

    function wasFillDebtOrderCalledWith(
        address creditor,
        address[6] orderAddresses,
        uint[8] orderValues,
        bytes32[1] orderBytes32,
        uint8[3] signaturesV,
        bytes32[3] signaturesR,
        bytes32[3] signaturesS
    )
        public
        view
        returns (bool wasCalled)
    {
        bytes32 argsSignature = keccak256(
            creditor,
            orderAddresses,
            orderValues,
            orderBytes32,
            signaturesV,
            signaturesR,
            signaturesS
        );
        return wasFunctionCalledWithArgs("fillDebtOrder", argsSignature);
    }

    function getFunctionList()
        internal
        returns (string[10] functionNames)
    {
        return [
            "fillDebtOrder",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
        ];
    }
}
