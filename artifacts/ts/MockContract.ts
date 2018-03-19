export const MockContract = 
{
  "contractName": "MockContract",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "functionName",
          "type": "string"
        },
        {
          "name": "argsSignature",
          "type": "bytes32"
        }
      ],
      "name": "getMockReturnValue",
      "outputs": [
        {
          "name": "_mockReturnValue",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "functionName",
          "type": "string"
        },
        {
          "name": "argsSignature",
          "type": "bytes32"
        },
        {
          "name": "returnValue",
          "type": "bytes32"
        }
      ],
      "name": "mockReturnValue",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "reset",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "/*\n\n  Copyright 2017 Dharma Labs Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n*/\n\npragma solidity 0.4.18;\n\n\ncontract MockContract {\n    bytes32 internal constant DEFAULT_SIGNATURE_ARGS = bytes32(0);\n\n    // We use bytes32 as our generic base type from and to which we cast all other types\n    mapping (string => bytes32[]) internal functionCallSignatures;\n    mapping (string => mapping (bytes32 => bytes32)) internal mockedReturnValue;\n    mapping (string => mapping (bytes32 => bool)) internal functionCalls;\n\n    function mockReturnValue(\n        string functionName,\n        bytes32 argsSignature,\n        bytes32 returnValue\n    ) public {\n        functionCallSignatures[functionName].push(argsSignature);\n        mockedReturnValue[functionName][argsSignature] = returnValue;\n    }\n\n    function getMockReturnValue(string functionName, bytes32 argsSignature)\n        public\n        view\n        returns (bytes32 _mockReturnValue)\n    {\n        return mockedReturnValue[functionName][argsSignature];\n    }\n\n    function reset() public {\n        for (uint i = 0; i < 10; i++) {\n            string memory functionName = getFunctionList()[i];\n\n            if (bytes(functionName).length != 0) {\n                for (uint j = 0; j < functionCallSignatures[functionName].length; j++) {\n                    bytes32 callSignature = functionCallSignatures[functionName][j];\n                    delete functionCalls[functionName][callSignature];\n                    delete mockedReturnValue[functionName][callSignature];\n                }\n\n                delete functionCallSignatures[functionName];\n            }\n        }\n    }\n\n    function functionCalledWithArgs(string functionName, bytes32 args)\n        internal\n    {\n        functionCalls[functionName][args] = true;\n        functionCallSignatures[functionName].push(args);\n    }\n\n    function wasFunctionCalledWithArgs(string functionName, bytes32 args)\n        internal\n        view\n        returns (bool wasCalled)\n    {\n        return functionCalls[functionName][args];\n    }\n\n    function getFunctionList() internal returns (string[10] functionNames);\n}\n",
  "sourcePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/test/mocks/MockContract.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/test/mocks/MockContract.sol",
      "exportedSymbols": {
        "MockContract": [
          4090
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
        "id": 3907,
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
          "documentation": null,
          "fullyImplemented": false,
          "linearizedBaseContracts": [
            4090
          ],
          "name": "MockContract",
          "scope": 4091
        },
        "children": [
          {
            "attributes": {
              "constant": true,
              "name": "DEFAULT_SIGNATURE_ARGS",
              "scope": 4090,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "bytes32",
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "name": "bytes32",
                  "type": "bytes32"
                },
                "id": 3908,
                "name": "ElementaryTypeName",
                "src": "638:7:13"
              },
              {
                "attributes": {
                  "argumentTypes": null,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "isStructConstructorCall": false,
                  "lValueRequested": false,
                  "names": [
                    null
                  ],
                  "type": "bytes32",
                  "type_conversion": true
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        }
                      ],
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "type": "type(bytes32)",
                      "value": "bytes32"
                    },
                    "id": 3909,
                    "name": "ElementaryTypeNameExpression",
                    "src": "689:7:13"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "hexvalue": "30",
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "subdenomination": null,
                      "token": "number",
                      "type": "int_const 0",
                      "value": "0"
                    },
                    "id": 3910,
                    "name": "Literal",
                    "src": "697:1:13"
                  }
                ],
                "id": 3911,
                "name": "FunctionCall",
                "src": "689:10:13"
              }
            ],
            "id": 3912,
            "name": "VariableDeclaration",
            "src": "638:61:13"
          },
          {
            "attributes": {
              "constant": false,
              "name": "functionCallSignatures",
              "scope": 4090,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(string memory => bytes32[] storage ref)",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(string memory => bytes32[] storage ref)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "string",
                      "type": "string storage pointer"
                    },
                    "id": 3913,
                    "name": "ElementaryTypeName",
                    "src": "804:6:13"
                  },
                  {
                    "attributes": {
                      "length": null,
                      "type": "bytes32[] storage pointer"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 3914,
                        "name": "ElementaryTypeName",
                        "src": "814:7:13"
                      }
                    ],
                    "id": 3915,
                    "name": "ArrayTypeName",
                    "src": "814:9:13"
                  }
                ],
                "id": 3916,
                "name": "Mapping",
                "src": "795:29:13"
              }
            ],
            "id": 3917,
            "name": "VariableDeclaration",
            "src": "795:61:13"
          },
          {
            "attributes": {
              "constant": false,
              "name": "mockedReturnValue",
              "scope": 4090,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(string memory => mapping(bytes32 => bytes32))",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(string memory => mapping(bytes32 => bytes32))"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "string",
                      "type": "string storage pointer"
                    },
                    "id": 3918,
                    "name": "ElementaryTypeName",
                    "src": "871:6:13"
                  },
                  {
                    "attributes": {
                      "type": "mapping(bytes32 => bytes32)"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 3919,
                        "name": "ElementaryTypeName",
                        "src": "890:7:13"
                      },
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 3920,
                        "name": "ElementaryTypeName",
                        "src": "901:7:13"
                      }
                    ],
                    "id": 3921,
                    "name": "Mapping",
                    "src": "881:28:13"
                  }
                ],
                "id": 3922,
                "name": "Mapping",
                "src": "862:48:13"
              }
            ],
            "id": 3923,
            "name": "VariableDeclaration",
            "src": "862:75:13"
          },
          {
            "attributes": {
              "constant": false,
              "name": "functionCalls",
              "scope": 4090,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(string memory => mapping(bytes32 => bool))",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(string memory => mapping(bytes32 => bool))"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "string",
                      "type": "string storage pointer"
                    },
                    "id": 3924,
                    "name": "ElementaryTypeName",
                    "src": "952:6:13"
                  },
                  {
                    "attributes": {
                      "type": "mapping(bytes32 => bool)"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 3925,
                        "name": "ElementaryTypeName",
                        "src": "971:7:13"
                      },
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 3926,
                        "name": "ElementaryTypeName",
                        "src": "982:4:13"
                      }
                    ],
                    "id": 3927,
                    "name": "Mapping",
                    "src": "962:25:13"
                  }
                ],
                "id": 3928,
                "name": "Mapping",
                "src": "943:45:13"
              }
            ],
            "id": 3929,
            "name": "VariableDeclaration",
            "src": "943:68:13"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "mockReturnValue",
              "payable": false,
              "scope": 4090,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "functionName",
                      "scope": 3954,
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
                        "id": 3930,
                        "name": "ElementaryTypeName",
                        "src": "1052:6:13"
                      }
                    ],
                    "id": 3931,
                    "name": "VariableDeclaration",
                    "src": "1052:19:13"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "argsSignature",
                      "scope": 3954,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 3932,
                        "name": "ElementaryTypeName",
                        "src": "1081:7:13"
                      }
                    ],
                    "id": 3933,
                    "name": "VariableDeclaration",
                    "src": "1081:21:13"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "returnValue",
                      "scope": 3954,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 3934,
                        "name": "ElementaryTypeName",
                        "src": "1112:7:13"
                      }
                    ],
                    "id": 3935,
                    "name": "VariableDeclaration",
                    "src": "1112:19:13"
                  }
                ],
                "id": 3936,
                "name": "ParameterList",
                "src": "1042:95:13"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 3937,
                "name": "ParameterList",
                "src": "1145:0:13"
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
                          "type": "uint256",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "push",
                              "referencedDeclaration": null,
                              "type": "function (bytes32) returns (uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "bytes32[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3917,
                                      "type": "mapping(string memory => bytes32[] storage ref)",
                                      "value": "functionCallSignatures"
                                    },
                                    "id": 3938,
                                    "name": "Identifier",
                                    "src": "1155:22:13"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3931,
                                      "type": "string memory",
                                      "value": "functionName"
                                    },
                                    "id": 3939,
                                    "name": "Identifier",
                                    "src": "1178:12:13"
                                  }
                                ],
                                "id": 3940,
                                "name": "IndexAccess",
                                "src": "1155:36:13"
                              }
                            ],
                            "id": 3941,
                            "name": "MemberAccess",
                            "src": "1155:41:13"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3933,
                              "type": "bytes32",
                              "value": "argsSignature"
                            },
                            "id": 3942,
                            "name": "Identifier",
                            "src": "1197:13:13"
                          }
                        ],
                        "id": 3943,
                        "name": "FunctionCall",
                        "src": "1155:56:13"
                      }
                    ],
                    "id": 3944,
                    "name": "ExpressionStatement",
                    "src": "1155:56:13"
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
                          "type": "bytes32"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "bytes32"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "mapping(bytes32 => bytes32)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3923,
                                      "type": "mapping(string memory => mapping(bytes32 => bytes32))",
                                      "value": "mockedReturnValue"
                                    },
                                    "id": 3945,
                                    "name": "Identifier",
                                    "src": "1221:17:13"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3931,
                                      "type": "string memory",
                                      "value": "functionName"
                                    },
                                    "id": 3946,
                                    "name": "Identifier",
                                    "src": "1239:12:13"
                                  }
                                ],
                                "id": 3948,
                                "name": "IndexAccess",
                                "src": "1221:31:13"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3933,
                                  "type": "bytes32",
                                  "value": "argsSignature"
                                },
                                "id": 3947,
                                "name": "Identifier",
                                "src": "1253:13:13"
                              }
                            ],
                            "id": 3949,
                            "name": "IndexAccess",
                            "src": "1221:46:13"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3935,
                              "type": "bytes32",
                              "value": "returnValue"
                            },
                            "id": 3950,
                            "name": "Identifier",
                            "src": "1270:11:13"
                          }
                        ],
                        "id": 3951,
                        "name": "Assignment",
                        "src": "1221:60:13"
                      }
                    ],
                    "id": 3952,
                    "name": "ExpressionStatement",
                    "src": "1221:60:13"
                  }
                ],
                "id": 3953,
                "name": "Block",
                "src": "1145:143:13"
              }
            ],
            "id": 3954,
            "name": "FunctionDefinition",
            "src": "1018:270:13"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getMockReturnValue",
              "payable": false,
              "scope": 4090,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "functionName",
                      "scope": 3970,
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
                        "id": 3955,
                        "name": "ElementaryTypeName",
                        "src": "1322:6:13"
                      }
                    ],
                    "id": 3956,
                    "name": "VariableDeclaration",
                    "src": "1322:19:13"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "argsSignature",
                      "scope": 3970,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 3957,
                        "name": "ElementaryTypeName",
                        "src": "1343:7:13"
                      }
                    ],
                    "id": 3958,
                    "name": "VariableDeclaration",
                    "src": "1343:21:13"
                  }
                ],
                "id": 3959,
                "name": "ParameterList",
                "src": "1321:44:13"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_mockReturnValue",
                      "scope": 3970,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 3960,
                        "name": "ElementaryTypeName",
                        "src": "1411:7:13"
                      }
                    ],
                    "id": 3961,
                    "name": "VariableDeclaration",
                    "src": "1411:24:13"
                  }
                ],
                "id": 3962,
                "name": "ParameterList",
                "src": "1410:26:13"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 3962
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "bytes32"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "type": "mapping(bytes32 => bytes32)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3923,
                                  "type": "mapping(string memory => mapping(bytes32 => bytes32))",
                                  "value": "mockedReturnValue"
                                },
                                "id": 3963,
                                "name": "Identifier",
                                "src": "1458:17:13"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3956,
                                  "type": "string memory",
                                  "value": "functionName"
                                },
                                "id": 3964,
                                "name": "Identifier",
                                "src": "1476:12:13"
                              }
                            ],
                            "id": 3965,
                            "name": "IndexAccess",
                            "src": "1458:31:13"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3958,
                              "type": "bytes32",
                              "value": "argsSignature"
                            },
                            "id": 3966,
                            "name": "Identifier",
                            "src": "1490:13:13"
                          }
                        ],
                        "id": 3967,
                        "name": "IndexAccess",
                        "src": "1458:46:13"
                      }
                    ],
                    "id": 3968,
                    "name": "Return",
                    "src": "1451:53:13"
                  }
                ],
                "id": 3969,
                "name": "Block",
                "src": "1441:70:13"
              }
            ],
            "id": 3970,
            "name": "FunctionDefinition",
            "src": "1294:217:13"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "reset",
              "payable": false,
              "scope": 4090,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 3971,
                "name": "ParameterList",
                "src": "1531:2:13"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 3972,
                "name": "ParameterList",
                "src": "1541:0:13"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "assignments": [
                            3974
                          ]
                        },
                        "children": [
                          {
                            "attributes": {
                              "constant": false,
                              "name": "i",
                              "scope": 4043,
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
                                "id": 3973,
                                "name": "ElementaryTypeName",
                                "src": "1556:4:13"
                              }
                            ],
                            "id": 3974,
                            "name": "VariableDeclaration",
                            "src": "1556:6:13"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "30",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 0",
                              "value": "0"
                            },
                            "id": 3975,
                            "name": "Literal",
                            "src": "1565:1:13"
                          }
                        ],
                        "id": 3976,
                        "name": "VariableDeclarationStatement",
                        "src": "1556:10:13"
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
                          "operator": "<",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3974,
                              "type": "uint256",
                              "value": "i"
                            },
                            "id": 3977,
                            "name": "Identifier",
                            "src": "1568:1:13"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "3130",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 10",
                              "value": "10"
                            },
                            "id": 3978,
                            "name": "Literal",
                            "src": "1572:2:13"
                          }
                        ],
                        "id": 3979,
                        "name": "BinaryOperation",
                        "src": "1568:6:13"
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
                              "operator": "++",
                              "prefix": false,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3974,
                                  "type": "uint256",
                                  "value": "i"
                                },
                                "id": 3980,
                                "name": "Identifier",
                                "src": "1576:1:13"
                              }
                            ],
                            "id": 3981,
                            "name": "UnaryOperation",
                            "src": "1576:3:13"
                          }
                        ],
                        "id": 3982,
                        "name": "ExpressionStatement",
                        "src": "1576:3:13"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "assignments": [
                                3984
                              ]
                            },
                            "children": [
                              {
                                "attributes": {
                                  "constant": false,
                                  "name": "functionName",
                                  "scope": 4043,
                                  "stateVariable": false,
                                  "storageLocation": "memory",
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
                                    "id": 3983,
                                    "name": "ElementaryTypeName",
                                    "src": "1595:6:13"
                                  }
                                ],
                                "id": 3984,
                                "name": "VariableDeclaration",
                                "src": "1595:26:13"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "string memory"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "arguments": [
                                        null
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "isStructConstructorCall": false,
                                      "lValueRequested": false,
                                      "names": [
                                        null
                                      ],
                                      "type": "string memory[10] memory",
                                      "type_conversion": false
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": [
                                            null
                                          ],
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 4089,
                                          "type": "function () returns (string memory[10] memory)",
                                          "value": "getFunctionList"
                                        },
                                        "id": 3985,
                                        "name": "Identifier",
                                        "src": "1624:15:13"
                                      }
                                    ],
                                    "id": 3986,
                                    "name": "FunctionCall",
                                    "src": "1624:17:13"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3974,
                                      "type": "uint256",
                                      "value": "i"
                                    },
                                    "id": 3987,
                                    "name": "Identifier",
                                    "src": "1642:1:13"
                                  }
                                ],
                                "id": 3988,
                                "name": "IndexAccess",
                                "src": "1624:20:13"
                              }
                            ],
                            "id": 3989,
                            "name": "VariableDeclarationStatement",
                            "src": "1595:49:13"
                          },
                          {
                            "attributes": {
                              "falseBody": null
                            },
                            "children": [
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
                                  "operator": "!=",
                                  "type": "bool"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
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
                                          "isLValue": false,
                                          "isPure": false,
                                          "isStructConstructorCall": false,
                                          "lValueRequested": false,
                                          "names": [
                                            null
                                          ],
                                          "type": "bytes memory",
                                          "type_conversion": true
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": [
                                                {
                                                  "typeIdentifier": "t_string_memory_ptr",
                                                  "typeString": "string memory"
                                                }
                                              ],
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": true,
                                              "lValueRequested": false,
                                              "type": "type(bytes storage pointer)",
                                              "value": "bytes"
                                            },
                                            "id": 3990,
                                            "name": "ElementaryTypeNameExpression",
                                            "src": "1663:5:13"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 3984,
                                              "type": "string memory",
                                              "value": "functionName"
                                            },
                                            "id": 3991,
                                            "name": "Identifier",
                                            "src": "1669:12:13"
                                          }
                                        ],
                                        "id": 3992,
                                        "name": "FunctionCall",
                                        "src": "1663:19:13"
                                      }
                                    ],
                                    "id": 3993,
                                    "name": "MemberAccess",
                                    "src": "1663:26:13"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "30",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "number",
                                      "type": "int_const 0",
                                      "value": "0"
                                    },
                                    "id": 3994,
                                    "name": "Literal",
                                    "src": "1693:1:13"
                                  }
                                ],
                                "id": 3995,
                                "name": "BinaryOperation",
                                "src": "1663:31:13"
                              },
                              {
                                "children": [
                                  {
                                    "children": [
                                      {
                                        "attributes": {
                                          "assignments": [
                                            3997
                                          ]
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "constant": false,
                                              "name": "j",
                                              "scope": 4043,
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
                                                "id": 3996,
                                                "name": "ElementaryTypeName",
                                                "src": "1719:4:13"
                                              }
                                            ],
                                            "id": 3997,
                                            "name": "VariableDeclaration",
                                            "src": "1719:6:13"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "hexvalue": "30",
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": true,
                                              "lValueRequested": false,
                                              "subdenomination": null,
                                              "token": "number",
                                              "type": "int_const 0",
                                              "value": "0"
                                            },
                                            "id": 3998,
                                            "name": "Literal",
                                            "src": "1728:1:13"
                                          }
                                        ],
                                        "id": 3999,
                                        "name": "VariableDeclarationStatement",
                                        "src": "1719:10:13"
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
                                          "operator": "<",
                                          "type": "bool"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 3997,
                                              "type": "uint256",
                                              "value": "j"
                                            },
                                            "id": 4000,
                                            "name": "Identifier",
                                            "src": "1731:1:13"
                                          },
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
                                                  "type": "bytes32[] storage ref"
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 3917,
                                                      "type": "mapping(string memory => bytes32[] storage ref)",
                                                      "value": "functionCallSignatures"
                                                    },
                                                    "id": 4001,
                                                    "name": "Identifier",
                                                    "src": "1735:22:13"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 3984,
                                                      "type": "string memory",
                                                      "value": "functionName"
                                                    },
                                                    "id": 4002,
                                                    "name": "Identifier",
                                                    "src": "1758:12:13"
                                                  }
                                                ],
                                                "id": 4003,
                                                "name": "IndexAccess",
                                                "src": "1735:36:13"
                                              }
                                            ],
                                            "id": 4004,
                                            "name": "MemberAccess",
                                            "src": "1735:43:13"
                                          }
                                        ],
                                        "id": 4005,
                                        "name": "BinaryOperation",
                                        "src": "1731:47:13"
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
                                              "operator": "++",
                                              "prefix": false,
                                              "type": "uint256"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 3997,
                                                  "type": "uint256",
                                                  "value": "j"
                                                },
                                                "id": 4006,
                                                "name": "Identifier",
                                                "src": "1780:1:13"
                                              }
                                            ],
                                            "id": 4007,
                                            "name": "UnaryOperation",
                                            "src": "1780:3:13"
                                          }
                                        ],
                                        "id": 4008,
                                        "name": "ExpressionStatement",
                                        "src": "1780:3:13"
                                      },
                                      {
                                        "children": [
                                          {
                                            "attributes": {
                                              "assignments": [
                                                4010
                                              ]
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "constant": false,
                                                  "name": "callSignature",
                                                  "scope": 4043,
                                                  "stateVariable": false,
                                                  "storageLocation": "default",
                                                  "type": "bytes32",
                                                  "value": null,
                                                  "visibility": "internal"
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "name": "bytes32",
                                                      "type": "bytes32"
                                                    },
                                                    "id": 4009,
                                                    "name": "ElementaryTypeName",
                                                    "src": "1807:7:13"
                                                  }
                                                ],
                                                "id": 4010,
                                                "name": "VariableDeclaration",
                                                "src": "1807:21:13"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "isConstant": false,
                                                  "isLValue": true,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "type": "bytes32"
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "isConstant": false,
                                                      "isLValue": true,
                                                      "isPure": false,
                                                      "lValueRequested": false,
                                                      "type": "bytes32[] storage ref"
                                                    },
                                                    "children": [
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 3917,
                                                          "type": "mapping(string memory => bytes32[] storage ref)",
                                                          "value": "functionCallSignatures"
                                                        },
                                                        "id": 4011,
                                                        "name": "Identifier",
                                                        "src": "1831:22:13"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 3984,
                                                          "type": "string memory",
                                                          "value": "functionName"
                                                        },
                                                        "id": 4012,
                                                        "name": "Identifier",
                                                        "src": "1854:12:13"
                                                      }
                                                    ],
                                                    "id": 4013,
                                                    "name": "IndexAccess",
                                                    "src": "1831:36:13"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 3997,
                                                      "type": "uint256",
                                                      "value": "j"
                                                    },
                                                    "id": 4014,
                                                    "name": "Identifier",
                                                    "src": "1868:1:13"
                                                  }
                                                ],
                                                "id": 4015,
                                                "name": "IndexAccess",
                                                "src": "1831:39:13"
                                              }
                                            ],
                                            "id": 4016,
                                            "name": "VariableDeclarationStatement",
                                            "src": "1807:63:13"
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
                                                          "type": "mapping(bytes32 => bool)"
                                                        },
                                                        "children": [
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 3929,
                                                              "type": "mapping(string memory => mapping(bytes32 => bool))",
                                                              "value": "functionCalls"
                                                            },
                                                            "id": 4017,
                                                            "name": "Identifier",
                                                            "src": "1899:13:13"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 3984,
                                                              "type": "string memory",
                                                              "value": "functionName"
                                                            },
                                                            "id": 4018,
                                                            "name": "Identifier",
                                                            "src": "1913:12:13"
                                                          }
                                                        ],
                                                        "id": 4019,
                                                        "name": "IndexAccess",
                                                        "src": "1899:27:13"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 4010,
                                                          "type": "bytes32",
                                                          "value": "callSignature"
                                                        },
                                                        "id": 4020,
                                                        "name": "Identifier",
                                                        "src": "1927:13:13"
                                                      }
                                                    ],
                                                    "id": 4021,
                                                    "name": "IndexAccess",
                                                    "src": "1899:42:13"
                                                  }
                                                ],
                                                "id": 4022,
                                                "name": "UnaryOperation",
                                                "src": "1892:49:13"
                                              }
                                            ],
                                            "id": 4023,
                                            "name": "ExpressionStatement",
                                            "src": "1892:49:13"
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
                                                      "type": "bytes32"
                                                    },
                                                    "children": [
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "isConstant": false,
                                                          "isLValue": true,
                                                          "isPure": false,
                                                          "lValueRequested": false,
                                                          "type": "mapping(bytes32 => bytes32)"
                                                        },
                                                        "children": [
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 3923,
                                                              "type": "mapping(string memory => mapping(bytes32 => bytes32))",
                                                              "value": "mockedReturnValue"
                                                            },
                                                            "id": 4024,
                                                            "name": "Identifier",
                                                            "src": "1970:17:13"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 3984,
                                                              "type": "string memory",
                                                              "value": "functionName"
                                                            },
                                                            "id": 4025,
                                                            "name": "Identifier",
                                                            "src": "1988:12:13"
                                                          }
                                                        ],
                                                        "id": 4026,
                                                        "name": "IndexAccess",
                                                        "src": "1970:31:13"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 4010,
                                                          "type": "bytes32",
                                                          "value": "callSignature"
                                                        },
                                                        "id": 4027,
                                                        "name": "Identifier",
                                                        "src": "2002:13:13"
                                                      }
                                                    ],
                                                    "id": 4028,
                                                    "name": "IndexAccess",
                                                    "src": "1970:46:13"
                                                  }
                                                ],
                                                "id": 4029,
                                                "name": "UnaryOperation",
                                                "src": "1963:53:13"
                                              }
                                            ],
                                            "id": 4030,
                                            "name": "ExpressionStatement",
                                            "src": "1963:53:13"
                                          }
                                        ],
                                        "id": 4031,
                                        "name": "Block",
                                        "src": "1785:250:13"
                                      }
                                    ],
                                    "id": 4032,
                                    "name": "ForStatement",
                                    "src": "1714:321:13"
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
                                              "type": "bytes32[] storage ref"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 3917,
                                                  "type": "mapping(string memory => bytes32[] storage ref)",
                                                  "value": "functionCallSignatures"
                                                },
                                                "id": 4033,
                                                "name": "Identifier",
                                                "src": "2060:22:13"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 3984,
                                                  "type": "string memory",
                                                  "value": "functionName"
                                                },
                                                "id": 4034,
                                                "name": "Identifier",
                                                "src": "2083:12:13"
                                              }
                                            ],
                                            "id": 4035,
                                            "name": "IndexAccess",
                                            "src": "2060:36:13"
                                          }
                                        ],
                                        "id": 4036,
                                        "name": "UnaryOperation",
                                        "src": "2053:43:13"
                                      }
                                    ],
                                    "id": 4037,
                                    "name": "ExpressionStatement",
                                    "src": "2053:43:13"
                                  }
                                ],
                                "id": 4038,
                                "name": "Block",
                                "src": "1696:415:13"
                              }
                            ],
                            "id": 4039,
                            "name": "IfStatement",
                            "src": "1659:452:13"
                          }
                        ],
                        "id": 4040,
                        "name": "Block",
                        "src": "1581:540:13"
                      }
                    ],
                    "id": 4041,
                    "name": "ForStatement",
                    "src": "1551:570:13"
                  }
                ],
                "id": 4042,
                "name": "Block",
                "src": "1541:586:13"
              }
            ],
            "id": 4043,
            "name": "FunctionDefinition",
            "src": "1517:610:13"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "functionCalledWithArgs",
              "payable": false,
              "scope": 4090,
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
                      "name": "functionName",
                      "scope": 4066,
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
                        "id": 4044,
                        "name": "ElementaryTypeName",
                        "src": "2165:6:13"
                      }
                    ],
                    "id": 4045,
                    "name": "VariableDeclaration",
                    "src": "2165:19:13"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "args",
                      "scope": 4066,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 4046,
                        "name": "ElementaryTypeName",
                        "src": "2186:7:13"
                      }
                    ],
                    "id": 4047,
                    "name": "VariableDeclaration",
                    "src": "2186:12:13"
                  }
                ],
                "id": 4048,
                "name": "ParameterList",
                "src": "2164:35:13"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 4049,
                "name": "ParameterList",
                "src": "2221:0:13"
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
                                  "type": "mapping(bytes32 => bool)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3929,
                                      "type": "mapping(string memory => mapping(bytes32 => bool))",
                                      "value": "functionCalls"
                                    },
                                    "id": 4050,
                                    "name": "Identifier",
                                    "src": "2231:13:13"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 4045,
                                      "type": "string memory",
                                      "value": "functionName"
                                    },
                                    "id": 4051,
                                    "name": "Identifier",
                                    "src": "2245:12:13"
                                  }
                                ],
                                "id": 4053,
                                "name": "IndexAccess",
                                "src": "2231:27:13"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4047,
                                  "type": "bytes32",
                                  "value": "args"
                                },
                                "id": 4052,
                                "name": "Identifier",
                                "src": "2259:4:13"
                              }
                            ],
                            "id": 4054,
                            "name": "IndexAccess",
                            "src": "2231:33:13"
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
                            "id": 4055,
                            "name": "Literal",
                            "src": "2267:4:13"
                          }
                        ],
                        "id": 4056,
                        "name": "Assignment",
                        "src": "2231:40:13"
                      }
                    ],
                    "id": 4057,
                    "name": "ExpressionStatement",
                    "src": "2231:40:13"
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
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "push",
                              "referencedDeclaration": null,
                              "type": "function (bytes32) returns (uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "bytes32[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3917,
                                      "type": "mapping(string memory => bytes32[] storage ref)",
                                      "value": "functionCallSignatures"
                                    },
                                    "id": 4058,
                                    "name": "Identifier",
                                    "src": "2281:22:13"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 4045,
                                      "type": "string memory",
                                      "value": "functionName"
                                    },
                                    "id": 4059,
                                    "name": "Identifier",
                                    "src": "2304:12:13"
                                  }
                                ],
                                "id": 4060,
                                "name": "IndexAccess",
                                "src": "2281:36:13"
                              }
                            ],
                            "id": 4061,
                            "name": "MemberAccess",
                            "src": "2281:41:13"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4047,
                              "type": "bytes32",
                              "value": "args"
                            },
                            "id": 4062,
                            "name": "Identifier",
                            "src": "2323:4:13"
                          }
                        ],
                        "id": 4063,
                        "name": "FunctionCall",
                        "src": "2281:47:13"
                      }
                    ],
                    "id": 4064,
                    "name": "ExpressionStatement",
                    "src": "2281:47:13"
                  }
                ],
                "id": 4065,
                "name": "Block",
                "src": "2221:114:13"
              }
            ],
            "id": 4066,
            "name": "FunctionDefinition",
            "src": "2133:202:13"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "wasFunctionCalledWithArgs",
              "payable": false,
              "scope": 4090,
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
                      "name": "functionName",
                      "scope": 4082,
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
                        "id": 4067,
                        "name": "ElementaryTypeName",
                        "src": "2376:6:13"
                      }
                    ],
                    "id": 4068,
                    "name": "VariableDeclaration",
                    "src": "2376:19:13"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "args",
                      "scope": 4082,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 4069,
                        "name": "ElementaryTypeName",
                        "src": "2397:7:13"
                      }
                    ],
                    "id": 4070,
                    "name": "VariableDeclaration",
                    "src": "2397:12:13"
                  }
                ],
                "id": 4071,
                "name": "ParameterList",
                "src": "2375:35:13"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "wasCalled",
                      "scope": 4082,
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
                        "id": 4072,
                        "name": "ElementaryTypeName",
                        "src": "2458:4:13"
                      }
                    ],
                    "id": 4073,
                    "name": "VariableDeclaration",
                    "src": "2458:14:13"
                  }
                ],
                "id": 4074,
                "name": "ParameterList",
                "src": "2457:16:13"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 4074
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
                              "type": "mapping(bytes32 => bool)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3929,
                                  "type": "mapping(string memory => mapping(bytes32 => bool))",
                                  "value": "functionCalls"
                                },
                                "id": 4075,
                                "name": "Identifier",
                                "src": "2495:13:13"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4068,
                                  "type": "string memory",
                                  "value": "functionName"
                                },
                                "id": 4076,
                                "name": "Identifier",
                                "src": "2509:12:13"
                              }
                            ],
                            "id": 4077,
                            "name": "IndexAccess",
                            "src": "2495:27:13"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4070,
                              "type": "bytes32",
                              "value": "args"
                            },
                            "id": 4078,
                            "name": "Identifier",
                            "src": "2523:4:13"
                          }
                        ],
                        "id": 4079,
                        "name": "IndexAccess",
                        "src": "2495:33:13"
                      }
                    ],
                    "id": 4080,
                    "name": "Return",
                    "src": "2488:40:13"
                  }
                ],
                "id": 4081,
                "name": "Block",
                "src": "2478:57:13"
              }
            ],
            "id": 4082,
            "name": "FunctionDefinition",
            "src": "2341:194:13"
          },
          {
            "attributes": {
              "body": null,
              "constant": false,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getFunctionList",
              "payable": false,
              "scope": 4090,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 4083,
                "name": "ParameterList",
                "src": "2565:2:13"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "functionNames",
                      "scope": 4089,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string memory[10] memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "type": "string storage ref[10] storage pointer"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "string",
                              "type": "string storage pointer"
                            },
                            "id": 4084,
                            "name": "ElementaryTypeName",
                            "src": "2586:6:13"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "3130",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 10",
                              "value": "10"
                            },
                            "id": 4085,
                            "name": "Literal",
                            "src": "2593:2:13"
                          }
                        ],
                        "id": 4086,
                        "name": "ArrayTypeName",
                        "src": "2586:10:13"
                      }
                    ],
                    "id": 4087,
                    "name": "VariableDeclaration",
                    "src": "2586:24:13"
                  }
                ],
                "id": 4088,
                "name": "ParameterList",
                "src": "2585:26:13"
              }
            ],
            "id": 4089,
            "name": "FunctionDefinition",
            "src": "2541:71:13"
          }
        ],
        "id": 4090,
        "name": "ContractDefinition",
        "src": "610:2004:13"
      }
    ],
    "id": 4091,
    "name": "SourceUnit",
    "src": "584:2031:13"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-03-19T22:46:09.663Z"
}