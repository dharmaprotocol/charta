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
          5517
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
        "id": 5334,
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
            5517
          ],
          "name": "MockContract",
          "scope": 5518
        },
        "children": [
          {
            "attributes": {
              "constant": true,
              "name": "DEFAULT_SIGNATURE_ARGS",
              "scope": 5517,
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
                "id": 5335,
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
                    "id": 5336,
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
                    "id": 5337,
                    "name": "Literal",
                    "src": "697:1:17"
                  }
                ],
                "id": 5338,
                "name": "FunctionCall",
                "src": "689:10:17"
              }
            ],
            "id": 5339,
            "name": "VariableDeclaration",
            "src": "638:61:17"
          },
          {
            "attributes": {
              "constant": false,
              "name": "functionCallSignatures",
              "scope": 5517,
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
                    "id": 5340,
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
                        "id": 5341,
                        "name": "ElementaryTypeName",
                        "src": "814:7:17"
                      }
                    ],
                    "id": 5342,
                    "name": "ArrayTypeName",
                    "src": "814:9:17"
                  }
                ],
                "id": 5343,
                "name": "Mapping",
                "src": "795:29:17"
              }
            ],
            "id": 5344,
            "name": "VariableDeclaration",
            "src": "795:61:17"
          },
          {
            "attributes": {
              "constant": false,
              "name": "mockedReturnValue",
              "scope": 5517,
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
                    "id": 5345,
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
                        "id": 5346,
                        "name": "ElementaryTypeName",
                        "src": "890:7:17"
                      },
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 5347,
                        "name": "ElementaryTypeName",
                        "src": "901:7:17"
                      }
                    ],
                    "id": 5348,
                    "name": "Mapping",
                    "src": "881:28:17"
                  }
                ],
                "id": 5349,
                "name": "Mapping",
                "src": "862:48:17"
              }
            ],
            "id": 5350,
            "name": "VariableDeclaration",
            "src": "862:75:17"
          },
          {
            "attributes": {
              "constant": false,
              "name": "functionCalls",
              "scope": 5517,
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
                    "id": 5351,
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
                        "id": 5352,
                        "name": "ElementaryTypeName",
                        "src": "971:7:17"
                      },
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 5353,
                        "name": "ElementaryTypeName",
                        "src": "982:4:17"
                      }
                    ],
                    "id": 5354,
                    "name": "Mapping",
                    "src": "962:25:17"
                  }
                ],
                "id": 5355,
                "name": "Mapping",
                "src": "943:45:17"
              }
            ],
            "id": 5356,
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
              "scope": 5517,
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
                      "scope": 5381,
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
                        "id": 5357,
                        "name": "ElementaryTypeName",
                        "src": "1052:6:17"
                      }
                    ],
                    "id": 5358,
                    "name": "VariableDeclaration",
                    "src": "1052:19:17"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "argsSignature",
                      "scope": 5381,
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
                        "id": 5359,
                        "name": "ElementaryTypeName",
                        "src": "1081:7:17"
                      }
                    ],
                    "id": 5360,
                    "name": "VariableDeclaration",
                    "src": "1081:21:17"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "returnValue",
                      "scope": 5381,
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
                        "id": 5361,
                        "name": "ElementaryTypeName",
                        "src": "1112:7:17"
                      }
                    ],
                    "id": 5362,
                    "name": "VariableDeclaration",
                    "src": "1112:19:17"
                  }
                ],
                "id": 5363,
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
                "id": 5364,
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
                                      "referencedDeclaration": 5344,
                                      "type": "mapping(string memory => bytes32[] storage ref)",
                                      "value": "functionCallSignatures"
                                    },
                                    "id": 5365,
                                    "name": "Identifier",
                                    "src": "1155:22:17"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5358,
                                      "type": "string memory",
                                      "value": "functionName"
                                    },
                                    "id": 5366,
                                    "name": "Identifier",
                                    "src": "1178:12:17"
                                  }
                                ],
                                "id": 5367,
                                "name": "IndexAccess",
                                "src": "1155:36:17"
                              }
                            ],
                            "id": 5368,
                            "name": "MemberAccess",
                            "src": "1155:41:17"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5360,
                              "type": "bytes32",
                              "value": "argsSignature"
                            },
                            "id": 5369,
                            "name": "Identifier",
                            "src": "1197:13:17"
                          }
                        ],
                        "id": 5370,
                        "name": "FunctionCall",
                        "src": "1155:56:17"
                      }
                    ],
                    "id": 5371,
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
                                      "referencedDeclaration": 5350,
                                      "type": "mapping(string memory => mapping(bytes32 => bytes32))",
                                      "value": "mockedReturnValue"
                                    },
                                    "id": 5372,
                                    "name": "Identifier",
                                    "src": "1221:17:17"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5358,
                                      "type": "string memory",
                                      "value": "functionName"
                                    },
                                    "id": 5373,
                                    "name": "Identifier",
                                    "src": "1239:12:17"
                                  }
                                ],
                                "id": 5375,
                                "name": "IndexAccess",
                                "src": "1221:31:17"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5360,
                                  "type": "bytes32",
                                  "value": "argsSignature"
                                },
                                "id": 5374,
                                "name": "Identifier",
                                "src": "1253:13:17"
                              }
                            ],
                            "id": 5376,
                            "name": "IndexAccess",
                            "src": "1221:46:17"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5362,
                              "type": "bytes32",
                              "value": "returnValue"
                            },
                            "id": 5377,
                            "name": "Identifier",
                            "src": "1270:11:17"
                          }
                        ],
                        "id": 5378,
                        "name": "Assignment",
                        "src": "1221:60:17"
                      }
                    ],
                    "id": 5379,
                    "name": "ExpressionStatement",
                    "src": "1221:60:17"
                  }
                ],
                "id": 5380,
                "name": "Block",
                "src": "1145:143:17"
              }
            ],
            "id": 5381,
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
              "scope": 5517,
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
                      "scope": 5397,
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
                        "id": 5382,
                        "name": "ElementaryTypeName",
                        "src": "1322:6:17"
                      }
                    ],
                    "id": 5383,
                    "name": "VariableDeclaration",
                    "src": "1322:19:17"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "argsSignature",
                      "scope": 5397,
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
                        "id": 5384,
                        "name": "ElementaryTypeName",
                        "src": "1343:7:17"
                      }
                    ],
                    "id": 5385,
                    "name": "VariableDeclaration",
                    "src": "1343:21:17"
                  }
                ],
                "id": 5386,
                "name": "ParameterList",
                "src": "1321:44:17"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_mockReturnValue",
                      "scope": 5397,
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
                        "id": 5387,
                        "name": "ElementaryTypeName",
                        "src": "1411:7:17"
                      }
                    ],
                    "id": 5388,
                    "name": "VariableDeclaration",
                    "src": "1411:24:17"
                  }
                ],
                "id": 5389,
                "name": "ParameterList",
                "src": "1410:26:17"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 5389
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
                                  "referencedDeclaration": 5350,
                                  "type": "mapping(string memory => mapping(bytes32 => bytes32))",
                                  "value": "mockedReturnValue"
                                },
                                "id": 5390,
                                "name": "Identifier",
                                "src": "1458:17:17"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5383,
                                  "type": "string memory",
                                  "value": "functionName"
                                },
                                "id": 5391,
                                "name": "Identifier",
                                "src": "1476:12:17"
                              }
                            ],
                            "id": 5392,
                            "name": "IndexAccess",
                            "src": "1458:31:17"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5385,
                              "type": "bytes32",
                              "value": "argsSignature"
                            },
                            "id": 5393,
                            "name": "Identifier",
                            "src": "1490:13:17"
                          }
                        ],
                        "id": 5394,
                        "name": "IndexAccess",
                        "src": "1458:46:17"
                      }
                    ],
                    "id": 5395,
                    "name": "Return",
                    "src": "1451:53:17"
                  }
                ],
                "id": 5396,
                "name": "Block",
                "src": "1441:70:17"
              }
            ],
            "id": 5397,
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
              "scope": 5517,
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
                "id": 5398,
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
                "id": 5399,
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
                            5401
                          ]
                        },
                        "children": [
                          {
                            "attributes": {
                              "constant": false,
                              "name": "i",
                              "scope": 5470,
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
                                "id": 5400,
                                "name": "ElementaryTypeName",
                                "src": "1556:4:17"
                              }
                            ],
                            "id": 5401,
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
                            "id": 5402,
                            "name": "Literal",
                            "src": "1565:1:17"
                          }
                        ],
                        "id": 5403,
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
                              "referencedDeclaration": 5401,
                              "type": "uint256",
                              "value": "i"
                            },
                            "id": 5404,
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
                            "id": 5405,
                            "name": "Literal",
                            "src": "1572:2:17"
                          }
                        ],
                        "id": 5406,
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
                                  "referencedDeclaration": 5401,
                                  "type": "uint256",
                                  "value": "i"
                                },
                                "id": 5407,
                                "name": "Identifier",
                                "src": "1576:1:17"
                              }
                            ],
                            "id": 5408,
                            "name": "UnaryOperation",
                            "src": "1576:3:17"
                          }
                        ],
                        "id": 5409,
                        "name": "ExpressionStatement",
                        "src": "1576:3:17"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "assignments": [
                                5411
                              ]
                            },
                            "children": [
                              {
                                "attributes": {
                                  "constant": false,
                                  "name": "functionName",
                                  "scope": 5470,
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
                                    "id": 5410,
                                    "name": "ElementaryTypeName",
                                    "src": "1595:6:17"
                                  }
                                ],
                                "id": 5411,
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
                                          "referencedDeclaration": 5516,
                                          "type": "function () returns (string memory[10] memory)",
                                          "value": "getFunctionList"
                                        },
                                        "id": 5412,
                                        "name": "Identifier",
                                        "src": "1624:15:17"
                                      }
                                    ],
                                    "id": 5413,
                                    "name": "FunctionCall",
                                    "src": "1624:17:17"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5401,
                                      "type": "uint256",
                                      "value": "i"
                                    },
                                    "id": 5414,
                                    "name": "Identifier",
                                    "src": "1642:1:17"
                                  }
                                ],
                                "id": 5415,
                                "name": "IndexAccess",
                                "src": "1624:20:17"
                              }
                            ],
                            "id": 5416,
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
                                            "id": 5417,
                                            "name": "ElementaryTypeNameExpression",
                                            "src": "1663:5:17"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 5411,
                                              "type": "string memory",
                                              "value": "functionName"
                                            },
                                            "id": 5418,
                                            "name": "Identifier",
                                            "src": "1669:12:17"
                                          }
                                        ],
                                        "id": 5419,
                                        "name": "FunctionCall",
                                        "src": "1663:19:17"
                                      }
                                    ],
                                    "id": 5420,
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
                                    "id": 5421,
                                    "name": "Literal",
                                    "src": "1693:1:17"
                                  }
                                ],
                                "id": 5422,
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
                                            5424
                                          ]
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "constant": false,
                                              "name": "j",
                                              "scope": 5470,
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
                                                "id": 5423,
                                                "name": "ElementaryTypeName",
                                                "src": "1719:4:17"
                                              }
                                            ],
                                            "id": 5424,
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
                                            "id": 5425,
                                            "name": "Literal",
                                            "src": "1728:1:17"
                                          }
                                        ],
                                        "id": 5426,
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
                                              "referencedDeclaration": 5424,
                                              "type": "uint256",
                                              "value": "j"
                                            },
                                            "id": 5427,
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
                                                      "referencedDeclaration": 5344,
                                                      "type": "mapping(string memory => bytes32[] storage ref)",
                                                      "value": "functionCallSignatures"
                                                    },
                                                    "id": 5428,
                                                    "name": "Identifier",
                                                    "src": "1735:22:17"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 5411,
                                                      "type": "string memory",
                                                      "value": "functionName"
                                                    },
                                                    "id": 5429,
                                                    "name": "Identifier",
                                                    "src": "1758:12:17"
                                                  }
                                                ],
                                                "id": 5430,
                                                "name": "IndexAccess",
                                                "src": "1735:36:17"
                                              }
                                            ],
                                            "id": 5431,
                                            "name": "MemberAccess",
                                            "src": "1735:43:17"
                                          }
                                        ],
                                        "id": 5432,
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
                                                  "referencedDeclaration": 5424,
                                                  "type": "uint256",
                                                  "value": "j"
                                                },
                                                "id": 5433,
                                                "name": "Identifier",
                                                "src": "1780:1:17"
                                              }
                                            ],
                                            "id": 5434,
                                            "name": "UnaryOperation",
                                            "src": "1780:3:17"
                                          }
                                        ],
                                        "id": 5435,
                                        "name": "ExpressionStatement",
                                        "src": "1780:3:17"
                                      },
                                      {
                                        "children": [
                                          {
                                            "attributes": {
                                              "assignments": [
                                                5437
                                              ]
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "constant": false,
                                                  "name": "callSignature",
                                                  "scope": 5470,
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
                                                    "id": 5436,
                                                    "name": "ElementaryTypeName",
                                                    "src": "1807:7:17"
                                                  }
                                                ],
                                                "id": 5437,
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
                                                          "referencedDeclaration": 5344,
                                                          "type": "mapping(string memory => bytes32[] storage ref)",
                                                          "value": "functionCallSignatures"
                                                        },
                                                        "id": 5438,
                                                        "name": "Identifier",
                                                        "src": "1831:22:17"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 5411,
                                                          "type": "string memory",
                                                          "value": "functionName"
                                                        },
                                                        "id": 5439,
                                                        "name": "Identifier",
                                                        "src": "1854:12:17"
                                                      }
                                                    ],
                                                    "id": 5440,
                                                    "name": "IndexAccess",
                                                    "src": "1831:36:17"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 5424,
                                                      "type": "uint256",
                                                      "value": "j"
                                                    },
                                                    "id": 5441,
                                                    "name": "Identifier",
                                                    "src": "1868:1:17"
                                                  }
                                                ],
                                                "id": 5442,
                                                "name": "IndexAccess",
                                                "src": "1831:39:17"
                                              }
                                            ],
                                            "id": 5443,
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
                                                              "referencedDeclaration": 5356,
                                                              "type": "mapping(string memory => mapping(bytes32 => bool))",
                                                              "value": "functionCalls"
                                                            },
                                                            "id": 5444,
                                                            "name": "Identifier",
                                                            "src": "1899:13:17"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 5411,
                                                              "type": "string memory",
                                                              "value": "functionName"
                                                            },
                                                            "id": 5445,
                                                            "name": "Identifier",
                                                            "src": "1913:12:17"
                                                          }
                                                        ],
                                                        "id": 5446,
                                                        "name": "IndexAccess",
                                                        "src": "1899:27:17"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 5437,
                                                          "type": "bytes32",
                                                          "value": "callSignature"
                                                        },
                                                        "id": 5447,
                                                        "name": "Identifier",
                                                        "src": "1927:13:17"
                                                      }
                                                    ],
                                                    "id": 5448,
                                                    "name": "IndexAccess",
                                                    "src": "1899:42:17"
                                                  }
                                                ],
                                                "id": 5449,
                                                "name": "UnaryOperation",
                                                "src": "1892:49:17"
                                              }
                                            ],
                                            "id": 5450,
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
                                                              "referencedDeclaration": 5350,
                                                              "type": "mapping(string memory => mapping(bytes32 => bytes32))",
                                                              "value": "mockedReturnValue"
                                                            },
                                                            "id": 5451,
                                                            "name": "Identifier",
                                                            "src": "1970:17:17"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 5411,
                                                              "type": "string memory",
                                                              "value": "functionName"
                                                            },
                                                            "id": 5452,
                                                            "name": "Identifier",
                                                            "src": "1988:12:17"
                                                          }
                                                        ],
                                                        "id": 5453,
                                                        "name": "IndexAccess",
                                                        "src": "1970:31:17"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 5437,
                                                          "type": "bytes32",
                                                          "value": "callSignature"
                                                        },
                                                        "id": 5454,
                                                        "name": "Identifier",
                                                        "src": "2002:13:17"
                                                      }
                                                    ],
                                                    "id": 5455,
                                                    "name": "IndexAccess",
                                                    "src": "1970:46:17"
                                                  }
                                                ],
                                                "id": 5456,
                                                "name": "UnaryOperation",
                                                "src": "1963:53:17"
                                              }
                                            ],
                                            "id": 5457,
                                            "name": "ExpressionStatement",
                                            "src": "1963:53:17"
                                          }
                                        ],
                                        "id": 5458,
                                        "name": "Block",
                                        "src": "1785:250:17"
                                      }
                                    ],
                                    "id": 5459,
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
                                                  "referencedDeclaration": 5344,
                                                  "type": "mapping(string memory => bytes32[] storage ref)",
                                                  "value": "functionCallSignatures"
                                                },
                                                "id": 5460,
                                                "name": "Identifier",
                                                "src": "2060:22:17"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 5411,
                                                  "type": "string memory",
                                                  "value": "functionName"
                                                },
                                                "id": 5461,
                                                "name": "Identifier",
                                                "src": "2083:12:17"
                                              }
                                            ],
                                            "id": 5462,
                                            "name": "IndexAccess",
                                            "src": "2060:36:17"
                                          }
                                        ],
                                        "id": 5463,
                                        "name": "UnaryOperation",
                                        "src": "2053:43:17"
                                      }
                                    ],
                                    "id": 5464,
                                    "name": "ExpressionStatement",
                                    "src": "2053:43:17"
                                  }
                                ],
                                "id": 5465,
                                "name": "Block",
                                "src": "1696:415:17"
                              }
                            ],
                            "id": 5466,
                            "name": "IfStatement",
                            "src": "1659:452:17"
                          }
                        ],
                        "id": 5467,
                        "name": "Block",
                        "src": "1581:540:17"
                      }
                    ],
                    "id": 5468,
                    "name": "ForStatement",
                    "src": "1551:570:17"
                  }
                ],
                "id": 5469,
                "name": "Block",
                "src": "1541:586:17"
              }
            ],
            "id": 5470,
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
              "scope": 5517,
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
                      "scope": 5493,
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
                        "id": 5471,
                        "name": "ElementaryTypeName",
                        "src": "2165:6:17"
                      }
                    ],
                    "id": 5472,
                    "name": "VariableDeclaration",
                    "src": "2165:19:17"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "args",
                      "scope": 5493,
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
                        "id": 5473,
                        "name": "ElementaryTypeName",
                        "src": "2186:7:17"
                      }
                    ],
                    "id": 5474,
                    "name": "VariableDeclaration",
                    "src": "2186:12:17"
                  }
                ],
                "id": 5475,
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
                "id": 5476,
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
                                      "referencedDeclaration": 5356,
                                      "type": "mapping(string memory => mapping(bytes32 => bool))",
                                      "value": "functionCalls"
                                    },
                                    "id": 5477,
                                    "name": "Identifier",
                                    "src": "2231:13:17"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5472,
                                      "type": "string memory",
                                      "value": "functionName"
                                    },
                                    "id": 5478,
                                    "name": "Identifier",
                                    "src": "2245:12:17"
                                  }
                                ],
                                "id": 5480,
                                "name": "IndexAccess",
                                "src": "2231:27:17"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5474,
                                  "type": "bytes32",
                                  "value": "args"
                                },
                                "id": 5479,
                                "name": "Identifier",
                                "src": "2259:4:17"
                              }
                            ],
                            "id": 5481,
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
                            "id": 5482,
                            "name": "Literal",
                            "src": "2267:4:17"
                          }
                        ],
                        "id": 5483,
                        "name": "Assignment",
                        "src": "2231:40:17"
                      }
                    ],
                    "id": 5484,
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
                                      "referencedDeclaration": 5344,
                                      "type": "mapping(string memory => bytes32[] storage ref)",
                                      "value": "functionCallSignatures"
                                    },
                                    "id": 5485,
                                    "name": "Identifier",
                                    "src": "2281:22:17"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5472,
                                      "type": "string memory",
                                      "value": "functionName"
                                    },
                                    "id": 5486,
                                    "name": "Identifier",
                                    "src": "2304:12:17"
                                  }
                                ],
                                "id": 5487,
                                "name": "IndexAccess",
                                "src": "2281:36:17"
                              }
                            ],
                            "id": 5488,
                            "name": "MemberAccess",
                            "src": "2281:41:17"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5474,
                              "type": "bytes32",
                              "value": "args"
                            },
                            "id": 5489,
                            "name": "Identifier",
                            "src": "2323:4:17"
                          }
                        ],
                        "id": 5490,
                        "name": "FunctionCall",
                        "src": "2281:47:17"
                      }
                    ],
                    "id": 5491,
                    "name": "ExpressionStatement",
                    "src": "2281:47:17"
                  }
                ],
                "id": 5492,
                "name": "Block",
                "src": "2221:114:17"
              }
            ],
            "id": 5493,
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
              "scope": 5517,
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
                      "scope": 5509,
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
                        "id": 5494,
                        "name": "ElementaryTypeName",
                        "src": "2376:6:17"
                      }
                    ],
                    "id": 5495,
                    "name": "VariableDeclaration",
                    "src": "2376:19:17"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "args",
                      "scope": 5509,
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
                        "id": 5496,
                        "name": "ElementaryTypeName",
                        "src": "2397:7:17"
                      }
                    ],
                    "id": 5497,
                    "name": "VariableDeclaration",
                    "src": "2397:12:17"
                  }
                ],
                "id": 5498,
                "name": "ParameterList",
                "src": "2375:35:17"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "wasCalled",
                      "scope": 5509,
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
                        "id": 5499,
                        "name": "ElementaryTypeName",
                        "src": "2458:4:17"
                      }
                    ],
                    "id": 5500,
                    "name": "VariableDeclaration",
                    "src": "2458:14:17"
                  }
                ],
                "id": 5501,
                "name": "ParameterList",
                "src": "2457:16:17"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 5501
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
                                  "referencedDeclaration": 5356,
                                  "type": "mapping(string memory => mapping(bytes32 => bool))",
                                  "value": "functionCalls"
                                },
                                "id": 5502,
                                "name": "Identifier",
                                "src": "2495:13:17"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5495,
                                  "type": "string memory",
                                  "value": "functionName"
                                },
                                "id": 5503,
                                "name": "Identifier",
                                "src": "2509:12:17"
                              }
                            ],
                            "id": 5504,
                            "name": "IndexAccess",
                            "src": "2495:27:17"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5497,
                              "type": "bytes32",
                              "value": "args"
                            },
                            "id": 5505,
                            "name": "Identifier",
                            "src": "2523:4:17"
                          }
                        ],
                        "id": 5506,
                        "name": "IndexAccess",
                        "src": "2495:33:17"
                      }
                    ],
                    "id": 5507,
                    "name": "Return",
                    "src": "2488:40:17"
                  }
                ],
                "id": 5508,
                "name": "Block",
                "src": "2478:57:17"
              }
            ],
            "id": 5509,
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
              "scope": 5517,
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
                "id": 5510,
                "name": "ParameterList",
                "src": "2565:2:17"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "functionNames",
                      "scope": 5516,
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
                            "id": 5511,
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
                            "id": 5512,
                            "name": "Literal",
                            "src": "2593:2:17"
                          }
                        ],
                        "id": 5513,
                        "name": "ArrayTypeName",
                        "src": "2586:10:17"
                      }
                    ],
                    "id": 5514,
                    "name": "VariableDeclaration",
                    "src": "2586:24:17"
                  }
                ],
                "id": 5515,
                "name": "ParameterList",
                "src": "2585:26:17"
              }
            ],
            "id": 5516,
            "name": "FunctionDefinition",
            "src": "2541:71:17"
          }
        ],
        "id": 5517,
        "name": "ContractDefinition",
        "src": "610:2004:17"
      }
    ],
    "id": 5518,
    "name": "SourceUnit",
    "src": "584:2031:17"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-05-21T18:00:40.666Z"
}