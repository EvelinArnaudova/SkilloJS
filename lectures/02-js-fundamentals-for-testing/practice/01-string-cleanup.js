// Run from the repository root: node lectures/02-js-fundamentals-for-testing/practice/01-string-cleanup.js
const rawInput = "  QA.Tester@Example.COM  ";
const cleaned = rawInput.trim().toLowerCase();

console.log("Raw input:", JSON.stringify(rawInput));
console.log("Cleaned:", cleaned);
console.log("Contains '@':", cleaned.includes("@"));
console.log("Starts with 'qa':", cleaned.startsWith("qa"));

console.log(
  "Practice: change rawInput and predict cleaned before running this file.",
);
