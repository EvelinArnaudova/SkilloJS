// Run from the repository root: node lectures/06-objects-and-classes/examples/01-object-basics.js

// Objects store related information using key-value pairs.
const user = {
  username: "alice",
  role: "admin",
  isActive: true,
};

console.log(user);

// Dot notation and bracket notation both read a property's value.
console.log(user.username);
console.log(user["role"]);

// Properties can be updated, and new ones can be added after creation.
user.role = "tester";
user.email = "alice@example.com";

console.log(user);

// Objects can nest arrays and other objects to represent richer test data.
const testCase = {
  name: "Login test",
  priority: 1,
  isEnabled: true,
  tags: ["smoke", "authentication"],
  configuration: {
    browser: "Chrome",
    environment: "QA",
  },
};

console.log(testCase.tags);
console.log(testCase.configuration.browser);

// Object destructuring extracts properties directly into variables.
const { username, role } = user;

console.log("FINAL: username: " + username);
console.log("FINAL: role: " + role);
console.log("FINAL: user", user);
user.role = "bob";
console.log("FINAL2: username: " + username);
console.log("FINAL2: role: " + role);
console.log("FINAL2: user", user);