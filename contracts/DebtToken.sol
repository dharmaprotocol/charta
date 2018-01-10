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
import "zeppelin-solidity/contracts/token/ERC20.sol";
import "./interfaces/ZeroExExchange.sol";


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
     * HACK: Since 0x protocol does not support ERC721 trades yet,
     * we somewhat abuse the 0x protocol by creating the notion of "brokered"
     * trades.  A "brokered" trade involves the DebtToken contract account
     * taking ownership of an NFT with id _tokenId, executing a
     * 0x order for swapping the NFT for ERC20 tokens, and then
     * transfering the swapped ERC20 tokens to the transaction sender.
     *
     * The 0x order executes successfully because it is executed immediately
     * after we set _tokenId as the current "brokeredTokenId" -- a variable
     * that captures the exact NFT that we are looking to trade in this
     * particular synchronous set of instructions.
     *
     * The brokeredTokenId is reset after it is transferred, and brokered
     * trades can only be initiated by their tokens' owners.
     *
     * NOTE: This is a temporary feature that will no longer be necessary
     *  once the 0x protocol supports NFT orders -- as such, we limit it
     *  to only authorized parties (namely, the DebtKernel contract) in
     *  order to reduce its attack surface.
     */
    function brokerZeroExOrder(
        uint _tokenId,
        address _zeroExExchangeContract,
        address[5] _zeroExOrderAddresses,
        uint[6] _zeroExOrderValues,
        uint8 _v,
        bytes32 _r,
        bytes32 _s
    )
        public
        whenNotPaused
        returns (bool _success)
    {
        require(tokenBrokeragePermissions.isAuthorized(msg.sender));
        require(tokenExchangePermissions.isAuthorized(_zeroExExchangeContract));

        require(msg.sender == ownerOf(_tokenId));
        require(brokeredTokenId == 0);

        brokeredTokenId = _tokenId;

        var (makerToken, makerTokenAmount) = fillZeroExOrder(
            _zeroExExchangeContract,
            _zeroExOrderAddresses,
            _zeroExOrderValues,
            _v,
            _r,
            _s
        );

        assert(brokeredTokenId == 0);

        return ERC20(makerToken).transfer(msg.sender, makerTokenAmount);
    }

    /**
     * We override the NFT transferFrom method in order to enable brokered 0x trades
     * for non-fungible tokens.
     */
    function transferFrom(
        address _from,
        address _to,
        uint _tokenId
    )
        public

    {
        if (_tokenId == 1 && brokeredTokenId != 0) {
            address nftOwner = ownerOf(brokeredTokenId);

            _clearApprovalAndTransfer(nftOwner, _to, brokeredTokenId);

            Approval(nftOwner, 0, brokeredTokenId);
            Transfer(nftOwner, _to, brokeredTokenId);

            brokeredTokenId = 0;
        } else {
            super.transferFrom(_from, _to, _tokenId);
        }
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
     * Adds an address to the list of agents authorized to broker 0x trades
     */
    function addAuthorizedBrokerageAgent(address _agent)
        public
        onlyOwner
    {
        tokenBrokeragePermissions.authorize(_agent);
    }

    /**
     * Removes an address from the list of agents authorized to broker 0x trades
     */
    function revokeBrokerageAgentAuthorization(address _agent)
        public
        onlyOwner
    {
        tokenBrokeragePermissions.revokeAuthorization(_agent);
    }

    /**
     * Returns the list of agents authorized to broker 0x trades
     */
    function getAuthorizedBrokerageAgents()
        public
        view
        returns (address[] _agents)
    {
        return tokenBrokeragePermissions.getAuthorizedAgents();
    }

    /**
     * Adds an address to the list of contracts authorized to act as a 0x exchange
     */
    function addAuthorizedExchangeAgent(address _agent)
        public
        onlyOwner
    {
        tokenExchangePermissions.authorize(_agent);
    }

    /**
     * Removes an address to the list of contracts authorized to act as a 0x exchange
     */
    function revokeExchangeAgentAuthorization(address _agent)
        public
        onlyOwner
    {
        tokenExchangePermissions.revokeAuthorization(_agent);
    }

    /**
     * Retruns the list of authorized 0x exchange contracts (at the time of writing, only one)
     */
    function getAuthorizedExchangeAgents()
        public
        view
        returns (address[] _agents)
    {
        return tokenExchangePermissions.getAuthorizedAgents();
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
     * We oveerride the core ownership transfer method of the parent non-fungible token
     * contract so that it mutates the debt registry every time a token is transferred
     */
    function _setTokenOwner(uint _tokenId, address _to)
        internal
    {
        if (registry.getBeneficiary(bytes32(_tokenId)) != _to) {
            registry.modifyBeneficiary(bytes32(_tokenId), _to);
        }
    }

    /**
     * We oveerride the core ownership getter of the parent non-fungible token
     * contract so that it retrieves the debt's current beneficiary from the debt registry
     */
    function _ownerOf(uint _tokenId)
        internal
        view
        returns (address _owner)
    {
        return registry.getBeneficiary(bytes32(_tokenId));
    }

    /**
     * Helper function that executes a given 0x order
     */
    function fillZeroExOrder(
        address zeroExExchangeContract,
        address[5] orderAddresses,
        uint[6] orderValues,
        uint8 v,
        bytes32 r,
        bytes32 s
    )
        internal
        returns (address _makerToken, uint _makerTokenAmount)
    {
        ZeroExExchange(zeroExExchangeContract).fillOrder(
            orderAddresses,
            orderValues,
            1,
            true,
            v,
            r,
            s
        );

        return (orderAddresses[2], orderValues[0]);
    }
}
