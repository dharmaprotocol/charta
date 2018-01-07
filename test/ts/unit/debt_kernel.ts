import {BigNumber} from "bignumber.js";

import * as ABIDecoder from "abi-decoder";
import * as chai from "chai";
import * as _ from "lodash";
import * as moment from "moment";
import * as Web3 from "web3";
import * as Units from "../test_utils/units";
import * as utils from "../test_utils/utils";

import {LogDebtIssuance, LogTermBegin} from "../logs/debt_kernel";

import {DebtKernelContract} from "../../../types/generated/debt_kernel";
import {DebtRegistryContract} from "../../../types/generated/debt_registry";
import {DebtTokenContract} from "../../../types/generated/debt_token";
import {RepaymentRouterContract} from "../../../types/generated/repayment_router";

import {ZeroEx} from "0x.js";
import {ZeroX_DummyTokenContract} from "../../../types/generated/zerox_dummytoken";
import {ZeroX_ExchangeContract} from "../../../types/generated/zerox_exchange";
import {ZeroX_TokenRegistryContract} from "../../../types/generated/zerox_tokenregistry";
import {ZeroX_TokenTransferProxyContract} from "../../../types/generated/zerox_tokentransferproxy";

import {IssuanceCommitment, SignedIssuanceCommitment} from "../../../types/kernel/issuance_commitment";
import {DebtOrder, SignedDebtOrder} from "../../../types/kernel/debt_order";
import {BigNumberSetup} from "../test_utils/bignumber_setup";
import ChaiSetup from "../test_utils/chai_setup";
import {INVALID_OPCODE, REVERT_ERROR} from "../test_utils/constants";

import {TxDataPayable} from "types/common";

// Configure BigNumber exponentiation
BigNumberSetup.configure();

// Set up Chai
ChaiSetup.configure();
const expect = chai.expect;

const debtKernelContract = artifacts.require("DebtKernel");

contract("Debt Kernel (Unit Tests)", async (ACCOUNTS) => {

});
