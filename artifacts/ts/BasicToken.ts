export const BasicToken = 
{
  "contractName": "BasicToken",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
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
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "balance",
          "type": "uint256"
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
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    }
  ],
  "bytecode": "0x6060604052341561000f57600080fd5b6104008061001e6000396000f300606060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806318160ddd1461005c57806370a0823114610085578063a9059cbb146100d2575b600080fd5b341561006757600080fd5b61006f61012c565b6040518082815260200191505060405180910390f35b341561009057600080fd5b6100bc600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610136565b6040518082815260200191505060405180910390f35b34156100dd57600080fd5b610112600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190505061017e565b604051808215151515815260200191505060405180910390f35b6000600154905090565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156101bb57600080fd5b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561020857600080fd5b610259826000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461039d90919063ffffffff16565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506102ec826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546103b690919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b60008282111515156103ab57fe5b818303905092915050565b60008082840190508381101515156103ca57fe5b80915050929150505600a165627a7a7230582057c587c2e7e020568205be871cf9bfe29127587e0812350b876875a8430134c60029",
  "deployedBytecode": "0x606060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806318160ddd1461005c57806370a0823114610085578063a9059cbb146100d2575b600080fd5b341561006757600080fd5b61006f61012c565b6040518082815260200191505060405180910390f35b341561009057600080fd5b6100bc600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610136565b6040518082815260200191505060405180910390f35b34156100dd57600080fd5b610112600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190505061017e565b604051808215151515815260200191505060405180910390f35b6000600154905090565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156101bb57600080fd5b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561020857600080fd5b610259826000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461039d90919063ffffffff16565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506102ec826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546103b690919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b60008282111515156103ab57fe5b818303905092915050565b60008082840190508381101515156103ca57fe5b80915050929150505600a165627a7a7230582057c587c2e7e020568205be871cf9bfe29127587e0812350b876875a8430134c60029",
  "sourceMap": "180:1119:31:-;;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "180:1119:31:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;371:83;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1189:107;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;608:379;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;371:83;415:7;437:12;;430:19;;371:83;:::o;1189:107::-;1245:15;1275:8;:16;1284:6;1275:16;;;;;;;;;;;;;;;;1268:23;;1189:107;;;:::o;608:379::-;671:4;706:1;691:17;;:3;:17;;;;683:26;;;;;;;;733:8;:20;742:10;733:20;;;;;;;;;;;;;;;;723:6;:30;;715:39;;;;;;;;847:32;872:6;847:8;:20;856:10;847:20;;;;;;;;;;;;;;;;:24;;:32;;;;:::i;:::-;824:8;:20;833:10;824:20;;;;;;;;;;;;;;;:55;;;;901:25;919:6;901:8;:13;910:3;901:13;;;;;;;;;;;;;;;;:17;;:25;;;;:::i;:::-;885:8;:13;894:3;885:13;;;;;;;;;;;;;;;:41;;;;953:3;932:33;;941:10;932:33;;;958:6;932:33;;;;;;;;;;;;;;;;;;978:4;971:11;;608:379;;;;:::o;835:110:29:-;893:7;920:1;915;:6;;908:14;;;;;;939:1;935;:5;928:12;;835:110;;;;:::o;1007:129::-;1065:7;1080:9;1096:1;1092;:5;1080:17;;1115:1;1110;:6;;1103:14;;;;;;1130:1;1123:8;;1007:129;;;;;:::o",
  "source": "pragma solidity ^0.4.18;\n\n\nimport \"./ERC20Basic.sol\";\nimport \"../../math/SafeMath.sol\";\n\n\n/**\n * @title Basic token\n * @dev Basic version of StandardToken, with no allowances.\n */\ncontract BasicToken is ERC20Basic {\n  using SafeMath for uint256;\n\n  mapping(address => uint256) balances;\n\n  uint256 totalSupply_;\n\n  /**\n  * @dev total number of tokens in existence\n  */\n  function totalSupply() public view returns (uint256) {\n    return totalSupply_;\n  }\n\n  /**\n  * @dev transfer token for a specified address\n  * @param _to The address to transfer to.\n  * @param _value The amount to be transferred.\n  */\n  function transfer(address _to, uint256 _value) public returns (bool) {\n    require(_to != address(0));\n    require(_value <= balances[msg.sender]);\n\n    // SafeMath.sub will throw if there is not enough balance.\n    balances[msg.sender] = balances[msg.sender].sub(_value);\n    balances[_to] = balances[_to].add(_value);\n    Transfer(msg.sender, _to, _value);\n    return true;\n  }\n\n  /**\n  * @dev Gets the balance of the specified address.\n  * @param _owner The address to query the the balance of.\n  * @return An uint256 representing the amount owned by the passed address.\n  */\n  function balanceOf(address _owner) public view returns (uint256 balance) {\n    return balances[_owner];\n  }\n\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/token/ERC20/BasicToken.sol",
  "ast": {
    "attributes": {
      "absolutePath": "zeppelin-solidity/contracts/token/ERC20/BasicToken.sol",
      "exportedSymbols": {
        "BasicToken": [
          8199
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
        "id": 8105,
        "name": "PragmaDirective",
        "src": "0:24:31"
      },
      {
        "attributes": {
          "SourceUnit": 8275,
          "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20Basic.sol",
          "file": "./ERC20Basic.sol",
          "scope": 8200,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 8106,
        "name": "ImportDirective",
        "src": "27:26:31"
      },
      {
        "attributes": {
          "SourceUnit": 8048,
          "absolutePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
          "file": "../../math/SafeMath.sol",
          "scope": 8200,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 8107,
        "name": "ImportDirective",
        "src": "54:33:31"
      },
      {
        "attributes": {
          "contractDependencies": [
            8274
          ],
          "contractKind": "contract",
          "documentation": "@title Basic token\n@dev Basic version of StandardToken, with no allowances.",
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            8199,
            8274
          ],
          "name": "BasicToken",
          "scope": 8200
        },
        "children": [
          {
            "attributes": {
              "arguments": [
                null
              ]
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "ERC20Basic",
                  "referencedDeclaration": 8274,
                  "type": "contract ERC20Basic"
                },
                "id": 8108,
                "name": "UserDefinedTypeName",
                "src": "203:10:31"
              }
            ],
            "id": 8109,
            "name": "InheritanceSpecifier",
            "src": "203:10:31"
          },
          {
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "SafeMath",
                  "referencedDeclaration": 8047,
                  "type": "library SafeMath"
                },
                "id": 8110,
                "name": "UserDefinedTypeName",
                "src": "224:8:31"
              },
              {
                "attributes": {
                  "name": "uint256",
                  "type": "uint256"
                },
                "id": 8111,
                "name": "ElementaryTypeName",
                "src": "237:7:31"
              }
            ],
            "id": 8112,
            "name": "UsingForDirective",
            "src": "218:27:31"
          },
          {
            "attributes": {
              "constant": false,
              "name": "balances",
              "scope": 8199,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(address => uint256)",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(address => uint256)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "address",
                      "type": "address"
                    },
                    "id": 8113,
                    "name": "ElementaryTypeName",
                    "src": "257:7:31"
                  },
                  {
                    "attributes": {
                      "name": "uint256",
                      "type": "uint256"
                    },
                    "id": 8114,
                    "name": "ElementaryTypeName",
                    "src": "268:7:31"
                  }
                ],
                "id": 8115,
                "name": "Mapping",
                "src": "249:27:31"
              }
            ],
            "id": 8116,
            "name": "VariableDeclaration",
            "src": "249:36:31"
          },
          {
            "attributes": {
              "constant": false,
              "name": "totalSupply_",
              "scope": 8199,
              "stateVariable": true,
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
                "id": 8117,
                "name": "ElementaryTypeName",
                "src": "290:7:31"
              }
            ],
            "id": 8118,
            "name": "VariableDeclaration",
            "src": "290:20:31"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "totalSupply",
              "payable": false,
              "scope": 8199,
              "stateMutability": "view",
              "superFunction": 8249,
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
                "id": 8119,
                "name": "ParameterList",
                "src": "391:2:31"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 8126,
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
                        "id": 8120,
                        "name": "ElementaryTypeName",
                        "src": "415:7:31"
                      }
                    ],
                    "id": 8121,
                    "name": "VariableDeclaration",
                    "src": "415:7:31"
                  }
                ],
                "id": 8122,
                "name": "ParameterList",
                "src": "414:9:31"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 8122
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 8118,
                          "type": "uint256",
                          "value": "totalSupply_"
                        },
                        "id": 8123,
                        "name": "Identifier",
                        "src": "437:12:31"
                      }
                    ],
                    "id": 8124,
                    "name": "Return",
                    "src": "430:19:31"
                  }
                ],
                "id": 8125,
                "name": "Block",
                "src": "424:30:31"
              }
            ],
            "id": 8126,
            "name": "FunctionDefinition",
            "src": "371:83:31"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "transfer",
              "payable": false,
              "scope": 8199,
              "stateMutability": "nonpayable",
              "superFunction": 8265,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 8186,
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
                        "id": 8127,
                        "name": "ElementaryTypeName",
                        "src": "626:7:31"
                      }
                    ],
                    "id": 8128,
                    "name": "VariableDeclaration",
                    "src": "626:11:31"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_value",
                      "scope": 8186,
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
                        "id": 8129,
                        "name": "ElementaryTypeName",
                        "src": "639:7:31"
                      }
                    ],
                    "id": 8130,
                    "name": "VariableDeclaration",
                    "src": "639:14:31"
                  }
                ],
                "id": 8131,
                "name": "ParameterList",
                "src": "625:29:31"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 8186,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 8132,
                        "name": "ElementaryTypeName",
                        "src": "671:4:31"
                      }
                    ],
                    "id": 8133,
                    "name": "VariableDeclaration",
                    "src": "671:4:31"
                  }
                ],
                "id": 8134,
                "name": "ParameterList",
                "src": "670:6:31"
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
                              "referencedDeclaration": 9788,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 8135,
                            "name": "Identifier",
                            "src": "683:7:31"
                          },
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
                              "operator": "!=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8128,
                                  "type": "address",
                                  "value": "_to"
                                },
                                "id": 8136,
                                "name": "Identifier",
                                "src": "691:3:31"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "address",
                                  "type_conversion": true
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_rational_0_by_1",
                                          "typeString": "int_const 0"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "type": "type(address)",
                                      "value": "address"
                                    },
                                    "id": 8137,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "698:7:31"
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
                                    "id": 8138,
                                    "name": "Literal",
                                    "src": "706:1:31"
                                  }
                                ],
                                "id": 8139,
                                "name": "FunctionCall",
                                "src": "698:10:31"
                              }
                            ],
                            "id": 8140,
                            "name": "BinaryOperation",
                            "src": "691:17:31"
                          }
                        ],
                        "id": 8141,
                        "name": "FunctionCall",
                        "src": "683:26:31"
                      }
                    ],
                    "id": 8142,
                    "name": "ExpressionStatement",
                    "src": "683:26:31"
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
                              "referencedDeclaration": 9788,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 8143,
                            "name": "Identifier",
                            "src": "715:7:31"
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
                                  "referencedDeclaration": 8130,
                                  "type": "uint256",
                                  "value": "_value"
                                },
                                "id": 8144,
                                "name": "Identifier",
                                "src": "723:6:31"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 8116,
                                      "type": "mapping(address => uint256)",
                                      "value": "balances"
                                    },
                                    "id": 8145,
                                    "name": "Identifier",
                                    "src": "733:8:31"
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
                                          "referencedDeclaration": 9785,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 8146,
                                        "name": "Identifier",
                                        "src": "742:3:31"
                                      }
                                    ],
                                    "id": 8147,
                                    "name": "MemberAccess",
                                    "src": "742:10:31"
                                  }
                                ],
                                "id": 8148,
                                "name": "IndexAccess",
                                "src": "733:20:31"
                              }
                            ],
                            "id": 8149,
                            "name": "BinaryOperation",
                            "src": "723:30:31"
                          }
                        ],
                        "id": 8150,
                        "name": "FunctionCall",
                        "src": "715:39:31"
                      }
                    ],
                    "id": 8151,
                    "name": "ExpressionStatement",
                    "src": "715:39:31"
                  },
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
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8116,
                                  "type": "mapping(address => uint256)",
                                  "value": "balances"
                                },
                                "id": 8152,
                                "name": "Identifier",
                                "src": "824:8:31"
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
                                      "referencedDeclaration": 9785,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 8153,
                                    "name": "Identifier",
                                    "src": "833:3:31"
                                  }
                                ],
                                "id": 8154,
                                "name": "MemberAccess",
                                "src": "833:10:31"
                              }
                            ],
                            "id": 8155,
                            "name": "IndexAccess",
                            "src": "824:20:31"
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
                              "type": "uint256",
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
                                  "member_name": "sub",
                                  "referencedDeclaration": 8022,
                                  "type": "function (uint256,uint256) pure returns (uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 8116,
                                          "type": "mapping(address => uint256)",
                                          "value": "balances"
                                        },
                                        "id": 8156,
                                        "name": "Identifier",
                                        "src": "847:8:31"
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
                                              "referencedDeclaration": 9785,
                                              "type": "msg",
                                              "value": "msg"
                                            },
                                            "id": 8157,
                                            "name": "Identifier",
                                            "src": "856:3:31"
                                          }
                                        ],
                                        "id": 8158,
                                        "name": "MemberAccess",
                                        "src": "856:10:31"
                                      }
                                    ],
                                    "id": 8159,
                                    "name": "IndexAccess",
                                    "src": "847:20:31"
                                  }
                                ],
                                "id": 8160,
                                "name": "MemberAccess",
                                "src": "847:24:31"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8130,
                                  "type": "uint256",
                                  "value": "_value"
                                },
                                "id": 8161,
                                "name": "Identifier",
                                "src": "872:6:31"
                              }
                            ],
                            "id": 8162,
                            "name": "FunctionCall",
                            "src": "847:32:31"
                          }
                        ],
                        "id": 8163,
                        "name": "Assignment",
                        "src": "824:55:31"
                      }
                    ],
                    "id": 8164,
                    "name": "ExpressionStatement",
                    "src": "824:55:31"
                  },
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
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8116,
                                  "type": "mapping(address => uint256)",
                                  "value": "balances"
                                },
                                "id": 8165,
                                "name": "Identifier",
                                "src": "885:8:31"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8128,
                                  "type": "address",
                                  "value": "_to"
                                },
                                "id": 8166,
                                "name": "Identifier",
                                "src": "894:3:31"
                              }
                            ],
                            "id": 8167,
                            "name": "IndexAccess",
                            "src": "885:13:31"
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
                              "type": "uint256",
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
                                  "member_name": "add",
                                  "referencedDeclaration": 8046,
                                  "type": "function (uint256,uint256) pure returns (uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 8116,
                                          "type": "mapping(address => uint256)",
                                          "value": "balances"
                                        },
                                        "id": 8168,
                                        "name": "Identifier",
                                        "src": "901:8:31"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 8128,
                                          "type": "address",
                                          "value": "_to"
                                        },
                                        "id": 8169,
                                        "name": "Identifier",
                                        "src": "910:3:31"
                                      }
                                    ],
                                    "id": 8170,
                                    "name": "IndexAccess",
                                    "src": "901:13:31"
                                  }
                                ],
                                "id": 8171,
                                "name": "MemberAccess",
                                "src": "901:17:31"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8130,
                                  "type": "uint256",
                                  "value": "_value"
                                },
                                "id": 8172,
                                "name": "Identifier",
                                "src": "919:6:31"
                              }
                            ],
                            "id": 8173,
                            "name": "FunctionCall",
                            "src": "901:25:31"
                          }
                        ],
                        "id": 8174,
                        "name": "Assignment",
                        "src": "885:41:31"
                      }
                    ],
                    "id": 8175,
                    "name": "ExpressionStatement",
                    "src": "885:41:31"
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
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8273,
                              "type": "function (address,address,uint256)",
                              "value": "Transfer"
                            },
                            "id": 8176,
                            "name": "Identifier",
                            "src": "932:8:31"
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
                                  "referencedDeclaration": 9785,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 8177,
                                "name": "Identifier",
                                "src": "941:3:31"
                              }
                            ],
                            "id": 8178,
                            "name": "MemberAccess",
                            "src": "941:10:31"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8128,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 8179,
                            "name": "Identifier",
                            "src": "953:3:31"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8130,
                              "type": "uint256",
                              "value": "_value"
                            },
                            "id": 8180,
                            "name": "Identifier",
                            "src": "958:6:31"
                          }
                        ],
                        "id": 8181,
                        "name": "FunctionCall",
                        "src": "932:33:31"
                      }
                    ],
                    "id": 8182,
                    "name": "ExpressionStatement",
                    "src": "932:33:31"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 8134
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "hexvalue": "74727565",
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "subdenomination": null,
                          "token": "bool",
                          "type": "bool",
                          "value": "true"
                        },
                        "id": 8183,
                        "name": "Literal",
                        "src": "978:4:31"
                      }
                    ],
                    "id": 8184,
                    "name": "Return",
                    "src": "971:11:31"
                  }
                ],
                "id": 8185,
                "name": "Block",
                "src": "677:310:31"
              }
            ],
            "id": 8186,
            "name": "FunctionDefinition",
            "src": "608:379:31"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "balanceOf",
              "payable": false,
              "scope": 8199,
              "stateMutability": "view",
              "superFunction": 8256,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_owner",
                      "scope": 8198,
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
                        "id": 8187,
                        "name": "ElementaryTypeName",
                        "src": "1208:7:31"
                      }
                    ],
                    "id": 8188,
                    "name": "VariableDeclaration",
                    "src": "1208:14:31"
                  }
                ],
                "id": 8189,
                "name": "ParameterList",
                "src": "1207:16:31"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "balance",
                      "scope": 8198,
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
                        "id": 8190,
                        "name": "ElementaryTypeName",
                        "src": "1245:7:31"
                      }
                    ],
                    "id": 8191,
                    "name": "VariableDeclaration",
                    "src": "1245:15:31"
                  }
                ],
                "id": 8192,
                "name": "ParameterList",
                "src": "1244:17:31"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 8192
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8116,
                              "type": "mapping(address => uint256)",
                              "value": "balances"
                            },
                            "id": 8193,
                            "name": "Identifier",
                            "src": "1275:8:31"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8188,
                              "type": "address",
                              "value": "_owner"
                            },
                            "id": 8194,
                            "name": "Identifier",
                            "src": "1284:6:31"
                          }
                        ],
                        "id": 8195,
                        "name": "IndexAccess",
                        "src": "1275:16:31"
                      }
                    ],
                    "id": 8196,
                    "name": "Return",
                    "src": "1268:23:31"
                  }
                ],
                "id": 8197,
                "name": "Block",
                "src": "1262:34:31"
              }
            ],
            "id": 8198,
            "name": "FunctionDefinition",
            "src": "1189:107:31"
          }
        ],
        "id": 8199,
        "name": "ContractDefinition",
        "src": "180:1119:31"
      }
    ],
    "id": 8200,
    "name": "SourceUnit",
    "src": "0:1300:31"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-04-25T07:03:31.168Z"
}