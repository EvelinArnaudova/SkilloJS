const users = [
    {
        username: "johndoe",
        email: "john.doe@example.com",
        role: "John Doe",
        isActive: true
    },
    {
        username: "janedoe",
        email: "jane.doe@example.com",
        role: "Jane Doe",
        isActive: false
    },
    {
        username: "bobsmith",
        email: "bob.smith@example.com",
        role: "Bob Smith",
        isActive: true
    }
];

for (const user of users) {
    console.log("Username: " + user.username);
}

for (const user of users) {
    if (!user.isActive) {
        console.log("User is not active: " + user.username);
    }
}

//

class User {
    constructor(username, email, role, isActive) {
        this.username = username;
        this.email = email;
        this.role = role;
        this.isActive = isActive;
    }
}

const newUser = new User("alicejohnson", "alice.johnson@example.com", "Alice Johnson", true);
const json = JSON.stringify(newUser);
console.log(json);



