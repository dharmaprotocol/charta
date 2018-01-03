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
import "zeppelin-solidity/contracts/ownership/Ownable.sol";
import "zeppelin-solidity/contracts/token/ERC20.sol";
import "./interfaces/ZeroExExchange.sol";


contract DebtToken is MintableNonFungibleToken, Ownable {
    using PermissionsLib for PermissionsLib.Permissions;

    string public name  = "DebtToken";
    string public symbol = "DDT";

    DebtRegistry public registry;
    uint internal brokeredTokenId;

    PermissionsLib.Permissions internal tokenCreationPermissions;
    PermissionsLib.Permissions internal tokenBrokeragePermissions;

    function DebtToken(address _registry)
        public
    {
        registry = DebtRegistry(_registry);
    }

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
     * TODO: Wrap in more thorough test suite, for now only allow
     * contracts approved to create tokens to use this feature
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
    {
        require(tokenBrokeragePermissions.isAuthorized(msg.sender));

        require(msg.sender == ownerOf(_tokenId));
        require(brokeredTokenId == 0);

        _clearApprovalAndTransfer(ownerOf(_tokenId), this, _tokenId);

        brokeredTokenId = _tokenId;

        var (makerToken, makerTokenAmount) = fillZeroExOrder(
            _zeroExExchangeContract,
            _zeroExOrderAddresses,
            _zeroExOrderValues,
            _v,
            _r,
            _s
        );

        ERC20(makerToken).transfer(msg.sender, makerTokenAmount);

        assert(brokeredTokenId == 0);
    }

    function transferFrom(
        address _from,
        address _to,
        uint _tokenId
    )
        public
    {
        if (_tokenId == 1 && brokeredTokenId != 0) {
            _clearApprovalAndTransfer(_from, _to, brokeredTokenId);
            brokeredTokenId = 0;
        } else {
            super.transferFrom(_from, _to, _tokenId);
        }
    }

    function addAuthorizedMintAgent(address _agent)
        public
        onlyOwner
    {
        tokenCreationPermissions.authorize(_agent);
    }

    function getAuthorizedMintAgents()
        public
        view
        returns (address[] _agents)
    {
        return tokenCreationPermissions.getAuthorizedAgents();
    }

    function addAuthorizedBrokerageAgent(address _agent)
        public
        onlyOwner
    {
        tokenBrokeragePermissions.authorize(_agent);
    }

    function getAuthorizedBrokerageAgents()
        public
        view
        returns (address[] _agents)
    {
        return tokenBrokeragePermissions.getAuthorizedAgents();
    }

    function _setTokenOwner(uint _tokenId, address _to)
        internal
    {
        if (registry.getBeneficiary(bytes32(_tokenId)) != _to) {
            registry.modifyBeneficiary(bytes32(_tokenId), _to);
        }
    }

    function _ownerOf(uint _tokenId)
        internal
        view
        returns (address _owner)
    {
        return registry.getBeneficiary(bytes32(_tokenId));
    }

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
