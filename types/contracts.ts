import * as BigNumber from "bignumber.js";
import * as Web3 from "web3";
import {
    Address,
    Bytes32,
    Log,
    UInt,
} from "./common";

export type TransactionOptions = Partial<Transaction>;
export type PayableTransactionOptions = Partial<PayableTransaction>;

interface Transaction {
  hash: string;
  nonce: number;
  blockHash: string | null;
  blockNumber: number | null;
  transactionIndex: number | null;
  from: Address | ContractInstance;
  to: string | null;
  gasPrice: UInt;
  gas: number;
  input: string;
}

export interface TransactionReturnPayload {
    tx: string;
    receipt: TransactionReceipt;
    logs: TransactionLog[];
}

interface TransactionReceipt {
    transactionHash: string;
    transactionIndex: UInt;
    blockHash: string;
    blockNumber: UInt;
    gasUsed: UInt;
    cumulativeGasUsed: UInt;
    contractAddress: Address;
    logs: TransactionLog[];
    status: UInt;
}

interface TransactionLog extends Log {
    logIndex: UInt;
    transactionIndex: UInt;
    transactionHash: string;
    blockHash: string;
    blockNumber: UInt;
    address: string;
    type: string;
}

interface PayableTransaction extends Transaction {
  value: UInt;
}

interface ContractInstance {
  address: string;
  sendTransaction(options?: PayableTransactionOptions): Promise<TransactionReturnPayload>;
}

interface Contract<T> {
  "new"(...args: any[]): Promise<T>;
  deployed(): Promise<T>;
  at(address: string): T;
}

export interface Artifacts {
    require(name: "Migrations"): Contract<MigrationsContractInstance>;
    require(name: "PermissionsLib"): Contract<PermissionsLibraryContractInstance>;
    require(name: "DummyContract"): Contract<DummyContractInstance>;
    require(name: "DebtRegistry"): Contract<DebtRegistryContractInstance>;
    require(name: "DebtToken"): Contract<DebtTokenContractInstance>;
}

export interface MigrationsContractInstance extends ContractInstance {
    setCompleted(completed: UInt, options?: Transaction): Promise<void>;
    upgrade(newAddress: Address): Promise<void>;
}

export interface PermissionsLibraryContractInstance extends ContractInstance {
    authorize(
        permissions: Bytes32,
        agent: Address,
        options?: TransactionOptions,
    ): Promise<TransactionReturnPayload>;
    revokeAuthorization(
        permissions: Bytes32,
        agent: Address,
        options?: TransactionOptions,
    ): Promise<TransactionReturnPayload>;
    isAuthorized(
        permissions: Bytes32,
        agent: Address,
        options?: TransactionOptions,
    ): Promise<boolean>;
    getAuthorizedAgents(
        permissions: Bytes32,
        options?: TransactionOptions,
    ): Promise<Address[]>;
}

export interface DummyContractInstance extends ContractInstance {
    authorizeInFirstSet(agent: Address): Promise<TransactionReturnPayload>;
    authorizeInSecondSet(agent: Address): Promise<TransactionReturnPayload>;
    revokeInFirstSet(agent: Address): Promise<TransactionReturnPayload>;
    revokeInSecondSet(agent: Address): Promise<TransactionReturnPayload>;
    isAuthorizedInFirstSet(agent: Address): Promise<boolean>;
    isAuthorizedInSecondSet(agent: Address): Promise<boolean>;
    getFirstSetAuthorizedAgents(): Promise<Address[]>;
    getSecondSetAuthorizedAgents(): Promise<Address[]>;
}

export interface OwnableContractInstance extends ContractInstance {
    owner(): Promise<Address>;
    transferOwnership(newOwner: Address, options?: TransactionOptions):
        Promise<TransactionReturnPayload>;
}

export interface DebtRegistryContractInstance extends OwnableContractInstance {
    insert(
        version: string,
        creditor: Address,
        termsContract: Address,
        termsContractParameters: string,
        salt: UInt,
        options?: TransactionOptions,
    ): Promise<TransactionReturnPayload>;
    modifyCreditor(
        entryHash: Bytes32,
        newCreditor: Address,
        options?: TransactionOptions,
    ): Promise<TransactionReturnPayload>;
    addAuthorizedInsertAgent(agent: Address, options?: TransactionOptions):
        Promise<TransactionReturnPayload>;
    addAuthorizedEditAgent(agent: Address, options?: TransactionOptions):
        Promise<TransactionReturnPayload>;
    revokeInsertAgentAuthorization(agent: Address, options?: TransactionOptions):
        Promise<TransactionReturnPayload>;
    revokeEditAgentAuthorization(agent: Address, options?: TransactionOptions):
        Promise<TransactionReturnPayload>;
    getAuthorizedInsertAgents(): Promise<Address[]>;
    getAuthorizedEditAgents(): Promise<Address[]>;
    get(entryHash: Bytes32): Promise<any>;
    getTermsContractParametersHash(entryHash: Bytes32): Promise<Bytes32>;
}

export interface NonFungibleTokenContractInstance extends ContractInstance {
    name(): Promise<string>;
    symbol(): Promise<string>;
    totalSupply(): Promise<UInt>;
    balanceOf(owner: Address): Promise<UInt>;
    ownerOf(tokenId: UInt): Promise<Address>;
    isERC721(): Promise<boolean>;
    approve(to: Address, tokenId: UInt, options?: TransactionOptions):
        Promise<TransactionReturnPayload>;
    transfer(to: Address, tokenId: UInt, options?: TransactionOptions):
        Promise<TransactionReturnPayload>;
    transferFrom(from: Address, to: Address, tokenId: UInt, options?: TransactionOptions):
        Promise<TransactionReturnPayload>;
    tokenOfOwnerByIndex(owner: Address, index: UInt): Promise<UInt>;
    tokenMetadata(tokenId: UInt): Promise<string>;
}

export interface DebtTokenContractInstance extends NonFungibleTokenContractInstance {
    getTermsContract(): Promise<Address>;
}
