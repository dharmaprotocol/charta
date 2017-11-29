import * as Web3 from "web3";
import {Artifacts} from "./contracts";

declare type Address = string;
declare type UInt = number | BigNumber.BigNumber;
declare type ECDSASignature = [UInt, string, string];

declare type ContractTest = (accounts: Address[]) => void;
declare type ExecutionBlock = () => void;

declare global {
  function contract(name: string, test: ContractTest): void;
  function before(executionBlock: ExecutionBlock): void;
  function beforeEach(executionBlock: ExecutionBlock): void;
  function describe(name: string, executionBlock: ExecutionBlock): void;
  function it(name: string, executionBlock: ExecutionBlock): void;

  var artifacts: Artifacts;
  var web3: Web3;
}
