// Run from the repository root: node lectures/01-development-env-basics/examples/02-variables-and-data.js
const userName = "testuser@example.test";
const userId = 12345;
const isLoggedIn = false;
const baseUrl = "https://demo.example.test";
const timeoutMs = 30000;
const emptyValue = null;
const pendingValue = undefined;
let retryCount = 0;

retryCount += 1;

console.log("Username:", userName, "| type:", typeof userName);
console.log("User ID:", userId, "| type:", typeof userId);
console.log("Logged in:", isLoggedIn, "| type:", typeof isLoggedIn);
console.log("Pending value:", pendingValue, "| type:", typeof pendingValue);
console.log(
  "Intentionally empty:",
  emptyValue,
  "| is null:",
  emptyValue === null,
);
console.log("Base URL:", baseUrl);
console.log("Timeout:", timeoutMs, "ms");
console.log("Retry count:", retryCount);

const firstName = "Sarah";
const lastName = "Smith";
const fullName = firstName + " " + lastName;
const greeting = `Hello, ${fullName}!`;

console.log("Full name:", fullName);
console.log(greeting);

const actualStatus = 200;
const expectedStatus = 200;

console.log("Status matches:", actualStatus === expectedStatus);
console.log("Status is not an error:", actualStatus < 400);
