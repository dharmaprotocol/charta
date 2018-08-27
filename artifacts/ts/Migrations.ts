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
  "bytecode": "0x6060604052341561000f57600080fd5b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506102db8061005e6000396000f300606060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630900f01014610067578063445df0ac146100a05780638da5cb5b146100c9578063fdacd5761461011e575b600080fd5b341561007257600080fd5b61009e600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610141565b005b34156100ab57600080fd5b6100b3610224565b6040518082815260200191505060405180910390f35b34156100d457600080fd5b6100dc61022a565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561012957600080fd5b61013f600480803590602001909190505061024f565b005b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610220578190508073ffffffffffffffffffffffffffffffffffffffff1663fdacd5766001546040518263ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180828152602001915050600060405180830381600087803b151561020b57600080fd5b6102c65a03f1151561021c57600080fd5b5050505b5050565b60015481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156102ac57806001819055505b505600a165627a7a72305820c7e7b6c42b77e11556d6c62893608c94e6061da7086e349e40976d7895e94deb0029",
  "deployedBytecode": "0x606060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630900f01014610067578063445df0ac146100a05780638da5cb5b146100c9578063fdacd5761461011e575b600080fd5b341561007257600080fd5b61009e600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610141565b005b34156100ab57600080fd5b6100b3610224565b6040518082815260200191505060405180910390f35b34156100d457600080fd5b6100dc61022a565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561012957600080fd5b61013f600480803590602001909190505061024f565b005b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610220578190508073ffffffffffffffffffffffffffffffffffffffff1663fdacd5766001546040518263ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180828152602001915050600060405180830381600087803b151561020b57600080fd5b6102c65a03f1151561021c57600080fd5b5050505b5050565b60015481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156102ac57806001819055505b505600a165627a7a72305820c7e7b6c42b77e11556d6c62893608c94e6061da7086e349e40976d7895e94deb0029",
  "sourceMap": "26:579:8:-;;;245:64;;;;;;;;292:10;284:5;;:18;;;;;;;;;;;;;;;;;;26:579;;;;;;",
  "deployedSourceMap": "26:579:8:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;430:173;;;;;;;;;;;;;;;;;;;;;;;;;;;;131:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;52:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;315:109;;;;;;;;;;;;;;;;;;;;;;;;;;430:173;495:19;224:5;;;;;;;;;;;210:19;;:10;:19;;;206:26;;;528:10;495:44;;549:8;:21;;;571:24;;549:47;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;206:26;430:173;;:::o;131:36::-;;;;:::o;52:20::-;;;;;;;;;;;;;:::o;315:109::-;224:5;;;;;;;;;;;210:19;;:10;:19;;;206:26;;;408:9;381:24;:36;;;;206:26;315:109;:::o",
  "source": "pragma solidity 0.4.18;\n\n\ncontract Migrations {\n    address public owner;\n\n    // solhint-disable-next-line var-name-mixedcase\n    uint public last_completed_migration;\n\n    modifier restricted() {\n        if (msg.sender == owner) _;\n    }\n\n    function Migrations() public {\n        owner = msg.sender;\n    }\n\n    function setCompleted(uint completed) public restricted {\n        last_completed_migration = completed;\n    }\n\n    function upgrade(address newAddress) public restricted {\n        Migrations upgraded = Migrations(newAddress);\n        upgraded.setCompleted(last_completed_migration);\n    }\n}\n",
  "sourcePath": "/Users/graemeboy/Dharma/charta/contracts/Migrations.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/graemeboy/Dharma/charta/contracts/Migrations.sol",
      "exportedSymbols": {
        "Migrations": [
          3946
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
        "id": 3891,
        "name": "PragmaDirective",
        "src": "0:23:8"
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
            3946
          ],
          "name": "Migrations",
          "scope": 3947
        },
        "children": [
          {
            "attributes": {
              "constant": false,
              "name": "owner",
              "scope": 3946,
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
                "id": 3892,
                "name": "ElementaryTypeName",
                "src": "52:7:8"
              }
            ],
            "id": 3893,
            "name": "VariableDeclaration",
            "src": "52:20:8"
          },
          {
            "attributes": {
              "constant": false,
              "name": "last_completed_migration",
              "scope": 3946,
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
                "id": 3894,
                "name": "ElementaryTypeName",
                "src": "131:4:8"
              }
            ],
            "id": 3895,
            "name": "VariableDeclaration",
            "src": "131:36:8"
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
                "id": 3896,
                "name": "ParameterList",
                "src": "193:2:8"
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
                                  "referencedDeclaration": 15084,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 3897,
                                "name": "Identifier",
                                "src": "210:3:8"
                              }
                            ],
                            "id": 3898,
                            "name": "MemberAccess",
                            "src": "210:10:8"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3893,
                              "type": "address",
                              "value": "owner"
                            },
                            "id": 3899,
                            "name": "Identifier",
                            "src": "224:5:8"
                          }
                        ],
                        "id": 3900,
                        "name": "BinaryOperation",
                        "src": "210:19:8"
                      },
                      {
                        "id": 3901,
                        "name": "PlaceholderStatement",
                        "src": "231:1:8"
                      }
                    ],
                    "id": 3902,
                    "name": "IfStatement",
                    "src": "206:26:8"
                  }
                ],
                "id": 3903,
                "name": "Block",
                "src": "196:43:8"
              }
            ],
            "id": 3904,
            "name": "ModifierDefinition",
            "src": "174:65:8"
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
              "scope": 3946,
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
                "id": 3905,
                "name": "ParameterList",
                "src": "264:2:8"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 3906,
                "name": "ParameterList",
                "src": "274:0:8"
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
                              "referencedDeclaration": 3893,
                              "type": "address",
                              "value": "owner"
                            },
                            "id": 3907,
                            "name": "Identifier",
                            "src": "284:5:8"
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
                                  "referencedDeclaration": 15084,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 3908,
                                "name": "Identifier",
                                "src": "292:3:8"
                              }
                            ],
                            "id": 3909,
                            "name": "MemberAccess",
                            "src": "292:10:8"
                          }
                        ],
                        "id": 3910,
                        "name": "Assignment",
                        "src": "284:18:8"
                      }
                    ],
                    "id": 3911,
                    "name": "ExpressionStatement",
                    "src": "284:18:8"
                  }
                ],
                "id": 3912,
                "name": "Block",
                "src": "274:35:8"
              }
            ],
            "id": 3913,
            "name": "FunctionDefinition",
            "src": "245:64:8"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "setCompleted",
              "payable": false,
              "scope": 3946,
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
                      "scope": 3925,
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
                        "id": 3914,
                        "name": "ElementaryTypeName",
                        "src": "337:4:8"
                      }
                    ],
                    "id": 3915,
                    "name": "VariableDeclaration",
                    "src": "337:14:8"
                  }
                ],
                "id": 3916,
                "name": "ParameterList",
                "src": "336:16:8"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 3919,
                "name": "ParameterList",
                "src": "371:0:8"
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
                      "referencedDeclaration": 3904,
                      "type": "modifier ()",
                      "value": "restricted"
                    },
                    "id": 3917,
                    "name": "Identifier",
                    "src": "360:10:8"
                  }
                ],
                "id": 3918,
                "name": "ModifierInvocation",
                "src": "360:10:8"
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
                              "referencedDeclaration": 3895,
                              "type": "uint256",
                              "value": "last_completed_migration"
                            },
                            "id": 3920,
                            "name": "Identifier",
                            "src": "381:24:8"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3915,
                              "type": "uint256",
                              "value": "completed"
                            },
                            "id": 3921,
                            "name": "Identifier",
                            "src": "408:9:8"
                          }
                        ],
                        "id": 3922,
                        "name": "Assignment",
                        "src": "381:36:8"
                      }
                    ],
                    "id": 3923,
                    "name": "ExpressionStatement",
                    "src": "381:36:8"
                  }
                ],
                "id": 3924,
                "name": "Block",
                "src": "371:53:8"
              }
            ],
            "id": 3925,
            "name": "FunctionDefinition",
            "src": "315:109:8"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "upgrade",
              "payable": false,
              "scope": 3946,
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
                      "scope": 3945,
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
                        "id": 3926,
                        "name": "ElementaryTypeName",
                        "src": "447:7:8"
                      }
                    ],
                    "id": 3927,
                    "name": "VariableDeclaration",
                    "src": "447:18:8"
                  }
                ],
                "id": 3928,
                "name": "ParameterList",
                "src": "446:20:8"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 3931,
                "name": "ParameterList",
                "src": "485:0:8"
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
                      "referencedDeclaration": 3904,
                      "type": "modifier ()",
                      "value": "restricted"
                    },
                    "id": 3929,
                    "name": "Identifier",
                    "src": "474:10:8"
                  }
                ],
                "id": 3930,
                "name": "ModifierInvocation",
                "src": "474:10:8"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        3933
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "upgraded",
                          "scope": 3945,
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
                              "referencedDeclaration": 3946,
                              "type": "contract Migrations"
                            },
                            "id": 3932,
                            "name": "UserDefinedTypeName",
                            "src": "495:10:8"
                          }
                        ],
                        "id": 3933,
                        "name": "VariableDeclaration",
                        "src": "495:19:8"
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
                              "referencedDeclaration": 3946,
                              "type": "type(contract Migrations)",
                              "value": "Migrations"
                            },
                            "id": 3934,
                            "name": "Identifier",
                            "src": "517:10:8"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3927,
                              "type": "address",
                              "value": "newAddress"
                            },
                            "id": 3935,
                            "name": "Identifier",
                            "src": "528:10:8"
                          }
                        ],
                        "id": 3936,
                        "name": "FunctionCall",
                        "src": "517:22:8"
                      }
                    ],
                    "id": 3937,
                    "name": "VariableDeclarationStatement",
                    "src": "495:44:8"
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
                              "referencedDeclaration": 3925,
                              "type": "function (uint256) external"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3933,
                                  "type": "contract Migrations",
                                  "value": "upgraded"
                                },
                                "id": 3938,
                                "name": "Identifier",
                                "src": "549:8:8"
                              }
                            ],
                            "id": 3940,
                            "name": "MemberAccess",
                            "src": "549:21:8"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3895,
                              "type": "uint256",
                              "value": "last_completed_migration"
                            },
                            "id": 3941,
                            "name": "Identifier",
                            "src": "571:24:8"
                          }
                        ],
                        "id": 3942,
                        "name": "FunctionCall",
                        "src": "549:47:8"
                      }
                    ],
                    "id": 3943,
                    "name": "ExpressionStatement",
                    "src": "549:47:8"
                  }
                ],
                "id": 3944,
                "name": "Block",
                "src": "485:118:8"
              }
            ],
            "id": 3945,
            "name": "FunctionDefinition",
            "src": "430:173:8"
          }
        ],
        "id": 3946,
        "name": "ContractDefinition",
        "src": "26:579:8"
      }
    ],
    "id": 3947,
    "name": "SourceUnit",
    "src": "0:606:8"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-08-26T18:11:49.144Z"
}