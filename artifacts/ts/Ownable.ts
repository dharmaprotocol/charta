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
  "sourceMap": "217:787:7:-;;;469:55;;;;;;;;509:10;501:5;;:18;;;;;;;;;;;;;;;;;;217:787;;;;;;",
  "deployedSourceMap": "217:787:7:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;238:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;832:169;;;;;;;;;;;;;;;;;;;;;;;;;;;;238:20;;;;;;;;;;;;;:::o;832:169::-;653:5;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;928:1;908:22;;:8;:22;;;;900:31;;;;;;;;965:8;937:37;;958:5;;;;;;;;;;;937:37;;;;;;;;;;;;988:8;980:5;;:16;;;;;;;;;;;;;;;;;;832:169;:::o",
  "source": "pragma solidity ^0.4.18;\n\n\n/**\n * @title Ownable\n * @dev The Ownable contract has an owner address, and provides basic authorization control\n * functions, this simplifies the implementation of \"user permissions\".\n */\ncontract Ownable {\n  address public owner;\n\n\n  event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);\n\n\n  /**\n   * @dev The Ownable constructor sets the original `owner` of the contract to the sender\n   * account.\n   */\n  function Ownable() public {\n    owner = msg.sender;\n  }\n\n  /**\n   * @dev Throws if called by any account other than the owner.\n   */\n  modifier onlyOwner() {\n    require(msg.sender == owner);\n    _;\n  }\n\n  /**\n   * @dev Allows the current owner to transfer control of the contract to a newOwner.\n   * @param newOwner The address to transfer ownership to.\n   */\n  function transferOwnership(address newOwner) public onlyOwner {\n    require(newOwner != address(0));\n    OwnershipTransferred(owner, newOwner);\n    owner = newOwner;\n  }\n\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/ownership/Ownable.sol",
  "ast": {
    "attributes": {
      "absolutePath": "zeppelin-solidity/contracts/ownership/Ownable.sol",
      "exportedSymbols": {
        "Ownable": [
          1768
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
        "id": 1714,
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
          "contractKind": "contract",
          "documentation": "@title Ownable\n@dev The Ownable contract has an owner address, and provides basic authorization control\nfunctions, this simplifies the implementation of \"user permissions\".",
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            1768
          ],
          "name": "Ownable",
          "scope": 1769
        },
        "children": [
          {
            "attributes": {
              "constant": false,
              "name": "owner",
              "scope": 1768,
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
                "id": 1715,
                "name": "ElementaryTypeName",
                "src": "238:7:7"
              }
            ],
            "id": 1716,
            "name": "VariableDeclaration",
            "src": "238:20:7"
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
                      "scope": 1722,
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
                        "id": 1717,
                        "name": "ElementaryTypeName",
                        "src": "291:7:7"
                      }
                    ],
                    "id": 1718,
                    "name": "VariableDeclaration",
                    "src": "291:29:7"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "newOwner",
                      "scope": 1722,
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
                        "id": 1719,
                        "name": "ElementaryTypeName",
                        "src": "322:7:7"
                      }
                    ],
                    "id": 1720,
                    "name": "VariableDeclaration",
                    "src": "322:24:7"
                  }
                ],
                "id": 1721,
                "name": "ParameterList",
                "src": "290:57:7"
              }
            ],
            "id": 1722,
            "name": "EventDefinition",
            "src": "264:84:7"
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
              "scope": 1768,
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
                "id": 1723,
                "name": "ParameterList",
                "src": "485:2:7"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 1724,
                "name": "ParameterList",
                "src": "495:0:7"
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
                              "referencedDeclaration": 1716,
                              "type": "address",
                              "value": "owner"
                            },
                            "id": 1725,
                            "name": "Identifier",
                            "src": "501:5:7"
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
                                  "referencedDeclaration": 1780,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 1726,
                                "name": "Identifier",
                                "src": "509:3:7"
                              }
                            ],
                            "id": 1727,
                            "name": "MemberAccess",
                            "src": "509:10:7"
                          }
                        ],
                        "id": 1728,
                        "name": "Assignment",
                        "src": "501:18:7"
                      }
                    ],
                    "id": 1729,
                    "name": "ExpressionStatement",
                    "src": "501:18:7"
                  }
                ],
                "id": 1730,
                "name": "Block",
                "src": "495:29:7"
              }
            ],
            "id": 1731,
            "name": "FunctionDefinition",
            "src": "469:55:7"
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
                "id": 1732,
                "name": "ParameterList",
                "src": "622:2:7"
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
                              "referencedDeclaration": 1783,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 1733,
                            "name": "Identifier",
                            "src": "631:7:7"
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
                                      "referencedDeclaration": 1780,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 1734,
                                    "name": "Identifier",
                                    "src": "639:3:7"
                                  }
                                ],
                                "id": 1735,
                                "name": "MemberAccess",
                                "src": "639:10:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1716,
                                  "type": "address",
                                  "value": "owner"
                                },
                                "id": 1736,
                                "name": "Identifier",
                                "src": "653:5:7"
                              }
                            ],
                            "id": 1737,
                            "name": "BinaryOperation",
                            "src": "639:19:7"
                          }
                        ],
                        "id": 1738,
                        "name": "FunctionCall",
                        "src": "631:28:7"
                      }
                    ],
                    "id": 1739,
                    "name": "ExpressionStatement",
                    "src": "631:28:7"
                  },
                  {
                    "id": 1740,
                    "name": "PlaceholderStatement",
                    "src": "665:1:7"
                  }
                ],
                "id": 1741,
                "name": "Block",
                "src": "625:46:7"
              }
            ],
            "id": 1742,
            "name": "ModifierDefinition",
            "src": "604:67:7"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "transferOwnership",
              "payable": false,
              "scope": 1768,
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
                      "scope": 1767,
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
                        "id": 1743,
                        "name": "ElementaryTypeName",
                        "src": "859:7:7"
                      }
                    ],
                    "id": 1744,
                    "name": "VariableDeclaration",
                    "src": "859:16:7"
                  }
                ],
                "id": 1745,
                "name": "ParameterList",
                "src": "858:18:7"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 1748,
                "name": "ParameterList",
                "src": "894:0:7"
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
                      "referencedDeclaration": 1742,
                      "type": "modifier ()",
                      "value": "onlyOwner"
                    },
                    "id": 1746,
                    "name": "Identifier",
                    "src": "884:9:7"
                  }
                ],
                "id": 1747,
                "name": "ModifierInvocation",
                "src": "884:9:7"
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
                              "referencedDeclaration": 1783,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 1749,
                            "name": "Identifier",
                            "src": "900:7:7"
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
                                  "referencedDeclaration": 1744,
                                  "type": "address",
                                  "value": "newOwner"
                                },
                                "id": 1750,
                                "name": "Identifier",
                                "src": "908:8:7"
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
                                    "id": 1751,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "920:7:7"
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
                                    "id": 1752,
                                    "name": "Literal",
                                    "src": "928:1:7"
                                  }
                                ],
                                "id": 1753,
                                "name": "FunctionCall",
                                "src": "920:10:7"
                              }
                            ],
                            "id": 1754,
                            "name": "BinaryOperation",
                            "src": "908:22:7"
                          }
                        ],
                        "id": 1755,
                        "name": "FunctionCall",
                        "src": "900:31:7"
                      }
                    ],
                    "id": 1756,
                    "name": "ExpressionStatement",
                    "src": "900:31:7"
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
                              "referencedDeclaration": 1722,
                              "type": "function (address,address)",
                              "value": "OwnershipTransferred"
                            },
                            "id": 1757,
                            "name": "Identifier",
                            "src": "937:20:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1716,
                              "type": "address",
                              "value": "owner"
                            },
                            "id": 1758,
                            "name": "Identifier",
                            "src": "958:5:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1744,
                              "type": "address",
                              "value": "newOwner"
                            },
                            "id": 1759,
                            "name": "Identifier",
                            "src": "965:8:7"
                          }
                        ],
                        "id": 1760,
                        "name": "FunctionCall",
                        "src": "937:37:7"
                      }
                    ],
                    "id": 1761,
                    "name": "ExpressionStatement",
                    "src": "937:37:7"
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
                              "referencedDeclaration": 1716,
                              "type": "address",
                              "value": "owner"
                            },
                            "id": 1762,
                            "name": "Identifier",
                            "src": "980:5:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1744,
                              "type": "address",
                              "value": "newOwner"
                            },
                            "id": 1763,
                            "name": "Identifier",
                            "src": "988:8:7"
                          }
                        ],
                        "id": 1764,
                        "name": "Assignment",
                        "src": "980:16:7"
                      }
                    ],
                    "id": 1765,
                    "name": "ExpressionStatement",
                    "src": "980:16:7"
                  }
                ],
                "id": 1766,
                "name": "Block",
                "src": "894:107:7"
              }
            ],
            "id": 1767,
            "name": "FunctionDefinition",
            "src": "832:169:7"
          }
        ],
        "id": 1768,
        "name": "ContractDefinition",
        "src": "217:787:7"
      }
    ],
    "id": 1769,
    "name": "SourceUnit",
    "src": "0:1005:7"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-03-27T17:52:35.359Z"
}