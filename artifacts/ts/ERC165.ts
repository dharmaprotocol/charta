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
  "sourcePath": "/Users/graemeboy/Dharma/charta/contracts/ERC165.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/graemeboy/Dharma/charta/contracts/ERC165.sol",
      "exportedSymbols": {
        "ERC165": [
          3532
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
        "id": 3524,
        "name": "PragmaDirective",
        "src": "584:23:6"
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
            3532
          ],
          "name": "ERC165",
          "scope": 3533
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
              "scope": 3532,
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
                      "scope": 3531,
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
                        "id": 3525,
                        "name": "ElementaryTypeName",
                        "src": "1236:6:6"
                      }
                    ],
                    "id": 3526,
                    "name": "VariableDeclaration",
                    "src": "1236:18:6"
                  }
                ],
                "id": 3527,
                "name": "ParameterList",
                "src": "1235:20:6"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 3531,
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
                        "id": 3528,
                        "name": "ElementaryTypeName",
                        "src": "1279:4:6"
                      }
                    ],
                    "id": 3529,
                    "name": "VariableDeclaration",
                    "src": "1279:4:6"
                  }
                ],
                "id": 3530,
                "name": "ParameterList",
                "src": "1278:6:6"
              }
            ],
            "id": 3531,
            "name": "FunctionDefinition",
            "src": "1209:76:6"
          }
        ],
        "id": 3532,
        "name": "ContractDefinition",
        "src": "808:479:6"
      }
    ],
    "id": 3533,
    "name": "SourceUnit",
    "src": "584:704:6"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-09-25T20:04:48.813Z"
}