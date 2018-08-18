export const ERC721Metadata = 
{
  "contractName": "ERC721Metadata",
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
          10433
        ],
        "ERC721Enumerable": [
          10406
        ],
        "ERC721Metadata": [
          10426
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
        "id": 10381,
        "name": "PragmaDirective",
        "src": "0:24:43"
      },
      {
        "attributes": {
          "SourceUnit": 10541,
          "absolutePath": "zeppelin-solidity/contracts/token/ERC721/ERC721Basic.sol",
          "file": "./ERC721Basic.sol",
          "scope": 10434,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 10382,
        "name": "ImportDirective",
        "src": "26:27:43"
      },
      {
        "attributes": {
          "contractDependencies": [
            10540
          ],
          "contractKind": "contract",
          "documentation": "@title ERC-721 Non-Fungible Token Standard, optional enumeration extension\n@dev See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",
          "fullyImplemented": false,
          "linearizedBaseContracts": [
            10406,
            10540
          ],
          "name": "ERC721Enumerable",
          "scope": 10434
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
                  "referencedDeclaration": 10540,
                  "type": "contract ERC721Basic"
                },
                "id": 10383,
                "name": "UserDefinedTypeName",
                "src": "243:11:43"
              }
            ],
            "id": 10384,
            "name": "InheritanceSpecifier",
            "src": "243:11:43"
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
              "scope": 10406,
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
                "id": 10385,
                "name": "ParameterList",
                "src": "279:2:43"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 10389,
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
                        "id": 10386,
                        "name": "ElementaryTypeName",
                        "src": "303:7:43"
                      }
                    ],
                    "id": 10387,
                    "name": "VariableDeclaration",
                    "src": "303:7:43"
                  }
                ],
                "id": 10388,
                "name": "ParameterList",
                "src": "302:9:43"
              }
            ],
            "id": 10389,
            "name": "FunctionDefinition",
            "src": "259:53:43"
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
              "scope": 10406,
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
                      "scope": 10398,
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
                        "id": 10390,
                        "name": "ElementaryTypeName",
                        "src": "344:7:43"
                      }
                    ],
                    "id": 10391,
                    "name": "VariableDeclaration",
                    "src": "344:14:43"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_index",
                      "scope": 10398,
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
                        "id": 10392,
                        "name": "ElementaryTypeName",
                        "src": "360:7:43"
                      }
                    ],
                    "id": 10393,
                    "name": "VariableDeclaration",
                    "src": "360:14:43"
                  }
                ],
                "id": 10394,
                "name": "ParameterList",
                "src": "343:32:43"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 10398,
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
                        "id": 10395,
                        "name": "ElementaryTypeName",
                        "src": "397:7:43"
                      }
                    ],
                    "id": 10396,
                    "name": "VariableDeclaration",
                    "src": "397:16:43"
                  }
                ],
                "id": 10397,
                "name": "ParameterList",
                "src": "396:18:43"
              }
            ],
            "id": 10398,
            "name": "FunctionDefinition",
            "src": "315:100:43"
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
              "scope": 10406,
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
                      "scope": 10405,
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
                        "id": 10399,
                        "name": "ElementaryTypeName",
                        "src": "440:7:43"
                      }
                    ],
                    "id": 10400,
                    "name": "VariableDeclaration",
                    "src": "440:14:43"
                  }
                ],
                "id": 10401,
                "name": "ParameterList",
                "src": "439:16:43"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 10405,
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
                        "id": 10402,
                        "name": "ElementaryTypeName",
                        "src": "477:7:43"
                      }
                    ],
                    "id": 10403,
                    "name": "VariableDeclaration",
                    "src": "477:7:43"
                  }
                ],
                "id": 10404,
                "name": "ParameterList",
                "src": "476:9:43"
              }
            ],
            "id": 10405,
            "name": "FunctionDefinition",
            "src": "418:68:43"
          }
        ],
        "id": 10406,
        "name": "ContractDefinition",
        "src": "214:274:43"
      },
      {
        "attributes": {
          "contractDependencies": [
            10540
          ],
          "contractKind": "contract",
          "documentation": "@title ERC-721 Non-Fungible Token Standard, optional metadata extension\n@dev See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",
          "fullyImplemented": false,
          "linearizedBaseContracts": [
            10426,
            10540
          ],
          "name": "ERC721Metadata",
          "scope": 10434
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
                  "referencedDeclaration": 10540,
                  "type": "contract ERC721Basic"
                },
                "id": 10407,
                "name": "UserDefinedTypeName",
                "src": "673:11:43"
              }
            ],
            "id": 10408,
            "name": "InheritanceSpecifier",
            "src": "673:11:43"
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
              "scope": 10426,
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
                "id": 10409,
                "name": "ParameterList",
                "src": "702:2:43"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_name",
                      "scope": 10413,
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
                        "id": 10410,
                        "name": "ElementaryTypeName",
                        "src": "726:6:43"
                      }
                    ],
                    "id": 10411,
                    "name": "VariableDeclaration",
                    "src": "726:12:43"
                  }
                ],
                "id": 10412,
                "name": "ParameterList",
                "src": "725:14:43"
              }
            ],
            "id": 10413,
            "name": "FunctionDefinition",
            "src": "689:51:43"
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
              "scope": 10426,
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
                "id": 10414,
                "name": "ParameterList",
                "src": "758:2:43"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_symbol",
                      "scope": 10418,
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
                        "id": 10415,
                        "name": "ElementaryTypeName",
                        "src": "782:6:43"
                      }
                    ],
                    "id": 10416,
                    "name": "VariableDeclaration",
                    "src": "782:14:43"
                  }
                ],
                "id": 10417,
                "name": "ParameterList",
                "src": "781:16:43"
              }
            ],
            "id": 10418,
            "name": "FunctionDefinition",
            "src": "743:55:43"
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
              "scope": 10426,
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
                      "scope": 10425,
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
                        "id": 10419,
                        "name": "ElementaryTypeName",
                        "src": "819:7:43"
                      }
                    ],
                    "id": 10420,
                    "name": "VariableDeclaration",
                    "src": "819:16:43"
                  }
                ],
                "id": 10421,
                "name": "ParameterList",
                "src": "818:18:43"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 10425,
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
                        "id": 10422,
                        "name": "ElementaryTypeName",
                        "src": "858:6:43"
                      }
                    ],
                    "id": 10423,
                    "name": "VariableDeclaration",
                    "src": "858:6:43"
                  }
                ],
                "id": 10424,
                "name": "ParameterList",
                "src": "857:8:43"
              }
            ],
            "id": 10425,
            "name": "FunctionDefinition",
            "src": "801:65:43"
          }
        ],
        "id": 10426,
        "name": "ContractDefinition",
        "src": "646:222:43"
      },
      {
        "attributes": {
          "contractDependencies": [
            10406,
            10426,
            10540
          ],
          "contractKind": "contract",
          "documentation": "@title ERC-721 Non-Fungible Token Standard, full implementation interface\n@dev See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",
          "fullyImplemented": false,
          "linearizedBaseContracts": [
            10433,
            10426,
            10406,
            10540
          ],
          "name": "ERC721",
          "nodes": [
            null
          ],
          "scope": 10434
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
                  "referencedDeclaration": 10540,
                  "type": "contract ERC721Basic"
                },
                "id": 10427,
                "name": "UserDefinedTypeName",
                "src": "1047:11:43"
              }
            ],
            "id": 10428,
            "name": "InheritanceSpecifier",
            "src": "1047:11:43"
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
                  "referencedDeclaration": 10406,
                  "type": "contract ERC721Enumerable"
                },
                "id": 10429,
                "name": "UserDefinedTypeName",
                "src": "1060:16:43"
              }
            ],
            "id": 10430,
            "name": "InheritanceSpecifier",
            "src": "1060:16:43"
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
                  "referencedDeclaration": 10426,
                  "type": "contract ERC721Metadata"
                },
                "id": 10431,
                "name": "UserDefinedTypeName",
                "src": "1078:14:43"
              }
            ],
            "id": 10432,
            "name": "InheritanceSpecifier",
            "src": "1078:14:43"
          }
        ],
        "id": 10433,
        "name": "ContractDefinition",
        "src": "1028:68:43"
      }
    ],
    "id": 10434,
    "name": "SourceUnit",
    "src": "0:1097:43"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-08-17T19:19:33.770Z"
}