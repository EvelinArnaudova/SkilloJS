// Run from the repository root: node lectures/01-development-env-basics/examples/04-qa-validation.js
const expectedUrl = "https://demo.example.test/dashboard";

function checkUrl(actualUrl) {
  const matches = actualUrl === expectedUrl;

  console.log("Expected URL:", expectedUrl);
  console.log("Actual URL:", actualUrl);
  console.log("Result:", matches ? "PASS" : "FAIL");

  return matches;
}

function validateStatus(expected, actual) {
  const matches = expected === actual;

  console.log(`Expected status: ${expected}`);
  console.log(`Actual status: ${actual}`);
  console.log("Result:", matches ? "PASS" : "FAIL");

  return matches;
}

checkUrl("https://demo.example.test/dashboard");
validateStatus(200, 200);
