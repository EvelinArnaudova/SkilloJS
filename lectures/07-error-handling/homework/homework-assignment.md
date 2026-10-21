# Homework 07: Defensive Test Data Validation

Complete the assignment in `homework-solved.js`. The file is intentionally empty so you can build the solution yourself.

## Tasks

1. Write a function `validateUser(user)` that:
   - Throws an `Error` if `user` is missing (falsy).
   - Throws an `Error` if `user.username` is missing (falsy).
   - Returns `user` when the input is valid.
2. Call `validateUser` inside a `try...catch` with a valid user object, and log the returned value.
3. Call `validateUser` inside a `try...catch` with an invalid input (for example `null`), and log a useful failure message using `error.message`.
4. Add a `finally` block to both calls above that logs a completion message (for example `"Validation attempt finished"`).
5. Create a custom error class `TestDataError` that extends `Error` and sets `this.name = "TestDataError"`.
6. Update `validateUser` to throw `TestDataError` instead of plain `Error`.
7. In your `catch` block, use `error instanceof TestDataError` to log a message that specifically identifies the problem as a test data issue.
8. Run the file with `npm run test:lecture-07` (or `node lectures/07-error-handling/homework/homework-solved.js` if the script is not yet available). Fix any errors and format the file with Prettier. Check it with ESLint.
9. Use GitHub Copilot for one small improvement. Explain what it suggested and describe how you verified that you understand it.

Use the existing project and its npm scripts; do not create a second project or replace shared configuration.

## Optional challenge

Write a function `parseTestConfig(jsonText)` that parses a JSON string with `JSON.parse()` inside a `try...catch`. If parsing fails, catch the error, log a clear message using `error.message`, and return `null` instead of letting the error crash the script. Test it with both valid and invalid JSON text.
