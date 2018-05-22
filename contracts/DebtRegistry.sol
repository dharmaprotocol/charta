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

import { PermissionsLib, PermissionEvents } from "./libraries/PermissionsLib.sol";
import "zeppelin-solidity/contracts/math/SafeMath.sol";
import "zeppelin-solidity/contracts/lifecycle/Pausable.sol";


/**
 * The DebtRegistry stores the parameters and beneficiaries of all debt agreements in
 * Dharma protocol.  It authorizes a limited number of agents to
 * perform mutations on it -- those agents can be changed at any
 * time by the contract's owner.
 *
 * Author: Nadav Hollander -- Github: nadavhollander
 */
contract DebtRegistry is Pausable, PermissionEvents {
    using SafeMath for uint;
    using PermissionsLib for PermissionsLib.Permissions;

    struct Entry {
        address version;
        address beneficiary;
        address underwriter;
        uint underwriterRiskRating;
        address termsContract;
        bytes32 termsContractParameters;
        uint issuanceBlockTimestamp;
    }

    // Primary registry mapping agreement IDs to their corresponding entries
    mapping (bytes32 => Entry) internal registry;

    // Maps debtor addresses to a list of their debts' agreement IDs
    mapping (address => bytes32[]) internal debtorToDebts;

    PermissionsLib.Permissions internal entryInsertPermissions;
    PermissionsLib.Permissions internal entryEditPermissions;

    string public constant INSERT_CONTEXT = "debt-registry-insert";
    string public constant EDIT_CONTEXT = "debt-registry-edit";

    event LogInsertEntry(
        bytes32 indexed agreementId,
        address indexed beneficiary,
        address indexed underwriter,
        uint underwriterRiskRating,
        address termsContract,
        bytes32 termsContractParameters
    );

    event LogModifyEntryBeneficiary(
        bytes32 indexed agreementId,
        address indexed previousBeneficiary,
        address indexed newBeneficiary
    );

    modifier onlyAuthorizedToInsert() {
        require(entryInsertPermissions.isAuthorized(msg.sender));
        _;
    }

    modifier onlyAuthorizedToEdit() {
        require(entryEditPermissions.isAuthorized(msg.sender));
        _;
    }

    modifier onlyExtantEntry(bytes32 agreementId) {
        require(doesEntryExist(agreementId));
        _;
    }

    modifier nonNullBeneficiary(address beneficiary) {
        require(beneficiary != address(0));
        _;
    }

    /* Ensures an entry with the specified agreement ID exists within the debt registry. */
    function doesEntryExist(bytes32 agreementId)
        public
        view
        returns (bool exists)
    {
        return registry[agreementId].beneficiary != address(0);
    }

    /**
     * Inserts a new entry into the registry, if the entry is valid and sender is
     * authorized to make 'insert' mutations to the registry.
     */
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
        nonNullBeneficiary(_beneficiary)
        returns (bytes32 _agreementId)
    {
        Entry memory entry = Entry(
            _version,
            _beneficiary,
            _underwriter,
            _underwriterRiskRating,
            _termsContract,
            _termsContractParameters,
            block.timestamp
        );

        bytes32 agreementId = _getAgreementId(entry, _debtor, _salt);

        require(registry[agreementId].beneficiary == address(0));

        registry[agreementId] = entry;
        debtorToDebts[_debtor].push(agreementId);

        LogInsertEntry(
            agreementId,
            entry.beneficiary,
            entry.underwriter,
            entry.underwriterRiskRating,
            entry.termsContract,
            entry.termsContractParameters
        );

        return agreementId;
    }

    /**
     * Modifies the beneficiary of a debt issuance, if the sender
     * is authorized to make 'modifyBeneficiary' mutations to
     * the registry.
     */
    function modifyBeneficiary(bytes32 agreementId, address newBeneficiary)
        public
        onlyAuthorizedToEdit
        whenNotPaused
        onlyExtantEntry(agreementId)
        nonNullBeneficiary(newBeneficiary)
    {
        address previousBeneficiary = registry[agreementId].beneficiary;

        registry[agreementId].beneficiary = newBeneficiary;

        LogModifyEntryBeneficiary(
            agreementId,
            previousBeneficiary,
            newBeneficiary
        );
    }

    /**
     * Adds an address to the list of agents authorized
     * to make 'insert' mutations to the registry.
     */
    function addAuthorizedInsertAgent(address agent)
        public
        onlyOwner
    {
        entryInsertPermissions.authorize(agent, INSERT_CONTEXT);
    }

    /**
     * Adds an address to the list of agents authorized
     * to make 'modifyBeneficiary' mutations to the registry.
     */
    function addAuthorizedEditAgent(address agent)
        public
        onlyOwner
    {
        entryEditPermissions.authorize(agent, EDIT_CONTEXT);
    }

    /**
     * Removes an address from the list of agents authorized
     * to make 'insert' mutations to the registry.
     */
    function revokeInsertAgentAuthorization(address agent)
        public
        onlyOwner
    {
        entryInsertPermissions.revokeAuthorization(agent, INSERT_CONTEXT);
    }

    /**
     * Removes an address from the list of agents authorized
     * to make 'modifyBeneficiary' mutations to the registry.
     */
    function revokeEditAgentAuthorization(address agent)
        public
        onlyOwner
    {
        entryEditPermissions.revokeAuthorization(agent, EDIT_CONTEXT);
    }

    /**
     * Returns the parameters of a debt issuance in the registry.
     *
     * TODO(kayvon): protect this function with our `onlyExtantEntry` modifier once the restriction
     * on the size of the call stack has been addressed.
     */
    function get(bytes32 agreementId)
        public
        view
        returns(address, address, address, uint, address, bytes32, uint)
    {
        return (
            registry[agreementId].version,
            registry[agreementId].beneficiary,
            registry[agreementId].underwriter,
            registry[agreementId].underwriterRiskRating,
            registry[agreementId].termsContract,
            registry[agreementId].termsContractParameters,
            registry[agreementId].issuanceBlockTimestamp
        );
    }

    /**
     * Returns the beneficiary of a given issuance
     */
    function getBeneficiary(bytes32 agreementId)
        public
        view
        onlyExtantEntry(agreementId)
        returns(address)
    {
        return registry[agreementId].beneficiary;
    }

    /**
     * Returns the terms contract address of a given issuance
     */
    function getTermsContract(bytes32 agreementId)
        public
        view
        onlyExtantEntry(agreementId)
        returns (address)
    {
        return registry[agreementId].termsContract;
    }

    /**
     * Returns the terms contract parameters of a given issuance
     */
    function getTermsContractParameters(bytes32 agreementId)
        public
        view
        onlyExtantEntry(agreementId)
        returns (bytes32)
    {
        return registry[agreementId].termsContractParameters;
    }

    /**
     * Returns a tuple of the terms contract and its associated parameters
     * for a given issuance
     */
    function getTerms(bytes32 agreementId)
        public
        view
        onlyExtantEntry(agreementId)
        returns(address, bytes32)
    {
        return (
            registry[agreementId].termsContract,
            registry[agreementId].termsContractParameters
        );
    }

    /**
     * Returns the timestamp of the block at which a debt agreement was issued.
     */
    function getIssuanceBlockTimestamp(bytes32 agreementId)
        public
        view
        onlyExtantEntry(agreementId)
        returns (uint timestamp)
    {
        return registry[agreementId].issuanceBlockTimestamp;
    }

    /**
     * Returns the list of agents authorized to make 'insert' mutations
     */
    function getAuthorizedInsertAgents()
        public
        view
        returns(address[])
    {
        return entryInsertPermissions.getAuthorizedAgents();
    }

    /**
     * Returns the list of agents authorized to make 'modifyBeneficiary' mutations
     */
    function getAuthorizedEditAgents()
        public
        view
        returns(address[])
    {
        return entryEditPermissions.getAuthorizedAgents();
    }

    /**
     * Returns the list of debt agreements a debtor is party to,
     * with each debt agreement listed by agreement ID.
     */
    function getDebtorsDebts(address debtor)
        public
        view
        returns(bytes32[])
    {
        return debtorToDebts[debtor];
    }

    /**
     * Helper function for computing the hash of a given issuance,
     * and, in turn, its agreementId
     */
    function _getAgreementId(Entry _entry, address _debtor, uint _salt)
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
