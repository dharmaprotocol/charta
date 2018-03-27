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
  "bytecode": "0x606060405260008060146101000a81548160ff021916908315150217905550341561002957600080fd5b604051604080610f4e83398101604052808051906020019091908051906020019091905050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050610e2d806101216000396000f30060606040526004361061008e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630eefdbad146100935780632f866f73146100e85780633f4ba83a1461013d5780635c975abb146101525780638456cb591461017f5780638da5cb5b14610194578063f2fde38b146101e9578063ff26812514610222575b600080fd5b341561009e57600080fd5b6100a6610285565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156100f357600080fd5b6100fb6102ab565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561014857600080fd5b6101506102d1565b005b341561015d57600080fd5b61016561038f565b604051808215151515815260200191505060405180910390f35b341561018a57600080fd5b6101926103a2565b005b341561019f57600080fd5b6101a7610462565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156101f457600080fd5b610220600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610487565b005b341561022d57600080fd5b61026f60048080356000191690602001909190803590602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506105dc565b6040518082815260200191505060405180910390f35b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561032c57600080fd5b600060149054906101000a900460ff16151561034757600080fd5b60008060146101000a81548160ff0219169083151502179055507f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3360405160405180910390a1565b600060149054906101000a900460ff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156103fd57600080fd5b600060149054906101000a900460ff1615151561041957600080fd5b6001600060146101000a81548160ff0219169083151502179055507f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62560405160405180910390a1565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156104e257600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561051e57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008060008060149054906101000a900460ff161515156105fc57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415151561063857600080fd5b60008511151561064757600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ba20dda4876000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b15156106e857600080fd5b6102c65a03f115156106f957600080fd5b505050604051805190509150600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156107845785600019166000600281111561074c57fe5b60ff167f36d86c59e00bd73dc19ba3adfe068e4b64ac7e92be35546adeddf1b956a87e9060405160405180910390a360009250610df8565b848473ffffffffffffffffffffffffffffffffffffffff166370a08231336000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b151561082857600080fd5b6102c65a03f1151561083957600080fd5b5050506040518051905010806109615750848473ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e33600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166000604051602001526040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200192505050602060405180830381600087803b151561094457600080fd5b6102c65a03f1151561095557600080fd5b50505060405180519050105b156109b05785600019166001600281111561097857fe5b60ff167f36d86c59e00bd73dc19ba3adfe068e4b64ac7e92be35546adeddf1b956a87e9060405160405180910390a360009250610df8565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f6f494c9876000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b1515610a5157600080fd5b6102c65a03f11515610a6257600080fd5b5050506040518051905090508073ffffffffffffffffffffffffffffffffffffffff16635f0280ba87338589896000604051602001526040518663ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018086600019166000191681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200195505050505050602060405180830381600087803b1515610b9157600080fd5b6102c65a03f11515610ba257600080fd5b505050604051805190501515610bfb578560001916600280811115610bc357fe5b60ff167f36d86c59e00bd73dc19ba3adfe068e4b64ac7e92be35546adeddf1b956a87e9060405160405180910390a360009250610df8565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166315dacbea853385896000604051602001526040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001945050505050602060405180830381600087803b1515610d3057600080fd5b6102c65a03f11515610d4157600080fd5b505050604051805190501515610d5657600080fd5b8173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1687600019167f43ea5a2b552489bf9de7c3d6ded86e3b82423e034255d06db4b388f806db50d08888604051808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a48492505b505093925050505600a165627a7a72305820fc5616f293ab65107d130b5a7b2a7fa976d7efb0064984253f7c2ca22538526e0029",
  "deployedBytecode": "0x60606040526004361061008e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630eefdbad146100935780632f866f73146100e85780633f4ba83a1461013d5780635c975abb146101525780638456cb591461017f5780638da5cb5b14610194578063f2fde38b146101e9578063ff26812514610222575b600080fd5b341561009e57600080fd5b6100a6610285565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156100f357600080fd5b6100fb6102ab565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561014857600080fd5b6101506102d1565b005b341561015d57600080fd5b61016561038f565b604051808215151515815260200191505060405180910390f35b341561018a57600080fd5b6101926103a2565b005b341561019f57600080fd5b6101a7610462565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156101f457600080fd5b610220600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610487565b005b341561022d57600080fd5b61026f60048080356000191690602001909190803590602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506105dc565b6040518082815260200191505060405180910390f35b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561032c57600080fd5b600060149054906101000a900460ff16151561034757600080fd5b60008060146101000a81548160ff0219169083151502179055507f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3360405160405180910390a1565b600060149054906101000a900460ff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156103fd57600080fd5b600060149054906101000a900460ff1615151561041957600080fd5b6001600060146101000a81548160ff0219169083151502179055507f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62560405160405180910390a1565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156104e257600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561051e57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008060008060149054906101000a900460ff161515156105fc57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415151561063857600080fd5b60008511151561064757600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ba20dda4876000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b15156106e857600080fd5b6102c65a03f115156106f957600080fd5b505050604051805190509150600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156107845785600019166000600281111561074c57fe5b60ff167f36d86c59e00bd73dc19ba3adfe068e4b64ac7e92be35546adeddf1b956a87e9060405160405180910390a360009250610df8565b848473ffffffffffffffffffffffffffffffffffffffff166370a08231336000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b151561082857600080fd5b6102c65a03f1151561083957600080fd5b5050506040518051905010806109615750848473ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e33600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166000604051602001526040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200192505050602060405180830381600087803b151561094457600080fd5b6102c65a03f1151561095557600080fd5b50505060405180519050105b156109b05785600019166001600281111561097857fe5b60ff167f36d86c59e00bd73dc19ba3adfe068e4b64ac7e92be35546adeddf1b956a87e9060405160405180910390a360009250610df8565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f6f494c9876000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b1515610a5157600080fd5b6102c65a03f11515610a6257600080fd5b5050506040518051905090508073ffffffffffffffffffffffffffffffffffffffff16635f0280ba87338589896000604051602001526040518663ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018086600019166000191681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200195505050505050602060405180830381600087803b1515610b9157600080fd5b6102c65a03f11515610ba257600080fd5b505050604051805190501515610bfb578560001916600280811115610bc357fe5b60ff167f36d86c59e00bd73dc19ba3adfe068e4b64ac7e92be35546adeddf1b956a87e9060405160405180910390a360009250610df8565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166315dacbea853385896000604051602001526040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001945050505050602060405180830381600087803b1515610d3057600080fd5b6102c65a03f11515610d4157600080fd5b505050604051805190501515610d5657600080fd5b8173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1687600019167f43ea5a2b552489bf9de7c3d6ded86e3b82423e034255d06db4b388f806db50d08888604051808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a48492505b505093925050505600a165627a7a72305820fc5616f293ab65107d130b5a7b2a7fa976d7efb0064984253f7c2ca22538526e0029",
  "sourceMap": "1339:2792:3:-;;;268:5:20;247:26;;;;;;;;;;;;;;;;;;;;1984:214:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;509:10:22;501:5;;:18;;;;;;;;;;;;;;;;;;2107:13:3;2079:12;;:42;;;;;;;;;;;;;;;;;;2171:19;2131:18;;:60;;;;;;;;;;;;;;;;;;1984:214;;1339:2792;;;;;;",
  "deployedSourceMap": "1339:2792:3:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1420:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1382:32;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;833:87:20;;;;;;;;;;;;;;247:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;666:85;;;;;;;;;;;;;;238:20:22;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;832:169;;;;;;;;;;;;;;;;;;;;;;;;;;;;2461:1668:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1420:44;;;;;;;;;;;;;:::o;1382:32::-;;;;;;;;;;;;;:::o;833:87:20:-;653:5:22;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;568:6:20;;;;;;;;;;;560:15;;;;;;;;895:5;886:6;;:14;;;;;;;;;;;;;;;;;;906:9;;;;;;;;;;833:87::o;247:26::-;;;;;;;;;;;;;:::o;666:85::-;653:5:22;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;416:6:20;;;;;;;;;;;415:7;407:16;;;;;;;;729:4;720:6;;:13;;;;;;;;;;;;;;;;;;739:7;;;;;;;;;;666:85::o;238:20:22:-;;;;;;;;;;;;;:::o;832:169::-;653:5;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;928:1;908:22;;:8;:22;;;;900:31;;;;;;;;965:8;937:37;;958:5;;;;;;;;;;;937:37;;;;;;;;;;;;988:8;980:5;;:16;;;;;;;;;;;;;;;;;;832:169;:::o;2461:1668:3:-;2619:18;2786:19;3407:21;416:6:20;;;;;;;;;;;415:7;407:16;;;;;;;;2685:1:3;2661:26;;:12;:26;;;;2653:35;;;;;;;;2715:1;2706:6;:10;2698:19;;;;;;;;2808:12;;;;;;;;;;;:27;;;2836:11;2808:40;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2786:62;;2885:1;2862:25;;:11;:25;;;2858:141;;;2954:11;2903:63;;;2918:33;2912:40;;;;;;;;2903:63;;;;;;;;;;;;2987:1;2980:8;;;;2858:141;3147:6;3109:12;3103:29;;;3133:10;3103:41;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:50;:136;;;;3233:6;3175:12;3169:29;;;3199:10;3211:18;;;;;;;;;;;3169:61;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:70;3103:136;3099:265;;;3319:11;3255:76;;;3270:46;3264:53;;;;;;;;3255:76;;;;;;;;;;;;3352:1;3345:8;;;;3099:265;3431:12;;;;;;;;;;;:29;;;3461:11;3431:42;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3407:66;;3502:13;3488:46;;;3548:11;3573:10;3597:11;3622:6;3642:12;3488:176;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3487:177;3483:303;;;3741:11;3680:73;;;3695:43;3689:50;;;;;;;;3680:73;;;;;;;;;;;;3774:1;3767:8;;;;3483:303;3843:18;;;;;;;;;;;:31;;;3888:12;3914:10;3938:11;3963:6;3843:136;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3835:145;;;;;;;;4064:11;4026:72;;4052:10;4026:72;;4039:11;4026:72;;;;4077:6;4085:12;4026:72;;;;;;;;;;;;;;;;;;;;;;;;;;;;4116:6;4109:13;;429:1:20;2461:1668:3;;;;;;;:::o",
  "source": "/*\n\n  Copyright 2017 Dharma Labs Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n*/\n\npragma solidity 0.4.18;\n\nimport \"./DebtRegistry.sol\";\nimport \"./TermsContract.sol\";\nimport \"./TokenTransferProxy.sol\";\nimport \"zeppelin-solidity/contracts/token/ERC20/ERC20.sol\";\nimport \"zeppelin-solidity/contracts/lifecycle/Pausable.sol\";\nimport \"NonFungibleToken/contracts/ERC721.sol\";\n\n\n/**\n * The RepaymentRouter routes allowers payers to make repayments on any\n * given debt agreement in any given token by routing the payments to\n * the debt agreement's beneficiary.  Additionally, the router acts\n * as a trusted oracle to the debt agreement's terms contract, informing\n * it of exactly what payments have been made in what quantity and in what token.\n *\n * Authors: Jaynti Kanani -- Github: jdkanani, Nadav Hollander -- Github: nadavhollander\n */\ncontract RepaymentRouter is Pausable {\n    DebtRegistry public debtRegistry;\n    TokenTransferProxy public tokenTransferProxy;\n\n    enum Errors {\n        DEBT_AGREEMENT_NONEXISTENT,\n        PAYER_BALANCE_OR_ALLOWANCE_INSUFFICIENT,\n        REPAYMENT_REJECTED_BY_TERMS_CONTRACT\n    }\n\n    event LogRepayment(\n        bytes32 indexed _agreementId,\n        address indexed _payer,\n        address indexed _beneficiary,\n        uint _amount,\n        address _token\n    );\n\n    event LogError(uint8 indexed _errorId, bytes32 indexed _agreementId);\n\n    /**\n     * Constructor points the repayment router at the deployed registry contract.\n     */\n    function RepaymentRouter (address _debtRegistry, address _tokenTransferProxy) public {\n        debtRegistry = DebtRegistry(_debtRegistry);\n        tokenTransferProxy = TokenTransferProxy(_tokenTransferProxy);\n    }\n\n    /**\n     * Given an agreement id (synonymous to 'issuanceHash' in the debt registry), routes a repayment\n     * of a given ERC20 token  to the debt's current beneficiary, and reports the repayment\n     * to the debt's associated terms contract.\n     */\n    function repay(\n        bytes32 agreementId,\n        uint256 amount,\n        address tokenAddress\n    )\n        public\n        whenNotPaused\n        returns (uint _amountRepaid)\n    {\n        require(tokenAddress != address(0));\n        require(amount > 0);\n\n        // Get registry entry and check if entry is valid\n        address beneficiary = debtRegistry.getBeneficiary(agreementId);\n        if (beneficiary == address(0)) {\n            LogError(uint8(Errors.DEBT_AGREEMENT_NONEXISTENT), agreementId);\n            return 0;\n        }\n\n        // Check payer has sufficient balance and has granted router sufficient allowance\n        if (ERC20(tokenAddress).balanceOf(msg.sender) < amount ||\n            ERC20(tokenAddress).allowance(msg.sender, tokenTransferProxy) < amount) {\n            LogError(uint8(Errors.PAYER_BALANCE_OR_ALLOWANCE_INSUFFICIENT), agreementId);\n            return 0;\n        }\n\n        // Notify terms contract\n        address termsContract = debtRegistry.getTermsContract(agreementId);\n        if (!TermsContract(termsContract).registerRepayment(\n            agreementId,\n            msg.sender,\n            beneficiary,\n            amount,\n            tokenAddress\n        )) {\n            LogError(uint8(Errors.REPAYMENT_REJECTED_BY_TERMS_CONTRACT), agreementId);\n            return 0;\n        }\n\n        // Transfer amount to creditor\n        require(tokenTransferProxy.transferFrom(\n            tokenAddress,\n            msg.sender,\n            beneficiary,\n            amount\n        ));\n\n        // Log event for repayment\n        LogRepayment(agreementId, msg.sender, beneficiary, amount, tokenAddress);\n\n        return amount;\n    }\n}\n",
  "sourcePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/RepaymentRouter.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/RepaymentRouter.sol",
      "exportedSymbols": {
        "RepaymentRouter": [
          2063
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
        "id": 1871,
        "name": "PragmaDirective",
        "src": "584:23:3"
      },
      {
        "attributes": {
          "SourceUnit": 1665,
          "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/DebtRegistry.sol",
          "file": "./DebtRegistry.sol",
          "scope": 2064,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 1872,
        "name": "ImportDirective",
        "src": "609:28:3"
      },
      {
        "attributes": {
          "SourceUnit": 2107,
          "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/TermsContract.sol",
          "file": "./TermsContract.sol",
          "scope": 2064,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 1873,
        "name": "ImportDirective",
        "src": "638:29:3"
      },
      {
        "attributes": {
          "SourceUnit": 2322,
          "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/TokenTransferProxy.sol",
          "file": "./TokenTransferProxy.sol",
          "scope": 2064,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 1874,
        "name": "ImportDirective",
        "src": "668:34:3"
      },
      {
        "attributes": {
          "SourceUnit": 5535,
          "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
          "file": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
          "scope": 2064,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 1875,
        "name": "ImportDirective",
        "src": "703:59:3"
      },
      {
        "attributes": {
          "SourceUnit": 5338,
          "absolutePath": "zeppelin-solidity/contracts/lifecycle/Pausable.sol",
          "file": "zeppelin-solidity/contracts/lifecycle/Pausable.sol",
          "scope": 2064,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 1876,
        "name": "ImportDirective",
        "src": "763:60:3"
      },
      {
        "attributes": {
          "SourceUnit": 4656,
          "absolutePath": "NonFungibleToken/contracts/ERC721.sol",
          "file": "NonFungibleToken/contracts/ERC721.sol",
          "scope": 2064,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 1877,
        "name": "ImportDirective",
        "src": "824:47:3"
      },
      {
        "attributes": {
          "contractDependencies": [
            5337,
            5491
          ],
          "contractKind": "contract",
          "documentation": "The RepaymentRouter routes allowers payers to make repayments on any\ngiven debt agreement in any given token by routing the payments to\nthe debt agreement's beneficiary.  Additionally, the router acts\nas a trusted oracle to the debt agreement's terms contract, informing\nit of exactly what payments have been made in what quantity and in what token.\n * Authors: Jaynti Kanani -- Github: jdkanani, Nadav Hollander -- Github: nadavhollander",
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            2063,
            5337,
            5491
          ],
          "name": "RepaymentRouter",
          "scope": 2064
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
                  "referencedDeclaration": 5337,
                  "type": "contract Pausable"
                },
                "id": 1878,
                "name": "UserDefinedTypeName",
                "src": "1367:8:3"
              }
            ],
            "id": 1879,
            "name": "InheritanceSpecifier",
            "src": "1367:8:3"
          },
          {
            "attributes": {
              "constant": false,
              "name": "debtRegistry",
              "scope": 2063,
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
                  "referencedDeclaration": 1664,
                  "type": "contract DebtRegistry"
                },
                "id": 1880,
                "name": "UserDefinedTypeName",
                "src": "1382:12:3"
              }
            ],
            "id": 1881,
            "name": "VariableDeclaration",
            "src": "1382:32:3"
          },
          {
            "attributes": {
              "constant": false,
              "name": "tokenTransferProxy",
              "scope": 2063,
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
                  "referencedDeclaration": 2321,
                  "type": "contract TokenTransferProxy"
                },
                "id": 1882,
                "name": "UserDefinedTypeName",
                "src": "1420:18:3"
              }
            ],
            "id": 1883,
            "name": "VariableDeclaration",
            "src": "1420:44:3"
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
                "id": 1884,
                "name": "EnumValue",
                "src": "1493:26:3"
              },
              {
                "attributes": {
                  "name": "PAYER_BALANCE_OR_ALLOWANCE_INSUFFICIENT"
                },
                "id": 1885,
                "name": "EnumValue",
                "src": "1529:39:3"
              },
              {
                "attributes": {
                  "name": "REPAYMENT_REJECTED_BY_TERMS_CONTRACT"
                },
                "id": 1886,
                "name": "EnumValue",
                "src": "1578:36:3"
              }
            ],
            "id": 1887,
            "name": "EnumDefinition",
            "src": "1471:149:3"
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
                      "scope": 1899,
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
                        "id": 1888,
                        "name": "ElementaryTypeName",
                        "src": "1654:7:3"
                      }
                    ],
                    "id": 1889,
                    "name": "VariableDeclaration",
                    "src": "1654:28:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "_payer",
                      "scope": 1899,
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
                        "id": 1890,
                        "name": "ElementaryTypeName",
                        "src": "1692:7:3"
                      }
                    ],
                    "id": 1891,
                    "name": "VariableDeclaration",
                    "src": "1692:22:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "_beneficiary",
                      "scope": 1899,
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
                        "id": 1892,
                        "name": "ElementaryTypeName",
                        "src": "1724:7:3"
                      }
                    ],
                    "id": 1893,
                    "name": "VariableDeclaration",
                    "src": "1724:28:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "_amount",
                      "scope": 1899,
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
                        "id": 1894,
                        "name": "ElementaryTypeName",
                        "src": "1762:4:3"
                      }
                    ],
                    "id": 1895,
                    "name": "VariableDeclaration",
                    "src": "1762:12:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "_token",
                      "scope": 1899,
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
                        "id": 1896,
                        "name": "ElementaryTypeName",
                        "src": "1784:7:3"
                      }
                    ],
                    "id": 1897,
                    "name": "VariableDeclaration",
                    "src": "1784:14:3"
                  }
                ],
                "id": 1898,
                "name": "ParameterList",
                "src": "1644:160:3"
              }
            ],
            "id": 1899,
            "name": "EventDefinition",
            "src": "1626:179:3"
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
                      "scope": 1905,
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
                        "id": 1900,
                        "name": "ElementaryTypeName",
                        "src": "1826:5:3"
                      }
                    ],
                    "id": 1901,
                    "name": "VariableDeclaration",
                    "src": "1826:22:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "_agreementId",
                      "scope": 1905,
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
                        "id": 1902,
                        "name": "ElementaryTypeName",
                        "src": "1850:7:3"
                      }
                    ],
                    "id": 1903,
                    "name": "VariableDeclaration",
                    "src": "1850:28:3"
                  }
                ],
                "id": 1904,
                "name": "ParameterList",
                "src": "1825:54:3"
              }
            ],
            "id": 1905,
            "name": "EventDefinition",
            "src": "1811:69:3"
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
              "scope": 2063,
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
                      "scope": 1925,
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
                        "id": 1906,
                        "name": "ElementaryTypeName",
                        "src": "2010:7:3"
                      }
                    ],
                    "id": 1907,
                    "name": "VariableDeclaration",
                    "src": "2010:21:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenTransferProxy",
                      "scope": 1925,
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
                        "id": 1908,
                        "name": "ElementaryTypeName",
                        "src": "2033:7:3"
                      }
                    ],
                    "id": 1909,
                    "name": "VariableDeclaration",
                    "src": "2033:27:3"
                  }
                ],
                "id": 1910,
                "name": "ParameterList",
                "src": "2009:52:3"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 1911,
                "name": "ParameterList",
                "src": "2069:0:3"
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
                              "referencedDeclaration": 1881,
                              "type": "contract DebtRegistry",
                              "value": "debtRegistry"
                            },
                            "id": 1912,
                            "name": "Identifier",
                            "src": "2079:12:3"
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
                                  "referencedDeclaration": 1664,
                                  "type": "type(contract DebtRegistry)",
                                  "value": "DebtRegistry"
                                },
                                "id": 1913,
                                "name": "Identifier",
                                "src": "2094:12:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1907,
                                  "type": "address",
                                  "value": "_debtRegistry"
                                },
                                "id": 1914,
                                "name": "Identifier",
                                "src": "2107:13:3"
                              }
                            ],
                            "id": 1915,
                            "name": "FunctionCall",
                            "src": "2094:27:3"
                          }
                        ],
                        "id": 1916,
                        "name": "Assignment",
                        "src": "2079:42:3"
                      }
                    ],
                    "id": 1917,
                    "name": "ExpressionStatement",
                    "src": "2079:42:3"
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
                              "referencedDeclaration": 1883,
                              "type": "contract TokenTransferProxy",
                              "value": "tokenTransferProxy"
                            },
                            "id": 1918,
                            "name": "Identifier",
                            "src": "2131:18:3"
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
                                  "referencedDeclaration": 2321,
                                  "type": "type(contract TokenTransferProxy)",
                                  "value": "TokenTransferProxy"
                                },
                                "id": 1919,
                                "name": "Identifier",
                                "src": "2152:18:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1909,
                                  "type": "address",
                                  "value": "_tokenTransferProxy"
                                },
                                "id": 1920,
                                "name": "Identifier",
                                "src": "2171:19:3"
                              }
                            ],
                            "id": 1921,
                            "name": "FunctionCall",
                            "src": "2152:39:3"
                          }
                        ],
                        "id": 1922,
                        "name": "Assignment",
                        "src": "2131:60:3"
                      }
                    ],
                    "id": 1923,
                    "name": "ExpressionStatement",
                    "src": "2131:60:3"
                  }
                ],
                "id": 1924,
                "name": "Block",
                "src": "2069:129:3"
              }
            ],
            "id": 1925,
            "name": "FunctionDefinition",
            "src": "1984:214:3"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "repay",
              "payable": false,
              "scope": 2063,
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
                      "scope": 2062,
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
                        "id": 1926,
                        "name": "ElementaryTypeName",
                        "src": "2485:7:3"
                      }
                    ],
                    "id": 1927,
                    "name": "VariableDeclaration",
                    "src": "2485:19:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "amount",
                      "scope": 2062,
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
                        "id": 1928,
                        "name": "ElementaryTypeName",
                        "src": "2514:7:3"
                      }
                    ],
                    "id": 1929,
                    "name": "VariableDeclaration",
                    "src": "2514:14:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "tokenAddress",
                      "scope": 2062,
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
                        "id": 1930,
                        "name": "ElementaryTypeName",
                        "src": "2538:7:3"
                      }
                    ],
                    "id": 1931,
                    "name": "VariableDeclaration",
                    "src": "2538:20:3"
                  }
                ],
                "id": 1932,
                "name": "ParameterList",
                "src": "2475:89:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_amountRepaid",
                      "scope": 2062,
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
                        "id": 1935,
                        "name": "ElementaryTypeName",
                        "src": "2619:4:3"
                      }
                    ],
                    "id": 1936,
                    "name": "VariableDeclaration",
                    "src": "2619:18:3"
                  }
                ],
                "id": 1937,
                "name": "ParameterList",
                "src": "2618:20:3"
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
                      "referencedDeclaration": 5298,
                      "type": "modifier ()",
                      "value": "whenNotPaused"
                    },
                    "id": 1933,
                    "name": "Identifier",
                    "src": "2588:13:3"
                  }
                ],
                "id": 1934,
                "name": "ModifierInvocation",
                "src": "2588:13:3"
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
                              "referencedDeclaration": 5581,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 1938,
                            "name": "Identifier",
                            "src": "2653:7:3"
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
                                  "referencedDeclaration": 1931,
                                  "type": "address",
                                  "value": "tokenAddress"
                                },
                                "id": 1939,
                                "name": "Identifier",
                                "src": "2661:12:3"
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
                                    "id": 1940,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "2677:7:3"
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
                                    "id": 1941,
                                    "name": "Literal",
                                    "src": "2685:1:3"
                                  }
                                ],
                                "id": 1942,
                                "name": "FunctionCall",
                                "src": "2677:10:3"
                              }
                            ],
                            "id": 1943,
                            "name": "BinaryOperation",
                            "src": "2661:26:3"
                          }
                        ],
                        "id": 1944,
                        "name": "FunctionCall",
                        "src": "2653:35:3"
                      }
                    ],
                    "id": 1945,
                    "name": "ExpressionStatement",
                    "src": "2653:35:3"
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
                              "referencedDeclaration": 5581,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 1946,
                            "name": "Identifier",
                            "src": "2698:7:3"
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
                                  "referencedDeclaration": 1929,
                                  "type": "uint256",
                                  "value": "amount"
                                },
                                "id": 1947,
                                "name": "Identifier",
                                "src": "2706:6:3"
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
                                "id": 1948,
                                "name": "Literal",
                                "src": "2715:1:3"
                              }
                            ],
                            "id": 1949,
                            "name": "BinaryOperation",
                            "src": "2706:10:3"
                          }
                        ],
                        "id": 1950,
                        "name": "FunctionCall",
                        "src": "2698:19:3"
                      }
                    ],
                    "id": 1951,
                    "name": "ExpressionStatement",
                    "src": "2698:19:3"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        1953
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "beneficiary",
                          "scope": 2062,
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
                            "id": 1952,
                            "name": "ElementaryTypeName",
                            "src": "2786:7:3"
                          }
                        ],
                        "id": 1953,
                        "name": "VariableDeclaration",
                        "src": "2786:19:3"
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
                              "referencedDeclaration": 1539,
                              "type": "function (bytes32) view external returns (address)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1881,
                                  "type": "contract DebtRegistry",
                                  "value": "debtRegistry"
                                },
                                "id": 1954,
                                "name": "Identifier",
                                "src": "2808:12:3"
                              }
                            ],
                            "id": 1955,
                            "name": "MemberAccess",
                            "src": "2808:27:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1927,
                              "type": "bytes32",
                              "value": "agreementId"
                            },
                            "id": 1956,
                            "name": "Identifier",
                            "src": "2836:11:3"
                          }
                        ],
                        "id": 1957,
                        "name": "FunctionCall",
                        "src": "2808:40:3"
                      }
                    ],
                    "id": 1958,
                    "name": "VariableDeclarationStatement",
                    "src": "2786:62:3"
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
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1953,
                              "type": "address",
                              "value": "beneficiary"
                            },
                            "id": 1959,
                            "name": "Identifier",
                            "src": "2862:11:3"
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
                                "id": 1960,
                                "name": "ElementaryTypeNameExpression",
                                "src": "2877:7:3"
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
                                "id": 1961,
                                "name": "Literal",
                                "src": "2885:1:3"
                              }
                            ],
                            "id": 1962,
                            "name": "FunctionCall",
                            "src": "2877:10:3"
                          }
                        ],
                        "id": 1963,
                        "name": "BinaryOperation",
                        "src": "2862:25:3"
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
                                      "referencedDeclaration": 1905,
                                      "type": "function (uint8,bytes32)",
                                      "value": "LogError"
                                    },
                                    "id": 1964,
                                    "name": "Identifier",
                                    "src": "2903:8:3"
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
                                              "typeIdentifier": "t_enum$_Errors_$1887",
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
                                        "id": 1965,
                                        "name": "ElementaryTypeNameExpression",
                                        "src": "2912:5:3"
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
                                              "referencedDeclaration": 1887,
                                              "type": "type(enum RepaymentRouter.Errors)",
                                              "value": "Errors"
                                            },
                                            "id": 1966,
                                            "name": "Identifier",
                                            "src": "2918:6:3"
                                          }
                                        ],
                                        "id": 1967,
                                        "name": "MemberAccess",
                                        "src": "2918:33:3"
                                      }
                                    ],
                                    "id": 1968,
                                    "name": "FunctionCall",
                                    "src": "2912:40:3"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1927,
                                      "type": "bytes32",
                                      "value": "agreementId"
                                    },
                                    "id": 1969,
                                    "name": "Identifier",
                                    "src": "2954:11:3"
                                  }
                                ],
                                "id": 1970,
                                "name": "FunctionCall",
                                "src": "2903:63:3"
                              }
                            ],
                            "id": 1971,
                            "name": "ExpressionStatement",
                            "src": "2903:63:3"
                          },
                          {
                            "attributes": {
                              "functionReturnParameters": 1937
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
                                "id": 1972,
                                "name": "Literal",
                                "src": "2987:1:3"
                              }
                            ],
                            "id": 1973,
                            "name": "Return",
                            "src": "2980:8:3"
                          }
                        ],
                        "id": 1974,
                        "name": "Block",
                        "src": "2889:110:3"
                      }
                    ],
                    "id": 1975,
                    "name": "IfStatement",
                    "src": "2858:141:3"
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
                                      "referencedDeclaration": 5548,
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
                                              "referencedDeclaration": 5534,
                                              "type": "type(contract ERC20)",
                                              "value": "ERC20"
                                            },
                                            "id": 1976,
                                            "name": "Identifier",
                                            "src": "3103:5:3"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 1931,
                                              "type": "address",
                                              "value": "tokenAddress"
                                            },
                                            "id": 1977,
                                            "name": "Identifier",
                                            "src": "3109:12:3"
                                          }
                                        ],
                                        "id": 1978,
                                        "name": "FunctionCall",
                                        "src": "3103:19:3"
                                      }
                                    ],
                                    "id": 1979,
                                    "name": "MemberAccess",
                                    "src": "3103:29:3"
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
                                          "referencedDeclaration": 5578,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 1980,
                                        "name": "Identifier",
                                        "src": "3133:3:3"
                                      }
                                    ],
                                    "id": 1981,
                                    "name": "MemberAccess",
                                    "src": "3133:10:3"
                                  }
                                ],
                                "id": 1982,
                                "name": "FunctionCall",
                                "src": "3103:41:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1929,
                                  "type": "uint256",
                                  "value": "amount"
                                },
                                "id": 1983,
                                "name": "Identifier",
                                "src": "3147:6:3"
                              }
                            ],
                            "id": 1984,
                            "name": "BinaryOperation",
                            "src": "3103:50:3"
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
                                          "typeIdentifier": "t_contract$_TokenTransferProxy_$2321",
                                          "typeString": "contract TokenTransferProxy"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "allowance",
                                      "referencedDeclaration": 5505,
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
                                              "referencedDeclaration": 5534,
                                              "type": "type(contract ERC20)",
                                              "value": "ERC20"
                                            },
                                            "id": 1985,
                                            "name": "Identifier",
                                            "src": "3169:5:3"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 1931,
                                              "type": "address",
                                              "value": "tokenAddress"
                                            },
                                            "id": 1986,
                                            "name": "Identifier",
                                            "src": "3175:12:3"
                                          }
                                        ],
                                        "id": 1987,
                                        "name": "FunctionCall",
                                        "src": "3169:19:3"
                                      }
                                    ],
                                    "id": 1988,
                                    "name": "MemberAccess",
                                    "src": "3169:29:3"
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
                                          "referencedDeclaration": 5578,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 1989,
                                        "name": "Identifier",
                                        "src": "3199:3:3"
                                      }
                                    ],
                                    "id": 1990,
                                    "name": "MemberAccess",
                                    "src": "3199:10:3"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1883,
                                      "type": "contract TokenTransferProxy",
                                      "value": "tokenTransferProxy"
                                    },
                                    "id": 1991,
                                    "name": "Identifier",
                                    "src": "3211:18:3"
                                  }
                                ],
                                "id": 1992,
                                "name": "FunctionCall",
                                "src": "3169:61:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1929,
                                  "type": "uint256",
                                  "value": "amount"
                                },
                                "id": 1993,
                                "name": "Identifier",
                                "src": "3233:6:3"
                              }
                            ],
                            "id": 1994,
                            "name": "BinaryOperation",
                            "src": "3169:70:3"
                          }
                        ],
                        "id": 1995,
                        "name": "BinaryOperation",
                        "src": "3103:136:3"
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
                                      "referencedDeclaration": 1905,
                                      "type": "function (uint8,bytes32)",
                                      "value": "LogError"
                                    },
                                    "id": 1996,
                                    "name": "Identifier",
                                    "src": "3255:8:3"
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
                                              "typeIdentifier": "t_enum$_Errors_$1887",
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
                                        "id": 1997,
                                        "name": "ElementaryTypeNameExpression",
                                        "src": "3264:5:3"
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
                                              "referencedDeclaration": 1887,
                                              "type": "type(enum RepaymentRouter.Errors)",
                                              "value": "Errors"
                                            },
                                            "id": 1998,
                                            "name": "Identifier",
                                            "src": "3270:6:3"
                                          }
                                        ],
                                        "id": 1999,
                                        "name": "MemberAccess",
                                        "src": "3270:46:3"
                                      }
                                    ],
                                    "id": 2000,
                                    "name": "FunctionCall",
                                    "src": "3264:53:3"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1927,
                                      "type": "bytes32",
                                      "value": "agreementId"
                                    },
                                    "id": 2001,
                                    "name": "Identifier",
                                    "src": "3319:11:3"
                                  }
                                ],
                                "id": 2002,
                                "name": "FunctionCall",
                                "src": "3255:76:3"
                              }
                            ],
                            "id": 2003,
                            "name": "ExpressionStatement",
                            "src": "3255:76:3"
                          },
                          {
                            "attributes": {
                              "functionReturnParameters": 1937
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
                                "id": 2004,
                                "name": "Literal",
                                "src": "3352:1:3"
                              }
                            ],
                            "id": 2005,
                            "name": "Return",
                            "src": "3345:8:3"
                          }
                        ],
                        "id": 2006,
                        "name": "Block",
                        "src": "3241:123:3"
                      }
                    ],
                    "id": 2007,
                    "name": "IfStatement",
                    "src": "3099:265:3"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        2009
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "termsContract",
                          "scope": 2062,
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
                            "id": 2008,
                            "name": "ElementaryTypeName",
                            "src": "3407:7:3"
                          }
                        ],
                        "id": 2009,
                        "name": "VariableDeclaration",
                        "src": "3407:21:3"
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
                              "referencedDeclaration": 1552,
                              "type": "function (bytes32) view external returns (address)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1881,
                                  "type": "contract DebtRegistry",
                                  "value": "debtRegistry"
                                },
                                "id": 2010,
                                "name": "Identifier",
                                "src": "3431:12:3"
                              }
                            ],
                            "id": 2011,
                            "name": "MemberAccess",
                            "src": "3431:29:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1927,
                              "type": "bytes32",
                              "value": "agreementId"
                            },
                            "id": 2012,
                            "name": "Identifier",
                            "src": "3461:11:3"
                          }
                        ],
                        "id": 2013,
                        "name": "FunctionCall",
                        "src": "3431:42:3"
                      }
                    ],
                    "id": 2014,
                    "name": "VariableDeclarationStatement",
                    "src": "3407:66:3"
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
                                  "referencedDeclaration": 2089,
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
                                          "referencedDeclaration": 2106,
                                          "type": "type(contract TermsContract)",
                                          "value": "TermsContract"
                                        },
                                        "id": 2015,
                                        "name": "Identifier",
                                        "src": "3488:13:3"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 2009,
                                          "type": "address",
                                          "value": "termsContract"
                                        },
                                        "id": 2016,
                                        "name": "Identifier",
                                        "src": "3502:13:3"
                                      }
                                    ],
                                    "id": 2017,
                                    "name": "FunctionCall",
                                    "src": "3488:28:3"
                                  }
                                ],
                                "id": 2018,
                                "name": "MemberAccess",
                                "src": "3488:46:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1927,
                                  "type": "bytes32",
                                  "value": "agreementId"
                                },
                                "id": 2019,
                                "name": "Identifier",
                                "src": "3548:11:3"
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
                                      "referencedDeclaration": 5578,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 2020,
                                    "name": "Identifier",
                                    "src": "3573:3:3"
                                  }
                                ],
                                "id": 2021,
                                "name": "MemberAccess",
                                "src": "3573:10:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1953,
                                  "type": "address",
                                  "value": "beneficiary"
                                },
                                "id": 2022,
                                "name": "Identifier",
                                "src": "3597:11:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1929,
                                  "type": "uint256",
                                  "value": "amount"
                                },
                                "id": 2023,
                                "name": "Identifier",
                                "src": "3622:6:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1931,
                                  "type": "address",
                                  "value": "tokenAddress"
                                },
                                "id": 2024,
                                "name": "Identifier",
                                "src": "3642:12:3"
                              }
                            ],
                            "id": 2025,
                            "name": "FunctionCall",
                            "src": "3488:176:3"
                          }
                        ],
                        "id": 2026,
                        "name": "UnaryOperation",
                        "src": "3487:177:3"
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
                                      "referencedDeclaration": 1905,
                                      "type": "function (uint8,bytes32)",
                                      "value": "LogError"
                                    },
                                    "id": 2027,
                                    "name": "Identifier",
                                    "src": "3680:8:3"
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
                                              "typeIdentifier": "t_enum$_Errors_$1887",
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
                                        "id": 2028,
                                        "name": "ElementaryTypeNameExpression",
                                        "src": "3689:5:3"
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
                                              "referencedDeclaration": 1887,
                                              "type": "type(enum RepaymentRouter.Errors)",
                                              "value": "Errors"
                                            },
                                            "id": 2029,
                                            "name": "Identifier",
                                            "src": "3695:6:3"
                                          }
                                        ],
                                        "id": 2030,
                                        "name": "MemberAccess",
                                        "src": "3695:43:3"
                                      }
                                    ],
                                    "id": 2031,
                                    "name": "FunctionCall",
                                    "src": "3689:50:3"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1927,
                                      "type": "bytes32",
                                      "value": "agreementId"
                                    },
                                    "id": 2032,
                                    "name": "Identifier",
                                    "src": "3741:11:3"
                                  }
                                ],
                                "id": 2033,
                                "name": "FunctionCall",
                                "src": "3680:73:3"
                              }
                            ],
                            "id": 2034,
                            "name": "ExpressionStatement",
                            "src": "3680:73:3"
                          },
                          {
                            "attributes": {
                              "functionReturnParameters": 1937
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
                                "id": 2035,
                                "name": "Literal",
                                "src": "3774:1:3"
                              }
                            ],
                            "id": 2036,
                            "name": "Return",
                            "src": "3767:8:3"
                          }
                        ],
                        "id": 2037,
                        "name": "Block",
                        "src": "3666:120:3"
                      }
                    ],
                    "id": 2038,
                    "name": "IfStatement",
                    "src": "3483:303:3"
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
                              "referencedDeclaration": 5581,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 2039,
                            "name": "Identifier",
                            "src": "3835:7:3"
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
                                  "referencedDeclaration": 2320,
                                  "type": "function (address,address,address,uint256) external returns (bool)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1883,
                                      "type": "contract TokenTransferProxy",
                                      "value": "tokenTransferProxy"
                                    },
                                    "id": 2040,
                                    "name": "Identifier",
                                    "src": "3843:18:3"
                                  }
                                ],
                                "id": 2041,
                                "name": "MemberAccess",
                                "src": "3843:31:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1931,
                                  "type": "address",
                                  "value": "tokenAddress"
                                },
                                "id": 2042,
                                "name": "Identifier",
                                "src": "3888:12:3"
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
                                      "referencedDeclaration": 5578,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 2043,
                                    "name": "Identifier",
                                    "src": "3914:3:3"
                                  }
                                ],
                                "id": 2044,
                                "name": "MemberAccess",
                                "src": "3914:10:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1953,
                                  "type": "address",
                                  "value": "beneficiary"
                                },
                                "id": 2045,
                                "name": "Identifier",
                                "src": "3938:11:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1929,
                                  "type": "uint256",
                                  "value": "amount"
                                },
                                "id": 2046,
                                "name": "Identifier",
                                "src": "3963:6:3"
                              }
                            ],
                            "id": 2047,
                            "name": "FunctionCall",
                            "src": "3843:136:3"
                          }
                        ],
                        "id": 2048,
                        "name": "FunctionCall",
                        "src": "3835:145:3"
                      }
                    ],
                    "id": 2049,
                    "name": "ExpressionStatement",
                    "src": "3835:145:3"
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
                              "referencedDeclaration": 1899,
                              "type": "function (bytes32,address,address,uint256,address)",
                              "value": "LogRepayment"
                            },
                            "id": 2050,
                            "name": "Identifier",
                            "src": "4026:12:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1927,
                              "type": "bytes32",
                              "value": "agreementId"
                            },
                            "id": 2051,
                            "name": "Identifier",
                            "src": "4039:11:3"
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
                                  "referencedDeclaration": 5578,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 2052,
                                "name": "Identifier",
                                "src": "4052:3:3"
                              }
                            ],
                            "id": 2053,
                            "name": "MemberAccess",
                            "src": "4052:10:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1953,
                              "type": "address",
                              "value": "beneficiary"
                            },
                            "id": 2054,
                            "name": "Identifier",
                            "src": "4064:11:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1929,
                              "type": "uint256",
                              "value": "amount"
                            },
                            "id": 2055,
                            "name": "Identifier",
                            "src": "4077:6:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1931,
                              "type": "address",
                              "value": "tokenAddress"
                            },
                            "id": 2056,
                            "name": "Identifier",
                            "src": "4085:12:3"
                          }
                        ],
                        "id": 2057,
                        "name": "FunctionCall",
                        "src": "4026:72:3"
                      }
                    ],
                    "id": 2058,
                    "name": "ExpressionStatement",
                    "src": "4026:72:3"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 1937
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 1929,
                          "type": "uint256",
                          "value": "amount"
                        },
                        "id": 2059,
                        "name": "Identifier",
                        "src": "4116:6:3"
                      }
                    ],
                    "id": 2060,
                    "name": "Return",
                    "src": "4109:13:3"
                  }
                ],
                "id": 2061,
                "name": "Block",
                "src": "2643:1486:3"
              }
            ],
            "id": 2062,
            "name": "FunctionDefinition",
            "src": "2461:1668:3"
          }
        ],
        "id": 2063,
        "name": "ContractDefinition",
        "src": "1339:2792:3"
      }
    ],
    "id": 2064,
    "name": "SourceUnit",
    "src": "584:3548:3"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {
    "42": {
      "events": {},
      "links": {},
      "address": "0x849c8f030fb0e83068890e04d3ac94e058212d43"
    },
    "70": {
      "events": {},
      "links": {},
      "address": "0xa146af5d5a43c1480b3c1bf556db0926d1db893a"
    }
  },
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-03-27T18:06:23.500Z"
}