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
          6149
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
        "id": 5966,
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
          "documentation": null,
          "fullyImplemented": false,
          "linearizedBaseContracts": [
            6149
          ],
          "name": "MockContract",
          "scope": 6150
        },
        "children": [
          {
            "attributes": {
              "constant": true,
              "name": "DEFAULT_SIGNATURE_ARGS",
              "scope": 6149,
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
                "id": 5967,
                "name": "ElementaryTypeName",
                "src": "638:7:17"
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
                    "id": 5968,
                    "name": "ElementaryTypeNameExpression",
                    "src": "689:7:17"
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
                    "id": 5969,
                    "name": "Literal",
                    "src": "697:1:17"
                  }
                ],
                "id": 5970,
                "name": "FunctionCall",
                "src": "689:10:17"
              }
            ],
            "id": 5971,
            "name": "VariableDeclaration",
            "src": "638:61:17"
          },
          {
            "attributes": {
              "constant": false,
              "name": "functionCallSignatures",
              "scope": 6149,
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
                    "id": 5972,
                    "name": "ElementaryTypeName",
                    "src": "804:6:17"
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
                        "id": 5973,
                        "name": "ElementaryTypeName",
                        "src": "814:7:17"
                      }
                    ],
                    "id": 5974,
                    "name": "ArrayTypeName",
                    "src": "814:9:17"
                  }
                ],
                "id": 5975,
                "name": "Mapping",
                "src": "795:29:17"
              }
            ],
            "id": 5976,
            "name": "VariableDeclaration",
            "src": "795:61:17"
          },
          {
            "attributes": {
              "constant": false,
              "name": "mockedReturnValue",
              "scope": 6149,
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
                    "id": 5977,
                    "name": "ElementaryTypeName",
                    "src": "871:6:17"
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
                        "id": 5978,
                        "name": "ElementaryTypeName",
                        "src": "890:7:17"
                      },
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 5979,
                        "name": "ElementaryTypeName",
                        "src": "901:7:17"
                      }
                    ],
                    "id": 5980,
                    "name": "Mapping",
                    "src": "881:28:17"
                  }
                ],
                "id": 5981,
                "name": "Mapping",
                "src": "862:48:17"
              }
            ],
            "id": 5982,
            "name": "VariableDeclaration",
            "src": "862:75:17"
          },
          {
            "attributes": {
              "constant": false,
              "name": "functionCalls",
              "scope": 6149,
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
                    "id": 5983,
                    "name": "ElementaryTypeName",
                    "src": "952:6:17"
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
                        "id": 5984,
                        "name": "ElementaryTypeName",
                        "src": "971:7:17"
                      },
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 5985,
                        "name": "ElementaryTypeName",
                        "src": "982:4:17"
                      }
                    ],
                    "id": 5986,
                    "name": "Mapping",
                    "src": "962:25:17"
                  }
                ],
                "id": 5987,
                "name": "Mapping",
                "src": "943:45:17"
              }
            ],
            "id": 5988,
            "name": "VariableDeclaration",
            "src": "943:68:17"
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
              "scope": 6149,
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
                      "scope": 6013,
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
                        "id": 5989,
                        "name": "ElementaryTypeName",
                        "src": "1052:6:17"
                      }
                    ],
                    "id": 5990,
                    "name": "VariableDeclaration",
                    "src": "1052:19:17"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "argsSignature",
                      "scope": 6013,
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
                        "id": 5991,
                        "name": "ElementaryTypeName",
                        "src": "1081:7:17"
                      }
                    ],
                    "id": 5992,
                    "name": "VariableDeclaration",
                    "src": "1081:21:17"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "returnValue",
                      "scope": 6013,
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
                        "id": 5993,
                        "name": "ElementaryTypeName",
                        "src": "1112:7:17"
                      }
                    ],
                    "id": 5994,
                    "name": "VariableDeclaration",
                    "src": "1112:19:17"
                  }
                ],
                "id": 5995,
                "name": "ParameterList",
                "src": "1042:95:17"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 5996,
                "name": "ParameterList",
                "src": "1145:0:17"
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
                                      "referencedDeclaration": 5976,
                                      "type": "mapping(string memory => bytes32[] storage ref)",
                                      "value": "functionCallSignatures"
                                    },
                                    "id": 5997,
                                    "name": "Identifier",
                                    "src": "1155:22:17"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5990,
                                      "type": "string memory",
                                      "value": "functionName"
                                    },
                                    "id": 5998,
                                    "name": "Identifier",
                                    "src": "1178:12:17"
                                  }
                                ],
                                "id": 5999,
                                "name": "IndexAccess",
                                "src": "1155:36:17"
                              }
                            ],
                            "id": 6000,
                            "name": "MemberAccess",
                            "src": "1155:41:17"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5992,
                              "type": "bytes32",
                              "value": "argsSignature"
                            },
                            "id": 6001,
                            "name": "Identifier",
                            "src": "1197:13:17"
                          }
                        ],
                        "id": 6002,
                        "name": "FunctionCall",
                        "src": "1155:56:17"
                      }
                    ],
                    "id": 6003,
                    "name": "ExpressionStatement",
                    "src": "1155:56:17"
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
                                      "referencedDeclaration": 5982,
                                      "type": "mapping(string memory => mapping(bytes32 => bytes32))",
                                      "value": "mockedReturnValue"
                                    },
                                    "id": 6004,
                                    "name": "Identifier",
                                    "src": "1221:17:17"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5990,
                                      "type": "string memory",
                                      "value": "functionName"
                                    },
                                    "id": 6005,
                                    "name": "Identifier",
                                    "src": "1239:12:17"
                                  }
                                ],
                                "id": 6007,
                                "name": "IndexAccess",
                                "src": "1221:31:17"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5992,
                                  "type": "bytes32",
                                  "value": "argsSignature"
                                },
                                "id": 6006,
                                "name": "Identifier",
                                "src": "1253:13:17"
                              }
                            ],
                            "id": 6008,
                            "name": "IndexAccess",
                            "src": "1221:46:17"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5994,
                              "type": "bytes32",
                              "value": "returnValue"
                            },
                            "id": 6009,
                            "name": "Identifier",
                            "src": "1270:11:17"
                          }
                        ],
                        "id": 6010,
                        "name": "Assignment",
                        "src": "1221:60:17"
                      }
                    ],
                    "id": 6011,
                    "name": "ExpressionStatement",
                    "src": "1221:60:17"
                  }
                ],
                "id": 6012,
                "name": "Block",
                "src": "1145:143:17"
              }
            ],
            "id": 6013,
            "name": "FunctionDefinition",
            "src": "1018:270:17"
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
              "scope": 6149,
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
                      "scope": 6029,
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
                        "id": 6014,
                        "name": "ElementaryTypeName",
                        "src": "1322:6:17"
                      }
                    ],
                    "id": 6015,
                    "name": "VariableDeclaration",
                    "src": "1322:19:17"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "argsSignature",
                      "scope": 6029,
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
                        "id": 6016,
                        "name": "ElementaryTypeName",
                        "src": "1343:7:17"
                      }
                    ],
                    "id": 6017,
                    "name": "VariableDeclaration",
                    "src": "1343:21:17"
                  }
                ],
                "id": 6018,
                "name": "ParameterList",
                "src": "1321:44:17"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_mockReturnValue",
                      "scope": 6029,
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
                        "id": 6019,
                        "name": "ElementaryTypeName",
                        "src": "1411:7:17"
                      }
                    ],
                    "id": 6020,
                    "name": "VariableDeclaration",
                    "src": "1411:24:17"
                  }
                ],
                "id": 6021,
                "name": "ParameterList",
                "src": "1410:26:17"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 6021
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
                                  "referencedDeclaration": 5982,
                                  "type": "mapping(string memory => mapping(bytes32 => bytes32))",
                                  "value": "mockedReturnValue"
                                },
                                "id": 6022,
                                "name": "Identifier",
                                "src": "1458:17:17"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 6015,
                                  "type": "string memory",
                                  "value": "functionName"
                                },
                                "id": 6023,
                                "name": "Identifier",
                                "src": "1476:12:17"
                              }
                            ],
                            "id": 6024,
                            "name": "IndexAccess",
                            "src": "1458:31:17"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 6017,
                              "type": "bytes32",
                              "value": "argsSignature"
                            },
                            "id": 6025,
                            "name": "Identifier",
                            "src": "1490:13:17"
                          }
                        ],
                        "id": 6026,
                        "name": "IndexAccess",
                        "src": "1458:46:17"
                      }
                    ],
                    "id": 6027,
                    "name": "Return",
                    "src": "1451:53:17"
                  }
                ],
                "id": 6028,
                "name": "Block",
                "src": "1441:70:17"
              }
            ],
            "id": 6029,
            "name": "FunctionDefinition",
            "src": "1294:217:17"
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
              "scope": 6149,
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
                "id": 6030,
                "name": "ParameterList",
                "src": "1531:2:17"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 6031,
                "name": "ParameterList",
                "src": "1541:0:17"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "assignments": [
                            6033
                          ]
                        },
                        "children": [
                          {
                            "attributes": {
                              "constant": false,
                              "name": "i",
                              "scope": 6102,
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
                                "id": 6032,
                                "name": "ElementaryTypeName",
                                "src": "1556:4:17"
                              }
                            ],
                            "id": 6033,
                            "name": "VariableDeclaration",
                            "src": "1556:6:17"
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
                            "id": 6034,
                            "name": "Literal",
                            "src": "1565:1:17"
                          }
                        ],
                        "id": 6035,
                        "name": "VariableDeclarationStatement",
                        "src": "1556:10:17"
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
                              "referencedDeclaration": 6033,
                              "type": "uint256",
                              "value": "i"
                            },
                            "id": 6036,
                            "name": "Identifier",
                            "src": "1568:1:17"
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
                            "id": 6037,
                            "name": "Literal",
                            "src": "1572:2:17"
                          }
                        ],
                        "id": 6038,
                        "name": "BinaryOperation",
                        "src": "1568:6:17"
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
                                  "referencedDeclaration": 6033,
                                  "type": "uint256",
                                  "value": "i"
                                },
                                "id": 6039,
                                "name": "Identifier",
                                "src": "1576:1:17"
                              }
                            ],
                            "id": 6040,
                            "name": "UnaryOperation",
                            "src": "1576:3:17"
                          }
                        ],
                        "id": 6041,
                        "name": "ExpressionStatement",
                        "src": "1576:3:17"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "assignments": [
                                6043
                              ]
                            },
                            "children": [
                              {
                                "attributes": {
                                  "constant": false,
                                  "name": "functionName",
                                  "scope": 6102,
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
                                    "id": 6042,
                                    "name": "ElementaryTypeName",
                                    "src": "1595:6:17"
                                  }
                                ],
                                "id": 6043,
                                "name": "VariableDeclaration",
                                "src": "1595:26:17"
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
                                          "referencedDeclaration": 6148,
                                          "type": "function () returns (string memory[10] memory)",
                                          "value": "getFunctionList"
                                        },
                                        "id": 6044,
                                        "name": "Identifier",
                                        "src": "1624:15:17"
                                      }
                                    ],
                                    "id": 6045,
                                    "name": "FunctionCall",
                                    "src": "1624:17:17"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 6033,
                                      "type": "uint256",
                                      "value": "i"
                                    },
                                    "id": 6046,
                                    "name": "Identifier",
                                    "src": "1642:1:17"
                                  }
                                ],
                                "id": 6047,
                                "name": "IndexAccess",
                                "src": "1624:20:17"
                              }
                            ],
                            "id": 6048,
                            "name": "VariableDeclarationStatement",
                            "src": "1595:49:17"
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
                                            "id": 6049,
                                            "name": "ElementaryTypeNameExpression",
                                            "src": "1663:5:17"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 6043,
                                              "type": "string memory",
                                              "value": "functionName"
                                            },
                                            "id": 6050,
                                            "name": "Identifier",
                                            "src": "1669:12:17"
                                          }
                                        ],
                                        "id": 6051,
                                        "name": "FunctionCall",
                                        "src": "1663:19:17"
                                      }
                                    ],
                                    "id": 6052,
                                    "name": "MemberAccess",
                                    "src": "1663:26:17"
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
                                    "id": 6053,
                                    "name": "Literal",
                                    "src": "1693:1:17"
                                  }
                                ],
                                "id": 6054,
                                "name": "BinaryOperation",
                                "src": "1663:31:17"
                              },
                              {
                                "children": [
                                  {
                                    "children": [
                                      {
                                        "attributes": {
                                          "assignments": [
                                            6056
                                          ]
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "constant": false,
                                              "name": "j",
                                              "scope": 6102,
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
                                                "id": 6055,
                                                "name": "ElementaryTypeName",
                                                "src": "1719:4:17"
                                              }
                                            ],
                                            "id": 6056,
                                            "name": "VariableDeclaration",
                                            "src": "1719:6:17"
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
                                            "id": 6057,
                                            "name": "Literal",
                                            "src": "1728:1:17"
                                          }
                                        ],
                                        "id": 6058,
                                        "name": "VariableDeclarationStatement",
                                        "src": "1719:10:17"
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
                                              "referencedDeclaration": 6056,
                                              "type": "uint256",
                                              "value": "j"
                                            },
                                            "id": 6059,
                                            "name": "Identifier",
                                            "src": "1731:1:17"
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
                                                      "referencedDeclaration": 5976,
                                                      "type": "mapping(string memory => bytes32[] storage ref)",
                                                      "value": "functionCallSignatures"
                                                    },
                                                    "id": 6060,
                                                    "name": "Identifier",
                                                    "src": "1735:22:17"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 6043,
                                                      "type": "string memory",
                                                      "value": "functionName"
                                                    },
                                                    "id": 6061,
                                                    "name": "Identifier",
                                                    "src": "1758:12:17"
                                                  }
                                                ],
                                                "id": 6062,
                                                "name": "IndexAccess",
                                                "src": "1735:36:17"
                                              }
                                            ],
                                            "id": 6063,
                                            "name": "MemberAccess",
                                            "src": "1735:43:17"
                                          }
                                        ],
                                        "id": 6064,
                                        "name": "BinaryOperation",
                                        "src": "1731:47:17"
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
                                                  "referencedDeclaration": 6056,
                                                  "type": "uint256",
                                                  "value": "j"
                                                },
                                                "id": 6065,
                                                "name": "Identifier",
                                                "src": "1780:1:17"
                                              }
                                            ],
                                            "id": 6066,
                                            "name": "UnaryOperation",
                                            "src": "1780:3:17"
                                          }
                                        ],
                                        "id": 6067,
                                        "name": "ExpressionStatement",
                                        "src": "1780:3:17"
                                      },
                                      {
                                        "children": [
                                          {
                                            "attributes": {
                                              "assignments": [
                                                6069
                                              ]
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "constant": false,
                                                  "name": "callSignature",
                                                  "scope": 6102,
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
                                                    "id": 6068,
                                                    "name": "ElementaryTypeName",
                                                    "src": "1807:7:17"
                                                  }
                                                ],
                                                "id": 6069,
                                                "name": "VariableDeclaration",
                                                "src": "1807:21:17"
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
                                                          "referencedDeclaration": 5976,
                                                          "type": "mapping(string memory => bytes32[] storage ref)",
                                                          "value": "functionCallSignatures"
                                                        },
                                                        "id": 6070,
                                                        "name": "Identifier",
                                                        "src": "1831:22:17"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 6043,
                                                          "type": "string memory",
                                                          "value": "functionName"
                                                        },
                                                        "id": 6071,
                                                        "name": "Identifier",
                                                        "src": "1854:12:17"
                                                      }
                                                    ],
                                                    "id": 6072,
                                                    "name": "IndexAccess",
                                                    "src": "1831:36:17"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 6056,
                                                      "type": "uint256",
                                                      "value": "j"
                                                    },
                                                    "id": 6073,
                                                    "name": "Identifier",
                                                    "src": "1868:1:17"
                                                  }
                                                ],
                                                "id": 6074,
                                                "name": "IndexAccess",
                                                "src": "1831:39:17"
                                              }
                                            ],
                                            "id": 6075,
                                            "name": "VariableDeclarationStatement",
                                            "src": "1807:63:17"
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
                                                              "referencedDeclaration": 5988,
                                                              "type": "mapping(string memory => mapping(bytes32 => bool))",
                                                              "value": "functionCalls"
                                                            },
                                                            "id": 6076,
                                                            "name": "Identifier",
                                                            "src": "1899:13:17"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 6043,
                                                              "type": "string memory",
                                                              "value": "functionName"
                                                            },
                                                            "id": 6077,
                                                            "name": "Identifier",
                                                            "src": "1913:12:17"
                                                          }
                                                        ],
                                                        "id": 6078,
                                                        "name": "IndexAccess",
                                                        "src": "1899:27:17"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 6069,
                                                          "type": "bytes32",
                                                          "value": "callSignature"
                                                        },
                                                        "id": 6079,
                                                        "name": "Identifier",
                                                        "src": "1927:13:17"
                                                      }
                                                    ],
                                                    "id": 6080,
                                                    "name": "IndexAccess",
                                                    "src": "1899:42:17"
                                                  }
                                                ],
                                                "id": 6081,
                                                "name": "UnaryOperation",
                                                "src": "1892:49:17"
                                              }
                                            ],
                                            "id": 6082,
                                            "name": "ExpressionStatement",
                                            "src": "1892:49:17"
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
                                                              "referencedDeclaration": 5982,
                                                              "type": "mapping(string memory => mapping(bytes32 => bytes32))",
                                                              "value": "mockedReturnValue"
                                                            },
                                                            "id": 6083,
                                                            "name": "Identifier",
                                                            "src": "1970:17:17"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 6043,
                                                              "type": "string memory",
                                                              "value": "functionName"
                                                            },
                                                            "id": 6084,
                                                            "name": "Identifier",
                                                            "src": "1988:12:17"
                                                          }
                                                        ],
                                                        "id": 6085,
                                                        "name": "IndexAccess",
                                                        "src": "1970:31:17"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 6069,
                                                          "type": "bytes32",
                                                          "value": "callSignature"
                                                        },
                                                        "id": 6086,
                                                        "name": "Identifier",
                                                        "src": "2002:13:17"
                                                      }
                                                    ],
                                                    "id": 6087,
                                                    "name": "IndexAccess",
                                                    "src": "1970:46:17"
                                                  }
                                                ],
                                                "id": 6088,
                                                "name": "UnaryOperation",
                                                "src": "1963:53:17"
                                              }
                                            ],
                                            "id": 6089,
                                            "name": "ExpressionStatement",
                                            "src": "1963:53:17"
                                          }
                                        ],
                                        "id": 6090,
                                        "name": "Block",
                                        "src": "1785:250:17"
                                      }
                                    ],
                                    "id": 6091,
                                    "name": "ForStatement",
                                    "src": "1714:321:17"
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
                                                  "referencedDeclaration": 5976,
                                                  "type": "mapping(string memory => bytes32[] storage ref)",
                                                  "value": "functionCallSignatures"
                                                },
                                                "id": 6092,
                                                "name": "Identifier",
                                                "src": "2060:22:17"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 6043,
                                                  "type": "string memory",
                                                  "value": "functionName"
                                                },
                                                "id": 6093,
                                                "name": "Identifier",
                                                "src": "2083:12:17"
                                              }
                                            ],
                                            "id": 6094,
                                            "name": "IndexAccess",
                                            "src": "2060:36:17"
                                          }
                                        ],
                                        "id": 6095,
                                        "name": "UnaryOperation",
                                        "src": "2053:43:17"
                                      }
                                    ],
                                    "id": 6096,
                                    "name": "ExpressionStatement",
                                    "src": "2053:43:17"
                                  }
                                ],
                                "id": 6097,
                                "name": "Block",
                                "src": "1696:415:17"
                              }
                            ],
                            "id": 6098,
                            "name": "IfStatement",
                            "src": "1659:452:17"
                          }
                        ],
                        "id": 6099,
                        "name": "Block",
                        "src": "1581:540:17"
                      }
                    ],
                    "id": 6100,
                    "name": "ForStatement",
                    "src": "1551:570:17"
                  }
                ],
                "id": 6101,
                "name": "Block",
                "src": "1541:586:17"
              }
            ],
            "id": 6102,
            "name": "FunctionDefinition",
            "src": "1517:610:17"
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
              "scope": 6149,
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
                      "scope": 6125,
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
                        "id": 6103,
                        "name": "ElementaryTypeName",
                        "src": "2165:6:17"
                      }
                    ],
                    "id": 6104,
                    "name": "VariableDeclaration",
                    "src": "2165:19:17"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "args",
                      "scope": 6125,
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
                        "id": 6105,
                        "name": "ElementaryTypeName",
                        "src": "2186:7:17"
                      }
                    ],
                    "id": 6106,
                    "name": "VariableDeclaration",
                    "src": "2186:12:17"
                  }
                ],
                "id": 6107,
                "name": "ParameterList",
                "src": "2164:35:17"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 6108,
                "name": "ParameterList",
                "src": "2221:0:17"
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
                                      "referencedDeclaration": 5988,
                                      "type": "mapping(string memory => mapping(bytes32 => bool))",
                                      "value": "functionCalls"
                                    },
                                    "id": 6109,
                                    "name": "Identifier",
                                    "src": "2231:13:17"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 6104,
                                      "type": "string memory",
                                      "value": "functionName"
                                    },
                                    "id": 6110,
                                    "name": "Identifier",
                                    "src": "2245:12:17"
                                  }
                                ],
                                "id": 6112,
                                "name": "IndexAccess",
                                "src": "2231:27:17"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 6106,
                                  "type": "bytes32",
                                  "value": "args"
                                },
                                "id": 6111,
                                "name": "Identifier",
                                "src": "2259:4:17"
                              }
                            ],
                            "id": 6113,
                            "name": "IndexAccess",
                            "src": "2231:33:17"
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
                            "id": 6114,
                            "name": "Literal",
                            "src": "2267:4:17"
                          }
                        ],
                        "id": 6115,
                        "name": "Assignment",
                        "src": "2231:40:17"
                      }
                    ],
                    "id": 6116,
                    "name": "ExpressionStatement",
                    "src": "2231:40:17"
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
                                      "referencedDeclaration": 5976,
                                      "type": "mapping(string memory => bytes32[] storage ref)",
                                      "value": "functionCallSignatures"
                                    },
                                    "id": 6117,
                                    "name": "Identifier",
                                    "src": "2281:22:17"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 6104,
                                      "type": "string memory",
                                      "value": "functionName"
                                    },
                                    "id": 6118,
                                    "name": "Identifier",
                                    "src": "2304:12:17"
                                  }
                                ],
                                "id": 6119,
                                "name": "IndexAccess",
                                "src": "2281:36:17"
                              }
                            ],
                            "id": 6120,
                            "name": "MemberAccess",
                            "src": "2281:41:17"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 6106,
                              "type": "bytes32",
                              "value": "args"
                            },
                            "id": 6121,
                            "name": "Identifier",
                            "src": "2323:4:17"
                          }
                        ],
                        "id": 6122,
                        "name": "FunctionCall",
                        "src": "2281:47:17"
                      }
                    ],
                    "id": 6123,
                    "name": "ExpressionStatement",
                    "src": "2281:47:17"
                  }
                ],
                "id": 6124,
                "name": "Block",
                "src": "2221:114:17"
              }
            ],
            "id": 6125,
            "name": "FunctionDefinition",
            "src": "2133:202:17"
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
              "scope": 6149,
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
                      "scope": 6141,
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
                        "id": 6126,
                        "name": "ElementaryTypeName",
                        "src": "2376:6:17"
                      }
                    ],
                    "id": 6127,
                    "name": "VariableDeclaration",
                    "src": "2376:19:17"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "args",
                      "scope": 6141,
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
                        "id": 6128,
                        "name": "ElementaryTypeName",
                        "src": "2397:7:17"
                      }
                    ],
                    "id": 6129,
                    "name": "VariableDeclaration",
                    "src": "2397:12:17"
                  }
                ],
                "id": 6130,
                "name": "ParameterList",
                "src": "2375:35:17"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "wasCalled",
                      "scope": 6141,
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
                        "id": 6131,
                        "name": "ElementaryTypeName",
                        "src": "2458:4:17"
                      }
                    ],
                    "id": 6132,
                    "name": "VariableDeclaration",
                    "src": "2458:14:17"
                  }
                ],
                "id": 6133,
                "name": "ParameterList",
                "src": "2457:16:17"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 6133
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
                                  "referencedDeclaration": 5988,
                                  "type": "mapping(string memory => mapping(bytes32 => bool))",
                                  "value": "functionCalls"
                                },
                                "id": 6134,
                                "name": "Identifier",
                                "src": "2495:13:17"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 6127,
                                  "type": "string memory",
                                  "value": "functionName"
                                },
                                "id": 6135,
                                "name": "Identifier",
                                "src": "2509:12:17"
                              }
                            ],
                            "id": 6136,
                            "name": "IndexAccess",
                            "src": "2495:27:17"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 6129,
                              "type": "bytes32",
                              "value": "args"
                            },
                            "id": 6137,
                            "name": "Identifier",
                            "src": "2523:4:17"
                          }
                        ],
                        "id": 6138,
                        "name": "IndexAccess",
                        "src": "2495:33:17"
                      }
                    ],
                    "id": 6139,
                    "name": "Return",
                    "src": "2488:40:17"
                  }
                ],
                "id": 6140,
                "name": "Block",
                "src": "2478:57:17"
              }
            ],
            "id": 6141,
            "name": "FunctionDefinition",
            "src": "2341:194:17"
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
              "scope": 6149,
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
                "id": 6142,
                "name": "ParameterList",
                "src": "2565:2:17"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "functionNames",
                      "scope": 6148,
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
                            "id": 6143,
                            "name": "ElementaryTypeName",
                            "src": "2586:6:17"
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
                            "id": 6144,
                            "name": "Literal",
                            "src": "2593:2:17"
                          }
                        ],
                        "id": 6145,
                        "name": "ArrayTypeName",
                        "src": "2586:10:17"
                      }
                    ],
                    "id": 6146,
                    "name": "VariableDeclaration",
                    "src": "2586:24:17"
                  }
                ],
                "id": 6147,
                "name": "ParameterList",
                "src": "2585:26:17"
              }
            ],
            "id": 6148,
            "name": "FunctionDefinition",
            "src": "2541:71:17"
          }
        ],
        "id": 6149,
        "name": "ContractDefinition",
        "src": "610:2004:17"
      }
    ],
    "id": 6150,
    "name": "SourceUnit",
    "src": "584:2031:17"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-04-25T07:03:31.137Z"
}