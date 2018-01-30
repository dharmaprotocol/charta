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


contract MockERC721Token is MockContract {
    function transfer(
        address _to,
        uint _tokenId
    )
        public
        returns (bool _success)
    {
        functionCalledWithArgs("transfer", getTransferArgsSignature(
            _to,
            _tokenId
        ));

        return true;
    }

    function wasTransferCalledWith(
        address _to,
        uint _tokenId
    )
        public
        view
        returns (bool wasCalled)
    {
        return wasFunctionCalledWithArgs("transfer", getTransferArgsSignature(
            _to,
            _tokenId
        ));
    }

    function transferFrom(
        address _from,
        address _to,
        uint _tokenId
    )
        public
        returns (bool _success)
    {
        functionCalledWithArgs("transferFrom", getTransferFromArgsSignature(
            _from,
            _to,
            _tokenId
        ));

        return true;
    }

    function wasTransferFromCalledWith(
        address _from,
        address _to,
        uint _tokenId
    )
        public
        view
        returns (bool wasCalled)
    {
        return wasFunctionCalledWithArgs("transferFrom", getTransferFromArgsSignature(
            _from,
            _to,
            _tokenId
        ));
    }

    function balanceOf(address _owner) public view returns (uint _balance) {
        return uint(getMockReturnValue("balanceOf", keccak256(_owner)));
    }

    function mockBalanceOfFor(address _owner, uint _balance) public {
        mockReturnValue("balanceOf", keccak256(_owner), bytes32(_balance));
    }

    function ownerOf(uint _tokenId) public view returns (address _owner) {
        return address(getMockReturnValue("ownerOf", keccak256(_tokenId)));
    }

    function mockOwnerOfFor(uint _tokenId, address _owner) public {
        mockReturnValue("ownerOf", keccak256(_tokenId), bytes32(_owner));
    }

    function getApproved(uint _tokenId) public view returns (address _approved) {
        return address(getMockReturnValue("getApproved", keccak256(_tokenId)));
    }

    function mockGetApprovedFor(uint _tokenId, address _approved) public {
        mockReturnValue("getApproved", keccak256(_tokenId), bytes32(_approved));
    }

    function implementsERC721() public pure returns (bool _implementsERC721) {
        return true;
    }

    function getTransferArgsSignature(
        address _to,
        uint _tokenId
    )
        internal
        pure
        returns (bytes32 args)
    {
        return keccak256(
            _to,
            _tokenId
        );
    }

    function getTransferFromArgsSignature(
        address _from,
        address _to,
        uint _tokenId
    )
        internal
        pure
        returns (bytes32 argsSignature)
    {
        return keccak256(
            _from,
            _to,
            _tokenId
        );
    }

    function getFunctionList()
        internal
        returns (string[10] functionNames)
    {
        return ["transfer", "transferFrom", "ownerOf", "balanceOf", "getApproved", "", "", "", "", ""];
    }
}
