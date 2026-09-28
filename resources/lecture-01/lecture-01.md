# Lecture 1: Development Environment and First Steps with JavaScript

## Session order

1. Install Node.js 22.22.3 as the course baseline and VS Code; verify Node.js and npm in a terminal. A newer supported stable/LTS release is welcome, and we can raise the baseline later.
2. Learn `pwd`, `ls`, `cd`, and `mkdir`, then initialize a project with `npm init -y`.
3. Read `package.json`: project metadata, scripts, dependencies, and development dependencies.
4. Install and configure ESLint and Prettier, then connect them to VS Code.
5. Explore a basic project structure: `src/`, `tests/`, `package.json`, `package-lock.json`, `.vscode/`, and `node_modules/`.
6. Practice JavaScript values, logging, comparisons, and reusable functions.
7. Apply the same ideas to a small QA validation helper.

## Key ideas

- Node.js runs JavaScript outside a browser. `npm` is installed with Node.js and manages project packages and scripts.
- Use `const` by default; use `let` when reassignment is needed.
- Common primitive values include strings, numbers, booleans, `undefined`, and `null`.
- Use `console.log()` and `typeof` to inspect values while debugging.
- Functions accept inputs as parameters and can return results for reuse.
- A basic validation compares an actual result with an expected result and reports whether they match.
- Copilot can help explain or draft code, but engineers must review, understand, and test generated suggestions.

The URLs in code examples are sample strings for practice only. They do not refer to a live application.
