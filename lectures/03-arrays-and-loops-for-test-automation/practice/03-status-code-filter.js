// Run from the repository root: node lectures/03-arrays-and-loops-for-test-automation/practice/03-status-code-filter.js
const statusCodes = [200, 301, 404, 500, 204, 403];

for (const statusCode of statusCodes) {
  if (statusCode >= 400) {
    console.log(`FAIL: ${statusCode}`);
  } else {
    console.log(`PASS: ${statusCode}`);
  }
}

console.log(
  "Practice: add a break so the loop stops at the first status code of 500 or higher.",
);
