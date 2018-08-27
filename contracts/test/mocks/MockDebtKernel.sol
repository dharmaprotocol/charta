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
    /*
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
        returns (uint _agreementId)
    {
        bytes32 argsSignature = keccak256(
            creditor,
            orderAddresses[0],
            orderValues[0],
            orderBytes32[0],
            signaturesV[0],
            signaturesR[0],
            signaturesS[0]
        );

        functionCalledWithArgs("fillDebtOrder", argsSignature);

        return uint(getMockReturnValue("fillDebtOrder", DEFAULT_SIGNATURE_ARGS));
    }

    function mockCreateReturnValue(uint _agreementId)
        public
    {
        mockReturnValue("fillDebtOrder", DEFAULT_SIGNATURE_ARGS, bytes32(_agreementId));
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
        return wasFunctionCalledWithArgs("fillDebtOrder", keccak256(
            creditor,
            orderAddresses[0],
            orderValues[0],
            orderBytes32[0],
            signaturesV[0],
            signaturesR[0],
            signaturesS[0]
        ));
    }
    */
    function hello(
    )
        public
        pure
        returns(bytes32 _world)
    {
        return bytes32(12345);
    }
}
