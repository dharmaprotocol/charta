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


contract MockTokenRegistry is MockContract {
    function getTokenAddressBySymbol(string symbol)
        public
        view
        returns (address)
    {
        return address(getMockReturnValue("getTokenAddressBySymbol", keccak256(symbol)));
    }

    function getTokenAddressByIndex(uint index)
        public
        view
        returns (address)
    {
        return address(getMockReturnValue("getTokenAddressByIndex", keccak256(index)));
    }

    function mockGetTokenAddressBySymbol(string symbol, address token)
        public
    {
        mockReturnValue("getTokenAddressBySymbol", keccak256(symbol), bytes32(token));
    }

    function mockGetTokenAddressByIndex(uint index, address token)
        public
    {
        mockReturnValue("getTokenAddressByIndex", keccak256(index), bytes32(token));
    }

    function getFunctionList()
        internal
        returns (string[10] functionNames)
    {
        return ["getTokenAddressBySymbol", "getTokenAddressByIndex", "", "", "", "", "", "", "", ""];
    }
}
