export const PermissionsLib = 
{
  "contractName": "PermissionsLib",
  "abi": [],
  "bytecode": "0x60606040523415600e57600080fd5b603580601b6000396000f3006060604052600080fd00a165627a7a72305820c354ce7b74c3d2f71d288e1e04a33cbf1ca35c1d7dcdd13bafeacebea2bedd460029",
  "deployedBytecode": "0x6060604052600080fd00a165627a7a72305820c354ce7b74c3d2f71d288e1e04a33cbf1ca35c1d7dcdd13bafeacebea2bedd460029",
  "sourceMap": "610:2090:5:-;;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "610:2090:5:-;;;;;",
  "source": "/*\n\n  Copyright 2017 Dharma Labs Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n*/\n\npragma solidity 0.4.18;\n\n\nlibrary PermissionsLib {\n    struct Permissions {\n        mapping (address => bool) authorized;\n        mapping (address => uint) agentToIndex; // ensures O(1) look-up\n        address[] authorizedAgents;\n    }\n\n    function authorize(Permissions storage self, address agent)\n        internal\n    {\n        require(isNotAuthorized(self, agent));\n\n        self.authorized[agent] = true;\n        self.authorizedAgents.push(agent);\n        self.agentToIndex[agent] = self.authorizedAgents.length - 1;\n    }\n\n    function revokeAuthorization(Permissions storage self, address agent)\n        internal\n    {\n        /* We only want to do work in the case where the agent whose\n        authorization is being revoked had authorization permissions in the\n        first place. */\n        require(isAuthorized(self, agent));\n\n        uint indexOfAgentToRevoke = self.agentToIndex[agent];\n        uint indexOfAgentToMove = self.authorizedAgents.length - 1;\n        address agentToMove = self.authorizedAgents[indexOfAgentToMove];\n\n        // Revoke the agent's authorization.\n        delete self.authorized[agent];\n\n        // Remove the agent from our collection of authorized agents.\n        self.authorizedAgents[indexOfAgentToRevoke] = agentToMove;\n\n        // Update our indices to reflect the above changes.\n        self.agentToIndex[agentToMove] = indexOfAgentToRevoke;\n        delete self.agentToIndex[agent];\n\n        // Clean up memory that's no longer being used.\n        delete self.authorizedAgents[indexOfAgentToMove];\n        self.authorizedAgents.length -= 1;\n    }\n\n    function isAuthorized(Permissions storage self, address agent)\n        internal\n        view\n        returns (bool)\n    {\n        return self.authorized[agent];\n    }\n\n    function isNotAuthorized(Permissions storage self, address agent)\n        internal\n        view\n        returns (bool)\n    {\n        return !isAuthorized(self, agent);\n    }\n\n    function getAuthorizedAgents(Permissions storage self)\n        internal\n        view\n        returns (address[])\n    {\n        return self.authorizedAgents;\n    }\n}\n",
  "sourcePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/libraries/PermissionsLib.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/libraries/PermissionsLib.sol",
      "exportedSymbols": {
        "PermissionsLib": [
          1587
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
        "id": 1409,
        "name": "PragmaDirective",
        "src": "584:23:5"
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
            1587
          ],
          "name": "PermissionsLib",
          "scope": 1588
        },
        "children": [
          {
            "attributes": {
              "canonicalName": "PermissionsLib.Permissions",
              "name": "Permissions",
              "scope": 1587,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "constant": false,
                  "name": "authorized",
                  "scope": 1421,
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
                        "id": 1410,
                        "name": "ElementaryTypeName",
                        "src": "677:7:5"
                      },
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 1411,
                        "name": "ElementaryTypeName",
                        "src": "688:4:5"
                      }
                    ],
                    "id": 1412,
                    "name": "Mapping",
                    "src": "668:25:5"
                  }
                ],
                "id": 1413,
                "name": "VariableDeclaration",
                "src": "668:36:5"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "agentToIndex",
                  "scope": 1421,
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
                        "id": 1414,
                        "name": "ElementaryTypeName",
                        "src": "723:7:5"
                      },
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 1415,
                        "name": "ElementaryTypeName",
                        "src": "734:4:5"
                      }
                    ],
                    "id": 1416,
                    "name": "Mapping",
                    "src": "714:25:5"
                  }
                ],
                "id": 1417,
                "name": "VariableDeclaration",
                "src": "714:38:5"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "authorizedAgents",
                  "scope": 1421,
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
                        "id": 1418,
                        "name": "ElementaryTypeName",
                        "src": "786:7:5"
                      }
                    ],
                    "id": 1419,
                    "name": "ArrayTypeName",
                    "src": "786:9:5"
                  }
                ],
                "id": 1420,
                "name": "VariableDeclaration",
                "src": "786:26:5"
              }
            ],
            "id": 1421,
            "name": "StructDefinition",
            "src": "639:180:5"
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
              "scope": 1587,
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
                      "scope": 1464,
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
                          "referencedDeclaration": 1421,
                          "type": "struct PermissionsLib.Permissions storage pointer"
                        },
                        "id": 1422,
                        "name": "UserDefinedTypeName",
                        "src": "844:11:5"
                      }
                    ],
                    "id": 1423,
                    "name": "VariableDeclaration",
                    "src": "844:24:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agent",
                      "scope": 1464,
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
                        "id": 1424,
                        "name": "ElementaryTypeName",
                        "src": "870:7:5"
                      }
                    ],
                    "id": 1425,
                    "name": "VariableDeclaration",
                    "src": "870:13:5"
                  }
                ],
                "id": 1426,
                "name": "ParameterList",
                "src": "843:41:5"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 1427,
                "name": "ParameterList",
                "src": "906:0:5"
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
                              "referencedDeclaration": 1891,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 1428,
                            "name": "Identifier",
                            "src": "916:7:5"
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
                                      "typeIdentifier": "t_struct$_Permissions_$1421_storage_ptr",
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
                                  "referencedDeclaration": 1574,
                                  "type": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)",
                                  "value": "isNotAuthorized"
                                },
                                "id": 1429,
                                "name": "Identifier",
                                "src": "924:15:5"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1423,
                                  "type": "struct PermissionsLib.Permissions storage pointer",
                                  "value": "self"
                                },
                                "id": 1430,
                                "name": "Identifier",
                                "src": "940:4:5"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1425,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 1431,
                                "name": "Identifier",
                                "src": "946:5:5"
                              }
                            ],
                            "id": 1432,
                            "name": "FunctionCall",
                            "src": "924:28:5"
                          }
                        ],
                        "id": 1433,
                        "name": "FunctionCall",
                        "src": "916:37:5"
                      }
                    ],
                    "id": 1434,
                    "name": "ExpressionStatement",
                    "src": "916:37:5"
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
                                  "referencedDeclaration": 1413,
                                  "type": "mapping(address => bool)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1423,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 1435,
                                    "name": "Identifier",
                                    "src": "964:4:5"
                                  }
                                ],
                                "id": 1438,
                                "name": "MemberAccess",
                                "src": "964:15:5"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1425,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 1437,
                                "name": "Identifier",
                                "src": "980:5:5"
                              }
                            ],
                            "id": 1439,
                            "name": "IndexAccess",
                            "src": "964:22:5"
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
                            "id": 1440,
                            "name": "Literal",
                            "src": "989:4:5"
                          }
                        ],
                        "id": 1441,
                        "name": "Assignment",
                        "src": "964:29:5"
                      }
                    ],
                    "id": 1442,
                    "name": "ExpressionStatement",
                    "src": "964:29:5"
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
                                  "referencedDeclaration": 1420,
                                  "type": "address[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1423,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 1443,
                                    "name": "Identifier",
                                    "src": "1003:4:5"
                                  }
                                ],
                                "id": 1446,
                                "name": "MemberAccess",
                                "src": "1003:21:5"
                              }
                            ],
                            "id": 1447,
                            "name": "MemberAccess",
                            "src": "1003:26:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1425,
                              "type": "address",
                              "value": "agent"
                            },
                            "id": 1448,
                            "name": "Identifier",
                            "src": "1030:5:5"
                          }
                        ],
                        "id": 1449,
                        "name": "FunctionCall",
                        "src": "1003:33:5"
                      }
                    ],
                    "id": 1450,
                    "name": "ExpressionStatement",
                    "src": "1003:33:5"
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
                                  "referencedDeclaration": 1417,
                                  "type": "mapping(address => uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1423,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 1451,
                                    "name": "Identifier",
                                    "src": "1046:4:5"
                                  }
                                ],
                                "id": 1454,
                                "name": "MemberAccess",
                                "src": "1046:17:5"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1425,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 1453,
                                "name": "Identifier",
                                "src": "1064:5:5"
                              }
                            ],
                            "id": 1455,
                            "name": "IndexAccess",
                            "src": "1046:24:5"
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
                                      "referencedDeclaration": 1420,
                                      "type": "address[] storage ref"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 1423,
                                          "type": "struct PermissionsLib.Permissions storage pointer",
                                          "value": "self"
                                        },
                                        "id": 1456,
                                        "name": "Identifier",
                                        "src": "1073:4:5"
                                      }
                                    ],
                                    "id": 1457,
                                    "name": "MemberAccess",
                                    "src": "1073:21:5"
                                  }
                                ],
                                "id": 1458,
                                "name": "MemberAccess",
                                "src": "1073:28:5"
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
                                "id": 1459,
                                "name": "Literal",
                                "src": "1104:1:5"
                              }
                            ],
                            "id": 1460,
                            "name": "BinaryOperation",
                            "src": "1073:32:5"
                          }
                        ],
                        "id": 1461,
                        "name": "Assignment",
                        "src": "1046:59:5"
                      }
                    ],
                    "id": 1462,
                    "name": "ExpressionStatement",
                    "src": "1046:59:5"
                  }
                ],
                "id": 1463,
                "name": "Block",
                "src": "906:206:5"
              }
            ],
            "id": 1464,
            "name": "FunctionDefinition",
            "src": "825:287:5"
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
              "scope": 1587,
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
                      "scope": 1543,
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
                          "referencedDeclaration": 1421,
                          "type": "struct PermissionsLib.Permissions storage pointer"
                        },
                        "id": 1465,
                        "name": "UserDefinedTypeName",
                        "src": "1147:11:5"
                      }
                    ],
                    "id": 1466,
                    "name": "VariableDeclaration",
                    "src": "1147:24:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agent",
                      "scope": 1543,
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
                        "id": 1467,
                        "name": "ElementaryTypeName",
                        "src": "1173:7:5"
                      }
                    ],
                    "id": 1468,
                    "name": "VariableDeclaration",
                    "src": "1173:13:5"
                  }
                ],
                "id": 1469,
                "name": "ParameterList",
                "src": "1146:41:5"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 1470,
                "name": "ParameterList",
                "src": "1209:0:5"
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
                              "referencedDeclaration": 1891,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 1471,
                            "name": "Identifier",
                            "src": "1388:7:5"
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
                                      "typeIdentifier": "t_struct$_Permissions_$1421_storage_ptr",
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
                                  "referencedDeclaration": 1558,
                                  "type": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)",
                                  "value": "isAuthorized"
                                },
                                "id": 1472,
                                "name": "Identifier",
                                "src": "1396:12:5"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1466,
                                  "type": "struct PermissionsLib.Permissions storage pointer",
                                  "value": "self"
                                },
                                "id": 1473,
                                "name": "Identifier",
                                "src": "1409:4:5"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1468,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 1474,
                                "name": "Identifier",
                                "src": "1415:5:5"
                              }
                            ],
                            "id": 1475,
                            "name": "FunctionCall",
                            "src": "1396:25:5"
                          }
                        ],
                        "id": 1476,
                        "name": "FunctionCall",
                        "src": "1388:34:5"
                      }
                    ],
                    "id": 1477,
                    "name": "ExpressionStatement",
                    "src": "1388:34:5"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        1479
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "indexOfAgentToRevoke",
                          "scope": 1543,
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
                            "id": 1478,
                            "name": "ElementaryTypeName",
                            "src": "1433:4:5"
                          }
                        ],
                        "id": 1479,
                        "name": "VariableDeclaration",
                        "src": "1433:25:5"
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
                              "referencedDeclaration": 1417,
                              "type": "mapping(address => uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1466,
                                  "type": "struct PermissionsLib.Permissions storage pointer",
                                  "value": "self"
                                },
                                "id": 1480,
                                "name": "Identifier",
                                "src": "1461:4:5"
                              }
                            ],
                            "id": 1481,
                            "name": "MemberAccess",
                            "src": "1461:17:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1468,
                              "type": "address",
                              "value": "agent"
                            },
                            "id": 1482,
                            "name": "Identifier",
                            "src": "1479:5:5"
                          }
                        ],
                        "id": 1483,
                        "name": "IndexAccess",
                        "src": "1461:24:5"
                      }
                    ],
                    "id": 1484,
                    "name": "VariableDeclarationStatement",
                    "src": "1433:52:5"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        1486
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "indexOfAgentToMove",
                          "scope": 1543,
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
                            "id": 1485,
                            "name": "ElementaryTypeName",
                            "src": "1495:4:5"
                          }
                        ],
                        "id": 1486,
                        "name": "VariableDeclaration",
                        "src": "1495:23:5"
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
                                  "referencedDeclaration": 1420,
                                  "type": "address[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1466,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 1487,
                                    "name": "Identifier",
                                    "src": "1521:4:5"
                                  }
                                ],
                                "id": 1488,
                                "name": "MemberAccess",
                                "src": "1521:21:5"
                              }
                            ],
                            "id": 1489,
                            "name": "MemberAccess",
                            "src": "1521:28:5"
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
                            "id": 1490,
                            "name": "Literal",
                            "src": "1552:1:5"
                          }
                        ],
                        "id": 1491,
                        "name": "BinaryOperation",
                        "src": "1521:32:5"
                      }
                    ],
                    "id": 1492,
                    "name": "VariableDeclarationStatement",
                    "src": "1495:58:5"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        1494
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "agentToMove",
                          "scope": 1543,
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
                            "id": 1493,
                            "name": "ElementaryTypeName",
                            "src": "1563:7:5"
                          }
                        ],
                        "id": 1494,
                        "name": "VariableDeclaration",
                        "src": "1563:19:5"
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
                              "referencedDeclaration": 1420,
                              "type": "address[] storage ref"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1466,
                                  "type": "struct PermissionsLib.Permissions storage pointer",
                                  "value": "self"
                                },
                                "id": 1495,
                                "name": "Identifier",
                                "src": "1585:4:5"
                              }
                            ],
                            "id": 1496,
                            "name": "MemberAccess",
                            "src": "1585:21:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1486,
                              "type": "uint256",
                              "value": "indexOfAgentToMove"
                            },
                            "id": 1497,
                            "name": "Identifier",
                            "src": "1607:18:5"
                          }
                        ],
                        "id": 1498,
                        "name": "IndexAccess",
                        "src": "1585:41:5"
                      }
                    ],
                    "id": 1499,
                    "name": "VariableDeclarationStatement",
                    "src": "1563:63:5"
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
                                  "referencedDeclaration": 1413,
                                  "type": "mapping(address => bool)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1466,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 1500,
                                    "name": "Identifier",
                                    "src": "1689:4:5"
                                  }
                                ],
                                "id": 1501,
                                "name": "MemberAccess",
                                "src": "1689:15:5"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1468,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 1502,
                                "name": "Identifier",
                                "src": "1705:5:5"
                              }
                            ],
                            "id": 1503,
                            "name": "IndexAccess",
                            "src": "1689:22:5"
                          }
                        ],
                        "id": 1504,
                        "name": "UnaryOperation",
                        "src": "1682:29:5"
                      }
                    ],
                    "id": 1505,
                    "name": "ExpressionStatement",
                    "src": "1682:29:5"
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
                                  "referencedDeclaration": 1420,
                                  "type": "address[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1466,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 1506,
                                    "name": "Identifier",
                                    "src": "1792:4:5"
                                  }
                                ],
                                "id": 1509,
                                "name": "MemberAccess",
                                "src": "1792:21:5"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1479,
                                  "type": "uint256",
                                  "value": "indexOfAgentToRevoke"
                                },
                                "id": 1508,
                                "name": "Identifier",
                                "src": "1814:20:5"
                              }
                            ],
                            "id": 1510,
                            "name": "IndexAccess",
                            "src": "1792:43:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1494,
                              "type": "address",
                              "value": "agentToMove"
                            },
                            "id": 1511,
                            "name": "Identifier",
                            "src": "1838:11:5"
                          }
                        ],
                        "id": 1512,
                        "name": "Assignment",
                        "src": "1792:57:5"
                      }
                    ],
                    "id": 1513,
                    "name": "ExpressionStatement",
                    "src": "1792:57:5"
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
                                  "referencedDeclaration": 1417,
                                  "type": "mapping(address => uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1466,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 1514,
                                    "name": "Identifier",
                                    "src": "1920:4:5"
                                  }
                                ],
                                "id": 1517,
                                "name": "MemberAccess",
                                "src": "1920:17:5"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1494,
                                  "type": "address",
                                  "value": "agentToMove"
                                },
                                "id": 1516,
                                "name": "Identifier",
                                "src": "1938:11:5"
                              }
                            ],
                            "id": 1518,
                            "name": "IndexAccess",
                            "src": "1920:30:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1479,
                              "type": "uint256",
                              "value": "indexOfAgentToRevoke"
                            },
                            "id": 1519,
                            "name": "Identifier",
                            "src": "1953:20:5"
                          }
                        ],
                        "id": 1520,
                        "name": "Assignment",
                        "src": "1920:53:5"
                      }
                    ],
                    "id": 1521,
                    "name": "ExpressionStatement",
                    "src": "1920:53:5"
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
                                  "referencedDeclaration": 1417,
                                  "type": "mapping(address => uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1466,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 1522,
                                    "name": "Identifier",
                                    "src": "1990:4:5"
                                  }
                                ],
                                "id": 1523,
                                "name": "MemberAccess",
                                "src": "1990:17:5"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1468,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 1524,
                                "name": "Identifier",
                                "src": "2008:5:5"
                              }
                            ],
                            "id": 1525,
                            "name": "IndexAccess",
                            "src": "1990:24:5"
                          }
                        ],
                        "id": 1526,
                        "name": "UnaryOperation",
                        "src": "1983:31:5"
                      }
                    ],
                    "id": 1527,
                    "name": "ExpressionStatement",
                    "src": "1983:31:5"
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
                                  "referencedDeclaration": 1420,
                                  "type": "address[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1466,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 1528,
                                    "name": "Identifier",
                                    "src": "2088:4:5"
                                  }
                                ],
                                "id": 1529,
                                "name": "MemberAccess",
                                "src": "2088:21:5"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1486,
                                  "type": "uint256",
                                  "value": "indexOfAgentToMove"
                                },
                                "id": 1530,
                                "name": "Identifier",
                                "src": "2110:18:5"
                              }
                            ],
                            "id": 1531,
                            "name": "IndexAccess",
                            "src": "2088:41:5"
                          }
                        ],
                        "id": 1532,
                        "name": "UnaryOperation",
                        "src": "2081:48:5"
                      }
                    ],
                    "id": 1533,
                    "name": "ExpressionStatement",
                    "src": "2081:48:5"
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
                                  "referencedDeclaration": 1420,
                                  "type": "address[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1466,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 1534,
                                    "name": "Identifier",
                                    "src": "2139:4:5"
                                  }
                                ],
                                "id": 1537,
                                "name": "MemberAccess",
                                "src": "2139:21:5"
                              }
                            ],
                            "id": 1538,
                            "name": "MemberAccess",
                            "src": "2139:28:5"
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
                            "id": 1539,
                            "name": "Literal",
                            "src": "2171:1:5"
                          }
                        ],
                        "id": 1540,
                        "name": "Assignment",
                        "src": "2139:33:5"
                      }
                    ],
                    "id": 1541,
                    "name": "ExpressionStatement",
                    "src": "2139:33:5"
                  }
                ],
                "id": 1542,
                "name": "Block",
                "src": "1209:970:5"
              }
            ],
            "id": 1543,
            "name": "FunctionDefinition",
            "src": "1118:1061:5"
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
              "scope": 1587,
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
                      "scope": 1558,
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
                          "referencedDeclaration": 1421,
                          "type": "struct PermissionsLib.Permissions storage pointer"
                        },
                        "id": 1544,
                        "name": "UserDefinedTypeName",
                        "src": "2207:11:5"
                      }
                    ],
                    "id": 1545,
                    "name": "VariableDeclaration",
                    "src": "2207:24:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agent",
                      "scope": 1558,
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
                        "id": 1546,
                        "name": "ElementaryTypeName",
                        "src": "2233:7:5"
                      }
                    ],
                    "id": 1547,
                    "name": "VariableDeclaration",
                    "src": "2233:13:5"
                  }
                ],
                "id": 1548,
                "name": "ParameterList",
                "src": "2206:41:5"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 1558,
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
                        "id": 1549,
                        "name": "ElementaryTypeName",
                        "src": "2295:4:5"
                      }
                    ],
                    "id": 1550,
                    "name": "VariableDeclaration",
                    "src": "2295:4:5"
                  }
                ],
                "id": 1551,
                "name": "ParameterList",
                "src": "2294:6:5"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 1551
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
                              "referencedDeclaration": 1413,
                              "type": "mapping(address => bool)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1545,
                                  "type": "struct PermissionsLib.Permissions storage pointer",
                                  "value": "self"
                                },
                                "id": 1552,
                                "name": "Identifier",
                                "src": "2322:4:5"
                              }
                            ],
                            "id": 1553,
                            "name": "MemberAccess",
                            "src": "2322:15:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1547,
                              "type": "address",
                              "value": "agent"
                            },
                            "id": 1554,
                            "name": "Identifier",
                            "src": "2338:5:5"
                          }
                        ],
                        "id": 1555,
                        "name": "IndexAccess",
                        "src": "2322:22:5"
                      }
                    ],
                    "id": 1556,
                    "name": "Return",
                    "src": "2315:29:5"
                  }
                ],
                "id": 1557,
                "name": "Block",
                "src": "2305:46:5"
              }
            ],
            "id": 1558,
            "name": "FunctionDefinition",
            "src": "2185:166:5"
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
              "scope": 1587,
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
                      "scope": 1574,
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
                          "referencedDeclaration": 1421,
                          "type": "struct PermissionsLib.Permissions storage pointer"
                        },
                        "id": 1559,
                        "name": "UserDefinedTypeName",
                        "src": "2382:11:5"
                      }
                    ],
                    "id": 1560,
                    "name": "VariableDeclaration",
                    "src": "2382:24:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agent",
                      "scope": 1574,
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
                        "id": 1561,
                        "name": "ElementaryTypeName",
                        "src": "2408:7:5"
                      }
                    ],
                    "id": 1562,
                    "name": "VariableDeclaration",
                    "src": "2408:13:5"
                  }
                ],
                "id": 1563,
                "name": "ParameterList",
                "src": "2381:41:5"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 1574,
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
                        "id": 1564,
                        "name": "ElementaryTypeName",
                        "src": "2470:4:5"
                      }
                    ],
                    "id": 1565,
                    "name": "VariableDeclaration",
                    "src": "2470:4:5"
                  }
                ],
                "id": 1566,
                "name": "ParameterList",
                "src": "2469:6:5"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 1566
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
                                      "typeIdentifier": "t_struct$_Permissions_$1421_storage_ptr",
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
                                  "referencedDeclaration": 1558,
                                  "type": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)",
                                  "value": "isAuthorized"
                                },
                                "id": 1567,
                                "name": "Identifier",
                                "src": "2498:12:5"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1560,
                                  "type": "struct PermissionsLib.Permissions storage pointer",
                                  "value": "self"
                                },
                                "id": 1568,
                                "name": "Identifier",
                                "src": "2511:4:5"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1562,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 1569,
                                "name": "Identifier",
                                "src": "2517:5:5"
                              }
                            ],
                            "id": 1570,
                            "name": "FunctionCall",
                            "src": "2498:25:5"
                          }
                        ],
                        "id": 1571,
                        "name": "UnaryOperation",
                        "src": "2497:26:5"
                      }
                    ],
                    "id": 1572,
                    "name": "Return",
                    "src": "2490:33:5"
                  }
                ],
                "id": 1573,
                "name": "Block",
                "src": "2480:50:5"
              }
            ],
            "id": 1574,
            "name": "FunctionDefinition",
            "src": "2357:173:5"
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
              "scope": 1587,
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
                      "scope": 1586,
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
                          "referencedDeclaration": 1421,
                          "type": "struct PermissionsLib.Permissions storage pointer"
                        },
                        "id": 1575,
                        "name": "UserDefinedTypeName",
                        "src": "2565:11:5"
                      }
                    ],
                    "id": 1576,
                    "name": "VariableDeclaration",
                    "src": "2565:24:5"
                  }
                ],
                "id": 1577,
                "name": "ParameterList",
                "src": "2564:26:5"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 1586,
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
                            "id": 1578,
                            "name": "ElementaryTypeName",
                            "src": "2638:7:5"
                          }
                        ],
                        "id": 1579,
                        "name": "ArrayTypeName",
                        "src": "2638:9:5"
                      }
                    ],
                    "id": 1580,
                    "name": "VariableDeclaration",
                    "src": "2638:9:5"
                  }
                ],
                "id": 1581,
                "name": "ParameterList",
                "src": "2637:11:5"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 1581
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
                          "referencedDeclaration": 1420,
                          "type": "address[] storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1576,
                              "type": "struct PermissionsLib.Permissions storage pointer",
                              "value": "self"
                            },
                            "id": 1582,
                            "name": "Identifier",
                            "src": "2670:4:5"
                          }
                        ],
                        "id": 1583,
                        "name": "MemberAccess",
                        "src": "2670:21:5"
                      }
                    ],
                    "id": 1584,
                    "name": "Return",
                    "src": "2663:28:5"
                  }
                ],
                "id": 1585,
                "name": "Block",
                "src": "2653:45:5"
              }
            ],
            "id": 1586,
            "name": "FunctionDefinition",
            "src": "2536:162:5"
          }
        ],
        "id": 1587,
        "name": "ContractDefinition",
        "src": "610:2090:5"
      }
    ],
    "id": 1588,
    "name": "SourceUnit",
    "src": "584:2117:5"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {
    "42": {
      "events": {},
      "links": {},
      "address": "0x8d74e4e3f49340ffaa6599ef0946f630eaebef9c"
    },
    "70": {
      "events": {},
      "links": {},
      "address": "0xc13d026d7e4e6c2864240aa1f26bb436c6271338"
    }
  },
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-04-10T20:48:01.281Z"
}