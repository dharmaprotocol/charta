export const PermissionsLib = 
{
  "contractName": "PermissionsLib",
  "abi": [],
  "bytecode": "0x60606040523415600e57600080fd5b603580601b6000396000f3006060604052600080fd00a165627a7a72305820c354ce7b74c3d2f71d288e1e04a33cbf1ca35c1d7dcdd13bafeacebea2bedd460029",
  "deployedBytecode": "0x6060604052600080fd00a165627a7a72305820c354ce7b74c3d2f71d288e1e04a33cbf1ca35c1d7dcdd13bafeacebea2bedd460029",
  "sourceMap": "610:2090:7:-;;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "610:2090:7:-;;;;;",
  "source": "/*\n\n  Copyright 2017 Dharma Labs Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n*/\n\npragma solidity 0.4.18;\n\n\nlibrary PermissionsLib {\n    struct Permissions {\n        mapping (address => bool) authorized;\n        mapping (address => uint) agentToIndex; // ensures O(1) look-up\n        address[] authorizedAgents;\n    }\n\n    function authorize(Permissions storage self, address agent)\n        internal\n    {\n        require(isNotAuthorized(self, agent));\n\n        self.authorized[agent] = true;\n        self.authorizedAgents.push(agent);\n        self.agentToIndex[agent] = self.authorizedAgents.length - 1;\n    }\n\n    function revokeAuthorization(Permissions storage self, address agent)\n        internal\n    {\n        /* We only want to do work in the case where the agent whose\n        authorization is being revoked had authorization permissions in the\n        first place. */\n        require(isAuthorized(self, agent));\n\n        uint indexOfAgentToRevoke = self.agentToIndex[agent];\n        uint indexOfAgentToMove = self.authorizedAgents.length - 1;\n        address agentToMove = self.authorizedAgents[indexOfAgentToMove];\n\n        // Revoke the agent's authorization.\n        delete self.authorized[agent];\n\n        // Remove the agent from our collection of authorized agents.\n        self.authorizedAgents[indexOfAgentToRevoke] = agentToMove;\n\n        // Update our indices to reflect the above changes.\n        self.agentToIndex[agentToMove] = indexOfAgentToRevoke;\n        delete self.agentToIndex[agent];\n\n        // Clean up memory that's no longer being used.\n        delete self.authorizedAgents[indexOfAgentToMove];\n        self.authorizedAgents.length -= 1;\n    }\n\n    function isAuthorized(Permissions storage self, address agent)\n        internal\n        view\n        returns (bool)\n    {\n        return self.authorized[agent];\n    }\n\n    function isNotAuthorized(Permissions storage self, address agent)\n        internal\n        view\n        returns (bool)\n    {\n        return !isAuthorized(self, agent);\n    }\n\n    function getAuthorizedAgents(Permissions storage self)\n        internal\n        view\n        returns (address[])\n    {\n        return self.authorizedAgents;\n    }\n}\n",
  "sourcePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/libraries/PermissionsLib.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/libraries/PermissionsLib.sol",
      "exportedSymbols": {
        "PermissionsLib": [
          2374
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
        "id": 2196,
        "name": "PragmaDirective",
        "src": "584:23:7"
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
            2374
          ],
          "name": "PermissionsLib",
          "scope": 2375
        },
        "children": [
          {
            "attributes": {
              "canonicalName": "PermissionsLib.Permissions",
              "name": "Permissions",
              "scope": 2374,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "constant": false,
                  "name": "authorized",
                  "scope": 2208,
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
                        "id": 2197,
                        "name": "ElementaryTypeName",
                        "src": "677:7:7"
                      },
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 2198,
                        "name": "ElementaryTypeName",
                        "src": "688:4:7"
                      }
                    ],
                    "id": 2199,
                    "name": "Mapping",
                    "src": "668:25:7"
                  }
                ],
                "id": 2200,
                "name": "VariableDeclaration",
                "src": "668:36:7"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "agentToIndex",
                  "scope": 2208,
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
                        "id": 2201,
                        "name": "ElementaryTypeName",
                        "src": "723:7:7"
                      },
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 2202,
                        "name": "ElementaryTypeName",
                        "src": "734:4:7"
                      }
                    ],
                    "id": 2203,
                    "name": "Mapping",
                    "src": "714:25:7"
                  }
                ],
                "id": 2204,
                "name": "VariableDeclaration",
                "src": "714:38:7"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "authorizedAgents",
                  "scope": 2208,
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
                        "id": 2205,
                        "name": "ElementaryTypeName",
                        "src": "786:7:7"
                      }
                    ],
                    "id": 2206,
                    "name": "ArrayTypeName",
                    "src": "786:9:7"
                  }
                ],
                "id": 2207,
                "name": "VariableDeclaration",
                "src": "786:26:7"
              }
            ],
            "id": 2208,
            "name": "StructDefinition",
            "src": "639:180:7"
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
              "scope": 2374,
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
                      "scope": 2251,
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
                          "referencedDeclaration": 2208,
                          "type": "struct PermissionsLib.Permissions storage pointer"
                        },
                        "id": 2209,
                        "name": "UserDefinedTypeName",
                        "src": "844:11:7"
                      }
                    ],
                    "id": 2210,
                    "name": "VariableDeclaration",
                    "src": "844:24:7"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agent",
                      "scope": 2251,
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
                        "id": 2211,
                        "name": "ElementaryTypeName",
                        "src": "870:7:7"
                      }
                    ],
                    "id": 2212,
                    "name": "VariableDeclaration",
                    "src": "870:13:7"
                  }
                ],
                "id": 2213,
                "name": "ParameterList",
                "src": "843:41:7"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 2214,
                "name": "ParameterList",
                "src": "906:0:7"
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
                              "referencedDeclaration": 2746,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 2215,
                            "name": "Identifier",
                            "src": "916:7:7"
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
                                      "typeIdentifier": "t_struct$_Permissions_$2208_storage_ptr",
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
                                  "referencedDeclaration": 2361,
                                  "type": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)",
                                  "value": "isNotAuthorized"
                                },
                                "id": 2216,
                                "name": "Identifier",
                                "src": "924:15:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2210,
                                  "type": "struct PermissionsLib.Permissions storage pointer",
                                  "value": "self"
                                },
                                "id": 2217,
                                "name": "Identifier",
                                "src": "940:4:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2212,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 2218,
                                "name": "Identifier",
                                "src": "946:5:7"
                              }
                            ],
                            "id": 2219,
                            "name": "FunctionCall",
                            "src": "924:28:7"
                          }
                        ],
                        "id": 2220,
                        "name": "FunctionCall",
                        "src": "916:37:7"
                      }
                    ],
                    "id": 2221,
                    "name": "ExpressionStatement",
                    "src": "916:37:7"
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
                                  "referencedDeclaration": 2200,
                                  "type": "mapping(address => bool)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2210,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 2222,
                                    "name": "Identifier",
                                    "src": "964:4:7"
                                  }
                                ],
                                "id": 2225,
                                "name": "MemberAccess",
                                "src": "964:15:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2212,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 2224,
                                "name": "Identifier",
                                "src": "980:5:7"
                              }
                            ],
                            "id": 2226,
                            "name": "IndexAccess",
                            "src": "964:22:7"
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
                            "id": 2227,
                            "name": "Literal",
                            "src": "989:4:7"
                          }
                        ],
                        "id": 2228,
                        "name": "Assignment",
                        "src": "964:29:7"
                      }
                    ],
                    "id": 2229,
                    "name": "ExpressionStatement",
                    "src": "964:29:7"
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
                                  "referencedDeclaration": 2207,
                                  "type": "address[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2210,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 2230,
                                    "name": "Identifier",
                                    "src": "1003:4:7"
                                  }
                                ],
                                "id": 2233,
                                "name": "MemberAccess",
                                "src": "1003:21:7"
                              }
                            ],
                            "id": 2234,
                            "name": "MemberAccess",
                            "src": "1003:26:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2212,
                              "type": "address",
                              "value": "agent"
                            },
                            "id": 2235,
                            "name": "Identifier",
                            "src": "1030:5:7"
                          }
                        ],
                        "id": 2236,
                        "name": "FunctionCall",
                        "src": "1003:33:7"
                      }
                    ],
                    "id": 2237,
                    "name": "ExpressionStatement",
                    "src": "1003:33:7"
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
                                  "referencedDeclaration": 2204,
                                  "type": "mapping(address => uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2210,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 2238,
                                    "name": "Identifier",
                                    "src": "1046:4:7"
                                  }
                                ],
                                "id": 2241,
                                "name": "MemberAccess",
                                "src": "1046:17:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2212,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 2240,
                                "name": "Identifier",
                                "src": "1064:5:7"
                              }
                            ],
                            "id": 2242,
                            "name": "IndexAccess",
                            "src": "1046:24:7"
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
                                      "referencedDeclaration": 2207,
                                      "type": "address[] storage ref"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 2210,
                                          "type": "struct PermissionsLib.Permissions storage pointer",
                                          "value": "self"
                                        },
                                        "id": 2243,
                                        "name": "Identifier",
                                        "src": "1073:4:7"
                                      }
                                    ],
                                    "id": 2244,
                                    "name": "MemberAccess",
                                    "src": "1073:21:7"
                                  }
                                ],
                                "id": 2245,
                                "name": "MemberAccess",
                                "src": "1073:28:7"
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
                                "id": 2246,
                                "name": "Literal",
                                "src": "1104:1:7"
                              }
                            ],
                            "id": 2247,
                            "name": "BinaryOperation",
                            "src": "1073:32:7"
                          }
                        ],
                        "id": 2248,
                        "name": "Assignment",
                        "src": "1046:59:7"
                      }
                    ],
                    "id": 2249,
                    "name": "ExpressionStatement",
                    "src": "1046:59:7"
                  }
                ],
                "id": 2250,
                "name": "Block",
                "src": "906:206:7"
              }
            ],
            "id": 2251,
            "name": "FunctionDefinition",
            "src": "825:287:7"
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
              "scope": 2374,
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
                      "scope": 2330,
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
                          "referencedDeclaration": 2208,
                          "type": "struct PermissionsLib.Permissions storage pointer"
                        },
                        "id": 2252,
                        "name": "UserDefinedTypeName",
                        "src": "1147:11:7"
                      }
                    ],
                    "id": 2253,
                    "name": "VariableDeclaration",
                    "src": "1147:24:7"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agent",
                      "scope": 2330,
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
                        "id": 2254,
                        "name": "ElementaryTypeName",
                        "src": "1173:7:7"
                      }
                    ],
                    "id": 2255,
                    "name": "VariableDeclaration",
                    "src": "1173:13:7"
                  }
                ],
                "id": 2256,
                "name": "ParameterList",
                "src": "1146:41:7"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 2257,
                "name": "ParameterList",
                "src": "1209:0:7"
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
                              "referencedDeclaration": 2746,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 2258,
                            "name": "Identifier",
                            "src": "1388:7:7"
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
                                      "typeIdentifier": "t_struct$_Permissions_$2208_storage_ptr",
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
                                  "referencedDeclaration": 2345,
                                  "type": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)",
                                  "value": "isAuthorized"
                                },
                                "id": 2259,
                                "name": "Identifier",
                                "src": "1396:12:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2253,
                                  "type": "struct PermissionsLib.Permissions storage pointer",
                                  "value": "self"
                                },
                                "id": 2260,
                                "name": "Identifier",
                                "src": "1409:4:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2255,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 2261,
                                "name": "Identifier",
                                "src": "1415:5:7"
                              }
                            ],
                            "id": 2262,
                            "name": "FunctionCall",
                            "src": "1396:25:7"
                          }
                        ],
                        "id": 2263,
                        "name": "FunctionCall",
                        "src": "1388:34:7"
                      }
                    ],
                    "id": 2264,
                    "name": "ExpressionStatement",
                    "src": "1388:34:7"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        2266
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "indexOfAgentToRevoke",
                          "scope": 2330,
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
                            "id": 2265,
                            "name": "ElementaryTypeName",
                            "src": "1433:4:7"
                          }
                        ],
                        "id": 2266,
                        "name": "VariableDeclaration",
                        "src": "1433:25:7"
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
                              "referencedDeclaration": 2204,
                              "type": "mapping(address => uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2253,
                                  "type": "struct PermissionsLib.Permissions storage pointer",
                                  "value": "self"
                                },
                                "id": 2267,
                                "name": "Identifier",
                                "src": "1461:4:7"
                              }
                            ],
                            "id": 2268,
                            "name": "MemberAccess",
                            "src": "1461:17:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2255,
                              "type": "address",
                              "value": "agent"
                            },
                            "id": 2269,
                            "name": "Identifier",
                            "src": "1479:5:7"
                          }
                        ],
                        "id": 2270,
                        "name": "IndexAccess",
                        "src": "1461:24:7"
                      }
                    ],
                    "id": 2271,
                    "name": "VariableDeclarationStatement",
                    "src": "1433:52:7"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        2273
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "indexOfAgentToMove",
                          "scope": 2330,
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
                            "id": 2272,
                            "name": "ElementaryTypeName",
                            "src": "1495:4:7"
                          }
                        ],
                        "id": 2273,
                        "name": "VariableDeclaration",
                        "src": "1495:23:7"
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
                                  "referencedDeclaration": 2207,
                                  "type": "address[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2253,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 2274,
                                    "name": "Identifier",
                                    "src": "1521:4:7"
                                  }
                                ],
                                "id": 2275,
                                "name": "MemberAccess",
                                "src": "1521:21:7"
                              }
                            ],
                            "id": 2276,
                            "name": "MemberAccess",
                            "src": "1521:28:7"
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
                            "id": 2277,
                            "name": "Literal",
                            "src": "1552:1:7"
                          }
                        ],
                        "id": 2278,
                        "name": "BinaryOperation",
                        "src": "1521:32:7"
                      }
                    ],
                    "id": 2279,
                    "name": "VariableDeclarationStatement",
                    "src": "1495:58:7"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        2281
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "agentToMove",
                          "scope": 2330,
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
                            "id": 2280,
                            "name": "ElementaryTypeName",
                            "src": "1563:7:7"
                          }
                        ],
                        "id": 2281,
                        "name": "VariableDeclaration",
                        "src": "1563:19:7"
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
                              "referencedDeclaration": 2207,
                              "type": "address[] storage ref"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2253,
                                  "type": "struct PermissionsLib.Permissions storage pointer",
                                  "value": "self"
                                },
                                "id": 2282,
                                "name": "Identifier",
                                "src": "1585:4:7"
                              }
                            ],
                            "id": 2283,
                            "name": "MemberAccess",
                            "src": "1585:21:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2273,
                              "type": "uint256",
                              "value": "indexOfAgentToMove"
                            },
                            "id": 2284,
                            "name": "Identifier",
                            "src": "1607:18:7"
                          }
                        ],
                        "id": 2285,
                        "name": "IndexAccess",
                        "src": "1585:41:7"
                      }
                    ],
                    "id": 2286,
                    "name": "VariableDeclarationStatement",
                    "src": "1563:63:7"
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
                                  "referencedDeclaration": 2200,
                                  "type": "mapping(address => bool)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2253,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 2287,
                                    "name": "Identifier",
                                    "src": "1689:4:7"
                                  }
                                ],
                                "id": 2288,
                                "name": "MemberAccess",
                                "src": "1689:15:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2255,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 2289,
                                "name": "Identifier",
                                "src": "1705:5:7"
                              }
                            ],
                            "id": 2290,
                            "name": "IndexAccess",
                            "src": "1689:22:7"
                          }
                        ],
                        "id": 2291,
                        "name": "UnaryOperation",
                        "src": "1682:29:7"
                      }
                    ],
                    "id": 2292,
                    "name": "ExpressionStatement",
                    "src": "1682:29:7"
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
                                  "referencedDeclaration": 2207,
                                  "type": "address[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2253,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 2293,
                                    "name": "Identifier",
                                    "src": "1792:4:7"
                                  }
                                ],
                                "id": 2296,
                                "name": "MemberAccess",
                                "src": "1792:21:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2266,
                                  "type": "uint256",
                                  "value": "indexOfAgentToRevoke"
                                },
                                "id": 2295,
                                "name": "Identifier",
                                "src": "1814:20:7"
                              }
                            ],
                            "id": 2297,
                            "name": "IndexAccess",
                            "src": "1792:43:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2281,
                              "type": "address",
                              "value": "agentToMove"
                            },
                            "id": 2298,
                            "name": "Identifier",
                            "src": "1838:11:7"
                          }
                        ],
                        "id": 2299,
                        "name": "Assignment",
                        "src": "1792:57:7"
                      }
                    ],
                    "id": 2300,
                    "name": "ExpressionStatement",
                    "src": "1792:57:7"
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
                                  "referencedDeclaration": 2204,
                                  "type": "mapping(address => uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2253,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 2301,
                                    "name": "Identifier",
                                    "src": "1920:4:7"
                                  }
                                ],
                                "id": 2304,
                                "name": "MemberAccess",
                                "src": "1920:17:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2281,
                                  "type": "address",
                                  "value": "agentToMove"
                                },
                                "id": 2303,
                                "name": "Identifier",
                                "src": "1938:11:7"
                              }
                            ],
                            "id": 2305,
                            "name": "IndexAccess",
                            "src": "1920:30:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2266,
                              "type": "uint256",
                              "value": "indexOfAgentToRevoke"
                            },
                            "id": 2306,
                            "name": "Identifier",
                            "src": "1953:20:7"
                          }
                        ],
                        "id": 2307,
                        "name": "Assignment",
                        "src": "1920:53:7"
                      }
                    ],
                    "id": 2308,
                    "name": "ExpressionStatement",
                    "src": "1920:53:7"
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
                                  "referencedDeclaration": 2204,
                                  "type": "mapping(address => uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2253,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 2309,
                                    "name": "Identifier",
                                    "src": "1990:4:7"
                                  }
                                ],
                                "id": 2310,
                                "name": "MemberAccess",
                                "src": "1990:17:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2255,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 2311,
                                "name": "Identifier",
                                "src": "2008:5:7"
                              }
                            ],
                            "id": 2312,
                            "name": "IndexAccess",
                            "src": "1990:24:7"
                          }
                        ],
                        "id": 2313,
                        "name": "UnaryOperation",
                        "src": "1983:31:7"
                      }
                    ],
                    "id": 2314,
                    "name": "ExpressionStatement",
                    "src": "1983:31:7"
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
                                  "referencedDeclaration": 2207,
                                  "type": "address[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2253,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 2315,
                                    "name": "Identifier",
                                    "src": "2088:4:7"
                                  }
                                ],
                                "id": 2316,
                                "name": "MemberAccess",
                                "src": "2088:21:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2273,
                                  "type": "uint256",
                                  "value": "indexOfAgentToMove"
                                },
                                "id": 2317,
                                "name": "Identifier",
                                "src": "2110:18:7"
                              }
                            ],
                            "id": 2318,
                            "name": "IndexAccess",
                            "src": "2088:41:7"
                          }
                        ],
                        "id": 2319,
                        "name": "UnaryOperation",
                        "src": "2081:48:7"
                      }
                    ],
                    "id": 2320,
                    "name": "ExpressionStatement",
                    "src": "2081:48:7"
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
                                  "referencedDeclaration": 2207,
                                  "type": "address[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2253,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 2321,
                                    "name": "Identifier",
                                    "src": "2139:4:7"
                                  }
                                ],
                                "id": 2324,
                                "name": "MemberAccess",
                                "src": "2139:21:7"
                              }
                            ],
                            "id": 2325,
                            "name": "MemberAccess",
                            "src": "2139:28:7"
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
                            "id": 2326,
                            "name": "Literal",
                            "src": "2171:1:7"
                          }
                        ],
                        "id": 2327,
                        "name": "Assignment",
                        "src": "2139:33:7"
                      }
                    ],
                    "id": 2328,
                    "name": "ExpressionStatement",
                    "src": "2139:33:7"
                  }
                ],
                "id": 2329,
                "name": "Block",
                "src": "1209:970:7"
              }
            ],
            "id": 2330,
            "name": "FunctionDefinition",
            "src": "1118:1061:7"
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
              "scope": 2374,
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
                      "scope": 2345,
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
                          "referencedDeclaration": 2208,
                          "type": "struct PermissionsLib.Permissions storage pointer"
                        },
                        "id": 2331,
                        "name": "UserDefinedTypeName",
                        "src": "2207:11:7"
                      }
                    ],
                    "id": 2332,
                    "name": "VariableDeclaration",
                    "src": "2207:24:7"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agent",
                      "scope": 2345,
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
                        "id": 2333,
                        "name": "ElementaryTypeName",
                        "src": "2233:7:7"
                      }
                    ],
                    "id": 2334,
                    "name": "VariableDeclaration",
                    "src": "2233:13:7"
                  }
                ],
                "id": 2335,
                "name": "ParameterList",
                "src": "2206:41:7"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2345,
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
                        "id": 2336,
                        "name": "ElementaryTypeName",
                        "src": "2295:4:7"
                      }
                    ],
                    "id": 2337,
                    "name": "VariableDeclaration",
                    "src": "2295:4:7"
                  }
                ],
                "id": 2338,
                "name": "ParameterList",
                "src": "2294:6:7"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 2338
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
                              "referencedDeclaration": 2200,
                              "type": "mapping(address => bool)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2332,
                                  "type": "struct PermissionsLib.Permissions storage pointer",
                                  "value": "self"
                                },
                                "id": 2339,
                                "name": "Identifier",
                                "src": "2322:4:7"
                              }
                            ],
                            "id": 2340,
                            "name": "MemberAccess",
                            "src": "2322:15:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2334,
                              "type": "address",
                              "value": "agent"
                            },
                            "id": 2341,
                            "name": "Identifier",
                            "src": "2338:5:7"
                          }
                        ],
                        "id": 2342,
                        "name": "IndexAccess",
                        "src": "2322:22:7"
                      }
                    ],
                    "id": 2343,
                    "name": "Return",
                    "src": "2315:29:7"
                  }
                ],
                "id": 2344,
                "name": "Block",
                "src": "2305:46:7"
              }
            ],
            "id": 2345,
            "name": "FunctionDefinition",
            "src": "2185:166:7"
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
              "scope": 2374,
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
                      "scope": 2361,
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
                          "referencedDeclaration": 2208,
                          "type": "struct PermissionsLib.Permissions storage pointer"
                        },
                        "id": 2346,
                        "name": "UserDefinedTypeName",
                        "src": "2382:11:7"
                      }
                    ],
                    "id": 2347,
                    "name": "VariableDeclaration",
                    "src": "2382:24:7"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agent",
                      "scope": 2361,
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
                        "id": 2348,
                        "name": "ElementaryTypeName",
                        "src": "2408:7:7"
                      }
                    ],
                    "id": 2349,
                    "name": "VariableDeclaration",
                    "src": "2408:13:7"
                  }
                ],
                "id": 2350,
                "name": "ParameterList",
                "src": "2381:41:7"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2361,
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
                        "id": 2351,
                        "name": "ElementaryTypeName",
                        "src": "2470:4:7"
                      }
                    ],
                    "id": 2352,
                    "name": "VariableDeclaration",
                    "src": "2470:4:7"
                  }
                ],
                "id": 2353,
                "name": "ParameterList",
                "src": "2469:6:7"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 2353
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
                                      "typeIdentifier": "t_struct$_Permissions_$2208_storage_ptr",
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
                                  "referencedDeclaration": 2345,
                                  "type": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)",
                                  "value": "isAuthorized"
                                },
                                "id": 2354,
                                "name": "Identifier",
                                "src": "2498:12:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2347,
                                  "type": "struct PermissionsLib.Permissions storage pointer",
                                  "value": "self"
                                },
                                "id": 2355,
                                "name": "Identifier",
                                "src": "2511:4:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2349,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 2356,
                                "name": "Identifier",
                                "src": "2517:5:7"
                              }
                            ],
                            "id": 2357,
                            "name": "FunctionCall",
                            "src": "2498:25:7"
                          }
                        ],
                        "id": 2358,
                        "name": "UnaryOperation",
                        "src": "2497:26:7"
                      }
                    ],
                    "id": 2359,
                    "name": "Return",
                    "src": "2490:33:7"
                  }
                ],
                "id": 2360,
                "name": "Block",
                "src": "2480:50:7"
              }
            ],
            "id": 2361,
            "name": "FunctionDefinition",
            "src": "2357:173:7"
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
              "scope": 2374,
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
                      "scope": 2373,
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
                          "referencedDeclaration": 2208,
                          "type": "struct PermissionsLib.Permissions storage pointer"
                        },
                        "id": 2362,
                        "name": "UserDefinedTypeName",
                        "src": "2565:11:7"
                      }
                    ],
                    "id": 2363,
                    "name": "VariableDeclaration",
                    "src": "2565:24:7"
                  }
                ],
                "id": 2364,
                "name": "ParameterList",
                "src": "2564:26:7"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2373,
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
                            "id": 2365,
                            "name": "ElementaryTypeName",
                            "src": "2638:7:7"
                          }
                        ],
                        "id": 2366,
                        "name": "ArrayTypeName",
                        "src": "2638:9:7"
                      }
                    ],
                    "id": 2367,
                    "name": "VariableDeclaration",
                    "src": "2638:9:7"
                  }
                ],
                "id": 2368,
                "name": "ParameterList",
                "src": "2637:11:7"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 2368
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
                          "referencedDeclaration": 2207,
                          "type": "address[] storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2363,
                              "type": "struct PermissionsLib.Permissions storage pointer",
                              "value": "self"
                            },
                            "id": 2369,
                            "name": "Identifier",
                            "src": "2670:4:7"
                          }
                        ],
                        "id": 2370,
                        "name": "MemberAccess",
                        "src": "2670:21:7"
                      }
                    ],
                    "id": 2371,
                    "name": "Return",
                    "src": "2663:28:7"
                  }
                ],
                "id": 2372,
                "name": "Block",
                "src": "2653:45:7"
              }
            ],
            "id": 2373,
            "name": "FunctionDefinition",
            "src": "2536:162:7"
          }
        ],
        "id": 2374,
        "name": "ContractDefinition",
        "src": "610:2090:7"
      }
    ],
    "id": 2375,
    "name": "SourceUnit",
    "src": "584:2117:7"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {
    "42": {
      "events": {},
      "links": {},
      "address": "0xb29ea4a4a4f81e58bfb1fd252c6fe31ed5c3d4d7"
    },
    "70": {
      "events": {},
      "links": {},
      "address": "0xc13d026d7e4e6c2864240aa1f26bb436c6271338"
    }
  },
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-03-28T21:53:21.090Z"
}