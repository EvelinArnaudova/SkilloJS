// Run from the repository root: node lectures/01-development-env-basics/practice/03-response-thresholds.js
const responseTimeMs = 820;
const warningThresholdMs = 500;
const timeoutMs = 1000;

console.log("Response time:", responseTimeMs, "ms");
console.log("Above warning threshold:", responseTimeMs > warningThresholdMs);
console.log("Within timeout:", responseTimeMs <= timeoutMs);

if (responseTimeMs <= timeoutMs) {
  console.log("Request completed before timeout.");
} else {
  console.log("Request timed out.");
}

console.log(
  "Practice: change responseTimeMs to test values below, at, and above the timeout.",
);
