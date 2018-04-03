// Scenarios
import { RegisterTermStartScenario } from "../runners/index";

export const UNSUCCESSFUL_REGISTER_TERM_START_SCENARIOS: RegisterTermStartScenario[] = [
    {
        description: "when invoked outside of the debt kernel",
        invokedByDebtKernel: false,
        succeeds: false,
    },
];
