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
          4605
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
        "id": 4422,
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
            4605
          ],
          "name": "MockContract",
          "scope": 4606
        },
        "children": [
          {
            "attributes": {
              "constant": true,
              "name": "DEFAULT_SIGNATURE_ARGS",
              "scope": 4605,
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
                "id": 4423,
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
                    "id": 4424,
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
                    "id": 4425,
                    "name": "Literal",
                    "src": "697:1:13"
                  }
                ],
                "id": 4426,
                "name": "FunctionCall",
                "src": "689:10:13"
              }
            ],
            "id": 4427,
            "name": "VariableDeclaration",
            "src": "638:61:13"
          },
          {
            "attributes": {
              "constant": false,
              "name": "functionCallSignatures",
              "scope": 4605,
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
                    "id": 4428,
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
                        "id": 4429,
                        "name": "ElementaryTypeName",
                        "src": "814:7:13"
                      }
                    ],
                    "id": 4430,
                    "name": "ArrayTypeName",
                    "src": "814:9:13"
                  }
                ],
                "id": 4431,
                "name": "Mapping",
                "src": "795:29:13"
              }
            ],
            "id": 4432,
            "name": "VariableDeclaration",
            "src": "795:61:13"
          },
          {
            "attributes": {
              "constant": false,
              "name": "mockedReturnValue",
              "scope": 4605,
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
                    "id": 4433,
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
                        "id": 4434,
                        "name": "ElementaryTypeName",
                        "src": "890:7:13"
                      },
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 4435,
                        "name": "ElementaryTypeName",
                        "src": "901:7:13"
                      }
                    ],
                    "id": 4436,
                    "name": "Mapping",
                    "src": "881:28:13"
                  }
                ],
                "id": 4437,
                "name": "Mapping",
                "src": "862:48:13"
              }
            ],
            "id": 4438,
            "name": "VariableDeclaration",
            "src": "862:75:13"
          },
          {
            "attributes": {
              "constant": false,
              "name": "functionCalls",
              "scope": 4605,
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
                    "id": 4439,
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
                        "id": 4440,
                        "name": "ElementaryTypeName",
                        "src": "971:7:13"
                      },
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 4441,
                        "name": "ElementaryTypeName",
                        "src": "982:4:13"
                      }
                    ],
                    "id": 4442,
                    "name": "Mapping",
                    "src": "962:25:13"
                  }
                ],
                "id": 4443,
                "name": "Mapping",
                "src": "943:45:13"
              }
            ],
            "id": 4444,
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
              "scope": 4605,
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
                      "scope": 4469,
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
                        "id": 4445,
                        "name": "ElementaryTypeName",
                        "src": "1052:6:13"
                      }
                    ],
                    "id": 4446,
                    "name": "VariableDeclaration",
                    "src": "1052:19:13"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "argsSignature",
                      "scope": 4469,
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
                        "id": 4447,
                        "name": "ElementaryTypeName",
                        "src": "1081:7:13"
                      }
                    ],
                    "id": 4448,
                    "name": "VariableDeclaration",
                    "src": "1081:21:13"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "returnValue",
                      "scope": 4469,
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
                        "id": 4449,
                        "name": "ElementaryTypeName",
                        "src": "1112:7:13"
                      }
                    ],
                    "id": 4450,
                    "name": "VariableDeclaration",
                    "src": "1112:19:13"
                  }
                ],
                "id": 4451,
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
                "id": 4452,
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
                                      "referencedDeclaration": 4432,
                                      "type": "mapping(string memory => bytes32[] storage ref)",
                                      "value": "functionCallSignatures"
                                    },
                                    "id": 4453,
                                    "name": "Identifier",
                                    "src": "1155:22:13"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 4446,
                                      "type": "string memory",
                                      "value": "functionName"
                                    },
                                    "id": 4454,
                                    "name": "Identifier",
                                    "src": "1178:12:13"
                                  }
                                ],
                                "id": 4455,
                                "name": "IndexAccess",
                                "src": "1155:36:13"
                              }
                            ],
                            "id": 4456,
                            "name": "MemberAccess",
                            "src": "1155:41:13"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4448,
                              "type": "bytes32",
                              "value": "argsSignature"
                            },
                            "id": 4457,
                            "name": "Identifier",
                            "src": "1197:13:13"
                          }
                        ],
                        "id": 4458,
                        "name": "FunctionCall",
                        "src": "1155:56:13"
                      }
                    ],
                    "id": 4459,
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
                                      "referencedDeclaration": 4438,
                                      "type": "mapping(string memory => mapping(bytes32 => bytes32))",
                                      "value": "mockedReturnValue"
                                    },
                                    "id": 4460,
                                    "name": "Identifier",
                                    "src": "1221:17:13"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 4446,
                                      "type": "string memory",
                                      "value": "functionName"
                                    },
                                    "id": 4461,
                                    "name": "Identifier",
                                    "src": "1239:12:13"
                                  }
                                ],
                                "id": 4463,
                                "name": "IndexAccess",
                                "src": "1221:31:13"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4448,
                                  "type": "bytes32",
                                  "value": "argsSignature"
                                },
                                "id": 4462,
                                "name": "Identifier",
                                "src": "1253:13:13"
                              }
                            ],
                            "id": 4464,
                            "name": "IndexAccess",
                            "src": "1221:46:13"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4450,
                              "type": "bytes32",
                              "value": "returnValue"
                            },
                            "id": 4465,
                            "name": "Identifier",
                            "src": "1270:11:13"
                          }
                        ],
                        "id": 4466,
                        "name": "Assignment",
                        "src": "1221:60:13"
                      }
                    ],
                    "id": 4467,
                    "name": "ExpressionStatement",
                    "src": "1221:60:13"
                  }
                ],
                "id": 4468,
                "name": "Block",
                "src": "1145:143:13"
              }
            ],
            "id": 4469,
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
              "scope": 4605,
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
                      "scope": 4485,
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
                        "id": 4470,
                        "name": "ElementaryTypeName",
                        "src": "1322:6:13"
                      }
                    ],
                    "id": 4471,
                    "name": "VariableDeclaration",
                    "src": "1322:19:13"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "argsSignature",
                      "scope": 4485,
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
                        "id": 4472,
                        "name": "ElementaryTypeName",
                        "src": "1343:7:13"
                      }
                    ],
                    "id": 4473,
                    "name": "VariableDeclaration",
                    "src": "1343:21:13"
                  }
                ],
                "id": 4474,
                "name": "ParameterList",
                "src": "1321:44:13"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_mockReturnValue",
                      "scope": 4485,
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
                        "id": 4475,
                        "name": "ElementaryTypeName",
                        "src": "1411:7:13"
                      }
                    ],
                    "id": 4476,
                    "name": "VariableDeclaration",
                    "src": "1411:24:13"
                  }
                ],
                "id": 4477,
                "name": "ParameterList",
                "src": "1410:26:13"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 4477
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
                                  "referencedDeclaration": 4438,
                                  "type": "mapping(string memory => mapping(bytes32 => bytes32))",
                                  "value": "mockedReturnValue"
                                },
                                "id": 4478,
                                "name": "Identifier",
                                "src": "1458:17:13"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4471,
                                  "type": "string memory",
                                  "value": "functionName"
                                },
                                "id": 4479,
                                "name": "Identifier",
                                "src": "1476:12:13"
                              }
                            ],
                            "id": 4480,
                            "name": "IndexAccess",
                            "src": "1458:31:13"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4473,
                              "type": "bytes32",
                              "value": "argsSignature"
                            },
                            "id": 4481,
                            "name": "Identifier",
                            "src": "1490:13:13"
                          }
                        ],
                        "id": 4482,
                        "name": "IndexAccess",
                        "src": "1458:46:13"
                      }
                    ],
                    "id": 4483,
                    "name": "Return",
                    "src": "1451:53:13"
                  }
                ],
                "id": 4484,
                "name": "Block",
                "src": "1441:70:13"
              }
            ],
            "id": 4485,
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
              "scope": 4605,
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
                "id": 4486,
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
                "id": 4487,
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
                            4489
                          ]
                        },
                        "children": [
                          {
                            "attributes": {
                              "constant": false,
                              "name": "i",
                              "scope": 4558,
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
                                "id": 4488,
                                "name": "ElementaryTypeName",
                                "src": "1556:4:13"
                              }
                            ],
                            "id": 4489,
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
                            "id": 4490,
                            "name": "Literal",
                            "src": "1565:1:13"
                          }
                        ],
                        "id": 4491,
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
                              "referencedDeclaration": 4489,
                              "type": "uint256",
                              "value": "i"
                            },
                            "id": 4492,
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
                            "id": 4493,
                            "name": "Literal",
                            "src": "1572:2:13"
                          }
                        ],
                        "id": 4494,
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
                                  "referencedDeclaration": 4489,
                                  "type": "uint256",
                                  "value": "i"
                                },
                                "id": 4495,
                                "name": "Identifier",
                                "src": "1576:1:13"
                              }
                            ],
                            "id": 4496,
                            "name": "UnaryOperation",
                            "src": "1576:3:13"
                          }
                        ],
                        "id": 4497,
                        "name": "ExpressionStatement",
                        "src": "1576:3:13"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "assignments": [
                                4499
                              ]
                            },
                            "children": [
                              {
                                "attributes": {
                                  "constant": false,
                                  "name": "functionName",
                                  "scope": 4558,
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
                                    "id": 4498,
                                    "name": "ElementaryTypeName",
                                    "src": "1595:6:13"
                                  }
                                ],
                                "id": 4499,
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
                                          "referencedDeclaration": 4604,
                                          "type": "function () returns (string memory[10] memory)",
                                          "value": "getFunctionList"
                                        },
                                        "id": 4500,
                                        "name": "Identifier",
                                        "src": "1624:15:13"
                                      }
                                    ],
                                    "id": 4501,
                                    "name": "FunctionCall",
                                    "src": "1624:17:13"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 4489,
                                      "type": "uint256",
                                      "value": "i"
                                    },
                                    "id": 4502,
                                    "name": "Identifier",
                                    "src": "1642:1:13"
                                  }
                                ],
                                "id": 4503,
                                "name": "IndexAccess",
                                "src": "1624:20:13"
                              }
                            ],
                            "id": 4504,
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
                                            "id": 4505,
                                            "name": "ElementaryTypeNameExpression",
                                            "src": "1663:5:13"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 4499,
                                              "type": "string memory",
                                              "value": "functionName"
                                            },
                                            "id": 4506,
                                            "name": "Identifier",
                                            "src": "1669:12:13"
                                          }
                                        ],
                                        "id": 4507,
                                        "name": "FunctionCall",
                                        "src": "1663:19:13"
                                      }
                                    ],
                                    "id": 4508,
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
                                    "id": 4509,
                                    "name": "Literal",
                                    "src": "1693:1:13"
                                  }
                                ],
                                "id": 4510,
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
                                            4512
                                          ]
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "constant": false,
                                              "name": "j",
                                              "scope": 4558,
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
                                                "id": 4511,
                                                "name": "ElementaryTypeName",
                                                "src": "1719:4:13"
                                              }
                                            ],
                                            "id": 4512,
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
                                            "id": 4513,
                                            "name": "Literal",
                                            "src": "1728:1:13"
                                          }
                                        ],
                                        "id": 4514,
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
                                              "referencedDeclaration": 4512,
                                              "type": "uint256",
                                              "value": "j"
                                            },
                                            "id": 4515,
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
                                                      "referencedDeclaration": 4432,
                                                      "type": "mapping(string memory => bytes32[] storage ref)",
                                                      "value": "functionCallSignatures"
                                                    },
                                                    "id": 4516,
                                                    "name": "Identifier",
                                                    "src": "1735:22:13"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 4499,
                                                      "type": "string memory",
                                                      "value": "functionName"
                                                    },
                                                    "id": 4517,
                                                    "name": "Identifier",
                                                    "src": "1758:12:13"
                                                  }
                                                ],
                                                "id": 4518,
                                                "name": "IndexAccess",
                                                "src": "1735:36:13"
                                              }
                                            ],
                                            "id": 4519,
                                            "name": "MemberAccess",
                                            "src": "1735:43:13"
                                          }
                                        ],
                                        "id": 4520,
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
                                                  "referencedDeclaration": 4512,
                                                  "type": "uint256",
                                                  "value": "j"
                                                },
                                                "id": 4521,
                                                "name": "Identifier",
                                                "src": "1780:1:13"
                                              }
                                            ],
                                            "id": 4522,
                                            "name": "UnaryOperation",
                                            "src": "1780:3:13"
                                          }
                                        ],
                                        "id": 4523,
                                        "name": "ExpressionStatement",
                                        "src": "1780:3:13"
                                      },
                                      {
                                        "children": [
                                          {
                                            "attributes": {
                                              "assignments": [
                                                4525
                                              ]
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "constant": false,
                                                  "name": "callSignature",
                                                  "scope": 4558,
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
                                                    "id": 4524,
                                                    "name": "ElementaryTypeName",
                                                    "src": "1807:7:13"
                                                  }
                                                ],
                                                "id": 4525,
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
                                                          "referencedDeclaration": 4432,
                                                          "type": "mapping(string memory => bytes32[] storage ref)",
                                                          "value": "functionCallSignatures"
                                                        },
                                                        "id": 4526,
                                                        "name": "Identifier",
                                                        "src": "1831:22:13"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 4499,
                                                          "type": "string memory",
                                                          "value": "functionName"
                                                        },
                                                        "id": 4527,
                                                        "name": "Identifier",
                                                        "src": "1854:12:13"
                                                      }
                                                    ],
                                                    "id": 4528,
                                                    "name": "IndexAccess",
                                                    "src": "1831:36:13"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 4512,
                                                      "type": "uint256",
                                                      "value": "j"
                                                    },
                                                    "id": 4529,
                                                    "name": "Identifier",
                                                    "src": "1868:1:13"
                                                  }
                                                ],
                                                "id": 4530,
                                                "name": "IndexAccess",
                                                "src": "1831:39:13"
                                              }
                                            ],
                                            "id": 4531,
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
                                                              "referencedDeclaration": 4444,
                                                              "type": "mapping(string memory => mapping(bytes32 => bool))",
                                                              "value": "functionCalls"
                                                            },
                                                            "id": 4532,
                                                            "name": "Identifier",
                                                            "src": "1899:13:13"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 4499,
                                                              "type": "string memory",
                                                              "value": "functionName"
                                                            },
                                                            "id": 4533,
                                                            "name": "Identifier",
                                                            "src": "1913:12:13"
                                                          }
                                                        ],
                                                        "id": 4534,
                                                        "name": "IndexAccess",
                                                        "src": "1899:27:13"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 4525,
                                                          "type": "bytes32",
                                                          "value": "callSignature"
                                                        },
                                                        "id": 4535,
                                                        "name": "Identifier",
                                                        "src": "1927:13:13"
                                                      }
                                                    ],
                                                    "id": 4536,
                                                    "name": "IndexAccess",
                                                    "src": "1899:42:13"
                                                  }
                                                ],
                                                "id": 4537,
                                                "name": "UnaryOperation",
                                                "src": "1892:49:13"
                                              }
                                            ],
                                            "id": 4538,
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
                                                              "referencedDeclaration": 4438,
                                                              "type": "mapping(string memory => mapping(bytes32 => bytes32))",
                                                              "value": "mockedReturnValue"
                                                            },
                                                            "id": 4539,
                                                            "name": "Identifier",
                                                            "src": "1970:17:13"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 4499,
                                                              "type": "string memory",
                                                              "value": "functionName"
                                                            },
                                                            "id": 4540,
                                                            "name": "Identifier",
                                                            "src": "1988:12:13"
                                                          }
                                                        ],
                                                        "id": 4541,
                                                        "name": "IndexAccess",
                                                        "src": "1970:31:13"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 4525,
                                                          "type": "bytes32",
                                                          "value": "callSignature"
                                                        },
                                                        "id": 4542,
                                                        "name": "Identifier",
                                                        "src": "2002:13:13"
                                                      }
                                                    ],
                                                    "id": 4543,
                                                    "name": "IndexAccess",
                                                    "src": "1970:46:13"
                                                  }
                                                ],
                                                "id": 4544,
                                                "name": "UnaryOperation",
                                                "src": "1963:53:13"
                                              }
                                            ],
                                            "id": 4545,
                                            "name": "ExpressionStatement",
                                            "src": "1963:53:13"
                                          }
                                        ],
                                        "id": 4546,
                                        "name": "Block",
                                        "src": "1785:250:13"
                                      }
                                    ],
                                    "id": 4547,
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
                                                  "referencedDeclaration": 4432,
                                                  "type": "mapping(string memory => bytes32[] storage ref)",
                                                  "value": "functionCallSignatures"
                                                },
                                                "id": 4548,
                                                "name": "Identifier",
                                                "src": "2060:22:13"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 4499,
                                                  "type": "string memory",
                                                  "value": "functionName"
                                                },
                                                "id": 4549,
                                                "name": "Identifier",
                                                "src": "2083:12:13"
                                              }
                                            ],
                                            "id": 4550,
                                            "name": "IndexAccess",
                                            "src": "2060:36:13"
                                          }
                                        ],
                                        "id": 4551,
                                        "name": "UnaryOperation",
                                        "src": "2053:43:13"
                                      }
                                    ],
                                    "id": 4552,
                                    "name": "ExpressionStatement",
                                    "src": "2053:43:13"
                                  }
                                ],
                                "id": 4553,
                                "name": "Block",
                                "src": "1696:415:13"
                              }
                            ],
                            "id": 4554,
                            "name": "IfStatement",
                            "src": "1659:452:13"
                          }
                        ],
                        "id": 4555,
                        "name": "Block",
                        "src": "1581:540:13"
                      }
                    ],
                    "id": 4556,
                    "name": "ForStatement",
                    "src": "1551:570:13"
                  }
                ],
                "id": 4557,
                "name": "Block",
                "src": "1541:586:13"
              }
            ],
            "id": 4558,
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
              "scope": 4605,
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
                      "scope": 4581,
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
                        "id": 4559,
                        "name": "ElementaryTypeName",
                        "src": "2165:6:13"
                      }
                    ],
                    "id": 4560,
                    "name": "VariableDeclaration",
                    "src": "2165:19:13"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "args",
                      "scope": 4581,
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
                        "id": 4561,
                        "name": "ElementaryTypeName",
                        "src": "2186:7:13"
                      }
                    ],
                    "id": 4562,
                    "name": "VariableDeclaration",
                    "src": "2186:12:13"
                  }
                ],
                "id": 4563,
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
                "id": 4564,
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
                                      "referencedDeclaration": 4444,
                                      "type": "mapping(string memory => mapping(bytes32 => bool))",
                                      "value": "functionCalls"
                                    },
                                    "id": 4565,
                                    "name": "Identifier",
                                    "src": "2231:13:13"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 4560,
                                      "type": "string memory",
                                      "value": "functionName"
                                    },
                                    "id": 4566,
                                    "name": "Identifier",
                                    "src": "2245:12:13"
                                  }
                                ],
                                "id": 4568,
                                "name": "IndexAccess",
                                "src": "2231:27:13"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4562,
                                  "type": "bytes32",
                                  "value": "args"
                                },
                                "id": 4567,
                                "name": "Identifier",
                                "src": "2259:4:13"
                              }
                            ],
                            "id": 4569,
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
                            "id": 4570,
                            "name": "Literal",
                            "src": "2267:4:13"
                          }
                        ],
                        "id": 4571,
                        "name": "Assignment",
                        "src": "2231:40:13"
                      }
                    ],
                    "id": 4572,
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
                                      "referencedDeclaration": 4432,
                                      "type": "mapping(string memory => bytes32[] storage ref)",
                                      "value": "functionCallSignatures"
                                    },
                                    "id": 4573,
                                    "name": "Identifier",
                                    "src": "2281:22:13"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 4560,
                                      "type": "string memory",
                                      "value": "functionName"
                                    },
                                    "id": 4574,
                                    "name": "Identifier",
                                    "src": "2304:12:13"
                                  }
                                ],
                                "id": 4575,
                                "name": "IndexAccess",
                                "src": "2281:36:13"
                              }
                            ],
                            "id": 4576,
                            "name": "MemberAccess",
                            "src": "2281:41:13"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4562,
                              "type": "bytes32",
                              "value": "args"
                            },
                            "id": 4577,
                            "name": "Identifier",
                            "src": "2323:4:13"
                          }
                        ],
                        "id": 4578,
                        "name": "FunctionCall",
                        "src": "2281:47:13"
                      }
                    ],
                    "id": 4579,
                    "name": "ExpressionStatement",
                    "src": "2281:47:13"
                  }
                ],
                "id": 4580,
                "name": "Block",
                "src": "2221:114:13"
              }
            ],
            "id": 4581,
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
              "scope": 4605,
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
                      "scope": 4597,
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
                        "id": 4582,
                        "name": "ElementaryTypeName",
                        "src": "2376:6:13"
                      }
                    ],
                    "id": 4583,
                    "name": "VariableDeclaration",
                    "src": "2376:19:13"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "args",
                      "scope": 4597,
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
                        "id": 4584,
                        "name": "ElementaryTypeName",
                        "src": "2397:7:13"
                      }
                    ],
                    "id": 4585,
                    "name": "VariableDeclaration",
                    "src": "2397:12:13"
                  }
                ],
                "id": 4586,
                "name": "ParameterList",
                "src": "2375:35:13"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "wasCalled",
                      "scope": 4597,
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
                        "id": 4587,
                        "name": "ElementaryTypeName",
                        "src": "2458:4:13"
                      }
                    ],
                    "id": 4588,
                    "name": "VariableDeclaration",
                    "src": "2458:14:13"
                  }
                ],
                "id": 4589,
                "name": "ParameterList",
                "src": "2457:16:13"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 4589
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
                                  "referencedDeclaration": 4444,
                                  "type": "mapping(string memory => mapping(bytes32 => bool))",
                                  "value": "functionCalls"
                                },
                                "id": 4590,
                                "name": "Identifier",
                                "src": "2495:13:13"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4583,
                                  "type": "string memory",
                                  "value": "functionName"
                                },
                                "id": 4591,
                                "name": "Identifier",
                                "src": "2509:12:13"
                              }
                            ],
                            "id": 4592,
                            "name": "IndexAccess",
                            "src": "2495:27:13"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4585,
                              "type": "bytes32",
                              "value": "args"
                            },
                            "id": 4593,
                            "name": "Identifier",
                            "src": "2523:4:13"
                          }
                        ],
                        "id": 4594,
                        "name": "IndexAccess",
                        "src": "2495:33:13"
                      }
                    ],
                    "id": 4595,
                    "name": "Return",
                    "src": "2488:40:13"
                  }
                ],
                "id": 4596,
                "name": "Block",
                "src": "2478:57:13"
              }
            ],
            "id": 4597,
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
              "scope": 4605,
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
                "id": 4598,
                "name": "ParameterList",
                "src": "2565:2:13"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "functionNames",
                      "scope": 4604,
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
                            "id": 4599,
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
                            "id": 4600,
                            "name": "Literal",
                            "src": "2593:2:13"
                          }
                        ],
                        "id": 4601,
                        "name": "ArrayTypeName",
                        "src": "2586:10:13"
                      }
                    ],
                    "id": 4602,
                    "name": "VariableDeclaration",
                    "src": "2586:24:13"
                  }
                ],
                "id": 4603,
                "name": "ParameterList",
                "src": "2585:26:13"
              }
            ],
            "id": 4604,
            "name": "FunctionDefinition",
            "src": "2541:71:13"
          }
        ],
        "id": 4605,
        "name": "ContractDefinition",
        "src": "610:2004:13"
      }
    ],
    "id": 4606,
    "name": "SourceUnit",
    "src": "584:2031:13"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-04-07T18:02:24.319Z"
}