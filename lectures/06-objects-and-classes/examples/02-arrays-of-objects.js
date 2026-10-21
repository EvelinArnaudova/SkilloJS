// Run from the repository root: node lectures/06-objects-and-classes/examples/02-arrays-of-objects.js

// Arrays of objects let one loop apply the same logic to many test scenarios.
const users = [
  { username: "alice", role: "admin" },
  { username: "bob", role: "tester" },
  { username: "charlie", role: "user" },
];

for (const user of users) {
  console.log(`${user.username}: ${user.role}`);
}

// The same dataset can be filtered and transformed with array methods.
const testers = users.filter((user) => user.role === "tester");
const usernames = users.map((user) => user.username);

console.log("Testers:", testers);
console.log("Usernames:", usernames);
