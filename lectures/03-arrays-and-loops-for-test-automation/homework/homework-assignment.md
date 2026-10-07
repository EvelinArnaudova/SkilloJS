# Homework 03: Test Results Analyzer

Complete the assignment in `homework-solved.js`. The file is intentionally empty so you can build the solution yourself.

## Tasks

1. Create an array `testResults` with at least six HTTP status codes, mixing 2xx values with other values (for example 404, 500).
2. Write a loop that processes every status code in `testResults` and prints `PASS` for 2xx responses or `FAIL` for anything else, including the actual status code in the message.
3. Add counters for total tests, passed tests, and failed tests, updated inside the loop.
4. After the loop, print a summary with the total, pass count, and fail count.
5. Create a second array `testUsers` containing at least one empty string among valid usernames. Use `continue` to skip empty entries while logging a message for every valid user.
6. Create a `browsers` array and an `environments` array. Use nested loops to print every browser/environment combination (for example `Chrome on QA`). Use a conditional to skip one specific combination.
7. Run the file with `npm run test:lecture-03` (or `node lectures/03-arrays-and-loops-for-test-automation/homework/homework-solved.js` if the script is not yet available). Fix any errors and format the file with Prettier. Check it with ESLint.
8. Use GitHub Copilot for one small improvement. Explain what it suggested and describe how you verified that you understand it.

Use the existing project and its npm scripts; do not create a second project or replace shared configuration.

## Optional challenge

Add a `break` to one of your loops that stops processing as soon as a status code of `500` or higher is found, and log a message explaining why the loop stopped early.
