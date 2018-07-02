export const Pausable = 
{
  "contractName": "Pausable",
  "abi": [
    {
      "constant": false,
      "inputs": [],
      "name": "unpause",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "paused",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "pause",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
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
      "anonymous": false,
      "inputs": [],
      "name": "Pause",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "Unpause",
      "type": "event"
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
  "bytecode": "0x606060405260008060146101000a81548160ff021916908315150217905550336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061048e8061006d6000396000f30060606040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680633f4ba83a146100725780635c975abb146100875780638456cb59146100b45780638da5cb5b146100c9578063f2fde38b1461011e575b600080fd5b341561007d57600080fd5b610085610157565b005b341561009257600080fd5b61009a610215565b604051808215151515815260200191505060405180910390f35b34156100bf57600080fd5b6100c7610228565b005b34156100d457600080fd5b6100dc6102e8565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561012957600080fd5b610155600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061030d565b005b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156101b257600080fd5b600060149054906101000a900460ff1615156101cd57600080fd5b60008060146101000a81548160ff0219169083151502179055507f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3360405160405180910390a1565b600060149054906101000a900460ff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561028357600080fd5b600060149054906101000a900460ff1615151561029f57600080fd5b6001600060146101000a81548160ff0219169083151502179055507f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62560405160405180910390a1565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561036857600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156103a457600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505600a165627a7a723058205be24b61a066a10bfd0a9eb94e9d155ec538fc2596b84750ec438cd11151a0970029",
  "deployedBytecode": "0x60606040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680633f4ba83a146100725780635c975abb146100875780638456cb59146100b45780638da5cb5b146100c9578063f2fde38b1461011e575b600080fd5b341561007d57600080fd5b610085610157565b005b341561009257600080fd5b61009a610215565b604051808215151515815260200191505060405180910390f35b34156100bf57600080fd5b6100c7610228565b005b34156100d457600080fd5b6100dc6102e8565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561012957600080fd5b610155600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061030d565b005b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156101b257600080fd5b600060149054906101000a900460ff1615156101cd57600080fd5b60008060146101000a81548160ff0219169083151502179055507f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3360405160405180910390a1565b600060149054906101000a900460ff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561028357600080fd5b600060149054906101000a900460ff1615151561029f57600080fd5b6001600060146101000a81548160ff0219169083151502179055507f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62560405160405180910390a1565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561036857600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156103a457600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505600a165627a7a723058205be24b61a066a10bfd0a9eb94e9d155ec538fc2596b84750ec438cd11151a0970029",
  "sourceMap": "177:745:30:-;;;268:5;247:26;;;;;;;;;;;;;;;;;;;;509:10:32;501:5;;:18;;;;;;;;;;;;;;;;;;177:745:30;;;;;;",
  "deployedSourceMap": "177:745:30:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;833:87;;;;;;;;;;;;;;247:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;666:85;;;;;;;;;;;;;;238:20:32;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;832:169;;;;;;;;;;;;;;;;;;;;;;;;;;;;833:87:30;653:5:32;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;568:6:30;;;;;;;;;;;560:15;;;;;;;;895:5;886:6;;:14;;;;;;;;;;;;;;;;;;906:9;;;;;;;;;;833:87::o;247:26::-;;;;;;;;;;;;;:::o;666:85::-;653:5:32;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;416:6:30;;;;;;;;;;;415:7;407:16;;;;;;;;729:4;720:6;;:13;;;;;;;;;;;;;;;;;;739:7;;;;;;;;;;666:85::o;238:20:32:-;;;;;;;;;;;;;:::o;832:169::-;653:5;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;928:1;908:22;;:8;:22;;;;900:31;;;;;;;;965:8;937:37;;958:5;;;;;;;;;;;937:37;;;;;;;;;;;;988:8;980:5;;:16;;;;;;;;;;;;;;;;;;832:169;:::o",
  "source": "pragma solidity ^0.4.18;\n\n\nimport \"../ownership/Ownable.sol\";\n\n\n/**\n * @title Pausable\n * @dev Base contract which allows children to implement an emergency stop mechanism.\n */\ncontract Pausable is Ownable {\n  event Pause();\n  event Unpause();\n\n  bool public paused = false;\n\n\n  /**\n   * @dev Modifier to make a function callable only when the contract is not paused.\n   */\n  modifier whenNotPaused() {\n    require(!paused);\n    _;\n  }\n\n  /**\n   * @dev Modifier to make a function callable only when the contract is paused.\n   */\n  modifier whenPaused() {\n    require(paused);\n    _;\n  }\n\n  /**\n   * @dev called by the owner to pause, triggers stopped state\n   */\n  function pause() onlyOwner whenNotPaused public {\n    paused = true;\n    Pause();\n  }\n\n  /**\n   * @dev called by the owner to unpause, returns to normal state\n   */\n  function unpause() onlyOwner whenPaused public {\n    paused = false;\n    Unpause();\n  }\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/lifecycle/Pausable.sol",
  "ast": {
    "attributes": {
      "absolutePath": "zeppelin-solidity/contracts/lifecycle/Pausable.sol",
      "exportedSymbols": {
        "Pausable": [
          8664
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
        "id": 8606,
        "name": "PragmaDirective",
        "src": "0:24:30"
      },
      {
        "attributes": {
          "SourceUnit": 8819,
          "absolutePath": "zeppelin-solidity/contracts/ownership/Ownable.sol",
          "file": "../ownership/Ownable.sol",
          "scope": 8665,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 8607,
        "name": "ImportDirective",
        "src": "27:34:30"
      },
      {
        "attributes": {
          "contractDependencies": [
            8818
          ],
          "contractKind": "contract",
          "documentation": "@title Pausable\n@dev Base contract which allows children to implement an emergency stop mechanism.",
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            8664,
            8818
          ],
          "name": "Pausable",
          "scope": 8665
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
                  "name": "Ownable",
                  "referencedDeclaration": 8818,
                  "type": "contract Ownable"
                },
                "id": 8608,
                "name": "UserDefinedTypeName",
                "src": "198:7:30"
              }
            ],
            "id": 8609,
            "name": "InheritanceSpecifier",
            "src": "198:7:30"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "Pause"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 8610,
                "name": "ParameterList",
                "src": "221:2:30"
              }
            ],
            "id": 8611,
            "name": "EventDefinition",
            "src": "210:14:30"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "Unpause"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 8612,
                "name": "ParameterList",
                "src": "240:2:30"
              }
            ],
            "id": 8613,
            "name": "EventDefinition",
            "src": "227:16:30"
          },
          {
            "attributes": {
              "constant": false,
              "name": "paused",
              "scope": 8664,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "bool",
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "bool",
                  "type": "bool"
                },
                "id": 8614,
                "name": "ElementaryTypeName",
                "src": "247:4:30"
              },
              {
                "attributes": {
                  "argumentTypes": null,
                  "hexvalue": "66616c7365",
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "subdenomination": null,
                  "token": "bool",
                  "type": "bool",
                  "value": "false"
                },
                "id": 8615,
                "name": "Literal",
                "src": "268:5:30"
              }
            ],
            "id": 8616,
            "name": "VariableDeclaration",
            "src": "247:26:30"
          },
          {
            "attributes": {
              "name": "whenNotPaused",
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
                "id": 8617,
                "name": "ParameterList",
                "src": "398:2:30"
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
                              "referencedDeclaration": 10503,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 8618,
                            "name": "Identifier",
                            "src": "407:7:30"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "!",
                              "prefix": true,
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8616,
                                  "type": "bool",
                                  "value": "paused"
                                },
                                "id": 8619,
                                "name": "Identifier",
                                "src": "416:6:30"
                              }
                            ],
                            "id": 8620,
                            "name": "UnaryOperation",
                            "src": "415:7:30"
                          }
                        ],
                        "id": 8621,
                        "name": "FunctionCall",
                        "src": "407:16:30"
                      }
                    ],
                    "id": 8622,
                    "name": "ExpressionStatement",
                    "src": "407:16:30"
                  },
                  {
                    "id": 8623,
                    "name": "PlaceholderStatement",
                    "src": "429:1:30"
                  }
                ],
                "id": 8624,
                "name": "Block",
                "src": "401:34:30"
              }
            ],
            "id": 8625,
            "name": "ModifierDefinition",
            "src": "376:59:30"
          },
          {
            "attributes": {
              "name": "whenPaused",
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
                "id": 8626,
                "name": "ParameterList",
                "src": "551:2:30"
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
                              "referencedDeclaration": 10503,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 8627,
                            "name": "Identifier",
                            "src": "560:7:30"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8616,
                              "type": "bool",
                              "value": "paused"
                            },
                            "id": 8628,
                            "name": "Identifier",
                            "src": "568:6:30"
                          }
                        ],
                        "id": 8629,
                        "name": "FunctionCall",
                        "src": "560:15:30"
                      }
                    ],
                    "id": 8630,
                    "name": "ExpressionStatement",
                    "src": "560:15:30"
                  },
                  {
                    "id": 8631,
                    "name": "PlaceholderStatement",
                    "src": "581:1:30"
                  }
                ],
                "id": 8632,
                "name": "Block",
                "src": "554:33:30"
              }
            ],
            "id": 8633,
            "name": "ModifierDefinition",
            "src": "532:55:30"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "pause",
              "payable": false,
              "scope": 8664,
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
                "id": 8634,
                "name": "ParameterList",
                "src": "680:2:30"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 8639,
                "name": "ParameterList",
                "src": "714:0:30"
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
                      "referencedDeclaration": 8792,
                      "type": "modifier ()",
                      "value": "onlyOwner"
                    },
                    "id": 8635,
                    "name": "Identifier",
                    "src": "683:9:30"
                  }
                ],
                "id": 8636,
                "name": "ModifierInvocation",
                "src": "683:9:30"
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
                      "referencedDeclaration": 8625,
                      "type": "modifier ()",
                      "value": "whenNotPaused"
                    },
                    "id": 8637,
                    "name": "Identifier",
                    "src": "693:13:30"
                  }
                ],
                "id": 8638,
                "name": "ModifierInvocation",
                "src": "693:13:30"
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
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8616,
                              "type": "bool",
                              "value": "paused"
                            },
                            "id": 8640,
                            "name": "Identifier",
                            "src": "720:6:30"
                          },
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
                            "id": 8641,
                            "name": "Literal",
                            "src": "729:4:30"
                          }
                        ],
                        "id": 8642,
                        "name": "Assignment",
                        "src": "720:13:30"
                      }
                    ],
                    "id": 8643,
                    "name": "ExpressionStatement",
                    "src": "720:13:30"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "arguments": [
                            null
                          ],
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
                                null
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8611,
                              "type": "function ()",
                              "value": "Pause"
                            },
                            "id": 8644,
                            "name": "Identifier",
                            "src": "739:5:30"
                          }
                        ],
                        "id": 8645,
                        "name": "FunctionCall",
                        "src": "739:7:30"
                      }
                    ],
                    "id": 8646,
                    "name": "ExpressionStatement",
                    "src": "739:7:30"
                  }
                ],
                "id": 8647,
                "name": "Block",
                "src": "714:37:30"
              }
            ],
            "id": 8648,
            "name": "FunctionDefinition",
            "src": "666:85:30"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "unpause",
              "payable": false,
              "scope": 8664,
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
                "id": 8649,
                "name": "ParameterList",
                "src": "849:2:30"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 8654,
                "name": "ParameterList",
                "src": "880:0:30"
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
                      "referencedDeclaration": 8792,
                      "type": "modifier ()",
                      "value": "onlyOwner"
                    },
                    "id": 8650,
                    "name": "Identifier",
                    "src": "852:9:30"
                  }
                ],
                "id": 8651,
                "name": "ModifierInvocation",
                "src": "852:9:30"
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
                      "referencedDeclaration": 8633,
                      "type": "modifier ()",
                      "value": "whenPaused"
                    },
                    "id": 8652,
                    "name": "Identifier",
                    "src": "862:10:30"
                  }
                ],
                "id": 8653,
                "name": "ModifierInvocation",
                "src": "862:10:30"
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
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8616,
                              "type": "bool",
                              "value": "paused"
                            },
                            "id": 8655,
                            "name": "Identifier",
                            "src": "886:6:30"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "66616c7365",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "bool",
                              "type": "bool",
                              "value": "false"
                            },
                            "id": 8656,
                            "name": "Literal",
                            "src": "895:5:30"
                          }
                        ],
                        "id": 8657,
                        "name": "Assignment",
                        "src": "886:14:30"
                      }
                    ],
                    "id": 8658,
                    "name": "ExpressionStatement",
                    "src": "886:14:30"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "arguments": [
                            null
                          ],
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
                                null
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8613,
                              "type": "function ()",
                              "value": "Unpause"
                            },
                            "id": 8659,
                            "name": "Identifier",
                            "src": "906:7:30"
                          }
                        ],
                        "id": 8660,
                        "name": "FunctionCall",
                        "src": "906:9:30"
                      }
                    ],
                    "id": 8661,
                    "name": "ExpressionStatement",
                    "src": "906:9:30"
                  }
                ],
                "id": 8662,
                "name": "Block",
                "src": "880:40:30"
              }
            ],
            "id": 8663,
            "name": "FunctionDefinition",
            "src": "833:87:30"
          }
        ],
        "id": 8664,
        "name": "ContractDefinition",
        "src": "177:745:30"
      }
    ],
    "id": 8665,
    "name": "SourceUnit",
    "src": "0:923:30"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-07-02T23:10:02.089Z"
}