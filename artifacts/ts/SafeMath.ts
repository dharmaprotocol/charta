export const SafeMath = 
{
  "contractName": "SafeMath",
  "abi": [],
  "bytecode": "0x60606040523415600e57600080fd5b603580601b6000396000f3006060604052600080fd00a165627a7a7230582085b98ec293e9438e310bbebacc08b922030089634f6ded62a1c4066506c8945a0029",
  "deployedBytecode": "0x6060604052600080fd00a165627a7a7230582085b98ec293e9438e310bbebacc08b922030089634f6ded62a1c4066506c8945a0029",
  "sourceMap": "117:1022:22:-;;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "117:1022:22:-;;;;;",
  "source": "pragma solidity ^0.4.18;\n\n\n/**\n * @title SafeMath\n * @dev Math operations with safety checks that throw on error\n */\nlibrary SafeMath {\n\n  /**\n  * @dev Multiplies two numbers, throws on overflow.\n  */\n  function mul(uint256 a, uint256 b) internal pure returns (uint256) {\n    if (a == 0) {\n      return 0;\n    }\n    uint256 c = a * b;\n    assert(c / a == b);\n    return c;\n  }\n\n  /**\n  * @dev Integer division of two numbers, truncating the quotient.\n  */\n  function div(uint256 a, uint256 b) internal pure returns (uint256) {\n    // assert(b > 0); // Solidity automatically throws when dividing by 0\n    uint256 c = a / b;\n    // assert(a == b * c + a % b); // There is no case in which this doesn't hold\n    return c;\n  }\n\n  /**\n  * @dev Substracts two numbers, throws on overflow (i.e. if subtrahend is greater than minuend).\n  */\n  function sub(uint256 a, uint256 b) internal pure returns (uint256) {\n    assert(b <= a);\n    return a - b;\n  }\n\n  /**\n  * @dev Adds two numbers, throws on overflow.\n  */\n  function add(uint256 a, uint256 b) internal pure returns (uint256) {\n    uint256 c = a + b;\n    assert(c >= a);\n    return c;\n  }\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
  "ast": {
    "attributes": {
      "absolutePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
      "exportedSymbols": {
        "SafeMath": [
          5332
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            "^",
            "0.4",
            ".18"
          ]
        },
        "id": 5236,
        "name": "PragmaDirective",
        "src": "0:24:22"
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
          "documentation": "@title SafeMath\n@dev Math operations with safety checks that throw on error",
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            5332
          ],
          "name": "SafeMath",
          "scope": 5333
        },
        "children": [
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "mul",
              "payable": false,
              "scope": 5332,
              "stateMutability": "pure",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "a",
                      "scope": 5269,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 5237,
                        "name": "ElementaryTypeName",
                        "src": "216:7:22"
                      }
                    ],
                    "id": 5238,
                    "name": "VariableDeclaration",
                    "src": "216:9:22"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 5269,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 5239,
                        "name": "ElementaryTypeName",
                        "src": "227:7:22"
                      }
                    ],
                    "id": 5240,
                    "name": "VariableDeclaration",
                    "src": "227:9:22"
                  }
                ],
                "id": 5241,
                "name": "ParameterList",
                "src": "215:22:22"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 5269,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 5242,
                        "name": "ElementaryTypeName",
                        "src": "261:7:22"
                      }
                    ],
                    "id": 5243,
                    "name": "VariableDeclaration",
                    "src": "261:7:22"
                  }
                ],
                "id": 5244,
                "name": "ParameterList",
                "src": "260:9:22"
              },
              {
                "children": [
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
                          "operator": "==",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5238,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 5245,
                            "name": "Identifier",
                            "src": "280:1:22"
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
                            "id": 5246,
                            "name": "Literal",
                            "src": "285:1:22"
                          }
                        ],
                        "id": 5247,
                        "name": "BinaryOperation",
                        "src": "280:6:22"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "functionReturnParameters": 5244
                            },
                            "children": [
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
                                "id": 5248,
                                "name": "Literal",
                                "src": "303:1:22"
                              }
                            ],
                            "id": 5249,
                            "name": "Return",
                            "src": "296:8:22"
                          }
                        ],
                        "id": 5250,
                        "name": "Block",
                        "src": "288:23:22"
                      }
                    ],
                    "id": 5251,
                    "name": "IfStatement",
                    "src": "276:35:22"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        5253
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "c",
                          "scope": 5269,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint256",
                              "type": "uint256"
                            },
                            "id": 5252,
                            "name": "ElementaryTypeName",
                            "src": "316:7:22"
                          }
                        ],
                        "id": 5253,
                        "name": "VariableDeclaration",
                        "src": "316:9:22"
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
                          "operator": "*",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5238,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 5254,
                            "name": "Identifier",
                            "src": "328:1:22"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5240,
                              "type": "uint256",
                              "value": "b"
                            },
                            "id": 5255,
                            "name": "Identifier",
                            "src": "332:1:22"
                          }
                        ],
                        "id": 5256,
                        "name": "BinaryOperation",
                        "src": "328:5:22"
                      }
                    ],
                    "id": 5257,
                    "name": "VariableDeclarationStatement",
                    "src": "316:17:22"
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
                              "referencedDeclaration": 5466,
                              "type": "function (bool) pure",
                              "value": "assert"
                            },
                            "id": 5258,
                            "name": "Identifier",
                            "src": "339:6:22"
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
                              "operator": "==",
                              "type": "bool"
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
                                  "operator": "/",
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5253,
                                      "type": "uint256",
                                      "value": "c"
                                    },
                                    "id": 5259,
                                    "name": "Identifier",
                                    "src": "346:1:22"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5238,
                                      "type": "uint256",
                                      "value": "a"
                                    },
                                    "id": 5260,
                                    "name": "Identifier",
                                    "src": "350:1:22"
                                  }
                                ],
                                "id": 5261,
                                "name": "BinaryOperation",
                                "src": "346:5:22"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5240,
                                  "type": "uint256",
                                  "value": "b"
                                },
                                "id": 5262,
                                "name": "Identifier",
                                "src": "355:1:22"
                              }
                            ],
                            "id": 5263,
                            "name": "BinaryOperation",
                            "src": "346:10:22"
                          }
                        ],
                        "id": 5264,
                        "name": "FunctionCall",
                        "src": "339:18:22"
                      }
                    ],
                    "id": 5265,
                    "name": "ExpressionStatement",
                    "src": "339:18:22"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 5244
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 5253,
                          "type": "uint256",
                          "value": "c"
                        },
                        "id": 5266,
                        "name": "Identifier",
                        "src": "370:1:22"
                      }
                    ],
                    "id": 5267,
                    "name": "Return",
                    "src": "363:8:22"
                  }
                ],
                "id": 5268,
                "name": "Block",
                "src": "270:106:22"
              }
            ],
            "id": 5269,
            "name": "FunctionDefinition",
            "src": "203:173:22"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "div",
              "payable": false,
              "scope": 5332,
              "stateMutability": "pure",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "a",
                      "scope": 5287,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 5270,
                        "name": "ElementaryTypeName",
                        "src": "471:7:22"
                      }
                    ],
                    "id": 5271,
                    "name": "VariableDeclaration",
                    "src": "471:9:22"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 5287,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 5272,
                        "name": "ElementaryTypeName",
                        "src": "482:7:22"
                      }
                    ],
                    "id": 5273,
                    "name": "VariableDeclaration",
                    "src": "482:9:22"
                  }
                ],
                "id": 5274,
                "name": "ParameterList",
                "src": "470:22:22"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 5287,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 5275,
                        "name": "ElementaryTypeName",
                        "src": "516:7:22"
                      }
                    ],
                    "id": 5276,
                    "name": "VariableDeclaration",
                    "src": "516:7:22"
                  }
                ],
                "id": 5277,
                "name": "ParameterList",
                "src": "515:9:22"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        5279
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "c",
                          "scope": 5287,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint256",
                              "type": "uint256"
                            },
                            "id": 5278,
                            "name": "ElementaryTypeName",
                            "src": "605:7:22"
                          }
                        ],
                        "id": 5279,
                        "name": "VariableDeclaration",
                        "src": "605:9:22"
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
                          "operator": "/",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5271,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 5280,
                            "name": "Identifier",
                            "src": "617:1:22"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5273,
                              "type": "uint256",
                              "value": "b"
                            },
                            "id": 5281,
                            "name": "Identifier",
                            "src": "621:1:22"
                          }
                        ],
                        "id": 5282,
                        "name": "BinaryOperation",
                        "src": "617:5:22"
                      }
                    ],
                    "id": 5283,
                    "name": "VariableDeclarationStatement",
                    "src": "605:17:22"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 5277
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 5279,
                          "type": "uint256",
                          "value": "c"
                        },
                        "id": 5284,
                        "name": "Identifier",
                        "src": "717:1:22"
                      }
                    ],
                    "id": 5285,
                    "name": "Return",
                    "src": "710:8:22"
                  }
                ],
                "id": 5286,
                "name": "Block",
                "src": "525:198:22"
              }
            ],
            "id": 5287,
            "name": "FunctionDefinition",
            "src": "458:265:22"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "sub",
              "payable": false,
              "scope": 5332,
              "stateMutability": "pure",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "a",
                      "scope": 5307,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 5288,
                        "name": "ElementaryTypeName",
                        "src": "849:7:22"
                      }
                    ],
                    "id": 5289,
                    "name": "VariableDeclaration",
                    "src": "849:9:22"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 5307,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 5290,
                        "name": "ElementaryTypeName",
                        "src": "860:7:22"
                      }
                    ],
                    "id": 5291,
                    "name": "VariableDeclaration",
                    "src": "860:9:22"
                  }
                ],
                "id": 5292,
                "name": "ParameterList",
                "src": "848:22:22"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 5307,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 5293,
                        "name": "ElementaryTypeName",
                        "src": "894:7:22"
                      }
                    ],
                    "id": 5294,
                    "name": "VariableDeclaration",
                    "src": "894:7:22"
                  }
                ],
                "id": 5295,
                "name": "ParameterList",
                "src": "893:9:22"
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
                              "referencedDeclaration": 5466,
                              "type": "function (bool) pure",
                              "value": "assert"
                            },
                            "id": 5296,
                            "name": "Identifier",
                            "src": "909:6:22"
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
                              "operator": "<=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5291,
                                  "type": "uint256",
                                  "value": "b"
                                },
                                "id": 5297,
                                "name": "Identifier",
                                "src": "916:1:22"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5289,
                                  "type": "uint256",
                                  "value": "a"
                                },
                                "id": 5298,
                                "name": "Identifier",
                                "src": "921:1:22"
                              }
                            ],
                            "id": 5299,
                            "name": "BinaryOperation",
                            "src": "916:6:22"
                          }
                        ],
                        "id": 5300,
                        "name": "FunctionCall",
                        "src": "909:14:22"
                      }
                    ],
                    "id": 5301,
                    "name": "ExpressionStatement",
                    "src": "909:14:22"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 5295
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
                          "operator": "-",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5289,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 5302,
                            "name": "Identifier",
                            "src": "936:1:22"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5291,
                              "type": "uint256",
                              "value": "b"
                            },
                            "id": 5303,
                            "name": "Identifier",
                            "src": "940:1:22"
                          }
                        ],
                        "id": 5304,
                        "name": "BinaryOperation",
                        "src": "936:5:22"
                      }
                    ],
                    "id": 5305,
                    "name": "Return",
                    "src": "929:12:22"
                  }
                ],
                "id": 5306,
                "name": "Block",
                "src": "903:43:22"
              }
            ],
            "id": 5307,
            "name": "FunctionDefinition",
            "src": "836:110:22"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "add",
              "payable": false,
              "scope": 5332,
              "stateMutability": "pure",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "a",
                      "scope": 5331,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 5308,
                        "name": "ElementaryTypeName",
                        "src": "1021:7:22"
                      }
                    ],
                    "id": 5309,
                    "name": "VariableDeclaration",
                    "src": "1021:9:22"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 5331,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 5310,
                        "name": "ElementaryTypeName",
                        "src": "1032:7:22"
                      }
                    ],
                    "id": 5311,
                    "name": "VariableDeclaration",
                    "src": "1032:9:22"
                  }
                ],
                "id": 5312,
                "name": "ParameterList",
                "src": "1020:22:22"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 5331,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 5313,
                        "name": "ElementaryTypeName",
                        "src": "1066:7:22"
                      }
                    ],
                    "id": 5314,
                    "name": "VariableDeclaration",
                    "src": "1066:7:22"
                  }
                ],
                "id": 5315,
                "name": "ParameterList",
                "src": "1065:9:22"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        5317
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "c",
                          "scope": 5331,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint256",
                              "type": "uint256"
                            },
                            "id": 5316,
                            "name": "ElementaryTypeName",
                            "src": "1081:7:22"
                          }
                        ],
                        "id": 5317,
                        "name": "VariableDeclaration",
                        "src": "1081:9:22"
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
                          "operator": "+",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5309,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 5318,
                            "name": "Identifier",
                            "src": "1093:1:22"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5311,
                              "type": "uint256",
                              "value": "b"
                            },
                            "id": 5319,
                            "name": "Identifier",
                            "src": "1097:1:22"
                          }
                        ],
                        "id": 5320,
                        "name": "BinaryOperation",
                        "src": "1093:5:22"
                      }
                    ],
                    "id": 5321,
                    "name": "VariableDeclarationStatement",
                    "src": "1081:17:22"
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
                              "referencedDeclaration": 5466,
                              "type": "function (bool) pure",
                              "value": "assert"
                            },
                            "id": 5322,
                            "name": "Identifier",
                            "src": "1104:6:22"
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
                              "operator": ">=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5317,
                                  "type": "uint256",
                                  "value": "c"
                                },
                                "id": 5323,
                                "name": "Identifier",
                                "src": "1111:1:22"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5309,
                                  "type": "uint256",
                                  "value": "a"
                                },
                                "id": 5324,
                                "name": "Identifier",
                                "src": "1116:1:22"
                              }
                            ],
                            "id": 5325,
                            "name": "BinaryOperation",
                            "src": "1111:6:22"
                          }
                        ],
                        "id": 5326,
                        "name": "FunctionCall",
                        "src": "1104:14:22"
                      }
                    ],
                    "id": 5327,
                    "name": "ExpressionStatement",
                    "src": "1104:14:22"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 5315
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 5317,
                          "type": "uint256",
                          "value": "c"
                        },
                        "id": 5328,
                        "name": "Identifier",
                        "src": "1131:1:22"
                      }
                    ],
                    "id": 5329,
                    "name": "Return",
                    "src": "1124:8:22"
                  }
                ],
                "id": 5330,
                "name": "Block",
                "src": "1075:62:22"
              }
            ],
            "id": 5331,
            "name": "FunctionDefinition",
            "src": "1008:129:22"
          }
        ],
        "id": 5332,
        "name": "ContractDefinition",
        "src": "117:1022:22"
      }
    ],
    "id": 5333,
    "name": "SourceUnit",
    "src": "0:1140:22"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-03-19T22:46:09.680Z"
}