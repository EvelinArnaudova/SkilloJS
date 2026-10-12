// Run from the repository root: node lectures/04-advanced-array-methods/practice/01-map-practice.js
const usernames = ["sarah", "jon", "priya"];

// map() returns a new array; it does not change usernames.
const greetings = usernames.map((name) => `Hello, ${name}!`);

console.log("Usernames:", usernames);
console.log("Greetings:", greetings);

console.log(
  "Practice: use map() to build a new array of login URLs like 'https://demo.example.test/sarah'.",
);
