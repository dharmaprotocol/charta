// External Libraries
import * as ABIDecoder from "abi-decoder";
import * as Web3 from "web3";
import * as _ from "lodash";
import * as chai from "chai";
import * as moment from "moment";
import { BigNumber } from "bignumber.js";

// Test Utils
import * as Units from "../test_utils/units";
import {
    multiSigExecuteAfterTimelock,
    multiSigExecutePauseImmediately,
} from "../test_utils/multisig";
import ChaiSetup from "../test_utils/chai_setup";
import { BigNumberSetup } from "../test_utils/bignumber_setup";
import { Web3Utils } from "../../../utils/web3_utils";

// Types
import { SignedCreditOrder } from "../../../types/proxy/credit_order";

// Logs
import { LogTransfer } from "../logs/debt_token";
import { LogInsertEntry } from "../logs/debt_registry";
import { LogCreditOrderFilled, LogError } from "../logs/creditor_proxy";

// Factories
import { SimpleInterestParameters } from "../factories/terms_contract_parameters";
import { CreditOrderFactory } from "../factories/credit_order_factory";

// Wrappers
import { CreditorProxyContract } from "../../../types/generated/creditor_proxy";
import { DebtKernelContract } from "../../../types/generated/debt_kernel";
import { CreditorProxyErrorCodes } from "../../../types/errors";
import { DebtRegistryContract } from "../../../types/generated/debt_registry";
import { DebtRegistryEntry } from "../../../types/registry/entry";
import { DebtTokenContract } from "../../../types/generated/debt_token";
import { DummyTokenContract } from "../../../types/generated/dummy_token";
import { IncompatibleTermsContractContract } from "../../../types/generated/incompatible_terms_contract";
import { RepaymentRouterContract } from "../../../types/generated/repayment_router";
import { SimpleInterestTermsContractContract } from "../../../types/generated/simple_interest_terms_contract";
import { TokenRegistryContract } from "../../../types/generated/token_registry";
import { TokenTransferProxyContract } from "../../../types/generated/token_transfer_proxy";
import { DharmaMultiSigWalletContract } from "../../../types/generated/dharma_multi_sig_wallet";

// Constants
import { REVERT_ERROR } from "../test_utils/constants";

// Configure BigNumber exponentiation
BigNumberSetup.configure();

// Set up Chai
ChaiSetup.configure();
const expect = chai.expect;

// Set up utils
const web3Utils = new Web3Utils(web3);

const creditorProxyContract = artifacts.require("CreditorProxy");

