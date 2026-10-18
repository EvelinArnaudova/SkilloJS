// Run from the repository root: node lectures/05-functions-deep-dive-and-modules/examples/04-modules-demo/main.js
//
// This folder shows how a small automation project is organized into
// modules: each file has one responsibility, and main.js imports what it
// needs with named imports. Node resolves these as ES modules because the
// repository's package.json has "type": "module".
import * as validators from "./src/validators.js";
import { createUser } from "./src/testData.js";
import { printTestResult } from "./src/testUtils.js";

const user = createUser("alice", "admin");
const statusCode = 200;

console.log("Test user:", user);

printTestResult("Successful response", validators.isSuccessfulStatus(statusCode));
printTestResult("Expected status", validators.isExpectedStatus(statusCode, 200));
