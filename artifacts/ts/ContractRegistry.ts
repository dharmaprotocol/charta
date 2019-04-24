export const ContractRegistry = 
{
  "contractName": "ContractRegistry",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "debtKernel",
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
      "name": "tokenTransferProxy",
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
      "name": "debtRegistry",
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
      "name": "repaymentRouter",
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
      "name": "collateralizer",
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
      "inputs": [],
      "name": "tokenRegistry",
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
      "constant": false,
      "inputs": [
        {
          "name": "contractType",
          "type": "uint8"
        },
        {
          "name": "newAddress",
          "type": "address"
        }
      ],
      "name": "updateAddress",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
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
      "constant": true,
      "inputs": [],
      "name": "debtToken",
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
      "inputs": [
        {
          "name": "_collateralizer",
          "type": "address"
        },
        {
          "name": "_debtKernel",
          "type": "address"
        },
        {
          "name": "_debtRegistry",
          "type": "address"
        },
        {
          "name": "_debtToken",
          "type": "address"
        },
        {
          "name": "_repaymentRouter",
          "type": "address"
        },
        {
          "name": "_tokenRegistry",
          "type": "address"
        },
        {
          "name": "_tokenTransferProxy",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "contractType",
          "type": "uint8"
        },
        {
          "indexed": true,
          "name": "oldAddress",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "newAddress",
          "type": "address"
        }
      ],
      "name": "ContractAddressUpdated",
      "type": "event"
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
  "bytecode": "0x6060604052341561000f57600080fd5b60405160e080610e5683398101604052808051906020019091908051906020019091908051906020019091908051906020019091908051906020019091908051906020019091908051906020019091905050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555086600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555085600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555084600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050505050610bd88061027e6000396000f3006060604052600436106100a4576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063079dd4b7146100a95780630eefdbad146100fe5780632f866f73146101535780636fa9d056146101a8578063869f0511146101fd5780638da5cb5b146102525780639d23c4c7146102a7578063e2aa46bb146102fc578063f2fde38b14610341578063f8d898981461037a575b600080fd5b34156100b457600080fd5b6100bc6103cf565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561010957600080fd5b6101116103f5565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561015e57600080fd5b61016661041b565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156101b357600080fd5b6101bb610441565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561020857600080fd5b610210610467565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561025d57600080fd5b61026561048d565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156102b257600080fd5b6102ba6104b2565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561030757600080fd5b61033f600480803560ff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506104d8565b005b341561034c57600080fd5b610378600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506109b6565b005b341561038557600080fd5b61038d610b0b565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561053557600080fd5b6000600681111561054257fe5b83600681111561054e57fe5b14156105c957600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506105838282610b31565b81600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061094b565b600160068111156105d657fe5b8360068111156105e257fe5b141561065d57600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506106178282610b31565b81600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061094a565b6002600681111561066a57fe5b83600681111561067657fe5b14156106f157600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506106ab8282610b31565b81600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610949565b600360068111156106fe57fe5b83600681111561070a57fe5b141561078557600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905061073f8282610b31565b81600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610948565b6004600681111561079257fe5b83600681111561079e57fe5b141561081957600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506107d38282610b31565b81600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610947565b6005600681111561082657fe5b83600681111561083257fe5b14156108ad57600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506108678282610b31565b81600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610946565b6006808111156108b957fe5b8360068111156108c557fe5b141561094057600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506108fa8282610b31565b81600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610945565b600080fd5b5b5b5b5b5b5b8173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1684600681111561098557fe5b7fea5852cbfaa20064a0ffec7659e5b7178c40ecc51d8788b6981bfa062bc6e78860405160405180910390a4505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610a1157600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515610a4d57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515610b6d57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515610ba857600080fd5b50505600a165627a7a72305820cec278026b62639eaf4f9fd95e83dda29809a7d198c3b81cbe75da064e09a16b0029",
  "deployedBytecode": "0x6060604052600436106100a4576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063079dd4b7146100a95780630eefdbad146100fe5780632f866f73146101535780636fa9d056146101a8578063869f0511146101fd5780638da5cb5b146102525780639d23c4c7146102a7578063e2aa46bb146102fc578063f2fde38b14610341578063f8d898981461037a575b600080fd5b34156100b457600080fd5b6100bc6103cf565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561010957600080fd5b6101116103f5565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561015e57600080fd5b61016661041b565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156101b357600080fd5b6101bb610441565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561020857600080fd5b610210610467565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561025d57600080fd5b61026561048d565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156102b257600080fd5b6102ba6104b2565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561030757600080fd5b61033f600480803560ff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506104d8565b005b341561034c57600080fd5b610378600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506109b6565b005b341561038557600080fd5b61038d610b0b565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561053557600080fd5b6000600681111561054257fe5b83600681111561054e57fe5b14156105c957600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506105838282610b31565b81600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061094b565b600160068111156105d657fe5b8360068111156105e257fe5b141561065d57600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506106178282610b31565b81600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061094a565b6002600681111561066a57fe5b83600681111561067657fe5b14156106f157600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506106ab8282610b31565b81600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610949565b600360068111156106fe57fe5b83600681111561070a57fe5b141561078557600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905061073f8282610b31565b81600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610948565b6004600681111561079257fe5b83600681111561079e57fe5b141561081957600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506107d38282610b31565b81600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610947565b6005600681111561082657fe5b83600681111561083257fe5b14156108ad57600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506108678282610b31565b81600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610946565b6006808111156108b957fe5b8360068111156108c557fe5b141561094057600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506108fa8282610b31565b81600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610945565b600080fd5b5b5b5b5b5b5b8173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1684600681111561098557fe5b7fea5852cbfaa20064a0ffec7659e5b7178c40ecc51d8788b6981bfa062bc6e78860405160405180910390a4505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610a1157600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515610a4d57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515610b6d57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515610ba857600080fd5b50505600a165627a7a72305820cec278026b62639eaf4f9fd95e83dda29809a7d198c3b81cbe75da064e09a16b0029",
  "sourceMap": "298:3506:1:-;;;971:667;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;509:10:39;501:5;;:18;;;;;;;;;;;;;;;;;;1288:15:1;1256:14;;:48;;;;;;;;;;;;;;;;;;1338:11;1314:10;;:36;;;;;;;;;;;;;;;;;;1388:13;1360:12;;:42;;;;;;;;;;;;;;;;;;1434:10;1412:9;;:33;;;;;;;;;;;;;;;;;;1489:16;1455:15;;:51;;;;;;;;;;;;;;;;;;1546:14;1516:13;;:45;;;;;;;;;;;;;;;;;;1611:19;1571:18;;:60;;;;;;;;;;;;;;;;;;971:667;;;;;;;298:3506;;;;;;",
  "deployedSourceMap": "298:3506:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;731:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;920:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;765:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;836:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;689:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;238:20:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;880:34:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1644:1853;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;832:169:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;804:26:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;731:28;;;;;;;;;;;;;:::o;920:44::-;;;;;;;;;;;;;:::o;765:33::-;;;;;;;;;;;;;:::o;836:38::-;;;;;;;;;;;;;:::o;689:36::-;;;;;;;;;;;;;:::o;238:20:39:-;;;;;;;;;;;;;:::o;880:34:1:-;;;;;;;;;;;;;:::o;1644:1853::-;1783:18;653:5:39;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;1832:27:1;1816:43;;;;;;;;:12;:43;;;;;;;;;1812:1608;;;1896:14;;;;;;;;;;;1875:36;;1925:42;1944:10;1956;1925:18;:42::i;:::-;2013:10;1981:14;;:43;;;;;;;;;;;;;;;;;;1812:1608;;;2061:23;2045:39;;;;;;;;:12;:39;;;;;;;;;2041:1379;;;2121:10;;;;;;;;;;;2100:32;;2146:42;2165:10;2177;2146:18;:42::i;:::-;2226:10;2202;;:35;;;;;;;;;;;;;;;;;;2041:1379;;;2274:25;2258:41;;;;;;;;:12;:41;;;;;;;;;2254:1166;;;2336:12;;;;;;;;;;;2315:34;;2363:42;2382:10;2394;2363:18;:42::i;:::-;2447:10;2419:12;;:39;;;;;;;;;;;;;;;;;;2254:1166;;;2495:22;2479:38;;;;;;;;:12;:38;;;;;;;;;2475:945;;;2554:9;;;;;;;;;;;2533:31;;2578:42;2597:10;2609;2578:18;:42::i;:::-;2656:10;2634:9;;:33;;;;;;;;;;;;;;;;;;2475:945;;;2704:28;2688:44;;;;;;;;:12;:44;;;;;;;;;2684:736;;;2769:15;;;;;;;;;;;2748:37;;2799:42;2818:10;2830;2799:18;:42::i;:::-;2889:10;2855:15;;:45;;;;;;;;;;;;;;;;;;2684:736;;;2937:26;2921:42;;;;;;;;:12;:42;;;;;;;;;2917:503;;;3000:13;;;;;;;;;;;2979:35;;3028:42;3047:10;3059;3028:18;:42::i;:::-;3114:10;3084:13;;:41;;;;;;;;;;;;;;;;;;2917:503;;;3162:31;3146:47;;;;;;;;:12;:47;;;;;;;;;3142:278;;;3230:18;;;;;;;;;;;3209:40;;3263:42;3282:10;3294;3263:18;:42::i;:::-;3359:10;3319:18;;:51;;;;;;;;;;;;;;;;;;3142:278;;;3401:8;;;3142:278;2917:503;2684:736;2475:945;2254:1166;2041:1379;1812:1608;3479:10;3430:60;;3467:10;3430:60;;3453:12;3430:60;;;;;;;;;;;;;;;;;;1644:1853;;;:::o;832:169:39:-;653:5;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;928:1;908:22;;:8;:22;;;;900:31;;;;;;;;965:8;937:37;;958:5;;;;;;;;;;;937:37;;;;;;;;;;;;988:8;980:5;;:16;;;;;;;;;;;;;;;;;;832:169;:::o;804:26:1:-;;;;;;;;;;;;;:::o;3503:299::-;3667:1;3645:24;;:10;:24;;;;3637:33;;;;;;;;3741:10;3727:24;;:10;:24;;;;3719:33;;;;;;;;3503:299;;:::o",
  "source": "pragma solidity 0.4.18;\n\nimport \"zeppelin-solidity/contracts/ownership/Ownable.sol\";\n\nimport \"./Collateralizer.sol\";\nimport \"./DebtKernel.sol\";\nimport \"./DebtRegistry.sol\";\nimport \"./DebtToken.sol\";\nimport \"./RepaymentRouter.sol\";\nimport \"./TokenRegistry.sol\";\nimport \"./TokenTransferProxy.sol\";\n\n\ncontract ContractRegistry is Ownable {\n\n    event ContractAddressUpdated(\n        ContractType indexed contractType,\n        address indexed oldAddress,\n        address indexed newAddress\n    );\n\n    enum ContractType {\n        Collateralizer,\n        DebtKernel,\n        DebtRegistry,\n        DebtToken,\n        RepaymentRouter,\n        TokenRegistry,\n        TokenTransferProxy\n    }\n\n    Collateralizer public collateralizer;\n    DebtKernel public debtKernel;\n    DebtRegistry public  debtRegistry;\n    DebtToken public debtToken;\n    RepaymentRouter public repaymentRouter;\n    TokenRegistry public tokenRegistry;\n    TokenTransferProxy public tokenTransferProxy;\n\n    function ContractRegistry(\n        address _collateralizer,\n        address _debtKernel,\n        address _debtRegistry,\n        address _debtToken,\n        address _repaymentRouter,\n        address _tokenRegistry,\n        address _tokenTransferProxy\n    )\n        public\n    {\n        collateralizer = Collateralizer(_collateralizer);\n        debtKernel = DebtKernel(_debtKernel);\n        debtRegistry = DebtRegistry(_debtRegistry);\n        debtToken = DebtToken(_debtToken);\n        repaymentRouter = RepaymentRouter(_repaymentRouter);\n        tokenRegistry = TokenRegistry(_tokenRegistry);\n        tokenTransferProxy = TokenTransferProxy(_tokenTransferProxy);\n    }\n\n    function updateAddress(\n        ContractType contractType,\n        address newAddress\n    )\n        public\n        onlyOwner\n    {\n        address oldAddress;\n\n        if (contractType == ContractType.Collateralizer) {\n            oldAddress = address(collateralizer);\n            validateNewAddress(newAddress, oldAddress);\n            collateralizer = Collateralizer(newAddress);\n        } else if (contractType == ContractType.DebtKernel) {\n            oldAddress = address(debtKernel);\n            validateNewAddress(newAddress, oldAddress);\n            debtKernel = DebtKernel(newAddress);\n        } else if (contractType == ContractType.DebtRegistry) {\n            oldAddress = address(debtRegistry);\n            validateNewAddress(newAddress, oldAddress);\n            debtRegistry = DebtRegistry(newAddress);\n        } else if (contractType == ContractType.DebtToken) {\n            oldAddress = address(debtToken);\n            validateNewAddress(newAddress, oldAddress);\n            debtToken = DebtToken(newAddress);\n        } else if (contractType == ContractType.RepaymentRouter) {\n            oldAddress = address(repaymentRouter);\n            validateNewAddress(newAddress, oldAddress);\n            repaymentRouter = RepaymentRouter(newAddress);\n        } else if (contractType == ContractType.TokenRegistry) {\n            oldAddress = address(tokenRegistry);\n            validateNewAddress(newAddress, oldAddress);\n            tokenRegistry = TokenRegistry(newAddress);\n        } else if (contractType == ContractType.TokenTransferProxy) {\n            oldAddress = address(tokenTransferProxy);\n            validateNewAddress(newAddress, oldAddress);\n            tokenTransferProxy = TokenTransferProxy(newAddress);\n        } else {\n            revert();\n        }\n\n        ContractAddressUpdated(contractType, oldAddress, newAddress);\n    }\n\n    function validateNewAddress(\n        address newAddress,\n        address oldAddress\n    )\n        internal\n        pure\n    {\n        require(newAddress != address(0)); // new address cannot be null address.\n        require(newAddress != oldAddress); // new address cannot be existing address.\n    }\n}\n",
  "sourcePath": "/Users/chris/dev/dharma/charta/contracts/ContractRegistry.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/chris/dev/dharma/charta/contracts/ContractRegistry.sol",
      "exportedSymbols": {
        "ContractRegistry": [
          923
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
        "id": 616,
        "name": "PragmaDirective",
        "src": "0:23:1"
      },
      {
        "attributes": {
          "SourceUnit": 14200,
          "absolutePath": "zeppelin-solidity/contracts/ownership/Ownable.sol",
          "file": "zeppelin-solidity/contracts/ownership/Ownable.sol",
          "scope": 924,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 617,
        "name": "ImportDirective",
        "src": "25:59:1"
      },
      {
        "attributes": {
          "SourceUnit": 615,
          "absolutePath": "/Users/chris/dev/dharma/charta/contracts/Collateralizer.sol",
          "file": "./Collateralizer.sol",
          "scope": 924,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 618,
        "name": "ImportDirective",
        "src": "86:30:1"
      },
      {
        "attributes": {
          "SourceUnit": 2679,
          "absolutePath": "/Users/chris/dev/dharma/charta/contracts/DebtKernel.sol",
          "file": "./DebtKernel.sol",
          "scope": 924,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 619,
        "name": "ImportDirective",
        "src": "117:26:1"
      },
      {
        "attributes": {
          "SourceUnit": 3207,
          "absolutePath": "/Users/chris/dev/dharma/charta/contracts/DebtRegistry.sol",
          "file": "./DebtRegistry.sol",
          "scope": 924,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 620,
        "name": "ImportDirective",
        "src": "144:28:1"
      },
      {
        "attributes": {
          "SourceUnit": 3589,
          "absolutePath": "/Users/chris/dev/dharma/charta/contracts/DebtToken.sol",
          "file": "./DebtToken.sol",
          "scope": 924,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 621,
        "name": "ImportDirective",
        "src": "173:25:1"
      },
      {
        "attributes": {
          "SourceUnit": 4756,
          "absolutePath": "/Users/chris/dev/dharma/charta/contracts/RepaymentRouter.sol",
          "file": "./RepaymentRouter.sol",
          "scope": 924,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 622,
        "name": "ImportDirective",
        "src": "199:31:1"
      },
      {
        "attributes": {
          "SourceUnit": 5162,
          "absolutePath": "/Users/chris/dev/dharma/charta/contracts/TokenRegistry.sol",
          "file": "./TokenRegistry.sol",
          "scope": 924,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 623,
        "name": "ImportDirective",
        "src": "231:29:1"
      },
      {
        "attributes": {
          "SourceUnit": 5255,
          "absolutePath": "/Users/chris/dev/dharma/charta/contracts/TokenTransferProxy.sol",
          "file": "./TokenTransferProxy.sol",
          "scope": 924,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 624,
        "name": "ImportDirective",
        "src": "261:34:1"
      },
      {
        "attributes": {
          "contractDependencies": [
            14199
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            923,
            14199
          ],
          "name": "ContractRegistry",
          "scope": 924
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
                  "referencedDeclaration": 14199,
                  "type": "contract Ownable"
                },
                "id": 625,
                "name": "UserDefinedTypeName",
                "src": "327:7:1"
              }
            ],
            "id": 626,
            "name": "InheritanceSpecifier",
            "src": "327:7:1"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "ContractAddressUpdated"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "contractType",
                      "scope": 634,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "enum ContractRegistry.ContractType",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "contractScope": null,
                          "name": "ContractType",
                          "referencedDeclaration": 642,
                          "type": "enum ContractRegistry.ContractType"
                        },
                        "id": 627,
                        "name": "UserDefinedTypeName",
                        "src": "380:12:1"
                      }
                    ],
                    "id": 628,
                    "name": "VariableDeclaration",
                    "src": "380:33:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "oldAddress",
                      "scope": 634,
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
                        "id": 629,
                        "name": "ElementaryTypeName",
                        "src": "423:7:1"
                      }
                    ],
                    "id": 630,
                    "name": "VariableDeclaration",
                    "src": "423:26:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "newAddress",
                      "scope": 634,
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
                        "id": 631,
                        "name": "ElementaryTypeName",
                        "src": "459:7:1"
                      }
                    ],
                    "id": 632,
                    "name": "VariableDeclaration",
                    "src": "459:26:1"
                  }
                ],
                "id": 633,
                "name": "ParameterList",
                "src": "370:121:1"
              }
            ],
            "id": 634,
            "name": "EventDefinition",
            "src": "342:150:1"
          },
          {
            "attributes": {
              "canonicalName": "ContractRegistry.ContractType",
              "name": "ContractType"
            },
            "children": [
              {
                "attributes": {
                  "name": "Collateralizer"
                },
                "id": 635,
                "name": "EnumValue",
                "src": "526:14:1"
              },
              {
                "attributes": {
                  "name": "DebtKernel"
                },
                "id": 636,
                "name": "EnumValue",
                "src": "550:10:1"
              },
              {
                "attributes": {
                  "name": "DebtRegistry"
                },
                "id": 637,
                "name": "EnumValue",
                "src": "570:12:1"
              },
              {
                "attributes": {
                  "name": "DebtToken"
                },
                "id": 638,
                "name": "EnumValue",
                "src": "592:9:1"
              },
              {
                "attributes": {
                  "name": "RepaymentRouter"
                },
                "id": 639,
                "name": "EnumValue",
                "src": "611:15:1"
              },
              {
                "attributes": {
                  "name": "TokenRegistry"
                },
                "id": 640,
                "name": "EnumValue",
                "src": "636:13:1"
              },
              {
                "attributes": {
                  "name": "TokenTransferProxy"
                },
                "id": 641,
                "name": "EnumValue",
                "src": "659:18:1"
              }
            ],
            "id": 642,
            "name": "EnumDefinition",
            "src": "498:185:1"
          },
          {
            "attributes": {
              "constant": false,
              "name": "collateralizer",
              "scope": 923,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "contract Collateralizer",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "Collateralizer",
                  "referencedDeclaration": 614,
                  "type": "contract Collateralizer"
                },
                "id": 643,
                "name": "UserDefinedTypeName",
                "src": "689:14:1"
              }
            ],
            "id": 644,
            "name": "VariableDeclaration",
            "src": "689:36:1"
          },
          {
            "attributes": {
              "constant": false,
              "name": "debtKernel",
              "scope": 923,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "contract DebtKernel",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "DebtKernel",
                  "referencedDeclaration": 2678,
                  "type": "contract DebtKernel"
                },
                "id": 645,
                "name": "UserDefinedTypeName",
                "src": "731:10:1"
              }
            ],
            "id": 646,
            "name": "VariableDeclaration",
            "src": "731:28:1"
          },
          {
            "attributes": {
              "constant": false,
              "name": "debtRegistry",
              "scope": 923,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "contract DebtRegistry",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "DebtRegistry",
                  "referencedDeclaration": 3206,
                  "type": "contract DebtRegistry"
                },
                "id": 647,
                "name": "UserDefinedTypeName",
                "src": "765:12:1"
              }
            ],
            "id": 648,
            "name": "VariableDeclaration",
            "src": "765:33:1"
          },
          {
            "attributes": {
              "constant": false,
              "name": "debtToken",
              "scope": 923,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "contract DebtToken",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "DebtToken",
                  "referencedDeclaration": 3588,
                  "type": "contract DebtToken"
                },
                "id": 649,
                "name": "UserDefinedTypeName",
                "src": "804:9:1"
              }
            ],
            "id": 650,
            "name": "VariableDeclaration",
            "src": "804:26:1"
          },
          {
            "attributes": {
              "constant": false,
              "name": "repaymentRouter",
              "scope": 923,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "contract RepaymentRouter",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "RepaymentRouter",
                  "referencedDeclaration": 4755,
                  "type": "contract RepaymentRouter"
                },
                "id": 651,
                "name": "UserDefinedTypeName",
                "src": "836:15:1"
              }
            ],
            "id": 652,
            "name": "VariableDeclaration",
            "src": "836:38:1"
          },
          {
            "attributes": {
              "constant": false,
              "name": "tokenRegistry",
              "scope": 923,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "contract TokenRegistry",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "TokenRegistry",
                  "referencedDeclaration": 5161,
                  "type": "contract TokenRegistry"
                },
                "id": 653,
                "name": "UserDefinedTypeName",
                "src": "880:13:1"
              }
            ],
            "id": 654,
            "name": "VariableDeclaration",
            "src": "880:34:1"
          },
          {
            "attributes": {
              "constant": false,
              "name": "tokenTransferProxy",
              "scope": 923,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "contract TokenTransferProxy",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "TokenTransferProxy",
                  "referencedDeclaration": 5254,
                  "type": "contract TokenTransferProxy"
                },
                "id": 655,
                "name": "UserDefinedTypeName",
                "src": "920:18:1"
              }
            ],
            "id": 656,
            "name": "VariableDeclaration",
            "src": "920:44:1"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": true,
              "modifiers": [
                null
              ],
              "name": "ContractRegistry",
              "payable": false,
              "scope": 923,
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
                      "name": "_collateralizer",
                      "scope": 716,
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
                        "id": 657,
                        "name": "ElementaryTypeName",
                        "src": "1006:7:1"
                      }
                    ],
                    "id": 658,
                    "name": "VariableDeclaration",
                    "src": "1006:23:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_debtKernel",
                      "scope": 716,
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
                        "id": 659,
                        "name": "ElementaryTypeName",
                        "src": "1039:7:1"
                      }
                    ],
                    "id": 660,
                    "name": "VariableDeclaration",
                    "src": "1039:19:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_debtRegistry",
                      "scope": 716,
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
                        "id": 661,
                        "name": "ElementaryTypeName",
                        "src": "1068:7:1"
                      }
                    ],
                    "id": 662,
                    "name": "VariableDeclaration",
                    "src": "1068:21:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_debtToken",
                      "scope": 716,
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
                        "id": 663,
                        "name": "ElementaryTypeName",
                        "src": "1099:7:1"
                      }
                    ],
                    "id": 664,
                    "name": "VariableDeclaration",
                    "src": "1099:18:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_repaymentRouter",
                      "scope": 716,
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
                        "id": 665,
                        "name": "ElementaryTypeName",
                        "src": "1127:7:1"
                      }
                    ],
                    "id": 666,
                    "name": "VariableDeclaration",
                    "src": "1127:24:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenRegistry",
                      "scope": 716,
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
                        "id": 667,
                        "name": "ElementaryTypeName",
                        "src": "1161:7:1"
                      }
                    ],
                    "id": 668,
                    "name": "VariableDeclaration",
                    "src": "1161:22:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenTransferProxy",
                      "scope": 716,
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
                        "id": 669,
                        "name": "ElementaryTypeName",
                        "src": "1193:7:1"
                      }
                    ],
                    "id": 670,
                    "name": "VariableDeclaration",
                    "src": "1193:27:1"
                  }
                ],
                "id": 671,
                "name": "ParameterList",
                "src": "996:230:1"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 672,
                "name": "ParameterList",
                "src": "1246:0:1"
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
                          "type": "contract Collateralizer"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 644,
                              "type": "contract Collateralizer",
                              "value": "collateralizer"
                            },
                            "id": 673,
                            "name": "Identifier",
                            "src": "1256:14:1"
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
                              "type": "contract Collateralizer",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 614,
                                  "type": "type(contract Collateralizer)",
                                  "value": "Collateralizer"
                                },
                                "id": 674,
                                "name": "Identifier",
                                "src": "1273:14:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 658,
                                  "type": "address",
                                  "value": "_collateralizer"
                                },
                                "id": 675,
                                "name": "Identifier",
                                "src": "1288:15:1"
                              }
                            ],
                            "id": 676,
                            "name": "FunctionCall",
                            "src": "1273:31:1"
                          }
                        ],
                        "id": 677,
                        "name": "Assignment",
                        "src": "1256:48:1"
                      }
                    ],
                    "id": 678,
                    "name": "ExpressionStatement",
                    "src": "1256:48:1"
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
                          "type": "contract DebtKernel"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 646,
                              "type": "contract DebtKernel",
                              "value": "debtKernel"
                            },
                            "id": 679,
                            "name": "Identifier",
                            "src": "1314:10:1"
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
                              "type": "contract DebtKernel",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2678,
                                  "type": "type(contract DebtKernel)",
                                  "value": "DebtKernel"
                                },
                                "id": 680,
                                "name": "Identifier",
                                "src": "1327:10:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 660,
                                  "type": "address",
                                  "value": "_debtKernel"
                                },
                                "id": 681,
                                "name": "Identifier",
                                "src": "1338:11:1"
                              }
                            ],
                            "id": 682,
                            "name": "FunctionCall",
                            "src": "1327:23:1"
                          }
                        ],
                        "id": 683,
                        "name": "Assignment",
                        "src": "1314:36:1"
                      }
                    ],
                    "id": 684,
                    "name": "ExpressionStatement",
                    "src": "1314:36:1"
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
                          "type": "contract DebtRegistry"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 648,
                              "type": "contract DebtRegistry",
                              "value": "debtRegistry"
                            },
                            "id": 685,
                            "name": "Identifier",
                            "src": "1360:12:1"
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
                              "type": "contract DebtRegistry",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3206,
                                  "type": "type(contract DebtRegistry)",
                                  "value": "DebtRegistry"
                                },
                                "id": 686,
                                "name": "Identifier",
                                "src": "1375:12:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 662,
                                  "type": "address",
                                  "value": "_debtRegistry"
                                },
                                "id": 687,
                                "name": "Identifier",
                                "src": "1388:13:1"
                              }
                            ],
                            "id": 688,
                            "name": "FunctionCall",
                            "src": "1375:27:1"
                          }
                        ],
                        "id": 689,
                        "name": "Assignment",
                        "src": "1360:42:1"
                      }
                    ],
                    "id": 690,
                    "name": "ExpressionStatement",
                    "src": "1360:42:1"
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
                          "type": "contract DebtToken"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 650,
                              "type": "contract DebtToken",
                              "value": "debtToken"
                            },
                            "id": 691,
                            "name": "Identifier",
                            "src": "1412:9:1"
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
                              "type": "contract DebtToken",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3588,
                                  "type": "type(contract DebtToken)",
                                  "value": "DebtToken"
                                },
                                "id": 692,
                                "name": "Identifier",
                                "src": "1424:9:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 664,
                                  "type": "address",
                                  "value": "_debtToken"
                                },
                                "id": 693,
                                "name": "Identifier",
                                "src": "1434:10:1"
                              }
                            ],
                            "id": 694,
                            "name": "FunctionCall",
                            "src": "1424:21:1"
                          }
                        ],
                        "id": 695,
                        "name": "Assignment",
                        "src": "1412:33:1"
                      }
                    ],
                    "id": 696,
                    "name": "ExpressionStatement",
                    "src": "1412:33:1"
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
                          "type": "contract RepaymentRouter"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 652,
                              "type": "contract RepaymentRouter",
                              "value": "repaymentRouter"
                            },
                            "id": 697,
                            "name": "Identifier",
                            "src": "1455:15:1"
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
                              "type": "contract RepaymentRouter",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4755,
                                  "type": "type(contract RepaymentRouter)",
                                  "value": "RepaymentRouter"
                                },
                                "id": 698,
                                "name": "Identifier",
                                "src": "1473:15:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 666,
                                  "type": "address",
                                  "value": "_repaymentRouter"
                                },
                                "id": 699,
                                "name": "Identifier",
                                "src": "1489:16:1"
                              }
                            ],
                            "id": 700,
                            "name": "FunctionCall",
                            "src": "1473:33:1"
                          }
                        ],
                        "id": 701,
                        "name": "Assignment",
                        "src": "1455:51:1"
                      }
                    ],
                    "id": 702,
                    "name": "ExpressionStatement",
                    "src": "1455:51:1"
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
                          "type": "contract TokenRegistry"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 654,
                              "type": "contract TokenRegistry",
                              "value": "tokenRegistry"
                            },
                            "id": 703,
                            "name": "Identifier",
                            "src": "1516:13:1"
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
                              "type": "contract TokenRegistry",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5161,
                                  "type": "type(contract TokenRegistry)",
                                  "value": "TokenRegistry"
                                },
                                "id": 704,
                                "name": "Identifier",
                                "src": "1532:13:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 668,
                                  "type": "address",
                                  "value": "_tokenRegistry"
                                },
                                "id": 705,
                                "name": "Identifier",
                                "src": "1546:14:1"
                              }
                            ],
                            "id": 706,
                            "name": "FunctionCall",
                            "src": "1532:29:1"
                          }
                        ],
                        "id": 707,
                        "name": "Assignment",
                        "src": "1516:45:1"
                      }
                    ],
                    "id": 708,
                    "name": "ExpressionStatement",
                    "src": "1516:45:1"
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
                          "type": "contract TokenTransferProxy"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 656,
                              "type": "contract TokenTransferProxy",
                              "value": "tokenTransferProxy"
                            },
                            "id": 709,
                            "name": "Identifier",
                            "src": "1571:18:1"
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
                              "type": "contract TokenTransferProxy",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5254,
                                  "type": "type(contract TokenTransferProxy)",
                                  "value": "TokenTransferProxy"
                                },
                                "id": 710,
                                "name": "Identifier",
                                "src": "1592:18:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 670,
                                  "type": "address",
                                  "value": "_tokenTransferProxy"
                                },
                                "id": 711,
                                "name": "Identifier",
                                "src": "1611:19:1"
                              }
                            ],
                            "id": 712,
                            "name": "FunctionCall",
                            "src": "1592:39:1"
                          }
                        ],
                        "id": 713,
                        "name": "Assignment",
                        "src": "1571:60:1"
                      }
                    ],
                    "id": 714,
                    "name": "ExpressionStatement",
                    "src": "1571:60:1"
                  }
                ],
                "id": 715,
                "name": "Block",
                "src": "1246:392:1"
              }
            ],
            "id": 716,
            "name": "FunctionDefinition",
            "src": "971:667:1"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "updateAddress",
              "payable": false,
              "scope": 923,
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
                      "name": "contractType",
                      "scope": 900,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "enum ContractRegistry.ContractType",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "contractScope": null,
                          "name": "ContractType",
                          "referencedDeclaration": 642,
                          "type": "enum ContractRegistry.ContractType"
                        },
                        "id": 717,
                        "name": "UserDefinedTypeName",
                        "src": "1676:12:1"
                      }
                    ],
                    "id": 718,
                    "name": "VariableDeclaration",
                    "src": "1676:25:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "newAddress",
                      "scope": 900,
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
                        "id": 719,
                        "name": "ElementaryTypeName",
                        "src": "1711:7:1"
                      }
                    ],
                    "id": 720,
                    "name": "VariableDeclaration",
                    "src": "1711:18:1"
                  }
                ],
                "id": 721,
                "name": "ParameterList",
                "src": "1666:69:1"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 724,
                "name": "ParameterList",
                "src": "1773:0:1"
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
                      "referencedDeclaration": 14173,
                      "type": "modifier ()",
                      "value": "onlyOwner"
                    },
                    "id": 722,
                    "name": "Identifier",
                    "src": "1759:9:1"
                  }
                ],
                "id": 723,
                "name": "ModifierInvocation",
                "src": "1759:9:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        null
                      ],
                      "initialValue": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "oldAddress",
                          "scope": 900,
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
                            "id": 725,
                            "name": "ElementaryTypeName",
                            "src": "1783:7:1"
                          }
                        ],
                        "id": 726,
                        "name": "VariableDeclaration",
                        "src": "1783:18:1"
                      }
                    ],
                    "id": 727,
                    "name": "VariableDeclarationStatement",
                    "src": "1783:18:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_enum$_ContractType_$642",
                            "typeString": "enum ContractRegistry.ContractType"
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
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 718,
                              "type": "enum ContractRegistry.ContractType",
                              "value": "contractType"
                            },
                            "id": 728,
                            "name": "Identifier",
                            "src": "1816:12:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "member_name": "Collateralizer",
                              "referencedDeclaration": null,
                              "type": "enum ContractRegistry.ContractType"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 642,
                                  "type": "type(enum ContractRegistry.ContractType)",
                                  "value": "ContractType"
                                },
                                "id": 729,
                                "name": "Identifier",
                                "src": "1832:12:1"
                              }
                            ],
                            "id": 730,
                            "name": "MemberAccess",
                            "src": "1832:27:1"
                          }
                        ],
                        "id": 731,
                        "name": "BinaryOperation",
                        "src": "1816:43:1"
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
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 726,
                                      "type": "address",
                                      "value": "oldAddress"
                                    },
                                    "id": 732,
                                    "name": "Identifier",
                                    "src": "1875:10:1"
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
                                      "type": "address",
                                      "type_conversion": true
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_contract$_Collateralizer_$614",
                                              "typeString": "contract Collateralizer"
                                            }
                                          ],
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "type": "type(address)",
                                          "value": "address"
                                        },
                                        "id": 733,
                                        "name": "ElementaryTypeNameExpression",
                                        "src": "1888:7:1"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 644,
                                          "type": "contract Collateralizer",
                                          "value": "collateralizer"
                                        },
                                        "id": 734,
                                        "name": "Identifier",
                                        "src": "1896:14:1"
                                      }
                                    ],
                                    "id": 735,
                                    "name": "FunctionCall",
                                    "src": "1888:23:1"
                                  }
                                ],
                                "id": 736,
                                "name": "Assignment",
                                "src": "1875:36:1"
                              }
                            ],
                            "id": 737,
                            "name": "ExpressionStatement",
                            "src": "1875:36:1"
                          },
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
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                        },
                                        {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 922,
                                      "type": "function (address,address) pure",
                                      "value": "validateNewAddress"
                                    },
                                    "id": 738,
                                    "name": "Identifier",
                                    "src": "1925:18:1"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 720,
                                      "type": "address",
                                      "value": "newAddress"
                                    },
                                    "id": 739,
                                    "name": "Identifier",
                                    "src": "1944:10:1"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 726,
                                      "type": "address",
                                      "value": "oldAddress"
                                    },
                                    "id": 740,
                                    "name": "Identifier",
                                    "src": "1956:10:1"
                                  }
                                ],
                                "id": 741,
                                "name": "FunctionCall",
                                "src": "1925:42:1"
                              }
                            ],
                            "id": 742,
                            "name": "ExpressionStatement",
                            "src": "1925:42:1"
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
                                  "type": "contract Collateralizer"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 644,
                                      "type": "contract Collateralizer",
                                      "value": "collateralizer"
                                    },
                                    "id": 743,
                                    "name": "Identifier",
                                    "src": "1981:14:1"
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
                                      "type": "contract Collateralizer",
                                      "type_conversion": true
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_address",
                                              "typeString": "address"
                                            }
                                          ],
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 614,
                                          "type": "type(contract Collateralizer)",
                                          "value": "Collateralizer"
                                        },
                                        "id": 744,
                                        "name": "Identifier",
                                        "src": "1998:14:1"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 720,
                                          "type": "address",
                                          "value": "newAddress"
                                        },
                                        "id": 745,
                                        "name": "Identifier",
                                        "src": "2013:10:1"
                                      }
                                    ],
                                    "id": 746,
                                    "name": "FunctionCall",
                                    "src": "1998:26:1"
                                  }
                                ],
                                "id": 747,
                                "name": "Assignment",
                                "src": "1981:43:1"
                              }
                            ],
                            "id": 748,
                            "name": "ExpressionStatement",
                            "src": "1981:43:1"
                          }
                        ],
                        "id": 749,
                        "name": "Block",
                        "src": "1861:174:1"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_enum$_ContractType_$642",
                                "typeString": "enum ContractRegistry.ContractType"
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
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 718,
                                  "type": "enum ContractRegistry.ContractType",
                                  "value": "contractType"
                                },
                                "id": 750,
                                "name": "Identifier",
                                "src": "2045:12:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "member_name": "DebtKernel",
                                  "referencedDeclaration": null,
                                  "type": "enum ContractRegistry.ContractType"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 642,
                                      "type": "type(enum ContractRegistry.ContractType)",
                                      "value": "ContractType"
                                    },
                                    "id": 751,
                                    "name": "Identifier",
                                    "src": "2061:12:1"
                                  }
                                ],
                                "id": 752,
                                "name": "MemberAccess",
                                "src": "2061:23:1"
                              }
                            ],
                            "id": 753,
                            "name": "BinaryOperation",
                            "src": "2045:39:1"
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
                                      "type": "address"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 726,
                                          "type": "address",
                                          "value": "oldAddress"
                                        },
                                        "id": 754,
                                        "name": "Identifier",
                                        "src": "2100:10:1"
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
                                          "type": "address",
                                          "type_conversion": true
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": [
                                                {
                                                  "typeIdentifier": "t_contract$_DebtKernel_$2678",
                                                  "typeString": "contract DebtKernel"
                                                }
                                              ],
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": true,
                                              "lValueRequested": false,
                                              "type": "type(address)",
                                              "value": "address"
                                            },
                                            "id": 755,
                                            "name": "ElementaryTypeNameExpression",
                                            "src": "2113:7:1"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 646,
                                              "type": "contract DebtKernel",
                                              "value": "debtKernel"
                                            },
                                            "id": 756,
                                            "name": "Identifier",
                                            "src": "2121:10:1"
                                          }
                                        ],
                                        "id": 757,
                                        "name": "FunctionCall",
                                        "src": "2113:19:1"
                                      }
                                    ],
                                    "id": 758,
                                    "name": "Assignment",
                                    "src": "2100:32:1"
                                  }
                                ],
                                "id": 759,
                                "name": "ExpressionStatement",
                                "src": "2100:32:1"
                              },
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
                                              "typeIdentifier": "t_address",
                                              "typeString": "address"
                                            },
                                            {
                                              "typeIdentifier": "t_address",
                                              "typeString": "address"
                                            }
                                          ],
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 922,
                                          "type": "function (address,address) pure",
                                          "value": "validateNewAddress"
                                        },
                                        "id": 760,
                                        "name": "Identifier",
                                        "src": "2146:18:1"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 720,
                                          "type": "address",
                                          "value": "newAddress"
                                        },
                                        "id": 761,
                                        "name": "Identifier",
                                        "src": "2165:10:1"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 726,
                                          "type": "address",
                                          "value": "oldAddress"
                                        },
                                        "id": 762,
                                        "name": "Identifier",
                                        "src": "2177:10:1"
                                      }
                                    ],
                                    "id": 763,
                                    "name": "FunctionCall",
                                    "src": "2146:42:1"
                                  }
                                ],
                                "id": 764,
                                "name": "ExpressionStatement",
                                "src": "2146:42:1"
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
                                      "type": "contract DebtKernel"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 646,
                                          "type": "contract DebtKernel",
                                          "value": "debtKernel"
                                        },
                                        "id": 765,
                                        "name": "Identifier",
                                        "src": "2202:10:1"
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
                                          "type": "contract DebtKernel",
                                          "type_conversion": true
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": [
                                                {
                                                  "typeIdentifier": "t_address",
                                                  "typeString": "address"
                                                }
                                              ],
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 2678,
                                              "type": "type(contract DebtKernel)",
                                              "value": "DebtKernel"
                                            },
                                            "id": 766,
                                            "name": "Identifier",
                                            "src": "2215:10:1"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 720,
                                              "type": "address",
                                              "value": "newAddress"
                                            },
                                            "id": 767,
                                            "name": "Identifier",
                                            "src": "2226:10:1"
                                          }
                                        ],
                                        "id": 768,
                                        "name": "FunctionCall",
                                        "src": "2215:22:1"
                                      }
                                    ],
                                    "id": 769,
                                    "name": "Assignment",
                                    "src": "2202:35:1"
                                  }
                                ],
                                "id": 770,
                                "name": "ExpressionStatement",
                                "src": "2202:35:1"
                              }
                            ],
                            "id": 771,
                            "name": "Block",
                            "src": "2086:162:1"
                          },
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_enum$_ContractType_$642",
                                    "typeString": "enum ContractRegistry.ContractType"
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
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 718,
                                      "type": "enum ContractRegistry.ContractType",
                                      "value": "contractType"
                                    },
                                    "id": 772,
                                    "name": "Identifier",
                                    "src": "2258:12:1"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "member_name": "DebtRegistry",
                                      "referencedDeclaration": null,
                                      "type": "enum ContractRegistry.ContractType"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 642,
                                          "type": "type(enum ContractRegistry.ContractType)",
                                          "value": "ContractType"
                                        },
                                        "id": 773,
                                        "name": "Identifier",
                                        "src": "2274:12:1"
                                      }
                                    ],
                                    "id": 774,
                                    "name": "MemberAccess",
                                    "src": "2274:25:1"
                                  }
                                ],
                                "id": 775,
                                "name": "BinaryOperation",
                                "src": "2258:41:1"
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
                                          "type": "address"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 726,
                                              "type": "address",
                                              "value": "oldAddress"
                                            },
                                            "id": 776,
                                            "name": "Identifier",
                                            "src": "2315:10:1"
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
                                              "type": "address",
                                              "type_conversion": true
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": [
                                                    {
                                                      "typeIdentifier": "t_contract$_DebtRegistry_$3206",
                                                      "typeString": "contract DebtRegistry"
                                                    }
                                                  ],
                                                  "isConstant": false,
                                                  "isLValue": false,
                                                  "isPure": true,
                                                  "lValueRequested": false,
                                                  "type": "type(address)",
                                                  "value": "address"
                                                },
                                                "id": 777,
                                                "name": "ElementaryTypeNameExpression",
                                                "src": "2328:7:1"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 648,
                                                  "type": "contract DebtRegistry",
                                                  "value": "debtRegistry"
                                                },
                                                "id": 778,
                                                "name": "Identifier",
                                                "src": "2336:12:1"
                                              }
                                            ],
                                            "id": 779,
                                            "name": "FunctionCall",
                                            "src": "2328:21:1"
                                          }
                                        ],
                                        "id": 780,
                                        "name": "Assignment",
                                        "src": "2315:34:1"
                                      }
                                    ],
                                    "id": 781,
                                    "name": "ExpressionStatement",
                                    "src": "2315:34:1"
                                  },
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
                                                  "typeIdentifier": "t_address",
                                                  "typeString": "address"
                                                },
                                                {
                                                  "typeIdentifier": "t_address",
                                                  "typeString": "address"
                                                }
                                              ],
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 922,
                                              "type": "function (address,address) pure",
                                              "value": "validateNewAddress"
                                            },
                                            "id": 782,
                                            "name": "Identifier",
                                            "src": "2363:18:1"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 720,
                                              "type": "address",
                                              "value": "newAddress"
                                            },
                                            "id": 783,
                                            "name": "Identifier",
                                            "src": "2382:10:1"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 726,
                                              "type": "address",
                                              "value": "oldAddress"
                                            },
                                            "id": 784,
                                            "name": "Identifier",
                                            "src": "2394:10:1"
                                          }
                                        ],
                                        "id": 785,
                                        "name": "FunctionCall",
                                        "src": "2363:42:1"
                                      }
                                    ],
                                    "id": 786,
                                    "name": "ExpressionStatement",
                                    "src": "2363:42:1"
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
                                          "type": "contract DebtRegistry"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 648,
                                              "type": "contract DebtRegistry",
                                              "value": "debtRegistry"
                                            },
                                            "id": 787,
                                            "name": "Identifier",
                                            "src": "2419:12:1"
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
                                              "type": "contract DebtRegistry",
                                              "type_conversion": true
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": [
                                                    {
                                                      "typeIdentifier": "t_address",
                                                      "typeString": "address"
                                                    }
                                                  ],
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 3206,
                                                  "type": "type(contract DebtRegistry)",
                                                  "value": "DebtRegistry"
                                                },
                                                "id": 788,
                                                "name": "Identifier",
                                                "src": "2434:12:1"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 720,
                                                  "type": "address",
                                                  "value": "newAddress"
                                                },
                                                "id": 789,
                                                "name": "Identifier",
                                                "src": "2447:10:1"
                                              }
                                            ],
                                            "id": 790,
                                            "name": "FunctionCall",
                                            "src": "2434:24:1"
                                          }
                                        ],
                                        "id": 791,
                                        "name": "Assignment",
                                        "src": "2419:39:1"
                                      }
                                    ],
                                    "id": 792,
                                    "name": "ExpressionStatement",
                                    "src": "2419:39:1"
                                  }
                                ],
                                "id": 793,
                                "name": "Block",
                                "src": "2301:168:1"
                              },
                              {
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "commonType": {
                                        "typeIdentifier": "t_enum$_ContractType_$642",
                                        "typeString": "enum ContractRegistry.ContractType"
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
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 718,
                                          "type": "enum ContractRegistry.ContractType",
                                          "value": "contractType"
                                        },
                                        "id": 794,
                                        "name": "Identifier",
                                        "src": "2479:12:1"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "member_name": "DebtToken",
                                          "referencedDeclaration": null,
                                          "type": "enum ContractRegistry.ContractType"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 642,
                                              "type": "type(enum ContractRegistry.ContractType)",
                                              "value": "ContractType"
                                            },
                                            "id": 795,
                                            "name": "Identifier",
                                            "src": "2495:12:1"
                                          }
                                        ],
                                        "id": 796,
                                        "name": "MemberAccess",
                                        "src": "2495:22:1"
                                      }
                                    ],
                                    "id": 797,
                                    "name": "BinaryOperation",
                                    "src": "2479:38:1"
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
                                              "type": "address"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 726,
                                                  "type": "address",
                                                  "value": "oldAddress"
                                                },
                                                "id": 798,
                                                "name": "Identifier",
                                                "src": "2533:10:1"
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
                                                  "type": "address",
                                                  "type_conversion": true
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": [
                                                        {
                                                          "typeIdentifier": "t_contract$_DebtToken_$3588",
                                                          "typeString": "contract DebtToken"
                                                        }
                                                      ],
                                                      "isConstant": false,
                                                      "isLValue": false,
                                                      "isPure": true,
                                                      "lValueRequested": false,
                                                      "type": "type(address)",
                                                      "value": "address"
                                                    },
                                                    "id": 799,
                                                    "name": "ElementaryTypeNameExpression",
                                                    "src": "2546:7:1"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 650,
                                                      "type": "contract DebtToken",
                                                      "value": "debtToken"
                                                    },
                                                    "id": 800,
                                                    "name": "Identifier",
                                                    "src": "2554:9:1"
                                                  }
                                                ],
                                                "id": 801,
                                                "name": "FunctionCall",
                                                "src": "2546:18:1"
                                              }
                                            ],
                                            "id": 802,
                                            "name": "Assignment",
                                            "src": "2533:31:1"
                                          }
                                        ],
                                        "id": 803,
                                        "name": "ExpressionStatement",
                                        "src": "2533:31:1"
                                      },
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
                                                      "typeIdentifier": "t_address",
                                                      "typeString": "address"
                                                    },
                                                    {
                                                      "typeIdentifier": "t_address",
                                                      "typeString": "address"
                                                    }
                                                  ],
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 922,
                                                  "type": "function (address,address) pure",
                                                  "value": "validateNewAddress"
                                                },
                                                "id": 804,
                                                "name": "Identifier",
                                                "src": "2578:18:1"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 720,
                                                  "type": "address",
                                                  "value": "newAddress"
                                                },
                                                "id": 805,
                                                "name": "Identifier",
                                                "src": "2597:10:1"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 726,
                                                  "type": "address",
                                                  "value": "oldAddress"
                                                },
                                                "id": 806,
                                                "name": "Identifier",
                                                "src": "2609:10:1"
                                              }
                                            ],
                                            "id": 807,
                                            "name": "FunctionCall",
                                            "src": "2578:42:1"
                                          }
                                        ],
                                        "id": 808,
                                        "name": "ExpressionStatement",
                                        "src": "2578:42:1"
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
                                              "type": "contract DebtToken"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 650,
                                                  "type": "contract DebtToken",
                                                  "value": "debtToken"
                                                },
                                                "id": 809,
                                                "name": "Identifier",
                                                "src": "2634:9:1"
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
                                                  "type": "contract DebtToken",
                                                  "type_conversion": true
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": [
                                                        {
                                                          "typeIdentifier": "t_address",
                                                          "typeString": "address"
                                                        }
                                                      ],
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 3588,
                                                      "type": "type(contract DebtToken)",
                                                      "value": "DebtToken"
                                                    },
                                                    "id": 810,
                                                    "name": "Identifier",
                                                    "src": "2646:9:1"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 720,
                                                      "type": "address",
                                                      "value": "newAddress"
                                                    },
                                                    "id": 811,
                                                    "name": "Identifier",
                                                    "src": "2656:10:1"
                                                  }
                                                ],
                                                "id": 812,
                                                "name": "FunctionCall",
                                                "src": "2646:21:1"
                                              }
                                            ],
                                            "id": 813,
                                            "name": "Assignment",
                                            "src": "2634:33:1"
                                          }
                                        ],
                                        "id": 814,
                                        "name": "ExpressionStatement",
                                        "src": "2634:33:1"
                                      }
                                    ],
                                    "id": 815,
                                    "name": "Block",
                                    "src": "2519:159:1"
                                  },
                                  {
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "commonType": {
                                            "typeIdentifier": "t_enum$_ContractType_$642",
                                            "typeString": "enum ContractRegistry.ContractType"
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
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 718,
                                              "type": "enum ContractRegistry.ContractType",
                                              "value": "contractType"
                                            },
                                            "id": 816,
                                            "name": "Identifier",
                                            "src": "2688:12:1"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": true,
                                              "lValueRequested": false,
                                              "member_name": "RepaymentRouter",
                                              "referencedDeclaration": null,
                                              "type": "enum ContractRegistry.ContractType"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 642,
                                                  "type": "type(enum ContractRegistry.ContractType)",
                                                  "value": "ContractType"
                                                },
                                                "id": 817,
                                                "name": "Identifier",
                                                "src": "2704:12:1"
                                              }
                                            ],
                                            "id": 818,
                                            "name": "MemberAccess",
                                            "src": "2704:28:1"
                                          }
                                        ],
                                        "id": 819,
                                        "name": "BinaryOperation",
                                        "src": "2688:44:1"
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
                                                  "type": "address"
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 726,
                                                      "type": "address",
                                                      "value": "oldAddress"
                                                    },
                                                    "id": 820,
                                                    "name": "Identifier",
                                                    "src": "2748:10:1"
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
                                                      "type": "address",
                                                      "type_conversion": true
                                                    },
                                                    "children": [
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": [
                                                            {
                                                              "typeIdentifier": "t_contract$_RepaymentRouter_$4755",
                                                              "typeString": "contract RepaymentRouter"
                                                            }
                                                          ],
                                                          "isConstant": false,
                                                          "isLValue": false,
                                                          "isPure": true,
                                                          "lValueRequested": false,
                                                          "type": "type(address)",
                                                          "value": "address"
                                                        },
                                                        "id": 821,
                                                        "name": "ElementaryTypeNameExpression",
                                                        "src": "2761:7:1"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 652,
                                                          "type": "contract RepaymentRouter",
                                                          "value": "repaymentRouter"
                                                        },
                                                        "id": 822,
                                                        "name": "Identifier",
                                                        "src": "2769:15:1"
                                                      }
                                                    ],
                                                    "id": 823,
                                                    "name": "FunctionCall",
                                                    "src": "2761:24:1"
                                                  }
                                                ],
                                                "id": 824,
                                                "name": "Assignment",
                                                "src": "2748:37:1"
                                              }
                                            ],
                                            "id": 825,
                                            "name": "ExpressionStatement",
                                            "src": "2748:37:1"
                                          },
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
                                                          "typeIdentifier": "t_address",
                                                          "typeString": "address"
                                                        },
                                                        {
                                                          "typeIdentifier": "t_address",
                                                          "typeString": "address"
                                                        }
                                                      ],
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 922,
                                                      "type": "function (address,address) pure",
                                                      "value": "validateNewAddress"
                                                    },
                                                    "id": 826,
                                                    "name": "Identifier",
                                                    "src": "2799:18:1"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 720,
                                                      "type": "address",
                                                      "value": "newAddress"
                                                    },
                                                    "id": 827,
                                                    "name": "Identifier",
                                                    "src": "2818:10:1"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 726,
                                                      "type": "address",
                                                      "value": "oldAddress"
                                                    },
                                                    "id": 828,
                                                    "name": "Identifier",
                                                    "src": "2830:10:1"
                                                  }
                                                ],
                                                "id": 829,
                                                "name": "FunctionCall",
                                                "src": "2799:42:1"
                                              }
                                            ],
                                            "id": 830,
                                            "name": "ExpressionStatement",
                                            "src": "2799:42:1"
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
                                                  "type": "contract RepaymentRouter"
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 652,
                                                      "type": "contract RepaymentRouter",
                                                      "value": "repaymentRouter"
                                                    },
                                                    "id": 831,
                                                    "name": "Identifier",
                                                    "src": "2855:15:1"
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
                                                      "type": "contract RepaymentRouter",
                                                      "type_conversion": true
                                                    },
                                                    "children": [
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": [
                                                            {
                                                              "typeIdentifier": "t_address",
                                                              "typeString": "address"
                                                            }
                                                          ],
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 4755,
                                                          "type": "type(contract RepaymentRouter)",
                                                          "value": "RepaymentRouter"
                                                        },
                                                        "id": 832,
                                                        "name": "Identifier",
                                                        "src": "2873:15:1"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 720,
                                                          "type": "address",
                                                          "value": "newAddress"
                                                        },
                                                        "id": 833,
                                                        "name": "Identifier",
                                                        "src": "2889:10:1"
                                                      }
                                                    ],
                                                    "id": 834,
                                                    "name": "FunctionCall",
                                                    "src": "2873:27:1"
                                                  }
                                                ],
                                                "id": 835,
                                                "name": "Assignment",
                                                "src": "2855:45:1"
                                              }
                                            ],
                                            "id": 836,
                                            "name": "ExpressionStatement",
                                            "src": "2855:45:1"
                                          }
                                        ],
                                        "id": 837,
                                        "name": "Block",
                                        "src": "2734:177:1"
                                      },
                                      {
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "commonType": {
                                                "typeIdentifier": "t_enum$_ContractType_$642",
                                                "typeString": "enum ContractRegistry.ContractType"
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
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 718,
                                                  "type": "enum ContractRegistry.ContractType",
                                                  "value": "contractType"
                                                },
                                                "id": 838,
                                                "name": "Identifier",
                                                "src": "2921:12:1"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "isConstant": false,
                                                  "isLValue": false,
                                                  "isPure": true,
                                                  "lValueRequested": false,
                                                  "member_name": "TokenRegistry",
                                                  "referencedDeclaration": null,
                                                  "type": "enum ContractRegistry.ContractType"
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 642,
                                                      "type": "type(enum ContractRegistry.ContractType)",
                                                      "value": "ContractType"
                                                    },
                                                    "id": 839,
                                                    "name": "Identifier",
                                                    "src": "2937:12:1"
                                                  }
                                                ],
                                                "id": 840,
                                                "name": "MemberAccess",
                                                "src": "2937:26:1"
                                              }
                                            ],
                                            "id": 841,
                                            "name": "BinaryOperation",
                                            "src": "2921:42:1"
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
                                                      "type": "address"
                                                    },
                                                    "children": [
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 726,
                                                          "type": "address",
                                                          "value": "oldAddress"
                                                        },
                                                        "id": 842,
                                                        "name": "Identifier",
                                                        "src": "2979:10:1"
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
                                                          "type": "address",
                                                          "type_conversion": true
                                                        },
                                                        "children": [
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": [
                                                                {
                                                                  "typeIdentifier": "t_contract$_TokenRegistry_$5161",
                                                                  "typeString": "contract TokenRegistry"
                                                                }
                                                              ],
                                                              "isConstant": false,
                                                              "isLValue": false,
                                                              "isPure": true,
                                                              "lValueRequested": false,
                                                              "type": "type(address)",
                                                              "value": "address"
                                                            },
                                                            "id": 843,
                                                            "name": "ElementaryTypeNameExpression",
                                                            "src": "2992:7:1"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 654,
                                                              "type": "contract TokenRegistry",
                                                              "value": "tokenRegistry"
                                                            },
                                                            "id": 844,
                                                            "name": "Identifier",
                                                            "src": "3000:13:1"
                                                          }
                                                        ],
                                                        "id": 845,
                                                        "name": "FunctionCall",
                                                        "src": "2992:22:1"
                                                      }
                                                    ],
                                                    "id": 846,
                                                    "name": "Assignment",
                                                    "src": "2979:35:1"
                                                  }
                                                ],
                                                "id": 847,
                                                "name": "ExpressionStatement",
                                                "src": "2979:35:1"
                                              },
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
                                                              "typeIdentifier": "t_address",
                                                              "typeString": "address"
                                                            },
                                                            {
                                                              "typeIdentifier": "t_address",
                                                              "typeString": "address"
                                                            }
                                                          ],
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 922,
                                                          "type": "function (address,address) pure",
                                                          "value": "validateNewAddress"
                                                        },
                                                        "id": 848,
                                                        "name": "Identifier",
                                                        "src": "3028:18:1"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 720,
                                                          "type": "address",
                                                          "value": "newAddress"
                                                        },
                                                        "id": 849,
                                                        "name": "Identifier",
                                                        "src": "3047:10:1"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 726,
                                                          "type": "address",
                                                          "value": "oldAddress"
                                                        },
                                                        "id": 850,
                                                        "name": "Identifier",
                                                        "src": "3059:10:1"
                                                      }
                                                    ],
                                                    "id": 851,
                                                    "name": "FunctionCall",
                                                    "src": "3028:42:1"
                                                  }
                                                ],
                                                "id": 852,
                                                "name": "ExpressionStatement",
                                                "src": "3028:42:1"
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
                                                      "type": "contract TokenRegistry"
                                                    },
                                                    "children": [
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 654,
                                                          "type": "contract TokenRegistry",
                                                          "value": "tokenRegistry"
                                                        },
                                                        "id": 853,
                                                        "name": "Identifier",
                                                        "src": "3084:13:1"
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
                                                          "type": "contract TokenRegistry",
                                                          "type_conversion": true
                                                        },
                                                        "children": [
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": [
                                                                {
                                                                  "typeIdentifier": "t_address",
                                                                  "typeString": "address"
                                                                }
                                                              ],
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 5161,
                                                              "type": "type(contract TokenRegistry)",
                                                              "value": "TokenRegistry"
                                                            },
                                                            "id": 854,
                                                            "name": "Identifier",
                                                            "src": "3100:13:1"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 720,
                                                              "type": "address",
                                                              "value": "newAddress"
                                                            },
                                                            "id": 855,
                                                            "name": "Identifier",
                                                            "src": "3114:10:1"
                                                          }
                                                        ],
                                                        "id": 856,
                                                        "name": "FunctionCall",
                                                        "src": "3100:25:1"
                                                      }
                                                    ],
                                                    "id": 857,
                                                    "name": "Assignment",
                                                    "src": "3084:41:1"
                                                  }
                                                ],
                                                "id": 858,
                                                "name": "ExpressionStatement",
                                                "src": "3084:41:1"
                                              }
                                            ],
                                            "id": 859,
                                            "name": "Block",
                                            "src": "2965:171:1"
                                          },
                                          {
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "commonType": {
                                                    "typeIdentifier": "t_enum$_ContractType_$642",
                                                    "typeString": "enum ContractRegistry.ContractType"
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
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 718,
                                                      "type": "enum ContractRegistry.ContractType",
                                                      "value": "contractType"
                                                    },
                                                    "id": 860,
                                                    "name": "Identifier",
                                                    "src": "3146:12:1"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "isConstant": false,
                                                      "isLValue": false,
                                                      "isPure": true,
                                                      "lValueRequested": false,
                                                      "member_name": "TokenTransferProxy",
                                                      "referencedDeclaration": null,
                                                      "type": "enum ContractRegistry.ContractType"
                                                    },
                                                    "children": [
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 642,
                                                          "type": "type(enum ContractRegistry.ContractType)",
                                                          "value": "ContractType"
                                                        },
                                                        "id": 861,
                                                        "name": "Identifier",
                                                        "src": "3162:12:1"
                                                      }
                                                    ],
                                                    "id": 862,
                                                    "name": "MemberAccess",
                                                    "src": "3162:31:1"
                                                  }
                                                ],
                                                "id": 863,
                                                "name": "BinaryOperation",
                                                "src": "3146:47:1"
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
                                                          "type": "address"
                                                        },
                                                        "children": [
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 726,
                                                              "type": "address",
                                                              "value": "oldAddress"
                                                            },
                                                            "id": 864,
                                                            "name": "Identifier",
                                                            "src": "3209:10:1"
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
                                                              "type": "address",
                                                              "type_conversion": true
                                                            },
                                                            "children": [
                                                              {
                                                                "attributes": {
                                                                  "argumentTypes": [
                                                                    {
                                                                      "typeIdentifier": "t_contract$_TokenTransferProxy_$5254",
                                                                      "typeString": "contract TokenTransferProxy"
                                                                    }
                                                                  ],
                                                                  "isConstant": false,
                                                                  "isLValue": false,
                                                                  "isPure": true,
                                                                  "lValueRequested": false,
                                                                  "type": "type(address)",
                                                                  "value": "address"
                                                                },
                                                                "id": 865,
                                                                "name": "ElementaryTypeNameExpression",
                                                                "src": "3222:7:1"
                                                              },
                                                              {
                                                                "attributes": {
                                                                  "argumentTypes": null,
                                                                  "overloadedDeclarations": [
                                                                    null
                                                                  ],
                                                                  "referencedDeclaration": 656,
                                                                  "type": "contract TokenTransferProxy",
                                                                  "value": "tokenTransferProxy"
                                                                },
                                                                "id": 866,
                                                                "name": "Identifier",
                                                                "src": "3230:18:1"
                                                              }
                                                            ],
                                                            "id": 867,
                                                            "name": "FunctionCall",
                                                            "src": "3222:27:1"
                                                          }
                                                        ],
                                                        "id": 868,
                                                        "name": "Assignment",
                                                        "src": "3209:40:1"
                                                      }
                                                    ],
                                                    "id": 869,
                                                    "name": "ExpressionStatement",
                                                    "src": "3209:40:1"
                                                  },
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
                                                                  "typeIdentifier": "t_address",
                                                                  "typeString": "address"
                                                                },
                                                                {
                                                                  "typeIdentifier": "t_address",
                                                                  "typeString": "address"
                                                                }
                                                              ],
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 922,
                                                              "type": "function (address,address) pure",
                                                              "value": "validateNewAddress"
                                                            },
                                                            "id": 870,
                                                            "name": "Identifier",
                                                            "src": "3263:18:1"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 720,
                                                              "type": "address",
                                                              "value": "newAddress"
                                                            },
                                                            "id": 871,
                                                            "name": "Identifier",
                                                            "src": "3282:10:1"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 726,
                                                              "type": "address",
                                                              "value": "oldAddress"
                                                            },
                                                            "id": 872,
                                                            "name": "Identifier",
                                                            "src": "3294:10:1"
                                                          }
                                                        ],
                                                        "id": 873,
                                                        "name": "FunctionCall",
                                                        "src": "3263:42:1"
                                                      }
                                                    ],
                                                    "id": 874,
                                                    "name": "ExpressionStatement",
                                                    "src": "3263:42:1"
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
                                                          "type": "contract TokenTransferProxy"
                                                        },
                                                        "children": [
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 656,
                                                              "type": "contract TokenTransferProxy",
                                                              "value": "tokenTransferProxy"
                                                            },
                                                            "id": 875,
                                                            "name": "Identifier",
                                                            "src": "3319:18:1"
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
                                                              "type": "contract TokenTransferProxy",
                                                              "type_conversion": true
                                                            },
                                                            "children": [
                                                              {
                                                                "attributes": {
                                                                  "argumentTypes": [
                                                                    {
                                                                      "typeIdentifier": "t_address",
                                                                      "typeString": "address"
                                                                    }
                                                                  ],
                                                                  "overloadedDeclarations": [
                                                                    null
                                                                  ],
                                                                  "referencedDeclaration": 5254,
                                                                  "type": "type(contract TokenTransferProxy)",
                                                                  "value": "TokenTransferProxy"
                                                                },
                                                                "id": 876,
                                                                "name": "Identifier",
                                                                "src": "3340:18:1"
                                                              },
                                                              {
                                                                "attributes": {
                                                                  "argumentTypes": null,
                                                                  "overloadedDeclarations": [
                                                                    null
                                                                  ],
                                                                  "referencedDeclaration": 720,
                                                                  "type": "address",
                                                                  "value": "newAddress"
                                                                },
                                                                "id": 877,
                                                                "name": "Identifier",
                                                                "src": "3359:10:1"
                                                              }
                                                            ],
                                                            "id": 878,
                                                            "name": "FunctionCall",
                                                            "src": "3340:30:1"
                                                          }
                                                        ],
                                                        "id": 879,
                                                        "name": "Assignment",
                                                        "src": "3319:51:1"
                                                      }
                                                    ],
                                                    "id": 880,
                                                    "name": "ExpressionStatement",
                                                    "src": "3319:51:1"
                                                  }
                                                ],
                                                "id": 881,
                                                "name": "Block",
                                                "src": "3195:186:1"
                                              },
                                              {
                                                "children": [
                                                  {
                                                    "children": [
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "arguments": [
                                                            null
                                                          ],
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
                                                                null
                                                              ],
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 15885,
                                                              "type": "function () pure",
                                                              "value": "revert"
                                                            },
                                                            "id": 882,
                                                            "name": "Identifier",
                                                            "src": "3401:6:1"
                                                          }
                                                        ],
                                                        "id": 883,
                                                        "name": "FunctionCall",
                                                        "src": "3401:8:1"
                                                      }
                                                    ],
                                                    "id": 884,
                                                    "name": "ExpressionStatement",
                                                    "src": "3401:8:1"
                                                  }
                                                ],
                                                "id": 885,
                                                "name": "Block",
                                                "src": "3387:33:1"
                                              }
                                            ],
                                            "id": 886,
                                            "name": "IfStatement",
                                            "src": "3142:278:1"
                                          }
                                        ],
                                        "id": 887,
                                        "name": "IfStatement",
                                        "src": "2917:503:1"
                                      }
                                    ],
                                    "id": 888,
                                    "name": "IfStatement",
                                    "src": "2684:736:1"
                                  }
                                ],
                                "id": 889,
                                "name": "IfStatement",
                                "src": "2475:945:1"
                              }
                            ],
                            "id": 890,
                            "name": "IfStatement",
                            "src": "2254:1166:1"
                          }
                        ],
                        "id": 891,
                        "name": "IfStatement",
                        "src": "2041:1379:1"
                      }
                    ],
                    "id": 892,
                    "name": "IfStatement",
                    "src": "1812:1608:1"
                  },
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
                                  "typeIdentifier": "t_enum$_ContractType_$642",
                                  "typeString": "enum ContractRegistry.ContractType"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 634,
                              "type": "function (enum ContractRegistry.ContractType,address,address)",
                              "value": "ContractAddressUpdated"
                            },
                            "id": 893,
                            "name": "Identifier",
                            "src": "3430:22:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 718,
                              "type": "enum ContractRegistry.ContractType",
                              "value": "contractType"
                            },
                            "id": 894,
                            "name": "Identifier",
                            "src": "3453:12:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 726,
                              "type": "address",
                              "value": "oldAddress"
                            },
                            "id": 895,
                            "name": "Identifier",
                            "src": "3467:10:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 720,
                              "type": "address",
                              "value": "newAddress"
                            },
                            "id": 896,
                            "name": "Identifier",
                            "src": "3479:10:1"
                          }
                        ],
                        "id": 897,
                        "name": "FunctionCall",
                        "src": "3430:60:1"
                      }
                    ],
                    "id": 898,
                    "name": "ExpressionStatement",
                    "src": "3430:60:1"
                  }
                ],
                "id": 899,
                "name": "Block",
                "src": "1773:1724:1"
              }
            ],
            "id": 900,
            "name": "FunctionDefinition",
            "src": "1644:1853:1"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "validateNewAddress",
              "payable": false,
              "scope": 923,
              "stateMutability": "pure",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "newAddress",
                      "scope": 922,
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
                        "id": 901,
                        "name": "ElementaryTypeName",
                        "src": "3540:7:1"
                      }
                    ],
                    "id": 902,
                    "name": "VariableDeclaration",
                    "src": "3540:18:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "oldAddress",
                      "scope": 922,
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
                        "id": 903,
                        "name": "ElementaryTypeName",
                        "src": "3568:7:1"
                      }
                    ],
                    "id": 904,
                    "name": "VariableDeclaration",
                    "src": "3568:18:1"
                  }
                ],
                "id": 905,
                "name": "ParameterList",
                "src": "3530:62:1"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 906,
                "name": "ParameterList",
                "src": "3627:0:1"
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
                              "referencedDeclaration": 15884,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 907,
                            "name": "Identifier",
                            "src": "3637:7:1"
                          },
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
                              "operator": "!=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 902,
                                  "type": "address",
                                  "value": "newAddress"
                                },
                                "id": 908,
                                "name": "Identifier",
                                "src": "3645:10:1"
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
                                    "id": 909,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "3659:7:1"
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
                                    "id": 910,
                                    "name": "Literal",
                                    "src": "3667:1:1"
                                  }
                                ],
                                "id": 911,
                                "name": "FunctionCall",
                                "src": "3659:10:1"
                              }
                            ],
                            "id": 912,
                            "name": "BinaryOperation",
                            "src": "3645:24:1"
                          }
                        ],
                        "id": 913,
                        "name": "FunctionCall",
                        "src": "3637:33:1"
                      }
                    ],
                    "id": 914,
                    "name": "ExpressionStatement",
                    "src": "3637:33:1"
                  },
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
                              "referencedDeclaration": 15884,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 915,
                            "name": "Identifier",
                            "src": "3719:7:1"
                          },
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
                              "operator": "!=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 902,
                                  "type": "address",
                                  "value": "newAddress"
                                },
                                "id": 916,
                                "name": "Identifier",
                                "src": "3727:10:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 904,
                                  "type": "address",
                                  "value": "oldAddress"
                                },
                                "id": 917,
                                "name": "Identifier",
                                "src": "3741:10:1"
                              }
                            ],
                            "id": 918,
                            "name": "BinaryOperation",
                            "src": "3727:24:1"
                          }
                        ],
                        "id": 919,
                        "name": "FunctionCall",
                        "src": "3719:33:1"
                      }
                    ],
                    "id": 920,
                    "name": "ExpressionStatement",
                    "src": "3719:33:1"
                  }
                ],
                "id": 921,
                "name": "Block",
                "src": "3627:175:1"
              }
            ],
            "id": 922,
            "name": "FunctionDefinition",
            "src": "3503:299:1"
          }
        ],
        "id": 923,
        "name": "ContractDefinition",
        "src": "298:3506:1"
      }
    ],
    "id": 924,
    "name": "SourceUnit",
    "src": "0:3805:1"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {
    "1": {
      "events": {
        "0xea5852cbfaa20064a0ffec7659e5b7178c40ecc51d8788b6981bfa062bc6e788": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "contractType",
              "type": "uint8"
            },
            {
              "indexed": true,
              "name": "oldAddress",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "newAddress",
              "type": "address"
            }
          ],
          "name": "ContractAddressUpdated",
          "type": "event"
        },
        "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0": {
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
      },
      "links": {},
      "address": "0x10512440113cb6cb613be403135876d2e0a42c0b"
    },
    "42": {
      "events": {
        "0xea5852cbfaa20064a0ffec7659e5b7178c40ecc51d8788b6981bfa062bc6e788": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "contractType",
              "type": "uint8"
            },
            {
              "indexed": true,
              "name": "oldAddress",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "newAddress",
              "type": "address"
            }
          ],
          "name": "ContractAddressUpdated",
          "type": "event"
        },
        "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0": {
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
      },
      "links": {},
      "address": "0xe1ccba52a8f7c4885ef10b10c3ba438072bd96e1"
    },
    "70": {
      "events": {
        "0xea5852cbfaa20064a0ffec7659e5b7178c40ecc51d8788b6981bfa062bc6e788": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "contractType",
              "type": "uint8"
            },
            {
              "indexed": true,
              "name": "oldAddress",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "newAddress",
              "type": "address"
            }
          ],
          "name": "ContractAddressUpdated",
          "type": "event"
        },
        "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0": {
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
      },
      "links": {},
      "address": "0xe2b372dd182cc5608772bf11e20af8a1f94bd899"
    }
  },
  "schemaVersion": "1.0.1",
  "updatedAt": "2019-03-12T22:10:52.368Z"
}