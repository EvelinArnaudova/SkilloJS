// Run from the repository root: node lectures/03-arrays-and-loops-for-test-automation/examples/01-arrays-and-indexes.js

// An array stores multiple values in a single variable.
const users = ["alice", "bob", "charlie"];

console.log("All users:", users);

// Array indexes start at 0, not 1.
console.log("First user (index 0):", users[0]);
console.log("Second user (index 1):", users[1]);
console.log("Third user (index 2):", users[2]);

// Arrays are mutable: individual elements can be changed after creation.
users[1] = "david";
console.log("After updating index 1:", users);

// length tells us how many elements are in the array.
console.log("Number of users:", users.length);

// Arrays of numbers are common for QA metrics like response times.
const responseTimes = [250, 430, 780, 1200];

console.log("First response time:", responseTimes[0]);
console.log("Number of response times:", responseTimes.length);

// Arrays can technically hold mixed data types, but for professional
// test automation we usually keep one consistent purpose per array.
const mixedTestData = ["Chrome", 153, true];

console.log("Browser:", mixedTestData[0]);
console.log("Build number:", mixedTestData[1]);
console.log("Is passing:", mixedTestData[2]);
