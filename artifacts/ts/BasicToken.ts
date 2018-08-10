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
  "sourceMap": "180:1119:36:-;;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "180:1119:36:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;371:83;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1189:107;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;608:379;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;371:83;415:7;437:12;;430:19;;371:83;:::o;1189:107::-;1245:15;1275:8;:16;1284:6;1275:16;;;;;;;;;;;;;;;;1268:23;;1189:107;;;:::o;608:379::-;671:4;706:1;691:17;;:3;:17;;;;683:26;;;;;;;;733:8;:20;742:10;733:20;;;;;;;;;;;;;;;;723:6;:30;;715:39;;;;;;;;847:32;872:6;847:8;:20;856:10;847:20;;;;;;;;;;;;;;;;:24;;:32;;;;:::i;:::-;824:8;:20;833:10;824:20;;;;;;;;;;;;;;;:55;;;;901:25;919:6;901:8;:13;910:3;901:13;;;;;;;;;;;;;;;;:17;;:25;;;;:::i;:::-;885:8;:13;894:3;885:13;;;;;;;;;;;;;;;:41;;;;953:3;932:33;;941:10;932:33;;;958:6;932:33;;;;;;;;;;;;;;;;;;978:4;971:11;;608:379;;;;:::o;835:110:34:-;893:7;920:1;915;:6;;908:14;;;;;;939:1;935;:5;928:12;;835:110;;;;:::o;1007:129::-;1065:7;1080:9;1096:1;1092;:5;1080:17;;1115:1;1110;:6;;1103:14;;;;;;1130:1;1123:8;;1007:129;;;;;:::o",
  "source": "pragma solidity ^0.4.18;\n\n\nimport \"./ERC20Basic.sol\";\nimport \"../../math/SafeMath.sol\";\n\n\n/**\n * @title Basic token\n * @dev Basic version of StandardToken, with no allowances.\n */\ncontract BasicToken is ERC20Basic {\n  using SafeMath for uint256;\n\n  mapping(address => uint256) balances;\n\n  uint256 totalSupply_;\n\n  /**\n  * @dev total number of tokens in existence\n  */\n  function totalSupply() public view returns (uint256) {\n    return totalSupply_;\n  }\n\n  /**\n  * @dev transfer token for a specified address\n  * @param _to The address to transfer to.\n  * @param _value The amount to be transferred.\n  */\n  function transfer(address _to, uint256 _value) public returns (bool) {\n    require(_to != address(0));\n    require(_value <= balances[msg.sender]);\n\n    // SafeMath.sub will throw if there is not enough balance.\n    balances[msg.sender] = balances[msg.sender].sub(_value);\n    balances[_to] = balances[_to].add(_value);\n    Transfer(msg.sender, _to, _value);\n    return true;\n  }\n\n  /**\n  * @dev Gets the balance of the specified address.\n  * @param _owner The address to query the the balance of.\n  * @return An uint256 representing the amount owned by the passed address.\n  */\n  function balanceOf(address _owner) public view returns (uint256 balance) {\n    return balances[_owner];\n  }\n\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/token/ERC20/BasicToken.sol",
  "ast": {
    "attributes": {
      "absolutePath": "zeppelin-solidity/contracts/token/ERC20/BasicToken.sol",
      "exportedSymbols": {
        "BasicToken": [
          10221
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
        "id": 10127,
        "name": "PragmaDirective",
        "src": "0:24:36"
      },
      {
        "attributes": {
          "SourceUnit": 10297,
          "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20Basic.sol",
          "file": "./ERC20Basic.sol",
          "scope": 10222,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 10128,
        "name": "ImportDirective",
        "src": "27:26:36"
      },
      {
        "attributes": {
          "SourceUnit": 10070,
          "absolutePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
          "file": "../../math/SafeMath.sol",
          "scope": 10222,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 10129,
        "name": "ImportDirective",
        "src": "54:33:36"
      },
      {
        "attributes": {
          "contractDependencies": [
            10296
          ],
          "contractKind": "contract",
          "documentation": "@title Basic token\n@dev Basic version of StandardToken, with no allowances.",
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            10221,
            10296
          ],
          "name": "BasicToken",
          "scope": 10222
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
                  "referencedDeclaration": 10296,
                  "type": "contract ERC20Basic"
                },
                "id": 10130,
                "name": "UserDefinedTypeName",
                "src": "203:10:36"
              }
            ],
            "id": 10131,
            "name": "InheritanceSpecifier",
            "src": "203:10:36"
          },
          {
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "SafeMath",
                  "referencedDeclaration": 10069,
                  "type": "library SafeMath"
                },
                "id": 10132,
                "name": "UserDefinedTypeName",
                "src": "224:8:36"
              },
              {
                "attributes": {
                  "name": "uint256",
                  "type": "uint256"
                },
                "id": 10133,
                "name": "ElementaryTypeName",
                "src": "237:7:36"
              }
            ],
            "id": 10134,
            "name": "UsingForDirective",
            "src": "218:27:36"
          },
          {
            "attributes": {
              "constant": false,
              "name": "balances",
              "scope": 10221,
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
                    "id": 10135,
                    "name": "ElementaryTypeName",
                    "src": "257:7:36"
                  },
                  {
                    "attributes": {
                      "name": "uint256",
                      "type": "uint256"
                    },
                    "id": 10136,
                    "name": "ElementaryTypeName",
                    "src": "268:7:36"
                  }
                ],
                "id": 10137,
                "name": "Mapping",
                "src": "249:27:36"
              }
            ],
            "id": 10138,
            "name": "VariableDeclaration",
            "src": "249:36:36"
          },
          {
            "attributes": {
              "constant": false,
              "name": "totalSupply_",
              "scope": 10221,
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
                "id": 10139,
                "name": "ElementaryTypeName",
                "src": "290:7:36"
              }
            ],
            "id": 10140,
            "name": "VariableDeclaration",
            "src": "290:20:36"
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
              "scope": 10221,
              "stateMutability": "view",
              "superFunction": 10271,
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
                "id": 10141,
                "name": "ParameterList",
                "src": "391:2:36"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 10148,
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
                        "id": 10142,
                        "name": "ElementaryTypeName",
                        "src": "415:7:36"
                      }
                    ],
                    "id": 10143,
                    "name": "VariableDeclaration",
                    "src": "415:7:36"
                  }
                ],
                "id": 10144,
                "name": "ParameterList",
                "src": "414:9:36"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 10144
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 10140,
                          "type": "uint256",
                          "value": "totalSupply_"
                        },
                        "id": 10145,
                        "name": "Identifier",
                        "src": "437:12:36"
                      }
                    ],
                    "id": 10146,
                    "name": "Return",
                    "src": "430:19:36"
                  }
                ],
                "id": 10147,
                "name": "Block",
                "src": "424:30:36"
              }
            ],
            "id": 10148,
            "name": "FunctionDefinition",
            "src": "371:83:36"
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
              "scope": 10221,
              "stateMutability": "nonpayable",
              "superFunction": 10287,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 10208,
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
                        "id": 10149,
                        "name": "ElementaryTypeName",
                        "src": "626:7:36"
                      }
                    ],
                    "id": 10150,
                    "name": "VariableDeclaration",
                    "src": "626:11:36"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_value",
                      "scope": 10208,
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
                        "id": 10151,
                        "name": "ElementaryTypeName",
                        "src": "639:7:36"
                      }
                    ],
                    "id": 10152,
                    "name": "VariableDeclaration",
                    "src": "639:14:36"
                  }
                ],
                "id": 10153,
                "name": "ParameterList",
                "src": "625:29:36"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 10208,
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
                        "id": 10154,
                        "name": "ElementaryTypeName",
                        "src": "671:4:36"
                      }
                    ],
                    "id": 10155,
                    "name": "VariableDeclaration",
                    "src": "671:4:36"
                  }
                ],
                "id": 10156,
                "name": "ParameterList",
                "src": "670:6:36"
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
                              "referencedDeclaration": 11810,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 10157,
                            "name": "Identifier",
                            "src": "683:7:36"
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
                                  "referencedDeclaration": 10150,
                                  "type": "address",
                                  "value": "_to"
                                },
                                "id": 10158,
                                "name": "Identifier",
                                "src": "691:3:36"
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
                                    "id": 10159,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "698:7:36"
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
                                    "id": 10160,
                                    "name": "Literal",
                                    "src": "706:1:36"
                                  }
                                ],
                                "id": 10161,
                                "name": "FunctionCall",
                                "src": "698:10:36"
                              }
                            ],
                            "id": 10162,
                            "name": "BinaryOperation",
                            "src": "691:17:36"
                          }
                        ],
                        "id": 10163,
                        "name": "FunctionCall",
                        "src": "683:26:36"
                      }
                    ],
                    "id": 10164,
                    "name": "ExpressionStatement",
                    "src": "683:26:36"
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
                              "referencedDeclaration": 11810,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 10165,
                            "name": "Identifier",
                            "src": "715:7:36"
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
                                  "referencedDeclaration": 10152,
                                  "type": "uint256",
                                  "value": "_value"
                                },
                                "id": 10166,
                                "name": "Identifier",
                                "src": "723:6:36"
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
                                      "referencedDeclaration": 10138,
                                      "type": "mapping(address => uint256)",
                                      "value": "balances"
                                    },
                                    "id": 10167,
                                    "name": "Identifier",
                                    "src": "733:8:36"
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
                                          "referencedDeclaration": 11807,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 10168,
                                        "name": "Identifier",
                                        "src": "742:3:36"
                                      }
                                    ],
                                    "id": 10169,
                                    "name": "MemberAccess",
                                    "src": "742:10:36"
                                  }
                                ],
                                "id": 10170,
                                "name": "IndexAccess",
                                "src": "733:20:36"
                              }
                            ],
                            "id": 10171,
                            "name": "BinaryOperation",
                            "src": "723:30:36"
                          }
                        ],
                        "id": 10172,
                        "name": "FunctionCall",
                        "src": "715:39:36"
                      }
                    ],
                    "id": 10173,
                    "name": "ExpressionStatement",
                    "src": "715:39:36"
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
                                  "referencedDeclaration": 10138,
                                  "type": "mapping(address => uint256)",
                                  "value": "balances"
                                },
                                "id": 10174,
                                "name": "Identifier",
                                "src": "824:8:36"
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
                                      "referencedDeclaration": 11807,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 10175,
                                    "name": "Identifier",
                                    "src": "833:3:36"
                                  }
                                ],
                                "id": 10176,
                                "name": "MemberAccess",
                                "src": "833:10:36"
                              }
                            ],
                            "id": 10177,
                            "name": "IndexAccess",
                            "src": "824:20:36"
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
                                  "referencedDeclaration": 10044,
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
                                          "referencedDeclaration": 10138,
                                          "type": "mapping(address => uint256)",
                                          "value": "balances"
                                        },
                                        "id": 10178,
                                        "name": "Identifier",
                                        "src": "847:8:36"
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
                                              "referencedDeclaration": 11807,
                                              "type": "msg",
                                              "value": "msg"
                                            },
                                            "id": 10179,
                                            "name": "Identifier",
                                            "src": "856:3:36"
                                          }
                                        ],
                                        "id": 10180,
                                        "name": "MemberAccess",
                                        "src": "856:10:36"
                                      }
                                    ],
                                    "id": 10181,
                                    "name": "IndexAccess",
                                    "src": "847:20:36"
                                  }
                                ],
                                "id": 10182,
                                "name": "MemberAccess",
                                "src": "847:24:36"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 10152,
                                  "type": "uint256",
                                  "value": "_value"
                                },
                                "id": 10183,
                                "name": "Identifier",
                                "src": "872:6:36"
                              }
                            ],
                            "id": 10184,
                            "name": "FunctionCall",
                            "src": "847:32:36"
                          }
                        ],
                        "id": 10185,
                        "name": "Assignment",
                        "src": "824:55:36"
                      }
                    ],
                    "id": 10186,
                    "name": "ExpressionStatement",
                    "src": "824:55:36"
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
                                  "referencedDeclaration": 10138,
                                  "type": "mapping(address => uint256)",
                                  "value": "balances"
                                },
                                "id": 10187,
                                "name": "Identifier",
                                "src": "885:8:36"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 10150,
                                  "type": "address",
                                  "value": "_to"
                                },
                                "id": 10188,
                                "name": "Identifier",
                                "src": "894:3:36"
                              }
                            ],
                            "id": 10189,
                            "name": "IndexAccess",
                            "src": "885:13:36"
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
                                  "referencedDeclaration": 10068,
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
                                          "referencedDeclaration": 10138,
                                          "type": "mapping(address => uint256)",
                                          "value": "balances"
                                        },
                                        "id": 10190,
                                        "name": "Identifier",
                                        "src": "901:8:36"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 10150,
                                          "type": "address",
                                          "value": "_to"
                                        },
                                        "id": 10191,
                                        "name": "Identifier",
                                        "src": "910:3:36"
                                      }
                                    ],
                                    "id": 10192,
                                    "name": "IndexAccess",
                                    "src": "901:13:36"
                                  }
                                ],
                                "id": 10193,
                                "name": "MemberAccess",
                                "src": "901:17:36"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 10152,
                                  "type": "uint256",
                                  "value": "_value"
                                },
                                "id": 10194,
                                "name": "Identifier",
                                "src": "919:6:36"
                              }
                            ],
                            "id": 10195,
                            "name": "FunctionCall",
                            "src": "901:25:36"
                          }
                        ],
                        "id": 10196,
                        "name": "Assignment",
                        "src": "885:41:36"
                      }
                    ],
                    "id": 10197,
                    "name": "ExpressionStatement",
                    "src": "885:41:36"
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
                              "referencedDeclaration": 10295,
                              "type": "function (address,address,uint256)",
                              "value": "Transfer"
                            },
                            "id": 10198,
                            "name": "Identifier",
                            "src": "932:8:36"
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
                                  "referencedDeclaration": 11807,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 10199,
                                "name": "Identifier",
                                "src": "941:3:36"
                              }
                            ],
                            "id": 10200,
                            "name": "MemberAccess",
                            "src": "941:10:36"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10150,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 10201,
                            "name": "Identifier",
                            "src": "953:3:36"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10152,
                              "type": "uint256",
                              "value": "_value"
                            },
                            "id": 10202,
                            "name": "Identifier",
                            "src": "958:6:36"
                          }
                        ],
                        "id": 10203,
                        "name": "FunctionCall",
                        "src": "932:33:36"
                      }
                    ],
                    "id": 10204,
                    "name": "ExpressionStatement",
                    "src": "932:33:36"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 10156
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
                        "id": 10205,
                        "name": "Literal",
                        "src": "978:4:36"
                      }
                    ],
                    "id": 10206,
                    "name": "Return",
                    "src": "971:11:36"
                  }
                ],
                "id": 10207,
                "name": "Block",
                "src": "677:310:36"
              }
            ],
            "id": 10208,
            "name": "FunctionDefinition",
            "src": "608:379:36"
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
              "scope": 10221,
              "stateMutability": "view",
              "superFunction": 10278,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_owner",
                      "scope": 10220,
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
                        "id": 10209,
                        "name": "ElementaryTypeName",
                        "src": "1208:7:36"
                      }
                    ],
                    "id": 10210,
                    "name": "VariableDeclaration",
                    "src": "1208:14:36"
                  }
                ],
                "id": 10211,
                "name": "ParameterList",
                "src": "1207:16:36"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "balance",
                      "scope": 10220,
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
                        "id": 10212,
                        "name": "ElementaryTypeName",
                        "src": "1245:7:36"
                      }
                    ],
                    "id": 10213,
                    "name": "VariableDeclaration",
                    "src": "1245:15:36"
                  }
                ],
                "id": 10214,
                "name": "ParameterList",
                "src": "1244:17:36"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 10214
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
                              "referencedDeclaration": 10138,
                              "type": "mapping(address => uint256)",
                              "value": "balances"
                            },
                            "id": 10215,
                            "name": "Identifier",
                            "src": "1275:8:36"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10210,
                              "type": "address",
                              "value": "_owner"
                            },
                            "id": 10216,
                            "name": "Identifier",
                            "src": "1284:6:36"
                          }
                        ],
                        "id": 10217,
                        "name": "IndexAccess",
                        "src": "1275:16:36"
                      }
                    ],
                    "id": 10218,
                    "name": "Return",
                    "src": "1268:23:36"
                  }
                ],
                "id": 10219,
                "name": "Block",
                "src": "1262:34:36"
              }
            ],
            "id": 10220,
            "name": "FunctionDefinition",
            "src": "1189:107:36"
          }
        ],
        "id": 10221,
        "name": "ContractDefinition",
        "src": "180:1119:36"
      }
    ],
    "id": 10222,
    "name": "SourceUnit",
    "src": "0:1300:36"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-07-24T01:55:45.062Z"
}