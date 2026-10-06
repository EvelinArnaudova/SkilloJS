# Homework 02: Test Result Analyzer

Complete the assignment in `homework-solved.js`. The file is intentionally empty so you can build the solution yourself.

## Tasks

1. Create variables for `expectedStatus`, `actualStatus`, `responseTime`, and `maxResponseTime`.
2. Write an `if` / `else if` / `else` chain that:
   - Prints `FAIL: Unexpected status code` when `actualStatus` does not match `expectedStatus`.
   - Prints `FAIL: Response too slow` when `responseTime` is greater than or equal to `maxResponseTime`.
   - Prints `PASS: API response is valid` otherwise.
3. Use a template literal in each printed message so it includes the actual values.
4. Add a `username` variable with extra spaces (for example `"  testuser  "`). Use `trim()` and `toLowerCase()` before including it in a message.
5. Combine a comparison and a logical operator (`&&` or `||`) in a single expression to check at least two conditions together, for example whether a user is logged in and the status code is correct.
6. Rewrite the final PASS/FAIL decision from Task 2 using a ternary operator instead of `if`/`else`, and store the result in a `result` variable.
7. Run the file with `npm run test:lecture-02`. Fix any errors and format the file with Prettier. Check it with ESLint.
8. Use GitHub Copilot for one small improvement. Explain what it suggested and describe how you verified that you understand it.

Use the existing project and its npm scripts; do not create a second project or replace shared configuration.

## Optional challenge

Add `attemptNumber` and `maxAttempts` variables. If the status check fails and `attemptNumber` is less than `maxAttempts`, print `RETRY` instead of `FAIL`.
