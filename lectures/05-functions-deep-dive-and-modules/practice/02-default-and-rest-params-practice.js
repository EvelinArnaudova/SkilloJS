// Run from the repository root: node lectures/05-functions-deep-dive-and-modules/practice/02-default-and-rest-params-practice.js
function createTestUser(username, role = "user") {
  return { username, role };
}

console.log(createTestUser("priya"));
console.log(createTestUser("jon", "admin"));

function countPassed(...results) {
  return results.filter((result) => result === "PASS").length;
}

console.log(countPassed("PASS", "FAIL", "PASS", "PASS"));

console.log(
  "Practice: add a maxRetries = 3 default parameter to a retryRequest(url, maxRetries) function.",
);
