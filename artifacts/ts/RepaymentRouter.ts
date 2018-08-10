export const RepaymentRouter = 
{
  "contractName": "RepaymentRouter",
  "abi": [
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
      "constant": false,
      "inputs": [
        {
          "name": "agreementId",
          "type": "bytes32"
        },
        {
          "name": "amount",
          "type": "uint256"
        },
        {
          "name": "tokenAddress",
          "type": "address"
        }
      ],
      "name": "repay",
      "outputs": [
        {
          "name": "_amountRepaid",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "_debtRegistry",
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
          "name": "_agreementId",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "name": "_payer",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_beneficiary",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "_token",
          "type": "address"
        }
      ],
      "name": "LogRepayment",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_errorId",
          "type": "uint8"
        },
        {
          "indexed": true,
          "name": "_agreementId",
          "type": "bytes32"
        }
      ],
      "name": "LogError",
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
  "bytecode": "0x606060405260008060146101000a81548160ff021916908315150217905550341561002957600080fd5b604051604080610fdb83398101604052808051906020019091908051906020019091905050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050610eba806101216000396000f30060606040526004361061008e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630eefdbad146100935780632f866f73146100e85780633f4ba83a1461013d5780635c975abb146101525780638456cb591461017f5780638da5cb5b14610194578063f2fde38b146101e9578063ff26812514610222575b600080fd5b341561009e57600080fd5b6100a6610285565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156100f357600080fd5b6100fb6102ab565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561014857600080fd5b6101506102d1565b005b341561015d57600080fd5b61016561038f565b604051808215151515815260200191505060405180910390f35b341561018a57600080fd5b6101926103a2565b005b341561019f57600080fd5b6101a7610462565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156101f457600080fd5b610220600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610487565b005b341561022d57600080fd5b61026f60048080356000191690602001909190803590602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506105dc565b6040518082815260200191505060405180910390f35b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561032c57600080fd5b600060149054906101000a900460ff16151561034757600080fd5b60008060146101000a81548160ff0219169083151502179055507f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3360405160405180910390a1565b600060149054906101000a900460ff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156103fd57600080fd5b600060149054906101000a900460ff1615151561041957600080fd5b6001600060146101000a81548160ff0219169083151502179055507f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62560405160405180910390a1565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156104e257600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561051e57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008060008060149054906101000a900460ff161515156105fc57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415151561063857600080fd5b60008511151561064757600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639758af1e876000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b15156106e857600080fd5b6102c65a03f115156106f957600080fd5b5050506040518051905015156107535785600019166000600281111561071b57fe5b60ff167f36d86c59e00bd73dc19ba3adfe068e4b64ac7e92be35546adeddf1b956a87e9060405160405180910390a360009250610e85565b848473ffffffffffffffffffffffffffffffffffffffff166370a08231336000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b15156107f757600080fd5b6102c65a03f1151561080857600080fd5b5050506040518051905010806109305750848473ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e33600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166000604051602001526040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200192505050602060405180830381600087803b151561091357600080fd5b6102c65a03f1151561092457600080fd5b50505060405180519050105b1561097f5785600019166001600281111561094757fe5b60ff167f36d86c59e00bd73dc19ba3adfe068e4b64ac7e92be35546adeddf1b956a87e9060405160405180910390a360009250610e85565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f6f494c9876000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b1515610a2057600080fd5b6102c65a03f11515610a3157600080fd5b505050604051805190509150600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ba20dda4876000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b1515610ade57600080fd5b6102c65a03f11515610aef57600080fd5b5050506040518051905090508173ffffffffffffffffffffffffffffffffffffffff16635f0280ba87338489896000604051602001526040518663ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018086600019166000191681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200195505050505050602060405180830381600087803b1515610c1e57600080fd5b6102c65a03f11515610c2f57600080fd5b505050604051805190501515610c88578560001916600280811115610c5057fe5b60ff167f36d86c59e00bd73dc19ba3adfe068e4b64ac7e92be35546adeddf1b956a87e9060405160405180910390a360009250610e85565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166315dacbea853384896000604051602001526040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001945050505050602060405180830381600087803b1515610dbd57600080fd5b6102c65a03f11515610dce57600080fd5b505050604051805190501515610de357600080fd5b8073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1687600019167f43ea5a2b552489bf9de7c3d6ded86e3b82423e034255d06db4b388f806db50d08888604051808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a48492505b505093925050505600a165627a7a72305820a5f5f8b11da4685987d7b82cefa96c87871c531e62ad3e028cb997d5c80040310029",
  "deployedBytecode": "0x60606040526004361061008e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630eefdbad146100935780632f866f73146100e85780633f4ba83a1461013d5780635c975abb146101525780638456cb591461017f5780638da5cb5b14610194578063f2fde38b146101e9578063ff26812514610222575b600080fd5b341561009e57600080fd5b6100a6610285565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156100f357600080fd5b6100fb6102ab565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561014857600080fd5b6101506102d1565b005b341561015d57600080fd5b61016561038f565b604051808215151515815260200191505060405180910390f35b341561018a57600080fd5b6101926103a2565b005b341561019f57600080fd5b6101a7610462565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156101f457600080fd5b610220600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610487565b005b341561022d57600080fd5b61026f60048080356000191690602001909190803590602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506105dc565b6040518082815260200191505060405180910390f35b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561032c57600080fd5b600060149054906101000a900460ff16151561034757600080fd5b60008060146101000a81548160ff0219169083151502179055507f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3360405160405180910390a1565b600060149054906101000a900460ff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156103fd57600080fd5b600060149054906101000a900460ff1615151561041957600080fd5b6001600060146101000a81548160ff0219169083151502179055507f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62560405160405180910390a1565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156104e257600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561051e57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008060008060149054906101000a900460ff161515156105fc57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415151561063857600080fd5b60008511151561064757600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639758af1e876000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b15156106e857600080fd5b6102c65a03f115156106f957600080fd5b5050506040518051905015156107535785600019166000600281111561071b57fe5b60ff167f36d86c59e00bd73dc19ba3adfe068e4b64ac7e92be35546adeddf1b956a87e9060405160405180910390a360009250610e85565b848473ffffffffffffffffffffffffffffffffffffffff166370a08231336000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b15156107f757600080fd5b6102c65a03f1151561080857600080fd5b5050506040518051905010806109305750848473ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e33600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166000604051602001526040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200192505050602060405180830381600087803b151561091357600080fd5b6102c65a03f1151561092457600080fd5b50505060405180519050105b1561097f5785600019166001600281111561094757fe5b60ff167f36d86c59e00bd73dc19ba3adfe068e4b64ac7e92be35546adeddf1b956a87e9060405160405180910390a360009250610e85565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f6f494c9876000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b1515610a2057600080fd5b6102c65a03f11515610a3157600080fd5b505050604051805190509150600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ba20dda4876000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b1515610ade57600080fd5b6102c65a03f11515610aef57600080fd5b5050506040518051905090508173ffffffffffffffffffffffffffffffffffffffff16635f0280ba87338489896000604051602001526040518663ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018086600019166000191681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200195505050505050602060405180830381600087803b1515610c1e57600080fd5b6102c65a03f11515610c2f57600080fd5b505050604051805190501515610c88578560001916600280811115610c5057fe5b60ff167f36d86c59e00bd73dc19ba3adfe068e4b64ac7e92be35546adeddf1b956a87e9060405160405180910390a360009250610e85565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166315dacbea853384896000604051602001526040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001945050505050602060405180830381600087803b1515610dbd57600080fd5b6102c65a03f11515610dce57600080fd5b505050604051805190501515610de357600080fd5b8073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1687600019167f43ea5a2b552489bf9de7c3d6ded86e3b82423e034255d06db4b388f806db50d08888604051808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a48492505b505093925050505600a165627a7a72305820a5f5f8b11da4685987d7b82cefa96c87871c531e62ad3e028cb997d5c80040310029",
  "sourceMap": "1291:2734:7:-;;;268:5:33;247:26;;;;;;;;;;;;;;;;;;;;1936:214:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;509:10:35;501:5;;:18;;;;;;;;;;;;;;;;;;2059:13:7;2031:12;;:42;;;;;;;;;;;;;;;;;;2123:19;2083:18;;:60;;;;;;;;;;;;;;;;;;1936:214;;1291:2734;;;;;;",
  "deployedSourceMap": "1291:2734:7:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1372:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1334:32;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;833:87:33;;;;;;;;;;;;;;247:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;666:85;;;;;;;;;;;;;;238:20:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;832:169;;;;;;;;;;;;;;;;;;;;;;;;;;;;2360:1663:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1372:44;;;;;;;;;;;;;:::o;1334:32::-;;;;;;;;;;;;;:::o;833:87:33:-;653:5:35;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;568:6:33;;;;;;;;;;;560:15;;;;;;;;895:5;886:6;;:14;;;;;;;;;;;;;;;;;;906:9;;;;;;;;;;833:87::o;247:26::-;;;;;;;;;;;;;:::o;666:85::-;653:5:35;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;416:6:33;;;;;;;;;;;415:7;407:16;;;;;;;;729:4;720:6;;:13;;;;;;;;;;;;;;;;;;739:7;;;;;;;;;;666:85::o;238:20:35:-;;;;;;;;;;;;;:::o;832:169::-;653:5;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;928:1;908:22;;:8;:22;;;;900:31;;;;;;;;965:8;937:37;;958:5;;;;;;;;;;;937:37;;;;;;;;;;;;988:8;980:5;;:16;;;;;;;;;;;;;;;;;;832:169;:::o;2360:1663:7:-;2518:18;3229:21;3305:19;416:6:33;;;;;;;;;;;415:7;407:16;;;;;;;;2584:1:7;2560:26;;:12;:26;;;;2552:35;;;;;;;;2614:1;2605:6;:10;2597:19;;;;;;;;2668:12;;;;;;;;;;;:27;;;2696:11;2668:40;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2667:41;2663:157;;;2775:11;2724:63;;;2739:33;2733:40;;;;;;;;2724:63;;;;;;;;;;;;2808:1;2801:8;;;;2663:157;2969:6;2931:12;2925:29;;;2955:10;2925:41;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:50;:136;;;;3055:6;2997:12;2991:29;;;3021:10;3033:18;;;;;;;;;;;2991:61;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:70;2925:136;2921:265;;;3141:11;3077:76;;;3092:46;3086:53;;;;;;;;3077:76;;;;;;;;;;;;3174:1;3167:8;;;;2921:265;3253:12;;;;;;;;;;;:29;;;3283:11;3253:42;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3229:66;;3327:12;;;;;;;;;;;:27;;;3355:11;3327:40;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3305:62;;3396:13;3382:46;;;3442:11;3467:10;3491:11;3516:6;3536:12;3382:176;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3381:177;3377:303;;;3635:11;3574:73;;;3589:43;3583:50;;;;;;;;3574:73;;;;;;;;;;;;3668:1;3661:8;;;;3377:303;3737:18;;;;;;;;;;;:31;;;3782:12;3808:10;3832:11;3857:6;3737:136;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3729:145;;;;;;;;3958:11;3920:72;;3946:10;3920:72;;3933:11;3920:72;;;;3971:6;3979:12;3920:72;;;;;;;;;;;;;;;;;;;;;;;;;;;;4010:6;4003:13;;429:1:33;2360:1663:7;;;;;;;:::o",
  "source": "/*\n\n  Copyright 2017 Dharma Labs Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n*/\n\npragma solidity 0.4.18;\n\nimport \"./DebtRegistry.sol\";\nimport \"./TermsContract.sol\";\nimport \"./TokenTransferProxy.sol\";\nimport \"zeppelin-solidity/contracts/token/ERC20/ERC20.sol\";\nimport \"zeppelin-solidity/contracts/lifecycle/Pausable.sol\";\n\n\n/**\n * The RepaymentRouter routes allowers payers to make repayments on any\n * given debt agreement in any given token by routing the payments to\n * the debt agreement's beneficiary.  Additionally, the router acts\n * as a trusted oracle to the debt agreement's terms contract, informing\n * it of exactly what payments have been made in what quantity and in what token.\n *\n * Authors: Jaynti Kanani -- Github: jdkanani, Nadav Hollander -- Github: nadavhollander\n */\ncontract RepaymentRouter is Pausable {\n    DebtRegistry public debtRegistry;\n    TokenTransferProxy public tokenTransferProxy;\n\n    enum Errors {\n        DEBT_AGREEMENT_NONEXISTENT,\n        PAYER_BALANCE_OR_ALLOWANCE_INSUFFICIENT,\n        REPAYMENT_REJECTED_BY_TERMS_CONTRACT\n    }\n\n    event LogRepayment(\n        bytes32 indexed _agreementId,\n        address indexed _payer,\n        address indexed _beneficiary,\n        uint _amount,\n        address _token\n    );\n\n    event LogError(uint8 indexed _errorId, bytes32 indexed _agreementId);\n\n    /**\n     * Constructor points the repayment router at the deployed registry contract.\n     */\n    function RepaymentRouter (address _debtRegistry, address _tokenTransferProxy) public {\n        debtRegistry = DebtRegistry(_debtRegistry);\n        tokenTransferProxy = TokenTransferProxy(_tokenTransferProxy);\n    }\n\n    /**\n     * Given an agreement id, routes a repayment\n     * of a given ERC20 token to the debt's current beneficiary, and reports the repayment\n     * to the debt's associated terms contract.\n     */\n    function repay(\n        bytes32 agreementId,\n        uint256 amount,\n        address tokenAddress\n    )\n        public\n        whenNotPaused\n        returns (uint _amountRepaid)\n    {\n        require(tokenAddress != address(0));\n        require(amount > 0);\n\n        // Ensure agreement exists.\n        if (!debtRegistry.doesEntryExist(agreementId)) {\n            LogError(uint8(Errors.DEBT_AGREEMENT_NONEXISTENT), agreementId);\n            return 0;\n        }\n\n        // Check payer has sufficient balance and has granted router sufficient allowance.\n        if (ERC20(tokenAddress).balanceOf(msg.sender) < amount ||\n            ERC20(tokenAddress).allowance(msg.sender, tokenTransferProxy) < amount) {\n            LogError(uint8(Errors.PAYER_BALANCE_OR_ALLOWANCE_INSUFFICIENT), agreementId);\n            return 0;\n        }\n\n        // Notify terms contract\n        address termsContract = debtRegistry.getTermsContract(agreementId);\n        address beneficiary = debtRegistry.getBeneficiary(agreementId);\n        if (!TermsContract(termsContract).registerRepayment(\n            agreementId,\n            msg.sender,\n            beneficiary,\n            amount,\n            tokenAddress\n        )) {\n            LogError(uint8(Errors.REPAYMENT_REJECTED_BY_TERMS_CONTRACT), agreementId);\n            return 0;\n        }\n\n        // Transfer amount to creditor\n        require(tokenTransferProxy.transferFrom(\n            tokenAddress,\n            msg.sender,\n            beneficiary,\n            amount\n        ));\n\n        // Log event for repayment\n        LogRepayment(agreementId, msg.sender, beneficiary, amount, tokenAddress);\n\n        return amount;\n    }\n}\n",
  "sourcePath": "/Users/chrismin/Documents/dev/dharma/charta/contracts/RepaymentRouter.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/chrismin/Documents/dev/dharma/charta/contracts/RepaymentRouter.sol",
      "exportedSymbols": {
        "RepaymentRouter": [
          3232
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
        "id": 3041,
        "name": "PragmaDirective",
        "src": "584:23:7"
      },
      {
        "attributes": {
          "SourceUnit": 2591,
          "absolutePath": "/Users/chrismin/Documents/dev/dharma/charta/contracts/DebtRegistry.sol",
          "file": "./DebtRegistry.sol",
          "scope": 3233,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 3042,
        "name": "ImportDirective",
        "src": "609:28:7"
      },
      {
        "attributes": {
          "SourceUnit": 3283,
          "absolutePath": "/Users/chrismin/Documents/dev/dharma/charta/contracts/TermsContract.sol",
          "file": "./TermsContract.sol",
          "scope": 3233,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 3043,
        "name": "ImportDirective",
        "src": "638:29:7"
      },
      {
        "attributes": {
          "SourceUnit": 3732,
          "absolutePath": "/Users/chrismin/Documents/dev/dharma/charta/contracts/TokenTransferProxy.sol",
          "file": "./TokenTransferProxy.sol",
          "scope": 3233,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 3044,
        "name": "ImportDirective",
        "src": "668:34:7"
      },
      {
        "attributes": {
          "SourceUnit": 10265,
          "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
          "file": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
          "scope": 3233,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 3045,
        "name": "ImportDirective",
        "src": "703:59:7"
      },
      {
        "attributes": {
          "SourceUnit": 9972,
          "absolutePath": "zeppelin-solidity/contracts/lifecycle/Pausable.sol",
          "file": "zeppelin-solidity/contracts/lifecycle/Pausable.sol",
          "scope": 3233,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 3046,
        "name": "ImportDirective",
        "src": "763:60:7"
      },
      {
        "attributes": {
          "contractDependencies": [
            9971,
            10125
          ],
          "contractKind": "contract",
          "documentation": "The RepaymentRouter routes allowers payers to make repayments on any\ngiven debt agreement in any given token by routing the payments to\nthe debt agreement's beneficiary.  Additionally, the router acts\nas a trusted oracle to the debt agreement's terms contract, informing\nit of exactly what payments have been made in what quantity and in what token.\n * Authors: Jaynti Kanani -- Github: jdkanani, Nadav Hollander -- Github: nadavhollander",
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            3232,
            9971,
            10125
          ],
          "name": "RepaymentRouter",
          "scope": 3233
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
                  "referencedDeclaration": 9971,
                  "type": "contract Pausable"
                },
                "id": 3047,
                "name": "UserDefinedTypeName",
                "src": "1319:8:7"
              }
            ],
            "id": 3048,
            "name": "InheritanceSpecifier",
            "src": "1319:8:7"
          },
          {
            "attributes": {
              "constant": false,
              "name": "debtRegistry",
              "scope": 3232,
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
                  "referencedDeclaration": 2590,
                  "type": "contract DebtRegistry"
                },
                "id": 3049,
                "name": "UserDefinedTypeName",
                "src": "1334:12:7"
              }
            ],
            "id": 3050,
            "name": "VariableDeclaration",
            "src": "1334:32:7"
          },
          {
            "attributes": {
              "constant": false,
              "name": "tokenTransferProxy",
              "scope": 3232,
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
                  "referencedDeclaration": 3731,
                  "type": "contract TokenTransferProxy"
                },
                "id": 3051,
                "name": "UserDefinedTypeName",
                "src": "1372:18:7"
              }
            ],
            "id": 3052,
            "name": "VariableDeclaration",
            "src": "1372:44:7"
          },
          {
            "attributes": {
              "canonicalName": "RepaymentRouter.Errors",
              "name": "Errors"
            },
            "children": [
              {
                "attributes": {
                  "name": "DEBT_AGREEMENT_NONEXISTENT"
                },
                "id": 3053,
                "name": "EnumValue",
                "src": "1445:26:7"
              },
              {
                "attributes": {
                  "name": "PAYER_BALANCE_OR_ALLOWANCE_INSUFFICIENT"
                },
                "id": 3054,
                "name": "EnumValue",
                "src": "1481:39:7"
              },
              {
                "attributes": {
                  "name": "REPAYMENT_REJECTED_BY_TERMS_CONTRACT"
                },
                "id": 3055,
                "name": "EnumValue",
                "src": "1530:36:7"
              }
            ],
            "id": 3056,
            "name": "EnumDefinition",
            "src": "1423:149:7"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "LogRepayment"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "_agreementId",
                      "scope": 3068,
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
                        "id": 3057,
                        "name": "ElementaryTypeName",
                        "src": "1606:7:7"
                      }
                    ],
                    "id": 3058,
                    "name": "VariableDeclaration",
                    "src": "1606:28:7"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "_payer",
                      "scope": 3068,
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
                        "id": 3059,
                        "name": "ElementaryTypeName",
                        "src": "1644:7:7"
                      }
                    ],
                    "id": 3060,
                    "name": "VariableDeclaration",
                    "src": "1644:22:7"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "_beneficiary",
                      "scope": 3068,
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
                        "id": 3061,
                        "name": "ElementaryTypeName",
                        "src": "1676:7:7"
                      }
                    ],
                    "id": 3062,
                    "name": "VariableDeclaration",
                    "src": "1676:28:7"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "_amount",
                      "scope": 3068,
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
                        "id": 3063,
                        "name": "ElementaryTypeName",
                        "src": "1714:4:7"
                      }
                    ],
                    "id": 3064,
                    "name": "VariableDeclaration",
                    "src": "1714:12:7"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "_token",
                      "scope": 3068,
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
                        "id": 3065,
                        "name": "ElementaryTypeName",
                        "src": "1736:7:7"
                      }
                    ],
                    "id": 3066,
                    "name": "VariableDeclaration",
                    "src": "1736:14:7"
                  }
                ],
                "id": 3067,
                "name": "ParameterList",
                "src": "1596:160:7"
              }
            ],
            "id": 3068,
            "name": "EventDefinition",
            "src": "1578:179:7"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "LogError"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "_errorId",
                      "scope": 3074,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint8",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint8",
                          "type": "uint8"
                        },
                        "id": 3069,
                        "name": "ElementaryTypeName",
                        "src": "1778:5:7"
                      }
                    ],
                    "id": 3070,
                    "name": "VariableDeclaration",
                    "src": "1778:22:7"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "_agreementId",
                      "scope": 3074,
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
                        "id": 3071,
                        "name": "ElementaryTypeName",
                        "src": "1802:7:7"
                      }
                    ],
                    "id": 3072,
                    "name": "VariableDeclaration",
                    "src": "1802:28:7"
                  }
                ],
                "id": 3073,
                "name": "ParameterList",
                "src": "1777:54:7"
              }
            ],
            "id": 3074,
            "name": "EventDefinition",
            "src": "1763:69:7"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": true,
              "modifiers": [
                null
              ],
              "name": "RepaymentRouter",
              "payable": false,
              "scope": 3232,
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
                      "name": "_debtRegistry",
                      "scope": 3094,
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
                        "id": 3075,
                        "name": "ElementaryTypeName",
                        "src": "1962:7:7"
                      }
                    ],
                    "id": 3076,
                    "name": "VariableDeclaration",
                    "src": "1962:21:7"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenTransferProxy",
                      "scope": 3094,
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
                        "id": 3077,
                        "name": "ElementaryTypeName",
                        "src": "1985:7:7"
                      }
                    ],
                    "id": 3078,
                    "name": "VariableDeclaration",
                    "src": "1985:27:7"
                  }
                ],
                "id": 3079,
                "name": "ParameterList",
                "src": "1961:52:7"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 3080,
                "name": "ParameterList",
                "src": "2021:0:7"
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
                          "type": "contract DebtRegistry"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3050,
                              "type": "contract DebtRegistry",
                              "value": "debtRegistry"
                            },
                            "id": 3081,
                            "name": "Identifier",
                            "src": "2031:12:7"
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
                                  "referencedDeclaration": 2590,
                                  "type": "type(contract DebtRegistry)",
                                  "value": "DebtRegistry"
                                },
                                "id": 3082,
                                "name": "Identifier",
                                "src": "2046:12:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3076,
                                  "type": "address",
                                  "value": "_debtRegistry"
                                },
                                "id": 3083,
                                "name": "Identifier",
                                "src": "2059:13:7"
                              }
                            ],
                            "id": 3084,
                            "name": "FunctionCall",
                            "src": "2046:27:7"
                          }
                        ],
                        "id": 3085,
                        "name": "Assignment",
                        "src": "2031:42:7"
                      }
                    ],
                    "id": 3086,
                    "name": "ExpressionStatement",
                    "src": "2031:42:7"
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
                              "referencedDeclaration": 3052,
                              "type": "contract TokenTransferProxy",
                              "value": "tokenTransferProxy"
                            },
                            "id": 3087,
                            "name": "Identifier",
                            "src": "2083:18:7"
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
                                  "referencedDeclaration": 3731,
                                  "type": "type(contract TokenTransferProxy)",
                                  "value": "TokenTransferProxy"
                                },
                                "id": 3088,
                                "name": "Identifier",
                                "src": "2104:18:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3078,
                                  "type": "address",
                                  "value": "_tokenTransferProxy"
                                },
                                "id": 3089,
                                "name": "Identifier",
                                "src": "2123:19:7"
                              }
                            ],
                            "id": 3090,
                            "name": "FunctionCall",
                            "src": "2104:39:7"
                          }
                        ],
                        "id": 3091,
                        "name": "Assignment",
                        "src": "2083:60:7"
                      }
                    ],
                    "id": 3092,
                    "name": "ExpressionStatement",
                    "src": "2083:60:7"
                  }
                ],
                "id": 3093,
                "name": "Block",
                "src": "2021:129:7"
              }
            ],
            "id": 3094,
            "name": "FunctionDefinition",
            "src": "1936:214:7"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "repay",
              "payable": false,
              "scope": 3232,
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
                      "name": "agreementId",
                      "scope": 3231,
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
                        "id": 3095,
                        "name": "ElementaryTypeName",
                        "src": "2384:7:7"
                      }
                    ],
                    "id": 3096,
                    "name": "VariableDeclaration",
                    "src": "2384:19:7"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "amount",
                      "scope": 3231,
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
                        "id": 3097,
                        "name": "ElementaryTypeName",
                        "src": "2413:7:7"
                      }
                    ],
                    "id": 3098,
                    "name": "VariableDeclaration",
                    "src": "2413:14:7"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "tokenAddress",
                      "scope": 3231,
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
                        "id": 3099,
                        "name": "ElementaryTypeName",
                        "src": "2437:7:7"
                      }
                    ],
                    "id": 3100,
                    "name": "VariableDeclaration",
                    "src": "2437:20:7"
                  }
                ],
                "id": 3101,
                "name": "ParameterList",
                "src": "2374:89:7"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_amountRepaid",
                      "scope": 3231,
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
                        "id": 3104,
                        "name": "ElementaryTypeName",
                        "src": "2518:4:7"
                      }
                    ],
                    "id": 3105,
                    "name": "VariableDeclaration",
                    "src": "2518:18:7"
                  }
                ],
                "id": 3106,
                "name": "ParameterList",
                "src": "2517:20:7"
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
                      "referencedDeclaration": 9932,
                      "type": "modifier ()",
                      "value": "whenNotPaused"
                    },
                    "id": 3102,
                    "name": "Identifier",
                    "src": "2487:13:7"
                  }
                ],
                "id": 3103,
                "name": "ModifierInvocation",
                "src": "2487:13:7"
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
                              "referencedDeclaration": 11810,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 3107,
                            "name": "Identifier",
                            "src": "2552:7:7"
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
                                  "referencedDeclaration": 3100,
                                  "type": "address",
                                  "value": "tokenAddress"
                                },
                                "id": 3108,
                                "name": "Identifier",
                                "src": "2560:12:7"
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
                                    "id": 3109,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "2576:7:7"
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
                                    "id": 3110,
                                    "name": "Literal",
                                    "src": "2584:1:7"
                                  }
                                ],
                                "id": 3111,
                                "name": "FunctionCall",
                                "src": "2576:10:7"
                              }
                            ],
                            "id": 3112,
                            "name": "BinaryOperation",
                            "src": "2560:26:7"
                          }
                        ],
                        "id": 3113,
                        "name": "FunctionCall",
                        "src": "2552:35:7"
                      }
                    ],
                    "id": 3114,
                    "name": "ExpressionStatement",
                    "src": "2552:35:7"
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
                              "referencedDeclaration": 11810,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 3115,
                            "name": "Identifier",
                            "src": "2597:7:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": ">",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3098,
                                  "type": "uint256",
                                  "value": "amount"
                                },
                                "id": 3116,
                                "name": "Identifier",
                                "src": "2605:6:7"
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
                                "id": 3117,
                                "name": "Literal",
                                "src": "2614:1:7"
                              }
                            ],
                            "id": 3118,
                            "name": "BinaryOperation",
                            "src": "2605:10:7"
                          }
                        ],
                        "id": 3119,
                        "name": "FunctionCall",
                        "src": "2597:19:7"
                      }
                    ],
                    "id": 3120,
                    "name": "ExpressionStatement",
                    "src": "2597:19:7"
                  },
                  {
                    "attributes": {
                      "falseBody": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "!",
                          "prefix": true,
                          "type": "bool"
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
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "doesEntryExist",
                                  "referencedDeclaration": 2202,
                                  "type": "function (bytes32) view external returns (bool)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3050,
                                      "type": "contract DebtRegistry",
                                      "value": "debtRegistry"
                                    },
                                    "id": 3121,
                                    "name": "Identifier",
                                    "src": "2668:12:7"
                                  }
                                ],
                                "id": 3122,
                                "name": "MemberAccess",
                                "src": "2668:27:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3096,
                                  "type": "bytes32",
                                  "value": "agreementId"
                                },
                                "id": 3123,
                                "name": "Identifier",
                                "src": "2696:11:7"
                              }
                            ],
                            "id": 3124,
                            "name": "FunctionCall",
                            "src": "2668:40:7"
                          }
                        ],
                        "id": 3125,
                        "name": "UnaryOperation",
                        "src": "2667:41:7"
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
                                          "typeIdentifier": "t_uint8",
                                          "typeString": "uint8"
                                        },
                                        {
                                          "typeIdentifier": "t_bytes32",
                                          "typeString": "bytes32"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3074,
                                      "type": "function (uint8,bytes32)",
                                      "value": "LogError"
                                    },
                                    "id": 3126,
                                    "name": "Identifier",
                                    "src": "2724:8:7"
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
                                      "type": "uint8",
                                      "type_conversion": true
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_enum$_Errors_$3056",
                                              "typeString": "enum RepaymentRouter.Errors"
                                            }
                                          ],
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "type": "type(uint8)",
                                          "value": "uint8"
                                        },
                                        "id": 3127,
                                        "name": "ElementaryTypeNameExpression",
                                        "src": "2733:5:7"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "member_name": "DEBT_AGREEMENT_NONEXISTENT",
                                          "referencedDeclaration": null,
                                          "type": "enum RepaymentRouter.Errors"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 3056,
                                              "type": "type(enum RepaymentRouter.Errors)",
                                              "value": "Errors"
                                            },
                                            "id": 3128,
                                            "name": "Identifier",
                                            "src": "2739:6:7"
                                          }
                                        ],
                                        "id": 3129,
                                        "name": "MemberAccess",
                                        "src": "2739:33:7"
                                      }
                                    ],
                                    "id": 3130,
                                    "name": "FunctionCall",
                                    "src": "2733:40:7"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3096,
                                      "type": "bytes32",
                                      "value": "agreementId"
                                    },
                                    "id": 3131,
                                    "name": "Identifier",
                                    "src": "2775:11:7"
                                  }
                                ],
                                "id": 3132,
                                "name": "FunctionCall",
                                "src": "2724:63:7"
                              }
                            ],
                            "id": 3133,
                            "name": "ExpressionStatement",
                            "src": "2724:63:7"
                          },
                          {
                            "attributes": {
                              "functionReturnParameters": 3106
                            },
                            "children": [
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
                                "id": 3134,
                                "name": "Literal",
                                "src": "2808:1:7"
                              }
                            ],
                            "id": 3135,
                            "name": "Return",
                            "src": "2801:8:7"
                          }
                        ],
                        "id": 3136,
                        "name": "Block",
                        "src": "2710:110:7"
                      }
                    ],
                    "id": 3137,
                    "name": "IfStatement",
                    "src": "2663:157:7"
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
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "||",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
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
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "uint256",
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
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "balanceOf",
                                      "referencedDeclaration": 10278,
                                      "type": "function (address) view external returns (uint256)"
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
                                              "referencedDeclaration": 10264,
                                              "type": "type(contract ERC20)",
                                              "value": "ERC20"
                                            },
                                            "id": 3138,
                                            "name": "Identifier",
                                            "src": "2925:5:7"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 3100,
                                              "type": "address",
                                              "value": "tokenAddress"
                                            },
                                            "id": 3139,
                                            "name": "Identifier",
                                            "src": "2931:12:7"
                                          }
                                        ],
                                        "id": 3140,
                                        "name": "FunctionCall",
                                        "src": "2925:19:7"
                                      }
                                    ],
                                    "id": 3141,
                                    "name": "MemberAccess",
                                    "src": "2925:29:7"
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
                                          "referencedDeclaration": 11807,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 3142,
                                        "name": "Identifier",
                                        "src": "2955:3:7"
                                      }
                                    ],
                                    "id": 3143,
                                    "name": "MemberAccess",
                                    "src": "2955:10:7"
                                  }
                                ],
                                "id": 3144,
                                "name": "FunctionCall",
                                "src": "2925:41:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3098,
                                  "type": "uint256",
                                  "value": "amount"
                                },
                                "id": 3145,
                                "name": "Identifier",
                                "src": "2969:6:7"
                              }
                            ],
                            "id": 3146,
                            "name": "BinaryOperation",
                            "src": "2925:50:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
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
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "uint256",
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
                                          "typeIdentifier": "t_contract$_TokenTransferProxy_$3731",
                                          "typeString": "contract TokenTransferProxy"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "allowance",
                                      "referencedDeclaration": 10235,
                                      "type": "function (address,address) view external returns (uint256)"
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
                                              "referencedDeclaration": 10264,
                                              "type": "type(contract ERC20)",
                                              "value": "ERC20"
                                            },
                                            "id": 3147,
                                            "name": "Identifier",
                                            "src": "2991:5:7"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 3100,
                                              "type": "address",
                                              "value": "tokenAddress"
                                            },
                                            "id": 3148,
                                            "name": "Identifier",
                                            "src": "2997:12:7"
                                          }
                                        ],
                                        "id": 3149,
                                        "name": "FunctionCall",
                                        "src": "2991:19:7"
                                      }
                                    ],
                                    "id": 3150,
                                    "name": "MemberAccess",
                                    "src": "2991:29:7"
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
                                          "referencedDeclaration": 11807,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 3151,
                                        "name": "Identifier",
                                        "src": "3021:3:7"
                                      }
                                    ],
                                    "id": 3152,
                                    "name": "MemberAccess",
                                    "src": "3021:10:7"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3052,
                                      "type": "contract TokenTransferProxy",
                                      "value": "tokenTransferProxy"
                                    },
                                    "id": 3153,
                                    "name": "Identifier",
                                    "src": "3033:18:7"
                                  }
                                ],
                                "id": 3154,
                                "name": "FunctionCall",
                                "src": "2991:61:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3098,
                                  "type": "uint256",
                                  "value": "amount"
                                },
                                "id": 3155,
                                "name": "Identifier",
                                "src": "3055:6:7"
                              }
                            ],
                            "id": 3156,
                            "name": "BinaryOperation",
                            "src": "2991:70:7"
                          }
                        ],
                        "id": 3157,
                        "name": "BinaryOperation",
                        "src": "2925:136:7"
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
                                          "typeIdentifier": "t_uint8",
                                          "typeString": "uint8"
                                        },
                                        {
                                          "typeIdentifier": "t_bytes32",
                                          "typeString": "bytes32"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3074,
                                      "type": "function (uint8,bytes32)",
                                      "value": "LogError"
                                    },
                                    "id": 3158,
                                    "name": "Identifier",
                                    "src": "3077:8:7"
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
                                      "type": "uint8",
                                      "type_conversion": true
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_enum$_Errors_$3056",
                                              "typeString": "enum RepaymentRouter.Errors"
                                            }
                                          ],
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "type": "type(uint8)",
                                          "value": "uint8"
                                        },
                                        "id": 3159,
                                        "name": "ElementaryTypeNameExpression",
                                        "src": "3086:5:7"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "member_name": "PAYER_BALANCE_OR_ALLOWANCE_INSUFFICIENT",
                                          "referencedDeclaration": null,
                                          "type": "enum RepaymentRouter.Errors"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 3056,
                                              "type": "type(enum RepaymentRouter.Errors)",
                                              "value": "Errors"
                                            },
                                            "id": 3160,
                                            "name": "Identifier",
                                            "src": "3092:6:7"
                                          }
                                        ],
                                        "id": 3161,
                                        "name": "MemberAccess",
                                        "src": "3092:46:7"
                                      }
                                    ],
                                    "id": 3162,
                                    "name": "FunctionCall",
                                    "src": "3086:53:7"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3096,
                                      "type": "bytes32",
                                      "value": "agreementId"
                                    },
                                    "id": 3163,
                                    "name": "Identifier",
                                    "src": "3141:11:7"
                                  }
                                ],
                                "id": 3164,
                                "name": "FunctionCall",
                                "src": "3077:76:7"
                              }
                            ],
                            "id": 3165,
                            "name": "ExpressionStatement",
                            "src": "3077:76:7"
                          },
                          {
                            "attributes": {
                              "functionReturnParameters": 3106
                            },
                            "children": [
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
                                "id": 3166,
                                "name": "Literal",
                                "src": "3174:1:7"
                              }
                            ],
                            "id": 3167,
                            "name": "Return",
                            "src": "3167:8:7"
                          }
                        ],
                        "id": 3168,
                        "name": "Block",
                        "src": "3063:123:7"
                      }
                    ],
                    "id": 3169,
                    "name": "IfStatement",
                    "src": "2921:265:7"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        3171
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "termsContract",
                          "scope": 3231,
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
                            "id": 3170,
                            "name": "ElementaryTypeName",
                            "src": "3229:7:7"
                          }
                        ],
                        "id": 3171,
                        "name": "VariableDeclaration",
                        "src": "3229:21:7"
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
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "getTermsContract",
                              "referencedDeclaration": 2472,
                              "type": "function (bytes32) view external returns (address)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3050,
                                  "type": "contract DebtRegistry",
                                  "value": "debtRegistry"
                                },
                                "id": 3172,
                                "name": "Identifier",
                                "src": "3253:12:7"
                              }
                            ],
                            "id": 3173,
                            "name": "MemberAccess",
                            "src": "3253:29:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3096,
                              "type": "bytes32",
                              "value": "agreementId"
                            },
                            "id": 3174,
                            "name": "Identifier",
                            "src": "3283:11:7"
                          }
                        ],
                        "id": 3175,
                        "name": "FunctionCall",
                        "src": "3253:42:7"
                      }
                    ],
                    "id": 3176,
                    "name": "VariableDeclarationStatement",
                    "src": "3229:66:7"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        3178
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "beneficiary",
                          "scope": 3231,
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
                            "id": 3177,
                            "name": "ElementaryTypeName",
                            "src": "3305:7:7"
                          }
                        ],
                        "id": 3178,
                        "name": "VariableDeclaration",
                        "src": "3305:19:7"
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
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "getBeneficiary",
                              "referencedDeclaration": 2456,
                              "type": "function (bytes32) view external returns (address)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3050,
                                  "type": "contract DebtRegistry",
                                  "value": "debtRegistry"
                                },
                                "id": 3179,
                                "name": "Identifier",
                                "src": "3327:12:7"
                              }
                            ],
                            "id": 3180,
                            "name": "MemberAccess",
                            "src": "3327:27:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3096,
                              "type": "bytes32",
                              "value": "agreementId"
                            },
                            "id": 3181,
                            "name": "Identifier",
                            "src": "3355:11:7"
                          }
                        ],
                        "id": 3182,
                        "name": "FunctionCall",
                        "src": "3327:40:7"
                      }
                    ],
                    "id": 3183,
                    "name": "VariableDeclarationStatement",
                    "src": "3305:62:7"
                  },
                  {
                    "attributes": {
                      "falseBody": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "!",
                          "prefix": true,
                          "type": "bool"
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
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    },
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
                                    },
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "registerRepayment",
                                  "referencedDeclaration": 3258,
                                  "type": "function (bytes32,address,address,uint256,address) external returns (bool)"
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
                                      "type": "contract TermsContract",
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
                                          "referencedDeclaration": 3282,
                                          "type": "type(contract TermsContract)",
                                          "value": "TermsContract"
                                        },
                                        "id": 3184,
                                        "name": "Identifier",
                                        "src": "3382:13:7"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 3171,
                                          "type": "address",
                                          "value": "termsContract"
                                        },
                                        "id": 3185,
                                        "name": "Identifier",
                                        "src": "3396:13:7"
                                      }
                                    ],
                                    "id": 3186,
                                    "name": "FunctionCall",
                                    "src": "3382:28:7"
                                  }
                                ],
                                "id": 3187,
                                "name": "MemberAccess",
                                "src": "3382:46:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3096,
                                  "type": "bytes32",
                                  "value": "agreementId"
                                },
                                "id": 3188,
                                "name": "Identifier",
                                "src": "3442:11:7"
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
                                      "referencedDeclaration": 11807,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 3189,
                                    "name": "Identifier",
                                    "src": "3467:3:7"
                                  }
                                ],
                                "id": 3190,
                                "name": "MemberAccess",
                                "src": "3467:10:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3178,
                                  "type": "address",
                                  "value": "beneficiary"
                                },
                                "id": 3191,
                                "name": "Identifier",
                                "src": "3491:11:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3098,
                                  "type": "uint256",
                                  "value": "amount"
                                },
                                "id": 3192,
                                "name": "Identifier",
                                "src": "3516:6:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3100,
                                  "type": "address",
                                  "value": "tokenAddress"
                                },
                                "id": 3193,
                                "name": "Identifier",
                                "src": "3536:12:7"
                              }
                            ],
                            "id": 3194,
                            "name": "FunctionCall",
                            "src": "3382:176:7"
                          }
                        ],
                        "id": 3195,
                        "name": "UnaryOperation",
                        "src": "3381:177:7"
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
                                          "typeIdentifier": "t_uint8",
                                          "typeString": "uint8"
                                        },
                                        {
                                          "typeIdentifier": "t_bytes32",
                                          "typeString": "bytes32"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3074,
                                      "type": "function (uint8,bytes32)",
                                      "value": "LogError"
                                    },
                                    "id": 3196,
                                    "name": "Identifier",
                                    "src": "3574:8:7"
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
                                      "type": "uint8",
                                      "type_conversion": true
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_enum$_Errors_$3056",
                                              "typeString": "enum RepaymentRouter.Errors"
                                            }
                                          ],
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "type": "type(uint8)",
                                          "value": "uint8"
                                        },
                                        "id": 3197,
                                        "name": "ElementaryTypeNameExpression",
                                        "src": "3583:5:7"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "member_name": "REPAYMENT_REJECTED_BY_TERMS_CONTRACT",
                                          "referencedDeclaration": null,
                                          "type": "enum RepaymentRouter.Errors"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 3056,
                                              "type": "type(enum RepaymentRouter.Errors)",
                                              "value": "Errors"
                                            },
                                            "id": 3198,
                                            "name": "Identifier",
                                            "src": "3589:6:7"
                                          }
                                        ],
                                        "id": 3199,
                                        "name": "MemberAccess",
                                        "src": "3589:43:7"
                                      }
                                    ],
                                    "id": 3200,
                                    "name": "FunctionCall",
                                    "src": "3583:50:7"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3096,
                                      "type": "bytes32",
                                      "value": "agreementId"
                                    },
                                    "id": 3201,
                                    "name": "Identifier",
                                    "src": "3635:11:7"
                                  }
                                ],
                                "id": 3202,
                                "name": "FunctionCall",
                                "src": "3574:73:7"
                              }
                            ],
                            "id": 3203,
                            "name": "ExpressionStatement",
                            "src": "3574:73:7"
                          },
                          {
                            "attributes": {
                              "functionReturnParameters": 3106
                            },
                            "children": [
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
                                "id": 3204,
                                "name": "Literal",
                                "src": "3668:1:7"
                              }
                            ],
                            "id": 3205,
                            "name": "Return",
                            "src": "3661:8:7"
                          }
                        ],
                        "id": 3206,
                        "name": "Block",
                        "src": "3560:120:7"
                      }
                    ],
                    "id": 3207,
                    "name": "IfStatement",
                    "src": "3377:303:7"
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
                              "referencedDeclaration": 11810,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 3208,
                            "name": "Identifier",
                            "src": "3729:7:7"
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
                                    },
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
                                  "referencedDeclaration": 3730,
                                  "type": "function (address,address,address,uint256) external returns (bool)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3052,
                                      "type": "contract TokenTransferProxy",
                                      "value": "tokenTransferProxy"
                                    },
                                    "id": 3209,
                                    "name": "Identifier",
                                    "src": "3737:18:7"
                                  }
                                ],
                                "id": 3210,
                                "name": "MemberAccess",
                                "src": "3737:31:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3100,
                                  "type": "address",
                                  "value": "tokenAddress"
                                },
                                "id": 3211,
                                "name": "Identifier",
                                "src": "3782:12:7"
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
                                      "referencedDeclaration": 11807,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 3212,
                                    "name": "Identifier",
                                    "src": "3808:3:7"
                                  }
                                ],
                                "id": 3213,
                                "name": "MemberAccess",
                                "src": "3808:10:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3178,
                                  "type": "address",
                                  "value": "beneficiary"
                                },
                                "id": 3214,
                                "name": "Identifier",
                                "src": "3832:11:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3098,
                                  "type": "uint256",
                                  "value": "amount"
                                },
                                "id": 3215,
                                "name": "Identifier",
                                "src": "3857:6:7"
                              }
                            ],
                            "id": 3216,
                            "name": "FunctionCall",
                            "src": "3737:136:7"
                          }
                        ],
                        "id": 3217,
                        "name": "FunctionCall",
                        "src": "3729:145:7"
                      }
                    ],
                    "id": 3218,
                    "name": "ExpressionStatement",
                    "src": "3729:145:7"
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
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                },
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
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3068,
                              "type": "function (bytes32,address,address,uint256,address)",
                              "value": "LogRepayment"
                            },
                            "id": 3219,
                            "name": "Identifier",
                            "src": "3920:12:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3096,
                              "type": "bytes32",
                              "value": "agreementId"
                            },
                            "id": 3220,
                            "name": "Identifier",
                            "src": "3933:11:7"
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
                                  "referencedDeclaration": 11807,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 3221,
                                "name": "Identifier",
                                "src": "3946:3:7"
                              }
                            ],
                            "id": 3222,
                            "name": "MemberAccess",
                            "src": "3946:10:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3178,
                              "type": "address",
                              "value": "beneficiary"
                            },
                            "id": 3223,
                            "name": "Identifier",
                            "src": "3958:11:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3098,
                              "type": "uint256",
                              "value": "amount"
                            },
                            "id": 3224,
                            "name": "Identifier",
                            "src": "3971:6:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3100,
                              "type": "address",
                              "value": "tokenAddress"
                            },
                            "id": 3225,
                            "name": "Identifier",
                            "src": "3979:12:7"
                          }
                        ],
                        "id": 3226,
                        "name": "FunctionCall",
                        "src": "3920:72:7"
                      }
                    ],
                    "id": 3227,
                    "name": "ExpressionStatement",
                    "src": "3920:72:7"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 3106
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 3098,
                          "type": "uint256",
                          "value": "amount"
                        },
                        "id": 3228,
                        "name": "Identifier",
                        "src": "4010:6:7"
                      }
                    ],
                    "id": 3229,
                    "name": "Return",
                    "src": "4003:13:7"
                  }
                ],
                "id": 3230,
                "name": "Block",
                "src": "2542:1481:7"
              }
            ],
            "id": 3231,
            "name": "FunctionDefinition",
            "src": "2360:1663:7"
          }
        ],
        "id": 3232,
        "name": "ContractDefinition",
        "src": "1291:2734:7"
      }
    ],
    "id": 3233,
    "name": "SourceUnit",
    "src": "584:3442:7"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {
    "1": {
      "events": {
        "0x43ea5a2b552489bf9de7c3d6ded86e3b82423e034255d06db4b388f806db50d0": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "_agreementId",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "name": "_payer",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "_beneficiary",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "_amount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "name": "_token",
              "type": "address"
            }
          ],
          "name": "LogRepayment",
          "type": "event"
        },
        "0x36d86c59e00bd73dc19ba3adfe068e4b64ac7e92be35546adeddf1b956a87e90": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "_errorId",
              "type": "uint8"
            },
            {
              "indexed": true,
              "name": "_agreementId",
              "type": "bytes32"
            }
          ],
          "name": "LogError",
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
      "address": "0xc1df9b92645cc3b6733992c692a39c34a86fae5f"
    },
    "42": {
      "events": {
        "0x43ea5a2b552489bf9de7c3d6ded86e3b82423e034255d06db4b388f806db50d0": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "_agreementId",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "name": "_payer",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "_beneficiary",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "_amount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "name": "_token",
              "type": "address"
            }
          ],
          "name": "LogRepayment",
          "type": "event"
        },
        "0x36d86c59e00bd73dc19ba3adfe068e4b64ac7e92be35546adeddf1b956a87e90": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "_errorId",
              "type": "uint8"
            },
            {
              "indexed": true,
              "name": "_agreementId",
              "type": "bytes32"
            }
          ],
          "name": "LogError",
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
      "address": "0x0688659d5e36896da7e5d44ebe3e10aa9d2c9968"
    },
    "70": {
      "events": {
        "0x43ea5a2b552489bf9de7c3d6ded86e3b82423e034255d06db4b388f806db50d0": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "_agreementId",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "name": "_payer",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "_beneficiary",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "_amount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "name": "_token",
              "type": "address"
            }
          ],
          "name": "LogRepayment",
          "type": "event"
        },
        "0x36d86c59e00bd73dc19ba3adfe068e4b64ac7e92be35546adeddf1b956a87e90": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "_errorId",
              "type": "uint8"
            },
            {
              "indexed": true,
              "name": "_agreementId",
              "type": "bytes32"
            }
          ],
          "name": "LogError",
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
  "updatedAt": "2018-07-24T01:55:45.005Z"
}