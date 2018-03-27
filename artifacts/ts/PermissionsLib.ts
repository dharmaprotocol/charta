export const PermissionsLib = 
{
  "contractName": "PermissionsLib",
  "abi": [],
  "bytecode": "0x60606040523415600e57600080fd5b603580601b6000396000f3006060604052600080fd00a165627a7a72305820c354ce7b74c3d2f71d288e1e04a33cbf1ca35c1d7dcdd13bafeacebea2bedd460029",
  "deployedBytecode": "0x6060604052600080fd00a165627a7a72305820c354ce7b74c3d2f71d288e1e04a33cbf1ca35c1d7dcdd13bafeacebea2bedd460029",
  "sourceMap": "610:2090:4:-;;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "610:2090:4:-;;;;;",
  "source": "/*\n\n  Copyright 2017 Dharma Labs Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n*/\n\npragma solidity 0.4.18;\n\n\nlibrary PermissionsLib {\n    struct Permissions {\n        mapping (address => bool) authorized;\n        mapping (address => uint) agentToIndex; // ensures O(1) look-up\n        address[] authorizedAgents;\n    }\n\n    function authorize(Permissions storage self, address agent)\n        internal\n    {\n        require(isNotAuthorized(self, agent));\n\n        self.authorized[agent] = true;\n        self.authorizedAgents.push(agent);\n        self.agentToIndex[agent] = self.authorizedAgents.length - 1;\n    }\n\n    function revokeAuthorization(Permissions storage self, address agent)\n        internal\n    {\n        /* We only want to do work in the case where the agent whose\n        authorization is being revoked had authorization permissions in the\n        first place. */\n        require(isAuthorized(self, agent));\n\n        uint indexOfAgentToRevoke = self.agentToIndex[agent];\n        uint indexOfAgentToMove = self.authorizedAgents.length - 1;\n        address agentToMove = self.authorizedAgents[indexOfAgentToMove];\n\n        // Revoke the agent's authorization.\n        delete self.authorized[agent];\n\n        // Remove the agent from our collection of authorized agents.\n        self.authorizedAgents[indexOfAgentToRevoke] = agentToMove;\n\n        // Update our indices to reflect the above changes.\n        self.agentToIndex[agentToMove] = indexOfAgentToRevoke;\n        delete self.agentToIndex[agent];\n\n        // Clean up memory that's no longer being used.\n        delete self.authorizedAgents[indexOfAgentToMove];\n        self.authorizedAgents.length -= 1;\n    }\n\n    function isAuthorized(Permissions storage self, address agent)\n        internal\n        view\n        returns (bool)\n    {\n        return self.authorized[agent];\n    }\n\n    function isNotAuthorized(Permissions storage self, address agent)\n        internal\n        view\n        returns (bool)\n    {\n        return !isAuthorized(self, agent);\n    }\n\n    function getAuthorizedAgents(Permissions storage self)\n        internal\n        view\n        returns (address[])\n    {\n        return self.authorizedAgents;\n    }\n}\n",
  "sourcePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/libraries/PermissionsLib.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/libraries/PermissionsLib.sol",
      "exportedSymbols": {
        "PermissionsLib": [
          1554
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
        "id": 1376,
        "name": "PragmaDirective",
        "src": "584:23:4"
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
            1554
          ],
          "name": "PermissionsLib",
          "scope": 1555
        },
        "children": [
          {
            "attributes": {
              "canonicalName": "PermissionsLib.Permissions",
              "name": "Permissions",
              "scope": 1554,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "constant": false,
                  "name": "authorized",
                  "scope": 1388,
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
                        "id": 1377,
                        "name": "ElementaryTypeName",
                        "src": "677:7:4"
                      },
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 1378,
                        "name": "ElementaryTypeName",
                        "src": "688:4:4"
                      }
                    ],
                    "id": 1379,
                    "name": "Mapping",
                    "src": "668:25:4"
                  }
                ],
                "id": 1380,
                "name": "VariableDeclaration",
                "src": "668:36:4"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "agentToIndex",
                  "scope": 1388,
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
                        "id": 1381,
                        "name": "ElementaryTypeName",
                        "src": "723:7:4"
                      },
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 1382,
                        "name": "ElementaryTypeName",
                        "src": "734:4:4"
                      }
                    ],
                    "id": 1383,
                    "name": "Mapping",
                    "src": "714:25:4"
                  }
                ],
                "id": 1384,
                "name": "VariableDeclaration",
                "src": "714:38:4"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "authorizedAgents",
                  "scope": 1388,
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
                        "id": 1385,
                        "name": "ElementaryTypeName",
                        "src": "786:7:4"
                      }
                    ],
                    "id": 1386,
                    "name": "ArrayTypeName",
                    "src": "786:9:4"
                  }
                ],
                "id": 1387,
                "name": "VariableDeclaration",
                "src": "786:26:4"
              }
            ],
            "id": 1388,
            "name": "StructDefinition",
            "src": "639:180:4"
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
              "scope": 1554,
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
                      "scope": 1431,
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
                          "referencedDeclaration": 1388,
                          "type": "struct PermissionsLib.Permissions storage pointer"
                        },
                        "id": 1389,
                        "name": "UserDefinedTypeName",
                        "src": "844:11:4"
                      }
                    ],
                    "id": 1390,
                    "name": "VariableDeclaration",
                    "src": "844:24:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agent",
                      "scope": 1431,
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
                        "id": 1391,
                        "name": "ElementaryTypeName",
                        "src": "870:7:4"
                      }
                    ],
                    "id": 1392,
                    "name": "VariableDeclaration",
                    "src": "870:13:4"
                  }
                ],
                "id": 1393,
                "name": "ParameterList",
                "src": "843:41:4"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 1394,
                "name": "ParameterList",
                "src": "906:0:4"
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
                              "referencedDeclaration": 1783,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 1395,
                            "name": "Identifier",
                            "src": "916:7:4"
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
                                      "typeIdentifier": "t_struct$_Permissions_$1388_storage_ptr",
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
                                  "referencedDeclaration": 1541,
                                  "type": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)",
                                  "value": "isNotAuthorized"
                                },
                                "id": 1396,
                                "name": "Identifier",
                                "src": "924:15:4"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1390,
                                  "type": "struct PermissionsLib.Permissions storage pointer",
                                  "value": "self"
                                },
                                "id": 1397,
                                "name": "Identifier",
                                "src": "940:4:4"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1392,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 1398,
                                "name": "Identifier",
                                "src": "946:5:4"
                              }
                            ],
                            "id": 1399,
                            "name": "FunctionCall",
                            "src": "924:28:4"
                          }
                        ],
                        "id": 1400,
                        "name": "FunctionCall",
                        "src": "916:37:4"
                      }
                    ],
                    "id": 1401,
                    "name": "ExpressionStatement",
                    "src": "916:37:4"
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
                                  "referencedDeclaration": 1380,
                                  "type": "mapping(address => bool)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1390,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 1402,
                                    "name": "Identifier",
                                    "src": "964:4:4"
                                  }
                                ],
                                "id": 1405,
                                "name": "MemberAccess",
                                "src": "964:15:4"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1392,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 1404,
                                "name": "Identifier",
                                "src": "980:5:4"
                              }
                            ],
                            "id": 1406,
                            "name": "IndexAccess",
                            "src": "964:22:4"
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
                            "id": 1407,
                            "name": "Literal",
                            "src": "989:4:4"
                          }
                        ],
                        "id": 1408,
                        "name": "Assignment",
                        "src": "964:29:4"
                      }
                    ],
                    "id": 1409,
                    "name": "ExpressionStatement",
                    "src": "964:29:4"
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
                                  "referencedDeclaration": 1387,
                                  "type": "address[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1390,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 1410,
                                    "name": "Identifier",
                                    "src": "1003:4:4"
                                  }
                                ],
                                "id": 1413,
                                "name": "MemberAccess",
                                "src": "1003:21:4"
                              }
                            ],
                            "id": 1414,
                            "name": "MemberAccess",
                            "src": "1003:26:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1392,
                              "type": "address",
                              "value": "agent"
                            },
                            "id": 1415,
                            "name": "Identifier",
                            "src": "1030:5:4"
                          }
                        ],
                        "id": 1416,
                        "name": "FunctionCall",
                        "src": "1003:33:4"
                      }
                    ],
                    "id": 1417,
                    "name": "ExpressionStatement",
                    "src": "1003:33:4"
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
                                  "referencedDeclaration": 1384,
                                  "type": "mapping(address => uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1390,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 1418,
                                    "name": "Identifier",
                                    "src": "1046:4:4"
                                  }
                                ],
                                "id": 1421,
                                "name": "MemberAccess",
                                "src": "1046:17:4"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1392,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 1420,
                                "name": "Identifier",
                                "src": "1064:5:4"
                              }
                            ],
                            "id": 1422,
                            "name": "IndexAccess",
                            "src": "1046:24:4"
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
                                      "referencedDeclaration": 1387,
                                      "type": "address[] storage ref"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 1390,
                                          "type": "struct PermissionsLib.Permissions storage pointer",
                                          "value": "self"
                                        },
                                        "id": 1423,
                                        "name": "Identifier",
                                        "src": "1073:4:4"
                                      }
                                    ],
                                    "id": 1424,
                                    "name": "MemberAccess",
                                    "src": "1073:21:4"
                                  }
                                ],
                                "id": 1425,
                                "name": "MemberAccess",
                                "src": "1073:28:4"
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
                                "id": 1426,
                                "name": "Literal",
                                "src": "1104:1:4"
                              }
                            ],
                            "id": 1427,
                            "name": "BinaryOperation",
                            "src": "1073:32:4"
                          }
                        ],
                        "id": 1428,
                        "name": "Assignment",
                        "src": "1046:59:4"
                      }
                    ],
                    "id": 1429,
                    "name": "ExpressionStatement",
                    "src": "1046:59:4"
                  }
                ],
                "id": 1430,
                "name": "Block",
                "src": "906:206:4"
              }
            ],
            "id": 1431,
            "name": "FunctionDefinition",
            "src": "825:287:4"
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
              "scope": 1554,
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
                      "scope": 1510,
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
                          "referencedDeclaration": 1388,
                          "type": "struct PermissionsLib.Permissions storage pointer"
                        },
                        "id": 1432,
                        "name": "UserDefinedTypeName",
                        "src": "1147:11:4"
                      }
                    ],
                    "id": 1433,
                    "name": "VariableDeclaration",
                    "src": "1147:24:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agent",
                      "scope": 1510,
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
                        "id": 1434,
                        "name": "ElementaryTypeName",
                        "src": "1173:7:4"
                      }
                    ],
                    "id": 1435,
                    "name": "VariableDeclaration",
                    "src": "1173:13:4"
                  }
                ],
                "id": 1436,
                "name": "ParameterList",
                "src": "1146:41:4"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 1437,
                "name": "ParameterList",
                "src": "1209:0:4"
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
                              "referencedDeclaration": 1783,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 1438,
                            "name": "Identifier",
                            "src": "1388:7:4"
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
                                      "typeIdentifier": "t_struct$_Permissions_$1388_storage_ptr",
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
                                  "referencedDeclaration": 1525,
                                  "type": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)",
                                  "value": "isAuthorized"
                                },
                                "id": 1439,
                                "name": "Identifier",
                                "src": "1396:12:4"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1433,
                                  "type": "struct PermissionsLib.Permissions storage pointer",
                                  "value": "self"
                                },
                                "id": 1440,
                                "name": "Identifier",
                                "src": "1409:4:4"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1435,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 1441,
                                "name": "Identifier",
                                "src": "1415:5:4"
                              }
                            ],
                            "id": 1442,
                            "name": "FunctionCall",
                            "src": "1396:25:4"
                          }
                        ],
                        "id": 1443,
                        "name": "FunctionCall",
                        "src": "1388:34:4"
                      }
                    ],
                    "id": 1444,
                    "name": "ExpressionStatement",
                    "src": "1388:34:4"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        1446
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "indexOfAgentToRevoke",
                          "scope": 1510,
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
                            "id": 1445,
                            "name": "ElementaryTypeName",
                            "src": "1433:4:4"
                          }
                        ],
                        "id": 1446,
                        "name": "VariableDeclaration",
                        "src": "1433:25:4"
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
                              "referencedDeclaration": 1384,
                              "type": "mapping(address => uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1433,
                                  "type": "struct PermissionsLib.Permissions storage pointer",
                                  "value": "self"
                                },
                                "id": 1447,
                                "name": "Identifier",
                                "src": "1461:4:4"
                              }
                            ],
                            "id": 1448,
                            "name": "MemberAccess",
                            "src": "1461:17:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1435,
                              "type": "address",
                              "value": "agent"
                            },
                            "id": 1449,
                            "name": "Identifier",
                            "src": "1479:5:4"
                          }
                        ],
                        "id": 1450,
                        "name": "IndexAccess",
                        "src": "1461:24:4"
                      }
                    ],
                    "id": 1451,
                    "name": "VariableDeclarationStatement",
                    "src": "1433:52:4"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        1453
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "indexOfAgentToMove",
                          "scope": 1510,
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
                            "id": 1452,
                            "name": "ElementaryTypeName",
                            "src": "1495:4:4"
                          }
                        ],
                        "id": 1453,
                        "name": "VariableDeclaration",
                        "src": "1495:23:4"
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
                                  "referencedDeclaration": 1387,
                                  "type": "address[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1433,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 1454,
                                    "name": "Identifier",
                                    "src": "1521:4:4"
                                  }
                                ],
                                "id": 1455,
                                "name": "MemberAccess",
                                "src": "1521:21:4"
                              }
                            ],
                            "id": 1456,
                            "name": "MemberAccess",
                            "src": "1521:28:4"
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
                            "id": 1457,
                            "name": "Literal",
                            "src": "1552:1:4"
                          }
                        ],
                        "id": 1458,
                        "name": "BinaryOperation",
                        "src": "1521:32:4"
                      }
                    ],
                    "id": 1459,
                    "name": "VariableDeclarationStatement",
                    "src": "1495:58:4"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        1461
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "agentToMove",
                          "scope": 1510,
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
                            "id": 1460,
                            "name": "ElementaryTypeName",
                            "src": "1563:7:4"
                          }
                        ],
                        "id": 1461,
                        "name": "VariableDeclaration",
                        "src": "1563:19:4"
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
                              "referencedDeclaration": 1387,
                              "type": "address[] storage ref"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1433,
                                  "type": "struct PermissionsLib.Permissions storage pointer",
                                  "value": "self"
                                },
                                "id": 1462,
                                "name": "Identifier",
                                "src": "1585:4:4"
                              }
                            ],
                            "id": 1463,
                            "name": "MemberAccess",
                            "src": "1585:21:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1453,
                              "type": "uint256",
                              "value": "indexOfAgentToMove"
                            },
                            "id": 1464,
                            "name": "Identifier",
                            "src": "1607:18:4"
                          }
                        ],
                        "id": 1465,
                        "name": "IndexAccess",
                        "src": "1585:41:4"
                      }
                    ],
                    "id": 1466,
                    "name": "VariableDeclarationStatement",
                    "src": "1563:63:4"
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
                                  "referencedDeclaration": 1380,
                                  "type": "mapping(address => bool)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1433,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 1467,
                                    "name": "Identifier",
                                    "src": "1689:4:4"
                                  }
                                ],
                                "id": 1468,
                                "name": "MemberAccess",
                                "src": "1689:15:4"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1435,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 1469,
                                "name": "Identifier",
                                "src": "1705:5:4"
                              }
                            ],
                            "id": 1470,
                            "name": "IndexAccess",
                            "src": "1689:22:4"
                          }
                        ],
                        "id": 1471,
                        "name": "UnaryOperation",
                        "src": "1682:29:4"
                      }
                    ],
                    "id": 1472,
                    "name": "ExpressionStatement",
                    "src": "1682:29:4"
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
                                  "referencedDeclaration": 1387,
                                  "type": "address[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1433,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 1473,
                                    "name": "Identifier",
                                    "src": "1792:4:4"
                                  }
                                ],
                                "id": 1476,
                                "name": "MemberAccess",
                                "src": "1792:21:4"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1446,
                                  "type": "uint256",
                                  "value": "indexOfAgentToRevoke"
                                },
                                "id": 1475,
                                "name": "Identifier",
                                "src": "1814:20:4"
                              }
                            ],
                            "id": 1477,
                            "name": "IndexAccess",
                            "src": "1792:43:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1461,
                              "type": "address",
                              "value": "agentToMove"
                            },
                            "id": 1478,
                            "name": "Identifier",
                            "src": "1838:11:4"
                          }
                        ],
                        "id": 1479,
                        "name": "Assignment",
                        "src": "1792:57:4"
                      }
                    ],
                    "id": 1480,
                    "name": "ExpressionStatement",
                    "src": "1792:57:4"
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
                                  "referencedDeclaration": 1384,
                                  "type": "mapping(address => uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1433,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 1481,
                                    "name": "Identifier",
                                    "src": "1920:4:4"
                                  }
                                ],
                                "id": 1484,
                                "name": "MemberAccess",
                                "src": "1920:17:4"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1461,
                                  "type": "address",
                                  "value": "agentToMove"
                                },
                                "id": 1483,
                                "name": "Identifier",
                                "src": "1938:11:4"
                              }
                            ],
                            "id": 1485,
                            "name": "IndexAccess",
                            "src": "1920:30:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1446,
                              "type": "uint256",
                              "value": "indexOfAgentToRevoke"
                            },
                            "id": 1486,
                            "name": "Identifier",
                            "src": "1953:20:4"
                          }
                        ],
                        "id": 1487,
                        "name": "Assignment",
                        "src": "1920:53:4"
                      }
                    ],
                    "id": 1488,
                    "name": "ExpressionStatement",
                    "src": "1920:53:4"
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
                                  "referencedDeclaration": 1384,
                                  "type": "mapping(address => uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1433,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 1489,
                                    "name": "Identifier",
                                    "src": "1990:4:4"
                                  }
                                ],
                                "id": 1490,
                                "name": "MemberAccess",
                                "src": "1990:17:4"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1435,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 1491,
                                "name": "Identifier",
                                "src": "2008:5:4"
                              }
                            ],
                            "id": 1492,
                            "name": "IndexAccess",
                            "src": "1990:24:4"
                          }
                        ],
                        "id": 1493,
                        "name": "UnaryOperation",
                        "src": "1983:31:4"
                      }
                    ],
                    "id": 1494,
                    "name": "ExpressionStatement",
                    "src": "1983:31:4"
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
                                  "referencedDeclaration": 1387,
                                  "type": "address[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1433,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 1495,
                                    "name": "Identifier",
                                    "src": "2088:4:4"
                                  }
                                ],
                                "id": 1496,
                                "name": "MemberAccess",
                                "src": "2088:21:4"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1453,
                                  "type": "uint256",
                                  "value": "indexOfAgentToMove"
                                },
                                "id": 1497,
                                "name": "Identifier",
                                "src": "2110:18:4"
                              }
                            ],
                            "id": 1498,
                            "name": "IndexAccess",
                            "src": "2088:41:4"
                          }
                        ],
                        "id": 1499,
                        "name": "UnaryOperation",
                        "src": "2081:48:4"
                      }
                    ],
                    "id": 1500,
                    "name": "ExpressionStatement",
                    "src": "2081:48:4"
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
                                  "referencedDeclaration": 1387,
                                  "type": "address[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1433,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 1501,
                                    "name": "Identifier",
                                    "src": "2139:4:4"
                                  }
                                ],
                                "id": 1504,
                                "name": "MemberAccess",
                                "src": "2139:21:4"
                              }
                            ],
                            "id": 1505,
                            "name": "MemberAccess",
                            "src": "2139:28:4"
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
                            "id": 1506,
                            "name": "Literal",
                            "src": "2171:1:4"
                          }
                        ],
                        "id": 1507,
                        "name": "Assignment",
                        "src": "2139:33:4"
                      }
                    ],
                    "id": 1508,
                    "name": "ExpressionStatement",
                    "src": "2139:33:4"
                  }
                ],
                "id": 1509,
                "name": "Block",
                "src": "1209:970:4"
              }
            ],
            "id": 1510,
            "name": "FunctionDefinition",
            "src": "1118:1061:4"
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
              "scope": 1554,
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
                      "scope": 1525,
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
                          "referencedDeclaration": 1388,
                          "type": "struct PermissionsLib.Permissions storage pointer"
                        },
                        "id": 1511,
                        "name": "UserDefinedTypeName",
                        "src": "2207:11:4"
                      }
                    ],
                    "id": 1512,
                    "name": "VariableDeclaration",
                    "src": "2207:24:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agent",
                      "scope": 1525,
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
                        "id": 1513,
                        "name": "ElementaryTypeName",
                        "src": "2233:7:4"
                      }
                    ],
                    "id": 1514,
                    "name": "VariableDeclaration",
                    "src": "2233:13:4"
                  }
                ],
                "id": 1515,
                "name": "ParameterList",
                "src": "2206:41:4"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 1525,
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
                        "id": 1516,
                        "name": "ElementaryTypeName",
                        "src": "2295:4:4"
                      }
                    ],
                    "id": 1517,
                    "name": "VariableDeclaration",
                    "src": "2295:4:4"
                  }
                ],
                "id": 1518,
                "name": "ParameterList",
                "src": "2294:6:4"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 1518
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
                              "referencedDeclaration": 1380,
                              "type": "mapping(address => bool)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1512,
                                  "type": "struct PermissionsLib.Permissions storage pointer",
                                  "value": "self"
                                },
                                "id": 1519,
                                "name": "Identifier",
                                "src": "2322:4:4"
                              }
                            ],
                            "id": 1520,
                            "name": "MemberAccess",
                            "src": "2322:15:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1514,
                              "type": "address",
                              "value": "agent"
                            },
                            "id": 1521,
                            "name": "Identifier",
                            "src": "2338:5:4"
                          }
                        ],
                        "id": 1522,
                        "name": "IndexAccess",
                        "src": "2322:22:4"
                      }
                    ],
                    "id": 1523,
                    "name": "Return",
                    "src": "2315:29:4"
                  }
                ],
                "id": 1524,
                "name": "Block",
                "src": "2305:46:4"
              }
            ],
            "id": 1525,
            "name": "FunctionDefinition",
            "src": "2185:166:4"
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
              "scope": 1554,
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
                      "scope": 1541,
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
                          "referencedDeclaration": 1388,
                          "type": "struct PermissionsLib.Permissions storage pointer"
                        },
                        "id": 1526,
                        "name": "UserDefinedTypeName",
                        "src": "2382:11:4"
                      }
                    ],
                    "id": 1527,
                    "name": "VariableDeclaration",
                    "src": "2382:24:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agent",
                      "scope": 1541,
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
                        "id": 1528,
                        "name": "ElementaryTypeName",
                        "src": "2408:7:4"
                      }
                    ],
                    "id": 1529,
                    "name": "VariableDeclaration",
                    "src": "2408:13:4"
                  }
                ],
                "id": 1530,
                "name": "ParameterList",
                "src": "2381:41:4"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 1541,
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
                        "id": 1531,
                        "name": "ElementaryTypeName",
                        "src": "2470:4:4"
                      }
                    ],
                    "id": 1532,
                    "name": "VariableDeclaration",
                    "src": "2470:4:4"
                  }
                ],
                "id": 1533,
                "name": "ParameterList",
                "src": "2469:6:4"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 1533
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
                                      "typeIdentifier": "t_struct$_Permissions_$1388_storage_ptr",
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
                                  "referencedDeclaration": 1525,
                                  "type": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)",
                                  "value": "isAuthorized"
                                },
                                "id": 1534,
                                "name": "Identifier",
                                "src": "2498:12:4"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1527,
                                  "type": "struct PermissionsLib.Permissions storage pointer",
                                  "value": "self"
                                },
                                "id": 1535,
                                "name": "Identifier",
                                "src": "2511:4:4"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1529,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 1536,
                                "name": "Identifier",
                                "src": "2517:5:4"
                              }
                            ],
                            "id": 1537,
                            "name": "FunctionCall",
                            "src": "2498:25:4"
                          }
                        ],
                        "id": 1538,
                        "name": "UnaryOperation",
                        "src": "2497:26:4"
                      }
                    ],
                    "id": 1539,
                    "name": "Return",
                    "src": "2490:33:4"
                  }
                ],
                "id": 1540,
                "name": "Block",
                "src": "2480:50:4"
              }
            ],
            "id": 1541,
            "name": "FunctionDefinition",
            "src": "2357:173:4"
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
              "scope": 1554,
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
                      "scope": 1553,
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
                          "referencedDeclaration": 1388,
                          "type": "struct PermissionsLib.Permissions storage pointer"
                        },
                        "id": 1542,
                        "name": "UserDefinedTypeName",
                        "src": "2565:11:4"
                      }
                    ],
                    "id": 1543,
                    "name": "VariableDeclaration",
                    "src": "2565:24:4"
                  }
                ],
                "id": 1544,
                "name": "ParameterList",
                "src": "2564:26:4"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 1553,
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
                            "id": 1545,
                            "name": "ElementaryTypeName",
                            "src": "2638:7:4"
                          }
                        ],
                        "id": 1546,
                        "name": "ArrayTypeName",
                        "src": "2638:9:4"
                      }
                    ],
                    "id": 1547,
                    "name": "VariableDeclaration",
                    "src": "2638:9:4"
                  }
                ],
                "id": 1548,
                "name": "ParameterList",
                "src": "2637:11:4"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 1548
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
                          "referencedDeclaration": 1387,
                          "type": "address[] storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1543,
                              "type": "struct PermissionsLib.Permissions storage pointer",
                              "value": "self"
                            },
                            "id": 1549,
                            "name": "Identifier",
                            "src": "2670:4:4"
                          }
                        ],
                        "id": 1550,
                        "name": "MemberAccess",
                        "src": "2670:21:4"
                      }
                    ],
                    "id": 1551,
                    "name": "Return",
                    "src": "2663:28:4"
                  }
                ],
                "id": 1552,
                "name": "Block",
                "src": "2653:45:4"
              }
            ],
            "id": 1553,
            "name": "FunctionDefinition",
            "src": "2536:162:4"
          }
        ],
        "id": 1554,
        "name": "ContractDefinition",
        "src": "610:2090:4"
      }
    ],
    "id": 1555,
    "name": "SourceUnit",
    "src": "584:2117:4"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {
    "42": {
      "events": {},
      "links": {},
      "address": "0x3e6cf5404c9c4f2b280464468e6001b26b5f78d1"
    },
    "70": {
      "events": {},
      "links": {},
      "address": "0xc13d026d7e4e6c2864240aa1f26bb436c6271338"
    }
  },
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-03-27T18:02:11.692Z"
}