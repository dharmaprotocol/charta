import * as Web3 from "web3";
import * as BigNumber from "bignumber.js";
import {
    Address,
    UInt
} from 'types/global';

type TransactionOptions = Partial<Transaction>;
type PayableTransactionOptions = Partial<PayableTransaction>;

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

interface PayableTransaction extends Transaction {
  value: UInt;
}

interface ContractInstance {
  address: string;
  sendTransaction(options?: PayableTransactionOptions): Promise<void>;
}

interface Contract<T> {
  "new"(...args: any[]): Promise<T>;
  deployed(): Promise<T>;
  at(address: string): T;
}

export interface Artifacts {
    require(name: "Migrations"): Contract<MigrationsContractInstance>;
    require(name: "Permissions"): Contract<PermissionsLibraryContractInstance>;
    require(name: "DummyContract"): Contract<DummyContractInstance>;
    require(name: "DebtRegistry"): Contract<DebtRegistryContractInstance>;
}

export interface MigrationsContractInstance extends ContractInstance {
    setCompleted(completed: UInt, options?: Transaction): Promise<void>;
    upgrade(new_address: Address): Promise<void>;
}

export interface PermissionsLibraryContractInstance extends ContractInstance {
    authorize(agent: Address, options?: TransactionOptions): Promise<void>;
    isAuthorized(agent: Address, options?: TransactionOptions): Promise<Boolean>;
    getAuthorizedAgents(options?: TransactionOptions): Promise<Address[]>;
}

export interface DummyContractInstance extends ContractInstance {
    authorizeFirstPermissionSet(agent: Address): Promise<void>;
    authorizeSecondPermissionSet(agent: Address): Promise<void>;
    isAuthorizedInFirstPermissionSet(agent: Address): Promise<Boolean>;
    isAuthorizedInSecondPermissionSet(agent: Address): Promise<Boolean>;
    getFirstPermissionSetAuthorizedAgents(): Promise<Address[]>;
    getSecondPermissionSetAuthorizedAgents(): Promise<Address[]>;
}

export interface DebtRegistryContractInstance extends ContractInstance {

}
