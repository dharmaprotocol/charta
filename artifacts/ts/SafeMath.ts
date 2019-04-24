export const SafeMath = 
{
  "contractName": "SafeMath",
  "abi": [],
  "bytecode": "0x60606040523415600e57600080fd5b603580601b6000396000f3006060604052600080fd00a165627a7a723058207e5c56aa9a56d72ec3a12fa314c290f06a91296db137205626beb89689b737a00029",
  "deployedBytecode": "0x6060604052600080fd00a165627a7a723058207e5c56aa9a56d72ec3a12fa314c290f06a91296db137205626beb89689b737a00029",
  "sourceMap": "117:1021:38:-;;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "117:1021:38:-;;;;;",
  "source": "pragma solidity ^0.4.18;\n\n\n/**\n * @title SafeMath\n * @dev Math operations with safety checks that throw on error\n */\nlibrary SafeMath {\n\n  /**\n  * @dev Multiplies two numbers, throws on overflow.\n  */\n  function mul(uint256 a, uint256 b) internal pure returns (uint256) {\n    if (a == 0) {\n      return 0;\n    }\n    uint256 c = a * b;\n    assert(c / a == b);\n    return c;\n  }\n\n  /**\n  * @dev Integer division of two numbers, truncating the quotient.\n  */\n  function div(uint256 a, uint256 b) internal pure returns (uint256) {\n    // assert(b > 0); // Solidity automatically throws when dividing by 0\n    uint256 c = a / b;\n    // assert(a == b * c + a % b); // There is no case in which this doesn't hold\n    return c;\n  }\n\n  /**\n  * @dev Subtracts two numbers, throws on overflow (i.e. if subtrahend is greater than minuend).\n  */\n  function sub(uint256 a, uint256 b) internal pure returns (uint256) {\n    assert(b <= a);\n    return a - b;\n  }\n\n  /**\n  * @dev Adds two numbers, throws on overflow.\n  */\n  function add(uint256 a, uint256 b) internal pure returns (uint256) {\n    uint256 c = a + b;\n    assert(c >= a);\n    return c;\n  }\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
  "ast": {
    "attributes": {
      "absolutePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
      "exportedSymbols": {
        "SafeMath": [
          14143
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
        "id": 14047,
        "name": "PragmaDirective",
        "src": "0:24:38"
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
            14143
          ],
          "name": "SafeMath",
          "scope": 14144
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
              "scope": 14143,
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
                      "scope": 14080,
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
                        "id": 14048,
                        "name": "ElementaryTypeName",
                        "src": "216:7:38"
                      }
                    ],
                    "id": 14049,
                    "name": "VariableDeclaration",
                    "src": "216:9:38"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 14080,
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
                        "id": 14050,
                        "name": "ElementaryTypeName",
                        "src": "227:7:38"
                      }
                    ],
                    "id": 14051,
                    "name": "VariableDeclaration",
                    "src": "227:9:38"
                  }
                ],
                "id": 14052,
                "name": "ParameterList",
                "src": "215:22:38"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 14080,
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
                        "id": 14053,
                        "name": "ElementaryTypeName",
                        "src": "261:7:38"
                      }
                    ],
                    "id": 14054,
                    "name": "VariableDeclaration",
                    "src": "261:7:38"
                  }
                ],
                "id": 14055,
                "name": "ParameterList",
                "src": "260:9:38"
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
                              "referencedDeclaration": 14049,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 14056,
                            "name": "Identifier",
                            "src": "280:1:38"
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
                            "id": 14057,
                            "name": "Literal",
                            "src": "285:1:38"
                          }
                        ],
                        "id": 14058,
                        "name": "BinaryOperation",
                        "src": "280:6:38"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "functionReturnParameters": 14055
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
                                "id": 14059,
                                "name": "Literal",
                                "src": "303:1:38"
                              }
                            ],
                            "id": 14060,
                            "name": "Return",
                            "src": "296:8:38"
                          }
                        ],
                        "id": 14061,
                        "name": "Block",
                        "src": "288:23:38"
                      }
                    ],
                    "id": 14062,
                    "name": "IfStatement",
                    "src": "276:35:38"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        14064
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "c",
                          "scope": 14080,
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
                            "id": 14063,
                            "name": "ElementaryTypeName",
                            "src": "316:7:38"
                          }
                        ],
                        "id": 14064,
                        "name": "VariableDeclaration",
                        "src": "316:9:38"
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
                              "referencedDeclaration": 14049,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 14065,
                            "name": "Identifier",
                            "src": "328:1:38"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 14051,
                              "type": "uint256",
                              "value": "b"
                            },
                            "id": 14066,
                            "name": "Identifier",
                            "src": "332:1:38"
                          }
                        ],
                        "id": 14067,
                        "name": "BinaryOperation",
                        "src": "328:5:38"
                      }
                    ],
                    "id": 14068,
                    "name": "VariableDeclarationStatement",
                    "src": "316:17:38"
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
                              "referencedDeclaration": 15872,
                              "type": "function (bool) pure",
                              "value": "assert"
                            },
                            "id": 14069,
                            "name": "Identifier",
                            "src": "339:6:38"
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
                                      "referencedDeclaration": 14064,
                                      "type": "uint256",
                                      "value": "c"
                                    },
                                    "id": 14070,
                                    "name": "Identifier",
                                    "src": "346:1:38"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 14049,
                                      "type": "uint256",
                                      "value": "a"
                                    },
                                    "id": 14071,
                                    "name": "Identifier",
                                    "src": "350:1:38"
                                  }
                                ],
                                "id": 14072,
                                "name": "BinaryOperation",
                                "src": "346:5:38"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 14051,
                                  "type": "uint256",
                                  "value": "b"
                                },
                                "id": 14073,
                                "name": "Identifier",
                                "src": "355:1:38"
                              }
                            ],
                            "id": 14074,
                            "name": "BinaryOperation",
                            "src": "346:10:38"
                          }
                        ],
                        "id": 14075,
                        "name": "FunctionCall",
                        "src": "339:18:38"
                      }
                    ],
                    "id": 14076,
                    "name": "ExpressionStatement",
                    "src": "339:18:38"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 14055
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 14064,
                          "type": "uint256",
                          "value": "c"
                        },
                        "id": 14077,
                        "name": "Identifier",
                        "src": "370:1:38"
                      }
                    ],
                    "id": 14078,
                    "name": "Return",
                    "src": "363:8:38"
                  }
                ],
                "id": 14079,
                "name": "Block",
                "src": "270:106:38"
              }
            ],
            "id": 14080,
            "name": "FunctionDefinition",
            "src": "203:173:38"
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
              "scope": 14143,
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
                      "scope": 14098,
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
                        "id": 14081,
                        "name": "ElementaryTypeName",
                        "src": "471:7:38"
                      }
                    ],
                    "id": 14082,
                    "name": "VariableDeclaration",
                    "src": "471:9:38"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 14098,
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
                        "id": 14083,
                        "name": "ElementaryTypeName",
                        "src": "482:7:38"
                      }
                    ],
                    "id": 14084,
                    "name": "VariableDeclaration",
                    "src": "482:9:38"
                  }
                ],
                "id": 14085,
                "name": "ParameterList",
                "src": "470:22:38"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 14098,
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
                        "id": 14086,
                        "name": "ElementaryTypeName",
                        "src": "516:7:38"
                      }
                    ],
                    "id": 14087,
                    "name": "VariableDeclaration",
                    "src": "516:7:38"
                  }
                ],
                "id": 14088,
                "name": "ParameterList",
                "src": "515:9:38"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        14090
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "c",
                          "scope": 14098,
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
                            "id": 14089,
                            "name": "ElementaryTypeName",
                            "src": "605:7:38"
                          }
                        ],
                        "id": 14090,
                        "name": "VariableDeclaration",
                        "src": "605:9:38"
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
                              "referencedDeclaration": 14082,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 14091,
                            "name": "Identifier",
                            "src": "617:1:38"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 14084,
                              "type": "uint256",
                              "value": "b"
                            },
                            "id": 14092,
                            "name": "Identifier",
                            "src": "621:1:38"
                          }
                        ],
                        "id": 14093,
                        "name": "BinaryOperation",
                        "src": "617:5:38"
                      }
                    ],
                    "id": 14094,
                    "name": "VariableDeclarationStatement",
                    "src": "605:17:38"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 14088
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 14090,
                          "type": "uint256",
                          "value": "c"
                        },
                        "id": 14095,
                        "name": "Identifier",
                        "src": "717:1:38"
                      }
                    ],
                    "id": 14096,
                    "name": "Return",
                    "src": "710:8:38"
                  }
                ],
                "id": 14097,
                "name": "Block",
                "src": "525:198:38"
              }
            ],
            "id": 14098,
            "name": "FunctionDefinition",
            "src": "458:265:38"
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
              "scope": 14143,
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
                      "scope": 14118,
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
                        "id": 14099,
                        "name": "ElementaryTypeName",
                        "src": "848:7:38"
                      }
                    ],
                    "id": 14100,
                    "name": "VariableDeclaration",
                    "src": "848:9:38"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 14118,
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
                        "id": 14101,
                        "name": "ElementaryTypeName",
                        "src": "859:7:38"
                      }
                    ],
                    "id": 14102,
                    "name": "VariableDeclaration",
                    "src": "859:9:38"
                  }
                ],
                "id": 14103,
                "name": "ParameterList",
                "src": "847:22:38"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 14118,
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
                        "id": 14104,
                        "name": "ElementaryTypeName",
                        "src": "893:7:38"
                      }
                    ],
                    "id": 14105,
                    "name": "VariableDeclaration",
                    "src": "893:7:38"
                  }
                ],
                "id": 14106,
                "name": "ParameterList",
                "src": "892:9:38"
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
                              "referencedDeclaration": 15872,
                              "type": "function (bool) pure",
                              "value": "assert"
                            },
                            "id": 14107,
                            "name": "Identifier",
                            "src": "908:6:38"
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
                                  "referencedDeclaration": 14102,
                                  "type": "uint256",
                                  "value": "b"
                                },
                                "id": 14108,
                                "name": "Identifier",
                                "src": "915:1:38"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 14100,
                                  "type": "uint256",
                                  "value": "a"
                                },
                                "id": 14109,
                                "name": "Identifier",
                                "src": "920:1:38"
                              }
                            ],
                            "id": 14110,
                            "name": "BinaryOperation",
                            "src": "915:6:38"
                          }
                        ],
                        "id": 14111,
                        "name": "FunctionCall",
                        "src": "908:14:38"
                      }
                    ],
                    "id": 14112,
                    "name": "ExpressionStatement",
                    "src": "908:14:38"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 14106
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
                              "referencedDeclaration": 14100,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 14113,
                            "name": "Identifier",
                            "src": "935:1:38"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 14102,
                              "type": "uint256",
                              "value": "b"
                            },
                            "id": 14114,
                            "name": "Identifier",
                            "src": "939:1:38"
                          }
                        ],
                        "id": 14115,
                        "name": "BinaryOperation",
                        "src": "935:5:38"
                      }
                    ],
                    "id": 14116,
                    "name": "Return",
                    "src": "928:12:38"
                  }
                ],
                "id": 14117,
                "name": "Block",
                "src": "902:43:38"
              }
            ],
            "id": 14118,
            "name": "FunctionDefinition",
            "src": "835:110:38"
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
              "scope": 14143,
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
                      "scope": 14142,
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
                        "id": 14119,
                        "name": "ElementaryTypeName",
                        "src": "1020:7:38"
                      }
                    ],
                    "id": 14120,
                    "name": "VariableDeclaration",
                    "src": "1020:9:38"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 14142,
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
                        "id": 14121,
                        "name": "ElementaryTypeName",
                        "src": "1031:7:38"
                      }
                    ],
                    "id": 14122,
                    "name": "VariableDeclaration",
                    "src": "1031:9:38"
                  }
                ],
                "id": 14123,
                "name": "ParameterList",
                "src": "1019:22:38"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 14142,
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
                        "id": 14124,
                        "name": "ElementaryTypeName",
                        "src": "1065:7:38"
                      }
                    ],
                    "id": 14125,
                    "name": "VariableDeclaration",
                    "src": "1065:7:38"
                  }
                ],
                "id": 14126,
                "name": "ParameterList",
                "src": "1064:9:38"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        14128
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "c",
                          "scope": 14142,
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
                            "id": 14127,
                            "name": "ElementaryTypeName",
                            "src": "1080:7:38"
                          }
                        ],
                        "id": 14128,
                        "name": "VariableDeclaration",
                        "src": "1080:9:38"
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
                              "referencedDeclaration": 14120,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 14129,
                            "name": "Identifier",
                            "src": "1092:1:38"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 14122,
                              "type": "uint256",
                              "value": "b"
                            },
                            "id": 14130,
                            "name": "Identifier",
                            "src": "1096:1:38"
                          }
                        ],
                        "id": 14131,
                        "name": "BinaryOperation",
                        "src": "1092:5:38"
                      }
                    ],
                    "id": 14132,
                    "name": "VariableDeclarationStatement",
                    "src": "1080:17:38"
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
                              "referencedDeclaration": 15872,
                              "type": "function (bool) pure",
                              "value": "assert"
                            },
                            "id": 14133,
                            "name": "Identifier",
                            "src": "1103:6:38"
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
                                  "referencedDeclaration": 14128,
                                  "type": "uint256",
                                  "value": "c"
                                },
                                "id": 14134,
                                "name": "Identifier",
                                "src": "1110:1:38"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 14120,
                                  "type": "uint256",
                                  "value": "a"
                                },
                                "id": 14135,
                                "name": "Identifier",
                                "src": "1115:1:38"
                              }
                            ],
                            "id": 14136,
                            "name": "BinaryOperation",
                            "src": "1110:6:38"
                          }
                        ],
                        "id": 14137,
                        "name": "FunctionCall",
                        "src": "1103:14:38"
                      }
                    ],
                    "id": 14138,
                    "name": "ExpressionStatement",
                    "src": "1103:14:38"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 14126
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 14128,
                          "type": "uint256",
                          "value": "c"
                        },
                        "id": 14139,
                        "name": "Identifier",
                        "src": "1130:1:38"
                      }
                    ],
                    "id": 14140,
                    "name": "Return",
                    "src": "1123:8:38"
                  }
                ],
                "id": 14141,
                "name": "Block",
                "src": "1074:62:38"
              }
            ],
            "id": 14142,
            "name": "FunctionDefinition",
            "src": "1007:129:38"
          }
        ],
        "id": 14143,
        "name": "ContractDefinition",
        "src": "117:1021:38"
      }
    ],
    "id": 14144,
    "name": "SourceUnit",
    "src": "0:1139:38"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2019-03-12T22:10:45.899Z"
}