export const PermissionsLib = 
{
  "contractName": "PermissionsLib",
  "abi": [],
  "bytecode": "0x60606040523415600e57600080fd5b603580601b6000396000f3006060604052600080fd00a165627a7a72305820c354ce7b74c3d2f71d288e1e04a33cbf1ca35c1d7dcdd13bafeacebea2bedd460029",
  "deployedBytecode": "0x6060604052600080fd00a165627a7a72305820c354ce7b74c3d2f71d288e1e04a33cbf1ca35c1d7dcdd13bafeacebea2bedd460029",
  "sourceMap": "610:2090:10:-;;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "610:2090:10:-;;;;;",
  "source": "/*\n\n  Copyright 2017 Dharma Labs Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n*/\n\npragma solidity 0.4.18;\n\n\nlibrary PermissionsLib {\n    struct Permissions {\n        mapping (address => bool) authorized;\n        mapping (address => uint) agentToIndex; // ensures O(1) look-up\n        address[] authorizedAgents;\n    }\n\n    function authorize(Permissions storage self, address agent)\n        internal\n    {\n        require(isNotAuthorized(self, agent));\n\n        self.authorized[agent] = true;\n        self.authorizedAgents.push(agent);\n        self.agentToIndex[agent] = self.authorizedAgents.length - 1;\n    }\n\n    function revokeAuthorization(Permissions storage self, address agent)\n        internal\n    {\n        /* We only want to do work in the case where the agent whose\n        authorization is being revoked had authorization permissions in the\n        first place. */\n        require(isAuthorized(self, agent));\n\n        uint indexOfAgentToRevoke = self.agentToIndex[agent];\n        uint indexOfAgentToMove = self.authorizedAgents.length - 1;\n        address agentToMove = self.authorizedAgents[indexOfAgentToMove];\n\n        // Revoke the agent's authorization.\n        delete self.authorized[agent];\n\n        // Remove the agent from our collection of authorized agents.\n        self.authorizedAgents[indexOfAgentToRevoke] = agentToMove;\n\n        // Update our indices to reflect the above changes.\n        self.agentToIndex[agentToMove] = indexOfAgentToRevoke;\n        delete self.agentToIndex[agent];\n\n        // Clean up memory that's no longer being used.\n        delete self.authorizedAgents[indexOfAgentToMove];\n        self.authorizedAgents.length -= 1;\n    }\n\n    function isAuthorized(Permissions storage self, address agent)\n        internal\n        view\n        returns (bool)\n    {\n        return self.authorized[agent];\n    }\n\n    function isNotAuthorized(Permissions storage self, address agent)\n        internal\n        view\n        returns (bool)\n    {\n        return !isAuthorized(self, agent);\n    }\n\n    function getAuthorizedAgents(Permissions storage self)\n        internal\n        view\n        returns (address[])\n    {\n        return self.authorizedAgents;\n    }\n}\n",
  "sourcePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/libraries/PermissionsLib.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/libraries/PermissionsLib.sol",
      "exportedSymbols": {
        "PermissionsLib": [
          3657
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
        "id": 3479,
        "name": "PragmaDirective",
        "src": "584:23:10"
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
            3657
          ],
          "name": "PermissionsLib",
          "scope": 3658
        },
        "children": [
          {
            "attributes": {
              "canonicalName": "PermissionsLib.Permissions",
              "name": "Permissions",
              "scope": 3657,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "constant": false,
                  "name": "authorized",
                  "scope": 3491,
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
                        "id": 3480,
                        "name": "ElementaryTypeName",
                        "src": "677:7:10"
                      },
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 3481,
                        "name": "ElementaryTypeName",
                        "src": "688:4:10"
                      }
                    ],
                    "id": 3482,
                    "name": "Mapping",
                    "src": "668:25:10"
                  }
                ],
                "id": 3483,
                "name": "VariableDeclaration",
                "src": "668:36:10"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "agentToIndex",
                  "scope": 3491,
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
                        "id": 3484,
                        "name": "ElementaryTypeName",
                        "src": "723:7:10"
                      },
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 3485,
                        "name": "ElementaryTypeName",
                        "src": "734:4:10"
                      }
                    ],
                    "id": 3486,
                    "name": "Mapping",
                    "src": "714:25:10"
                  }
                ],
                "id": 3487,
                "name": "VariableDeclaration",
                "src": "714:38:10"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "authorizedAgents",
                  "scope": 3491,
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
                        "id": 3488,
                        "name": "ElementaryTypeName",
                        "src": "786:7:10"
                      }
                    ],
                    "id": 3489,
                    "name": "ArrayTypeName",
                    "src": "786:9:10"
                  }
                ],
                "id": 3490,
                "name": "VariableDeclaration",
                "src": "786:26:10"
              }
            ],
            "id": 3491,
            "name": "StructDefinition",
            "src": "639:180:10"
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
              "scope": 3657,
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
                      "scope": 3534,
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
                          "referencedDeclaration": 3491,
                          "type": "struct PermissionsLib.Permissions storage pointer"
                        },
                        "id": 3492,
                        "name": "UserDefinedTypeName",
                        "src": "844:11:10"
                      }
                    ],
                    "id": 3493,
                    "name": "VariableDeclaration",
                    "src": "844:24:10"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agent",
                      "scope": 3534,
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
                        "id": 3494,
                        "name": "ElementaryTypeName",
                        "src": "870:7:10"
                      }
                    ],
                    "id": 3495,
                    "name": "VariableDeclaration",
                    "src": "870:13:10"
                  }
                ],
                "id": 3496,
                "name": "ParameterList",
                "src": "843:41:10"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 3497,
                "name": "ParameterList",
                "src": "906:0:10"
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
                              "referencedDeclaration": 5488,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 3498,
                            "name": "Identifier",
                            "src": "916:7:10"
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
                                      "typeIdentifier": "t_struct$_Permissions_$3491_storage_ptr",
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
                                  "referencedDeclaration": 3644,
                                  "type": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)",
                                  "value": "isNotAuthorized"
                                },
                                "id": 3499,
                                "name": "Identifier",
                                "src": "924:15:10"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3493,
                                  "type": "struct PermissionsLib.Permissions storage pointer",
                                  "value": "self"
                                },
                                "id": 3500,
                                "name": "Identifier",
                                "src": "940:4:10"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3495,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 3501,
                                "name": "Identifier",
                                "src": "946:5:10"
                              }
                            ],
                            "id": 3502,
                            "name": "FunctionCall",
                            "src": "924:28:10"
                          }
                        ],
                        "id": 3503,
                        "name": "FunctionCall",
                        "src": "916:37:10"
                      }
                    ],
                    "id": 3504,
                    "name": "ExpressionStatement",
                    "src": "916:37:10"
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
                                  "referencedDeclaration": 3483,
                                  "type": "mapping(address => bool)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3493,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 3505,
                                    "name": "Identifier",
                                    "src": "964:4:10"
                                  }
                                ],
                                "id": 3508,
                                "name": "MemberAccess",
                                "src": "964:15:10"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3495,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 3507,
                                "name": "Identifier",
                                "src": "980:5:10"
                              }
                            ],
                            "id": 3509,
                            "name": "IndexAccess",
                            "src": "964:22:10"
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
                            "id": 3510,
                            "name": "Literal",
                            "src": "989:4:10"
                          }
                        ],
                        "id": 3511,
                        "name": "Assignment",
                        "src": "964:29:10"
                      }
                    ],
                    "id": 3512,
                    "name": "ExpressionStatement",
                    "src": "964:29:10"
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
                                  "referencedDeclaration": 3490,
                                  "type": "address[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3493,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 3513,
                                    "name": "Identifier",
                                    "src": "1003:4:10"
                                  }
                                ],
                                "id": 3516,
                                "name": "MemberAccess",
                                "src": "1003:21:10"
                              }
                            ],
                            "id": 3517,
                            "name": "MemberAccess",
                            "src": "1003:26:10"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3495,
                              "type": "address",
                              "value": "agent"
                            },
                            "id": 3518,
                            "name": "Identifier",
                            "src": "1030:5:10"
                          }
                        ],
                        "id": 3519,
                        "name": "FunctionCall",
                        "src": "1003:33:10"
                      }
                    ],
                    "id": 3520,
                    "name": "ExpressionStatement",
                    "src": "1003:33:10"
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
                                  "referencedDeclaration": 3487,
                                  "type": "mapping(address => uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3493,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 3521,
                                    "name": "Identifier",
                                    "src": "1046:4:10"
                                  }
                                ],
                                "id": 3524,
                                "name": "MemberAccess",
                                "src": "1046:17:10"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3495,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 3523,
                                "name": "Identifier",
                                "src": "1064:5:10"
                              }
                            ],
                            "id": 3525,
                            "name": "IndexAccess",
                            "src": "1046:24:10"
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
                                      "referencedDeclaration": 3490,
                                      "type": "address[] storage ref"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 3493,
                                          "type": "struct PermissionsLib.Permissions storage pointer",
                                          "value": "self"
                                        },
                                        "id": 3526,
                                        "name": "Identifier",
                                        "src": "1073:4:10"
                                      }
                                    ],
                                    "id": 3527,
                                    "name": "MemberAccess",
                                    "src": "1073:21:10"
                                  }
                                ],
                                "id": 3528,
                                "name": "MemberAccess",
                                "src": "1073:28:10"
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
                                "id": 3529,
                                "name": "Literal",
                                "src": "1104:1:10"
                              }
                            ],
                            "id": 3530,
                            "name": "BinaryOperation",
                            "src": "1073:32:10"
                          }
                        ],
                        "id": 3531,
                        "name": "Assignment",
                        "src": "1046:59:10"
                      }
                    ],
                    "id": 3532,
                    "name": "ExpressionStatement",
                    "src": "1046:59:10"
                  }
                ],
                "id": 3533,
                "name": "Block",
                "src": "906:206:10"
              }
            ],
            "id": 3534,
            "name": "FunctionDefinition",
            "src": "825:287:10"
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
              "scope": 3657,
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
                      "scope": 3613,
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
                          "referencedDeclaration": 3491,
                          "type": "struct PermissionsLib.Permissions storage pointer"
                        },
                        "id": 3535,
                        "name": "UserDefinedTypeName",
                        "src": "1147:11:10"
                      }
                    ],
                    "id": 3536,
                    "name": "VariableDeclaration",
                    "src": "1147:24:10"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agent",
                      "scope": 3613,
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
                        "id": 3537,
                        "name": "ElementaryTypeName",
                        "src": "1173:7:10"
                      }
                    ],
                    "id": 3538,
                    "name": "VariableDeclaration",
                    "src": "1173:13:10"
                  }
                ],
                "id": 3539,
                "name": "ParameterList",
                "src": "1146:41:10"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 3540,
                "name": "ParameterList",
                "src": "1209:0:10"
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
                              "referencedDeclaration": 5488,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 3541,
                            "name": "Identifier",
                            "src": "1388:7:10"
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
                                      "typeIdentifier": "t_struct$_Permissions_$3491_storage_ptr",
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
                                  "referencedDeclaration": 3628,
                                  "type": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)",
                                  "value": "isAuthorized"
                                },
                                "id": 3542,
                                "name": "Identifier",
                                "src": "1396:12:10"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3536,
                                  "type": "struct PermissionsLib.Permissions storage pointer",
                                  "value": "self"
                                },
                                "id": 3543,
                                "name": "Identifier",
                                "src": "1409:4:10"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3538,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 3544,
                                "name": "Identifier",
                                "src": "1415:5:10"
                              }
                            ],
                            "id": 3545,
                            "name": "FunctionCall",
                            "src": "1396:25:10"
                          }
                        ],
                        "id": 3546,
                        "name": "FunctionCall",
                        "src": "1388:34:10"
                      }
                    ],
                    "id": 3547,
                    "name": "ExpressionStatement",
                    "src": "1388:34:10"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        3549
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "indexOfAgentToRevoke",
                          "scope": 3613,
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
                            "id": 3548,
                            "name": "ElementaryTypeName",
                            "src": "1433:4:10"
                          }
                        ],
                        "id": 3549,
                        "name": "VariableDeclaration",
                        "src": "1433:25:10"
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
                              "referencedDeclaration": 3487,
                              "type": "mapping(address => uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3536,
                                  "type": "struct PermissionsLib.Permissions storage pointer",
                                  "value": "self"
                                },
                                "id": 3550,
                                "name": "Identifier",
                                "src": "1461:4:10"
                              }
                            ],
                            "id": 3551,
                            "name": "MemberAccess",
                            "src": "1461:17:10"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3538,
                              "type": "address",
                              "value": "agent"
                            },
                            "id": 3552,
                            "name": "Identifier",
                            "src": "1479:5:10"
                          }
                        ],
                        "id": 3553,
                        "name": "IndexAccess",
                        "src": "1461:24:10"
                      }
                    ],
                    "id": 3554,
                    "name": "VariableDeclarationStatement",
                    "src": "1433:52:10"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        3556
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "indexOfAgentToMove",
                          "scope": 3613,
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
                            "id": 3555,
                            "name": "ElementaryTypeName",
                            "src": "1495:4:10"
                          }
                        ],
                        "id": 3556,
                        "name": "VariableDeclaration",
                        "src": "1495:23:10"
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
                                  "referencedDeclaration": 3490,
                                  "type": "address[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3536,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 3557,
                                    "name": "Identifier",
                                    "src": "1521:4:10"
                                  }
                                ],
                                "id": 3558,
                                "name": "MemberAccess",
                                "src": "1521:21:10"
                              }
                            ],
                            "id": 3559,
                            "name": "MemberAccess",
                            "src": "1521:28:10"
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
                            "id": 3560,
                            "name": "Literal",
                            "src": "1552:1:10"
                          }
                        ],
                        "id": 3561,
                        "name": "BinaryOperation",
                        "src": "1521:32:10"
                      }
                    ],
                    "id": 3562,
                    "name": "VariableDeclarationStatement",
                    "src": "1495:58:10"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        3564
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "agentToMove",
                          "scope": 3613,
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
                            "id": 3563,
                            "name": "ElementaryTypeName",
                            "src": "1563:7:10"
                          }
                        ],
                        "id": 3564,
                        "name": "VariableDeclaration",
                        "src": "1563:19:10"
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
                              "referencedDeclaration": 3490,
                              "type": "address[] storage ref"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3536,
                                  "type": "struct PermissionsLib.Permissions storage pointer",
                                  "value": "self"
                                },
                                "id": 3565,
                                "name": "Identifier",
                                "src": "1585:4:10"
                              }
                            ],
                            "id": 3566,
                            "name": "MemberAccess",
                            "src": "1585:21:10"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3556,
                              "type": "uint256",
                              "value": "indexOfAgentToMove"
                            },
                            "id": 3567,
                            "name": "Identifier",
                            "src": "1607:18:10"
                          }
                        ],
                        "id": 3568,
                        "name": "IndexAccess",
                        "src": "1585:41:10"
                      }
                    ],
                    "id": 3569,
                    "name": "VariableDeclarationStatement",
                    "src": "1563:63:10"
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
                                  "referencedDeclaration": 3483,
                                  "type": "mapping(address => bool)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3536,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 3570,
                                    "name": "Identifier",
                                    "src": "1689:4:10"
                                  }
                                ],
                                "id": 3571,
                                "name": "MemberAccess",
                                "src": "1689:15:10"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3538,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 3572,
                                "name": "Identifier",
                                "src": "1705:5:10"
                              }
                            ],
                            "id": 3573,
                            "name": "IndexAccess",
                            "src": "1689:22:10"
                          }
                        ],
                        "id": 3574,
                        "name": "UnaryOperation",
                        "src": "1682:29:10"
                      }
                    ],
                    "id": 3575,
                    "name": "ExpressionStatement",
                    "src": "1682:29:10"
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
                                  "referencedDeclaration": 3490,
                                  "type": "address[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3536,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 3576,
                                    "name": "Identifier",
                                    "src": "1792:4:10"
                                  }
                                ],
                                "id": 3579,
                                "name": "MemberAccess",
                                "src": "1792:21:10"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3549,
                                  "type": "uint256",
                                  "value": "indexOfAgentToRevoke"
                                },
                                "id": 3578,
                                "name": "Identifier",
                                "src": "1814:20:10"
                              }
                            ],
                            "id": 3580,
                            "name": "IndexAccess",
                            "src": "1792:43:10"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3564,
                              "type": "address",
                              "value": "agentToMove"
                            },
                            "id": 3581,
                            "name": "Identifier",
                            "src": "1838:11:10"
                          }
                        ],
                        "id": 3582,
                        "name": "Assignment",
                        "src": "1792:57:10"
                      }
                    ],
                    "id": 3583,
                    "name": "ExpressionStatement",
                    "src": "1792:57:10"
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
                                  "referencedDeclaration": 3487,
                                  "type": "mapping(address => uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3536,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 3584,
                                    "name": "Identifier",
                                    "src": "1920:4:10"
                                  }
                                ],
                                "id": 3587,
                                "name": "MemberAccess",
                                "src": "1920:17:10"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3564,
                                  "type": "address",
                                  "value": "agentToMove"
                                },
                                "id": 3586,
                                "name": "Identifier",
                                "src": "1938:11:10"
                              }
                            ],
                            "id": 3588,
                            "name": "IndexAccess",
                            "src": "1920:30:10"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3549,
                              "type": "uint256",
                              "value": "indexOfAgentToRevoke"
                            },
                            "id": 3589,
                            "name": "Identifier",
                            "src": "1953:20:10"
                          }
                        ],
                        "id": 3590,
                        "name": "Assignment",
                        "src": "1920:53:10"
                      }
                    ],
                    "id": 3591,
                    "name": "ExpressionStatement",
                    "src": "1920:53:10"
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
                                  "referencedDeclaration": 3487,
                                  "type": "mapping(address => uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3536,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 3592,
                                    "name": "Identifier",
                                    "src": "1990:4:10"
                                  }
                                ],
                                "id": 3593,
                                "name": "MemberAccess",
                                "src": "1990:17:10"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3538,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 3594,
                                "name": "Identifier",
                                "src": "2008:5:10"
                              }
                            ],
                            "id": 3595,
                            "name": "IndexAccess",
                            "src": "1990:24:10"
                          }
                        ],
                        "id": 3596,
                        "name": "UnaryOperation",
                        "src": "1983:31:10"
                      }
                    ],
                    "id": 3597,
                    "name": "ExpressionStatement",
                    "src": "1983:31:10"
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
                                  "referencedDeclaration": 3490,
                                  "type": "address[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3536,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 3598,
                                    "name": "Identifier",
                                    "src": "2088:4:10"
                                  }
                                ],
                                "id": 3599,
                                "name": "MemberAccess",
                                "src": "2088:21:10"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3556,
                                  "type": "uint256",
                                  "value": "indexOfAgentToMove"
                                },
                                "id": 3600,
                                "name": "Identifier",
                                "src": "2110:18:10"
                              }
                            ],
                            "id": 3601,
                            "name": "IndexAccess",
                            "src": "2088:41:10"
                          }
                        ],
                        "id": 3602,
                        "name": "UnaryOperation",
                        "src": "2081:48:10"
                      }
                    ],
                    "id": 3603,
                    "name": "ExpressionStatement",
                    "src": "2081:48:10"
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
                                  "referencedDeclaration": 3490,
                                  "type": "address[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3536,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 3604,
                                    "name": "Identifier",
                                    "src": "2139:4:10"
                                  }
                                ],
                                "id": 3607,
                                "name": "MemberAccess",
                                "src": "2139:21:10"
                              }
                            ],
                            "id": 3608,
                            "name": "MemberAccess",
                            "src": "2139:28:10"
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
                            "id": 3609,
                            "name": "Literal",
                            "src": "2171:1:10"
                          }
                        ],
                        "id": 3610,
                        "name": "Assignment",
                        "src": "2139:33:10"
                      }
                    ],
                    "id": 3611,
                    "name": "ExpressionStatement",
                    "src": "2139:33:10"
                  }
                ],
                "id": 3612,
                "name": "Block",
                "src": "1209:970:10"
              }
            ],
            "id": 3613,
            "name": "FunctionDefinition",
            "src": "1118:1061:10"
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
              "scope": 3657,
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
                      "scope": 3628,
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
                          "referencedDeclaration": 3491,
                          "type": "struct PermissionsLib.Permissions storage pointer"
                        },
                        "id": 3614,
                        "name": "UserDefinedTypeName",
                        "src": "2207:11:10"
                      }
                    ],
                    "id": 3615,
                    "name": "VariableDeclaration",
                    "src": "2207:24:10"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agent",
                      "scope": 3628,
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
                        "id": 3616,
                        "name": "ElementaryTypeName",
                        "src": "2233:7:10"
                      }
                    ],
                    "id": 3617,
                    "name": "VariableDeclaration",
                    "src": "2233:13:10"
                  }
                ],
                "id": 3618,
                "name": "ParameterList",
                "src": "2206:41:10"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 3628,
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
                        "id": 3619,
                        "name": "ElementaryTypeName",
                        "src": "2295:4:10"
                      }
                    ],
                    "id": 3620,
                    "name": "VariableDeclaration",
                    "src": "2295:4:10"
                  }
                ],
                "id": 3621,
                "name": "ParameterList",
                "src": "2294:6:10"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 3621
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
                              "referencedDeclaration": 3483,
                              "type": "mapping(address => bool)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3615,
                                  "type": "struct PermissionsLib.Permissions storage pointer",
                                  "value": "self"
                                },
                                "id": 3622,
                                "name": "Identifier",
                                "src": "2322:4:10"
                              }
                            ],
                            "id": 3623,
                            "name": "MemberAccess",
                            "src": "2322:15:10"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3617,
                              "type": "address",
                              "value": "agent"
                            },
                            "id": 3624,
                            "name": "Identifier",
                            "src": "2338:5:10"
                          }
                        ],
                        "id": 3625,
                        "name": "IndexAccess",
                        "src": "2322:22:10"
                      }
                    ],
                    "id": 3626,
                    "name": "Return",
                    "src": "2315:29:10"
                  }
                ],
                "id": 3627,
                "name": "Block",
                "src": "2305:46:10"
              }
            ],
            "id": 3628,
            "name": "FunctionDefinition",
            "src": "2185:166:10"
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
              "scope": 3657,
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
                      "scope": 3644,
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
                          "referencedDeclaration": 3491,
                          "type": "struct PermissionsLib.Permissions storage pointer"
                        },
                        "id": 3629,
                        "name": "UserDefinedTypeName",
                        "src": "2382:11:10"
                      }
                    ],
                    "id": 3630,
                    "name": "VariableDeclaration",
                    "src": "2382:24:10"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agent",
                      "scope": 3644,
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
                        "id": 3631,
                        "name": "ElementaryTypeName",
                        "src": "2408:7:10"
                      }
                    ],
                    "id": 3632,
                    "name": "VariableDeclaration",
                    "src": "2408:13:10"
                  }
                ],
                "id": 3633,
                "name": "ParameterList",
                "src": "2381:41:10"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 3644,
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
                        "id": 3634,
                        "name": "ElementaryTypeName",
                        "src": "2470:4:10"
                      }
                    ],
                    "id": 3635,
                    "name": "VariableDeclaration",
                    "src": "2470:4:10"
                  }
                ],
                "id": 3636,
                "name": "ParameterList",
                "src": "2469:6:10"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 3636
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
                                      "typeIdentifier": "t_struct$_Permissions_$3491_storage_ptr",
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
                                  "referencedDeclaration": 3628,
                                  "type": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)",
                                  "value": "isAuthorized"
                                },
                                "id": 3637,
                                "name": "Identifier",
                                "src": "2498:12:10"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3630,
                                  "type": "struct PermissionsLib.Permissions storage pointer",
                                  "value": "self"
                                },
                                "id": 3638,
                                "name": "Identifier",
                                "src": "2511:4:10"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3632,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 3639,
                                "name": "Identifier",
                                "src": "2517:5:10"
                              }
                            ],
                            "id": 3640,
                            "name": "FunctionCall",
                            "src": "2498:25:10"
                          }
                        ],
                        "id": 3641,
                        "name": "UnaryOperation",
                        "src": "2497:26:10"
                      }
                    ],
                    "id": 3642,
                    "name": "Return",
                    "src": "2490:33:10"
                  }
                ],
                "id": 3643,
                "name": "Block",
                "src": "2480:50:10"
              }
            ],
            "id": 3644,
            "name": "FunctionDefinition",
            "src": "2357:173:10"
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
              "scope": 3657,
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
                      "scope": 3656,
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
                          "referencedDeclaration": 3491,
                          "type": "struct PermissionsLib.Permissions storage pointer"
                        },
                        "id": 3645,
                        "name": "UserDefinedTypeName",
                        "src": "2565:11:10"
                      }
                    ],
                    "id": 3646,
                    "name": "VariableDeclaration",
                    "src": "2565:24:10"
                  }
                ],
                "id": 3647,
                "name": "ParameterList",
                "src": "2564:26:10"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 3656,
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
                            "id": 3648,
                            "name": "ElementaryTypeName",
                            "src": "2638:7:10"
                          }
                        ],
                        "id": 3649,
                        "name": "ArrayTypeName",
                        "src": "2638:9:10"
                      }
                    ],
                    "id": 3650,
                    "name": "VariableDeclaration",
                    "src": "2638:9:10"
                  }
                ],
                "id": 3651,
                "name": "ParameterList",
                "src": "2637:11:10"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 3651
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
                          "referencedDeclaration": 3490,
                          "type": "address[] storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3646,
                              "type": "struct PermissionsLib.Permissions storage pointer",
                              "value": "self"
                            },
                            "id": 3652,
                            "name": "Identifier",
                            "src": "2670:4:10"
                          }
                        ],
                        "id": 3653,
                        "name": "MemberAccess",
                        "src": "2670:21:10"
                      }
                    ],
                    "id": 3654,
                    "name": "Return",
                    "src": "2663:28:10"
                  }
                ],
                "id": 3655,
                "name": "Block",
                "src": "2653:45:10"
              }
            ],
            "id": 3656,
            "name": "FunctionDefinition",
            "src": "2536:162:10"
          }
        ],
        "id": 3657,
        "name": "ContractDefinition",
        "src": "610:2090:10"
      }
    ],
    "id": 3658,
    "name": "SourceUnit",
    "src": "584:2117:10"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {
    "42": {
      "events": {},
      "links": {},
      "address": "0xb97750dee30dff14ead01398937c3a2239cb7c42"
    },
    "70": {
      "events": {},
      "links": {},
      "address": "0xc13d026d7e4e6c2864240aa1f26bb436c6271338"
    }
  },
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-03-26T00:44:17.224Z"
}