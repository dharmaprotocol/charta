export const SafeMath = 
{
  "contractName": "SafeMath",
  "abi": [],
  "bytecode": "0x60606040523415600e57600080fd5b603580601b6000396000f3006060604052600080fd00a165627a7a723058207e5c56aa9a56d72ec3a12fa314c290f06a91296db137205626beb89689b737a00029",
  "deployedBytecode": "0x6060604052600080fd00a165627a7a723058207e5c56aa9a56d72ec3a12fa314c290f06a91296db137205626beb89689b737a00029",
  "sourceMap": "117:1021:30:-;;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "117:1021:30:-;;;;;",
  "source": "pragma solidity ^0.4.18;\n\n\n/**\n * @title SafeMath\n * @dev Math operations with safety checks that throw on error\n */\nlibrary SafeMath {\n\n  /**\n  * @dev Multiplies two numbers, throws on overflow.\n  */\n  function mul(uint256 a, uint256 b) internal pure returns (uint256) {\n    if (a == 0) {\n      return 0;\n    }\n    uint256 c = a * b;\n    assert(c / a == b);\n    return c;\n  }\n\n  /**\n  * @dev Integer division of two numbers, truncating the quotient.\n  */\n  function div(uint256 a, uint256 b) internal pure returns (uint256) {\n    // assert(b > 0); // Solidity automatically throws when dividing by 0\n    uint256 c = a / b;\n    // assert(a == b * c + a % b); // There is no case in which this doesn't hold\n    return c;\n  }\n\n  /**\n  * @dev Subtracts two numbers, throws on overflow (i.e. if subtrahend is greater than minuend).\n  */\n  function sub(uint256 a, uint256 b) internal pure returns (uint256) {\n    assert(b <= a);\n    return a - b;\n  }\n\n  /**\n  * @dev Adds two numbers, throws on overflow.\n  */\n  function add(uint256 a, uint256 b) internal pure returns (uint256) {\n    uint256 c = a + b;\n    assert(c >= a);\n    return c;\n  }\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
  "ast": {
    "attributes": {
      "absolutePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
      "exportedSymbols": {
        "SafeMath": [
          8336
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
        "id": 8240,
        "name": "PragmaDirective",
        "src": "0:24:30"
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
            8336
          ],
          "name": "SafeMath",
          "scope": 8337
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
              "scope": 8336,
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
                      "scope": 8273,
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
                        "id": 8241,
                        "name": "ElementaryTypeName",
                        "src": "216:7:30"
                      }
                    ],
                    "id": 8242,
                    "name": "VariableDeclaration",
                    "src": "216:9:30"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 8273,
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
                        "id": 8243,
                        "name": "ElementaryTypeName",
                        "src": "227:7:30"
                      }
                    ],
                    "id": 8244,
                    "name": "VariableDeclaration",
                    "src": "227:9:30"
                  }
                ],
                "id": 8245,
                "name": "ParameterList",
                "src": "215:22:30"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 8273,
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
                        "id": 8246,
                        "name": "ElementaryTypeName",
                        "src": "261:7:30"
                      }
                    ],
                    "id": 8247,
                    "name": "VariableDeclaration",
                    "src": "261:7:30"
                  }
                ],
                "id": 8248,
                "name": "ParameterList",
                "src": "260:9:30"
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
                              "referencedDeclaration": 8242,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 8249,
                            "name": "Identifier",
                            "src": "280:1:30"
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
                            "id": 8250,
                            "name": "Literal",
                            "src": "285:1:30"
                          }
                        ],
                        "id": 8251,
                        "name": "BinaryOperation",
                        "src": "280:6:30"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "functionReturnParameters": 8248
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
                                "id": 8252,
                                "name": "Literal",
                                "src": "303:1:30"
                              }
                            ],
                            "id": 8253,
                            "name": "Return",
                            "src": "296:8:30"
                          }
                        ],
                        "id": 8254,
                        "name": "Block",
                        "src": "288:23:30"
                      }
                    ],
                    "id": 8255,
                    "name": "IfStatement",
                    "src": "276:35:30"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        8257
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "c",
                          "scope": 8273,
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
                            "id": 8256,
                            "name": "ElementaryTypeName",
                            "src": "316:7:30"
                          }
                        ],
                        "id": 8257,
                        "name": "VariableDeclaration",
                        "src": "316:9:30"
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
                              "referencedDeclaration": 8242,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 8258,
                            "name": "Identifier",
                            "src": "328:1:30"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8244,
                              "type": "uint256",
                              "value": "b"
                            },
                            "id": 8259,
                            "name": "Identifier",
                            "src": "332:1:30"
                          }
                        ],
                        "id": 8260,
                        "name": "BinaryOperation",
                        "src": "328:5:30"
                      }
                    ],
                    "id": 8261,
                    "name": "VariableDeclarationStatement",
                    "src": "316:17:30"
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
                              "referencedDeclaration": 10065,
                              "type": "function (bool) pure",
                              "value": "assert"
                            },
                            "id": 8262,
                            "name": "Identifier",
                            "src": "339:6:30"
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
                                      "referencedDeclaration": 8257,
                                      "type": "uint256",
                                      "value": "c"
                                    },
                                    "id": 8263,
                                    "name": "Identifier",
                                    "src": "346:1:30"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 8242,
                                      "type": "uint256",
                                      "value": "a"
                                    },
                                    "id": 8264,
                                    "name": "Identifier",
                                    "src": "350:1:30"
                                  }
                                ],
                                "id": 8265,
                                "name": "BinaryOperation",
                                "src": "346:5:30"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8244,
                                  "type": "uint256",
                                  "value": "b"
                                },
                                "id": 8266,
                                "name": "Identifier",
                                "src": "355:1:30"
                              }
                            ],
                            "id": 8267,
                            "name": "BinaryOperation",
                            "src": "346:10:30"
                          }
                        ],
                        "id": 8268,
                        "name": "FunctionCall",
                        "src": "339:18:30"
                      }
                    ],
                    "id": 8269,
                    "name": "ExpressionStatement",
                    "src": "339:18:30"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 8248
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 8257,
                          "type": "uint256",
                          "value": "c"
                        },
                        "id": 8270,
                        "name": "Identifier",
                        "src": "370:1:30"
                      }
                    ],
                    "id": 8271,
                    "name": "Return",
                    "src": "363:8:30"
                  }
                ],
                "id": 8272,
                "name": "Block",
                "src": "270:106:30"
              }
            ],
            "id": 8273,
            "name": "FunctionDefinition",
            "src": "203:173:30"
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
              "scope": 8336,
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
                      "scope": 8291,
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
                        "id": 8274,
                        "name": "ElementaryTypeName",
                        "src": "471:7:30"
                      }
                    ],
                    "id": 8275,
                    "name": "VariableDeclaration",
                    "src": "471:9:30"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 8291,
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
                        "id": 8276,
                        "name": "ElementaryTypeName",
                        "src": "482:7:30"
                      }
                    ],
                    "id": 8277,
                    "name": "VariableDeclaration",
                    "src": "482:9:30"
                  }
                ],
                "id": 8278,
                "name": "ParameterList",
                "src": "470:22:30"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 8291,
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
                        "id": 8279,
                        "name": "ElementaryTypeName",
                        "src": "516:7:30"
                      }
                    ],
                    "id": 8280,
                    "name": "VariableDeclaration",
                    "src": "516:7:30"
                  }
                ],
                "id": 8281,
                "name": "ParameterList",
                "src": "515:9:30"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        8283
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "c",
                          "scope": 8291,
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
                            "id": 8282,
                            "name": "ElementaryTypeName",
                            "src": "605:7:30"
                          }
                        ],
                        "id": 8283,
                        "name": "VariableDeclaration",
                        "src": "605:9:30"
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
                              "referencedDeclaration": 8275,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 8284,
                            "name": "Identifier",
                            "src": "617:1:30"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8277,
                              "type": "uint256",
                              "value": "b"
                            },
                            "id": 8285,
                            "name": "Identifier",
                            "src": "621:1:30"
                          }
                        ],
                        "id": 8286,
                        "name": "BinaryOperation",
                        "src": "617:5:30"
                      }
                    ],
                    "id": 8287,
                    "name": "VariableDeclarationStatement",
                    "src": "605:17:30"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 8281
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 8283,
                          "type": "uint256",
                          "value": "c"
                        },
                        "id": 8288,
                        "name": "Identifier",
                        "src": "717:1:30"
                      }
                    ],
                    "id": 8289,
                    "name": "Return",
                    "src": "710:8:30"
                  }
                ],
                "id": 8290,
                "name": "Block",
                "src": "525:198:30"
              }
            ],
            "id": 8291,
            "name": "FunctionDefinition",
            "src": "458:265:30"
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
              "scope": 8336,
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
                      "scope": 8311,
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
                        "id": 8292,
                        "name": "ElementaryTypeName",
                        "src": "848:7:30"
                      }
                    ],
                    "id": 8293,
                    "name": "VariableDeclaration",
                    "src": "848:9:30"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 8311,
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
                        "id": 8294,
                        "name": "ElementaryTypeName",
                        "src": "859:7:30"
                      }
                    ],
                    "id": 8295,
                    "name": "VariableDeclaration",
                    "src": "859:9:30"
                  }
                ],
                "id": 8296,
                "name": "ParameterList",
                "src": "847:22:30"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 8311,
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
                        "id": 8297,
                        "name": "ElementaryTypeName",
                        "src": "893:7:30"
                      }
                    ],
                    "id": 8298,
                    "name": "VariableDeclaration",
                    "src": "893:7:30"
                  }
                ],
                "id": 8299,
                "name": "ParameterList",
                "src": "892:9:30"
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
                              "referencedDeclaration": 10065,
                              "type": "function (bool) pure",
                              "value": "assert"
                            },
                            "id": 8300,
                            "name": "Identifier",
                            "src": "908:6:30"
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
                                  "referencedDeclaration": 8295,
                                  "type": "uint256",
                                  "value": "b"
                                },
                                "id": 8301,
                                "name": "Identifier",
                                "src": "915:1:30"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8293,
                                  "type": "uint256",
                                  "value": "a"
                                },
                                "id": 8302,
                                "name": "Identifier",
                                "src": "920:1:30"
                              }
                            ],
                            "id": 8303,
                            "name": "BinaryOperation",
                            "src": "915:6:30"
                          }
                        ],
                        "id": 8304,
                        "name": "FunctionCall",
                        "src": "908:14:30"
                      }
                    ],
                    "id": 8305,
                    "name": "ExpressionStatement",
                    "src": "908:14:30"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 8299
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
                              "referencedDeclaration": 8293,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 8306,
                            "name": "Identifier",
                            "src": "935:1:30"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8295,
                              "type": "uint256",
                              "value": "b"
                            },
                            "id": 8307,
                            "name": "Identifier",
                            "src": "939:1:30"
                          }
                        ],
                        "id": 8308,
                        "name": "BinaryOperation",
                        "src": "935:5:30"
                      }
                    ],
                    "id": 8309,
                    "name": "Return",
                    "src": "928:12:30"
                  }
                ],
                "id": 8310,
                "name": "Block",
                "src": "902:43:30"
              }
            ],
            "id": 8311,
            "name": "FunctionDefinition",
            "src": "835:110:30"
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
              "scope": 8336,
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
                      "scope": 8335,
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
                        "id": 8312,
                        "name": "ElementaryTypeName",
                        "src": "1020:7:30"
                      }
                    ],
                    "id": 8313,
                    "name": "VariableDeclaration",
                    "src": "1020:9:30"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 8335,
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
                        "id": 8314,
                        "name": "ElementaryTypeName",
                        "src": "1031:7:30"
                      }
                    ],
                    "id": 8315,
                    "name": "VariableDeclaration",
                    "src": "1031:9:30"
                  }
                ],
                "id": 8316,
                "name": "ParameterList",
                "src": "1019:22:30"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 8335,
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
                        "id": 8317,
                        "name": "ElementaryTypeName",
                        "src": "1065:7:30"
                      }
                    ],
                    "id": 8318,
                    "name": "VariableDeclaration",
                    "src": "1065:7:30"
                  }
                ],
                "id": 8319,
                "name": "ParameterList",
                "src": "1064:9:30"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        8321
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "c",
                          "scope": 8335,
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
                            "id": 8320,
                            "name": "ElementaryTypeName",
                            "src": "1080:7:30"
                          }
                        ],
                        "id": 8321,
                        "name": "VariableDeclaration",
                        "src": "1080:9:30"
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
                              "referencedDeclaration": 8313,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 8322,
                            "name": "Identifier",
                            "src": "1092:1:30"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8315,
                              "type": "uint256",
                              "value": "b"
                            },
                            "id": 8323,
                            "name": "Identifier",
                            "src": "1096:1:30"
                          }
                        ],
                        "id": 8324,
                        "name": "BinaryOperation",
                        "src": "1092:5:30"
                      }
                    ],
                    "id": 8325,
                    "name": "VariableDeclarationStatement",
                    "src": "1080:17:30"
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
                              "referencedDeclaration": 10065,
                              "type": "function (bool) pure",
                              "value": "assert"
                            },
                            "id": 8326,
                            "name": "Identifier",
                            "src": "1103:6:30"
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
                                  "referencedDeclaration": 8321,
                                  "type": "uint256",
                                  "value": "c"
                                },
                                "id": 8327,
                                "name": "Identifier",
                                "src": "1110:1:30"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8313,
                                  "type": "uint256",
                                  "value": "a"
                                },
                                "id": 8328,
                                "name": "Identifier",
                                "src": "1115:1:30"
                              }
                            ],
                            "id": 8329,
                            "name": "BinaryOperation",
                            "src": "1110:6:30"
                          }
                        ],
                        "id": 8330,
                        "name": "FunctionCall",
                        "src": "1103:14:30"
                      }
                    ],
                    "id": 8331,
                    "name": "ExpressionStatement",
                    "src": "1103:14:30"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 8319
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 8321,
                          "type": "uint256",
                          "value": "c"
                        },
                        "id": 8332,
                        "name": "Identifier",
                        "src": "1130:1:30"
                      }
                    ],
                    "id": 8333,
                    "name": "Return",
                    "src": "1123:8:30"
                  }
                ],
                "id": 8334,
                "name": "Block",
                "src": "1074:62:30"
              }
            ],
            "id": 8335,
            "name": "FunctionDefinition",
            "src": "1007:129:30"
          }
        ],
        "id": 8336,
        "name": "ContractDefinition",
        "src": "117:1021:30"
      }
    ],
    "id": 8337,
    "name": "SourceUnit",
    "src": "0:1139:30"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-05-01T21:37:41.246Z"
}