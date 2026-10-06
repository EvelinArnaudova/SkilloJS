// Run from the repository root: node lectures/02-js-fundamentals-for-testing/practice/03-retry-decision.js
const attemptNumber = 2;
const maxAttempts = 4;
const lastRequestFailed = true;

const canRetry = lastRequestFailed && attemptNumber < maxAttempts;

if (canRetry) {
  console.log(`Attempt ${attemptNumber} failed. Retrying...`);
} else if (lastRequestFailed) {
  console.log(`Attempt ${attemptNumber} failed. No attempts left.`);
} else {
  console.log(`Attempt ${attemptNumber} succeeded.`);
}

let summary;
if (canRetry) {
  summary = "RETRY";
} else if (lastRequestFailed) {
  summary = "STOP";
} else {
  summary = "DONE";
}
console.log("Summary:", summary);

console.log(
  "Practice: change attemptNumber, maxAttempts, and lastRequestFailed to test each branch.",
);
