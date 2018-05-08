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

// Internal dependencies.
import "./DebtRegistry.sol";
import "./ERC165.sol";
import { PermissionsLib, PermissionEvents } from "./libraries/PermissionsLib.sol";

// External dependencies.
import "zeppelin-solidity/contracts/lifecycle/Pausable.sol";
import "zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol";
import "zeppelin-solidity/contracts/token/ERC20/ERC20.sol";


/**
 * The DebtToken contract governs all business logic for making a debt agreement
 * transferable as an ERC721 non-fungible token.  Additionally, the contract
 * allows authorized contracts to trigger the minting of a debt agreement token
 * and, in turn, the insertion of a debt issuance into the DebtRegsitry.
 *
 * Author: Nadav Hollander -- Github: nadavhollander
 */
contract DebtToken is ERC721Token, ERC165, Pausable, PermissionEvents {
    using PermissionsLib for PermissionsLib.Permissions;

    DebtRegistry public registry;

    PermissionsLib.Permissions internal tokenCreationPermissions;
    PermissionsLib.Permissions internal tokenURIPermissions;

    string public constant CREATION_CONTEXT = "debt-token-creation";
    string public constant URI_CONTEXT = "debt-token-uri";

    /**
     * Constructor that sets the address of the debt registry.
     */
    function DebtToken(address _registry)
        public
        ERC721Token("DebtToken", "DDT")
    {
        registry = DebtRegistry(_registry);
    }

    /**
     * ERC165 interface.
     * Returns true for ERC721, false otherwise
     */
    function supportsInterface(bytes4 interfaceID)
        external
        view
        returns (bool _isSupported)
    {
        return interfaceID == 0x80ac58cd; // ERC721
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

        super._mint(_beneficiary, uint(entryHash));

        return uint(entryHash);
    }

    /**
     * Adds an address to the list of agents authorized to mint debt tokens.
     */
    function addAuthorizedMintAgent(address _agent)
        public
        onlyOwner
    {
        tokenCreationPermissions.authorize(_agent, CREATION_CONTEXT);
    }

    /**
     * Removes an address from the list of agents authorized to mint debt tokens
     */
    function revokeMintAgentAuthorization(address _agent)
        public
        onlyOwner
    {
        tokenCreationPermissions.revokeAuthorization(_agent, CREATION_CONTEXT);
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
     * Adds an address to the list of agents authorized to set token URIs.
     */
    function addAuthorizedTokenURIAgent(address _agent)
        public
        onlyOwner
    {
        tokenURIPermissions.authorize(_agent, URI_CONTEXT);
    }

    /**
     * Returns the list of agents authorized to set token URIs.
     */
    function getAuthorizedTokenURIAgents()
        public
        view
        returns (address[] _agents)
    {
        return tokenURIPermissions.getAuthorizedAgents();
    }

    /**
     * Removes an address from the list of agents authorized to set token URIs.
     */
    function revokeTokenURIAuthorization(address _agent)
        public
        onlyOwner
    {
        tokenURIPermissions.revokeAuthorization(_agent, URI_CONTEXT);
    }

    /**
     * We override approval method of the parent ERC721Token
     * contract to allow its functionality to be frozen in the case of an emergency
     */
    function approve(address _to, uint _tokenId)
        public
        whenNotPaused
    {
        super.approve(_to, _tokenId);
    }

    /**
     * We override setApprovalForAll method of the parent ERC721Token
     * contract to allow its functionality to be frozen in the case of an emergency
     */
    function setApprovalForAll(address _to, bool _approved)
        public
        whenNotPaused
    {
        super.setApprovalForAll(_to, _approved);
    }

    /**
     * Support deprecated ERC721 method
     */
    function transfer(address _to, uint _tokenId)
        public
    {
        safeTransferFrom(msg.sender, _to, _tokenId);
    }

    /**
     * We override transferFrom methods of the parent ERC721Token
     * contract to allow its functionality to be frozen in the case of an emergency
     */
    function transferFrom(address _from, address _to, uint _tokenId)
        public
        whenNotPaused
    {
        _modifyBeneficiary(_tokenId, _to);
        super.transferFrom(_from, _to, _tokenId);
    }

    /**
     * We override safeTransferFrom methods of the parent ERC721Token
     * contract to allow its functionality to be frozen in the case of an emergency
     */
    function safeTransferFrom(address _from, address _to, uint _tokenId)
        public
        whenNotPaused
    {
        _modifyBeneficiary(_tokenId, _to);
        super.safeTransferFrom(_from, _to, _tokenId);
    }

    /**
     * We override safeTransferFrom methods of the parent ERC721Token
     * contract to allow its functionality to be frozen in the case of an emergency
     */
    function safeTransferFrom(address _from, address _to, uint _tokenId, bytes _data)
        public
        whenNotPaused
    {
        _modifyBeneficiary(_tokenId, _to);
        super.safeTransferFrom(_from, _to, _tokenId, _data);
    }

    /**
     * Allows senders with special permissions to set the token URI for a given debt token.
     */
    function setTokenURI(uint256 _tokenId, string _uri)
        public
        whenNotPaused
    {
        require(tokenURIPermissions.isAuthorized(msg.sender));
        super._setTokenURI(_tokenId, _uri);
    }

    /**
     * _modifyBeneficiary mutates the debt registry. This function should be
     * called every time a token is transferred or minted
     */
    function _modifyBeneficiary(uint _tokenId, address _to)
        internal
    {
        if (registry.getBeneficiary(bytes32(_tokenId)) != _to) {
            registry.modifyBeneficiary(bytes32(_tokenId), _to);
        }
    }
}
