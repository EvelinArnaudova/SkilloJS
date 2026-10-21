// Run from the repository root: node lectures/06-objects-and-classes/practice/01-object-practice.js
const testCase = {
  name: "Checkout test",
  priority: 2,
  isEnabled: true,
};

console.log(testCase.name);
console.log(testCase["priority"]);

testCase.isEnabled = false;
testCase.owner = "qa-team";

console.log(testCase);

console.log(
  "Practice: destructure name and owner out of testCase into two variables and log them.",
);

const testUser1 = {
  user: "qa-team",
  email: "qa-team@example.com",
  role: "tester",
  isActive: true
};

const testUser2 = {
  user: "qa-team",
  email: "qa-team@example.com",
  role: "tester",
  isActive: true
};

class TestUser {
  constructor(user, email, role, isActive, password) {
    this.user = user;
    this.email = email;
    this.role = role;
    this.isActive = isActive;
    this.password = password;
  }
}

const testUserInstance = new TestUser("qa-team", "qa-team@example.com", "tester", true, "P@ssw0rd123!");
console.log(testUserInstance);
