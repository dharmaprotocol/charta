// External libraries
import * as ABIDecoder from "abi-decoder";
import * as _ from "lodash";
import { BigNumber } from "bignumber.js";
import * as Units from "../../../test_utils/units";
import * as moment from "moment";
import * as Web3 from "web3";

// Scenario runners
import { CreateCrowdfundingTokenScenario } from "../scenarios";

import { TestAccounts, TestContracts } from "./";

// Wrappers
import { SignedDebtOrder } from "../../../../../types/kernel/debt_order";
import { DummyTokenContract } from "../../../../../types/generated/dummy_token";

// Factories
import { SimpleInterestParameters } from "../../../factories/terms_contract_parameters";
import { DebtOrderFactory } from "../../../factories/debt_order_factory";

// Utils
import { Web3Utils } from "../../../../../utils/web3_utils";
import { UNLIMITED_PROXY_TOKEN_TRANSFER_ALLOWANCE } from "../../../test_utils/constants";
import { sendTransaction } from "../../../test_utils/send_transactions";

const DEFAULT_GAS_AMOUNT = 4712388;

export abstract class CrowdfundingRunner {
    protected web3Utils: Web3Utils;
    protected accounts: TestAccounts;
    protected contracts: TestContracts;
    protected debtOrder: SignedDebtOrder;
    protected agreementId: string;

    constructor(web3: Web3) {
        this.web3Utils = new Web3Utils(web3);

        this.testScenario = this.testScenario.bind(this);
    }

    public initialize(testAccounts: TestAccounts, testContracts: TestContracts) {
        this.accounts = testAccounts;
        this.contracts = testContracts;
    }

    public abstract testScenario(scenario: CreateCrowdfundingTokenScenario): void;

    protected async getLogs(
        txHash: string,
        event: string,
    ): Promise<ABIDecoder.DecodedLog | undefined> {
        const receipt = await web3.eth.getTransactionReceipt(txHash);

        return _.find(ABIDecoder.decodeLogs(receipt.logs), { name: event });
    }

    protected fillDebtOrder() {
        const { UNDERWRITER } = this.accounts;
        const { kernel } = this.contracts;
        const debtOrder = this.debtOrder;

        return kernel.fillDebtOrder.sendTransactionAsync(
            debtOrder.getCreditor(),
            debtOrder.getOrderAddresses(),
            debtOrder.getOrderValues(),
            debtOrder.getOrderBytes32(),
            debtOrder.getSignaturesV(),
            debtOrder.getSignaturesR(),
            debtOrder.getSignaturesS(),
            { from: UNDERWRITER },
        );
    }

    protected async setupDebtOrder(scenario: CreateCrowdfundingTokenScenario) {
        const {
            simpleInterestTermsContract,
            kernel,
            repaymentRouter,
            debtTokenContract,
            dummyREPToken,
            dummyTokenRegistryContract,
        } = this.contracts;

        const { DEBTOR_1, CREDITOR_1, UNDERWRITER, RELAYER } = this.accounts;

        const principalTokenIndex = await dummyTokenRegistryContract.getTokenIndexBySymbol.callAsync(
            "REP",
        );
        const nonExistentTokenIndex = new BigNumber(99);

        const termsContractParameters = SimpleInterestParameters.pack({
            principalTokenIndex: scenario.principalTokenInRegistry
                ? principalTokenIndex
                : nonExistentTokenIndex,
            principalAmount: scenario.principalAmount,
            interestRateFixedPoint: scenario.interestRateFixedPoint,
            amortizationUnitType: scenario.amortizationUnitType,
            termLengthUnits: scenario.termLengthUnits,
        });

        const latestBlockTime = await this.web3Utils.getLatestBlockTime();

        const defaultOrderParams = {
            creditor: CREDITOR_1,
            creditorFee: Units.ether(0.0),
            debtKernelContract: kernel.address,
            debtOrderVersion: kernel.address,
            debtTokenContract: debtTokenContract.address,
            debtor: DEBTOR_1,
            debtorFee: Units.ether(0.0),
            expirationTimestampInSec: new BigNumber(
                moment
                    .unix(latestBlockTime)
                    .add(30, "days")
                    .unix(),
            ),
            issuanceVersion: repaymentRouter.address,
            orderSignatories: { debtor: DEBTOR_1, creditor: CREDITOR_1, underwriter: UNDERWRITER },
            principalAmount: scenario.principalAmount,
            principalTokenAddress: dummyREPToken.address,
            relayer: RELAYER,
            relayerFee: Units.ether(0.0),
            termsContract: simpleInterestTermsContract.address,
            termsContractParameters,
            underwriter: UNDERWRITER,
            underwriterFee: Units.ether(0.0),
            underwriterRiskRating: Units.underwriterRiskRatingFixedPoint(1.35),
        };

        const orderFactory = new DebtOrderFactory(defaultOrderParams);

        const debtOrder = await orderFactory.generateDebtOrder();
        const agreementId = debtOrder.getIssuanceCommitment().getHash();

        this.debtOrder = debtOrder;
        this.agreementId = agreementId;

        await this.setBalances();
    }

    protected async setBalances() {
        const { tokenTransferProxy } = this.contracts;

        const { CONTRACT_OWNER } = this.accounts;
        const debtOrder = this.debtOrder;

        const token = await DummyTokenContract.at(debtOrder.getPrincipalTokenAddress(), web3, {
            from: CONTRACT_OWNER,
            gas: DEFAULT_GAS_AMOUNT,
        });

        const debtor = debtOrder.getDebtor();
        const creditor = debtOrder.getCreditor();

        await token.setBalance.sendTransactionAsync(debtor, new BigNumber(0), {
            from: CONTRACT_OWNER,
        });
        await token.approve.sendTransactionAsync(tokenTransferProxy.address, new BigNumber(0), {
            from: debtor,
        });

        const creditorBalance = debtOrder.getPrincipalAmount().plus(debtOrder.getCreditorFee());

        await token.setBalance.sendTransactionAsync(creditor, creditorBalance, {
            from: CONTRACT_OWNER,
        });

        await token.approve.sendTransactionAsync(
            tokenTransferProxy.address,
            UNLIMITED_PROXY_TOKEN_TRANSFER_ALLOWANCE,
            { from: creditor },
        );
    }

    protected async transferDebtTokenToCrowdfundingTokenRegistry(
        scenario: CreateCrowdfundingTokenScenario,
    ) {
        const { CREDITOR_1 } = this.accounts;
        const {
            crowdfundingTokenRegistry,
            debtTokenContract,
            dummyTokenRegistryContract,
        } = this.contracts;

        const principalTokenIndex = await dummyTokenRegistryContract.getTokenIndexBySymbol.callAsync(
            "REP",
        );
        const nonExistentTokenIndex = new BigNumber(99);

        const from = CREDITOR_1;
        const to = crowdfundingTokenRegistry.address;
        const tokenID = new BigNumber(this.agreementId);
        const tokenIndex = scenario.principalTokenInRegistry
            ? principalTokenIndex
            : nonExistentTokenIndex;
        const data = `0x${tokenIndex.toNumber().toString(16)}`;

        // Because typescript cannot handle overloaded functions, we use this helper utility
        sendTransaction(
            web3,
            debtTokenContract.web3ContractInstance,
            "safeTransferFrom",
            "address,address,uint256,bytes",
            [from, to, tokenID, data],
            {
                from,
                to: debtTokenContract.web3ContractInstance.address,
            },
        );
    }
}
