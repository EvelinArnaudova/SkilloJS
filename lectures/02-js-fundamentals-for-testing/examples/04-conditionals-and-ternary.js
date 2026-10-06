// Run from the repository root: node lectures/02-js-fundamentals-for-testing/examples/04-conditionals-and-ternary.js

// if/else picks one of two paths based on a condition.
const statusCode = 200;
if (statusCode === 200) {
  console.log("Request successful");
} else {
  console.log("Request failed");
}

// else if checks multiple specific cases in order.
const notFoundStatus = 404;
if (notFoundStatus === 200) {
  console.log("Success");
} else if (notFoundStatus === 404) {
  console.log("Not Found");
} else if (notFoundStatus >= 500) {
  console.log("Server Error");
} else {
  console.log("Other response");
}

// Nested conditions work, but keep them shallow for readability.
const isLoggedIn = true;
const role = "admin";
if (isLoggedIn) {
  if (role === "admin") {
    console.log("Admin dashboard");
  } else {
    console.log("User dashboard");
  }
}

// Ternary operator: a compact if/else for a single value.
const result = statusCode === 200 ? "PASS" : "FAIL";
console.log("Ternary result:", result);

// Combine strings, numbers, and conditions to reach a decision.
const username = "testuser";
const failedAttempts = 2;
const maxAttempts = 3;
if (failedAttempts < maxAttempts) {
  console.log(`User ${username} can try again`);
} else {
  console.log(`User ${username} is locked`);
}

// Practical QA example: login validation with multiple conditions.
const expectedMessage = "Login successful";
const actualMessage = "Login successful";
const loginSucceeded = true;
if (loginSucceeded && actualMessage === expectedMessage) {
  console.log("LOGIN TEST: PASS");
} else {
  console.log("LOGIN TEST: FAIL");
}

// Practical QA example: API response validation with a clear failure reason.
const apiStatusCode = 200;
const apiResponseTime = 850;
if (apiStatusCode !== 200) {
  console.log("FAIL: Unexpected status code");
} else if (apiResponseTime >= 1000) {
  console.log("FAIL: Response too slow");
} else {
  console.log("PASS: API response is valid");
}
