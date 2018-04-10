export const SafeMath = 
{
  "contractName": "SafeMath",
  "abi": [],
  "bytecode": "0x60606040523415600e57600080fd5b603580601b6000396000f3006060604052600080fd00a165627a7a723058207e5c56aa9a56d72ec3a12fa314c290f06a91296db137205626beb89689b737a00029",
  "deployedBytecode": "0x6060604052600080fd00a165627a7a723058207e5c56aa9a56d72ec3a12fa314c290f06a91296db137205626beb89689b737a00029",
  "sourceMap": "117:1021:7:-;;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "117:1021:7:-;;;;;",
  "source": "pragma solidity ^0.4.18;\n\n\n/**\n * @title SafeMath\n * @dev Math operations with safety checks that throw on error\n */\nlibrary SafeMath {\n\n  /**\n  * @dev Multiplies two numbers, throws on overflow.\n  */\n  function mul(uint256 a, uint256 b) internal pure returns (uint256) {\n    if (a == 0) {\n      return 0;\n    }\n    uint256 c = a * b;\n    assert(c / a == b);\n    return c;\n  }\n\n  /**\n  * @dev Integer division of two numbers, truncating the quotient.\n  */\n  function div(uint256 a, uint256 b) internal pure returns (uint256) {\n    // assert(b > 0); // Solidity automatically throws when dividing by 0\n    uint256 c = a / b;\n    // assert(a == b * c + a % b); // There is no case in which this doesn't hold\n    return c;\n  }\n\n  /**\n  * @dev Subtracts two numbers, throws on overflow (i.e. if subtrahend is greater than minuend).\n  */\n  function sub(uint256 a, uint256 b) internal pure returns (uint256) {\n    assert(b <= a);\n    return a - b;\n  }\n\n  /**\n  * @dev Adds two numbers, throws on overflow.\n  */\n  function add(uint256 a, uint256 b) internal pure returns (uint256) {\n    uint256 c = a + b;\n    assert(c >= a);\n    return c;\n  }\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
  "ast": {
    "attributes": {
      "absolutePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
      "exportedSymbols": {
        "SafeMath": [
          1745
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
        "id": 1649,
        "name": "PragmaDirective",
        "src": "0:24:7"
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
            1745
          ],
          "name": "SafeMath",
          "scope": 1746
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
              "scope": 1745,
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
                      "scope": 1682,
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
                        "id": 1650,
                        "name": "ElementaryTypeName",
                        "src": "216:7:7"
                      }
                    ],
                    "id": 1651,
                    "name": "VariableDeclaration",
                    "src": "216:9:7"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 1682,
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
                        "id": 1652,
                        "name": "ElementaryTypeName",
                        "src": "227:7:7"
                      }
                    ],
                    "id": 1653,
                    "name": "VariableDeclaration",
                    "src": "227:9:7"
                  }
                ],
                "id": 1654,
                "name": "ParameterList",
                "src": "215:22:7"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 1682,
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
                        "id": 1655,
                        "name": "ElementaryTypeName",
                        "src": "261:7:7"
                      }
                    ],
                    "id": 1656,
                    "name": "VariableDeclaration",
                    "src": "261:7:7"
                  }
                ],
                "id": 1657,
                "name": "ParameterList",
                "src": "260:9:7"
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
                              "referencedDeclaration": 1651,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 1658,
                            "name": "Identifier",
                            "src": "280:1:7"
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
                            "id": 1659,
                            "name": "Literal",
                            "src": "285:1:7"
                          }
                        ],
                        "id": 1660,
                        "name": "BinaryOperation",
                        "src": "280:6:7"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "functionReturnParameters": 1657
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
                                "id": 1661,
                                "name": "Literal",
                                "src": "303:1:7"
                              }
                            ],
                            "id": 1662,
                            "name": "Return",
                            "src": "296:8:7"
                          }
                        ],
                        "id": 1663,
                        "name": "Block",
                        "src": "288:23:7"
                      }
                    ],
                    "id": 1664,
                    "name": "IfStatement",
                    "src": "276:35:7"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        1666
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "c",
                          "scope": 1682,
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
                            "id": 1665,
                            "name": "ElementaryTypeName",
                            "src": "316:7:7"
                          }
                        ],
                        "id": 1666,
                        "name": "VariableDeclaration",
                        "src": "316:9:7"
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
                              "referencedDeclaration": 1651,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 1667,
                            "name": "Identifier",
                            "src": "328:1:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1653,
                              "type": "uint256",
                              "value": "b"
                            },
                            "id": 1668,
                            "name": "Identifier",
                            "src": "332:1:7"
                          }
                        ],
                        "id": 1669,
                        "name": "BinaryOperation",
                        "src": "328:5:7"
                      }
                    ],
                    "id": 1670,
                    "name": "VariableDeclarationStatement",
                    "src": "316:17:7"
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
                              "referencedDeclaration": 1879,
                              "type": "function (bool) pure",
                              "value": "assert"
                            },
                            "id": 1671,
                            "name": "Identifier",
                            "src": "339:6:7"
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
                                      "referencedDeclaration": 1666,
                                      "type": "uint256",
                                      "value": "c"
                                    },
                                    "id": 1672,
                                    "name": "Identifier",
                                    "src": "346:1:7"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1651,
                                      "type": "uint256",
                                      "value": "a"
                                    },
                                    "id": 1673,
                                    "name": "Identifier",
                                    "src": "350:1:7"
                                  }
                                ],
                                "id": 1674,
                                "name": "BinaryOperation",
                                "src": "346:5:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1653,
                                  "type": "uint256",
                                  "value": "b"
                                },
                                "id": 1675,
                                "name": "Identifier",
                                "src": "355:1:7"
                              }
                            ],
                            "id": 1676,
                            "name": "BinaryOperation",
                            "src": "346:10:7"
                          }
                        ],
                        "id": 1677,
                        "name": "FunctionCall",
                        "src": "339:18:7"
                      }
                    ],
                    "id": 1678,
                    "name": "ExpressionStatement",
                    "src": "339:18:7"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 1657
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 1666,
                          "type": "uint256",
                          "value": "c"
                        },
                        "id": 1679,
                        "name": "Identifier",
                        "src": "370:1:7"
                      }
                    ],
                    "id": 1680,
                    "name": "Return",
                    "src": "363:8:7"
                  }
                ],
                "id": 1681,
                "name": "Block",
                "src": "270:106:7"
              }
            ],
            "id": 1682,
            "name": "FunctionDefinition",
            "src": "203:173:7"
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
              "scope": 1745,
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
                      "scope": 1700,
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
                        "id": 1683,
                        "name": "ElementaryTypeName",
                        "src": "471:7:7"
                      }
                    ],
                    "id": 1684,
                    "name": "VariableDeclaration",
                    "src": "471:9:7"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 1700,
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
                        "id": 1685,
                        "name": "ElementaryTypeName",
                        "src": "482:7:7"
                      }
                    ],
                    "id": 1686,
                    "name": "VariableDeclaration",
                    "src": "482:9:7"
                  }
                ],
                "id": 1687,
                "name": "ParameterList",
                "src": "470:22:7"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 1700,
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
                        "id": 1688,
                        "name": "ElementaryTypeName",
                        "src": "516:7:7"
                      }
                    ],
                    "id": 1689,
                    "name": "VariableDeclaration",
                    "src": "516:7:7"
                  }
                ],
                "id": 1690,
                "name": "ParameterList",
                "src": "515:9:7"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        1692
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "c",
                          "scope": 1700,
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
                            "id": 1691,
                            "name": "ElementaryTypeName",
                            "src": "605:7:7"
                          }
                        ],
                        "id": 1692,
                        "name": "VariableDeclaration",
                        "src": "605:9:7"
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
                              "referencedDeclaration": 1684,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 1693,
                            "name": "Identifier",
                            "src": "617:1:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1686,
                              "type": "uint256",
                              "value": "b"
                            },
                            "id": 1694,
                            "name": "Identifier",
                            "src": "621:1:7"
                          }
                        ],
                        "id": 1695,
                        "name": "BinaryOperation",
                        "src": "617:5:7"
                      }
                    ],
                    "id": 1696,
                    "name": "VariableDeclarationStatement",
                    "src": "605:17:7"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 1690
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 1692,
                          "type": "uint256",
                          "value": "c"
                        },
                        "id": 1697,
                        "name": "Identifier",
                        "src": "717:1:7"
                      }
                    ],
                    "id": 1698,
                    "name": "Return",
                    "src": "710:8:7"
                  }
                ],
                "id": 1699,
                "name": "Block",
                "src": "525:198:7"
              }
            ],
            "id": 1700,
            "name": "FunctionDefinition",
            "src": "458:265:7"
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
              "scope": 1745,
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
                      "scope": 1720,
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
                        "id": 1701,
                        "name": "ElementaryTypeName",
                        "src": "848:7:7"
                      }
                    ],
                    "id": 1702,
                    "name": "VariableDeclaration",
                    "src": "848:9:7"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 1720,
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
                        "id": 1703,
                        "name": "ElementaryTypeName",
                        "src": "859:7:7"
                      }
                    ],
                    "id": 1704,
                    "name": "VariableDeclaration",
                    "src": "859:9:7"
                  }
                ],
                "id": 1705,
                "name": "ParameterList",
                "src": "847:22:7"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 1720,
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
                        "id": 1706,
                        "name": "ElementaryTypeName",
                        "src": "893:7:7"
                      }
                    ],
                    "id": 1707,
                    "name": "VariableDeclaration",
                    "src": "893:7:7"
                  }
                ],
                "id": 1708,
                "name": "ParameterList",
                "src": "892:9:7"
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
                              "referencedDeclaration": 1879,
                              "type": "function (bool) pure",
                              "value": "assert"
                            },
                            "id": 1709,
                            "name": "Identifier",
                            "src": "908:6:7"
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
                                  "referencedDeclaration": 1704,
                                  "type": "uint256",
                                  "value": "b"
                                },
                                "id": 1710,
                                "name": "Identifier",
                                "src": "915:1:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1702,
                                  "type": "uint256",
                                  "value": "a"
                                },
                                "id": 1711,
                                "name": "Identifier",
                                "src": "920:1:7"
                              }
                            ],
                            "id": 1712,
                            "name": "BinaryOperation",
                            "src": "915:6:7"
                          }
                        ],
                        "id": 1713,
                        "name": "FunctionCall",
                        "src": "908:14:7"
                      }
                    ],
                    "id": 1714,
                    "name": "ExpressionStatement",
                    "src": "908:14:7"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 1708
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
                              "referencedDeclaration": 1702,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 1715,
                            "name": "Identifier",
                            "src": "935:1:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1704,
                              "type": "uint256",
                              "value": "b"
                            },
                            "id": 1716,
                            "name": "Identifier",
                            "src": "939:1:7"
                          }
                        ],
                        "id": 1717,
                        "name": "BinaryOperation",
                        "src": "935:5:7"
                      }
                    ],
                    "id": 1718,
                    "name": "Return",
                    "src": "928:12:7"
                  }
                ],
                "id": 1719,
                "name": "Block",
                "src": "902:43:7"
              }
            ],
            "id": 1720,
            "name": "FunctionDefinition",
            "src": "835:110:7"
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
              "scope": 1745,
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
                      "scope": 1744,
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
                        "id": 1721,
                        "name": "ElementaryTypeName",
                        "src": "1020:7:7"
                      }
                    ],
                    "id": 1722,
                    "name": "VariableDeclaration",
                    "src": "1020:9:7"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 1744,
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
                        "id": 1723,
                        "name": "ElementaryTypeName",
                        "src": "1031:7:7"
                      }
                    ],
                    "id": 1724,
                    "name": "VariableDeclaration",
                    "src": "1031:9:7"
                  }
                ],
                "id": 1725,
                "name": "ParameterList",
                "src": "1019:22:7"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 1744,
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
                        "id": 1726,
                        "name": "ElementaryTypeName",
                        "src": "1065:7:7"
                      }
                    ],
                    "id": 1727,
                    "name": "VariableDeclaration",
                    "src": "1065:7:7"
                  }
                ],
                "id": 1728,
                "name": "ParameterList",
                "src": "1064:9:7"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        1730
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "c",
                          "scope": 1744,
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
                            "id": 1729,
                            "name": "ElementaryTypeName",
                            "src": "1080:7:7"
                          }
                        ],
                        "id": 1730,
                        "name": "VariableDeclaration",
                        "src": "1080:9:7"
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
                              "referencedDeclaration": 1722,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 1731,
                            "name": "Identifier",
                            "src": "1092:1:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1724,
                              "type": "uint256",
                              "value": "b"
                            },
                            "id": 1732,
                            "name": "Identifier",
                            "src": "1096:1:7"
                          }
                        ],
                        "id": 1733,
                        "name": "BinaryOperation",
                        "src": "1092:5:7"
                      }
                    ],
                    "id": 1734,
                    "name": "VariableDeclarationStatement",
                    "src": "1080:17:7"
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
                              "referencedDeclaration": 1879,
                              "type": "function (bool) pure",
                              "value": "assert"
                            },
                            "id": 1735,
                            "name": "Identifier",
                            "src": "1103:6:7"
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
                                  "referencedDeclaration": 1730,
                                  "type": "uint256",
                                  "value": "c"
                                },
                                "id": 1736,
                                "name": "Identifier",
                                "src": "1110:1:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1722,
                                  "type": "uint256",
                                  "value": "a"
                                },
                                "id": 1737,
                                "name": "Identifier",
                                "src": "1115:1:7"
                              }
                            ],
                            "id": 1738,
                            "name": "BinaryOperation",
                            "src": "1110:6:7"
                          }
                        ],
                        "id": 1739,
                        "name": "FunctionCall",
                        "src": "1103:14:7"
                      }
                    ],
                    "id": 1740,
                    "name": "ExpressionStatement",
                    "src": "1103:14:7"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 1728
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 1730,
                          "type": "uint256",
                          "value": "c"
                        },
                        "id": 1741,
                        "name": "Identifier",
                        "src": "1130:1:7"
                      }
                    ],
                    "id": 1742,
                    "name": "Return",
                    "src": "1123:8:7"
                  }
                ],
                "id": 1743,
                "name": "Block",
                "src": "1074:62:7"
              }
            ],
            "id": 1744,
            "name": "FunctionDefinition",
            "src": "1007:129:7"
          }
        ],
        "id": 1745,
        "name": "ContractDefinition",
        "src": "117:1021:7"
      }
    ],
    "id": 1746,
    "name": "SourceUnit",
    "src": "0:1139:7"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-04-10T20:45:23.107Z"
}