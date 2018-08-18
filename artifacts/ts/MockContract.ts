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
  "sourcePath": "/Users/graemeboy/Dharma/charta/contracts/test/mocks/MockContract.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/graemeboy/Dharma/charta/contracts/test/mocks/MockContract.sol",
      "exportedSymbols": {
        "MockContract": [
          6563
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
        "id": 6380,
        "name": "PragmaDirective",
        "src": "584:23:21"
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
            6563
          ],
          "name": "MockContract",
          "scope": 6564
        },
        "children": [
          {
            "attributes": {
              "constant": true,
              "name": "DEFAULT_SIGNATURE_ARGS",
              "scope": 6563,
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
                "id": 6381,
                "name": "ElementaryTypeName",
                "src": "638:7:21"
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
                    "id": 6382,
                    "name": "ElementaryTypeNameExpression",
                    "src": "689:7:21"
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
                    "id": 6383,
                    "name": "Literal",
                    "src": "697:1:21"
                  }
                ],
                "id": 6384,
                "name": "FunctionCall",
                "src": "689:10:21"
              }
            ],
            "id": 6385,
            "name": "VariableDeclaration",
            "src": "638:61:21"
          },
          {
            "attributes": {
              "constant": false,
              "name": "functionCallSignatures",
              "scope": 6563,
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
                    "id": 6386,
                    "name": "ElementaryTypeName",
                    "src": "804:6:21"
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
                        "id": 6387,
                        "name": "ElementaryTypeName",
                        "src": "814:7:21"
                      }
                    ],
                    "id": 6388,
                    "name": "ArrayTypeName",
                    "src": "814:9:21"
                  }
                ],
                "id": 6389,
                "name": "Mapping",
                "src": "795:29:21"
              }
            ],
            "id": 6390,
            "name": "VariableDeclaration",
            "src": "795:61:21"
          },
          {
            "attributes": {
              "constant": false,
              "name": "mockedReturnValue",
              "scope": 6563,
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
                    "id": 6391,
                    "name": "ElementaryTypeName",
                    "src": "871:6:21"
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
                        "id": 6392,
                        "name": "ElementaryTypeName",
                        "src": "890:7:21"
                      },
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 6393,
                        "name": "ElementaryTypeName",
                        "src": "901:7:21"
                      }
                    ],
                    "id": 6394,
                    "name": "Mapping",
                    "src": "881:28:21"
                  }
                ],
                "id": 6395,
                "name": "Mapping",
                "src": "862:48:21"
              }
            ],
            "id": 6396,
            "name": "VariableDeclaration",
            "src": "862:75:21"
          },
          {
            "attributes": {
              "constant": false,
              "name": "functionCalls",
              "scope": 6563,
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
                    "id": 6397,
                    "name": "ElementaryTypeName",
                    "src": "952:6:21"
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
                        "id": 6398,
                        "name": "ElementaryTypeName",
                        "src": "971:7:21"
                      },
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 6399,
                        "name": "ElementaryTypeName",
                        "src": "982:4:21"
                      }
                    ],
                    "id": 6400,
                    "name": "Mapping",
                    "src": "962:25:21"
                  }
                ],
                "id": 6401,
                "name": "Mapping",
                "src": "943:45:21"
              }
            ],
            "id": 6402,
            "name": "VariableDeclaration",
            "src": "943:68:21"
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
              "scope": 6563,
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
                      "scope": 6427,
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
                        "id": 6403,
                        "name": "ElementaryTypeName",
                        "src": "1052:6:21"
                      }
                    ],
                    "id": 6404,
                    "name": "VariableDeclaration",
                    "src": "1052:19:21"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "argsSignature",
                      "scope": 6427,
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
                        "id": 6405,
                        "name": "ElementaryTypeName",
                        "src": "1081:7:21"
                      }
                    ],
                    "id": 6406,
                    "name": "VariableDeclaration",
                    "src": "1081:21:21"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "returnValue",
                      "scope": 6427,
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
                        "id": 6407,
                        "name": "ElementaryTypeName",
                        "src": "1112:7:21"
                      }
                    ],
                    "id": 6408,
                    "name": "VariableDeclaration",
                    "src": "1112:19:21"
                  }
                ],
                "id": 6409,
                "name": "ParameterList",
                "src": "1042:95:21"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 6410,
                "name": "ParameterList",
                "src": "1145:0:21"
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
                                      "referencedDeclaration": 6390,
                                      "type": "mapping(string memory => bytes32[] storage ref)",
                                      "value": "functionCallSignatures"
                                    },
                                    "id": 6411,
                                    "name": "Identifier",
                                    "src": "1155:22:21"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 6404,
                                      "type": "string memory",
                                      "value": "functionName"
                                    },
                                    "id": 6412,
                                    "name": "Identifier",
                                    "src": "1178:12:21"
                                  }
                                ],
                                "id": 6413,
                                "name": "IndexAccess",
                                "src": "1155:36:21"
                              }
                            ],
                            "id": 6414,
                            "name": "MemberAccess",
                            "src": "1155:41:21"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 6406,
                              "type": "bytes32",
                              "value": "argsSignature"
                            },
                            "id": 6415,
                            "name": "Identifier",
                            "src": "1197:13:21"
                          }
                        ],
                        "id": 6416,
                        "name": "FunctionCall",
                        "src": "1155:56:21"
                      }
                    ],
                    "id": 6417,
                    "name": "ExpressionStatement",
                    "src": "1155:56:21"
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
                                      "referencedDeclaration": 6396,
                                      "type": "mapping(string memory => mapping(bytes32 => bytes32))",
                                      "value": "mockedReturnValue"
                                    },
                                    "id": 6418,
                                    "name": "Identifier",
                                    "src": "1221:17:21"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 6404,
                                      "type": "string memory",
                                      "value": "functionName"
                                    },
                                    "id": 6419,
                                    "name": "Identifier",
                                    "src": "1239:12:21"
                                  }
                                ],
                                "id": 6421,
                                "name": "IndexAccess",
                                "src": "1221:31:21"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 6406,
                                  "type": "bytes32",
                                  "value": "argsSignature"
                                },
                                "id": 6420,
                                "name": "Identifier",
                                "src": "1253:13:21"
                              }
                            ],
                            "id": 6422,
                            "name": "IndexAccess",
                            "src": "1221:46:21"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 6408,
                              "type": "bytes32",
                              "value": "returnValue"
                            },
                            "id": 6423,
                            "name": "Identifier",
                            "src": "1270:11:21"
                          }
                        ],
                        "id": 6424,
                        "name": "Assignment",
                        "src": "1221:60:21"
                      }
                    ],
                    "id": 6425,
                    "name": "ExpressionStatement",
                    "src": "1221:60:21"
                  }
                ],
                "id": 6426,
                "name": "Block",
                "src": "1145:143:21"
              }
            ],
            "id": 6427,
            "name": "FunctionDefinition",
            "src": "1018:270:21"
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
              "scope": 6563,
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
                      "scope": 6443,
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
                        "id": 6428,
                        "name": "ElementaryTypeName",
                        "src": "1322:6:21"
                      }
                    ],
                    "id": 6429,
                    "name": "VariableDeclaration",
                    "src": "1322:19:21"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "argsSignature",
                      "scope": 6443,
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
                        "id": 6430,
                        "name": "ElementaryTypeName",
                        "src": "1343:7:21"
                      }
                    ],
                    "id": 6431,
                    "name": "VariableDeclaration",
                    "src": "1343:21:21"
                  }
                ],
                "id": 6432,
                "name": "ParameterList",
                "src": "1321:44:21"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_mockReturnValue",
                      "scope": 6443,
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
                        "id": 6433,
                        "name": "ElementaryTypeName",
                        "src": "1411:7:21"
                      }
                    ],
                    "id": 6434,
                    "name": "VariableDeclaration",
                    "src": "1411:24:21"
                  }
                ],
                "id": 6435,
                "name": "ParameterList",
                "src": "1410:26:21"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 6435
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
                                  "referencedDeclaration": 6396,
                                  "type": "mapping(string memory => mapping(bytes32 => bytes32))",
                                  "value": "mockedReturnValue"
                                },
                                "id": 6436,
                                "name": "Identifier",
                                "src": "1458:17:21"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 6429,
                                  "type": "string memory",
                                  "value": "functionName"
                                },
                                "id": 6437,
                                "name": "Identifier",
                                "src": "1476:12:21"
                              }
                            ],
                            "id": 6438,
                            "name": "IndexAccess",
                            "src": "1458:31:21"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 6431,
                              "type": "bytes32",
                              "value": "argsSignature"
                            },
                            "id": 6439,
                            "name": "Identifier",
                            "src": "1490:13:21"
                          }
                        ],
                        "id": 6440,
                        "name": "IndexAccess",
                        "src": "1458:46:21"
                      }
                    ],
                    "id": 6441,
                    "name": "Return",
                    "src": "1451:53:21"
                  }
                ],
                "id": 6442,
                "name": "Block",
                "src": "1441:70:21"
              }
            ],
            "id": 6443,
            "name": "FunctionDefinition",
            "src": "1294:217:21"
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
              "scope": 6563,
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
                "id": 6444,
                "name": "ParameterList",
                "src": "1531:2:21"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 6445,
                "name": "ParameterList",
                "src": "1541:0:21"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "assignments": [
                            6447
                          ]
                        },
                        "children": [
                          {
                            "attributes": {
                              "constant": false,
                              "name": "i",
                              "scope": 6516,
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
                                "id": 6446,
                                "name": "ElementaryTypeName",
                                "src": "1556:4:21"
                              }
                            ],
                            "id": 6447,
                            "name": "VariableDeclaration",
                            "src": "1556:6:21"
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
                            "id": 6448,
                            "name": "Literal",
                            "src": "1565:1:21"
                          }
                        ],
                        "id": 6449,
                        "name": "VariableDeclarationStatement",
                        "src": "1556:10:21"
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
                              "referencedDeclaration": 6447,
                              "type": "uint256",
                              "value": "i"
                            },
                            "id": 6450,
                            "name": "Identifier",
                            "src": "1568:1:21"
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
                            "id": 6451,
                            "name": "Literal",
                            "src": "1572:2:21"
                          }
                        ],
                        "id": 6452,
                        "name": "BinaryOperation",
                        "src": "1568:6:21"
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
                                  "referencedDeclaration": 6447,
                                  "type": "uint256",
                                  "value": "i"
                                },
                                "id": 6453,
                                "name": "Identifier",
                                "src": "1576:1:21"
                              }
                            ],
                            "id": 6454,
                            "name": "UnaryOperation",
                            "src": "1576:3:21"
                          }
                        ],
                        "id": 6455,
                        "name": "ExpressionStatement",
                        "src": "1576:3:21"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "assignments": [
                                6457
                              ]
                            },
                            "children": [
                              {
                                "attributes": {
                                  "constant": false,
                                  "name": "functionName",
                                  "scope": 6516,
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
                                    "id": 6456,
                                    "name": "ElementaryTypeName",
                                    "src": "1595:6:21"
                                  }
                                ],
                                "id": 6457,
                                "name": "VariableDeclaration",
                                "src": "1595:26:21"
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
                                          "referencedDeclaration": 6562,
                                          "type": "function () returns (string memory[10] memory)",
                                          "value": "getFunctionList"
                                        },
                                        "id": 6458,
                                        "name": "Identifier",
                                        "src": "1624:15:21"
                                      }
                                    ],
                                    "id": 6459,
                                    "name": "FunctionCall",
                                    "src": "1624:17:21"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 6447,
                                      "type": "uint256",
                                      "value": "i"
                                    },
                                    "id": 6460,
                                    "name": "Identifier",
                                    "src": "1642:1:21"
                                  }
                                ],
                                "id": 6461,
                                "name": "IndexAccess",
                                "src": "1624:20:21"
                              }
                            ],
                            "id": 6462,
                            "name": "VariableDeclarationStatement",
                            "src": "1595:49:21"
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
                                            "id": 6463,
                                            "name": "ElementaryTypeNameExpression",
                                            "src": "1663:5:21"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 6457,
                                              "type": "string memory",
                                              "value": "functionName"
                                            },
                                            "id": 6464,
                                            "name": "Identifier",
                                            "src": "1669:12:21"
                                          }
                                        ],
                                        "id": 6465,
                                        "name": "FunctionCall",
                                        "src": "1663:19:21"
                                      }
                                    ],
                                    "id": 6466,
                                    "name": "MemberAccess",
                                    "src": "1663:26:21"
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
                                    "id": 6467,
                                    "name": "Literal",
                                    "src": "1693:1:21"
                                  }
                                ],
                                "id": 6468,
                                "name": "BinaryOperation",
                                "src": "1663:31:21"
                              },
                              {
                                "children": [
                                  {
                                    "children": [
                                      {
                                        "attributes": {
                                          "assignments": [
                                            6470
                                          ]
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "constant": false,
                                              "name": "j",
                                              "scope": 6516,
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
                                                "id": 6469,
                                                "name": "ElementaryTypeName",
                                                "src": "1719:4:21"
                                              }
                                            ],
                                            "id": 6470,
                                            "name": "VariableDeclaration",
                                            "src": "1719:6:21"
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
                                            "id": 6471,
                                            "name": "Literal",
                                            "src": "1728:1:21"
                                          }
                                        ],
                                        "id": 6472,
                                        "name": "VariableDeclarationStatement",
                                        "src": "1719:10:21"
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
                                              "referencedDeclaration": 6470,
                                              "type": "uint256",
                                              "value": "j"
                                            },
                                            "id": 6473,
                                            "name": "Identifier",
                                            "src": "1731:1:21"
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
                                                      "referencedDeclaration": 6390,
                                                      "type": "mapping(string memory => bytes32[] storage ref)",
                                                      "value": "functionCallSignatures"
                                                    },
                                                    "id": 6474,
                                                    "name": "Identifier",
                                                    "src": "1735:22:21"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 6457,
                                                      "type": "string memory",
                                                      "value": "functionName"
                                                    },
                                                    "id": 6475,
                                                    "name": "Identifier",
                                                    "src": "1758:12:21"
                                                  }
                                                ],
                                                "id": 6476,
                                                "name": "IndexAccess",
                                                "src": "1735:36:21"
                                              }
                                            ],
                                            "id": 6477,
                                            "name": "MemberAccess",
                                            "src": "1735:43:21"
                                          }
                                        ],
                                        "id": 6478,
                                        "name": "BinaryOperation",
                                        "src": "1731:47:21"
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
                                                  "referencedDeclaration": 6470,
                                                  "type": "uint256",
                                                  "value": "j"
                                                },
                                                "id": 6479,
                                                "name": "Identifier",
                                                "src": "1780:1:21"
                                              }
                                            ],
                                            "id": 6480,
                                            "name": "UnaryOperation",
                                            "src": "1780:3:21"
                                          }
                                        ],
                                        "id": 6481,
                                        "name": "ExpressionStatement",
                                        "src": "1780:3:21"
                                      },
                                      {
                                        "children": [
                                          {
                                            "attributes": {
                                              "assignments": [
                                                6483
                                              ]
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "constant": false,
                                                  "name": "callSignature",
                                                  "scope": 6516,
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
                                                    "id": 6482,
                                                    "name": "ElementaryTypeName",
                                                    "src": "1807:7:21"
                                                  }
                                                ],
                                                "id": 6483,
                                                "name": "VariableDeclaration",
                                                "src": "1807:21:21"
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
                                                          "referencedDeclaration": 6390,
                                                          "type": "mapping(string memory => bytes32[] storage ref)",
                                                          "value": "functionCallSignatures"
                                                        },
                                                        "id": 6484,
                                                        "name": "Identifier",
                                                        "src": "1831:22:21"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 6457,
                                                          "type": "string memory",
                                                          "value": "functionName"
                                                        },
                                                        "id": 6485,
                                                        "name": "Identifier",
                                                        "src": "1854:12:21"
                                                      }
                                                    ],
                                                    "id": 6486,
                                                    "name": "IndexAccess",
                                                    "src": "1831:36:21"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 6470,
                                                      "type": "uint256",
                                                      "value": "j"
                                                    },
                                                    "id": 6487,
                                                    "name": "Identifier",
                                                    "src": "1868:1:21"
                                                  }
                                                ],
                                                "id": 6488,
                                                "name": "IndexAccess",
                                                "src": "1831:39:21"
                                              }
                                            ],
                                            "id": 6489,
                                            "name": "VariableDeclarationStatement",
                                            "src": "1807:63:21"
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
                                                              "referencedDeclaration": 6402,
                                                              "type": "mapping(string memory => mapping(bytes32 => bool))",
                                                              "value": "functionCalls"
                                                            },
                                                            "id": 6490,
                                                            "name": "Identifier",
                                                            "src": "1899:13:21"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 6457,
                                                              "type": "string memory",
                                                              "value": "functionName"
                                                            },
                                                            "id": 6491,
                                                            "name": "Identifier",
                                                            "src": "1913:12:21"
                                                          }
                                                        ],
                                                        "id": 6492,
                                                        "name": "IndexAccess",
                                                        "src": "1899:27:21"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 6483,
                                                          "type": "bytes32",
                                                          "value": "callSignature"
                                                        },
                                                        "id": 6493,
                                                        "name": "Identifier",
                                                        "src": "1927:13:21"
                                                      }
                                                    ],
                                                    "id": 6494,
                                                    "name": "IndexAccess",
                                                    "src": "1899:42:21"
                                                  }
                                                ],
                                                "id": 6495,
                                                "name": "UnaryOperation",
                                                "src": "1892:49:21"
                                              }
                                            ],
                                            "id": 6496,
                                            "name": "ExpressionStatement",
                                            "src": "1892:49:21"
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
                                                              "referencedDeclaration": 6396,
                                                              "type": "mapping(string memory => mapping(bytes32 => bytes32))",
                                                              "value": "mockedReturnValue"
                                                            },
                                                            "id": 6497,
                                                            "name": "Identifier",
                                                            "src": "1970:17:21"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 6457,
                                                              "type": "string memory",
                                                              "value": "functionName"
                                                            },
                                                            "id": 6498,
                                                            "name": "Identifier",
                                                            "src": "1988:12:21"
                                                          }
                                                        ],
                                                        "id": 6499,
                                                        "name": "IndexAccess",
                                                        "src": "1970:31:21"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 6483,
                                                          "type": "bytes32",
                                                          "value": "callSignature"
                                                        },
                                                        "id": 6500,
                                                        "name": "Identifier",
                                                        "src": "2002:13:21"
                                                      }
                                                    ],
                                                    "id": 6501,
                                                    "name": "IndexAccess",
                                                    "src": "1970:46:21"
                                                  }
                                                ],
                                                "id": 6502,
                                                "name": "UnaryOperation",
                                                "src": "1963:53:21"
                                              }
                                            ],
                                            "id": 6503,
                                            "name": "ExpressionStatement",
                                            "src": "1963:53:21"
                                          }
                                        ],
                                        "id": 6504,
                                        "name": "Block",
                                        "src": "1785:250:21"
                                      }
                                    ],
                                    "id": 6505,
                                    "name": "ForStatement",
                                    "src": "1714:321:21"
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
                                                  "referencedDeclaration": 6390,
                                                  "type": "mapping(string memory => bytes32[] storage ref)",
                                                  "value": "functionCallSignatures"
                                                },
                                                "id": 6506,
                                                "name": "Identifier",
                                                "src": "2060:22:21"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 6457,
                                                  "type": "string memory",
                                                  "value": "functionName"
                                                },
                                                "id": 6507,
                                                "name": "Identifier",
                                                "src": "2083:12:21"
                                              }
                                            ],
                                            "id": 6508,
                                            "name": "IndexAccess",
                                            "src": "2060:36:21"
                                          }
                                        ],
                                        "id": 6509,
                                        "name": "UnaryOperation",
                                        "src": "2053:43:21"
                                      }
                                    ],
                                    "id": 6510,
                                    "name": "ExpressionStatement",
                                    "src": "2053:43:21"
                                  }
                                ],
                                "id": 6511,
                                "name": "Block",
                                "src": "1696:415:21"
                              }
                            ],
                            "id": 6512,
                            "name": "IfStatement",
                            "src": "1659:452:21"
                          }
                        ],
                        "id": 6513,
                        "name": "Block",
                        "src": "1581:540:21"
                      }
                    ],
                    "id": 6514,
                    "name": "ForStatement",
                    "src": "1551:570:21"
                  }
                ],
                "id": 6515,
                "name": "Block",
                "src": "1541:586:21"
              }
            ],
            "id": 6516,
            "name": "FunctionDefinition",
            "src": "1517:610:21"
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
              "scope": 6563,
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
                      "scope": 6539,
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
                        "id": 6517,
                        "name": "ElementaryTypeName",
                        "src": "2165:6:21"
                      }
                    ],
                    "id": 6518,
                    "name": "VariableDeclaration",
                    "src": "2165:19:21"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "args",
                      "scope": 6539,
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
                        "id": 6519,
                        "name": "ElementaryTypeName",
                        "src": "2186:7:21"
                      }
                    ],
                    "id": 6520,
                    "name": "VariableDeclaration",
                    "src": "2186:12:21"
                  }
                ],
                "id": 6521,
                "name": "ParameterList",
                "src": "2164:35:21"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 6522,
                "name": "ParameterList",
                "src": "2221:0:21"
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
                                      "referencedDeclaration": 6402,
                                      "type": "mapping(string memory => mapping(bytes32 => bool))",
                                      "value": "functionCalls"
                                    },
                                    "id": 6523,
                                    "name": "Identifier",
                                    "src": "2231:13:21"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 6518,
                                      "type": "string memory",
                                      "value": "functionName"
                                    },
                                    "id": 6524,
                                    "name": "Identifier",
                                    "src": "2245:12:21"
                                  }
                                ],
                                "id": 6526,
                                "name": "IndexAccess",
                                "src": "2231:27:21"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 6520,
                                  "type": "bytes32",
                                  "value": "args"
                                },
                                "id": 6525,
                                "name": "Identifier",
                                "src": "2259:4:21"
                              }
                            ],
                            "id": 6527,
                            "name": "IndexAccess",
                            "src": "2231:33:21"
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
                            "id": 6528,
                            "name": "Literal",
                            "src": "2267:4:21"
                          }
                        ],
                        "id": 6529,
                        "name": "Assignment",
                        "src": "2231:40:21"
                      }
                    ],
                    "id": 6530,
                    "name": "ExpressionStatement",
                    "src": "2231:40:21"
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
                                      "referencedDeclaration": 6390,
                                      "type": "mapping(string memory => bytes32[] storage ref)",
                                      "value": "functionCallSignatures"
                                    },
                                    "id": 6531,
                                    "name": "Identifier",
                                    "src": "2281:22:21"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 6518,
                                      "type": "string memory",
                                      "value": "functionName"
                                    },
                                    "id": 6532,
                                    "name": "Identifier",
                                    "src": "2304:12:21"
                                  }
                                ],
                                "id": 6533,
                                "name": "IndexAccess",
                                "src": "2281:36:21"
                              }
                            ],
                            "id": 6534,
                            "name": "MemberAccess",
                            "src": "2281:41:21"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 6520,
                              "type": "bytes32",
                              "value": "args"
                            },
                            "id": 6535,
                            "name": "Identifier",
                            "src": "2323:4:21"
                          }
                        ],
                        "id": 6536,
                        "name": "FunctionCall",
                        "src": "2281:47:21"
                      }
                    ],
                    "id": 6537,
                    "name": "ExpressionStatement",
                    "src": "2281:47:21"
                  }
                ],
                "id": 6538,
                "name": "Block",
                "src": "2221:114:21"
              }
            ],
            "id": 6539,
            "name": "FunctionDefinition",
            "src": "2133:202:21"
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
              "scope": 6563,
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
                      "scope": 6555,
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
                        "id": 6540,
                        "name": "ElementaryTypeName",
                        "src": "2376:6:21"
                      }
                    ],
                    "id": 6541,
                    "name": "VariableDeclaration",
                    "src": "2376:19:21"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "args",
                      "scope": 6555,
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
                        "id": 6542,
                        "name": "ElementaryTypeName",
                        "src": "2397:7:21"
                      }
                    ],
                    "id": 6543,
                    "name": "VariableDeclaration",
                    "src": "2397:12:21"
                  }
                ],
                "id": 6544,
                "name": "ParameterList",
                "src": "2375:35:21"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "wasCalled",
                      "scope": 6555,
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
                        "id": 6545,
                        "name": "ElementaryTypeName",
                        "src": "2458:4:21"
                      }
                    ],
                    "id": 6546,
                    "name": "VariableDeclaration",
                    "src": "2458:14:21"
                  }
                ],
                "id": 6547,
                "name": "ParameterList",
                "src": "2457:16:21"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 6547
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
                                  "referencedDeclaration": 6402,
                                  "type": "mapping(string memory => mapping(bytes32 => bool))",
                                  "value": "functionCalls"
                                },
                                "id": 6548,
                                "name": "Identifier",
                                "src": "2495:13:21"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 6541,
                                  "type": "string memory",
                                  "value": "functionName"
                                },
                                "id": 6549,
                                "name": "Identifier",
                                "src": "2509:12:21"
                              }
                            ],
                            "id": 6550,
                            "name": "IndexAccess",
                            "src": "2495:27:21"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 6543,
                              "type": "bytes32",
                              "value": "args"
                            },
                            "id": 6551,
                            "name": "Identifier",
                            "src": "2523:4:21"
                          }
                        ],
                        "id": 6552,
                        "name": "IndexAccess",
                        "src": "2495:33:21"
                      }
                    ],
                    "id": 6553,
                    "name": "Return",
                    "src": "2488:40:21"
                  }
                ],
                "id": 6554,
                "name": "Block",
                "src": "2478:57:21"
              }
            ],
            "id": 6555,
            "name": "FunctionDefinition",
            "src": "2341:194:21"
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
              "scope": 6563,
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
                "id": 6556,
                "name": "ParameterList",
                "src": "2565:2:21"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "functionNames",
                      "scope": 6562,
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
                            "id": 6557,
                            "name": "ElementaryTypeName",
                            "src": "2586:6:21"
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
                            "id": 6558,
                            "name": "Literal",
                            "src": "2593:2:21"
                          }
                        ],
                        "id": 6559,
                        "name": "ArrayTypeName",
                        "src": "2586:10:21"
                      }
                    ],
                    "id": 6560,
                    "name": "VariableDeclaration",
                    "src": "2586:24:21"
                  }
                ],
                "id": 6561,
                "name": "ParameterList",
                "src": "2585:26:21"
              }
            ],
            "id": 6562,
            "name": "FunctionDefinition",
            "src": "2541:71:21"
          }
        ],
        "id": 6563,
        "name": "ContractDefinition",
        "src": "610:2004:21"
      }
    ],
    "id": 6564,
    "name": "SourceUnit",
    "src": "584:2031:21"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-08-17T19:19:33.737Z"
}