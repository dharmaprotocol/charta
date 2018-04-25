export const StandardToken = 
{
  "contractName": "StandardToken",
  "abi": [
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
  "bytecode": "0x6060604052341561000f57600080fd5b610fea8061001e6000396000f30060606040526004361061008e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063095ea7b31461009357806318160ddd146100ed57806323b872dd14610116578063661884631461018f57806370a08231146101e9578063a9059cbb14610236578063d73dd62314610290578063dd62ed3e146102ea575b600080fd5b341561009e57600080fd5b6100d3600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610356565b604051808215151515815260200191505060405180910390f35b34156100f857600080fd5b610100610448565b6040518082815260200191505060405180910390f35b341561012157600080fd5b610175600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610452565b604051808215151515815260200191505060405180910390f35b341561019a57600080fd5b6101cf600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190505061080c565b604051808215151515815260200191505060405180910390f35b34156101f457600080fd5b610220600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610a9d565b6040518082815260200191505060405180910390f35b341561024157600080fd5b610276600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610ae5565b604051808215151515815260200191505060405180910390f35b341561029b57600080fd5b6102d0600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610d04565b604051808215151515815260200191505060405180910390f35b34156102f557600080fd5b610340600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610f00565b6040518082815260200191505060405180910390f35b600081600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b6000600154905090565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561048f57600080fd5b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482111515156104dc57600080fd5b600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561056757600080fd5b6105b8826000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610f8790919063ffffffff16565b6000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061064b826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610fa090919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061071c82600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610f8790919063ffffffff16565b600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b600080600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508083111561091d576000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506109b1565b6109308382610f8790919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b8373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a3600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610b2257600080fd5b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548211151515610b6f57600080fd5b610bc0826000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610f8790919063ffffffff16565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610c53826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610fa090919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b6000610d9582600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610fa090919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a36001905092915050565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6000828211151515610f9557fe5b818303905092915050565b6000808284019050838110151515610fb457fe5b80915050929150505600a165627a7a723058202fd2ce582d5e79b88bbbab1e1d860be60c89586d34ff94ba9b168579ea6253530029",
  "deployedBytecode": "0x60606040526004361061008e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063095ea7b31461009357806318160ddd146100ed57806323b872dd14610116578063661884631461018f57806370a08231146101e9578063a9059cbb14610236578063d73dd62314610290578063dd62ed3e146102ea575b600080fd5b341561009e57600080fd5b6100d3600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610356565b604051808215151515815260200191505060405180910390f35b34156100f857600080fd5b610100610448565b6040518082815260200191505060405180910390f35b341561012157600080fd5b610175600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610452565b604051808215151515815260200191505060405180910390f35b341561019a57600080fd5b6101cf600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190505061080c565b604051808215151515815260200191505060405180910390f35b34156101f457600080fd5b610220600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610a9d565b6040518082815260200191505060405180910390f35b341561024157600080fd5b610276600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610ae5565b604051808215151515815260200191505060405180910390f35b341561029b57600080fd5b6102d0600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610d04565b604051808215151515815260200191505060405180910390f35b34156102f557600080fd5b610340600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610f00565b6040518082815260200191505060405180910390f35b600081600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b6000600154905090565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561048f57600080fd5b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482111515156104dc57600080fd5b600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561056757600080fd5b6105b8826000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610f8790919063ffffffff16565b6000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061064b826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610fa090919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061071c82600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610f8790919063ffffffff16565b600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b600080600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508083111561091d576000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506109b1565b6109308382610f8790919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b8373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a3600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610b2257600080fd5b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548211151515610b6f57600080fd5b610bc0826000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610f8790919063ffffffff16565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610c53826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610fa090919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b6000610d9582600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610fa090919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a36001905092915050565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6000828211151515610f9557fe5b818303905092915050565b6000808284019050838110151515610fb457fe5b80915050929150505600a165627a7a723058202fd2ce582d5e79b88bbbab1e1d860be60c89586d34ff94ba9b168579ea6253530029",
  "sourceMap": "344:3659:35:-;;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "344:3659:35:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1798:183;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;371:83:31;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;736:439:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3602:398;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1189:107:31;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;608:379;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2883:257:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2300:126;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1798:183;1865:4;1909:6;1877:7;:19;1885:10;1877:19;;;;;;;;;;;;;;;:29;1897:8;1877:29;;;;;;;;;;;;;;;:38;;;;1942:8;1921:38;;1930:10;1921:38;;;1952:6;1921:38;;;;;;;;;;;;;;;;;;1972:4;1965:11;;1798:183;;;;:::o;371:83:31:-;415:7;437:12;;430:19;;371:83;:::o;736:439:35:-;818:4;853:1;838:17;;:3;:17;;;;830:26;;;;;;;;880:8;:15;889:5;880:15;;;;;;;;;;;;;;;;870:6;:25;;862:34;;;;;;;;920:7;:14;928:5;920:14;;;;;;;;;;;;;;;:26;935:10;920:26;;;;;;;;;;;;;;;;910:6;:36;;902:45;;;;;;;;972:27;992:6;972:8;:15;981:5;972:15;;;;;;;;;;;;;;;;:19;;:27;;;;:::i;:::-;954:8;:15;963:5;954:15;;;;;;;;;;;;;;;:45;;;;1021:25;1039:6;1021:8;:13;1030:3;1021:13;;;;;;;;;;;;;;;;:17;;:25;;;;:::i;:::-;1005:8;:13;1014:3;1005:13;;;;;;;;;;;;;;;:41;;;;1081:38;1112:6;1081:7;:14;1089:5;1081:14;;;;;;;;;;;;;;;:26;1096:10;1081:26;;;;;;;;;;;;;;;;:30;;:38;;;;:::i;:::-;1052:7;:14;1060:5;1052:14;;;;;;;;;;;;;;;:26;1067:10;1052:26;;;;;;;;;;;;;;;:67;;;;1141:3;1125:28;;1134:5;1125:28;;;1146:6;1125:28;;;;;;;;;;;;;;;;;;1166:4;1159:11;;736:439;;;;;:::o;3602:398::-;3685:4;3697:13;3713:7;:19;3721:10;3713:19;;;;;;;;;;;;;;;:29;3733:8;3713:29;;;;;;;;;;;;;;;;3697:45;;3771:8;3752:16;:27;3748:164;;;3821:1;3789:7;:19;3797:10;3789:19;;;;;;;;;;;;;;;:29;3809:8;3789:29;;;;;;;;;;;;;;;:33;;;;3748:164;;;3875:30;3888:16;3875:8;:12;;:30;;;;:::i;:::-;3843:7;:19;3851:10;3843:19;;;;;;;;;;;;;;;:29;3863:8;3843:29;;;;;;;;;;;;;;;:62;;;;3748:164;3938:8;3917:61;;3926:10;3917:61;;;3948:7;:19;3956:10;3948:19;;;;;;;;;;;;;;;:29;3968:8;3948:29;;;;;;;;;;;;;;;;3917:61;;;;;;;;;;;;;;;;;;3991:4;3984:11;;3602:398;;;;;:::o;1189:107:31:-;1245:15;1275:8;:16;1284:6;1275:16;;;;;;;;;;;;;;;;1268:23;;1189:107;;;:::o;608:379::-;671:4;706:1;691:17;;:3;:17;;;;683:26;;;;;;;;733:8;:20;742:10;733:20;;;;;;;;;;;;;;;;723:6;:30;;715:39;;;;;;;;847:32;872:6;847:8;:20;856:10;847:20;;;;;;;;;;;;;;;;:24;;:32;;;;:::i;:::-;824:8;:20;833:10;824:20;;;;;;;;;;;;;;;:55;;;;901:25;919:6;901:8;:13;910:3;901:13;;;;;;;;;;;;;;;;:17;;:25;;;;:::i;:::-;885:8;:13;894:3;885:13;;;;;;;;;;;;;;;:41;;;;953:3;932:33;;941:10;932:33;;;958:6;932:33;;;;;;;;;;;;;;;;;;978:4;971:11;;608:379;;;;:::o;2883:257:35:-;2961:4;3005:46;3039:11;3005:7;:19;3013:10;3005:19;;;;;;;;;;;;;;;:29;3025:8;3005:29;;;;;;;;;;;;;;;;:33;;:46;;;;:::i;:::-;2973:7;:19;2981:10;2973:19;;;;;;;;;;;;;;;:29;2993:8;2973:29;;;;;;;;;;;;;;;:78;;;;3078:8;3057:61;;3066:10;3057:61;;;3088:7;:19;3096:10;3088:19;;;;;;;;;;;;;;;:29;3108:8;3088:29;;;;;;;;;;;;;;;;3057:61;;;;;;;;;;;;;;;;;;3131:4;3124:11;;2883:257;;;;:::o;2300:126::-;2374:7;2396;:15;2404:6;2396:15;;;;;;;;;;;;;;;:25;2412:8;2396:25;;;;;;;;;;;;;;;;2389:32;;2300:126;;;;:::o;835:110:29:-;893:7;920:1;915;:6;;908:14;;;;;;939:1;935;:5;928:12;;835:110;;;;:::o;1007:129::-;1065:7;1080:9;1096:1;1092;:5;1080:17;;1115:1;1110;:6;;1103:14;;;;;;1130:1;1123:8;;1007:129;;;;;:::o",
  "source": "pragma solidity ^0.4.18;\n\nimport \"./BasicToken.sol\";\nimport \"./ERC20.sol\";\n\n\n/**\n * @title Standard ERC20 token\n *\n * @dev Implementation of the basic standard token.\n * @dev https://github.com/ethereum/EIPs/issues/20\n * @dev Based on code by FirstBlood: https://github.com/Firstbloodio/token/blob/master/smart_contract/FirstBloodToken.sol\n */\ncontract StandardToken is ERC20, BasicToken {\n\n  mapping (address => mapping (address => uint256)) internal allowed;\n\n\n  /**\n   * @dev Transfer tokens from one address to another\n   * @param _from address The address which you want to send tokens from\n   * @param _to address The address which you want to transfer to\n   * @param _value uint256 the amount of tokens to be transferred\n   */\n  function transferFrom(address _from, address _to, uint256 _value) public returns (bool) {\n    require(_to != address(0));\n    require(_value <= balances[_from]);\n    require(_value <= allowed[_from][msg.sender]);\n\n    balances[_from] = balances[_from].sub(_value);\n    balances[_to] = balances[_to].add(_value);\n    allowed[_from][msg.sender] = allowed[_from][msg.sender].sub(_value);\n    Transfer(_from, _to, _value);\n    return true;\n  }\n\n  /**\n   * @dev Approve the passed address to spend the specified amount of tokens on behalf of msg.sender.\n   *\n   * Beware that changing an allowance with this method brings the risk that someone may use both the old\n   * and the new allowance by unfortunate transaction ordering. One possible solution to mitigate this\n   * race condition is to first reduce the spender's allowance to 0 and set the desired value afterwards:\n   * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729\n   * @param _spender The address which will spend the funds.\n   * @param _value The amount of tokens to be spent.\n   */\n  function approve(address _spender, uint256 _value) public returns (bool) {\n    allowed[msg.sender][_spender] = _value;\n    Approval(msg.sender, _spender, _value);\n    return true;\n  }\n\n  /**\n   * @dev Function to check the amount of tokens that an owner allowed to a spender.\n   * @param _owner address The address which owns the funds.\n   * @param _spender address The address which will spend the funds.\n   * @return A uint256 specifying the amount of tokens still available for the spender.\n   */\n  function allowance(address _owner, address _spender) public view returns (uint256) {\n    return allowed[_owner][_spender];\n  }\n\n  /**\n   * @dev Increase the amount of tokens that an owner allowed to a spender.\n   *\n   * approve should be called when allowed[_spender] == 0. To increment\n   * allowed value is better to use this function to avoid 2 calls (and wait until\n   * the first transaction is mined)\n   * From MonolithDAO Token.sol\n   * @param _spender The address which will spend the funds.\n   * @param _addedValue The amount of tokens to increase the allowance by.\n   */\n  function increaseApproval(address _spender, uint _addedValue) public returns (bool) {\n    allowed[msg.sender][_spender] = allowed[msg.sender][_spender].add(_addedValue);\n    Approval(msg.sender, _spender, allowed[msg.sender][_spender]);\n    return true;\n  }\n\n  /**\n   * @dev Decrease the amount of tokens that an owner allowed to a spender.\n   *\n   * approve should be called when allowed[_spender] == 0. To decrement\n   * allowed value is better to use this function to avoid 2 calls (and wait until\n   * the first transaction is mined)\n   * From MonolithDAO Token.sol\n   * @param _spender The address which will spend the funds.\n   * @param _subtractedValue The amount of tokens to decrease the allowance by.\n   */\n  function decreaseApproval(address _spender, uint _subtractedValue) public returns (bool) {\n    uint oldValue = allowed[msg.sender][_spender];\n    if (_subtractedValue > oldValue) {\n      allowed[msg.sender][_spender] = 0;\n    } else {\n      allowed[msg.sender][_spender] = oldValue.sub(_subtractedValue);\n    }\n    Approval(msg.sender, _spender, allowed[msg.sender][_spender]);\n    return true;\n  }\n\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/token/ERC20/StandardToken.sol",
  "ast": {
    "attributes": {
      "absolutePath": "zeppelin-solidity/contracts/token/ERC20/StandardToken.sol",
      "exportedSymbols": {
        "StandardToken": [
          8615
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
        "id": 8371,
        "name": "PragmaDirective",
        "src": "0:24:35"
      },
      {
        "attributes": {
          "SourceUnit": 8200,
          "absolutePath": "zeppelin-solidity/contracts/token/ERC20/BasicToken.sol",
          "file": "./BasicToken.sol",
          "scope": 8616,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 8372,
        "name": "ImportDirective",
        "src": "26:26:35"
      },
      {
        "attributes": {
          "SourceUnit": 8243,
          "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
          "file": "./ERC20.sol",
          "scope": 8616,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 8373,
        "name": "ImportDirective",
        "src": "53:21:35"
      },
      {
        "attributes": {
          "contractDependencies": [
            8199,
            8242,
            8274
          ],
          "contractKind": "contract",
          "documentation": "@title Standard ERC20 token\n * @dev Implementation of the basic standard token.\n@dev https://github.com/ethereum/EIPs/issues/20\n@dev Based on code by FirstBlood: https://github.com/Firstbloodio/token/blob/master/smart_contract/FirstBloodToken.sol",
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            8615,
            8199,
            8242,
            8274
          ],
          "name": "StandardToken",
          "scope": 8616
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
                  "name": "ERC20",
                  "referencedDeclaration": 8242,
                  "type": "contract ERC20"
                },
                "id": 8374,
                "name": "UserDefinedTypeName",
                "src": "370:5:35"
              }
            ],
            "id": 8375,
            "name": "InheritanceSpecifier",
            "src": "370:5:35"
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
                  "name": "BasicToken",
                  "referencedDeclaration": 8199,
                  "type": "contract BasicToken"
                },
                "id": 8376,
                "name": "UserDefinedTypeName",
                "src": "377:10:35"
              }
            ],
            "id": 8377,
            "name": "InheritanceSpecifier",
            "src": "377:10:35"
          },
          {
            "attributes": {
              "constant": false,
              "name": "allowed",
              "scope": 8615,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(address => mapping(address => uint256))",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(address => mapping(address => uint256))"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "address",
                      "type": "address"
                    },
                    "id": 8378,
                    "name": "ElementaryTypeName",
                    "src": "402:7:35"
                  },
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
                        "id": 8379,
                        "name": "ElementaryTypeName",
                        "src": "422:7:35"
                      },
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 8380,
                        "name": "ElementaryTypeName",
                        "src": "433:7:35"
                      }
                    ],
                    "id": 8381,
                    "name": "Mapping",
                    "src": "413:28:35"
                  }
                ],
                "id": 8382,
                "name": "Mapping",
                "src": "393:49:35"
              }
            ],
            "id": 8383,
            "name": "VariableDeclaration",
            "src": "393:66:35"
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
              "scope": 8615,
              "stateMutability": "nonpayable",
              "superFunction": 8224,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_from",
                      "scope": 8469,
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
                        "id": 8384,
                        "name": "ElementaryTypeName",
                        "src": "758:7:35"
                      }
                    ],
                    "id": 8385,
                    "name": "VariableDeclaration",
                    "src": "758:13:35"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 8469,
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
                        "id": 8386,
                        "name": "ElementaryTypeName",
                        "src": "773:7:35"
                      }
                    ],
                    "id": 8387,
                    "name": "VariableDeclaration",
                    "src": "773:11:35"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_value",
                      "scope": 8469,
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
                        "id": 8388,
                        "name": "ElementaryTypeName",
                        "src": "786:7:35"
                      }
                    ],
                    "id": 8389,
                    "name": "VariableDeclaration",
                    "src": "786:14:35"
                  }
                ],
                "id": 8390,
                "name": "ParameterList",
                "src": "757:44:35"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 8469,
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
                        "id": 8391,
                        "name": "ElementaryTypeName",
                        "src": "818:4:35"
                      }
                    ],
                    "id": 8392,
                    "name": "VariableDeclaration",
                    "src": "818:4:35"
                  }
                ],
                "id": 8393,
                "name": "ParameterList",
                "src": "817:6:35"
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
                              "referencedDeclaration": 9788,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 8394,
                            "name": "Identifier",
                            "src": "830:7:35"
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
                                  "referencedDeclaration": 8387,
                                  "type": "address",
                                  "value": "_to"
                                },
                                "id": 8395,
                                "name": "Identifier",
                                "src": "838:3:35"
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
                                    "id": 8396,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "845:7:35"
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
                                    "id": 8397,
                                    "name": "Literal",
                                    "src": "853:1:35"
                                  }
                                ],
                                "id": 8398,
                                "name": "FunctionCall",
                                "src": "845:10:35"
                              }
                            ],
                            "id": 8399,
                            "name": "BinaryOperation",
                            "src": "838:17:35"
                          }
                        ],
                        "id": 8400,
                        "name": "FunctionCall",
                        "src": "830:26:35"
                      }
                    ],
                    "id": 8401,
                    "name": "ExpressionStatement",
                    "src": "830:26:35"
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
                              "referencedDeclaration": 9788,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 8402,
                            "name": "Identifier",
                            "src": "862:7:35"
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
                              "operator": "<=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8389,
                                  "type": "uint256",
                                  "value": "_value"
                                },
                                "id": 8403,
                                "name": "Identifier",
                                "src": "870:6:35"
                              },
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
                                      "referencedDeclaration": 8116,
                                      "type": "mapping(address => uint256)",
                                      "value": "balances"
                                    },
                                    "id": 8404,
                                    "name": "Identifier",
                                    "src": "880:8:35"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 8385,
                                      "type": "address",
                                      "value": "_from"
                                    },
                                    "id": 8405,
                                    "name": "Identifier",
                                    "src": "889:5:35"
                                  }
                                ],
                                "id": 8406,
                                "name": "IndexAccess",
                                "src": "880:15:35"
                              }
                            ],
                            "id": 8407,
                            "name": "BinaryOperation",
                            "src": "870:25:35"
                          }
                        ],
                        "id": 8408,
                        "name": "FunctionCall",
                        "src": "862:34:35"
                      }
                    ],
                    "id": 8409,
                    "name": "ExpressionStatement",
                    "src": "862:34:35"
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
                              "referencedDeclaration": 9788,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 8410,
                            "name": "Identifier",
                            "src": "902:7:35"
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
                              "operator": "<=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8389,
                                  "type": "uint256",
                                  "value": "_value"
                                },
                                "id": 8411,
                                "name": "Identifier",
                                "src": "910:6:35"
                              },
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
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "type": "mapping(address => uint256)"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 8383,
                                          "type": "mapping(address => mapping(address => uint256))",
                                          "value": "allowed"
                                        },
                                        "id": 8412,
                                        "name": "Identifier",
                                        "src": "920:7:35"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 8385,
                                          "type": "address",
                                          "value": "_from"
                                        },
                                        "id": 8413,
                                        "name": "Identifier",
                                        "src": "928:5:35"
                                      }
                                    ],
                                    "id": 8414,
                                    "name": "IndexAccess",
                                    "src": "920:14:35"
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
                                          "referencedDeclaration": 9785,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 8415,
                                        "name": "Identifier",
                                        "src": "935:3:35"
                                      }
                                    ],
                                    "id": 8416,
                                    "name": "MemberAccess",
                                    "src": "935:10:35"
                                  }
                                ],
                                "id": 8417,
                                "name": "IndexAccess",
                                "src": "920:26:35"
                              }
                            ],
                            "id": 8418,
                            "name": "BinaryOperation",
                            "src": "910:36:35"
                          }
                        ],
                        "id": 8419,
                        "name": "FunctionCall",
                        "src": "902:45:35"
                      }
                    ],
                    "id": 8420,
                    "name": "ExpressionStatement",
                    "src": "902:45:35"
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
                                  "referencedDeclaration": 8116,
                                  "type": "mapping(address => uint256)",
                                  "value": "balances"
                                },
                                "id": 8421,
                                "name": "Identifier",
                                "src": "954:8:35"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8385,
                                  "type": "address",
                                  "value": "_from"
                                },
                                "id": 8422,
                                "name": "Identifier",
                                "src": "963:5:35"
                              }
                            ],
                            "id": 8423,
                            "name": "IndexAccess",
                            "src": "954:15:35"
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
                                  "member_name": "sub",
                                  "referencedDeclaration": 8022,
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
                                          "referencedDeclaration": 8116,
                                          "type": "mapping(address => uint256)",
                                          "value": "balances"
                                        },
                                        "id": 8424,
                                        "name": "Identifier",
                                        "src": "972:8:35"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 8385,
                                          "type": "address",
                                          "value": "_from"
                                        },
                                        "id": 8425,
                                        "name": "Identifier",
                                        "src": "981:5:35"
                                      }
                                    ],
                                    "id": 8426,
                                    "name": "IndexAccess",
                                    "src": "972:15:35"
                                  }
                                ],
                                "id": 8427,
                                "name": "MemberAccess",
                                "src": "972:19:35"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8389,
                                  "type": "uint256",
                                  "value": "_value"
                                },
                                "id": 8428,
                                "name": "Identifier",
                                "src": "992:6:35"
                              }
                            ],
                            "id": 8429,
                            "name": "FunctionCall",
                            "src": "972:27:35"
                          }
                        ],
                        "id": 8430,
                        "name": "Assignment",
                        "src": "954:45:35"
                      }
                    ],
                    "id": 8431,
                    "name": "ExpressionStatement",
                    "src": "954:45:35"
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
                                  "referencedDeclaration": 8116,
                                  "type": "mapping(address => uint256)",
                                  "value": "balances"
                                },
                                "id": 8432,
                                "name": "Identifier",
                                "src": "1005:8:35"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8387,
                                  "type": "address",
                                  "value": "_to"
                                },
                                "id": 8433,
                                "name": "Identifier",
                                "src": "1014:3:35"
                              }
                            ],
                            "id": 8434,
                            "name": "IndexAccess",
                            "src": "1005:13:35"
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
                                  "referencedDeclaration": 8046,
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
                                          "referencedDeclaration": 8116,
                                          "type": "mapping(address => uint256)",
                                          "value": "balances"
                                        },
                                        "id": 8435,
                                        "name": "Identifier",
                                        "src": "1021:8:35"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 8387,
                                          "type": "address",
                                          "value": "_to"
                                        },
                                        "id": 8436,
                                        "name": "Identifier",
                                        "src": "1030:3:35"
                                      }
                                    ],
                                    "id": 8437,
                                    "name": "IndexAccess",
                                    "src": "1021:13:35"
                                  }
                                ],
                                "id": 8438,
                                "name": "MemberAccess",
                                "src": "1021:17:35"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8389,
                                  "type": "uint256",
                                  "value": "_value"
                                },
                                "id": 8439,
                                "name": "Identifier",
                                "src": "1039:6:35"
                              }
                            ],
                            "id": 8440,
                            "name": "FunctionCall",
                            "src": "1021:25:35"
                          }
                        ],
                        "id": 8441,
                        "name": "Assignment",
                        "src": "1005:41:35"
                      }
                    ],
                    "id": 8442,
                    "name": "ExpressionStatement",
                    "src": "1005:41:35"
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
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "mapping(address => uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 8383,
                                      "type": "mapping(address => mapping(address => uint256))",
                                      "value": "allowed"
                                    },
                                    "id": 8443,
                                    "name": "Identifier",
                                    "src": "1052:7:35"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 8385,
                                      "type": "address",
                                      "value": "_from"
                                    },
                                    "id": 8444,
                                    "name": "Identifier",
                                    "src": "1060:5:35"
                                  }
                                ],
                                "id": 8447,
                                "name": "IndexAccess",
                                "src": "1052:14:35"
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
                                      "referencedDeclaration": 9785,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 8445,
                                    "name": "Identifier",
                                    "src": "1067:3:35"
                                  }
                                ],
                                "id": 8446,
                                "name": "MemberAccess",
                                "src": "1067:10:35"
                              }
                            ],
                            "id": 8448,
                            "name": "IndexAccess",
                            "src": "1052:26:35"
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
                                  "member_name": "sub",
                                  "referencedDeclaration": 8022,
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
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "type": "mapping(address => uint256)"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 8383,
                                              "type": "mapping(address => mapping(address => uint256))",
                                              "value": "allowed"
                                            },
                                            "id": 8449,
                                            "name": "Identifier",
                                            "src": "1081:7:35"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 8385,
                                              "type": "address",
                                              "value": "_from"
                                            },
                                            "id": 8450,
                                            "name": "Identifier",
                                            "src": "1089:5:35"
                                          }
                                        ],
                                        "id": 8451,
                                        "name": "IndexAccess",
                                        "src": "1081:14:35"
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
                                              "referencedDeclaration": 9785,
                                              "type": "msg",
                                              "value": "msg"
                                            },
                                            "id": 8452,
                                            "name": "Identifier",
                                            "src": "1096:3:35"
                                          }
                                        ],
                                        "id": 8453,
                                        "name": "MemberAccess",
                                        "src": "1096:10:35"
                                      }
                                    ],
                                    "id": 8454,
                                    "name": "IndexAccess",
                                    "src": "1081:26:35"
                                  }
                                ],
                                "id": 8455,
                                "name": "MemberAccess",
                                "src": "1081:30:35"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8389,
                                  "type": "uint256",
                                  "value": "_value"
                                },
                                "id": 8456,
                                "name": "Identifier",
                                "src": "1112:6:35"
                              }
                            ],
                            "id": 8457,
                            "name": "FunctionCall",
                            "src": "1081:38:35"
                          }
                        ],
                        "id": 8458,
                        "name": "Assignment",
                        "src": "1052:67:35"
                      }
                    ],
                    "id": 8459,
                    "name": "ExpressionStatement",
                    "src": "1052:67:35"
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
                              "referencedDeclaration": 8273,
                              "type": "function (address,address,uint256)",
                              "value": "Transfer"
                            },
                            "id": 8460,
                            "name": "Identifier",
                            "src": "1125:8:35"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8385,
                              "type": "address",
                              "value": "_from"
                            },
                            "id": 8461,
                            "name": "Identifier",
                            "src": "1134:5:35"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8387,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 8462,
                            "name": "Identifier",
                            "src": "1141:3:35"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8389,
                              "type": "uint256",
                              "value": "_value"
                            },
                            "id": 8463,
                            "name": "Identifier",
                            "src": "1146:6:35"
                          }
                        ],
                        "id": 8464,
                        "name": "FunctionCall",
                        "src": "1125:28:35"
                      }
                    ],
                    "id": 8465,
                    "name": "ExpressionStatement",
                    "src": "1125:28:35"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 8393
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
                        "id": 8466,
                        "name": "Literal",
                        "src": "1166:4:35"
                      }
                    ],
                    "id": 8467,
                    "name": "Return",
                    "src": "1159:11:35"
                  }
                ],
                "id": 8468,
                "name": "Block",
                "src": "824:351:35"
              }
            ],
            "id": 8469,
            "name": "FunctionDefinition",
            "src": "736:439:35"
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
              "scope": 8615,
              "stateMutability": "nonpayable",
              "superFunction": 8233,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_spender",
                      "scope": 8497,
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
                        "id": 8470,
                        "name": "ElementaryTypeName",
                        "src": "1815:7:35"
                      }
                    ],
                    "id": 8471,
                    "name": "VariableDeclaration",
                    "src": "1815:16:35"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_value",
                      "scope": 8497,
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
                        "id": 8472,
                        "name": "ElementaryTypeName",
                        "src": "1833:7:35"
                      }
                    ],
                    "id": 8473,
                    "name": "VariableDeclaration",
                    "src": "1833:14:35"
                  }
                ],
                "id": 8474,
                "name": "ParameterList",
                "src": "1814:34:35"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 8497,
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
                        "id": 8475,
                        "name": "ElementaryTypeName",
                        "src": "1865:4:35"
                      }
                    ],
                    "id": 8476,
                    "name": "VariableDeclaration",
                    "src": "1865:4:35"
                  }
                ],
                "id": 8477,
                "name": "ParameterList",
                "src": "1864:6:35"
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
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "mapping(address => uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 8383,
                                      "type": "mapping(address => mapping(address => uint256))",
                                      "value": "allowed"
                                    },
                                    "id": 8478,
                                    "name": "Identifier",
                                    "src": "1877:7:35"
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
                                          "referencedDeclaration": 9785,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 8479,
                                        "name": "Identifier",
                                        "src": "1885:3:35"
                                      }
                                    ],
                                    "id": 8480,
                                    "name": "MemberAccess",
                                    "src": "1885:10:35"
                                  }
                                ],
                                "id": 8482,
                                "name": "IndexAccess",
                                "src": "1877:19:35"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8471,
                                  "type": "address",
                                  "value": "_spender"
                                },
                                "id": 8481,
                                "name": "Identifier",
                                "src": "1897:8:35"
                              }
                            ],
                            "id": 8483,
                            "name": "IndexAccess",
                            "src": "1877:29:35"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8473,
                              "type": "uint256",
                              "value": "_value"
                            },
                            "id": 8484,
                            "name": "Identifier",
                            "src": "1909:6:35"
                          }
                        ],
                        "id": 8485,
                        "name": "Assignment",
                        "src": "1877:38:35"
                      }
                    ],
                    "id": 8486,
                    "name": "ExpressionStatement",
                    "src": "1877:38:35"
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
                              "referencedDeclaration": 8241,
                              "type": "function (address,address,uint256)",
                              "value": "Approval"
                            },
                            "id": 8487,
                            "name": "Identifier",
                            "src": "1921:8:35"
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
                                  "referencedDeclaration": 9785,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 8488,
                                "name": "Identifier",
                                "src": "1930:3:35"
                              }
                            ],
                            "id": 8489,
                            "name": "MemberAccess",
                            "src": "1930:10:35"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8471,
                              "type": "address",
                              "value": "_spender"
                            },
                            "id": 8490,
                            "name": "Identifier",
                            "src": "1942:8:35"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8473,
                              "type": "uint256",
                              "value": "_value"
                            },
                            "id": 8491,
                            "name": "Identifier",
                            "src": "1952:6:35"
                          }
                        ],
                        "id": 8492,
                        "name": "FunctionCall",
                        "src": "1921:38:35"
                      }
                    ],
                    "id": 8493,
                    "name": "ExpressionStatement",
                    "src": "1921:38:35"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 8477
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
                        "id": 8494,
                        "name": "Literal",
                        "src": "1972:4:35"
                      }
                    ],
                    "id": 8495,
                    "name": "Return",
                    "src": "1965:11:35"
                  }
                ],
                "id": 8496,
                "name": "Block",
                "src": "1871:110:35"
              }
            ],
            "id": 8497,
            "name": "FunctionDefinition",
            "src": "1798:183:35"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "allowance",
              "payable": false,
              "scope": 8615,
              "stateMutability": "view",
              "superFunction": 8213,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_owner",
                      "scope": 8513,
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
                        "id": 8498,
                        "name": "ElementaryTypeName",
                        "src": "2319:7:35"
                      }
                    ],
                    "id": 8499,
                    "name": "VariableDeclaration",
                    "src": "2319:14:35"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_spender",
                      "scope": 8513,
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
                        "id": 8500,
                        "name": "ElementaryTypeName",
                        "src": "2335:7:35"
                      }
                    ],
                    "id": 8501,
                    "name": "VariableDeclaration",
                    "src": "2335:16:35"
                  }
                ],
                "id": 8502,
                "name": "ParameterList",
                "src": "2318:34:35"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 8513,
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
                        "id": 8503,
                        "name": "ElementaryTypeName",
                        "src": "2374:7:35"
                      }
                    ],
                    "id": 8504,
                    "name": "VariableDeclaration",
                    "src": "2374:7:35"
                  }
                ],
                "id": 8505,
                "name": "ParameterList",
                "src": "2373:9:35"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 8505
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
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "type": "mapping(address => uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8383,
                                  "type": "mapping(address => mapping(address => uint256))",
                                  "value": "allowed"
                                },
                                "id": 8506,
                                "name": "Identifier",
                                "src": "2396:7:35"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8499,
                                  "type": "address",
                                  "value": "_owner"
                                },
                                "id": 8507,
                                "name": "Identifier",
                                "src": "2404:6:35"
                              }
                            ],
                            "id": 8508,
                            "name": "IndexAccess",
                            "src": "2396:15:35"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8501,
                              "type": "address",
                              "value": "_spender"
                            },
                            "id": 8509,
                            "name": "Identifier",
                            "src": "2412:8:35"
                          }
                        ],
                        "id": 8510,
                        "name": "IndexAccess",
                        "src": "2396:25:35"
                      }
                    ],
                    "id": 8511,
                    "name": "Return",
                    "src": "2389:32:35"
                  }
                ],
                "id": 8512,
                "name": "Block",
                "src": "2383:43:35"
              }
            ],
            "id": 8513,
            "name": "FunctionDefinition",
            "src": "2300:126:35"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "increaseApproval",
              "payable": false,
              "scope": 8615,
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
                      "name": "_spender",
                      "scope": 8554,
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
                        "id": 8514,
                        "name": "ElementaryTypeName",
                        "src": "2909:7:35"
                      }
                    ],
                    "id": 8515,
                    "name": "VariableDeclaration",
                    "src": "2909:16:35"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_addedValue",
                      "scope": 8554,
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
                        "id": 8516,
                        "name": "ElementaryTypeName",
                        "src": "2927:4:35"
                      }
                    ],
                    "id": 8517,
                    "name": "VariableDeclaration",
                    "src": "2927:16:35"
                  }
                ],
                "id": 8518,
                "name": "ParameterList",
                "src": "2908:36:35"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 8554,
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
                        "id": 8519,
                        "name": "ElementaryTypeName",
                        "src": "2961:4:35"
                      }
                    ],
                    "id": 8520,
                    "name": "VariableDeclaration",
                    "src": "2961:4:35"
                  }
                ],
                "id": 8521,
                "name": "ParameterList",
                "src": "2960:6:35"
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
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "mapping(address => uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 8383,
                                      "type": "mapping(address => mapping(address => uint256))",
                                      "value": "allowed"
                                    },
                                    "id": 8522,
                                    "name": "Identifier",
                                    "src": "2973:7:35"
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
                                          "referencedDeclaration": 9785,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 8523,
                                        "name": "Identifier",
                                        "src": "2981:3:35"
                                      }
                                    ],
                                    "id": 8524,
                                    "name": "MemberAccess",
                                    "src": "2981:10:35"
                                  }
                                ],
                                "id": 8526,
                                "name": "IndexAccess",
                                "src": "2973:19:35"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8515,
                                  "type": "address",
                                  "value": "_spender"
                                },
                                "id": 8525,
                                "name": "Identifier",
                                "src": "2993:8:35"
                              }
                            ],
                            "id": 8527,
                            "name": "IndexAccess",
                            "src": "2973:29:35"
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
                                  "referencedDeclaration": 8046,
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
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "type": "mapping(address => uint256)"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 8383,
                                              "type": "mapping(address => mapping(address => uint256))",
                                              "value": "allowed"
                                            },
                                            "id": 8528,
                                            "name": "Identifier",
                                            "src": "3005:7:35"
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
                                                  "referencedDeclaration": 9785,
                                                  "type": "msg",
                                                  "value": "msg"
                                                },
                                                "id": 8529,
                                                "name": "Identifier",
                                                "src": "3013:3:35"
                                              }
                                            ],
                                            "id": 8530,
                                            "name": "MemberAccess",
                                            "src": "3013:10:35"
                                          }
                                        ],
                                        "id": 8531,
                                        "name": "IndexAccess",
                                        "src": "3005:19:35"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 8515,
                                          "type": "address",
                                          "value": "_spender"
                                        },
                                        "id": 8532,
                                        "name": "Identifier",
                                        "src": "3025:8:35"
                                      }
                                    ],
                                    "id": 8533,
                                    "name": "IndexAccess",
                                    "src": "3005:29:35"
                                  }
                                ],
                                "id": 8534,
                                "name": "MemberAccess",
                                "src": "3005:33:35"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8517,
                                  "type": "uint256",
                                  "value": "_addedValue"
                                },
                                "id": 8535,
                                "name": "Identifier",
                                "src": "3039:11:35"
                              }
                            ],
                            "id": 8536,
                            "name": "FunctionCall",
                            "src": "3005:46:35"
                          }
                        ],
                        "id": 8537,
                        "name": "Assignment",
                        "src": "2973:78:35"
                      }
                    ],
                    "id": 8538,
                    "name": "ExpressionStatement",
                    "src": "2973:78:35"
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
                              "referencedDeclaration": 8241,
                              "type": "function (address,address,uint256)",
                              "value": "Approval"
                            },
                            "id": 8539,
                            "name": "Identifier",
                            "src": "3057:8:35"
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
                                  "referencedDeclaration": 9785,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 8540,
                                "name": "Identifier",
                                "src": "3066:3:35"
                              }
                            ],
                            "id": 8541,
                            "name": "MemberAccess",
                            "src": "3066:10:35"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8515,
                              "type": "address",
                              "value": "_spender"
                            },
                            "id": 8542,
                            "name": "Identifier",
                            "src": "3078:8:35"
                          },
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
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "mapping(address => uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 8383,
                                      "type": "mapping(address => mapping(address => uint256))",
                                      "value": "allowed"
                                    },
                                    "id": 8543,
                                    "name": "Identifier",
                                    "src": "3088:7:35"
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
                                          "referencedDeclaration": 9785,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 8544,
                                        "name": "Identifier",
                                        "src": "3096:3:35"
                                      }
                                    ],
                                    "id": 8545,
                                    "name": "MemberAccess",
                                    "src": "3096:10:35"
                                  }
                                ],
                                "id": 8546,
                                "name": "IndexAccess",
                                "src": "3088:19:35"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8515,
                                  "type": "address",
                                  "value": "_spender"
                                },
                                "id": 8547,
                                "name": "Identifier",
                                "src": "3108:8:35"
                              }
                            ],
                            "id": 8548,
                            "name": "IndexAccess",
                            "src": "3088:29:35"
                          }
                        ],
                        "id": 8549,
                        "name": "FunctionCall",
                        "src": "3057:61:35"
                      }
                    ],
                    "id": 8550,
                    "name": "ExpressionStatement",
                    "src": "3057:61:35"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 8521
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
                        "id": 8551,
                        "name": "Literal",
                        "src": "3131:4:35"
                      }
                    ],
                    "id": 8552,
                    "name": "Return",
                    "src": "3124:11:35"
                  }
                ],
                "id": 8553,
                "name": "Block",
                "src": "2967:173:35"
              }
            ],
            "id": 8554,
            "name": "FunctionDefinition",
            "src": "2883:257:35"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "decreaseApproval",
              "payable": false,
              "scope": 8615,
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
                      "name": "_spender",
                      "scope": 8614,
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
                        "id": 8555,
                        "name": "ElementaryTypeName",
                        "src": "3628:7:35"
                      }
                    ],
                    "id": 8556,
                    "name": "VariableDeclaration",
                    "src": "3628:16:35"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_subtractedValue",
                      "scope": 8614,
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
                        "id": 8557,
                        "name": "ElementaryTypeName",
                        "src": "3646:4:35"
                      }
                    ],
                    "id": 8558,
                    "name": "VariableDeclaration",
                    "src": "3646:21:35"
                  }
                ],
                "id": 8559,
                "name": "ParameterList",
                "src": "3627:41:35"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 8614,
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
                        "id": 8560,
                        "name": "ElementaryTypeName",
                        "src": "3685:4:35"
                      }
                    ],
                    "id": 8561,
                    "name": "VariableDeclaration",
                    "src": "3685:4:35"
                  }
                ],
                "id": 8562,
                "name": "ParameterList",
                "src": "3684:6:35"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        8564
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "oldValue",
                          "scope": 8614,
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
                            "id": 8563,
                            "name": "ElementaryTypeName",
                            "src": "3697:4:35"
                          }
                        ],
                        "id": 8564,
                        "name": "VariableDeclaration",
                        "src": "3697:13:35"
                      },
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
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "type": "mapping(address => uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8383,
                                  "type": "mapping(address => mapping(address => uint256))",
                                  "value": "allowed"
                                },
                                "id": 8565,
                                "name": "Identifier",
                                "src": "3713:7:35"
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
                                      "referencedDeclaration": 9785,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 8566,
                                    "name": "Identifier",
                                    "src": "3721:3:35"
                                  }
                                ],
                                "id": 8567,
                                "name": "MemberAccess",
                                "src": "3721:10:35"
                              }
                            ],
                            "id": 8568,
                            "name": "IndexAccess",
                            "src": "3713:19:35"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8556,
                              "type": "address",
                              "value": "_spender"
                            },
                            "id": 8569,
                            "name": "Identifier",
                            "src": "3733:8:35"
                          }
                        ],
                        "id": 8570,
                        "name": "IndexAccess",
                        "src": "3713:29:35"
                      }
                    ],
                    "id": 8571,
                    "name": "VariableDeclarationStatement",
                    "src": "3697:45:35"
                  },
                  {
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
                              "referencedDeclaration": 8558,
                              "type": "uint256",
                              "value": "_subtractedValue"
                            },
                            "id": 8572,
                            "name": "Identifier",
                            "src": "3752:16:35"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8564,
                              "type": "uint256",
                              "value": "oldValue"
                            },
                            "id": 8573,
                            "name": "Identifier",
                            "src": "3771:8:35"
                          }
                        ],
                        "id": 8574,
                        "name": "BinaryOperation",
                        "src": "3752:27:35"
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
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "type": "mapping(address => uint256)"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 8383,
                                              "type": "mapping(address => mapping(address => uint256))",
                                              "value": "allowed"
                                            },
                                            "id": 8575,
                                            "name": "Identifier",
                                            "src": "3789:7:35"
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
                                                  "referencedDeclaration": 9785,
                                                  "type": "msg",
                                                  "value": "msg"
                                                },
                                                "id": 8576,
                                                "name": "Identifier",
                                                "src": "3797:3:35"
                                              }
                                            ],
                                            "id": 8577,
                                            "name": "MemberAccess",
                                            "src": "3797:10:35"
                                          }
                                        ],
                                        "id": 8579,
                                        "name": "IndexAccess",
                                        "src": "3789:19:35"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 8556,
                                          "type": "address",
                                          "value": "_spender"
                                        },
                                        "id": 8578,
                                        "name": "Identifier",
                                        "src": "3809:8:35"
                                      }
                                    ],
                                    "id": 8580,
                                    "name": "IndexAccess",
                                    "src": "3789:29:35"
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
                                    "id": 8581,
                                    "name": "Literal",
                                    "src": "3821:1:35"
                                  }
                                ],
                                "id": 8582,
                                "name": "Assignment",
                                "src": "3789:33:35"
                              }
                            ],
                            "id": 8583,
                            "name": "ExpressionStatement",
                            "src": "3789:33:35"
                          }
                        ],
                        "id": 8584,
                        "name": "Block",
                        "src": "3781:48:35"
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
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "type": "mapping(address => uint256)"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 8383,
                                              "type": "mapping(address => mapping(address => uint256))",
                                              "value": "allowed"
                                            },
                                            "id": 8585,
                                            "name": "Identifier",
                                            "src": "3843:7:35"
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
                                                  "referencedDeclaration": 9785,
                                                  "type": "msg",
                                                  "value": "msg"
                                                },
                                                "id": 8586,
                                                "name": "Identifier",
                                                "src": "3851:3:35"
                                              }
                                            ],
                                            "id": 8587,
                                            "name": "MemberAccess",
                                            "src": "3851:10:35"
                                          }
                                        ],
                                        "id": 8589,
                                        "name": "IndexAccess",
                                        "src": "3843:19:35"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 8556,
                                          "type": "address",
                                          "value": "_spender"
                                        },
                                        "id": 8588,
                                        "name": "Identifier",
                                        "src": "3863:8:35"
                                      }
                                    ],
                                    "id": 8590,
                                    "name": "IndexAccess",
                                    "src": "3843:29:35"
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
                                          "member_name": "sub",
                                          "referencedDeclaration": 8022,
                                          "type": "function (uint256,uint256) pure returns (uint256)"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 8564,
                                              "type": "uint256",
                                              "value": "oldValue"
                                            },
                                            "id": 8591,
                                            "name": "Identifier",
                                            "src": "3875:8:35"
                                          }
                                        ],
                                        "id": 8592,
                                        "name": "MemberAccess",
                                        "src": "3875:12:35"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 8558,
                                          "type": "uint256",
                                          "value": "_subtractedValue"
                                        },
                                        "id": 8593,
                                        "name": "Identifier",
                                        "src": "3888:16:35"
                                      }
                                    ],
                                    "id": 8594,
                                    "name": "FunctionCall",
                                    "src": "3875:30:35"
                                  }
                                ],
                                "id": 8595,
                                "name": "Assignment",
                                "src": "3843:62:35"
                              }
                            ],
                            "id": 8596,
                            "name": "ExpressionStatement",
                            "src": "3843:62:35"
                          }
                        ],
                        "id": 8597,
                        "name": "Block",
                        "src": "3835:77:35"
                      }
                    ],
                    "id": 8598,
                    "name": "IfStatement",
                    "src": "3748:164:35"
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
                              "referencedDeclaration": 8241,
                              "type": "function (address,address,uint256)",
                              "value": "Approval"
                            },
                            "id": 8599,
                            "name": "Identifier",
                            "src": "3917:8:35"
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
                                  "referencedDeclaration": 9785,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 8600,
                                "name": "Identifier",
                                "src": "3926:3:35"
                              }
                            ],
                            "id": 8601,
                            "name": "MemberAccess",
                            "src": "3926:10:35"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8556,
                              "type": "address",
                              "value": "_spender"
                            },
                            "id": 8602,
                            "name": "Identifier",
                            "src": "3938:8:35"
                          },
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
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "mapping(address => uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 8383,
                                      "type": "mapping(address => mapping(address => uint256))",
                                      "value": "allowed"
                                    },
                                    "id": 8603,
                                    "name": "Identifier",
                                    "src": "3948:7:35"
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
                                          "referencedDeclaration": 9785,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 8604,
                                        "name": "Identifier",
                                        "src": "3956:3:35"
                                      }
                                    ],
                                    "id": 8605,
                                    "name": "MemberAccess",
                                    "src": "3956:10:35"
                                  }
                                ],
                                "id": 8606,
                                "name": "IndexAccess",
                                "src": "3948:19:35"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8556,
                                  "type": "address",
                                  "value": "_spender"
                                },
                                "id": 8607,
                                "name": "Identifier",
                                "src": "3968:8:35"
                              }
                            ],
                            "id": 8608,
                            "name": "IndexAccess",
                            "src": "3948:29:35"
                          }
                        ],
                        "id": 8609,
                        "name": "FunctionCall",
                        "src": "3917:61:35"
                      }
                    ],
                    "id": 8610,
                    "name": "ExpressionStatement",
                    "src": "3917:61:35"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 8562
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
                        "id": 8611,
                        "name": "Literal",
                        "src": "3991:4:35"
                      }
                    ],
                    "id": 8612,
                    "name": "Return",
                    "src": "3984:11:35"
                  }
                ],
                "id": 8613,
                "name": "Block",
                "src": "3691:309:35"
              }
            ],
            "id": 8614,
            "name": "FunctionDefinition",
            "src": "3602:398:35"
          }
        ],
        "id": 8615,
        "name": "ContractDefinition",
        "src": "344:3659:35"
      }
    ],
    "id": 8616,
    "name": "SourceUnit",
    "src": "0:4004:35"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-04-25T07:03:31.178Z"
}