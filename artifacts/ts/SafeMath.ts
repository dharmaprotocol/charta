export const SafeMath = 
{
  "contractName": "SafeMath",
  "abi": [],
  "bytecode": "0x60606040523415600e57600080fd5b603580601b6000396000f3006060604052600080fd00a165627a7a723058207e5c56aa9a56d72ec3a12fa314c290f06a91296db137205626beb89689b737a00029",
  "deployedBytecode": "0x6060604052600080fd00a165627a7a723058207e5c56aa9a56d72ec3a12fa314c290f06a91296db137205626beb89689b737a00029",
  "sourceMap": "117:1021:35:-;;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "117:1021:35:-;;;;;",
  "source": "pragma solidity ^0.4.18;\n\n\n/**\n * @title SafeMath\n * @dev Math operations with safety checks that throw on error\n */\nlibrary SafeMath {\n\n  /**\n  * @dev Multiplies two numbers, throws on overflow.\n  */\n  function mul(uint256 a, uint256 b) internal pure returns (uint256) {\n    if (a == 0) {\n      return 0;\n    }\n    uint256 c = a * b;\n    assert(c / a == b);\n    return c;\n  }\n\n  /**\n  * @dev Integer division of two numbers, truncating the quotient.\n  */\n  function div(uint256 a, uint256 b) internal pure returns (uint256) {\n    // assert(b > 0); // Solidity automatically throws when dividing by 0\n    uint256 c = a / b;\n    // assert(a == b * c + a % b); // There is no case in which this doesn't hold\n    return c;\n  }\n\n  /**\n  * @dev Subtracts two numbers, throws on overflow (i.e. if subtrahend is greater than minuend).\n  */\n  function sub(uint256 a, uint256 b) internal pure returns (uint256) {\n    assert(b <= a);\n    return a - b;\n  }\n\n  /**\n  * @dev Adds two numbers, throws on overflow.\n  */\n  function add(uint256 a, uint256 b) internal pure returns (uint256) {\n    uint256 c = a + b;\n    assert(c >= a);\n    return c;\n  }\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
  "ast": {
    "attributes": {
      "absolutePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
      "exportedSymbols": {
        "SafeMath": [
          9785
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
        "id": 9689,
        "name": "PragmaDirective",
        "src": "0:24:35"
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
            9785
          ],
          "name": "SafeMath",
          "scope": 9786
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
              "scope": 9785,
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
                      "scope": 9722,
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
                        "id": 9690,
                        "name": "ElementaryTypeName",
                        "src": "216:7:35"
                      }
                    ],
                    "id": 9691,
                    "name": "VariableDeclaration",
                    "src": "216:9:35"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 9722,
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
                        "id": 9692,
                        "name": "ElementaryTypeName",
                        "src": "227:7:35"
                      }
                    ],
                    "id": 9693,
                    "name": "VariableDeclaration",
                    "src": "227:9:35"
                  }
                ],
                "id": 9694,
                "name": "ParameterList",
                "src": "215:22:35"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 9722,
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
                        "id": 9695,
                        "name": "ElementaryTypeName",
                        "src": "261:7:35"
                      }
                    ],
                    "id": 9696,
                    "name": "VariableDeclaration",
                    "src": "261:7:35"
                  }
                ],
                "id": 9697,
                "name": "ParameterList",
                "src": "260:9:35"
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
                              "referencedDeclaration": 9691,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 9698,
                            "name": "Identifier",
                            "src": "280:1:35"
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
                            "id": 9699,
                            "name": "Literal",
                            "src": "285:1:35"
                          }
                        ],
                        "id": 9700,
                        "name": "BinaryOperation",
                        "src": "280:6:35"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "functionReturnParameters": 9697
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
                                "id": 9701,
                                "name": "Literal",
                                "src": "303:1:35"
                              }
                            ],
                            "id": 9702,
                            "name": "Return",
                            "src": "296:8:35"
                          }
                        ],
                        "id": 9703,
                        "name": "Block",
                        "src": "288:23:35"
                      }
                    ],
                    "id": 9704,
                    "name": "IfStatement",
                    "src": "276:35:35"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        9706
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "c",
                          "scope": 9722,
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
                            "id": 9705,
                            "name": "ElementaryTypeName",
                            "src": "316:7:35"
                          }
                        ],
                        "id": 9706,
                        "name": "VariableDeclaration",
                        "src": "316:9:35"
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
                              "referencedDeclaration": 9691,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 9707,
                            "name": "Identifier",
                            "src": "328:1:35"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9693,
                              "type": "uint256",
                              "value": "b"
                            },
                            "id": 9708,
                            "name": "Identifier",
                            "src": "332:1:35"
                          }
                        ],
                        "id": 9709,
                        "name": "BinaryOperation",
                        "src": "328:5:35"
                      }
                    ],
                    "id": 9710,
                    "name": "VariableDeclarationStatement",
                    "src": "316:17:35"
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
                              "referencedDeclaration": 11514,
                              "type": "function (bool) pure",
                              "value": "assert"
                            },
                            "id": 9711,
                            "name": "Identifier",
                            "src": "339:6:35"
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
                                      "referencedDeclaration": 9706,
                                      "type": "uint256",
                                      "value": "c"
                                    },
                                    "id": 9712,
                                    "name": "Identifier",
                                    "src": "346:1:35"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 9691,
                                      "type": "uint256",
                                      "value": "a"
                                    },
                                    "id": 9713,
                                    "name": "Identifier",
                                    "src": "350:1:35"
                                  }
                                ],
                                "id": 9714,
                                "name": "BinaryOperation",
                                "src": "346:5:35"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9693,
                                  "type": "uint256",
                                  "value": "b"
                                },
                                "id": 9715,
                                "name": "Identifier",
                                "src": "355:1:35"
                              }
                            ],
                            "id": 9716,
                            "name": "BinaryOperation",
                            "src": "346:10:35"
                          }
                        ],
                        "id": 9717,
                        "name": "FunctionCall",
                        "src": "339:18:35"
                      }
                    ],
                    "id": 9718,
                    "name": "ExpressionStatement",
                    "src": "339:18:35"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 9697
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 9706,
                          "type": "uint256",
                          "value": "c"
                        },
                        "id": 9719,
                        "name": "Identifier",
                        "src": "370:1:35"
                      }
                    ],
                    "id": 9720,
                    "name": "Return",
                    "src": "363:8:35"
                  }
                ],
                "id": 9721,
                "name": "Block",
                "src": "270:106:35"
              }
            ],
            "id": 9722,
            "name": "FunctionDefinition",
            "src": "203:173:35"
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
              "scope": 9785,
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
                      "scope": 9740,
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
                        "id": 9723,
                        "name": "ElementaryTypeName",
                        "src": "471:7:35"
                      }
                    ],
                    "id": 9724,
                    "name": "VariableDeclaration",
                    "src": "471:9:35"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 9740,
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
                        "id": 9725,
                        "name": "ElementaryTypeName",
                        "src": "482:7:35"
                      }
                    ],
                    "id": 9726,
                    "name": "VariableDeclaration",
                    "src": "482:9:35"
                  }
                ],
                "id": 9727,
                "name": "ParameterList",
                "src": "470:22:35"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 9740,
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
                        "id": 9728,
                        "name": "ElementaryTypeName",
                        "src": "516:7:35"
                      }
                    ],
                    "id": 9729,
                    "name": "VariableDeclaration",
                    "src": "516:7:35"
                  }
                ],
                "id": 9730,
                "name": "ParameterList",
                "src": "515:9:35"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        9732
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "c",
                          "scope": 9740,
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
                            "id": 9731,
                            "name": "ElementaryTypeName",
                            "src": "605:7:35"
                          }
                        ],
                        "id": 9732,
                        "name": "VariableDeclaration",
                        "src": "605:9:35"
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
                              "referencedDeclaration": 9724,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 9733,
                            "name": "Identifier",
                            "src": "617:1:35"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9726,
                              "type": "uint256",
                              "value": "b"
                            },
                            "id": 9734,
                            "name": "Identifier",
                            "src": "621:1:35"
                          }
                        ],
                        "id": 9735,
                        "name": "BinaryOperation",
                        "src": "617:5:35"
                      }
                    ],
                    "id": 9736,
                    "name": "VariableDeclarationStatement",
                    "src": "605:17:35"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 9730
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 9732,
                          "type": "uint256",
                          "value": "c"
                        },
                        "id": 9737,
                        "name": "Identifier",
                        "src": "717:1:35"
                      }
                    ],
                    "id": 9738,
                    "name": "Return",
                    "src": "710:8:35"
                  }
                ],
                "id": 9739,
                "name": "Block",
                "src": "525:198:35"
              }
            ],
            "id": 9740,
            "name": "FunctionDefinition",
            "src": "458:265:35"
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
              "scope": 9785,
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
                      "scope": 9760,
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
                        "id": 9741,
                        "name": "ElementaryTypeName",
                        "src": "848:7:35"
                      }
                    ],
                    "id": 9742,
                    "name": "VariableDeclaration",
                    "src": "848:9:35"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 9760,
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
                        "id": 9743,
                        "name": "ElementaryTypeName",
                        "src": "859:7:35"
                      }
                    ],
                    "id": 9744,
                    "name": "VariableDeclaration",
                    "src": "859:9:35"
                  }
                ],
                "id": 9745,
                "name": "ParameterList",
                "src": "847:22:35"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 9760,
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
                        "id": 9746,
                        "name": "ElementaryTypeName",
                        "src": "893:7:35"
                      }
                    ],
                    "id": 9747,
                    "name": "VariableDeclaration",
                    "src": "893:7:35"
                  }
                ],
                "id": 9748,
                "name": "ParameterList",
                "src": "892:9:35"
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
                              "referencedDeclaration": 11514,
                              "type": "function (bool) pure",
                              "value": "assert"
                            },
                            "id": 9749,
                            "name": "Identifier",
                            "src": "908:6:35"
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
                                  "referencedDeclaration": 9744,
                                  "type": "uint256",
                                  "value": "b"
                                },
                                "id": 9750,
                                "name": "Identifier",
                                "src": "915:1:35"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9742,
                                  "type": "uint256",
                                  "value": "a"
                                },
                                "id": 9751,
                                "name": "Identifier",
                                "src": "920:1:35"
                              }
                            ],
                            "id": 9752,
                            "name": "BinaryOperation",
                            "src": "915:6:35"
                          }
                        ],
                        "id": 9753,
                        "name": "FunctionCall",
                        "src": "908:14:35"
                      }
                    ],
                    "id": 9754,
                    "name": "ExpressionStatement",
                    "src": "908:14:35"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 9748
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
                              "referencedDeclaration": 9742,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 9755,
                            "name": "Identifier",
                            "src": "935:1:35"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9744,
                              "type": "uint256",
                              "value": "b"
                            },
                            "id": 9756,
                            "name": "Identifier",
                            "src": "939:1:35"
                          }
                        ],
                        "id": 9757,
                        "name": "BinaryOperation",
                        "src": "935:5:35"
                      }
                    ],
                    "id": 9758,
                    "name": "Return",
                    "src": "928:12:35"
                  }
                ],
                "id": 9759,
                "name": "Block",
                "src": "902:43:35"
              }
            ],
            "id": 9760,
            "name": "FunctionDefinition",
            "src": "835:110:35"
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
              "scope": 9785,
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
                      "scope": 9784,
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
                        "id": 9761,
                        "name": "ElementaryTypeName",
                        "src": "1020:7:35"
                      }
                    ],
                    "id": 9762,
                    "name": "VariableDeclaration",
                    "src": "1020:9:35"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 9784,
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
                        "id": 9763,
                        "name": "ElementaryTypeName",
                        "src": "1031:7:35"
                      }
                    ],
                    "id": 9764,
                    "name": "VariableDeclaration",
                    "src": "1031:9:35"
                  }
                ],
                "id": 9765,
                "name": "ParameterList",
                "src": "1019:22:35"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 9784,
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
                        "id": 9766,
                        "name": "ElementaryTypeName",
                        "src": "1065:7:35"
                      }
                    ],
                    "id": 9767,
                    "name": "VariableDeclaration",
                    "src": "1065:7:35"
                  }
                ],
                "id": 9768,
                "name": "ParameterList",
                "src": "1064:9:35"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        9770
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "c",
                          "scope": 9784,
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
                            "id": 9769,
                            "name": "ElementaryTypeName",
                            "src": "1080:7:35"
                          }
                        ],
                        "id": 9770,
                        "name": "VariableDeclaration",
                        "src": "1080:9:35"
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
                              "referencedDeclaration": 9762,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 9771,
                            "name": "Identifier",
                            "src": "1092:1:35"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9764,
                              "type": "uint256",
                              "value": "b"
                            },
                            "id": 9772,
                            "name": "Identifier",
                            "src": "1096:1:35"
                          }
                        ],
                        "id": 9773,
                        "name": "BinaryOperation",
                        "src": "1092:5:35"
                      }
                    ],
                    "id": 9774,
                    "name": "VariableDeclarationStatement",
                    "src": "1080:17:35"
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
                              "referencedDeclaration": 11514,
                              "type": "function (bool) pure",
                              "value": "assert"
                            },
                            "id": 9775,
                            "name": "Identifier",
                            "src": "1103:6:35"
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
                                  "referencedDeclaration": 9770,
                                  "type": "uint256",
                                  "value": "c"
                                },
                                "id": 9776,
                                "name": "Identifier",
                                "src": "1110:1:35"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9762,
                                  "type": "uint256",
                                  "value": "a"
                                },
                                "id": 9777,
                                "name": "Identifier",
                                "src": "1115:1:35"
                              }
                            ],
                            "id": 9778,
                            "name": "BinaryOperation",
                            "src": "1110:6:35"
                          }
                        ],
                        "id": 9779,
                        "name": "FunctionCall",
                        "src": "1103:14:35"
                      }
                    ],
                    "id": 9780,
                    "name": "ExpressionStatement",
                    "src": "1103:14:35"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 9768
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 9770,
                          "type": "uint256",
                          "value": "c"
                        },
                        "id": 9781,
                        "name": "Identifier",
                        "src": "1130:1:35"
                      }
                    ],
                    "id": 9782,
                    "name": "Return",
                    "src": "1123:8:35"
                  }
                ],
                "id": 9783,
                "name": "Block",
                "src": "1074:62:35"
              }
            ],
            "id": 9784,
            "name": "FunctionDefinition",
            "src": "1007:129:35"
          }
        ],
        "id": 9785,
        "name": "ContractDefinition",
        "src": "117:1021:35"
      }
    ],
    "id": 9786,
    "name": "SourceUnit",
    "src": "0:1139:35"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-08-24T23:27:49.747Z"
}