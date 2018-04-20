export const Migrations = 
{
  "contractName": "Migrations",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "newAddress",
          "type": "address"
        }
      ],
      "name": "upgrade",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "last_completed_migration",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
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
          "name": "completed",
          "type": "uint256"
        }
      ],
      "name": "setCompleted",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    }
  ],
  "bytecode": "0x6060604052341561000f57600080fd5b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506102db8061005e6000396000f300606060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630900f01014610067578063445df0ac146100a05780638da5cb5b146100c9578063fdacd5761461011e575b600080fd5b341561007257600080fd5b61009e600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610141565b005b34156100ab57600080fd5b6100b3610224565b6040518082815260200191505060405180910390f35b34156100d457600080fd5b6100dc61022a565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561012957600080fd5b61013f600480803590602001909190505061024f565b005b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610220578190508073ffffffffffffffffffffffffffffffffffffffff1663fdacd5766001546040518263ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180828152602001915050600060405180830381600087803b151561020b57600080fd5b6102c65a03f1151561021c57600080fd5b5050505b5050565b60015481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156102ac57806001819055505b505600a165627a7a72305820000cd0b4bbc1163864566d59f01bce7b820c6e585f9c066f1bb1838ef246cabb0029",
  "deployedBytecode": "0x606060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630900f01014610067578063445df0ac146100a05780638da5cb5b146100c9578063fdacd5761461011e575b600080fd5b341561007257600080fd5b61009e600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610141565b005b34156100ab57600080fd5b6100b3610224565b6040518082815260200191505060405180910390f35b34156100d457600080fd5b6100dc61022a565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561012957600080fd5b61013f600480803590602001909190505061024f565b005b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610220578190508073ffffffffffffffffffffffffffffffffffffffff1663fdacd5766001546040518263ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180828152602001915050600060405180830381600087803b151561020b57600080fd5b6102c65a03f1151561021c57600080fd5b5050505b5050565b60015481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156102ac57806001819055505b505600a165627a7a72305820000cd0b4bbc1163864566d59f01bce7b820c6e585f9c066f1bb1838ef246cabb0029",
  "sourceMap": "26:579:3:-;;;245:64;;;;;;;;292:10;284:5;;:18;;;;;;;;;;;;;;;;;;26:579;;;;;;",
  "deployedSourceMap": "26:579:3:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;430:173;;;;;;;;;;;;;;;;;;;;;;;;;;;;131:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;52:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;315:109;;;;;;;;;;;;;;;;;;;;;;;;;;430:173;495:19;224:5;;;;;;;;;;;210:19;;:10;:19;;;206:26;;;528:10;495:44;;549:8;:21;;;571:24;;549:47;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;206:26;430:173;;:::o;131:36::-;;;;:::o;52:20::-;;;;;;;;;;;;;:::o;315:109::-;224:5;;;;;;;;;;;210:19;;:10;:19;;;206:26;;;408:9;381:24;:36;;;;206:26;315:109;:::o",
  "source": "pragma solidity 0.4.18;\n\n\ncontract Migrations {\n    address public owner;\n\n    // solhint-disable-next-line var-name-mixedcase\n    uint public last_completed_migration;\n\n    modifier restricted() {\n        if (msg.sender == owner) _;\n    }\n\n    function Migrations() public {\n        owner = msg.sender;\n    }\n\n    function setCompleted(uint completed) public restricted {\n        last_completed_migration = completed;\n    }\n\n    function upgrade(address newAddress) public restricted {\n        Migrations upgraded = Migrations(newAddress);\n        upgraded.setCompleted(last_completed_migration);\n    }\n}\n",
  "sourcePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/Migrations.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/Migrations.sol",
      "exportedSymbols": {
        "Migrations": [
          1914
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
        "id": 1859,
        "name": "PragmaDirective",
        "src": "0:23:3"
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
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            1914
          ],
          "name": "Migrations",
          "scope": 1915
        },
        "children": [
          {
            "attributes": {
              "constant": false,
              "name": "owner",
              "scope": 1914,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "address",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "address",
                  "type": "address"
                },
                "id": 1860,
                "name": "ElementaryTypeName",
                "src": "52:7:3"
              }
            ],
            "id": 1861,
            "name": "VariableDeclaration",
            "src": "52:20:3"
          },
          {
            "attributes": {
              "constant": false,
              "name": "last_completed_migration",
              "scope": 1914,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint256",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "uint",
                  "type": "uint256"
                },
                "id": 1862,
                "name": "ElementaryTypeName",
                "src": "131:4:3"
              }
            ],
            "id": 1863,
            "name": "VariableDeclaration",
            "src": "131:36:3"
          },
          {
            "attributes": {
              "name": "restricted",
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
                "id": 1864,
                "name": "ParameterList",
                "src": "193:2:3"
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
                            "typeIdentifier": "t_address",
                            "typeString": "address"
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
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "sender",
                              "referencedDeclaration": null,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8367,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 1865,
                                "name": "Identifier",
                                "src": "210:3:3"
                              }
                            ],
                            "id": 1866,
                            "name": "MemberAccess",
                            "src": "210:10:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1861,
                              "type": "address",
                              "value": "owner"
                            },
                            "id": 1867,
                            "name": "Identifier",
                            "src": "224:5:3"
                          }
                        ],
                        "id": 1868,
                        "name": "BinaryOperation",
                        "src": "210:19:3"
                      },
                      {
                        "id": 1869,
                        "name": "PlaceholderStatement",
                        "src": "231:1:3"
                      }
                    ],
                    "id": 1870,
                    "name": "IfStatement",
                    "src": "206:26:3"
                  }
                ],
                "id": 1871,
                "name": "Block",
                "src": "196:43:3"
              }
            ],
            "id": 1872,
            "name": "ModifierDefinition",
            "src": "174:65:3"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": true,
              "modifiers": [
                null
              ],
              "name": "Migrations",
              "payable": false,
              "scope": 1914,
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
                "id": 1873,
                "name": "ParameterList",
                "src": "264:2:3"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 1874,
                "name": "ParameterList",
                "src": "274:0:3"
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
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1861,
                              "type": "address",
                              "value": "owner"
                            },
                            "id": 1875,
                            "name": "Identifier",
                            "src": "284:5:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "sender",
                              "referencedDeclaration": null,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8367,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 1876,
                                "name": "Identifier",
                                "src": "292:3:3"
                              }
                            ],
                            "id": 1877,
                            "name": "MemberAccess",
                            "src": "292:10:3"
                          }
                        ],
                        "id": 1878,
                        "name": "Assignment",
                        "src": "284:18:3"
                      }
                    ],
                    "id": 1879,
                    "name": "ExpressionStatement",
                    "src": "284:18:3"
                  }
                ],
                "id": 1880,
                "name": "Block",
                "src": "274:35:3"
              }
            ],
            "id": 1881,
            "name": "FunctionDefinition",
            "src": "245:64:3"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "setCompleted",
              "payable": false,
              "scope": 1914,
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
                      "name": "completed",
                      "scope": 1893,
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
                        "id": 1882,
                        "name": "ElementaryTypeName",
                        "src": "337:4:3"
                      }
                    ],
                    "id": 1883,
                    "name": "VariableDeclaration",
                    "src": "337:14:3"
                  }
                ],
                "id": 1884,
                "name": "ParameterList",
                "src": "336:16:3"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 1887,
                "name": "ParameterList",
                "src": "371:0:3"
              },
              {
                "attributes": {
                  "arguments": [
                    null
                  ]
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 1872,
                      "type": "modifier ()",
                      "value": "restricted"
                    },
                    "id": 1885,
                    "name": "Identifier",
                    "src": "360:10:3"
                  }
                ],
                "id": 1886,
                "name": "ModifierInvocation",
                "src": "360:10:3"
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
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1863,
                              "type": "uint256",
                              "value": "last_completed_migration"
                            },
                            "id": 1888,
                            "name": "Identifier",
                            "src": "381:24:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1883,
                              "type": "uint256",
                              "value": "completed"
                            },
                            "id": 1889,
                            "name": "Identifier",
                            "src": "408:9:3"
                          }
                        ],
                        "id": 1890,
                        "name": "Assignment",
                        "src": "381:36:3"
                      }
                    ],
                    "id": 1891,
                    "name": "ExpressionStatement",
                    "src": "381:36:3"
                  }
                ],
                "id": 1892,
                "name": "Block",
                "src": "371:53:3"
              }
            ],
            "id": 1893,
            "name": "FunctionDefinition",
            "src": "315:109:3"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "upgrade",
              "payable": false,
              "scope": 1914,
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
                      "name": "newAddress",
                      "scope": 1913,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 1894,
                        "name": "ElementaryTypeName",
                        "src": "447:7:3"
                      }
                    ],
                    "id": 1895,
                    "name": "VariableDeclaration",
                    "src": "447:18:3"
                  }
                ],
                "id": 1896,
                "name": "ParameterList",
                "src": "446:20:3"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 1899,
                "name": "ParameterList",
                "src": "485:0:3"
              },
              {
                "attributes": {
                  "arguments": [
                    null
                  ]
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 1872,
                      "type": "modifier ()",
                      "value": "restricted"
                    },
                    "id": 1897,
                    "name": "Identifier",
                    "src": "474:10:3"
                  }
                ],
                "id": 1898,
                "name": "ModifierInvocation",
                "src": "474:10:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        1901
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "upgraded",
                          "scope": 1913,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "contract Migrations",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "contractScope": null,
                              "name": "Migrations",
                              "referencedDeclaration": 1914,
                              "type": "contract Migrations"
                            },
                            "id": 1900,
                            "name": "UserDefinedTypeName",
                            "src": "495:10:3"
                          }
                        ],
                        "id": 1901,
                        "name": "VariableDeclaration",
                        "src": "495:19:3"
                      },
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
                          "type": "contract Migrations",
                          "type_conversion": true
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1914,
                              "type": "type(contract Migrations)",
                              "value": "Migrations"
                            },
                            "id": 1902,
                            "name": "Identifier",
                            "src": "517:10:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1895,
                              "type": "address",
                              "value": "newAddress"
                            },
                            "id": 1903,
                            "name": "Identifier",
                            "src": "528:10:3"
                          }
                        ],
                        "id": 1904,
                        "name": "FunctionCall",
                        "src": "517:22:3"
                      }
                    ],
                    "id": 1905,
                    "name": "VariableDeclarationStatement",
                    "src": "495:44:3"
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
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "setCompleted",
                              "referencedDeclaration": 1893,
                              "type": "function (uint256) external"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1901,
                                  "type": "contract Migrations",
                                  "value": "upgraded"
                                },
                                "id": 1906,
                                "name": "Identifier",
                                "src": "549:8:3"
                              }
                            ],
                            "id": 1908,
                            "name": "MemberAccess",
                            "src": "549:21:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1863,
                              "type": "uint256",
                              "value": "last_completed_migration"
                            },
                            "id": 1909,
                            "name": "Identifier",
                            "src": "571:24:3"
                          }
                        ],
                        "id": 1910,
                        "name": "FunctionCall",
                        "src": "549:47:3"
                      }
                    ],
                    "id": 1911,
                    "name": "ExpressionStatement",
                    "src": "549:47:3"
                  }
                ],
                "id": 1912,
                "name": "Block",
                "src": "485:118:3"
              }
            ],
            "id": 1913,
            "name": "FunctionDefinition",
            "src": "430:173:3"
          }
        ],
        "id": 1914,
        "name": "ContractDefinition",
        "src": "26:579:3"
      }
    ],
    "id": 1915,
    "name": "SourceUnit",
    "src": "0:606:3"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-04-19T23:50:56.602Z"
}