import * as Web3 from "web3";
import {Artifacts} from "./contracts";
import {Address, UInt} from "./common";

declare type ContractTest = (accounts: Address[]) => void;
declare type ExecutionBlock = () => void;

declare global {
  function contract(name: string, test: ContractTest): void;
  function before(executionBlock: ExecutionBlock | Promise<void>): void;
  function beforeEach(executionBlock: ExecutionBlock | Promise<void>): void;
  function describe(name: string, executionBlock: ExecutionBlock | Promise<void>): void;
  function it(name: string, executionBlock?: ExecutionBlock | Promise<void>): void;

  var artifacts: Artifacts;
  var web3: Web3;
}
