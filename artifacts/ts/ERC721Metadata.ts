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
          14751
        ],
        "ERC721Enumerable": [
          14724
        ],
        "ERC721Metadata": [
          14744
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
        "id": 14699,
        "name": "PragmaDirective",
        "src": "0:24:46"
      },
      {
        "attributes": {
          "SourceUnit": 14859,
          "absolutePath": "zeppelin-solidity/contracts/token/ERC721/ERC721Basic.sol",
          "file": "./ERC721Basic.sol",
          "scope": 14752,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 14700,
        "name": "ImportDirective",
        "src": "26:27:46"
      },
      {
        "attributes": {
          "contractDependencies": [
            14858
          ],
          "contractKind": "contract",
          "documentation": "@title ERC-721 Non-Fungible Token Standard, optional enumeration extension\n@dev See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",
          "fullyImplemented": false,
          "linearizedBaseContracts": [
            14724,
            14858
          ],
          "name": "ERC721Enumerable",
          "scope": 14752
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
                  "referencedDeclaration": 14858,
                  "type": "contract ERC721Basic"
                },
                "id": 14701,
                "name": "UserDefinedTypeName",
                "src": "243:11:46"
              }
            ],
            "id": 14702,
            "name": "InheritanceSpecifier",
            "src": "243:11:46"
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
              "scope": 14724,
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
                "id": 14703,
                "name": "ParameterList",
                "src": "279:2:46"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 14707,
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
                        "id": 14704,
                        "name": "ElementaryTypeName",
                        "src": "303:7:46"
                      }
                    ],
                    "id": 14705,
                    "name": "VariableDeclaration",
                    "src": "303:7:46"
                  }
                ],
                "id": 14706,
                "name": "ParameterList",
                "src": "302:9:46"
              }
            ],
            "id": 14707,
            "name": "FunctionDefinition",
            "src": "259:53:46"
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
              "scope": 14724,
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
                      "scope": 14716,
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
                        "id": 14708,
                        "name": "ElementaryTypeName",
                        "src": "344:7:46"
                      }
                    ],
                    "id": 14709,
                    "name": "VariableDeclaration",
                    "src": "344:14:46"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_index",
                      "scope": 14716,
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
                        "id": 14710,
                        "name": "ElementaryTypeName",
                        "src": "360:7:46"
                      }
                    ],
                    "id": 14711,
                    "name": "VariableDeclaration",
                    "src": "360:14:46"
                  }
                ],
                "id": 14712,
                "name": "ParameterList",
                "src": "343:32:46"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 14716,
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
                        "id": 14713,
                        "name": "ElementaryTypeName",
                        "src": "397:7:46"
                      }
                    ],
                    "id": 14714,
                    "name": "VariableDeclaration",
                    "src": "397:16:46"
                  }
                ],
                "id": 14715,
                "name": "ParameterList",
                "src": "396:18:46"
              }
            ],
            "id": 14716,
            "name": "FunctionDefinition",
            "src": "315:100:46"
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
              "scope": 14724,
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
                      "scope": 14723,
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
                        "id": 14717,
                        "name": "ElementaryTypeName",
                        "src": "440:7:46"
                      }
                    ],
                    "id": 14718,
                    "name": "VariableDeclaration",
                    "src": "440:14:46"
                  }
                ],
                "id": 14719,
                "name": "ParameterList",
                "src": "439:16:46"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 14723,
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
                        "id": 14720,
                        "name": "ElementaryTypeName",
                        "src": "477:7:46"
                      }
                    ],
                    "id": 14721,
                    "name": "VariableDeclaration",
                    "src": "477:7:46"
                  }
                ],
                "id": 14722,
                "name": "ParameterList",
                "src": "476:9:46"
              }
            ],
            "id": 14723,
            "name": "FunctionDefinition",
            "src": "418:68:46"
          }
        ],
        "id": 14724,
        "name": "ContractDefinition",
        "src": "214:274:46"
      },
      {
        "attributes": {
          "contractDependencies": [
            14858
          ],
          "contractKind": "contract",
          "documentation": "@title ERC-721 Non-Fungible Token Standard, optional metadata extension\n@dev See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",
          "fullyImplemented": false,
          "linearizedBaseContracts": [
            14744,
            14858
          ],
          "name": "ERC721Metadata",
          "scope": 14752
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
                  "referencedDeclaration": 14858,
                  "type": "contract ERC721Basic"
                },
                "id": 14725,
                "name": "UserDefinedTypeName",
                "src": "673:11:46"
              }
            ],
            "id": 14726,
            "name": "InheritanceSpecifier",
            "src": "673:11:46"
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
              "scope": 14744,
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
                "id": 14727,
                "name": "ParameterList",
                "src": "702:2:46"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_name",
                      "scope": 14731,
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
                        "id": 14728,
                        "name": "ElementaryTypeName",
                        "src": "726:6:46"
                      }
                    ],
                    "id": 14729,
                    "name": "VariableDeclaration",
                    "src": "726:12:46"
                  }
                ],
                "id": 14730,
                "name": "ParameterList",
                "src": "725:14:46"
              }
            ],
            "id": 14731,
            "name": "FunctionDefinition",
            "src": "689:51:46"
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
              "scope": 14744,
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
                "id": 14732,
                "name": "ParameterList",
                "src": "758:2:46"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_symbol",
                      "scope": 14736,
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
                        "id": 14733,
                        "name": "ElementaryTypeName",
                        "src": "782:6:46"
                      }
                    ],
                    "id": 14734,
                    "name": "VariableDeclaration",
                    "src": "782:14:46"
                  }
                ],
                "id": 14735,
                "name": "ParameterList",
                "src": "781:16:46"
              }
            ],
            "id": 14736,
            "name": "FunctionDefinition",
            "src": "743:55:46"
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
              "scope": 14744,
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
                      "scope": 14743,
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
                        "id": 14737,
                        "name": "ElementaryTypeName",
                        "src": "819:7:46"
                      }
                    ],
                    "id": 14738,
                    "name": "VariableDeclaration",
                    "src": "819:16:46"
                  }
                ],
                "id": 14739,
                "name": "ParameterList",
                "src": "818:18:46"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 14743,
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
                        "id": 14740,
                        "name": "ElementaryTypeName",
                        "src": "858:6:46"
                      }
                    ],
                    "id": 14741,
                    "name": "VariableDeclaration",
                    "src": "858:6:46"
                  }
                ],
                "id": 14742,
                "name": "ParameterList",
                "src": "857:8:46"
              }
            ],
            "id": 14743,
            "name": "FunctionDefinition",
            "src": "801:65:46"
          }
        ],
        "id": 14744,
        "name": "ContractDefinition",
        "src": "646:222:46"
      },
      {
        "attributes": {
          "contractDependencies": [
            14724,
            14744,
            14858
          ],
          "contractKind": "contract",
          "documentation": "@title ERC-721 Non-Fungible Token Standard, full implementation interface\n@dev See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",
          "fullyImplemented": false,
          "linearizedBaseContracts": [
            14751,
            14744,
            14724,
            14858
          ],
          "name": "ERC721",
          "nodes": [
            null
          ],
          "scope": 14752
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
                  "referencedDeclaration": 14858,
                  "type": "contract ERC721Basic"
                },
                "id": 14745,
                "name": "UserDefinedTypeName",
                "src": "1047:11:46"
              }
            ],
            "id": 14746,
            "name": "InheritanceSpecifier",
            "src": "1047:11:46"
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
                  "referencedDeclaration": 14724,
                  "type": "contract ERC721Enumerable"
                },
                "id": 14747,
                "name": "UserDefinedTypeName",
                "src": "1060:16:46"
              }
            ],
            "id": 14748,
            "name": "InheritanceSpecifier",
            "src": "1060:16:46"
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
                  "referencedDeclaration": 14744,
                  "type": "contract ERC721Metadata"
                },
                "id": 14749,
                "name": "UserDefinedTypeName",
                "src": "1078:14:46"
              }
            ],
            "id": 14750,
            "name": "InheritanceSpecifier",
            "src": "1078:14:46"
          }
        ],
        "id": 14751,
        "name": "ContractDefinition",
        "src": "1028:68:46"
      }
    ],
    "id": 14752,
    "name": "SourceUnit",
    "src": "0:1097:46"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-10-08T22:52:31.812Z"
}