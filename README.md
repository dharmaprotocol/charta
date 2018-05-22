<img src="https://s3-us-west-2.amazonaws.com/dharma-assets/logo+orange.png"  width=300/>

------------

> 'Charta' is the latin word for 'letter or document'.  We loosely appropriate this term as a codename for the smart contracts comprising the business logic of Dharma protocol.


[Dharma](https://dharma.io) is a protocol for generic tokenized debt issuance and fundraising on blockchains supporting requisite smart contract functionality (i.e. EVM blockchains).  For a full description of the protocol's mechanics, a thorough overview can be found in the [Dharma Protocol Whitepaper](https://whitepaper.dharma.io/).  This repository contains the core contracts that compromise the business logic for issuing and administering debt crypto-assets on-chain.

We use truffle for deployment, testing, and development, and use [Typescript](https://www.typescriptlang.org/) for testing and deployment.

[Join us on our chat](https://chat.dharma.io) for any technical or general questions.

### Deployed Contracts
---------------
##### Ethereum Mainnet
- DebtKernel: `0x8ef1351941d0cd8da09d5a4c74f2d64503031a18`
- DebtToken: `0xf7b3fc555c458c46d288ffd049ddbfb09f706df7`
- DebtRegistry: `0x4e0f2b97307ad60b741f993c052733acc1ea5811`
- TokenTransferProxy: `0x2f40766e91aaee4794d3389ac8dc3a4b8fd7ab3e`
- DharmaMultiSigWallet: `0x9445d5ddc2d8a3663ce8cc9fe74009f99b343cfc`
- RepaymentRouter: `0xc1df9b92645cc3b6733992c692a39c34a86fae5f`
- TokenRegistry: `0xd79396ab3bfaaa0d9f6d11f95bb641601d93c0a9`
- SimpleInterestTermsContract: `0xb78a7d1c1d03cf9155cc522097cbc679e15cf9a3`
- CollateralizedSimpleInterestTermsContract: `0x5de2538838b4eb7fa2dbdea09d642b88546e5f20`
- Collateralizer: `0xecc718386176d714dc9e4e35e177396b291499ee`
- PermissionsLib: `0xba0d793fb316d7a457b758e75a57e22ee14bc188`
- ContractRegistry: `0x10512440113cb6cb613be403135876d2e0a42c0b`

##### Kovan Testnet
- DebtKernel: `0x755e131019e5ab3e213dc269a4020e3e82e06e20`
- DebtToken: `0x12c8615fd55bf6e1f5a298cebdc72e50f838df74`
- DebtRegistry: `0x9662d6cae0e6914a388cb96c1c161cc4d12c3d7a`
- TokenTransferProxy: `0x668beab2e4dfec1d8c0a70fb5e52987cb22c2f1a`
- DharmaMultiSigWallet: `0x5e6d80063af17bf22b6828a7a61693ec37881563`
- RepaymentRouter: `0x0688659d5e36896da7e5d44ebe3e10aa9d2c9968`
- TokenRegistry: `0x6949948d93f3dbe50ec2fe54815fa33bfa284d35`
- SimpleInterestTermsContract: `0x4cad7ad79464628c07227928c851d3bc5ef3da0c`
- CollateralizedSimpleInterestTermsContract: `0x13763cf3eb3b6813fa800d4935725a0504c8eb8f`
- Collateralizer: `0x4b86bbe375577262cb0b3b7893e3de0d11751dd6`
- PermissionsLib: `0x0e7e2aace2ed2565777b420fd181b556971a8cb1`
- ContractRegistry: `0x506acb19a451cc6e2a5c76e65f6b65840406e5f9`

### Setup
---------------
##### Dependencies

Install dependencies:
```
yarn install
```

##### Testing

Start `testrpc`:
```
yarn chain
```
Run `truffle` tests:
```
yarn test
```


### Contract Architecture
A specification of the contracts comprising Dharma protocol's logic
can be found in the [Dharma wiki](https://github.com/dharmaprotocol/charta/wiki).
