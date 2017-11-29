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


library PermissionsLib {
    struct Permissions {
        mapping (address => bool) authorized;
        address[] authorizedAgents;
    }

    function authorize(Permissions storage self, address agent)
        internal
    {
        if (!self.authorized[agent]) {
            self.authorized[agent] = true;
            self.authorizedAgents.push(agent);
        }
    }

    function revokeAuthorization(Permissions storage self, address agent)
        internal
    {
        delete self.authorized[agent];
        for (uint i = 0; i < self.authorizedAgents.length; i++) {
            if (self.authorizedAgents[i] == agent) {
                self.authorizedAgents[i] =
                    self.authorizedAgents[self.authorizedAgents.length - 1];
                self.authorizedAgents.length -= 1;
                break;
            }
        }
    }

    function isAuthorized(Permissions storage self, address agent)
        internal
        view
        returns (bool)
    {
        return self.authorized[agent];
    }

    function getAuthorizedAgents(Permissions storage self)
        internal
        view
        returns (address[])
    {
        return self.authorizedAgents;
    }
}
