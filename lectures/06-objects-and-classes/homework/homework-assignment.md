# Homework 06: Test User Directory

Complete the assignment in `homework-solved.js`. The file is intentionally empty so you can build the solution yourself.

## Tasks

1. Create three user objects (plain objects, not a class yet), each with `username`, `email`, `role`, and `isActive` properties. Include at least one inactive user (`isActive: false`).
2. Store the three objects in an array called `users`.
3. Loop through `users` and print each username.
4. Use `filter()` to build an `inactiveUsers` array containing only the inactive users, and log it.
5. Convert one of the user objects to a JSON string with `JSON.stringify()` and log the result along with its `typeof`.
6. Parse that JSON string back into an object with `JSON.parse()` and log its `username` and `role`.
7. Create a `User` class with a constructor (`username`, `email`, `role`, `isActive`) and a method `getDescription()` that returns a short sentence describing the user (for example `"alice is an active admin"`).
8. Create at least two instances of `User` and log the result of calling `getDescription()` on each.
9. Run the file with `npm run test:lecture-06` (or `node lectures/06-objects-and-classes/homework/homework-solved.js` if the script is not yet available). Fix any errors and format the file with Prettier. Check it with ESLint.
10. Use GitHub Copilot for one small improvement. Explain what it suggested and describe how you verified that you understand it.

Use the existing project and its npm scripts; do not create a second project or replace shared configuration.

## Optional challenge

Write a function `createUsersFromJson(jsonText)` that parses a JSON string containing an array of users and returns an array of `User` instances (one per entry) by calling the `User` constructor for each parsed object.
