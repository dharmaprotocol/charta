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

import "./libraries/PermissionsLib.sol";
import "zeppelin-solidity/contracts/math/SafeMath.sol";
import "zeppelin-solidity/contracts/lifecycle/Pausable.sol";


contract DebtRegistry is Pausable {
    using SafeMath for uint;
    using PermissionsLib for PermissionsLib.Permissions;

    struct Issuance {
        address version;
        address debtor;
        address underwriter;
        uint underwriterRiskRating;
        address termsContract;
        bytes32 termsContractParameters;
        uint salt;
    }

    struct Entry {
        address version;
        address beneficiary;
        address underwriter;
        uint underwriterRiskRating;
        address termsContract;
        bytes32 termsContractParameters;
        uint issuanceBlockNumber;
    }

    // Primary registry mapping issuance hashes to their corresponding entries
    mapping (bytes32 => Entry) internal registry;

    PermissionsLib.Permissions internal entryInsertPermissions;
    PermissionsLib.Permissions internal entryEditPermissions;

    event LogInsertEntry(
        bytes32 indexed issuanceHash,
        address indexed beneficiary,
        address indexed underwriter,
        uint underwriterRiskRating,
        address termsContract,
        bytes32 termsContractParameters
    );

    event LogModifyEntryBeneficiary(
        bytes32 indexed issuanceHash,
        address indexed previousBeneficiary,
        address indexed newBeneficiary
    );

    event LogAddAuthorizedInsertAgent(
        address agent
    );

    event LogAddAuthorizedEditAgent(
        address agent
    );

    event LogRevokeInsertAgentAuthorization(
        address agent
    );

    event LogRevokeEditAgentAuthorization(
        address agent
    );

    modifier onlyAuthorizedToInsert() {
        require(entryInsertPermissions.isAuthorized(msg.sender));
        _;
    }

    modifier onlyAuthorizedToEdit() {
        require(entryEditPermissions.isAuthorized(msg.sender));
        _;
    }

    modifier onlyExtantEntry(bytes32 issuanceHash) {
        require(registry[issuanceHash].beneficiary != address(0));
        _;
    }

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
        onlyAuthorizedToInsert
        whenNotPaused
        returns (bytes32 _issuanceHash)
    {
        Entry memory entry = Entry(
            _version,
            _beneficiary,
            _underwriter,
            _underwriterRiskRating,
            _termsContract,
            _termsContractParameters,
            block.number
        );

        bytes32 issuanceHash = _getIssuanceHash(entry, _debtor, _salt);

        require(registry[issuanceHash].beneficiary == address(0));

        registry[issuanceHash] = entry;

        LogInsertEntry(
            issuanceHash,
            entry.beneficiary,
            entry.underwriter,
            entry.underwriterRiskRating,
            entry.termsContract,
            entry.termsContractParameters
        );

        return issuanceHash;
    }

    function modifyBeneficiary(bytes32 issuanceHash, address newBeneficiary)
        public
        onlyAuthorizedToEdit
        whenNotPaused
        onlyExtantEntry(issuanceHash)
    {
        address previousBeneficiary = registry[issuanceHash].beneficiary;

        registry[issuanceHash].beneficiary = newBeneficiary;

        LogModifyEntryBeneficiary(
            issuanceHash,
            previousBeneficiary,
            newBeneficiary
        );
    }

    function addAuthorizedInsertAgent(address agent)
        public
        onlyOwner
    {
        entryInsertPermissions.authorize(agent);
        LogAddAuthorizedInsertAgent(agent);
    }

    function addAuthorizedEditAgent(address agent)
        public
        onlyOwner
    {
        entryEditPermissions.authorize(agent);
        LogAddAuthorizedEditAgent(agent);
    }

    function revokeInsertAgentAuthorization(address agent)
        public
        whenNotPaused
        onlyOwner
    {
        entryInsertPermissions.revokeAuthorization(agent);
        LogRevokeInsertAgentAuthorization(agent);
    }

    function revokeEditAgentAuthorization(address agent)
        public
        onlyOwner
    {
        entryEditPermissions.revokeAuthorization(agent);
        LogRevokeEditAgentAuthorization(agent);
    }

    function get(bytes32 issuanceHash)
        public
        view
        returns(address, address, address, uint, address, bytes32, uint)
    {
        return (
            registry[issuanceHash].version,
            registry[issuanceHash].beneficiary,
            registry[issuanceHash].underwriter,
            registry[issuanceHash].underwriterRiskRating,
            registry[issuanceHash].termsContract,
            registry[issuanceHash].termsContractParameters,
            registry[issuanceHash].issuanceBlockNumber
        );
    }

    function getBeneficiary(bytes32 issuanceHash)
        public
        view
        returns(address)
    {
        return registry[issuanceHash].beneficiary;
    }

    function getTermsContract(bytes32 issuanceHash)
        public
        view
        returns (address)
    {
        return registry[issuanceHash].termsContract;
    }

    function getTermsContractParameters(bytes32 issuanceHash)
        public
        view
        returns (bytes32)
    {
        return registry[issuanceHash].termsContractParameters;
    }

    function getTerms(bytes32 issuanceHash)
        public
        view
        returns(address, bytes32)
    {
        return (
            registry[issuanceHash].termsContract,
            registry[issuanceHash].termsContractParameters
        );
    }

    function getIssuanceBlockNumber(bytes32 issuanceHash)
        public
        view
        returns (uint)
    {
        return registry[issuanceHash].issuanceBlockNumber;
    }

    function getAuthorizedInsertAgents()
        public
        constant
        returns(address[])
    {
        return entryInsertPermissions.getAuthorizedAgents();
    }

    function getAuthorizedEditAgents()
        public
        constant
        returns(address[])
    {
        return entryEditPermissions.getAuthorizedAgents();
    }

    function _getIssuanceHash(Entry _entry, address _debtor, uint _salt)
        internal
        pure
        returns(bytes32)
    {
        return keccak256(
            _entry.version,
            _debtor,
            _entry.underwriter,
            _entry.underwriterRiskRating,
            _entry.termsContract,
            _entry.termsContractParameters,
            _salt
        );
    }
}