contract("Debt Kernel (Integration Tests)", async (ACCOUNTS) => {
    let proxy: CreditorProxyContract;
    let kernel: DebtKernelContract;
    let repaymentRouter: RepaymentRouterContract;
    let simpleInterestTermsContract: SimpleInterestTermsContractContract;
    let tokenTransferProxy: TokenTransferProxyContract;
    let debtTokenContract: DebtTokenContract;
    let debtRegistryContract: DebtRegistryContract;

    let dummyREPToken: DummyTokenContract;

    let incompatibleTermsContractAddress: string;

    let defaultOrderParams: { [key: string]: any };
    let orderFactory: CreditOrderFactory;

    let multiSig: DharmaMultiSigWalletContract;

    const CONTRACT_OWNER = ACCOUNTS[0];
    const ATTACKER = ACCOUNTS[1];
    const DEBTOR_1 = ACCOUNTS[2];
    const CREDITOR_1 = ACCOUNTS[3];
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

        //const incompatibleTermsContract = await IncompatibleTermsContractContract.deployed( web3, TX_DEFAULTS,);
        //incompatibleTermsContractAddress = incompatibleTermsContract.address;

        debtTokenContract = await DebtTokenContract.deployed(web3, TX_DEFAULTS);
        debtRegistryContract = await DebtRegistryContract.deployed(web3, TX_DEFAULTS);
        simpleInterestTermsContract = await SimpleInterestTermsContractContract.deployed(
            web3,
            TX_DEFAULTS,
        );
        tokenTransferProxy = await TokenTransferProxyContract.deployed(web3, TX_DEFAULTS);

        kernel = await DebtKernelContract.deployed(web3, TX_DEFAULTS);

        multiSig = await DharmaMultiSigWalletContract.deployed(web3, TX_DEFAULTS);

        repaymentRouter = await RepaymentRouterContract.deployed(web3, TX_DEFAULTS);

        const termsContractParameters = SimpleInterestParameters.pack({
            principalTokenIndex: new BigNumber(0), // Our migrations set REP up to be at index 0 of the registry
            principalAmount: Units.ether(1), // principal of 1 ether
            interestRateFixedPoint: Units.interestRateFixedPoint(2.5), // interest rate of 2.5%
            amortizationUnitType: new BigNumber(1), // The amortization unit type (weekly)
            termLengthUnits: new BigNumber(4), // Term length in amortization units.
        });

        const latestBlockTime = await web3Utils.getLatestBlockTime();

        defaultOrderParams = {
            kernelVersion: kernel.address,
            creditor: CREDITOR_1,
            repaymentRouterVersion: repaymentRouter.address,
            debtor: DEBTOR_1,
            underwriter: UNDERWRITER,
            termsContract: simpleInterestTermsContract.address,
            principalToken: dummyREPToken.address,
            relayer: RELAYER,
            underwriterRiskRating: Units.underwriterRiskRatingFixedPoint(1.35),
            salt: new BigNumber("abc123", 16),
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
            orderSignatories: { debtor: DEBTOR_1, creditor: CREDITOR_1, underwriter: UNDERWRITER },
        };

        orderFactory = new CreditOrderFactory(defaultOrderParams);

        // Setup ABI decoder in order to decode logs
        ABIDecoder.addABI(creditorProxyContract.abi);
        //ABIDecoder.addABI(debtKernelContract.abi);
        ABIDecoder.addABI(debtTokenContract.abi);
        ABIDecoder.addABI(debtRegistryContract.abi);
    };

    before(reset);

    after(() => {
        // Tear down ABIDecoder before next set of tests
        ABIDecoder.removeABI(creditorProxyContract.abi);
    });

    describe("Initialization & Upgrades", async () => {});

    describe("#fillDebtOrder", () => {
        let creditOrder: SignedCreditOrder;

        const setupBalancesAndAllowances = async (): Promise<[BigNumber, BigNumber]> => {
            const token = await DummyTokenContract.at(
                creditOrder.getPrincipalToken(),
                web3,
                TX_DEFAULTS,
            );

            const debtor = creditOrder.getDebtor();
            const creditor = creditOrder.getCreditor();

            await token.setBalance.sendTransactionAsync(debtor, new BigNumber(0), {
                from: CONTRACT_OWNER,
            });
            await token.approve.sendTransactionAsync(tokenTransferProxy.address, new BigNumber(0), {
                from: debtor,
            });

            const creditorBalanceAndAllowance = creditOrder
                .getPrincipalAmount()
                .plus(creditOrder.getCreditorFee());

            await token.setBalance.sendTransactionAsync(creditor, creditorBalanceAndAllowance, {
                from: CONTRACT_OWNER,
            });
            await token.approve.sendTransactionAsync(
                tokenTransferProxy.address,
                creditorBalanceAndAllowance,
                { from: creditor },
            );

            return [new BigNumber(0), creditorBalanceAndAllowance];
        };

        const getAgentBalances = async (principalToken: DummyTokenContract) => {
            const debtorBalance = await principalToken.balanceOf.callAsync(creditOrder.getDebtor());
            const creditorBalance = await principalToken.balanceOf.callAsync(
                creditOrder.getCreditor(),
            );
            const underwriterBalance = await principalToken.balanceOf.callAsync(
                creditOrder.getUnderwriter(),
            );
            const relayerBalance = await principalToken.balanceOf.callAsync(
                creditOrder.getRelayer(),
            );

            return [debtorBalance, creditorBalance, underwriterBalance, relayerBalance];
        };

        const testOrderFill = (filler: string, setupCreditOrder: () => Promise<void>) => {
            return () => {
                let principalToken: DummyTokenContract;

                let debtorBalanceBefore: BigNumber;
                let creditorBalanceBefore: BigNumber;
                let underwriterBalanceBefore: BigNumber;
                let relayerBalanceBefore: BigNumber;

                let receipt: Web3.TransactionReceipt;
                let block: Web3.BlockWithoutTransactionData;

                let logs: ABIDecoder.DecodedLog[];

                before(async () => {
                    await setupCreditOrder();
                    await setupBalancesAndAllowances();

                    principalToken = await DummyTokenContract.at(
                        creditOrder.getPrincipalToken(),
                        web3,
                        TX_DEFAULTS,
                    );

                    [
                        debtorBalanceBefore,
                        creditorBalanceBefore,
                        underwriterBalanceBefore,
                        relayerBalanceBefore,
                    ] = await getAgentBalances(principalToken);

                    const txHash = await kernel.fillDebtOrder.sendTransactionAsync(
                        creditOrder.getCreditor(),
                        creditOrder.getOrderAddresses(),
                        creditOrder.getOrderValues(),
                        creditOrder.getOrderBytes32(),
                        creditOrder.getSignaturesV(),
                        creditOrder.getSignaturesR(),
                        creditOrder.getSignaturesS(),
                        { from: filler },
                    );

                    receipt = await web3.eth.getTransactionReceipt(txHash);
                    block = await web3.eth.getBlock(receipt.blockNumber);

                    logs = _.compact(ABIDecoder.decodeLogs(receipt.logs));
                });

                it("should transfer principal + creditor fee to itself", async () => {
                    //await expect();
                });
                it("should transfer debt token to creditor", async () => {
                    console.log(JSON.stringify(logs, null, 2));
                    await expect(
                        debtTokenContract.ownerOf.callAsync(new BigNumber(creditOrder.getHash())),
                    ).to.eventually.equal(creditOrder.getCreditor());
                });
            };
        };

        describe(
            "..with default credit order",
            testOrderFill(CONTRACT_OWNER, async () => {
                creditOrder = await orderFactory.generateCreditOrder();
            }),
        );
    });
});
