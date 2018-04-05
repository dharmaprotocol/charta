export const ERC721Enumerable = 
{
  "contractName": "ERC721Enumerable",
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
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        },
        {
          "name": "_index",
          "type": "uint256"
        }
      ],
      "name": "tokenOfOwnerByIndex",
      "outputs": [
        {
          "name": "_tokenId",
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
          "name": "_index",
          "type": "uint256"
        }
      ],
      "name": "tokenByIndex",
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
  "source": "pragma solidity ^0.4.18;\n\nimport \"./ERC721Basic.sol\";\n\n/**\n * @title ERC-721 Non-Fungible Token Standard, optional enumeration extension\n * @dev See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md\n */\ncontract ERC721Enumerable is ERC721Basic {\n  function totalSupply() public view returns (uint256);\n  function tokenOfOwnerByIndex(address _owner, uint256 _index) public view returns (uint256 _tokenId);\n  function tokenByIndex(uint256 _index) public view returns (uint256);\n}\n\n/**\n * @title ERC-721 Non-Fungible Token Standard, optional metadata extension\n * @dev See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md\n */\ncontract ERC721Metadata is ERC721Basic {\n  function name() public view returns (string _name);\n  function symbol() public view returns (string _symbol);\n  function tokenURI(uint256 _tokenId) public view returns (string);\n}\n\n/**\n * @title ERC-721 Non-Fungible Token Standard, full implementation interface\n * @dev See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md\n */\ncontract ERC721 is ERC721Basic, ERC721Enumerable, ERC721Metadata {\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/token/ERC721/ERC721.sol",
  "ast": {
    "attributes": {
      "absolutePath": "zeppelin-solidity/contracts/token/ERC721/ERC721.sol",
      "exportedSymbols": {
        "ERC721": [
          5464
        ],
        "ERC721Enumerable": [
          5437
        ],
        "ERC721Metadata": [
          5457
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
        "id": 5412,
        "name": "PragmaDirective",
        "src": "0:24:22"
      },
      {
        "attributes": {
          "SourceUnit": 5572,
          "absolutePath": "zeppelin-solidity/contracts/token/ERC721/ERC721Basic.sol",
          "file": "./ERC721Basic.sol",
          "scope": 5465,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 5413,
        "name": "ImportDirective",
        "src": "26:27:22"
      },
      {
        "attributes": {
          "contractDependencies": [
            5571
          ],
          "contractKind": "contract",
          "documentation": "@title ERC-721 Non-Fungible Token Standard, optional enumeration extension\n@dev See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",
          "fullyImplemented": false,
          "linearizedBaseContracts": [
            5437,
            5571
          ],
          "name": "ERC721Enumerable",
          "scope": 5465
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
                  "name": "ERC721Basic",
                  "referencedDeclaration": 5571,
                  "type": "contract ERC721Basic"
                },
                "id": 5414,
                "name": "UserDefinedTypeName",
                "src": "243:11:22"
              }
            ],
            "id": 5415,
            "name": "InheritanceSpecifier",
            "src": "243:11:22"
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
              "name": "totalSupply",
              "payable": false,
              "scope": 5437,
              "stateMutability": "view",
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
                "id": 5416,
                "name": "ParameterList",
                "src": "279:2:22"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 5420,
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
                        "id": 5417,
                        "name": "ElementaryTypeName",
                        "src": "303:7:22"
                      }
                    ],
                    "id": 5418,
                    "name": "VariableDeclaration",
                    "src": "303:7:22"
                  }
                ],
                "id": 5419,
                "name": "ParameterList",
                "src": "302:9:22"
              }
            ],
            "id": 5420,
            "name": "FunctionDefinition",
            "src": "259:53:22"
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
              "name": "tokenOfOwnerByIndex",
              "payable": false,
              "scope": 5437,
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
                      "scope": 5429,
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
                        "id": 5421,
                        "name": "ElementaryTypeName",
                        "src": "344:7:22"
                      }
                    ],
                    "id": 5422,
                    "name": "VariableDeclaration",
                    "src": "344:14:22"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_index",
                      "scope": 5429,
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
                        "id": 5423,
                        "name": "ElementaryTypeName",
                        "src": "360:7:22"
                      }
                    ],
                    "id": 5424,
                    "name": "VariableDeclaration",
                    "src": "360:14:22"
                  }
                ],
                "id": 5425,
                "name": "ParameterList",
                "src": "343:32:22"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 5429,
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
                        "id": 5426,
                        "name": "ElementaryTypeName",
                        "src": "397:7:22"
                      }
                    ],
                    "id": 5427,
                    "name": "VariableDeclaration",
                    "src": "397:16:22"
                  }
                ],
                "id": 5428,
                "name": "ParameterList",
                "src": "396:18:22"
              }
            ],
            "id": 5429,
            "name": "FunctionDefinition",
            "src": "315:100:22"
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
              "name": "tokenByIndex",
              "payable": false,
              "scope": 5437,
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
                      "name": "_index",
                      "scope": 5436,
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
                        "id": 5430,
                        "name": "ElementaryTypeName",
                        "src": "440:7:22"
                      }
                    ],
                    "id": 5431,
                    "name": "VariableDeclaration",
                    "src": "440:14:22"
                  }
                ],
                "id": 5432,
                "name": "ParameterList",
                "src": "439:16:22"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 5436,
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
                        "id": 5433,
                        "name": "ElementaryTypeName",
                        "src": "477:7:22"
                      }
                    ],
                    "id": 5434,
                    "name": "VariableDeclaration",
                    "src": "477:7:22"
                  }
                ],
                "id": 5435,
                "name": "ParameterList",
                "src": "476:9:22"
              }
            ],
            "id": 5436,
            "name": "FunctionDefinition",
            "src": "418:68:22"
          }
        ],
        "id": 5437,
        "name": "ContractDefinition",
        "src": "214:274:22"
      },
      {
        "attributes": {
          "contractDependencies": [
            5571
          ],
          "contractKind": "contract",
          "documentation": "@title ERC-721 Non-Fungible Token Standard, optional metadata extension\n@dev See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",
          "fullyImplemented": false,
          "linearizedBaseContracts": [
            5457,
            5571
          ],
          "name": "ERC721Metadata",
          "scope": 5465
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
                  "name": "ERC721Basic",
                  "referencedDeclaration": 5571,
                  "type": "contract ERC721Basic"
                },
                "id": 5438,
                "name": "UserDefinedTypeName",
                "src": "673:11:22"
              }
            ],
            "id": 5439,
            "name": "InheritanceSpecifier",
            "src": "673:11:22"
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
              "name": "name",
              "payable": false,
              "scope": 5457,
              "stateMutability": "view",
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
                "id": 5440,
                "name": "ParameterList",
                "src": "702:2:22"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_name",
                      "scope": 5444,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string storage pointer"
                        },
                        "id": 5441,
                        "name": "ElementaryTypeName",
                        "src": "726:6:22"
                      }
                    ],
                    "id": 5442,
                    "name": "VariableDeclaration",
                    "src": "726:12:22"
                  }
                ],
                "id": 5443,
                "name": "ParameterList",
                "src": "725:14:22"
              }
            ],
            "id": 5444,
            "name": "FunctionDefinition",
            "src": "689:51:22"
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
              "name": "symbol",
              "payable": false,
              "scope": 5457,
              "stateMutability": "view",
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
                "id": 5445,
                "name": "ParameterList",
                "src": "758:2:22"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_symbol",
                      "scope": 5449,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string storage pointer"
                        },
                        "id": 5446,
                        "name": "ElementaryTypeName",
                        "src": "782:6:22"
                      }
                    ],
                    "id": 5447,
                    "name": "VariableDeclaration",
                    "src": "782:14:22"
                  }
                ],
                "id": 5448,
                "name": "ParameterList",
                "src": "781:16:22"
              }
            ],
            "id": 5449,
            "name": "FunctionDefinition",
            "src": "743:55:22"
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
              "name": "tokenURI",
              "payable": false,
              "scope": 5457,
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
                      "scope": 5456,
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
                        "id": 5450,
                        "name": "ElementaryTypeName",
                        "src": "819:7:22"
                      }
                    ],
                    "id": 5451,
                    "name": "VariableDeclaration",
                    "src": "819:16:22"
                  }
                ],
                "id": 5452,
                "name": "ParameterList",
                "src": "818:18:22"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 5456,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string storage pointer"
                        },
                        "id": 5453,
                        "name": "ElementaryTypeName",
                        "src": "858:6:22"
                      }
                    ],
                    "id": 5454,
                    "name": "VariableDeclaration",
                    "src": "858:6:22"
                  }
                ],
                "id": 5455,
                "name": "ParameterList",
                "src": "857:8:22"
              }
            ],
            "id": 5456,
            "name": "FunctionDefinition",
            "src": "801:65:22"
          }
        ],
        "id": 5457,
        "name": "ContractDefinition",
        "src": "646:222:22"
      },
      {
        "attributes": {
          "contractDependencies": [
            5437,
            5457,
            5571
          ],
          "contractKind": "contract",
          "documentation": "@title ERC-721 Non-Fungible Token Standard, full implementation interface\n@dev See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",
          "fullyImplemented": false,
          "linearizedBaseContracts": [
            5464,
            5457,
            5437,
            5571
          ],
          "name": "ERC721",
          "nodes": [
            null
          ],
          "scope": 5465
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
                  "name": "ERC721Basic",
                  "referencedDeclaration": 5571,
                  "type": "contract ERC721Basic"
                },
                "id": 5458,
                "name": "UserDefinedTypeName",
                "src": "1047:11:22"
              }
            ],
            "id": 5459,
            "name": "InheritanceSpecifier",
            "src": "1047:11:22"
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
                  "contractScope": null,
                  "name": "ERC721Enumerable",
                  "referencedDeclaration": 5437,
                  "type": "contract ERC721Enumerable"
                },
                "id": 5460,
                "name": "UserDefinedTypeName",
                "src": "1060:16:22"
              }
            ],
            "id": 5461,
            "name": "InheritanceSpecifier",
            "src": "1060:16:22"
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
                  "contractScope": null,
                  "name": "ERC721Metadata",
                  "referencedDeclaration": 5457,
                  "type": "contract ERC721Metadata"
                },
                "id": 5462,
                "name": "UserDefinedTypeName",
                "src": "1078:14:22"
              }
            ],
            "id": 5463,
            "name": "InheritanceSpecifier",
            "src": "1078:14:22"
          }
        ],
        "id": 5464,
        "name": "ContractDefinition",
        "src": "1028:68:22"
      }
    ],
    "id": 5465,
    "name": "SourceUnit",
    "src": "0:1097:22"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-04-05T21:27:03.077Z"
}