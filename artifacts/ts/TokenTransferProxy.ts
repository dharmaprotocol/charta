export const TokenTransferProxy = 
{
  "contractName": "TokenTransferProxy",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "_agent",
          "type": "address"
        }
      ],
      "name": "addAuthorizedTransferAgent",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_token",
          "type": "address"
        },
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "name": "_success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "CONTEXT",
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
      "constant": false,
      "inputs": [],
      "name": "unpause",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "paused",
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
      "constant": false,
      "inputs": [],
      "name": "pause",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
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
      "constant": false,
      "inputs": [
        {
          "name": "_agent",
          "type": "address"
        }
      ],
      "name": "revokeTransferAgentAuthorization",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getAuthorizedTransferAgents",
      "outputs": [
        {
          "name": "authorizedAgents",
          "type": "address[]"
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
          "name": "agent",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "callingContext",
          "type": "string"
        }
      ],
      "name": "Authorized",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "agent",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "callingContext",
          "type": "string"
        }
      ],
      "name": "AuthorizationRevoked",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "Pause",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "Unpause",
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
  "bytecode": "0x606060405260008060146101000a81548160ff021916908315150217905550336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610ff78061006d6000396000f3006060604052600436106100a4576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630a8f7b52146100a957806315dacbea146100e25780632e667c4e1461017a5780633f4ba83a146102085780635c975abb1461021d5780638456cb591461024a5780638da5cb5b1461025f57806394ae6e71146102b45780639c200302146102ed578063f2fde38b14610357575b600080fd5b34156100b457600080fd5b6100e0600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610390565b005b34156100ed57600080fd5b610160600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610439565b604051808215151515815260200191505060405180910390f35b341561018557600080fd5b61018d61055e565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101cd5780820151818401526020810190506101b2565b50505050905090810190601f1680156101fa5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561021357600080fd5b61021b610597565b005b341561022857600080fd5b610230610655565b604051808215151515815260200191505060405180910390f35b341561025557600080fd5b61025d610668565b005b341561026a57600080fd5b610272610728565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156102bf57600080fd5b6102eb600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061074d565b005b34156102f857600080fd5b6103006107f6565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610343578082015181840152602081019050610328565b505050509050019250505060405180910390f35b341561036257600080fd5b61038e600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061080d565b005b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156103eb57600080fd5b610436816040805190810160405280601481526020017f746f6b656e2d7472616e736665722d70726f787900000000000000000000000081525060016109629092919063ffffffff16565b50565b600061044f336001610b3e90919063ffffffff16565b151561045a57600080fd5b8473ffffffffffffffffffffffffffffffffffffffff166323b872dd8585856000604051602001526040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b151561053957600080fd5b6102c65a03f1151561054a57600080fd5b505050604051805190509050949350505050565b6040805190810160405280601481526020017f746f6b656e2d7472616e736665722d70726f787900000000000000000000000081525081565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156105f257600080fd5b600060149054906101000a900460ff16151561060d57600080fd5b60008060146101000a81548160ff0219169083151502179055507f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3360405160405180910390a1565b600060149054906101000a900460ff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156106c357600080fd5b600060149054906101000a900460ff161515156106df57600080fd5b6001600060146101000a81548160ff0219169083151502179055507f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62560405160405180910390a1565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156107a857600080fd5b6107f3816040805190810160405280601481526020017f746f6b656e2d7472616e736665722d70726f78790000000000000000000000008152506001610b979092919063ffffffff16565b50565b6107fe610f3a565b6108086001610e8d565b905090565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561086857600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156108a457600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b61096c8383610f25565b151561097757600080fd5b60018360000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508260020180548060010182816109e79190610f4e565b9160005260206000209001600084909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505060018360020180549050038360010160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff167f571925c699f9072cec76b6c6c000571cc8d0bb5c47e5819202e2e9496c6508b5826040518080602001828103825283818151815260200191508051906020019080838360005b83811015610aff578082015181840152602081019050610ae4565b50505050905090810190601f168015610b2c5780820380516001836020036101000a031916815260200191505b509250505060405180910390a2505050565b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000806000610ba68686610b3e565b1515610bb157600080fd5b8560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549250600186600201805490500391508560020182815481101515610c1357fe5b906000526020600020900160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508560000160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549060ff0219169055808660020184815481101515610ca457fe5b906000526020600020900160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550828660010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600090558560020182815481101515610d8957fe5b906000526020600020900160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905560018660020181818054905003915081610dd19190610f7a565b508473ffffffffffffffffffffffffffffffffffffffff167f0814e4ee85854cea446b4a27a460e5ffb41516230dbc02f226c07907e432241c856040518080602001828103825283818151815260200191508051906020019080838360005b83811015610e4b578082015181840152602081019050610e30565b50505050905090810190601f168015610e785780820380516001836020036101000a031916815260200191505b509250505060405180910390a2505050505050565b610e95610f3a565b81600201805480602002602001604051908101604052809291908181526020018280548015610f1957602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610ecf575b50505050509050919050565b6000610f318383610b3e565b15905092915050565b602060405190810160405280600081525090565b815481835581811511610f7557818360005260206000209182019101610f749190610fa6565b5b505050565b815481835581811511610fa157818360005260206000209182019101610fa09190610fa6565b5b505050565b610fc891905b80821115610fc4576000816000905550600101610fac565b5090565b905600a165627a7a72305820383d85b95b8eb7fcd8d360f3a320d02a110cad60dc66987b14a9756d2c5bcc610029",
  "deployedBytecode": "0x6060604052600436106100a4576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630a8f7b52146100a957806315dacbea146100e25780632e667c4e1461017a5780633f4ba83a146102085780635c975abb1461021d5780638456cb591461024a5780638da5cb5b1461025f57806394ae6e71146102b45780639c200302146102ed578063f2fde38b14610357575b600080fd5b34156100b457600080fd5b6100e0600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610390565b005b34156100ed57600080fd5b610160600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610439565b604051808215151515815260200191505060405180910390f35b341561018557600080fd5b61018d61055e565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101cd5780820151818401526020810190506101b2565b50505050905090810190601f1680156101fa5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561021357600080fd5b61021b610597565b005b341561022857600080fd5b610230610655565b604051808215151515815260200191505060405180910390f35b341561025557600080fd5b61025d610668565b005b341561026a57600080fd5b610272610728565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156102bf57600080fd5b6102eb600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061074d565b005b34156102f857600080fd5b6103006107f6565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610343578082015181840152602081019050610328565b505050509050019250505060405180910390f35b341561036257600080fd5b61038e600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061080d565b005b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156103eb57600080fd5b610436816040805190810160405280601481526020017f746f6b656e2d7472616e736665722d70726f787900000000000000000000000081525060016109629092919063ffffffff16565b50565b600061044f336001610b3e90919063ffffffff16565b151561045a57600080fd5b8473ffffffffffffffffffffffffffffffffffffffff166323b872dd8585856000604051602001526040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b151561053957600080fd5b6102c65a03f1151561054a57600080fd5b505050604051805190509050949350505050565b6040805190810160405280601481526020017f746f6b656e2d7472616e736665722d70726f787900000000000000000000000081525081565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156105f257600080fd5b600060149054906101000a900460ff16151561060d57600080fd5b60008060146101000a81548160ff0219169083151502179055507f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3360405160405180910390a1565b600060149054906101000a900460ff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156106c357600080fd5b600060149054906101000a900460ff161515156106df57600080fd5b6001600060146101000a81548160ff0219169083151502179055507f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62560405160405180910390a1565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156107a857600080fd5b6107f3816040805190810160405280601481526020017f746f6b656e2d7472616e736665722d70726f78790000000000000000000000008152506001610b979092919063ffffffff16565b50565b6107fe610f3a565b6108086001610e8d565b905090565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561086857600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156108a457600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b61096c8383610f25565b151561097757600080fd5b60018360000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508260020180548060010182816109e79190610f4e565b9160005260206000209001600084909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505060018360020180549050038360010160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff167f571925c699f9072cec76b6c6c000571cc8d0bb5c47e5819202e2e9496c6508b5826040518080602001828103825283818151815260200191508051906020019080838360005b83811015610aff578082015181840152602081019050610ae4565b50505050905090810190601f168015610b2c5780820380516001836020036101000a031916815260200191505b509250505060405180910390a2505050565b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000806000610ba68686610b3e565b1515610bb157600080fd5b8560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549250600186600201805490500391508560020182815481101515610c1357fe5b906000526020600020900160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508560000160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549060ff0219169055808660020184815481101515610ca457fe5b906000526020600020900160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550828660010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600090558560020182815481101515610d8957fe5b906000526020600020900160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905560018660020181818054905003915081610dd19190610f7a565b508473ffffffffffffffffffffffffffffffffffffffff167f0814e4ee85854cea446b4a27a460e5ffb41516230dbc02f226c07907e432241c856040518080602001828103825283818151815260200191508051906020019080838360005b83811015610e4b578082015181840152602081019050610e30565b50505050905090810190601f168015610e785780820380516001836020036101000a031916815260200191505b509250505060405180910390a2505050505050565b610e95610f3a565b81600201805480602002602001604051908101604052809291908181526020018280548015610f1957602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610ecf575b50505050509050919050565b6000610f318383610b3e565b15905092915050565b602060405190810160405280600081525090565b815481835581811511610f7557818360005260206000209182019101610f749190610fa6565b5b505050565b815481835581811511610fa157818360005260206000209182019101610fa09190610fa6565b5b505050565b610fc891905b80821115610fc4576000816000905550600101610fac565b5090565b905600a165627a7a72305820383d85b95b8eb7fcd8d360f3a320d02a110cad60dc66987b14a9756d2c5bcc610029",
  "sourceMap": "1330:1487:13:-;;;268:5:37;247:26;;;;;;;;;;;;;;;;;;;;509:10:39;501:5;;:18;;;;;;;;;;;;;;;;;;1330:1487:13;;;;;;",
  "deployedSourceMap": "1330:1487:13:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1678:157;;;;;;;;;;;;;;;;;;;;;;;;;;;;2506:309;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1519:55;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;833:87:37;;;;;;;;;;;;;;247:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;666:85;;;;;;;;;;;;;;238:20:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1943:173:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;2211:186;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;832:169:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;1678:157:13;653:5:39;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;1777:51:13;1812:6;1820:7;;;;;;;;;;;;;;;;;;1777:24;:34;;:51;;;;;:::i;:::-;1678:157;:::o;2506:309::-;2656:13;2693:49;2731:10;2693:24;:37;;:49;;;;:::i;:::-;2685:58;;;;;;;;2767:6;2761:26;;;2788:5;2795:3;2800:7;2761:47;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2754:54;;2506:309;;;;;;:::o;1519:55::-;;;;;;;;;;;;;;;;;;;;:::o;833:87:37:-;653:5:39;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;568:6:37;;;;;;;;;;;560:15;;;;;;;;895:5;886:6;;:14;;;;;;;;;;;;;;;;;;906:9;;;;;;;;;;833:87::o;247:26::-;;;;;;;;;;;;;:::o;666:85::-;653:5:39;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;416:6:37;;;;;;;;;;;415:7;407:16;;;;;;;;729:4;720:6;;:13;;;;;;;;;;;;;;;;;;739:7;;;;;;;;;;666:85::o;238:20:39:-;;;;;;;;;;;;;:::o;1943:173:13:-;653:5:39;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;2048:61:13;2093:6;2101:7;;;;;;;;;;;;;;;;;;2048:24;:44;;:61;;;;;:::i;:::-;1943:173;:::o;2211:186::-;2295:26;;:::i;:::-;2344:46;:24;:44;:46::i;:::-;2337:53;;2211:186;:::o;832:169:39:-;653:5;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;928:1;908:22;;:8;:22;;;;900:31;;;;;;;;965:8;937:37;;958:5;;;;;;;;;;;937:37;;;;;;;;;;;;988:8;980:5;;:16;;;;;;;;;;;;;;;;;;832:169;:::o;1732:383:17:-;1884:28;1900:4;1906:5;1884:15;:28::i;:::-;1876:37;;;;;;;;1949:4;1924;:15;;:22;1940:5;1924:22;;;;;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;1963:4;:21;;:33;;;;;;;;;;;:::i;:::-;;;;;;;;;;1990:5;1963:33;;;;;;;;;;;;;;;;;;;;;;;2064:1;2033:4;:21;;:28;;;;:32;2006:4;:17;;:24;2024:5;2006:24;;;;;;;;;;;;;;;:59;;;;2086:5;2075:33;;;2093:14;2075:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1732:383:17;;;:::o;3295:166::-;3405:4;3432;:15;;:22;3448:5;3432:22;;;;;;;;;;;;;;;;;;;;;;;;;3425:29;;3295:166;;;;:::o;2121:1168::-;2489:25;2551:23;2619:19;2452:25;2465:4;2471:5;2452:12;:25::i;:::-;2444:34;;;;;;;;2517:4;:17;;:24;2535:5;2517:24;;;;;;;;;;;;;;;;2489:52;;2608:1;2577:4;:21;;:28;;;;:32;2551:58;;2641:4;:21;;2663:18;2641:41;;;;;;;;;;;;;;;;;;;;;;;;;;;;2619:63;;2745:4;:15;;:22;2761:5;2745:22;;;;;;;;;;;;;;;;2738:29;;;;;;;;;;;2894:11;2848:4;:21;;2870:20;2848:43;;;;;;;;;;;;;;;;;;;:57;;;;;;;;;;;;;;;;;;3009:20;2976:4;:17;;:30;2994:11;2976:30;;;;;;;;;;;;;;;:53;;;;3046:4;:17;;:24;3064:5;3046:24;;;;;;;;;;;;;;;3039:31;;;3144:4;:21;;3166:18;3144:41;;;;;;;;;;;;;;;;;;;3137:48;;;;;;;;;;;3227:1;3195:4;:21;;:33;;;;;;;;;;;;;;:::i;:::-;;3260:5;3239:43;;;3267:14;3239:43;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2121:1168:17;;;;;;:::o;3646:162::-;3748:9;;:::i;:::-;3780:4;:21;;3773:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3646:162;;;:::o;3467:173::-;3580:4;3608:25;3621:4;3627:5;3608:12;:25::i;:::-;3607:26;3600:33;;3467:173;;;;:::o;1330:1487:13:-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "/*\n\n  Copyright 2017 Dharma Labs Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n*/\n\npragma solidity 0.4.18;\n\nimport \"./DebtRegistry.sol\";\nimport { PermissionsLib, PermissionEvents } from \"./libraries/PermissionsLib.sol\";\nimport \"zeppelin-solidity/contracts/lifecycle/Pausable.sol\";\nimport \"zeppelin-solidity/contracts/token/ERC20/ERC20.sol\";\n\n\n/**\n * The TokenTransferProxy is a proxy contract for transfering principal\n * and fee payments and repayments between agents and keepers in the Dharma\n * ecosystem.  It is decoupled from the DebtKernel in order to make upgrades to the\n * protocol contracts smoother -- if the DebtKernel or RepyamentRouter is upgraded to a new contract,\n * creditors will not have to grant new transfer approvals to a new contract's address.\n *\n * Author: Nadav Hollander -- Github: nadavhollander\n */\ncontract TokenTransferProxy is Pausable, PermissionEvents {\n    using PermissionsLib for PermissionsLib.Permissions;\n\n    PermissionsLib.Permissions internal tokenTransferPermissions;\n\n    string public constant CONTEXT = \"token-transfer-proxy\";\n\n    /**\n     * Add address to list of agents authorized to initiate `transferFrom` calls\n     */\n    function addAuthorizedTransferAgent(address _agent)\n        public\n        onlyOwner\n    {\n        tokenTransferPermissions.authorize(_agent, CONTEXT);\n    }\n\n    /**\n     * Remove address from list of agents authorized to initiate `transferFrom` calls\n     */\n    function revokeTransferAgentAuthorization(address _agent)\n        public\n        onlyOwner\n    {\n        tokenTransferPermissions.revokeAuthorization(_agent, CONTEXT);\n    }\n\n    /**\n     * Return list of agents authorized to initiate `transferFrom` calls\n     */\n    function getAuthorizedTransferAgents()\n        public\n        view\n        returns (address[] authorizedAgents)\n    {\n        return tokenTransferPermissions.getAuthorizedAgents();\n    }\n\n    /**\n     * Transfer specified token amount from _from address to _to address on give token\n     */\n    function transferFrom(\n        address _token,\n        address _from,\n        address _to,\n        uint _amount\n    )\n        public\n        returns (bool _success)\n    {\n        require(tokenTransferPermissions.isAuthorized(msg.sender));\n\n        return ERC20(_token).transferFrom(_from, _to, _amount);\n    }\n}\n",
  "sourcePath": "/Users/graemeboy/Dharma/charta/contracts/TokenTransferProxy.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/graemeboy/Dharma/charta/contracts/TokenTransferProxy.sol",
      "exportedSymbols": {
        "TokenTransferProxy": [
          5214
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
        "id": 5123,
        "name": "PragmaDirective",
        "src": "584:23:13"
      },
      {
        "attributes": {
          "SourceUnit": 3167,
          "absolutePath": "/Users/graemeboy/Dharma/charta/contracts/DebtRegistry.sol",
          "file": "./DebtRegistry.sol",
          "scope": 5215,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 5124,
        "name": "ImportDirective",
        "src": "609:28:13"
      },
      {
        "attributes": {
          "SourceUnit": 6280,
          "absolutePath": "/Users/graemeboy/Dharma/charta/contracts/libraries/PermissionsLib.sol",
          "file": "./libraries/PermissionsLib.sol",
          "scope": 5215,
          "symbolAliases": [
            {
              "foreign": 5125,
              "local": null
            },
            {
              "foreign": 5126,
              "local": null
            }
          ],
          "unitAlias": ""
        },
        "id": 5127,
        "name": "ImportDirective",
        "src": "638:82:13"
      },
      {
        "attributes": {
          "SourceUnit": 14006,
          "absolutePath": "zeppelin-solidity/contracts/lifecycle/Pausable.sol",
          "file": "zeppelin-solidity/contracts/lifecycle/Pausable.sol",
          "scope": 5215,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 5128,
        "name": "ImportDirective",
        "src": "721:60:13"
      },
      {
        "attributes": {
          "SourceUnit": 14299,
          "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
          "file": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
          "scope": 5215,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 5129,
        "name": "ImportDirective",
        "src": "782:59:13"
      },
      {
        "attributes": {
          "contractDependencies": [
            6075,
            14005,
            14159
          ],
          "contractKind": "contract",
          "documentation": "The TokenTransferProxy is a proxy contract for transfering principal\nand fee payments and repayments between agents and keepers in the Dharma\necosystem.  It is decoupled from the DebtKernel in order to make upgrades to the\nprotocol contracts smoother -- if the DebtKernel or RepyamentRouter is upgraded to a new contract,\ncreditors will not have to grant new transfer approvals to a new contract's address.\n * Author: Nadav Hollander -- Github: nadavhollander",
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            5214,
            6075,
            14005,
            14159
          ],
          "name": "TokenTransferProxy",
          "scope": 5215
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
                  "name": "Pausable",
                  "referencedDeclaration": 14005,
                  "type": "contract Pausable"
                },
                "id": 5130,
                "name": "UserDefinedTypeName",
                "src": "1361:8:13"
              }
            ],
            "id": 5131,
            "name": "InheritanceSpecifier",
            "src": "1361:8:13"
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
                  "name": "PermissionEvents",
                  "referencedDeclaration": 6075,
                  "type": "contract PermissionEvents"
                },
                "id": 5132,
                "name": "UserDefinedTypeName",
                "src": "1371:16:13"
              }
            ],
            "id": 5133,
            "name": "InheritanceSpecifier",
            "src": "1371:16:13"
          },
          {
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "PermissionsLib",
                  "referencedDeclaration": 6279,
                  "type": "library PermissionsLib"
                },
                "id": 5134,
                "name": "UserDefinedTypeName",
                "src": "1400:14:13"
              },
              {
                "attributes": {
                  "contractScope": null,
                  "name": "PermissionsLib.Permissions",
                  "referencedDeclaration": 6099,
                  "type": "struct PermissionsLib.Permissions storage pointer"
                },
                "id": 5135,
                "name": "UserDefinedTypeName",
                "src": "1419:26:13"
              }
            ],
            "id": 5136,
            "name": "UsingForDirective",
            "src": "1394:52:13"
          },
          {
            "attributes": {
              "constant": false,
              "name": "tokenTransferPermissions",
              "scope": 5214,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "struct PermissionsLib.Permissions storage ref",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "PermissionsLib.Permissions",
                  "referencedDeclaration": 6099,
                  "type": "struct PermissionsLib.Permissions storage pointer"
                },
                "id": 5137,
                "name": "UserDefinedTypeName",
                "src": "1452:26:13"
              }
            ],
            "id": 5138,
            "name": "VariableDeclaration",
            "src": "1452:60:13"
          },
          {
            "attributes": {
              "constant": true,
              "name": "CONTEXT",
              "scope": 5214,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "string memory",
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "string",
                  "type": "string storage pointer"
                },
                "id": 5139,
                "name": "ElementaryTypeName",
                "src": "1519:6:13"
              },
              {
                "attributes": {
                  "argumentTypes": null,
                  "hexvalue": "746f6b656e2d7472616e736665722d70726f7879",
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "subdenomination": null,
                  "token": "string",
                  "type": "literal_string \"token-transfer-proxy\"",
                  "value": "token-transfer-proxy"
                },
                "id": 5140,
                "name": "Literal",
                "src": "1552:22:13"
              }
            ],
            "id": 5141,
            "name": "VariableDeclaration",
            "src": "1519:55:13"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "addAuthorizedTransferAgent",
              "payable": false,
              "scope": 5214,
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
                      "name": "_agent",
                      "scope": 5156,
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
                        "id": 5142,
                        "name": "ElementaryTypeName",
                        "src": "1714:7:13"
                      }
                    ],
                    "id": 5143,
                    "name": "VariableDeclaration",
                    "src": "1714:14:13"
                  }
                ],
                "id": 5144,
                "name": "ParameterList",
                "src": "1713:16:13"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 5147,
                "name": "ParameterList",
                "src": "1767:0:13"
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
                      "referencedDeclaration": 14133,
                      "type": "modifier ()",
                      "value": "onlyOwner"
                    },
                    "id": 5145,
                    "name": "Identifier",
                    "src": "1753:9:13"
                  }
                ],
                "id": 5146,
                "name": "ModifierInvocation",
                "src": "1753:9:13"
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
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_string_memory",
                                  "typeString": "string memory"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "authorize",
                              "referencedDeclaration": 6149,
                              "type": "function (struct PermissionsLib.Permissions storage pointer,address,string memory)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5138,
                                  "type": "struct PermissionsLib.Permissions storage ref",
                                  "value": "tokenTransferPermissions"
                                },
                                "id": 5148,
                                "name": "Identifier",
                                "src": "1777:24:13"
                              }
                            ],
                            "id": 5150,
                            "name": "MemberAccess",
                            "src": "1777:34:13"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5143,
                              "type": "address",
                              "value": "_agent"
                            },
                            "id": 5151,
                            "name": "Identifier",
                            "src": "1812:6:13"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5141,
                              "type": "string memory",
                              "value": "CONTEXT"
                            },
                            "id": 5152,
                            "name": "Identifier",
                            "src": "1820:7:13"
                          }
                        ],
                        "id": 5153,
                        "name": "FunctionCall",
                        "src": "1777:51:13"
                      }
                    ],
                    "id": 5154,
                    "name": "ExpressionStatement",
                    "src": "1777:51:13"
                  }
                ],
                "id": 5155,
                "name": "Block",
                "src": "1767:68:13"
              }
            ],
            "id": 5156,
            "name": "FunctionDefinition",
            "src": "1678:157:13"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "revokeTransferAgentAuthorization",
              "payable": false,
              "scope": 5214,
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
                      "name": "_agent",
                      "scope": 5171,
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
                        "id": 5157,
                        "name": "ElementaryTypeName",
                        "src": "1985:7:13"
                      }
                    ],
                    "id": 5158,
                    "name": "VariableDeclaration",
                    "src": "1985:14:13"
                  }
                ],
                "id": 5159,
                "name": "ParameterList",
                "src": "1984:16:13"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 5162,
                "name": "ParameterList",
                "src": "2038:0:13"
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
                      "referencedDeclaration": 14133,
                      "type": "modifier ()",
                      "value": "onlyOwner"
                    },
                    "id": 5160,
                    "name": "Identifier",
                    "src": "2024:9:13"
                  }
                ],
                "id": 5161,
                "name": "ModifierInvocation",
                "src": "2024:9:13"
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
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_string_memory",
                                  "typeString": "string memory"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "revokeAuthorization",
                              "referencedDeclaration": 6235,
                              "type": "function (struct PermissionsLib.Permissions storage pointer,address,string memory)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5138,
                                  "type": "struct PermissionsLib.Permissions storage ref",
                                  "value": "tokenTransferPermissions"
                                },
                                "id": 5163,
                                "name": "Identifier",
                                "src": "2048:24:13"
                              }
                            ],
                            "id": 5165,
                            "name": "MemberAccess",
                            "src": "2048:44:13"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5158,
                              "type": "address",
                              "value": "_agent"
                            },
                            "id": 5166,
                            "name": "Identifier",
                            "src": "2093:6:13"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5141,
                              "type": "string memory",
                              "value": "CONTEXT"
                            },
                            "id": 5167,
                            "name": "Identifier",
                            "src": "2101:7:13"
                          }
                        ],
                        "id": 5168,
                        "name": "FunctionCall",
                        "src": "2048:61:13"
                      }
                    ],
                    "id": 5169,
                    "name": "ExpressionStatement",
                    "src": "2048:61:13"
                  }
                ],
                "id": 5170,
                "name": "Block",
                "src": "2038:78:13"
              }
            ],
            "id": 5171,
            "name": "FunctionDefinition",
            "src": "1943:173:13"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getAuthorizedTransferAgents",
              "payable": false,
              "scope": 5214,
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
                "id": 5172,
                "name": "ParameterList",
                "src": "2247:2:13"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "authorizedAgents",
                      "scope": 5182,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address[] memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "length": null,
                          "type": "address[] storage pointer"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "address",
                              "type": "address"
                            },
                            "id": 5173,
                            "name": "ElementaryTypeName",
                            "src": "2295:7:13"
                          }
                        ],
                        "id": 5174,
                        "name": "ArrayTypeName",
                        "src": "2295:9:13"
                      }
                    ],
                    "id": 5175,
                    "name": "VariableDeclaration",
                    "src": "2295:26:13"
                  }
                ],
                "id": 5176,
                "name": "ParameterList",
                "src": "2294:28:13"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 5176
                    },
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
                          "type": "address[] memory",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                null
                              ],
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "getAuthorizedAgents",
                              "referencedDeclaration": 6278,
                              "type": "function (struct PermissionsLib.Permissions storage pointer) view returns (address[] memory)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5138,
                                  "type": "struct PermissionsLib.Permissions storage ref",
                                  "value": "tokenTransferPermissions"
                                },
                                "id": 5177,
                                "name": "Identifier",
                                "src": "2344:24:13"
                              }
                            ],
                            "id": 5178,
                            "name": "MemberAccess",
                            "src": "2344:44:13"
                          }
                        ],
                        "id": 5179,
                        "name": "FunctionCall",
                        "src": "2344:46:13"
                      }
                    ],
                    "id": 5180,
                    "name": "Return",
                    "src": "2337:53:13"
                  }
                ],
                "id": 5181,
                "name": "Block",
                "src": "2327:70:13"
              }
            ],
            "id": 5182,
            "name": "FunctionDefinition",
            "src": "2211:186:13"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "transferFrom",
              "payable": false,
              "scope": 5214,
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
                      "name": "_token",
                      "scope": 5213,
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
                        "id": 5183,
                        "name": "ElementaryTypeName",
                        "src": "2537:7:13"
                      }
                    ],
                    "id": 5184,
                    "name": "VariableDeclaration",
                    "src": "2537:14:13"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_from",
                      "scope": 5213,
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
                        "id": 5185,
                        "name": "ElementaryTypeName",
                        "src": "2561:7:13"
                      }
                    ],
                    "id": 5186,
                    "name": "VariableDeclaration",
                    "src": "2561:13:13"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 5213,
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
                        "id": 5187,
                        "name": "ElementaryTypeName",
                        "src": "2584:7:13"
                      }
                    ],
                    "id": 5188,
                    "name": "VariableDeclaration",
                    "src": "2584:11:13"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_amount",
                      "scope": 5213,
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
                        "id": 5189,
                        "name": "ElementaryTypeName",
                        "src": "2605:4:13"
                      }
                    ],
                    "id": 5190,
                    "name": "VariableDeclaration",
                    "src": "2605:12:13"
                  }
                ],
                "id": 5191,
                "name": "ParameterList",
                "src": "2527:96:13"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_success",
                      "scope": 5213,
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
                        "id": 5192,
                        "name": "ElementaryTypeName",
                        "src": "2656:4:13"
                      }
                    ],
                    "id": 5193,
                    "name": "VariableDeclaration",
                    "src": "2656:13:13"
                  }
                ],
                "id": 5194,
                "name": "ParameterList",
                "src": "2655:15:13"
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
                              "referencedDeclaration": 15844,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 5195,
                            "name": "Identifier",
                            "src": "2685:7:13"
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
                              "type": "bool",
                              "type_conversion": false
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
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "isAuthorized",
                                  "referencedDeclaration": 6250,
                                  "type": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5138,
                                      "type": "struct PermissionsLib.Permissions storage ref",
                                      "value": "tokenTransferPermissions"
                                    },
                                    "id": 5196,
                                    "name": "Identifier",
                                    "src": "2693:24:13"
                                  }
                                ],
                                "id": 5197,
                                "name": "MemberAccess",
                                "src": "2693:37:13"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "sender",
                                  "referencedDeclaration": null,
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 15841,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 5198,
                                    "name": "Identifier",
                                    "src": "2731:3:13"
                                  }
                                ],
                                "id": 5199,
                                "name": "MemberAccess",
                                "src": "2731:10:13"
                              }
                            ],
                            "id": 5200,
                            "name": "FunctionCall",
                            "src": "2693:49:13"
                          }
                        ],
                        "id": 5201,
                        "name": "FunctionCall",
                        "src": "2685:58:13"
                      }
                    ],
                    "id": 5202,
                    "name": "ExpressionStatement",
                    "src": "2685:58:13"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 5194
                    },
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
                          "type": "bool",
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
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "transferFrom",
                              "referencedDeclaration": 14280,
                              "type": "function (address,address,uint256) external returns (bool)"
                            },
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
                                  "type": "contract ERC20",
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
                                      "referencedDeclaration": 14298,
                                      "type": "type(contract ERC20)",
                                      "value": "ERC20"
                                    },
                                    "id": 5203,
                                    "name": "Identifier",
                                    "src": "2761:5:13"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5184,
                                      "type": "address",
                                      "value": "_token"
                                    },
                                    "id": 5204,
                                    "name": "Identifier",
                                    "src": "2767:6:13"
                                  }
                                ],
                                "id": 5205,
                                "name": "FunctionCall",
                                "src": "2761:13:13"
                              }
                            ],
                            "id": 5206,
                            "name": "MemberAccess",
                            "src": "2761:26:13"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5186,
                              "type": "address",
                              "value": "_from"
                            },
                            "id": 5207,
                            "name": "Identifier",
                            "src": "2788:5:13"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5188,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 5208,
                            "name": "Identifier",
                            "src": "2795:3:13"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5190,
                              "type": "uint256",
                              "value": "_amount"
                            },
                            "id": 5209,
                            "name": "Identifier",
                            "src": "2800:7:13"
                          }
                        ],
                        "id": 5210,
                        "name": "FunctionCall",
                        "src": "2761:47:13"
                      }
                    ],
                    "id": 5211,
                    "name": "Return",
                    "src": "2754:54:13"
                  }
                ],
                "id": 5212,
                "name": "Block",
                "src": "2675:140:13"
              }
            ],
            "id": 5213,
            "name": "FunctionDefinition",
            "src": "2506:309:13"
          }
        ],
        "id": 5214,
        "name": "ContractDefinition",
        "src": "1330:1487:13"
      }
    ],
    "id": 5215,
    "name": "SourceUnit",
    "src": "584:2234:13"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {
    "1": {
      "events": {
        "0x6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff625": {
          "anonymous": false,
          "inputs": [],
          "name": "Pause",
          "type": "event"
        },
        "0x7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b33": {
          "anonymous": false,
          "inputs": [],
          "name": "Unpause",
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
        },
        "0x571925c699f9072cec76b6c6c000571cc8d0bb5c47e5819202e2e9496c6508b5": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "agent",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "callingContext",
              "type": "string"
            }
          ],
          "name": "Authorized",
          "type": "event"
        },
        "0x0814e4ee85854cea446b4a27a460e5ffb41516230dbc02f226c07907e432241c": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "agent",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "callingContext",
              "type": "string"
            }
          ],
          "name": "AuthorizationRevoked",
          "type": "event"
        }
      },
      "links": {},
      "address": "0x2f40766e91aaee4794d3389ac8dc3a4b8fd7ab3e"
    },
    "42": {
      "events": {
        "0x571925c699f9072cec76b6c6c000571cc8d0bb5c47e5819202e2e9496c6508b5": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "agent",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "callingContext",
              "type": "string"
            }
          ],
          "name": "Authorized",
          "type": "event"
        },
        "0x0814e4ee85854cea446b4a27a460e5ffb41516230dbc02f226c07907e432241c": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "agent",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "callingContext",
              "type": "string"
            }
          ],
          "name": "AuthorizationRevoked",
          "type": "event"
        },
        "0x6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff625": {
          "anonymous": false,
          "inputs": [],
          "name": "Pause",
          "type": "event"
        },
        "0x7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b33": {
          "anonymous": false,
          "inputs": [],
          "name": "Unpause",
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
      "address": "0xbe69251a9592904d2a8556bbf8e4cc60a70554dc"
    },
    "70": {
      "events": {
        "0x571925c699f9072cec76b6c6c000571cc8d0bb5c47e5819202e2e9496c6508b5": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "agent",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "callingContext",
              "type": "string"
            }
          ],
          "name": "Authorized",
          "type": "event"
        },
        "0x0814e4ee85854cea446b4a27a460e5ffb41516230dbc02f226c07907e432241c": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "agent",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "callingContext",
              "type": "string"
            }
          ],
          "name": "AuthorizationRevoked",
          "type": "event"
        },
        "0x6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff625": {
          "anonymous": false,
          "inputs": [],
          "name": "Pause",
          "type": "event"
        },
        "0x7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b33": {
          "anonymous": false,
          "inputs": [],
          "name": "Unpause",
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
      "address": "0x7b79a84b92b41a4626fa85a8c2db9b09df063caf"
    }
  },
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-10-15T20:10:48.548Z"
}