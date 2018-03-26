export const Ownable = 
{
  "contractName": "Ownable",
  "abi": [
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
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
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
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    }
  ],
  "bytecode": "0x6060604052341561000f57600080fd5b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506102858061005e6000396000f30060606040526004361061004c576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680638da5cb5b14610051578063f2fde38b146100a6575b600080fd5b341561005c57600080fd5b6100646100df565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156100b157600080fd5b6100dd600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610104565b005b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561015f57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561019b57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505600a165627a7a72305820651cb27e4b776f860b83de0806c4a53f2b8896356bfa3f8017d2ecbb67b392880029",
  "deployedBytecode": "0x60606040526004361061004c576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680638da5cb5b14610051578063f2fde38b146100a6575b600080fd5b341561005c57600080fd5b6100646100df565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156100b157600080fd5b6100dd600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610104565b005b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561015f57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561019b57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505600a165627a7a72305820651cb27e4b776f860b83de0806c4a53f2b8896356bfa3f8017d2ecbb67b392880029",
  "sourceMap": "217:787:1:-;;;469:55;;;;;;;;509:10;501:5;;:18;;;;;;;;;;;;;;;;;;217:787;;;;;;",
  "deployedSourceMap": "217:787:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;238:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;832:169;;;;;;;;;;;;;;;;;;;;;;;;;;;;238:20;;;;;;;;;;;;;:::o;832:169::-;653:5;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;928:1;908:22;;:8;:22;;;;900:31;;;;;;;;965:8;937:37;;958:5;;;;;;;;;;;937:37;;;;;;;;;;;;988:8;980:5;;:16;;;;;;;;;;;;;;;;;;832:169;:::o",
  "source": "pragma solidity ^0.4.18;\n\n\n/**\n * @title Ownable\n * @dev The Ownable contract has an owner address, and provides basic authorization control\n * functions, this simplifies the implementation of \"user permissions\".\n */\ncontract Ownable {\n  address public owner;\n\n\n  event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);\n\n\n  /**\n   * @dev The Ownable constructor sets the original `owner` of the contract to the sender\n   * account.\n   */\n  function Ownable() public {\n    owner = msg.sender;\n  }\n\n  /**\n   * @dev Throws if called by any account other than the owner.\n   */\n  modifier onlyOwner() {\n    require(msg.sender == owner);\n    _;\n  }\n\n  /**\n   * @dev Allows the current owner to transfer control of the contract to a newOwner.\n   * @param newOwner The address to transfer ownership to.\n   */\n  function transferOwnership(address newOwner) public onlyOwner {\n    require(newOwner != address(0));\n    OwnershipTransferred(owner, newOwner);\n    owner = newOwner;\n  }\n\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/ownership/Ownable.sol",
  "ast": {
    "attributes": {
      "absolutePath": "zeppelin-solidity/contracts/ownership/Ownable.sol",
      "exportedSymbols": {
        "Ownable": [
          187
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
        "id": 133,
        "name": "PragmaDirective",
        "src": "0:24:1"
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
          "documentation": "@title Ownable\n@dev The Ownable contract has an owner address, and provides basic authorization control\nfunctions, this simplifies the implementation of \"user permissions\".",
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            187
          ],
          "name": "Ownable",
          "scope": 188
        },
        "children": [
          {
            "attributes": {
              "constant": false,
              "name": "owner",
              "scope": 187,
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
                "id": 134,
                "name": "ElementaryTypeName",
                "src": "238:7:1"
              }
            ],
            "id": 135,
            "name": "VariableDeclaration",
            "src": "238:20:1"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "OwnershipTransferred"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "previousOwner",
                      "scope": 141,
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
                        "id": 136,
                        "name": "ElementaryTypeName",
                        "src": "291:7:1"
                      }
                    ],
                    "id": 137,
                    "name": "VariableDeclaration",
                    "src": "291:29:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "newOwner",
                      "scope": 141,
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
                        "id": 138,
                        "name": "ElementaryTypeName",
                        "src": "322:7:1"
                      }
                    ],
                    "id": 139,
                    "name": "VariableDeclaration",
                    "src": "322:24:1"
                  }
                ],
                "id": 140,
                "name": "ParameterList",
                "src": "290:57:1"
              }
            ],
            "id": 141,
            "name": "EventDefinition",
            "src": "264:84:1"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": true,
              "modifiers": [
                null
              ],
              "name": "Ownable",
              "payable": false,
              "scope": 187,
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
                "id": 142,
                "name": "ParameterList",
                "src": "485:2:1"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 143,
                "name": "ParameterList",
                "src": "495:0:1"
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
                              "referencedDeclaration": 135,
                              "type": "address",
                              "value": "owner"
                            },
                            "id": 144,
                            "name": "Identifier",
                            "src": "501:5:1"
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
                                  "referencedDeclaration": 199,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 145,
                                "name": "Identifier",
                                "src": "509:3:1"
                              }
                            ],
                            "id": 146,
                            "name": "MemberAccess",
                            "src": "509:10:1"
                          }
                        ],
                        "id": 147,
                        "name": "Assignment",
                        "src": "501:18:1"
                      }
                    ],
                    "id": 148,
                    "name": "ExpressionStatement",
                    "src": "501:18:1"
                  }
                ],
                "id": 149,
                "name": "Block",
                "src": "495:29:1"
              }
            ],
            "id": 150,
            "name": "FunctionDefinition",
            "src": "469:55:1"
          },
          {
            "attributes": {
              "name": "onlyOwner",
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
                "id": 151,
                "name": "ParameterList",
                "src": "622:2:1"
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
                              "referencedDeclaration": 202,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 152,
                            "name": "Identifier",
                            "src": "631:7:1"
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
                                      "referencedDeclaration": 199,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 153,
                                    "name": "Identifier",
                                    "src": "639:3:1"
                                  }
                                ],
                                "id": 154,
                                "name": "MemberAccess",
                                "src": "639:10:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 135,
                                  "type": "address",
                                  "value": "owner"
                                },
                                "id": 155,
                                "name": "Identifier",
                                "src": "653:5:1"
                              }
                            ],
                            "id": 156,
                            "name": "BinaryOperation",
                            "src": "639:19:1"
                          }
                        ],
                        "id": 157,
                        "name": "FunctionCall",
                        "src": "631:28:1"
                      }
                    ],
                    "id": 158,
                    "name": "ExpressionStatement",
                    "src": "631:28:1"
                  },
                  {
                    "id": 159,
                    "name": "PlaceholderStatement",
                    "src": "665:1:1"
                  }
                ],
                "id": 160,
                "name": "Block",
                "src": "625:46:1"
              }
            ],
            "id": 161,
            "name": "ModifierDefinition",
            "src": "604:67:1"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "transferOwnership",
              "payable": false,
              "scope": 187,
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
                      "name": "newOwner",
                      "scope": 186,
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
                        "id": 162,
                        "name": "ElementaryTypeName",
                        "src": "859:7:1"
                      }
                    ],
                    "id": 163,
                    "name": "VariableDeclaration",
                    "src": "859:16:1"
                  }
                ],
                "id": 164,
                "name": "ParameterList",
                "src": "858:18:1"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 167,
                "name": "ParameterList",
                "src": "894:0:1"
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
                      "referencedDeclaration": 161,
                      "type": "modifier ()",
                      "value": "onlyOwner"
                    },
                    "id": 165,
                    "name": "Identifier",
                    "src": "884:9:1"
                  }
                ],
                "id": 166,
                "name": "ModifierInvocation",
                "src": "884:9:1"
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
                              "referencedDeclaration": 202,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 168,
                            "name": "Identifier",
                            "src": "900:7:1"
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
                                  "referencedDeclaration": 163,
                                  "type": "address",
                                  "value": "newOwner"
                                },
                                "id": 169,
                                "name": "Identifier",
                                "src": "908:8:1"
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
                                    "id": 170,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "920:7:1"
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
                                    "id": 171,
                                    "name": "Literal",
                                    "src": "928:1:1"
                                  }
                                ],
                                "id": 172,
                                "name": "FunctionCall",
                                "src": "920:10:1"
                              }
                            ],
                            "id": 173,
                            "name": "BinaryOperation",
                            "src": "908:22:1"
                          }
                        ],
                        "id": 174,
                        "name": "FunctionCall",
                        "src": "900:31:1"
                      }
                    ],
                    "id": 175,
                    "name": "ExpressionStatement",
                    "src": "900:31:1"
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
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 141,
                              "type": "function (address,address)",
                              "value": "OwnershipTransferred"
                            },
                            "id": 176,
                            "name": "Identifier",
                            "src": "937:20:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 135,
                              "type": "address",
                              "value": "owner"
                            },
                            "id": 177,
                            "name": "Identifier",
                            "src": "958:5:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 163,
                              "type": "address",
                              "value": "newOwner"
                            },
                            "id": 178,
                            "name": "Identifier",
                            "src": "965:8:1"
                          }
                        ],
                        "id": 179,
                        "name": "FunctionCall",
                        "src": "937:37:1"
                      }
                    ],
                    "id": 180,
                    "name": "ExpressionStatement",
                    "src": "937:37:1"
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
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 135,
                              "type": "address",
                              "value": "owner"
                            },
                            "id": 181,
                            "name": "Identifier",
                            "src": "980:5:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 163,
                              "type": "address",
                              "value": "newOwner"
                            },
                            "id": 182,
                            "name": "Identifier",
                            "src": "988:8:1"
                          }
                        ],
                        "id": 183,
                        "name": "Assignment",
                        "src": "980:16:1"
                      }
                    ],
                    "id": 184,
                    "name": "ExpressionStatement",
                    "src": "980:16:1"
                  }
                ],
                "id": 185,
                "name": "Block",
                "src": "894:107:1"
              }
            ],
            "id": 186,
            "name": "FunctionDefinition",
            "src": "832:169:1"
          }
        ],
        "id": 187,
        "name": "ContractDefinition",
        "src": "217:787:1"
      }
    ],
    "id": 188,
    "name": "SourceUnit",
    "src": "0:1005:1"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-03-26T00:42:05.150Z"
}