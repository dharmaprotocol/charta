// Scenarios
import { RegisterTermStartScenario } from "../runners/index";

export const SUCCESSFUL_REGISTER_TERM_START_SCENARIOS: RegisterTermStartScenario[] = [
    {
        description: "when invoked by the filling of a debt order",
        invokedByDebtKernel: true,
        succeeds: true,
    },
];
