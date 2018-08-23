// External libraries
import * as ABIDecoder from "abi-decoder";
import * as _ from "lodash";
import { BigNumber } from "bignumber.js";
import * as Units from "../../../../test_utils/units";
import * as moment from "moment";
import * as Web3 from "web3";
// Scenario runners
import {
    RegisterRepaymentScenario,
    RegisterTermStartScenario,
    ReturnCollateralScenario,
} from "../scenarios";

import { TestAccounts, TestContracts } from "./";
// Wrappers
import { SignedDebtOrder } from "../../../../../../types/kernel/debt_order";
import { DummyTokenContract } from "../../../../../../types/generated/dummy_token";
// Factories
import { ERC721CollateralizedSimpleInterestTermsParameters } from "../../../../factories/terms_contract_parameters";
import { DebtOrderFactory } from "../../../../factories/debt_order_factory";
// Utils
import { Web3Utils } from "../../../../../../utils/web3_utils";
import { ERC721TokenRegistryContract } from "../../../../../../types/generated/e_r_c721_token_registry";
import { Address } from "../../../../../../types/common";
import { ERC721CollateralizerContract } from "../../../../../../types/generated/e_r_c721_collateralizer";

const DEFAULT_GAS_AMOUNT = 4712388;

export abstract class ERC721CollateralizedSimpleInterestTermsContractRunner {
    protected accounts: TestAccounts;
    protected contracts: TestContracts;
    protected debtOrder: SignedDebtOrder;
    protected agreementId: string;
    protected allAccounts: Address[];

    protected web3Utils: Web3Utils;

    protected constructor(web3: Web3) {
        this.web3Utils = new Web3Utils(web3);

        this.testScenario = this.testScenario.bind(this);
    }

    public initialize(testAccounts: TestAccounts, testContracts: TestContracts, allAccounts: Address[]) {
        this.accounts = testAccounts;
        this.contracts = testContracts;
        this.allAccounts = allAccounts;
    }

    public abstract testScenario(
        scenario: RegisterRepaymentScenario |
            RegisterTermStartScenario |
            ReturnCollateralScenario,
    ): void;

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

    protected async setupDebtOrder(
        scenario: RegisterRepaymentScenario | RegisterTermStartScenario | ReturnCollateralScenario,
    ) {
        const {
            erc721CollateralizedSimpleInterestTermsContract,
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

        const txDefaults = {
            from: this.accounts.CONTRACT_OWNER,
            gas: DEFAULT_GAS_AMOUNT,
        };

        const collateralizer = await ERC721CollateralizerContract.deployed(web3, txDefaults);

        // The symbol of the ERC721 to use as collateral, e.g. "CK" for CryptoKitties.
        let tokenSymbol;
        // "1" if the collateral contract implements the Enumerable extension, otherwise "0".
        let isEnumerable;
        // An instance of the collateral ERC721 contract.
        let erc721Token;
        // The token's ID or token index, associated with the collateral ERC721 contract.
        let tokenReference;

        if (scenario.isCryptoKitty) {
            // CryptoKitties does not implement the Enumerable extension, hence we encode a
            // "0" to flag this in the terms contract params.
            isEnumerable = new BigNumber(0);
            erc721Token = this.contracts.cryptoKittyContract;

            // The ID of the token will be an increment from the total supply, since
            // the zeroth CryptoKitty is a special reserved "uncat".
            tokenReference = (await erc721Token.totalSupply.callAsync()).add(1);

            // Mint a new CryptoKitty for the debtor.
            await erc721Token.createPromoKitty
                .sendTransactionAsync(
                    new BigNumber(448793),
                    this.accounts.DEBTOR_1,
                    {
                        ...txDefaults,
                        from: this.accounts.CONTRACT_OWNER,
                    },
                );
        } else {
            // This contract does implement the Enumerable extension, so we flag that with "1"
            // in the terms contract parameters.
            isEnumerable = new BigNumber(1);
            erc721Token = this.contracts.erc721TokenContract;

            // Mint a new ERC721 token for the debtor.
            tokenReference = new BigNumber(await erc721Token.totalSupply.callAsync());
            await erc721Token.mint.sendTransactionAsync(this.accounts.DEBTOR_1, tokenReference, {
                from: this.accounts.CONTRACT_OWNER,
                gas: DEFAULT_GAS_AMOUNT,
            });
        }

        tokenSymbol = await erc721Token.symbol.callAsync();

        // Get the index of the token.
        const tokenRegistry = await ERC721TokenRegistryContract.deployed(web3, txDefaults);
        const erc721ContractIndex = await tokenRegistry.getTokenIndexBySymbol.callAsync(tokenSymbol);
        const indexWithoutToken = await tokenRegistry.tokenSymbolListLength.callAsync();

        await this.web3Utils.mineBlock();

        const termsContractParameters = ERC721CollateralizedSimpleInterestTermsParameters.pack(
            {
                isEnumerable,
                erc721ContractIndex:
                    scenario.collateralTokenInRegistry
                        ? erc721ContractIndex
                        : indexWithoutToken,
                tokenReference,
            },
            {
                principalTokenIndex: scenario.principalTokenInRegistry
                    ? principalTokenIndex
                    : nonExistentTokenIndex,
                principalAmount: scenario.principalAmount,
                interestRateFixedPoint: scenario.interestRateFixedPoint,
                amortizationUnitType: scenario.amortizationUnitType,
                termLengthUnits: scenario.termLengthUnits,
            },
        );

        // The debtor grants approval to the collateralizer.
        await erc721Token.approve.sendTransactionAsync(
            collateralizer.address,
            tokenReference,
            {
                ...txDefaults,
                from: this.accounts.DEBTOR_1,
            },
        );

        const latestBlockTime = await this.web3Utils.getLatestBlockTime();

        const defaultOrderParams = {
            creditor: CREDITOR_1,
            creditorFee: Units.ether(0.002),
            debtKernelContract: kernel.address,
            debtOrderVersion: kernel.address,
            debtTokenContract: debtTokenContract.address,
            debtor: DEBTOR_1,
            debtorFee: scenario.debtorFee,
            expirationTimestampInSec: new BigNumber(
                moment
                    .unix(latestBlockTime)
                    .add(30, "days")
                    .unix(),
            ),
            issuanceVersion: repaymentRouter.address,
            orderSignatories: {
                debtor: DEBTOR_1,
                creditor: CREDITOR_1,
                underwriter: UNDERWRITER,
            },
            principalAmount: scenario.principalAmount,
            principalTokenAddress: dummyREPToken.address,
            relayer: RELAYER,
            relayerFee: Units.ether(0.0015),
            termsContract: erc721CollateralizedSimpleInterestTermsContract.address,
            termsContractParameters,
            underwriter: UNDERWRITER,
            underwriterFee: Units.ether(0.0015),
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

        const creditorBalanceAndAllowance = debtOrder
            .getPrincipalAmount()
            .plus(debtOrder.getCreditorFee());

        await token.setBalance.sendTransactionAsync(creditor, creditorBalanceAndAllowance, {
            from: CONTRACT_OWNER,
        });

        await token.approve.sendTransactionAsync(
            tokenTransferProxy.address,
            creditorBalanceAndAllowance,
            { from: creditor },
        );
    }
}
