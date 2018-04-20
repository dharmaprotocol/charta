export const SafeMath = 
{
  "contractName": "SafeMath",
  "abi": [],
  "bytecode": "0x60606040523415600e57600080fd5b603580601b6000396000f3006060604052600080fd00a165627a7a723058207e5c56aa9a56d72ec3a12fa314c290f06a91296db137205626beb89689b737a00029",
  "deployedBytecode": "0x6060604052600080fd00a165627a7a723058207e5c56aa9a56d72ec3a12fa314c290f06a91296db137205626beb89689b737a00029",
  "sourceMap": "117:1021:10:-;;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "117:1021:10:-;;;;;",
  "source": "pragma solidity ^0.4.18;\n\n\n/**\n * @title SafeMath\n * @dev Math operations with safety checks that throw on error\n */\nlibrary SafeMath {\n\n  /**\n  * @dev Multiplies two numbers, throws on overflow.\n  */\n  function mul(uint256 a, uint256 b) internal pure returns (uint256) {\n    if (a == 0) {\n      return 0;\n    }\n    uint256 c = a * b;\n    assert(c / a == b);\n    return c;\n  }\n\n  /**\n  * @dev Integer division of two numbers, truncating the quotient.\n  */\n  function div(uint256 a, uint256 b) internal pure returns (uint256) {\n    // assert(b > 0); // Solidity automatically throws when dividing by 0\n    uint256 c = a / b;\n    // assert(a == b * c + a % b); // There is no case in which this doesn't hold\n    return c;\n  }\n\n  /**\n  * @dev Subtracts two numbers, throws on overflow (i.e. if subtrahend is greater than minuend).\n  */\n  function sub(uint256 a, uint256 b) internal pure returns (uint256) {\n    assert(b <= a);\n    return a - b;\n  }\n\n  /**\n  * @dev Adds two numbers, throws on overflow.\n  */\n  function add(uint256 a, uint256 b) internal pure returns (uint256) {\n    uint256 c = a + b;\n    assert(c >= a);\n    return c;\n  }\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
  "ast": {
    "attributes": {
      "absolutePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
      "exportedSymbols": {
        "SafeMath": [
          2859
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
        "id": 2763,
        "name": "PragmaDirective",
        "src": "0:24:10"
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
            2859
          ],
          "name": "SafeMath",
          "scope": 2860
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
              "scope": 2859,
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
                      "scope": 2796,
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
                        "id": 2764,
                        "name": "ElementaryTypeName",
                        "src": "216:7:10"
                      }
                    ],
                    "id": 2765,
                    "name": "VariableDeclaration",
                    "src": "216:9:10"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 2796,
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
                        "id": 2766,
                        "name": "ElementaryTypeName",
                        "src": "227:7:10"
                      }
                    ],
                    "id": 2767,
                    "name": "VariableDeclaration",
                    "src": "227:9:10"
                  }
                ],
                "id": 2768,
                "name": "ParameterList",
                "src": "215:22:10"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2796,
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
                        "id": 2769,
                        "name": "ElementaryTypeName",
                        "src": "261:7:10"
                      }
                    ],
                    "id": 2770,
                    "name": "VariableDeclaration",
                    "src": "261:7:10"
                  }
                ],
                "id": 2771,
                "name": "ParameterList",
                "src": "260:9:10"
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
                              "referencedDeclaration": 2765,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 2772,
                            "name": "Identifier",
                            "src": "280:1:10"
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
                            "id": 2773,
                            "name": "Literal",
                            "src": "285:1:10"
                          }
                        ],
                        "id": 2774,
                        "name": "BinaryOperation",
                        "src": "280:6:10"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "functionReturnParameters": 2771
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
                                "id": 2775,
                                "name": "Literal",
                                "src": "303:1:10"
                              }
                            ],
                            "id": 2776,
                            "name": "Return",
                            "src": "296:8:10"
                          }
                        ],
                        "id": 2777,
                        "name": "Block",
                        "src": "288:23:10"
                      }
                    ],
                    "id": 2778,
                    "name": "IfStatement",
                    "src": "276:35:10"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        2780
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "c",
                          "scope": 2796,
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
                            "id": 2779,
                            "name": "ElementaryTypeName",
                            "src": "316:7:10"
                          }
                        ],
                        "id": 2780,
                        "name": "VariableDeclaration",
                        "src": "316:9:10"
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
                              "referencedDeclaration": 2765,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 2781,
                            "name": "Identifier",
                            "src": "328:1:10"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2767,
                              "type": "uint256",
                              "value": "b"
                            },
                            "id": 2782,
                            "name": "Identifier",
                            "src": "332:1:10"
                          }
                        ],
                        "id": 2783,
                        "name": "BinaryOperation",
                        "src": "328:5:10"
                      }
                    ],
                    "id": 2784,
                    "name": "VariableDeclarationStatement",
                    "src": "316:17:10"
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
                              "referencedDeclaration": 3010,
                              "type": "function (bool) pure",
                              "value": "assert"
                            },
                            "id": 2785,
                            "name": "Identifier",
                            "src": "339:6:10"
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
                                      "referencedDeclaration": 2780,
                                      "type": "uint256",
                                      "value": "c"
                                    },
                                    "id": 2786,
                                    "name": "Identifier",
                                    "src": "346:1:10"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2765,
                                      "type": "uint256",
                                      "value": "a"
                                    },
                                    "id": 2787,
                                    "name": "Identifier",
                                    "src": "350:1:10"
                                  }
                                ],
                                "id": 2788,
                                "name": "BinaryOperation",
                                "src": "346:5:10"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2767,
                                  "type": "uint256",
                                  "value": "b"
                                },
                                "id": 2789,
                                "name": "Identifier",
                                "src": "355:1:10"
                              }
                            ],
                            "id": 2790,
                            "name": "BinaryOperation",
                            "src": "346:10:10"
                          }
                        ],
                        "id": 2791,
                        "name": "FunctionCall",
                        "src": "339:18:10"
                      }
                    ],
                    "id": 2792,
                    "name": "ExpressionStatement",
                    "src": "339:18:10"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 2771
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 2780,
                          "type": "uint256",
                          "value": "c"
                        },
                        "id": 2793,
                        "name": "Identifier",
                        "src": "370:1:10"
                      }
                    ],
                    "id": 2794,
                    "name": "Return",
                    "src": "363:8:10"
                  }
                ],
                "id": 2795,
                "name": "Block",
                "src": "270:106:10"
              }
            ],
            "id": 2796,
            "name": "FunctionDefinition",
            "src": "203:173:10"
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
              "scope": 2859,
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
                      "scope": 2814,
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
                        "id": 2797,
                        "name": "ElementaryTypeName",
                        "src": "471:7:10"
                      }
                    ],
                    "id": 2798,
                    "name": "VariableDeclaration",
                    "src": "471:9:10"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 2814,
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
                        "id": 2799,
                        "name": "ElementaryTypeName",
                        "src": "482:7:10"
                      }
                    ],
                    "id": 2800,
                    "name": "VariableDeclaration",
                    "src": "482:9:10"
                  }
                ],
                "id": 2801,
                "name": "ParameterList",
                "src": "470:22:10"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2814,
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
                        "id": 2802,
                        "name": "ElementaryTypeName",
                        "src": "516:7:10"
                      }
                    ],
                    "id": 2803,
                    "name": "VariableDeclaration",
                    "src": "516:7:10"
                  }
                ],
                "id": 2804,
                "name": "ParameterList",
                "src": "515:9:10"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        2806
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "c",
                          "scope": 2814,
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
                            "id": 2805,
                            "name": "ElementaryTypeName",
                            "src": "605:7:10"
                          }
                        ],
                        "id": 2806,
                        "name": "VariableDeclaration",
                        "src": "605:9:10"
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
                              "referencedDeclaration": 2798,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 2807,
                            "name": "Identifier",
                            "src": "617:1:10"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2800,
                              "type": "uint256",
                              "value": "b"
                            },
                            "id": 2808,
                            "name": "Identifier",
                            "src": "621:1:10"
                          }
                        ],
                        "id": 2809,
                        "name": "BinaryOperation",
                        "src": "617:5:10"
                      }
                    ],
                    "id": 2810,
                    "name": "VariableDeclarationStatement",
                    "src": "605:17:10"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 2804
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 2806,
                          "type": "uint256",
                          "value": "c"
                        },
                        "id": 2811,
                        "name": "Identifier",
                        "src": "717:1:10"
                      }
                    ],
                    "id": 2812,
                    "name": "Return",
                    "src": "710:8:10"
                  }
                ],
                "id": 2813,
                "name": "Block",
                "src": "525:198:10"
              }
            ],
            "id": 2814,
            "name": "FunctionDefinition",
            "src": "458:265:10"
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
              "scope": 2859,
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
                      "scope": 2834,
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
                        "id": 2815,
                        "name": "ElementaryTypeName",
                        "src": "848:7:10"
                      }
                    ],
                    "id": 2816,
                    "name": "VariableDeclaration",
                    "src": "848:9:10"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 2834,
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
                        "id": 2817,
                        "name": "ElementaryTypeName",
                        "src": "859:7:10"
                      }
                    ],
                    "id": 2818,
                    "name": "VariableDeclaration",
                    "src": "859:9:10"
                  }
                ],
                "id": 2819,
                "name": "ParameterList",
                "src": "847:22:10"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2834,
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
                        "id": 2820,
                        "name": "ElementaryTypeName",
                        "src": "893:7:10"
                      }
                    ],
                    "id": 2821,
                    "name": "VariableDeclaration",
                    "src": "893:7:10"
                  }
                ],
                "id": 2822,
                "name": "ParameterList",
                "src": "892:9:10"
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
                              "referencedDeclaration": 3010,
                              "type": "function (bool) pure",
                              "value": "assert"
                            },
                            "id": 2823,
                            "name": "Identifier",
                            "src": "908:6:10"
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
                                  "referencedDeclaration": 2818,
                                  "type": "uint256",
                                  "value": "b"
                                },
                                "id": 2824,
                                "name": "Identifier",
                                "src": "915:1:10"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2816,
                                  "type": "uint256",
                                  "value": "a"
                                },
                                "id": 2825,
                                "name": "Identifier",
                                "src": "920:1:10"
                              }
                            ],
                            "id": 2826,
                            "name": "BinaryOperation",
                            "src": "915:6:10"
                          }
                        ],
                        "id": 2827,
                        "name": "FunctionCall",
                        "src": "908:14:10"
                      }
                    ],
                    "id": 2828,
                    "name": "ExpressionStatement",
                    "src": "908:14:10"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 2822
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
                              "referencedDeclaration": 2816,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 2829,
                            "name": "Identifier",
                            "src": "935:1:10"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2818,
                              "type": "uint256",
                              "value": "b"
                            },
                            "id": 2830,
                            "name": "Identifier",
                            "src": "939:1:10"
                          }
                        ],
                        "id": 2831,
                        "name": "BinaryOperation",
                        "src": "935:5:10"
                      }
                    ],
                    "id": 2832,
                    "name": "Return",
                    "src": "928:12:10"
                  }
                ],
                "id": 2833,
                "name": "Block",
                "src": "902:43:10"
              }
            ],
            "id": 2834,
            "name": "FunctionDefinition",
            "src": "835:110:10"
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
              "scope": 2859,
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
                      "scope": 2858,
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
                        "id": 2835,
                        "name": "ElementaryTypeName",
                        "src": "1020:7:10"
                      }
                    ],
                    "id": 2836,
                    "name": "VariableDeclaration",
                    "src": "1020:9:10"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 2858,
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
                        "id": 2837,
                        "name": "ElementaryTypeName",
                        "src": "1031:7:10"
                      }
                    ],
                    "id": 2838,
                    "name": "VariableDeclaration",
                    "src": "1031:9:10"
                  }
                ],
                "id": 2839,
                "name": "ParameterList",
                "src": "1019:22:10"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2858,
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
                        "id": 2840,
                        "name": "ElementaryTypeName",
                        "src": "1065:7:10"
                      }
                    ],
                    "id": 2841,
                    "name": "VariableDeclaration",
                    "src": "1065:7:10"
                  }
                ],
                "id": 2842,
                "name": "ParameterList",
                "src": "1064:9:10"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        2844
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "c",
                          "scope": 2858,
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
                            "id": 2843,
                            "name": "ElementaryTypeName",
                            "src": "1080:7:10"
                          }
                        ],
                        "id": 2844,
                        "name": "VariableDeclaration",
                        "src": "1080:9:10"
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
                              "referencedDeclaration": 2836,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 2845,
                            "name": "Identifier",
                            "src": "1092:1:10"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2838,
                              "type": "uint256",
                              "value": "b"
                            },
                            "id": 2846,
                            "name": "Identifier",
                            "src": "1096:1:10"
                          }
                        ],
                        "id": 2847,
                        "name": "BinaryOperation",
                        "src": "1092:5:10"
                      }
                    ],
                    "id": 2848,
                    "name": "VariableDeclarationStatement",
                    "src": "1080:17:10"
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
                              "referencedDeclaration": 3010,
                              "type": "function (bool) pure",
                              "value": "assert"
                            },
                            "id": 2849,
                            "name": "Identifier",
                            "src": "1103:6:10"
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
                                  "referencedDeclaration": 2844,
                                  "type": "uint256",
                                  "value": "c"
                                },
                                "id": 2850,
                                "name": "Identifier",
                                "src": "1110:1:10"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2836,
                                  "type": "uint256",
                                  "value": "a"
                                },
                                "id": 2851,
                                "name": "Identifier",
                                "src": "1115:1:10"
                              }
                            ],
                            "id": 2852,
                            "name": "BinaryOperation",
                            "src": "1110:6:10"
                          }
                        ],
                        "id": 2853,
                        "name": "FunctionCall",
                        "src": "1103:14:10"
                      }
                    ],
                    "id": 2854,
                    "name": "ExpressionStatement",
                    "src": "1103:14:10"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 2842
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 2844,
                          "type": "uint256",
                          "value": "c"
                        },
                        "id": 2855,
                        "name": "Identifier",
                        "src": "1130:1:10"
                      }
                    ],
                    "id": 2856,
                    "name": "Return",
                    "src": "1123:8:10"
                  }
                ],
                "id": 2857,
                "name": "Block",
                "src": "1074:62:10"
              }
            ],
            "id": 2858,
            "name": "FunctionDefinition",
            "src": "1007:129:10"
          }
        ],
        "id": 2859,
        "name": "ContractDefinition",
        "src": "117:1021:10"
      }
    ],
    "id": 2860,
    "name": "SourceUnit",
    "src": "0:1139:10"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-04-19T23:50:06.582Z"
}