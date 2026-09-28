# Homework 01: My First QA Utility

Complete the assignment in `homework-solved.js`. The file is intentionally empty so you can build the solution yourself.

## Tasks

1. Create test data variables for a username, user ID, login state, base URL, expected HTTP status, and actual HTTP status.
2. Log every value and its type with `console.log()` and `typeof`.
3. Write `createUserMessage(name)` to return a friendly message that includes the provided name. Call it with at least two names.
4. Write `validateStatus(expected, actual)` to compare the values, print the expected value, actual value, and `PASS` or `FAIL`, then return whether they match. Try both a matching and a non-matching pair.
5. Write `printTestSummary(...)` to report the number of checks, passes, failures, and an overall result. Use the results from your status checks.
6. Run the file with `npm run test:lecture-01`. Fix any errors and format the file with Prettier. Check it with ESLint.
7. Use GitHub Copilot for one small improvement. Explain what it suggested and describe how you verified that you understand it.

Use the existing project and its npm scripts; do not create a second project or replace shared configuration.

## Optional challenge

Add a `loginTest()` function that compares expected and actual login state and reports `PASS` or `FAIL`. Include both a passing and failing example in your summary.
