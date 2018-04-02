import * as ABIDecoder from "abi-decoder";
import * as Units from "../../test_utils/units";
import * as Web3 from "web3";
import * as _ from "lodash";
import * as chai from "chai";
import * as moment from "moment";
import * as utils from "../../test_utils/utils";

// Types
import { DebtOrder, SignedDebtOrder } from "../../../../types/kernel/debt_order";
import {
    IssuanceCommitment,
    SignedIssuanceCommitment,
} from "../../../../types/kernel/issuance_commitment";

// Test Utils
import { LogApproval, LogMint, LogTransfer } from "../../logs/debt_token";
import { LogDebtOrderFilled, LogError } from "../../logs/debt_kernel";
import { LogInsertEntry, LogModifyEntryBeneficiary } from "../../logs/debt_registry";
import { SimpleInterestParameters } from "../../factories/terms_contract_parameters";

// Wrappers
import { BigNumber } from "bignumber.js";
import { BigNumberSetup } from "../../test_utils/bignumber_setup";
import ChaiSetup from "../../test_utils/chai_setup";
import { DebtKernelContract } from "../../../../types/generated/debt_kernel";
import { DebtKernelErrorCodes } from "../../../../types/errors";
import { DebtOrderFactory } from "../../factories/debt_order_factory";
import { DebtRegistryContract } from "../../../../types/generated/debt_registry";
import { DebtRegistryEntry } from "../../../../types/registry/entry";
import { DebtTokenContract } from "../../../../types/generated/debt_token";
import { DummyTokenContract } from "../../../../types/generated/dummy_token";
import { IncompatibleTermsContractContract } from "../../../../types/generated/incompatible_terms_contract";
import { RepaymentRouterContract } from "../../../../types/generated/repayment_router";
import { SimpleInterestTermsContractContract } from "../../../../types/generated/simple_interest_terms_contract";
import { TokenRegistryContract } from "../../../../types/generated/token_registry";
import { TokenTransferProxyContract } from "../../../../types/generated/token_transfer_proxy";
import { TxDataPayable } from "../../../../types/common";

// Constants
import { INVALID_OPCODE, REVERT_ERROR } from "../../test_utils/constants";

// Configure BigNumber exponentiation
BigNumberSetup.configure();

// Set up Chai
ChaiSetup.configure();
const expect = chai.expect;

const debtKernelContract = artifacts.require("DebtKernel");

