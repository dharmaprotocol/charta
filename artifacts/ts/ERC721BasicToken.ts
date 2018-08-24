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
  "sourceMap": "300:10368:45:-;;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "300:10368:45:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3577:111;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2998:350;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5042:315;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5964:154;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2445:140;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2107:164;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1756:142;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3969:200;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6794:227;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4478:142;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3577:111;3637:7;3659:14;:24;3674:8;3659:24;;;;;;;;;;;;;;;;;;;;;3652:31;;3577:111;;;:::o;2998:350::-;3059:13;3075:17;3083:8;3075:7;:17::i;:::-;3059:33;;3113:5;3106:12;;:3;:12;;;;3098:21;;;;;;;;3147:5;3133:19;;:10;:19;;;:58;;;;3156:35;3173:5;3180:10;3156:16;:35::i;:::-;3133:58;3125:67;;;;;;;;3236:1;3203:35;;:21;3215:8;3203:11;:21::i;:::-;:35;;;;:56;;;;3257:1;3242:17;;:3;:17;;;;3203:56;3199:145;;;3296:3;3269:14;:24;3284:8;3269:24;;;;;;;;;;;;:30;;;;;;;;;;;;;;;;;;3323:3;3307:30;;3316:5;3307:30;;;3328:8;3307:30;;;;;;;;;;;;;;;;;;3199:145;2998:350;;;:::o;5042:315::-;5129:8;1516:39;1534:10;1546:8;1516:17;:39::i;:::-;1508:48;;;;;;;;5170:1;5153:19;;:5;:19;;;;5145:28;;;;;;;;5202:1;5187:17;;:3;:17;;;;5179:26;;;;;;;;5212:30;5226:5;5233:8;5212:13;:30::i;:::-;5248:32;5264:5;5271:8;5248:15;:32::i;:::-;5286:25;5297:3;5302:8;5286:10;:25::i;:::-;5338:3;5322:30;;5331:5;5322:30;;;5343:8;5322:30;;;;;;;;;;;;;;;;;;5042:315;;;;:::o;5964:154::-;6055:8;1516:39;1534:10;1546:8;1516:17;:39::i;:::-;1508:48;;;;;;;;6071:42;6088:5;6095:3;6100:8;6071:42;;;;;;;;;;;;;:16;:42::i;:::-;5964:154;;;;:::o;2445:140::-;2500:4;2512:13;2528:10;:20;2539:8;2528:20;;;;;;;;;;;;;;;;;;;;;2512:36;;2578:1;2561:19;;:5;:19;;;;2554:26;;2445:140;;;;:::o;2107:164::-;2163:7;2178:13;2194:10;:20;2205:8;2194:20;;;;;;;;;;;;;;;;;;;;;2178:36;;2245:1;2228:19;;:5;:19;;;;2220:28;;;;;;;;2261:5;2254:12;;2107:164;;;;:::o;1756:142::-;1812:7;1853:1;1835:20;;:6;:20;;;;1827:29;;;;;;;;1869:16;:24;1886:6;1869:24;;;;;;;;;;;;;;;;1862:31;;1756:142;;;:::o;3969:200::-;4053:10;4046:17;;:3;:17;;;;4038:26;;;;;;;;4107:9;4070:17;:29;4088:10;4070:29;;;;;;;;;;;;;;;:34;4100:3;4070:34;;;;;;;;;;;;;;;;:46;;;;;;;;;;;;;;;;;;4149:3;4122:42;;4137:10;4122:42;;;4154:9;4122:42;;;;;;;;;;;;;;;;;;;;;;3969:200;;:::o;6794:227::-;6898:8;1516:39;1534:10;1546:8;1516:17;:39::i;:::-;1508:48;;;;;;;;6914:34;6927:5;6934:3;6939:8;6914:12;:34::i;:::-;6962:53;6987:5;6994:3;6999:8;7009:5;6962:24;:53::i;:::-;6954:62;;;;;;;;6794:227;;;;;:::o;4478:142::-;4560:4;4579:17;:25;4597:6;4579:25;;;;;;;;;;;;;;;:36;4605:9;4579:36;;;;;;;;;;;;;;;;;;;;;;;;;4572:43;;4478:142;;;;:::o;7368:240::-;7454:4;7466:13;7482:17;7490:8;7482:7;:17::i;:::-;7466:33;;7524:5;7512:17;;:8;:17;;;:54;;;;7558:8;7533:33;;:21;7545:8;7533:11;:21::i;:::-;:33;;;7512:54;:91;;;;7570:33;7587:5;7594:8;7570:16;:33::i;:::-;7512:91;7505:98;;7368:240;;;;;:::o;8653:260::-;8754:6;8733:27;;:17;8741:8;8733:7;:17::i;:::-;:27;;;8725:36;;;;;;;;8807:1;8771:38;;:14;:24;8786:8;8771:24;;;;;;;;;;;;;;;;;;;;;:38;;;;8767:142;;;8854:1;8819:14;:24;8834:8;8819:24;;;;;;;;;;;;:37;;;;;;;;;;;;;;;;;;8889:1;8864:38;;8873:6;8864:38;;;8893:8;8864:38;;;;;;;;;;;;;;;;;;8767:142;8653:260;;:::o;9651:214::-;9753:5;9732:26;;:17;9740:8;9732:7;:17::i;:::-;:26;;;9724:35;;;;;;;;9791:30;9819:1;9791:16;:23;9808:5;9791:23;;;;;;;;;;;;;;;;:27;;:30;;;;:::i;:::-;9765:16;:23;9782:5;9765:23;;;;;;;;;;;;;;;:56;;;;9858:1;9827:10;:20;9838:8;9827:20;;;;;;;;;;;;:33;;;;;;;;;;;;;;;;;;9651:214;;:::o;9172:204::-;9278:1;9246:34;;:10;:20;9257:8;9246:20;;;;;;;;;;;;;;;;;;;;;:34;;;9238:43;;;;;;;;9310:3;9287:10;:20;9298:8;9287:20;;;;;;;;;;;;:26;;;;;;;;;;;;;;;;;;9343:28;9369:1;9343:16;:21;9360:3;9343:21;;;;;;;;;;;;;;;;:25;;:28;;;;:::i;:::-;9319:16;:21;9336:3;9319:21;;;;;;;;;;;;;;;:52;;;;9172:204;;:::o;10368:298::-;10479:4;10545:13;10496:16;:3;:14;;;:16::i;:::-;10495:17;10491:49;;;10529:4;10522:11;;;;10491:49;10576:3;10561:36;;;10598:5;10605:8;10615:5;10561:60;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;10545:76:45;;605:10;10645:15;;10635:25;;;:6;:25;;;;10627:34;;10368:298;;;;;;;;:::o;835:110:35:-;893:7;920:1;915;:6;;908:14;;;;;;939:1;935;:5;928:12;;835:110;;;;:::o;1007:129::-;1065:7;1080:9;1096:1;1092;:5;1080:17;;1115:1;1110;:6;;1103:14;;;;;;1130:1;1123:8;;1007:129;;;;;:::o;451:150:33:-;508:4;520:12;569:4;557:11;549:25;;595:1;588:4;:8;581:15;;451:150;;;;:::o",
  "source": "pragma solidity ^0.4.18;\n\nimport \"./ERC721Basic.sol\";\nimport \"./ERC721Receiver.sol\";\nimport \"../../math/SafeMath.sol\";\nimport \"../../AddressUtils.sol\";\n\n/**\n * @title ERC721 Non-Fungible Token Standard basic implementation\n * @dev see https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md\n */\ncontract ERC721BasicToken is ERC721Basic {\n  using SafeMath for uint256;\n  using AddressUtils for address;\n  \n  // Equals to `bytes4(keccak256(\"onERC721Received(address,uint256,bytes)\"))`\n  // which can be also obtained as `ERC721Receiver(0).onERC721Received.selector`\n  bytes4 constant ERC721_RECEIVED = 0xf0b9e5ba; \n\n  // Mapping from token ID to owner\n  mapping (uint256 => address) internal tokenOwner;\n\n  // Mapping from token ID to approved address\n  mapping (uint256 => address) internal tokenApprovals;\n\n  // Mapping from owner to number of owned token\n  mapping (address => uint256) internal ownedTokensCount;\n\n  // Mapping from owner to operator approvals\n  mapping (address => mapping (address => bool)) internal operatorApprovals;\n\n  /**\n  * @dev Guarantees msg.sender is owner of the given token\n  * @param _tokenId uint256 ID of the token to validate its ownership belongs to msg.sender\n  */\n  modifier onlyOwnerOf(uint256 _tokenId) {\n    require(ownerOf(_tokenId) == msg.sender);\n    _;\n  }\n\n  /**\n  * @dev Checks msg.sender can transfer a token, by being owner, approved, or operator\n  * @param _tokenId uint256 ID of the token to validate\n  */\n  modifier canTransfer(uint256 _tokenId) {\n    require(isApprovedOrOwner(msg.sender, _tokenId));\n    _;\n  }\n\n  /**\n  * @dev Gets the balance of the specified address\n  * @param _owner address to query the balance of\n  * @return uint256 representing the amount owned by the passed address\n  */\n  function balanceOf(address _owner) public view returns (uint256) {\n    require(_owner != address(0));\n    return ownedTokensCount[_owner];\n  }\n\n  /**\n  * @dev Gets the owner of the specified token ID\n  * @param _tokenId uint256 ID of the token to query the owner of\n  * @return owner address currently marked as the owner of the given token ID\n  */\n  function ownerOf(uint256 _tokenId) public view returns (address) {\n    address owner = tokenOwner[_tokenId];\n    require(owner != address(0));\n    return owner;\n  }\n\n  /**\n  * @dev Returns whether the specified token exists\n  * @param _tokenId uint256 ID of the token to query the existance of\n  * @return whether the token exists\n  */\n  function exists(uint256 _tokenId) public view returns (bool) {\n    address owner = tokenOwner[_tokenId];\n    return owner != address(0);\n  }\n\n  /**\n  * @dev Approves another address to transfer the given token ID\n  * @dev The zero address indicates there is no approved address.\n  * @dev There can only be one approved address per token at a given time.\n  * @dev Can only be called by the token owner or an approved operator.\n  * @param _to address to be approved for the given token ID\n  * @param _tokenId uint256 ID of the token to be approved\n  */\n  function approve(address _to, uint256 _tokenId) public {\n    address owner = ownerOf(_tokenId);\n    require(_to != owner);\n    require(msg.sender == owner || isApprovedForAll(owner, msg.sender));\n\n    if (getApproved(_tokenId) != address(0) || _to != address(0)) {\n      tokenApprovals[_tokenId] = _to;\n      Approval(owner, _to, _tokenId);\n    }\n  }\n\n  /**\n   * @dev Gets the approved address for a token ID, or zero if no address set\n   * @param _tokenId uint256 ID of the token to query the approval of\n   * @return address currently approved for a the given token ID\n   */\n  function getApproved(uint256 _tokenId) public view returns (address) {\n    return tokenApprovals[_tokenId];\n  }\n\n\n  /**\n  * @dev Sets or unsets the approval of a given operator\n  * @dev An operator is allowed to transfer all tokens of the sender on their behalf\n  * @param _to operator address to set the approval\n  * @param _approved representing the status of the approval to be set\n  */\n  function setApprovalForAll(address _to, bool _approved) public {\n    require(_to != msg.sender);\n    operatorApprovals[msg.sender][_to] = _approved;\n    ApprovalForAll(msg.sender, _to, _approved);\n  }\n\n  /**\n   * @dev Tells whether an operator is approved by a given owner\n   * @param _owner owner address which you want to query the approval of\n   * @param _operator operator address which you want to query the approval of\n   * @return bool whether the given operator is approved by the given owner\n   */\n  function isApprovedForAll(address _owner, address _operator) public view returns (bool) {\n    return operatorApprovals[_owner][_operator];\n  }\n\n  /**\n  * @dev Transfers the ownership of a given token ID to another address\n  * @dev Usage of this method is discouraged, use `safeTransferFrom` whenever possible\n  * @dev Requires the msg sender to be the owner, approved, or operator\n  * @param _from current owner of the token\n  * @param _to address to receive the ownership of the given token ID\n  * @param _tokenId uint256 ID of the token to be transferred\n  */\n  function transferFrom(address _from, address _to, uint256 _tokenId) public canTransfer(_tokenId) {\n    require(_from != address(0));\n    require(_to != address(0));\n\n    clearApproval(_from, _tokenId);\n    removeTokenFrom(_from, _tokenId);\n    addTokenTo(_to, _tokenId);\n    \n    Transfer(_from, _to, _tokenId);\n  }\n\n  /**\n  * @dev Safely transfers the ownership of a given token ID to another address\n  * @dev If the target address is a contract, it must implement `onERC721Received`,\n  *  which is called upon a safe transfer, and return the magic value\n  *  `bytes4(keccak256(\"onERC721Received(address,uint256,bytes)\"))`; otherwise,\n  *  the transfer is reverted.\n  * @dev Requires the msg sender to be the owner, approved, or operator\n  * @param _from current owner of the token\n  * @param _to address to receive the ownership of the given token ID\n  * @param _tokenId uint256 ID of the token to be transferred\n  */\n  function safeTransferFrom(address _from, address _to, uint256 _tokenId) public canTransfer(_tokenId) {\n    safeTransferFrom(_from, _to, _tokenId, \"\");\n  }\n\n  /**\n  * @dev Safely transfers the ownership of a given token ID to another address\n  * @dev If the target address is a contract, it must implement `onERC721Received`,\n  *  which is called upon a safe transfer, and return the magic value\n  *  `bytes4(keccak256(\"onERC721Received(address,uint256,bytes)\"))`; otherwise,\n  *  the transfer is reverted.\n  * @dev Requires the msg sender to be the owner, approved, or operator\n  * @param _from current owner of the token\n  * @param _to address to receive the ownership of the given token ID\n  * @param _tokenId uint256 ID of the token to be transferred\n  * @param _data bytes data to send along with a safe transfer check\n  */\n  function safeTransferFrom(address _from, address _to, uint256 _tokenId, bytes _data) public canTransfer(_tokenId) {\n    transferFrom(_from, _to, _tokenId);\n    require(checkAndCallSafeTransfer(_from, _to, _tokenId, _data));\n  }\n\n  /**\n   * @dev Returns whether the given spender can transfer a given token ID\n   * @param _spender address of the spender to query\n   * @param _tokenId uint256 ID of the token to be transferred\n   * @return bool whether the msg.sender is approved for the given token ID,\n   *  is an operator of the owner, or is the owner of the token\n   */\n  function isApprovedOrOwner(address _spender, uint256 _tokenId) internal view returns (bool) {\n    address owner = ownerOf(_tokenId);\n    return _spender == owner || getApproved(_tokenId) == _spender || isApprovedForAll(owner, _spender);\n  }\n\n  /**\n  * @dev Internal function to mint a new token\n  * @dev Reverts if the given token ID already exists\n  * @param _to The address that will own the minted token\n  * @param _tokenId uint256 ID of the token to be minted by the msg.sender\n  */\n  function _mint(address _to, uint256 _tokenId) internal {\n    require(_to != address(0));\n    addTokenTo(_to, _tokenId);\n    Transfer(address(0), _to, _tokenId);\n  }\n\n  /**\n  * @dev Internal function to burn a specific token\n  * @dev Reverts if the token does not exist\n  * @param _tokenId uint256 ID of the token being burned by the msg.sender\n  */\n  function _burn(address _owner, uint256 _tokenId) internal {\n    clearApproval(_owner, _tokenId);\n    removeTokenFrom(_owner, _tokenId);\n    Transfer(_owner, address(0), _tokenId);\n  }\n\n  /**\n  * @dev Internal function to clear current approval of a given token ID\n  * @dev Reverts if the given address is not indeed the owner of the token\n  * @param _owner owner of the token\n  * @param _tokenId uint256 ID of the token to be transferred\n  */\n  function clearApproval(address _owner, uint256 _tokenId) internal {\n    require(ownerOf(_tokenId) == _owner);\n    if (tokenApprovals[_tokenId] != address(0)) {\n      tokenApprovals[_tokenId] = address(0);\n      Approval(_owner, address(0), _tokenId);\n    }\n  }\n\n  /**\n  * @dev Internal function to add a token ID to the list of a given address\n  * @param _to address representing the new owner of the given token ID\n  * @param _tokenId uint256 ID of the token to be added to the tokens list of the given address\n  */\n  function addTokenTo(address _to, uint256 _tokenId) internal {\n    require(tokenOwner[_tokenId] == address(0));\n    tokenOwner[_tokenId] = _to;\n    ownedTokensCount[_to] = ownedTokensCount[_to].add(1);\n  }\n\n  /**\n  * @dev Internal function to remove a token ID from the list of a given address\n  * @param _from address representing the previous owner of the given token ID\n  * @param _tokenId uint256 ID of the token to be removed from the tokens list of the given address\n  */\n  function removeTokenFrom(address _from, uint256 _tokenId) internal {\n    require(ownerOf(_tokenId) == _from);\n    ownedTokensCount[_from] = ownedTokensCount[_from].sub(1);\n    tokenOwner[_tokenId] = address(0);\n  }\n\n  /**\n  * @dev Internal function to invoke `onERC721Received` on a target address\n  * @dev The call is not executed if the target address is not a contract\n  * @param _from address representing the previous owner of the given token ID\n  * @param _to target address that will receive the tokens\n  * @param _tokenId uint256 ID of the token to be transferred\n  * @param _data bytes optional data to send along with the call\n  * @return whether the call correctly returned the expected magic value\n  */\n  function checkAndCallSafeTransfer(address _from, address _to, uint256 _tokenId, bytes _data) internal returns (bool) {\n    if (!_to.isContract()) {\n      return true;\n    }\n    bytes4 retval = ERC721Receiver(_to).onERC721Received(_from, _tokenId, _data);\n    return (retval == ERC721_RECEIVED);\n  }\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/token/ERC721/ERC721BasicToken.sol",
  "ast": {
    "attributes": {
      "absolutePath": "zeppelin-solidity/contracts/token/ERC721/ERC721BasicToken.sol",
      "exportedSymbols": {
        "ERC721BasicToken": [
          11123
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
        "id": 10542,
        "name": "PragmaDirective",
        "src": "0:24:45"
      },
      {
        "attributes": {
          "SourceUnit": 10541,
          "absolutePath": "zeppelin-solidity/contracts/token/ERC721/ERC721Basic.sol",
          "file": "./ERC721Basic.sol",
          "scope": 11124,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 10543,
        "name": "ImportDirective",
        "src": "26:27:45"
      },
      {
        "attributes": {
          "SourceUnit": 11141,
          "absolutePath": "zeppelin-solidity/contracts/token/ERC721/ERC721Receiver.sol",
          "file": "./ERC721Receiver.sol",
          "scope": 11124,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 10544,
        "name": "ImportDirective",
        "src": "54:30:45"
      },
      {
        "attributes": {
          "SourceUnit": 9786,
          "absolutePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
          "file": "../../math/SafeMath.sol",
          "scope": 11124,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 10545,
        "name": "ImportDirective",
        "src": "85:33:45"
      },
      {
        "attributes": {
          "SourceUnit": 9628,
          "absolutePath": "zeppelin-solidity/contracts/AddressUtils.sol",
          "file": "../../AddressUtils.sol",
          "scope": 11124,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 10546,
        "name": "ImportDirective",
        "src": "119:32:45"
      },
      {
        "attributes": {
          "contractDependencies": [
            10540
          ],
          "contractKind": "contract",
          "documentation": "@title ERC721 Non-Fungible Token Standard basic implementation\n@dev see https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            11123,
            10540
          ],
          "name": "ERC721BasicToken",
          "scope": 11124
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
                  "referencedDeclaration": 10540,
                  "type": "contract ERC721Basic"
                },
                "id": 10547,
                "name": "UserDefinedTypeName",
                "src": "329:11:45"
              }
            ],
            "id": 10548,
            "name": "InheritanceSpecifier",
            "src": "329:11:45"
          },
          {
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "SafeMath",
                  "referencedDeclaration": 9785,
                  "type": "library SafeMath"
                },
                "id": 10549,
                "name": "UserDefinedTypeName",
                "src": "351:8:45"
              },
              {
                "attributes": {
                  "name": "uint256",
                  "type": "uint256"
                },
                "id": 10550,
                "name": "ElementaryTypeName",
                "src": "364:7:45"
              }
            ],
            "id": 10551,
            "name": "UsingForDirective",
            "src": "345:27:45"
          },
          {
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "AddressUtils",
                  "referencedDeclaration": 9627,
                  "type": "library AddressUtils"
                },
                "id": 10552,
                "name": "UserDefinedTypeName",
                "src": "381:12:45"
              },
              {
                "attributes": {
                  "name": "address",
                  "type": "address"
                },
                "id": 10553,
                "name": "ElementaryTypeName",
                "src": "398:7:45"
              }
            ],
            "id": 10554,
            "name": "UsingForDirective",
            "src": "375:31:45"
          },
          {
            "attributes": {
              "constant": true,
              "name": "ERC721_RECEIVED",
              "scope": 11123,
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
                "id": 10555,
                "name": "ElementaryTypeName",
                "src": "571:6:45"
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
                "id": 10556,
                "name": "Literal",
                "src": "605:10:45"
              }
            ],
            "id": 10557,
            "name": "VariableDeclaration",
            "src": "571:44:45"
          },
          {
            "attributes": {
              "constant": false,
              "name": "tokenOwner",
              "scope": 11123,
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
                    "id": 10558,
                    "name": "ElementaryTypeName",
                    "src": "666:7:45"
                  },
                  {
                    "attributes": {
                      "name": "address",
                      "type": "address"
                    },
                    "id": 10559,
                    "name": "ElementaryTypeName",
                    "src": "677:7:45"
                  }
                ],
                "id": 10560,
                "name": "Mapping",
                "src": "657:28:45"
              }
            ],
            "id": 10561,
            "name": "VariableDeclaration",
            "src": "657:48:45"
          },
          {
            "attributes": {
              "constant": false,
              "name": "tokenApprovals",
              "scope": 11123,
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
                    "id": 10562,
                    "name": "ElementaryTypeName",
                    "src": "766:7:45"
                  },
                  {
                    "attributes": {
                      "name": "address",
                      "type": "address"
                    },
                    "id": 10563,
                    "name": "ElementaryTypeName",
                    "src": "777:7:45"
                  }
                ],
                "id": 10564,
                "name": "Mapping",
                "src": "757:28:45"
              }
            ],
            "id": 10565,
            "name": "VariableDeclaration",
            "src": "757:52:45"
          },
          {
            "attributes": {
              "constant": false,
              "name": "ownedTokensCount",
              "scope": 11123,
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
                    "id": 10566,
                    "name": "ElementaryTypeName",
                    "src": "872:7:45"
                  },
                  {
                    "attributes": {
                      "name": "uint256",
                      "type": "uint256"
                    },
                    "id": 10567,
                    "name": "ElementaryTypeName",
                    "src": "883:7:45"
                  }
                ],
                "id": 10568,
                "name": "Mapping",
                "src": "863:28:45"
              }
            ],
            "id": 10569,
            "name": "VariableDeclaration",
            "src": "863:54:45"
          },
          {
            "attributes": {
              "constant": false,
              "name": "operatorApprovals",
              "scope": 11123,
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
                    "id": 10570,
                    "name": "ElementaryTypeName",
                    "src": "977:7:45"
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
                        "id": 10571,
                        "name": "ElementaryTypeName",
                        "src": "997:7:45"
                      },
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 10572,
                        "name": "ElementaryTypeName",
                        "src": "1008:4:45"
                      }
                    ],
                    "id": 10573,
                    "name": "Mapping",
                    "src": "988:25:45"
                  }
                ],
                "id": 10574,
                "name": "Mapping",
                "src": "968:46:45"
              }
            ],
            "id": 10575,
            "name": "VariableDeclaration",
            "src": "968:73:45"
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
                      "scope": 10590,
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
                        "id": 10576,
                        "name": "ElementaryTypeName",
                        "src": "1229:7:45"
                      }
                    ],
                    "id": 10577,
                    "name": "VariableDeclaration",
                    "src": "1229:16:45"
                  }
                ],
                "id": 10578,
                "name": "ParameterList",
                "src": "1228:18:45"
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
                            "id": 10579,
                            "name": "Identifier",
                            "src": "1253:7:45"
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
                                        10648
                                      ],
                                      "referencedDeclaration": 10648,
                                      "type": "function (uint256) view returns (address)",
                                      "value": "ownerOf"
                                    },
                                    "id": 10580,
                                    "name": "Identifier",
                                    "src": "1261:7:45"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 10577,
                                      "type": "uint256",
                                      "value": "_tokenId"
                                    },
                                    "id": 10581,
                                    "name": "Identifier",
                                    "src": "1269:8:45"
                                  }
                                ],
                                "id": 10582,
                                "name": "FunctionCall",
                                "src": "1261:17:45"
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
                                      "referencedDeclaration": 11523,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 10583,
                                    "name": "Identifier",
                                    "src": "1282:3:45"
                                  }
                                ],
                                "id": 10584,
                                "name": "MemberAccess",
                                "src": "1282:10:45"
                              }
                            ],
                            "id": 10585,
                            "name": "BinaryOperation",
                            "src": "1261:31:45"
                          }
                        ],
                        "id": 10586,
                        "name": "FunctionCall",
                        "src": "1253:40:45"
                      }
                    ],
                    "id": 10587,
                    "name": "ExpressionStatement",
                    "src": "1253:40:45"
                  },
                  {
                    "id": 10588,
                    "name": "PlaceholderStatement",
                    "src": "1299:1:45"
                  }
                ],
                "id": 10589,
                "name": "Block",
                "src": "1247:58:45"
              }
            ],
            "id": 10590,
            "name": "ModifierDefinition",
            "src": "1208:97:45"
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
                      "scope": 10604,
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
                        "id": 10591,
                        "name": "ElementaryTypeName",
                        "src": "1484:7:45"
                      }
                    ],
                    "id": 10592,
                    "name": "VariableDeclaration",
                    "src": "1484:16:45"
                  }
                ],
                "id": 10593,
                "name": "ParameterList",
                "src": "1483:18:45"
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
                            "id": 10594,
                            "name": "Identifier",
                            "src": "1508:7:45"
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
                                  "referencedDeclaration": 10918,
                                  "type": "function (address,uint256) view returns (bool)",
                                  "value": "isApprovedOrOwner"
                                },
                                "id": 10595,
                                "name": "Identifier",
                                "src": "1516:17:45"
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
                                      "referencedDeclaration": 11523,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 10596,
                                    "name": "Identifier",
                                    "src": "1534:3:45"
                                  }
                                ],
                                "id": 10597,
                                "name": "MemberAccess",
                                "src": "1534:10:45"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 10592,
                                  "type": "uint256",
                                  "value": "_tokenId"
                                },
                                "id": 10598,
                                "name": "Identifier",
                                "src": "1546:8:45"
                              }
                            ],
                            "id": 10599,
                            "name": "FunctionCall",
                            "src": "1516:39:45"
                          }
                        ],
                        "id": 10600,
                        "name": "FunctionCall",
                        "src": "1508:48:45"
                      }
                    ],
                    "id": 10601,
                    "name": "ExpressionStatement",
                    "src": "1508:48:45"
                  },
                  {
                    "id": 10602,
                    "name": "PlaceholderStatement",
                    "src": "1562:1:45"
                  }
                ],
                "id": 10603,
                "name": "Block",
                "src": "1502:66:45"
              }
            ],
            "id": 10604,
            "name": "ModifierDefinition",
            "src": "1463:105:45"
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
              "scope": 11123,
              "stateMutability": "view",
              "superFunction": 10466,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_owner",
                      "scope": 10624,
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
                        "id": 10605,
                        "name": "ElementaryTypeName",
                        "src": "1775:7:45"
                      }
                    ],
                    "id": 10606,
                    "name": "VariableDeclaration",
                    "src": "1775:14:45"
                  }
                ],
                "id": 10607,
                "name": "ParameterList",
                "src": "1774:16:45"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 10624,
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
                        "id": 10608,
                        "name": "ElementaryTypeName",
                        "src": "1812:7:45"
                      }
                    ],
                    "id": 10609,
                    "name": "VariableDeclaration",
                    "src": "1812:7:45"
                  }
                ],
                "id": 10610,
                "name": "ParameterList",
                "src": "1811:9:45"
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
                            "id": 10611,
                            "name": "Identifier",
                            "src": "1827:7:45"
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
                                  "referencedDeclaration": 10606,
                                  "type": "address",
                                  "value": "_owner"
                                },
                                "id": 10612,
                                "name": "Identifier",
                                "src": "1835:6:45"
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
                                    "id": 10613,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "1845:7:45"
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
                                    "id": 10614,
                                    "name": "Literal",
                                    "src": "1853:1:45"
                                  }
                                ],
                                "id": 10615,
                                "name": "FunctionCall",
                                "src": "1845:10:45"
                              }
                            ],
                            "id": 10616,
                            "name": "BinaryOperation",
                            "src": "1835:20:45"
                          }
                        ],
                        "id": 10617,
                        "name": "FunctionCall",
                        "src": "1827:29:45"
                      }
                    ],
                    "id": 10618,
                    "name": "ExpressionStatement",
                    "src": "1827:29:45"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 10610
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
                              "referencedDeclaration": 10569,
                              "type": "mapping(address => uint256)",
                              "value": "ownedTokensCount"
                            },
                            "id": 10619,
                            "name": "Identifier",
                            "src": "1869:16:45"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10606,
                              "type": "address",
                              "value": "_owner"
                            },
                            "id": 10620,
                            "name": "Identifier",
                            "src": "1886:6:45"
                          }
                        ],
                        "id": 10621,
                        "name": "IndexAccess",
                        "src": "1869:24:45"
                      }
                    ],
                    "id": 10622,
                    "name": "Return",
                    "src": "1862:31:45"
                  }
                ],
                "id": 10623,
                "name": "Block",
                "src": "1821:77:45"
              }
            ],
            "id": 10624,
            "name": "FunctionDefinition",
            "src": "1756:142:45"
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
              "scope": 11123,
              "stateMutability": "view",
              "superFunction": 10473,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 10648,
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
                        "id": 10625,
                        "name": "ElementaryTypeName",
                        "src": "2124:7:45"
                      }
                    ],
                    "id": 10626,
                    "name": "VariableDeclaration",
                    "src": "2124:16:45"
                  }
                ],
                "id": 10627,
                "name": "ParameterList",
                "src": "2123:18:45"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 10648,
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
                        "id": 10628,
                        "name": "ElementaryTypeName",
                        "src": "2163:7:45"
                      }
                    ],
                    "id": 10629,
                    "name": "VariableDeclaration",
                    "src": "2163:7:45"
                  }
                ],
                "id": 10630,
                "name": "ParameterList",
                "src": "2162:9:45"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        10632
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "owner",
                          "scope": 10648,
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
                            "id": 10631,
                            "name": "ElementaryTypeName",
                            "src": "2178:7:45"
                          }
                        ],
                        "id": 10632,
                        "name": "VariableDeclaration",
                        "src": "2178:13:45"
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
                              "referencedDeclaration": 10561,
                              "type": "mapping(uint256 => address)",
                              "value": "tokenOwner"
                            },
                            "id": 10633,
                            "name": "Identifier",
                            "src": "2194:10:45"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10626,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 10634,
                            "name": "Identifier",
                            "src": "2205:8:45"
                          }
                        ],
                        "id": 10635,
                        "name": "IndexAccess",
                        "src": "2194:20:45"
                      }
                    ],
                    "id": 10636,
                    "name": "VariableDeclarationStatement",
                    "src": "2178:36:45"
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
                            "id": 10637,
                            "name": "Identifier",
                            "src": "2220:7:45"
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
                                  "referencedDeclaration": 10632,
                                  "type": "address",
                                  "value": "owner"
                                },
                                "id": 10638,
                                "name": "Identifier",
                                "src": "2228:5:45"
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
                                    "id": 10639,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "2237:7:45"
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
                                    "id": 10640,
                                    "name": "Literal",
                                    "src": "2245:1:45"
                                  }
                                ],
                                "id": 10641,
                                "name": "FunctionCall",
                                "src": "2237:10:45"
                              }
                            ],
                            "id": 10642,
                            "name": "BinaryOperation",
                            "src": "2228:19:45"
                          }
                        ],
                        "id": 10643,
                        "name": "FunctionCall",
                        "src": "2220:28:45"
                      }
                    ],
                    "id": 10644,
                    "name": "ExpressionStatement",
                    "src": "2220:28:45"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 10630
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 10632,
                          "type": "address",
                          "value": "owner"
                        },
                        "id": 10645,
                        "name": "Identifier",
                        "src": "2261:5:45"
                      }
                    ],
                    "id": 10646,
                    "name": "Return",
                    "src": "2254:12:45"
                  }
                ],
                "id": 10647,
                "name": "Block",
                "src": "2172:99:45"
              }
            ],
            "id": 10648,
            "name": "FunctionDefinition",
            "src": "2107:164:45"
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
              "scope": 11123,
              "stateMutability": "view",
              "superFunction": 10480,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 10668,
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
                        "id": 10649,
                        "name": "ElementaryTypeName",
                        "src": "2461:7:45"
                      }
                    ],
                    "id": 10650,
                    "name": "VariableDeclaration",
                    "src": "2461:16:45"
                  }
                ],
                "id": 10651,
                "name": "ParameterList",
                "src": "2460:18:45"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 10668,
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
                        "id": 10652,
                        "name": "ElementaryTypeName",
                        "src": "2500:4:45"
                      }
                    ],
                    "id": 10653,
                    "name": "VariableDeclaration",
                    "src": "2500:4:45"
                  }
                ],
                "id": 10654,
                "name": "ParameterList",
                "src": "2499:6:45"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        10656
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "owner",
                          "scope": 10668,
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
                            "id": 10655,
                            "name": "ElementaryTypeName",
                            "src": "2512:7:45"
                          }
                        ],
                        "id": 10656,
                        "name": "VariableDeclaration",
                        "src": "2512:13:45"
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
                              "referencedDeclaration": 10561,
                              "type": "mapping(uint256 => address)",
                              "value": "tokenOwner"
                            },
                            "id": 10657,
                            "name": "Identifier",
                            "src": "2528:10:45"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10650,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 10658,
                            "name": "Identifier",
                            "src": "2539:8:45"
                          }
                        ],
                        "id": 10659,
                        "name": "IndexAccess",
                        "src": "2528:20:45"
                      }
                    ],
                    "id": 10660,
                    "name": "VariableDeclarationStatement",
                    "src": "2512:36:45"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 10654
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
                              "referencedDeclaration": 10656,
                              "type": "address",
                              "value": "owner"
                            },
                            "id": 10661,
                            "name": "Identifier",
                            "src": "2561:5:45"
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
                                "id": 10662,
                                "name": "ElementaryTypeNameExpression",
                                "src": "2570:7:45"
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
                                "id": 10663,
                                "name": "Literal",
                                "src": "2578:1:45"
                              }
                            ],
                            "id": 10664,
                            "name": "FunctionCall",
                            "src": "2570:10:45"
                          }
                        ],
                        "id": 10665,
                        "name": "BinaryOperation",
                        "src": "2561:19:45"
                      }
                    ],
                    "id": 10666,
                    "name": "Return",
                    "src": "2554:26:45"
                  }
                ],
                "id": 10667,
                "name": "Block",
                "src": "2506:79:45"
              }
            ],
            "id": 10668,
            "name": "FunctionDefinition",
            "src": "2445:140:45"
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
              "scope": 11123,
              "stateMutability": "nonpayable",
              "superFunction": 10487,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 10728,
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
                        "id": 10669,
                        "name": "ElementaryTypeName",
                        "src": "3015:7:45"
                      }
                    ],
                    "id": 10670,
                    "name": "VariableDeclaration",
                    "src": "3015:11:45"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 10728,
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
                        "id": 10671,
                        "name": "ElementaryTypeName",
                        "src": "3028:7:45"
                      }
                    ],
                    "id": 10672,
                    "name": "VariableDeclaration",
                    "src": "3028:16:45"
                  }
                ],
                "id": 10673,
                "name": "ParameterList",
                "src": "3014:31:45"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 10674,
                "name": "ParameterList",
                "src": "3053:0:45"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        10676
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "owner",
                          "scope": 10728,
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
                            "id": 10675,
                            "name": "ElementaryTypeName",
                            "src": "3059:7:45"
                          }
                        ],
                        "id": 10676,
                        "name": "VariableDeclaration",
                        "src": "3059:13:45"
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
                                10648
                              ],
                              "referencedDeclaration": 10648,
                              "type": "function (uint256) view returns (address)",
                              "value": "ownerOf"
                            },
                            "id": 10677,
                            "name": "Identifier",
                            "src": "3075:7:45"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10672,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 10678,
                            "name": "Identifier",
                            "src": "3083:8:45"
                          }
                        ],
                        "id": 10679,
                        "name": "FunctionCall",
                        "src": "3075:17:45"
                      }
                    ],
                    "id": 10680,
                    "name": "VariableDeclarationStatement",
                    "src": "3059:33:45"
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
                            "id": 10681,
                            "name": "Identifier",
                            "src": "3098:7:45"
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
                                  "referencedDeclaration": 10670,
                                  "type": "address",
                                  "value": "_to"
                                },
                                "id": 10682,
                                "name": "Identifier",
                                "src": "3106:3:45"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 10676,
                                  "type": "address",
                                  "value": "owner"
                                },
                                "id": 10683,
                                "name": "Identifier",
                                "src": "3113:5:45"
                              }
                            ],
                            "id": 10684,
                            "name": "BinaryOperation",
                            "src": "3106:12:45"
                          }
                        ],
                        "id": 10685,
                        "name": "FunctionCall",
                        "src": "3098:21:45"
                      }
                    ],
                    "id": 10686,
                    "name": "ExpressionStatement",
                    "src": "3098:21:45"
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
                            "id": 10687,
                            "name": "Identifier",
                            "src": "3125:7:45"
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
                                          "referencedDeclaration": 11523,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 10688,
                                        "name": "Identifier",
                                        "src": "3133:3:45"
                                      }
                                    ],
                                    "id": 10689,
                                    "name": "MemberAccess",
                                    "src": "3133:10:45"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 10676,
                                      "type": "address",
                                      "value": "owner"
                                    },
                                    "id": 10690,
                                    "name": "Identifier",
                                    "src": "3147:5:45"
                                  }
                                ],
                                "id": 10691,
                                "name": "BinaryOperation",
                                "src": "3133:19:45"
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
                                        10787
                                      ],
                                      "referencedDeclaration": 10787,
                                      "type": "function (address,address) view returns (bool)",
                                      "value": "isApprovedForAll"
                                    },
                                    "id": 10692,
                                    "name": "Identifier",
                                    "src": "3156:16:45"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 10676,
                                      "type": "address",
                                      "value": "owner"
                                    },
                                    "id": 10693,
                                    "name": "Identifier",
                                    "src": "3173:5:45"
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
                                          "referencedDeclaration": 11523,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 10694,
                                        "name": "Identifier",
                                        "src": "3180:3:45"
                                      }
                                    ],
                                    "id": 10695,
                                    "name": "MemberAccess",
                                    "src": "3180:10:45"
                                  }
                                ],
                                "id": 10696,
                                "name": "FunctionCall",
                                "src": "3156:35:45"
                              }
                            ],
                            "id": 10697,
                            "name": "BinaryOperation",
                            "src": "3133:58:45"
                          }
                        ],
                        "id": 10698,
                        "name": "FunctionCall",
                        "src": "3125:67:45"
                      }
                    ],
                    "id": 10699,
                    "name": "ExpressionStatement",
                    "src": "3125:67:45"
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
                                        10740
                                      ],
                                      "referencedDeclaration": 10740,
                                      "type": "function (uint256) view returns (address)",
                                      "value": "getApproved"
                                    },
                                    "id": 10700,
                                    "name": "Identifier",
                                    "src": "3203:11:45"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 10672,
                                      "type": "uint256",
                                      "value": "_tokenId"
                                    },
                                    "id": 10701,
                                    "name": "Identifier",
                                    "src": "3215:8:45"
                                  }
                                ],
                                "id": 10702,
                                "name": "FunctionCall",
                                "src": "3203:21:45"
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
                                    "id": 10703,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "3228:7:45"
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
                                    "id": 10704,
                                    "name": "Literal",
                                    "src": "3236:1:45"
                                  }
                                ],
                                "id": 10705,
                                "name": "FunctionCall",
                                "src": "3228:10:45"
                              }
                            ],
                            "id": 10706,
                            "name": "BinaryOperation",
                            "src": "3203:35:45"
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
                                  "referencedDeclaration": 10670,
                                  "type": "address",
                                  "value": "_to"
                                },
                                "id": 10707,
                                "name": "Identifier",
                                "src": "3242:3:45"
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
                                    "id": 10708,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "3249:7:45"
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
                                    "id": 10709,
                                    "name": "Literal",
                                    "src": "3257:1:45"
                                  }
                                ],
                                "id": 10710,
                                "name": "FunctionCall",
                                "src": "3249:10:45"
                              }
                            ],
                            "id": 10711,
                            "name": "BinaryOperation",
                            "src": "3242:17:45"
                          }
                        ],
                        "id": 10712,
                        "name": "BinaryOperation",
                        "src": "3203:56:45"
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
                                          "referencedDeclaration": 10565,
                                          "type": "mapping(uint256 => address)",
                                          "value": "tokenApprovals"
                                        },
                                        "id": 10713,
                                        "name": "Identifier",
                                        "src": "3269:14:45"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 10672,
                                          "type": "uint256",
                                          "value": "_tokenId"
                                        },
                                        "id": 10714,
                                        "name": "Identifier",
                                        "src": "3284:8:45"
                                      }
                                    ],
                                    "id": 10715,
                                    "name": "IndexAccess",
                                    "src": "3269:24:45"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 10670,
                                      "type": "address",
                                      "value": "_to"
                                    },
                                    "id": 10716,
                                    "name": "Identifier",
                                    "src": "3296:3:45"
                                  }
                                ],
                                "id": 10717,
                                "name": "Assignment",
                                "src": "3269:30:45"
                              }
                            ],
                            "id": 10718,
                            "name": "ExpressionStatement",
                            "src": "3269:30:45"
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
                                      "referencedDeclaration": 10451,
                                      "type": "function (address,address,uint256)",
                                      "value": "Approval"
                                    },
                                    "id": 10719,
                                    "name": "Identifier",
                                    "src": "3307:8:45"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 10676,
                                      "type": "address",
                                      "value": "owner"
                                    },
                                    "id": 10720,
                                    "name": "Identifier",
                                    "src": "3316:5:45"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 10670,
                                      "type": "address",
                                      "value": "_to"
                                    },
                                    "id": 10721,
                                    "name": "Identifier",
                                    "src": "3323:3:45"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 10672,
                                      "type": "uint256",
                                      "value": "_tokenId"
                                    },
                                    "id": 10722,
                                    "name": "Identifier",
                                    "src": "3328:8:45"
                                  }
                                ],
                                "id": 10723,
                                "name": "FunctionCall",
                                "src": "3307:30:45"
                              }
                            ],
                            "id": 10724,
                            "name": "ExpressionStatement",
                            "src": "3307:30:45"
                          }
                        ],
                        "id": 10725,
                        "name": "Block",
                        "src": "3261:83:45"
                      }
                    ],
                    "id": 10726,
                    "name": "IfStatement",
                    "src": "3199:145:45"
                  }
                ],
                "id": 10727,
                "name": "Block",
                "src": "3053:295:45"
              }
            ],
            "id": 10728,
            "name": "FunctionDefinition",
            "src": "2998:350:45"
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
              "scope": 11123,
              "stateMutability": "view",
              "superFunction": 10494,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 10740,
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
                        "id": 10729,
                        "name": "ElementaryTypeName",
                        "src": "3598:7:45"
                      }
                    ],
                    "id": 10730,
                    "name": "VariableDeclaration",
                    "src": "3598:16:45"
                  }
                ],
                "id": 10731,
                "name": "ParameterList",
                "src": "3597:18:45"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 10740,
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
                        "id": 10732,
                        "name": "ElementaryTypeName",
                        "src": "3637:7:45"
                      }
                    ],
                    "id": 10733,
                    "name": "VariableDeclaration",
                    "src": "3637:7:45"
                  }
                ],
                "id": 10734,
                "name": "ParameterList",
                "src": "3636:9:45"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 10734
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
                              "referencedDeclaration": 10565,
                              "type": "mapping(uint256 => address)",
                              "value": "tokenApprovals"
                            },
                            "id": 10735,
                            "name": "Identifier",
                            "src": "3659:14:45"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10730,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 10736,
                            "name": "Identifier",
                            "src": "3674:8:45"
                          }
                        ],
                        "id": 10737,
                        "name": "IndexAccess",
                        "src": "3659:24:45"
                      }
                    ],
                    "id": 10738,
                    "name": "Return",
                    "src": "3652:31:45"
                  }
                ],
                "id": 10739,
                "name": "Block",
                "src": "3646:42:45"
              }
            ],
            "id": 10740,
            "name": "FunctionDefinition",
            "src": "3577:111:45"
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
              "scope": 11123,
              "stateMutability": "nonpayable",
              "superFunction": 10501,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 10771,
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
                        "id": 10741,
                        "name": "ElementaryTypeName",
                        "src": "3996:7:45"
                      }
                    ],
                    "id": 10742,
                    "name": "VariableDeclaration",
                    "src": "3996:11:45"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_approved",
                      "scope": 10771,
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
                        "id": 10743,
                        "name": "ElementaryTypeName",
                        "src": "4009:4:45"
                      }
                    ],
                    "id": 10744,
                    "name": "VariableDeclaration",
                    "src": "4009:14:45"
                  }
                ],
                "id": 10745,
                "name": "ParameterList",
                "src": "3995:29:45"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 10746,
                "name": "ParameterList",
                "src": "4032:0:45"
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
                            "id": 10747,
                            "name": "Identifier",
                            "src": "4038:7:45"
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
                                  "referencedDeclaration": 10742,
                                  "type": "address",
                                  "value": "_to"
                                },
                                "id": 10748,
                                "name": "Identifier",
                                "src": "4046:3:45"
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
                                      "referencedDeclaration": 11523,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 10749,
                                    "name": "Identifier",
                                    "src": "4053:3:45"
                                  }
                                ],
                                "id": 10750,
                                "name": "MemberAccess",
                                "src": "4053:10:45"
                              }
                            ],
                            "id": 10751,
                            "name": "BinaryOperation",
                            "src": "4046:17:45"
                          }
                        ],
                        "id": 10752,
                        "name": "FunctionCall",
                        "src": "4038:26:45"
                      }
                    ],
                    "id": 10753,
                    "name": "ExpressionStatement",
                    "src": "4038:26:45"
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
                                      "referencedDeclaration": 10575,
                                      "type": "mapping(address => mapping(address => bool))",
                                      "value": "operatorApprovals"
                                    },
                                    "id": 10754,
                                    "name": "Identifier",
                                    "src": "4070:17:45"
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
                                          "referencedDeclaration": 11523,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 10755,
                                        "name": "Identifier",
                                        "src": "4088:3:45"
                                      }
                                    ],
                                    "id": 10756,
                                    "name": "MemberAccess",
                                    "src": "4088:10:45"
                                  }
                                ],
                                "id": 10758,
                                "name": "IndexAccess",
                                "src": "4070:29:45"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 10742,
                                  "type": "address",
                                  "value": "_to"
                                },
                                "id": 10757,
                                "name": "Identifier",
                                "src": "4100:3:45"
                              }
                            ],
                            "id": 10759,
                            "name": "IndexAccess",
                            "src": "4070:34:45"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10744,
                              "type": "bool",
                              "value": "_approved"
                            },
                            "id": 10760,
                            "name": "Identifier",
                            "src": "4107:9:45"
                          }
                        ],
                        "id": 10761,
                        "name": "Assignment",
                        "src": "4070:46:45"
                      }
                    ],
                    "id": 10762,
                    "name": "ExpressionStatement",
                    "src": "4070:46:45"
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
                              "referencedDeclaration": 10459,
                              "type": "function (address,address,bool)",
                              "value": "ApprovalForAll"
                            },
                            "id": 10763,
                            "name": "Identifier",
                            "src": "4122:14:45"
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
                                  "referencedDeclaration": 11523,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 10764,
                                "name": "Identifier",
                                "src": "4137:3:45"
                              }
                            ],
                            "id": 10765,
                            "name": "MemberAccess",
                            "src": "4137:10:45"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10742,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 10766,
                            "name": "Identifier",
                            "src": "4149:3:45"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10744,
                              "type": "bool",
                              "value": "_approved"
                            },
                            "id": 10767,
                            "name": "Identifier",
                            "src": "4154:9:45"
                          }
                        ],
                        "id": 10768,
                        "name": "FunctionCall",
                        "src": "4122:42:45"
                      }
                    ],
                    "id": 10769,
                    "name": "ExpressionStatement",
                    "src": "4122:42:45"
                  }
                ],
                "id": 10770,
                "name": "Block",
                "src": "4032:137:45"
              }
            ],
            "id": 10771,
            "name": "FunctionDefinition",
            "src": "3969:200:45"
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
              "scope": 11123,
              "stateMutability": "view",
              "superFunction": 10510,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_owner",
                      "scope": 10787,
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
                        "id": 10772,
                        "name": "ElementaryTypeName",
                        "src": "4504:7:45"
                      }
                    ],
                    "id": 10773,
                    "name": "VariableDeclaration",
                    "src": "4504:14:45"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_operator",
                      "scope": 10787,
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
                        "id": 10774,
                        "name": "ElementaryTypeName",
                        "src": "4520:7:45"
                      }
                    ],
                    "id": 10775,
                    "name": "VariableDeclaration",
                    "src": "4520:17:45"
                  }
                ],
                "id": 10776,
                "name": "ParameterList",
                "src": "4503:35:45"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 10787,
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
                        "id": 10777,
                        "name": "ElementaryTypeName",
                        "src": "4560:4:45"
                      }
                    ],
                    "id": 10778,
                    "name": "VariableDeclaration",
                    "src": "4560:4:45"
                  }
                ],
                "id": 10779,
                "name": "ParameterList",
                "src": "4559:6:45"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 10779
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
                                  "referencedDeclaration": 10575,
                                  "type": "mapping(address => mapping(address => bool))",
                                  "value": "operatorApprovals"
                                },
                                "id": 10780,
                                "name": "Identifier",
                                "src": "4579:17:45"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 10773,
                                  "type": "address",
                                  "value": "_owner"
                                },
                                "id": 10781,
                                "name": "Identifier",
                                "src": "4597:6:45"
                              }
                            ],
                            "id": 10782,
                            "name": "IndexAccess",
                            "src": "4579:25:45"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10775,
                              "type": "address",
                              "value": "_operator"
                            },
                            "id": 10783,
                            "name": "Identifier",
                            "src": "4605:9:45"
                          }
                        ],
                        "id": 10784,
                        "name": "IndexAccess",
                        "src": "4579:36:45"
                      }
                    ],
                    "id": 10785,
                    "name": "Return",
                    "src": "4572:43:45"
                  }
                ],
                "id": 10786,
                "name": "Block",
                "src": "4566:54:45"
              }
            ],
            "id": 10787,
            "name": "FunctionDefinition",
            "src": "4478:142:45"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "transferFrom",
              "payable": false,
              "scope": 11123,
              "stateMutability": "nonpayable",
              "superFunction": 10519,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_from",
                      "scope": 10837,
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
                        "id": 10788,
                        "name": "ElementaryTypeName",
                        "src": "5064:7:45"
                      }
                    ],
                    "id": 10789,
                    "name": "VariableDeclaration",
                    "src": "5064:13:45"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 10837,
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
                        "id": 10790,
                        "name": "ElementaryTypeName",
                        "src": "5079:7:45"
                      }
                    ],
                    "id": 10791,
                    "name": "VariableDeclaration",
                    "src": "5079:11:45"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 10837,
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
                        "id": 10792,
                        "name": "ElementaryTypeName",
                        "src": "5092:7:45"
                      }
                    ],
                    "id": 10793,
                    "name": "VariableDeclaration",
                    "src": "5092:16:45"
                  }
                ],
                "id": 10794,
                "name": "ParameterList",
                "src": "5063:46:45"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 10798,
                "name": "ParameterList",
                "src": "5139:0:45"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 10604,
                      "type": "modifier (uint256)",
                      "value": "canTransfer"
                    },
                    "id": 10795,
                    "name": "Identifier",
                    "src": "5117:11:45"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 10793,
                      "type": "uint256",
                      "value": "_tokenId"
                    },
                    "id": 10796,
                    "name": "Identifier",
                    "src": "5129:8:45"
                  }
                ],
                "id": 10797,
                "name": "ModifierInvocation",
                "src": "5117:21:45"
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
                            "id": 10799,
                            "name": "Identifier",
                            "src": "5145:7:45"
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
                                  "referencedDeclaration": 10789,
                                  "type": "address",
                                  "value": "_from"
                                },
                                "id": 10800,
                                "name": "Identifier",
                                "src": "5153:5:45"
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
                                    "id": 10801,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "5162:7:45"
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
                                    "id": 10802,
                                    "name": "Literal",
                                    "src": "5170:1:45"
                                  }
                                ],
                                "id": 10803,
                                "name": "FunctionCall",
                                "src": "5162:10:45"
                              }
                            ],
                            "id": 10804,
                            "name": "BinaryOperation",
                            "src": "5153:19:45"
                          }
                        ],
                        "id": 10805,
                        "name": "FunctionCall",
                        "src": "5145:28:45"
                      }
                    ],
                    "id": 10806,
                    "name": "ExpressionStatement",
                    "src": "5145:28:45"
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
                            "id": 10807,
                            "name": "Identifier",
                            "src": "5179:7:45"
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
                                  "referencedDeclaration": 10791,
                                  "type": "address",
                                  "value": "_to"
                                },
                                "id": 10808,
                                "name": "Identifier",
                                "src": "5187:3:45"
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
                                    "id": 10809,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "5194:7:45"
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
                                    "id": 10810,
                                    "name": "Literal",
                                    "src": "5202:1:45"
                                  }
                                ],
                                "id": 10811,
                                "name": "FunctionCall",
                                "src": "5194:10:45"
                              }
                            ],
                            "id": 10812,
                            "name": "BinaryOperation",
                            "src": "5187:17:45"
                          }
                        ],
                        "id": 10813,
                        "name": "FunctionCall",
                        "src": "5179:26:45"
                      }
                    ],
                    "id": 10814,
                    "name": "ExpressionStatement",
                    "src": "5179:26:45"
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
                              "referencedDeclaration": 11014,
                              "type": "function (address,uint256)",
                              "value": "clearApproval"
                            },
                            "id": 10815,
                            "name": "Identifier",
                            "src": "5212:13:45"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10789,
                              "type": "address",
                              "value": "_from"
                            },
                            "id": 10816,
                            "name": "Identifier",
                            "src": "5226:5:45"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10793,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 10817,
                            "name": "Identifier",
                            "src": "5233:8:45"
                          }
                        ],
                        "id": 10818,
                        "name": "FunctionCall",
                        "src": "5212:30:45"
                      }
                    ],
                    "id": 10819,
                    "name": "ExpressionStatement",
                    "src": "5212:30:45"
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
                              "referencedDeclaration": 11084,
                              "type": "function (address,uint256)",
                              "value": "removeTokenFrom"
                            },
                            "id": 10820,
                            "name": "Identifier",
                            "src": "5248:15:45"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10789,
                              "type": "address",
                              "value": "_from"
                            },
                            "id": 10821,
                            "name": "Identifier",
                            "src": "5264:5:45"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10793,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 10822,
                            "name": "Identifier",
                            "src": "5271:8:45"
                          }
                        ],
                        "id": 10823,
                        "name": "FunctionCall",
                        "src": "5248:32:45"
                      }
                    ],
                    "id": 10824,
                    "name": "ExpressionStatement",
                    "src": "5248:32:45"
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
                              "referencedDeclaration": 11049,
                              "type": "function (address,uint256)",
                              "value": "addTokenTo"
                            },
                            "id": 10825,
                            "name": "Identifier",
                            "src": "5286:10:45"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10791,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 10826,
                            "name": "Identifier",
                            "src": "5297:3:45"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10793,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 10827,
                            "name": "Identifier",
                            "src": "5302:8:45"
                          }
                        ],
                        "id": 10828,
                        "name": "FunctionCall",
                        "src": "5286:25:45"
                      }
                    ],
                    "id": 10829,
                    "name": "ExpressionStatement",
                    "src": "5286:25:45"
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
                              "referencedDeclaration": 10443,
                              "type": "function (address,address,uint256)",
                              "value": "Transfer"
                            },
                            "id": 10830,
                            "name": "Identifier",
                            "src": "5322:8:45"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10789,
                              "type": "address",
                              "value": "_from"
                            },
                            "id": 10831,
                            "name": "Identifier",
                            "src": "5331:5:45"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10791,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 10832,
                            "name": "Identifier",
                            "src": "5338:3:45"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10793,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 10833,
                            "name": "Identifier",
                            "src": "5343:8:45"
                          }
                        ],
                        "id": 10834,
                        "name": "FunctionCall",
                        "src": "5322:30:45"
                      }
                    ],
                    "id": 10835,
                    "name": "ExpressionStatement",
                    "src": "5322:30:45"
                  }
                ],
                "id": 10836,
                "name": "Block",
                "src": "5139:218:45"
              }
            ],
            "id": 10837,
            "name": "FunctionDefinition",
            "src": "5042:315:45"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "safeTransferFrom",
              "payable": false,
              "scope": 11123,
              "stateMutability": "nonpayable",
              "superFunction": 10528,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_from",
                      "scope": 10857,
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
                        "id": 10838,
                        "name": "ElementaryTypeName",
                        "src": "5990:7:45"
                      }
                    ],
                    "id": 10839,
                    "name": "VariableDeclaration",
                    "src": "5990:13:45"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 10857,
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
                        "id": 10840,
                        "name": "ElementaryTypeName",
                        "src": "6005:7:45"
                      }
                    ],
                    "id": 10841,
                    "name": "VariableDeclaration",
                    "src": "6005:11:45"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 10857,
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
                        "id": 10842,
                        "name": "ElementaryTypeName",
                        "src": "6018:7:45"
                      }
                    ],
                    "id": 10843,
                    "name": "VariableDeclaration",
                    "src": "6018:16:45"
                  }
                ],
                "id": 10844,
                "name": "ParameterList",
                "src": "5989:46:45"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 10848,
                "name": "ParameterList",
                "src": "6065:0:45"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 10604,
                      "type": "modifier (uint256)",
                      "value": "canTransfer"
                    },
                    "id": 10845,
                    "name": "Identifier",
                    "src": "6043:11:45"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 10843,
                      "type": "uint256",
                      "value": "_tokenId"
                    },
                    "id": 10846,
                    "name": "Identifier",
                    "src": "6055:8:45"
                  }
                ],
                "id": 10847,
                "name": "ModifierInvocation",
                "src": "6043:21:45"
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
                                10857,
                                10887
                              ],
                              "referencedDeclaration": 10887,
                              "type": "function (address,address,uint256,bytes memory)",
                              "value": "safeTransferFrom"
                            },
                            "id": 10849,
                            "name": "Identifier",
                            "src": "6071:16:45"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10839,
                              "type": "address",
                              "value": "_from"
                            },
                            "id": 10850,
                            "name": "Identifier",
                            "src": "6088:5:45"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10841,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 10851,
                            "name": "Identifier",
                            "src": "6095:3:45"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10843,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 10852,
                            "name": "Identifier",
                            "src": "6100:8:45"
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
                            "id": 10853,
                            "name": "Literal",
                            "src": "6110:2:45"
                          }
                        ],
                        "id": 10854,
                        "name": "FunctionCall",
                        "src": "6071:42:45"
                      }
                    ],
                    "id": 10855,
                    "name": "ExpressionStatement",
                    "src": "6071:42:45"
                  }
                ],
                "id": 10856,
                "name": "Block",
                "src": "6065:53:45"
              }
            ],
            "id": 10857,
            "name": "FunctionDefinition",
            "src": "5964:154:45"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "safeTransferFrom",
              "payable": false,
              "scope": 11123,
              "stateMutability": "nonpayable",
              "superFunction": 10539,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_from",
                      "scope": 10887,
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
                        "id": 10858,
                        "name": "ElementaryTypeName",
                        "src": "6820:7:45"
                      }
                    ],
                    "id": 10859,
                    "name": "VariableDeclaration",
                    "src": "6820:13:45"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 10887,
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
                        "id": 10860,
                        "name": "ElementaryTypeName",
                        "src": "6835:7:45"
                      }
                    ],
                    "id": 10861,
                    "name": "VariableDeclaration",
                    "src": "6835:11:45"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 10887,
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
                        "id": 10862,
                        "name": "ElementaryTypeName",
                        "src": "6848:7:45"
                      }
                    ],
                    "id": 10863,
                    "name": "VariableDeclaration",
                    "src": "6848:16:45"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_data",
                      "scope": 10887,
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
                        "id": 10864,
                        "name": "ElementaryTypeName",
                        "src": "6866:5:45"
                      }
                    ],
                    "id": 10865,
                    "name": "VariableDeclaration",
                    "src": "6866:11:45"
                  }
                ],
                "id": 10866,
                "name": "ParameterList",
                "src": "6819:59:45"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 10870,
                "name": "ParameterList",
                "src": "6908:0:45"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 10604,
                      "type": "modifier (uint256)",
                      "value": "canTransfer"
                    },
                    "id": 10867,
                    "name": "Identifier",
                    "src": "6886:11:45"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 10863,
                      "type": "uint256",
                      "value": "_tokenId"
                    },
                    "id": 10868,
                    "name": "Identifier",
                    "src": "6898:8:45"
                  }
                ],
                "id": 10869,
                "name": "ModifierInvocation",
                "src": "6886:21:45"
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
                                10837
                              ],
                              "referencedDeclaration": 10837,
                              "type": "function (address,address,uint256)",
                              "value": "transferFrom"
                            },
                            "id": 10871,
                            "name": "Identifier",
                            "src": "6914:12:45"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10859,
                              "type": "address",
                              "value": "_from"
                            },
                            "id": 10872,
                            "name": "Identifier",
                            "src": "6927:5:45"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10861,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 10873,
                            "name": "Identifier",
                            "src": "6934:3:45"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10863,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 10874,
                            "name": "Identifier",
                            "src": "6939:8:45"
                          }
                        ],
                        "id": 10875,
                        "name": "FunctionCall",
                        "src": "6914:34:45"
                      }
                    ],
                    "id": 10876,
                    "name": "ExpressionStatement",
                    "src": "6914:34:45"
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
                            "id": 10877,
                            "name": "Identifier",
                            "src": "6954:7:45"
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
                                  "referencedDeclaration": 11122,
                                  "type": "function (address,address,uint256,bytes memory) returns (bool)",
                                  "value": "checkAndCallSafeTransfer"
                                },
                                "id": 10878,
                                "name": "Identifier",
                                "src": "6962:24:45"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 10859,
                                  "type": "address",
                                  "value": "_from"
                                },
                                "id": 10879,
                                "name": "Identifier",
                                "src": "6987:5:45"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 10861,
                                  "type": "address",
                                  "value": "_to"
                                },
                                "id": 10880,
                                "name": "Identifier",
                                "src": "6994:3:45"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 10863,
                                  "type": "uint256",
                                  "value": "_tokenId"
                                },
                                "id": 10881,
                                "name": "Identifier",
                                "src": "6999:8:45"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 10865,
                                  "type": "bytes memory",
                                  "value": "_data"
                                },
                                "id": 10882,
                                "name": "Identifier",
                                "src": "7009:5:45"
                              }
                            ],
                            "id": 10883,
                            "name": "FunctionCall",
                            "src": "6962:53:45"
                          }
                        ],
                        "id": 10884,
                        "name": "FunctionCall",
                        "src": "6954:62:45"
                      }
                    ],
                    "id": 10885,
                    "name": "ExpressionStatement",
                    "src": "6954:62:45"
                  }
                ],
                "id": 10886,
                "name": "Block",
                "src": "6908:113:45"
              }
            ],
            "id": 10887,
            "name": "FunctionDefinition",
            "src": "6794:227:45"
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
              "scope": 11123,
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
                      "scope": 10918,
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
                        "id": 10888,
                        "name": "ElementaryTypeName",
                        "src": "7395:7:45"
                      }
                    ],
                    "id": 10889,
                    "name": "VariableDeclaration",
                    "src": "7395:16:45"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 10918,
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
                        "id": 10890,
                        "name": "ElementaryTypeName",
                        "src": "7413:7:45"
                      }
                    ],
                    "id": 10891,
                    "name": "VariableDeclaration",
                    "src": "7413:16:45"
                  }
                ],
                "id": 10892,
                "name": "ParameterList",
                "src": "7394:36:45"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 10918,
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
                        "id": 10893,
                        "name": "ElementaryTypeName",
                        "src": "7454:4:45"
                      }
                    ],
                    "id": 10894,
                    "name": "VariableDeclaration",
                    "src": "7454:4:45"
                  }
                ],
                "id": 10895,
                "name": "ParameterList",
                "src": "7453:6:45"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        10897
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "owner",
                          "scope": 10918,
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
                            "id": 10896,
                            "name": "ElementaryTypeName",
                            "src": "7466:7:45"
                          }
                        ],
                        "id": 10897,
                        "name": "VariableDeclaration",
                        "src": "7466:13:45"
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
                                10648
                              ],
                              "referencedDeclaration": 10648,
                              "type": "function (uint256) view returns (address)",
                              "value": "ownerOf"
                            },
                            "id": 10898,
                            "name": "Identifier",
                            "src": "7482:7:45"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10891,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 10899,
                            "name": "Identifier",
                            "src": "7490:8:45"
                          }
                        ],
                        "id": 10900,
                        "name": "FunctionCall",
                        "src": "7482:17:45"
                      }
                    ],
                    "id": 10901,
                    "name": "VariableDeclarationStatement",
                    "src": "7466:33:45"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 10895
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
                                      "referencedDeclaration": 10889,
                                      "type": "address",
                                      "value": "_spender"
                                    },
                                    "id": 10902,
                                    "name": "Identifier",
                                    "src": "7512:8:45"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 10897,
                                      "type": "address",
                                      "value": "owner"
                                    },
                                    "id": 10903,
                                    "name": "Identifier",
                                    "src": "7524:5:45"
                                  }
                                ],
                                "id": 10904,
                                "name": "BinaryOperation",
                                "src": "7512:17:45"
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
                                            10740
                                          ],
                                          "referencedDeclaration": 10740,
                                          "type": "function (uint256) view returns (address)",
                                          "value": "getApproved"
                                        },
                                        "id": 10905,
                                        "name": "Identifier",
                                        "src": "7533:11:45"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 10891,
                                          "type": "uint256",
                                          "value": "_tokenId"
                                        },
                                        "id": 10906,
                                        "name": "Identifier",
                                        "src": "7545:8:45"
                                      }
                                    ],
                                    "id": 10907,
                                    "name": "FunctionCall",
                                    "src": "7533:21:45"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 10889,
                                      "type": "address",
                                      "value": "_spender"
                                    },
                                    "id": 10908,
                                    "name": "Identifier",
                                    "src": "7558:8:45"
                                  }
                                ],
                                "id": 10909,
                                "name": "BinaryOperation",
                                "src": "7533:33:45"
                              }
                            ],
                            "id": 10910,
                            "name": "BinaryOperation",
                            "src": "7512:54:45"
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
                                    10787
                                  ],
                                  "referencedDeclaration": 10787,
                                  "type": "function (address,address) view returns (bool)",
                                  "value": "isApprovedForAll"
                                },
                                "id": 10911,
                                "name": "Identifier",
                                "src": "7570:16:45"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 10897,
                                  "type": "address",
                                  "value": "owner"
                                },
                                "id": 10912,
                                "name": "Identifier",
                                "src": "7587:5:45"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 10889,
                                  "type": "address",
                                  "value": "_spender"
                                },
                                "id": 10913,
                                "name": "Identifier",
                                "src": "7594:8:45"
                              }
                            ],
                            "id": 10914,
                            "name": "FunctionCall",
                            "src": "7570:33:45"
                          }
                        ],
                        "id": 10915,
                        "name": "BinaryOperation",
                        "src": "7512:91:45"
                      }
                    ],
                    "id": 10916,
                    "name": "Return",
                    "src": "7505:98:45"
                  }
                ],
                "id": 10917,
                "name": "Block",
                "src": "7460:148:45"
              }
            ],
            "id": 10918,
            "name": "FunctionDefinition",
            "src": "7368:240:45"
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
              "scope": 11123,
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
                      "scope": 10947,
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
                        "id": 10919,
                        "name": "ElementaryTypeName",
                        "src": "7872:7:45"
                      }
                    ],
                    "id": 10920,
                    "name": "VariableDeclaration",
                    "src": "7872:11:45"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 10947,
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
                        "id": 10921,
                        "name": "ElementaryTypeName",
                        "src": "7885:7:45"
                      }
                    ],
                    "id": 10922,
                    "name": "VariableDeclaration",
                    "src": "7885:16:45"
                  }
                ],
                "id": 10923,
                "name": "ParameterList",
                "src": "7871:31:45"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 10924,
                "name": "ParameterList",
                "src": "7912:0:45"
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
                            "id": 10925,
                            "name": "Identifier",
                            "src": "7918:7:45"
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
                                  "referencedDeclaration": 10920,
                                  "type": "address",
                                  "value": "_to"
                                },
                                "id": 10926,
                                "name": "Identifier",
                                "src": "7926:3:45"
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
                                    "id": 10927,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "7933:7:45"
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
                                    "id": 10928,
                                    "name": "Literal",
                                    "src": "7941:1:45"
                                  }
                                ],
                                "id": 10929,
                                "name": "FunctionCall",
                                "src": "7933:10:45"
                              }
                            ],
                            "id": 10930,
                            "name": "BinaryOperation",
                            "src": "7926:17:45"
                          }
                        ],
                        "id": 10931,
                        "name": "FunctionCall",
                        "src": "7918:26:45"
                      }
                    ],
                    "id": 10932,
                    "name": "ExpressionStatement",
                    "src": "7918:26:45"
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
                              "referencedDeclaration": 11049,
                              "type": "function (address,uint256)",
                              "value": "addTokenTo"
                            },
                            "id": 10933,
                            "name": "Identifier",
                            "src": "7950:10:45"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10920,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 10934,
                            "name": "Identifier",
                            "src": "7961:3:45"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10922,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 10935,
                            "name": "Identifier",
                            "src": "7966:8:45"
                          }
                        ],
                        "id": 10936,
                        "name": "FunctionCall",
                        "src": "7950:25:45"
                      }
                    ],
                    "id": 10937,
                    "name": "ExpressionStatement",
                    "src": "7950:25:45"
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
                              "referencedDeclaration": 10443,
                              "type": "function (address,address,uint256)",
                              "value": "Transfer"
                            },
                            "id": 10938,
                            "name": "Identifier",
                            "src": "7981:8:45"
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
                                "id": 10939,
                                "name": "ElementaryTypeNameExpression",
                                "src": "7990:7:45"
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
                                "id": 10940,
                                "name": "Literal",
                                "src": "7998:1:45"
                              }
                            ],
                            "id": 10941,
                            "name": "FunctionCall",
                            "src": "7990:10:45"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10920,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 10942,
                            "name": "Identifier",
                            "src": "8002:3:45"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10922,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 10943,
                            "name": "Identifier",
                            "src": "8007:8:45"
                          }
                        ],
                        "id": 10944,
                        "name": "FunctionCall",
                        "src": "7981:35:45"
                      }
                    ],
                    "id": 10945,
                    "name": "ExpressionStatement",
                    "src": "7981:35:45"
                  }
                ],
                "id": 10946,
                "name": "Block",
                "src": "7912:109:45"
              }
            ],
            "id": 10947,
            "name": "FunctionDefinition",
            "src": "7857:164:45"
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
              "scope": 11123,
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
                      "scope": 10973,
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
                        "id": 10948,
                        "name": "ElementaryTypeName",
                        "src": "8223:7:45"
                      }
                    ],
                    "id": 10949,
                    "name": "VariableDeclaration",
                    "src": "8223:14:45"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 10973,
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
                        "id": 10950,
                        "name": "ElementaryTypeName",
                        "src": "8239:7:45"
                      }
                    ],
                    "id": 10951,
                    "name": "VariableDeclaration",
                    "src": "8239:16:45"
                  }
                ],
                "id": 10952,
                "name": "ParameterList",
                "src": "8222:34:45"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 10953,
                "name": "ParameterList",
                "src": "8266:0:45"
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
                              "referencedDeclaration": 11014,
                              "type": "function (address,uint256)",
                              "value": "clearApproval"
                            },
                            "id": 10954,
                            "name": "Identifier",
                            "src": "8272:13:45"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10949,
                              "type": "address",
                              "value": "_owner"
                            },
                            "id": 10955,
                            "name": "Identifier",
                            "src": "8286:6:45"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10951,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 10956,
                            "name": "Identifier",
                            "src": "8294:8:45"
                          }
                        ],
                        "id": 10957,
                        "name": "FunctionCall",
                        "src": "8272:31:45"
                      }
                    ],
                    "id": 10958,
                    "name": "ExpressionStatement",
                    "src": "8272:31:45"
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
                              "referencedDeclaration": 11084,
                              "type": "function (address,uint256)",
                              "value": "removeTokenFrom"
                            },
                            "id": 10959,
                            "name": "Identifier",
                            "src": "8309:15:45"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10949,
                              "type": "address",
                              "value": "_owner"
                            },
                            "id": 10960,
                            "name": "Identifier",
                            "src": "8325:6:45"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10951,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 10961,
                            "name": "Identifier",
                            "src": "8333:8:45"
                          }
                        ],
                        "id": 10962,
                        "name": "FunctionCall",
                        "src": "8309:33:45"
                      }
                    ],
                    "id": 10963,
                    "name": "ExpressionStatement",
                    "src": "8309:33:45"
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
                              "referencedDeclaration": 10443,
                              "type": "function (address,address,uint256)",
                              "value": "Transfer"
                            },
                            "id": 10964,
                            "name": "Identifier",
                            "src": "8348:8:45"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10949,
                              "type": "address",
                              "value": "_owner"
                            },
                            "id": 10965,
                            "name": "Identifier",
                            "src": "8357:6:45"
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
                                "id": 10966,
                                "name": "ElementaryTypeNameExpression",
                                "src": "8365:7:45"
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
                                "id": 10967,
                                "name": "Literal",
                                "src": "8373:1:45"
                              }
                            ],
                            "id": 10968,
                            "name": "FunctionCall",
                            "src": "8365:10:45"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10951,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 10969,
                            "name": "Identifier",
                            "src": "8377:8:45"
                          }
                        ],
                        "id": 10970,
                        "name": "FunctionCall",
                        "src": "8348:38:45"
                      }
                    ],
                    "id": 10971,
                    "name": "ExpressionStatement",
                    "src": "8348:38:45"
                  }
                ],
                "id": 10972,
                "name": "Block",
                "src": "8266:125:45"
              }
            ],
            "id": 10973,
            "name": "FunctionDefinition",
            "src": "8208:183:45"
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
              "scope": 11123,
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
                      "scope": 11014,
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
                        "id": 10974,
                        "name": "ElementaryTypeName",
                        "src": "8676:7:45"
                      }
                    ],
                    "id": 10975,
                    "name": "VariableDeclaration",
                    "src": "8676:14:45"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 11014,
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
                        "id": 10976,
                        "name": "ElementaryTypeName",
                        "src": "8692:7:45"
                      }
                    ],
                    "id": 10977,
                    "name": "VariableDeclaration",
                    "src": "8692:16:45"
                  }
                ],
                "id": 10978,
                "name": "ParameterList",
                "src": "8675:34:45"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 10979,
                "name": "ParameterList",
                "src": "8719:0:45"
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
                            "id": 10980,
                            "name": "Identifier",
                            "src": "8725:7:45"
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
                                        10648
                                      ],
                                      "referencedDeclaration": 10648,
                                      "type": "function (uint256) view returns (address)",
                                      "value": "ownerOf"
                                    },
                                    "id": 10981,
                                    "name": "Identifier",
                                    "src": "8733:7:45"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 10977,
                                      "type": "uint256",
                                      "value": "_tokenId"
                                    },
                                    "id": 10982,
                                    "name": "Identifier",
                                    "src": "8741:8:45"
                                  }
                                ],
                                "id": 10983,
                                "name": "FunctionCall",
                                "src": "8733:17:45"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 10975,
                                  "type": "address",
                                  "value": "_owner"
                                },
                                "id": 10984,
                                "name": "Identifier",
                                "src": "8754:6:45"
                              }
                            ],
                            "id": 10985,
                            "name": "BinaryOperation",
                            "src": "8733:27:45"
                          }
                        ],
                        "id": 10986,
                        "name": "FunctionCall",
                        "src": "8725:36:45"
                      }
                    ],
                    "id": 10987,
                    "name": "ExpressionStatement",
                    "src": "8725:36:45"
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
                                  "referencedDeclaration": 10565,
                                  "type": "mapping(uint256 => address)",
                                  "value": "tokenApprovals"
                                },
                                "id": 10988,
                                "name": "Identifier",
                                "src": "8771:14:45"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 10977,
                                  "type": "uint256",
                                  "value": "_tokenId"
                                },
                                "id": 10989,
                                "name": "Identifier",
                                "src": "8786:8:45"
                              }
                            ],
                            "id": 10990,
                            "name": "IndexAccess",
                            "src": "8771:24:45"
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
                                "id": 10991,
                                "name": "ElementaryTypeNameExpression",
                                "src": "8799:7:45"
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
                                "id": 10992,
                                "name": "Literal",
                                "src": "8807:1:45"
                              }
                            ],
                            "id": 10993,
                            "name": "FunctionCall",
                            "src": "8799:10:45"
                          }
                        ],
                        "id": 10994,
                        "name": "BinaryOperation",
                        "src": "8771:38:45"
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
                                          "referencedDeclaration": 10565,
                                          "type": "mapping(uint256 => address)",
                                          "value": "tokenApprovals"
                                        },
                                        "id": 10995,
                                        "name": "Identifier",
                                        "src": "8819:14:45"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 10977,
                                          "type": "uint256",
                                          "value": "_tokenId"
                                        },
                                        "id": 10996,
                                        "name": "Identifier",
                                        "src": "8834:8:45"
                                      }
                                    ],
                                    "id": 10997,
                                    "name": "IndexAccess",
                                    "src": "8819:24:45"
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
                                        "id": 10998,
                                        "name": "ElementaryTypeNameExpression",
                                        "src": "8846:7:45"
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
                                        "id": 10999,
                                        "name": "Literal",
                                        "src": "8854:1:45"
                                      }
                                    ],
                                    "id": 11000,
                                    "name": "FunctionCall",
                                    "src": "8846:10:45"
                                  }
                                ],
                                "id": 11001,
                                "name": "Assignment",
                                "src": "8819:37:45"
                              }
                            ],
                            "id": 11002,
                            "name": "ExpressionStatement",
                            "src": "8819:37:45"
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
                                      "referencedDeclaration": 10451,
                                      "type": "function (address,address,uint256)",
                                      "value": "Approval"
                                    },
                                    "id": 11003,
                                    "name": "Identifier",
                                    "src": "8864:8:45"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 10975,
                                      "type": "address",
                                      "value": "_owner"
                                    },
                                    "id": 11004,
                                    "name": "Identifier",
                                    "src": "8873:6:45"
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
                                        "id": 11005,
                                        "name": "ElementaryTypeNameExpression",
                                        "src": "8881:7:45"
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
                                        "id": 11006,
                                        "name": "Literal",
                                        "src": "8889:1:45"
                                      }
                                    ],
                                    "id": 11007,
                                    "name": "FunctionCall",
                                    "src": "8881:10:45"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 10977,
                                      "type": "uint256",
                                      "value": "_tokenId"
                                    },
                                    "id": 11008,
                                    "name": "Identifier",
                                    "src": "8893:8:45"
                                  }
                                ],
                                "id": 11009,
                                "name": "FunctionCall",
                                "src": "8864:38:45"
                              }
                            ],
                            "id": 11010,
                            "name": "ExpressionStatement",
                            "src": "8864:38:45"
                          }
                        ],
                        "id": 11011,
                        "name": "Block",
                        "src": "8811:98:45"
                      }
                    ],
                    "id": 11012,
                    "name": "IfStatement",
                    "src": "8767:142:45"
                  }
                ],
                "id": 11013,
                "name": "Block",
                "src": "8719:194:45"
              }
            ],
            "id": 11014,
            "name": "FunctionDefinition",
            "src": "8653:260:45"
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
              "scope": 11123,
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
                      "scope": 11049,
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
                        "id": 11015,
                        "name": "ElementaryTypeName",
                        "src": "9192:7:45"
                      }
                    ],
                    "id": 11016,
                    "name": "VariableDeclaration",
                    "src": "9192:11:45"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 11049,
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
                        "id": 11017,
                        "name": "ElementaryTypeName",
                        "src": "9205:7:45"
                      }
                    ],
                    "id": 11018,
                    "name": "VariableDeclaration",
                    "src": "9205:16:45"
                  }
                ],
                "id": 11019,
                "name": "ParameterList",
                "src": "9191:31:45"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 11020,
                "name": "ParameterList",
                "src": "9232:0:45"
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
                            "id": 11021,
                            "name": "Identifier",
                            "src": "9238:7:45"
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
                                      "referencedDeclaration": 10561,
                                      "type": "mapping(uint256 => address)",
                                      "value": "tokenOwner"
                                    },
                                    "id": 11022,
                                    "name": "Identifier",
                                    "src": "9246:10:45"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 11018,
                                      "type": "uint256",
                                      "value": "_tokenId"
                                    },
                                    "id": 11023,
                                    "name": "Identifier",
                                    "src": "9257:8:45"
                                  }
                                ],
                                "id": 11024,
                                "name": "IndexAccess",
                                "src": "9246:20:45"
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
                                    "id": 11025,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "9270:7:45"
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
                                    "id": 11026,
                                    "name": "Literal",
                                    "src": "9278:1:45"
                                  }
                                ],
                                "id": 11027,
                                "name": "FunctionCall",
                                "src": "9270:10:45"
                              }
                            ],
                            "id": 11028,
                            "name": "BinaryOperation",
                            "src": "9246:34:45"
                          }
                        ],
                        "id": 11029,
                        "name": "FunctionCall",
                        "src": "9238:43:45"
                      }
                    ],
                    "id": 11030,
                    "name": "ExpressionStatement",
                    "src": "9238:43:45"
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
                                  "referencedDeclaration": 10561,
                                  "type": "mapping(uint256 => address)",
                                  "value": "tokenOwner"
                                },
                                "id": 11031,
                                "name": "Identifier",
                                "src": "9287:10:45"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 11018,
                                  "type": "uint256",
                                  "value": "_tokenId"
                                },
                                "id": 11032,
                                "name": "Identifier",
                                "src": "9298:8:45"
                              }
                            ],
                            "id": 11033,
                            "name": "IndexAccess",
                            "src": "9287:20:45"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 11016,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 11034,
                            "name": "Identifier",
                            "src": "9310:3:45"
                          }
                        ],
                        "id": 11035,
                        "name": "Assignment",
                        "src": "9287:26:45"
                      }
                    ],
                    "id": 11036,
                    "name": "ExpressionStatement",
                    "src": "9287:26:45"
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
                                  "referencedDeclaration": 10569,
                                  "type": "mapping(address => uint256)",
                                  "value": "ownedTokensCount"
                                },
                                "id": 11037,
                                "name": "Identifier",
                                "src": "9319:16:45"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 11016,
                                  "type": "address",
                                  "value": "_to"
                                },
                                "id": 11038,
                                "name": "Identifier",
                                "src": "9336:3:45"
                              }
                            ],
                            "id": 11039,
                            "name": "IndexAccess",
                            "src": "9319:21:45"
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
                                  "referencedDeclaration": 9784,
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
                                          "referencedDeclaration": 10569,
                                          "type": "mapping(address => uint256)",
                                          "value": "ownedTokensCount"
                                        },
                                        "id": 11040,
                                        "name": "Identifier",
                                        "src": "9343:16:45"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 11016,
                                          "type": "address",
                                          "value": "_to"
                                        },
                                        "id": 11041,
                                        "name": "Identifier",
                                        "src": "9360:3:45"
                                      }
                                    ],
                                    "id": 11042,
                                    "name": "IndexAccess",
                                    "src": "9343:21:45"
                                  }
                                ],
                                "id": 11043,
                                "name": "MemberAccess",
                                "src": "9343:25:45"
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
                                "id": 11044,
                                "name": "Literal",
                                "src": "9369:1:45"
                              }
                            ],
                            "id": 11045,
                            "name": "FunctionCall",
                            "src": "9343:28:45"
                          }
                        ],
                        "id": 11046,
                        "name": "Assignment",
                        "src": "9319:52:45"
                      }
                    ],
                    "id": 11047,
                    "name": "ExpressionStatement",
                    "src": "9319:52:45"
                  }
                ],
                "id": 11048,
                "name": "Block",
                "src": "9232:144:45"
              }
            ],
            "id": 11049,
            "name": "FunctionDefinition",
            "src": "9172:204:45"
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
              "scope": 11123,
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
                      "scope": 11084,
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
                        "id": 11050,
                        "name": "ElementaryTypeName",
                        "src": "9676:7:45"
                      }
                    ],
                    "id": 11051,
                    "name": "VariableDeclaration",
                    "src": "9676:13:45"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 11084,
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
                        "id": 11052,
                        "name": "ElementaryTypeName",
                        "src": "9691:7:45"
                      }
                    ],
                    "id": 11053,
                    "name": "VariableDeclaration",
                    "src": "9691:16:45"
                  }
                ],
                "id": 11054,
                "name": "ParameterList",
                "src": "9675:33:45"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 11055,
                "name": "ParameterList",
                "src": "9718:0:45"
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
                            "id": 11056,
                            "name": "Identifier",
                            "src": "9724:7:45"
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
                                        10648
                                      ],
                                      "referencedDeclaration": 10648,
                                      "type": "function (uint256) view returns (address)",
                                      "value": "ownerOf"
                                    },
                                    "id": 11057,
                                    "name": "Identifier",
                                    "src": "9732:7:45"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 11053,
                                      "type": "uint256",
                                      "value": "_tokenId"
                                    },
                                    "id": 11058,
                                    "name": "Identifier",
                                    "src": "9740:8:45"
                                  }
                                ],
                                "id": 11059,
                                "name": "FunctionCall",
                                "src": "9732:17:45"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 11051,
                                  "type": "address",
                                  "value": "_from"
                                },
                                "id": 11060,
                                "name": "Identifier",
                                "src": "9753:5:45"
                              }
                            ],
                            "id": 11061,
                            "name": "BinaryOperation",
                            "src": "9732:26:45"
                          }
                        ],
                        "id": 11062,
                        "name": "FunctionCall",
                        "src": "9724:35:45"
                      }
                    ],
                    "id": 11063,
                    "name": "ExpressionStatement",
                    "src": "9724:35:45"
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
                                  "referencedDeclaration": 10569,
                                  "type": "mapping(address => uint256)",
                                  "value": "ownedTokensCount"
                                },
                                "id": 11064,
                                "name": "Identifier",
                                "src": "9765:16:45"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 11051,
                                  "type": "address",
                                  "value": "_from"
                                },
                                "id": 11065,
                                "name": "Identifier",
                                "src": "9782:5:45"
                              }
                            ],
                            "id": 11066,
                            "name": "IndexAccess",
                            "src": "9765:23:45"
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
                                  "referencedDeclaration": 9760,
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
                                          "referencedDeclaration": 10569,
                                          "type": "mapping(address => uint256)",
                                          "value": "ownedTokensCount"
                                        },
                                        "id": 11067,
                                        "name": "Identifier",
                                        "src": "9791:16:45"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 11051,
                                          "type": "address",
                                          "value": "_from"
                                        },
                                        "id": 11068,
                                        "name": "Identifier",
                                        "src": "9808:5:45"
                                      }
                                    ],
                                    "id": 11069,
                                    "name": "IndexAccess",
                                    "src": "9791:23:45"
                                  }
                                ],
                                "id": 11070,
                                "name": "MemberAccess",
                                "src": "9791:27:45"
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
                                "id": 11071,
                                "name": "Literal",
                                "src": "9819:1:45"
                              }
                            ],
                            "id": 11072,
                            "name": "FunctionCall",
                            "src": "9791:30:45"
                          }
                        ],
                        "id": 11073,
                        "name": "Assignment",
                        "src": "9765:56:45"
                      }
                    ],
                    "id": 11074,
                    "name": "ExpressionStatement",
                    "src": "9765:56:45"
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
                                  "referencedDeclaration": 10561,
                                  "type": "mapping(uint256 => address)",
                                  "value": "tokenOwner"
                                },
                                "id": 11075,
                                "name": "Identifier",
                                "src": "9827:10:45"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 11053,
                                  "type": "uint256",
                                  "value": "_tokenId"
                                },
                                "id": 11076,
                                "name": "Identifier",
                                "src": "9838:8:45"
                              }
                            ],
                            "id": 11077,
                            "name": "IndexAccess",
                            "src": "9827:20:45"
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
                                "id": 11078,
                                "name": "ElementaryTypeNameExpression",
                                "src": "9850:7:45"
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
                                "id": 11079,
                                "name": "Literal",
                                "src": "9858:1:45"
                              }
                            ],
                            "id": 11080,
                            "name": "FunctionCall",
                            "src": "9850:10:45"
                          }
                        ],
                        "id": 11081,
                        "name": "Assignment",
                        "src": "9827:33:45"
                      }
                    ],
                    "id": 11082,
                    "name": "ExpressionStatement",
                    "src": "9827:33:45"
                  }
                ],
                "id": 11083,
                "name": "Block",
                "src": "9718:147:45"
              }
            ],
            "id": 11084,
            "name": "FunctionDefinition",
            "src": "9651:214:45"
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
              "scope": 11123,
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
                      "scope": 11122,
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
                        "id": 11085,
                        "name": "ElementaryTypeName",
                        "src": "10402:7:45"
                      }
                    ],
                    "id": 11086,
                    "name": "VariableDeclaration",
                    "src": "10402:13:45"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 11122,
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
                        "id": 11087,
                        "name": "ElementaryTypeName",
                        "src": "10417:7:45"
                      }
                    ],
                    "id": 11088,
                    "name": "VariableDeclaration",
                    "src": "10417:11:45"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 11122,
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
                        "id": 11089,
                        "name": "ElementaryTypeName",
                        "src": "10430:7:45"
                      }
                    ],
                    "id": 11090,
                    "name": "VariableDeclaration",
                    "src": "10430:16:45"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_data",
                      "scope": 11122,
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
                        "id": 11091,
                        "name": "ElementaryTypeName",
                        "src": "10448:5:45"
                      }
                    ],
                    "id": 11092,
                    "name": "VariableDeclaration",
                    "src": "10448:11:45"
                  }
                ],
                "id": 11093,
                "name": "ParameterList",
                "src": "10401:59:45"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 11122,
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
                        "id": 11094,
                        "name": "ElementaryTypeName",
                        "src": "10479:4:45"
                      }
                    ],
                    "id": 11095,
                    "name": "VariableDeclaration",
                    "src": "10479:4:45"
                  }
                ],
                "id": 11096,
                "name": "ParameterList",
                "src": "10478:6:45"
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
                                  "referencedDeclaration": 9626,
                                  "type": "function (address) view returns (bool)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 11088,
                                      "type": "address",
                                      "value": "_to"
                                    },
                                    "id": 11097,
                                    "name": "Identifier",
                                    "src": "10496:3:45"
                                  }
                                ],
                                "id": 11098,
                                "name": "MemberAccess",
                                "src": "10496:14:45"
                              }
                            ],
                            "id": 11099,
                            "name": "FunctionCall",
                            "src": "10496:16:45"
                          }
                        ],
                        "id": 11100,
                        "name": "UnaryOperation",
                        "src": "10495:17:45"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "functionReturnParameters": 11096
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
                                "id": 11101,
                                "name": "Literal",
                                "src": "10529:4:45"
                              }
                            ],
                            "id": 11102,
                            "name": "Return",
                            "src": "10522:11:45"
                          }
                        ],
                        "id": 11103,
                        "name": "Block",
                        "src": "10514:26:45"
                      }
                    ],
                    "id": 11104,
                    "name": "IfStatement",
                    "src": "10491:49:45"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        11106
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "retval",
                          "scope": 11122,
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
                            "id": 11105,
                            "name": "ElementaryTypeName",
                            "src": "10545:6:45"
                          }
                        ],
                        "id": 11106,
                        "name": "VariableDeclaration",
                        "src": "10545:13:45"
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
                              "referencedDeclaration": 11139,
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
                                      "referencedDeclaration": 11140,
                                      "type": "type(contract ERC721Receiver)",
                                      "value": "ERC721Receiver"
                                    },
                                    "id": 11107,
                                    "name": "Identifier",
                                    "src": "10561:14:45"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 11088,
                                      "type": "address",
                                      "value": "_to"
                                    },
                                    "id": 11108,
                                    "name": "Identifier",
                                    "src": "10576:3:45"
                                  }
                                ],
                                "id": 11109,
                                "name": "FunctionCall",
                                "src": "10561:19:45"
                              }
                            ],
                            "id": 11110,
                            "name": "MemberAccess",
                            "src": "10561:36:45"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 11086,
                              "type": "address",
                              "value": "_from"
                            },
                            "id": 11111,
                            "name": "Identifier",
                            "src": "10598:5:45"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 11090,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 11112,
                            "name": "Identifier",
                            "src": "10605:8:45"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 11092,
                              "type": "bytes memory",
                              "value": "_data"
                            },
                            "id": 11113,
                            "name": "Identifier",
                            "src": "10615:5:45"
                          }
                        ],
                        "id": 11114,
                        "name": "FunctionCall",
                        "src": "10561:60:45"
                      }
                    ],
                    "id": 11115,
                    "name": "VariableDeclarationStatement",
                    "src": "10545:76:45"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 11096
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
                                  "referencedDeclaration": 11106,
                                  "type": "bytes4",
                                  "value": "retval"
                                },
                                "id": 11116,
                                "name": "Identifier",
                                "src": "10635:6:45"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 10557,
                                  "type": "bytes4",
                                  "value": "ERC721_RECEIVED"
                                },
                                "id": 11117,
                                "name": "Identifier",
                                "src": "10645:15:45"
                              }
                            ],
                            "id": 11118,
                            "name": "BinaryOperation",
                            "src": "10635:25:45"
                          }
                        ],
                        "id": 11119,
                        "name": "TupleExpression",
                        "src": "10634:27:45"
                      }
                    ],
                    "id": 11120,
                    "name": "Return",
                    "src": "10627:34:45"
                  }
                ],
                "id": 11121,
                "name": "Block",
                "src": "10485:181:45"
              }
            ],
            "id": 11122,
            "name": "FunctionDefinition",
            "src": "10368:298:45"
          }
        ],
        "id": 11123,
        "name": "ContractDefinition",
        "src": "300:10368:45"
      }
    ],
    "id": 11124,
    "name": "SourceUnit",
    "src": "0:10669:45"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-08-24T23:27:49.773Z"
}