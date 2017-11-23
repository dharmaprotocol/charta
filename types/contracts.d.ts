import * as Web3 from "web3";
import * as BigNumber from "bignumber.js";

type Address = string;
type TransactionOptions = Partial<Transaction>;
type PayableTransactionOptions = Partial<PayableTransaction>;
type UInt = number | BigNumber.BigNumber;

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
    require(name: "TestContract"): Contract<TestContractInstance>;
}

export interface MigrationsContractInstance extends ContractInstance {
    setCompleted(completed: UInt, options?: Transaction): Promise<void>;
    upgrade(new_address: Address): Promise<void>;
}

export interface TestContractInstance extends ContractInstance {
    count: UInt;
    someValue: Boolean;
    counterWithOffset(
        offset: UInt,
        options?: TransactionOptions
    ): Promise<BigNumber.BigNumber>;
    returnAll(options?: TransactionOptions): Promise<[BigNumber.BigNumber, BigNumber.BigNumber]>;
    countUp(options?: PayableTransactionOptions): Promise<void>;
}
