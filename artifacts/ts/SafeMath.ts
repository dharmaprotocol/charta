export const SafeMath = 
{
  "contractName": "SafeMath",
  "abi": [],
  "bytecode": "0x60606040523415600e57600080fd5b603580601b6000396000f3006060604052600080fd00a165627a7a723058207e5c56aa9a56d72ec3a12fa314c290f06a91296db137205626beb89689b737a00029",
  "deployedBytecode": "0x6060604052600080fd00a165627a7a723058207e5c56aa9a56d72ec3a12fa314c290f06a91296db137205626beb89689b737a00029",
  "sourceMap": "117:1021:36:-;;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "117:1021:36:-;;;;;",
  "source": "pragma solidity ^0.4.18;\n\n\n/**\n * @title SafeMath\n * @dev Math operations with safety checks that throw on error\n */\nlibrary SafeMath {\n\n  /**\n  * @dev Multiplies two numbers, throws on overflow.\n  */\n  function mul(uint256 a, uint256 b) internal pure returns (uint256) {\n    if (a == 0) {\n      return 0;\n    }\n    uint256 c = a * b;\n    assert(c / a == b);\n    return c;\n  }\n\n  /**\n  * @dev Integer division of two numbers, truncating the quotient.\n  */\n  function div(uint256 a, uint256 b) internal pure returns (uint256) {\n    // assert(b > 0); // Solidity automatically throws when dividing by 0\n    uint256 c = a / b;\n    // assert(a == b * c + a % b); // There is no case in which this doesn't hold\n    return c;\n  }\n\n  /**\n  * @dev Subtracts two numbers, throws on overflow (i.e. if subtrahend is greater than minuend).\n  */\n  function sub(uint256 a, uint256 b) internal pure returns (uint256) {\n    assert(b <= a);\n    return a - b;\n  }\n\n  /**\n  * @dev Adds two numbers, throws on overflow.\n  */\n  function add(uint256 a, uint256 b) internal pure returns (uint256) {\n    uint256 c = a + b;\n    assert(c >= a);\n    return c;\n  }\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
  "ast": {
    "attributes": {
      "absolutePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
      "exportedSymbols": {
        "SafeMath": [
          13346
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
        "id": 13250,
        "name": "PragmaDirective",
        "src": "0:24:36"
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
            13346
          ],
          "name": "SafeMath",
          "scope": 13347
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
              "scope": 13346,
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
                      "scope": 13283,
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
                        "id": 13251,
                        "name": "ElementaryTypeName",
                        "src": "216:7:36"
                      }
                    ],
                    "id": 13252,
                    "name": "VariableDeclaration",
                    "src": "216:9:36"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 13283,
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
                        "id": 13253,
                        "name": "ElementaryTypeName",
                        "src": "227:7:36"
                      }
                    ],
                    "id": 13254,
                    "name": "VariableDeclaration",
                    "src": "227:9:36"
                  }
                ],
                "id": 13255,
                "name": "ParameterList",
                "src": "215:22:36"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 13283,
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
                        "id": 13256,
                        "name": "ElementaryTypeName",
                        "src": "261:7:36"
                      }
                    ],
                    "id": 13257,
                    "name": "VariableDeclaration",
                    "src": "261:7:36"
                  }
                ],
                "id": 13258,
                "name": "ParameterList",
                "src": "260:9:36"
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
                              "referencedDeclaration": 13252,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 13259,
                            "name": "Identifier",
                            "src": "280:1:36"
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
                            "id": 13260,
                            "name": "Literal",
                            "src": "285:1:36"
                          }
                        ],
                        "id": 13261,
                        "name": "BinaryOperation",
                        "src": "280:6:36"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "functionReturnParameters": 13258
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
                                "id": 13262,
                                "name": "Literal",
                                "src": "303:1:36"
                              }
                            ],
                            "id": 13263,
                            "name": "Return",
                            "src": "296:8:36"
                          }
                        ],
                        "id": 13264,
                        "name": "Block",
                        "src": "288:23:36"
                      }
                    ],
                    "id": 13265,
                    "name": "IfStatement",
                    "src": "276:35:36"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        13267
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "c",
                          "scope": 13283,
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
                            "id": 13266,
                            "name": "ElementaryTypeName",
                            "src": "316:7:36"
                          }
                        ],
                        "id": 13267,
                        "name": "VariableDeclaration",
                        "src": "316:9:36"
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
                              "referencedDeclaration": 13252,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 13268,
                            "name": "Identifier",
                            "src": "328:1:36"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 13254,
                              "type": "uint256",
                              "value": "b"
                            },
                            "id": 13269,
                            "name": "Identifier",
                            "src": "332:1:36"
                          }
                        ],
                        "id": 13270,
                        "name": "BinaryOperation",
                        "src": "328:5:36"
                      }
                    ],
                    "id": 13271,
                    "name": "VariableDeclarationStatement",
                    "src": "316:17:36"
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
                              "referencedDeclaration": 15075,
                              "type": "function (bool) pure",
                              "value": "assert"
                            },
                            "id": 13272,
                            "name": "Identifier",
                            "src": "339:6:36"
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
                                      "referencedDeclaration": 13267,
                                      "type": "uint256",
                                      "value": "c"
                                    },
                                    "id": 13273,
                                    "name": "Identifier",
                                    "src": "346:1:36"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 13252,
                                      "type": "uint256",
                                      "value": "a"
                                    },
                                    "id": 13274,
                                    "name": "Identifier",
                                    "src": "350:1:36"
                                  }
                                ],
                                "id": 13275,
                                "name": "BinaryOperation",
                                "src": "346:5:36"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 13254,
                                  "type": "uint256",
                                  "value": "b"
                                },
                                "id": 13276,
                                "name": "Identifier",
                                "src": "355:1:36"
                              }
                            ],
                            "id": 13277,
                            "name": "BinaryOperation",
                            "src": "346:10:36"
                          }
                        ],
                        "id": 13278,
                        "name": "FunctionCall",
                        "src": "339:18:36"
                      }
                    ],
                    "id": 13279,
                    "name": "ExpressionStatement",
                    "src": "339:18:36"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 13258
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 13267,
                          "type": "uint256",
                          "value": "c"
                        },
                        "id": 13280,
                        "name": "Identifier",
                        "src": "370:1:36"
                      }
                    ],
                    "id": 13281,
                    "name": "Return",
                    "src": "363:8:36"
                  }
                ],
                "id": 13282,
                "name": "Block",
                "src": "270:106:36"
              }
            ],
            "id": 13283,
            "name": "FunctionDefinition",
            "src": "203:173:36"
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
              "scope": 13346,
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
                      "scope": 13301,
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
                        "id": 13284,
                        "name": "ElementaryTypeName",
                        "src": "471:7:36"
                      }
                    ],
                    "id": 13285,
                    "name": "VariableDeclaration",
                    "src": "471:9:36"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 13301,
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
                        "id": 13286,
                        "name": "ElementaryTypeName",
                        "src": "482:7:36"
                      }
                    ],
                    "id": 13287,
                    "name": "VariableDeclaration",
                    "src": "482:9:36"
                  }
                ],
                "id": 13288,
                "name": "ParameterList",
                "src": "470:22:36"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 13301,
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
                        "id": 13289,
                        "name": "ElementaryTypeName",
                        "src": "516:7:36"
                      }
                    ],
                    "id": 13290,
                    "name": "VariableDeclaration",
                    "src": "516:7:36"
                  }
                ],
                "id": 13291,
                "name": "ParameterList",
                "src": "515:9:36"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        13293
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "c",
                          "scope": 13301,
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
                            "id": 13292,
                            "name": "ElementaryTypeName",
                            "src": "605:7:36"
                          }
                        ],
                        "id": 13293,
                        "name": "VariableDeclaration",
                        "src": "605:9:36"
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
                              "referencedDeclaration": 13285,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 13294,
                            "name": "Identifier",
                            "src": "617:1:36"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 13287,
                              "type": "uint256",
                              "value": "b"
                            },
                            "id": 13295,
                            "name": "Identifier",
                            "src": "621:1:36"
                          }
                        ],
                        "id": 13296,
                        "name": "BinaryOperation",
                        "src": "617:5:36"
                      }
                    ],
                    "id": 13297,
                    "name": "VariableDeclarationStatement",
                    "src": "605:17:36"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 13291
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 13293,
                          "type": "uint256",
                          "value": "c"
                        },
                        "id": 13298,
                        "name": "Identifier",
                        "src": "717:1:36"
                      }
                    ],
                    "id": 13299,
                    "name": "Return",
                    "src": "710:8:36"
                  }
                ],
                "id": 13300,
                "name": "Block",
                "src": "525:198:36"
              }
            ],
            "id": 13301,
            "name": "FunctionDefinition",
            "src": "458:265:36"
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
              "scope": 13346,
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
                      "scope": 13321,
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
                        "id": 13302,
                        "name": "ElementaryTypeName",
                        "src": "848:7:36"
                      }
                    ],
                    "id": 13303,
                    "name": "VariableDeclaration",
                    "src": "848:9:36"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 13321,
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
                        "id": 13304,
                        "name": "ElementaryTypeName",
                        "src": "859:7:36"
                      }
                    ],
                    "id": 13305,
                    "name": "VariableDeclaration",
                    "src": "859:9:36"
                  }
                ],
                "id": 13306,
                "name": "ParameterList",
                "src": "847:22:36"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 13321,
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
                        "id": 13307,
                        "name": "ElementaryTypeName",
                        "src": "893:7:36"
                      }
                    ],
                    "id": 13308,
                    "name": "VariableDeclaration",
                    "src": "893:7:36"
                  }
                ],
                "id": 13309,
                "name": "ParameterList",
                "src": "892:9:36"
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
                              "referencedDeclaration": 15075,
                              "type": "function (bool) pure",
                              "value": "assert"
                            },
                            "id": 13310,
                            "name": "Identifier",
                            "src": "908:6:36"
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
                                  "referencedDeclaration": 13305,
                                  "type": "uint256",
                                  "value": "b"
                                },
                                "id": 13311,
                                "name": "Identifier",
                                "src": "915:1:36"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 13303,
                                  "type": "uint256",
                                  "value": "a"
                                },
                                "id": 13312,
                                "name": "Identifier",
                                "src": "920:1:36"
                              }
                            ],
                            "id": 13313,
                            "name": "BinaryOperation",
                            "src": "915:6:36"
                          }
                        ],
                        "id": 13314,
                        "name": "FunctionCall",
                        "src": "908:14:36"
                      }
                    ],
                    "id": 13315,
                    "name": "ExpressionStatement",
                    "src": "908:14:36"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 13309
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
                              "referencedDeclaration": 13303,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 13316,
                            "name": "Identifier",
                            "src": "935:1:36"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 13305,
                              "type": "uint256",
                              "value": "b"
                            },
                            "id": 13317,
                            "name": "Identifier",
                            "src": "939:1:36"
                          }
                        ],
                        "id": 13318,
                        "name": "BinaryOperation",
                        "src": "935:5:36"
                      }
                    ],
                    "id": 13319,
                    "name": "Return",
                    "src": "928:12:36"
                  }
                ],
                "id": 13320,
                "name": "Block",
                "src": "902:43:36"
              }
            ],
            "id": 13321,
            "name": "FunctionDefinition",
            "src": "835:110:36"
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
              "scope": 13346,
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
                      "scope": 13345,
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
                        "id": 13322,
                        "name": "ElementaryTypeName",
                        "src": "1020:7:36"
                      }
                    ],
                    "id": 13323,
                    "name": "VariableDeclaration",
                    "src": "1020:9:36"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 13345,
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
                        "id": 13324,
                        "name": "ElementaryTypeName",
                        "src": "1031:7:36"
                      }
                    ],
                    "id": 13325,
                    "name": "VariableDeclaration",
                    "src": "1031:9:36"
                  }
                ],
                "id": 13326,
                "name": "ParameterList",
                "src": "1019:22:36"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 13345,
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
                        "id": 13327,
                        "name": "ElementaryTypeName",
                        "src": "1065:7:36"
                      }
                    ],
                    "id": 13328,
                    "name": "VariableDeclaration",
                    "src": "1065:7:36"
                  }
                ],
                "id": 13329,
                "name": "ParameterList",
                "src": "1064:9:36"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        13331
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "c",
                          "scope": 13345,
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
                            "id": 13330,
                            "name": "ElementaryTypeName",
                            "src": "1080:7:36"
                          }
                        ],
                        "id": 13331,
                        "name": "VariableDeclaration",
                        "src": "1080:9:36"
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
                              "referencedDeclaration": 13323,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 13332,
                            "name": "Identifier",
                            "src": "1092:1:36"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 13325,
                              "type": "uint256",
                              "value": "b"
                            },
                            "id": 13333,
                            "name": "Identifier",
                            "src": "1096:1:36"
                          }
                        ],
                        "id": 13334,
                        "name": "BinaryOperation",
                        "src": "1092:5:36"
                      }
                    ],
                    "id": 13335,
                    "name": "VariableDeclarationStatement",
                    "src": "1080:17:36"
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
                              "referencedDeclaration": 15075,
                              "type": "function (bool) pure",
                              "value": "assert"
                            },
                            "id": 13336,
                            "name": "Identifier",
                            "src": "1103:6:36"
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
                                  "referencedDeclaration": 13331,
                                  "type": "uint256",
                                  "value": "c"
                                },
                                "id": 13337,
                                "name": "Identifier",
                                "src": "1110:1:36"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 13323,
                                  "type": "uint256",
                                  "value": "a"
                                },
                                "id": 13338,
                                "name": "Identifier",
                                "src": "1115:1:36"
                              }
                            ],
                            "id": 13339,
                            "name": "BinaryOperation",
                            "src": "1110:6:36"
                          }
                        ],
                        "id": 13340,
                        "name": "FunctionCall",
                        "src": "1103:14:36"
                      }
                    ],
                    "id": 13341,
                    "name": "ExpressionStatement",
                    "src": "1103:14:36"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 13329
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 13331,
                          "type": "uint256",
                          "value": "c"
                        },
                        "id": 13342,
                        "name": "Identifier",
                        "src": "1130:1:36"
                      }
                    ],
                    "id": 13343,
                    "name": "Return",
                    "src": "1123:8:36"
                  }
                ],
                "id": 13344,
                "name": "Block",
                "src": "1074:62:36"
              }
            ],
            "id": 13345,
            "name": "FunctionDefinition",
            "src": "1007:129:36"
          }
        ],
        "id": 13346,
        "name": "ContractDefinition",
        "src": "117:1021:36"
      }
    ],
    "id": 13347,
    "name": "SourceUnit",
    "src": "0:1139:36"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-08-26T18:11:36.270Z"
}