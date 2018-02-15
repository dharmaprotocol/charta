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

import "./DebtRegistry.sol";
import "NonFungibleToken/contracts/MintableNonFungibleToken.sol";
import "zeppelin-solidity/contracts/lifecycle/Pausable.sol";
import "zeppelin-solidity/contracts/token/ERC20/ERC20.sol";


/**
 * The DebtToken contract governs all business logic for making a debt agreement
 * transferable as an ERC721 non-fungible token.  Additionally, the contract
 * allows authorized contracts to trigger the minting of a debt agreement token
 * and, in turn, the insertion of a debt issuance into the DebtRegsitry.
 *
 * Author: Nadav Hollander -- Github: nadavhollander
 */
contract DebtToken is MintableNonFungibleToken, Pausable {
    using PermissionsLib for PermissionsLib.Permissions;

    string public name  = "DebtToken";
    string public symbol = "DDT";

    DebtRegistry public registry;
    uint internal brokeredTokenId;

    PermissionsLib.Permissions internal tokenCreationPermissions;
    PermissionsLib.Permissions internal tokenBrokeragePermissions;
    PermissionsLib.Permissions internal tokenExchangePermissions;

    /**
     * Constructor that sets the address of the debt registry.
     */
    function DebtToken(address _registry)
        public
    {
        registry = DebtRegistry(_registry);
    }

    /**
     * Mints a unique debt token and inserts the associated issuance into
     * the debt registry, if the calling address is authorized to do so.
     */
    function create(
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
        whenNotPaused
        returns (uint _tokenId)
    {
        require(tokenCreationPermissions.isAuthorized(msg.sender));

        bytes32 entryHash = registry.insert(
            _version,
            _beneficiary,
            _debtor,
            _underwriter,
            _underwriterRiskRating,
            _termsContract,
            _termsContractParameters,
            _salt
        );

        mint(_beneficiary, uint(entryHash));

        return uint(entryHash);
    }

    /**
     * Adds an address to the list of agents authorized to mint debt tokens.
     */
    function addAuthorizedMintAgent(address _agent)
        public
        onlyOwner
    {
        tokenCreationPermissions.authorize(_agent);
    }

    /**
     * Removes an address from the list of agents authorized to mint debt tokens
     */
    function revokeMintAgentAuthorization(address _agent)
        public
        onlyOwner
    {
        tokenCreationPermissions.revokeAuthorization(_agent);
    }

    /**
     * Returns the list of agents authorized to mint debt tokens
     */
    function getAuthorizedMintAgents()
        public
        view
        returns (address[] _agents)
    {
        return tokenCreationPermissions.getAuthorizedAgents();
    }

    /**
     * We override the core transfer method of the parent non-fungible token
     * contract to allow its functionality to be frozen in the case of an emergency
     */
    function _clearApprovalAndTransfer(
        address _from,
        address _to,
        uint _tokenId
    )
        internal
        whenNotPaused
    {
        super._clearApprovalAndTransfer(_from, _to, _tokenId);
    }

    /**
     * We override the core approvals method of the parent non-fungible token
     * contract to allow its functionality to be frozen in the case of an emergency
     */
    function _approve(address _to, uint _tokenId)
        internal
        whenNotPaused
    {
        super._approve(_to, _tokenId);
    }


    /**
     * We oveerride the core ownership transfer method of the parent non-fungible token
     * contract so that it mutates the debt registry every time a token is transferred
     */
    function _setTokenOwner(uint _tokenId, address _to)
        internal
    {
        if (registry.getBeneficiary(bytes32(_tokenId)) != _to) {
            registry.modifyBeneficiary(bytes32(_tokenId), _to);
        }

        super._setTokenOwner(_tokenId, _to);
    }
}
