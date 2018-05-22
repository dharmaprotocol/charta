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
        returns (bytes32 _agreementId)
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

        bytes32 agreementId = getMockReturnValue("insert", DEFAULT_SIGNATURE_ARGS);

        mockGetBeneficiaryReturnValueFor(agreementId, _beneficiary);

        return agreementId;
    }

    function modifyBeneficiary(bytes32 agreementId, address newBeneficiary)
        public
    {
        functionCalledWithArgs("modifyBeneficiary",
            keccak256(agreementId, newBeneficiary));

        mockGetBeneficiaryReturnValueFor(agreementId, newBeneficiary);
    }

    function getBeneficiary(bytes32 agreementId)
        public
        view
        returns (address _mockBeneficiary)
    {
        return address(getMockReturnValue("getBeneficiary", agreementId));
    }

    function doesEntryExist(bytes32 agreementId) public returns (bool) {
        bytes32 mockReturnValue = getMockReturnValue("doesEntryExist", agreementId);
        return mockReturnValue == bytes32(0) ? false : true;
    }

    function mockDoesEntryExist(bytes32 agreementId, bool exists) public {
        mockReturnValue("doesEntryExist", agreementId, exists ? bytes32(1) : bytes32(0));
    }

    function mockInsertReturnValue(bytes32 agreementId) public {
        mockReturnValue("insert", DEFAULT_SIGNATURE_ARGS, agreementId);
    }

    function mockGetBeneficiaryReturnValueFor(bytes32 agreementId, address beneficiary)
        public
    {
        mockReturnValue("getBeneficiary", agreementId, bytes32(beneficiary));
    }

    function getTerms(bytes32 agreementId)
        public
        view
        returns (address _termsContract, bytes32 _termsContractParameters)
    {
        return (
            address(getMockReturnValue("getTerms_termsContract", agreementId)),
            getMockReturnValue("getTerms_termsContractParameters", agreementId)
        );
    }

    function mockGetTermsReturnValueFor(
        bytes32 agreementId,
        address termsContract,
        bytes32 termsContractParameters
    )
        public
    {
        mockReturnValue("getTerms_termsContract", agreementId, bytes32(termsContract));
        mockReturnValue("getTerms_termsContractParameters", agreementId, termsContractParameters);
    }

    function getTermsContract(bytes32 agreementId)
        public
        view
        returns (address _termsContract)
    {
        return address(getMockReturnValue("getTermsContract", agreementId));
    }

    function getIssuanceBlockTimestamp(bytes32 agreementId)
        public
        view
        returns (uint timestamp)
    {
        return uint(getMockReturnValue("getIssuanceBlockTimestamp", agreementId));
    }

    function mockGetIssuanceBlockTimestamp(
        bytes32 agreementId,
        uint timestamp
    )
        public
    {
        mockReturnValue("getIssuanceBlockTimestamp", agreementId, bytes32(timestamp));
    }

    function getTermsContractParameters(bytes32 agreementId)
        public
        view
        returns (bytes32)
    {
        return getMockReturnValue("getTermsContractParameters", agreementId);
    }

    function mockGetTermsContractParameters(
        bytes32 agreementId,
        bytes32 params
    )
        public
    {
        mockReturnValue("getTermsContractParameters", agreementId, params);
    }

    function mockGetTermsContractReturnValueFor(
        bytes32 agreementId,
        address termsContract
    )
        public
    {
        mockReturnValue("getTermsContract", agreementId, bytes32(termsContract));
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

    function wasModifyBeneficiaryCalledWith(bytes32 agreementId, address newBeneficiary)
        public
        view
        returns (bool _wasCalled)
    {
        return wasFunctionCalledWithArgs("modifyBeneficiary",
            keccak256(agreementId, newBeneficiary));
    }

    function getFunctionList()
        internal
        returns (string[10] functionNames)
    {
        return [
            "insert",
            "modifyBeneficiary",
            "getBeneficiary",
            "getTerms_termsContract",
            "getTerms_termsContractParameters",
            "getTermsContract",
            "getTermsContractParameters",
            "getIssuanceBlockTimestamp",
            "doesEntryExist",
            ""
        ];
    }
}
