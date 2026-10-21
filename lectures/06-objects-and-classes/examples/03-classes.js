// Run from the repository root: node lectures/06-objects-and-classes/examples/03-classes.js

// A class defines a reusable template for creating objects with the same shape.
// The constructor runs once per `new User(...)` call and sets up `this` (the new instance).
class User {
  constructor(usernameArg, roleArg, userHeight = 170) {
    this.role = roleArg;
    this.username = usernameArg;
    this.height = userHeight;
  }

  // Methods are functions attached to every instance created from the class.
  getDescription() {
    return `${this.username} is a ${this.role}, and their height is ${this.height}.`;
  }

  /**
   * Checks if the user has one of the allowed roles.
   * 
   * @param {string|string[]} allowedRoles - A single role string or an array of allowed roles
   * @returns {boolean} True if the user's role is included, false otherwise
   */
  isAuthorized(allowedRoles) {
    // If a single string is passed, convert it to an array for easy checking
    const rolesList = Array.isArray(allowedRoles) ? allowedRoles : [allowedRoles];
    if (rolesList.includes(this.role)) {
        // Generate log which is the exact roles that authorized the user
        const authorizedRoles = rolesList.filter(role => role === this.role);
        console.log(`Authorized roles for user ${this.username}: ${authorizedRoles.join(', ')}`);
        return true;
    } else {
      console.log(`User ${this.username} with role ${this.role} is not authorized.`);
      return false;
    }
  }
}

// const user1 = new User("alice", "admin");
// const user2 = new User("bob", "tester");

// console.log(user1);
// console.log(user2);
// console.log(user1.getDescription());
// console.log(user2.getDescription());

// // Plain object: good for a single, one-off piece of test data.
// const singleUser = {
//   username: "alice",
//   role: "admin",
// };

// // Class: good when many objects need the same structure and shared behavior.
// const classUser = new User("alice", "admin");

// console.log(singleUser);
// console.log(classUser.getDescription());


// const user3 = new User('Dani', 'QA');

// // Check if Alice is an admin
// console.log(user3.isAuthorized('admin')); 
// // Output: false

// // Check if Alice is either an admin or an editor
// console.log(user3.isAuthorized(['admin', 'editor', 'QA', 'QA2'])); 
// // Output: true

const user4 = new User('Eve', undefined, 190);
console.log(user4.getDescription());