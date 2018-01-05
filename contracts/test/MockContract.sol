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
    string[] public functionList;

    // We use bytes32 as our generic base type from and to which we cast all other types
    mapping (string => bytes32) internal mockedReturnValue;
    mapping (string => bytes32[10]) internal mostRecentFunctionCallArgs;

    function mockReturnValue(
        string functionName,
        bytes32 returnValue
    ) public {
        mockedReturnValue[functionName] = returnValue;
    }

    function getMockReturnValue(string functionName)
        public
        view
        returns (bytes32 _mockReturnValue)
    {
        return mockedReturnValue[functionName];
    }

    function reset() public {
        for (uint i = 0; i < functionList.length; i++) {
            delete mockedReturnValue[functionList[i]];
            delete mostRecentFunctionCallArgs[functionList[i]];
        }
    }

    function functionCalledWithArgs(string functionName, bytes32[10] args)
        internal
    {
        mostRecentFunctionCallArgs[functionName] = args;
    }

    function wasFunctionCalledWithArgs(string functionName, bytes32[10] args)
        internal
        view
        returns (bool wasCalled)
    {
        if (args.length != mostRecentFunctionCallArgs[functionName].length) {
            return false;
        }

        for (uint i = 0; i < args.length; i++) {
            if (args[i] != mostRecentFunctionCallArgs[functionName][i]) {
                return false;
            }
        }

        return true;
    }
}
