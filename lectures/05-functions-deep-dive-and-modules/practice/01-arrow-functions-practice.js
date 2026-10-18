// Run from the repository root: node lectures/05-functions-deep-dive-and-modules/practice/01-arrow-functions-practice.js
const isValidStatus = (statusCode) => statusCode >= 200 && statusCode < 300;

console.log(isValidStatus(200));
console.log(isValidStatus(500));

const createGreeting = (name) => `Hello, ${name}!`;

console.log(createGreeting("Sarah"));

console.log(
  "Practice: write an arrow function isEmpty(value) that returns true when value is an empty string.",
);
