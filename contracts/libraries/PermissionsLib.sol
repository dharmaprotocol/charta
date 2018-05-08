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


/**
 *  Note(kayvon): these events are emitted by our PermissionsLib, but all contracts that
 *  depend on the library must also define the events in order for web3 clients to pick them up.
 *  This topic is discussed in greater detail here (under the section "Events and Libraries"):
 *  https://blog.aragon.one/library-driven-development-in-solidity-2bebcaf88736
 */
contract PermissionEvents {
    event Authorized(address indexed agent, string callingContext);
    event AuthorizationRevoked(address indexed agent, string callingContext);
}


library PermissionsLib {

    // TODO(kayvon): remove these events and inherit from PermissionEvents when libraries are
    // capable of inheritance.
    // See relevant github issue here: https://github.com/ethereum/solidity/issues/891
    event Authorized(address indexed agent, string callingContext);
    event AuthorizationRevoked(address indexed agent, string callingContext);

    struct Permissions {
        mapping (address => bool) authorized;
        mapping (address => uint) agentToIndex; // ensures O(1) look-up
        address[] authorizedAgents;
    }

    function authorize(
        Permissions storage self,
        address agent,
        string callingContext
    )
        internal
    {
        require(isNotAuthorized(self, agent));

        self.authorized[agent] = true;
        self.authorizedAgents.push(agent);
        self.agentToIndex[agent] = self.authorizedAgents.length - 1;
        Authorized(agent, callingContext);
    }

    function revokeAuthorization(
        Permissions storage self,
        address agent,
        string callingContext
    )
        internal
    {
        /* We only want to do work in the case where the agent whose
        authorization is being revoked had authorization permissions in the
        first place. */
        require(isAuthorized(self, agent));

        uint indexOfAgentToRevoke = self.agentToIndex[agent];
        uint indexOfAgentToMove = self.authorizedAgents.length - 1;
        address agentToMove = self.authorizedAgents[indexOfAgentToMove];

        // Revoke the agent's authorization.
        delete self.authorized[agent];

        // Remove the agent from our collection of authorized agents.
        self.authorizedAgents[indexOfAgentToRevoke] = agentToMove;

        // Update our indices to reflect the above changes.
        self.agentToIndex[agentToMove] = indexOfAgentToRevoke;
        delete self.agentToIndex[agent];

        // Clean up memory that's no longer being used.
        delete self.authorizedAgents[indexOfAgentToMove];
        self.authorizedAgents.length -= 1;

        AuthorizationRevoked(agent, callingContext);
    }

    function isAuthorized(Permissions storage self, address agent)
        internal
        view
        returns (bool)
    {
        return self.authorized[agent];
    }

    function isNotAuthorized(Permissions storage self, address agent)
        internal
        view
        returns (bool)
    {
        return !isAuthorized(self, agent);
    }

    function getAuthorizedAgents(Permissions storage self)
        internal
        view
        returns (address[])
    {
        return self.authorizedAgents;
    }
}
