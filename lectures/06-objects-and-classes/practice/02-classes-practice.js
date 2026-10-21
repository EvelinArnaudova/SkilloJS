// Run from the repository root: node lectures/06-objects-and-classes/practice/02-classes-practice.js
class TestCase {
  constructor(name, status) {
    this.name = name;
    this.status = status;
  }

  getSummary() {
    return `${this.name}: ${this.status}`;
  }
}

const loginTest = new TestCase("Login", "PASS");
const searchTest = new TestCase("Search", "FAIL");

console.log(loginTest.getSummary());
console.log(searchTest.getSummary());

console.log(
  "Practice: add a duration property and include it in getSummary()'s returned string.",
);