contract("Simple Interest Terms Contract (Integration Tests)", async (ACCOUNTS) => {
    let kernel: DebtKernelContract;
    let repaymentRouter: RepaymentRouterContract;
    let simpleInterestTermsContract: SimpleInterestTermsContractContract;
    let tokenTransferProxy: TokenTransferProxyContract;
    let debtTokenContract: DebtTokenContract;
    let debtRegistryContract: DebtRegistryContract;

    let dummyREPToken: DummyTokenContract;

    let incompatibleTermsContractAddress: string;

    let defaultOrderParams: { [key: string]: any };
    let orderFactory: DebtOrderFactory;

    const CONTRACT_OWNER = ACCOUNTS[0];
    const ATTACKER = ACCOUNTS[1];

    const ISSUER_1 = ACCOUNTS[2];
    const ISSUER_2 = ACCOUNTS[3];
    const ISSUER_3 = ACCOUNTS[4];
    const ISSUERS = [ISSUER_1, ISSUER_2, ISSUER_3];

    const DEBTOR_1 = ACCOUNTS[5];
    const DEBTOR_2 = ACCOUNTS[6];
    const DEBTOR_3 = ACCOUNTS[7];
    const DEBTORS = [DEBTOR_1, DEBTOR_2, DEBTOR_3];

    const CREDITOR_1 = ACCOUNTS[8];
    const CREDITOR_2 = ACCOUNTS[9];
    const CREDITOR_3 = ACCOUNTS[10];
    const CREDITORS = [CREDITOR_1, CREDITOR_2, CREDITOR_3];

    const UNDERWRITER = ACCOUNTS[11];
    const RELAYER = ACCOUNTS[12];

    const MALICIOUS_TERMS_CONTRACTS = ACCOUNTS[13];

    const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";

    const TX_DEFAULTS = { from: CONTRACT_OWNER, gas: 4712388 };

    const reset = async () => {
        const dummyTokenRegistryContract = await TokenRegistryContract.deployed(web3, TX_DEFAULTS);

        const dummyREPTokenAddress = await dummyTokenRegistryContract.getTokenAddressBySymbol.callAsync(
            "REP",
        );

        dummyREPToken = await DummyTokenContract.at(dummyREPTokenAddress, web3, TX_DEFAULTS);

        const incompatibleTermsContract = await IncompatibleTermsContractContract.deployed(
            web3,
            TX_DEFAULTS,
        );
        incompatibleTermsContractAddress = incompatibleTermsContract.address;

        debtTokenContract = await DebtTokenContract.deployed(web3, TX_DEFAULTS);
        debtRegistryContract = await DebtRegistryContract.deployed(web3, TX_DEFAULTS);
        simpleInterestTermsContract = await SimpleInterestTermsContractContract.deployed(
            web3,
            TX_DEFAULTS,
        );
        tokenTransferProxy = await TokenTransferProxyContract.deployed(web3, TX_DEFAULTS);

        kernel = await DebtKernelContract.deployed(web3, TX_DEFAULTS);

        repaymentRouter = await RepaymentRouterContract.deployed(web3, TX_DEFAULTS);

        const termsContractParameters = SimpleInterestParameters.pack(
            new BigNumber(0), // Our migrations set REP up to be at index 0 of the registry
            Units.ether(1), // principal of 1 ether
            Units.percent(2.5), // interest rate of 2.5%
            new BigNumber(1), // The amortization unit type (weekly)
            new BigNumber(4), // Term length in amortization units.
        );

        defaultOrderParams = {
            creditor: CREDITOR_1,
            creditorFee: Units.ether(0.002),
            debtKernelContract: kernel.address,
            debtOrderVersion: kernel.address,
            debtTokenContract: debtTokenContract.address,
            debtor: DEBTOR_1,
            debtorFee: Units.ether(0.001),
            expirationTimestampInSec: new BigNumber(
                moment()
                    .add(1, "days")
                    .unix(),
            ),
            issuanceVersion: repaymentRouter.address,
            orderSignatories: { debtor: DEBTOR_1, creditor: CREDITOR_1, underwriter: UNDERWRITER },
            principalAmount: Units.ether(1),
            principalTokenAddress: dummyREPToken.address,
            relayer: RELAYER,
            relayerFee: Units.ether(0.0015),
            termsContract: simpleInterestTermsContract.address,
            termsContractParameters,
            underwriter: UNDERWRITER,
            underwriterFee: Units.ether(0.0015),
            underwriterRiskRating: Units.percent(1.35),
        };

        orderFactory = new DebtOrderFactory(defaultOrderParams);

        // Setup ABI decoder in order to decode logs
        ABIDecoder.addABI(debtKernelContract.abi);
        ABIDecoder.addABI(debtTokenContract.abi);
        ABIDecoder.addABI(debtRegistryContract.abi);
    };

    before(reset);

    after(() => {
        // Tear down ABIDecoder before next set of tests
        ABIDecoder.removeABI(debtKernelContract.abi);
    });

    describe("#registerTermStart", () => {
        describe("when given well formed agreementId and debtor address", () => {
           it("should emit a LogSimpleInterestTermStart event", async () => {
               // STUB.
           });
        });

        describe("when given a malformed agreementId", () => {
           it("should revert the transaction", async () => {
               const malformedAgreementId = "0x111fff";

               expect(
                   simpleInterestTermsContract.registerTermStart.sendTransactionAsync(malformedAgreementId, DEBTOR_1),
               ).to.eventually.be.rejectedWith(REVERT_ERROR);
           });
        });
    });
});
