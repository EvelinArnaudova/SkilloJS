// Run from the repository root: node lectures/05-functions-deep-dive-and-modules/examples/01-function-syntax.js

// Function declaration: named with the `function` keyword, can be reused anywhere.
function isSuccessfulStatus(statusCode) {
  return statusCode >= 200 && statusCode < 300;
}

console.log(isSuccessfulStatus(200));
console.log(isSuccessfulStatus(404));

// Function expression: the function is assigned to a variable.
const calculateTotal = function (price, quantity) {
  return price * quantity;
};

console.log(calculateTotal(10, 3));

// Arrow function: shorter syntax, common for small utilities and callbacks.
const greetTester = (name) => {
  console.log(`Hello, ${name}!`);
};

greetTester("Sarah");

// Arrow function with an implicit return: no braces or `return` needed
// when the body is a single expression.
const double = (number) => number * 2;

console.log(double(5));

// Returning an object implicitly must be wrapped in parentheses,
// otherwise `{` is read as the start of a function body.
const createTestResult = (name, status) => ({ name, status });

console.log(createTestResult("Login", "PASS"));


// EXAMPLES FROM QUESTIONS:
// The `!` operator flips a boolean, handy for QA checks phrased as the opposite.
function isTestFailed(status) {
  return !(status === "PASS");
}

console.log(isTestFailed("FAIL"));
console.log(isTestFailed("PASS"));

// Real QA scenario: skip verification steps while an element is still disabled.
function isButtonClickable(button) {
  return !button.disabled;
}

console.log(isButtonClickable({ disabled: true }));
console.log(isButtonClickable({ disabled: false }));


// function validateApiResponse(response, expectations = {}) {
const validateApiResponse = (response, expectations = {}) => {
  const {
    expectedStatus = 200,
    maxResponseTime = 1000,
    requiredFields = [],
  } = expectations;

  const { status, time, body = {} } = response;
  const errors = [];

  if (status !== expectedStatus) {
    errors.push(`Expected status ${expectedStatus}, got ${status}`);
  }

  if (time > maxResponseTime) {
    errors.push(`Response time ${time}ms exceeded limit of ${maxResponseTime}ms`);
  }

  const missingFields = requiredFields.filter((field) => !(field in body));
  if (missingFields.length > 0) {
    errors.push(`Missing fields: ${missingFields.join(", ")}`);
  }

  return {
    passed: errors.length === 0,
    errors,
  };
}

// Usage:
const response = {
  status: 200,
  time: 450,
  body: { id: 1, name: "Alice" },
};

const result = validateApiResponse(response, {
  expectedStatus: 200,
  maxResponseTime: 500,
  requiredFields: ["id", "name", "email"],
});

console.log(result);
// { passed: false, errors: [ 'Missing fields: email' ] }

