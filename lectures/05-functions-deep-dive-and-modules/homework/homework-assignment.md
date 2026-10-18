# Homework 05: QA Utility Library with Modules

Complete the assignment in `homework-solved.js`. The `src/` modules it imports from are already scaffolded for you.

## Tasks

1. Open `src/validators.js` and read the existing functions: `isSuccessfulStatus`, `isExpectedStatus`, `isValidUsername` (uses early returns / guard clauses), and `isWithinResponseTime` (has a default `maxResponseTime`).
2. Open `src/testData.js` and read `createUser(username, role = "user")`.
3. Open `src/testUtils.js` and read `getPassedTests`, `getFailedTests`, `calculateAverageDuration` (guards against an empty array), `createSummary`, and `printSummary`.
4. In `homework-solved.js`, import the functions you need from the three modules using named imports.
5. Create a `tests` array with at least four test result objects, each with `name`, `status` (`"PASS"` or `"FAIL"`), and `duration` (a number in ms).
6. Call `createUser` twice: once with only a username (to use the default role) and once passing an explicit role. Log both users.
7. Call `isValidUsername` with one valid and one invalid username, and log the results.
8. Call `isSuccessfulStatus` and `isExpectedStatus` with a sample status code and log the results.
9. Build a summary with `createSummary(tests)` and display it with `printSummary(summary)`.
10. Run the file with `npm run test:lecture-05` (or `node lectures/05-functions-deep-dive-and-modules/homework/homework-solved.js` if the script is not yet available). Fix any errors and format the files with Prettier. Check them with ESLint.
11. Use GitHub Copilot for one small improvement. Explain what it suggested and describe how you verified that you understand it.

Use the existing project and its npm scripts; do not create a second project or replace shared configuration.

## Optional challenge

Use `isWithinResponseTime` together with `isSuccessfulStatus` and `&&` to produce one overall `PASS`/`FAIL` result for a sample API response (a status code and a response time), and log the outcome.
