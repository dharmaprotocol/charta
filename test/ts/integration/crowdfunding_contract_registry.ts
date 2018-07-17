import { BigNumber } from "bignumber.js";
import * as ABIDecoder from "abi-decoder";
import * as chai from "chai";
import * as Web3 from "web3";

import { MockERC20TokenContract } from "../../../types/generated/mock_e_r_c20_token";

import { ContractRegistryContract } from "../../../types/generated/contract_registry";
import { DebtTokenContract } from "../../../types/generated/debt_token";
import { DebtRegistryContract } from "../../../types/generated/debt_registry";

import { CrowdfundingTokenContract } from "../../../types/generated/crowdfunding_token";
import { CrowdfundingTokenRegistryContract } from "../../../types/generated/crowdfunding_token_registry";

// Utils
import { Web3Utils } from "../../../utils/web3_utils";

// Test utils
import ChaiSetup from "../test_utils/chai_setup";
import { sendTransaction } from "../test_utils/send_transactions";

// Set up Chai
ChaiSetup.configure();
const expect = chai.expect;

const web3Utils = new Web3Utils(web3);

const crowdfundingTokenArtifact = artifacts.require("CrowdfundingToken");
const crowdfundingTokenRegistryArtifact = artifacts.require("CrowdfundingTokenRegistry");

contract("Crowdfunding Token Registry (Unit Tests)", async (ACCOUNTS) => {
    const CONTRACT_OWNER = ACCOUNTS[0];
    const CROWDFUNDING_TOKEN_CONTRACT_OWNER = ACCOUNTS[1];
    const TX_DEFAULTS = { from: CONTRACT_OWNER, gas: 4000000 };
    const TOKEN_SYMBOL = "CFT";

    let mockToken: MockERC20TokenContract;

    let contractRegistry: ContractRegistryContract;
    let crowdfundingTokenRegistry: CrowdfundingTokenRegistryContract;
    let debtToken: DebtTokenContract;
    let debtRegistry: DebtRegistryContract;

    before(async () => {
        // wait for necessary dependecies to be deployed
        mockToken = await MockERC20TokenContract.deployed(web3, TX_DEFAULTS);

        contractRegistry = await ContractRegistryContract.deployed(web3, TX_DEFAULTS);
        debtToken = await DebtTokenContract.deployed(web3, TX_DEFAULTS);
        debtRegistry = await DebtRegistryContract.deployed(web3, TX_DEFAULTS);

        // deploy the CrowdfundingTokenRegistry contract
        const crowdfundingTokenRegistryTruffle = await crowdfundingTokenRegistryArtifact.new(
            contractRegistry.address,
            {
                from: CONTRACT_OWNER,
            },
        );

        const crowdfundingTokenRegistryAsWeb3Contract = web3.eth
            .contract(crowdfundingTokenRegistryArtifact.abi)
            .at(crowdfundingTokenRegistryTruffle.address);

        crowdfundingTokenRegistry = new CrowdfundingTokenRegistryContract(
            crowdfundingTokenRegistryAsWeb3Contract,
            TX_DEFAULTS,
        );

        ABIDecoder.addABI(crowdfundingTokenRegistry.abi);
    });

    after(() => {
        ABIDecoder.removeABI(crowdfundingTokenRegistry.abi);
    });

    describe("constructor", () => {
        it("should return a CrowdfundingTokenRegistry", async () => {
            await expect(
                web3Utils.doesContractExistAtAddressAsync(crowdfundingTokenRegistry.address),
            ).to.eventually.be.true;
        });
    });

    describe("#createCrowdfundingToken", () => {
        describe("successfully", () => {
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
                // debtToken.safeTransferFrom.sendTransactionAsync(
                //     CONTRACT_OWNER,
                //     crowdfundingTokenRegistry.address,
                //     new BigNumber(),
                //     { from: CONTRACT_OWNER },
                // );
                //
                // await safelyTransferWithData(
                //     CONTRACT_OWNER,
                //     crowdfundingTokenRegistry.address,
                //     tokenID,
                //     mockToken.address,
                // );
                // TODO: figure out how to get agreementId
                // txHash = await crowdfundingTokenRegistry.createCrowdfundingToken.sendTransactionAsync(
                //     CROWDFUNDING_TOKEN_CONTRACT_OWNER,
                //     mockDebtToken.address,
                //     agreementId,
                //     mockDebtRegistry.address,
                //     mockToken.address,
                //     { from: CONTRACT_OWNER },
                // );
                // generate debt token
                // fill debt token
                // transfer debt token to CrowdfundingTokenRegistry
            });
        });
    });
});
