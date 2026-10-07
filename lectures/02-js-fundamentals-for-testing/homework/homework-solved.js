//First point of homework

const expectedStatus = 200;
let actualStatus = 200;
let responseTime = 1500;
const maxResponseTime = 2000;

// Second point of homework
console.log("---------------------");

if (actualStatus !== expectedStatus) {
  console.log("FAIL: Unexpected status code");
} else if (responseTime >= maxResponseTime) {
  console.log("FAIL: Response too slow");
} else {
  console.log("PASS: API response is valid");
}

// Third point of homework
console.log("---------------------");

if (actualStatus !== expectedStatus) {
  console.log(
    `FAIL: Unexpected status code, because ${actualStatus} does not match ${expectedStatus}`,
  );
} else if (responseTime >= maxResponseTime) {
  console.log(
    `FAIL: Response too slow, because ${responseTime} is greater than or equal to ${maxResponseTime}`,
  );
} else {
  console.log(
    `PASS: API response is valid, because ${actualStatus} matches ${expectedStatus} and ${responseTime} is less than ${maxResponseTime}`,
  );
}

// Fourth point of homework
console.log("---------------------");

let username = " uSeR221 ";
username = username.trim();
username = username.toLowerCase();

console.log(`Username is: ${username}`);

// Fifth point of homework
console.log("---------------------");

let isUserLoggedIn = false;

if (isUserLoggedIn && expectedStatus === 200) {
  console.log("User is logged in and API response is valid");
} else if (isUserLoggedIn || expectedStatus === 200) {
  console.log("User is logged in OR API response is valid");
} else {
  console.log("User is not logged in and API response is not valid");
}

// Sixth point of homework
console.log("---------------------");

let result = maxResponseTime >= responseTime ? "PASS" : "FAIL";
console.log(`Max response time test result: ${result}`);

//Optimal challenge task
console.log("---------------------");

let attemptNumber = 3;
const maxAttempts = 5;
let statusCheck = "FAIL";

if (attemptNumber < maxAttempts && statusCheck === "FAIL") {
  console.log("RETRY");
} else console.log("FAIL");

//Enchanced optimal challenge task using Copilot
console.log("---------------------");   

const expectedStatus1 = 200;
const actualStatus1 = 500;
const attemptNumber1 = 3;
const maxAttempts1 = 5;


const statusCheck1 = actualStatus1 === expectedStatus1 ? "PASS" : "FAIL";

if (statusCheck1 === "FAIL" && attemptNumber1 < maxAttempts1) {
  console.log("RETRY");
} else if (statusCheck1=== "FAIL") {
  console.log("FAIL");
} else {
  console.log("PASS");
}
