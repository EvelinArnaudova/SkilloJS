//First homework assignment
let username = "EvelinArnaudova";
let userId = 7869;
let isLoggedIn = true;
const baseURL = "https://demo.qa.com";
const loginPageURL = "https://demo.qa.com/login";
const expectedHTTPStatus = 200;
let actualHTTPStatus = 503;

//Second homework assignment
console.log("Username:", username, "| type:", typeof username);
console.log("User ID:", userId, "| type:", typeof userId);
console.log("Logged in:", isLoggedIn, "| type:", typeof isLoggedIn);
console.log("Base URL:", baseURL, "| type:", typeof baseURL);
console.log(
  "Expected HTTP status:",
  expectedHTTPStatus,
  "| type:",
  typeof expectedHTTPStatus,
);
console.log(
  "Actual HTTP status:",
  actualHTTPStatus,
  "| type:",
  typeof actualHTTPStatus,
);

//Third homework assignment
function createUserMessage(firstName, lastName) {
  return `Welcome, ${firstName} ${lastName}! You get 10% discount on your first purchase.`;
}
console.log(createUserMessage("Evelin", "Arnaudova"));

//Fourth homework assignment
function validateStatus(actual, expected) {
  console.log("Actual HTTP status:", actual);
  console.log("Expected HTTP status:", expected);
  const passed = actual === expected;
  console.log("Validation:", passed ? "PASS" : "FAIL");
  return passed;
}

validateStatus(actualHTTPStatus, expectedHTTPStatus);

//Fifth homework assignment
function printTestSummary(...checks) {
  let passes = 0;
  for (const check of checks) {
    if (check) {
      passes++;
    }
  }
  const failures = checks.length - passes;

  console.log("Test Summary:");
  console.log("- Checks:", checks.length);
  console.log("- Passes:", passes);
  console.log("- Failures:", failures);
  console.log("- Overall result:", failures === 0 ? "PASS" : "FAIL");
}

const check1 = validateStatus(actualHTTPStatus, expectedHTTPStatus);
actualHTTPStatus = 200;
const check2 = validateStatus(actualHTTPStatus, expectedHTTPStatus);
printTestSummary(check1, check2);

//Optional homework assignment
function enterbaseURL(baseURL) {
  console.log("Navigating to base URL:", baseURL);
}

function goToLoginPage(loginPageURL) {
  console.log("Navigating to login page:", loginPageURL);
}

function enterUsername(username) {
  console.log("Entering username:", username);
}

function enterPassword(generatedPassword) {
  console.log("Entering password:", generatedPassword);
}

function clickLoginButton() {
  console.log("Clicking login button");
}

function loginTest(username, generatedPassword, simulatedLoginState) {
  enterbaseURL(baseURL);
  goToLoginPage(loginPageURL);
  enterUsername(username);
  enterPassword(generatedPassword);
  clickLoginButton();

  const actualLoginState = simulatedLoginState;
  const actualWelcomeMessageDisplayed = simulatedLoginState;

  console.log("Expected login state:", true);
  console.log("Actual login state:", actualLoginState);
  console.log("Welcome message displayed:", actualWelcomeMessageDisplayed);

  const result =
    actualLoginState === true && actualWelcomeMessageDisplayed === true
      ? "PASS"
      : "FAIL";

  console.log("Login result:", result);
  return result;
}

loginTest("EvelinArnaudova", "HFggfsThfncd3452?", true);
console.log("-----------==============-----------");
loginTest("EvelinArnaudova", "HFggfsThfncd3452?", false);
