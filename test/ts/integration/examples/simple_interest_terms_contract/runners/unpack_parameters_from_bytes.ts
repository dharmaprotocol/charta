// // External libraries
// import * as ABIDecoder from "abi-decoder";
// import { expect } from "chai";
//
// // Scenario runners
// import { RegisterTermStartScenario } from "./";
//
// // Runners
// import { SimpleInterestTermsContractRunner } from "./simple_interest_terms_contract";
//
// export class UnpackParametersFromBytes extends SimpleInterestTermsContractRunner {
//     public testScenario(scenario: RegisterTermStartScenario) {
//         let txHash: string;
//
//         describe(scenario.description, () => {
//             before(async () => {
//                 await this.setupDebtOrder(scenario);
//
//                 // Setup ABI decoder in order to decode logs
//                 ABIDecoder.addABI(this.contracts.simpleInterestTermsContract.abi);
//             });
//
//             after(() => {
//                 // Tear down ABIDecoder before next set of tests
//                 ABIDecoder.removeABI(this.contracts.simpleInterestTermsContract.abi);
//             });
//
//             it(`should return ${scenario.expectedOutput}`, () => {
//                 const this.contracts.simpleInterestTermsContract.unpackParametersFromBytes(
//                     scenario.termsContractParameters
//                 ));
//                expect()
//             });
//         });
//     }
// }
