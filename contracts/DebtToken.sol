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
import "./base/Ownable.sol";
import "NonFungibleToken/contracts/NonFungibleToken.sol";


contract DebtToken is NonFungibleToken, Ownable {
    string public name  = "DebtToken";
    string public symbol = "DDT";

    DebtRegistry public registry;

    function DebtToken(address _registry)
        public
    {
        registry = DebtRegistry(_registry);
    }

    function totalSupply()
        public
        view
        returns (uint _totalSupply)
    {
        return registry.numEntries();
    }

    function balanceOf(address _owner)
        public
        view
        returns (uint _balance)
    {
        return registry.getNumCreditorEntries(_owner);
    }

    function tokenOfOwnerByIndex(address _owner, uint _index)
        public
        view
        returns (uint _tokenId)
    {
        return uint(registry.entryOfCreditorByIndex(_owner, _index));
    }
}
