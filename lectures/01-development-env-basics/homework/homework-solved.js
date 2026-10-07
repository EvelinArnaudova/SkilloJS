//First homework assignment
let username = "EvelinArnaudova";
let userId = 7869;
let isLoggedIn = true;
const baseURL = "https://demo.qa.com";
const loginPageURL = "https://demo.qa.com/login";
const expectedHTTPStatus = 200;
let actualHTTPStatus = 503;
let counter = 0;

console.log("-----------==============-----------");
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

console.log("-----------==============-----------");
//Third homework assignment
function createUserMessage(firstName, lastName) {
  return `Welcome, ${firstName} ${lastName}! You get 10% discount on your first purchase.`;
}
console.log(createUserMessage("Evelin", "Arnaudova"));

console.log("-----------==============-----------");
//Fourth homework assignment
function validateStatus(actualHTTPStatus, expectedHTTPStatus) {
  counter = counter + 1;
  console.log("Actual HTTP status:", actualHTTPStatus);
  console.log("Expected HTTP status:", expectedHTTPStatus);
  if (actualHTTPStatus === expectedHTTPStatus) {
    return "PASS";
  } else {
    return "FAIL";
  }
}

const check1 = validateStatus(actualHTTPStatus, expectedHTTPStatus);
console.log("Validation result:", check1);

actualHTTPStatus = 200;
const check2 = validateStatus(actualHTTPStatus, expectedHTTPStatus);
console.log("Validation result:", check2);

console.log("-----------==============-----------");
//Fifth homework assignment

function printTestSummary(check1, check2) {
  console.log("Test Summary:");
  console.log("- Check 1:", check1);
  console.log("- Check 2:", check2);
  console.log("- Total validations:", counter);
}

printTestSummary(check1, check2);

console.log("-----------==============-----------");

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
