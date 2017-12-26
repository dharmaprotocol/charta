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


contract DebtToken is MintableNonFungibleToken, Ownable {
    using PermissionsLib for PermissionsLib.Permissions;

    string public name  = "DebtToken";
    string public symbol = "DDT";

    DebtRegistry public registry;

    PermissionsLib.Permissions internal tokenCreationPermissions;

    function DebtToken(address _registry)
        public
    {
        registry = DebtRegistry(_registry);
    }

    function create(
        address _version,
        address _issuer,
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
            _issuer,
            _underwriter,
            _underwriterRiskRating,
            _termsContract,
            _termsContractParameters,
            _salt
        );

        mint(_issuer, uint(entryHash));

        return uint(entryHash);
    }

    function createAndApproveExchange(
        address _version,
        address _issuer,
        address _underwriter,
        uint _underwriterRiskRating,
        address _termsContract,
        bytes32 _termsContractParameters,
        uint _salt,
        address _zrxExchange
    )
        public
    {
        require(tokenCreationPermissions.isAuthorized(msg.sender));

        uint tokenId = create(
            _version,
            _issuer,
            _underwriter,
            _underwriterRiskRating,
            _termsContract,
            _termsContractParameters,
            _salt
        );

        _approve(_zrxExchange, tokenId);
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

    function _setTokenOwner(uint _tokenId, address _to)
        internal
    {
        if (registry.getCreditor(bytes32(_tokenId)) != _to) {
            registry.modifyCreditor(bytes32(_tokenId), _to);
        }
    }

    function _ownerOf(uint _tokenId)
        internal
        view
        returns (address _owner)
    {
        return registry.getCreditor(bytes32(_tokenId));
    }
}
