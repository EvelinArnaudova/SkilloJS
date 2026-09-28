// Run from the repository root: node lectures/01-development-env-basics/practice/01-test-data-types.js
const userName = "student@example.test";
const userId = 42;
const isLoggedIn = false;
const latestStatus = null;

console.log("Username:", userName, "| type:", typeof userName);
console.log("User ID:", userId, "| type:", typeof userId);
console.log("Logged in:", isLoggedIn, "| type:", typeof isLoggedIn);
console.log("Latest status:", latestStatus, "| type:", typeof latestStatus);

console.log(
  "Practice: change each value and predict its type before running this file.",
);
