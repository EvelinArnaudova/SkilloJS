// Run from the repository root: node lectures/04-advanced-array-methods/examples/04-practical-patterns.js

const tests = [
  { name: "Login", status: "PASS" },
  { name: "Search", status: "FAIL" },
  { name: "Checkout", status: "PASS" },
];

// Pattern: filter() to select the data you care about, then map() to
// transform it into the shape you actually need.
const failedTestNames = tests
  .filter((test) => test.status === "FAIL")
  .map((test) => test.name);

console.log("Failed test names:", failedTestNames);

const executionTimes = [450, 800, 1200, 650];

// reduce() aggregates the array into a single total, which can then be
// combined with .length to produce an average.
const totalTime = executionTimes.reduce((sum, time) => sum + time, 0);
const averageTime = totalTime / executionTimes.length;

console.log(`Total: ${totalTime}ms`);
console.log(`Average: ${averageTime}ms`);

const timedTests = [
  { name: "Login", duration: 500 },
  { name: "Search", duration: 900 },
  { name: "Checkout", duration: 1500 },
];

// Spreading into a new array ([...timedTests]) before sort() keeps the
// original array unchanged, since sort() mutates in place.
const sortedTests = [...timedTests].sort((a, b) => b.duration - a.duration);

console.log("Slowest test:", sortedTests[0]);

// Mini test report built entirely from array methods.
const testReport = {
  total: tests.length,
  passed: tests.filter((test) => test.status === "PASS").length,
  failed: tests.filter((test) => test.status === "FAIL").length,
  averageDurationMs: averageTime,
  slowestTest: sortedTests[0].name,
  failedTestNames,
};

console.log("Test report:", testReport);
