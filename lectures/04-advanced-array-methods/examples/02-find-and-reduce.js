// Run from the repository root: node lectures/04-advanced-array-methods/examples/02-find-and-reduce.js

const users = ["alice", "bob", "charlie"];

// find() scans the array and returns the FIRST element for which the
// callback returns true. It stops as soon as a match is found, and
// returns undefined when nothing matches.
const foundUser = users.find((user) => user === "bob");
const missingUser = users.find((user) => user === "zack");

console.log("Found user:", foundUser);
console.log("Missing user:", missingUser);

const statusCodes = [200, 404, 500, 404];

// filter() returns every match, find() returns only the first one.
const allErrors = statusCodes.filter((status) => status >= 400);
const firstError = statusCodes.find((status) => status >= 400);

console.log("All error codes:", allErrors);
console.log("First error code:", firstError);

const prices = [100, 200, 300];

// reduce() walks the array and combines every element into ONE result.
// The callback receives the running total ("sum") and the current
// element ("price"); the second argument to reduce() (0) is the
// starting value of that running total.
const total = prices.reduce((sum, price) => sum + price, 0);

console.log("Total price:", total);

const testResults = ["PASS", "PASS", "FAIL", "PASS", "FAIL"];

// reduce() is handy for QA counters: keep the count unchanged on a pass,
// increase it by one on a fail.
const failedTests = testResults.reduce(
  (count, result) => (result === "FAIL" ? count + 1 : count),
  0,
);

console.log(`Failed tests: ${failedTests}`);
