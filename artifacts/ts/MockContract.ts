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
  "sourcePath": "/Users/chrismin/Documents/dev/dharma/charta/contracts/test/mocks/MockContract.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/chrismin/Documents/dev/dharma/charta/contracts/test/mocks/MockContract.sol",
      "exportedSymbols": {
        "MockContract": [
          6847
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
        "id": 6664,
        "name": "PragmaDirective",
        "src": "584:23:20"
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
            6847
          ],
          "name": "MockContract",
          "scope": 6848
        },
        "children": [
          {
            "attributes": {
              "constant": true,
              "name": "DEFAULT_SIGNATURE_ARGS",
              "scope": 6847,
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
                "id": 6665,
                "name": "ElementaryTypeName",
                "src": "638:7:20"
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
                    "id": 6666,
                    "name": "ElementaryTypeNameExpression",
                    "src": "689:7:20"
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
                    "id": 6667,
                    "name": "Literal",
                    "src": "697:1:20"
                  }
                ],
                "id": 6668,
                "name": "FunctionCall",
                "src": "689:10:20"
              }
            ],
            "id": 6669,
            "name": "VariableDeclaration",
            "src": "638:61:20"
          },
          {
            "attributes": {
              "constant": false,
              "name": "functionCallSignatures",
              "scope": 6847,
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
                    "id": 6670,
                    "name": "ElementaryTypeName",
                    "src": "804:6:20"
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
                        "id": 6671,
                        "name": "ElementaryTypeName",
                        "src": "814:7:20"
                      }
                    ],
                    "id": 6672,
                    "name": "ArrayTypeName",
                    "src": "814:9:20"
                  }
                ],
                "id": 6673,
                "name": "Mapping",
                "src": "795:29:20"
              }
            ],
            "id": 6674,
            "name": "VariableDeclaration",
            "src": "795:61:20"
          },
          {
            "attributes": {
              "constant": false,
              "name": "mockedReturnValue",
              "scope": 6847,
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
                    "id": 6675,
                    "name": "ElementaryTypeName",
                    "src": "871:6:20"
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
                        "id": 6676,
                        "name": "ElementaryTypeName",
                        "src": "890:7:20"
                      },
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 6677,
                        "name": "ElementaryTypeName",
                        "src": "901:7:20"
                      }
                    ],
                    "id": 6678,
                    "name": "Mapping",
                    "src": "881:28:20"
                  }
                ],
                "id": 6679,
                "name": "Mapping",
                "src": "862:48:20"
              }
            ],
            "id": 6680,
            "name": "VariableDeclaration",
            "src": "862:75:20"
          },
          {
            "attributes": {
              "constant": false,
              "name": "functionCalls",
              "scope": 6847,
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
                    "id": 6681,
                    "name": "ElementaryTypeName",
                    "src": "952:6:20"
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
                        "id": 6682,
                        "name": "ElementaryTypeName",
                        "src": "971:7:20"
                      },
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 6683,
                        "name": "ElementaryTypeName",
                        "src": "982:4:20"
                      }
                    ],
                    "id": 6684,
                    "name": "Mapping",
                    "src": "962:25:20"
                  }
                ],
                "id": 6685,
                "name": "Mapping",
                "src": "943:45:20"
              }
            ],
            "id": 6686,
            "name": "VariableDeclaration",
            "src": "943:68:20"
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
              "scope": 6847,
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
                      "scope": 6711,
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
                        "id": 6687,
                        "name": "ElementaryTypeName",
                        "src": "1052:6:20"
                      }
                    ],
                    "id": 6688,
                    "name": "VariableDeclaration",
                    "src": "1052:19:20"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "argsSignature",
                      "scope": 6711,
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
                        "id": 6689,
                        "name": "ElementaryTypeName",
                        "src": "1081:7:20"
                      }
                    ],
                    "id": 6690,
                    "name": "VariableDeclaration",
                    "src": "1081:21:20"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "returnValue",
                      "scope": 6711,
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
                        "id": 6691,
                        "name": "ElementaryTypeName",
                        "src": "1112:7:20"
                      }
                    ],
                    "id": 6692,
                    "name": "VariableDeclaration",
                    "src": "1112:19:20"
                  }
                ],
                "id": 6693,
                "name": "ParameterList",
                "src": "1042:95:20"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 6694,
                "name": "ParameterList",
                "src": "1145:0:20"
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
                                      "referencedDeclaration": 6674,
                                      "type": "mapping(string memory => bytes32[] storage ref)",
                                      "value": "functionCallSignatures"
                                    },
                                    "id": 6695,
                                    "name": "Identifier",
                                    "src": "1155:22:20"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 6688,
                                      "type": "string memory",
                                      "value": "functionName"
                                    },
                                    "id": 6696,
                                    "name": "Identifier",
                                    "src": "1178:12:20"
                                  }
                                ],
                                "id": 6697,
                                "name": "IndexAccess",
                                "src": "1155:36:20"
                              }
                            ],
                            "id": 6698,
                            "name": "MemberAccess",
                            "src": "1155:41:20"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 6690,
                              "type": "bytes32",
                              "value": "argsSignature"
                            },
                            "id": 6699,
                            "name": "Identifier",
                            "src": "1197:13:20"
                          }
                        ],
                        "id": 6700,
                        "name": "FunctionCall",
                        "src": "1155:56:20"
                      }
                    ],
                    "id": 6701,
                    "name": "ExpressionStatement",
                    "src": "1155:56:20"
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
                                      "referencedDeclaration": 6680,
                                      "type": "mapping(string memory => mapping(bytes32 => bytes32))",
                                      "value": "mockedReturnValue"
                                    },
                                    "id": 6702,
                                    "name": "Identifier",
                                    "src": "1221:17:20"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 6688,
                                      "type": "string memory",
                                      "value": "functionName"
                                    },
                                    "id": 6703,
                                    "name": "Identifier",
                                    "src": "1239:12:20"
                                  }
                                ],
                                "id": 6705,
                                "name": "IndexAccess",
                                "src": "1221:31:20"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 6690,
                                  "type": "bytes32",
                                  "value": "argsSignature"
                                },
                                "id": 6704,
                                "name": "Identifier",
                                "src": "1253:13:20"
                              }
                            ],
                            "id": 6706,
                            "name": "IndexAccess",
                            "src": "1221:46:20"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 6692,
                              "type": "bytes32",
                              "value": "returnValue"
                            },
                            "id": 6707,
                            "name": "Identifier",
                            "src": "1270:11:20"
                          }
                        ],
                        "id": 6708,
                        "name": "Assignment",
                        "src": "1221:60:20"
                      }
                    ],
                    "id": 6709,
                    "name": "ExpressionStatement",
                    "src": "1221:60:20"
                  }
                ],
                "id": 6710,
                "name": "Block",
                "src": "1145:143:20"
              }
            ],
            "id": 6711,
            "name": "FunctionDefinition",
            "src": "1018:270:20"
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
              "scope": 6847,
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
                      "scope": 6727,
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
                        "id": 6712,
                        "name": "ElementaryTypeName",
                        "src": "1322:6:20"
                      }
                    ],
                    "id": 6713,
                    "name": "VariableDeclaration",
                    "src": "1322:19:20"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "argsSignature",
                      "scope": 6727,
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
                        "id": 6714,
                        "name": "ElementaryTypeName",
                        "src": "1343:7:20"
                      }
                    ],
                    "id": 6715,
                    "name": "VariableDeclaration",
                    "src": "1343:21:20"
                  }
                ],
                "id": 6716,
                "name": "ParameterList",
                "src": "1321:44:20"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_mockReturnValue",
                      "scope": 6727,
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
                        "id": 6717,
                        "name": "ElementaryTypeName",
                        "src": "1411:7:20"
                      }
                    ],
                    "id": 6718,
                    "name": "VariableDeclaration",
                    "src": "1411:24:20"
                  }
                ],
                "id": 6719,
                "name": "ParameterList",
                "src": "1410:26:20"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 6719
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
                                  "referencedDeclaration": 6680,
                                  "type": "mapping(string memory => mapping(bytes32 => bytes32))",
                                  "value": "mockedReturnValue"
                                },
                                "id": 6720,
                                "name": "Identifier",
                                "src": "1458:17:20"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 6713,
                                  "type": "string memory",
                                  "value": "functionName"
                                },
                                "id": 6721,
                                "name": "Identifier",
                                "src": "1476:12:20"
                              }
                            ],
                            "id": 6722,
                            "name": "IndexAccess",
                            "src": "1458:31:20"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 6715,
                              "type": "bytes32",
                              "value": "argsSignature"
                            },
                            "id": 6723,
                            "name": "Identifier",
                            "src": "1490:13:20"
                          }
                        ],
                        "id": 6724,
                        "name": "IndexAccess",
                        "src": "1458:46:20"
                      }
                    ],
                    "id": 6725,
                    "name": "Return",
                    "src": "1451:53:20"
                  }
                ],
                "id": 6726,
                "name": "Block",
                "src": "1441:70:20"
              }
            ],
            "id": 6727,
            "name": "FunctionDefinition",
            "src": "1294:217:20"
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
              "scope": 6847,
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
                "id": 6728,
                "name": "ParameterList",
                "src": "1531:2:20"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 6729,
                "name": "ParameterList",
                "src": "1541:0:20"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "assignments": [
                            6731
                          ]
                        },
                        "children": [
                          {
                            "attributes": {
                              "constant": false,
                              "name": "i",
                              "scope": 6800,
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
                                "id": 6730,
                                "name": "ElementaryTypeName",
                                "src": "1556:4:20"
                              }
                            ],
                            "id": 6731,
                            "name": "VariableDeclaration",
                            "src": "1556:6:20"
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
                            "id": 6732,
                            "name": "Literal",
                            "src": "1565:1:20"
                          }
                        ],
                        "id": 6733,
                        "name": "VariableDeclarationStatement",
                        "src": "1556:10:20"
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
                              "referencedDeclaration": 6731,
                              "type": "uint256",
                              "value": "i"
                            },
                            "id": 6734,
                            "name": "Identifier",
                            "src": "1568:1:20"
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
                            "id": 6735,
                            "name": "Literal",
                            "src": "1572:2:20"
                          }
                        ],
                        "id": 6736,
                        "name": "BinaryOperation",
                        "src": "1568:6:20"
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
                                  "referencedDeclaration": 6731,
                                  "type": "uint256",
                                  "value": "i"
                                },
                                "id": 6737,
                                "name": "Identifier",
                                "src": "1576:1:20"
                              }
                            ],
                            "id": 6738,
                            "name": "UnaryOperation",
                            "src": "1576:3:20"
                          }
                        ],
                        "id": 6739,
                        "name": "ExpressionStatement",
                        "src": "1576:3:20"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "assignments": [
                                6741
                              ]
                            },
                            "children": [
                              {
                                "attributes": {
                                  "constant": false,
                                  "name": "functionName",
                                  "scope": 6800,
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
                                    "id": 6740,
                                    "name": "ElementaryTypeName",
                                    "src": "1595:6:20"
                                  }
                                ],
                                "id": 6741,
                                "name": "VariableDeclaration",
                                "src": "1595:26:20"
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
                                          "referencedDeclaration": 6846,
                                          "type": "function () returns (string memory[10] memory)",
                                          "value": "getFunctionList"
                                        },
                                        "id": 6742,
                                        "name": "Identifier",
                                        "src": "1624:15:20"
                                      }
                                    ],
                                    "id": 6743,
                                    "name": "FunctionCall",
                                    "src": "1624:17:20"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 6731,
                                      "type": "uint256",
                                      "value": "i"
                                    },
                                    "id": 6744,
                                    "name": "Identifier",
                                    "src": "1642:1:20"
                                  }
                                ],
                                "id": 6745,
                                "name": "IndexAccess",
                                "src": "1624:20:20"
                              }
                            ],
                            "id": 6746,
                            "name": "VariableDeclarationStatement",
                            "src": "1595:49:20"
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
                                            "id": 6747,
                                            "name": "ElementaryTypeNameExpression",
                                            "src": "1663:5:20"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 6741,
                                              "type": "string memory",
                                              "value": "functionName"
                                            },
                                            "id": 6748,
                                            "name": "Identifier",
                                            "src": "1669:12:20"
                                          }
                                        ],
                                        "id": 6749,
                                        "name": "FunctionCall",
                                        "src": "1663:19:20"
                                      }
                                    ],
                                    "id": 6750,
                                    "name": "MemberAccess",
                                    "src": "1663:26:20"
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
                                    "id": 6751,
                                    "name": "Literal",
                                    "src": "1693:1:20"
                                  }
                                ],
                                "id": 6752,
                                "name": "BinaryOperation",
                                "src": "1663:31:20"
                              },
                              {
                                "children": [
                                  {
                                    "children": [
                                      {
                                        "attributes": {
                                          "assignments": [
                                            6754
                                          ]
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "constant": false,
                                              "name": "j",
                                              "scope": 6800,
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
                                                "id": 6753,
                                                "name": "ElementaryTypeName",
                                                "src": "1719:4:20"
                                              }
                                            ],
                                            "id": 6754,
                                            "name": "VariableDeclaration",
                                            "src": "1719:6:20"
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
                                            "id": 6755,
                                            "name": "Literal",
                                            "src": "1728:1:20"
                                          }
                                        ],
                                        "id": 6756,
                                        "name": "VariableDeclarationStatement",
                                        "src": "1719:10:20"
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
                                              "referencedDeclaration": 6754,
                                              "type": "uint256",
                                              "value": "j"
                                            },
                                            "id": 6757,
                                            "name": "Identifier",
                                            "src": "1731:1:20"
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
                                                      "referencedDeclaration": 6674,
                                                      "type": "mapping(string memory => bytes32[] storage ref)",
                                                      "value": "functionCallSignatures"
                                                    },
                                                    "id": 6758,
                                                    "name": "Identifier",
                                                    "src": "1735:22:20"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 6741,
                                                      "type": "string memory",
                                                      "value": "functionName"
                                                    },
                                                    "id": 6759,
                                                    "name": "Identifier",
                                                    "src": "1758:12:20"
                                                  }
                                                ],
                                                "id": 6760,
                                                "name": "IndexAccess",
                                                "src": "1735:36:20"
                                              }
                                            ],
                                            "id": 6761,
                                            "name": "MemberAccess",
                                            "src": "1735:43:20"
                                          }
                                        ],
                                        "id": 6762,
                                        "name": "BinaryOperation",
                                        "src": "1731:47:20"
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
                                                  "referencedDeclaration": 6754,
                                                  "type": "uint256",
                                                  "value": "j"
                                                },
                                                "id": 6763,
                                                "name": "Identifier",
                                                "src": "1780:1:20"
                                              }
                                            ],
                                            "id": 6764,
                                            "name": "UnaryOperation",
                                            "src": "1780:3:20"
                                          }
                                        ],
                                        "id": 6765,
                                        "name": "ExpressionStatement",
                                        "src": "1780:3:20"
                                      },
                                      {
                                        "children": [
                                          {
                                            "attributes": {
                                              "assignments": [
                                                6767
                                              ]
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "constant": false,
                                                  "name": "callSignature",
                                                  "scope": 6800,
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
                                                    "id": 6766,
                                                    "name": "ElementaryTypeName",
                                                    "src": "1807:7:20"
                                                  }
                                                ],
                                                "id": 6767,
                                                "name": "VariableDeclaration",
                                                "src": "1807:21:20"
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
                                                          "referencedDeclaration": 6674,
                                                          "type": "mapping(string memory => bytes32[] storage ref)",
                                                          "value": "functionCallSignatures"
                                                        },
                                                        "id": 6768,
                                                        "name": "Identifier",
                                                        "src": "1831:22:20"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 6741,
                                                          "type": "string memory",
                                                          "value": "functionName"
                                                        },
                                                        "id": 6769,
                                                        "name": "Identifier",
                                                        "src": "1854:12:20"
                                                      }
                                                    ],
                                                    "id": 6770,
                                                    "name": "IndexAccess",
                                                    "src": "1831:36:20"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 6754,
                                                      "type": "uint256",
                                                      "value": "j"
                                                    },
                                                    "id": 6771,
                                                    "name": "Identifier",
                                                    "src": "1868:1:20"
                                                  }
                                                ],
                                                "id": 6772,
                                                "name": "IndexAccess",
                                                "src": "1831:39:20"
                                              }
                                            ],
                                            "id": 6773,
                                            "name": "VariableDeclarationStatement",
                                            "src": "1807:63:20"
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
                                                              "referencedDeclaration": 6686,
                                                              "type": "mapping(string memory => mapping(bytes32 => bool))",
                                                              "value": "functionCalls"
                                                            },
                                                            "id": 6774,
                                                            "name": "Identifier",
                                                            "src": "1899:13:20"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 6741,
                                                              "type": "string memory",
                                                              "value": "functionName"
                                                            },
                                                            "id": 6775,
                                                            "name": "Identifier",
                                                            "src": "1913:12:20"
                                                          }
                                                        ],
                                                        "id": 6776,
                                                        "name": "IndexAccess",
                                                        "src": "1899:27:20"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 6767,
                                                          "type": "bytes32",
                                                          "value": "callSignature"
                                                        },
                                                        "id": 6777,
                                                        "name": "Identifier",
                                                        "src": "1927:13:20"
                                                      }
                                                    ],
                                                    "id": 6778,
                                                    "name": "IndexAccess",
                                                    "src": "1899:42:20"
                                                  }
                                                ],
                                                "id": 6779,
                                                "name": "UnaryOperation",
                                                "src": "1892:49:20"
                                              }
                                            ],
                                            "id": 6780,
                                            "name": "ExpressionStatement",
                                            "src": "1892:49:20"
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
                                                              "referencedDeclaration": 6680,
                                                              "type": "mapping(string memory => mapping(bytes32 => bytes32))",
                                                              "value": "mockedReturnValue"
                                                            },
                                                            "id": 6781,
                                                            "name": "Identifier",
                                                            "src": "1970:17:20"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 6741,
                                                              "type": "string memory",
                                                              "value": "functionName"
                                                            },
                                                            "id": 6782,
                                                            "name": "Identifier",
                                                            "src": "1988:12:20"
                                                          }
                                                        ],
                                                        "id": 6783,
                                                        "name": "IndexAccess",
                                                        "src": "1970:31:20"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 6767,
                                                          "type": "bytes32",
                                                          "value": "callSignature"
                                                        },
                                                        "id": 6784,
                                                        "name": "Identifier",
                                                        "src": "2002:13:20"
                                                      }
                                                    ],
                                                    "id": 6785,
                                                    "name": "IndexAccess",
                                                    "src": "1970:46:20"
                                                  }
                                                ],
                                                "id": 6786,
                                                "name": "UnaryOperation",
                                                "src": "1963:53:20"
                                              }
                                            ],
                                            "id": 6787,
                                            "name": "ExpressionStatement",
                                            "src": "1963:53:20"
                                          }
                                        ],
                                        "id": 6788,
                                        "name": "Block",
                                        "src": "1785:250:20"
                                      }
                                    ],
                                    "id": 6789,
                                    "name": "ForStatement",
                                    "src": "1714:321:20"
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
                                                  "referencedDeclaration": 6674,
                                                  "type": "mapping(string memory => bytes32[] storage ref)",
                                                  "value": "functionCallSignatures"
                                                },
                                                "id": 6790,
                                                "name": "Identifier",
                                                "src": "2060:22:20"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 6741,
                                                  "type": "string memory",
                                                  "value": "functionName"
                                                },
                                                "id": 6791,
                                                "name": "Identifier",
                                                "src": "2083:12:20"
                                              }
                                            ],
                                            "id": 6792,
                                            "name": "IndexAccess",
                                            "src": "2060:36:20"
                                          }
                                        ],
                                        "id": 6793,
                                        "name": "UnaryOperation",
                                        "src": "2053:43:20"
                                      }
                                    ],
                                    "id": 6794,
                                    "name": "ExpressionStatement",
                                    "src": "2053:43:20"
                                  }
                                ],
                                "id": 6795,
                                "name": "Block",
                                "src": "1696:415:20"
                              }
                            ],
                            "id": 6796,
                            "name": "IfStatement",
                            "src": "1659:452:20"
                          }
                        ],
                        "id": 6797,
                        "name": "Block",
                        "src": "1581:540:20"
                      }
                    ],
                    "id": 6798,
                    "name": "ForStatement",
                    "src": "1551:570:20"
                  }
                ],
                "id": 6799,
                "name": "Block",
                "src": "1541:586:20"
              }
            ],
            "id": 6800,
            "name": "FunctionDefinition",
            "src": "1517:610:20"
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
              "scope": 6847,
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
                      "scope": 6823,
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
                        "id": 6801,
                        "name": "ElementaryTypeName",
                        "src": "2165:6:20"
                      }
                    ],
                    "id": 6802,
                    "name": "VariableDeclaration",
                    "src": "2165:19:20"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "args",
                      "scope": 6823,
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
                        "id": 6803,
                        "name": "ElementaryTypeName",
                        "src": "2186:7:20"
                      }
                    ],
                    "id": 6804,
                    "name": "VariableDeclaration",
                    "src": "2186:12:20"
                  }
                ],
                "id": 6805,
                "name": "ParameterList",
                "src": "2164:35:20"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 6806,
                "name": "ParameterList",
                "src": "2221:0:20"
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
                                      "referencedDeclaration": 6686,
                                      "type": "mapping(string memory => mapping(bytes32 => bool))",
                                      "value": "functionCalls"
                                    },
                                    "id": 6807,
                                    "name": "Identifier",
                                    "src": "2231:13:20"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 6802,
                                      "type": "string memory",
                                      "value": "functionName"
                                    },
                                    "id": 6808,
                                    "name": "Identifier",
                                    "src": "2245:12:20"
                                  }
                                ],
                                "id": 6810,
                                "name": "IndexAccess",
                                "src": "2231:27:20"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 6804,
                                  "type": "bytes32",
                                  "value": "args"
                                },
                                "id": 6809,
                                "name": "Identifier",
                                "src": "2259:4:20"
                              }
                            ],
                            "id": 6811,
                            "name": "IndexAccess",
                            "src": "2231:33:20"
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
                            "id": 6812,
                            "name": "Literal",
                            "src": "2267:4:20"
                          }
                        ],
                        "id": 6813,
                        "name": "Assignment",
                        "src": "2231:40:20"
                      }
                    ],
                    "id": 6814,
                    "name": "ExpressionStatement",
                    "src": "2231:40:20"
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
                                      "referencedDeclaration": 6674,
                                      "type": "mapping(string memory => bytes32[] storage ref)",
                                      "value": "functionCallSignatures"
                                    },
                                    "id": 6815,
                                    "name": "Identifier",
                                    "src": "2281:22:20"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 6802,
                                      "type": "string memory",
                                      "value": "functionName"
                                    },
                                    "id": 6816,
                                    "name": "Identifier",
                                    "src": "2304:12:20"
                                  }
                                ],
                                "id": 6817,
                                "name": "IndexAccess",
                                "src": "2281:36:20"
                              }
                            ],
                            "id": 6818,
                            "name": "MemberAccess",
                            "src": "2281:41:20"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 6804,
                              "type": "bytes32",
                              "value": "args"
                            },
                            "id": 6819,
                            "name": "Identifier",
                            "src": "2323:4:20"
                          }
                        ],
                        "id": 6820,
                        "name": "FunctionCall",
                        "src": "2281:47:20"
                      }
                    ],
                    "id": 6821,
                    "name": "ExpressionStatement",
                    "src": "2281:47:20"
                  }
                ],
                "id": 6822,
                "name": "Block",
                "src": "2221:114:20"
              }
            ],
            "id": 6823,
            "name": "FunctionDefinition",
            "src": "2133:202:20"
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
              "scope": 6847,
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
                      "scope": 6839,
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
                        "id": 6824,
                        "name": "ElementaryTypeName",
                        "src": "2376:6:20"
                      }
                    ],
                    "id": 6825,
                    "name": "VariableDeclaration",
                    "src": "2376:19:20"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "args",
                      "scope": 6839,
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
                        "id": 6826,
                        "name": "ElementaryTypeName",
                        "src": "2397:7:20"
                      }
                    ],
                    "id": 6827,
                    "name": "VariableDeclaration",
                    "src": "2397:12:20"
                  }
                ],
                "id": 6828,
                "name": "ParameterList",
                "src": "2375:35:20"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "wasCalled",
                      "scope": 6839,
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
                        "id": 6829,
                        "name": "ElementaryTypeName",
                        "src": "2458:4:20"
                      }
                    ],
                    "id": 6830,
                    "name": "VariableDeclaration",
                    "src": "2458:14:20"
                  }
                ],
                "id": 6831,
                "name": "ParameterList",
                "src": "2457:16:20"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 6831
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
                                  "referencedDeclaration": 6686,
                                  "type": "mapping(string memory => mapping(bytes32 => bool))",
                                  "value": "functionCalls"
                                },
                                "id": 6832,
                                "name": "Identifier",
                                "src": "2495:13:20"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 6825,
                                  "type": "string memory",
                                  "value": "functionName"
                                },
                                "id": 6833,
                                "name": "Identifier",
                                "src": "2509:12:20"
                              }
                            ],
                            "id": 6834,
                            "name": "IndexAccess",
                            "src": "2495:27:20"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 6827,
                              "type": "bytes32",
                              "value": "args"
                            },
                            "id": 6835,
                            "name": "Identifier",
                            "src": "2523:4:20"
                          }
                        ],
                        "id": 6836,
                        "name": "IndexAccess",
                        "src": "2495:33:20"
                      }
                    ],
                    "id": 6837,
                    "name": "Return",
                    "src": "2488:40:20"
                  }
                ],
                "id": 6838,
                "name": "Block",
                "src": "2478:57:20"
              }
            ],
            "id": 6839,
            "name": "FunctionDefinition",
            "src": "2341:194:20"
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
              "scope": 6847,
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
                "id": 6840,
                "name": "ParameterList",
                "src": "2565:2:20"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "functionNames",
                      "scope": 6846,
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
                            "id": 6841,
                            "name": "ElementaryTypeName",
                            "src": "2586:6:20"
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
                            "id": 6842,
                            "name": "Literal",
                            "src": "2593:2:20"
                          }
                        ],
                        "id": 6843,
                        "name": "ArrayTypeName",
                        "src": "2586:10:20"
                      }
                    ],
                    "id": 6844,
                    "name": "VariableDeclaration",
                    "src": "2586:24:20"
                  }
                ],
                "id": 6845,
                "name": "ParameterList",
                "src": "2585:26:20"
              }
            ],
            "id": 6846,
            "name": "FunctionDefinition",
            "src": "2541:71:20"
          }
        ],
        "id": 6847,
        "name": "ContractDefinition",
        "src": "610:2004:20"
      }
    ],
    "id": 6848,
    "name": "SourceUnit",
    "src": "584:2031:20"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-07-24T01:55:45.024Z"
}