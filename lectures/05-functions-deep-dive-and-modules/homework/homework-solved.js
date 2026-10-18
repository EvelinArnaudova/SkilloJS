// Run from the repository root: npm run test:lecture-05
import {
  isSuccessfulStatus,
  isExpectedStatus,
  isValidUsername,
  isWithinResponseTime,
} from "./src/validators.js";
import { createUser } from "./src/testData.js";
import { createSummary, printSummary } from "./src/testUtils.js";


const tests = [
  { name: "Login", status: "PASS", duration: 450 },
  { name: "Search", status: "FAIL", duration: 1200 },
  { name: "Checkout", status: "PASS", duration: 800 },
  { name: "Profile", status: "FAIL", duration: 650 },
];

const defaultRoleUser = createUser("priya");
const adminUser = createUser("jon", "admin");

console.log("Default role user:", defaultRoleUser);
console.log("Admin user:", adminUser);

console.log("Valid username check:", isValidUsername("alice"));
console.log("Invalid username check:", isValidUsername(""));

const statusCode = 200;

console.log("Is successful status:", isSuccessfulStatus(statusCode));
console.log("Is expected status:", isExpectedStatus(statusCode, 200));

const summary = createSummary(tests);

printSummary(summary);

// Optional challenge
const apiStatusCode = 200;
const apiResponseTime = 850;
const apiResult =
  isSuccessfulStatus(apiStatusCode) && isWithinResponseTime(apiResponseTime)
    ? "PASS"
    : "FAIL";

console.log(`API response check: ${apiResult}`);
