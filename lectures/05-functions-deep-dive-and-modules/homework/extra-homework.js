//Import the functions you need from `src/validators.js`, `src/testData.js`, 
// and `src/testUtils.js` using named imports.
import {
    getPassedTests,
    getFailedTests,
    calculateAverageDuration,
    createSummary,
    printSummary
} from './src/testUtils.js'

import {createUser} from './src/testData.js'

import {
    isValidUsername,
    isSuccessfulStatus,
    isExpectedStatus,
    isWithinResponseTime
} from './src/validators.js'


//Create an array of at least six test result objects. 
//Give each one a `name`, a `status` of `"PASS"` or `"FAIL"`, 
//and a numeric `duration` in milliseconds. 
//Include at least two passing tests and two failing tests.
const testResults = [
    { username: "jD", status: "PASS", duration: 508 },
    { username: "janeSmith", status: "FAIL", duration: 1021 },
    { username: "aliceJohnson", status: "FAIL", duration: 0 },
    { username: "", status: "FAIL", duration: 1500 },
    { username: "charlieDavis", status: "PASS", duration: 475 },
    { username: "eveWhite", status: "FAIL", duration: 1001 }
];


//Use `getPassedTests` and `getFailedTests` to get the passing and failing results. 
// Log the names of the tests in each group and the number of tests in each group.
console.log("Number of Passed Tests:", getPassedTests(testResults).length);
console.log("Number of Failed Tests:", getFailedTests(testResults).length);
console.log("Passed Tests:", getPassedTests(testResults));
console.log("Failed Tests:", getFailedTests(testResults));


//Use `calculateAverageDuration` to log the average duration of all tests and the average duration of the passing tests. 
// Also call it with an empty array and confirm it returns `0`.
console.log("Average Duration of Passed Tests:", calculateAverageDuration(getPassedTests(testResults)));
console.log("Average Duration of All Tests:", calculateAverageDuration(testResults));
console.log("Invalid Duration Tests:", calculateAverageDuration([]));


//Use `createSummary` and `printSummary` to display a report for the full test array.
console.log("Test Summary:", createSummary(testResults));

const summary = createSummary(testResults)
console.log("Printed Test Summary:");
printSummary(summary);


//Use `createUser` to create a user with the default role and another user with a role of your choice. 
// Log both objects.
console.log("Newly created user:", createUser("regularUser"));
console.log("Newly created admin user:", createUser("adminUser", "admin"));


//Check usernames with `isValidUsername`: try a valid username, 
//a username shorter than three characters, and an empty string. Log each result.
const userNames = testResults.map(test => test.username);
const validUserNames = userNames.filter(isValidUsername);
console.log("Valid Usernames:", validUserNames);


//Try `isSuccessfulStatus` with status codes `199`, `200`, `299`, and `300`. 
// Log the results and note which codes count as successful.
const HTTPStatuses = [
    { name: "Test 1", status: 200, duration: 102},
    { name: "Test 2", status: 199, duration: 999},
    { name: "Test 3", status: 300, duration: 120},
    { name: "Test 4", status: 299, duration: 1110}
];

const successfulHTTPStatusNames = HTTPStatuses
    .filter(test => isSuccessfulStatus(test.status))
    .map(test => test.name);

console.log("Successful HTTP tests:", successfulHTTPStatusNames);


//Try `isExpectedStatus` once with only an actual status code and 
// once with both an actual and expected status code. Log both results.
const actualStatusCodes = HTTPStatuses.map(test => test.status);
const actualStatusCode1 = actualStatusCodes[1];
const actualStatusCode2 = actualStatusCodes[2];

console.log("Test 2 Status Code:", isExpectedStatus(actualStatusCode1));
console.log("Test 3 Status Code:", isExpectedStatus(actualStatusCode2, 303));


//Try `isWithinResponseTime` with a response below, equal to, 
//and above the default limit. Then try it again with a custom limit. Log the results.
const responseTimes = HTTPStatuses.map(test => test.duration);
const responseTime1 = responseTimes[0];
const responseTime2 = responseTimes[3];
const responseTime3 = responseTimes[1];

console.log("Response time 1 within the expected range:", isWithinResponseTime(responseTime1));
console.log("Response time 2 outside the expected range:", isWithinResponseTime(responseTime2));
console.log("Response time 3 result with custom limit:", isWithinResponseTime(responseTime3, 600));


//Create at least three API response objects with a status code and response time. 
// For each response, combine `isSuccessfulStatus` and `isWithinResponseTime` with `&&` to 
// decide whether the overall result is `"PASS"` or `"FAIL"`. Log each result.
for (const test of HTTPStatuses) {
    if (isWithinResponseTime(test.duration) && isExpectedStatus(test.status)) {
        console.log(`HTTP test "${test.name}" has passed both the response time and status checks.`);
    } else {
        console.log(`HTTP test "${test.name}" has failed either the response time or status checks.`);
    }
}

