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
import "zeppelin-solidity/contracts/token/ERC20.sol";


contract MockZeroExExchange is MockContract {
    function fillOrder(
        address[5] orderAddresses,
        uint[6] orderValues,
        uint fillTakerTokenAmount,
        bool shouldThrowOnInsufficientBalanceOrAllowance,
        uint8 v,
        bytes32 r,
        bytes32 s
    )
        public
        returns (uint filledTakerTokenAmount)
    {
        functionCalledWithArgs("fillOrder", keccak256(
            orderAddresses,
            orderValues,
            fillTakerTokenAmount,
            shouldThrowOnInsufficientBalanceOrAllowance,
            v,
            r,
            s
        ));

        address maker = orderAddresses[0];
        address taker = orderAddresses[1] == address(0) ? msg.sender : orderAddresses[1];
        address makerToken = orderAddresses[2];
        address takerToken = orderAddresses[3];
        uint makerTokenAmount = orderValues[0];

        // Call transferFrom on the maker and taker tokens in order to simulate swapping
        ERC20(makerToken).transferFrom(maker, taker, makerTokenAmount);
        ERC20(takerToken).transferFrom(taker, maker, fillTakerTokenAmount);

        return uint(getMockReturnValue("fillOrder", DEFAULT_SIGNATURE_ARGS));
    }

    function wasFillOrderCalledWith(
        address[5] orderAddresses,
        uint[6] orderValues,
        uint fillTakerTokenAmount,
        bool shouldThrowOnInsufficientBalanceOrAllowance,
        uint8 v,
        bytes32 r,
        bytes32 s
    )
        public
        view
        returns (bool wasCalled)
    {
        return wasFunctionCalledWithArgs("fillOrder", keccak256(
            orderAddresses,
            orderValues,
            fillTakerTokenAmount,
            shouldThrowOnInsufficientBalanceOrAllowance,
            v,
            r,
            s
        ));
    }

    function getFunctionList()
        internal
        returns (string[10] functionNames)
    {
        return ["fillOrder", "", "", "", "", "", "", "", "", ""];
    }
}
