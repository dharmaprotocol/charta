export const TokenRegistry = 
{
  "contractName": "TokenRegistry",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "symbol",
          "type": "string"
        },
        {
          "name": "token",
          "type": "address"
        }
      ],
      "name": "setTokenAddress",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "symbolToTokenAddress",
      "outputs": [
        {
          "name": "",
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
          "name": "symbol",
          "type": "string"
        }
      ],
      "name": "getTokenIndexBySymbol",
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
          "name": "symbol",
          "type": "string"
        }
      ],
      "name": "getTokenAddressBySymbol",
      "outputs": [
        {
          "name": "",
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
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "getTokenAddressByIndex",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "tokenSymbolHashListLength",
      "outputs": [
        {
          "name": "",
          "type": "uint8"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
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
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "tokenSymbolHashList",
      "outputs": [
        {
          "name": "",
          "type": "bytes32"
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
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "symbolToTokenIndex",
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
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
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
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    }
  ],
  "bytecode": "0x6060604052336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610a5a806100536000396000f3006060604052600436106100a4576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806317456e56146100a9578063202b9688146101255780632e1e1bb31461018c5780633550b6d9146101fd5780635715c5b71461029a578063658f8d66146102fd5780638da5cb5b1461032c578063b1d4bc1b14610381578063de280296146103c0578063f2fde38b146103fb575b600080fd5b34156100b457600080fd5b610123600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610434565b005b341561013057600080fd5b61014a6004808035600019169060200190919050506106b6565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561019757600080fd5b6101e7600480803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919050506106e9565b6040518082815260200191505060405180910390f35b341561020857600080fd5b610258600480803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050610770565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156102a557600080fd5b6102bb6004808035906020019091905050610817565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561030857600080fd5b61031061086d565b604051808260ff1660ff16815260200191505060405180910390f35b341561033757600080fd5b61033f610881565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561038c57600080fd5b6103a260048080359060200190919050506108a6565b60405180826000191660001916815260200191505060405180910390f35b34156103cb57600080fd5b6103e56004808035600019169060200190919050506108c1565b6040518082815260200191505060405180910390f35b341561040657600080fd5b610432600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506108d9565b005b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561049157600080fd5b61010061010360009054906101000a900460ff1660ff161015156104b457600080fd5b826040518082805190602001908083835b6020831015156104ea57805182526020820191506020810190506020830392506104c5565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390209050600073ffffffffffffffffffffffffffffffffffffffff1660016000836000191660001916815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156106575780600361010360009054906101000a900460ff1660ff16610100811015156105ad57fe5b01816000191690555061010360009054906101000a900460ff1660ff1660016000836000191660001916815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610103600081819054906101000a900460ff168092919060010191906101000a81548160ff021916908360ff160217905550505b8160016000836000191660001916815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050565b60016020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600060026000836040518082805190602001908083835b6020831015156107255780518252602082019150602081019050602083039250610700565b6001836020036101000a038019825116818451168082178552505050505050905001915050604051809103902060001916600019168152602001908152602001600020549050919050565b600060016000836040518082805190602001908083835b6020831015156107ac5780518252602082019150602081019050602083039250610787565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390206000191660001916815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000600160006003846101008110151561082d57fe5b01546000191660001916815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b61010360009054906101000a900460ff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600381610100811015156108b657fe5b016000915090505481565b60026020528060005260406000206000915090505481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561093457600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561097057600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505600a165627a7a723058206b2c5124df03a68e129ed3d7fd2d73f034b9c3877b83b5299de56835e19ac67b0029",
  "deployedBytecode": "0x6060604052600436106100a4576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806317456e56146100a9578063202b9688146101255780632e1e1bb31461018c5780633550b6d9146101fd5780635715c5b71461029a578063658f8d66146102fd5780638da5cb5b1461032c578063b1d4bc1b14610381578063de280296146103c0578063f2fde38b146103fb575b600080fd5b34156100b457600080fd5b610123600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610434565b005b341561013057600080fd5b61014a6004808035600019169060200190919050506106b6565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561019757600080fd5b6101e7600480803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919050506106e9565b6040518082815260200191505060405180910390f35b341561020857600080fd5b610258600480803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050610770565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156102a557600080fd5b6102bb6004808035906020019091905050610817565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561030857600080fd5b61031061086d565b604051808260ff1660ff16815260200191505060405180910390f35b341561033757600080fd5b61033f610881565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561038c57600080fd5b6103a260048080359060200190919050506108a6565b60405180826000191660001916815260200191505060405180910390f35b34156103cb57600080fd5b6103e56004808035600019169060200190919050506108c1565b6040518082815260200191505060405180910390f35b341561040657600080fd5b610432600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506108d9565b005b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561049157600080fd5b61010061010360009054906101000a900460ff1660ff161015156104b457600080fd5b826040518082805190602001908083835b6020831015156104ea57805182526020820191506020810190506020830392506104c5565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390209050600073ffffffffffffffffffffffffffffffffffffffff1660016000836000191660001916815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156106575780600361010360009054906101000a900460ff1660ff16610100811015156105ad57fe5b01816000191690555061010360009054906101000a900460ff1660ff1660016000836000191660001916815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610103600081819054906101000a900460ff168092919060010191906101000a81548160ff021916908360ff160217905550505b8160016000836000191660001916815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050565b60016020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600060026000836040518082805190602001908083835b6020831015156107255780518252602082019150602081019050602083039250610700565b6001836020036101000a038019825116818451168082178552505050505050905001915050604051809103902060001916600019168152602001908152602001600020549050919050565b600060016000836040518082805190602001908083835b6020831015156107ac5780518252602082019150602081019050602083039250610787565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390206000191660001916815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000600160006003846101008110151561082d57fe5b01546000191660001916815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b61010360009054906101000a900460ff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600381610100811015156108b657fe5b016000915090505481565b60026020528060005260406000206000915090505481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561093457600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561097057600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505600a165627a7a723058206b2c5124df03a68e129ed3d7fd2d73f034b9c3877b83b5299de56835e19ac67b0029",
  "sourceMap": "717:1942:0:-;;;509:10:1;501:5;;:18;;;;;;;;;;;;;;;;;;717:1942:0;;;;;;",
  "deployedSourceMap": "717:1942:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1039:490;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;757:56;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2523:134;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1641:141;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2228:146;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;921:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;238:20:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;876:39:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;819:51;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;832:169:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;1039:490:0;1172:18;653:5:1;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;1157:3:0;1129:25;;;;;;;;;;;:31;;;1121:40;;;;;;;;1203:6;1193:17;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:2;51:6;36:153;;;182:3;176:5;171:3;164:6;98:2;93:3;89;82:19;;123:2;118:3;114;107:19;;148:2;143:3;139;132:19;;36:153;;;274:1;267:3;263:2;259:3;254;250;246;315:4;311:3;305;299:5;295:3;356:4;350:3;344:5;340:3;389:7;380;377:2;372:3;365:6;3:399;;;;;;;;;;;;;;;;;;;1172:38:0;;1269:1;1225:46;;:20;:32;1246:10;1225:32;;;;;;;;;;;;;;;;;;;;;;;;;;;:46;;;1221:251;;;1336:10;1287:19;1307:25;;;;;;;;;;;1287:46;;;;;;;;;;;;:59;;;;;;;1395:25;;;;;;;;;;;1360:60;;:20;:32;1381:10;1360:32;;;;;;;;;;;;;;;;;;:60;;;;;;;;;;;;;;;;;;1434:25;;:27;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1221:251;1517:5;1482:20;:32;1503:10;1482:32;;;;;;;;;;;;;;;;;;:40;;;;;;;;;;;;;;;;;;1039:490;;;:::o;757:56::-;;;;;;;;;;;;;;;;;;;;;;:::o;2523:134::-;2590:4;2613:18;:37;2642:6;2632:17;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:2;51:6;36:153;;;182:3;176:5;171:3;164:6;98:2;93:3;89;82:19;;123:2;118:3;114;107:19;;148:2;143:3;139;132:19;;36:153;;;274:1;267:3;263:2;259:3;254;250;246;315:4;311:3;305;299:5;295:3;356:4;350:3;344:5;340:3;389:7;380;377:2;372:3;365:6;3:399;;;;;;;;;;;;;;;;;;;2613:37:0;;;;;;;;;;;;;;;;;;2606:44;;2523:134;;;:::o;1641:141::-;1710:7;1736:20;:39;1767:6;1757:17;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:2;51:6;36:153;;;182:3;176:5;171:3;164:6;98:2;93:3;89;82:19;;123:2;118:3;114;107:19;;148:2;143:3;139;132:19;;36:153;;;274:1;267:3;263:2;259:3;254;250;246;315:4;311:3;305;299:5;295:3;356:4;350:3;344:5;340:3;389:7;380;377:2;372:3;365:6;3:399;;;;;;;;;;;;;;;;;;;1736:39:0;;;;;;;;;;;;;;;;;;;;;;;;;;;1729:46;;1641:141;;;:::o;2228:146::-;2293:7;2319:20;:48;2340:19;2360:5;2340:26;;;;;;;;;;;2319:48;;;;;;;;;;;;;;;;;;;;;;;;;;;2312:55;;2228:146;;;:::o;921:38::-;;;;;;;;;;;;;:::o;238:20:1:-;;;;;;;;;;;;;:::o;876:39:0:-;;;;;;;;;;;;;;;;;;;;:::o;819:51::-;;;;;;;;;;;;;;;;;:::o;832:169:1:-;653:5;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;928:1;908:22;;:8;:22;;;;900:31;;;;;;;;965:8;937:37;;958:5;;;;;;;;;;;937:37;;;;;;;;;;;;988:8;980:5;;:16;;;;;;;;;;;;;;;;;;832:169;:::o",
  "source": "pragma solidity 0.4.18;\n\nimport \"zeppelin-solidity/contracts/ownership/Ownable.sol\";\n\n\n/**\n * The TokenRegistry is a basic registry mapping token symbols\n * to their known, deployed addresses on the current blockchain.\n *\n * Note that the TokenRegistry does *not* mediate any of the\n * core protocol's business logic, but, rather, is a helpful\n * utility for Terms Contracts to use in encoding, decoding, and\n * resolving the addresses of currently deployed tokens.\n *\n * At this point in time, administration of the Token Registry is\n * under Dharma Labs' control.  With more sophisticated decentralized\n * governance mechanisms, we intend to shift ownership of this utility\n * contract to the Dharma community.\n */\ncontract TokenRegistry is Ownable {\n    mapping (bytes32 => address) public symbolToTokenAddress;\n    mapping (bytes32 => uint) public symbolToTokenIndex;\n    bytes32[256] public tokenSymbolHashList;\n    uint8 public tokenSymbolHashListLength;\n\n    /**\n     * Maps the given symbol to the given token address.\n     */\n    function setTokenAddress(string symbol, address token) public onlyOwner {\n        require(tokenSymbolHashListLength < 256);\n\n        bytes32 symbolHash = keccak256(symbol);\n\n        if (symbolToTokenAddress[symbolHash] == address(0)) {\n            tokenSymbolHashList[tokenSymbolHashListLength] = symbolHash;\n            symbolToTokenAddress[symbolHash] = tokenSymbolHashListLength;\n            tokenSymbolHashListLength++;\n        }\n\n        symbolToTokenAddress[symbolHash] = token;\n    }\n\n    /**\n     * Given a symbol, resolves the current address of the token the symbol is mapped to.\n     */\n    function getTokenAddressBySymbol(string symbol) public view returns (address) {\n        return symbolToTokenAddress[keccak256(symbol)];\n    }\n\n    /**\n     * Given the known index of a token within the registry's symbol hash list,\n     * returns the address of the token mapped to the symbol at that index.\n     *\n     * This is a useful utility for compactly encoding the address of a token into a\n     * TermsContractParameters string -- by encoding a token by its index in a\n     * a 256 slot array, we can represent a token by a 1 byte uint instead of a 20 byte address.\n     */\n    function getTokenAddressByIndex(uint index) public view returns (address) {\n        return symbolToTokenAddress[tokenSymbolHashList[index]];\n    }\n\n    /**\n     * Given a symbol, resolves the index of the token the symbols is mapped to within the registry's\n     * symbol hash list.\n     */\n    function getTokenIndexBySymbol(string symbol) public view returns (uint) {\n        return symbolToTokenIndex[keccak256(symbol)];\n    }\n}\n",
  "sourcePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/TokenRegistry.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/TokenRegistry.sol",
      "exportedSymbols": {
        "TokenRegistry": [
          113
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
        "id": 1,
        "name": "PragmaDirective",
        "src": "0:23:0"
      },
      {
        "attributes": {
          "SourceUnit": 170,
          "absolutePath": "zeppelin-solidity/contracts/ownership/Ownable.sol",
          "file": "zeppelin-solidity/contracts/ownership/Ownable.sol",
          "scope": 114,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 2,
        "name": "ImportDirective",
        "src": "25:59:0"
      },
      {
        "attributes": {
          "contractDependencies": [
            169
          ],
          "contractKind": "contract",
          "documentation": "The TokenRegistry is a basic registry mapping token symbols\nto their known, deployed addresses on the current blockchain.\n * Note that the TokenRegistry does *not* mediate any of the\ncore protocol's business logic, but, rather, is a helpful\nutility for Terms Contracts to use in encoding, decoding, and\nresolving the addresses of currently deployed tokens.\n * At this point in time, administration of the Token Registry is\nunder Dharma Labs' control.  With more sophisticated decentralized\ngovernance mechanisms, we intend to shift ownership of this utility\ncontract to the Dharma community.",
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            113,
            169
          ],
          "name": "TokenRegistry",
          "scope": 114
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
                  "name": "Ownable",
                  "referencedDeclaration": 169,
                  "type": "contract Ownable"
                },
                "id": 3,
                "name": "UserDefinedTypeName",
                "src": "743:7:0"
              }
            ],
            "id": 4,
            "name": "InheritanceSpecifier",
            "src": "743:7:0"
          },
          {
            "attributes": {
              "constant": false,
              "name": "symbolToTokenAddress",
              "scope": 113,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(bytes32 => address)",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(bytes32 => address)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "bytes32",
                      "type": "bytes32"
                    },
                    "id": 5,
                    "name": "ElementaryTypeName",
                    "src": "766:7:0"
                  },
                  {
                    "attributes": {
                      "name": "address",
                      "type": "address"
                    },
                    "id": 6,
                    "name": "ElementaryTypeName",
                    "src": "777:7:0"
                  }
                ],
                "id": 7,
                "name": "Mapping",
                "src": "757:28:0"
              }
            ],
            "id": 8,
            "name": "VariableDeclaration",
            "src": "757:56:0"
          },
          {
            "attributes": {
              "constant": false,
              "name": "symbolToTokenIndex",
              "scope": 113,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(bytes32 => uint256)",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(bytes32 => uint256)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "bytes32",
                      "type": "bytes32"
                    },
                    "id": 9,
                    "name": "ElementaryTypeName",
                    "src": "828:7:0"
                  },
                  {
                    "attributes": {
                      "name": "uint",
                      "type": "uint256"
                    },
                    "id": 10,
                    "name": "ElementaryTypeName",
                    "src": "839:4:0"
                  }
                ],
                "id": 11,
                "name": "Mapping",
                "src": "819:25:0"
              }
            ],
            "id": 12,
            "name": "VariableDeclaration",
            "src": "819:51:0"
          },
          {
            "attributes": {
              "constant": false,
              "name": "tokenSymbolHashList",
              "scope": 113,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "bytes32[256] storage ref",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "type": "bytes32[256] storage pointer"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "bytes32",
                      "type": "bytes32"
                    },
                    "id": 13,
                    "name": "ElementaryTypeName",
                    "src": "876:7:0"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "hexvalue": "323536",
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "subdenomination": null,
                      "token": "number",
                      "type": "int_const 256",
                      "value": "256"
                    },
                    "id": 14,
                    "name": "Literal",
                    "src": "884:3:0"
                  }
                ],
                "id": 15,
                "name": "ArrayTypeName",
                "src": "876:12:0"
              }
            ],
            "id": 16,
            "name": "VariableDeclaration",
            "src": "876:39:0"
          },
          {
            "attributes": {
              "constant": false,
              "name": "tokenSymbolHashListLength",
              "scope": 113,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint8",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "uint8",
                  "type": "uint8"
                },
                "id": 17,
                "name": "ElementaryTypeName",
                "src": "921:5:0"
              }
            ],
            "id": 18,
            "name": "VariableDeclaration",
            "src": "921:38:0"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "setTokenAddress",
              "payable": false,
              "scope": 113,
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
                      "name": "symbol",
                      "scope": 70,
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
                        "id": 19,
                        "name": "ElementaryTypeName",
                        "src": "1064:6:0"
                      }
                    ],
                    "id": 20,
                    "name": "VariableDeclaration",
                    "src": "1064:13:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "token",
                      "scope": 70,
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
                        "id": 21,
                        "name": "ElementaryTypeName",
                        "src": "1079:7:0"
                      }
                    ],
                    "id": 22,
                    "name": "VariableDeclaration",
                    "src": "1079:13:0"
                  }
                ],
                "id": 23,
                "name": "ParameterList",
                "src": "1063:30:0"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 26,
                "name": "ParameterList",
                "src": "1111:0:0"
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
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 143,
                      "type": "modifier ()",
                      "value": "onlyOwner"
                    },
                    "id": 24,
                    "name": "Identifier",
                    "src": "1101:9:0"
                  }
                ],
                "id": 25,
                "name": "ModifierInvocation",
                "src": "1101:9:0"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 184,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 27,
                            "name": "Identifier",
                            "src": "1121:7:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint16",
                                "typeString": "uint16"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "<",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 18,
                                  "type": "uint8",
                                  "value": "tokenSymbolHashListLength"
                                },
                                "id": 28,
                                "name": "Identifier",
                                "src": "1129:25:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "323536",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 256",
                                  "value": "256"
                                },
                                "id": 29,
                                "name": "Literal",
                                "src": "1157:3:0"
                              }
                            ],
                            "id": 30,
                            "name": "BinaryOperation",
                            "src": "1129:31:0"
                          }
                        ],
                        "id": 31,
                        "name": "FunctionCall",
                        "src": "1121:40:0"
                      }
                    ],
                    "id": 32,
                    "name": "ExpressionStatement",
                    "src": "1121:40:0"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        34
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "symbolHash",
                          "scope": 70,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "bytes32",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "bytes32",
                              "type": "bytes32"
                            },
                            "id": 33,
                            "name": "ElementaryTypeName",
                            "src": "1172:7:0"
                          }
                        ],
                        "id": 34,
                        "name": "VariableDeclaration",
                        "src": "1172:18:0"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "bytes32",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 175,
                              "type": "function () pure returns (bytes32)",
                              "value": "keccak256"
                            },
                            "id": 35,
                            "name": "Identifier",
                            "src": "1193:9:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 20,
                              "type": "string memory",
                              "value": "symbol"
                            },
                            "id": 36,
                            "name": "Identifier",
                            "src": "1203:6:0"
                          }
                        ],
                        "id": 37,
                        "name": "FunctionCall",
                        "src": "1193:17:0"
                      }
                    ],
                    "id": 38,
                    "name": "VariableDeclarationStatement",
                    "src": "1172:38:0"
                  },
                  {
                    "attributes": {
                      "falseBody": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "==",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8,
                                  "type": "mapping(bytes32 => address)",
                                  "value": "symbolToTokenAddress"
                                },
                                "id": 39,
                                "name": "Identifier",
                                "src": "1225:20:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 34,
                                  "type": "bytes32",
                                  "value": "symbolHash"
                                },
                                "id": 40,
                                "name": "Identifier",
                                "src": "1246:10:0"
                              }
                            ],
                            "id": 41,
                            "name": "IndexAccess",
                            "src": "1225:32:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "address",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_rational_0_by_1",
                                      "typeString": "int_const 0"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "type(address)",
                                  "value": "address"
                                },
                                "id": 42,
                                "name": "ElementaryTypeNameExpression",
                                "src": "1261:7:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "30",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 0",
                                  "value": "0"
                                },
                                "id": 43,
                                "name": "Literal",
                                "src": "1269:1:0"
                              }
                            ],
                            "id": 44,
                            "name": "FunctionCall",
                            "src": "1261:10:0"
                          }
                        ],
                        "id": 45,
                        "name": "BinaryOperation",
                        "src": "1225:46:0"
                      },
                      {
                        "children": [
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "=",
                                  "type": "bytes32"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": true,
                                      "type": "bytes32"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 16,
                                          "type": "bytes32[256] storage ref",
                                          "value": "tokenSymbolHashList"
                                        },
                                        "id": 46,
                                        "name": "Identifier",
                                        "src": "1287:19:0"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 18,
                                          "type": "uint8",
                                          "value": "tokenSymbolHashListLength"
                                        },
                                        "id": 47,
                                        "name": "Identifier",
                                        "src": "1307:25:0"
                                      }
                                    ],
                                    "id": 48,
                                    "name": "IndexAccess",
                                    "src": "1287:46:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 34,
                                      "type": "bytes32",
                                      "value": "symbolHash"
                                    },
                                    "id": 49,
                                    "name": "Identifier",
                                    "src": "1336:10:0"
                                  }
                                ],
                                "id": 50,
                                "name": "Assignment",
                                "src": "1287:59:0"
                              }
                            ],
                            "id": 51,
                            "name": "ExpressionStatement",
                            "src": "1287:59:0"
                          },
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "=",
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": true,
                                      "type": "address"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 8,
                                          "type": "mapping(bytes32 => address)",
                                          "value": "symbolToTokenAddress"
                                        },
                                        "id": 52,
                                        "name": "Identifier",
                                        "src": "1360:20:0"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 34,
                                          "type": "bytes32",
                                          "value": "symbolHash"
                                        },
                                        "id": 53,
                                        "name": "Identifier",
                                        "src": "1381:10:0"
                                      }
                                    ],
                                    "id": 54,
                                    "name": "IndexAccess",
                                    "src": "1360:32:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 18,
                                      "type": "uint8",
                                      "value": "tokenSymbolHashListLength"
                                    },
                                    "id": 55,
                                    "name": "Identifier",
                                    "src": "1395:25:0"
                                  }
                                ],
                                "id": 56,
                                "name": "Assignment",
                                "src": "1360:60:0"
                              }
                            ],
                            "id": 57,
                            "name": "ExpressionStatement",
                            "src": "1360:60:0"
                          },
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "++",
                                  "prefix": false,
                                  "type": "uint8"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 18,
                                      "type": "uint8",
                                      "value": "tokenSymbolHashListLength"
                                    },
                                    "id": 58,
                                    "name": "Identifier",
                                    "src": "1434:25:0"
                                  }
                                ],
                                "id": 59,
                                "name": "UnaryOperation",
                                "src": "1434:27:0"
                              }
                            ],
                            "id": 60,
                            "name": "ExpressionStatement",
                            "src": "1434:27:0"
                          }
                        ],
                        "id": 61,
                        "name": "Block",
                        "src": "1273:199:0"
                      }
                    ],
                    "id": 62,
                    "name": "IfStatement",
                    "src": "1221:251:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8,
                                  "type": "mapping(bytes32 => address)",
                                  "value": "symbolToTokenAddress"
                                },
                                "id": 63,
                                "name": "Identifier",
                                "src": "1482:20:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 34,
                                  "type": "bytes32",
                                  "value": "symbolHash"
                                },
                                "id": 64,
                                "name": "Identifier",
                                "src": "1503:10:0"
                              }
                            ],
                            "id": 65,
                            "name": "IndexAccess",
                            "src": "1482:32:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 22,
                              "type": "address",
                              "value": "token"
                            },
                            "id": 66,
                            "name": "Identifier",
                            "src": "1517:5:0"
                          }
                        ],
                        "id": 67,
                        "name": "Assignment",
                        "src": "1482:40:0"
                      }
                    ],
                    "id": 68,
                    "name": "ExpressionStatement",
                    "src": "1482:40:0"
                  }
                ],
                "id": 69,
                "name": "Block",
                "src": "1111:418:0"
              }
            ],
            "id": 70,
            "name": "FunctionDefinition",
            "src": "1039:490:0"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getTokenAddressBySymbol",
              "payable": false,
              "scope": 113,
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
                      "name": "symbol",
                      "scope": 84,
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
                        "id": 71,
                        "name": "ElementaryTypeName",
                        "src": "1674:6:0"
                      }
                    ],
                    "id": 72,
                    "name": "VariableDeclaration",
                    "src": "1674:13:0"
                  }
                ],
                "id": 73,
                "name": "ParameterList",
                "src": "1673:15:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 84,
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
                        "id": 74,
                        "name": "ElementaryTypeName",
                        "src": "1710:7:0"
                      }
                    ],
                    "id": 75,
                    "name": "VariableDeclaration",
                    "src": "1710:7:0"
                  }
                ],
                "id": 76,
                "name": "ParameterList",
                "src": "1709:9:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 76
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8,
                              "type": "mapping(bytes32 => address)",
                              "value": "symbolToTokenAddress"
                            },
                            "id": 77,
                            "name": "Identifier",
                            "src": "1736:20:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "bytes32",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_string_memory_ptr",
                                      "typeString": "string memory"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 175,
                                  "type": "function () pure returns (bytes32)",
                                  "value": "keccak256"
                                },
                                "id": 78,
                                "name": "Identifier",
                                "src": "1757:9:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 72,
                                  "type": "string memory",
                                  "value": "symbol"
                                },
                                "id": 79,
                                "name": "Identifier",
                                "src": "1767:6:0"
                              }
                            ],
                            "id": 80,
                            "name": "FunctionCall",
                            "src": "1757:17:0"
                          }
                        ],
                        "id": 81,
                        "name": "IndexAccess",
                        "src": "1736:39:0"
                      }
                    ],
                    "id": 82,
                    "name": "Return",
                    "src": "1729:46:0"
                  }
                ],
                "id": 83,
                "name": "Block",
                "src": "1719:63:0"
              }
            ],
            "id": 84,
            "name": "FunctionDefinition",
            "src": "1641:141:0"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getTokenAddressByIndex",
              "payable": false,
              "scope": 113,
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
                      "name": "index",
                      "scope": 98,
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
                        "id": 85,
                        "name": "ElementaryTypeName",
                        "src": "2260:4:0"
                      }
                    ],
                    "id": 86,
                    "name": "VariableDeclaration",
                    "src": "2260:10:0"
                  }
                ],
                "id": 87,
                "name": "ParameterList",
                "src": "2259:12:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 98,
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
                        "id": 88,
                        "name": "ElementaryTypeName",
                        "src": "2293:7:0"
                      }
                    ],
                    "id": 89,
                    "name": "VariableDeclaration",
                    "src": "2293:7:0"
                  }
                ],
                "id": 90,
                "name": "ParameterList",
                "src": "2292:9:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 90
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8,
                              "type": "mapping(bytes32 => address)",
                              "value": "symbolToTokenAddress"
                            },
                            "id": 91,
                            "name": "Identifier",
                            "src": "2319:20:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "type": "bytes32"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 16,
                                  "type": "bytes32[256] storage ref",
                                  "value": "tokenSymbolHashList"
                                },
                                "id": 92,
                                "name": "Identifier",
                                "src": "2340:19:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 86,
                                  "type": "uint256",
                                  "value": "index"
                                },
                                "id": 93,
                                "name": "Identifier",
                                "src": "2360:5:0"
                              }
                            ],
                            "id": 94,
                            "name": "IndexAccess",
                            "src": "2340:26:0"
                          }
                        ],
                        "id": 95,
                        "name": "IndexAccess",
                        "src": "2319:48:0"
                      }
                    ],
                    "id": 96,
                    "name": "Return",
                    "src": "2312:55:0"
                  }
                ],
                "id": 97,
                "name": "Block",
                "src": "2302:72:0"
              }
            ],
            "id": 98,
            "name": "FunctionDefinition",
            "src": "2228:146:0"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getTokenIndexBySymbol",
              "payable": false,
              "scope": 113,
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
                      "name": "symbol",
                      "scope": 112,
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
                        "id": 99,
                        "name": "ElementaryTypeName",
                        "src": "2554:6:0"
                      }
                    ],
                    "id": 100,
                    "name": "VariableDeclaration",
                    "src": "2554:13:0"
                  }
                ],
                "id": 101,
                "name": "ParameterList",
                "src": "2553:15:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 112,
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
                        "id": 102,
                        "name": "ElementaryTypeName",
                        "src": "2590:4:0"
                      }
                    ],
                    "id": 103,
                    "name": "VariableDeclaration",
                    "src": "2590:4:0"
                  }
                ],
                "id": 104,
                "name": "ParameterList",
                "src": "2589:6:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 104
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 12,
                              "type": "mapping(bytes32 => uint256)",
                              "value": "symbolToTokenIndex"
                            },
                            "id": 105,
                            "name": "Identifier",
                            "src": "2613:18:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "bytes32",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_string_memory_ptr",
                                      "typeString": "string memory"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 175,
                                  "type": "function () pure returns (bytes32)",
                                  "value": "keccak256"
                                },
                                "id": 106,
                                "name": "Identifier",
                                "src": "2632:9:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 100,
                                  "type": "string memory",
                                  "value": "symbol"
                                },
                                "id": 107,
                                "name": "Identifier",
                                "src": "2642:6:0"
                              }
                            ],
                            "id": 108,
                            "name": "FunctionCall",
                            "src": "2632:17:0"
                          }
                        ],
                        "id": 109,
                        "name": "IndexAccess",
                        "src": "2613:37:0"
                      }
                    ],
                    "id": 110,
                    "name": "Return",
                    "src": "2606:44:0"
                  }
                ],
                "id": 111,
                "name": "Block",
                "src": "2596:61:0"
              }
            ],
            "id": 112,
            "name": "FunctionDefinition",
            "src": "2523:134:0"
          }
        ],
        "id": 113,
        "name": "ContractDefinition",
        "src": "717:1942:0"
      }
    ],
    "id": 114,
    "name": "SourceUnit",
    "src": "0:2660:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {
    "42": {
      "events": {},
      "links": {},
      "address": "0x4d2f3c39249a63b7f6987748813c8dc0fdd5c8c3"
    },
    "70": {
      "events": {},
      "links": {},
      "address": "0x5833e409d1c61e4d3139654db5faea6ee819a664"
    }
  },
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-03-25T03:18:28.733Z"
}