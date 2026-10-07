// Run from the repository root: node lectures/03-arrays-and-loops-for-test-automation/examples/03-loops-basics.js

// The for loop has three parts: initialization, condition, update.
for (let i = 0; i < 5; i++) {
  console.log("Counter:", i);
}

// Looping through test data with a for loop and the array's length.
const users = ["alice", "bob", "charlie"];

for (let i = 0; i < users.length; i++) {
  console.log(`Testing user: ${users[i]}`);
}

// for...of is a simpler way to iterate when you only need the values,
// not the index.
const browsers = ["Chrome", "Firefox", "Edge"];

for (const browser of browsers) {
  console.log(`Running test on ${browser}`);
}

// while loops continue running while a condition is true.
// Useful for retries, polling, and waiting for a condition to change.
let retryCount = 0;

while (retryCount < 3) {
  console.log(`Attempt ${retryCount + 1}`);
  retryCount++;
}

// Always make sure the condition can eventually become false,
// otherwise the loop never ends (an infinite loop).
let counter = 0;

while (counter < 3) {
  console.log("Safe counter:", counter);
  counter++; // removing this line would cause an infinite loop
}
