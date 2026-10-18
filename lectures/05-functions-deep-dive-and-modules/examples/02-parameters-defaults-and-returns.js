// Run from the repository root: node lectures/05-functions-deep-dive-and-modules/examples/02-parameters-defaults-and-returns.js

// return sends a value back to the caller so it can be reused;
// console.log() only displays it and gives back nothing useful.
function calculateTotalLogged(price, quantity) {
  console.log(price * quantity);
}

function calculateTotal(price, quantity) {
  return price * quantity;
}

const loggedResult = calculateTotalLogged(10, 3);
const returnedResult = calculateTotal(10, 3);

console.log("Logged version result:", loggedResult);
console.log("Returned version result:", returnedResult);

// Default parameters are used when an argument is omitted or undefined.
function createUserMessage(username, role = "user") {
  return `${username} has role ${role}`;
}

console.log(createUserMessage("Alice"));
console.log(createUserMessage("Bob", "admin"));

function validateResponse(statusCode, expectedStatus = 200) {
  return statusCode === expectedStatus;
}

console.log(validateResponse(200));
console.log(validateResponse(404));

// Rest parameters collect any number of arguments into an array.
function calculateSum(...prices) {
  return prices.reduce((sum, price) => sum + price, 0);
}

console.log(calculateSum(10, 20, 30));
console.log(calculateSum(5, 15));

// Functions can return different kinds of results depending on what
// the caller needs: a boolean, a string, or a structured object.
function isWithinResponseTime(responseTime, maxResponseTime = 1000) {
  return responseTime < maxResponseTime;
}

function getTestMessage(testName) {
  return `Test completed: ${testName}`;
}

function createTestResult(name, status, duration) {
  return { name, status, duration };
}

console.log(isWithinResponseTime(450));
console.log(getTestMessage("Login"));
console.log(createTestResult("Login", "PASS", 450));
