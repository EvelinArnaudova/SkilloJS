// Run from the repository root: node lectures/05-functions-deep-dive-and-modules/examples/03-scope-and-clean-functions.js

// Early returns (guard clauses) exit as soon as a condition is met,
// which avoids deeply nested if/else chains.
function validateUsername(username) {
  if (!username) {
    return "Username is required";
  }

  if (username.length < 3) {
    return "Username is too short";
  }

  return "Username is valid";
}

console.log(validateUsername(""));
console.log(validateUsername("ab"));
console.log(validateUsername("alice"));

// A guard clause can also protect against edge cases like an empty array.
function calculateAverage(values) {
  if (values.length === 0) {
    return 0;
  }

  const total = values.reduce((sum, value) => sum + value, 0);

  return total / values.length;
}

console.log(calculateAverage([100, 200, 300]));
console.log(calculateAverage([]));

// Scope: variables declared outside a function are visible inside it,
// but variables declared inside a function stay local to it.
const baseUrl = "https://demo-app.com";

function createLoginUrl() {
  const loginPath = "/login";
  return baseUrl + loginPath;
}

console.log(createLoginUrl());
console.log(baseUrl);
// console.log(loginPath); // would throw ReferenceError: loginPath is not defined here

// Block scope: let/const declared inside { } (if, loops, etc.) are not
// visible outside that block.
const isLoggedIn = true;

if (isLoggedIn) {
  const status = "PASS";
  console.log("Inside the block:", status);
}
// console.log(status); // would throw ReferenceError: status is not defined here

// A pure function always returns the same output for the same input and
// has no side effects, which makes it easy to test and reason about.
function calculateDiscount(price, percentage) {
  return price - (price * percentage) / 100;
}

console.log(calculateDiscount(100, 10));
console.log(calculateDiscount(100, 10));



let taxRate = 0.1; // 10% tax rate

function calculateTax(amount) {
  return amount * taxRate;
}

console.log(calculateTax(100));

// Change tax rate in a function
function setTaxRate(newRate) {
  taxRate = newRate;
}

setTaxRate(0.2); // Change tax rate to 20%
console.log(calculateTax(100));