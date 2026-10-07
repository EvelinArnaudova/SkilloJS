// Run from the repository root: node lectures/03-arrays-and-loops-for-test-automation/practice/01-array-basics.js
const browsers = ["Chrome", "Firefox", "Safari"];

console.log("Browsers:", browsers);
console.log("First browser:", browsers[0]);
console.log("Last browser:", browsers[browsers.length - 1]);

browsers.push("Edge");
console.log("After adding Edge:", browsers);

console.log(
  "Practice: add two more browsers with push(), then remove the first one with shift().",
);
