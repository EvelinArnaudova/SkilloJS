// Run from the repository root: node lectures/03-arrays-and-loops-for-test-automation/examples/02-array-methods.js

// Instead of creating many separate variables...
// let user1 = "alice";
// let user2 = "bob";
// let user3 = "charlie";
// ...we build one array and grow it with array methods.
const users = ["alice", "bob"];

// push() adds an element to the end.
users.push("charlie");
console.log("After push:", users);

// pop() removes the last element.
users.pop();
console.log("After pop:", users);

// unshift() adds an element to the beginning.
users.unshift("admin");
console.log("After unshift:", users);

// shift() removes the first element.
users.shift();
console.log("After shift:", users);

// These methods help build and modify test datasets dynamically,
// for example when preparing data before a test run.
const testUsers = [];

testUsers.push("standardUser");
testUsers.push("adminUser");
testUsers.push("lockedUser");

console.log("Prepared test users:", testUsers);
console.log("Total test users:", testUsers.length);
