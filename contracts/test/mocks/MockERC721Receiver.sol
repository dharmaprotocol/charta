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
import "zeppelin-solidity/contracts/token/ERC721/ERC721Receiver.sol";

contract MockERC721Receiver is ERC721Receiver, MockContract {

    // Internal state controllable via setters.
    bool internal shouldRevert = false;
    bytes4 internal returnValue = ERC721_RECEIVED;

    function setShouldRevert(bool _shouldRevert) public {
        shouldRevert = _shouldRevert;
    }

    function setReturnValueForERC721ReceivedHook(bytes4 _returnValue) public {
        returnValue = _returnValue;
    }

    function reset() public {
        setShouldRevert(false);
        setReturnValueForERC721ReceivedHook(ERC721_RECEIVED);
        super.reset();
    }

    function onERC721Received(address _address, uint256 _tokenId, bytes _data)
        public
        returns (bytes4)
    {
        require(!shouldRevert);

        functionCalledWithArgs("onERC721Received", keccak256(
            _address,
            _tokenId,
            _data
        ));

        return returnValue;
    }

    function wasOnERC721ReceivedCalledWith(
        address _address,
        uint256 _tokenId,
        bytes _data
    )
        public
        view
        returns (bool wasCalled)
    {
        return wasFunctionCalledWithArgs("onERC721Received", keccak256(
            _address,
            _tokenId,
            _data
        ));
    }

    function getFunctionList()
        internal
    returns (string[10] functionNames)
    {
        return ["onERC721Received", "", "", "", "", "", "", "", "", ""];
    }
}
