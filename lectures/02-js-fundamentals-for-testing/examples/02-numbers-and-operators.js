// Run from the repository root: node lectures/02-js-fundamentals-for-testing/examples/02-numbers-and-operators.js

// Numbers show up in test data as prices, quantities, and totals.
const price = 49.99;
const quantity = 3;
const total = price * quantity;
console.log("Total:", total);

// The five basic arithmetic operators.
const a = 10;
const b = 3;
console.log("Add:", a + b);
console.log("Subtract:", a - b);
console.log("Multiply:", a * b);
console.log("Divide:", a / b);
console.log("Remainder:", a % b);

// Automation often needs calculated values like maximum wait time.
const timeout = 5000;
const retries = 3;
const totalWaitTime = timeout * retries;
console.log(`Maximum wait time: ${totalWaitTime} ms`);
