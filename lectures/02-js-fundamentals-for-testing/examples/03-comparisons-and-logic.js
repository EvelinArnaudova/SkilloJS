// Run from the repository root: node lectures/02-js-fundamentals-for-testing/examples/03-comparisons-and-logic.js

// Comparison operators are the base of every pass/fail check.
const actualStatus = 200;
const expectedStatus = 200;
console.log("Strictly equal:", actualStatus === expectedStatus);
console.log("Strictly not equal:", actualStatus !== 404);

// === compares value AND type; the values below look similar but differ in type.
const expected = 200;
const actual = "200";
console.log("Same value, different type:", expected === actual);

// Logical AND (&&): both conditions must be true.
const isLoggedIn = true;
const isAdmin = true;
console.log("AND - both must be true:", isLoggedIn && isAdmin);

// Logical OR (||): at least one condition must be true.
const role = "admin";
console.log(
  "OR - at least one must be true:",
  role === "admin" || role === "manager",
);

// Logical NOT (!): reverses a boolean value.
const isBlocked = false;
console.log("NOT - reverses a boolean:", !isBlocked);

// A single condition can combine multiple requirements.
const responseStatus = 200;
const responseTime = 450;
const testPassed = responseStatus === 200 && responseTime < 1000;
console.log("Test passed:", testPassed);

// JavaScript treats some values as falsy in conditions: false, 0, "", null, undefined, NaN.
const missingUsername = "";
if (missingUsername) {
  console.log("Username provided");
} else {
  console.log("Username is missing");
}
