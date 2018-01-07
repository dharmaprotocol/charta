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


contract MockContract {
    bytes32 internal constant DEFAULT_SIGNATURE_ARGS = bytes32(0);

    // We use bytes32 as our generic base type from and to which we cast all other types
    mapping (string => bytes32[]) internal functionCallSignatures;
    mapping (string => mapping (bytes32 => bytes32)) internal mockedReturnValue;
    mapping (string => mapping (bytes32 => bool)) internal functionCalls;

    function mockReturnValue(
        string functionName,
        bytes32 argsSignature,
        bytes32 returnValue
    ) public {
        functionCallSignatures[functionName].push(argsSignature);
        mockedReturnValue[functionName][argsSignature] = returnValue;
    }

    function getMockReturnValue(string functionName, bytes32 argsSignature)
        public
        view
        returns (bytes32 _mockReturnValue)
    {
        return mockedReturnValue[functionName][argsSignature];
    }

    function reset() public {
        for (uint i = 0; i < 10; i++) {
            string memory functionName = getFunctionList()[i];

            if (bytes(functionName).length != 0) {
                for (uint j = 0; j < functionCallSignatures[functionName].length; j++) {
                    bytes32 callSignature = functionCallSignatures[functionName][j];
                    delete functionCalls[functionName][callSignature];
                    delete mockedReturnValue[functionName][callSignature];
                }

                delete functionCallSignatures[functionName];
            }
        }
    }

    function functionCalledWithArgs(string functionName, bytes32 args)
        internal
    {
        functionCalls[functionName][args] = true;
        functionCallSignatures[functionName].push(args);
    }

    function wasFunctionCalledWithArgs(string functionName, bytes32 args)
        internal
        view
        returns (bool wasCalled)
    {
        return functionCalls[functionName][args];
    }

    function getFunctionList() internal returns (string[10] functionNames);
}
