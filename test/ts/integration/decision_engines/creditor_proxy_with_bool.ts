// External Libraries
import * as ABIDecoder from "abi-decoder";
import * as Web3 from "web3";
import * as _ from "lodash";
import * as chai from "chai";
import * as moment from "moment";
import { BigNumber } from "bignumber.js";

// Test Utils
import * as Units from "../../test_utils/units";
import {
    multiSigExecuteAfterTimelock,
    multiSigExecutePauseImmediately,
} from "../../test_utils/multisig";
import ChaiSetup from "../../test_utils/chai_setup";
import { BigNumberSetup } from "../../test_utils/bignumber_setup";
import { Web3Utils } from "../../../../utils/web3_utils";

// Types
import { SignedDebtOffer } from "../../../../types/proxy/debt_offer";

// Logs
import { LogApproval, LogTransfer } from "../../logs/debt_token";
import { LogInsertEntry, LogModifyEntryBeneficiary } from "../../logs/debt_registry";
import { LogDebtOrderFilled } from "../../logs/debt_kernel";
import { LogDebtOfferFilled, LogError } from "../../logs/creditor_proxy";

// Factories
import { SimpleInterestParameters } from "../../factories/terms_contract_parameters";
import { DebtOfferFactory } from "../../factories/debt_offer_factory";

// Wrappers
import { CreditorProxyContract } from "../../../../types/generated/creditor_proxy";
import { ContractRegistryContract } from "../../../../types/generated/contract_registry";
import { CreditorProxyErrorCodes } from "../../../../types/errors";
import { DebtKernelContract } from "../../../../types/generated/debt_kernel";
import { DebtRegistryContract } from "../../../../types/generated/debt_registry";
import { DebtRegistryEntry } from "../../../../types/registry/entry";
import { DebtTokenContract } from "../../../../types/generated/debt_token";
import { DummyTokenContract } from "../../../../types/generated/dummy_token";
import { RepaymentRouterContract } from "../../../../types/generated/repayment_router";
import { SimpleInterestTermsContractContract } from "../../../../types/generated/simple_interest_terms_contract";
import { TokenRegistryContract } from "../../../../types/generated/token_registry";
import { TokenTransferProxyContract } from "../../../../types/generated/token_transfer_proxy";
import { DharmaMultiSigWalletContract } from "../../../../types/generated/dharma_multi_sig_wallet";

// Constants
import { REVERT_ERROR } from "../../test_utils/constants";

// Configure BigNumber exponentiation
BigNumberSetup.configure();

// Set up Chai
ChaiSetup.configure();
const expect = chai.expect;

// Set up utils
const web3Utils = new Web3Utils(web3);

const creditorProxyArtifacts = artifacts.require("CreditorProxy");
const debtTokenArtifacts = artifacts.require("DebtToken");
const debtKernelArtifacts = artifacts.require("DebtKernel");

