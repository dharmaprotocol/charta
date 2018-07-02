export const PermissionsLib = 
{
  "contractName": "PermissionsLib",
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
  "bytecode": "0x60606040523415600e57600080fd5b603580601b6000396000f3006060604052600080fd00a165627a7a723058201ff61aea59558d35e25c9f807451839e95262b2a34f9a583d1f41d40fa30c99e0029",
  "deployedBytecode": "0x6060604052600080fd00a165627a7a723058201ff61aea59558d35e25c9f807451839e95262b2a34f9a583d1f41d40fa30c99e0029",
  "sourceMap": "1157:2653:13:-;;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "1157:2653:13:-;;;;;",
  "source": "/*\n\n  Copyright 2017 Dharma Labs Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n*/\n\npragma solidity 0.4.18;\n\n\n/**\n *  Note(kayvon): these events are emitted by our PermissionsLib, but all contracts that\n *  depend on the library must also define the events in order for web3 clients to pick them up.\n *  This topic is discussed in greater detail here (under the section \"Events and Libraries\"):\n *  https://blog.aragon.one/library-driven-development-in-solidity-2bebcaf88736\n */\ncontract PermissionEvents {\n    event Authorized(address indexed agent, string callingContext);\n    event AuthorizationRevoked(address indexed agent, string callingContext);\n}\n\n\nlibrary PermissionsLib {\n\n    // TODO(kayvon): remove these events and inherit from PermissionEvents when libraries are\n    // capable of inheritance.\n    // See relevant github issue here: https://github.com/ethereum/solidity/issues/891\n    event Authorized(address indexed agent, string callingContext);\n    event AuthorizationRevoked(address indexed agent, string callingContext);\n\n    struct Permissions {\n        mapping (address => bool) authorized;\n        mapping (address => uint) agentToIndex; // ensures O(1) look-up\n        address[] authorizedAgents;\n    }\n\n    function authorize(\n        Permissions storage self,\n        address agent,\n        string callingContext\n    )\n        internal\n    {\n        require(isNotAuthorized(self, agent));\n\n        self.authorized[agent] = true;\n        self.authorizedAgents.push(agent);\n        self.agentToIndex[agent] = self.authorizedAgents.length - 1;\n        Authorized(agent, callingContext);\n    }\n\n    function revokeAuthorization(\n        Permissions storage self,\n        address agent,\n        string callingContext\n    )\n        internal\n    {\n        /* We only want to do work in the case where the agent whose\n        authorization is being revoked had authorization permissions in the\n        first place. */\n        require(isAuthorized(self, agent));\n\n        uint indexOfAgentToRevoke = self.agentToIndex[agent];\n        uint indexOfAgentToMove = self.authorizedAgents.length - 1;\n        address agentToMove = self.authorizedAgents[indexOfAgentToMove];\n\n        // Revoke the agent's authorization.\n        delete self.authorized[agent];\n\n        // Remove the agent from our collection of authorized agents.\n        self.authorizedAgents[indexOfAgentToRevoke] = agentToMove;\n\n        // Update our indices to reflect the above changes.\n        self.agentToIndex[agentToMove] = indexOfAgentToRevoke;\n        delete self.agentToIndex[agent];\n\n        // Clean up memory that's no longer being used.\n        delete self.authorizedAgents[indexOfAgentToMove];\n        self.authorizedAgents.length -= 1;\n\n        AuthorizationRevoked(agent, callingContext);\n    }\n\n    function isAuthorized(Permissions storage self, address agent)\n        internal\n        view\n        returns (bool)\n    {\n        return self.authorized[agent];\n    }\n\n    function isNotAuthorized(Permissions storage self, address agent)\n        internal\n        view\n        returns (bool)\n    {\n        return !isAuthorized(self, agent);\n    }\n\n    function getAuthorizedAgents(Permissions storage self)\n        internal\n        view\n        returns (address[])\n    {\n        return self.authorizedAgents;\n    }\n}\n",
  "sourcePath": "/Users/kayvon/dharma/charta/contracts/libraries/PermissionsLib.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/kayvon/dharma/charta/contracts/libraries/PermissionsLib.sol",
      "exportedSymbols": {
        "PermissionEvents": [
          4517
        ],
        "PermissionsLib": [
          4721
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
        "id": 4504,
        "name": "PragmaDirective",
        "src": "584:23:13"
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
            4517
          ],
          "name": "PermissionEvents",
          "scope": 4722
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
                      "scope": 4510,
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
                        "id": 4505,
                        "name": "ElementaryTypeName",
                        "src": "1028:7:13"
                      }
                    ],
                    "id": 4506,
                    "name": "VariableDeclaration",
                    "src": "1028:21:13"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "callingContext",
                      "scope": 4510,
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
                        "id": 4507,
                        "name": "ElementaryTypeName",
                        "src": "1051:6:13"
                      }
                    ],
                    "id": 4508,
                    "name": "VariableDeclaration",
                    "src": "1051:21:13"
                  }
                ],
                "id": 4509,
                "name": "ParameterList",
                "src": "1027:46:13"
              }
            ],
            "id": 4510,
            "name": "EventDefinition",
            "src": "1011:63:13"
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
                      "scope": 4516,
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
                        "id": 4511,
                        "name": "ElementaryTypeName",
                        "src": "1106:7:13"
                      }
                    ],
                    "id": 4512,
                    "name": "VariableDeclaration",
                    "src": "1106:21:13"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "callingContext",
                      "scope": 4516,
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
                        "id": 4513,
                        "name": "ElementaryTypeName",
                        "src": "1129:6:13"
                      }
                    ],
                    "id": 4514,
                    "name": "VariableDeclaration",
                    "src": "1129:21:13"
                  }
                ],
                "id": 4515,
                "name": "ParameterList",
                "src": "1105:46:13"
              }
            ],
            "id": 4516,
            "name": "EventDefinition",
            "src": "1079:73:13"
          }
        ],
        "id": 4517,
        "name": "ContractDefinition",
        "src": "979:175:13"
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
            4721
          ],
          "name": "PermissionsLib",
          "scope": 4722
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
                      "scope": 4523,
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
                        "id": 4518,
                        "name": "ElementaryTypeName",
                        "src": "1416:7:13"
                      }
                    ],
                    "id": 4519,
                    "name": "VariableDeclaration",
                    "src": "1416:21:13"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "callingContext",
                      "scope": 4523,
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
                        "id": 4520,
                        "name": "ElementaryTypeName",
                        "src": "1439:6:13"
                      }
                    ],
                    "id": 4521,
                    "name": "VariableDeclaration",
                    "src": "1439:21:13"
                  }
                ],
                "id": 4522,
                "name": "ParameterList",
                "src": "1415:46:13"
              }
            ],
            "id": 4523,
            "name": "EventDefinition",
            "src": "1399:63:13"
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
                      "scope": 4529,
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
                        "id": 4524,
                        "name": "ElementaryTypeName",
                        "src": "1494:7:13"
                      }
                    ],
                    "id": 4525,
                    "name": "VariableDeclaration",
                    "src": "1494:21:13"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "callingContext",
                      "scope": 4529,
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
                        "id": 4526,
                        "name": "ElementaryTypeName",
                        "src": "1517:6:13"
                      }
                    ],
                    "id": 4527,
                    "name": "VariableDeclaration",
                    "src": "1517:21:13"
                  }
                ],
                "id": 4528,
                "name": "ParameterList",
                "src": "1493:46:13"
              }
            ],
            "id": 4529,
            "name": "EventDefinition",
            "src": "1467:73:13"
          },
          {
            "attributes": {
              "canonicalName": "PermissionsLib.Permissions",
              "name": "Permissions",
              "scope": 4721,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "constant": false,
                  "name": "authorized",
                  "scope": 4541,
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
                        "id": 4530,
                        "name": "ElementaryTypeName",
                        "src": "1584:7:13"
                      },
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 4531,
                        "name": "ElementaryTypeName",
                        "src": "1595:4:13"
                      }
                    ],
                    "id": 4532,
                    "name": "Mapping",
                    "src": "1575:25:13"
                  }
                ],
                "id": 4533,
                "name": "VariableDeclaration",
                "src": "1575:36:13"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "agentToIndex",
                  "scope": 4541,
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
                        "id": 4534,
                        "name": "ElementaryTypeName",
                        "src": "1630:7:13"
                      },
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 4535,
                        "name": "ElementaryTypeName",
                        "src": "1641:4:13"
                      }
                    ],
                    "id": 4536,
                    "name": "Mapping",
                    "src": "1621:25:13"
                  }
                ],
                "id": 4537,
                "name": "VariableDeclaration",
                "src": "1621:38:13"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "authorizedAgents",
                  "scope": 4541,
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
                        "id": 4538,
                        "name": "ElementaryTypeName",
                        "src": "1693:7:13"
                      }
                    ],
                    "id": 4539,
                    "name": "ArrayTypeName",
                    "src": "1693:9:13"
                  }
                ],
                "id": 4540,
                "name": "VariableDeclaration",
                "src": "1693:26:13"
              }
            ],
            "id": 4541,
            "name": "StructDefinition",
            "src": "1546:180:13"
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
              "scope": 4721,
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
                      "scope": 4591,
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
                          "referencedDeclaration": 4541,
                          "type": "struct PermissionsLib.Permissions storage pointer"
                        },
                        "id": 4542,
                        "name": "UserDefinedTypeName",
                        "src": "1760:11:13"
                      }
                    ],
                    "id": 4543,
                    "name": "VariableDeclaration",
                    "src": "1760:24:13"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agent",
                      "scope": 4591,
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
                        "id": 4544,
                        "name": "ElementaryTypeName",
                        "src": "1794:7:13"
                      }
                    ],
                    "id": 4545,
                    "name": "VariableDeclaration",
                    "src": "1794:13:13"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "callingContext",
                      "scope": 4591,
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
                        "id": 4546,
                        "name": "ElementaryTypeName",
                        "src": "1817:6:13"
                      }
                    ],
                    "id": 4547,
                    "name": "VariableDeclaration",
                    "src": "1817:21:13"
                  }
                ],
                "id": 4548,
                "name": "ParameterList",
                "src": "1750:94:13"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 4549,
                "name": "ParameterList",
                "src": "1866:0:13"
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
                              "referencedDeclaration": 10503,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 4550,
                            "name": "Identifier",
                            "src": "1876:7:13"
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
                                      "typeIdentifier": "t_struct$_Permissions_$4541_storage_ptr",
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
                                  "referencedDeclaration": 4708,
                                  "type": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)",
                                  "value": "isNotAuthorized"
                                },
                                "id": 4551,
                                "name": "Identifier",
                                "src": "1884:15:13"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4543,
                                  "type": "struct PermissionsLib.Permissions storage pointer",
                                  "value": "self"
                                },
                                "id": 4552,
                                "name": "Identifier",
                                "src": "1900:4:13"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4545,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 4553,
                                "name": "Identifier",
                                "src": "1906:5:13"
                              }
                            ],
                            "id": 4554,
                            "name": "FunctionCall",
                            "src": "1884:28:13"
                          }
                        ],
                        "id": 4555,
                        "name": "FunctionCall",
                        "src": "1876:37:13"
                      }
                    ],
                    "id": 4556,
                    "name": "ExpressionStatement",
                    "src": "1876:37:13"
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
                                  "referencedDeclaration": 4533,
                                  "type": "mapping(address => bool)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 4543,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 4557,
                                    "name": "Identifier",
                                    "src": "1924:4:13"
                                  }
                                ],
                                "id": 4560,
                                "name": "MemberAccess",
                                "src": "1924:15:13"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4545,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 4559,
                                "name": "Identifier",
                                "src": "1940:5:13"
                              }
                            ],
                            "id": 4561,
                            "name": "IndexAccess",
                            "src": "1924:22:13"
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
                            "id": 4562,
                            "name": "Literal",
                            "src": "1949:4:13"
                          }
                        ],
                        "id": 4563,
                        "name": "Assignment",
                        "src": "1924:29:13"
                      }
                    ],
                    "id": 4564,
                    "name": "ExpressionStatement",
                    "src": "1924:29:13"
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
                                  "referencedDeclaration": 4540,
                                  "type": "address[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 4543,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 4565,
                                    "name": "Identifier",
                                    "src": "1963:4:13"
                                  }
                                ],
                                "id": 4568,
                                "name": "MemberAccess",
                                "src": "1963:21:13"
                              }
                            ],
                            "id": 4569,
                            "name": "MemberAccess",
                            "src": "1963:26:13"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4545,
                              "type": "address",
                              "value": "agent"
                            },
                            "id": 4570,
                            "name": "Identifier",
                            "src": "1990:5:13"
                          }
                        ],
                        "id": 4571,
                        "name": "FunctionCall",
                        "src": "1963:33:13"
                      }
                    ],
                    "id": 4572,
                    "name": "ExpressionStatement",
                    "src": "1963:33:13"
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
                                  "referencedDeclaration": 4537,
                                  "type": "mapping(address => uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 4543,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 4573,
                                    "name": "Identifier",
                                    "src": "2006:4:13"
                                  }
                                ],
                                "id": 4576,
                                "name": "MemberAccess",
                                "src": "2006:17:13"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4545,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 4575,
                                "name": "Identifier",
                                "src": "2024:5:13"
                              }
                            ],
                            "id": 4577,
                            "name": "IndexAccess",
                            "src": "2006:24:13"
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
                                      "referencedDeclaration": 4540,
                                      "type": "address[] storage ref"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 4543,
                                          "type": "struct PermissionsLib.Permissions storage pointer",
                                          "value": "self"
                                        },
                                        "id": 4578,
                                        "name": "Identifier",
                                        "src": "2033:4:13"
                                      }
                                    ],
                                    "id": 4579,
                                    "name": "MemberAccess",
                                    "src": "2033:21:13"
                                  }
                                ],
                                "id": 4580,
                                "name": "MemberAccess",
                                "src": "2033:28:13"
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
                                "id": 4581,
                                "name": "Literal",
                                "src": "2064:1:13"
                              }
                            ],
                            "id": 4582,
                            "name": "BinaryOperation",
                            "src": "2033:32:13"
                          }
                        ],
                        "id": 4583,
                        "name": "Assignment",
                        "src": "2006:59:13"
                      }
                    ],
                    "id": 4584,
                    "name": "ExpressionStatement",
                    "src": "2006:59:13"
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
                              "referencedDeclaration": 4523,
                              "type": "function (address,string memory)",
                              "value": "Authorized"
                            },
                            "id": 4585,
                            "name": "Identifier",
                            "src": "2075:10:13"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4545,
                              "type": "address",
                              "value": "agent"
                            },
                            "id": 4586,
                            "name": "Identifier",
                            "src": "2086:5:13"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4547,
                              "type": "string memory",
                              "value": "callingContext"
                            },
                            "id": 4587,
                            "name": "Identifier",
                            "src": "2093:14:13"
                          }
                        ],
                        "id": 4588,
                        "name": "FunctionCall",
                        "src": "2075:33:13"
                      }
                    ],
                    "id": 4589,
                    "name": "ExpressionStatement",
                    "src": "2075:33:13"
                  }
                ],
                "id": 4590,
                "name": "Block",
                "src": "1866:249:13"
              }
            ],
            "id": 4591,
            "name": "FunctionDefinition",
            "src": "1732:383:13"
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
              "scope": 4721,
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
                      "scope": 4677,
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
                          "referencedDeclaration": 4541,
                          "type": "struct PermissionsLib.Permissions storage pointer"
                        },
                        "id": 4592,
                        "name": "UserDefinedTypeName",
                        "src": "2159:11:13"
                      }
                    ],
                    "id": 4593,
                    "name": "VariableDeclaration",
                    "src": "2159:24:13"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agent",
                      "scope": 4677,
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
                        "id": 4594,
                        "name": "ElementaryTypeName",
                        "src": "2193:7:13"
                      }
                    ],
                    "id": 4595,
                    "name": "VariableDeclaration",
                    "src": "2193:13:13"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "callingContext",
                      "scope": 4677,
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
                        "id": 4596,
                        "name": "ElementaryTypeName",
                        "src": "2216:6:13"
                      }
                    ],
                    "id": 4597,
                    "name": "VariableDeclaration",
                    "src": "2216:21:13"
                  }
                ],
                "id": 4598,
                "name": "ParameterList",
                "src": "2149:94:13"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 4599,
                "name": "ParameterList",
                "src": "2265:0:13"
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
                              "referencedDeclaration": 10503,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 4600,
                            "name": "Identifier",
                            "src": "2444:7:13"
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
                                      "typeIdentifier": "t_struct$_Permissions_$4541_storage_ptr",
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
                                  "referencedDeclaration": 4692,
                                  "type": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)",
                                  "value": "isAuthorized"
                                },
                                "id": 4601,
                                "name": "Identifier",
                                "src": "2452:12:13"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4593,
                                  "type": "struct PermissionsLib.Permissions storage pointer",
                                  "value": "self"
                                },
                                "id": 4602,
                                "name": "Identifier",
                                "src": "2465:4:13"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4595,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 4603,
                                "name": "Identifier",
                                "src": "2471:5:13"
                              }
                            ],
                            "id": 4604,
                            "name": "FunctionCall",
                            "src": "2452:25:13"
                          }
                        ],
                        "id": 4605,
                        "name": "FunctionCall",
                        "src": "2444:34:13"
                      }
                    ],
                    "id": 4606,
                    "name": "ExpressionStatement",
                    "src": "2444:34:13"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        4608
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "indexOfAgentToRevoke",
                          "scope": 4677,
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
                            "id": 4607,
                            "name": "ElementaryTypeName",
                            "src": "2489:4:13"
                          }
                        ],
                        "id": 4608,
                        "name": "VariableDeclaration",
                        "src": "2489:25:13"
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
                              "referencedDeclaration": 4537,
                              "type": "mapping(address => uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4593,
                                  "type": "struct PermissionsLib.Permissions storage pointer",
                                  "value": "self"
                                },
                                "id": 4609,
                                "name": "Identifier",
                                "src": "2517:4:13"
                              }
                            ],
                            "id": 4610,
                            "name": "MemberAccess",
                            "src": "2517:17:13"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4595,
                              "type": "address",
                              "value": "agent"
                            },
                            "id": 4611,
                            "name": "Identifier",
                            "src": "2535:5:13"
                          }
                        ],
                        "id": 4612,
                        "name": "IndexAccess",
                        "src": "2517:24:13"
                      }
                    ],
                    "id": 4613,
                    "name": "VariableDeclarationStatement",
                    "src": "2489:52:13"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        4615
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "indexOfAgentToMove",
                          "scope": 4677,
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
                            "id": 4614,
                            "name": "ElementaryTypeName",
                            "src": "2551:4:13"
                          }
                        ],
                        "id": 4615,
                        "name": "VariableDeclaration",
                        "src": "2551:23:13"
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
                                  "referencedDeclaration": 4540,
                                  "type": "address[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 4593,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 4616,
                                    "name": "Identifier",
                                    "src": "2577:4:13"
                                  }
                                ],
                                "id": 4617,
                                "name": "MemberAccess",
                                "src": "2577:21:13"
                              }
                            ],
                            "id": 4618,
                            "name": "MemberAccess",
                            "src": "2577:28:13"
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
                            "id": 4619,
                            "name": "Literal",
                            "src": "2608:1:13"
                          }
                        ],
                        "id": 4620,
                        "name": "BinaryOperation",
                        "src": "2577:32:13"
                      }
                    ],
                    "id": 4621,
                    "name": "VariableDeclarationStatement",
                    "src": "2551:58:13"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        4623
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "agentToMove",
                          "scope": 4677,
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
                            "id": 4622,
                            "name": "ElementaryTypeName",
                            "src": "2619:7:13"
                          }
                        ],
                        "id": 4623,
                        "name": "VariableDeclaration",
                        "src": "2619:19:13"
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
                              "referencedDeclaration": 4540,
                              "type": "address[] storage ref"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4593,
                                  "type": "struct PermissionsLib.Permissions storage pointer",
                                  "value": "self"
                                },
                                "id": 4624,
                                "name": "Identifier",
                                "src": "2641:4:13"
                              }
                            ],
                            "id": 4625,
                            "name": "MemberAccess",
                            "src": "2641:21:13"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4615,
                              "type": "uint256",
                              "value": "indexOfAgentToMove"
                            },
                            "id": 4626,
                            "name": "Identifier",
                            "src": "2663:18:13"
                          }
                        ],
                        "id": 4627,
                        "name": "IndexAccess",
                        "src": "2641:41:13"
                      }
                    ],
                    "id": 4628,
                    "name": "VariableDeclarationStatement",
                    "src": "2619:63:13"
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
                                  "referencedDeclaration": 4533,
                                  "type": "mapping(address => bool)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 4593,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 4629,
                                    "name": "Identifier",
                                    "src": "2745:4:13"
                                  }
                                ],
                                "id": 4630,
                                "name": "MemberAccess",
                                "src": "2745:15:13"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4595,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 4631,
                                "name": "Identifier",
                                "src": "2761:5:13"
                              }
                            ],
                            "id": 4632,
                            "name": "IndexAccess",
                            "src": "2745:22:13"
                          }
                        ],
                        "id": 4633,
                        "name": "UnaryOperation",
                        "src": "2738:29:13"
                      }
                    ],
                    "id": 4634,
                    "name": "ExpressionStatement",
                    "src": "2738:29:13"
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
                                  "referencedDeclaration": 4540,
                                  "type": "address[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 4593,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 4635,
                                    "name": "Identifier",
                                    "src": "2848:4:13"
                                  }
                                ],
                                "id": 4638,
                                "name": "MemberAccess",
                                "src": "2848:21:13"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4608,
                                  "type": "uint256",
                                  "value": "indexOfAgentToRevoke"
                                },
                                "id": 4637,
                                "name": "Identifier",
                                "src": "2870:20:13"
                              }
                            ],
                            "id": 4639,
                            "name": "IndexAccess",
                            "src": "2848:43:13"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4623,
                              "type": "address",
                              "value": "agentToMove"
                            },
                            "id": 4640,
                            "name": "Identifier",
                            "src": "2894:11:13"
                          }
                        ],
                        "id": 4641,
                        "name": "Assignment",
                        "src": "2848:57:13"
                      }
                    ],
                    "id": 4642,
                    "name": "ExpressionStatement",
                    "src": "2848:57:13"
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
                                  "referencedDeclaration": 4537,
                                  "type": "mapping(address => uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 4593,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 4643,
                                    "name": "Identifier",
                                    "src": "2976:4:13"
                                  }
                                ],
                                "id": 4646,
                                "name": "MemberAccess",
                                "src": "2976:17:13"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4623,
                                  "type": "address",
                                  "value": "agentToMove"
                                },
                                "id": 4645,
                                "name": "Identifier",
                                "src": "2994:11:13"
                              }
                            ],
                            "id": 4647,
                            "name": "IndexAccess",
                            "src": "2976:30:13"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4608,
                              "type": "uint256",
                              "value": "indexOfAgentToRevoke"
                            },
                            "id": 4648,
                            "name": "Identifier",
                            "src": "3009:20:13"
                          }
                        ],
                        "id": 4649,
                        "name": "Assignment",
                        "src": "2976:53:13"
                      }
                    ],
                    "id": 4650,
                    "name": "ExpressionStatement",
                    "src": "2976:53:13"
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
                                  "referencedDeclaration": 4537,
                                  "type": "mapping(address => uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 4593,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 4651,
                                    "name": "Identifier",
                                    "src": "3046:4:13"
                                  }
                                ],
                                "id": 4652,
                                "name": "MemberAccess",
                                "src": "3046:17:13"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4595,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 4653,
                                "name": "Identifier",
                                "src": "3064:5:13"
                              }
                            ],
                            "id": 4654,
                            "name": "IndexAccess",
                            "src": "3046:24:13"
                          }
                        ],
                        "id": 4655,
                        "name": "UnaryOperation",
                        "src": "3039:31:13"
                      }
                    ],
                    "id": 4656,
                    "name": "ExpressionStatement",
                    "src": "3039:31:13"
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
                                  "referencedDeclaration": 4540,
                                  "type": "address[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 4593,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 4657,
                                    "name": "Identifier",
                                    "src": "3144:4:13"
                                  }
                                ],
                                "id": 4658,
                                "name": "MemberAccess",
                                "src": "3144:21:13"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4615,
                                  "type": "uint256",
                                  "value": "indexOfAgentToMove"
                                },
                                "id": 4659,
                                "name": "Identifier",
                                "src": "3166:18:13"
                              }
                            ],
                            "id": 4660,
                            "name": "IndexAccess",
                            "src": "3144:41:13"
                          }
                        ],
                        "id": 4661,
                        "name": "UnaryOperation",
                        "src": "3137:48:13"
                      }
                    ],
                    "id": 4662,
                    "name": "ExpressionStatement",
                    "src": "3137:48:13"
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
                                  "referencedDeclaration": 4540,
                                  "type": "address[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 4593,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 4663,
                                    "name": "Identifier",
                                    "src": "3195:4:13"
                                  }
                                ],
                                "id": 4666,
                                "name": "MemberAccess",
                                "src": "3195:21:13"
                              }
                            ],
                            "id": 4667,
                            "name": "MemberAccess",
                            "src": "3195:28:13"
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
                            "id": 4668,
                            "name": "Literal",
                            "src": "3227:1:13"
                          }
                        ],
                        "id": 4669,
                        "name": "Assignment",
                        "src": "3195:33:13"
                      }
                    ],
                    "id": 4670,
                    "name": "ExpressionStatement",
                    "src": "3195:33:13"
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
                              "referencedDeclaration": 4529,
                              "type": "function (address,string memory)",
                              "value": "AuthorizationRevoked"
                            },
                            "id": 4671,
                            "name": "Identifier",
                            "src": "3239:20:13"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4595,
                              "type": "address",
                              "value": "agent"
                            },
                            "id": 4672,
                            "name": "Identifier",
                            "src": "3260:5:13"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4597,
                              "type": "string memory",
                              "value": "callingContext"
                            },
                            "id": 4673,
                            "name": "Identifier",
                            "src": "3267:14:13"
                          }
                        ],
                        "id": 4674,
                        "name": "FunctionCall",
                        "src": "3239:43:13"
                      }
                    ],
                    "id": 4675,
                    "name": "ExpressionStatement",
                    "src": "3239:43:13"
                  }
                ],
                "id": 4676,
                "name": "Block",
                "src": "2265:1024:13"
              }
            ],
            "id": 4677,
            "name": "FunctionDefinition",
            "src": "2121:1168:13"
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
              "scope": 4721,
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
                      "scope": 4692,
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
                          "referencedDeclaration": 4541,
                          "type": "struct PermissionsLib.Permissions storage pointer"
                        },
                        "id": 4678,
                        "name": "UserDefinedTypeName",
                        "src": "3317:11:13"
                      }
                    ],
                    "id": 4679,
                    "name": "VariableDeclaration",
                    "src": "3317:24:13"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agent",
                      "scope": 4692,
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
                        "id": 4680,
                        "name": "ElementaryTypeName",
                        "src": "3343:7:13"
                      }
                    ],
                    "id": 4681,
                    "name": "VariableDeclaration",
                    "src": "3343:13:13"
                  }
                ],
                "id": 4682,
                "name": "ParameterList",
                "src": "3316:41:13"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 4692,
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
                        "id": 4683,
                        "name": "ElementaryTypeName",
                        "src": "3405:4:13"
                      }
                    ],
                    "id": 4684,
                    "name": "VariableDeclaration",
                    "src": "3405:4:13"
                  }
                ],
                "id": 4685,
                "name": "ParameterList",
                "src": "3404:6:13"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 4685
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
                              "referencedDeclaration": 4533,
                              "type": "mapping(address => bool)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4679,
                                  "type": "struct PermissionsLib.Permissions storage pointer",
                                  "value": "self"
                                },
                                "id": 4686,
                                "name": "Identifier",
                                "src": "3432:4:13"
                              }
                            ],
                            "id": 4687,
                            "name": "MemberAccess",
                            "src": "3432:15:13"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4681,
                              "type": "address",
                              "value": "agent"
                            },
                            "id": 4688,
                            "name": "Identifier",
                            "src": "3448:5:13"
                          }
                        ],
                        "id": 4689,
                        "name": "IndexAccess",
                        "src": "3432:22:13"
                      }
                    ],
                    "id": 4690,
                    "name": "Return",
                    "src": "3425:29:13"
                  }
                ],
                "id": 4691,
                "name": "Block",
                "src": "3415:46:13"
              }
            ],
            "id": 4692,
            "name": "FunctionDefinition",
            "src": "3295:166:13"
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
              "scope": 4721,
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
                      "scope": 4708,
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
                          "referencedDeclaration": 4541,
                          "type": "struct PermissionsLib.Permissions storage pointer"
                        },
                        "id": 4693,
                        "name": "UserDefinedTypeName",
                        "src": "3492:11:13"
                      }
                    ],
                    "id": 4694,
                    "name": "VariableDeclaration",
                    "src": "3492:24:13"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agent",
                      "scope": 4708,
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
                        "id": 4695,
                        "name": "ElementaryTypeName",
                        "src": "3518:7:13"
                      }
                    ],
                    "id": 4696,
                    "name": "VariableDeclaration",
                    "src": "3518:13:13"
                  }
                ],
                "id": 4697,
                "name": "ParameterList",
                "src": "3491:41:13"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 4708,
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
                        "id": 4698,
                        "name": "ElementaryTypeName",
                        "src": "3580:4:13"
                      }
                    ],
                    "id": 4699,
                    "name": "VariableDeclaration",
                    "src": "3580:4:13"
                  }
                ],
                "id": 4700,
                "name": "ParameterList",
                "src": "3579:6:13"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 4700
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
                                      "typeIdentifier": "t_struct$_Permissions_$4541_storage_ptr",
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
                                  "referencedDeclaration": 4692,
                                  "type": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)",
                                  "value": "isAuthorized"
                                },
                                "id": 4701,
                                "name": "Identifier",
                                "src": "3608:12:13"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4694,
                                  "type": "struct PermissionsLib.Permissions storage pointer",
                                  "value": "self"
                                },
                                "id": 4702,
                                "name": "Identifier",
                                "src": "3621:4:13"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4696,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 4703,
                                "name": "Identifier",
                                "src": "3627:5:13"
                              }
                            ],
                            "id": 4704,
                            "name": "FunctionCall",
                            "src": "3608:25:13"
                          }
                        ],
                        "id": 4705,
                        "name": "UnaryOperation",
                        "src": "3607:26:13"
                      }
                    ],
                    "id": 4706,
                    "name": "Return",
                    "src": "3600:33:13"
                  }
                ],
                "id": 4707,
                "name": "Block",
                "src": "3590:50:13"
              }
            ],
            "id": 4708,
            "name": "FunctionDefinition",
            "src": "3467:173:13"
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
              "scope": 4721,
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
                      "scope": 4720,
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
                          "referencedDeclaration": 4541,
                          "type": "struct PermissionsLib.Permissions storage pointer"
                        },
                        "id": 4709,
                        "name": "UserDefinedTypeName",
                        "src": "3675:11:13"
                      }
                    ],
                    "id": 4710,
                    "name": "VariableDeclaration",
                    "src": "3675:24:13"
                  }
                ],
                "id": 4711,
                "name": "ParameterList",
                "src": "3674:26:13"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 4720,
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
                            "id": 4712,
                            "name": "ElementaryTypeName",
                            "src": "3748:7:13"
                          }
                        ],
                        "id": 4713,
                        "name": "ArrayTypeName",
                        "src": "3748:9:13"
                      }
                    ],
                    "id": 4714,
                    "name": "VariableDeclaration",
                    "src": "3748:9:13"
                  }
                ],
                "id": 4715,
                "name": "ParameterList",
                "src": "3747:11:13"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 4715
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
                          "referencedDeclaration": 4540,
                          "type": "address[] storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4710,
                              "type": "struct PermissionsLib.Permissions storage pointer",
                              "value": "self"
                            },
                            "id": 4716,
                            "name": "Identifier",
                            "src": "3780:4:13"
                          }
                        ],
                        "id": 4717,
                        "name": "MemberAccess",
                        "src": "3780:21:13"
                      }
                    ],
                    "id": 4718,
                    "name": "Return",
                    "src": "3773:28:13"
                  }
                ],
                "id": 4719,
                "name": "Block",
                "src": "3763:45:13"
              }
            ],
            "id": 4720,
            "name": "FunctionDefinition",
            "src": "3646:162:13"
          }
        ],
        "id": 4721,
        "name": "ContractDefinition",
        "src": "1157:2653:13"
      }
    ],
    "id": 4722,
    "name": "SourceUnit",
    "src": "584:3227:13"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {
    "1": {
      "events": {},
      "links": {},
      "address": "0xba0d793fb316d7a457b758e75a57e22ee14bc188"
    },
    "42": {
      "events": {},
      "links": {},
      "address": "0x0e7e2aace2ed2565777b420fd181b556971a8cb1"
    },
    "70": {
      "events": {},
      "links": {},
      "address": "0xa5da3efc97eefc0fa4d27dce42b2d0a6a528a3f5"
    }
  },
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-07-02T23:10:14.039Z"
}