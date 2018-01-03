import * as Web3 from "web3";
import {Address, UInt} from "./common";

declare type ContractTest = (accounts: Address[]) => void;
declare type ExecutionBlock = () => void;
declare type AsyncExecutionBlock = (done: () => void) => void;

interface Artifacts {
    require(name: string): Web3.ContractInstance;
}

declare global {
  function contract(name: string, test: ContractTest): void;
  function after(executionBlock: ExecutionBlock | AsyncExecutionBlock | Promise<void>): void;
  function before(executionBlock: ExecutionBlock | AsyncExecutionBlock | Promise<void>): void;
  function beforeEach(executionBlock: ExecutionBlock | Promise<void>): void;
  function describe(name: string, executionBlock: ExecutionBlock | Promise<void>): void;
  function it(name: string, executionBlock?: ExecutionBlock | Promise<void>): void;

  var artifacts: Artifacts;
  var web3: Web3;

  var chaiIsConfigured: boolean;
}
