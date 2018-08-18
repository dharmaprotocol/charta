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
      "name": "erc721Collateralizer",
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
      "constant": true,
      "inputs": [],
      "name": "erc721TokenRegistry",
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
          "name": "_erc721Collateralizer",
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
          "name": "_erc721tokenRegistry",
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
  "bytecode": "0x6060604052341561000f57600080fd5b6040516101208061112383398101604052808051906020019091908051906020019091908051906020019091908051906020019091908051906020019091908051906020019091908051906020019091908051906020019091908051906020019091905050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555088600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555087600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555086600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555085600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555084600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050505050505050610e0e806103156000396000f3006060604052600436106100ba576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063079dd4b7146100bf5780630eefdbad146101145780632f866f73146101695780636fa9d056146101be5780637903539614610213578063869f0511146102685780638da5cb5b146102bd5780639d23c4c714610312578063bfa723c514610367578063e2aa46bb146103bc578063f2fde38b14610401578063f8d898981461043a575b600080fd5b34156100ca57600080fd5b6100d261048f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561011f57600080fd5b6101276104b5565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561017457600080fd5b61017c6104db565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156101c957600080fd5b6101d1610501565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561021e57600080fd5b610226610527565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561027357600080fd5b61027b61054d565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156102c857600080fd5b6102d0610573565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561031d57600080fd5b610325610598565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561037257600080fd5b61037a6105be565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156103c757600080fd5b6103ff600480803560ff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506105e4565b005b341561040c57600080fd5b610438600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610bec565b005b341561044557600080fd5b61044d610d41565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561064157600080fd5b6000600881111561064e57fe5b83600881111561065a57fe5b14156106d557600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905061068f8282610d67565b81600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610b81565b600160088111156106e257fe5b8360088111156106ee57fe5b141561076957600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506107238282610d67565b81600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610b80565b6002600881111561077657fe5b83600881111561078257fe5b14156107fd57600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506107b78282610d67565b81600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610b7f565b6003600881111561080a57fe5b83600881111561081657fe5b141561089157600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905061084b8282610d67565b81600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610b7e565b6004600881111561089e57fe5b8360088111156108aa57fe5b141561092557600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506108df8282610d67565b81600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610b7d565b6005600881111561093257fe5b83600881111561093e57fe5b14156109b957600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506109738282610d67565b81600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610b7c565b600660088111156109c657fe5b8360088111156109d257fe5b1415610a4d57600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050610a078282610d67565b81600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610b7b565b60076008811115610a5a57fe5b836008811115610a6657fe5b1415610ae157600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050610a9b8282610d67565b81600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610b7a565b600880811115610aed57fe5b836008811115610af957fe5b1415610b7457600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050610b2e8282610d67565b81600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610b79565b600080fd5b5b5b5b5b5b5b5b5b8173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16846008811115610bbb57fe5b7fea5852cbfaa20064a0ffec7659e5b7178c40ecc51d8788b6981bfa062bc6e78860405160405180910390a4505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610c4757600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515610c8357600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515610da357600080fd5b8073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515610dde57600080fd5b50505600a165627a7a7230582091a3bb27fd5c86a4152cc7c44c824a9dfcc64e6bb28a44e7d09f2a2f555c91c90029",
  "deployedBytecode": "0x6060604052600436106100ba576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063079dd4b7146100bf5780630eefdbad146101145780632f866f73146101695780636fa9d056146101be5780637903539614610213578063869f0511146102685780638da5cb5b146102bd5780639d23c4c714610312578063bfa723c514610367578063e2aa46bb146103bc578063f2fde38b14610401578063f8d898981461043a575b600080fd5b34156100ca57600080fd5b6100d261048f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561011f57600080fd5b6101276104b5565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561017457600080fd5b61017c6104db565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156101c957600080fd5b6101d1610501565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561021e57600080fd5b610226610527565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561027357600080fd5b61027b61054d565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156102c857600080fd5b6102d0610573565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561031d57600080fd5b610325610598565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561037257600080fd5b61037a6105be565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156103c757600080fd5b6103ff600480803560ff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506105e4565b005b341561040c57600080fd5b610438600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610bec565b005b341561044557600080fd5b61044d610d41565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561064157600080fd5b6000600881111561064e57fe5b83600881111561065a57fe5b14156106d557600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905061068f8282610d67565b81600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610b81565b600160088111156106e257fe5b8360088111156106ee57fe5b141561076957600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506107238282610d67565b81600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610b80565b6002600881111561077657fe5b83600881111561078257fe5b14156107fd57600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506107b78282610d67565b81600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610b7f565b6003600881111561080a57fe5b83600881111561081657fe5b141561089157600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905061084b8282610d67565b81600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610b7e565b6004600881111561089e57fe5b8360088111156108aa57fe5b141561092557600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506108df8282610d67565b81600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610b7d565b6005600881111561093257fe5b83600881111561093e57fe5b14156109b957600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506109738282610d67565b81600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610b7c565b600660088111156109c657fe5b8360088111156109d257fe5b1415610a4d57600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050610a078282610d67565b81600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610b7b565b60076008811115610a5a57fe5b836008811115610a6657fe5b1415610ae157600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050610a9b8282610d67565b81600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610b7a565b600880811115610aed57fe5b836008811115610af957fe5b1415610b7457600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050610b2e8282610d67565b81600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610b79565b600080fd5b5b5b5b5b5b5b5b5b8173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16846008811115610bbb57fe5b7fea5852cbfaa20064a0ffec7659e5b7178c40ecc51d8788b6981bfa062bc6e78860405160405180910390a4505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610c4757600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515610c8357600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515610da357600080fd5b8073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515610dde57600080fd5b50505600a165627a7a7230582091a3bb27fd5c86a4152cc7c44c824a9dfcc64e6bb28a44e7d09f2a2f555c91c90029",
  "sourceMap": "371:4387:1:-;;;1209:893;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;509:10:36;501:5;;:18;;;;;;;;;;;;;;;;;;1603:15:1;1571:14;;:48;;;;;;;;;;;;;;;;;;1673:21;1629:20;;:66;;;;;;;;;;;;;;;;;;1729:11;1705:10;;:36;;;;;;;;;;;;;;;;;;1779:13;1751:12;;:42;;;;;;;;;;;;;;;;;;1825:10;1803:9;;:33;;;;;;;;;;;;;;;;;;1880:16;1846:15;;:51;;;;;;;;;;;;;;;;;;1937:14;1907:13;;:45;;;;;;;;;;;;;;;;;;2004:20;1962:19;;:63;;;;;;;;;;;;;;;;;;2075:19;2035:18;;:60;;;;;;;;;;;;;;;;;;1209:893;;;;;;;;;371:4387;;;;;;",
  "deployedSourceMap": "371:4387:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;917:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1158:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;951:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1022:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;863:48;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;821:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;238:20:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1066:34:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1106:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2108:2343;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;832:169:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;990:26:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;917:28;;;;;;;;;;;;;:::o;1158:44::-;;;;;;;;;;;;;:::o;951:33::-;;;;;;;;;;;;;:::o;1022:38::-;;;;;;;;;;;;;:::o;863:48::-;;;;;;;;;;;;;:::o;821:36::-;;;;;;;;;;;;;:::o;238:20:36:-;;;;;;;;;;;;;:::o;1066:34:1:-;;;;;;;;;;;;;:::o;1106:46::-;;;;;;;;;;;;;:::o;2108:2343::-;2247:18;653:5:36;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;2296:27:1;2280:43;;;;;;;;:12;:43;;;;;;;;;2276:2098;;;2360:14;;;;;;;;;;;2339:36;;2389:42;2408:10;2420;2389:18;:42::i;:::-;2477:10;2445:14;;:43;;;;;;;;;;;;;;;;;;2276:2098;;;2525:33;2509:49;;;;;;;;:12;:49;;;;;;;;;2505:1869;;;2595:20;;;;;;;;;;;2574:42;;2630;2649:10;2661;2630:18;:42::i;:::-;2730:10;2686:20;;:55;;;;;;;;;;;;;;;;;;2505:1869;;;2778:23;2762:39;;;;;;;;:12;:39;;;;;;;;;2758:1616;;;2838:10;;;;;;;;;;;2817:32;;2863:42;2882:10;2894;2863:18;:42::i;:::-;2943:10;2919;;:35;;;;;;;;;;;;;;;;;;2758:1616;;;2991:25;2975:41;;;;;;;;:12;:41;;;;;;;;;2971:1403;;;3053:12;;;;;;;;;;;3032:34;;3080:42;3099:10;3111;3080:18;:42::i;:::-;3164:10;3136:12;;:39;;;;;;;;;;;;;;;;;;2971:1403;;;3212:22;3196:38;;;;;;;;:12;:38;;;;;;;;;3192:1182;;;3271:9;;;;;;;;;;;3250:31;;3295:42;3314:10;3326;3295:18;:42::i;:::-;3373:10;3351:9;;:33;;;;;;;;;;;;;;;;;;3192:1182;;;3421:28;3405:44;;;;;;;;:12;:44;;;;;;;;;3401:973;;;3486:15;;;;;;;;;;;3465:37;;3516:42;3535:10;3547;3516:18;:42::i;:::-;3606:10;3572:15;;:45;;;;;;;;;;;;;;;;;;3401:973;;;3654:26;3638:42;;;;;;;;:12;:42;;;;;;;;;3634:740;;;3717:13;;;;;;;;;;;3696:35;;3745:42;3764:10;3776;3745:18;:42::i;:::-;3831:10;3801:13;;:41;;;;;;;;;;;;;;;;;;3634:740;;;3879:32;3863:48;;;;;;;;:12;:48;;;;;;;;;3859:515;;;3948:19;;;;;;;;;;;3927:41;;3982:42;4001:10;4013;3982:18;:42::i;:::-;4068:10;4038:13;;:41;;;;;;;;;;;;;;;;;;3859:515;;;4116:31;4100:47;;;;;;;;:12;:47;;;;;;;;;4096:278;;;4184:18;;;;;;;;;;;4163:40;;4217:42;4236:10;4248;4217:18;:42::i;:::-;4313:10;4273:18;;:51;;;;;;;;;;;;;;;;;;4096:278;;;4355:8;;;4096:278;3859:515;3634:740;3401:973;3192:1182;2971:1403;2758:1616;2505:1869;2276:2098;4433:10;4384:60;;4421:10;4384:60;;4407:12;4384:60;;;;;;;;;;;;;;;;;;2108:2343;;;:::o;832:169:36:-;653:5;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;928:1;908:22;;:8;:22;;;;900:31;;;;;;;;965:8;937:37;;958:5;;;;;;;;;;;937:37;;;;;;;;;;;;988:8;980:5;;:16;;;;;;;;;;;;;;;;;;832:169;:::o;990:26:1:-;;;;;;;;;;;;;:::o;4457:299::-;4621:1;4599:24;;:10;:24;;;;4591:33;;;;;;;;4695:10;4681:24;;:10;:24;;;;4673:33;;;;;;;;4457:299;;:::o",
  "source": "pragma solidity 0.4.18;\n\nimport \"zeppelin-solidity/contracts/ownership/Ownable.sol\";\n\nimport \"./Collateralizer.sol\";\nimport \"./ERC721Collateralizer.sol\";\nimport \"./DebtKernel.sol\";\nimport \"./DebtRegistry.sol\";\nimport \"./DebtToken.sol\";\nimport \"./RepaymentRouter.sol\";\nimport \"./TokenRegistry.sol\";\nimport \"./ERC721TokenRegistry.sol\";\nimport \"./TokenTransferProxy.sol\";\n\n\ncontract ContractRegistry is Ownable {\n\n    event ContractAddressUpdated(\n        ContractType indexed contractType,\n        address indexed oldAddress,\n        address indexed newAddress\n    );\n\n    enum ContractType {\n        Collateralizer,\n        ERC721Collateralizer,\n        DebtKernel,\n        DebtRegistry,\n        DebtToken,\n        RepaymentRouter,\n        TokenRegistry,\n        ERC721TokenRegistry,\n        TokenTransferProxy\n    }\n\n    Collateralizer public collateralizer;\n    ERC721Collateralizer public erc721Collateralizer;\n    DebtKernel public debtKernel;\n    DebtRegistry public  debtRegistry;\n    DebtToken public debtToken;\n    RepaymentRouter public repaymentRouter;\n    TokenRegistry public tokenRegistry;\n    ERC721TokenRegistry public erc721TokenRegistry;\n    TokenTransferProxy public tokenTransferProxy;\n\n    function ContractRegistry(\n        address _collateralizer,\n        address _erc721Collateralizer,\n        address _debtKernel,\n        address _debtRegistry,\n        address _debtToken,\n        address _repaymentRouter,\n        address _tokenRegistry,\n        address _erc721tokenRegistry,\n        address _tokenTransferProxy\n    )\n        public\n    {\n        collateralizer = Collateralizer(_collateralizer);\n        erc721Collateralizer = ERC721Collateralizer(_erc721Collateralizer);\n        debtKernel = DebtKernel(_debtKernel);\n        debtRegistry = DebtRegistry(_debtRegistry);\n        debtToken = DebtToken(_debtToken);\n        repaymentRouter = RepaymentRouter(_repaymentRouter);\n        tokenRegistry = TokenRegistry(_tokenRegistry);\n        erc721TokenRegistry = ERC721TokenRegistry(_erc721tokenRegistry);\n        tokenTransferProxy = TokenTransferProxy(_tokenTransferProxy);\n    }\n\n    function updateAddress(\n        ContractType contractType,\n        address newAddress\n    )\n        public\n        onlyOwner\n    {\n        address oldAddress;\n\n        if (contractType == ContractType.Collateralizer) {\n            oldAddress = address(collateralizer);\n            validateNewAddress(newAddress, oldAddress);\n            collateralizer = Collateralizer(newAddress);\n        } else if (contractType == ContractType.ERC721Collateralizer) {\n            oldAddress = address(erc721Collateralizer);\n            validateNewAddress(newAddress, oldAddress);\n            erc721Collateralizer = ERC721Collateralizer(newAddress);\n        } else if (contractType == ContractType.DebtKernel) {\n            oldAddress = address(debtKernel);\n            validateNewAddress(newAddress, oldAddress);\n            debtKernel = DebtKernel(newAddress);\n        } else if (contractType == ContractType.DebtRegistry) {\n            oldAddress = address(debtRegistry);\n            validateNewAddress(newAddress, oldAddress);\n            debtRegistry = DebtRegistry(newAddress);\n        } else if (contractType == ContractType.DebtToken) {\n            oldAddress = address(debtToken);\n            validateNewAddress(newAddress, oldAddress);\n            debtToken = DebtToken(newAddress);\n        } else if (contractType == ContractType.RepaymentRouter) {\n            oldAddress = address(repaymentRouter);\n            validateNewAddress(newAddress, oldAddress);\n            repaymentRouter = RepaymentRouter(newAddress);\n        } else if (contractType == ContractType.TokenRegistry) {\n            oldAddress = address(tokenRegistry);\n            validateNewAddress(newAddress, oldAddress);\n            tokenRegistry = TokenRegistry(newAddress);\n        } else if (contractType == ContractType.ERC721TokenRegistry) {\n            oldAddress = address(erc721TokenRegistry);\n            validateNewAddress(newAddress, oldAddress);\n            tokenRegistry = TokenRegistry(newAddress);\n        } else if (contractType == ContractType.TokenTransferProxy) {\n            oldAddress = address(tokenTransferProxy);\n            validateNewAddress(newAddress, oldAddress);\n            tokenTransferProxy = TokenTransferProxy(newAddress);\n        } else {\n            revert();\n        }\n\n        ContractAddressUpdated(contractType, oldAddress, newAddress);\n    }\n\n    function validateNewAddress(\n        address newAddress,\n        address oldAddress\n    )\n        internal\n        pure\n    {\n        require(newAddress != address(0)); // new address cannot be null address.\n        require(newAddress != oldAddress); // new address cannot be existing address.\n    }\n}\n",
  "sourcePath": "/Users/graemeboy/Dharma/charta/contracts/ContractRegistry.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/graemeboy/Dharma/charta/contracts/ContractRegistry.sol",
      "exportedSymbols": {
        "ContractRegistry": [
          993
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
          "SourceUnit": 9842,
          "absolutePath": "zeppelin-solidity/contracts/ownership/Ownable.sol",
          "file": "zeppelin-solidity/contracts/ownership/Ownable.sol",
          "scope": 994,
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
          "absolutePath": "/Users/graemeboy/Dharma/charta/contracts/Collateralizer.sol",
          "file": "./Collateralizer.sol",
          "scope": 994,
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
          "SourceUnit": 3592,
          "absolutePath": "/Users/graemeboy/Dharma/charta/contracts/ERC721Collateralizer.sol",
          "file": "./ERC721Collateralizer.sol",
          "scope": 994,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 619,
        "name": "ImportDirective",
        "src": "117:36:1"
      },
      {
        "attributes": {
          "SourceUnit": 2133,
          "absolutePath": "/Users/graemeboy/Dharma/charta/contracts/DebtKernel.sol",
          "file": "./DebtKernel.sol",
          "scope": 994,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 620,
        "name": "ImportDirective",
        "src": "154:26:1"
      },
      {
        "attributes": {
          "SourceUnit": 2661,
          "absolutePath": "/Users/graemeboy/Dharma/charta/contracts/DebtRegistry.sol",
          "file": "./DebtRegistry.sol",
          "scope": 994,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 621,
        "name": "ImportDirective",
        "src": "181:28:1"
      },
      {
        "attributes": {
          "SourceUnit": 3043,
          "absolutePath": "/Users/graemeboy/Dharma/charta/contracts/DebtToken.sol",
          "file": "./DebtToken.sol",
          "scope": 994,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 622,
        "name": "ImportDirective",
        "src": "210:25:1"
      },
      {
        "attributes": {
          "SourceUnit": 4133,
          "absolutePath": "/Users/graemeboy/Dharma/charta/contracts/RepaymentRouter.sol",
          "file": "./RepaymentRouter.sol",
          "scope": 994,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 623,
        "name": "ImportDirective",
        "src": "236:31:1"
      },
      {
        "attributes": {
          "SourceUnit": 4539,
          "absolutePath": "/Users/graemeboy/Dharma/charta/contracts/TokenRegistry.sol",
          "file": "./TokenRegistry.sol",
          "scope": 994,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 624,
        "name": "ImportDirective",
        "src": "268:29:1"
      },
      {
        "attributes": {
          "SourceUnit": 3883,
          "absolutePath": "/Users/graemeboy/Dharma/charta/contracts/ERC721TokenRegistry.sol",
          "file": "./ERC721TokenRegistry.sol",
          "scope": 994,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 625,
        "name": "ImportDirective",
        "src": "298:35:1"
      },
      {
        "attributes": {
          "SourceUnit": 4632,
          "absolutePath": "/Users/graemeboy/Dharma/charta/contracts/TokenTransferProxy.sol",
          "file": "./TokenTransferProxy.sol",
          "scope": 994,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 626,
        "name": "ImportDirective",
        "src": "334:34:1"
      },
      {
        "attributes": {
          "contractDependencies": [
            9841
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            993,
            9841
          ],
          "name": "ContractRegistry",
          "scope": 994
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
                  "referencedDeclaration": 9841,
                  "type": "contract Ownable"
                },
                "id": 627,
                "name": "UserDefinedTypeName",
                "src": "400:7:1"
              }
            ],
            "id": 628,
            "name": "InheritanceSpecifier",
            "src": "400:7:1"
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
                      "scope": 636,
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
                          "referencedDeclaration": 646,
                          "type": "enum ContractRegistry.ContractType"
                        },
                        "id": 629,
                        "name": "UserDefinedTypeName",
                        "src": "453:12:1"
                      }
                    ],
                    "id": 630,
                    "name": "VariableDeclaration",
                    "src": "453:33:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "oldAddress",
                      "scope": 636,
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
                        "src": "496:7:1"
                      }
                    ],
                    "id": 632,
                    "name": "VariableDeclaration",
                    "src": "496:26:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "newAddress",
                      "scope": 636,
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
                        "id": 633,
                        "name": "ElementaryTypeName",
                        "src": "532:7:1"
                      }
                    ],
                    "id": 634,
                    "name": "VariableDeclaration",
                    "src": "532:26:1"
                  }
                ],
                "id": 635,
                "name": "ParameterList",
                "src": "443:121:1"
              }
            ],
            "id": 636,
            "name": "EventDefinition",
            "src": "415:150:1"
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
                "id": 637,
                "name": "EnumValue",
                "src": "599:14:1"
              },
              {
                "attributes": {
                  "name": "ERC721Collateralizer"
                },
                "id": 638,
                "name": "EnumValue",
                "src": "623:20:1"
              },
              {
                "attributes": {
                  "name": "DebtKernel"
                },
                "id": 639,
                "name": "EnumValue",
                "src": "653:10:1"
              },
              {
                "attributes": {
                  "name": "DebtRegistry"
                },
                "id": 640,
                "name": "EnumValue",
                "src": "673:12:1"
              },
              {
                "attributes": {
                  "name": "DebtToken"
                },
                "id": 641,
                "name": "EnumValue",
                "src": "695:9:1"
              },
              {
                "attributes": {
                  "name": "RepaymentRouter"
                },
                "id": 642,
                "name": "EnumValue",
                "src": "714:15:1"
              },
              {
                "attributes": {
                  "name": "TokenRegistry"
                },
                "id": 643,
                "name": "EnumValue",
                "src": "739:13:1"
              },
              {
                "attributes": {
                  "name": "ERC721TokenRegistry"
                },
                "id": 644,
                "name": "EnumValue",
                "src": "762:19:1"
              },
              {
                "attributes": {
                  "name": "TokenTransferProxy"
                },
                "id": 645,
                "name": "EnumValue",
                "src": "791:18:1"
              }
            ],
            "id": 646,
            "name": "EnumDefinition",
            "src": "571:244:1"
          },
          {
            "attributes": {
              "constant": false,
              "name": "collateralizer",
              "scope": 993,
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
                "id": 647,
                "name": "UserDefinedTypeName",
                "src": "821:14:1"
              }
            ],
            "id": 648,
            "name": "VariableDeclaration",
            "src": "821:36:1"
          },
          {
            "attributes": {
              "constant": false,
              "name": "erc721Collateralizer",
              "scope": 993,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "contract ERC721Collateralizer",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "ERC721Collateralizer",
                  "referencedDeclaration": 3591,
                  "type": "contract ERC721Collateralizer"
                },
                "id": 649,
                "name": "UserDefinedTypeName",
                "src": "863:20:1"
              }
            ],
            "id": 650,
            "name": "VariableDeclaration",
            "src": "863:48:1"
          },
          {
            "attributes": {
              "constant": false,
              "name": "debtKernel",
              "scope": 993,
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
                  "referencedDeclaration": 2132,
                  "type": "contract DebtKernel"
                },
                "id": 651,
                "name": "UserDefinedTypeName",
                "src": "917:10:1"
              }
            ],
            "id": 652,
            "name": "VariableDeclaration",
            "src": "917:28:1"
          },
          {
            "attributes": {
              "constant": false,
              "name": "debtRegistry",
              "scope": 993,
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
                  "referencedDeclaration": 2660,
                  "type": "contract DebtRegistry"
                },
                "id": 653,
                "name": "UserDefinedTypeName",
                "src": "951:12:1"
              }
            ],
            "id": 654,
            "name": "VariableDeclaration",
            "src": "951:33:1"
          },
          {
            "attributes": {
              "constant": false,
              "name": "debtToken",
              "scope": 993,
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
                  "referencedDeclaration": 3042,
                  "type": "contract DebtToken"
                },
                "id": 655,
                "name": "UserDefinedTypeName",
                "src": "990:9:1"
              }
            ],
            "id": 656,
            "name": "VariableDeclaration",
            "src": "990:26:1"
          },
          {
            "attributes": {
              "constant": false,
              "name": "repaymentRouter",
              "scope": 993,
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
                  "referencedDeclaration": 4132,
                  "type": "contract RepaymentRouter"
                },
                "id": 657,
                "name": "UserDefinedTypeName",
                "src": "1022:15:1"
              }
            ],
            "id": 658,
            "name": "VariableDeclaration",
            "src": "1022:38:1"
          },
          {
            "attributes": {
              "constant": false,
              "name": "tokenRegistry",
              "scope": 993,
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
                  "referencedDeclaration": 4538,
                  "type": "contract TokenRegistry"
                },
                "id": 659,
                "name": "UserDefinedTypeName",
                "src": "1066:13:1"
              }
            ],
            "id": 660,
            "name": "VariableDeclaration",
            "src": "1066:34:1"
          },
          {
            "attributes": {
              "constant": false,
              "name": "erc721TokenRegistry",
              "scope": 993,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "contract ERC721TokenRegistry",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "ERC721TokenRegistry",
                  "referencedDeclaration": 3882,
                  "type": "contract ERC721TokenRegistry"
                },
                "id": 661,
                "name": "UserDefinedTypeName",
                "src": "1106:19:1"
              }
            ],
            "id": 662,
            "name": "VariableDeclaration",
            "src": "1106:46:1"
          },
          {
            "attributes": {
              "constant": false,
              "name": "tokenTransferProxy",
              "scope": 993,
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
                  "referencedDeclaration": 4631,
                  "type": "contract TokenTransferProxy"
                },
                "id": 663,
                "name": "UserDefinedTypeName",
                "src": "1158:18:1"
              }
            ],
            "id": 664,
            "name": "VariableDeclaration",
            "src": "1158:44:1"
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
              "scope": 993,
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
                      "scope": 740,
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
                        "src": "1244:7:1"
                      }
                    ],
                    "id": 666,
                    "name": "VariableDeclaration",
                    "src": "1244:23:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_erc721Collateralizer",
                      "scope": 740,
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
                        "src": "1277:7:1"
                      }
                    ],
                    "id": 668,
                    "name": "VariableDeclaration",
                    "src": "1277:29:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_debtKernel",
                      "scope": 740,
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
                        "src": "1316:7:1"
                      }
                    ],
                    "id": 670,
                    "name": "VariableDeclaration",
                    "src": "1316:19:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_debtRegistry",
                      "scope": 740,
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
                        "id": 671,
                        "name": "ElementaryTypeName",
                        "src": "1345:7:1"
                      }
                    ],
                    "id": 672,
                    "name": "VariableDeclaration",
                    "src": "1345:21:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_debtToken",
                      "scope": 740,
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
                        "id": 673,
                        "name": "ElementaryTypeName",
                        "src": "1376:7:1"
                      }
                    ],
                    "id": 674,
                    "name": "VariableDeclaration",
                    "src": "1376:18:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_repaymentRouter",
                      "scope": 740,
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
                        "id": 675,
                        "name": "ElementaryTypeName",
                        "src": "1404:7:1"
                      }
                    ],
                    "id": 676,
                    "name": "VariableDeclaration",
                    "src": "1404:24:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenRegistry",
                      "scope": 740,
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
                        "id": 677,
                        "name": "ElementaryTypeName",
                        "src": "1438:7:1"
                      }
                    ],
                    "id": 678,
                    "name": "VariableDeclaration",
                    "src": "1438:22:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_erc721tokenRegistry",
                      "scope": 740,
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
                        "id": 679,
                        "name": "ElementaryTypeName",
                        "src": "1470:7:1"
                      }
                    ],
                    "id": 680,
                    "name": "VariableDeclaration",
                    "src": "1470:28:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenTransferProxy",
                      "scope": 740,
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
                        "id": 681,
                        "name": "ElementaryTypeName",
                        "src": "1508:7:1"
                      }
                    ],
                    "id": 682,
                    "name": "VariableDeclaration",
                    "src": "1508:27:1"
                  }
                ],
                "id": 683,
                "name": "ParameterList",
                "src": "1234:307:1"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 684,
                "name": "ParameterList",
                "src": "1561:0:1"
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
                              "referencedDeclaration": 648,
                              "type": "contract Collateralizer",
                              "value": "collateralizer"
                            },
                            "id": 685,
                            "name": "Identifier",
                            "src": "1571:14:1"
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
                                "id": 686,
                                "name": "Identifier",
                                "src": "1588:14:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 666,
                                  "type": "address",
                                  "value": "_collateralizer"
                                },
                                "id": 687,
                                "name": "Identifier",
                                "src": "1603:15:1"
                              }
                            ],
                            "id": 688,
                            "name": "FunctionCall",
                            "src": "1588:31:1"
                          }
                        ],
                        "id": 689,
                        "name": "Assignment",
                        "src": "1571:48:1"
                      }
                    ],
                    "id": 690,
                    "name": "ExpressionStatement",
                    "src": "1571:48:1"
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
                          "type": "contract ERC721Collateralizer"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 650,
                              "type": "contract ERC721Collateralizer",
                              "value": "erc721Collateralizer"
                            },
                            "id": 691,
                            "name": "Identifier",
                            "src": "1629:20:1"
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
                              "type": "contract ERC721Collateralizer",
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
                                  "referencedDeclaration": 3591,
                                  "type": "type(contract ERC721Collateralizer)",
                                  "value": "ERC721Collateralizer"
                                },
                                "id": 692,
                                "name": "Identifier",
                                "src": "1652:20:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 668,
                                  "type": "address",
                                  "value": "_erc721Collateralizer"
                                },
                                "id": 693,
                                "name": "Identifier",
                                "src": "1673:21:1"
                              }
                            ],
                            "id": 694,
                            "name": "FunctionCall",
                            "src": "1652:43:1"
                          }
                        ],
                        "id": 695,
                        "name": "Assignment",
                        "src": "1629:66:1"
                      }
                    ],
                    "id": 696,
                    "name": "ExpressionStatement",
                    "src": "1629:66:1"
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
                              "referencedDeclaration": 652,
                              "type": "contract DebtKernel",
                              "value": "debtKernel"
                            },
                            "id": 697,
                            "name": "Identifier",
                            "src": "1705:10:1"
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
                                  "referencedDeclaration": 2132,
                                  "type": "type(contract DebtKernel)",
                                  "value": "DebtKernel"
                                },
                                "id": 698,
                                "name": "Identifier",
                                "src": "1718:10:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 670,
                                  "type": "address",
                                  "value": "_debtKernel"
                                },
                                "id": 699,
                                "name": "Identifier",
                                "src": "1729:11:1"
                              }
                            ],
                            "id": 700,
                            "name": "FunctionCall",
                            "src": "1718:23:1"
                          }
                        ],
                        "id": 701,
                        "name": "Assignment",
                        "src": "1705:36:1"
                      }
                    ],
                    "id": 702,
                    "name": "ExpressionStatement",
                    "src": "1705:36:1"
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
                              "referencedDeclaration": 654,
                              "type": "contract DebtRegistry",
                              "value": "debtRegistry"
                            },
                            "id": 703,
                            "name": "Identifier",
                            "src": "1751:12:1"
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
                                  "referencedDeclaration": 2660,
                                  "type": "type(contract DebtRegistry)",
                                  "value": "DebtRegistry"
                                },
                                "id": 704,
                                "name": "Identifier",
                                "src": "1766:12:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 672,
                                  "type": "address",
                                  "value": "_debtRegistry"
                                },
                                "id": 705,
                                "name": "Identifier",
                                "src": "1779:13:1"
                              }
                            ],
                            "id": 706,
                            "name": "FunctionCall",
                            "src": "1766:27:1"
                          }
                        ],
                        "id": 707,
                        "name": "Assignment",
                        "src": "1751:42:1"
                      }
                    ],
                    "id": 708,
                    "name": "ExpressionStatement",
                    "src": "1751:42:1"
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
                              "referencedDeclaration": 656,
                              "type": "contract DebtToken",
                              "value": "debtToken"
                            },
                            "id": 709,
                            "name": "Identifier",
                            "src": "1803:9:1"
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
                                  "referencedDeclaration": 3042,
                                  "type": "type(contract DebtToken)",
                                  "value": "DebtToken"
                                },
                                "id": 710,
                                "name": "Identifier",
                                "src": "1815:9:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 674,
                                  "type": "address",
                                  "value": "_debtToken"
                                },
                                "id": 711,
                                "name": "Identifier",
                                "src": "1825:10:1"
                              }
                            ],
                            "id": 712,
                            "name": "FunctionCall",
                            "src": "1815:21:1"
                          }
                        ],
                        "id": 713,
                        "name": "Assignment",
                        "src": "1803:33:1"
                      }
                    ],
                    "id": 714,
                    "name": "ExpressionStatement",
                    "src": "1803:33:1"
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
                              "referencedDeclaration": 658,
                              "type": "contract RepaymentRouter",
                              "value": "repaymentRouter"
                            },
                            "id": 715,
                            "name": "Identifier",
                            "src": "1846:15:1"
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
                                  "referencedDeclaration": 4132,
                                  "type": "type(contract RepaymentRouter)",
                                  "value": "RepaymentRouter"
                                },
                                "id": 716,
                                "name": "Identifier",
                                "src": "1864:15:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 676,
                                  "type": "address",
                                  "value": "_repaymentRouter"
                                },
                                "id": 717,
                                "name": "Identifier",
                                "src": "1880:16:1"
                              }
                            ],
                            "id": 718,
                            "name": "FunctionCall",
                            "src": "1864:33:1"
                          }
                        ],
                        "id": 719,
                        "name": "Assignment",
                        "src": "1846:51:1"
                      }
                    ],
                    "id": 720,
                    "name": "ExpressionStatement",
                    "src": "1846:51:1"
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
                              "referencedDeclaration": 660,
                              "type": "contract TokenRegistry",
                              "value": "tokenRegistry"
                            },
                            "id": 721,
                            "name": "Identifier",
                            "src": "1907:13:1"
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
                                  "referencedDeclaration": 4538,
                                  "type": "type(contract TokenRegistry)",
                                  "value": "TokenRegistry"
                                },
                                "id": 722,
                                "name": "Identifier",
                                "src": "1923:13:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 678,
                                  "type": "address",
                                  "value": "_tokenRegistry"
                                },
                                "id": 723,
                                "name": "Identifier",
                                "src": "1937:14:1"
                              }
                            ],
                            "id": 724,
                            "name": "FunctionCall",
                            "src": "1923:29:1"
                          }
                        ],
                        "id": 725,
                        "name": "Assignment",
                        "src": "1907:45:1"
                      }
                    ],
                    "id": 726,
                    "name": "ExpressionStatement",
                    "src": "1907:45:1"
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
                          "type": "contract ERC721TokenRegistry"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 662,
                              "type": "contract ERC721TokenRegistry",
                              "value": "erc721TokenRegistry"
                            },
                            "id": 727,
                            "name": "Identifier",
                            "src": "1962:19:1"
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
                              "type": "contract ERC721TokenRegistry",
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
                                  "referencedDeclaration": 3882,
                                  "type": "type(contract ERC721TokenRegistry)",
                                  "value": "ERC721TokenRegistry"
                                },
                                "id": 728,
                                "name": "Identifier",
                                "src": "1984:19:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 680,
                                  "type": "address",
                                  "value": "_erc721tokenRegistry"
                                },
                                "id": 729,
                                "name": "Identifier",
                                "src": "2004:20:1"
                              }
                            ],
                            "id": 730,
                            "name": "FunctionCall",
                            "src": "1984:41:1"
                          }
                        ],
                        "id": 731,
                        "name": "Assignment",
                        "src": "1962:63:1"
                      }
                    ],
                    "id": 732,
                    "name": "ExpressionStatement",
                    "src": "1962:63:1"
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
                              "referencedDeclaration": 664,
                              "type": "contract TokenTransferProxy",
                              "value": "tokenTransferProxy"
                            },
                            "id": 733,
                            "name": "Identifier",
                            "src": "2035:18:1"
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
                                  "referencedDeclaration": 4631,
                                  "type": "type(contract TokenTransferProxy)",
                                  "value": "TokenTransferProxy"
                                },
                                "id": 734,
                                "name": "Identifier",
                                "src": "2056:18:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 682,
                                  "type": "address",
                                  "value": "_tokenTransferProxy"
                                },
                                "id": 735,
                                "name": "Identifier",
                                "src": "2075:19:1"
                              }
                            ],
                            "id": 736,
                            "name": "FunctionCall",
                            "src": "2056:39:1"
                          }
                        ],
                        "id": 737,
                        "name": "Assignment",
                        "src": "2035:60:1"
                      }
                    ],
                    "id": 738,
                    "name": "ExpressionStatement",
                    "src": "2035:60:1"
                  }
                ],
                "id": 739,
                "name": "Block",
                "src": "1561:541:1"
              }
            ],
            "id": 740,
            "name": "FunctionDefinition",
            "src": "1209:893:1"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "updateAddress",
              "payable": false,
              "scope": 993,
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
                      "scope": 970,
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
                          "referencedDeclaration": 646,
                          "type": "enum ContractRegistry.ContractType"
                        },
                        "id": 741,
                        "name": "UserDefinedTypeName",
                        "src": "2140:12:1"
                      }
                    ],
                    "id": 742,
                    "name": "VariableDeclaration",
                    "src": "2140:25:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "newAddress",
                      "scope": 970,
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
                        "id": 743,
                        "name": "ElementaryTypeName",
                        "src": "2175:7:1"
                      }
                    ],
                    "id": 744,
                    "name": "VariableDeclaration",
                    "src": "2175:18:1"
                  }
                ],
                "id": 745,
                "name": "ParameterList",
                "src": "2130:69:1"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 748,
                "name": "ParameterList",
                "src": "2237:0:1"
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
                      "referencedDeclaration": 9815,
                      "type": "modifier ()",
                      "value": "onlyOwner"
                    },
                    "id": 746,
                    "name": "Identifier",
                    "src": "2223:9:1"
                  }
                ],
                "id": 747,
                "name": "ModifierInvocation",
                "src": "2223:9:1"
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
                          "scope": 970,
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
                            "id": 749,
                            "name": "ElementaryTypeName",
                            "src": "2247:7:1"
                          }
                        ],
                        "id": 750,
                        "name": "VariableDeclaration",
                        "src": "2247:18:1"
                      }
                    ],
                    "id": 751,
                    "name": "VariableDeclarationStatement",
                    "src": "2247:18:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_enum$_ContractType_$646",
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
                              "referencedDeclaration": 742,
                              "type": "enum ContractRegistry.ContractType",
                              "value": "contractType"
                            },
                            "id": 752,
                            "name": "Identifier",
                            "src": "2280:12:1"
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
                                  "referencedDeclaration": 646,
                                  "type": "type(enum ContractRegistry.ContractType)",
                                  "value": "ContractType"
                                },
                                "id": 753,
                                "name": "Identifier",
                                "src": "2296:12:1"
                              }
                            ],
                            "id": 754,
                            "name": "MemberAccess",
                            "src": "2296:27:1"
                          }
                        ],
                        "id": 755,
                        "name": "BinaryOperation",
                        "src": "2280:43:1"
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
                                      "referencedDeclaration": 750,
                                      "type": "address",
                                      "value": "oldAddress"
                                    },
                                    "id": 756,
                                    "name": "Identifier",
                                    "src": "2339:10:1"
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
                                        "id": 757,
                                        "name": "ElementaryTypeNameExpression",
                                        "src": "2352:7:1"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 648,
                                          "type": "contract Collateralizer",
                                          "value": "collateralizer"
                                        },
                                        "id": 758,
                                        "name": "Identifier",
                                        "src": "2360:14:1"
                                      }
                                    ],
                                    "id": 759,
                                    "name": "FunctionCall",
                                    "src": "2352:23:1"
                                  }
                                ],
                                "id": 760,
                                "name": "Assignment",
                                "src": "2339:36:1"
                              }
                            ],
                            "id": 761,
                            "name": "ExpressionStatement",
                            "src": "2339:36:1"
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
                                      "referencedDeclaration": 992,
                                      "type": "function (address,address) pure",
                                      "value": "validateNewAddress"
                                    },
                                    "id": 762,
                                    "name": "Identifier",
                                    "src": "2389:18:1"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 744,
                                      "type": "address",
                                      "value": "newAddress"
                                    },
                                    "id": 763,
                                    "name": "Identifier",
                                    "src": "2408:10:1"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 750,
                                      "type": "address",
                                      "value": "oldAddress"
                                    },
                                    "id": 764,
                                    "name": "Identifier",
                                    "src": "2420:10:1"
                                  }
                                ],
                                "id": 765,
                                "name": "FunctionCall",
                                "src": "2389:42:1"
                              }
                            ],
                            "id": 766,
                            "name": "ExpressionStatement",
                            "src": "2389:42:1"
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
                                      "referencedDeclaration": 648,
                                      "type": "contract Collateralizer",
                                      "value": "collateralizer"
                                    },
                                    "id": 767,
                                    "name": "Identifier",
                                    "src": "2445:14:1"
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
                                        "id": 768,
                                        "name": "Identifier",
                                        "src": "2462:14:1"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 744,
                                          "type": "address",
                                          "value": "newAddress"
                                        },
                                        "id": 769,
                                        "name": "Identifier",
                                        "src": "2477:10:1"
                                      }
                                    ],
                                    "id": 770,
                                    "name": "FunctionCall",
                                    "src": "2462:26:1"
                                  }
                                ],
                                "id": 771,
                                "name": "Assignment",
                                "src": "2445:43:1"
                              }
                            ],
                            "id": 772,
                            "name": "ExpressionStatement",
                            "src": "2445:43:1"
                          }
                        ],
                        "id": 773,
                        "name": "Block",
                        "src": "2325:174:1"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_enum$_ContractType_$646",
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
                                  "referencedDeclaration": 742,
                                  "type": "enum ContractRegistry.ContractType",
                                  "value": "contractType"
                                },
                                "id": 774,
                                "name": "Identifier",
                                "src": "2509:12:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "member_name": "ERC721Collateralizer",
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
                                      "referencedDeclaration": 646,
                                      "type": "type(enum ContractRegistry.ContractType)",
                                      "value": "ContractType"
                                    },
                                    "id": 775,
                                    "name": "Identifier",
                                    "src": "2525:12:1"
                                  }
                                ],
                                "id": 776,
                                "name": "MemberAccess",
                                "src": "2525:33:1"
                              }
                            ],
                            "id": 777,
                            "name": "BinaryOperation",
                            "src": "2509:49:1"
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
                                          "referencedDeclaration": 750,
                                          "type": "address",
                                          "value": "oldAddress"
                                        },
                                        "id": 778,
                                        "name": "Identifier",
                                        "src": "2574:10:1"
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
                                                  "typeIdentifier": "t_contract$_ERC721Collateralizer_$3591",
                                                  "typeString": "contract ERC721Collateralizer"
                                                }
                                              ],
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": true,
                                              "lValueRequested": false,
                                              "type": "type(address)",
                                              "value": "address"
                                            },
                                            "id": 779,
                                            "name": "ElementaryTypeNameExpression",
                                            "src": "2587:7:1"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 650,
                                              "type": "contract ERC721Collateralizer",
                                              "value": "erc721Collateralizer"
                                            },
                                            "id": 780,
                                            "name": "Identifier",
                                            "src": "2595:20:1"
                                          }
                                        ],
                                        "id": 781,
                                        "name": "FunctionCall",
                                        "src": "2587:29:1"
                                      }
                                    ],
                                    "id": 782,
                                    "name": "Assignment",
                                    "src": "2574:42:1"
                                  }
                                ],
                                "id": 783,
                                "name": "ExpressionStatement",
                                "src": "2574:42:1"
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
                                          "referencedDeclaration": 992,
                                          "type": "function (address,address) pure",
                                          "value": "validateNewAddress"
                                        },
                                        "id": 784,
                                        "name": "Identifier",
                                        "src": "2630:18:1"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 744,
                                          "type": "address",
                                          "value": "newAddress"
                                        },
                                        "id": 785,
                                        "name": "Identifier",
                                        "src": "2649:10:1"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 750,
                                          "type": "address",
                                          "value": "oldAddress"
                                        },
                                        "id": 786,
                                        "name": "Identifier",
                                        "src": "2661:10:1"
                                      }
                                    ],
                                    "id": 787,
                                    "name": "FunctionCall",
                                    "src": "2630:42:1"
                                  }
                                ],
                                "id": 788,
                                "name": "ExpressionStatement",
                                "src": "2630:42:1"
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
                                      "type": "contract ERC721Collateralizer"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 650,
                                          "type": "contract ERC721Collateralizer",
                                          "value": "erc721Collateralizer"
                                        },
                                        "id": 789,
                                        "name": "Identifier",
                                        "src": "2686:20:1"
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
                                          "type": "contract ERC721Collateralizer",
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
                                              "referencedDeclaration": 3591,
                                              "type": "type(contract ERC721Collateralizer)",
                                              "value": "ERC721Collateralizer"
                                            },
                                            "id": 790,
                                            "name": "Identifier",
                                            "src": "2709:20:1"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 744,
                                              "type": "address",
                                              "value": "newAddress"
                                            },
                                            "id": 791,
                                            "name": "Identifier",
                                            "src": "2730:10:1"
                                          }
                                        ],
                                        "id": 792,
                                        "name": "FunctionCall",
                                        "src": "2709:32:1"
                                      }
                                    ],
                                    "id": 793,
                                    "name": "Assignment",
                                    "src": "2686:55:1"
                                  }
                                ],
                                "id": 794,
                                "name": "ExpressionStatement",
                                "src": "2686:55:1"
                              }
                            ],
                            "id": 795,
                            "name": "Block",
                            "src": "2560:192:1"
                          },
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_enum$_ContractType_$646",
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
                                      "referencedDeclaration": 742,
                                      "type": "enum ContractRegistry.ContractType",
                                      "value": "contractType"
                                    },
                                    "id": 796,
                                    "name": "Identifier",
                                    "src": "2762:12:1"
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
                                          "referencedDeclaration": 646,
                                          "type": "type(enum ContractRegistry.ContractType)",
                                          "value": "ContractType"
                                        },
                                        "id": 797,
                                        "name": "Identifier",
                                        "src": "2778:12:1"
                                      }
                                    ],
                                    "id": 798,
                                    "name": "MemberAccess",
                                    "src": "2778:23:1"
                                  }
                                ],
                                "id": 799,
                                "name": "BinaryOperation",
                                "src": "2762:39:1"
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
                                              "referencedDeclaration": 750,
                                              "type": "address",
                                              "value": "oldAddress"
                                            },
                                            "id": 800,
                                            "name": "Identifier",
                                            "src": "2817:10:1"
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
                                                      "typeIdentifier": "t_contract$_DebtKernel_$2132",
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
                                                "id": 801,
                                                "name": "ElementaryTypeNameExpression",
                                                "src": "2830:7:1"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 652,
                                                  "type": "contract DebtKernel",
                                                  "value": "debtKernel"
                                                },
                                                "id": 802,
                                                "name": "Identifier",
                                                "src": "2838:10:1"
                                              }
                                            ],
                                            "id": 803,
                                            "name": "FunctionCall",
                                            "src": "2830:19:1"
                                          }
                                        ],
                                        "id": 804,
                                        "name": "Assignment",
                                        "src": "2817:32:1"
                                      }
                                    ],
                                    "id": 805,
                                    "name": "ExpressionStatement",
                                    "src": "2817:32:1"
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
                                              "referencedDeclaration": 992,
                                              "type": "function (address,address) pure",
                                              "value": "validateNewAddress"
                                            },
                                            "id": 806,
                                            "name": "Identifier",
                                            "src": "2863:18:1"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 744,
                                              "type": "address",
                                              "value": "newAddress"
                                            },
                                            "id": 807,
                                            "name": "Identifier",
                                            "src": "2882:10:1"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 750,
                                              "type": "address",
                                              "value": "oldAddress"
                                            },
                                            "id": 808,
                                            "name": "Identifier",
                                            "src": "2894:10:1"
                                          }
                                        ],
                                        "id": 809,
                                        "name": "FunctionCall",
                                        "src": "2863:42:1"
                                      }
                                    ],
                                    "id": 810,
                                    "name": "ExpressionStatement",
                                    "src": "2863:42:1"
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
                                              "referencedDeclaration": 652,
                                              "type": "contract DebtKernel",
                                              "value": "debtKernel"
                                            },
                                            "id": 811,
                                            "name": "Identifier",
                                            "src": "2919:10:1"
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
                                                  "referencedDeclaration": 2132,
                                                  "type": "type(contract DebtKernel)",
                                                  "value": "DebtKernel"
                                                },
                                                "id": 812,
                                                "name": "Identifier",
                                                "src": "2932:10:1"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 744,
                                                  "type": "address",
                                                  "value": "newAddress"
                                                },
                                                "id": 813,
                                                "name": "Identifier",
                                                "src": "2943:10:1"
                                              }
                                            ],
                                            "id": 814,
                                            "name": "FunctionCall",
                                            "src": "2932:22:1"
                                          }
                                        ],
                                        "id": 815,
                                        "name": "Assignment",
                                        "src": "2919:35:1"
                                      }
                                    ],
                                    "id": 816,
                                    "name": "ExpressionStatement",
                                    "src": "2919:35:1"
                                  }
                                ],
                                "id": 817,
                                "name": "Block",
                                "src": "2803:162:1"
                              },
                              {
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "commonType": {
                                        "typeIdentifier": "t_enum$_ContractType_$646",
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
                                          "referencedDeclaration": 742,
                                          "type": "enum ContractRegistry.ContractType",
                                          "value": "contractType"
                                        },
                                        "id": 818,
                                        "name": "Identifier",
                                        "src": "2975:12:1"
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
                                              "referencedDeclaration": 646,
                                              "type": "type(enum ContractRegistry.ContractType)",
                                              "value": "ContractType"
                                            },
                                            "id": 819,
                                            "name": "Identifier",
                                            "src": "2991:12:1"
                                          }
                                        ],
                                        "id": 820,
                                        "name": "MemberAccess",
                                        "src": "2991:25:1"
                                      }
                                    ],
                                    "id": 821,
                                    "name": "BinaryOperation",
                                    "src": "2975:41:1"
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
                                                  "referencedDeclaration": 750,
                                                  "type": "address",
                                                  "value": "oldAddress"
                                                },
                                                "id": 822,
                                                "name": "Identifier",
                                                "src": "3032:10:1"
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
                                                          "typeIdentifier": "t_contract$_DebtRegistry_$2660",
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
                                                    "id": 823,
                                                    "name": "ElementaryTypeNameExpression",
                                                    "src": "3045:7:1"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 654,
                                                      "type": "contract DebtRegistry",
                                                      "value": "debtRegistry"
                                                    },
                                                    "id": 824,
                                                    "name": "Identifier",
                                                    "src": "3053:12:1"
                                                  }
                                                ],
                                                "id": 825,
                                                "name": "FunctionCall",
                                                "src": "3045:21:1"
                                              }
                                            ],
                                            "id": 826,
                                            "name": "Assignment",
                                            "src": "3032:34:1"
                                          }
                                        ],
                                        "id": 827,
                                        "name": "ExpressionStatement",
                                        "src": "3032:34:1"
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
                                                  "referencedDeclaration": 992,
                                                  "type": "function (address,address) pure",
                                                  "value": "validateNewAddress"
                                                },
                                                "id": 828,
                                                "name": "Identifier",
                                                "src": "3080:18:1"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 744,
                                                  "type": "address",
                                                  "value": "newAddress"
                                                },
                                                "id": 829,
                                                "name": "Identifier",
                                                "src": "3099:10:1"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 750,
                                                  "type": "address",
                                                  "value": "oldAddress"
                                                },
                                                "id": 830,
                                                "name": "Identifier",
                                                "src": "3111:10:1"
                                              }
                                            ],
                                            "id": 831,
                                            "name": "FunctionCall",
                                            "src": "3080:42:1"
                                          }
                                        ],
                                        "id": 832,
                                        "name": "ExpressionStatement",
                                        "src": "3080:42:1"
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
                                                  "referencedDeclaration": 654,
                                                  "type": "contract DebtRegistry",
                                                  "value": "debtRegistry"
                                                },
                                                "id": 833,
                                                "name": "Identifier",
                                                "src": "3136:12:1"
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
                                                      "referencedDeclaration": 2660,
                                                      "type": "type(contract DebtRegistry)",
                                                      "value": "DebtRegistry"
                                                    },
                                                    "id": 834,
                                                    "name": "Identifier",
                                                    "src": "3151:12:1"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 744,
                                                      "type": "address",
                                                      "value": "newAddress"
                                                    },
                                                    "id": 835,
                                                    "name": "Identifier",
                                                    "src": "3164:10:1"
                                                  }
                                                ],
                                                "id": 836,
                                                "name": "FunctionCall",
                                                "src": "3151:24:1"
                                              }
                                            ],
                                            "id": 837,
                                            "name": "Assignment",
                                            "src": "3136:39:1"
                                          }
                                        ],
                                        "id": 838,
                                        "name": "ExpressionStatement",
                                        "src": "3136:39:1"
                                      }
                                    ],
                                    "id": 839,
                                    "name": "Block",
                                    "src": "3018:168:1"
                                  },
                                  {
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "commonType": {
                                            "typeIdentifier": "t_enum$_ContractType_$646",
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
                                              "referencedDeclaration": 742,
                                              "type": "enum ContractRegistry.ContractType",
                                              "value": "contractType"
                                            },
                                            "id": 840,
                                            "name": "Identifier",
                                            "src": "3196:12:1"
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
                                                  "referencedDeclaration": 646,
                                                  "type": "type(enum ContractRegistry.ContractType)",
                                                  "value": "ContractType"
                                                },
                                                "id": 841,
                                                "name": "Identifier",
                                                "src": "3212:12:1"
                                              }
                                            ],
                                            "id": 842,
                                            "name": "MemberAccess",
                                            "src": "3212:22:1"
                                          }
                                        ],
                                        "id": 843,
                                        "name": "BinaryOperation",
                                        "src": "3196:38:1"
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
                                                      "referencedDeclaration": 750,
                                                      "type": "address",
                                                      "value": "oldAddress"
                                                    },
                                                    "id": 844,
                                                    "name": "Identifier",
                                                    "src": "3250:10:1"
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
                                                              "typeIdentifier": "t_contract$_DebtToken_$3042",
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
                                                        "id": 845,
                                                        "name": "ElementaryTypeNameExpression",
                                                        "src": "3263:7:1"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 656,
                                                          "type": "contract DebtToken",
                                                          "value": "debtToken"
                                                        },
                                                        "id": 846,
                                                        "name": "Identifier",
                                                        "src": "3271:9:1"
                                                      }
                                                    ],
                                                    "id": 847,
                                                    "name": "FunctionCall",
                                                    "src": "3263:18:1"
                                                  }
                                                ],
                                                "id": 848,
                                                "name": "Assignment",
                                                "src": "3250:31:1"
                                              }
                                            ],
                                            "id": 849,
                                            "name": "ExpressionStatement",
                                            "src": "3250:31:1"
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
                                                      "referencedDeclaration": 992,
                                                      "type": "function (address,address) pure",
                                                      "value": "validateNewAddress"
                                                    },
                                                    "id": 850,
                                                    "name": "Identifier",
                                                    "src": "3295:18:1"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 744,
                                                      "type": "address",
                                                      "value": "newAddress"
                                                    },
                                                    "id": 851,
                                                    "name": "Identifier",
                                                    "src": "3314:10:1"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 750,
                                                      "type": "address",
                                                      "value": "oldAddress"
                                                    },
                                                    "id": 852,
                                                    "name": "Identifier",
                                                    "src": "3326:10:1"
                                                  }
                                                ],
                                                "id": 853,
                                                "name": "FunctionCall",
                                                "src": "3295:42:1"
                                              }
                                            ],
                                            "id": 854,
                                            "name": "ExpressionStatement",
                                            "src": "3295:42:1"
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
                                                      "referencedDeclaration": 656,
                                                      "type": "contract DebtToken",
                                                      "value": "debtToken"
                                                    },
                                                    "id": 855,
                                                    "name": "Identifier",
                                                    "src": "3351:9:1"
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
                                                          "referencedDeclaration": 3042,
                                                          "type": "type(contract DebtToken)",
                                                          "value": "DebtToken"
                                                        },
                                                        "id": 856,
                                                        "name": "Identifier",
                                                        "src": "3363:9:1"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 744,
                                                          "type": "address",
                                                          "value": "newAddress"
                                                        },
                                                        "id": 857,
                                                        "name": "Identifier",
                                                        "src": "3373:10:1"
                                                      }
                                                    ],
                                                    "id": 858,
                                                    "name": "FunctionCall",
                                                    "src": "3363:21:1"
                                                  }
                                                ],
                                                "id": 859,
                                                "name": "Assignment",
                                                "src": "3351:33:1"
                                              }
                                            ],
                                            "id": 860,
                                            "name": "ExpressionStatement",
                                            "src": "3351:33:1"
                                          }
                                        ],
                                        "id": 861,
                                        "name": "Block",
                                        "src": "3236:159:1"
                                      },
                                      {
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "commonType": {
                                                "typeIdentifier": "t_enum$_ContractType_$646",
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
                                                  "referencedDeclaration": 742,
                                                  "type": "enum ContractRegistry.ContractType",
                                                  "value": "contractType"
                                                },
                                                "id": 862,
                                                "name": "Identifier",
                                                "src": "3405:12:1"
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
                                                      "referencedDeclaration": 646,
                                                      "type": "type(enum ContractRegistry.ContractType)",
                                                      "value": "ContractType"
                                                    },
                                                    "id": 863,
                                                    "name": "Identifier",
                                                    "src": "3421:12:1"
                                                  }
                                                ],
                                                "id": 864,
                                                "name": "MemberAccess",
                                                "src": "3421:28:1"
                                              }
                                            ],
                                            "id": 865,
                                            "name": "BinaryOperation",
                                            "src": "3405:44:1"
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
                                                          "referencedDeclaration": 750,
                                                          "type": "address",
                                                          "value": "oldAddress"
                                                        },
                                                        "id": 866,
                                                        "name": "Identifier",
                                                        "src": "3465:10:1"
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
                                                                  "typeIdentifier": "t_contract$_RepaymentRouter_$4132",
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
                                                            "id": 867,
                                                            "name": "ElementaryTypeNameExpression",
                                                            "src": "3478:7:1"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 658,
                                                              "type": "contract RepaymentRouter",
                                                              "value": "repaymentRouter"
                                                            },
                                                            "id": 868,
                                                            "name": "Identifier",
                                                            "src": "3486:15:1"
                                                          }
                                                        ],
                                                        "id": 869,
                                                        "name": "FunctionCall",
                                                        "src": "3478:24:1"
                                                      }
                                                    ],
                                                    "id": 870,
                                                    "name": "Assignment",
                                                    "src": "3465:37:1"
                                                  }
                                                ],
                                                "id": 871,
                                                "name": "ExpressionStatement",
                                                "src": "3465:37:1"
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
                                                          "referencedDeclaration": 992,
                                                          "type": "function (address,address) pure",
                                                          "value": "validateNewAddress"
                                                        },
                                                        "id": 872,
                                                        "name": "Identifier",
                                                        "src": "3516:18:1"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 744,
                                                          "type": "address",
                                                          "value": "newAddress"
                                                        },
                                                        "id": 873,
                                                        "name": "Identifier",
                                                        "src": "3535:10:1"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 750,
                                                          "type": "address",
                                                          "value": "oldAddress"
                                                        },
                                                        "id": 874,
                                                        "name": "Identifier",
                                                        "src": "3547:10:1"
                                                      }
                                                    ],
                                                    "id": 875,
                                                    "name": "FunctionCall",
                                                    "src": "3516:42:1"
                                                  }
                                                ],
                                                "id": 876,
                                                "name": "ExpressionStatement",
                                                "src": "3516:42:1"
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
                                                          "referencedDeclaration": 658,
                                                          "type": "contract RepaymentRouter",
                                                          "value": "repaymentRouter"
                                                        },
                                                        "id": 877,
                                                        "name": "Identifier",
                                                        "src": "3572:15:1"
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
                                                              "referencedDeclaration": 4132,
                                                              "type": "type(contract RepaymentRouter)",
                                                              "value": "RepaymentRouter"
                                                            },
                                                            "id": 878,
                                                            "name": "Identifier",
                                                            "src": "3590:15:1"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 744,
                                                              "type": "address",
                                                              "value": "newAddress"
                                                            },
                                                            "id": 879,
                                                            "name": "Identifier",
                                                            "src": "3606:10:1"
                                                          }
                                                        ],
                                                        "id": 880,
                                                        "name": "FunctionCall",
                                                        "src": "3590:27:1"
                                                      }
                                                    ],
                                                    "id": 881,
                                                    "name": "Assignment",
                                                    "src": "3572:45:1"
                                                  }
                                                ],
                                                "id": 882,
                                                "name": "ExpressionStatement",
                                                "src": "3572:45:1"
                                              }
                                            ],
                                            "id": 883,
                                            "name": "Block",
                                            "src": "3451:177:1"
                                          },
                                          {
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "commonType": {
                                                    "typeIdentifier": "t_enum$_ContractType_$646",
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
                                                      "referencedDeclaration": 742,
                                                      "type": "enum ContractRegistry.ContractType",
                                                      "value": "contractType"
                                                    },
                                                    "id": 884,
                                                    "name": "Identifier",
                                                    "src": "3638:12:1"
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
                                                          "referencedDeclaration": 646,
                                                          "type": "type(enum ContractRegistry.ContractType)",
                                                          "value": "ContractType"
                                                        },
                                                        "id": 885,
                                                        "name": "Identifier",
                                                        "src": "3654:12:1"
                                                      }
                                                    ],
                                                    "id": 886,
                                                    "name": "MemberAccess",
                                                    "src": "3654:26:1"
                                                  }
                                                ],
                                                "id": 887,
                                                "name": "BinaryOperation",
                                                "src": "3638:42:1"
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
                                                              "referencedDeclaration": 750,
                                                              "type": "address",
                                                              "value": "oldAddress"
                                                            },
                                                            "id": 888,
                                                            "name": "Identifier",
                                                            "src": "3696:10:1"
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
                                                                      "typeIdentifier": "t_contract$_TokenRegistry_$4538",
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
                                                                "id": 889,
                                                                "name": "ElementaryTypeNameExpression",
                                                                "src": "3709:7:1"
                                                              },
                                                              {
                                                                "attributes": {
                                                                  "argumentTypes": null,
                                                                  "overloadedDeclarations": [
                                                                    null
                                                                  ],
                                                                  "referencedDeclaration": 660,
                                                                  "type": "contract TokenRegistry",
                                                                  "value": "tokenRegistry"
                                                                },
                                                                "id": 890,
                                                                "name": "Identifier",
                                                                "src": "3717:13:1"
                                                              }
                                                            ],
                                                            "id": 891,
                                                            "name": "FunctionCall",
                                                            "src": "3709:22:1"
                                                          }
                                                        ],
                                                        "id": 892,
                                                        "name": "Assignment",
                                                        "src": "3696:35:1"
                                                      }
                                                    ],
                                                    "id": 893,
                                                    "name": "ExpressionStatement",
                                                    "src": "3696:35:1"
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
                                                              "referencedDeclaration": 992,
                                                              "type": "function (address,address) pure",
                                                              "value": "validateNewAddress"
                                                            },
                                                            "id": 894,
                                                            "name": "Identifier",
                                                            "src": "3745:18:1"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 744,
                                                              "type": "address",
                                                              "value": "newAddress"
                                                            },
                                                            "id": 895,
                                                            "name": "Identifier",
                                                            "src": "3764:10:1"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 750,
                                                              "type": "address",
                                                              "value": "oldAddress"
                                                            },
                                                            "id": 896,
                                                            "name": "Identifier",
                                                            "src": "3776:10:1"
                                                          }
                                                        ],
                                                        "id": 897,
                                                        "name": "FunctionCall",
                                                        "src": "3745:42:1"
                                                      }
                                                    ],
                                                    "id": 898,
                                                    "name": "ExpressionStatement",
                                                    "src": "3745:42:1"
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
                                                              "referencedDeclaration": 660,
                                                              "type": "contract TokenRegistry",
                                                              "value": "tokenRegistry"
                                                            },
                                                            "id": 899,
                                                            "name": "Identifier",
                                                            "src": "3801:13:1"
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
                                                                  "referencedDeclaration": 4538,
                                                                  "type": "type(contract TokenRegistry)",
                                                                  "value": "TokenRegistry"
                                                                },
                                                                "id": 900,
                                                                "name": "Identifier",
                                                                "src": "3817:13:1"
                                                              },
                                                              {
                                                                "attributes": {
                                                                  "argumentTypes": null,
                                                                  "overloadedDeclarations": [
                                                                    null
                                                                  ],
                                                                  "referencedDeclaration": 744,
                                                                  "type": "address",
                                                                  "value": "newAddress"
                                                                },
                                                                "id": 901,
                                                                "name": "Identifier",
                                                                "src": "3831:10:1"
                                                              }
                                                            ],
                                                            "id": 902,
                                                            "name": "FunctionCall",
                                                            "src": "3817:25:1"
                                                          }
                                                        ],
                                                        "id": 903,
                                                        "name": "Assignment",
                                                        "src": "3801:41:1"
                                                      }
                                                    ],
                                                    "id": 904,
                                                    "name": "ExpressionStatement",
                                                    "src": "3801:41:1"
                                                  }
                                                ],
                                                "id": 905,
                                                "name": "Block",
                                                "src": "3682:171:1"
                                              },
                                              {
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "commonType": {
                                                        "typeIdentifier": "t_enum$_ContractType_$646",
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
                                                          "referencedDeclaration": 742,
                                                          "type": "enum ContractRegistry.ContractType",
                                                          "value": "contractType"
                                                        },
                                                        "id": 906,
                                                        "name": "Identifier",
                                                        "src": "3863:12:1"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "isConstant": false,
                                                          "isLValue": false,
                                                          "isPure": true,
                                                          "lValueRequested": false,
                                                          "member_name": "ERC721TokenRegistry",
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
                                                              "referencedDeclaration": 646,
                                                              "type": "type(enum ContractRegistry.ContractType)",
                                                              "value": "ContractType"
                                                            },
                                                            "id": 907,
                                                            "name": "Identifier",
                                                            "src": "3879:12:1"
                                                          }
                                                        ],
                                                        "id": 908,
                                                        "name": "MemberAccess",
                                                        "src": "3879:32:1"
                                                      }
                                                    ],
                                                    "id": 909,
                                                    "name": "BinaryOperation",
                                                    "src": "3863:48:1"
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
                                                                  "referencedDeclaration": 750,
                                                                  "type": "address",
                                                                  "value": "oldAddress"
                                                                },
                                                                "id": 910,
                                                                "name": "Identifier",
                                                                "src": "3927:10:1"
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
                                                                          "typeIdentifier": "t_contract$_ERC721TokenRegistry_$3882",
                                                                          "typeString": "contract ERC721TokenRegistry"
                                                                        }
                                                                      ],
                                                                      "isConstant": false,
                                                                      "isLValue": false,
                                                                      "isPure": true,
                                                                      "lValueRequested": false,
                                                                      "type": "type(address)",
                                                                      "value": "address"
                                                                    },
                                                                    "id": 911,
                                                                    "name": "ElementaryTypeNameExpression",
                                                                    "src": "3940:7:1"
                                                                  },
                                                                  {
                                                                    "attributes": {
                                                                      "argumentTypes": null,
                                                                      "overloadedDeclarations": [
                                                                        null
                                                                      ],
                                                                      "referencedDeclaration": 662,
                                                                      "type": "contract ERC721TokenRegistry",
                                                                      "value": "erc721TokenRegistry"
                                                                    },
                                                                    "id": 912,
                                                                    "name": "Identifier",
                                                                    "src": "3948:19:1"
                                                                  }
                                                                ],
                                                                "id": 913,
                                                                "name": "FunctionCall",
                                                                "src": "3940:28:1"
                                                              }
                                                            ],
                                                            "id": 914,
                                                            "name": "Assignment",
                                                            "src": "3927:41:1"
                                                          }
                                                        ],
                                                        "id": 915,
                                                        "name": "ExpressionStatement",
                                                        "src": "3927:41:1"
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
                                                                  "referencedDeclaration": 992,
                                                                  "type": "function (address,address) pure",
                                                                  "value": "validateNewAddress"
                                                                },
                                                                "id": 916,
                                                                "name": "Identifier",
                                                                "src": "3982:18:1"
                                                              },
                                                              {
                                                                "attributes": {
                                                                  "argumentTypes": null,
                                                                  "overloadedDeclarations": [
                                                                    null
                                                                  ],
                                                                  "referencedDeclaration": 744,
                                                                  "type": "address",
                                                                  "value": "newAddress"
                                                                },
                                                                "id": 917,
                                                                "name": "Identifier",
                                                                "src": "4001:10:1"
                                                              },
                                                              {
                                                                "attributes": {
                                                                  "argumentTypes": null,
                                                                  "overloadedDeclarations": [
                                                                    null
                                                                  ],
                                                                  "referencedDeclaration": 750,
                                                                  "type": "address",
                                                                  "value": "oldAddress"
                                                                },
                                                                "id": 918,
                                                                "name": "Identifier",
                                                                "src": "4013:10:1"
                                                              }
                                                            ],
                                                            "id": 919,
                                                            "name": "FunctionCall",
                                                            "src": "3982:42:1"
                                                          }
                                                        ],
                                                        "id": 920,
                                                        "name": "ExpressionStatement",
                                                        "src": "3982:42:1"
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
                                                                  "referencedDeclaration": 660,
                                                                  "type": "contract TokenRegistry",
                                                                  "value": "tokenRegistry"
                                                                },
                                                                "id": 921,
                                                                "name": "Identifier",
                                                                "src": "4038:13:1"
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
                                                                      "referencedDeclaration": 4538,
                                                                      "type": "type(contract TokenRegistry)",
                                                                      "value": "TokenRegistry"
                                                                    },
                                                                    "id": 922,
                                                                    "name": "Identifier",
                                                                    "src": "4054:13:1"
                                                                  },
                                                                  {
                                                                    "attributes": {
                                                                      "argumentTypes": null,
                                                                      "overloadedDeclarations": [
                                                                        null
                                                                      ],
                                                                      "referencedDeclaration": 744,
                                                                      "type": "address",
                                                                      "value": "newAddress"
                                                                    },
                                                                    "id": 923,
                                                                    "name": "Identifier",
                                                                    "src": "4068:10:1"
                                                                  }
                                                                ],
                                                                "id": 924,
                                                                "name": "FunctionCall",
                                                                "src": "4054:25:1"
                                                              }
                                                            ],
                                                            "id": 925,
                                                            "name": "Assignment",
                                                            "src": "4038:41:1"
                                                          }
                                                        ],
                                                        "id": 926,
                                                        "name": "ExpressionStatement",
                                                        "src": "4038:41:1"
                                                      }
                                                    ],
                                                    "id": 927,
                                                    "name": "Block",
                                                    "src": "3913:177:1"
                                                  },
                                                  {
                                                    "children": [
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "commonType": {
                                                            "typeIdentifier": "t_enum$_ContractType_$646",
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
                                                              "referencedDeclaration": 742,
                                                              "type": "enum ContractRegistry.ContractType",
                                                              "value": "contractType"
                                                            },
                                                            "id": 928,
                                                            "name": "Identifier",
                                                            "src": "4100:12:1"
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
                                                                  "referencedDeclaration": 646,
                                                                  "type": "type(enum ContractRegistry.ContractType)",
                                                                  "value": "ContractType"
                                                                },
                                                                "id": 929,
                                                                "name": "Identifier",
                                                                "src": "4116:12:1"
                                                              }
                                                            ],
                                                            "id": 930,
                                                            "name": "MemberAccess",
                                                            "src": "4116:31:1"
                                                          }
                                                        ],
                                                        "id": 931,
                                                        "name": "BinaryOperation",
                                                        "src": "4100:47:1"
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
                                                                      "referencedDeclaration": 750,
                                                                      "type": "address",
                                                                      "value": "oldAddress"
                                                                    },
                                                                    "id": 932,
                                                                    "name": "Identifier",
                                                                    "src": "4163:10:1"
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
                                                                              "typeIdentifier": "t_contract$_TokenTransferProxy_$4631",
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
                                                                        "id": 933,
                                                                        "name": "ElementaryTypeNameExpression",
                                                                        "src": "4176:7:1"
                                                                      },
                                                                      {
                                                                        "attributes": {
                                                                          "argumentTypes": null,
                                                                          "overloadedDeclarations": [
                                                                            null
                                                                          ],
                                                                          "referencedDeclaration": 664,
                                                                          "type": "contract TokenTransferProxy",
                                                                          "value": "tokenTransferProxy"
                                                                        },
                                                                        "id": 934,
                                                                        "name": "Identifier",
                                                                        "src": "4184:18:1"
                                                                      }
                                                                    ],
                                                                    "id": 935,
                                                                    "name": "FunctionCall",
                                                                    "src": "4176:27:1"
                                                                  }
                                                                ],
                                                                "id": 936,
                                                                "name": "Assignment",
                                                                "src": "4163:40:1"
                                                              }
                                                            ],
                                                            "id": 937,
                                                            "name": "ExpressionStatement",
                                                            "src": "4163:40:1"
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
                                                                      "referencedDeclaration": 992,
                                                                      "type": "function (address,address) pure",
                                                                      "value": "validateNewAddress"
                                                                    },
                                                                    "id": 938,
                                                                    "name": "Identifier",
                                                                    "src": "4217:18:1"
                                                                  },
                                                                  {
                                                                    "attributes": {
                                                                      "argumentTypes": null,
                                                                      "overloadedDeclarations": [
                                                                        null
                                                                      ],
                                                                      "referencedDeclaration": 744,
                                                                      "type": "address",
                                                                      "value": "newAddress"
                                                                    },
                                                                    "id": 939,
                                                                    "name": "Identifier",
                                                                    "src": "4236:10:1"
                                                                  },
                                                                  {
                                                                    "attributes": {
                                                                      "argumentTypes": null,
                                                                      "overloadedDeclarations": [
                                                                        null
                                                                      ],
                                                                      "referencedDeclaration": 750,
                                                                      "type": "address",
                                                                      "value": "oldAddress"
                                                                    },
                                                                    "id": 940,
                                                                    "name": "Identifier",
                                                                    "src": "4248:10:1"
                                                                  }
                                                                ],
                                                                "id": 941,
                                                                "name": "FunctionCall",
                                                                "src": "4217:42:1"
                                                              }
                                                            ],
                                                            "id": 942,
                                                            "name": "ExpressionStatement",
                                                            "src": "4217:42:1"
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
                                                                      "referencedDeclaration": 664,
                                                                      "type": "contract TokenTransferProxy",
                                                                      "value": "tokenTransferProxy"
                                                                    },
                                                                    "id": 943,
                                                                    "name": "Identifier",
                                                                    "src": "4273:18:1"
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
                                                                          "referencedDeclaration": 4631,
                                                                          "type": "type(contract TokenTransferProxy)",
                                                                          "value": "TokenTransferProxy"
                                                                        },
                                                                        "id": 944,
                                                                        "name": "Identifier",
                                                                        "src": "4294:18:1"
                                                                      },
                                                                      {
                                                                        "attributes": {
                                                                          "argumentTypes": null,
                                                                          "overloadedDeclarations": [
                                                                            null
                                                                          ],
                                                                          "referencedDeclaration": 744,
                                                                          "type": "address",
                                                                          "value": "newAddress"
                                                                        },
                                                                        "id": 945,
                                                                        "name": "Identifier",
                                                                        "src": "4313:10:1"
                                                                      }
                                                                    ],
                                                                    "id": 946,
                                                                    "name": "FunctionCall",
                                                                    "src": "4294:30:1"
                                                                  }
                                                                ],
                                                                "id": 947,
                                                                "name": "Assignment",
                                                                "src": "4273:51:1"
                                                              }
                                                            ],
                                                            "id": 948,
                                                            "name": "ExpressionStatement",
                                                            "src": "4273:51:1"
                                                          }
                                                        ],
                                                        "id": 949,
                                                        "name": "Block",
                                                        "src": "4149:186:1"
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
                                                                      "referencedDeclaration": 11527,
                                                                      "type": "function () pure",
                                                                      "value": "revert"
                                                                    },
                                                                    "id": 950,
                                                                    "name": "Identifier",
                                                                    "src": "4355:6:1"
                                                                  }
                                                                ],
                                                                "id": 951,
                                                                "name": "FunctionCall",
                                                                "src": "4355:8:1"
                                                              }
                                                            ],
                                                            "id": 952,
                                                            "name": "ExpressionStatement",
                                                            "src": "4355:8:1"
                                                          }
                                                        ],
                                                        "id": 953,
                                                        "name": "Block",
                                                        "src": "4341:33:1"
                                                      }
                                                    ],
                                                    "id": 954,
                                                    "name": "IfStatement",
                                                    "src": "4096:278:1"
                                                  }
                                                ],
                                                "id": 955,
                                                "name": "IfStatement",
                                                "src": "3859:515:1"
                                              }
                                            ],
                                            "id": 956,
                                            "name": "IfStatement",
                                            "src": "3634:740:1"
                                          }
                                        ],
                                        "id": 957,
                                        "name": "IfStatement",
                                        "src": "3401:973:1"
                                      }
                                    ],
                                    "id": 958,
                                    "name": "IfStatement",
                                    "src": "3192:1182:1"
                                  }
                                ],
                                "id": 959,
                                "name": "IfStatement",
                                "src": "2971:1403:1"
                              }
                            ],
                            "id": 960,
                            "name": "IfStatement",
                            "src": "2758:1616:1"
                          }
                        ],
                        "id": 961,
                        "name": "IfStatement",
                        "src": "2505:1869:1"
                      }
                    ],
                    "id": 962,
                    "name": "IfStatement",
                    "src": "2276:2098:1"
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
                                  "typeIdentifier": "t_enum$_ContractType_$646",
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
                              "referencedDeclaration": 636,
                              "type": "function (enum ContractRegistry.ContractType,address,address)",
                              "value": "ContractAddressUpdated"
                            },
                            "id": 963,
                            "name": "Identifier",
                            "src": "4384:22:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 742,
                              "type": "enum ContractRegistry.ContractType",
                              "value": "contractType"
                            },
                            "id": 964,
                            "name": "Identifier",
                            "src": "4407:12:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 750,
                              "type": "address",
                              "value": "oldAddress"
                            },
                            "id": 965,
                            "name": "Identifier",
                            "src": "4421:10:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 744,
                              "type": "address",
                              "value": "newAddress"
                            },
                            "id": 966,
                            "name": "Identifier",
                            "src": "4433:10:1"
                          }
                        ],
                        "id": 967,
                        "name": "FunctionCall",
                        "src": "4384:60:1"
                      }
                    ],
                    "id": 968,
                    "name": "ExpressionStatement",
                    "src": "4384:60:1"
                  }
                ],
                "id": 969,
                "name": "Block",
                "src": "2237:2214:1"
              }
            ],
            "id": 970,
            "name": "FunctionDefinition",
            "src": "2108:2343:1"
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
              "scope": 993,
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
                      "scope": 992,
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
                        "id": 971,
                        "name": "ElementaryTypeName",
                        "src": "4494:7:1"
                      }
                    ],
                    "id": 972,
                    "name": "VariableDeclaration",
                    "src": "4494:18:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "oldAddress",
                      "scope": 992,
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
                        "id": 973,
                        "name": "ElementaryTypeName",
                        "src": "4522:7:1"
                      }
                    ],
                    "id": 974,
                    "name": "VariableDeclaration",
                    "src": "4522:18:1"
                  }
                ],
                "id": 975,
                "name": "ParameterList",
                "src": "4484:62:1"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 976,
                "name": "ParameterList",
                "src": "4581:0:1"
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
                              "referencedDeclaration": 11526,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 977,
                            "name": "Identifier",
                            "src": "4591:7:1"
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
                                  "referencedDeclaration": 972,
                                  "type": "address",
                                  "value": "newAddress"
                                },
                                "id": 978,
                                "name": "Identifier",
                                "src": "4599:10:1"
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
                                    "id": 979,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "4613:7:1"
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
                                    "id": 980,
                                    "name": "Literal",
                                    "src": "4621:1:1"
                                  }
                                ],
                                "id": 981,
                                "name": "FunctionCall",
                                "src": "4613:10:1"
                              }
                            ],
                            "id": 982,
                            "name": "BinaryOperation",
                            "src": "4599:24:1"
                          }
                        ],
                        "id": 983,
                        "name": "FunctionCall",
                        "src": "4591:33:1"
                      }
                    ],
                    "id": 984,
                    "name": "ExpressionStatement",
                    "src": "4591:33:1"
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
                              "referencedDeclaration": 11526,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 985,
                            "name": "Identifier",
                            "src": "4673:7:1"
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
                                  "referencedDeclaration": 972,
                                  "type": "address",
                                  "value": "newAddress"
                                },
                                "id": 986,
                                "name": "Identifier",
                                "src": "4681:10:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 974,
                                  "type": "address",
                                  "value": "oldAddress"
                                },
                                "id": 987,
                                "name": "Identifier",
                                "src": "4695:10:1"
                              }
                            ],
                            "id": 988,
                            "name": "BinaryOperation",
                            "src": "4681:24:1"
                          }
                        ],
                        "id": 989,
                        "name": "FunctionCall",
                        "src": "4673:33:1"
                      }
                    ],
                    "id": 990,
                    "name": "ExpressionStatement",
                    "src": "4673:33:1"
                  }
                ],
                "id": 991,
                "name": "Block",
                "src": "4581:175:1"
              }
            ],
            "id": 992,
            "name": "FunctionDefinition",
            "src": "4457:299:1"
          }
        ],
        "id": 993,
        "name": "ContractDefinition",
        "src": "371:4387:1"
      }
    ],
    "id": 994,
    "name": "SourceUnit",
    "src": "0:4759:1"
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
      "address": "0x506acb19a451cc6e2a5c76e65f6b65840406e5f9"
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
      "address": "0xe9b3ae0e87cd12fe19bdff4fc2aae8986f4d0a1a"
    }
  },
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-08-17T19:19:45.651Z"
}