// Run from the repository root: node lectures/04-advanced-array-methods/examples/01-map-and-filter.js

const prices = [100, 200, 300];

// map() builds a NEW array by calling the callback once per element and
// collecting the returned values. The original array is left unchanged.
const discountedPrices = prices.map((price) => price * 0.9);

console.log("Original prices:", prices);
console.log("Discounted prices:", discountedPrices);

const users = ["alice", "bob", "charlie"];

// Same map() idea applied to strings: one input value in, one output value out.
const emails = users.map((user) => `${user}@example.com`);

console.log("Emails:", emails);

const responseTimes = [200, 450, 1200, 800, 1500];

// filter() builds a NEW array keeping only the elements for which the
// callback returns true. The array can shrink, grow is not possible.
const slowResponses = responseTimes.filter((time) => time > 1000);

console.log("Slow responses:", slowResponses);

const roles = ["admin", "user", "guest", "admin"];
const admins = roles.filter((role) => role === "admin");

console.log("Admin entries:", admins);

// Arrays of objects are closer to real automation data (API responses,
// user records, test scenarios).
const accounts = [
  { name: "Alice", role: "admin" },
  { name: "Bob", role: "user" },
  { name: "Charlie", role: "admin" },
];

const adminAccounts = accounts.filter((account) => account.role === "admin");

console.log("Admin accounts:", adminAccounts);

const activeUsers = [
  { name: "Alice", active: true },
  { name: "Bob", active: false },
  { name: "Charlie", active: true },
];

// Chaining filter() then map(): first select the relevant items,
// then transform what was selected. Read left to right.
const activeUserNames = activeUsers
  .filter((user) => user.active)
  .map((user) => user.name);

console.log("Active user names:", activeUserNames);
