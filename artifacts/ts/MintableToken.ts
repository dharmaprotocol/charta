export const MintableToken = 
{
  "contractName": "MintableToken",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "mintingFinished",
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
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "name": "",
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
      "name": "totalSupply",
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
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
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
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "mint",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseApproval",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
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
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "balance",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "finishMinting",
      "outputs": [
        {
          "name": "",
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
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseApproval",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
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
          "name": "_spender",
          "type": "address"
        }
      ],
      "name": "allowance",
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
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Mint",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "MintFinished",
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
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
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
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    }
  ],
  "bytecode": "0x60606040526000600360146101000a81548160ff02191690831515021790555033600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506115a28061006f6000396000f3006060604052600436106100c5576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806305d2035b146100ca578063095ea7b3146100f757806318160ddd1461015157806323b872dd1461017a57806340c10f19146101f3578063661884631461024d57806370a08231146102a75780637d64bcb4146102f45780638da5cb5b14610321578063a9059cbb14610376578063d73dd623146103d0578063dd62ed3e1461042a578063f2fde38b14610496575b600080fd5b34156100d557600080fd5b6100dd6104cf565b604051808215151515815260200191505060405180910390f35b341561010257600080fd5b610137600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506104e2565b604051808215151515815260200191505060405180910390f35b341561015c57600080fd5b6101646105d4565b6040518082815260200191505060405180910390f35b341561018557600080fd5b6101d9600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506105de565b604051808215151515815260200191505060405180910390f35b34156101fe57600080fd5b610233600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610998565b604051808215151515815260200191505060405180910390f35b341561025857600080fd5b61028d600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610b7e565b604051808215151515815260200191505060405180910390f35b34156102b257600080fd5b6102de600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610e0f565b6040518082815260200191505060405180910390f35b34156102ff57600080fd5b610307610e57565b604051808215151515815260200191505060405180910390f35b341561032c57600080fd5b610334610f1f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561038157600080fd5b6103b6600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610f45565b604051808215151515815260200191505060405180910390f35b34156103db57600080fd5b610410600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050611164565b604051808215151515815260200191505060405180910390f35b341561043557600080fd5b610480600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611360565b6040518082815260200191505060405180910390f35b34156104a157600080fd5b6104cd600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506113e7565b005b600360149054906101000a900460ff1681565b600081600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b6000600154905090565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561061b57600080fd5b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561066857600080fd5b600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482111515156106f357600080fd5b610744826000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461153f90919063ffffffff16565b6000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506107d7826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461155890919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506108a882600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461153f90919063ffffffff16565b600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156109f657600080fd5b600360149054906101000a900460ff16151515610a1257600080fd5b610a278260015461155890919063ffffffff16565b600181905550610a7e826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461155890919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff167f0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d4121396885836040518082815260200191505060405180910390a28273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b600080600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905080831115610c8f576000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610d23565b610ca2838261153f90919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b8373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a3600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610eb557600080fd5b600360149054906101000a900460ff16151515610ed157600080fd5b6001600360146101000a81548160ff0219169083151502179055507fae5184fba832cb2b1f702aca6117b8d265eaf03ad33eb133f19dde0f5920fa0860405160405180910390a16001905090565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610f8257600080fd5b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548211151515610fcf57600080fd5b611020826000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461153f90919063ffffffff16565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506110b3826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461155890919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b60006111f582600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461155890919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a36001905092915050565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561144357600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561147f57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600082821115151561154d57fe5b818303905092915050565b600080828401905083811015151561156c57fe5b80915050929150505600a165627a7a7230582069f47ad0c424fef254a752efb4b1ca7d60fc46992573097901fc1a27bc3ded210029",
  "deployedBytecode": "0x6060604052600436106100c5576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806305d2035b146100ca578063095ea7b3146100f757806318160ddd1461015157806323b872dd1461017a57806340c10f19146101f3578063661884631461024d57806370a08231146102a75780637d64bcb4146102f45780638da5cb5b14610321578063a9059cbb14610376578063d73dd623146103d0578063dd62ed3e1461042a578063f2fde38b14610496575b600080fd5b34156100d557600080fd5b6100dd6104cf565b604051808215151515815260200191505060405180910390f35b341561010257600080fd5b610137600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506104e2565b604051808215151515815260200191505060405180910390f35b341561015c57600080fd5b6101646105d4565b6040518082815260200191505060405180910390f35b341561018557600080fd5b6101d9600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506105de565b604051808215151515815260200191505060405180910390f35b34156101fe57600080fd5b610233600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610998565b604051808215151515815260200191505060405180910390f35b341561025857600080fd5b61028d600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610b7e565b604051808215151515815260200191505060405180910390f35b34156102b257600080fd5b6102de600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610e0f565b6040518082815260200191505060405180910390f35b34156102ff57600080fd5b610307610e57565b604051808215151515815260200191505060405180910390f35b341561032c57600080fd5b610334610f1f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561038157600080fd5b6103b6600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610f45565b604051808215151515815260200191505060405180910390f35b34156103db57600080fd5b610410600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050611164565b604051808215151515815260200191505060405180910390f35b341561043557600080fd5b610480600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611360565b6040518082815260200191505060405180910390f35b34156104a157600080fd5b6104cd600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506113e7565b005b600360149054906101000a900460ff1681565b600081600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b6000600154905090565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561061b57600080fd5b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561066857600080fd5b600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482111515156106f357600080fd5b610744826000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461153f90919063ffffffff16565b6000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506107d7826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461155890919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506108a882600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461153f90919063ffffffff16565b600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156109f657600080fd5b600360149054906101000a900460ff16151515610a1257600080fd5b610a278260015461155890919063ffffffff16565b600181905550610a7e826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461155890919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff167f0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d4121396885836040518082815260200191505060405180910390a28273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b600080600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905080831115610c8f576000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610d23565b610ca2838261153f90919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b8373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a3600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610eb557600080fd5b600360149054906101000a900460ff16151515610ed157600080fd5b6001600360146101000a81548160ff0219169083151502179055507fae5184fba832cb2b1f702aca6117b8d265eaf03ad33eb133f19dde0f5920fa0860405160405180910390a16001905090565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610f8257600080fd5b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548211151515610fcf57600080fd5b611020826000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461153f90919063ffffffff16565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506110b3826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461155890919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b60006111f582600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461155890919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a36001905092915050565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561144357600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561147f57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600082821115151561154d57fe5b818303905092915050565b600080828401905083811015151561156c57fe5b80915050929150505600a165627a7a7230582069f47ad0c424fef254a752efb4b1ca7d60fc46992573097901fc1a27bc3ded210029",
  "sourceMap": "386:982:40:-;;;544:5;514:35;;;;;;;;;;;;;;;;;;;;509:10:36;501:5;;:18;;;;;;;;;;;;;;;;;;386:982:40;;;;;;",
  "deployedSourceMap": "386:982:40:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;514:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1798:183:41;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;371:83:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;736:439:41;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;853:264:40;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3602:398:41;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1189:107:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1231:135:40;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;238:20:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;608:379:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2883:257:41;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2300:126;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;832:169:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;514:35:40;;;;;;;;;;;;;:::o;1798:183:41:-;1865:4;1909:6;1877:7;:19;1885:10;1877:19;;;;;;;;;;;;;;;:29;1897:8;1877:29;;;;;;;;;;;;;;;:38;;;;1942:8;1921:38;;1930:10;1921:38;;;1952:6;1921:38;;;;;;;;;;;;;;;;;;1972:4;1965:11;;1798:183;;;;:::o;371:83:37:-;415:7;437:12;;430:19;;371:83;:::o;736:439:41:-;818:4;853:1;838:17;;:3;:17;;;;830:26;;;;;;;;880:8;:15;889:5;880:15;;;;;;;;;;;;;;;;870:6;:25;;862:34;;;;;;;;920:7;:14;928:5;920:14;;;;;;;;;;;;;;;:26;935:10;920:26;;;;;;;;;;;;;;;;910:6;:36;;902:45;;;;;;;;972:27;992:6;972:8;:15;981:5;972:15;;;;;;;;;;;;;;;;:19;;:27;;;;:::i;:::-;954:8;:15;963:5;954:15;;;;;;;;;;;;;;;:45;;;;1021:25;1039:6;1021:8;:13;1030:3;1021:13;;;;;;;;;;;;;;;;:17;;:25;;;;:::i;:::-;1005:8;:13;1014:3;1005:13;;;;;;;;;;;;;;;:41;;;;1081:38;1112:6;1081:7;:14;1089:5;1081:14;;;;;;;;;;;;;;;:26;1096:10;1081:26;;;;;;;;;;;;;;;;:30;;:38;;;;:::i;:::-;1052:7;:14;1060:5;1052:14;;;;;;;;;;;;;;;:26;1067:10;1052:26;;;;;;;;;;;;;;;:67;;;;1141:3;1125:28;;1134:5;1125:28;;;1146:6;1125:28;;;;;;;;;;;;;;;;;;1166:4;1159:11;;736:439;;;;;:::o;853:264:40:-;931:4;653:5:36;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;589:15:40;;;;;;;;;;;588:16;580:25;;;;;;;;958;975:7;958:12;;:16;;:25;;;;:::i;:::-;943:12;:40;;;;1005:26;1023:7;1005:8;:13;1014:3;1005:13;;;;;;;;;;;;;;;;:17;;:26;;;;:::i;:::-;989:8;:13;998:3;989:13;;;;;;;;;;;;;;;:42;;;;1042:3;1037:18;;;1047:7;1037:18;;;;;;;;;;;;;;;;;;1082:3;1061:34;;1078:1;1061:34;;;1087:7;1061:34;;;;;;;;;;;;;;;;;;1108:4;1101:11;;853:264;;;;:::o;3602:398:41:-;3685:4;3697:13;3713:7;:19;3721:10;3713:19;;;;;;;;;;;;;;;:29;3733:8;3713:29;;;;;;;;;;;;;;;;3697:45;;3771:8;3752:16;:27;3748:164;;;3821:1;3789:7;:19;3797:10;3789:19;;;;;;;;;;;;;;;:29;3809:8;3789:29;;;;;;;;;;;;;;;:33;;;;3748:164;;;3875:30;3888:16;3875:8;:12;;:30;;;;:::i;:::-;3843:7;:19;3851:10;3843:19;;;;;;;;;;;;;;;:29;3863:8;3843:29;;;;;;;;;;;;;;;:62;;;;3748:164;3938:8;3917:61;;3926:10;3917:61;;;3948:7;:19;3956:10;3948:19;;;;;;;;;;;;;;;:29;3968:8;3948:29;;;;;;;;;;;;;;;;3917:61;;;;;;;;;;;;;;;;;;3991:4;3984:11;;3602:398;;;;;:::o;1189:107:37:-;1245:15;1275:8;:16;1284:6;1275:16;;;;;;;;;;;;;;;;1268:23;;1189:107;;;:::o;1231:135:40:-;1290:4;653:5:36;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;589:15:40;;;;;;;;;;;588:16;580:25;;;;;;;;1320:4;1302:15;;:22;;;;;;;;;;;;;;;;;;1330:14;;;;;;;;;;1357:4;1350:11;;1231:135;:::o;238:20:36:-;;;;;;;;;;;;;:::o;608:379:37:-;671:4;706:1;691:17;;:3;:17;;;;683:26;;;;;;;;733:8;:20;742:10;733:20;;;;;;;;;;;;;;;;723:6;:30;;715:39;;;;;;;;847:32;872:6;847:8;:20;856:10;847:20;;;;;;;;;;;;;;;;:24;;:32;;;;:::i;:::-;824:8;:20;833:10;824:20;;;;;;;;;;;;;;;:55;;;;901:25;919:6;901:8;:13;910:3;901:13;;;;;;;;;;;;;;;;:17;;:25;;;;:::i;:::-;885:8;:13;894:3;885:13;;;;;;;;;;;;;;;:41;;;;953:3;932:33;;941:10;932:33;;;958:6;932:33;;;;;;;;;;;;;;;;;;978:4;971:11;;608:379;;;;:::o;2883:257:41:-;2961:4;3005:46;3039:11;3005:7;:19;3013:10;3005:19;;;;;;;;;;;;;;;:29;3025:8;3005:29;;;;;;;;;;;;;;;;:33;;:46;;;;:::i;:::-;2973:7;:19;2981:10;2973:19;;;;;;;;;;;;;;;:29;2993:8;2973:29;;;;;;;;;;;;;;;:78;;;;3078:8;3057:61;;3066:10;3057:61;;;3088:7;:19;3096:10;3088:19;;;;;;;;;;;;;;;:29;3108:8;3088:29;;;;;;;;;;;;;;;;3057:61;;;;;;;;;;;;;;;;;;3131:4;3124:11;;2883:257;;;;:::o;2300:126::-;2374:7;2396;:15;2404:6;2396:15;;;;;;;;;;;;;;;:25;2412:8;2396:25;;;;;;;;;;;;;;;;2389:32;;2300:126;;;;:::o;832:169:36:-;653:5;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;928:1;908:22;;:8;:22;;;;900:31;;;;;;;;965:8;937:37;;958:5;;;;;;;;;;;937:37;;;;;;;;;;;;988:8;980:5;;:16;;;;;;;;;;;;;;;;;;832:169;:::o;835:110:35:-;893:7;920:1;915;:6;;908:14;;;;;;939:1;935;:5;928:12;;835:110;;;;:::o;1007:129::-;1065:7;1080:9;1096:1;1092;:5;1080:17;;1115:1;1110;:6;;1103:14;;;;;;1130:1;1123:8;;1007:129;;;;;:::o",
  "source": "pragma solidity ^0.4.18;\n\nimport \"./StandardToken.sol\";\nimport \"../../ownership/Ownable.sol\";\n\n\n/**\n * @title Mintable token\n * @dev Simple ERC20 Token example, with mintable token creation\n * @dev Issue: * https://github.com/OpenZeppelin/zeppelin-solidity/issues/120\n * Based on code by TokenMarketNet: https://github.com/TokenMarketNet/ico/blob/master/contracts/MintableToken.sol\n */\ncontract MintableToken is StandardToken, Ownable {\n  event Mint(address indexed to, uint256 amount);\n  event MintFinished();\n\n  bool public mintingFinished = false;\n\n\n  modifier canMint() {\n    require(!mintingFinished);\n    _;\n  }\n\n  /**\n   * @dev Function to mint tokens\n   * @param _to The address that will receive the minted tokens.\n   * @param _amount The amount of tokens to mint.\n   * @return A boolean that indicates if the operation was successful.\n   */\n  function mint(address _to, uint256 _amount) onlyOwner canMint public returns (bool) {\n    totalSupply_ = totalSupply_.add(_amount);\n    balances[_to] = balances[_to].add(_amount);\n    Mint(_to, _amount);\n    Transfer(address(0), _to, _amount);\n    return true;\n  }\n\n  /**\n   * @dev Function to stop minting new tokens.\n   * @return True if the operation was successful.\n   */\n  function finishMinting() onlyOwner canMint public returns (bool) {\n    mintingFinished = true;\n    MintFinished();\n    return true;\n  }\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/token/ERC20/MintableToken.sol",
  "ast": {
    "attributes": {
      "absolutePath": "zeppelin-solidity/contracts/token/ERC20/MintableToken.sol",
      "exportedSymbols": {
        "MintableToken": [
          10107
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
        "id": 10014,
        "name": "PragmaDirective",
        "src": "0:24:40"
      },
      {
        "attributes": {
          "SourceUnit": 10354,
          "absolutePath": "zeppelin-solidity/contracts/token/ERC20/StandardToken.sol",
          "file": "./StandardToken.sol",
          "scope": 10108,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 10015,
        "name": "ImportDirective",
        "src": "26:29:40"
      },
      {
        "attributes": {
          "SourceUnit": 9842,
          "absolutePath": "zeppelin-solidity/contracts/ownership/Ownable.sol",
          "file": "../../ownership/Ownable.sol",
          "scope": 10108,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 10016,
        "name": "ImportDirective",
        "src": "56:37:40"
      },
      {
        "attributes": {
          "contractDependencies": [
            9841,
            9937,
            9980,
            10012,
            10353
          ],
          "contractKind": "contract",
          "documentation": "@title Mintable token\n@dev Simple ERC20 Token example, with mintable token creation\n@dev Issue: * https://github.com/OpenZeppelin/zeppelin-solidity/issues/120\nBased on code by TokenMarketNet: https://github.com/TokenMarketNet/ico/blob/master/contracts/MintableToken.sol",
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            10107,
            9841,
            10353,
            9937,
            9980,
            10012
          ],
          "name": "MintableToken",
          "scope": 10108
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
                  "name": "StandardToken",
                  "referencedDeclaration": 10353,
                  "type": "contract StandardToken"
                },
                "id": 10017,
                "name": "UserDefinedTypeName",
                "src": "412:13:40"
              }
            ],
            "id": 10018,
            "name": "InheritanceSpecifier",
            "src": "412:13:40"
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
                  "name": "Ownable",
                  "referencedDeclaration": 9841,
                  "type": "contract Ownable"
                },
                "id": 10019,
                "name": "UserDefinedTypeName",
                "src": "427:7:40"
              }
            ],
            "id": 10020,
            "name": "InheritanceSpecifier",
            "src": "427:7:40"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "Mint"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "to",
                      "scope": 10026,
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
                        "id": 10021,
                        "name": "ElementaryTypeName",
                        "src": "450:7:40"
                      }
                    ],
                    "id": 10022,
                    "name": "VariableDeclaration",
                    "src": "450:18:40"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "amount",
                      "scope": 10026,
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
                        "id": 10023,
                        "name": "ElementaryTypeName",
                        "src": "470:7:40"
                      }
                    ],
                    "id": 10024,
                    "name": "VariableDeclaration",
                    "src": "470:14:40"
                  }
                ],
                "id": 10025,
                "name": "ParameterList",
                "src": "449:36:40"
              }
            ],
            "id": 10026,
            "name": "EventDefinition",
            "src": "439:47:40"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "MintFinished"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 10027,
                "name": "ParameterList",
                "src": "507:2:40"
              }
            ],
            "id": 10028,
            "name": "EventDefinition",
            "src": "489:21:40"
          },
          {
            "attributes": {
              "constant": false,
              "name": "mintingFinished",
              "scope": 10107,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "bool",
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "bool",
                  "type": "bool"
                },
                "id": 10029,
                "name": "ElementaryTypeName",
                "src": "514:4:40"
              },
              {
                "attributes": {
                  "argumentTypes": null,
                  "hexvalue": "66616c7365",
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "subdenomination": null,
                  "token": "bool",
                  "type": "bool",
                  "value": "false"
                },
                "id": 10030,
                "name": "Literal",
                "src": "544:5:40"
              }
            ],
            "id": 10031,
            "name": "VariableDeclaration",
            "src": "514:35:40"
          },
          {
            "attributes": {
              "name": "canMint",
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 10032,
                "name": "ParameterList",
                "src": "571:2:40"
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
                            "id": 10033,
                            "name": "Identifier",
                            "src": "580:7:40"
                          },
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
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 10031,
                                  "type": "bool",
                                  "value": "mintingFinished"
                                },
                                "id": 10034,
                                "name": "Identifier",
                                "src": "589:15:40"
                              }
                            ],
                            "id": 10035,
                            "name": "UnaryOperation",
                            "src": "588:16:40"
                          }
                        ],
                        "id": 10036,
                        "name": "FunctionCall",
                        "src": "580:25:40"
                      }
                    ],
                    "id": 10037,
                    "name": "ExpressionStatement",
                    "src": "580:25:40"
                  },
                  {
                    "id": 10038,
                    "name": "PlaceholderStatement",
                    "src": "611:1:40"
                  }
                ],
                "id": 10039,
                "name": "Block",
                "src": "574:43:40"
              }
            ],
            "id": 10040,
            "name": "ModifierDefinition",
            "src": "555:62:40"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "mint",
              "payable": false,
              "scope": 10107,
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
                      "name": "_to",
                      "scope": 10087,
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
                        "id": 10041,
                        "name": "ElementaryTypeName",
                        "src": "867:7:40"
                      }
                    ],
                    "id": 10042,
                    "name": "VariableDeclaration",
                    "src": "867:11:40"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_amount",
                      "scope": 10087,
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
                        "id": 10043,
                        "name": "ElementaryTypeName",
                        "src": "880:7:40"
                      }
                    ],
                    "id": 10044,
                    "name": "VariableDeclaration",
                    "src": "880:15:40"
                  }
                ],
                "id": 10045,
                "name": "ParameterList",
                "src": "866:30:40"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 10087,
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
                        "id": 10050,
                        "name": "ElementaryTypeName",
                        "src": "931:4:40"
                      }
                    ],
                    "id": 10051,
                    "name": "VariableDeclaration",
                    "src": "931:4:40"
                  }
                ],
                "id": 10052,
                "name": "ParameterList",
                "src": "930:6:40"
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
                    "id": 10046,
                    "name": "Identifier",
                    "src": "897:9:40"
                  }
                ],
                "id": 10047,
                "name": "ModifierInvocation",
                "src": "897:9:40"
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
                      "referencedDeclaration": 10040,
                      "type": "modifier ()",
                      "value": "canMint"
                    },
                    "id": 10048,
                    "name": "Identifier",
                    "src": "907:7:40"
                  }
                ],
                "id": 10049,
                "name": "ModifierInvocation",
                "src": "907:7:40"
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
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9856,
                              "type": "uint256",
                              "value": "totalSupply_"
                            },
                            "id": 10053,
                            "name": "Identifier",
                            "src": "943:12:40"
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
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
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
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 9856,
                                      "type": "uint256",
                                      "value": "totalSupply_"
                                    },
                                    "id": 10054,
                                    "name": "Identifier",
                                    "src": "958:12:40"
                                  }
                                ],
                                "id": 10055,
                                "name": "MemberAccess",
                                "src": "958:16:40"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 10044,
                                  "type": "uint256",
                                  "value": "_amount"
                                },
                                "id": 10056,
                                "name": "Identifier",
                                "src": "975:7:40"
                              }
                            ],
                            "id": 10057,
                            "name": "FunctionCall",
                            "src": "958:25:40"
                          }
                        ],
                        "id": 10058,
                        "name": "Assignment",
                        "src": "943:40:40"
                      }
                    ],
                    "id": 10059,
                    "name": "ExpressionStatement",
                    "src": "943:40:40"
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
                                  "referencedDeclaration": 9854,
                                  "type": "mapping(address => uint256)",
                                  "value": "balances"
                                },
                                "id": 10060,
                                "name": "Identifier",
                                "src": "989:8:40"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 10042,
                                  "type": "address",
                                  "value": "_to"
                                },
                                "id": 10061,
                                "name": "Identifier",
                                "src": "998:3:40"
                              }
                            ],
                            "id": 10062,
                            "name": "IndexAccess",
                            "src": "989:13:40"
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
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
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
                                          "referencedDeclaration": 9854,
                                          "type": "mapping(address => uint256)",
                                          "value": "balances"
                                        },
                                        "id": 10063,
                                        "name": "Identifier",
                                        "src": "1005:8:40"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 10042,
                                          "type": "address",
                                          "value": "_to"
                                        },
                                        "id": 10064,
                                        "name": "Identifier",
                                        "src": "1014:3:40"
                                      }
                                    ],
                                    "id": 10065,
                                    "name": "IndexAccess",
                                    "src": "1005:13:40"
                                  }
                                ],
                                "id": 10066,
                                "name": "MemberAccess",
                                "src": "1005:17:40"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 10044,
                                  "type": "uint256",
                                  "value": "_amount"
                                },
                                "id": 10067,
                                "name": "Identifier",
                                "src": "1023:7:40"
                              }
                            ],
                            "id": 10068,
                            "name": "FunctionCall",
                            "src": "1005:26:40"
                          }
                        ],
                        "id": 10069,
                        "name": "Assignment",
                        "src": "989:42:40"
                      }
                    ],
                    "id": 10070,
                    "name": "ExpressionStatement",
                    "src": "989:42:40"
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
                              "referencedDeclaration": 10026,
                              "type": "function (address,uint256)",
                              "value": "Mint"
                            },
                            "id": 10071,
                            "name": "Identifier",
                            "src": "1037:4:40"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10042,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 10072,
                            "name": "Identifier",
                            "src": "1042:3:40"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10044,
                              "type": "uint256",
                              "value": "_amount"
                            },
                            "id": 10073,
                            "name": "Identifier",
                            "src": "1047:7:40"
                          }
                        ],
                        "id": 10074,
                        "name": "FunctionCall",
                        "src": "1037:18:40"
                      }
                    ],
                    "id": 10075,
                    "name": "ExpressionStatement",
                    "src": "1037:18:40"
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
                              "referencedDeclaration": 10011,
                              "type": "function (address,address,uint256)",
                              "value": "Transfer"
                            },
                            "id": 10076,
                            "name": "Identifier",
                            "src": "1061:8:40"
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
                                "id": 10077,
                                "name": "ElementaryTypeNameExpression",
                                "src": "1070:7:40"
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
                                "id": 10078,
                                "name": "Literal",
                                "src": "1078:1:40"
                              }
                            ],
                            "id": 10079,
                            "name": "FunctionCall",
                            "src": "1070:10:40"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10042,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 10080,
                            "name": "Identifier",
                            "src": "1082:3:40"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10044,
                              "type": "uint256",
                              "value": "_amount"
                            },
                            "id": 10081,
                            "name": "Identifier",
                            "src": "1087:7:40"
                          }
                        ],
                        "id": 10082,
                        "name": "FunctionCall",
                        "src": "1061:34:40"
                      }
                    ],
                    "id": 10083,
                    "name": "ExpressionStatement",
                    "src": "1061:34:40"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 10052
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
                        "id": 10084,
                        "name": "Literal",
                        "src": "1108:4:40"
                      }
                    ],
                    "id": 10085,
                    "name": "Return",
                    "src": "1101:11:40"
                  }
                ],
                "id": 10086,
                "name": "Block",
                "src": "937:180:40"
              }
            ],
            "id": 10087,
            "name": "FunctionDefinition",
            "src": "853:264:40"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "finishMinting",
              "payable": false,
              "scope": 10107,
              "stateMutability": "nonpayable",
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
                "id": 10088,
                "name": "ParameterList",
                "src": "1253:2:40"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 10106,
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
                        "id": 10093,
                        "name": "ElementaryTypeName",
                        "src": "1290:4:40"
                      }
                    ],
                    "id": 10094,
                    "name": "VariableDeclaration",
                    "src": "1290:4:40"
                  }
                ],
                "id": 10095,
                "name": "ParameterList",
                "src": "1289:6:40"
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
                    "id": 10089,
                    "name": "Identifier",
                    "src": "1256:9:40"
                  }
                ],
                "id": 10090,
                "name": "ModifierInvocation",
                "src": "1256:9:40"
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
                      "referencedDeclaration": 10040,
                      "type": "modifier ()",
                      "value": "canMint"
                    },
                    "id": 10091,
                    "name": "Identifier",
                    "src": "1266:7:40"
                  }
                ],
                "id": 10092,
                "name": "ModifierInvocation",
                "src": "1266:7:40"
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
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10031,
                              "type": "bool",
                              "value": "mintingFinished"
                            },
                            "id": 10096,
                            "name": "Identifier",
                            "src": "1302:15:40"
                          },
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
                            "id": 10097,
                            "name": "Literal",
                            "src": "1320:4:40"
                          }
                        ],
                        "id": 10098,
                        "name": "Assignment",
                        "src": "1302:22:40"
                      }
                    ],
                    "id": 10099,
                    "name": "ExpressionStatement",
                    "src": "1302:22:40"
                  },
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
                              "referencedDeclaration": 10028,
                              "type": "function ()",
                              "value": "MintFinished"
                            },
                            "id": 10100,
                            "name": "Identifier",
                            "src": "1330:12:40"
                          }
                        ],
                        "id": 10101,
                        "name": "FunctionCall",
                        "src": "1330:14:40"
                      }
                    ],
                    "id": 10102,
                    "name": "ExpressionStatement",
                    "src": "1330:14:40"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 10095
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
                        "id": 10103,
                        "name": "Literal",
                        "src": "1357:4:40"
                      }
                    ],
                    "id": 10104,
                    "name": "Return",
                    "src": "1350:11:40"
                  }
                ],
                "id": 10105,
                "name": "Block",
                "src": "1296:70:40"
              }
            ],
            "id": 10106,
            "name": "FunctionDefinition",
            "src": "1231:135:40"
          }
        ],
        "id": 10107,
        "name": "ContractDefinition",
        "src": "386:982:40"
      }
    ],
    "id": 10108,
    "name": "SourceUnit",
    "src": "0:1369:40"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-08-24T23:27:49.760Z"
}