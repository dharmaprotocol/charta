import { BigNumber } from "bignumber.js";
import * as ABIDecoder from "abi-decoder";
import * as chai from "chai";
import * as Web3 from "web3";

import { MockDebtRegistryContract } from "../../../types/generated/mock_debt_registry";
// import { MockDebtTokenContract } from "../../../types/generated/mock_debt_token";
import { MockERC20TokenContract } from "../../../types/generated/mock_e_r_c20_token";

import { DebtTokenContract } from "../../../types/generated/debt_token";

import { CrowdfundingTokenContract } from "../../../types/generated/crowdfunding_token";
import { CrowdfundingTokenRegistryContract } from "../../../types/generated/crowdfunding_token_registry";

import ChaiSetup from "../test_utils/chai_setup";

import { sendTransaction } from "../test_utils/send_transactions";

// Set up Chai
ChaiSetup.configure();
const expect = chai.expect;

const crowdfundingTokenArtifact = artifacts.require("CrowdfundingToken");
const crowdfundingTokenRegistryArtifact = artifacts.require("CrowdfundingTokenRegistry");
const debtTokenContract = artifacts.require("DebtToken");

contract("Crowdfunding Token Registry (Unit Tests)", async (ACCOUNTS) => {
    const CONTRACT_OWNER = ACCOUNTS[0];
    const CROWDFUNDING_TOKEN_CONTRACT_OWNER = ACCOUNTS[1];
    const TX_DEFAULTS = { from: CONTRACT_OWNER, gas: 4000000 };
    const TOKEN_SYMBOL = "CFT";

    let mockDebtRegistry: MockDebtRegistryContract;
    // let mockDebtToken: MockDebtTokenContract;
    let mockToken: MockERC20TokenContract;

    let crowdfundingTokenRegistry: CrowdfundingTokenRegistryContract;
    let debtToken: DebtTokenContract;

    // let debtTokenWeb3ContractInstance: Web3.ContractInstance;

    before(async () => {
        mockDebtRegistry = await MockDebtRegistryContract.deployed(web3, TX_DEFAULTS);
        // mockDebtToken = await MockDebtTokenContract.deployed(web3, TX_DEFAULTS);
        mockToken = await MockERC20TokenContract.deployed(web3, TX_DEFAULTS);

        const crowdfundingTokenRegistryTruffle = await crowdfundingTokenRegistryArtifact.new({
            from: CONTRACT_OWNER,
        });

        // debtTokenWeb3ContractInstance = await debtTokenContract.new(mockDebtRegistry.address, {
        //     from: CONTRACT_OWNER,
        // });

        const crowdfundingTokenRegistryAsWeb3Contract = web3.eth
            .contract(crowdfundingTokenRegistryArtifact.abi)
            .at(crowdfundingTokenRegistryTruffle.address);

        crowdfundingTokenRegistry = new CrowdfundingTokenRegistryContract(
            crowdfundingTokenRegistryAsWeb3Contract,
            TX_DEFAULTS,
        );

        // // The typings we use ingest vanilla Web3 contracts, so we convert the
        // // contract instance deployed by truffle into a Web3 contract instance
        // const debtTokenWeb3Contract = web3.eth
        //     .contract(debtTokenWeb3ContractInstance.abi)
        //     .at(debtTokenWeb3ContractInstance.address);
        //
        // debtToken = new DebtTokenContract(debtTokenWeb3Contract, TX_DEFAULTS);

        debtToken = await DebtTokenContract.deployed(web3, TX_DEFAULTS);

        ABIDecoder.addABI(crowdfundingTokenRegistry.abi);
        ABIDecoder.addABI(debtTokenContract.abi);
    });

    after(() => {
        ABIDecoder.removeABI(crowdfundingTokenRegistry.abi);
    });

    describe("#createCrowdfundingToken", () => {
        describe("successfully", () => {
            // let txHash: string;
            // let receipt: Web3.TransactionReceipt;
            // let block: Web3.BlockWithoutTransactionData;

            // const safelyTransferWithData = async (
            //     from: string,
            //     to: string,
            //     tokenID: BigNumber,
            //     data: string,
            // ) => {
            //     return sendTransaction(
            //         debtTokenWeb3ContractInstance,
            //         "safeTransferFrom",
            //         "address,address,uint256,bytes",
            //         [from, to, tokenID, data],
            //         { from },
            //     );
            // };

            before(async () => {
                debtToken.safeTransferFrom.sendTransactionAsync(
                    CONTRACT_OWNER,
                    crowdfundingTokenRegistry.address,
                    "hi",
                    { from: CONTRACT_OWNER },
                );

                // await safelyTransferWithData(
                //     CONTRACT_OWNER,
                //     crowdfundingTokenRegistry.address,
                //     tokenID,
                //     mockToken.address,
                // );

                // // TODO: figure out how to get agreementId
                // const agreementId = new BigNumber(web3.sha3("Temporary value"));

                // txHash = await crowdfundingTokenRegistry.createCrowdfundingToken.sendTransactionAsync(
                //     CROWDFUNDING_TOKEN_CONTRACT_OWNER,
                //     mockDebtToken.address,
                //     agreementId,
                //     mockDebtRegistry.address,
                //     mockToken.address,
                //     { from: CONTRACT_OWNER },
                // );
                //
                // receipt = await web3.eth.getTransactionReceipt(txHash);
                // block = await web3.eth.getBlock(receipt.blockNumber);
            });

            it("emits an event announcing the new address", async () => {
                const expectedLogEntry = ContractAddressUpdated(
                    ROWDFUNDING_TOKEN_CONTRACT_OWNER,
                    "Dharma Crowdfunding Token",
                    18,
                    TOKEN_SYMBOL,
                    mockToken.address,
                    true,
                );
                const resultingLog = await queryLogsForEvent(
                    txHash,
                    EventNames.ContractAddressUpdated,
                );
                expect(resultingLog).to.deep.equal(expectedLogEntry);
            });
        });
    });
});
