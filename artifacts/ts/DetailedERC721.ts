export const DetailedERC721 = 
{
  "contractName": "DetailedERC721",
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
          "name": "_approved",
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
      "name": "implementsERC721",
      "outputs": [
        {
          "name": "_implementsERC721",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "_totalSupply",
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
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenMetadata",
      "outputs": [
        {
          "name": "_infoUrl",
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
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
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
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "pragma solidity 0.4.18;\n\nimport \"./ERC721.sol\";\n\n\n/**\n * Interface for optional functionality in the ERC721 standard\n * for non-fungible tokens.\n *\n * Author: Nadav Hollander (nadav at dharma.io)\n */\ncontract DetailedERC721 is ERC721 {\n    function name() public view returns (string _name);\n    function symbol() public view returns (string _symbol);\n    function tokenMetadata(uint _tokenId) public view returns (string _infoUrl);\n    function tokenOfOwnerByIndex(address _owner, uint _index) public view returns (uint _tokenId);\n}\n",
  "sourcePath": "NonFungibleToken/contracts/DetailedERC721.sol",
  "ast": {
    "attributes": {
      "absolutePath": "NonFungibleToken/contracts/DetailedERC721.sol",
      "exportedSymbols": {
        "DetailedERC721": [
          4479
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            "0.4",
            ".18"
          ]
        },
        "id": 4449,
        "name": "PragmaDirective",
        "src": "0:23:17"
      },
      {
        "attributes": {
          "SourceUnit": 4553,
          "absolutePath": "NonFungibleToken/contracts/ERC721.sol",
          "file": "./ERC721.sol",
          "scope": 4480,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 4450,
        "name": "ImportDirective",
        "src": "25:22:17"
      },
      {
        "attributes": {
          "contractDependencies": [
            4552
          ],
          "contractKind": "contract",
          "documentation": "Interface for optional functionality in the ERC721 standard\nfor non-fungible tokens.\n * Author: Nadav Hollander (nadav at dharma.io)",
          "fullyImplemented": false,
          "linearizedBaseContracts": [
            4479,
            4552
          ],
          "name": "DetailedERC721",
          "scope": 4480
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
                  "name": "ERC721",
                  "referencedDeclaration": 4552,
                  "type": "contract ERC721"
                },
                "id": 4451,
                "name": "UserDefinedTypeName",
                "src": "227:6:17"
              }
            ],
            "id": 4452,
            "name": "InheritanceSpecifier",
            "src": "227:6:17"
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
              "scope": 4479,
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
                "id": 4453,
                "name": "ParameterList",
                "src": "253:2:17"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_name",
                      "scope": 4457,
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
                        "id": 4454,
                        "name": "ElementaryTypeName",
                        "src": "277:6:17"
                      }
                    ],
                    "id": 4455,
                    "name": "VariableDeclaration",
                    "src": "277:12:17"
                  }
                ],
                "id": 4456,
                "name": "ParameterList",
                "src": "276:14:17"
              }
            ],
            "id": 4457,
            "name": "FunctionDefinition",
            "src": "240:51:17"
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
              "scope": 4479,
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
                "id": 4458,
                "name": "ParameterList",
                "src": "311:2:17"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_symbol",
                      "scope": 4462,
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
                        "id": 4459,
                        "name": "ElementaryTypeName",
                        "src": "335:6:17"
                      }
                    ],
                    "id": 4460,
                    "name": "VariableDeclaration",
                    "src": "335:14:17"
                  }
                ],
                "id": 4461,
                "name": "ParameterList",
                "src": "334:16:17"
              }
            ],
            "id": 4462,
            "name": "FunctionDefinition",
            "src": "296:55:17"
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
              "name": "tokenMetadata",
              "payable": false,
              "scope": 4479,
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
                      "scope": 4469,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 4463,
                        "name": "ElementaryTypeName",
                        "src": "379:4:17"
                      }
                    ],
                    "id": 4464,
                    "name": "VariableDeclaration",
                    "src": "379:13:17"
                  }
                ],
                "id": 4465,
                "name": "ParameterList",
                "src": "378:15:17"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_infoUrl",
                      "scope": 4469,
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
                        "id": 4466,
                        "name": "ElementaryTypeName",
                        "src": "415:6:17"
                      }
                    ],
                    "id": 4467,
                    "name": "VariableDeclaration",
                    "src": "415:15:17"
                  }
                ],
                "id": 4468,
                "name": "ParameterList",
                "src": "414:17:17"
              }
            ],
            "id": 4469,
            "name": "FunctionDefinition",
            "src": "356:76:17"
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
              "scope": 4479,
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
                      "scope": 4478,
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
                        "id": 4470,
                        "name": "ElementaryTypeName",
                        "src": "466:7:17"
                      }
                    ],
                    "id": 4471,
                    "name": "VariableDeclaration",
                    "src": "466:14:17"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_index",
                      "scope": 4478,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 4472,
                        "name": "ElementaryTypeName",
                        "src": "482:4:17"
                      }
                    ],
                    "id": 4473,
                    "name": "VariableDeclaration",
                    "src": "482:11:17"
                  }
                ],
                "id": 4474,
                "name": "ParameterList",
                "src": "465:29:17"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 4478,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 4475,
                        "name": "ElementaryTypeName",
                        "src": "516:4:17"
                      }
                    ],
                    "id": 4476,
                    "name": "VariableDeclaration",
                    "src": "516:13:17"
                  }
                ],
                "id": 4477,
                "name": "ParameterList",
                "src": "515:15:17"
              }
            ],
            "id": 4478,
            "name": "FunctionDefinition",
            "src": "437:94:17"
          }
        ],
        "id": 4479,
        "name": "ContractDefinition",
        "src": "200:333:17"
      }
    ],
    "id": 4480,
    "name": "SourceUnit",
    "src": "0:534:17"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-03-19T22:46:09.668Z"
}