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

import "../libraries/PermissionsLib.sol";


contract DummyContract {
    using PermissionsLib for PermissionsLib.Permissions;

    PermissionsLib.Permissions private firstPermissionSet;
    PermissionsLib.Permissions private secondPermissionSet;

    function authorizeInFirstSet(address agent) public {
        firstPermissionSet.authorize(agent);
    }

    function authorizeInSecondSet(address agent) public {
        secondPermissionSet.authorize(agent);
    }

    function revokeInFirstSet(address agent) public {
        firstPermissionSet.revokeAuthorization(agent);
    }

    function revokeInSecondSet(address agent) public {
        secondPermissionSet.revokeAuthorization(agent);
    }

    function isAuthorizedInFirstSet(address agent) public constant returns (bool) {
        return firstPermissionSet.isAuthorized(agent);
    }

    function isAuthorizedInSecondSet(address agent) public constant returns (bool) {
        return secondPermissionSet.isAuthorized(agent);
    }

    function getFirstSetAuthorizedAgents() public view returns (address[]) {
        return firstPermissionSet.getAuthorizedAgents();
    }

    function getSecondSetAuthorizedAgents() public view returns (address[]) {
        return secondPermissionSet.getAuthorizedAgents();
    }
}
