export const ERC721Basic = 
{
  "contractName": "ERC721Basic",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "name": "_operator",
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
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "exists",
      "outputs": [
        {
          "name": "_exists",
          "type": "bool"
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
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "name": "_owner",
          "type": "address"
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
          "name": "_balance",
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
          "name": "_operator",
          "type": "address"
        },
        {
          "name": "_approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_tokenId",
          "type": "uint256"
        },
        {
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        },
        {
          "name": "_operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
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
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_approved",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_operator",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "pragma solidity ^0.4.18;\n\n/**\n * @title ERC721 Non-Fungible Token Standard basic interface\n * @dev see https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md\n */\ncontract ERC721Basic {\n  event Transfer(address indexed _from, address indexed _to, uint256 _tokenId);\n  event Approval(address indexed _owner, address indexed _approved, uint256 _tokenId);\n  event ApprovalForAll(address indexed _owner, address indexed _operator, bool _approved);  \n\n  function balanceOf(address _owner) public view returns (uint256 _balance);\n  function ownerOf(uint256 _tokenId) public view returns (address _owner);\n  function exists(uint256 _tokenId) public view returns (bool _exists);\n  \n  function approve(address _to, uint256 _tokenId) public;\n  function getApproved(uint256 _tokenId) public view returns (address _operator);\n  \n  function setApprovalForAll(address _operator, bool _approved) public;\n  function isApprovedForAll(address _owner, address _operator) public view returns (bool);\n\n  function transferFrom(address _from, address _to, uint256 _tokenId) public;\n  function safeTransferFrom(address _from, address _to, uint256 _tokenId) public;  \n  function safeTransferFrom(address _from, address _to, uint256 _tokenId, bytes _data) public;\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/token/ERC721/ERC721Basic.sol",
  "ast": {
    "attributes": {
      "absolutePath": "zeppelin-solidity/contracts/token/ERC721/ERC721Basic.sol",
      "exportedSymbols": {
        "ERC721Basic": [
          14850
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
        "id": 14745,
        "name": "PragmaDirective",
        "src": "0:24:47"
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
          "documentation": "@title ERC721 Non-Fungible Token Standard basic interface\n@dev see https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",
          "fullyImplemented": false,
          "linearizedBaseContracts": [
            14850
          ],
          "name": "ERC721Basic",
          "scope": 14851
        },
        "children": [
          {
            "attributes": {
              "anonymous": false,
              "name": "Transfer"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "_from",
                      "scope": 14753,
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
                        "id": 14746,
                        "name": "ElementaryTypeName",
                        "src": "208:7:47"
                      }
                    ],
                    "id": 14747,
                    "name": "VariableDeclaration",
                    "src": "208:21:47"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "_to",
                      "scope": 14753,
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
                        "id": 14748,
                        "name": "ElementaryTypeName",
                        "src": "231:7:47"
                      }
                    ],
                    "id": 14749,
                    "name": "VariableDeclaration",
                    "src": "231:19:47"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "_tokenId",
                      "scope": 14753,
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
                        "id": 14750,
                        "name": "ElementaryTypeName",
                        "src": "252:7:47"
                      }
                    ],
                    "id": 14751,
                    "name": "VariableDeclaration",
                    "src": "252:16:47"
                  }
                ],
                "id": 14752,
                "name": "ParameterList",
                "src": "207:62:47"
              }
            ],
            "id": 14753,
            "name": "EventDefinition",
            "src": "193:77:47"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "Approval"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "_owner",
                      "scope": 14761,
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
                        "id": 14754,
                        "name": "ElementaryTypeName",
                        "src": "288:7:47"
                      }
                    ],
                    "id": 14755,
                    "name": "VariableDeclaration",
                    "src": "288:22:47"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "_approved",
                      "scope": 14761,
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
                        "id": 14756,
                        "name": "ElementaryTypeName",
                        "src": "312:7:47"
                      }
                    ],
                    "id": 14757,
                    "name": "VariableDeclaration",
                    "src": "312:25:47"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "_tokenId",
                      "scope": 14761,
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
                        "id": 14758,
                        "name": "ElementaryTypeName",
                        "src": "339:7:47"
                      }
                    ],
                    "id": 14759,
                    "name": "VariableDeclaration",
                    "src": "339:16:47"
                  }
                ],
                "id": 14760,
                "name": "ParameterList",
                "src": "287:69:47"
              }
            ],
            "id": 14761,
            "name": "EventDefinition",
            "src": "273:84:47"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "ApprovalForAll"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "_owner",
                      "scope": 14769,
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
                        "id": 14762,
                        "name": "ElementaryTypeName",
                        "src": "381:7:47"
                      }
                    ],
                    "id": 14763,
                    "name": "VariableDeclaration",
                    "src": "381:22:47"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "_operator",
                      "scope": 14769,
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
                        "id": 14764,
                        "name": "ElementaryTypeName",
                        "src": "405:7:47"
                      }
                    ],
                    "id": 14765,
                    "name": "VariableDeclaration",
                    "src": "405:25:47"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "_approved",
                      "scope": 14769,
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
                        "id": 14766,
                        "name": "ElementaryTypeName",
                        "src": "432:4:47"
                      }
                    ],
                    "id": 14767,
                    "name": "VariableDeclaration",
                    "src": "432:14:47"
                  }
                ],
                "id": 14768,
                "name": "ParameterList",
                "src": "380:67:47"
              }
            ],
            "id": 14769,
            "name": "EventDefinition",
            "src": "360:88:47"
          },
          {
            "attributes": {
              "body": null,
              "constant": true,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "balanceOf",
              "payable": false,
              "scope": 14850,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_owner",
                      "scope": 14776,
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
                        "id": 14770,
                        "name": "ElementaryTypeName",
                        "src": "473:7:47"
                      }
                    ],
                    "id": 14771,
                    "name": "VariableDeclaration",
                    "src": "473:14:47"
                  }
                ],
                "id": 14772,
                "name": "ParameterList",
                "src": "472:16:47"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_balance",
                      "scope": 14776,
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
                        "id": 14773,
                        "name": "ElementaryTypeName",
                        "src": "510:7:47"
                      }
                    ],
                    "id": 14774,
                    "name": "VariableDeclaration",
                    "src": "510:16:47"
                  }
                ],
                "id": 14775,
                "name": "ParameterList",
                "src": "509:18:47"
              }
            ],
            "id": 14776,
            "name": "FunctionDefinition",
            "src": "454:74:47"
          },
          {
            "attributes": {
              "body": null,
              "constant": true,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "ownerOf",
              "payable": false,
              "scope": 14850,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 14783,
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
                        "id": 14777,
                        "name": "ElementaryTypeName",
                        "src": "548:7:47"
                      }
                    ],
                    "id": 14778,
                    "name": "VariableDeclaration",
                    "src": "548:16:47"
                  }
                ],
                "id": 14779,
                "name": "ParameterList",
                "src": "547:18:47"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_owner",
                      "scope": 14783,
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
                        "id": 14780,
                        "name": "ElementaryTypeName",
                        "src": "587:7:47"
                      }
                    ],
                    "id": 14781,
                    "name": "VariableDeclaration",
                    "src": "587:14:47"
                  }
                ],
                "id": 14782,
                "name": "ParameterList",
                "src": "586:16:47"
              }
            ],
            "id": 14783,
            "name": "FunctionDefinition",
            "src": "531:72:47"
          },
          {
            "attributes": {
              "body": null,
              "constant": true,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "exists",
              "payable": false,
              "scope": 14850,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 14790,
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
                        "id": 14784,
                        "name": "ElementaryTypeName",
                        "src": "622:7:47"
                      }
                    ],
                    "id": 14785,
                    "name": "VariableDeclaration",
                    "src": "622:16:47"
                  }
                ],
                "id": 14786,
                "name": "ParameterList",
                "src": "621:18:47"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_exists",
                      "scope": 14790,
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
                        "id": 14787,
                        "name": "ElementaryTypeName",
                        "src": "661:4:47"
                      }
                    ],
                    "id": 14788,
                    "name": "VariableDeclaration",
                    "src": "661:12:47"
                  }
                ],
                "id": 14789,
                "name": "ParameterList",
                "src": "660:14:47"
              }
            ],
            "id": 14790,
            "name": "FunctionDefinition",
            "src": "606:69:47"
          },
          {
            "attributes": {
              "body": null,
              "constant": false,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "approve",
              "payable": false,
              "scope": 14850,
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
                      "name": "_to",
                      "scope": 14797,
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
                        "id": 14791,
                        "name": "ElementaryTypeName",
                        "src": "698:7:47"
                      }
                    ],
                    "id": 14792,
                    "name": "VariableDeclaration",
                    "src": "698:11:47"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 14797,
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
                        "id": 14793,
                        "name": "ElementaryTypeName",
                        "src": "711:7:47"
                      }
                    ],
                    "id": 14794,
                    "name": "VariableDeclaration",
                    "src": "711:16:47"
                  }
                ],
                "id": 14795,
                "name": "ParameterList",
                "src": "697:31:47"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 14796,
                "name": "ParameterList",
                "src": "735:0:47"
              }
            ],
            "id": 14797,
            "name": "FunctionDefinition",
            "src": "681:55:47"
          },
          {
            "attributes": {
              "body": null,
              "constant": true,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getApproved",
              "payable": false,
              "scope": 14850,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 14804,
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
                        "id": 14798,
                        "name": "ElementaryTypeName",
                        "src": "760:7:47"
                      }
                    ],
                    "id": 14799,
                    "name": "VariableDeclaration",
                    "src": "760:16:47"
                  }
                ],
                "id": 14800,
                "name": "ParameterList",
                "src": "759:18:47"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_operator",
                      "scope": 14804,
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
                        "id": 14801,
                        "name": "ElementaryTypeName",
                        "src": "799:7:47"
                      }
                    ],
                    "id": 14802,
                    "name": "VariableDeclaration",
                    "src": "799:17:47"
                  }
                ],
                "id": 14803,
                "name": "ParameterList",
                "src": "798:19:47"
              }
            ],
            "id": 14804,
            "name": "FunctionDefinition",
            "src": "739:79:47"
          },
          {
            "attributes": {
              "body": null,
              "constant": false,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "setApprovalForAll",
              "payable": false,
              "scope": 14850,
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
                      "name": "_operator",
                      "scope": 14811,
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
                        "id": 14805,
                        "name": "ElementaryTypeName",
                        "src": "851:7:47"
                      }
                    ],
                    "id": 14806,
                    "name": "VariableDeclaration",
                    "src": "851:17:47"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_approved",
                      "scope": 14811,
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
                        "id": 14807,
                        "name": "ElementaryTypeName",
                        "src": "870:4:47"
                      }
                    ],
                    "id": 14808,
                    "name": "VariableDeclaration",
                    "src": "870:14:47"
                  }
                ],
                "id": 14809,
                "name": "ParameterList",
                "src": "850:35:47"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 14810,
                "name": "ParameterList",
                "src": "892:0:47"
              }
            ],
            "id": 14811,
            "name": "FunctionDefinition",
            "src": "824:69:47"
          },
          {
            "attributes": {
              "body": null,
              "constant": true,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "isApprovedForAll",
              "payable": false,
              "scope": 14850,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_owner",
                      "scope": 14820,
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
                        "id": 14812,
                        "name": "ElementaryTypeName",
                        "src": "922:7:47"
                      }
                    ],
                    "id": 14813,
                    "name": "VariableDeclaration",
                    "src": "922:14:47"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_operator",
                      "scope": 14820,
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
                        "id": 14814,
                        "name": "ElementaryTypeName",
                        "src": "938:7:47"
                      }
                    ],
                    "id": 14815,
                    "name": "VariableDeclaration",
                    "src": "938:17:47"
                  }
                ],
                "id": 14816,
                "name": "ParameterList",
                "src": "921:35:47"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 14820,
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
                        "id": 14817,
                        "name": "ElementaryTypeName",
                        "src": "978:4:47"
                      }
                    ],
                    "id": 14818,
                    "name": "VariableDeclaration",
                    "src": "978:4:47"
                  }
                ],
                "id": 14819,
                "name": "ParameterList",
                "src": "977:6:47"
              }
            ],
            "id": 14820,
            "name": "FunctionDefinition",
            "src": "896:88:47"
          },
          {
            "attributes": {
              "body": null,
              "constant": false,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "transferFrom",
              "payable": false,
              "scope": 14850,
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
                      "name": "_from",
                      "scope": 14829,
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
                        "id": 14821,
                        "name": "ElementaryTypeName",
                        "src": "1010:7:47"
                      }
                    ],
                    "id": 14822,
                    "name": "VariableDeclaration",
                    "src": "1010:13:47"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 14829,
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
                        "id": 14823,
                        "name": "ElementaryTypeName",
                        "src": "1025:7:47"
                      }
                    ],
                    "id": 14824,
                    "name": "VariableDeclaration",
                    "src": "1025:11:47"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 14829,
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
                        "id": 14825,
                        "name": "ElementaryTypeName",
                        "src": "1038:7:47"
                      }
                    ],
                    "id": 14826,
                    "name": "VariableDeclaration",
                    "src": "1038:16:47"
                  }
                ],
                "id": 14827,
                "name": "ParameterList",
                "src": "1009:46:47"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 14828,
                "name": "ParameterList",
                "src": "1062:0:47"
              }
            ],
            "id": 14829,
            "name": "FunctionDefinition",
            "src": "988:75:47"
          },
          {
            "attributes": {
              "body": null,
              "constant": false,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "safeTransferFrom",
              "payable": false,
              "scope": 14850,
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
                      "name": "_from",
                      "scope": 14838,
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
                        "id": 14830,
                        "name": "ElementaryTypeName",
                        "src": "1092:7:47"
                      }
                    ],
                    "id": 14831,
                    "name": "VariableDeclaration",
                    "src": "1092:13:47"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 14838,
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
                        "id": 14832,
                        "name": "ElementaryTypeName",
                        "src": "1107:7:47"
                      }
                    ],
                    "id": 14833,
                    "name": "VariableDeclaration",
                    "src": "1107:11:47"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 14838,
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
                        "id": 14834,
                        "name": "ElementaryTypeName",
                        "src": "1120:7:47"
                      }
                    ],
                    "id": 14835,
                    "name": "VariableDeclaration",
                    "src": "1120:16:47"
                  }
                ],
                "id": 14836,
                "name": "ParameterList",
                "src": "1091:46:47"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 14837,
                "name": "ParameterList",
                "src": "1144:0:47"
              }
            ],
            "id": 14838,
            "name": "FunctionDefinition",
            "src": "1066:79:47"
          },
          {
            "attributes": {
              "body": null,
              "constant": false,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "safeTransferFrom",
              "payable": false,
              "scope": 14850,
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
                      "name": "_from",
                      "scope": 14849,
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
                        "id": 14839,
                        "name": "ElementaryTypeName",
                        "src": "1176:7:47"
                      }
                    ],
                    "id": 14840,
                    "name": "VariableDeclaration",
                    "src": "1176:13:47"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 14849,
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
                        "id": 14841,
                        "name": "ElementaryTypeName",
                        "src": "1191:7:47"
                      }
                    ],
                    "id": 14842,
                    "name": "VariableDeclaration",
                    "src": "1191:11:47"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 14849,
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
                        "id": 14843,
                        "name": "ElementaryTypeName",
                        "src": "1204:7:47"
                      }
                    ],
                    "id": 14844,
                    "name": "VariableDeclaration",
                    "src": "1204:16:47"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_data",
                      "scope": 14849,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes",
                          "type": "bytes storage pointer"
                        },
                        "id": 14845,
                        "name": "ElementaryTypeName",
                        "src": "1222:5:47"
                      }
                    ],
                    "id": 14846,
                    "name": "VariableDeclaration",
                    "src": "1222:11:47"
                  }
                ],
                "id": 14847,
                "name": "ParameterList",
                "src": "1175:59:47"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 14848,
                "name": "ParameterList",
                "src": "1241:0:47"
              }
            ],
            "id": 14849,
            "name": "FunctionDefinition",
            "src": "1150:92:47"
          }
        ],
        "id": 14850,
        "name": "ContractDefinition",
        "src": "168:1076:47"
      }
    ],
    "id": 14851,
    "name": "SourceUnit",
    "src": "0:1245:47"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-09-26T17:52:34.421Z"
}