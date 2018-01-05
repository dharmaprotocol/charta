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


contract MockDebtRegistry is MockContract {
    string[] public functionList = ["insert", "modifyBeneficiary"];

    function insert(
        address _version,
        address _beneficiary,
        address _debtor,
        address _underwriter,
        uint _underwriterRiskRating,
        address _termsContract,
        bytes32 _termsContractParameters,
        uint _salt
    )
        public
        returns (bytes32 _issuanceHash)
    {
        bytes32[10] memory args = [
            bytes32(_version),
            bytes32(_beneficiary),
            bytes32(_debtor),
            bytes32(_underwriter),
            bytes32(_underwriterRiskRating),
            bytes32(_termsContract),
            _termsContractParameters,
            bytes32(_salt),
            bytes32(0),
            bytes32(0)
        ];

        functionCalledWithArgs("insert", args);

        return getMockReturnValue("insert");
    }

    function modifyBeneficiary(bytes32 issuanceHash, address newBeneficiary)
        public
    {
        functionCalledWithArgs("modifyBeneficiary", [
            issuanceHash,
            bytes32(newBeneficiary),
            bytes32(0),
            bytes32(0),
            bytes32(0),
            bytes32(0),
            bytes32(0),
            bytes32(0),
            bytes32(0),
            bytes32(0)
        ]);
    }

    function wasInsertCalledWith(
        address _version,
        address _beneficiary,
        address _debtor,
        address _underwriter,
        uint _underwriterRiskRating,
        address _termsContract,
        bytes32 _termsContractParameters,
        uint _salt
    )
        public
        view
        returns (bool _wasCalled)
    {
        return wasFunctionCalledWithArgs("insert",
            [
                bytes32(_version),
                bytes32(_beneficiary),
                bytes32(_debtor),
                bytes32(_underwriter),
                bytes32(_underwriterRiskRating),
                bytes32(_termsContract),
                _termsContractParameters,
                bytes32(_salt),
                bytes32(0),
                bytes32(0)
            ]
        );
    }

    function wasModifyBeneficiaryCalledWith(bytes32 issuanceHash, address newBeneficiary)
        public
        view
        returns (bool _wasCalled)
    {
        return wasFunctionCalledWithArgs("modifyBeneficiary",
            [
                issuanceHash,
                bytes32(newBeneficiary),
                bytes32(0),
                bytes32(0),
                bytes32(0),
                bytes32(0),
                bytes32(0),
                bytes32(0),
                bytes32(0),
                bytes32(0)
            ]
        );
    }
}
