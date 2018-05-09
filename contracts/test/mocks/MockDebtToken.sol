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
import "zeppelin-solidity/contracts/token/ERC20/ERC20.sol";


contract MockDebtToken is MockContract {
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
        bytes32 argsSignature = keccak256(
            _version,
            _beneficiary,
            _debtor,
            _underwriter,
            _underwriterRiskRating,
            _termsContract,
            _termsContractParameters,
            _salt
        );

        functionCalledWithArgs("create", argsSignature);

        return uint(getMockReturnValue("create", DEFAULT_SIGNATURE_ARGS));
    }

    function mockCreateReturnValue(uint _tokenId)
        public
    {
        mockReturnValue("create", DEFAULT_SIGNATURE_ARGS, bytes32(_tokenId));
    }

    function wasCreateCalledWith(
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
        view
        returns (bool wasCalled)
    {
        return wasFunctionCalledWithArgs("create", keccak256(
            _version,
            _beneficiary,
            _debtor,
            _underwriter,
            _underwriterRiskRating,
            _termsContract,
            _termsContractParameters,
            _salt
        ));
    }

    function transfer(address _to, uint _tokenId)
        public
        returns (bool success)
    {
        functionCalledWithArgs("transfer", keccak256(_to, _tokenId));

        return true;
    }

    function wasTransferCalledWith(address _to, uint _tokenId)
        public
        view
        returns (bool wasCalled)
    {
        return wasFunctionCalledWithArgs("transfer", keccak256(_to, _tokenId));
    }

    function ownerOf(uint _tokenId)
        public
        view
        returns (address _owner)
    {
        _owner = _getOwner(_tokenId);
        require(_owner != address(0));
        return _owner;
    }

    function mockOwnerOfFor(uint _tokenId, address _owner)
        public
    {
        mockReturnValue("ownerOf", keccak256(_tokenId), bytes32(_owner));
    }

    function exists(uint _tokenId)
        public
        view
        returns (bool _exists)
    {
        return _getOwner(_tokenId) != address(0);
    }

    function addAuthorizedMintAgent(address _agent)
        public
    {
        functionCalledWithArgs("addAuthorizedMintAgent", keccak256(_agent));
    }

    function wasAddAuthorizedMintAgentCalledWith(address _agent)
        public
        view
        returns (bool _wasCalled)
    {
        return wasFunctionCalledWithArgs("addAuthorizedMintAgent", keccak256(_agent));
    }

    function pause()
        public
    {
        functionCalledWithArgs("pause", keccak256(0));
    }

    function wasPauseCalled()
        public
        view
        returns (bool _wasCalled)
    {
        return wasFunctionCalledWithArgs("pause", keccak256(0));
    }

    function _getOwner(uint _tokenId)
        private
        view
        returns (address _owner)
    {
        return address(getMockReturnValue("ownerOf", keccak256(_tokenId)));
    }

    function getFunctionList()
        internal
        returns (string[10] functionNames)
    {
        return ["create", "ownerOf", "transfer", "exists", "addAuthorizedMintAgent", "pause", "", "", "", ""];
    }
}
