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
  "bytecode": "0x60606040523415600e57600080fd5b603580601b6000396000f3006060604052600080fd00a165627a7a7230582025f79fdb342ec02552b79631df779e4a0c4bdb828d9f4281e3e49f9cc9b0b4290029",
  "deployedBytecode": "0x6060604052600080fd00a165627a7a7230582025f79fdb342ec02552b79631df779e4a0c4bdb828d9f4281e3e49f9cc9b0b4290029",
  "sourceMap": "979:175:13:-;;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "979:175:13:-;;;;;",
  "source": "/*\n\n  Copyright 2017 Dharma Labs Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n*/\n\npragma solidity 0.4.18;\n\n\n/**\n *  Note(kayvon): these events are emitted by our PermissionsLib, but all contracts that\n *  depend on the library must also define the events in order for web3 clients to pick them up.\n *  This topic is discussed in greater detail here (under the section \"Events and Libraries\"):\n *  https://blog.aragon.one/library-driven-development-in-solidity-2bebcaf88736\n */\ncontract PermissionEvents {\n    event Authorized(address indexed agent, string callingContext);\n    event AuthorizationRevoked(address indexed agent, string callingContext);\n}\n\n\nlibrary PermissionsLib {\n\n    // TODO(kayvon): remove these events and inherit from PermissionEvents when libraries are\n    // capable of inheritance.\n    // See relevant github issue here: https://github.com/ethereum/solidity/issues/891\n    event Authorized(address indexed agent, string callingContext);\n    event AuthorizationRevoked(address indexed agent, string callingContext);\n\n    struct Permissions {\n        mapping (address => bool) authorized;\n        mapping (address => uint) agentToIndex; // ensures O(1) look-up\n        address[] authorizedAgents;\n    }\n\n    function authorize(\n        Permissions storage self,\n        address agent,\n        string callingContext\n    )\n        internal\n    {\n        require(isNotAuthorized(self, agent));\n\n        self.authorized[agent] = true;\n        self.authorizedAgents.push(agent);\n        self.agentToIndex[agent] = self.authorizedAgents.length - 1;\n        Authorized(agent, callingContext);\n    }\n\n    function revokeAuthorization(\n        Permissions storage self,\n        address agent,\n        string callingContext\n    )\n        internal\n    {\n        /* We only want to do work in the case where the agent whose\n        authorization is being revoked had authorization permissions in the\n        first place. */\n        require(isAuthorized(self, agent));\n\n        uint indexOfAgentToRevoke = self.agentToIndex[agent];\n        uint indexOfAgentToMove = self.authorizedAgents.length - 1;\n        address agentToMove = self.authorizedAgents[indexOfAgentToMove];\n\n        // Revoke the agent's authorization.\n        delete self.authorized[agent];\n\n        // Remove the agent from our collection of authorized agents.\n        self.authorizedAgents[indexOfAgentToRevoke] = agentToMove;\n\n        // Update our indices to reflect the above changes.\n        self.agentToIndex[agentToMove] = indexOfAgentToRevoke;\n        delete self.agentToIndex[agent];\n\n        // Clean up memory that's no longer being used.\n        delete self.authorizedAgents[indexOfAgentToMove];\n        self.authorizedAgents.length -= 1;\n\n        AuthorizationRevoked(agent, callingContext);\n    }\n\n    function isAuthorized(Permissions storage self, address agent)\n        internal\n        view\n        returns (bool)\n    {\n        return self.authorized[agent];\n    }\n\n    function isNotAuthorized(Permissions storage self, address agent)\n        internal\n        view\n        returns (bool)\n    {\n        return !isAuthorized(self, agent);\n    }\n\n    function getAuthorizedAgents(Permissions storage self)\n        internal\n        view\n        returns (address[])\n    {\n        return self.authorizedAgents;\n    }\n}\n",
  "sourcePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/libraries/PermissionsLib.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/libraries/PermissionsLib.sol",
      "exportedSymbols": {
        "PermissionEvents": [
          4521
        ],
        "PermissionsLib": [
          4725
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
        "id": 4508,
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
            4521
          ],
          "name": "PermissionEvents",
          "scope": 4726
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
                      "scope": 4514,
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
                        "id": 4509,
                        "name": "ElementaryTypeName",
                        "src": "1028:7:13"
                      }
                    ],
                    "id": 4510,
                    "name": "VariableDeclaration",
                    "src": "1028:21:13"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "callingContext",
                      "scope": 4514,
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
                        "id": 4511,
                        "name": "ElementaryTypeName",
                        "src": "1051:6:13"
                      }
                    ],
                    "id": 4512,
                    "name": "VariableDeclaration",
                    "src": "1051:21:13"
                  }
                ],
                "id": 4513,
                "name": "ParameterList",
                "src": "1027:46:13"
              }
            ],
            "id": 4514,
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
                      "scope": 4520,
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
                        "id": 4515,
                        "name": "ElementaryTypeName",
                        "src": "1106:7:13"
                      }
                    ],
                    "id": 4516,
                    "name": "VariableDeclaration",
                    "src": "1106:21:13"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "callingContext",
                      "scope": 4520,
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
                        "id": 4517,
                        "name": "ElementaryTypeName",
                        "src": "1129:6:13"
                      }
                    ],
                    "id": 4518,
                    "name": "VariableDeclaration",
                    "src": "1129:21:13"
                  }
                ],
                "id": 4519,
                "name": "ParameterList",
                "src": "1105:46:13"
              }
            ],
            "id": 4520,
            "name": "EventDefinition",
            "src": "1079:73:13"
          }
        ],
        "id": 4521,
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
            4725
          ],
          "name": "PermissionsLib",
          "scope": 4726
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
                      "scope": 4527,
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
                        "id": 4522,
                        "name": "ElementaryTypeName",
                        "src": "1416:7:13"
                      }
                    ],
                    "id": 4523,
                    "name": "VariableDeclaration",
                    "src": "1416:21:13"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "callingContext",
                      "scope": 4527,
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
                        "id": 4524,
                        "name": "ElementaryTypeName",
                        "src": "1439:6:13"
                      }
                    ],
                    "id": 4525,
                    "name": "VariableDeclaration",
                    "src": "1439:21:13"
                  }
                ],
                "id": 4526,
                "name": "ParameterList",
                "src": "1415:46:13"
              }
            ],
            "id": 4527,
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
                      "scope": 4533,
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
                        "id": 4528,
                        "name": "ElementaryTypeName",
                        "src": "1494:7:13"
                      }
                    ],
                    "id": 4529,
                    "name": "VariableDeclaration",
                    "src": "1494:21:13"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "callingContext",
                      "scope": 4533,
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
                        "id": 4530,
                        "name": "ElementaryTypeName",
                        "src": "1517:6:13"
                      }
                    ],
                    "id": 4531,
                    "name": "VariableDeclaration",
                    "src": "1517:21:13"
                  }
                ],
                "id": 4532,
                "name": "ParameterList",
                "src": "1493:46:13"
              }
            ],
            "id": 4533,
            "name": "EventDefinition",
            "src": "1467:73:13"
          },
          {
            "attributes": {
              "canonicalName": "PermissionsLib.Permissions",
              "name": "Permissions",
              "scope": 4725,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "constant": false,
                  "name": "authorized",
                  "scope": 4545,
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
                        "id": 4534,
                        "name": "ElementaryTypeName",
                        "src": "1584:7:13"
                      },
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 4535,
                        "name": "ElementaryTypeName",
                        "src": "1595:4:13"
                      }
                    ],
                    "id": 4536,
                    "name": "Mapping",
                    "src": "1575:25:13"
                  }
                ],
                "id": 4537,
                "name": "VariableDeclaration",
                "src": "1575:36:13"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "agentToIndex",
                  "scope": 4545,
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
                        "id": 4538,
                        "name": "ElementaryTypeName",
                        "src": "1630:7:13"
                      },
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 4539,
                        "name": "ElementaryTypeName",
                        "src": "1641:4:13"
                      }
                    ],
                    "id": 4540,
                    "name": "Mapping",
                    "src": "1621:25:13"
                  }
                ],
                "id": 4541,
                "name": "VariableDeclaration",
                "src": "1621:38:13"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "authorizedAgents",
                  "scope": 4545,
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
                        "id": 4542,
                        "name": "ElementaryTypeName",
                        "src": "1693:7:13"
                      }
                    ],
                    "id": 4543,
                    "name": "ArrayTypeName",
                    "src": "1693:9:13"
                  }
                ],
                "id": 4544,
                "name": "VariableDeclaration",
                "src": "1693:26:13"
              }
            ],
            "id": 4545,
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
              "scope": 4725,
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
                      "scope": 4595,
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
                          "referencedDeclaration": 4545,
                          "type": "struct PermissionsLib.Permissions storage pointer"
                        },
                        "id": 4546,
                        "name": "UserDefinedTypeName",
                        "src": "1760:11:13"
                      }
                    ],
                    "id": 4547,
                    "name": "VariableDeclaration",
                    "src": "1760:24:13"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agent",
                      "scope": 4595,
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
                        "id": 4548,
                        "name": "ElementaryTypeName",
                        "src": "1794:7:13"
                      }
                    ],
                    "id": 4549,
                    "name": "VariableDeclaration",
                    "src": "1794:13:13"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "callingContext",
                      "scope": 4595,
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
                        "id": 4550,
                        "name": "ElementaryTypeName",
                        "src": "1817:6:13"
                      }
                    ],
                    "id": 4551,
                    "name": "VariableDeclaration",
                    "src": "1817:21:13"
                  }
                ],
                "id": 4552,
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
                "id": 4553,
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
                              "referencedDeclaration": 10474,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 4554,
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
                                      "typeIdentifier": "t_struct$_Permissions_$4545_storage_ptr",
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
                                  "referencedDeclaration": 4712,
                                  "type": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)",
                                  "value": "isNotAuthorized"
                                },
                                "id": 4555,
                                "name": "Identifier",
                                "src": "1884:15:13"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4547,
                                  "type": "struct PermissionsLib.Permissions storage pointer",
                                  "value": "self"
                                },
                                "id": 4556,
                                "name": "Identifier",
                                "src": "1900:4:13"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4549,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 4557,
                                "name": "Identifier",
                                "src": "1906:5:13"
                              }
                            ],
                            "id": 4558,
                            "name": "FunctionCall",
                            "src": "1884:28:13"
                          }
                        ],
                        "id": 4559,
                        "name": "FunctionCall",
                        "src": "1876:37:13"
                      }
                    ],
                    "id": 4560,
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
                                  "referencedDeclaration": 4537,
                                  "type": "mapping(address => bool)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 4547,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 4561,
                                    "name": "Identifier",
                                    "src": "1924:4:13"
                                  }
                                ],
                                "id": 4564,
                                "name": "MemberAccess",
                                "src": "1924:15:13"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4549,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 4563,
                                "name": "Identifier",
                                "src": "1940:5:13"
                              }
                            ],
                            "id": 4565,
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
                            "id": 4566,
                            "name": "Literal",
                            "src": "1949:4:13"
                          }
                        ],
                        "id": 4567,
                        "name": "Assignment",
                        "src": "1924:29:13"
                      }
                    ],
                    "id": 4568,
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
                                  "referencedDeclaration": 4544,
                                  "type": "address[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 4547,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 4569,
                                    "name": "Identifier",
                                    "src": "1963:4:13"
                                  }
                                ],
                                "id": 4572,
                                "name": "MemberAccess",
                                "src": "1963:21:13"
                              }
                            ],
                            "id": 4573,
                            "name": "MemberAccess",
                            "src": "1963:26:13"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4549,
                              "type": "address",
                              "value": "agent"
                            },
                            "id": 4574,
                            "name": "Identifier",
                            "src": "1990:5:13"
                          }
                        ],
                        "id": 4575,
                        "name": "FunctionCall",
                        "src": "1963:33:13"
                      }
                    ],
                    "id": 4576,
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
                                  "referencedDeclaration": 4541,
                                  "type": "mapping(address => uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 4547,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 4577,
                                    "name": "Identifier",
                                    "src": "2006:4:13"
                                  }
                                ],
                                "id": 4580,
                                "name": "MemberAccess",
                                "src": "2006:17:13"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4549,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 4579,
                                "name": "Identifier",
                                "src": "2024:5:13"
                              }
                            ],
                            "id": 4581,
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
                                      "referencedDeclaration": 4544,
                                      "type": "address[] storage ref"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 4547,
                                          "type": "struct PermissionsLib.Permissions storage pointer",
                                          "value": "self"
                                        },
                                        "id": 4582,
                                        "name": "Identifier",
                                        "src": "2033:4:13"
                                      }
                                    ],
                                    "id": 4583,
                                    "name": "MemberAccess",
                                    "src": "2033:21:13"
                                  }
                                ],
                                "id": 4584,
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
                                "id": 4585,
                                "name": "Literal",
                                "src": "2064:1:13"
                              }
                            ],
                            "id": 4586,
                            "name": "BinaryOperation",
                            "src": "2033:32:13"
                          }
                        ],
                        "id": 4587,
                        "name": "Assignment",
                        "src": "2006:59:13"
                      }
                    ],
                    "id": 4588,
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
                              "referencedDeclaration": 4527,
                              "type": "function (address,string memory)",
                              "value": "Authorized"
                            },
                            "id": 4589,
                            "name": "Identifier",
                            "src": "2075:10:13"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4549,
                              "type": "address",
                              "value": "agent"
                            },
                            "id": 4590,
                            "name": "Identifier",
                            "src": "2086:5:13"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4551,
                              "type": "string memory",
                              "value": "callingContext"
                            },
                            "id": 4591,
                            "name": "Identifier",
                            "src": "2093:14:13"
                          }
                        ],
                        "id": 4592,
                        "name": "FunctionCall",
                        "src": "2075:33:13"
                      }
                    ],
                    "id": 4593,
                    "name": "ExpressionStatement",
                    "src": "2075:33:13"
                  }
                ],
                "id": 4594,
                "name": "Block",
                "src": "1866:249:13"
              }
            ],
            "id": 4595,
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
              "scope": 4725,
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
                      "scope": 4681,
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
                          "referencedDeclaration": 4545,
                          "type": "struct PermissionsLib.Permissions storage pointer"
                        },
                        "id": 4596,
                        "name": "UserDefinedTypeName",
                        "src": "2159:11:13"
                      }
                    ],
                    "id": 4597,
                    "name": "VariableDeclaration",
                    "src": "2159:24:13"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agent",
                      "scope": 4681,
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
                        "id": 4598,
                        "name": "ElementaryTypeName",
                        "src": "2193:7:13"
                      }
                    ],
                    "id": 4599,
                    "name": "VariableDeclaration",
                    "src": "2193:13:13"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "callingContext",
                      "scope": 4681,
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
                        "id": 4600,
                        "name": "ElementaryTypeName",
                        "src": "2216:6:13"
                      }
                    ],
                    "id": 4601,
                    "name": "VariableDeclaration",
                    "src": "2216:21:13"
                  }
                ],
                "id": 4602,
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
                "id": 4603,
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
                              "referencedDeclaration": 10474,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 4604,
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
                                      "typeIdentifier": "t_struct$_Permissions_$4545_storage_ptr",
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
                                  "referencedDeclaration": 4696,
                                  "type": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)",
                                  "value": "isAuthorized"
                                },
                                "id": 4605,
                                "name": "Identifier",
                                "src": "2452:12:13"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4597,
                                  "type": "struct PermissionsLib.Permissions storage pointer",
                                  "value": "self"
                                },
                                "id": 4606,
                                "name": "Identifier",
                                "src": "2465:4:13"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4599,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 4607,
                                "name": "Identifier",
                                "src": "2471:5:13"
                              }
                            ],
                            "id": 4608,
                            "name": "FunctionCall",
                            "src": "2452:25:13"
                          }
                        ],
                        "id": 4609,
                        "name": "FunctionCall",
                        "src": "2444:34:13"
                      }
                    ],
                    "id": 4610,
                    "name": "ExpressionStatement",
                    "src": "2444:34:13"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        4612
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "indexOfAgentToRevoke",
                          "scope": 4681,
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
                            "id": 4611,
                            "name": "ElementaryTypeName",
                            "src": "2489:4:13"
                          }
                        ],
                        "id": 4612,
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
                              "referencedDeclaration": 4541,
                              "type": "mapping(address => uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4597,
                                  "type": "struct PermissionsLib.Permissions storage pointer",
                                  "value": "self"
                                },
                                "id": 4613,
                                "name": "Identifier",
                                "src": "2517:4:13"
                              }
                            ],
                            "id": 4614,
                            "name": "MemberAccess",
                            "src": "2517:17:13"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4599,
                              "type": "address",
                              "value": "agent"
                            },
                            "id": 4615,
                            "name": "Identifier",
                            "src": "2535:5:13"
                          }
                        ],
                        "id": 4616,
                        "name": "IndexAccess",
                        "src": "2517:24:13"
                      }
                    ],
                    "id": 4617,
                    "name": "VariableDeclarationStatement",
                    "src": "2489:52:13"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        4619
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "indexOfAgentToMove",
                          "scope": 4681,
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
                            "id": 4618,
                            "name": "ElementaryTypeName",
                            "src": "2551:4:13"
                          }
                        ],
                        "id": 4619,
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
                                  "referencedDeclaration": 4544,
                                  "type": "address[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 4597,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 4620,
                                    "name": "Identifier",
                                    "src": "2577:4:13"
                                  }
                                ],
                                "id": 4621,
                                "name": "MemberAccess",
                                "src": "2577:21:13"
                              }
                            ],
                            "id": 4622,
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
                            "id": 4623,
                            "name": "Literal",
                            "src": "2608:1:13"
                          }
                        ],
                        "id": 4624,
                        "name": "BinaryOperation",
                        "src": "2577:32:13"
                      }
                    ],
                    "id": 4625,
                    "name": "VariableDeclarationStatement",
                    "src": "2551:58:13"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        4627
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "agentToMove",
                          "scope": 4681,
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
                            "id": 4626,
                            "name": "ElementaryTypeName",
                            "src": "2619:7:13"
                          }
                        ],
                        "id": 4627,
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
                              "referencedDeclaration": 4544,
                              "type": "address[] storage ref"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4597,
                                  "type": "struct PermissionsLib.Permissions storage pointer",
                                  "value": "self"
                                },
                                "id": 4628,
                                "name": "Identifier",
                                "src": "2641:4:13"
                              }
                            ],
                            "id": 4629,
                            "name": "MemberAccess",
                            "src": "2641:21:13"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4619,
                              "type": "uint256",
                              "value": "indexOfAgentToMove"
                            },
                            "id": 4630,
                            "name": "Identifier",
                            "src": "2663:18:13"
                          }
                        ],
                        "id": 4631,
                        "name": "IndexAccess",
                        "src": "2641:41:13"
                      }
                    ],
                    "id": 4632,
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
                                  "referencedDeclaration": 4537,
                                  "type": "mapping(address => bool)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 4597,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 4633,
                                    "name": "Identifier",
                                    "src": "2745:4:13"
                                  }
                                ],
                                "id": 4634,
                                "name": "MemberAccess",
                                "src": "2745:15:13"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4599,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 4635,
                                "name": "Identifier",
                                "src": "2761:5:13"
                              }
                            ],
                            "id": 4636,
                            "name": "IndexAccess",
                            "src": "2745:22:13"
                          }
                        ],
                        "id": 4637,
                        "name": "UnaryOperation",
                        "src": "2738:29:13"
                      }
                    ],
                    "id": 4638,
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
                                  "referencedDeclaration": 4544,
                                  "type": "address[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 4597,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 4639,
                                    "name": "Identifier",
                                    "src": "2848:4:13"
                                  }
                                ],
                                "id": 4642,
                                "name": "MemberAccess",
                                "src": "2848:21:13"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4612,
                                  "type": "uint256",
                                  "value": "indexOfAgentToRevoke"
                                },
                                "id": 4641,
                                "name": "Identifier",
                                "src": "2870:20:13"
                              }
                            ],
                            "id": 4643,
                            "name": "IndexAccess",
                            "src": "2848:43:13"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4627,
                              "type": "address",
                              "value": "agentToMove"
                            },
                            "id": 4644,
                            "name": "Identifier",
                            "src": "2894:11:13"
                          }
                        ],
                        "id": 4645,
                        "name": "Assignment",
                        "src": "2848:57:13"
                      }
                    ],
                    "id": 4646,
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
                                  "referencedDeclaration": 4541,
                                  "type": "mapping(address => uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 4597,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 4647,
                                    "name": "Identifier",
                                    "src": "2976:4:13"
                                  }
                                ],
                                "id": 4650,
                                "name": "MemberAccess",
                                "src": "2976:17:13"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4627,
                                  "type": "address",
                                  "value": "agentToMove"
                                },
                                "id": 4649,
                                "name": "Identifier",
                                "src": "2994:11:13"
                              }
                            ],
                            "id": 4651,
                            "name": "IndexAccess",
                            "src": "2976:30:13"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4612,
                              "type": "uint256",
                              "value": "indexOfAgentToRevoke"
                            },
                            "id": 4652,
                            "name": "Identifier",
                            "src": "3009:20:13"
                          }
                        ],
                        "id": 4653,
                        "name": "Assignment",
                        "src": "2976:53:13"
                      }
                    ],
                    "id": 4654,
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
                                  "referencedDeclaration": 4541,
                                  "type": "mapping(address => uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 4597,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 4655,
                                    "name": "Identifier",
                                    "src": "3046:4:13"
                                  }
                                ],
                                "id": 4656,
                                "name": "MemberAccess",
                                "src": "3046:17:13"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4599,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 4657,
                                "name": "Identifier",
                                "src": "3064:5:13"
                              }
                            ],
                            "id": 4658,
                            "name": "IndexAccess",
                            "src": "3046:24:13"
                          }
                        ],
                        "id": 4659,
                        "name": "UnaryOperation",
                        "src": "3039:31:13"
                      }
                    ],
                    "id": 4660,
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
                                  "referencedDeclaration": 4544,
                                  "type": "address[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 4597,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 4661,
                                    "name": "Identifier",
                                    "src": "3144:4:13"
                                  }
                                ],
                                "id": 4662,
                                "name": "MemberAccess",
                                "src": "3144:21:13"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4619,
                                  "type": "uint256",
                                  "value": "indexOfAgentToMove"
                                },
                                "id": 4663,
                                "name": "Identifier",
                                "src": "3166:18:13"
                              }
                            ],
                            "id": 4664,
                            "name": "IndexAccess",
                            "src": "3144:41:13"
                          }
                        ],
                        "id": 4665,
                        "name": "UnaryOperation",
                        "src": "3137:48:13"
                      }
                    ],
                    "id": 4666,
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
                                  "referencedDeclaration": 4544,
                                  "type": "address[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 4597,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 4667,
                                    "name": "Identifier",
                                    "src": "3195:4:13"
                                  }
                                ],
                                "id": 4670,
                                "name": "MemberAccess",
                                "src": "3195:21:13"
                              }
                            ],
                            "id": 4671,
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
                            "id": 4672,
                            "name": "Literal",
                            "src": "3227:1:13"
                          }
                        ],
                        "id": 4673,
                        "name": "Assignment",
                        "src": "3195:33:13"
                      }
                    ],
                    "id": 4674,
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
                              "referencedDeclaration": 4533,
                              "type": "function (address,string memory)",
                              "value": "AuthorizationRevoked"
                            },
                            "id": 4675,
                            "name": "Identifier",
                            "src": "3239:20:13"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4599,
                              "type": "address",
                              "value": "agent"
                            },
                            "id": 4676,
                            "name": "Identifier",
                            "src": "3260:5:13"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4601,
                              "type": "string memory",
                              "value": "callingContext"
                            },
                            "id": 4677,
                            "name": "Identifier",
                            "src": "3267:14:13"
                          }
                        ],
                        "id": 4678,
                        "name": "FunctionCall",
                        "src": "3239:43:13"
                      }
                    ],
                    "id": 4679,
                    "name": "ExpressionStatement",
                    "src": "3239:43:13"
                  }
                ],
                "id": 4680,
                "name": "Block",
                "src": "2265:1024:13"
              }
            ],
            "id": 4681,
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
              "scope": 4725,
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
                      "scope": 4696,
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
                          "referencedDeclaration": 4545,
                          "type": "struct PermissionsLib.Permissions storage pointer"
                        },
                        "id": 4682,
                        "name": "UserDefinedTypeName",
                        "src": "3317:11:13"
                      }
                    ],
                    "id": 4683,
                    "name": "VariableDeclaration",
                    "src": "3317:24:13"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agent",
                      "scope": 4696,
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
                        "id": 4684,
                        "name": "ElementaryTypeName",
                        "src": "3343:7:13"
                      }
                    ],
                    "id": 4685,
                    "name": "VariableDeclaration",
                    "src": "3343:13:13"
                  }
                ],
                "id": 4686,
                "name": "ParameterList",
                "src": "3316:41:13"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 4696,
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
                        "id": 4687,
                        "name": "ElementaryTypeName",
                        "src": "3405:4:13"
                      }
                    ],
                    "id": 4688,
                    "name": "VariableDeclaration",
                    "src": "3405:4:13"
                  }
                ],
                "id": 4689,
                "name": "ParameterList",
                "src": "3404:6:13"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 4689
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
                              "referencedDeclaration": 4537,
                              "type": "mapping(address => bool)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4683,
                                  "type": "struct PermissionsLib.Permissions storage pointer",
                                  "value": "self"
                                },
                                "id": 4690,
                                "name": "Identifier",
                                "src": "3432:4:13"
                              }
                            ],
                            "id": 4691,
                            "name": "MemberAccess",
                            "src": "3432:15:13"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4685,
                              "type": "address",
                              "value": "agent"
                            },
                            "id": 4692,
                            "name": "Identifier",
                            "src": "3448:5:13"
                          }
                        ],
                        "id": 4693,
                        "name": "IndexAccess",
                        "src": "3432:22:13"
                      }
                    ],
                    "id": 4694,
                    "name": "Return",
                    "src": "3425:29:13"
                  }
                ],
                "id": 4695,
                "name": "Block",
                "src": "3415:46:13"
              }
            ],
            "id": 4696,
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
              "scope": 4725,
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
                      "scope": 4712,
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
                          "referencedDeclaration": 4545,
                          "type": "struct PermissionsLib.Permissions storage pointer"
                        },
                        "id": 4697,
                        "name": "UserDefinedTypeName",
                        "src": "3492:11:13"
                      }
                    ],
                    "id": 4698,
                    "name": "VariableDeclaration",
                    "src": "3492:24:13"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agent",
                      "scope": 4712,
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
                        "id": 4699,
                        "name": "ElementaryTypeName",
                        "src": "3518:7:13"
                      }
                    ],
                    "id": 4700,
                    "name": "VariableDeclaration",
                    "src": "3518:13:13"
                  }
                ],
                "id": 4701,
                "name": "ParameterList",
                "src": "3491:41:13"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 4712,
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
                        "id": 4702,
                        "name": "ElementaryTypeName",
                        "src": "3580:4:13"
                      }
                    ],
                    "id": 4703,
                    "name": "VariableDeclaration",
                    "src": "3580:4:13"
                  }
                ],
                "id": 4704,
                "name": "ParameterList",
                "src": "3579:6:13"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 4704
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
                                      "typeIdentifier": "t_struct$_Permissions_$4545_storage_ptr",
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
                                  "referencedDeclaration": 4696,
                                  "type": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)",
                                  "value": "isAuthorized"
                                },
                                "id": 4705,
                                "name": "Identifier",
                                "src": "3608:12:13"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4698,
                                  "type": "struct PermissionsLib.Permissions storage pointer",
                                  "value": "self"
                                },
                                "id": 4706,
                                "name": "Identifier",
                                "src": "3621:4:13"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4700,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 4707,
                                "name": "Identifier",
                                "src": "3627:5:13"
                              }
                            ],
                            "id": 4708,
                            "name": "FunctionCall",
                            "src": "3608:25:13"
                          }
                        ],
                        "id": 4709,
                        "name": "UnaryOperation",
                        "src": "3607:26:13"
                      }
                    ],
                    "id": 4710,
                    "name": "Return",
                    "src": "3600:33:13"
                  }
                ],
                "id": 4711,
                "name": "Block",
                "src": "3590:50:13"
              }
            ],
            "id": 4712,
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
              "scope": 4725,
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
                      "scope": 4724,
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
                          "referencedDeclaration": 4545,
                          "type": "struct PermissionsLib.Permissions storage pointer"
                        },
                        "id": 4713,
                        "name": "UserDefinedTypeName",
                        "src": "3675:11:13"
                      }
                    ],
                    "id": 4714,
                    "name": "VariableDeclaration",
                    "src": "3675:24:13"
                  }
                ],
                "id": 4715,
                "name": "ParameterList",
                "src": "3674:26:13"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 4724,
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
                            "id": 4716,
                            "name": "ElementaryTypeName",
                            "src": "3748:7:13"
                          }
                        ],
                        "id": 4717,
                        "name": "ArrayTypeName",
                        "src": "3748:9:13"
                      }
                    ],
                    "id": 4718,
                    "name": "VariableDeclaration",
                    "src": "3748:9:13"
                  }
                ],
                "id": 4719,
                "name": "ParameterList",
                "src": "3747:11:13"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 4719
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
                          "referencedDeclaration": 4544,
                          "type": "address[] storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4714,
                              "type": "struct PermissionsLib.Permissions storage pointer",
                              "value": "self"
                            },
                            "id": 4720,
                            "name": "Identifier",
                            "src": "3780:4:13"
                          }
                        ],
                        "id": 4721,
                        "name": "MemberAccess",
                        "src": "3780:21:13"
                      }
                    ],
                    "id": 4722,
                    "name": "Return",
                    "src": "3773:28:13"
                  }
                ],
                "id": 4723,
                "name": "Block",
                "src": "3763:45:13"
              }
            ],
            "id": 4724,
            "name": "FunctionDefinition",
            "src": "3646:162:13"
          }
        ],
        "id": 4725,
        "name": "ContractDefinition",
        "src": "1157:2653:13"
      }
    ],
    "id": 4726,
    "name": "SourceUnit",
    "src": "584:3227:13"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-05-21T18:00:40.665Z"
}