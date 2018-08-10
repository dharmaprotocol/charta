export const PermissionEvents = 
{
  "contractName": "PermissionEvents",
  "abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "agent",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "callingContext",
          "type": "string"
        }
      ],
      "name": "Authorized",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "agent",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "callingContext",
          "type": "string"
        }
      ],
      "name": "AuthorizationRevoked",
      "type": "event"
    }
  ],
  "bytecode": "0x60606040523415600e57600080fd5b603580601b6000396000f3006060604052600080fd00a165627a7a7230582045e9a4d5a39edd9111531467e8aaccdaed0107bec33c16c27c24cb75cd3aff340029",
  "deployedBytecode": "0x6060604052600080fd00a165627a7a7230582045e9a4d5a39edd9111531467e8aaccdaed0107bec33c16c27c24cb75cd3aff340029",
  "sourceMap": "979:175:16:-;;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "979:175:16:-;;;;;",
  "source": "/*\n\n  Copyright 2017 Dharma Labs Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n*/\n\npragma solidity 0.4.18;\n\n\n/**\n *  Note(kayvon): these events are emitted by our PermissionsLib, but all contracts that\n *  depend on the library must also define the events in order for web3 clients to pick them up.\n *  This topic is discussed in greater detail here (under the section \"Events and Libraries\"):\n *  https://blog.aragon.one/library-driven-development-in-solidity-2bebcaf88736\n */\ncontract PermissionEvents {\n    event Authorized(address indexed agent, string callingContext);\n    event AuthorizationRevoked(address indexed agent, string callingContext);\n}\n\n\nlibrary PermissionsLib {\n\n    // TODO(kayvon): remove these events and inherit from PermissionEvents when libraries are\n    // capable of inheritance.\n    // See relevant github issue here: https://github.com/ethereum/solidity/issues/891\n    event Authorized(address indexed agent, string callingContext);\n    event AuthorizationRevoked(address indexed agent, string callingContext);\n\n    struct Permissions {\n        mapping (address => bool) authorized;\n        mapping (address => uint) agentToIndex; // ensures O(1) look-up\n        address[] authorizedAgents;\n    }\n\n    function authorize(\n        Permissions storage self,\n        address agent,\n        string callingContext\n    )\n        internal\n    {\n        require(isNotAuthorized(self, agent));\n\n        self.authorized[agent] = true;\n        self.authorizedAgents.push(agent);\n        self.agentToIndex[agent] = self.authorizedAgents.length - 1;\n        Authorized(agent, callingContext);\n    }\n\n    function revokeAuthorization(\n        Permissions storage self,\n        address agent,\n        string callingContext\n    )\n        internal\n    {\n        /* We only want to do work in the case where the agent whose\n        authorization is being revoked had authorization permissions in the\n        first place. */\n        require(isAuthorized(self, agent));\n\n        uint indexOfAgentToRevoke = self.agentToIndex[agent];\n        uint indexOfAgentToMove = self.authorizedAgents.length - 1;\n        address agentToMove = self.authorizedAgents[indexOfAgentToMove];\n\n        // Revoke the agent's authorization.\n        delete self.authorized[agent];\n\n        // Remove the agent from our collection of authorized agents.\n        self.authorizedAgents[indexOfAgentToRevoke] = agentToMove;\n\n        // Update our indices to reflect the above changes.\n        self.agentToIndex[agentToMove] = indexOfAgentToRevoke;\n        delete self.agentToIndex[agent];\n\n        // Clean up memory that's no longer being used.\n        delete self.authorizedAgents[indexOfAgentToMove];\n        self.authorizedAgents.length -= 1;\n\n        AuthorizationRevoked(agent, callingContext);\n    }\n\n    function isAuthorized(Permissions storage self, address agent)\n        internal\n        view\n        returns (bool)\n    {\n        return self.authorized[agent];\n    }\n\n    function isNotAuthorized(Permissions storage self, address agent)\n        internal\n        view\n        returns (bool)\n    {\n        return !isAuthorized(self, agent);\n    }\n\n    function getAuthorizedAgents(Permissions storage self)\n        internal\n        view\n        returns (address[])\n    {\n        return self.authorizedAgents;\n    }\n}\n",
  "sourcePath": "/Users/chrismin/Documents/dev/dharma/charta/contracts/libraries/PermissionsLib.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/chrismin/Documents/dev/dharma/charta/contracts/libraries/PermissionsLib.sol",
      "exportedSymbols": {
        "PermissionEvents": [
          5824
        ],
        "PermissionsLib": [
          6028
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            "0.4",
            ".18"
          ]
        },
        "id": 5811,
        "name": "PragmaDirective",
        "src": "584:23:16"
      },
      {
        "attributes": {
          "baseContracts": [
            null
          ],
          "contractDependencies": [
            null
          ],
          "contractKind": "contract",
          "documentation": " Note(kayvon): these events are emitted by our PermissionsLib, but all contracts that\n depend on the library must also define the events in order for web3 clients to pick them up.\n This topic is discussed in greater detail here (under the section \"Events and Libraries\"):\n https://blog.aragon.one/library-driven-development-in-solidity-2bebcaf88736",
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            5824
          ],
          "name": "PermissionEvents",
          "scope": 6029
        },
        "children": [
          {
            "attributes": {
              "anonymous": false,
              "name": "Authorized"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "agent",
                      "scope": 5817,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 5812,
                        "name": "ElementaryTypeName",
                        "src": "1028:7:16"
                      }
                    ],
                    "id": 5813,
                    "name": "VariableDeclaration",
                    "src": "1028:21:16"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "callingContext",
                      "scope": 5817,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string storage pointer"
                        },
                        "id": 5814,
                        "name": "ElementaryTypeName",
                        "src": "1051:6:16"
                      }
                    ],
                    "id": 5815,
                    "name": "VariableDeclaration",
                    "src": "1051:21:16"
                  }
                ],
                "id": 5816,
                "name": "ParameterList",
                "src": "1027:46:16"
              }
            ],
            "id": 5817,
            "name": "EventDefinition",
            "src": "1011:63:16"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "AuthorizationRevoked"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "agent",
                      "scope": 5823,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 5818,
                        "name": "ElementaryTypeName",
                        "src": "1106:7:16"
                      }
                    ],
                    "id": 5819,
                    "name": "VariableDeclaration",
                    "src": "1106:21:16"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "callingContext",
                      "scope": 5823,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string storage pointer"
                        },
                        "id": 5820,
                        "name": "ElementaryTypeName",
                        "src": "1129:6:16"
                      }
                    ],
                    "id": 5821,
                    "name": "VariableDeclaration",
                    "src": "1129:21:16"
                  }
                ],
                "id": 5822,
                "name": "ParameterList",
                "src": "1105:46:16"
              }
            ],
            "id": 5823,
            "name": "EventDefinition",
            "src": "1079:73:16"
          }
        ],
        "id": 5824,
        "name": "ContractDefinition",
        "src": "979:175:16"
      },
      {
        "attributes": {
          "baseContracts": [
            null
          ],
          "contractDependencies": [
            null
          ],
          "contractKind": "library",
          "documentation": null,
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            6028
          ],
          "name": "PermissionsLib",
          "scope": 6029
        },
        "children": [
          {
            "attributes": {
              "anonymous": false,
              "name": "Authorized"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "agent",
                      "scope": 5830,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 5825,
                        "name": "ElementaryTypeName",
                        "src": "1416:7:16"
                      }
                    ],
                    "id": 5826,
                    "name": "VariableDeclaration",
                    "src": "1416:21:16"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "callingContext",
                      "scope": 5830,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string storage pointer"
                        },
                        "id": 5827,
                        "name": "ElementaryTypeName",
                        "src": "1439:6:16"
                      }
                    ],
                    "id": 5828,
                    "name": "VariableDeclaration",
                    "src": "1439:21:16"
                  }
                ],
                "id": 5829,
                "name": "ParameterList",
                "src": "1415:46:16"
              }
            ],
            "id": 5830,
            "name": "EventDefinition",
            "src": "1399:63:16"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "AuthorizationRevoked"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "agent",
                      "scope": 5836,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 5831,
                        "name": "ElementaryTypeName",
                        "src": "1494:7:16"
                      }
                    ],
                    "id": 5832,
                    "name": "VariableDeclaration",
                    "src": "1494:21:16"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "callingContext",
                      "scope": 5836,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string storage pointer"
                        },
                        "id": 5833,
                        "name": "ElementaryTypeName",
                        "src": "1517:6:16"
                      }
                    ],
                    "id": 5834,
                    "name": "VariableDeclaration",
                    "src": "1517:21:16"
                  }
                ],
                "id": 5835,
                "name": "ParameterList",
                "src": "1493:46:16"
              }
            ],
            "id": 5836,
            "name": "EventDefinition",
            "src": "1467:73:16"
          },
          {
            "attributes": {
              "canonicalName": "PermissionsLib.Permissions",
              "name": "Permissions",
              "scope": 6028,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "constant": false,
                  "name": "authorized",
                  "scope": 5848,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "mapping(address => bool)",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "type": "mapping(address => bool)"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 5837,
                        "name": "ElementaryTypeName",
                        "src": "1584:7:16"
                      },
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 5838,
                        "name": "ElementaryTypeName",
                        "src": "1595:4:16"
                      }
                    ],
                    "id": 5839,
                    "name": "Mapping",
                    "src": "1575:25:16"
                  }
                ],
                "id": 5840,
                "name": "VariableDeclaration",
                "src": "1575:36:16"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "agentToIndex",
                  "scope": 5848,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "mapping(address => uint256)",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "type": "mapping(address => uint256)"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 5841,
                        "name": "ElementaryTypeName",
                        "src": "1630:7:16"
                      },
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 5842,
                        "name": "ElementaryTypeName",
                        "src": "1641:4:16"
                      }
                    ],
                    "id": 5843,
                    "name": "Mapping",
                    "src": "1621:25:16"
                  }
                ],
                "id": 5844,
                "name": "VariableDeclaration",
                "src": "1621:38:16"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "authorizedAgents",
                  "scope": 5848,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "address[] storage pointer",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "length": null,
                      "type": "address[] storage pointer"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 5845,
                        "name": "ElementaryTypeName",
                        "src": "1693:7:16"
                      }
                    ],
                    "id": 5846,
                    "name": "ArrayTypeName",
                    "src": "1693:9:16"
                  }
                ],
                "id": 5847,
                "name": "VariableDeclaration",
                "src": "1693:26:16"
              }
            ],
            "id": 5848,
            "name": "StructDefinition",
            "src": "1546:180:16"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "authorize",
              "payable": false,
              "scope": 6028,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "self",
                      "scope": 5898,
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "type": "struct PermissionsLib.Permissions storage pointer",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "contractScope": null,
                          "name": "Permissions",
                          "referencedDeclaration": 5848,
                          "type": "struct PermissionsLib.Permissions storage pointer"
                        },
                        "id": 5849,
                        "name": "UserDefinedTypeName",
                        "src": "1760:11:16"
                      }
                    ],
                    "id": 5850,
                    "name": "VariableDeclaration",
                    "src": "1760:24:16"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agent",
                      "scope": 5898,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 5851,
                        "name": "ElementaryTypeName",
                        "src": "1794:7:16"
                      }
                    ],
                    "id": 5852,
                    "name": "VariableDeclaration",
                    "src": "1794:13:16"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "callingContext",
                      "scope": 5898,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string storage pointer"
                        },
                        "id": 5853,
                        "name": "ElementaryTypeName",
                        "src": "1817:6:16"
                      }
                    ],
                    "id": 5854,
                    "name": "VariableDeclaration",
                    "src": "1817:21:16"
                  }
                ],
                "id": 5855,
                "name": "ParameterList",
                "src": "1750:94:16"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 5856,
                "name": "ParameterList",
                "src": "1866:0:16"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 11810,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 5857,
                            "name": "Identifier",
                            "src": "1876:7:16"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "bool",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_struct$_Permissions_$5848_storage_ptr",
                                      "typeString": "struct PermissionsLib.Permissions storage pointer"
                                    },
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 6015,
                                  "type": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)",
                                  "value": "isNotAuthorized"
                                },
                                "id": 5858,
                                "name": "Identifier",
                                "src": "1884:15:16"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5850,
                                  "type": "struct PermissionsLib.Permissions storage pointer",
                                  "value": "self"
                                },
                                "id": 5859,
                                "name": "Identifier",
                                "src": "1900:4:16"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5852,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 5860,
                                "name": "Identifier",
                                "src": "1906:5:16"
                              }
                            ],
                            "id": 5861,
                            "name": "FunctionCall",
                            "src": "1884:28:16"
                          }
                        ],
                        "id": 5862,
                        "name": "FunctionCall",
                        "src": "1876:37:16"
                      }
                    ],
                    "id": 5863,
                    "name": "ExpressionStatement",
                    "src": "1876:37:16"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "authorized",
                                  "referencedDeclaration": 5840,
                                  "type": "mapping(address => bool)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5850,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 5864,
                                    "name": "Identifier",
                                    "src": "1924:4:16"
                                  }
                                ],
                                "id": 5867,
                                "name": "MemberAccess",
                                "src": "1924:15:16"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5852,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 5866,
                                "name": "Identifier",
                                "src": "1940:5:16"
                              }
                            ],
                            "id": 5868,
                            "name": "IndexAccess",
                            "src": "1924:22:16"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "74727565",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "bool",
                              "type": "bool",
                              "value": "true"
                            },
                            "id": 5869,
                            "name": "Literal",
                            "src": "1949:4:16"
                          }
                        ],
                        "id": 5870,
                        "name": "Assignment",
                        "src": "1924:29:16"
                      }
                    ],
                    "id": 5871,
                    "name": "ExpressionStatement",
                    "src": "1924:29:16"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "uint256",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "push",
                              "referencedDeclaration": null,
                              "type": "function (address) returns (uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "authorizedAgents",
                                  "referencedDeclaration": 5847,
                                  "type": "address[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5850,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 5872,
                                    "name": "Identifier",
                                    "src": "1963:4:16"
                                  }
                                ],
                                "id": 5875,
                                "name": "MemberAccess",
                                "src": "1963:21:16"
                              }
                            ],
                            "id": 5876,
                            "name": "MemberAccess",
                            "src": "1963:26:16"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5852,
                              "type": "address",
                              "value": "agent"
                            },
                            "id": 5877,
                            "name": "Identifier",
                            "src": "1990:5:16"
                          }
                        ],
                        "id": 5878,
                        "name": "FunctionCall",
                        "src": "1963:33:16"
                      }
                    ],
                    "id": 5879,
                    "name": "ExpressionStatement",
                    "src": "1963:33:16"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "agentToIndex",
                                  "referencedDeclaration": 5844,
                                  "type": "mapping(address => uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5850,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 5880,
                                    "name": "Identifier",
                                    "src": "2006:4:16"
                                  }
                                ],
                                "id": 5883,
                                "name": "MemberAccess",
                                "src": "2006:17:16"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5852,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 5882,
                                "name": "Identifier",
                                "src": "2024:5:16"
                              }
                            ],
                            "id": 5884,
                            "name": "IndexAccess",
                            "src": "2006:24:16"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "-",
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "length",
                                  "referencedDeclaration": null,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "authorizedAgents",
                                      "referencedDeclaration": 5847,
                                      "type": "address[] storage ref"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 5850,
                                          "type": "struct PermissionsLib.Permissions storage pointer",
                                          "value": "self"
                                        },
                                        "id": 5885,
                                        "name": "Identifier",
                                        "src": "2033:4:16"
                                      }
                                    ],
                                    "id": 5886,
                                    "name": "MemberAccess",
                                    "src": "2033:21:16"
                                  }
                                ],
                                "id": 5887,
                                "name": "MemberAccess",
                                "src": "2033:28:16"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "31",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 1",
                                  "value": "1"
                                },
                                "id": 5888,
                                "name": "Literal",
                                "src": "2064:1:16"
                              }
                            ],
                            "id": 5889,
                            "name": "BinaryOperation",
                            "src": "2033:32:16"
                          }
                        ],
                        "id": 5890,
                        "name": "Assignment",
                        "src": "2006:59:16"
                      }
                    ],
                    "id": 5891,
                    "name": "ExpressionStatement",
                    "src": "2006:59:16"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5830,
                              "type": "function (address,string memory)",
                              "value": "Authorized"
                            },
                            "id": 5892,
                            "name": "Identifier",
                            "src": "2075:10:16"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5852,
                              "type": "address",
                              "value": "agent"
                            },
                            "id": 5893,
                            "name": "Identifier",
                            "src": "2086:5:16"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5854,
                              "type": "string memory",
                              "value": "callingContext"
                            },
                            "id": 5894,
                            "name": "Identifier",
                            "src": "2093:14:16"
                          }
                        ],
                        "id": 5895,
                        "name": "FunctionCall",
                        "src": "2075:33:16"
                      }
                    ],
                    "id": 5896,
                    "name": "ExpressionStatement",
                    "src": "2075:33:16"
                  }
                ],
                "id": 5897,
                "name": "Block",
                "src": "1866:249:16"
              }
            ],
            "id": 5898,
            "name": "FunctionDefinition",
            "src": "1732:383:16"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "revokeAuthorization",
              "payable": false,
              "scope": 6028,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "self",
                      "scope": 5984,
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "type": "struct PermissionsLib.Permissions storage pointer",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "contractScope": null,
                          "name": "Permissions",
                          "referencedDeclaration": 5848,
                          "type": "struct PermissionsLib.Permissions storage pointer"
                        },
                        "id": 5899,
                        "name": "UserDefinedTypeName",
                        "src": "2159:11:16"
                      }
                    ],
                    "id": 5900,
                    "name": "VariableDeclaration",
                    "src": "2159:24:16"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agent",
                      "scope": 5984,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 5901,
                        "name": "ElementaryTypeName",
                        "src": "2193:7:16"
                      }
                    ],
                    "id": 5902,
                    "name": "VariableDeclaration",
                    "src": "2193:13:16"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "callingContext",
                      "scope": 5984,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string storage pointer"
                        },
                        "id": 5903,
                        "name": "ElementaryTypeName",
                        "src": "2216:6:16"
                      }
                    ],
                    "id": 5904,
                    "name": "VariableDeclaration",
                    "src": "2216:21:16"
                  }
                ],
                "id": 5905,
                "name": "ParameterList",
                "src": "2149:94:16"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 5906,
                "name": "ParameterList",
                "src": "2265:0:16"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 11810,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 5907,
                            "name": "Identifier",
                            "src": "2444:7:16"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "bool",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_struct$_Permissions_$5848_storage_ptr",
                                      "typeString": "struct PermissionsLib.Permissions storage pointer"
                                    },
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5999,
                                  "type": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)",
                                  "value": "isAuthorized"
                                },
                                "id": 5908,
                                "name": "Identifier",
                                "src": "2452:12:16"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5900,
                                  "type": "struct PermissionsLib.Permissions storage pointer",
                                  "value": "self"
                                },
                                "id": 5909,
                                "name": "Identifier",
                                "src": "2465:4:16"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5902,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 5910,
                                "name": "Identifier",
                                "src": "2471:5:16"
                              }
                            ],
                            "id": 5911,
                            "name": "FunctionCall",
                            "src": "2452:25:16"
                          }
                        ],
                        "id": 5912,
                        "name": "FunctionCall",
                        "src": "2444:34:16"
                      }
                    ],
                    "id": 5913,
                    "name": "ExpressionStatement",
                    "src": "2444:34:16"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        5915
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "indexOfAgentToRevoke",
                          "scope": 5984,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 5914,
                            "name": "ElementaryTypeName",
                            "src": "2489:4:16"
                          }
                        ],
                        "id": 5915,
                        "name": "VariableDeclaration",
                        "src": "2489:25:16"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "agentToIndex",
                              "referencedDeclaration": 5844,
                              "type": "mapping(address => uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5900,
                                  "type": "struct PermissionsLib.Permissions storage pointer",
                                  "value": "self"
                                },
                                "id": 5916,
                                "name": "Identifier",
                                "src": "2517:4:16"
                              }
                            ],
                            "id": 5917,
                            "name": "MemberAccess",
                            "src": "2517:17:16"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5902,
                              "type": "address",
                              "value": "agent"
                            },
                            "id": 5918,
                            "name": "Identifier",
                            "src": "2535:5:16"
                          }
                        ],
                        "id": 5919,
                        "name": "IndexAccess",
                        "src": "2517:24:16"
                      }
                    ],
                    "id": 5920,
                    "name": "VariableDeclarationStatement",
                    "src": "2489:52:16"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        5922
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "indexOfAgentToMove",
                          "scope": 5984,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 5921,
                            "name": "ElementaryTypeName",
                            "src": "2551:4:16"
                          }
                        ],
                        "id": 5922,
                        "name": "VariableDeclaration",
                        "src": "2551:23:16"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "-",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "length",
                              "referencedDeclaration": null,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "authorizedAgents",
                                  "referencedDeclaration": 5847,
                                  "type": "address[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5900,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 5923,
                                    "name": "Identifier",
                                    "src": "2577:4:16"
                                  }
                                ],
                                "id": 5924,
                                "name": "MemberAccess",
                                "src": "2577:21:16"
                              }
                            ],
                            "id": 5925,
                            "name": "MemberAccess",
                            "src": "2577:28:16"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "31",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 1",
                              "value": "1"
                            },
                            "id": 5926,
                            "name": "Literal",
                            "src": "2608:1:16"
                          }
                        ],
                        "id": 5927,
                        "name": "BinaryOperation",
                        "src": "2577:32:16"
                      }
                    ],
                    "id": 5928,
                    "name": "VariableDeclarationStatement",
                    "src": "2551:58:16"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        5930
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "agentToMove",
                          "scope": 5984,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "address",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "address",
                              "type": "address"
                            },
                            "id": 5929,
                            "name": "ElementaryTypeName",
                            "src": "2619:7:16"
                          }
                        ],
                        "id": 5930,
                        "name": "VariableDeclaration",
                        "src": "2619:19:16"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "authorizedAgents",
                              "referencedDeclaration": 5847,
                              "type": "address[] storage ref"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5900,
                                  "type": "struct PermissionsLib.Permissions storage pointer",
                                  "value": "self"
                                },
                                "id": 5931,
                                "name": "Identifier",
                                "src": "2641:4:16"
                              }
                            ],
                            "id": 5932,
                            "name": "MemberAccess",
                            "src": "2641:21:16"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5922,
                              "type": "uint256",
                              "value": "indexOfAgentToMove"
                            },
                            "id": 5933,
                            "name": "Identifier",
                            "src": "2663:18:16"
                          }
                        ],
                        "id": 5934,
                        "name": "IndexAccess",
                        "src": "2641:41:16"
                      }
                    ],
                    "id": 5935,
                    "name": "VariableDeclarationStatement",
                    "src": "2619:63:16"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "delete",
                          "prefix": true,
                          "type": "tuple()"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "authorized",
                                  "referencedDeclaration": 5840,
                                  "type": "mapping(address => bool)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5900,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 5936,
                                    "name": "Identifier",
                                    "src": "2745:4:16"
                                  }
                                ],
                                "id": 5937,
                                "name": "MemberAccess",
                                "src": "2745:15:16"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5902,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 5938,
                                "name": "Identifier",
                                "src": "2761:5:16"
                              }
                            ],
                            "id": 5939,
                            "name": "IndexAccess",
                            "src": "2745:22:16"
                          }
                        ],
                        "id": 5940,
                        "name": "UnaryOperation",
                        "src": "2738:29:16"
                      }
                    ],
                    "id": 5941,
                    "name": "ExpressionStatement",
                    "src": "2738:29:16"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "authorizedAgents",
                                  "referencedDeclaration": 5847,
                                  "type": "address[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5900,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 5942,
                                    "name": "Identifier",
                                    "src": "2848:4:16"
                                  }
                                ],
                                "id": 5945,
                                "name": "MemberAccess",
                                "src": "2848:21:16"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5915,
                                  "type": "uint256",
                                  "value": "indexOfAgentToRevoke"
                                },
                                "id": 5944,
                                "name": "Identifier",
                                "src": "2870:20:16"
                              }
                            ],
                            "id": 5946,
                            "name": "IndexAccess",
                            "src": "2848:43:16"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5930,
                              "type": "address",
                              "value": "agentToMove"
                            },
                            "id": 5947,
                            "name": "Identifier",
                            "src": "2894:11:16"
                          }
                        ],
                        "id": 5948,
                        "name": "Assignment",
                        "src": "2848:57:16"
                      }
                    ],
                    "id": 5949,
                    "name": "ExpressionStatement",
                    "src": "2848:57:16"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "agentToIndex",
                                  "referencedDeclaration": 5844,
                                  "type": "mapping(address => uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5900,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 5950,
                                    "name": "Identifier",
                                    "src": "2976:4:16"
                                  }
                                ],
                                "id": 5953,
                                "name": "MemberAccess",
                                "src": "2976:17:16"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5930,
                                  "type": "address",
                                  "value": "agentToMove"
                                },
                                "id": 5952,
                                "name": "Identifier",
                                "src": "2994:11:16"
                              }
                            ],
                            "id": 5954,
                            "name": "IndexAccess",
                            "src": "2976:30:16"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5915,
                              "type": "uint256",
                              "value": "indexOfAgentToRevoke"
                            },
                            "id": 5955,
                            "name": "Identifier",
                            "src": "3009:20:16"
                          }
                        ],
                        "id": 5956,
                        "name": "Assignment",
                        "src": "2976:53:16"
                      }
                    ],
                    "id": 5957,
                    "name": "ExpressionStatement",
                    "src": "2976:53:16"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "delete",
                          "prefix": true,
                          "type": "tuple()"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "agentToIndex",
                                  "referencedDeclaration": 5844,
                                  "type": "mapping(address => uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5900,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 5958,
                                    "name": "Identifier",
                                    "src": "3046:4:16"
                                  }
                                ],
                                "id": 5959,
                                "name": "MemberAccess",
                                "src": "3046:17:16"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5902,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 5960,
                                "name": "Identifier",
                                "src": "3064:5:16"
                              }
                            ],
                            "id": 5961,
                            "name": "IndexAccess",
                            "src": "3046:24:16"
                          }
                        ],
                        "id": 5962,
                        "name": "UnaryOperation",
                        "src": "3039:31:16"
                      }
                    ],
                    "id": 5963,
                    "name": "ExpressionStatement",
                    "src": "3039:31:16"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "delete",
                          "prefix": true,
                          "type": "tuple()"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "authorizedAgents",
                                  "referencedDeclaration": 5847,
                                  "type": "address[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5900,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 5964,
                                    "name": "Identifier",
                                    "src": "3144:4:16"
                                  }
                                ],
                                "id": 5965,
                                "name": "MemberAccess",
                                "src": "3144:21:16"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5922,
                                  "type": "uint256",
                                  "value": "indexOfAgentToMove"
                                },
                                "id": 5966,
                                "name": "Identifier",
                                "src": "3166:18:16"
                              }
                            ],
                            "id": 5967,
                            "name": "IndexAccess",
                            "src": "3144:41:16"
                          }
                        ],
                        "id": 5968,
                        "name": "UnaryOperation",
                        "src": "3137:48:16"
                      }
                    ],
                    "id": 5969,
                    "name": "ExpressionStatement",
                    "src": "3137:48:16"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "-=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "member_name": "length",
                              "referencedDeclaration": null,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "authorizedAgents",
                                  "referencedDeclaration": 5847,
                                  "type": "address[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5900,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 5970,
                                    "name": "Identifier",
                                    "src": "3195:4:16"
                                  }
                                ],
                                "id": 5973,
                                "name": "MemberAccess",
                                "src": "3195:21:16"
                              }
                            ],
                            "id": 5974,
                            "name": "MemberAccess",
                            "src": "3195:28:16"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "31",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 1",
                              "value": "1"
                            },
                            "id": 5975,
                            "name": "Literal",
                            "src": "3227:1:16"
                          }
                        ],
                        "id": 5976,
                        "name": "Assignment",
                        "src": "3195:33:16"
                      }
                    ],
                    "id": 5977,
                    "name": "ExpressionStatement",
                    "src": "3195:33:16"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5836,
                              "type": "function (address,string memory)",
                              "value": "AuthorizationRevoked"
                            },
                            "id": 5978,
                            "name": "Identifier",
                            "src": "3239:20:16"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5902,
                              "type": "address",
                              "value": "agent"
                            },
                            "id": 5979,
                            "name": "Identifier",
                            "src": "3260:5:16"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5904,
                              "type": "string memory",
                              "value": "callingContext"
                            },
                            "id": 5980,
                            "name": "Identifier",
                            "src": "3267:14:16"
                          }
                        ],
                        "id": 5981,
                        "name": "FunctionCall",
                        "src": "3239:43:16"
                      }
                    ],
                    "id": 5982,
                    "name": "ExpressionStatement",
                    "src": "3239:43:16"
                  }
                ],
                "id": 5983,
                "name": "Block",
                "src": "2265:1024:16"
              }
            ],
            "id": 5984,
            "name": "FunctionDefinition",
            "src": "2121:1168:16"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "isAuthorized",
              "payable": false,
              "scope": 6028,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "self",
                      "scope": 5999,
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "type": "struct PermissionsLib.Permissions storage pointer",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "contractScope": null,
                          "name": "Permissions",
                          "referencedDeclaration": 5848,
                          "type": "struct PermissionsLib.Permissions storage pointer"
                        },
                        "id": 5985,
                        "name": "UserDefinedTypeName",
                        "src": "3317:11:16"
                      }
                    ],
                    "id": 5986,
                    "name": "VariableDeclaration",
                    "src": "3317:24:16"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agent",
                      "scope": 5999,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 5987,
                        "name": "ElementaryTypeName",
                        "src": "3343:7:16"
                      }
                    ],
                    "id": 5988,
                    "name": "VariableDeclaration",
                    "src": "3343:13:16"
                  }
                ],
                "id": 5989,
                "name": "ParameterList",
                "src": "3316:41:16"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 5999,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 5990,
                        "name": "ElementaryTypeName",
                        "src": "3405:4:16"
                      }
                    ],
                    "id": 5991,
                    "name": "VariableDeclaration",
                    "src": "3405:4:16"
                  }
                ],
                "id": 5992,
                "name": "ParameterList",
                "src": "3404:6:16"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 5992
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "authorized",
                              "referencedDeclaration": 5840,
                              "type": "mapping(address => bool)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5986,
                                  "type": "struct PermissionsLib.Permissions storage pointer",
                                  "value": "self"
                                },
                                "id": 5993,
                                "name": "Identifier",
                                "src": "3432:4:16"
                              }
                            ],
                            "id": 5994,
                            "name": "MemberAccess",
                            "src": "3432:15:16"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5988,
                              "type": "address",
                              "value": "agent"
                            },
                            "id": 5995,
                            "name": "Identifier",
                            "src": "3448:5:16"
                          }
                        ],
                        "id": 5996,
                        "name": "IndexAccess",
                        "src": "3432:22:16"
                      }
                    ],
                    "id": 5997,
                    "name": "Return",
                    "src": "3425:29:16"
                  }
                ],
                "id": 5998,
                "name": "Block",
                "src": "3415:46:16"
              }
            ],
            "id": 5999,
            "name": "FunctionDefinition",
            "src": "3295:166:16"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "isNotAuthorized",
              "payable": false,
              "scope": 6028,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "self",
                      "scope": 6015,
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "type": "struct PermissionsLib.Permissions storage pointer",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "contractScope": null,
                          "name": "Permissions",
                          "referencedDeclaration": 5848,
                          "type": "struct PermissionsLib.Permissions storage pointer"
                        },
                        "id": 6000,
                        "name": "UserDefinedTypeName",
                        "src": "3492:11:16"
                      }
                    ],
                    "id": 6001,
                    "name": "VariableDeclaration",
                    "src": "3492:24:16"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agent",
                      "scope": 6015,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 6002,
                        "name": "ElementaryTypeName",
                        "src": "3518:7:16"
                      }
                    ],
                    "id": 6003,
                    "name": "VariableDeclaration",
                    "src": "3518:13:16"
                  }
                ],
                "id": 6004,
                "name": "ParameterList",
                "src": "3491:41:16"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 6015,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 6005,
                        "name": "ElementaryTypeName",
                        "src": "3580:4:16"
                      }
                    ],
                    "id": 6006,
                    "name": "VariableDeclaration",
                    "src": "3580:4:16"
                  }
                ],
                "id": 6007,
                "name": "ParameterList",
                "src": "3579:6:16"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 6007
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "!",
                          "prefix": true,
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "bool",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_struct$_Permissions_$5848_storage_ptr",
                                      "typeString": "struct PermissionsLib.Permissions storage pointer"
                                    },
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5999,
                                  "type": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)",
                                  "value": "isAuthorized"
                                },
                                "id": 6008,
                                "name": "Identifier",
                                "src": "3608:12:16"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 6001,
                                  "type": "struct PermissionsLib.Permissions storage pointer",
                                  "value": "self"
                                },
                                "id": 6009,
                                "name": "Identifier",
                                "src": "3621:4:16"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 6003,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 6010,
                                "name": "Identifier",
                                "src": "3627:5:16"
                              }
                            ],
                            "id": 6011,
                            "name": "FunctionCall",
                            "src": "3608:25:16"
                          }
                        ],
                        "id": 6012,
                        "name": "UnaryOperation",
                        "src": "3607:26:16"
                      }
                    ],
                    "id": 6013,
                    "name": "Return",
                    "src": "3600:33:16"
                  }
                ],
                "id": 6014,
                "name": "Block",
                "src": "3590:50:16"
              }
            ],
            "id": 6015,
            "name": "FunctionDefinition",
            "src": "3467:173:16"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getAuthorizedAgents",
              "payable": false,
              "scope": 6028,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "self",
                      "scope": 6027,
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "type": "struct PermissionsLib.Permissions storage pointer",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "contractScope": null,
                          "name": "Permissions",
                          "referencedDeclaration": 5848,
                          "type": "struct PermissionsLib.Permissions storage pointer"
                        },
                        "id": 6016,
                        "name": "UserDefinedTypeName",
                        "src": "3675:11:16"
                      }
                    ],
                    "id": 6017,
                    "name": "VariableDeclaration",
                    "src": "3675:24:16"
                  }
                ],
                "id": 6018,
                "name": "ParameterList",
                "src": "3674:26:16"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 6027,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address[] memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "length": null,
                          "type": "address[] storage pointer"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "address",
                              "type": "address"
                            },
                            "id": 6019,
                            "name": "ElementaryTypeName",
                            "src": "3748:7:16"
                          }
                        ],
                        "id": 6020,
                        "name": "ArrayTypeName",
                        "src": "3748:9:16"
                      }
                    ],
                    "id": 6021,
                    "name": "VariableDeclaration",
                    "src": "3748:9:16"
                  }
                ],
                "id": 6022,
                "name": "ParameterList",
                "src": "3747:11:16"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 6022
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "member_name": "authorizedAgents",
                          "referencedDeclaration": 5847,
                          "type": "address[] storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 6017,
                              "type": "struct PermissionsLib.Permissions storage pointer",
                              "value": "self"
                            },
                            "id": 6023,
                            "name": "Identifier",
                            "src": "3780:4:16"
                          }
                        ],
                        "id": 6024,
                        "name": "MemberAccess",
                        "src": "3780:21:16"
                      }
                    ],
                    "id": 6025,
                    "name": "Return",
                    "src": "3773:28:16"
                  }
                ],
                "id": 6026,
                "name": "Block",
                "src": "3763:45:16"
              }
            ],
            "id": 6027,
            "name": "FunctionDefinition",
            "src": "3646:162:16"
          }
        ],
        "id": 6028,
        "name": "ContractDefinition",
        "src": "1157:2653:16"
      }
    ],
    "id": 6029,
    "name": "SourceUnit",
    "src": "584:3227:16"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-07-24T01:55:45.017Z"
}