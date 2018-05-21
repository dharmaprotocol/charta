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
          9488
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
        "id": 9383,
        "name": "PragmaDirective",
        "src": "0:24:40"
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
            9488
          ],
          "name": "ERC721Basic",
          "scope": 9489
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
                      "scope": 9391,
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
                        "id": 9384,
                        "name": "ElementaryTypeName",
                        "src": "208:7:40"
                      }
                    ],
                    "id": 9385,
                    "name": "VariableDeclaration",
                    "src": "208:21:40"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "_to",
                      "scope": 9391,
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
                        "id": 9386,
                        "name": "ElementaryTypeName",
                        "src": "231:7:40"
                      }
                    ],
                    "id": 9387,
                    "name": "VariableDeclaration",
                    "src": "231:19:40"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "_tokenId",
                      "scope": 9391,
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
                        "id": 9388,
                        "name": "ElementaryTypeName",
                        "src": "252:7:40"
                      }
                    ],
                    "id": 9389,
                    "name": "VariableDeclaration",
                    "src": "252:16:40"
                  }
                ],
                "id": 9390,
                "name": "ParameterList",
                "src": "207:62:40"
              }
            ],
            "id": 9391,
            "name": "EventDefinition",
            "src": "193:77:40"
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
                      "scope": 9399,
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
                        "id": 9392,
                        "name": "ElementaryTypeName",
                        "src": "288:7:40"
                      }
                    ],
                    "id": 9393,
                    "name": "VariableDeclaration",
                    "src": "288:22:40"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "_approved",
                      "scope": 9399,
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
                        "id": 9394,
                        "name": "ElementaryTypeName",
                        "src": "312:7:40"
                      }
                    ],
                    "id": 9395,
                    "name": "VariableDeclaration",
                    "src": "312:25:40"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "_tokenId",
                      "scope": 9399,
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
                        "id": 9396,
                        "name": "ElementaryTypeName",
                        "src": "339:7:40"
                      }
                    ],
                    "id": 9397,
                    "name": "VariableDeclaration",
                    "src": "339:16:40"
                  }
                ],
                "id": 9398,
                "name": "ParameterList",
                "src": "287:69:40"
              }
            ],
            "id": 9399,
            "name": "EventDefinition",
            "src": "273:84:40"
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
                      "scope": 9407,
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
                        "id": 9400,
                        "name": "ElementaryTypeName",
                        "src": "381:7:40"
                      }
                    ],
                    "id": 9401,
                    "name": "VariableDeclaration",
                    "src": "381:22:40"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "_operator",
                      "scope": 9407,
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
                        "id": 9402,
                        "name": "ElementaryTypeName",
                        "src": "405:7:40"
                      }
                    ],
                    "id": 9403,
                    "name": "VariableDeclaration",
                    "src": "405:25:40"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "_approved",
                      "scope": 9407,
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
                        "id": 9404,
                        "name": "ElementaryTypeName",
                        "src": "432:4:40"
                      }
                    ],
                    "id": 9405,
                    "name": "VariableDeclaration",
                    "src": "432:14:40"
                  }
                ],
                "id": 9406,
                "name": "ParameterList",
                "src": "380:67:40"
              }
            ],
            "id": 9407,
            "name": "EventDefinition",
            "src": "360:88:40"
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
              "scope": 9488,
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
                      "scope": 9414,
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
                        "id": 9408,
                        "name": "ElementaryTypeName",
                        "src": "473:7:40"
                      }
                    ],
                    "id": 9409,
                    "name": "VariableDeclaration",
                    "src": "473:14:40"
                  }
                ],
                "id": 9410,
                "name": "ParameterList",
                "src": "472:16:40"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_balance",
                      "scope": 9414,
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
                        "id": 9411,
                        "name": "ElementaryTypeName",
                        "src": "510:7:40"
                      }
                    ],
                    "id": 9412,
                    "name": "VariableDeclaration",
                    "src": "510:16:40"
                  }
                ],
                "id": 9413,
                "name": "ParameterList",
                "src": "509:18:40"
              }
            ],
            "id": 9414,
            "name": "FunctionDefinition",
            "src": "454:74:40"
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
              "scope": 9488,
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
                      "scope": 9421,
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
                        "id": 9415,
                        "name": "ElementaryTypeName",
                        "src": "548:7:40"
                      }
                    ],
                    "id": 9416,
                    "name": "VariableDeclaration",
                    "src": "548:16:40"
                  }
                ],
                "id": 9417,
                "name": "ParameterList",
                "src": "547:18:40"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_owner",
                      "scope": 9421,
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
                        "id": 9418,
                        "name": "ElementaryTypeName",
                        "src": "587:7:40"
                      }
                    ],
                    "id": 9419,
                    "name": "VariableDeclaration",
                    "src": "587:14:40"
                  }
                ],
                "id": 9420,
                "name": "ParameterList",
                "src": "586:16:40"
              }
            ],
            "id": 9421,
            "name": "FunctionDefinition",
            "src": "531:72:40"
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
              "scope": 9488,
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
                      "scope": 9428,
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
                        "id": 9422,
                        "name": "ElementaryTypeName",
                        "src": "622:7:40"
                      }
                    ],
                    "id": 9423,
                    "name": "VariableDeclaration",
                    "src": "622:16:40"
                  }
                ],
                "id": 9424,
                "name": "ParameterList",
                "src": "621:18:40"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_exists",
                      "scope": 9428,
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
                        "id": 9425,
                        "name": "ElementaryTypeName",
                        "src": "661:4:40"
                      }
                    ],
                    "id": 9426,
                    "name": "VariableDeclaration",
                    "src": "661:12:40"
                  }
                ],
                "id": 9427,
                "name": "ParameterList",
                "src": "660:14:40"
              }
            ],
            "id": 9428,
            "name": "FunctionDefinition",
            "src": "606:69:40"
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
              "scope": 9488,
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
                      "scope": 9435,
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
                        "id": 9429,
                        "name": "ElementaryTypeName",
                        "src": "698:7:40"
                      }
                    ],
                    "id": 9430,
                    "name": "VariableDeclaration",
                    "src": "698:11:40"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 9435,
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
                        "id": 9431,
                        "name": "ElementaryTypeName",
                        "src": "711:7:40"
                      }
                    ],
                    "id": 9432,
                    "name": "VariableDeclaration",
                    "src": "711:16:40"
                  }
                ],
                "id": 9433,
                "name": "ParameterList",
                "src": "697:31:40"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 9434,
                "name": "ParameterList",
                "src": "735:0:40"
              }
            ],
            "id": 9435,
            "name": "FunctionDefinition",
            "src": "681:55:40"
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
              "scope": 9488,
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
                      "scope": 9442,
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
                        "id": 9436,
                        "name": "ElementaryTypeName",
                        "src": "760:7:40"
                      }
                    ],
                    "id": 9437,
                    "name": "VariableDeclaration",
                    "src": "760:16:40"
                  }
                ],
                "id": 9438,
                "name": "ParameterList",
                "src": "759:18:40"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_operator",
                      "scope": 9442,
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
                        "id": 9439,
                        "name": "ElementaryTypeName",
                        "src": "799:7:40"
                      }
                    ],
                    "id": 9440,
                    "name": "VariableDeclaration",
                    "src": "799:17:40"
                  }
                ],
                "id": 9441,
                "name": "ParameterList",
                "src": "798:19:40"
              }
            ],
            "id": 9442,
            "name": "FunctionDefinition",
            "src": "739:79:40"
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
              "scope": 9488,
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
                      "scope": 9449,
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
                        "id": 9443,
                        "name": "ElementaryTypeName",
                        "src": "851:7:40"
                      }
                    ],
                    "id": 9444,
                    "name": "VariableDeclaration",
                    "src": "851:17:40"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_approved",
                      "scope": 9449,
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
                        "id": 9445,
                        "name": "ElementaryTypeName",
                        "src": "870:4:40"
                      }
                    ],
                    "id": 9446,
                    "name": "VariableDeclaration",
                    "src": "870:14:40"
                  }
                ],
                "id": 9447,
                "name": "ParameterList",
                "src": "850:35:40"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 9448,
                "name": "ParameterList",
                "src": "892:0:40"
              }
            ],
            "id": 9449,
            "name": "FunctionDefinition",
            "src": "824:69:40"
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
              "scope": 9488,
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
                      "scope": 9458,
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
                        "id": 9450,
                        "name": "ElementaryTypeName",
                        "src": "922:7:40"
                      }
                    ],
                    "id": 9451,
                    "name": "VariableDeclaration",
                    "src": "922:14:40"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_operator",
                      "scope": 9458,
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
                        "id": 9452,
                        "name": "ElementaryTypeName",
                        "src": "938:7:40"
                      }
                    ],
                    "id": 9453,
                    "name": "VariableDeclaration",
                    "src": "938:17:40"
                  }
                ],
                "id": 9454,
                "name": "ParameterList",
                "src": "921:35:40"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 9458,
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
                        "id": 9455,
                        "name": "ElementaryTypeName",
                        "src": "978:4:40"
                      }
                    ],
                    "id": 9456,
                    "name": "VariableDeclaration",
                    "src": "978:4:40"
                  }
                ],
                "id": 9457,
                "name": "ParameterList",
                "src": "977:6:40"
              }
            ],
            "id": 9458,
            "name": "FunctionDefinition",
            "src": "896:88:40"
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
              "scope": 9488,
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
                      "scope": 9467,
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
                        "id": 9459,
                        "name": "ElementaryTypeName",
                        "src": "1010:7:40"
                      }
                    ],
                    "id": 9460,
                    "name": "VariableDeclaration",
                    "src": "1010:13:40"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 9467,
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
                        "id": 9461,
                        "name": "ElementaryTypeName",
                        "src": "1025:7:40"
                      }
                    ],
                    "id": 9462,
                    "name": "VariableDeclaration",
                    "src": "1025:11:40"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 9467,
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
                        "id": 9463,
                        "name": "ElementaryTypeName",
                        "src": "1038:7:40"
                      }
                    ],
                    "id": 9464,
                    "name": "VariableDeclaration",
                    "src": "1038:16:40"
                  }
                ],
                "id": 9465,
                "name": "ParameterList",
                "src": "1009:46:40"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 9466,
                "name": "ParameterList",
                "src": "1062:0:40"
              }
            ],
            "id": 9467,
            "name": "FunctionDefinition",
            "src": "988:75:40"
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
              "scope": 9488,
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
                      "scope": 9476,
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
                        "id": 9468,
                        "name": "ElementaryTypeName",
                        "src": "1092:7:40"
                      }
                    ],
                    "id": 9469,
                    "name": "VariableDeclaration",
                    "src": "1092:13:40"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 9476,
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
                        "id": 9470,
                        "name": "ElementaryTypeName",
                        "src": "1107:7:40"
                      }
                    ],
                    "id": 9471,
                    "name": "VariableDeclaration",
                    "src": "1107:11:40"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 9476,
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
                        "id": 9472,
                        "name": "ElementaryTypeName",
                        "src": "1120:7:40"
                      }
                    ],
                    "id": 9473,
                    "name": "VariableDeclaration",
                    "src": "1120:16:40"
                  }
                ],
                "id": 9474,
                "name": "ParameterList",
                "src": "1091:46:40"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 9475,
                "name": "ParameterList",
                "src": "1144:0:40"
              }
            ],
            "id": 9476,
            "name": "FunctionDefinition",
            "src": "1066:79:40"
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
              "scope": 9488,
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
                      "scope": 9487,
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
                        "id": 9477,
                        "name": "ElementaryTypeName",
                        "src": "1176:7:40"
                      }
                    ],
                    "id": 9478,
                    "name": "VariableDeclaration",
                    "src": "1176:13:40"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 9487,
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
                        "id": 9479,
                        "name": "ElementaryTypeName",
                        "src": "1191:7:40"
                      }
                    ],
                    "id": 9480,
                    "name": "VariableDeclaration",
                    "src": "1191:11:40"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 9487,
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
                        "id": 9481,
                        "name": "ElementaryTypeName",
                        "src": "1204:7:40"
                      }
                    ],
                    "id": 9482,
                    "name": "VariableDeclaration",
                    "src": "1204:16:40"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_data",
                      "scope": 9487,
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
                        "id": 9483,
                        "name": "ElementaryTypeName",
                        "src": "1222:5:40"
                      }
                    ],
                    "id": 9484,
                    "name": "VariableDeclaration",
                    "src": "1222:11:40"
                  }
                ],
                "id": 9485,
                "name": "ParameterList",
                "src": "1175:59:40"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 9486,
                "name": "ParameterList",
                "src": "1241:0:40"
              }
            ],
            "id": 9487,
            "name": "FunctionDefinition",
            "src": "1150:92:40"
          }
        ],
        "id": 9488,
        "name": "ContractDefinition",
        "src": "168:1076:40"
      }
    ],
    "id": 9489,
    "name": "SourceUnit",
    "src": "0:1245:40"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-05-21T18:00:40.714Z"
}