contract("Creditor Proxy with Boolean Decision Engine", async (ACCOUNTS) => {
    let creditorProxy: CreditorProxyContract;
    let contractRegistry: ContractRegistryContract;
    let kernel: DebtKernelContract;
    let repaymentRouter: RepaymentRouterContract;
    let simpleInterestTermsContract: SimpleInterestTermsContractContract;
    let tokenTransferProxy: TokenTransferProxyContract;
    let debtTokenContract: DebtTokenContract;
    let debtRegistryContract: DebtRegistryContract;

    let dummyREPToken: DummyTokenContract;

    let defaultOfferParams: { [key: string]: any };
    let offerFactory: DebtOfferFactory;

    let multiSig: DharmaMultiSigWalletContract;

    const CONTRACT_OWNER = ACCOUNTS[0];
    const ATTACKER = ACCOUNTS[1];
    const DEBTOR_1 = ACCOUNTS[2];
    const CREDITOR_1 = ACCOUNTS[3];
    const CREDITOR_2 = ACCOUNTS[5];
    const UNDERWRITER = ACCOUNTS[4];
    const RELAYER = ACCOUNTS[6];
    const MALICIOUS_TERMS_CONTRACTS = ACCOUNTS[7];
    const ALTERNATIVE_TOKEN_ADDRESS = ACCOUNTS[8];

    const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";

    const TX_DEFAULTS = { from: CONTRACT_OWNER, gas: 4712388 };

    const reset = async () => {
        const dummyTokenRegistryContract = await TokenRegistryContract.deployed(web3, TX_DEFAULTS);
        const dummyREPTokenAddress = await dummyTokenRegistryContract.getTokenAddressBySymbol.callAsync(
            "REP",
        );
        dummyREPToken = await DummyTokenContract.at(dummyREPTokenAddress, web3, TX_DEFAULTS);

        debtTokenContract = await DebtTokenContract.deployed(web3, TX_DEFAULTS);
        debtRegistryContract = await DebtRegistryContract.deployed(web3, TX_DEFAULTS);
        tokenTransferProxy = await TokenTransferProxyContract.deployed(web3, TX_DEFAULTS);
        creditorProxy = await CreditorProxyContract.deployed(web3, TX_DEFAULTS);
        contractRegistry = await ContractRegistryContract.deployed(web3, TX_DEFAULTS);
        kernel = await DebtKernelContract.deployed(web3, TX_DEFAULTS);
        multiSig = await DharmaMultiSigWalletContract.deployed(web3, TX_DEFAULTS);
        repaymentRouter = await RepaymentRouterContract.deployed(web3, TX_DEFAULTS);
        simpleInterestTermsContract = await SimpleInterestTermsContractContract.deployed(
            web3,
            TX_DEFAULTS,
        );

        const termsContractParameters = SimpleInterestParameters.pack({
            principalTokenIndex: new BigNumber(0), // Our migrations set REP up to be at index 0 of the registry
            principalAmount: Units.ether(1), // principal of 1 ether
            interestRateFixedPoint: Units.interestRateFixedPoint(2.5), // interest rate of 2.5%
            amortizationUnitType: new BigNumber(1), // The amortization unit type (weekly)
            termLengthUnits: new BigNumber(4), // Term length in amortization units.
        });

        const latestBlockTime = await web3Utils.getLatestBlockTime();

        defaultOfferParams = {
            kernelVersion: kernel.address,
            creditor: CREDITOR_1,
            repaymentRouterVersion: repaymentRouter.address,
            debtor: DEBTOR_1,
            underwriter: UNDERWRITER,
            termsContract: simpleInterestTermsContract.address,
            principalToken: dummyREPToken.address,
            relayer: RELAYER,
            underwriterRiskRating: Units.underwriterRiskRatingFixedPoint(1.35),
            principalAmount: Units.ether(1),
            underwriterFee: Units.ether(0.0015),
            relayerFee: Units.ether(0.0015),
            creditorFee: Units.ether(0.002),
            debtorFee: Units.ether(0.001),
            expirationTimestampInSec: new BigNumber(
                moment
                    .unix(latestBlockTime)
                    .add(30, "days")
                    .unix(),
            ),
            termsContractParameters,
            offerSignatories: { debtor: DEBTOR_1, creditor: CREDITOR_1, underwriter: UNDERWRITER },
        };

        offerFactory = new DebtOfferFactory(defaultOfferParams);

        // Setup ABI decoder in order to decode logs
        ABIDecoder.addABI(creditorProxyArtifacts.abi);
        ABIDecoder.addABI(debtTokenArtifacts.abi);
        ABIDecoder.addABI(debtRegistryContract.abi);
        ABIDecoder.addABI(debtKernelArtifacts.abi);
    };

    before(reset);

    after(() => {
        // Tear down ABIDecoder before next set of tests
        ABIDecoder.removeABI(creditorProxyArtifacts.abi);
    });

    describe("#fillDebtOffer when the decision engine returns true", () => {
        it("fills the debt order", () => {
            // STUB.
        });
    });

    describe("#fillDebtOffer when the decision engine returns false", () => {
        it("does not fill the debt order", () => {
            // STUB.
        });
    });
});
