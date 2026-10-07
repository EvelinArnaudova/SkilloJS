// Run from the repository root: node lectures/03-arrays-and-loops-for-test-automation/examples/04-loops-with-conditionals.js

// Loop + conditional: filtering test data by response time.
const responseTimes = [250, 450, 1200, 800, 1500];

for (const responseTime of responseTimes) {
  if (responseTime > 1000) {
    console.log(`FAIL: Slow response - ${responseTime}ms`);
  } else {
    console.log(`PASS: ${responseTime}ms`);
  }
}

// Loop + conditional: validating HTTP status codes.
const statusCodes = [200, 200, 404, 500, 201];

for (const statusCode of statusCodes) {
  if (statusCode >= 200 && statusCode < 300) {
    console.log(`PASS: ${statusCode}`);
  } else {
    console.log(`FAIL: ${statusCode}`);
  }
}

// break stops the loop immediately, useful when a critical failure
// is found and continuing has no value.
const statuses = [200, 200, 200, 500, 200];

for (const status of statuses) {
  if (status >= 500) {
    console.log("Critical error found");
    break;
  }

  console.log(`Valid status: ${status}`);
}

// continue skips the current iteration, useful for ignoring
// incomplete or irrelevant test data.
const namesWithGaps = ["alice", "", "bob", "", "charlie"];

for (const user of namesWithGaps) {
  if (!user) {
    continue;
  }

  console.log(`Testing user: ${user}`);
}

// Nested loops can represent combinations, such as
// browsers x environments x test scenarios.
const browsers = ["Chrome", "Firefox"];
const environments = ["QA", "Staging"];

for (const browser of browsers) {
  for (const environment of environments) {
    console.log(`${browser} on ${environment}`);
  }
}

// Data-driven testing: one piece of test logic, executed for every
// item in the dataset.
const testUsers = ["standardUser", "adminUser", "invalidUser"];

for (const user of testUsers) {
  if (user === "invalidUser") {
    console.log(`Expected failure for ${user}`);
  } else {
    console.log(`Expected successful login for ${user}`);
  }
}

// Combining arrays, indexes, loops, conditions, and string comparisons
// to locate a specific failure.
const results = ["PASS", "PASS", "FAIL", "PASS", "FAIL"];

for (let i = 0; i < results.length; i++) {
  if (results[i] === "FAIL") {
    console.log(`Failure found at index ${i}`);
  }
}
