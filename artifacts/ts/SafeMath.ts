export const SafeMath = 
{
  "contractName": "SafeMath",
  "abi": [],
  "bytecode": "0x60606040523415600e57600080fd5b603580601b6000396000f3006060604052600080fd00a165627a7a723058207e5c56aa9a56d72ec3a12fa314c290f06a91296db137205626beb89689b737a00029",
  "deployedBytecode": "0x6060604052600080fd00a165627a7a723058207e5c56aa9a56d72ec3a12fa314c290f06a91296db137205626beb89689b737a00029",
  "sourceMap": "117:1021:31:-;;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "117:1021:31:-;;;;;",
  "source": "pragma solidity ^0.4.18;\n\n\n/**\n * @title SafeMath\n * @dev Math operations with safety checks that throw on error\n */\nlibrary SafeMath {\n\n  /**\n  * @dev Multiplies two numbers, throws on overflow.\n  */\n  function mul(uint256 a, uint256 b) internal pure returns (uint256) {\n    if (a == 0) {\n      return 0;\n    }\n    uint256 c = a * b;\n    assert(c / a == b);\n    return c;\n  }\n\n  /**\n  * @dev Integer division of two numbers, truncating the quotient.\n  */\n  function div(uint256 a, uint256 b) internal pure returns (uint256) {\n    // assert(b > 0); // Solidity automatically throws when dividing by 0\n    uint256 c = a / b;\n    // assert(a == b * c + a % b); // There is no case in which this doesn't hold\n    return c;\n  }\n\n  /**\n  * @dev Subtracts two numbers, throws on overflow (i.e. if subtrahend is greater than minuend).\n  */\n  function sub(uint256 a, uint256 b) internal pure returns (uint256) {\n    assert(b <= a);\n    return a - b;\n  }\n\n  /**\n  * @dev Adds two numbers, throws on overflow.\n  */\n  function add(uint256 a, uint256 b) internal pure returns (uint256) {\n    uint256 c = a + b;\n    assert(c >= a);\n    return c;\n  }\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
  "ast": {
    "attributes": {
      "absolutePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
      "exportedSymbols": {
        "SafeMath": [
          8735
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
        "id": 8639,
        "name": "PragmaDirective",
        "src": "0:24:31"
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
            8735
          ],
          "name": "SafeMath",
          "scope": 8736
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
              "scope": 8735,
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
                      "scope": 8672,
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
                        "id": 8640,
                        "name": "ElementaryTypeName",
                        "src": "216:7:31"
                      }
                    ],
                    "id": 8641,
                    "name": "VariableDeclaration",
                    "src": "216:9:31"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 8672,
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
                        "id": 8642,
                        "name": "ElementaryTypeName",
                        "src": "227:7:31"
                      }
                    ],
                    "id": 8643,
                    "name": "VariableDeclaration",
                    "src": "227:9:31"
                  }
                ],
                "id": 8644,
                "name": "ParameterList",
                "src": "215:22:31"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 8672,
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
                        "id": 8645,
                        "name": "ElementaryTypeName",
                        "src": "261:7:31"
                      }
                    ],
                    "id": 8646,
                    "name": "VariableDeclaration",
                    "src": "261:7:31"
                  }
                ],
                "id": 8647,
                "name": "ParameterList",
                "src": "260:9:31"
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
                              "referencedDeclaration": 8641,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 8648,
                            "name": "Identifier",
                            "src": "280:1:31"
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
                            "id": 8649,
                            "name": "Literal",
                            "src": "285:1:31"
                          }
                        ],
                        "id": 8650,
                        "name": "BinaryOperation",
                        "src": "280:6:31"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "functionReturnParameters": 8647
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
                                "id": 8651,
                                "name": "Literal",
                                "src": "303:1:31"
                              }
                            ],
                            "id": 8652,
                            "name": "Return",
                            "src": "296:8:31"
                          }
                        ],
                        "id": 8653,
                        "name": "Block",
                        "src": "288:23:31"
                      }
                    ],
                    "id": 8654,
                    "name": "IfStatement",
                    "src": "276:35:31"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        8656
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "c",
                          "scope": 8672,
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
                            "id": 8655,
                            "name": "ElementaryTypeName",
                            "src": "316:7:31"
                          }
                        ],
                        "id": 8656,
                        "name": "VariableDeclaration",
                        "src": "316:9:31"
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
                              "referencedDeclaration": 8641,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 8657,
                            "name": "Identifier",
                            "src": "328:1:31"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8643,
                              "type": "uint256",
                              "value": "b"
                            },
                            "id": 8658,
                            "name": "Identifier",
                            "src": "332:1:31"
                          }
                        ],
                        "id": 8659,
                        "name": "BinaryOperation",
                        "src": "328:5:31"
                      }
                    ],
                    "id": 8660,
                    "name": "VariableDeclarationStatement",
                    "src": "316:17:31"
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
                              "referencedDeclaration": 10464,
                              "type": "function (bool) pure",
                              "value": "assert"
                            },
                            "id": 8661,
                            "name": "Identifier",
                            "src": "339:6:31"
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
                                      "referencedDeclaration": 8656,
                                      "type": "uint256",
                                      "value": "c"
                                    },
                                    "id": 8662,
                                    "name": "Identifier",
                                    "src": "346:1:31"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 8641,
                                      "type": "uint256",
                                      "value": "a"
                                    },
                                    "id": 8663,
                                    "name": "Identifier",
                                    "src": "350:1:31"
                                  }
                                ],
                                "id": 8664,
                                "name": "BinaryOperation",
                                "src": "346:5:31"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8643,
                                  "type": "uint256",
                                  "value": "b"
                                },
                                "id": 8665,
                                "name": "Identifier",
                                "src": "355:1:31"
                              }
                            ],
                            "id": 8666,
                            "name": "BinaryOperation",
                            "src": "346:10:31"
                          }
                        ],
                        "id": 8667,
                        "name": "FunctionCall",
                        "src": "339:18:31"
                      }
                    ],
                    "id": 8668,
                    "name": "ExpressionStatement",
                    "src": "339:18:31"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 8647
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 8656,
                          "type": "uint256",
                          "value": "c"
                        },
                        "id": 8669,
                        "name": "Identifier",
                        "src": "370:1:31"
                      }
                    ],
                    "id": 8670,
                    "name": "Return",
                    "src": "363:8:31"
                  }
                ],
                "id": 8671,
                "name": "Block",
                "src": "270:106:31"
              }
            ],
            "id": 8672,
            "name": "FunctionDefinition",
            "src": "203:173:31"
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
              "scope": 8735,
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
                      "scope": 8690,
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
                        "id": 8673,
                        "name": "ElementaryTypeName",
                        "src": "471:7:31"
                      }
                    ],
                    "id": 8674,
                    "name": "VariableDeclaration",
                    "src": "471:9:31"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 8690,
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
                        "id": 8675,
                        "name": "ElementaryTypeName",
                        "src": "482:7:31"
                      }
                    ],
                    "id": 8676,
                    "name": "VariableDeclaration",
                    "src": "482:9:31"
                  }
                ],
                "id": 8677,
                "name": "ParameterList",
                "src": "470:22:31"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 8690,
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
                        "id": 8678,
                        "name": "ElementaryTypeName",
                        "src": "516:7:31"
                      }
                    ],
                    "id": 8679,
                    "name": "VariableDeclaration",
                    "src": "516:7:31"
                  }
                ],
                "id": 8680,
                "name": "ParameterList",
                "src": "515:9:31"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        8682
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "c",
                          "scope": 8690,
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
                            "id": 8681,
                            "name": "ElementaryTypeName",
                            "src": "605:7:31"
                          }
                        ],
                        "id": 8682,
                        "name": "VariableDeclaration",
                        "src": "605:9:31"
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
                              "referencedDeclaration": 8674,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 8683,
                            "name": "Identifier",
                            "src": "617:1:31"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8676,
                              "type": "uint256",
                              "value": "b"
                            },
                            "id": 8684,
                            "name": "Identifier",
                            "src": "621:1:31"
                          }
                        ],
                        "id": 8685,
                        "name": "BinaryOperation",
                        "src": "617:5:31"
                      }
                    ],
                    "id": 8686,
                    "name": "VariableDeclarationStatement",
                    "src": "605:17:31"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 8680
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 8682,
                          "type": "uint256",
                          "value": "c"
                        },
                        "id": 8687,
                        "name": "Identifier",
                        "src": "717:1:31"
                      }
                    ],
                    "id": 8688,
                    "name": "Return",
                    "src": "710:8:31"
                  }
                ],
                "id": 8689,
                "name": "Block",
                "src": "525:198:31"
              }
            ],
            "id": 8690,
            "name": "FunctionDefinition",
            "src": "458:265:31"
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
              "scope": 8735,
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
                      "scope": 8710,
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
                        "id": 8691,
                        "name": "ElementaryTypeName",
                        "src": "848:7:31"
                      }
                    ],
                    "id": 8692,
                    "name": "VariableDeclaration",
                    "src": "848:9:31"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 8710,
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
                        "id": 8693,
                        "name": "ElementaryTypeName",
                        "src": "859:7:31"
                      }
                    ],
                    "id": 8694,
                    "name": "VariableDeclaration",
                    "src": "859:9:31"
                  }
                ],
                "id": 8695,
                "name": "ParameterList",
                "src": "847:22:31"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 8710,
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
                        "id": 8696,
                        "name": "ElementaryTypeName",
                        "src": "893:7:31"
                      }
                    ],
                    "id": 8697,
                    "name": "VariableDeclaration",
                    "src": "893:7:31"
                  }
                ],
                "id": 8698,
                "name": "ParameterList",
                "src": "892:9:31"
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
                              "referencedDeclaration": 10464,
                              "type": "function (bool) pure",
                              "value": "assert"
                            },
                            "id": 8699,
                            "name": "Identifier",
                            "src": "908:6:31"
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
                                  "referencedDeclaration": 8694,
                                  "type": "uint256",
                                  "value": "b"
                                },
                                "id": 8700,
                                "name": "Identifier",
                                "src": "915:1:31"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8692,
                                  "type": "uint256",
                                  "value": "a"
                                },
                                "id": 8701,
                                "name": "Identifier",
                                "src": "920:1:31"
                              }
                            ],
                            "id": 8702,
                            "name": "BinaryOperation",
                            "src": "915:6:31"
                          }
                        ],
                        "id": 8703,
                        "name": "FunctionCall",
                        "src": "908:14:31"
                      }
                    ],
                    "id": 8704,
                    "name": "ExpressionStatement",
                    "src": "908:14:31"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 8698
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
                              "referencedDeclaration": 8692,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 8705,
                            "name": "Identifier",
                            "src": "935:1:31"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8694,
                              "type": "uint256",
                              "value": "b"
                            },
                            "id": 8706,
                            "name": "Identifier",
                            "src": "939:1:31"
                          }
                        ],
                        "id": 8707,
                        "name": "BinaryOperation",
                        "src": "935:5:31"
                      }
                    ],
                    "id": 8708,
                    "name": "Return",
                    "src": "928:12:31"
                  }
                ],
                "id": 8709,
                "name": "Block",
                "src": "902:43:31"
              }
            ],
            "id": 8710,
            "name": "FunctionDefinition",
            "src": "835:110:31"
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
              "scope": 8735,
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
                      "scope": 8734,
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
                        "id": 8711,
                        "name": "ElementaryTypeName",
                        "src": "1020:7:31"
                      }
                    ],
                    "id": 8712,
                    "name": "VariableDeclaration",
                    "src": "1020:9:31"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 8734,
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
                        "id": 8713,
                        "name": "ElementaryTypeName",
                        "src": "1031:7:31"
                      }
                    ],
                    "id": 8714,
                    "name": "VariableDeclaration",
                    "src": "1031:9:31"
                  }
                ],
                "id": 8715,
                "name": "ParameterList",
                "src": "1019:22:31"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 8734,
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
                        "id": 8716,
                        "name": "ElementaryTypeName",
                        "src": "1065:7:31"
                      }
                    ],
                    "id": 8717,
                    "name": "VariableDeclaration",
                    "src": "1065:7:31"
                  }
                ],
                "id": 8718,
                "name": "ParameterList",
                "src": "1064:9:31"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        8720
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "c",
                          "scope": 8734,
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
                            "id": 8719,
                            "name": "ElementaryTypeName",
                            "src": "1080:7:31"
                          }
                        ],
                        "id": 8720,
                        "name": "VariableDeclaration",
                        "src": "1080:9:31"
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
                              "referencedDeclaration": 8712,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 8721,
                            "name": "Identifier",
                            "src": "1092:1:31"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8714,
                              "type": "uint256",
                              "value": "b"
                            },
                            "id": 8722,
                            "name": "Identifier",
                            "src": "1096:1:31"
                          }
                        ],
                        "id": 8723,
                        "name": "BinaryOperation",
                        "src": "1092:5:31"
                      }
                    ],
                    "id": 8724,
                    "name": "VariableDeclarationStatement",
                    "src": "1080:17:31"
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
                              "referencedDeclaration": 10464,
                              "type": "function (bool) pure",
                              "value": "assert"
                            },
                            "id": 8725,
                            "name": "Identifier",
                            "src": "1103:6:31"
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
                                  "referencedDeclaration": 8720,
                                  "type": "uint256",
                                  "value": "c"
                                },
                                "id": 8726,
                                "name": "Identifier",
                                "src": "1110:1:31"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8712,
                                  "type": "uint256",
                                  "value": "a"
                                },
                                "id": 8727,
                                "name": "Identifier",
                                "src": "1115:1:31"
                              }
                            ],
                            "id": 8728,
                            "name": "BinaryOperation",
                            "src": "1110:6:31"
                          }
                        ],
                        "id": 8729,
                        "name": "FunctionCall",
                        "src": "1103:14:31"
                      }
                    ],
                    "id": 8730,
                    "name": "ExpressionStatement",
                    "src": "1103:14:31"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 8718
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 8720,
                          "type": "uint256",
                          "value": "c"
                        },
                        "id": 8731,
                        "name": "Identifier",
                        "src": "1130:1:31"
                      }
                    ],
                    "id": 8732,
                    "name": "Return",
                    "src": "1123:8:31"
                  }
                ],
                "id": 8733,
                "name": "Block",
                "src": "1074:62:31"
              }
            ],
            "id": 8734,
            "name": "FunctionDefinition",
            "src": "1007:129:31"
          }
        ],
        "id": 8735,
        "name": "ContractDefinition",
        "src": "117:1021:31"
      }
    ],
    "id": 8736,
    "name": "SourceUnit",
    "src": "0:1139:31"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-05-22T05:49:38.832Z"
}