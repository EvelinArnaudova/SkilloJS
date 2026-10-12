// Run from the repository root: node lectures/04-advanced-array-methods/examples/03-sort-and-destructuring.js

const responseTimes = [850, 250, 1200, 450];

// sort() reorders the array IN PLACE using a comparator function.
// The comparator receives two elements (a, b); returning a negative
// number means "a before b", positive means "b before a", zero means
// "keep their order".
responseTimes.sort((a, b) => a - b);
console.log("Ascending response times:", responseTimes);

responseTimes.sort((a, b) => b - a);
console.log("Descending response times:", responseTimes);

const tests = [
  { name: "Login", duration: 500 },
  { name: "Checkout", duration: 1200 },
  { name: "Search", duration: 300 },
];

// The same comparator idea works for object properties, not just numbers.
tests.sort((a, b) => b.duration - a.duration);
console.log("Tests sorted by duration (slowest first):", tests);

const numbers = [10, 2, 30, 5];

// Without a comparator, sort() converts elements to strings and compares
// them alphabetically, which gives the wrong order for numbers.
const stringSorted = [...numbers].sort();
const numericSorted = [...numbers].sort((a, b) => a - b);

console.log("Default (string) sort:", stringSorted);
console.log("Correct numeric sort:", numericSorted);

const browsers = ["Chrome", "Firefox", "Edge"];

// Array destructuring pulls values out of an array by position,
// straight into named variables.
const [first, second, third] = browsers;

console.log("First browser:", first);
console.log("Second browser:", second);
console.log("Third browser:", third);

// A skipped comma leaves a position out of the destructuring.
const [primary, , tertiary] = browsers;

console.log("Primary browser:", primary);
console.log("Tertiary browser:", tertiary);

const testResult = ["Login Test", 200, "PASS"];
const [testName, statusCode, result] = testResult;

console.log("Test name:", testName);
console.log("Status code:", statusCode);
console.log("Result:", result);
