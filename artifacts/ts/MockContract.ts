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
          10700
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
        "id": 10517,
        "name": "PragmaDirective",
        "src": "584:23:23"
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
            10700
          ],
          "name": "MockContract",
          "scope": 10701
        },
        "children": [
          {
            "attributes": {
              "constant": true,
              "name": "DEFAULT_SIGNATURE_ARGS",
              "scope": 10700,
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
                "id": 10518,
                "name": "ElementaryTypeName",
                "src": "638:7:23"
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
                    "id": 10519,
                    "name": "ElementaryTypeNameExpression",
                    "src": "689:7:23"
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
                    "id": 10520,
                    "name": "Literal",
                    "src": "697:1:23"
                  }
                ],
                "id": 10521,
                "name": "FunctionCall",
                "src": "689:10:23"
              }
            ],
            "id": 10522,
            "name": "VariableDeclaration",
            "src": "638:61:23"
          },
          {
            "attributes": {
              "constant": false,
              "name": "functionCallSignatures",
              "scope": 10700,
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
                    "id": 10523,
                    "name": "ElementaryTypeName",
                    "src": "804:6:23"
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
                        "id": 10524,
                        "name": "ElementaryTypeName",
                        "src": "814:7:23"
                      }
                    ],
                    "id": 10525,
                    "name": "ArrayTypeName",
                    "src": "814:9:23"
                  }
                ],
                "id": 10526,
                "name": "Mapping",
                "src": "795:29:23"
              }
            ],
            "id": 10527,
            "name": "VariableDeclaration",
            "src": "795:61:23"
          },
          {
            "attributes": {
              "constant": false,
              "name": "mockedReturnValue",
              "scope": 10700,
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
                    "id": 10528,
                    "name": "ElementaryTypeName",
                    "src": "871:6:23"
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
                        "id": 10529,
                        "name": "ElementaryTypeName",
                        "src": "890:7:23"
                      },
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 10530,
                        "name": "ElementaryTypeName",
                        "src": "901:7:23"
                      }
                    ],
                    "id": 10531,
                    "name": "Mapping",
                    "src": "881:28:23"
                  }
                ],
                "id": 10532,
                "name": "Mapping",
                "src": "862:48:23"
              }
            ],
            "id": 10533,
            "name": "VariableDeclaration",
            "src": "862:75:23"
          },
          {
            "attributes": {
              "constant": false,
              "name": "functionCalls",
              "scope": 10700,
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
                    "id": 10534,
                    "name": "ElementaryTypeName",
                    "src": "952:6:23"
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
                        "id": 10535,
                        "name": "ElementaryTypeName",
                        "src": "971:7:23"
                      },
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 10536,
                        "name": "ElementaryTypeName",
                        "src": "982:4:23"
                      }
                    ],
                    "id": 10537,
                    "name": "Mapping",
                    "src": "962:25:23"
                  }
                ],
                "id": 10538,
                "name": "Mapping",
                "src": "943:45:23"
              }
            ],
            "id": 10539,
            "name": "VariableDeclaration",
            "src": "943:68:23"
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
              "scope": 10700,
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
                      "scope": 10564,
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
                        "id": 10540,
                        "name": "ElementaryTypeName",
                        "src": "1052:6:23"
                      }
                    ],
                    "id": 10541,
                    "name": "VariableDeclaration",
                    "src": "1052:19:23"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "argsSignature",
                      "scope": 10564,
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
                        "id": 10542,
                        "name": "ElementaryTypeName",
                        "src": "1081:7:23"
                      }
                    ],
                    "id": 10543,
                    "name": "VariableDeclaration",
                    "src": "1081:21:23"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "returnValue",
                      "scope": 10564,
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
                        "id": 10544,
                        "name": "ElementaryTypeName",
                        "src": "1112:7:23"
                      }
                    ],
                    "id": 10545,
                    "name": "VariableDeclaration",
                    "src": "1112:19:23"
                  }
                ],
                "id": 10546,
                "name": "ParameterList",
                "src": "1042:95:23"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 10547,
                "name": "ParameterList",
                "src": "1145:0:23"
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
                                      "referencedDeclaration": 10527,
                                      "type": "mapping(string memory => bytes32[] storage ref)",
                                      "value": "functionCallSignatures"
                                    },
                                    "id": 10548,
                                    "name": "Identifier",
                                    "src": "1155:22:23"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 10541,
                                      "type": "string memory",
                                      "value": "functionName"
                                    },
                                    "id": 10549,
                                    "name": "Identifier",
                                    "src": "1178:12:23"
                                  }
                                ],
                                "id": 10550,
                                "name": "IndexAccess",
                                "src": "1155:36:23"
                              }
                            ],
                            "id": 10551,
                            "name": "MemberAccess",
                            "src": "1155:41:23"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10543,
                              "type": "bytes32",
                              "value": "argsSignature"
                            },
                            "id": 10552,
                            "name": "Identifier",
                            "src": "1197:13:23"
                          }
                        ],
                        "id": 10553,
                        "name": "FunctionCall",
                        "src": "1155:56:23"
                      }
                    ],
                    "id": 10554,
                    "name": "ExpressionStatement",
                    "src": "1155:56:23"
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
                                      "referencedDeclaration": 10533,
                                      "type": "mapping(string memory => mapping(bytes32 => bytes32))",
                                      "value": "mockedReturnValue"
                                    },
                                    "id": 10555,
                                    "name": "Identifier",
                                    "src": "1221:17:23"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 10541,
                                      "type": "string memory",
                                      "value": "functionName"
                                    },
                                    "id": 10556,
                                    "name": "Identifier",
                                    "src": "1239:12:23"
                                  }
                                ],
                                "id": 10558,
                                "name": "IndexAccess",
                                "src": "1221:31:23"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 10543,
                                  "type": "bytes32",
                                  "value": "argsSignature"
                                },
                                "id": 10557,
                                "name": "Identifier",
                                "src": "1253:13:23"
                              }
                            ],
                            "id": 10559,
                            "name": "IndexAccess",
                            "src": "1221:46:23"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10545,
                              "type": "bytes32",
                              "value": "returnValue"
                            },
                            "id": 10560,
                            "name": "Identifier",
                            "src": "1270:11:23"
                          }
                        ],
                        "id": 10561,
                        "name": "Assignment",
                        "src": "1221:60:23"
                      }
                    ],
                    "id": 10562,
                    "name": "ExpressionStatement",
                    "src": "1221:60:23"
                  }
                ],
                "id": 10563,
                "name": "Block",
                "src": "1145:143:23"
              }
            ],
            "id": 10564,
            "name": "FunctionDefinition",
            "src": "1018:270:23"
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
              "scope": 10700,
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
                      "scope": 10580,
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
                        "id": 10565,
                        "name": "ElementaryTypeName",
                        "src": "1322:6:23"
                      }
                    ],
                    "id": 10566,
                    "name": "VariableDeclaration",
                    "src": "1322:19:23"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "argsSignature",
                      "scope": 10580,
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
                        "id": 10567,
                        "name": "ElementaryTypeName",
                        "src": "1343:7:23"
                      }
                    ],
                    "id": 10568,
                    "name": "VariableDeclaration",
                    "src": "1343:21:23"
                  }
                ],
                "id": 10569,
                "name": "ParameterList",
                "src": "1321:44:23"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_mockReturnValue",
                      "scope": 10580,
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
                        "id": 10570,
                        "name": "ElementaryTypeName",
                        "src": "1411:7:23"
                      }
                    ],
                    "id": 10571,
                    "name": "VariableDeclaration",
                    "src": "1411:24:23"
                  }
                ],
                "id": 10572,
                "name": "ParameterList",
                "src": "1410:26:23"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 10572
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
                                  "referencedDeclaration": 10533,
                                  "type": "mapping(string memory => mapping(bytes32 => bytes32))",
                                  "value": "mockedReturnValue"
                                },
                                "id": 10573,
                                "name": "Identifier",
                                "src": "1458:17:23"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 10566,
                                  "type": "string memory",
                                  "value": "functionName"
                                },
                                "id": 10574,
                                "name": "Identifier",
                                "src": "1476:12:23"
                              }
                            ],
                            "id": 10575,
                            "name": "IndexAccess",
                            "src": "1458:31:23"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10568,
                              "type": "bytes32",
                              "value": "argsSignature"
                            },
                            "id": 10576,
                            "name": "Identifier",
                            "src": "1490:13:23"
                          }
                        ],
                        "id": 10577,
                        "name": "IndexAccess",
                        "src": "1458:46:23"
                      }
                    ],
                    "id": 10578,
                    "name": "Return",
                    "src": "1451:53:23"
                  }
                ],
                "id": 10579,
                "name": "Block",
                "src": "1441:70:23"
              }
            ],
            "id": 10580,
            "name": "FunctionDefinition",
            "src": "1294:217:23"
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
              "scope": 10700,
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
                "id": 10581,
                "name": "ParameterList",
                "src": "1531:2:23"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 10582,
                "name": "ParameterList",
                "src": "1541:0:23"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "assignments": [
                            10584
                          ]
                        },
                        "children": [
                          {
                            "attributes": {
                              "constant": false,
                              "name": "i",
                              "scope": 10653,
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
                                "id": 10583,
                                "name": "ElementaryTypeName",
                                "src": "1556:4:23"
                              }
                            ],
                            "id": 10584,
                            "name": "VariableDeclaration",
                            "src": "1556:6:23"
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
                            "id": 10585,
                            "name": "Literal",
                            "src": "1565:1:23"
                          }
                        ],
                        "id": 10586,
                        "name": "VariableDeclarationStatement",
                        "src": "1556:10:23"
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
                              "referencedDeclaration": 10584,
                              "type": "uint256",
                              "value": "i"
                            },
                            "id": 10587,
                            "name": "Identifier",
                            "src": "1568:1:23"
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
                            "id": 10588,
                            "name": "Literal",
                            "src": "1572:2:23"
                          }
                        ],
                        "id": 10589,
                        "name": "BinaryOperation",
                        "src": "1568:6:23"
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
                                  "referencedDeclaration": 10584,
                                  "type": "uint256",
                                  "value": "i"
                                },
                                "id": 10590,
                                "name": "Identifier",
                                "src": "1576:1:23"
                              }
                            ],
                            "id": 10591,
                            "name": "UnaryOperation",
                            "src": "1576:3:23"
                          }
                        ],
                        "id": 10592,
                        "name": "ExpressionStatement",
                        "src": "1576:3:23"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "assignments": [
                                10594
                              ]
                            },
                            "children": [
                              {
                                "attributes": {
                                  "constant": false,
                                  "name": "functionName",
                                  "scope": 10653,
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
                                    "id": 10593,
                                    "name": "ElementaryTypeName",
                                    "src": "1595:6:23"
                                  }
                                ],
                                "id": 10594,
                                "name": "VariableDeclaration",
                                "src": "1595:26:23"
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
                                          "referencedDeclaration": 10699,
                                          "type": "function () returns (string memory[10] memory)",
                                          "value": "getFunctionList"
                                        },
                                        "id": 10595,
                                        "name": "Identifier",
                                        "src": "1624:15:23"
                                      }
                                    ],
                                    "id": 10596,
                                    "name": "FunctionCall",
                                    "src": "1624:17:23"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 10584,
                                      "type": "uint256",
                                      "value": "i"
                                    },
                                    "id": 10597,
                                    "name": "Identifier",
                                    "src": "1642:1:23"
                                  }
                                ],
                                "id": 10598,
                                "name": "IndexAccess",
                                "src": "1624:20:23"
                              }
                            ],
                            "id": 10599,
                            "name": "VariableDeclarationStatement",
                            "src": "1595:49:23"
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
                                            "id": 10600,
                                            "name": "ElementaryTypeNameExpression",
                                            "src": "1663:5:23"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 10594,
                                              "type": "string memory",
                                              "value": "functionName"
                                            },
                                            "id": 10601,
                                            "name": "Identifier",
                                            "src": "1669:12:23"
                                          }
                                        ],
                                        "id": 10602,
                                        "name": "FunctionCall",
                                        "src": "1663:19:23"
                                      }
                                    ],
                                    "id": 10603,
                                    "name": "MemberAccess",
                                    "src": "1663:26:23"
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
                                    "id": 10604,
                                    "name": "Literal",
                                    "src": "1693:1:23"
                                  }
                                ],
                                "id": 10605,
                                "name": "BinaryOperation",
                                "src": "1663:31:23"
                              },
                              {
                                "children": [
                                  {
                                    "children": [
                                      {
                                        "attributes": {
                                          "assignments": [
                                            10607
                                          ]
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "constant": false,
                                              "name": "j",
                                              "scope": 10653,
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
                                                "id": 10606,
                                                "name": "ElementaryTypeName",
                                                "src": "1719:4:23"
                                              }
                                            ],
                                            "id": 10607,
                                            "name": "VariableDeclaration",
                                            "src": "1719:6:23"
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
                                            "id": 10608,
                                            "name": "Literal",
                                            "src": "1728:1:23"
                                          }
                                        ],
                                        "id": 10609,
                                        "name": "VariableDeclarationStatement",
                                        "src": "1719:10:23"
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
                                              "referencedDeclaration": 10607,
                                              "type": "uint256",
                                              "value": "j"
                                            },
                                            "id": 10610,
                                            "name": "Identifier",
                                            "src": "1731:1:23"
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
                                                      "referencedDeclaration": 10527,
                                                      "type": "mapping(string memory => bytes32[] storage ref)",
                                                      "value": "functionCallSignatures"
                                                    },
                                                    "id": 10611,
                                                    "name": "Identifier",
                                                    "src": "1735:22:23"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 10594,
                                                      "type": "string memory",
                                                      "value": "functionName"
                                                    },
                                                    "id": 10612,
                                                    "name": "Identifier",
                                                    "src": "1758:12:23"
                                                  }
                                                ],
                                                "id": 10613,
                                                "name": "IndexAccess",
                                                "src": "1735:36:23"
                                              }
                                            ],
                                            "id": 10614,
                                            "name": "MemberAccess",
                                            "src": "1735:43:23"
                                          }
                                        ],
                                        "id": 10615,
                                        "name": "BinaryOperation",
                                        "src": "1731:47:23"
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
                                                  "referencedDeclaration": 10607,
                                                  "type": "uint256",
                                                  "value": "j"
                                                },
                                                "id": 10616,
                                                "name": "Identifier",
                                                "src": "1780:1:23"
                                              }
                                            ],
                                            "id": 10617,
                                            "name": "UnaryOperation",
                                            "src": "1780:3:23"
                                          }
                                        ],
                                        "id": 10618,
                                        "name": "ExpressionStatement",
                                        "src": "1780:3:23"
                                      },
                                      {
                                        "children": [
                                          {
                                            "attributes": {
                                              "assignments": [
                                                10620
                                              ]
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "constant": false,
                                                  "name": "callSignature",
                                                  "scope": 10653,
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
                                                    "id": 10619,
                                                    "name": "ElementaryTypeName",
                                                    "src": "1807:7:23"
                                                  }
                                                ],
                                                "id": 10620,
                                                "name": "VariableDeclaration",
                                                "src": "1807:21:23"
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
                                                          "referencedDeclaration": 10527,
                                                          "type": "mapping(string memory => bytes32[] storage ref)",
                                                          "value": "functionCallSignatures"
                                                        },
                                                        "id": 10621,
                                                        "name": "Identifier",
                                                        "src": "1831:22:23"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 10594,
                                                          "type": "string memory",
                                                          "value": "functionName"
                                                        },
                                                        "id": 10622,
                                                        "name": "Identifier",
                                                        "src": "1854:12:23"
                                                      }
                                                    ],
                                                    "id": 10623,
                                                    "name": "IndexAccess",
                                                    "src": "1831:36:23"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 10607,
                                                      "type": "uint256",
                                                      "value": "j"
                                                    },
                                                    "id": 10624,
                                                    "name": "Identifier",
                                                    "src": "1868:1:23"
                                                  }
                                                ],
                                                "id": 10625,
                                                "name": "IndexAccess",
                                                "src": "1831:39:23"
                                              }
                                            ],
                                            "id": 10626,
                                            "name": "VariableDeclarationStatement",
                                            "src": "1807:63:23"
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
                                                              "referencedDeclaration": 10539,
                                                              "type": "mapping(string memory => mapping(bytes32 => bool))",
                                                              "value": "functionCalls"
                                                            },
                                                            "id": 10627,
                                                            "name": "Identifier",
                                                            "src": "1899:13:23"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 10594,
                                                              "type": "string memory",
                                                              "value": "functionName"
                                                            },
                                                            "id": 10628,
                                                            "name": "Identifier",
                                                            "src": "1913:12:23"
                                                          }
                                                        ],
                                                        "id": 10629,
                                                        "name": "IndexAccess",
                                                        "src": "1899:27:23"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 10620,
                                                          "type": "bytes32",
                                                          "value": "callSignature"
                                                        },
                                                        "id": 10630,
                                                        "name": "Identifier",
                                                        "src": "1927:13:23"
                                                      }
                                                    ],
                                                    "id": 10631,
                                                    "name": "IndexAccess",
                                                    "src": "1899:42:23"
                                                  }
                                                ],
                                                "id": 10632,
                                                "name": "UnaryOperation",
                                                "src": "1892:49:23"
                                              }
                                            ],
                                            "id": 10633,
                                            "name": "ExpressionStatement",
                                            "src": "1892:49:23"
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
                                                              "referencedDeclaration": 10533,
                                                              "type": "mapping(string memory => mapping(bytes32 => bytes32))",
                                                              "value": "mockedReturnValue"
                                                            },
                                                            "id": 10634,
                                                            "name": "Identifier",
                                                            "src": "1970:17:23"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 10594,
                                                              "type": "string memory",
                                                              "value": "functionName"
                                                            },
                                                            "id": 10635,
                                                            "name": "Identifier",
                                                            "src": "1988:12:23"
                                                          }
                                                        ],
                                                        "id": 10636,
                                                        "name": "IndexAccess",
                                                        "src": "1970:31:23"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 10620,
                                                          "type": "bytes32",
                                                          "value": "callSignature"
                                                        },
                                                        "id": 10637,
                                                        "name": "Identifier",
                                                        "src": "2002:13:23"
                                                      }
                                                    ],
                                                    "id": 10638,
                                                    "name": "IndexAccess",
                                                    "src": "1970:46:23"
                                                  }
                                                ],
                                                "id": 10639,
                                                "name": "UnaryOperation",
                                                "src": "1963:53:23"
                                              }
                                            ],
                                            "id": 10640,
                                            "name": "ExpressionStatement",
                                            "src": "1963:53:23"
                                          }
                                        ],
                                        "id": 10641,
                                        "name": "Block",
                                        "src": "1785:250:23"
                                      }
                                    ],
                                    "id": 10642,
                                    "name": "ForStatement",
                                    "src": "1714:321:23"
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
                                                  "referencedDeclaration": 10527,
                                                  "type": "mapping(string memory => bytes32[] storage ref)",
                                                  "value": "functionCallSignatures"
                                                },
                                                "id": 10643,
                                                "name": "Identifier",
                                                "src": "2060:22:23"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 10594,
                                                  "type": "string memory",
                                                  "value": "functionName"
                                                },
                                                "id": 10644,
                                                "name": "Identifier",
                                                "src": "2083:12:23"
                                              }
                                            ],
                                            "id": 10645,
                                            "name": "IndexAccess",
                                            "src": "2060:36:23"
                                          }
                                        ],
                                        "id": 10646,
                                        "name": "UnaryOperation",
                                        "src": "2053:43:23"
                                      }
                                    ],
                                    "id": 10647,
                                    "name": "ExpressionStatement",
                                    "src": "2053:43:23"
                                  }
                                ],
                                "id": 10648,
                                "name": "Block",
                                "src": "1696:415:23"
                              }
                            ],
                            "id": 10649,
                            "name": "IfStatement",
                            "src": "1659:452:23"
                          }
                        ],
                        "id": 10650,
                        "name": "Block",
                        "src": "1581:540:23"
                      }
                    ],
                    "id": 10651,
                    "name": "ForStatement",
                    "src": "1551:570:23"
                  }
                ],
                "id": 10652,
                "name": "Block",
                "src": "1541:586:23"
              }
            ],
            "id": 10653,
            "name": "FunctionDefinition",
            "src": "1517:610:23"
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
              "scope": 10700,
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
                      "scope": 10676,
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
                        "id": 10654,
                        "name": "ElementaryTypeName",
                        "src": "2165:6:23"
                      }
                    ],
                    "id": 10655,
                    "name": "VariableDeclaration",
                    "src": "2165:19:23"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "args",
                      "scope": 10676,
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
                        "id": 10656,
                        "name": "ElementaryTypeName",
                        "src": "2186:7:23"
                      }
                    ],
                    "id": 10657,
                    "name": "VariableDeclaration",
                    "src": "2186:12:23"
                  }
                ],
                "id": 10658,
                "name": "ParameterList",
                "src": "2164:35:23"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 10659,
                "name": "ParameterList",
                "src": "2221:0:23"
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
                                      "referencedDeclaration": 10539,
                                      "type": "mapping(string memory => mapping(bytes32 => bool))",
                                      "value": "functionCalls"
                                    },
                                    "id": 10660,
                                    "name": "Identifier",
                                    "src": "2231:13:23"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 10655,
                                      "type": "string memory",
                                      "value": "functionName"
                                    },
                                    "id": 10661,
                                    "name": "Identifier",
                                    "src": "2245:12:23"
                                  }
                                ],
                                "id": 10663,
                                "name": "IndexAccess",
                                "src": "2231:27:23"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 10657,
                                  "type": "bytes32",
                                  "value": "args"
                                },
                                "id": 10662,
                                "name": "Identifier",
                                "src": "2259:4:23"
                              }
                            ],
                            "id": 10664,
                            "name": "IndexAccess",
                            "src": "2231:33:23"
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
                            "id": 10665,
                            "name": "Literal",
                            "src": "2267:4:23"
                          }
                        ],
                        "id": 10666,
                        "name": "Assignment",
                        "src": "2231:40:23"
                      }
                    ],
                    "id": 10667,
                    "name": "ExpressionStatement",
                    "src": "2231:40:23"
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
                                      "referencedDeclaration": 10527,
                                      "type": "mapping(string memory => bytes32[] storage ref)",
                                      "value": "functionCallSignatures"
                                    },
                                    "id": 10668,
                                    "name": "Identifier",
                                    "src": "2281:22:23"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 10655,
                                      "type": "string memory",
                                      "value": "functionName"
                                    },
                                    "id": 10669,
                                    "name": "Identifier",
                                    "src": "2304:12:23"
                                  }
                                ],
                                "id": 10670,
                                "name": "IndexAccess",
                                "src": "2281:36:23"
                              }
                            ],
                            "id": 10671,
                            "name": "MemberAccess",
                            "src": "2281:41:23"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10657,
                              "type": "bytes32",
                              "value": "args"
                            },
                            "id": 10672,
                            "name": "Identifier",
                            "src": "2323:4:23"
                          }
                        ],
                        "id": 10673,
                        "name": "FunctionCall",
                        "src": "2281:47:23"
                      }
                    ],
                    "id": 10674,
                    "name": "ExpressionStatement",
                    "src": "2281:47:23"
                  }
                ],
                "id": 10675,
                "name": "Block",
                "src": "2221:114:23"
              }
            ],
            "id": 10676,
            "name": "FunctionDefinition",
            "src": "2133:202:23"
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
              "scope": 10700,
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
                      "scope": 10692,
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
                        "id": 10677,
                        "name": "ElementaryTypeName",
                        "src": "2376:6:23"
                      }
                    ],
                    "id": 10678,
                    "name": "VariableDeclaration",
                    "src": "2376:19:23"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "args",
                      "scope": 10692,
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
                        "id": 10679,
                        "name": "ElementaryTypeName",
                        "src": "2397:7:23"
                      }
                    ],
                    "id": 10680,
                    "name": "VariableDeclaration",
                    "src": "2397:12:23"
                  }
                ],
                "id": 10681,
                "name": "ParameterList",
                "src": "2375:35:23"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "wasCalled",
                      "scope": 10692,
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
                        "id": 10682,
                        "name": "ElementaryTypeName",
                        "src": "2458:4:23"
                      }
                    ],
                    "id": 10683,
                    "name": "VariableDeclaration",
                    "src": "2458:14:23"
                  }
                ],
                "id": 10684,
                "name": "ParameterList",
                "src": "2457:16:23"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 10684
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
                                  "referencedDeclaration": 10539,
                                  "type": "mapping(string memory => mapping(bytes32 => bool))",
                                  "value": "functionCalls"
                                },
                                "id": 10685,
                                "name": "Identifier",
                                "src": "2495:13:23"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 10678,
                                  "type": "string memory",
                                  "value": "functionName"
                                },
                                "id": 10686,
                                "name": "Identifier",
                                "src": "2509:12:23"
                              }
                            ],
                            "id": 10687,
                            "name": "IndexAccess",
                            "src": "2495:27:23"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10680,
                              "type": "bytes32",
                              "value": "args"
                            },
                            "id": 10688,
                            "name": "Identifier",
                            "src": "2523:4:23"
                          }
                        ],
                        "id": 10689,
                        "name": "IndexAccess",
                        "src": "2495:33:23"
                      }
                    ],
                    "id": 10690,
                    "name": "Return",
                    "src": "2488:40:23"
                  }
                ],
                "id": 10691,
                "name": "Block",
                "src": "2478:57:23"
              }
            ],
            "id": 10692,
            "name": "FunctionDefinition",
            "src": "2341:194:23"
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
              "scope": 10700,
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
                "id": 10693,
                "name": "ParameterList",
                "src": "2565:2:23"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "functionNames",
                      "scope": 10699,
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
                            "id": 10694,
                            "name": "ElementaryTypeName",
                            "src": "2586:6:23"
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
                            "id": 10695,
                            "name": "Literal",
                            "src": "2593:2:23"
                          }
                        ],
                        "id": 10696,
                        "name": "ArrayTypeName",
                        "src": "2586:10:23"
                      }
                    ],
                    "id": 10697,
                    "name": "VariableDeclaration",
                    "src": "2586:24:23"
                  }
                ],
                "id": 10698,
                "name": "ParameterList",
                "src": "2585:26:23"
              }
            ],
            "id": 10699,
            "name": "FunctionDefinition",
            "src": "2541:71:23"
          }
        ],
        "id": 10700,
        "name": "ContractDefinition",
        "src": "610:2004:23"
      }
    ],
    "id": 10701,
    "name": "SourceUnit",
    "src": "584:2031:23"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-10-08T22:52:31.858Z"
}