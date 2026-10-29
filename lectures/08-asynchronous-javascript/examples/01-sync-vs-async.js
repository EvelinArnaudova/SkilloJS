// Run from the repository root: node lectures/08-asynchronous-javascript/examples/01-sync-vs-async.js

// Synchronous code executes one operation at a time, in order.
console.log("Test started");
console.log("Validating response");
console.log("Test finished");

// Asynchronous operations can complete later. setTimeout() schedules a
// callback to run after a delay, without blocking the code that follows it.
console.log("Async demo started");

setTimeout(() => {
  console.log("Async operation completed");
}, 5000);

console.log("Async demo finished (this logs before the timeout callback)");


const promise = new Promise((resolve) => {
  resolve("Test data loaded");
});

promise.then(result => {
  console.log(result);
});

