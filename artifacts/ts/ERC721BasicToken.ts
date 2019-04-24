export const ERC721BasicToken = 
{
  "contractName": "ERC721BasicToken",
  "abi": [
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
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
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
      "name": "exists",
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
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
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
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
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
        },
        {
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
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
          "name": "_operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
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
          "name": "_operator",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    }
  ],
  "bytecode": "0x6060604052341561000f57600080fd5b6111f68061001e6000396000f3006060604052600436106100a4576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063081812fc146100a9578063095ea7b31461010c57806323b872dd1461014e57806342842e0e146101af5780634f558e79146102105780636352211e1461024b57806370a08231146102ae578063a22cb465146102fb578063b88d4fde1461033f578063e985e9c5146103e3575b600080fd5b34156100b457600080fd5b6100ca6004808035906020019091905050610453565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561011757600080fd5b61014c600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610490565b005b341561015957600080fd5b6101ad600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610656565b005b34156101ba57600080fd5b61020e600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190505061076d565b005b341561021b57600080fd5b61023160048080359060200190919050506107a5565b604051808215151515815260200191505060405180910390f35b341561025657600080fd5b61026c6004808035906020019091905050610816565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156102b957600080fd5b6102e5600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610893565b6040518082815260200191505060405180910390f35b341561030657600080fd5b61033d600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080351515906020019091905050610917565b005b341561034a57600080fd5b6103e1600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050610a53565b005b34156103ee57600080fd5b610439600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610a92565b604051808215151515815260200191505060405180910390f35b60006001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061049b82610816565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156104d857600080fd5b8073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16148061051857506105178133610a92565b5b151561052357600080fd5b600073ffffffffffffffffffffffffffffffffffffffff1661054483610453565b73ffffffffffffffffffffffffffffffffffffffff161415806105945750600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b1561065157826001600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a35b505050565b806106613382610b26565b151561066c57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16141515156106a857600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156106e457600080fd5b6106ee8483610bbb565b6106f88483610d24565b6107028383610e52565b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a350505050565b806107783382610b26565b151561078357600080fd5b61079f8484846020604051908101604052806000815250610a53565b50505050565b60008060008084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415915050919050565b60008060008084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561088a57600080fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141515156108d057600080fd5b600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b3373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561095257600080fd5b80600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35050565b81610a5e3382610b26565b1515610a6957600080fd5b610a74858585610656565b610a8085858585610faa565b1515610a8b57600080fd5b5050505050565b6000600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600080610b3283610816565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610ba157508373ffffffffffffffffffffffffffffffffffffffff16610b8984610453565b73ffffffffffffffffffffffffffffffffffffffff16145b80610bb25750610bb18185610a92565b5b91505092915050565b8173ffffffffffffffffffffffffffffffffffffffff16610bdb82610816565b73ffffffffffffffffffffffffffffffffffffffff16141515610bfd57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff166001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515610d205760006001600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a35b5050565b8173ffffffffffffffffffffffffffffffffffffffff16610d4482610816565b73ffffffffffffffffffffffffffffffffffffffff16141515610d6657600080fd5b610db96001600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461118090919063ffffffff16565b600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600080600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b600073ffffffffffffffffffffffffffffffffffffffff1660008083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515610ebf57600080fd5b8160008083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610f636001600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461119990919063ffffffff16565b600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050565b600080610fcc8573ffffffffffffffffffffffffffffffffffffffff166111b7565b1515610fdb5760019150611177565b8473ffffffffffffffffffffffffffffffffffffffff1663f0b9e5ba8786866000604051602001526040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156110a657808201518184015260208101905061108b565b50505050905090810190601f1680156110d35780820380516001836020036101000a031916815260200191505b50945050505050602060405180830381600087803b15156110f357600080fd5b6102c65a03f1151561110457600080fd5b50505060405180519050905063f0b9e5ba7c0100000000000000000000000000000000000000000000000000000000027bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161491505b50949350505050565b600082821115151561118e57fe5b818303905092915050565b60008082840190508381101515156111ad57fe5b8091505092915050565b600080823b9050600081119150509190505600a165627a7a723058205ebd3f4449830fb056d63004780a2ef68759bf888b8246f5f4c74e2b845851440029",
  "deployedBytecode": "0x6060604052600436106100a4576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063081812fc146100a9578063095ea7b31461010c57806323b872dd1461014e57806342842e0e146101af5780634f558e79146102105780636352211e1461024b57806370a08231146102ae578063a22cb465146102fb578063b88d4fde1461033f578063e985e9c5146103e3575b600080fd5b34156100b457600080fd5b6100ca6004808035906020019091905050610453565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561011757600080fd5b61014c600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610490565b005b341561015957600080fd5b6101ad600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610656565b005b34156101ba57600080fd5b61020e600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190505061076d565b005b341561021b57600080fd5b61023160048080359060200190919050506107a5565b604051808215151515815260200191505060405180910390f35b341561025657600080fd5b61026c6004808035906020019091905050610816565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156102b957600080fd5b6102e5600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610893565b6040518082815260200191505060405180910390f35b341561030657600080fd5b61033d600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080351515906020019091905050610917565b005b341561034a57600080fd5b6103e1600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050610a53565b005b34156103ee57600080fd5b610439600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610a92565b604051808215151515815260200191505060405180910390f35b60006001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061049b82610816565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156104d857600080fd5b8073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16148061051857506105178133610a92565b5b151561052357600080fd5b600073ffffffffffffffffffffffffffffffffffffffff1661054483610453565b73ffffffffffffffffffffffffffffffffffffffff161415806105945750600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b1561065157826001600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a35b505050565b806106613382610b26565b151561066c57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16141515156106a857600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156106e457600080fd5b6106ee8483610bbb565b6106f88483610d24565b6107028383610e52565b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a350505050565b806107783382610b26565b151561078357600080fd5b61079f8484846020604051908101604052806000815250610a53565b50505050565b60008060008084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415915050919050565b60008060008084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561088a57600080fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141515156108d057600080fd5b600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b3373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561095257600080fd5b80600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35050565b81610a5e3382610b26565b1515610a6957600080fd5b610a74858585610656565b610a8085858585610faa565b1515610a8b57600080fd5b5050505050565b6000600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600080610b3283610816565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610ba157508373ffffffffffffffffffffffffffffffffffffffff16610b8984610453565b73ffffffffffffffffffffffffffffffffffffffff16145b80610bb25750610bb18185610a92565b5b91505092915050565b8173ffffffffffffffffffffffffffffffffffffffff16610bdb82610816565b73ffffffffffffffffffffffffffffffffffffffff16141515610bfd57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff166001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515610d205760006001600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a35b5050565b8173ffffffffffffffffffffffffffffffffffffffff16610d4482610816565b73ffffffffffffffffffffffffffffffffffffffff16141515610d6657600080fd5b610db96001600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461118090919063ffffffff16565b600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600080600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b600073ffffffffffffffffffffffffffffffffffffffff1660008083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515610ebf57600080fd5b8160008083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610f636001600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461119990919063ffffffff16565b600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050565b600080610fcc8573ffffffffffffffffffffffffffffffffffffffff166111b7565b1515610fdb5760019150611177565b8473ffffffffffffffffffffffffffffffffffffffff1663f0b9e5ba8786866000604051602001526040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156110a657808201518184015260208101905061108b565b50505050905090810190601f1680156110d35780820380516001836020036101000a031916815260200191505b50945050505050602060405180830381600087803b15156110f357600080fd5b6102c65a03f1151561110457600080fd5b50505060405180519050905063f0b9e5ba7c0100000000000000000000000000000000000000000000000000000000027bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161491505b50949350505050565b600082821115151561118e57fe5b818303905092915050565b60008082840190508381101515156111ad57fe5b8091505092915050565b600080823b9050600081119150509190505600a165627a7a723058205ebd3f4449830fb056d63004780a2ef68759bf888b8246f5f4c74e2b845851440029",
  "sourceMap": "300:10368:48:-;;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "300:10368:48:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3577:111;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2998:350;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5042:315;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5964:154;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2445:140;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2107:164;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1756:142;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3969:200;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6794:227;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4478:142;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3577:111;3637:7;3659:14;:24;3674:8;3659:24;;;;;;;;;;;;;;;;;;;;;3652:31;;3577:111;;;:::o;2998:350::-;3059:13;3075:17;3083:8;3075:7;:17::i;:::-;3059:33;;3113:5;3106:12;;:3;:12;;;;3098:21;;;;;;;;3147:5;3133:19;;:10;:19;;;:58;;;;3156:35;3173:5;3180:10;3156:16;:35::i;:::-;3133:58;3125:67;;;;;;;;3236:1;3203:35;;:21;3215:8;3203:11;:21::i;:::-;:35;;;;:56;;;;3257:1;3242:17;;:3;:17;;;;3203:56;3199:145;;;3296:3;3269:14;:24;3284:8;3269:24;;;;;;;;;;;;:30;;;;;;;;;;;;;;;;;;3323:3;3307:30;;3316:5;3307:30;;;3328:8;3307:30;;;;;;;;;;;;;;;;;;3199:145;2998:350;;;:::o;5042:315::-;5129:8;1516:39;1534:10;1546:8;1516:17;:39::i;:::-;1508:48;;;;;;;;5170:1;5153:19;;:5;:19;;;;5145:28;;;;;;;;5202:1;5187:17;;:3;:17;;;;5179:26;;;;;;;;5212:30;5226:5;5233:8;5212:13;:30::i;:::-;5248:32;5264:5;5271:8;5248:15;:32::i;:::-;5286:25;5297:3;5302:8;5286:10;:25::i;:::-;5338:3;5322:30;;5331:5;5322:30;;;5343:8;5322:30;;;;;;;;;;;;;;;;;;5042:315;;;;:::o;5964:154::-;6055:8;1516:39;1534:10;1546:8;1516:17;:39::i;:::-;1508:48;;;;;;;;6071:42;6088:5;6095:3;6100:8;6071:42;;;;;;;;;;;;;:16;:42::i;:::-;5964:154;;;;:::o;2445:140::-;2500:4;2512:13;2528:10;:20;2539:8;2528:20;;;;;;;;;;;;;;;;;;;;;2512:36;;2578:1;2561:19;;:5;:19;;;;2554:26;;2445:140;;;;:::o;2107:164::-;2163:7;2178:13;2194:10;:20;2205:8;2194:20;;;;;;;;;;;;;;;;;;;;;2178:36;;2245:1;2228:19;;:5;:19;;;;2220:28;;;;;;;;2261:5;2254:12;;2107:164;;;;:::o;1756:142::-;1812:7;1853:1;1835:20;;:6;:20;;;;1827:29;;;;;;;;1869:16;:24;1886:6;1869:24;;;;;;;;;;;;;;;;1862:31;;1756:142;;;:::o;3969:200::-;4053:10;4046:17;;:3;:17;;;;4038:26;;;;;;;;4107:9;4070:17;:29;4088:10;4070:29;;;;;;;;;;;;;;;:34;4100:3;4070:34;;;;;;;;;;;;;;;;:46;;;;;;;;;;;;;;;;;;4149:3;4122:42;;4137:10;4122:42;;;4154:9;4122:42;;;;;;;;;;;;;;;;;;;;;;3969:200;;:::o;6794:227::-;6898:8;1516:39;1534:10;1546:8;1516:17;:39::i;:::-;1508:48;;;;;;;;6914:34;6927:5;6934:3;6939:8;6914:12;:34::i;:::-;6962:53;6987:5;6994:3;6999:8;7009:5;6962:24;:53::i;:::-;6954:62;;;;;;;;6794:227;;;;;:::o;4478:142::-;4560:4;4579:17;:25;4597:6;4579:25;;;;;;;;;;;;;;;:36;4605:9;4579:36;;;;;;;;;;;;;;;;;;;;;;;;;4572:43;;4478:142;;;;:::o;7368:240::-;7454:4;7466:13;7482:17;7490:8;7482:7;:17::i;:::-;7466:33;;7524:5;7512:17;;:8;:17;;;:54;;;;7558:8;7533:33;;:21;7545:8;7533:11;:21::i;:::-;:33;;;7512:54;:91;;;;7570:33;7587:5;7594:8;7570:16;:33::i;:::-;7512:91;7505:98;;7368:240;;;;;:::o;8653:260::-;8754:6;8733:27;;:17;8741:8;8733:7;:17::i;:::-;:27;;;8725:36;;;;;;;;8807:1;8771:38;;:14;:24;8786:8;8771:24;;;;;;;;;;;;;;;;;;;;;:38;;;;8767:142;;;8854:1;8819:14;:24;8834:8;8819:24;;;;;;;;;;;;:37;;;;;;;;;;;;;;;;;;8889:1;8864:38;;8873:6;8864:38;;;8893:8;8864:38;;;;;;;;;;;;;;;;;;8767:142;8653:260;;:::o;9651:214::-;9753:5;9732:26;;:17;9740:8;9732:7;:17::i;:::-;:26;;;9724:35;;;;;;;;9791:30;9819:1;9791:16;:23;9808:5;9791:23;;;;;;;;;;;;;;;;:27;;:30;;;;:::i;:::-;9765:16;:23;9782:5;9765:23;;;;;;;;;;;;;;;:56;;;;9858:1;9827:10;:20;9838:8;9827:20;;;;;;;;;;;;:33;;;;;;;;;;;;;;;;;;9651:214;;:::o;9172:204::-;9278:1;9246:34;;:10;:20;9257:8;9246:20;;;;;;;;;;;;;;;;;;;;;:34;;;9238:43;;;;;;;;9310:3;9287:10;:20;9298:8;9287:20;;;;;;;;;;;;:26;;;;;;;;;;;;;;;;;;9343:28;9369:1;9343:16;:21;9360:3;9343:21;;;;;;;;;;;;;;;;:25;;:28;;;;:::i;:::-;9319:16;:21;9336:3;9319:21;;;;;;;;;;;;;;;:52;;;;9172:204;;:::o;10368:298::-;10479:4;10545:13;10496:16;:3;:14;;;:16::i;:::-;10495:17;10491:49;;;10529:4;10522:11;;;;10491:49;10576:3;10561:36;;;10598:5;10605:8;10615:5;10561:60;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;10545:76:48;;605:10;10645:15;;10635:25;;;:6;:25;;;;10627:34;;10368:298;;;;;;;;:::o;835:110:38:-;893:7;920:1;915;:6;;908:14;;;;;;939:1;935;:5;928:12;;835:110;;;;:::o;1007:129::-;1065:7;1080:9;1096:1;1092;:5;1080:17;;1115:1;1110;:6;;1103:14;;;;;;1130:1;1123:8;;1007:129;;;;;:::o;451:150:36:-;508:4;520:12;569:4;557:11;549:25;;595:1;588:4;:8;581:15;;451:150;;;;:::o",
  "source": "pragma solidity ^0.4.18;\n\nimport \"./ERC721Basic.sol\";\nimport \"./ERC721Receiver.sol\";\nimport \"../../math/SafeMath.sol\";\nimport \"../../AddressUtils.sol\";\n\n/**\n * @title ERC721 Non-Fungible Token Standard basic implementation\n * @dev see https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md\n */\ncontract ERC721BasicToken is ERC721Basic {\n  using SafeMath for uint256;\n  using AddressUtils for address;\n  \n  // Equals to `bytes4(keccak256(\"onERC721Received(address,uint256,bytes)\"))`\n  // which can be also obtained as `ERC721Receiver(0).onERC721Received.selector`\n  bytes4 constant ERC721_RECEIVED = 0xf0b9e5ba; \n\n  // Mapping from token ID to owner\n  mapping (uint256 => address) internal tokenOwner;\n\n  // Mapping from token ID to approved address\n  mapping (uint256 => address) internal tokenApprovals;\n\n  // Mapping from owner to number of owned token\n  mapping (address => uint256) internal ownedTokensCount;\n\n  // Mapping from owner to operator approvals\n  mapping (address => mapping (address => bool)) internal operatorApprovals;\n\n  /**\n  * @dev Guarantees msg.sender is owner of the given token\n  * @param _tokenId uint256 ID of the token to validate its ownership belongs to msg.sender\n  */\n  modifier onlyOwnerOf(uint256 _tokenId) {\n    require(ownerOf(_tokenId) == msg.sender);\n    _;\n  }\n\n  /**\n  * @dev Checks msg.sender can transfer a token, by being owner, approved, or operator\n  * @param _tokenId uint256 ID of the token to validate\n  */\n  modifier canTransfer(uint256 _tokenId) {\n    require(isApprovedOrOwner(msg.sender, _tokenId));\n    _;\n  }\n\n  /**\n  * @dev Gets the balance of the specified address\n  * @param _owner address to query the balance of\n  * @return uint256 representing the amount owned by the passed address\n  */\n  function balanceOf(address _owner) public view returns (uint256) {\n    require(_owner != address(0));\n    return ownedTokensCount[_owner];\n  }\n\n  /**\n  * @dev Gets the owner of the specified token ID\n  * @param _tokenId uint256 ID of the token to query the owner of\n  * @return owner address currently marked as the owner of the given token ID\n  */\n  function ownerOf(uint256 _tokenId) public view returns (address) {\n    address owner = tokenOwner[_tokenId];\n    require(owner != address(0));\n    return owner;\n  }\n\n  /**\n  * @dev Returns whether the specified token exists\n  * @param _tokenId uint256 ID of the token to query the existance of\n  * @return whether the token exists\n  */\n  function exists(uint256 _tokenId) public view returns (bool) {\n    address owner = tokenOwner[_tokenId];\n    return owner != address(0);\n  }\n\n  /**\n  * @dev Approves another address to transfer the given token ID\n  * @dev The zero address indicates there is no approved address.\n  * @dev There can only be one approved address per token at a given time.\n  * @dev Can only be called by the token owner or an approved operator.\n  * @param _to address to be approved for the given token ID\n  * @param _tokenId uint256 ID of the token to be approved\n  */\n  function approve(address _to, uint256 _tokenId) public {\n    address owner = ownerOf(_tokenId);\n    require(_to != owner);\n    require(msg.sender == owner || isApprovedForAll(owner, msg.sender));\n\n    if (getApproved(_tokenId) != address(0) || _to != address(0)) {\n      tokenApprovals[_tokenId] = _to;\n      Approval(owner, _to, _tokenId);\n    }\n  }\n\n  /**\n   * @dev Gets the approved address for a token ID, or zero if no address set\n   * @param _tokenId uint256 ID of the token to query the approval of\n   * @return address currently approved for a the given token ID\n   */\n  function getApproved(uint256 _tokenId) public view returns (address) {\n    return tokenApprovals[_tokenId];\n  }\n\n\n  /**\n  * @dev Sets or unsets the approval of a given operator\n  * @dev An operator is allowed to transfer all tokens of the sender on their behalf\n  * @param _to operator address to set the approval\n  * @param _approved representing the status of the approval to be set\n  */\n  function setApprovalForAll(address _to, bool _approved) public {\n    require(_to != msg.sender);\n    operatorApprovals[msg.sender][_to] = _approved;\n    ApprovalForAll(msg.sender, _to, _approved);\n  }\n\n  /**\n   * @dev Tells whether an operator is approved by a given owner\n   * @param _owner owner address which you want to query the approval of\n   * @param _operator operator address which you want to query the approval of\n   * @return bool whether the given operator is approved by the given owner\n   */\n  function isApprovedForAll(address _owner, address _operator) public view returns (bool) {\n    return operatorApprovals[_owner][_operator];\n  }\n\n  /**\n  * @dev Transfers the ownership of a given token ID to another address\n  * @dev Usage of this method is discouraged, use `safeTransferFrom` whenever possible\n  * @dev Requires the msg sender to be the owner, approved, or operator\n  * @param _from current owner of the token\n  * @param _to address to receive the ownership of the given token ID\n  * @param _tokenId uint256 ID of the token to be transferred\n  */\n  function transferFrom(address _from, address _to, uint256 _tokenId) public canTransfer(_tokenId) {\n    require(_from != address(0));\n    require(_to != address(0));\n\n    clearApproval(_from, _tokenId);\n    removeTokenFrom(_from, _tokenId);\n    addTokenTo(_to, _tokenId);\n    \n    Transfer(_from, _to, _tokenId);\n  }\n\n  /**\n  * @dev Safely transfers the ownership of a given token ID to another address\n  * @dev If the target address is a contract, it must implement `onERC721Received`,\n  *  which is called upon a safe transfer, and return the magic value\n  *  `bytes4(keccak256(\"onERC721Received(address,uint256,bytes)\"))`; otherwise,\n  *  the transfer is reverted.\n  * @dev Requires the msg sender to be the owner, approved, or operator\n  * @param _from current owner of the token\n  * @param _to address to receive the ownership of the given token ID\n  * @param _tokenId uint256 ID of the token to be transferred\n  */\n  function safeTransferFrom(address _from, address _to, uint256 _tokenId) public canTransfer(_tokenId) {\n    safeTransferFrom(_from, _to, _tokenId, \"\");\n  }\n\n  /**\n  * @dev Safely transfers the ownership of a given token ID to another address\n  * @dev If the target address is a contract, it must implement `onERC721Received`,\n  *  which is called upon a safe transfer, and return the magic value\n  *  `bytes4(keccak256(\"onERC721Received(address,uint256,bytes)\"))`; otherwise,\n  *  the transfer is reverted.\n  * @dev Requires the msg sender to be the owner, approved, or operator\n  * @param _from current owner of the token\n  * @param _to address to receive the ownership of the given token ID\n  * @param _tokenId uint256 ID of the token to be transferred\n  * @param _data bytes data to send along with a safe transfer check\n  */\n  function safeTransferFrom(address _from, address _to, uint256 _tokenId, bytes _data) public canTransfer(_tokenId) {\n    transferFrom(_from, _to, _tokenId);\n    require(checkAndCallSafeTransfer(_from, _to, _tokenId, _data));\n  }\n\n  /**\n   * @dev Returns whether the given spender can transfer a given token ID\n   * @param _spender address of the spender to query\n   * @param _tokenId uint256 ID of the token to be transferred\n   * @return bool whether the msg.sender is approved for the given token ID,\n   *  is an operator of the owner, or is the owner of the token\n   */\n  function isApprovedOrOwner(address _spender, uint256 _tokenId) internal view returns (bool) {\n    address owner = ownerOf(_tokenId);\n    return _spender == owner || getApproved(_tokenId) == _spender || isApprovedForAll(owner, _spender);\n  }\n\n  /**\n  * @dev Internal function to mint a new token\n  * @dev Reverts if the given token ID already exists\n  * @param _to The address that will own the minted token\n  * @param _tokenId uint256 ID of the token to be minted by the msg.sender\n  */\n  function _mint(address _to, uint256 _tokenId) internal {\n    require(_to != address(0));\n    addTokenTo(_to, _tokenId);\n    Transfer(address(0), _to, _tokenId);\n  }\n\n  /**\n  * @dev Internal function to burn a specific token\n  * @dev Reverts if the token does not exist\n  * @param _tokenId uint256 ID of the token being burned by the msg.sender\n  */\n  function _burn(address _owner, uint256 _tokenId) internal {\n    clearApproval(_owner, _tokenId);\n    removeTokenFrom(_owner, _tokenId);\n    Transfer(_owner, address(0), _tokenId);\n  }\n\n  /**\n  * @dev Internal function to clear current approval of a given token ID\n  * @dev Reverts if the given address is not indeed the owner of the token\n  * @param _owner owner of the token\n  * @param _tokenId uint256 ID of the token to be transferred\n  */\n  function clearApproval(address _owner, uint256 _tokenId) internal {\n    require(ownerOf(_tokenId) == _owner);\n    if (tokenApprovals[_tokenId] != address(0)) {\n      tokenApprovals[_tokenId] = address(0);\n      Approval(_owner, address(0), _tokenId);\n    }\n  }\n\n  /**\n  * @dev Internal function to add a token ID to the list of a given address\n  * @param _to address representing the new owner of the given token ID\n  * @param _tokenId uint256 ID of the token to be added to the tokens list of the given address\n  */\n  function addTokenTo(address _to, uint256 _tokenId) internal {\n    require(tokenOwner[_tokenId] == address(0));\n    tokenOwner[_tokenId] = _to;\n    ownedTokensCount[_to] = ownedTokensCount[_to].add(1);\n  }\n\n  /**\n  * @dev Internal function to remove a token ID from the list of a given address\n  * @param _from address representing the previous owner of the given token ID\n  * @param _tokenId uint256 ID of the token to be removed from the tokens list of the given address\n  */\n  function removeTokenFrom(address _from, uint256 _tokenId) internal {\n    require(ownerOf(_tokenId) == _from);\n    ownedTokensCount[_from] = ownedTokensCount[_from].sub(1);\n    tokenOwner[_tokenId] = address(0);\n  }\n\n  /**\n  * @dev Internal function to invoke `onERC721Received` on a target address\n  * @dev The call is not executed if the target address is not a contract\n  * @param _from address representing the previous owner of the given token ID\n  * @param _to target address that will receive the tokens\n  * @param _tokenId uint256 ID of the token to be transferred\n  * @param _data bytes optional data to send along with the call\n  * @return whether the call correctly returned the expected magic value\n  */\n  function checkAndCallSafeTransfer(address _from, address _to, uint256 _tokenId, bytes _data) internal returns (bool) {\n    if (!_to.isContract()) {\n      return true;\n    }\n    bytes4 retval = ERC721Receiver(_to).onERC721Received(_from, _tokenId, _data);\n    return (retval == ERC721_RECEIVED);\n  }\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/token/ERC721/ERC721BasicToken.sol",
  "ast": {
    "attributes": {
      "absolutePath": "zeppelin-solidity/contracts/token/ERC721/ERC721BasicToken.sol",
      "exportedSymbols": {
        "ERC721BasicToken": [
          15481
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            "^",
            "0.4",
            ".18"
          ]
        },
        "id": 14900,
        "name": "PragmaDirective",
        "src": "0:24:48"
      },
      {
        "attributes": {
          "SourceUnit": 14899,
          "absolutePath": "zeppelin-solidity/contracts/token/ERC721/ERC721Basic.sol",
          "file": "./ERC721Basic.sol",
          "scope": 15482,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 14901,
        "name": "ImportDirective",
        "src": "26:27:48"
      },
      {
        "attributes": {
          "SourceUnit": 15499,
          "absolutePath": "zeppelin-solidity/contracts/token/ERC721/ERC721Receiver.sol",
          "file": "./ERC721Receiver.sol",
          "scope": 15482,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 14902,
        "name": "ImportDirective",
        "src": "54:30:48"
      },
      {
        "attributes": {
          "SourceUnit": 14144,
          "absolutePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
          "file": "../../math/SafeMath.sol",
          "scope": 15482,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 14903,
        "name": "ImportDirective",
        "src": "85:33:48"
      },
      {
        "attributes": {
          "SourceUnit": 13986,
          "absolutePath": "zeppelin-solidity/contracts/AddressUtils.sol",
          "file": "../../AddressUtils.sol",
          "scope": 15482,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 14904,
        "name": "ImportDirective",
        "src": "119:32:48"
      },
      {
        "attributes": {
          "contractDependencies": [
            14898
          ],
          "contractKind": "contract",
          "documentation": "@title ERC721 Non-Fungible Token Standard basic implementation\n@dev see https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            15481,
            14898
          ],
          "name": "ERC721BasicToken",
          "scope": 15482
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
                  "name": "ERC721Basic",
                  "referencedDeclaration": 14898,
                  "type": "contract ERC721Basic"
                },
                "id": 14905,
                "name": "UserDefinedTypeName",
                "src": "329:11:48"
              }
            ],
            "id": 14906,
            "name": "InheritanceSpecifier",
            "src": "329:11:48"
          },
          {
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "SafeMath",
                  "referencedDeclaration": 14143,
                  "type": "library SafeMath"
                },
                "id": 14907,
                "name": "UserDefinedTypeName",
                "src": "351:8:48"
              },
              {
                "attributes": {
                  "name": "uint256",
                  "type": "uint256"
                },
                "id": 14908,
                "name": "ElementaryTypeName",
                "src": "364:7:48"
              }
            ],
            "id": 14909,
            "name": "UsingForDirective",
            "src": "345:27:48"
          },
          {
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "AddressUtils",
                  "referencedDeclaration": 13985,
                  "type": "library AddressUtils"
                },
                "id": 14910,
                "name": "UserDefinedTypeName",
                "src": "381:12:48"
              },
              {
                "attributes": {
                  "name": "address",
                  "type": "address"
                },
                "id": 14911,
                "name": "ElementaryTypeName",
                "src": "398:7:48"
              }
            ],
            "id": 14912,
            "name": "UsingForDirective",
            "src": "375:31:48"
          },
          {
            "attributes": {
              "constant": true,
              "name": "ERC721_RECEIVED",
              "scope": 15481,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "bytes4",
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "name": "bytes4",
                  "type": "bytes4"
                },
                "id": 14913,
                "name": "ElementaryTypeName",
                "src": "571:6:48"
              },
              {
                "attributes": {
                  "argumentTypes": null,
                  "hexvalue": "30786630623965356261",
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "subdenomination": null,
                  "token": "number",
                  "type": "int_const 4038714810",
                  "value": "0xf0b9e5ba"
                },
                "id": 14914,
                "name": "Literal",
                "src": "605:10:48"
              }
            ],
            "id": 14915,
            "name": "VariableDeclaration",
            "src": "571:44:48"
          },
          {
            "attributes": {
              "constant": false,
              "name": "tokenOwner",
              "scope": 15481,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(uint256 => address)",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(uint256 => address)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "uint256",
                      "type": "uint256"
                    },
                    "id": 14916,
                    "name": "ElementaryTypeName",
                    "src": "666:7:48"
                  },
                  {
                    "attributes": {
                      "name": "address",
                      "type": "address"
                    },
                    "id": 14917,
                    "name": "ElementaryTypeName",
                    "src": "677:7:48"
                  }
                ],
                "id": 14918,
                "name": "Mapping",
                "src": "657:28:48"
              }
            ],
            "id": 14919,
            "name": "VariableDeclaration",
            "src": "657:48:48"
          },
          {
            "attributes": {
              "constant": false,
              "name": "tokenApprovals",
              "scope": 15481,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(uint256 => address)",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(uint256 => address)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "uint256",
                      "type": "uint256"
                    },
                    "id": 14920,
                    "name": "ElementaryTypeName",
                    "src": "766:7:48"
                  },
                  {
                    "attributes": {
                      "name": "address",
                      "type": "address"
                    },
                    "id": 14921,
                    "name": "ElementaryTypeName",
                    "src": "777:7:48"
                  }
                ],
                "id": 14922,
                "name": "Mapping",
                "src": "757:28:48"
              }
            ],
            "id": 14923,
            "name": "VariableDeclaration",
            "src": "757:52:48"
          },
          {
            "attributes": {
              "constant": false,
              "name": "ownedTokensCount",
              "scope": 15481,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(address => uint256)",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(address => uint256)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "address",
                      "type": "address"
                    },
                    "id": 14924,
                    "name": "ElementaryTypeName",
                    "src": "872:7:48"
                  },
                  {
                    "attributes": {
                      "name": "uint256",
                      "type": "uint256"
                    },
                    "id": 14925,
                    "name": "ElementaryTypeName",
                    "src": "883:7:48"
                  }
                ],
                "id": 14926,
                "name": "Mapping",
                "src": "863:28:48"
              }
            ],
            "id": 14927,
            "name": "VariableDeclaration",
            "src": "863:54:48"
          },
          {
            "attributes": {
              "constant": false,
              "name": "operatorApprovals",
              "scope": 15481,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(address => mapping(address => bool))",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(address => mapping(address => bool))"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "address",
                      "type": "address"
                    },
                    "id": 14928,
                    "name": "ElementaryTypeName",
                    "src": "977:7:48"
                  },
                  {
                    "attributes": {
                      "type": "mapping(address => bool)"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 14929,
                        "name": "ElementaryTypeName",
                        "src": "997:7:48"
                      },
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 14930,
                        "name": "ElementaryTypeName",
                        "src": "1008:4:48"
                      }
                    ],
                    "id": 14931,
                    "name": "Mapping",
                    "src": "988:25:48"
                  }
                ],
                "id": 14932,
                "name": "Mapping",
                "src": "968:46:48"
              }
            ],
            "id": 14933,
            "name": "VariableDeclaration",
            "src": "968:73:48"
          },
          {
            "attributes": {
              "name": "onlyOwnerOf",
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 14948,
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
                        "id": 14934,
                        "name": "ElementaryTypeName",
                        "src": "1229:7:48"
                      }
                    ],
                    "id": 14935,
                    "name": "VariableDeclaration",
                    "src": "1229:16:48"
                  }
                ],
                "id": 14936,
                "name": "ParameterList",
                "src": "1228:18:48"
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
                            "id": 14937,
                            "name": "Identifier",
                            "src": "1253:7:48"
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
                              "operator": "==",
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
                                  "type": "address",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        15006
                                      ],
                                      "referencedDeclaration": 15006,
                                      "type": "function (uint256) view returns (address)",
                                      "value": "ownerOf"
                                    },
                                    "id": 14938,
                                    "name": "Identifier",
                                    "src": "1261:7:48"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 14935,
                                      "type": "uint256",
                                      "value": "_tokenId"
                                    },
                                    "id": 14939,
                                    "name": "Identifier",
                                    "src": "1269:8:48"
                                  }
                                ],
                                "id": 14940,
                                "name": "FunctionCall",
                                "src": "1261:17:48"
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
                                      "referencedDeclaration": 15881,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 14941,
                                    "name": "Identifier",
                                    "src": "1282:3:48"
                                  }
                                ],
                                "id": 14942,
                                "name": "MemberAccess",
                                "src": "1282:10:48"
                              }
                            ],
                            "id": 14943,
                            "name": "BinaryOperation",
                            "src": "1261:31:48"
                          }
                        ],
                        "id": 14944,
                        "name": "FunctionCall",
                        "src": "1253:40:48"
                      }
                    ],
                    "id": 14945,
                    "name": "ExpressionStatement",
                    "src": "1253:40:48"
                  },
                  {
                    "id": 14946,
                    "name": "PlaceholderStatement",
                    "src": "1299:1:48"
                  }
                ],
                "id": 14947,
                "name": "Block",
                "src": "1247:58:48"
              }
            ],
            "id": 14948,
            "name": "ModifierDefinition",
            "src": "1208:97:48"
          },
          {
            "attributes": {
              "name": "canTransfer",
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 14962,
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
                        "id": 14949,
                        "name": "ElementaryTypeName",
                        "src": "1484:7:48"
                      }
                    ],
                    "id": 14950,
                    "name": "VariableDeclaration",
                    "src": "1484:16:48"
                  }
                ],
                "id": 14951,
                "name": "ParameterList",
                "src": "1483:18:48"
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
                            "id": 14952,
                            "name": "Identifier",
                            "src": "1508:7:48"
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
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 15276,
                                  "type": "function (address,uint256) view returns (bool)",
                                  "value": "isApprovedOrOwner"
                                },
                                "id": 14953,
                                "name": "Identifier",
                                "src": "1516:17:48"
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
                                      "referencedDeclaration": 15881,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 14954,
                                    "name": "Identifier",
                                    "src": "1534:3:48"
                                  }
                                ],
                                "id": 14955,
                                "name": "MemberAccess",
                                "src": "1534:10:48"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 14950,
                                  "type": "uint256",
                                  "value": "_tokenId"
                                },
                                "id": 14956,
                                "name": "Identifier",
                                "src": "1546:8:48"
                              }
                            ],
                            "id": 14957,
                            "name": "FunctionCall",
                            "src": "1516:39:48"
                          }
                        ],
                        "id": 14958,
                        "name": "FunctionCall",
                        "src": "1508:48:48"
                      }
                    ],
                    "id": 14959,
                    "name": "ExpressionStatement",
                    "src": "1508:48:48"
                  },
                  {
                    "id": 14960,
                    "name": "PlaceholderStatement",
                    "src": "1562:1:48"
                  }
                ],
                "id": 14961,
                "name": "Block",
                "src": "1502:66:48"
              }
            ],
            "id": 14962,
            "name": "ModifierDefinition",
            "src": "1463:105:48"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "balanceOf",
              "payable": false,
              "scope": 15481,
              "stateMutability": "view",
              "superFunction": 14824,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_owner",
                      "scope": 14982,
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
                        "id": 14963,
                        "name": "ElementaryTypeName",
                        "src": "1775:7:48"
                      }
                    ],
                    "id": 14964,
                    "name": "VariableDeclaration",
                    "src": "1775:14:48"
                  }
                ],
                "id": 14965,
                "name": "ParameterList",
                "src": "1774:16:48"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 14982,
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
                        "id": 14966,
                        "name": "ElementaryTypeName",
                        "src": "1812:7:48"
                      }
                    ],
                    "id": 14967,
                    "name": "VariableDeclaration",
                    "src": "1812:7:48"
                  }
                ],
                "id": 14968,
                "name": "ParameterList",
                "src": "1811:9:48"
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
                            "id": 14969,
                            "name": "Identifier",
                            "src": "1827:7:48"
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
                                  "referencedDeclaration": 14964,
                                  "type": "address",
                                  "value": "_owner"
                                },
                                "id": 14970,
                                "name": "Identifier",
                                "src": "1835:6:48"
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
                                    "id": 14971,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "1845:7:48"
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
                                    "id": 14972,
                                    "name": "Literal",
                                    "src": "1853:1:48"
                                  }
                                ],
                                "id": 14973,
                                "name": "FunctionCall",
                                "src": "1845:10:48"
                              }
                            ],
                            "id": 14974,
                            "name": "BinaryOperation",
                            "src": "1835:20:48"
                          }
                        ],
                        "id": 14975,
                        "name": "FunctionCall",
                        "src": "1827:29:48"
                      }
                    ],
                    "id": 14976,
                    "name": "ExpressionStatement",
                    "src": "1827:29:48"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 14968
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
                              "referencedDeclaration": 14927,
                              "type": "mapping(address => uint256)",
                              "value": "ownedTokensCount"
                            },
                            "id": 14977,
                            "name": "Identifier",
                            "src": "1869:16:48"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 14964,
                              "type": "address",
                              "value": "_owner"
                            },
                            "id": 14978,
                            "name": "Identifier",
                            "src": "1886:6:48"
                          }
                        ],
                        "id": 14979,
                        "name": "IndexAccess",
                        "src": "1869:24:48"
                      }
                    ],
                    "id": 14980,
                    "name": "Return",
                    "src": "1862:31:48"
                  }
                ],
                "id": 14981,
                "name": "Block",
                "src": "1821:77:48"
              }
            ],
            "id": 14982,
            "name": "FunctionDefinition",
            "src": "1756:142:48"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "ownerOf",
              "payable": false,
              "scope": 15481,
              "stateMutability": "view",
              "superFunction": 14831,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 15006,
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
                        "id": 14983,
                        "name": "ElementaryTypeName",
                        "src": "2124:7:48"
                      }
                    ],
                    "id": 14984,
                    "name": "VariableDeclaration",
                    "src": "2124:16:48"
                  }
                ],
                "id": 14985,
                "name": "ParameterList",
                "src": "2123:18:48"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 15006,
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
                        "id": 14986,
                        "name": "ElementaryTypeName",
                        "src": "2163:7:48"
                      }
                    ],
                    "id": 14987,
                    "name": "VariableDeclaration",
                    "src": "2163:7:48"
                  }
                ],
                "id": 14988,
                "name": "ParameterList",
                "src": "2162:9:48"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        14990
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "owner",
                          "scope": 15006,
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
                            "id": 14989,
                            "name": "ElementaryTypeName",
                            "src": "2178:7:48"
                          }
                        ],
                        "id": 14990,
                        "name": "VariableDeclaration",
                        "src": "2178:13:48"
                      },
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
                              "referencedDeclaration": 14919,
                              "type": "mapping(uint256 => address)",
                              "value": "tokenOwner"
                            },
                            "id": 14991,
                            "name": "Identifier",
                            "src": "2194:10:48"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 14984,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 14992,
                            "name": "Identifier",
                            "src": "2205:8:48"
                          }
                        ],
                        "id": 14993,
                        "name": "IndexAccess",
                        "src": "2194:20:48"
                      }
                    ],
                    "id": 14994,
                    "name": "VariableDeclarationStatement",
                    "src": "2178:36:48"
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
                            "id": 14995,
                            "name": "Identifier",
                            "src": "2220:7:48"
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
                                  "referencedDeclaration": 14990,
                                  "type": "address",
                                  "value": "owner"
                                },
                                "id": 14996,
                                "name": "Identifier",
                                "src": "2228:5:48"
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
                                    "id": 14997,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "2237:7:48"
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
                                    "id": 14998,
                                    "name": "Literal",
                                    "src": "2245:1:48"
                                  }
                                ],
                                "id": 14999,
                                "name": "FunctionCall",
                                "src": "2237:10:48"
                              }
                            ],
                            "id": 15000,
                            "name": "BinaryOperation",
                            "src": "2228:19:48"
                          }
                        ],
                        "id": 15001,
                        "name": "FunctionCall",
                        "src": "2220:28:48"
                      }
                    ],
                    "id": 15002,
                    "name": "ExpressionStatement",
                    "src": "2220:28:48"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 14988
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 14990,
                          "type": "address",
                          "value": "owner"
                        },
                        "id": 15003,
                        "name": "Identifier",
                        "src": "2261:5:48"
                      }
                    ],
                    "id": 15004,
                    "name": "Return",
                    "src": "2254:12:48"
                  }
                ],
                "id": 15005,
                "name": "Block",
                "src": "2172:99:48"
              }
            ],
            "id": 15006,
            "name": "FunctionDefinition",
            "src": "2107:164:48"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "exists",
              "payable": false,
              "scope": 15481,
              "stateMutability": "view",
              "superFunction": 14838,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 15026,
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
                        "id": 15007,
                        "name": "ElementaryTypeName",
                        "src": "2461:7:48"
                      }
                    ],
                    "id": 15008,
                    "name": "VariableDeclaration",
                    "src": "2461:16:48"
                  }
                ],
                "id": 15009,
                "name": "ParameterList",
                "src": "2460:18:48"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 15026,
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
                        "id": 15010,
                        "name": "ElementaryTypeName",
                        "src": "2500:4:48"
                      }
                    ],
                    "id": 15011,
                    "name": "VariableDeclaration",
                    "src": "2500:4:48"
                  }
                ],
                "id": 15012,
                "name": "ParameterList",
                "src": "2499:6:48"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        15014
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "owner",
                          "scope": 15026,
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
                            "id": 15013,
                            "name": "ElementaryTypeName",
                            "src": "2512:7:48"
                          }
                        ],
                        "id": 15014,
                        "name": "VariableDeclaration",
                        "src": "2512:13:48"
                      },
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
                              "referencedDeclaration": 14919,
                              "type": "mapping(uint256 => address)",
                              "value": "tokenOwner"
                            },
                            "id": 15015,
                            "name": "Identifier",
                            "src": "2528:10:48"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 15008,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 15016,
                            "name": "Identifier",
                            "src": "2539:8:48"
                          }
                        ],
                        "id": 15017,
                        "name": "IndexAccess",
                        "src": "2528:20:48"
                      }
                    ],
                    "id": 15018,
                    "name": "VariableDeclarationStatement",
                    "src": "2512:36:48"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 15012
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
                              "referencedDeclaration": 15014,
                              "type": "address",
                              "value": "owner"
                            },
                            "id": 15019,
                            "name": "Identifier",
                            "src": "2561:5:48"
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
                                "id": 15020,
                                "name": "ElementaryTypeNameExpression",
                                "src": "2570:7:48"
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
                                "id": 15021,
                                "name": "Literal",
                                "src": "2578:1:48"
                              }
                            ],
                            "id": 15022,
                            "name": "FunctionCall",
                            "src": "2570:10:48"
                          }
                        ],
                        "id": 15023,
                        "name": "BinaryOperation",
                        "src": "2561:19:48"
                      }
                    ],
                    "id": 15024,
                    "name": "Return",
                    "src": "2554:26:48"
                  }
                ],
                "id": 15025,
                "name": "Block",
                "src": "2506:79:48"
              }
            ],
            "id": 15026,
            "name": "FunctionDefinition",
            "src": "2445:140:48"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "approve",
              "payable": false,
              "scope": 15481,
              "stateMutability": "nonpayable",
              "superFunction": 14845,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 15086,
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
                        "id": 15027,
                        "name": "ElementaryTypeName",
                        "src": "3015:7:48"
                      }
                    ],
                    "id": 15028,
                    "name": "VariableDeclaration",
                    "src": "3015:11:48"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 15086,
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
                        "id": 15029,
                        "name": "ElementaryTypeName",
                        "src": "3028:7:48"
                      }
                    ],
                    "id": 15030,
                    "name": "VariableDeclaration",
                    "src": "3028:16:48"
                  }
                ],
                "id": 15031,
                "name": "ParameterList",
                "src": "3014:31:48"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 15032,
                "name": "ParameterList",
                "src": "3053:0:48"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        15034
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "owner",
                          "scope": 15086,
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
                            "id": 15033,
                            "name": "ElementaryTypeName",
                            "src": "3059:7:48"
                          }
                        ],
                        "id": 15034,
                        "name": "VariableDeclaration",
                        "src": "3059:13:48"
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
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                15006
                              ],
                              "referencedDeclaration": 15006,
                              "type": "function (uint256) view returns (address)",
                              "value": "ownerOf"
                            },
                            "id": 15035,
                            "name": "Identifier",
                            "src": "3075:7:48"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 15030,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 15036,
                            "name": "Identifier",
                            "src": "3083:8:48"
                          }
                        ],
                        "id": 15037,
                        "name": "FunctionCall",
                        "src": "3075:17:48"
                      }
                    ],
                    "id": 15038,
                    "name": "VariableDeclarationStatement",
                    "src": "3059:33:48"
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
                            "id": 15039,
                            "name": "Identifier",
                            "src": "3098:7:48"
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
                                  "referencedDeclaration": 15028,
                                  "type": "address",
                                  "value": "_to"
                                },
                                "id": 15040,
                                "name": "Identifier",
                                "src": "3106:3:48"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 15034,
                                  "type": "address",
                                  "value": "owner"
                                },
                                "id": 15041,
                                "name": "Identifier",
                                "src": "3113:5:48"
                              }
                            ],
                            "id": 15042,
                            "name": "BinaryOperation",
                            "src": "3106:12:48"
                          }
                        ],
                        "id": 15043,
                        "name": "FunctionCall",
                        "src": "3098:21:48"
                      }
                    ],
                    "id": 15044,
                    "name": "ExpressionStatement",
                    "src": "3098:21:48"
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
                            "id": 15045,
                            "name": "Identifier",
                            "src": "3125:7:48"
                          },
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
                                          "referencedDeclaration": 15881,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 15046,
                                        "name": "Identifier",
                                        "src": "3133:3:48"
                                      }
                                    ],
                                    "id": 15047,
                                    "name": "MemberAccess",
                                    "src": "3133:10:48"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 15034,
                                      "type": "address",
                                      "value": "owner"
                                    },
                                    "id": 15048,
                                    "name": "Identifier",
                                    "src": "3147:5:48"
                                  }
                                ],
                                "id": 15049,
                                "name": "BinaryOperation",
                                "src": "3133:19:48"
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
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        15145
                                      ],
                                      "referencedDeclaration": 15145,
                                      "type": "function (address,address) view returns (bool)",
                                      "value": "isApprovedForAll"
                                    },
                                    "id": 15050,
                                    "name": "Identifier",
                                    "src": "3156:16:48"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 15034,
                                      "type": "address",
                                      "value": "owner"
                                    },
                                    "id": 15051,
                                    "name": "Identifier",
                                    "src": "3173:5:48"
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
                                          "referencedDeclaration": 15881,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 15052,
                                        "name": "Identifier",
                                        "src": "3180:3:48"
                                      }
                                    ],
                                    "id": 15053,
                                    "name": "MemberAccess",
                                    "src": "3180:10:48"
                                  }
                                ],
                                "id": 15054,
                                "name": "FunctionCall",
                                "src": "3156:35:48"
                              }
                            ],
                            "id": 15055,
                            "name": "BinaryOperation",
                            "src": "3133:58:48"
                          }
                        ],
                        "id": 15056,
                        "name": "FunctionCall",
                        "src": "3125:67:48"
                      }
                    ],
                    "id": 15057,
                    "name": "ExpressionStatement",
                    "src": "3125:67:48"
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
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        15098
                                      ],
                                      "referencedDeclaration": 15098,
                                      "type": "function (uint256) view returns (address)",
                                      "value": "getApproved"
                                    },
                                    "id": 15058,
                                    "name": "Identifier",
                                    "src": "3203:11:48"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 15030,
                                      "type": "uint256",
                                      "value": "_tokenId"
                                    },
                                    "id": 15059,
                                    "name": "Identifier",
                                    "src": "3215:8:48"
                                  }
                                ],
                                "id": 15060,
                                "name": "FunctionCall",
                                "src": "3203:21:48"
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
                                    "id": 15061,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "3228:7:48"
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
                                    "id": 15062,
                                    "name": "Literal",
                                    "src": "3236:1:48"
                                  }
                                ],
                                "id": 15063,
                                "name": "FunctionCall",
                                "src": "3228:10:48"
                              }
                            ],
                            "id": 15064,
                            "name": "BinaryOperation",
                            "src": "3203:35:48"
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
                                  "referencedDeclaration": 15028,
                                  "type": "address",
                                  "value": "_to"
                                },
                                "id": 15065,
                                "name": "Identifier",
                                "src": "3242:3:48"
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
                                    "id": 15066,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "3249:7:48"
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
                                    "id": 15067,
                                    "name": "Literal",
                                    "src": "3257:1:48"
                                  }
                                ],
                                "id": 15068,
                                "name": "FunctionCall",
                                "src": "3249:10:48"
                              }
                            ],
                            "id": 15069,
                            "name": "BinaryOperation",
                            "src": "3242:17:48"
                          }
                        ],
                        "id": 15070,
                        "name": "BinaryOperation",
                        "src": "3203:56:48"
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
                                          "referencedDeclaration": 14923,
                                          "type": "mapping(uint256 => address)",
                                          "value": "tokenApprovals"
                                        },
                                        "id": 15071,
                                        "name": "Identifier",
                                        "src": "3269:14:48"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 15030,
                                          "type": "uint256",
                                          "value": "_tokenId"
                                        },
                                        "id": 15072,
                                        "name": "Identifier",
                                        "src": "3284:8:48"
                                      }
                                    ],
                                    "id": 15073,
                                    "name": "IndexAccess",
                                    "src": "3269:24:48"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 15028,
                                      "type": "address",
                                      "value": "_to"
                                    },
                                    "id": 15074,
                                    "name": "Identifier",
                                    "src": "3296:3:48"
                                  }
                                ],
                                "id": 15075,
                                "name": "Assignment",
                                "src": "3269:30:48"
                              }
                            ],
                            "id": 15076,
                            "name": "ExpressionStatement",
                            "src": "3269:30:48"
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
                                        },
                                        {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 14809,
                                      "type": "function (address,address,uint256)",
                                      "value": "Approval"
                                    },
                                    "id": 15077,
                                    "name": "Identifier",
                                    "src": "3307:8:48"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 15034,
                                      "type": "address",
                                      "value": "owner"
                                    },
                                    "id": 15078,
                                    "name": "Identifier",
                                    "src": "3316:5:48"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 15028,
                                      "type": "address",
                                      "value": "_to"
                                    },
                                    "id": 15079,
                                    "name": "Identifier",
                                    "src": "3323:3:48"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 15030,
                                      "type": "uint256",
                                      "value": "_tokenId"
                                    },
                                    "id": 15080,
                                    "name": "Identifier",
                                    "src": "3328:8:48"
                                  }
                                ],
                                "id": 15081,
                                "name": "FunctionCall",
                                "src": "3307:30:48"
                              }
                            ],
                            "id": 15082,
                            "name": "ExpressionStatement",
                            "src": "3307:30:48"
                          }
                        ],
                        "id": 15083,
                        "name": "Block",
                        "src": "3261:83:48"
                      }
                    ],
                    "id": 15084,
                    "name": "IfStatement",
                    "src": "3199:145:48"
                  }
                ],
                "id": 15085,
                "name": "Block",
                "src": "3053:295:48"
              }
            ],
            "id": 15086,
            "name": "FunctionDefinition",
            "src": "2998:350:48"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getApproved",
              "payable": false,
              "scope": 15481,
              "stateMutability": "view",
              "superFunction": 14852,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 15098,
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
                        "id": 15087,
                        "name": "ElementaryTypeName",
                        "src": "3598:7:48"
                      }
                    ],
                    "id": 15088,
                    "name": "VariableDeclaration",
                    "src": "3598:16:48"
                  }
                ],
                "id": 15089,
                "name": "ParameterList",
                "src": "3597:18:48"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 15098,
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
                        "id": 15090,
                        "name": "ElementaryTypeName",
                        "src": "3637:7:48"
                      }
                    ],
                    "id": 15091,
                    "name": "VariableDeclaration",
                    "src": "3637:7:48"
                  }
                ],
                "id": 15092,
                "name": "ParameterList",
                "src": "3636:9:48"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 15092
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
                              "referencedDeclaration": 14923,
                              "type": "mapping(uint256 => address)",
                              "value": "tokenApprovals"
                            },
                            "id": 15093,
                            "name": "Identifier",
                            "src": "3659:14:48"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 15088,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 15094,
                            "name": "Identifier",
                            "src": "3674:8:48"
                          }
                        ],
                        "id": 15095,
                        "name": "IndexAccess",
                        "src": "3659:24:48"
                      }
                    ],
                    "id": 15096,
                    "name": "Return",
                    "src": "3652:31:48"
                  }
                ],
                "id": 15097,
                "name": "Block",
                "src": "3646:42:48"
              }
            ],
            "id": 15098,
            "name": "FunctionDefinition",
            "src": "3577:111:48"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "setApprovalForAll",
              "payable": false,
              "scope": 15481,
              "stateMutability": "nonpayable",
              "superFunction": 14859,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 15129,
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
                        "id": 15099,
                        "name": "ElementaryTypeName",
                        "src": "3996:7:48"
                      }
                    ],
                    "id": 15100,
                    "name": "VariableDeclaration",
                    "src": "3996:11:48"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_approved",
                      "scope": 15129,
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
                        "id": 15101,
                        "name": "ElementaryTypeName",
                        "src": "4009:4:48"
                      }
                    ],
                    "id": 15102,
                    "name": "VariableDeclaration",
                    "src": "4009:14:48"
                  }
                ],
                "id": 15103,
                "name": "ParameterList",
                "src": "3995:29:48"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 15104,
                "name": "ParameterList",
                "src": "4032:0:48"
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
                            "id": 15105,
                            "name": "Identifier",
                            "src": "4038:7:48"
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
                                  "referencedDeclaration": 15100,
                                  "type": "address",
                                  "value": "_to"
                                },
                                "id": 15106,
                                "name": "Identifier",
                                "src": "4046:3:48"
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
                                      "referencedDeclaration": 15881,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 15107,
                                    "name": "Identifier",
                                    "src": "4053:3:48"
                                  }
                                ],
                                "id": 15108,
                                "name": "MemberAccess",
                                "src": "4053:10:48"
                              }
                            ],
                            "id": 15109,
                            "name": "BinaryOperation",
                            "src": "4046:17:48"
                          }
                        ],
                        "id": 15110,
                        "name": "FunctionCall",
                        "src": "4038:26:48"
                      }
                    ],
                    "id": 15111,
                    "name": "ExpressionStatement",
                    "src": "4038:26:48"
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
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
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
                                  "type": "mapping(address => bool)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 14933,
                                      "type": "mapping(address => mapping(address => bool))",
                                      "value": "operatorApprovals"
                                    },
                                    "id": 15112,
                                    "name": "Identifier",
                                    "src": "4070:17:48"
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
                                          "referencedDeclaration": 15881,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 15113,
                                        "name": "Identifier",
                                        "src": "4088:3:48"
                                      }
                                    ],
                                    "id": 15114,
                                    "name": "MemberAccess",
                                    "src": "4088:10:48"
                                  }
                                ],
                                "id": 15116,
                                "name": "IndexAccess",
                                "src": "4070:29:48"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 15100,
                                  "type": "address",
                                  "value": "_to"
                                },
                                "id": 15115,
                                "name": "Identifier",
                                "src": "4100:3:48"
                              }
                            ],
                            "id": 15117,
                            "name": "IndexAccess",
                            "src": "4070:34:48"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 15102,
                              "type": "bool",
                              "value": "_approved"
                            },
                            "id": 15118,
                            "name": "Identifier",
                            "src": "4107:9:48"
                          }
                        ],
                        "id": 15119,
                        "name": "Assignment",
                        "src": "4070:46:48"
                      }
                    ],
                    "id": 15120,
                    "name": "ExpressionStatement",
                    "src": "4070:46:48"
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
                                },
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 14817,
                              "type": "function (address,address,bool)",
                              "value": "ApprovalForAll"
                            },
                            "id": 15121,
                            "name": "Identifier",
                            "src": "4122:14:48"
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
                                  "referencedDeclaration": 15881,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 15122,
                                "name": "Identifier",
                                "src": "4137:3:48"
                              }
                            ],
                            "id": 15123,
                            "name": "MemberAccess",
                            "src": "4137:10:48"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 15100,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 15124,
                            "name": "Identifier",
                            "src": "4149:3:48"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 15102,
                              "type": "bool",
                              "value": "_approved"
                            },
                            "id": 15125,
                            "name": "Identifier",
                            "src": "4154:9:48"
                          }
                        ],
                        "id": 15126,
                        "name": "FunctionCall",
                        "src": "4122:42:48"
                      }
                    ],
                    "id": 15127,
                    "name": "ExpressionStatement",
                    "src": "4122:42:48"
                  }
                ],
                "id": 15128,
                "name": "Block",
                "src": "4032:137:48"
              }
            ],
            "id": 15129,
            "name": "FunctionDefinition",
            "src": "3969:200:48"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "isApprovedForAll",
              "payable": false,
              "scope": 15481,
              "stateMutability": "view",
              "superFunction": 14868,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_owner",
                      "scope": 15145,
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
                        "id": 15130,
                        "name": "ElementaryTypeName",
                        "src": "4504:7:48"
                      }
                    ],
                    "id": 15131,
                    "name": "VariableDeclaration",
                    "src": "4504:14:48"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_operator",
                      "scope": 15145,
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
                        "id": 15132,
                        "name": "ElementaryTypeName",
                        "src": "4520:7:48"
                      }
                    ],
                    "id": 15133,
                    "name": "VariableDeclaration",
                    "src": "4520:17:48"
                  }
                ],
                "id": 15134,
                "name": "ParameterList",
                "src": "4503:35:48"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 15145,
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
                        "id": 15135,
                        "name": "ElementaryTypeName",
                        "src": "4560:4:48"
                      }
                    ],
                    "id": 15136,
                    "name": "VariableDeclaration",
                    "src": "4560:4:48"
                  }
                ],
                "id": 15137,
                "name": "ParameterList",
                "src": "4559:6:48"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 15137
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
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
                              "type": "mapping(address => bool)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 14933,
                                  "type": "mapping(address => mapping(address => bool))",
                                  "value": "operatorApprovals"
                                },
                                "id": 15138,
                                "name": "Identifier",
                                "src": "4579:17:48"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 15131,
                                  "type": "address",
                                  "value": "_owner"
                                },
                                "id": 15139,
                                "name": "Identifier",
                                "src": "4597:6:48"
                              }
                            ],
                            "id": 15140,
                            "name": "IndexAccess",
                            "src": "4579:25:48"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 15133,
                              "type": "address",
                              "value": "_operator"
                            },
                            "id": 15141,
                            "name": "Identifier",
                            "src": "4605:9:48"
                          }
                        ],
                        "id": 15142,
                        "name": "IndexAccess",
                        "src": "4579:36:48"
                      }
                    ],
                    "id": 15143,
                    "name": "Return",
                    "src": "4572:43:48"
                  }
                ],
                "id": 15144,
                "name": "Block",
                "src": "4566:54:48"
              }
            ],
            "id": 15145,
            "name": "FunctionDefinition",
            "src": "4478:142:48"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "transferFrom",
              "payable": false,
              "scope": 15481,
              "stateMutability": "nonpayable",
              "superFunction": 14877,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_from",
                      "scope": 15195,
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
                        "id": 15146,
                        "name": "ElementaryTypeName",
                        "src": "5064:7:48"
                      }
                    ],
                    "id": 15147,
                    "name": "VariableDeclaration",
                    "src": "5064:13:48"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 15195,
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
                        "id": 15148,
                        "name": "ElementaryTypeName",
                        "src": "5079:7:48"
                      }
                    ],
                    "id": 15149,
                    "name": "VariableDeclaration",
                    "src": "5079:11:48"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 15195,
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
                        "id": 15150,
                        "name": "ElementaryTypeName",
                        "src": "5092:7:48"
                      }
                    ],
                    "id": 15151,
                    "name": "VariableDeclaration",
                    "src": "5092:16:48"
                  }
                ],
                "id": 15152,
                "name": "ParameterList",
                "src": "5063:46:48"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 15156,
                "name": "ParameterList",
                "src": "5139:0:48"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 14962,
                      "type": "modifier (uint256)",
                      "value": "canTransfer"
                    },
                    "id": 15153,
                    "name": "Identifier",
                    "src": "5117:11:48"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 15151,
                      "type": "uint256",
                      "value": "_tokenId"
                    },
                    "id": 15154,
                    "name": "Identifier",
                    "src": "5129:8:48"
                  }
                ],
                "id": 15155,
                "name": "ModifierInvocation",
                "src": "5117:21:48"
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
                            "id": 15157,
                            "name": "Identifier",
                            "src": "5145:7:48"
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
                                  "referencedDeclaration": 15147,
                                  "type": "address",
                                  "value": "_from"
                                },
                                "id": 15158,
                                "name": "Identifier",
                                "src": "5153:5:48"
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
                                    "id": 15159,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "5162:7:48"
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
                                    "id": 15160,
                                    "name": "Literal",
                                    "src": "5170:1:48"
                                  }
                                ],
                                "id": 15161,
                                "name": "FunctionCall",
                                "src": "5162:10:48"
                              }
                            ],
                            "id": 15162,
                            "name": "BinaryOperation",
                            "src": "5153:19:48"
                          }
                        ],
                        "id": 15163,
                        "name": "FunctionCall",
                        "src": "5145:28:48"
                      }
                    ],
                    "id": 15164,
                    "name": "ExpressionStatement",
                    "src": "5145:28:48"
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
                            "id": 15165,
                            "name": "Identifier",
                            "src": "5179:7:48"
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
                                  "referencedDeclaration": 15149,
                                  "type": "address",
                                  "value": "_to"
                                },
                                "id": 15166,
                                "name": "Identifier",
                                "src": "5187:3:48"
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
                                    "id": 15167,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "5194:7:48"
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
                                    "id": 15168,
                                    "name": "Literal",
                                    "src": "5202:1:48"
                                  }
                                ],
                                "id": 15169,
                                "name": "FunctionCall",
                                "src": "5194:10:48"
                              }
                            ],
                            "id": 15170,
                            "name": "BinaryOperation",
                            "src": "5187:17:48"
                          }
                        ],
                        "id": 15171,
                        "name": "FunctionCall",
                        "src": "5179:26:48"
                      }
                    ],
                    "id": 15172,
                    "name": "ExpressionStatement",
                    "src": "5179:26:48"
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
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 15372,
                              "type": "function (address,uint256)",
                              "value": "clearApproval"
                            },
                            "id": 15173,
                            "name": "Identifier",
                            "src": "5212:13:48"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 15147,
                              "type": "address",
                              "value": "_from"
                            },
                            "id": 15174,
                            "name": "Identifier",
                            "src": "5226:5:48"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 15151,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 15175,
                            "name": "Identifier",
                            "src": "5233:8:48"
                          }
                        ],
                        "id": 15176,
                        "name": "FunctionCall",
                        "src": "5212:30:48"
                      }
                    ],
                    "id": 15177,
                    "name": "ExpressionStatement",
                    "src": "5212:30:48"
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
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 15442,
                              "type": "function (address,uint256)",
                              "value": "removeTokenFrom"
                            },
                            "id": 15178,
                            "name": "Identifier",
                            "src": "5248:15:48"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 15147,
                              "type": "address",
                              "value": "_from"
                            },
                            "id": 15179,
                            "name": "Identifier",
                            "src": "5264:5:48"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 15151,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 15180,
                            "name": "Identifier",
                            "src": "5271:8:48"
                          }
                        ],
                        "id": 15181,
                        "name": "FunctionCall",
                        "src": "5248:32:48"
                      }
                    ],
                    "id": 15182,
                    "name": "ExpressionStatement",
                    "src": "5248:32:48"
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
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 15407,
                              "type": "function (address,uint256)",
                              "value": "addTokenTo"
                            },
                            "id": 15183,
                            "name": "Identifier",
                            "src": "5286:10:48"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 15149,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 15184,
                            "name": "Identifier",
                            "src": "5297:3:48"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 15151,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 15185,
                            "name": "Identifier",
                            "src": "5302:8:48"
                          }
                        ],
                        "id": 15186,
                        "name": "FunctionCall",
                        "src": "5286:25:48"
                      }
                    ],
                    "id": 15187,
                    "name": "ExpressionStatement",
                    "src": "5286:25:48"
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
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 14801,
                              "type": "function (address,address,uint256)",
                              "value": "Transfer"
                            },
                            "id": 15188,
                            "name": "Identifier",
                            "src": "5322:8:48"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 15147,
                              "type": "address",
                              "value": "_from"
                            },
                            "id": 15189,
                            "name": "Identifier",
                            "src": "5331:5:48"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 15149,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 15190,
                            "name": "Identifier",
                            "src": "5338:3:48"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 15151,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 15191,
                            "name": "Identifier",
                            "src": "5343:8:48"
                          }
                        ],
                        "id": 15192,
                        "name": "FunctionCall",
                        "src": "5322:30:48"
                      }
                    ],
                    "id": 15193,
                    "name": "ExpressionStatement",
                    "src": "5322:30:48"
                  }
                ],
                "id": 15194,
                "name": "Block",
                "src": "5139:218:48"
              }
            ],
            "id": 15195,
            "name": "FunctionDefinition",
            "src": "5042:315:48"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "safeTransferFrom",
              "payable": false,
              "scope": 15481,
              "stateMutability": "nonpayable",
              "superFunction": 14886,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_from",
                      "scope": 15215,
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
                        "id": 15196,
                        "name": "ElementaryTypeName",
                        "src": "5990:7:48"
                      }
                    ],
                    "id": 15197,
                    "name": "VariableDeclaration",
                    "src": "5990:13:48"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 15215,
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
                        "id": 15198,
                        "name": "ElementaryTypeName",
                        "src": "6005:7:48"
                      }
                    ],
                    "id": 15199,
                    "name": "VariableDeclaration",
                    "src": "6005:11:48"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 15215,
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
                        "id": 15200,
                        "name": "ElementaryTypeName",
                        "src": "6018:7:48"
                      }
                    ],
                    "id": 15201,
                    "name": "VariableDeclaration",
                    "src": "6018:16:48"
                  }
                ],
                "id": 15202,
                "name": "ParameterList",
                "src": "5989:46:48"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 15206,
                "name": "ParameterList",
                "src": "6065:0:48"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 14962,
                      "type": "modifier (uint256)",
                      "value": "canTransfer"
                    },
                    "id": 15203,
                    "name": "Identifier",
                    "src": "6043:11:48"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 15201,
                      "type": "uint256",
                      "value": "_tokenId"
                    },
                    "id": 15204,
                    "name": "Identifier",
                    "src": "6055:8:48"
                  }
                ],
                "id": 15205,
                "name": "ModifierInvocation",
                "src": "6043:21:48"
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
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                                  "typeString": "literal_string \"\""
                                }
                              ],
                              "overloadedDeclarations": [
                                15215,
                                15245
                              ],
                              "referencedDeclaration": 15245,
                              "type": "function (address,address,uint256,bytes memory)",
                              "value": "safeTransferFrom"
                            },
                            "id": 15207,
                            "name": "Identifier",
                            "src": "6071:16:48"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 15197,
                              "type": "address",
                              "value": "_from"
                            },
                            "id": 15208,
                            "name": "Identifier",
                            "src": "6088:5:48"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 15199,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 15209,
                            "name": "Identifier",
                            "src": "6095:3:48"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 15201,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 15210,
                            "name": "Identifier",
                            "src": "6100:8:48"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "string",
                              "type": "literal_string \"\"",
                              "value": ""
                            },
                            "id": 15211,
                            "name": "Literal",
                            "src": "6110:2:48"
                          }
                        ],
                        "id": 15212,
                        "name": "FunctionCall",
                        "src": "6071:42:48"
                      }
                    ],
                    "id": 15213,
                    "name": "ExpressionStatement",
                    "src": "6071:42:48"
                  }
                ],
                "id": 15214,
                "name": "Block",
                "src": "6065:53:48"
              }
            ],
            "id": 15215,
            "name": "FunctionDefinition",
            "src": "5964:154:48"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "safeTransferFrom",
              "payable": false,
              "scope": 15481,
              "stateMutability": "nonpayable",
              "superFunction": 14897,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_from",
                      "scope": 15245,
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
                        "id": 15216,
                        "name": "ElementaryTypeName",
                        "src": "6820:7:48"
                      }
                    ],
                    "id": 15217,
                    "name": "VariableDeclaration",
                    "src": "6820:13:48"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 15245,
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
                        "id": 15218,
                        "name": "ElementaryTypeName",
                        "src": "6835:7:48"
                      }
                    ],
                    "id": 15219,
                    "name": "VariableDeclaration",
                    "src": "6835:11:48"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 15245,
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
                        "id": 15220,
                        "name": "ElementaryTypeName",
                        "src": "6848:7:48"
                      }
                    ],
                    "id": 15221,
                    "name": "VariableDeclaration",
                    "src": "6848:16:48"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_data",
                      "scope": 15245,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes",
                          "type": "bytes storage pointer"
                        },
                        "id": 15222,
                        "name": "ElementaryTypeName",
                        "src": "6866:5:48"
                      }
                    ],
                    "id": 15223,
                    "name": "VariableDeclaration",
                    "src": "6866:11:48"
                  }
                ],
                "id": 15224,
                "name": "ParameterList",
                "src": "6819:59:48"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 15228,
                "name": "ParameterList",
                "src": "6908:0:48"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 14962,
                      "type": "modifier (uint256)",
                      "value": "canTransfer"
                    },
                    "id": 15225,
                    "name": "Identifier",
                    "src": "6886:11:48"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 15221,
                      "type": "uint256",
                      "value": "_tokenId"
                    },
                    "id": 15226,
                    "name": "Identifier",
                    "src": "6898:8:48"
                  }
                ],
                "id": 15227,
                "name": "ModifierInvocation",
                "src": "6886:21:48"
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
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                15195
                              ],
                              "referencedDeclaration": 15195,
                              "type": "function (address,address,uint256)",
                              "value": "transferFrom"
                            },
                            "id": 15229,
                            "name": "Identifier",
                            "src": "6914:12:48"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 15217,
                              "type": "address",
                              "value": "_from"
                            },
                            "id": 15230,
                            "name": "Identifier",
                            "src": "6927:5:48"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 15219,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 15231,
                            "name": "Identifier",
                            "src": "6934:3:48"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 15221,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 15232,
                            "name": "Identifier",
                            "src": "6939:8:48"
                          }
                        ],
                        "id": 15233,
                        "name": "FunctionCall",
                        "src": "6914:34:48"
                      }
                    ],
                    "id": 15234,
                    "name": "ExpressionStatement",
                    "src": "6914:34:48"
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
                            "id": 15235,
                            "name": "Identifier",
                            "src": "6954:7:48"
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
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    {
                                      "typeIdentifier": "t_bytes_memory_ptr",
                                      "typeString": "bytes memory"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 15480,
                                  "type": "function (address,address,uint256,bytes memory) returns (bool)",
                                  "value": "checkAndCallSafeTransfer"
                                },
                                "id": 15236,
                                "name": "Identifier",
                                "src": "6962:24:48"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 15217,
                                  "type": "address",
                                  "value": "_from"
                                },
                                "id": 15237,
                                "name": "Identifier",
                                "src": "6987:5:48"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 15219,
                                  "type": "address",
                                  "value": "_to"
                                },
                                "id": 15238,
                                "name": "Identifier",
                                "src": "6994:3:48"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 15221,
                                  "type": "uint256",
                                  "value": "_tokenId"
                                },
                                "id": 15239,
                                "name": "Identifier",
                                "src": "6999:8:48"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 15223,
                                  "type": "bytes memory",
                                  "value": "_data"
                                },
                                "id": 15240,
                                "name": "Identifier",
                                "src": "7009:5:48"
                              }
                            ],
                            "id": 15241,
                            "name": "FunctionCall",
                            "src": "6962:53:48"
                          }
                        ],
                        "id": 15242,
                        "name": "FunctionCall",
                        "src": "6954:62:48"
                      }
                    ],
                    "id": 15243,
                    "name": "ExpressionStatement",
                    "src": "6954:62:48"
                  }
                ],
                "id": 15244,
                "name": "Block",
                "src": "6908:113:48"
              }
            ],
            "id": 15245,
            "name": "FunctionDefinition",
            "src": "6794:227:48"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "isApprovedOrOwner",
              "payable": false,
              "scope": 15481,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_spender",
                      "scope": 15276,
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
                        "id": 15246,
                        "name": "ElementaryTypeName",
                        "src": "7395:7:48"
                      }
                    ],
                    "id": 15247,
                    "name": "VariableDeclaration",
                    "src": "7395:16:48"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 15276,
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
                        "id": 15248,
                        "name": "ElementaryTypeName",
                        "src": "7413:7:48"
                      }
                    ],
                    "id": 15249,
                    "name": "VariableDeclaration",
                    "src": "7413:16:48"
                  }
                ],
                "id": 15250,
                "name": "ParameterList",
                "src": "7394:36:48"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 15276,
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
                        "id": 15251,
                        "name": "ElementaryTypeName",
                        "src": "7454:4:48"
                      }
                    ],
                    "id": 15252,
                    "name": "VariableDeclaration",
                    "src": "7454:4:48"
                  }
                ],
                "id": 15253,
                "name": "ParameterList",
                "src": "7453:6:48"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        15255
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "owner",
                          "scope": 15276,
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
                            "id": 15254,
                            "name": "ElementaryTypeName",
                            "src": "7466:7:48"
                          }
                        ],
                        "id": 15255,
                        "name": "VariableDeclaration",
                        "src": "7466:13:48"
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
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                15006
                              ],
                              "referencedDeclaration": 15006,
                              "type": "function (uint256) view returns (address)",
                              "value": "ownerOf"
                            },
                            "id": 15256,
                            "name": "Identifier",
                            "src": "7482:7:48"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 15249,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 15257,
                            "name": "Identifier",
                            "src": "7490:8:48"
                          }
                        ],
                        "id": 15258,
                        "name": "FunctionCall",
                        "src": "7482:17:48"
                      }
                    ],
                    "id": 15259,
                    "name": "VariableDeclarationStatement",
                    "src": "7466:33:48"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 15253
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
                                      "referencedDeclaration": 15247,
                                      "type": "address",
                                      "value": "_spender"
                                    },
                                    "id": 15260,
                                    "name": "Identifier",
                                    "src": "7512:8:48"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 15255,
                                      "type": "address",
                                      "value": "owner"
                                    },
                                    "id": 15261,
                                    "name": "Identifier",
                                    "src": "7524:5:48"
                                  }
                                ],
                                "id": 15262,
                                "name": "BinaryOperation",
                                "src": "7512:17:48"
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
                                  "operator": "==",
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
                                      "type": "address",
                                      "type_conversion": false
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          ],
                                          "overloadedDeclarations": [
                                            15098
                                          ],
                                          "referencedDeclaration": 15098,
                                          "type": "function (uint256) view returns (address)",
                                          "value": "getApproved"
                                        },
                                        "id": 15263,
                                        "name": "Identifier",
                                        "src": "7533:11:48"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 15249,
                                          "type": "uint256",
                                          "value": "_tokenId"
                                        },
                                        "id": 15264,
                                        "name": "Identifier",
                                        "src": "7545:8:48"
                                      }
                                    ],
                                    "id": 15265,
                                    "name": "FunctionCall",
                                    "src": "7533:21:48"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 15247,
                                      "type": "address",
                                      "value": "_spender"
                                    },
                                    "id": 15266,
                                    "name": "Identifier",
                                    "src": "7558:8:48"
                                  }
                                ],
                                "id": 15267,
                                "name": "BinaryOperation",
                                "src": "7533:33:48"
                              }
                            ],
                            "id": 15268,
                            "name": "BinaryOperation",
                            "src": "7512:54:48"
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
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    15145
                                  ],
                                  "referencedDeclaration": 15145,
                                  "type": "function (address,address) view returns (bool)",
                                  "value": "isApprovedForAll"
                                },
                                "id": 15269,
                                "name": "Identifier",
                                "src": "7570:16:48"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 15255,
                                  "type": "address",
                                  "value": "owner"
                                },
                                "id": 15270,
                                "name": "Identifier",
                                "src": "7587:5:48"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 15247,
                                  "type": "address",
                                  "value": "_spender"
                                },
                                "id": 15271,
                                "name": "Identifier",
                                "src": "7594:8:48"
                              }
                            ],
                            "id": 15272,
                            "name": "FunctionCall",
                            "src": "7570:33:48"
                          }
                        ],
                        "id": 15273,
                        "name": "BinaryOperation",
                        "src": "7512:91:48"
                      }
                    ],
                    "id": 15274,
                    "name": "Return",
                    "src": "7505:98:48"
                  }
                ],
                "id": 15275,
                "name": "Block",
                "src": "7460:148:48"
              }
            ],
            "id": 15276,
            "name": "FunctionDefinition",
            "src": "7368:240:48"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "_mint",
              "payable": false,
              "scope": 15481,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 15305,
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
                        "id": 15277,
                        "name": "ElementaryTypeName",
                        "src": "7872:7:48"
                      }
                    ],
                    "id": 15278,
                    "name": "VariableDeclaration",
                    "src": "7872:11:48"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 15305,
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
                        "id": 15279,
                        "name": "ElementaryTypeName",
                        "src": "7885:7:48"
                      }
                    ],
                    "id": 15280,
                    "name": "VariableDeclaration",
                    "src": "7885:16:48"
                  }
                ],
                "id": 15281,
                "name": "ParameterList",
                "src": "7871:31:48"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 15282,
                "name": "ParameterList",
                "src": "7912:0:48"
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
                            "id": 15283,
                            "name": "Identifier",
                            "src": "7918:7:48"
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
                                  "referencedDeclaration": 15278,
                                  "type": "address",
                                  "value": "_to"
                                },
                                "id": 15284,
                                "name": "Identifier",
                                "src": "7926:3:48"
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
                                    "id": 15285,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "7933:7:48"
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
                                    "id": 15286,
                                    "name": "Literal",
                                    "src": "7941:1:48"
                                  }
                                ],
                                "id": 15287,
                                "name": "FunctionCall",
                                "src": "7933:10:48"
                              }
                            ],
                            "id": 15288,
                            "name": "BinaryOperation",
                            "src": "7926:17:48"
                          }
                        ],
                        "id": 15289,
                        "name": "FunctionCall",
                        "src": "7918:26:48"
                      }
                    ],
                    "id": 15290,
                    "name": "ExpressionStatement",
                    "src": "7918:26:48"
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
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 15407,
                              "type": "function (address,uint256)",
                              "value": "addTokenTo"
                            },
                            "id": 15291,
                            "name": "Identifier",
                            "src": "7950:10:48"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 15278,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 15292,
                            "name": "Identifier",
                            "src": "7961:3:48"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 15280,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 15293,
                            "name": "Identifier",
                            "src": "7966:8:48"
                          }
                        ],
                        "id": 15294,
                        "name": "FunctionCall",
                        "src": "7950:25:48"
                      }
                    ],
                    "id": 15295,
                    "name": "ExpressionStatement",
                    "src": "7950:25:48"
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
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 14801,
                              "type": "function (address,address,uint256)",
                              "value": "Transfer"
                            },
                            "id": 15296,
                            "name": "Identifier",
                            "src": "7981:8:48"
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
                                "id": 15297,
                                "name": "ElementaryTypeNameExpression",
                                "src": "7990:7:48"
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
                                "id": 15298,
                                "name": "Literal",
                                "src": "7998:1:48"
                              }
                            ],
                            "id": 15299,
                            "name": "FunctionCall",
                            "src": "7990:10:48"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 15278,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 15300,
                            "name": "Identifier",
                            "src": "8002:3:48"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 15280,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 15301,
                            "name": "Identifier",
                            "src": "8007:8:48"
                          }
                        ],
                        "id": 15302,
                        "name": "FunctionCall",
                        "src": "7981:35:48"
                      }
                    ],
                    "id": 15303,
                    "name": "ExpressionStatement",
                    "src": "7981:35:48"
                  }
                ],
                "id": 15304,
                "name": "Block",
                "src": "7912:109:48"
              }
            ],
            "id": 15305,
            "name": "FunctionDefinition",
            "src": "7857:164:48"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "_burn",
              "payable": false,
              "scope": 15481,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_owner",
                      "scope": 15331,
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
                        "id": 15306,
                        "name": "ElementaryTypeName",
                        "src": "8223:7:48"
                      }
                    ],
                    "id": 15307,
                    "name": "VariableDeclaration",
                    "src": "8223:14:48"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 15331,
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
                        "id": 15308,
                        "name": "ElementaryTypeName",
                        "src": "8239:7:48"
                      }
                    ],
                    "id": 15309,
                    "name": "VariableDeclaration",
                    "src": "8239:16:48"
                  }
                ],
                "id": 15310,
                "name": "ParameterList",
                "src": "8222:34:48"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 15311,
                "name": "ParameterList",
                "src": "8266:0:48"
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
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 15372,
                              "type": "function (address,uint256)",
                              "value": "clearApproval"
                            },
                            "id": 15312,
                            "name": "Identifier",
                            "src": "8272:13:48"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 15307,
                              "type": "address",
                              "value": "_owner"
                            },
                            "id": 15313,
                            "name": "Identifier",
                            "src": "8286:6:48"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 15309,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 15314,
                            "name": "Identifier",
                            "src": "8294:8:48"
                          }
                        ],
                        "id": 15315,
                        "name": "FunctionCall",
                        "src": "8272:31:48"
                      }
                    ],
                    "id": 15316,
                    "name": "ExpressionStatement",
                    "src": "8272:31:48"
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
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 15442,
                              "type": "function (address,uint256)",
                              "value": "removeTokenFrom"
                            },
                            "id": 15317,
                            "name": "Identifier",
                            "src": "8309:15:48"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 15307,
                              "type": "address",
                              "value": "_owner"
                            },
                            "id": 15318,
                            "name": "Identifier",
                            "src": "8325:6:48"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 15309,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 15319,
                            "name": "Identifier",
                            "src": "8333:8:48"
                          }
                        ],
                        "id": 15320,
                        "name": "FunctionCall",
                        "src": "8309:33:48"
                      }
                    ],
                    "id": 15321,
                    "name": "ExpressionStatement",
                    "src": "8309:33:48"
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
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 14801,
                              "type": "function (address,address,uint256)",
                              "value": "Transfer"
                            },
                            "id": 15322,
                            "name": "Identifier",
                            "src": "8348:8:48"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 15307,
                              "type": "address",
                              "value": "_owner"
                            },
                            "id": 15323,
                            "name": "Identifier",
                            "src": "8357:6:48"
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
                                "id": 15324,
                                "name": "ElementaryTypeNameExpression",
                                "src": "8365:7:48"
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
                                "id": 15325,
                                "name": "Literal",
                                "src": "8373:1:48"
                              }
                            ],
                            "id": 15326,
                            "name": "FunctionCall",
                            "src": "8365:10:48"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 15309,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 15327,
                            "name": "Identifier",
                            "src": "8377:8:48"
                          }
                        ],
                        "id": 15328,
                        "name": "FunctionCall",
                        "src": "8348:38:48"
                      }
                    ],
                    "id": 15329,
                    "name": "ExpressionStatement",
                    "src": "8348:38:48"
                  }
                ],
                "id": 15330,
                "name": "Block",
                "src": "8266:125:48"
              }
            ],
            "id": 15331,
            "name": "FunctionDefinition",
            "src": "8208:183:48"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "clearApproval",
              "payable": false,
              "scope": 15481,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_owner",
                      "scope": 15372,
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
                        "id": 15332,
                        "name": "ElementaryTypeName",
                        "src": "8676:7:48"
                      }
                    ],
                    "id": 15333,
                    "name": "VariableDeclaration",
                    "src": "8676:14:48"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 15372,
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
                        "id": 15334,
                        "name": "ElementaryTypeName",
                        "src": "8692:7:48"
                      }
                    ],
                    "id": 15335,
                    "name": "VariableDeclaration",
                    "src": "8692:16:48"
                  }
                ],
                "id": 15336,
                "name": "ParameterList",
                "src": "8675:34:48"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 15337,
                "name": "ParameterList",
                "src": "8719:0:48"
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
                            "id": 15338,
                            "name": "Identifier",
                            "src": "8725:7:48"
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
                              "operator": "==",
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
                                  "type": "address",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        15006
                                      ],
                                      "referencedDeclaration": 15006,
                                      "type": "function (uint256) view returns (address)",
                                      "value": "ownerOf"
                                    },
                                    "id": 15339,
                                    "name": "Identifier",
                                    "src": "8733:7:48"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 15335,
                                      "type": "uint256",
                                      "value": "_tokenId"
                                    },
                                    "id": 15340,
                                    "name": "Identifier",
                                    "src": "8741:8:48"
                                  }
                                ],
                                "id": 15341,
                                "name": "FunctionCall",
                                "src": "8733:17:48"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 15333,
                                  "type": "address",
                                  "value": "_owner"
                                },
                                "id": 15342,
                                "name": "Identifier",
                                "src": "8754:6:48"
                              }
                            ],
                            "id": 15343,
                            "name": "BinaryOperation",
                            "src": "8733:27:48"
                          }
                        ],
                        "id": 15344,
                        "name": "FunctionCall",
                        "src": "8725:36:48"
                      }
                    ],
                    "id": 15345,
                    "name": "ExpressionStatement",
                    "src": "8725:36:48"
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
                          "operator": "!=",
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
                                  "referencedDeclaration": 14923,
                                  "type": "mapping(uint256 => address)",
                                  "value": "tokenApprovals"
                                },
                                "id": 15346,
                                "name": "Identifier",
                                "src": "8771:14:48"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 15335,
                                  "type": "uint256",
                                  "value": "_tokenId"
                                },
                                "id": 15347,
                                "name": "Identifier",
                                "src": "8786:8:48"
                              }
                            ],
                            "id": 15348,
                            "name": "IndexAccess",
                            "src": "8771:24:48"
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
                                "id": 15349,
                                "name": "ElementaryTypeNameExpression",
                                "src": "8799:7:48"
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
                                "id": 15350,
                                "name": "Literal",
                                "src": "8807:1:48"
                              }
                            ],
                            "id": 15351,
                            "name": "FunctionCall",
                            "src": "8799:10:48"
                          }
                        ],
                        "id": 15352,
                        "name": "BinaryOperation",
                        "src": "8771:38:48"
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
                                          "referencedDeclaration": 14923,
                                          "type": "mapping(uint256 => address)",
                                          "value": "tokenApprovals"
                                        },
                                        "id": 15353,
                                        "name": "Identifier",
                                        "src": "8819:14:48"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 15335,
                                          "type": "uint256",
                                          "value": "_tokenId"
                                        },
                                        "id": 15354,
                                        "name": "Identifier",
                                        "src": "8834:8:48"
                                      }
                                    ],
                                    "id": 15355,
                                    "name": "IndexAccess",
                                    "src": "8819:24:48"
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
                                        "id": 15356,
                                        "name": "ElementaryTypeNameExpression",
                                        "src": "8846:7:48"
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
                                        "id": 15357,
                                        "name": "Literal",
                                        "src": "8854:1:48"
                                      }
                                    ],
                                    "id": 15358,
                                    "name": "FunctionCall",
                                    "src": "8846:10:48"
                                  }
                                ],
                                "id": 15359,
                                "name": "Assignment",
                                "src": "8819:37:48"
                              }
                            ],
                            "id": 15360,
                            "name": "ExpressionStatement",
                            "src": "8819:37:48"
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
                                        },
                                        {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 14809,
                                      "type": "function (address,address,uint256)",
                                      "value": "Approval"
                                    },
                                    "id": 15361,
                                    "name": "Identifier",
                                    "src": "8864:8:48"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 15333,
                                      "type": "address",
                                      "value": "_owner"
                                    },
                                    "id": 15362,
                                    "name": "Identifier",
                                    "src": "8873:6:48"
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
                                        "id": 15363,
                                        "name": "ElementaryTypeNameExpression",
                                        "src": "8881:7:48"
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
                                        "id": 15364,
                                        "name": "Literal",
                                        "src": "8889:1:48"
                                      }
                                    ],
                                    "id": 15365,
                                    "name": "FunctionCall",
                                    "src": "8881:10:48"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 15335,
                                      "type": "uint256",
                                      "value": "_tokenId"
                                    },
                                    "id": 15366,
                                    "name": "Identifier",
                                    "src": "8893:8:48"
                                  }
                                ],
                                "id": 15367,
                                "name": "FunctionCall",
                                "src": "8864:38:48"
                              }
                            ],
                            "id": 15368,
                            "name": "ExpressionStatement",
                            "src": "8864:38:48"
                          }
                        ],
                        "id": 15369,
                        "name": "Block",
                        "src": "8811:98:48"
                      }
                    ],
                    "id": 15370,
                    "name": "IfStatement",
                    "src": "8767:142:48"
                  }
                ],
                "id": 15371,
                "name": "Block",
                "src": "8719:194:48"
              }
            ],
            "id": 15372,
            "name": "FunctionDefinition",
            "src": "8653:260:48"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "addTokenTo",
              "payable": false,
              "scope": 15481,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 15407,
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
                        "id": 15373,
                        "name": "ElementaryTypeName",
                        "src": "9192:7:48"
                      }
                    ],
                    "id": 15374,
                    "name": "VariableDeclaration",
                    "src": "9192:11:48"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 15407,
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
                        "id": 15375,
                        "name": "ElementaryTypeName",
                        "src": "9205:7:48"
                      }
                    ],
                    "id": 15376,
                    "name": "VariableDeclaration",
                    "src": "9205:16:48"
                  }
                ],
                "id": 15377,
                "name": "ParameterList",
                "src": "9191:31:48"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 15378,
                "name": "ParameterList",
                "src": "9232:0:48"
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
                            "id": 15379,
                            "name": "Identifier",
                            "src": "9238:7:48"
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
                                      "referencedDeclaration": 14919,
                                      "type": "mapping(uint256 => address)",
                                      "value": "tokenOwner"
                                    },
                                    "id": 15380,
                                    "name": "Identifier",
                                    "src": "9246:10:48"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 15376,
                                      "type": "uint256",
                                      "value": "_tokenId"
                                    },
                                    "id": 15381,
                                    "name": "Identifier",
                                    "src": "9257:8:48"
                                  }
                                ],
                                "id": 15382,
                                "name": "IndexAccess",
                                "src": "9246:20:48"
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
                                    "id": 15383,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "9270:7:48"
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
                                    "id": 15384,
                                    "name": "Literal",
                                    "src": "9278:1:48"
                                  }
                                ],
                                "id": 15385,
                                "name": "FunctionCall",
                                "src": "9270:10:48"
                              }
                            ],
                            "id": 15386,
                            "name": "BinaryOperation",
                            "src": "9246:34:48"
                          }
                        ],
                        "id": 15387,
                        "name": "FunctionCall",
                        "src": "9238:43:48"
                      }
                    ],
                    "id": 15388,
                    "name": "ExpressionStatement",
                    "src": "9238:43:48"
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
                                  "referencedDeclaration": 14919,
                                  "type": "mapping(uint256 => address)",
                                  "value": "tokenOwner"
                                },
                                "id": 15389,
                                "name": "Identifier",
                                "src": "9287:10:48"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 15376,
                                  "type": "uint256",
                                  "value": "_tokenId"
                                },
                                "id": 15390,
                                "name": "Identifier",
                                "src": "9298:8:48"
                              }
                            ],
                            "id": 15391,
                            "name": "IndexAccess",
                            "src": "9287:20:48"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 15374,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 15392,
                            "name": "Identifier",
                            "src": "9310:3:48"
                          }
                        ],
                        "id": 15393,
                        "name": "Assignment",
                        "src": "9287:26:48"
                      }
                    ],
                    "id": 15394,
                    "name": "ExpressionStatement",
                    "src": "9287:26:48"
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
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 14927,
                                  "type": "mapping(address => uint256)",
                                  "value": "ownedTokensCount"
                                },
                                "id": 15395,
                                "name": "Identifier",
                                "src": "9319:16:48"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 15374,
                                  "type": "address",
                                  "value": "_to"
                                },
                                "id": 15396,
                                "name": "Identifier",
                                "src": "9336:3:48"
                              }
                            ],
                            "id": 15397,
                            "name": "IndexAccess",
                            "src": "9319:21:48"
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
                              "type": "uint256",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_rational_1_by_1",
                                      "typeString": "int_const 1"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "add",
                                  "referencedDeclaration": 14142,
                                  "type": "function (uint256,uint256) pure returns (uint256)"
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
                                          "referencedDeclaration": 14927,
                                          "type": "mapping(address => uint256)",
                                          "value": "ownedTokensCount"
                                        },
                                        "id": 15398,
                                        "name": "Identifier",
                                        "src": "9343:16:48"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 15374,
                                          "type": "address",
                                          "value": "_to"
                                        },
                                        "id": 15399,
                                        "name": "Identifier",
                                        "src": "9360:3:48"
                                      }
                                    ],
                                    "id": 15400,
                                    "name": "IndexAccess",
                                    "src": "9343:21:48"
                                  }
                                ],
                                "id": 15401,
                                "name": "MemberAccess",
                                "src": "9343:25:48"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "31",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 1",
                                  "value": "1"
                                },
                                "id": 15402,
                                "name": "Literal",
                                "src": "9369:1:48"
                              }
                            ],
                            "id": 15403,
                            "name": "FunctionCall",
                            "src": "9343:28:48"
                          }
                        ],
                        "id": 15404,
                        "name": "Assignment",
                        "src": "9319:52:48"
                      }
                    ],
                    "id": 15405,
                    "name": "ExpressionStatement",
                    "src": "9319:52:48"
                  }
                ],
                "id": 15406,
                "name": "Block",
                "src": "9232:144:48"
              }
            ],
            "id": 15407,
            "name": "FunctionDefinition",
            "src": "9172:204:48"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "removeTokenFrom",
              "payable": false,
              "scope": 15481,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_from",
                      "scope": 15442,
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
                        "id": 15408,
                        "name": "ElementaryTypeName",
                        "src": "9676:7:48"
                      }
                    ],
                    "id": 15409,
                    "name": "VariableDeclaration",
                    "src": "9676:13:48"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 15442,
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
                        "id": 15410,
                        "name": "ElementaryTypeName",
                        "src": "9691:7:48"
                      }
                    ],
                    "id": 15411,
                    "name": "VariableDeclaration",
                    "src": "9691:16:48"
                  }
                ],
                "id": 15412,
                "name": "ParameterList",
                "src": "9675:33:48"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 15413,
                "name": "ParameterList",
                "src": "9718:0:48"
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
                            "id": 15414,
                            "name": "Identifier",
                            "src": "9724:7:48"
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
                              "operator": "==",
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
                                  "type": "address",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        15006
                                      ],
                                      "referencedDeclaration": 15006,
                                      "type": "function (uint256) view returns (address)",
                                      "value": "ownerOf"
                                    },
                                    "id": 15415,
                                    "name": "Identifier",
                                    "src": "9732:7:48"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 15411,
                                      "type": "uint256",
                                      "value": "_tokenId"
                                    },
                                    "id": 15416,
                                    "name": "Identifier",
                                    "src": "9740:8:48"
                                  }
                                ],
                                "id": 15417,
                                "name": "FunctionCall",
                                "src": "9732:17:48"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 15409,
                                  "type": "address",
                                  "value": "_from"
                                },
                                "id": 15418,
                                "name": "Identifier",
                                "src": "9753:5:48"
                              }
                            ],
                            "id": 15419,
                            "name": "BinaryOperation",
                            "src": "9732:26:48"
                          }
                        ],
                        "id": 15420,
                        "name": "FunctionCall",
                        "src": "9724:35:48"
                      }
                    ],
                    "id": 15421,
                    "name": "ExpressionStatement",
                    "src": "9724:35:48"
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
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 14927,
                                  "type": "mapping(address => uint256)",
                                  "value": "ownedTokensCount"
                                },
                                "id": 15422,
                                "name": "Identifier",
                                "src": "9765:16:48"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 15409,
                                  "type": "address",
                                  "value": "_from"
                                },
                                "id": 15423,
                                "name": "Identifier",
                                "src": "9782:5:48"
                              }
                            ],
                            "id": 15424,
                            "name": "IndexAccess",
                            "src": "9765:23:48"
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
                              "type": "uint256",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_rational_1_by_1",
                                      "typeString": "int_const 1"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "sub",
                                  "referencedDeclaration": 14118,
                                  "type": "function (uint256,uint256) pure returns (uint256)"
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
                                          "referencedDeclaration": 14927,
                                          "type": "mapping(address => uint256)",
                                          "value": "ownedTokensCount"
                                        },
                                        "id": 15425,
                                        "name": "Identifier",
                                        "src": "9791:16:48"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 15409,
                                          "type": "address",
                                          "value": "_from"
                                        },
                                        "id": 15426,
                                        "name": "Identifier",
                                        "src": "9808:5:48"
                                      }
                                    ],
                                    "id": 15427,
                                    "name": "IndexAccess",
                                    "src": "9791:23:48"
                                  }
                                ],
                                "id": 15428,
                                "name": "MemberAccess",
                                "src": "9791:27:48"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "31",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 1",
                                  "value": "1"
                                },
                                "id": 15429,
                                "name": "Literal",
                                "src": "9819:1:48"
                              }
                            ],
                            "id": 15430,
                            "name": "FunctionCall",
                            "src": "9791:30:48"
                          }
                        ],
                        "id": 15431,
                        "name": "Assignment",
                        "src": "9765:56:48"
                      }
                    ],
                    "id": 15432,
                    "name": "ExpressionStatement",
                    "src": "9765:56:48"
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
                                  "referencedDeclaration": 14919,
                                  "type": "mapping(uint256 => address)",
                                  "value": "tokenOwner"
                                },
                                "id": 15433,
                                "name": "Identifier",
                                "src": "9827:10:48"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 15411,
                                  "type": "uint256",
                                  "value": "_tokenId"
                                },
                                "id": 15434,
                                "name": "Identifier",
                                "src": "9838:8:48"
                              }
                            ],
                            "id": 15435,
                            "name": "IndexAccess",
                            "src": "9827:20:48"
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
                                "id": 15436,
                                "name": "ElementaryTypeNameExpression",
                                "src": "9850:7:48"
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
                                "id": 15437,
                                "name": "Literal",
                                "src": "9858:1:48"
                              }
                            ],
                            "id": 15438,
                            "name": "FunctionCall",
                            "src": "9850:10:48"
                          }
                        ],
                        "id": 15439,
                        "name": "Assignment",
                        "src": "9827:33:48"
                      }
                    ],
                    "id": 15440,
                    "name": "ExpressionStatement",
                    "src": "9827:33:48"
                  }
                ],
                "id": 15441,
                "name": "Block",
                "src": "9718:147:48"
              }
            ],
            "id": 15442,
            "name": "FunctionDefinition",
            "src": "9651:214:48"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "checkAndCallSafeTransfer",
              "payable": false,
              "scope": 15481,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_from",
                      "scope": 15480,
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
                        "id": 15443,
                        "name": "ElementaryTypeName",
                        "src": "10402:7:48"
                      }
                    ],
                    "id": 15444,
                    "name": "VariableDeclaration",
                    "src": "10402:13:48"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 15480,
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
                        "id": 15445,
                        "name": "ElementaryTypeName",
                        "src": "10417:7:48"
                      }
                    ],
                    "id": 15446,
                    "name": "VariableDeclaration",
                    "src": "10417:11:48"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 15480,
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
                        "id": 15447,
                        "name": "ElementaryTypeName",
                        "src": "10430:7:48"
                      }
                    ],
                    "id": 15448,
                    "name": "VariableDeclaration",
                    "src": "10430:16:48"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_data",
                      "scope": 15480,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes",
                          "type": "bytes storage pointer"
                        },
                        "id": 15449,
                        "name": "ElementaryTypeName",
                        "src": "10448:5:48"
                      }
                    ],
                    "id": 15450,
                    "name": "VariableDeclaration",
                    "src": "10448:11:48"
                  }
                ],
                "id": 15451,
                "name": "ParameterList",
                "src": "10401:59:48"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 15480,
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
                        "id": 15452,
                        "name": "ElementaryTypeName",
                        "src": "10479:4:48"
                      }
                    ],
                    "id": 15453,
                    "name": "VariableDeclaration",
                    "src": "10479:4:48"
                  }
                ],
                "id": 15454,
                "name": "ParameterList",
                "src": "10478:6:48"
              },
              {
                "children": [
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
                              "type": "bool",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    null
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "isContract",
                                  "referencedDeclaration": 13984,
                                  "type": "function (address) view returns (bool)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 15446,
                                      "type": "address",
                                      "value": "_to"
                                    },
                                    "id": 15455,
                                    "name": "Identifier",
                                    "src": "10496:3:48"
                                  }
                                ],
                                "id": 15456,
                                "name": "MemberAccess",
                                "src": "10496:14:48"
                              }
                            ],
                            "id": 15457,
                            "name": "FunctionCall",
                            "src": "10496:16:48"
                          }
                        ],
                        "id": 15458,
                        "name": "UnaryOperation",
                        "src": "10495:17:48"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "functionReturnParameters": 15454
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "74727565",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "bool",
                                  "type": "bool",
                                  "value": "true"
                                },
                                "id": 15459,
                                "name": "Literal",
                                "src": "10529:4:48"
                              }
                            ],
                            "id": 15460,
                            "name": "Return",
                            "src": "10522:11:48"
                          }
                        ],
                        "id": 15461,
                        "name": "Block",
                        "src": "10514:26:48"
                      }
                    ],
                    "id": 15462,
                    "name": "IfStatement",
                    "src": "10491:49:48"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        15464
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "retval",
                          "scope": 15480,
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
                            "id": 15463,
                            "name": "ElementaryTypeName",
                            "src": "10545:6:48"
                          }
                        ],
                        "id": 15464,
                        "name": "VariableDeclaration",
                        "src": "10545:13:48"
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
                          "type": "bytes4",
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
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "onERC721Received",
                              "referencedDeclaration": 15497,
                              "type": "function (address,uint256,bytes memory) external returns (bytes4)"
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
                                  "type": "contract ERC721Receiver",
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
                                      "referencedDeclaration": 15498,
                                      "type": "type(contract ERC721Receiver)",
                                      "value": "ERC721Receiver"
                                    },
                                    "id": 15465,
                                    "name": "Identifier",
                                    "src": "10561:14:48"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 15446,
                                      "type": "address",
                                      "value": "_to"
                                    },
                                    "id": 15466,
                                    "name": "Identifier",
                                    "src": "10576:3:48"
                                  }
                                ],
                                "id": 15467,
                                "name": "FunctionCall",
                                "src": "10561:19:48"
                              }
                            ],
                            "id": 15468,
                            "name": "MemberAccess",
                            "src": "10561:36:48"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 15444,
                              "type": "address",
                              "value": "_from"
                            },
                            "id": 15469,
                            "name": "Identifier",
                            "src": "10598:5:48"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 15448,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 15470,
                            "name": "Identifier",
                            "src": "10605:8:48"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 15450,
                              "type": "bytes memory",
                              "value": "_data"
                            },
                            "id": 15471,
                            "name": "Identifier",
                            "src": "10615:5:48"
                          }
                        ],
                        "id": 15472,
                        "name": "FunctionCall",
                        "src": "10561:60:48"
                      }
                    ],
                    "id": 15473,
                    "name": "VariableDeclarationStatement",
                    "src": "10545:76:48"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 15454
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_bytes4",
                                "typeString": "bytes4"
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
                                  "referencedDeclaration": 15464,
                                  "type": "bytes4",
                                  "value": "retval"
                                },
                                "id": 15474,
                                "name": "Identifier",
                                "src": "10635:6:48"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 14915,
                                  "type": "bytes4",
                                  "value": "ERC721_RECEIVED"
                                },
                                "id": 15475,
                                "name": "Identifier",
                                "src": "10645:15:48"
                              }
                            ],
                            "id": 15476,
                            "name": "BinaryOperation",
                            "src": "10635:25:48"
                          }
                        ],
                        "id": 15477,
                        "name": "TupleExpression",
                        "src": "10634:27:48"
                      }
                    ],
                    "id": 15478,
                    "name": "Return",
                    "src": "10627:34:48"
                  }
                ],
                "id": 15479,
                "name": "Block",
                "src": "10485:181:48"
              }
            ],
            "id": 15480,
            "name": "FunctionDefinition",
            "src": "10368:298:48"
          }
        ],
        "id": 15481,
        "name": "ContractDefinition",
        "src": "300:10368:48"
      }
    ],
    "id": 15482,
    "name": "SourceUnit",
    "src": "0:10669:48"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2019-03-12T22:10:45.973Z"
}