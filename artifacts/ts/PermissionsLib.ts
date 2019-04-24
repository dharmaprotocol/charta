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
  "bytecode": "0x60606040523415600e57600080fd5b603580601b6000396000f3006060604052600080fd00a165627a7a7230582080eba2ddc214e571bf846e1494d1ff4e731458f63af8607703189d1237a672ad0029",
  "deployedBytecode": "0x6060604052600080fd00a165627a7a7230582080eba2ddc214e571bf846e1494d1ff4e731458f63af8607703189d1237a672ad0029",
  "sourceMap": "1157:2653:17:-;;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "1157:2653:17:-;;;;;",
  "source": "/*\n\n  Copyright 2017 Dharma Labs Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n*/\n\npragma solidity 0.4.18;\n\n\n/**\n *  Note(kayvon): these events are emitted by our PermissionsLib, but all contracts that\n *  depend on the library must also define the events in order for web3 clients to pick them up.\n *  This topic is discussed in greater detail here (under the section \"Events and Libraries\"):\n *  https://blog.aragon.one/library-driven-development-in-solidity-2bebcaf88736\n */\ncontract PermissionEvents {\n    event Authorized(address indexed agent, string callingContext);\n    event AuthorizationRevoked(address indexed agent, string callingContext);\n}\n\n\nlibrary PermissionsLib {\n\n    // TODO(kayvon): remove these events and inherit from PermissionEvents when libraries are\n    // capable of inheritance.\n    // See relevant github issue here: https://github.com/ethereum/solidity/issues/891\n    event Authorized(address indexed agent, string callingContext);\n    event AuthorizationRevoked(address indexed agent, string callingContext);\n\n    struct Permissions {\n        mapping (address => bool) authorized;\n        mapping (address => uint) agentToIndex; // ensures O(1) look-up\n        address[] authorizedAgents;\n    }\n\n    function authorize(\n        Permissions storage self,\n        address agent,\n        string callingContext\n    )\n        internal\n    {\n        require(isNotAuthorized(self, agent));\n\n        self.authorized[agent] = true;\n        self.authorizedAgents.push(agent);\n        self.agentToIndex[agent] = self.authorizedAgents.length - 1;\n        Authorized(agent, callingContext);\n    }\n\n    function revokeAuthorization(\n        Permissions storage self,\n        address agent,\n        string callingContext\n    )\n        internal\n    {\n        /* We only want to do work in the case where the agent whose\n        authorization is being revoked had authorization permissions in the\n        first place. */\n        require(isAuthorized(self, agent));\n\n        uint indexOfAgentToRevoke = self.agentToIndex[agent];\n        uint indexOfAgentToMove = self.authorizedAgents.length - 1;\n        address agentToMove = self.authorizedAgents[indexOfAgentToMove];\n\n        // Revoke the agent's authorization.\n        delete self.authorized[agent];\n\n        // Remove the agent from our collection of authorized agents.\n        self.authorizedAgents[indexOfAgentToRevoke] = agentToMove;\n\n        // Update our indices to reflect the above changes.\n        self.agentToIndex[agentToMove] = indexOfAgentToRevoke;\n        delete self.agentToIndex[agent];\n\n        // Clean up memory that's no longer being used.\n        delete self.authorizedAgents[indexOfAgentToMove];\n        self.authorizedAgents.length -= 1;\n\n        AuthorizationRevoked(agent, callingContext);\n    }\n\n    function isAuthorized(Permissions storage self, address agent)\n        internal\n        view\n        returns (bool)\n    {\n        return self.authorized[agent];\n    }\n\n    function isNotAuthorized(Permissions storage self, address agent)\n        internal\n        view\n        returns (bool)\n    {\n        return !isAuthorized(self, agent);\n    }\n\n    function getAuthorizedAgents(Permissions storage self)\n        internal\n        view\n        returns (address[])\n    {\n        return self.authorizedAgents;\n    }\n}\n",
  "sourcePath": "/Users/chris/dev/dharma/charta/contracts/libraries/PermissionsLib.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/chris/dev/dharma/charta/contracts/libraries/PermissionsLib.sol",
      "exportedSymbols": {
        "PermissionEvents": [
          6115
        ],
        "PermissionsLib": [
          6319
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
        "id": 6102,
        "name": "PragmaDirective",
        "src": "584:23:17"
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
            6115
          ],
          "name": "PermissionEvents",
          "scope": 6320
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
                      "scope": 6108,
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
                        "id": 6103,
                        "name": "ElementaryTypeName",
                        "src": "1028:7:17"
                      }
                    ],
                    "id": 6104,
                    "name": "VariableDeclaration",
                    "src": "1028:21:17"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "callingContext",
                      "scope": 6108,
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
                        "id": 6105,
                        "name": "ElementaryTypeName",
                        "src": "1051:6:17"
                      }
                    ],
                    "id": 6106,
                    "name": "VariableDeclaration",
                    "src": "1051:21:17"
                  }
                ],
                "id": 6107,
                "name": "ParameterList",
                "src": "1027:46:17"
              }
            ],
            "id": 6108,
            "name": "EventDefinition",
            "src": "1011:63:17"
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
                      "scope": 6114,
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
                        "id": 6109,
                        "name": "ElementaryTypeName",
                        "src": "1106:7:17"
                      }
                    ],
                    "id": 6110,
                    "name": "VariableDeclaration",
                    "src": "1106:21:17"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "callingContext",
                      "scope": 6114,
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
                        "id": 6111,
                        "name": "ElementaryTypeName",
                        "src": "1129:6:17"
                      }
                    ],
                    "id": 6112,
                    "name": "VariableDeclaration",
                    "src": "1129:21:17"
                  }
                ],
                "id": 6113,
                "name": "ParameterList",
                "src": "1105:46:17"
              }
            ],
            "id": 6114,
            "name": "EventDefinition",
            "src": "1079:73:17"
          }
        ],
        "id": 6115,
        "name": "ContractDefinition",
        "src": "979:175:17"
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
            6319
          ],
          "name": "PermissionsLib",
          "scope": 6320
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
                      "scope": 6121,
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
                        "id": 6116,
                        "name": "ElementaryTypeName",
                        "src": "1416:7:17"
                      }
                    ],
                    "id": 6117,
                    "name": "VariableDeclaration",
                    "src": "1416:21:17"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "callingContext",
                      "scope": 6121,
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
                        "id": 6118,
                        "name": "ElementaryTypeName",
                        "src": "1439:6:17"
                      }
                    ],
                    "id": 6119,
                    "name": "VariableDeclaration",
                    "src": "1439:21:17"
                  }
                ],
                "id": 6120,
                "name": "ParameterList",
                "src": "1415:46:17"
              }
            ],
            "id": 6121,
            "name": "EventDefinition",
            "src": "1399:63:17"
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
                      "scope": 6127,
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
                        "id": 6122,
                        "name": "ElementaryTypeName",
                        "src": "1494:7:17"
                      }
                    ],
                    "id": 6123,
                    "name": "VariableDeclaration",
                    "src": "1494:21:17"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "callingContext",
                      "scope": 6127,
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
                        "id": 6124,
                        "name": "ElementaryTypeName",
                        "src": "1517:6:17"
                      }
                    ],
                    "id": 6125,
                    "name": "VariableDeclaration",
                    "src": "1517:21:17"
                  }
                ],
                "id": 6126,
                "name": "ParameterList",
                "src": "1493:46:17"
              }
            ],
            "id": 6127,
            "name": "EventDefinition",
            "src": "1467:73:17"
          },
          {
            "attributes": {
              "canonicalName": "PermissionsLib.Permissions",
              "name": "Permissions",
              "scope": 6319,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "constant": false,
                  "name": "authorized",
                  "scope": 6139,
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
                        "id": 6128,
                        "name": "ElementaryTypeName",
                        "src": "1584:7:17"
                      },
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 6129,
                        "name": "ElementaryTypeName",
                        "src": "1595:4:17"
                      }
                    ],
                    "id": 6130,
                    "name": "Mapping",
                    "src": "1575:25:17"
                  }
                ],
                "id": 6131,
                "name": "VariableDeclaration",
                "src": "1575:36:17"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "agentToIndex",
                  "scope": 6139,
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
                        "id": 6132,
                        "name": "ElementaryTypeName",
                        "src": "1630:7:17"
                      },
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 6133,
                        "name": "ElementaryTypeName",
                        "src": "1641:4:17"
                      }
                    ],
                    "id": 6134,
                    "name": "Mapping",
                    "src": "1621:25:17"
                  }
                ],
                "id": 6135,
                "name": "VariableDeclaration",
                "src": "1621:38:17"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "authorizedAgents",
                  "scope": 6139,
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
                        "id": 6136,
                        "name": "ElementaryTypeName",
                        "src": "1693:7:17"
                      }
                    ],
                    "id": 6137,
                    "name": "ArrayTypeName",
                    "src": "1693:9:17"
                  }
                ],
                "id": 6138,
                "name": "VariableDeclaration",
                "src": "1693:26:17"
              }
            ],
            "id": 6139,
            "name": "StructDefinition",
            "src": "1546:180:17"
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
              "scope": 6319,
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
                      "scope": 6189,
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
                          "referencedDeclaration": 6139,
                          "type": "struct PermissionsLib.Permissions storage pointer"
                        },
                        "id": 6140,
                        "name": "UserDefinedTypeName",
                        "src": "1760:11:17"
                      }
                    ],
                    "id": 6141,
                    "name": "VariableDeclaration",
                    "src": "1760:24:17"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agent",
                      "scope": 6189,
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
                        "id": 6142,
                        "name": "ElementaryTypeName",
                        "src": "1794:7:17"
                      }
                    ],
                    "id": 6143,
                    "name": "VariableDeclaration",
                    "src": "1794:13:17"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "callingContext",
                      "scope": 6189,
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
                        "id": 6144,
                        "name": "ElementaryTypeName",
                        "src": "1817:6:17"
                      }
                    ],
                    "id": 6145,
                    "name": "VariableDeclaration",
                    "src": "1817:21:17"
                  }
                ],
                "id": 6146,
                "name": "ParameterList",
                "src": "1750:94:17"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 6147,
                "name": "ParameterList",
                "src": "1866:0:17"
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
                              "referencedDeclaration": 15884,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 6148,
                            "name": "Identifier",
                            "src": "1876:7:17"
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
                                      "typeIdentifier": "t_struct$_Permissions_$6139_storage_ptr",
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
                                  "referencedDeclaration": 6306,
                                  "type": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)",
                                  "value": "isNotAuthorized"
                                },
                                "id": 6149,
                                "name": "Identifier",
                                "src": "1884:15:17"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 6141,
                                  "type": "struct PermissionsLib.Permissions storage pointer",
                                  "value": "self"
                                },
                                "id": 6150,
                                "name": "Identifier",
                                "src": "1900:4:17"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 6143,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 6151,
                                "name": "Identifier",
                                "src": "1906:5:17"
                              }
                            ],
                            "id": 6152,
                            "name": "FunctionCall",
                            "src": "1884:28:17"
                          }
                        ],
                        "id": 6153,
                        "name": "FunctionCall",
                        "src": "1876:37:17"
                      }
                    ],
                    "id": 6154,
                    "name": "ExpressionStatement",
                    "src": "1876:37:17"
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
                                  "referencedDeclaration": 6131,
                                  "type": "mapping(address => bool)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 6141,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 6155,
                                    "name": "Identifier",
                                    "src": "1924:4:17"
                                  }
                                ],
                                "id": 6158,
                                "name": "MemberAccess",
                                "src": "1924:15:17"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 6143,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 6157,
                                "name": "Identifier",
                                "src": "1940:5:17"
                              }
                            ],
                            "id": 6159,
                            "name": "IndexAccess",
                            "src": "1924:22:17"
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
                            "id": 6160,
                            "name": "Literal",
                            "src": "1949:4:17"
                          }
                        ],
                        "id": 6161,
                        "name": "Assignment",
                        "src": "1924:29:17"
                      }
                    ],
                    "id": 6162,
                    "name": "ExpressionStatement",
                    "src": "1924:29:17"
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
                                  "referencedDeclaration": 6138,
                                  "type": "address[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 6141,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 6163,
                                    "name": "Identifier",
                                    "src": "1963:4:17"
                                  }
                                ],
                                "id": 6166,
                                "name": "MemberAccess",
                                "src": "1963:21:17"
                              }
                            ],
                            "id": 6167,
                            "name": "MemberAccess",
                            "src": "1963:26:17"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 6143,
                              "type": "address",
                              "value": "agent"
                            },
                            "id": 6168,
                            "name": "Identifier",
                            "src": "1990:5:17"
                          }
                        ],
                        "id": 6169,
                        "name": "FunctionCall",
                        "src": "1963:33:17"
                      }
                    ],
                    "id": 6170,
                    "name": "ExpressionStatement",
                    "src": "1963:33:17"
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
                                  "referencedDeclaration": 6135,
                                  "type": "mapping(address => uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 6141,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 6171,
                                    "name": "Identifier",
                                    "src": "2006:4:17"
                                  }
                                ],
                                "id": 6174,
                                "name": "MemberAccess",
                                "src": "2006:17:17"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 6143,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 6173,
                                "name": "Identifier",
                                "src": "2024:5:17"
                              }
                            ],
                            "id": 6175,
                            "name": "IndexAccess",
                            "src": "2006:24:17"
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
                                      "referencedDeclaration": 6138,
                                      "type": "address[] storage ref"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 6141,
                                          "type": "struct PermissionsLib.Permissions storage pointer",
                                          "value": "self"
                                        },
                                        "id": 6176,
                                        "name": "Identifier",
                                        "src": "2033:4:17"
                                      }
                                    ],
                                    "id": 6177,
                                    "name": "MemberAccess",
                                    "src": "2033:21:17"
                                  }
                                ],
                                "id": 6178,
                                "name": "MemberAccess",
                                "src": "2033:28:17"
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
                                "id": 6179,
                                "name": "Literal",
                                "src": "2064:1:17"
                              }
                            ],
                            "id": 6180,
                            "name": "BinaryOperation",
                            "src": "2033:32:17"
                          }
                        ],
                        "id": 6181,
                        "name": "Assignment",
                        "src": "2006:59:17"
                      }
                    ],
                    "id": 6182,
                    "name": "ExpressionStatement",
                    "src": "2006:59:17"
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
                              "referencedDeclaration": 6121,
                              "type": "function (address,string memory)",
                              "value": "Authorized"
                            },
                            "id": 6183,
                            "name": "Identifier",
                            "src": "2075:10:17"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 6143,
                              "type": "address",
                              "value": "agent"
                            },
                            "id": 6184,
                            "name": "Identifier",
                            "src": "2086:5:17"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 6145,
                              "type": "string memory",
                              "value": "callingContext"
                            },
                            "id": 6185,
                            "name": "Identifier",
                            "src": "2093:14:17"
                          }
                        ],
                        "id": 6186,
                        "name": "FunctionCall",
                        "src": "2075:33:17"
                      }
                    ],
                    "id": 6187,
                    "name": "ExpressionStatement",
                    "src": "2075:33:17"
                  }
                ],
                "id": 6188,
                "name": "Block",
                "src": "1866:249:17"
              }
            ],
            "id": 6189,
            "name": "FunctionDefinition",
            "src": "1732:383:17"
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
              "scope": 6319,
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
                      "scope": 6275,
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
                          "referencedDeclaration": 6139,
                          "type": "struct PermissionsLib.Permissions storage pointer"
                        },
                        "id": 6190,
                        "name": "UserDefinedTypeName",
                        "src": "2159:11:17"
                      }
                    ],
                    "id": 6191,
                    "name": "VariableDeclaration",
                    "src": "2159:24:17"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agent",
                      "scope": 6275,
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
                        "id": 6192,
                        "name": "ElementaryTypeName",
                        "src": "2193:7:17"
                      }
                    ],
                    "id": 6193,
                    "name": "VariableDeclaration",
                    "src": "2193:13:17"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "callingContext",
                      "scope": 6275,
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
                        "id": 6194,
                        "name": "ElementaryTypeName",
                        "src": "2216:6:17"
                      }
                    ],
                    "id": 6195,
                    "name": "VariableDeclaration",
                    "src": "2216:21:17"
                  }
                ],
                "id": 6196,
                "name": "ParameterList",
                "src": "2149:94:17"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 6197,
                "name": "ParameterList",
                "src": "2265:0:17"
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
                              "referencedDeclaration": 15884,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 6198,
                            "name": "Identifier",
                            "src": "2444:7:17"
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
                                      "typeIdentifier": "t_struct$_Permissions_$6139_storage_ptr",
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
                                  "referencedDeclaration": 6290,
                                  "type": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)",
                                  "value": "isAuthorized"
                                },
                                "id": 6199,
                                "name": "Identifier",
                                "src": "2452:12:17"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 6191,
                                  "type": "struct PermissionsLib.Permissions storage pointer",
                                  "value": "self"
                                },
                                "id": 6200,
                                "name": "Identifier",
                                "src": "2465:4:17"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 6193,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 6201,
                                "name": "Identifier",
                                "src": "2471:5:17"
                              }
                            ],
                            "id": 6202,
                            "name": "FunctionCall",
                            "src": "2452:25:17"
                          }
                        ],
                        "id": 6203,
                        "name": "FunctionCall",
                        "src": "2444:34:17"
                      }
                    ],
                    "id": 6204,
                    "name": "ExpressionStatement",
                    "src": "2444:34:17"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        6206
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "indexOfAgentToRevoke",
                          "scope": 6275,
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
                            "id": 6205,
                            "name": "ElementaryTypeName",
                            "src": "2489:4:17"
                          }
                        ],
                        "id": 6206,
                        "name": "VariableDeclaration",
                        "src": "2489:25:17"
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
                              "referencedDeclaration": 6135,
                              "type": "mapping(address => uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 6191,
                                  "type": "struct PermissionsLib.Permissions storage pointer",
                                  "value": "self"
                                },
                                "id": 6207,
                                "name": "Identifier",
                                "src": "2517:4:17"
                              }
                            ],
                            "id": 6208,
                            "name": "MemberAccess",
                            "src": "2517:17:17"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 6193,
                              "type": "address",
                              "value": "agent"
                            },
                            "id": 6209,
                            "name": "Identifier",
                            "src": "2535:5:17"
                          }
                        ],
                        "id": 6210,
                        "name": "IndexAccess",
                        "src": "2517:24:17"
                      }
                    ],
                    "id": 6211,
                    "name": "VariableDeclarationStatement",
                    "src": "2489:52:17"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        6213
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "indexOfAgentToMove",
                          "scope": 6275,
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
                            "id": 6212,
                            "name": "ElementaryTypeName",
                            "src": "2551:4:17"
                          }
                        ],
                        "id": 6213,
                        "name": "VariableDeclaration",
                        "src": "2551:23:17"
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
                                  "referencedDeclaration": 6138,
                                  "type": "address[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 6191,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 6214,
                                    "name": "Identifier",
                                    "src": "2577:4:17"
                                  }
                                ],
                                "id": 6215,
                                "name": "MemberAccess",
                                "src": "2577:21:17"
                              }
                            ],
                            "id": 6216,
                            "name": "MemberAccess",
                            "src": "2577:28:17"
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
                            "id": 6217,
                            "name": "Literal",
                            "src": "2608:1:17"
                          }
                        ],
                        "id": 6218,
                        "name": "BinaryOperation",
                        "src": "2577:32:17"
                      }
                    ],
                    "id": 6219,
                    "name": "VariableDeclarationStatement",
                    "src": "2551:58:17"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        6221
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "agentToMove",
                          "scope": 6275,
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
                            "id": 6220,
                            "name": "ElementaryTypeName",
                            "src": "2619:7:17"
                          }
                        ],
                        "id": 6221,
                        "name": "VariableDeclaration",
                        "src": "2619:19:17"
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
                              "referencedDeclaration": 6138,
                              "type": "address[] storage ref"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 6191,
                                  "type": "struct PermissionsLib.Permissions storage pointer",
                                  "value": "self"
                                },
                                "id": 6222,
                                "name": "Identifier",
                                "src": "2641:4:17"
                              }
                            ],
                            "id": 6223,
                            "name": "MemberAccess",
                            "src": "2641:21:17"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 6213,
                              "type": "uint256",
                              "value": "indexOfAgentToMove"
                            },
                            "id": 6224,
                            "name": "Identifier",
                            "src": "2663:18:17"
                          }
                        ],
                        "id": 6225,
                        "name": "IndexAccess",
                        "src": "2641:41:17"
                      }
                    ],
                    "id": 6226,
                    "name": "VariableDeclarationStatement",
                    "src": "2619:63:17"
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
                                  "referencedDeclaration": 6131,
                                  "type": "mapping(address => bool)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 6191,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 6227,
                                    "name": "Identifier",
                                    "src": "2745:4:17"
                                  }
                                ],
                                "id": 6228,
                                "name": "MemberAccess",
                                "src": "2745:15:17"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 6193,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 6229,
                                "name": "Identifier",
                                "src": "2761:5:17"
                              }
                            ],
                            "id": 6230,
                            "name": "IndexAccess",
                            "src": "2745:22:17"
                          }
                        ],
                        "id": 6231,
                        "name": "UnaryOperation",
                        "src": "2738:29:17"
                      }
                    ],
                    "id": 6232,
                    "name": "ExpressionStatement",
                    "src": "2738:29:17"
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
                                  "referencedDeclaration": 6138,
                                  "type": "address[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 6191,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 6233,
                                    "name": "Identifier",
                                    "src": "2848:4:17"
                                  }
                                ],
                                "id": 6236,
                                "name": "MemberAccess",
                                "src": "2848:21:17"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 6206,
                                  "type": "uint256",
                                  "value": "indexOfAgentToRevoke"
                                },
                                "id": 6235,
                                "name": "Identifier",
                                "src": "2870:20:17"
                              }
                            ],
                            "id": 6237,
                            "name": "IndexAccess",
                            "src": "2848:43:17"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 6221,
                              "type": "address",
                              "value": "agentToMove"
                            },
                            "id": 6238,
                            "name": "Identifier",
                            "src": "2894:11:17"
                          }
                        ],
                        "id": 6239,
                        "name": "Assignment",
                        "src": "2848:57:17"
                      }
                    ],
                    "id": 6240,
                    "name": "ExpressionStatement",
                    "src": "2848:57:17"
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
                                  "referencedDeclaration": 6135,
                                  "type": "mapping(address => uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 6191,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 6241,
                                    "name": "Identifier",
                                    "src": "2976:4:17"
                                  }
                                ],
                                "id": 6244,
                                "name": "MemberAccess",
                                "src": "2976:17:17"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 6221,
                                  "type": "address",
                                  "value": "agentToMove"
                                },
                                "id": 6243,
                                "name": "Identifier",
                                "src": "2994:11:17"
                              }
                            ],
                            "id": 6245,
                            "name": "IndexAccess",
                            "src": "2976:30:17"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 6206,
                              "type": "uint256",
                              "value": "indexOfAgentToRevoke"
                            },
                            "id": 6246,
                            "name": "Identifier",
                            "src": "3009:20:17"
                          }
                        ],
                        "id": 6247,
                        "name": "Assignment",
                        "src": "2976:53:17"
                      }
                    ],
                    "id": 6248,
                    "name": "ExpressionStatement",
                    "src": "2976:53:17"
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
                                  "referencedDeclaration": 6135,
                                  "type": "mapping(address => uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 6191,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 6249,
                                    "name": "Identifier",
                                    "src": "3046:4:17"
                                  }
                                ],
                                "id": 6250,
                                "name": "MemberAccess",
                                "src": "3046:17:17"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 6193,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 6251,
                                "name": "Identifier",
                                "src": "3064:5:17"
                              }
                            ],
                            "id": 6252,
                            "name": "IndexAccess",
                            "src": "3046:24:17"
                          }
                        ],
                        "id": 6253,
                        "name": "UnaryOperation",
                        "src": "3039:31:17"
                      }
                    ],
                    "id": 6254,
                    "name": "ExpressionStatement",
                    "src": "3039:31:17"
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
                                  "referencedDeclaration": 6138,
                                  "type": "address[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 6191,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 6255,
                                    "name": "Identifier",
                                    "src": "3144:4:17"
                                  }
                                ],
                                "id": 6256,
                                "name": "MemberAccess",
                                "src": "3144:21:17"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 6213,
                                  "type": "uint256",
                                  "value": "indexOfAgentToMove"
                                },
                                "id": 6257,
                                "name": "Identifier",
                                "src": "3166:18:17"
                              }
                            ],
                            "id": 6258,
                            "name": "IndexAccess",
                            "src": "3144:41:17"
                          }
                        ],
                        "id": 6259,
                        "name": "UnaryOperation",
                        "src": "3137:48:17"
                      }
                    ],
                    "id": 6260,
                    "name": "ExpressionStatement",
                    "src": "3137:48:17"
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
                                  "referencedDeclaration": 6138,
                                  "type": "address[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 6191,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 6261,
                                    "name": "Identifier",
                                    "src": "3195:4:17"
                                  }
                                ],
                                "id": 6264,
                                "name": "MemberAccess",
                                "src": "3195:21:17"
                              }
                            ],
                            "id": 6265,
                            "name": "MemberAccess",
                            "src": "3195:28:17"
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
                            "id": 6266,
                            "name": "Literal",
                            "src": "3227:1:17"
                          }
                        ],
                        "id": 6267,
                        "name": "Assignment",
                        "src": "3195:33:17"
                      }
                    ],
                    "id": 6268,
                    "name": "ExpressionStatement",
                    "src": "3195:33:17"
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
                              "referencedDeclaration": 6127,
                              "type": "function (address,string memory)",
                              "value": "AuthorizationRevoked"
                            },
                            "id": 6269,
                            "name": "Identifier",
                            "src": "3239:20:17"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 6193,
                              "type": "address",
                              "value": "agent"
                            },
                            "id": 6270,
                            "name": "Identifier",
                            "src": "3260:5:17"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 6195,
                              "type": "string memory",
                              "value": "callingContext"
                            },
                            "id": 6271,
                            "name": "Identifier",
                            "src": "3267:14:17"
                          }
                        ],
                        "id": 6272,
                        "name": "FunctionCall",
                        "src": "3239:43:17"
                      }
                    ],
                    "id": 6273,
                    "name": "ExpressionStatement",
                    "src": "3239:43:17"
                  }
                ],
                "id": 6274,
                "name": "Block",
                "src": "2265:1024:17"
              }
            ],
            "id": 6275,
            "name": "FunctionDefinition",
            "src": "2121:1168:17"
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
              "scope": 6319,
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
                      "scope": 6290,
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
                          "referencedDeclaration": 6139,
                          "type": "struct PermissionsLib.Permissions storage pointer"
                        },
                        "id": 6276,
                        "name": "UserDefinedTypeName",
                        "src": "3317:11:17"
                      }
                    ],
                    "id": 6277,
                    "name": "VariableDeclaration",
                    "src": "3317:24:17"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agent",
                      "scope": 6290,
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
                        "id": 6278,
                        "name": "ElementaryTypeName",
                        "src": "3343:7:17"
                      }
                    ],
                    "id": 6279,
                    "name": "VariableDeclaration",
                    "src": "3343:13:17"
                  }
                ],
                "id": 6280,
                "name": "ParameterList",
                "src": "3316:41:17"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 6290,
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
                        "id": 6281,
                        "name": "ElementaryTypeName",
                        "src": "3405:4:17"
                      }
                    ],
                    "id": 6282,
                    "name": "VariableDeclaration",
                    "src": "3405:4:17"
                  }
                ],
                "id": 6283,
                "name": "ParameterList",
                "src": "3404:6:17"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 6283
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
                              "referencedDeclaration": 6131,
                              "type": "mapping(address => bool)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 6277,
                                  "type": "struct PermissionsLib.Permissions storage pointer",
                                  "value": "self"
                                },
                                "id": 6284,
                                "name": "Identifier",
                                "src": "3432:4:17"
                              }
                            ],
                            "id": 6285,
                            "name": "MemberAccess",
                            "src": "3432:15:17"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 6279,
                              "type": "address",
                              "value": "agent"
                            },
                            "id": 6286,
                            "name": "Identifier",
                            "src": "3448:5:17"
                          }
                        ],
                        "id": 6287,
                        "name": "IndexAccess",
                        "src": "3432:22:17"
                      }
                    ],
                    "id": 6288,
                    "name": "Return",
                    "src": "3425:29:17"
                  }
                ],
                "id": 6289,
                "name": "Block",
                "src": "3415:46:17"
              }
            ],
            "id": 6290,
            "name": "FunctionDefinition",
            "src": "3295:166:17"
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
              "scope": 6319,
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
                      "scope": 6306,
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
                          "referencedDeclaration": 6139,
                          "type": "struct PermissionsLib.Permissions storage pointer"
                        },
                        "id": 6291,
                        "name": "UserDefinedTypeName",
                        "src": "3492:11:17"
                      }
                    ],
                    "id": 6292,
                    "name": "VariableDeclaration",
                    "src": "3492:24:17"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agent",
                      "scope": 6306,
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
                        "id": 6293,
                        "name": "ElementaryTypeName",
                        "src": "3518:7:17"
                      }
                    ],
                    "id": 6294,
                    "name": "VariableDeclaration",
                    "src": "3518:13:17"
                  }
                ],
                "id": 6295,
                "name": "ParameterList",
                "src": "3491:41:17"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 6306,
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
                        "id": 6296,
                        "name": "ElementaryTypeName",
                        "src": "3580:4:17"
                      }
                    ],
                    "id": 6297,
                    "name": "VariableDeclaration",
                    "src": "3580:4:17"
                  }
                ],
                "id": 6298,
                "name": "ParameterList",
                "src": "3579:6:17"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 6298
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
                                      "typeIdentifier": "t_struct$_Permissions_$6139_storage_ptr",
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
                                  "referencedDeclaration": 6290,
                                  "type": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)",
                                  "value": "isAuthorized"
                                },
                                "id": 6299,
                                "name": "Identifier",
                                "src": "3608:12:17"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 6292,
                                  "type": "struct PermissionsLib.Permissions storage pointer",
                                  "value": "self"
                                },
                                "id": 6300,
                                "name": "Identifier",
                                "src": "3621:4:17"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 6294,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 6301,
                                "name": "Identifier",
                                "src": "3627:5:17"
                              }
                            ],
                            "id": 6302,
                            "name": "FunctionCall",
                            "src": "3608:25:17"
                          }
                        ],
                        "id": 6303,
                        "name": "UnaryOperation",
                        "src": "3607:26:17"
                      }
                    ],
                    "id": 6304,
                    "name": "Return",
                    "src": "3600:33:17"
                  }
                ],
                "id": 6305,
                "name": "Block",
                "src": "3590:50:17"
              }
            ],
            "id": 6306,
            "name": "FunctionDefinition",
            "src": "3467:173:17"
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
              "scope": 6319,
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
                      "scope": 6318,
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
                          "referencedDeclaration": 6139,
                          "type": "struct PermissionsLib.Permissions storage pointer"
                        },
                        "id": 6307,
                        "name": "UserDefinedTypeName",
                        "src": "3675:11:17"
                      }
                    ],
                    "id": 6308,
                    "name": "VariableDeclaration",
                    "src": "3675:24:17"
                  }
                ],
                "id": 6309,
                "name": "ParameterList",
                "src": "3674:26:17"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 6318,
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
                            "id": 6310,
                            "name": "ElementaryTypeName",
                            "src": "3748:7:17"
                          }
                        ],
                        "id": 6311,
                        "name": "ArrayTypeName",
                        "src": "3748:9:17"
                      }
                    ],
                    "id": 6312,
                    "name": "VariableDeclaration",
                    "src": "3748:9:17"
                  }
                ],
                "id": 6313,
                "name": "ParameterList",
                "src": "3747:11:17"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 6313
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
                          "referencedDeclaration": 6138,
                          "type": "address[] storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 6308,
                              "type": "struct PermissionsLib.Permissions storage pointer",
                              "value": "self"
                            },
                            "id": 6314,
                            "name": "Identifier",
                            "src": "3780:4:17"
                          }
                        ],
                        "id": 6315,
                        "name": "MemberAccess",
                        "src": "3780:21:17"
                      }
                    ],
                    "id": 6316,
                    "name": "Return",
                    "src": "3773:28:17"
                  }
                ],
                "id": 6317,
                "name": "Block",
                "src": "3763:45:17"
              }
            ],
            "id": 6318,
            "name": "FunctionDefinition",
            "src": "3646:162:17"
          }
        ],
        "id": 6319,
        "name": "ContractDefinition",
        "src": "1157:2653:17"
      }
    ],
    "id": 6320,
    "name": "SourceUnit",
    "src": "584:3227:17"
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
      "address": "0xbb46fc6f6ff975fa3398837e8c8141b3c66f6f30"
    },
    "70": {
      "events": {},
      "links": {},
      "address": "0xee3d7131ce247032ba07d14f599e2aa81f06f288"
    }
  },
  "schemaVersion": "1.0.1",
  "updatedAt": "2019-03-12T22:10:52.164Z"
}