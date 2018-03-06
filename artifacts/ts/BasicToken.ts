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
  "bytecode": "0x6060604052341561000f57600080fd5b6104008061001e6000396000f300606060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806318160ddd1461005c57806370a0823114610085578063a9059cbb146100d2575b600080fd5b341561006757600080fd5b61006f61012c565b6040518082815260200191505060405180910390f35b341561009057600080fd5b6100bc600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610136565b6040518082815260200191505060405180910390f35b34156100dd57600080fd5b610112600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190505061017e565b604051808215151515815260200191505060405180910390f35b6000600154905090565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156101bb57600080fd5b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561020857600080fd5b610259826000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461039d90919063ffffffff16565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506102ec826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546103b690919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b60008282111515156103ab57fe5b818303905092915050565b60008082840190508381101515156103ca57fe5b80915050929150505600a165627a7a72305820a68fc0c4a48ae08fa5ed4c53b42ca5bca016dd76b48fb877cfae313a489b989c0029",
  "deployedBytecode": "0x606060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806318160ddd1461005c57806370a0823114610085578063a9059cbb146100d2575b600080fd5b341561006757600080fd5b61006f61012c565b6040518082815260200191505060405180910390f35b341561009057600080fd5b6100bc600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610136565b6040518082815260200191505060405180910390f35b34156100dd57600080fd5b610112600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190505061017e565b604051808215151515815260200191505060405180910390f35b6000600154905090565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156101bb57600080fd5b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561020857600080fd5b610259826000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461039d90919063ffffffff16565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506102ec826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546103b690919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b60008282111515156103ab57fe5b818303905092915050565b60008082840190508381101515156103ca57fe5b80915050929150505600a165627a7a72305820a68fc0c4a48ae08fa5ed4c53b42ca5bca016dd76b48fb877cfae313a489b989c0029",
  "sourceMap": "180:1119:34:-;;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "180:1119:34:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;371:83;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1189:107;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;608:379;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;371:83;415:7;437:12;;430:19;;371:83;:::o;1189:107::-;1245:15;1275:8;:16;1284:6;1275:16;;;;;;;;;;;;;;;;1268:23;;1189:107;;;:::o;608:379::-;671:4;706:1;691:17;;:3;:17;;;;683:26;;;;;;;;733:8;:20;742:10;733:20;;;;;;;;;;;;;;;;723:6;:30;;715:39;;;;;;;;847:32;872:6;847:8;:20;856:10;847:20;;;;;;;;;;;;;;;;:24;;:32;;;;:::i;:::-;824:8;:20;833:10;824:20;;;;;;;;;;;;;;;:55;;;;901:25;919:6;901:8;:13;910:3;901:13;;;;;;;;;;;;;;;;:17;;:25;;;;:::i;:::-;885:8;:13;894:3;885:13;;;;;;;;;;;;;;;:41;;;;953:3;932:33;;941:10;932:33;;;958:6;932:33;;;;;;;;;;;;;;;;;;978:4;971:11;;608:379;;;;:::o;836:110:32:-;894:7;921:1;916;:6;;909:14;;;;;;940:1;936;:5;929:12;;836:110;;;;:::o;1008:129::-;1066:7;1081:9;1097:1;1093;:5;1081:17;;1116:1;1111;:6;;1104:14;;;;;;1131:1;1124:8;;1008:129;;;;;:::o",
  "source": "pragma solidity ^0.4.18;\n\n\nimport \"./ERC20Basic.sol\";\nimport \"../../math/SafeMath.sol\";\n\n\n/**\n * @title Basic token\n * @dev Basic version of StandardToken, with no allowances.\n */\ncontract BasicToken is ERC20Basic {\n  using SafeMath for uint256;\n\n  mapping(address => uint256) balances;\n\n  uint256 totalSupply_;\n\n  /**\n  * @dev total number of tokens in existence\n  */\n  function totalSupply() public view returns (uint256) {\n    return totalSupply_;\n  }\n\n  /**\n  * @dev transfer token for a specified address\n  * @param _to The address to transfer to.\n  * @param _value The amount to be transferred.\n  */\n  function transfer(address _to, uint256 _value) public returns (bool) {\n    require(_to != address(0));\n    require(_value <= balances[msg.sender]);\n\n    // SafeMath.sub will throw if there is not enough balance.\n    balances[msg.sender] = balances[msg.sender].sub(_value);\n    balances[_to] = balances[_to].add(_value);\n    Transfer(msg.sender, _to, _value);\n    return true;\n  }\n\n  /**\n  * @dev Gets the balance of the specified address.\n  * @param _owner The address to query the the balance of.\n  * @return An uint256 representing the amount owned by the passed address.\n  */\n  function balanceOf(address _owner) public view returns (uint256 balance) {\n    return balances[_owner];\n  }\n\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/token/ERC20/BasicToken.sol",
  "ast": {
    "attributes": {
      "absolutePath": "zeppelin-solidity/contracts/token/ERC20/BasicToken.sol",
      "exportedSymbols": {
        "BasicToken": [
          7939
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
        "id": 7845,
        "name": "PragmaDirective",
        "src": "0:24:34"
      },
      {
        "attributes": {
          "SourceUnit": 8015,
          "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20Basic.sol",
          "file": "./ERC20Basic.sol",
          "scope": 7940,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 7846,
        "name": "ImportDirective",
        "src": "27:26:34"
      },
      {
        "attributes": {
          "SourceUnit": 7788,
          "absolutePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
          "file": "../../math/SafeMath.sol",
          "scope": 7940,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 7847,
        "name": "ImportDirective",
        "src": "54:33:34"
      },
      {
        "attributes": {
          "contractDependencies": [
            8014
          ],
          "contractKind": "contract",
          "documentation": "@title Basic token\n@dev Basic version of StandardToken, with no allowances.",
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            7939,
            8014
          ],
          "name": "BasicToken",
          "scope": 7940
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
                  "referencedDeclaration": 8014,
                  "type": "contract ERC20Basic"
                },
                "id": 7848,
                "name": "UserDefinedTypeName",
                "src": "203:10:34"
              }
            ],
            "id": 7849,
            "name": "InheritanceSpecifier",
            "src": "203:10:34"
          },
          {
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "SafeMath",
                  "referencedDeclaration": 7787,
                  "type": "library SafeMath"
                },
                "id": 7850,
                "name": "UserDefinedTypeName",
                "src": "224:8:34"
              },
              {
                "attributes": {
                  "name": "uint256",
                  "type": "uint256"
                },
                "id": 7851,
                "name": "ElementaryTypeName",
                "src": "237:7:34"
              }
            ],
            "id": 7852,
            "name": "UsingForDirective",
            "src": "218:27:34"
          },
          {
            "attributes": {
              "constant": false,
              "name": "balances",
              "scope": 7939,
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
                    "id": 7853,
                    "name": "ElementaryTypeName",
                    "src": "257:7:34"
                  },
                  {
                    "attributes": {
                      "name": "uint256",
                      "type": "uint256"
                    },
                    "id": 7854,
                    "name": "ElementaryTypeName",
                    "src": "268:7:34"
                  }
                ],
                "id": 7855,
                "name": "Mapping",
                "src": "249:27:34"
              }
            ],
            "id": 7856,
            "name": "VariableDeclaration",
            "src": "249:36:34"
          },
          {
            "attributes": {
              "constant": false,
              "name": "totalSupply_",
              "scope": 7939,
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
                "id": 7857,
                "name": "ElementaryTypeName",
                "src": "290:7:34"
              }
            ],
            "id": 7858,
            "name": "VariableDeclaration",
            "src": "290:20:34"
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
              "scope": 7939,
              "stateMutability": "view",
              "superFunction": 7989,
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
                "id": 7859,
                "name": "ParameterList",
                "src": "391:2:34"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 7866,
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
                        "id": 7860,
                        "name": "ElementaryTypeName",
                        "src": "415:7:34"
                      }
                    ],
                    "id": 7861,
                    "name": "VariableDeclaration",
                    "src": "415:7:34"
                  }
                ],
                "id": 7862,
                "name": "ParameterList",
                "src": "414:9:34"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 7862
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 7858,
                          "type": "uint256",
                          "value": "totalSupply_"
                        },
                        "id": 7863,
                        "name": "Identifier",
                        "src": "437:12:34"
                      }
                    ],
                    "id": 7864,
                    "name": "Return",
                    "src": "430:19:34"
                  }
                ],
                "id": 7865,
                "name": "Block",
                "src": "424:30:34"
              }
            ],
            "id": 7866,
            "name": "FunctionDefinition",
            "src": "371:83:34"
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
              "scope": 7939,
              "stateMutability": "nonpayable",
              "superFunction": 8005,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 7926,
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
                        "id": 7867,
                        "name": "ElementaryTypeName",
                        "src": "626:7:34"
                      }
                    ],
                    "id": 7868,
                    "name": "VariableDeclaration",
                    "src": "626:11:34"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_value",
                      "scope": 7926,
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
                        "id": 7869,
                        "name": "ElementaryTypeName",
                        "src": "639:7:34"
                      }
                    ],
                    "id": 7870,
                    "name": "VariableDeclaration",
                    "src": "639:14:34"
                  }
                ],
                "id": 7871,
                "name": "ParameterList",
                "src": "625:29:34"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 7926,
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
                        "id": 7872,
                        "name": "ElementaryTypeName",
                        "src": "671:4:34"
                      }
                    ],
                    "id": 7873,
                    "name": "VariableDeclaration",
                    "src": "671:4:34"
                  }
                ],
                "id": 7874,
                "name": "ParameterList",
                "src": "670:6:34"
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
                              "referencedDeclaration": 8370,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 7875,
                            "name": "Identifier",
                            "src": "683:7:34"
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
                                  "referencedDeclaration": 7868,
                                  "type": "address",
                                  "value": "_to"
                                },
                                "id": 7876,
                                "name": "Identifier",
                                "src": "691:3:34"
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
                                    "id": 7877,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "698:7:34"
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
                                    "id": 7878,
                                    "name": "Literal",
                                    "src": "706:1:34"
                                  }
                                ],
                                "id": 7879,
                                "name": "FunctionCall",
                                "src": "698:10:34"
                              }
                            ],
                            "id": 7880,
                            "name": "BinaryOperation",
                            "src": "691:17:34"
                          }
                        ],
                        "id": 7881,
                        "name": "FunctionCall",
                        "src": "683:26:34"
                      }
                    ],
                    "id": 7882,
                    "name": "ExpressionStatement",
                    "src": "683:26:34"
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
                              "referencedDeclaration": 8370,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 7883,
                            "name": "Identifier",
                            "src": "715:7:34"
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
                                  "referencedDeclaration": 7870,
                                  "type": "uint256",
                                  "value": "_value"
                                },
                                "id": 7884,
                                "name": "Identifier",
                                "src": "723:6:34"
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
                                      "referencedDeclaration": 7856,
                                      "type": "mapping(address => uint256)",
                                      "value": "balances"
                                    },
                                    "id": 7885,
                                    "name": "Identifier",
                                    "src": "733:8:34"
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
                                        "id": 7886,
                                        "name": "Identifier",
                                        "src": "742:3:34"
                                      }
                                    ],
                                    "id": 7887,
                                    "name": "MemberAccess",
                                    "src": "742:10:34"
                                  }
                                ],
                                "id": 7888,
                                "name": "IndexAccess",
                                "src": "733:20:34"
                              }
                            ],
                            "id": 7889,
                            "name": "BinaryOperation",
                            "src": "723:30:34"
                          }
                        ],
                        "id": 7890,
                        "name": "FunctionCall",
                        "src": "715:39:34"
                      }
                    ],
                    "id": 7891,
                    "name": "ExpressionStatement",
                    "src": "715:39:34"
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
                                  "referencedDeclaration": 7856,
                                  "type": "mapping(address => uint256)",
                                  "value": "balances"
                                },
                                "id": 7892,
                                "name": "Identifier",
                                "src": "824:8:34"
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
                                    "id": 7893,
                                    "name": "Identifier",
                                    "src": "833:3:34"
                                  }
                                ],
                                "id": 7894,
                                "name": "MemberAccess",
                                "src": "833:10:34"
                              }
                            ],
                            "id": 7895,
                            "name": "IndexAccess",
                            "src": "824:20:34"
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
                                  "referencedDeclaration": 7762,
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
                                          "referencedDeclaration": 7856,
                                          "type": "mapping(address => uint256)",
                                          "value": "balances"
                                        },
                                        "id": 7896,
                                        "name": "Identifier",
                                        "src": "847:8:34"
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
                                            "id": 7897,
                                            "name": "Identifier",
                                            "src": "856:3:34"
                                          }
                                        ],
                                        "id": 7898,
                                        "name": "MemberAccess",
                                        "src": "856:10:34"
                                      }
                                    ],
                                    "id": 7899,
                                    "name": "IndexAccess",
                                    "src": "847:20:34"
                                  }
                                ],
                                "id": 7900,
                                "name": "MemberAccess",
                                "src": "847:24:34"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 7870,
                                  "type": "uint256",
                                  "value": "_value"
                                },
                                "id": 7901,
                                "name": "Identifier",
                                "src": "872:6:34"
                              }
                            ],
                            "id": 7902,
                            "name": "FunctionCall",
                            "src": "847:32:34"
                          }
                        ],
                        "id": 7903,
                        "name": "Assignment",
                        "src": "824:55:34"
                      }
                    ],
                    "id": 7904,
                    "name": "ExpressionStatement",
                    "src": "824:55:34"
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
                                  "referencedDeclaration": 7856,
                                  "type": "mapping(address => uint256)",
                                  "value": "balances"
                                },
                                "id": 7905,
                                "name": "Identifier",
                                "src": "885:8:34"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 7868,
                                  "type": "address",
                                  "value": "_to"
                                },
                                "id": 7906,
                                "name": "Identifier",
                                "src": "894:3:34"
                              }
                            ],
                            "id": 7907,
                            "name": "IndexAccess",
                            "src": "885:13:34"
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
                                  "referencedDeclaration": 7786,
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
                                          "referencedDeclaration": 7856,
                                          "type": "mapping(address => uint256)",
                                          "value": "balances"
                                        },
                                        "id": 7908,
                                        "name": "Identifier",
                                        "src": "901:8:34"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 7868,
                                          "type": "address",
                                          "value": "_to"
                                        },
                                        "id": 7909,
                                        "name": "Identifier",
                                        "src": "910:3:34"
                                      }
                                    ],
                                    "id": 7910,
                                    "name": "IndexAccess",
                                    "src": "901:13:34"
                                  }
                                ],
                                "id": 7911,
                                "name": "MemberAccess",
                                "src": "901:17:34"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 7870,
                                  "type": "uint256",
                                  "value": "_value"
                                },
                                "id": 7912,
                                "name": "Identifier",
                                "src": "919:6:34"
                              }
                            ],
                            "id": 7913,
                            "name": "FunctionCall",
                            "src": "901:25:34"
                          }
                        ],
                        "id": 7914,
                        "name": "Assignment",
                        "src": "885:41:34"
                      }
                    ],
                    "id": 7915,
                    "name": "ExpressionStatement",
                    "src": "885:41:34"
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
                              "referencedDeclaration": 8013,
                              "type": "function (address,address,uint256)",
                              "value": "Transfer"
                            },
                            "id": 7916,
                            "name": "Identifier",
                            "src": "932:8:34"
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
                                "id": 7917,
                                "name": "Identifier",
                                "src": "941:3:34"
                              }
                            ],
                            "id": 7918,
                            "name": "MemberAccess",
                            "src": "941:10:34"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7868,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 7919,
                            "name": "Identifier",
                            "src": "953:3:34"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7870,
                              "type": "uint256",
                              "value": "_value"
                            },
                            "id": 7920,
                            "name": "Identifier",
                            "src": "958:6:34"
                          }
                        ],
                        "id": 7921,
                        "name": "FunctionCall",
                        "src": "932:33:34"
                      }
                    ],
                    "id": 7922,
                    "name": "ExpressionStatement",
                    "src": "932:33:34"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 7874
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
                        "id": 7923,
                        "name": "Literal",
                        "src": "978:4:34"
                      }
                    ],
                    "id": 7924,
                    "name": "Return",
                    "src": "971:11:34"
                  }
                ],
                "id": 7925,
                "name": "Block",
                "src": "677:310:34"
              }
            ],
            "id": 7926,
            "name": "FunctionDefinition",
            "src": "608:379:34"
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
              "scope": 7939,
              "stateMutability": "view",
              "superFunction": 7996,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_owner",
                      "scope": 7938,
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
                        "id": 7927,
                        "name": "ElementaryTypeName",
                        "src": "1208:7:34"
                      }
                    ],
                    "id": 7928,
                    "name": "VariableDeclaration",
                    "src": "1208:14:34"
                  }
                ],
                "id": 7929,
                "name": "ParameterList",
                "src": "1207:16:34"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "balance",
                      "scope": 7938,
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
                        "id": 7930,
                        "name": "ElementaryTypeName",
                        "src": "1245:7:34"
                      }
                    ],
                    "id": 7931,
                    "name": "VariableDeclaration",
                    "src": "1245:15:34"
                  }
                ],
                "id": 7932,
                "name": "ParameterList",
                "src": "1244:17:34"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 7932
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
                              "referencedDeclaration": 7856,
                              "type": "mapping(address => uint256)",
                              "value": "balances"
                            },
                            "id": 7933,
                            "name": "Identifier",
                            "src": "1275:8:34"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7928,
                              "type": "address",
                              "value": "_owner"
                            },
                            "id": 7934,
                            "name": "Identifier",
                            "src": "1284:6:34"
                          }
                        ],
                        "id": 7935,
                        "name": "IndexAccess",
                        "src": "1275:16:34"
                      }
                    ],
                    "id": 7936,
                    "name": "Return",
                    "src": "1268:23:34"
                  }
                ],
                "id": 7937,
                "name": "Block",
                "src": "1262:34:34"
              }
            ],
            "id": 7938,
            "name": "FunctionDefinition",
            "src": "1189:107:34"
          }
        ],
        "id": 7939,
        "name": "ContractDefinition",
        "src": "180:1119:34"
      }
    ],
    "id": 7940,
    "name": "SourceUnit",
    "src": "0:1300:34"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-03-05T00:23:04.362Z"
}