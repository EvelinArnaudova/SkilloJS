// Run from the repository root: node lectures/01-development-env-basics/examples/03-functions.js
function sayHello() {
  console.log("Hello, QA automation!");
}

function greetTester(name) {
  console.log(`Hello, ${name}! Ready to test?`);
}

function createUsername(firstName, id) {
  return `${firstName.toLowerCase()}${id}`;
}

sayHello();
greetTester("Sarah");
console.log("Generated username:", createUsername("Sarah", 123));

console.log("-----------==============-----------");
console.log(
  "\nPractice: try calling the functions with different arguments.\n",
);
console.log("-----------==============-----------");

// The same greeting can be written with different function syntax:
function greetWithDeclaration(name) {
  return `Hello, ${name}!`;
}

const greetWithNamedExpression = function greet(name) {
  return `Hello, ${name}!`;
};

const greetWithExpression = function (name) {
  return `Hello, ${name}!`;
};

const greetWithArrow = (name) => `Hello, ${name}!`;

const greeter = {
  greet(name) {
    return `Hello, ${name}!`;
  },
};

console.log("Function declaration:", greetWithDeclaration("Sarah"));
console.log("Named function expression:", greetWithNamedExpression("Sarah"));
console.log("Function expression:", greetWithExpression("Sarah"));
console.log("Arrow function:", greetWithArrow("Sarah"));
console.log("Object method:", greeter.greet("Sarah"));
