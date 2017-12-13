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

interface NonFungibleToken {
    function name() public constant returns (string _name);
    function symbol() public constant returns (string _symbol);
    function totalSupply() public constant returns (uint _totalSupply);
    function balanceOf() public constant returns (uint balance);
    function ownerOf(uint tokenId) public constant returns (address owner);
    function approve(address to, uint tokenId) public;
    function transferFrom(address from, address to, uint tokenId) public;
    function transfer(address to, uint tokenId) public;
    function tokenOfOwnerByIndex(address owner, uint index) public constant returns (uint tokenId);
}
