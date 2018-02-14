import * as ABIDecoder from "abi-decoder";
import * as chai from "chai";
import * as _ from "lodash";
import * as Units from "../test_utils/units";

import {BigNumber} from "bignumber.js";

import {RepaymentRouterContract} from "../../../types/generated/repayment_router";
import {SimpleInterestTermsContractContract} from "../../../types/generated/simple_interest_terms_contract";
import {MockDebtRegistryContract} from "../../../types/generated/mock_debt_registry";
import {MockERC20TokenContract} from "../../../types/generated/mock_e_r_c20_token";
import {MockTokenTransferProxyContract} from "../../../types/generated/mock_token_transfer_proxy";

import {RepaymentRouterErrorCodes} from "../../../types/errors";

import {BigNumberSetup} from "../test_utils/bignumber_setup";
import ChaiSetup from "../test_utils/chai_setup";
import {INVALID_OPCODE, REVERT_ERROR} from "../test_utils/constants";

import {LogError, LogNFTRepayment, LogRepayment} from "../logs/repayment_router";

// Set up Chai
ChaiSetup.configure();
const expect = chai.expect;

// Configure BigNumber exponentiation
BigNumberSetup.configure();

const repaymentRouterContract = artifacts.require("RepaymentRouter");
const simpleInterestTermsContract = artifacts.require("SimpleInterestTermsContract");

contract("SimpleInterestTermsContract (Unit Tests)", async (ACCOUNTS) => {
    let termsContract: SimpleInterestTermsContractContract;
    let router: RepaymentRouterContract;
    let mockToken: MockERC20TokenContract;
    let mockRegistry: MockDebtRegistryContract;
    let mockTokenTransferProxy: MockTokenTransferProxyContract;

    const CONTRACT_OWNER = ACCOUNTS[0];
    const PAYER = ACCOUNTS[1];
    const BENEFICIARY = ACCOUNTS[2];

    const TERMS_CONTRACT_PARAMETERS =
        web3.sha3("any 32 byte hex value can represent the terms contract's parameters");
    const ARBITRARY_AGREEMENT_ID =
        web3.sha3("any 32 byte hex value can represent an agreement id");

    const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";

    const TX_DEFAULTS = { from: CONTRACT_OWNER, gas: 4000000 };

    before(async () => {
        mockRegistry = await MockDebtRegistryContract.deployed(web3, TX_DEFAULTS);
        mockToken = await MockERC20TokenContract.deployed(web3, TX_DEFAULTS);
        mockTokenTransferProxy = await MockTokenTransferProxyContract.deployed(web3, TX_DEFAULTS);

        const repaymentRouterTruffle = await repaymentRouterContract.new(
          mockRegistry.address,
          mockTokenTransferProxy.address
        );

        const termsContractTruffle = await simpleInterestTermsContract.new(
            mockRegistry.address,
            mockToken.address,
            repaymentRouterTruffle.address,
        );

        // The typings we use ingest vanilla Web3 contracts, so we convert the
        // contract instance deployed by truffle into a Web3 contract instance
        const repaymentRouterWeb3Contract =
            web3.eth.contract(repaymentRouterTruffle.abi).at(repaymentRouterTruffle.address);

        const termsContractWeb3Contract =
            web3.eth.contract(simpleInterestTermsContract.abi).at(termsContractTruffle.address);

        router = new RepaymentRouterContract(repaymentRouterWeb3Contract, TX_DEFAULTS);
        termsContract = new SimpleInterestTermsContractContract(termsContractWeb3Contract, TX_DEFAULTS);
    });

  });
