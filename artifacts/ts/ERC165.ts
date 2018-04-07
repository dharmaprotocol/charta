export const ERC165 = 
{
  "contractName": "ERC165",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "interfaceID",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "/*\n\n  Copyright 2017 Dharma Labs Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n*/\n\npragma solidity 0.4.18;\n\n\n/**\n * ERC165 interface required by ERC721 non-fungible token.\n *\n * https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md\n * https://github.com/ethereum/EIPs/blob/master/EIPS/eip-165.md\n */\ninterface ERC165 {\n    /// @notice Query if a contract implements an interface\n    /// @param interfaceID The interface identifier, as specified in ERC-165\n    /// @dev Interface identification is specified in ERC-165. This function\n    ///  uses less than 30,000 gas.\n    /// @return `true` if the contract implements `interfaceID` and\n    ///  `interfaceID` is not 0xffffffff, `false` otherwise\n    function supportsInterface(bytes4 interfaceID) external view returns (bool);\n}\n",
  "sourcePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/ERC165.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/ERC165.sol",
      "exportedSymbols": {
        "ERC165": [
          2602
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
        "id": 2594,
        "name": "PragmaDirective",
        "src": "584:23:4"
      },
      {
        "attributes": {
          "baseContracts": [
            null
          ],
          "contractDependencies": [
            null
          ],
          "contractKind": "interface",
          "documentation": "ERC165 interface required by ERC721 non-fungible token.\n * https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md\nhttps://github.com/ethereum/EIPs/blob/master/EIPS/eip-165.md",
          "fullyImplemented": false,
          "linearizedBaseContracts": [
            2602
          ],
          "name": "ERC165",
          "scope": 2603
        },
        "children": [
          {
            "attributes": {
              "body": null,
              "constant": true,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "supportsInterface",
              "payable": false,
              "scope": 2602,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "external"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "interfaceID",
                      "scope": 2601,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes4",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes4",
                          "type": "bytes4"
                        },
                        "id": 2595,
                        "name": "ElementaryTypeName",
                        "src": "1236:6:4"
                      }
                    ],
                    "id": 2596,
                    "name": "VariableDeclaration",
                    "src": "1236:18:4"
                  }
                ],
                "id": 2597,
                "name": "ParameterList",
                "src": "1235:20:4"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2601,
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
                        "id": 2598,
                        "name": "ElementaryTypeName",
                        "src": "1279:4:4"
                      }
                    ],
                    "id": 2599,
                    "name": "VariableDeclaration",
                    "src": "1279:4:4"
                  }
                ],
                "id": 2600,
                "name": "ParameterList",
                "src": "1278:6:4"
              }
            ],
            "id": 2601,
            "name": "FunctionDefinition",
            "src": "1209:76:4"
          }
        ],
        "id": 2602,
        "name": "ContractDefinition",
        "src": "808:479:4"
      }
    ],
    "id": 2603,
    "name": "SourceUnit",
    "src": "584:704:4"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-04-07T18:02:24.295Z"
}