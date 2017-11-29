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
        mapping (address => bool) authorizedAgents;
        address[] authorizedAgentsList;
    }

    function authorize(Permissions self, address agent)
        internal
    {
        if (!self.authorizedAgents[agent]) {
            self.authorizedAgents[agent] = true;
            authorizedAgentList.push(agent);
        }
    }

    function isAuthorized(Permissions self, address agent)
        internal
        returns (bool)
    {
        return self.authorizedAgents[agent];
    }

    function getAuthorizedAgents(Permissions self)
        internal
        returns (address[])
    {
        return self.authorizedAgentsList;
    }
}
