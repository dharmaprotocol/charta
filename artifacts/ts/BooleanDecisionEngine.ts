export const BooleanDecisionEngine = 
{
  "contractName": "BooleanDecisionEngine",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "result",
          "type": "bool"
        }
      ],
      "name": "evaluate",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x6060604052341561000f57600080fd5b60b48061001d6000396000f300606060405260043610603f576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063474e7563146044575b600080fd5b3415604e57600080fd5b606460048080351515906020019091905050607e565b604051808215151515815260200191505060405180910390f35b60008190509190505600a165627a7a723058200d3ae4e28f9bcd4e4f88bc00fa5f9279deb639955e2280adfe27f3970a5ca1f40029",
  "deployedBytecode": "0x606060405260043610603f576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063474e7563146044575b600080fd5b3415604e57600080fd5b606460048080351515906020019091905050607e565b604051808215151515815260200191505060405180910390f35b60008190509190505600a165627a7a723058200d3ae4e28f9bcd4e4f88bc00fa5f9279deb639955e2280adfe27f3970a5ca1f40029",
  "sourceMap": "145:152:22:-;;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "145:152:22:-;;;;;;;;;;;;;;;;;;;;;;;;212:83;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;259:4;282:6;275:13;;212:83;;;:::o",
  "source": "import \"zeppelin-solidity/contracts/math/SafeMath.sol\";\n\n\n/**\n * A decision engine that returns true or false, depending on the value given.\n */\ncontract BooleanDecisionEngine {\n    using SafeMath for uint;\n\n    function evaluate(bool result) public returns (bool) {\n        return result;\n    }\n}\n",
  "sourcePath": "/Users/graemeboy/Dharma/charta/contracts/test/decision_engines/BooleanDecisionEngine.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/graemeboy/Dharma/charta/contracts/test/decision_engines/BooleanDecisionEngine.sol",
      "exportedSymbols": {
        "BooleanDecisionEngine": [
          10099
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "SourceUnit": 14203,
          "absolutePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
          "file": "zeppelin-solidity/contracts/math/SafeMath.sol",
          "scope": 10100,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 10085,
        "name": "ImportDirective",
        "src": "0:55:22"
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
          "documentation": "A decision engine that returns true or false, depending on the value given.",
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            10099
          ],
          "name": "BooleanDecisionEngine",
          "scope": 10100
        },
        "children": [
          {
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "SafeMath",
                  "referencedDeclaration": 14202,
                  "type": "library SafeMath"
                },
                "id": 10086,
                "name": "UserDefinedTypeName",
                "src": "188:8:22"
              },
              {
                "attributes": {
                  "name": "uint",
                  "type": "uint256"
                },
                "id": 10087,
                "name": "ElementaryTypeName",
                "src": "201:4:22"
              }
            ],
            "id": 10088,
            "name": "UsingForDirective",
            "src": "182:24:22"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "evaluate",
              "payable": false,
              "scope": 10099,
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
                      "name": "result",
                      "scope": 10098,
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
                        "id": 10089,
                        "name": "ElementaryTypeName",
                        "src": "230:4:22"
                      }
                    ],
                    "id": 10090,
                    "name": "VariableDeclaration",
                    "src": "230:11:22"
                  }
                ],
                "id": 10091,
                "name": "ParameterList",
                "src": "229:13:22"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 10098,
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
                        "id": 10092,
                        "name": "ElementaryTypeName",
                        "src": "259:4:22"
                      }
                    ],
                    "id": 10093,
                    "name": "VariableDeclaration",
                    "src": "259:4:22"
                  }
                ],
                "id": 10094,
                "name": "ParameterList",
                "src": "258:6:22"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 10094
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 10090,
                          "type": "bool",
                          "value": "result"
                        },
                        "id": 10095,
                        "name": "Identifier",
                        "src": "282:6:22"
                      }
                    ],
                    "id": 10096,
                    "name": "Return",
                    "src": "275:13:22"
                  }
                ],
                "id": 10097,
                "name": "Block",
                "src": "265:30:22"
              }
            ],
            "id": 10098,
            "name": "FunctionDefinition",
            "src": "212:83:22"
          }
        ],
        "id": 10099,
        "name": "ContractDefinition",
        "src": "145:152:22"
      }
    ],
    "id": 10100,
    "name": "SourceUnit",
    "src": "0:298:22"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-09-28T20:51:14.888Z"
}