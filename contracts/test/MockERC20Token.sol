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


contract MockERC20Token is MockContract {
    function transfer(
        address _to,
        uint _amount
    )
        public
    {
        functionCalledWithArgs("transfer", getTransferArgsSignature(
            _to,
            _amount
        ));
    }

    function wasTransferCalledWith(
        address _to,
        uint _amount
    )
        public
        view
        returns (bool wasCalled)
    {
        return wasFunctionCalledWithArgs("transfer", getTransferArgsSignature(
            _to,
            _amount
        ));
    }

    function transferFrom(
        address _from,
        address _to,
        uint _amount
    )
        public
    {
        functionCalledWithArgs("transferFrom", getTransferFromArgsSignature(
            _from,
            _to,
            _amount
        ));
    }

    function wasTransferFromCalledWith(
        address _from,
        address _to,
        uint _amount
    )
        public
        view
        returns (bool wasCalled)
    {
        return wasFunctionCalledWithArgs("transferFrom", getTransferFromArgsSignature(
            _from,
            _to,
            _amount
        ));
    }

    function getTransferArgsSignature(
        address _to,
        uint _amount
    )
        internal
        returns (bytes32 args)
    {
        return keccak256(
            _to,
            _amount
        );
    }

    function getTransferFromArgsSignature(
        address _from,
        address _to,
        uint _amount
    )
        internal
        returns (bytes32 argsSignature)
    {
        return keccak256(
            _from,
            _to,
            _amount
        );
    }

    function getFunctionList()
        internal
        returns (string[10] functionNames)
    {
        return ["transfer", "transferFrom", "", "", "", "", "", "", "", ""];
    }
}
