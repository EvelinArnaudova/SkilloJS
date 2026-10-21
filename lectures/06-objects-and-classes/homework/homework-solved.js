//Homework task 1 & 2
const users = [
  {
    username: "peterJames",
    email: "peter.james@example.com",
    role: "admin",
    isActive: true,
  },
  {
    username: "johnSmith",
    email: "john.smith@example.com",
    role: "editor",
    isActive: false,
  },
  {
    username: "bobHalen",
    email: "bob.halen@example.com",
    role: "editor",
    isActive: true,
  },
  {
    username: "aliceJones",
    email: "alice.jones@example.com",
    role: "editor",
    isActive: false,
  },
];

//Homework task 3
for (const user of users) {
  console.log("Username is: " + user.username);
}

//Homework task 4
const inactiveUsers = users.filter((user) => !user.isActive);
console.log("Inactive Users:", inactiveUsers);

//Homework task 5
const jsonUser = JSON.stringify(users[1]);
console.log("JSON user:", jsonUser, "type: ", typeof jsonUser);

//Homework task 6
const parsedUser = JSON.parse(jsonUser);
console.log("Parsed User:", parsedUser);
console.log(
  "Parsed User username and role are:",
  parsedUser.username,
  parsedUser.role,
);

//Homework task 7
class User {
  constructor(username, email, role, isActive) {
    this.username = username;
    this.email = email;
    this.role = role;
    this.isActive = isActive;
  }

  getDescription() {
    return `${this.username}'s role is ${this.role}`;
  }
}

//Homework task 8
const newUser1 = new User(
  "antonyBarn",
  "antony.barn@example.com",
  "admin",
  true,
);
console.log(newUser1.getDescription());

const newUser2 = new User("maryJane", "mary.jane@example.com", "editor", false);
console.log(newUser2.getDescription());

//Optional challenge
function createUsersFromJson(jsonText) {
  const parsedJsonUser = JSON.parse(jsonText).map((user) => {
    return new User(user.username, user.email, user.role, user.isActive);
  });
  console.log("Users are: ", parsedJsonUser);
}

const usersJSON = JSON.stringify(users);
createUsersFromJson(usersJSON);
