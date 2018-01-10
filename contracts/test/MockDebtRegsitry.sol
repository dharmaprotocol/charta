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
        bytes32 argsSignature = keccak256(
            _version,
            _beneficiary,
            _debtor,
            _underwriter,
            _underwriterRiskRating,
            _termsContract,
            _termsContractParameters,
            _salt
        );

        functionCalledWithArgs("insert", argsSignature);

        bytes32 issuanceHash = getMockReturnValue("insert", DEFAULT_SIGNATURE_ARGS);

        mockGetBeneficiaryReturnValueFor(issuanceHash, _beneficiary);

        return issuanceHash;
    }

    function modifyBeneficiary(bytes32 issuanceHash, address newBeneficiary)
        public
    {
        functionCalledWithArgs("modifyBeneficiary",
            keccak256(issuanceHash, newBeneficiary));

        mockGetBeneficiaryReturnValueFor(issuanceHash, newBeneficiary);
    }

    function getBeneficiary(bytes32 issuanceHash)
        public
        view
        returns (address _mockBeneficiary)
    {
        return address(getMockReturnValue("getBeneficiary", issuanceHash));
    }

    function mockInsertReturnValue(bytes32 issuanceHash) public {
        mockReturnValue("insert", DEFAULT_SIGNATURE_ARGS, issuanceHash);
    }

    function mockGetBeneficiaryReturnValueFor(bytes32 issuanceHash, address beneficiary)
        public
    {
        mockReturnValue("getBeneficiary", issuanceHash, bytes32(beneficiary));
    }

    function getTerms(bytes32 issuanceHash)
        public
        view
        returns (address _termsContract, bytes32 _termsContractParameters)
    {
        return (
            address(getMockReturnValue("getTerms_termsContract", issuanceHash)),
            getMockReturnValue("getTerms_termsContractParameters", issuanceHash)
        );
    }

    function mockGetTermsReturnValueFor(
        bytes32 issuanceHash,
        address termsContract,
        bytes32 termsContractParameters
    )
        public
    {
        mockReturnValue("getTerms_termsContract", issuanceHash, bytes32(termsContract));
        mockReturnValue("getTerms_termsContractParameters", issuanceHash, termsContractParameters);
    }

    function getTermsContract(bytes32 issuanceHash)
        public
        view
        returns (address _termsContract)
    {
        return address(getMockReturnValue("getTermsContract", issuanceHash));
    }

    function mockGetTermsContractReturnValueFor(
        bytes32 issuanceHash,
        address termsContract
    )
        public
    {
        mockReturnValue("getTermsContract", issuanceHash, bytes32(termsContract));
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
        return wasFunctionCalledWithArgs("insert", keccak256(
            _version,
            _beneficiary,
            _debtor,
            _underwriter,
            _underwriterRiskRating,
            _termsContract,
            _termsContractParameters,
            _salt
        ));
    }

    function wasModifyBeneficiaryCalledWith(bytes32 issuanceHash, address newBeneficiary)
        public
        view
        returns (bool _wasCalled)
    {
        return wasFunctionCalledWithArgs("modifyBeneficiary",
            keccak256(issuanceHash, newBeneficiary));
    }

    function getFunctionList()
        internal
        returns (string[10] functionNames)
    {
        return ["insert", "modifyBeneficiary", "getBeneficiary", "getTerms_termsContract",
            "getTerms_termsContractParameters", "getTermsContract", "getTermsContractParameters", "", "", ""];
    }
}
