//Create an array tests of objects, each with name, status ("PASS" or "FAIL"), and duration (a number in ms). Include at least four tests with a mix of passing and failing results.

const tests = [
  {
    name: "Homepage is loaded",
    status: "PASS",
    duration: 304,
  },
  {
    name: "Login modal is expanded",
    status: "PASS",
    duration: 306,
  },
  {
    name: "Username and password fields are visible",
    status: "PASS",
    duration: 1020,
  },
  {
    name: "Is user logged in",
    status: "FAILED",
    duration: 409,
  },
  {
    name: "My account page is loaded",
    status: "FAILED",
    duration: 102,
  },
];

//Use filter() to build a failedTests array containing only the failed tests.
//Use map() on failedTests to build a failedTestNames array containing just their names.

const failedTests = tests.filter((test) => test.status === "FAILED");
const failedTestNames = failedTests.map((test) => test.name);
console.log(`The tests that are failed are: ${failedTestNames}`);

//Use reduce() to calculate the totalDuration of all tests, then calculate the averageDuration.

const totalDuration = tests.reduce((sum, test) => sum + test.duration, 0);
console.log(`The total duration of all tests is: ${totalDuration} ms`);

let averageDuration = totalDuration / tests.length;
averageDuration = parseInt(averageDuration);
console.log(`The average duration of all tests is: ${averageDuration} ms`);

//Use sort() on a copy of tests (for example with [...tests]) to order them by duration, and read off the slowest test.

const slowestTest = [...tests].sort((a, b) => b.duration - a.duration)[0];
console.log(slowestTest.name);

//Use find() to locate the first failed test and log it separately.

const firstFailedtest = tests.find((test) => test.status === "FAILED");
console.log(`The first failed test is: ${firstFailedtest.name}`);

//Use array destructuring to pull name, status, and duration out of one single test object into three variables, then log them.

const [name, status, duration] = [
  tests[0].name,
  tests[0].status,
  tests[0].duration,
];

console.log("Test name:", name);
console.log("Test status:", status);
console.log("Test duration:", duration);

const totalTests = tests.length;
const passedTestsCount = tests.filter((test) => test.status === "PASS").length;
const failedTestsCount = tests.filter(
  (test) => test.status === "FAILED",
).length;
const slowestTestName = slowestTest.name;

const testReport = {
  totalTests,
  passedTestsCount,
  failedTestsCount,
  averageDuration,
  slowestTestName,
  failedTestNames,
};

console.log("Final test report:", testReport);
