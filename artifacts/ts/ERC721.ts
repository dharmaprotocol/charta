export const ERC721 = 
{
  "contractName": "ERC721",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "name": "_name",
          "type": "string"
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
      "constant": true,
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "name": "_symbol",
          "type": "string"
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
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "name": "",
          "type": "string"
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
          8984
        ],
        "ERC721Enumerable": [
          8957
        ],
        "ERC721Metadata": [
          8977
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
        "id": 8932,
        "name": "PragmaDirective",
        "src": "0:24:38"
      },
      {
        "attributes": {
          "SourceUnit": 9092,
          "absolutePath": "zeppelin-solidity/contracts/token/ERC721/ERC721Basic.sol",
          "file": "./ERC721Basic.sol",
          "scope": 8985,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 8933,
        "name": "ImportDirective",
        "src": "26:27:38"
      },
      {
        "attributes": {
          "contractDependencies": [
            9091
          ],
          "contractKind": "contract",
          "documentation": "@title ERC-721 Non-Fungible Token Standard, optional enumeration extension\n@dev See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",
          "fullyImplemented": false,
          "linearizedBaseContracts": [
            8957,
            9091
          ],
          "name": "ERC721Enumerable",
          "scope": 8985
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
                  "referencedDeclaration": 9091,
                  "type": "contract ERC721Basic"
                },
                "id": 8934,
                "name": "UserDefinedTypeName",
                "src": "243:11:38"
              }
            ],
            "id": 8935,
            "name": "InheritanceSpecifier",
            "src": "243:11:38"
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
              "scope": 8957,
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
                "id": 8936,
                "name": "ParameterList",
                "src": "279:2:38"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 8940,
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
                        "id": 8937,
                        "name": "ElementaryTypeName",
                        "src": "303:7:38"
                      }
                    ],
                    "id": 8938,
                    "name": "VariableDeclaration",
                    "src": "303:7:38"
                  }
                ],
                "id": 8939,
                "name": "ParameterList",
                "src": "302:9:38"
              }
            ],
            "id": 8940,
            "name": "FunctionDefinition",
            "src": "259:53:38"
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
              "scope": 8957,
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
                      "scope": 8949,
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
                        "id": 8941,
                        "name": "ElementaryTypeName",
                        "src": "344:7:38"
                      }
                    ],
                    "id": 8942,
                    "name": "VariableDeclaration",
                    "src": "344:14:38"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_index",
                      "scope": 8949,
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
                        "id": 8943,
                        "name": "ElementaryTypeName",
                        "src": "360:7:38"
                      }
                    ],
                    "id": 8944,
                    "name": "VariableDeclaration",
                    "src": "360:14:38"
                  }
                ],
                "id": 8945,
                "name": "ParameterList",
                "src": "343:32:38"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 8949,
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
                        "id": 8946,
                        "name": "ElementaryTypeName",
                        "src": "397:7:38"
                      }
                    ],
                    "id": 8947,
                    "name": "VariableDeclaration",
                    "src": "397:16:38"
                  }
                ],
                "id": 8948,
                "name": "ParameterList",
                "src": "396:18:38"
              }
            ],
            "id": 8949,
            "name": "FunctionDefinition",
            "src": "315:100:38"
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
              "scope": 8957,
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
                      "scope": 8956,
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
                        "id": 8950,
                        "name": "ElementaryTypeName",
                        "src": "440:7:38"
                      }
                    ],
                    "id": 8951,
                    "name": "VariableDeclaration",
                    "src": "440:14:38"
                  }
                ],
                "id": 8952,
                "name": "ParameterList",
                "src": "439:16:38"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 8956,
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
                        "id": 8953,
                        "name": "ElementaryTypeName",
                        "src": "477:7:38"
                      }
                    ],
                    "id": 8954,
                    "name": "VariableDeclaration",
                    "src": "477:7:38"
                  }
                ],
                "id": 8955,
                "name": "ParameterList",
                "src": "476:9:38"
              }
            ],
            "id": 8956,
            "name": "FunctionDefinition",
            "src": "418:68:38"
          }
        ],
        "id": 8957,
        "name": "ContractDefinition",
        "src": "214:274:38"
      },
      {
        "attributes": {
          "contractDependencies": [
            9091
          ],
          "contractKind": "contract",
          "documentation": "@title ERC-721 Non-Fungible Token Standard, optional metadata extension\n@dev See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",
          "fullyImplemented": false,
          "linearizedBaseContracts": [
            8977,
            9091
          ],
          "name": "ERC721Metadata",
          "scope": 8985
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
                  "referencedDeclaration": 9091,
                  "type": "contract ERC721Basic"
                },
                "id": 8958,
                "name": "UserDefinedTypeName",
                "src": "673:11:38"
              }
            ],
            "id": 8959,
            "name": "InheritanceSpecifier",
            "src": "673:11:38"
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
              "scope": 8977,
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
                "id": 8960,
                "name": "ParameterList",
                "src": "702:2:38"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_name",
                      "scope": 8964,
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
                        "id": 8961,
                        "name": "ElementaryTypeName",
                        "src": "726:6:38"
                      }
                    ],
                    "id": 8962,
                    "name": "VariableDeclaration",
                    "src": "726:12:38"
                  }
                ],
                "id": 8963,
                "name": "ParameterList",
                "src": "725:14:38"
              }
            ],
            "id": 8964,
            "name": "FunctionDefinition",
            "src": "689:51:38"
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
              "scope": 8977,
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
                "id": 8965,
                "name": "ParameterList",
                "src": "758:2:38"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_symbol",
                      "scope": 8969,
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
                        "id": 8966,
                        "name": "ElementaryTypeName",
                        "src": "782:6:38"
                      }
                    ],
                    "id": 8967,
                    "name": "VariableDeclaration",
                    "src": "782:14:38"
                  }
                ],
                "id": 8968,
                "name": "ParameterList",
                "src": "781:16:38"
              }
            ],
            "id": 8969,
            "name": "FunctionDefinition",
            "src": "743:55:38"
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
              "scope": 8977,
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
                      "scope": 8976,
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
                        "id": 8970,
                        "name": "ElementaryTypeName",
                        "src": "819:7:38"
                      }
                    ],
                    "id": 8971,
                    "name": "VariableDeclaration",
                    "src": "819:16:38"
                  }
                ],
                "id": 8972,
                "name": "ParameterList",
                "src": "818:18:38"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 8976,
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
                        "id": 8973,
                        "name": "ElementaryTypeName",
                        "src": "858:6:38"
                      }
                    ],
                    "id": 8974,
                    "name": "VariableDeclaration",
                    "src": "858:6:38"
                  }
                ],
                "id": 8975,
                "name": "ParameterList",
                "src": "857:8:38"
              }
            ],
            "id": 8976,
            "name": "FunctionDefinition",
            "src": "801:65:38"
          }
        ],
        "id": 8977,
        "name": "ContractDefinition",
        "src": "646:222:38"
      },
      {
        "attributes": {
          "contractDependencies": [
            8957,
            8977,
            9091
          ],
          "contractKind": "contract",
          "documentation": "@title ERC-721 Non-Fungible Token Standard, full implementation interface\n@dev See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",
          "fullyImplemented": false,
          "linearizedBaseContracts": [
            8984,
            8977,
            8957,
            9091
          ],
          "name": "ERC721",
          "nodes": [
            null
          ],
          "scope": 8985
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
                  "referencedDeclaration": 9091,
                  "type": "contract ERC721Basic"
                },
                "id": 8978,
                "name": "UserDefinedTypeName",
                "src": "1047:11:38"
              }
            ],
            "id": 8979,
            "name": "InheritanceSpecifier",
            "src": "1047:11:38"
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
                  "referencedDeclaration": 8957,
                  "type": "contract ERC721Enumerable"
                },
                "id": 8980,
                "name": "UserDefinedTypeName",
                "src": "1060:16:38"
              }
            ],
            "id": 8981,
            "name": "InheritanceSpecifier",
            "src": "1060:16:38"
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
                  "referencedDeclaration": 8977,
                  "type": "contract ERC721Metadata"
                },
                "id": 8982,
                "name": "UserDefinedTypeName",
                "src": "1078:14:38"
              }
            ],
            "id": 8983,
            "name": "InheritanceSpecifier",
            "src": "1078:14:38"
          }
        ],
        "id": 8984,
        "name": "ContractDefinition",
        "src": "1028:68:38"
      }
    ],
    "id": 8985,
    "name": "SourceUnit",
    "src": "0:1097:38"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-05-01T21:37:41.255Z"
}