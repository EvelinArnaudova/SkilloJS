# Skillo QA Automation Academy

A learning repository for the QA Automation Academy. It contains lecture materials, examples, practice tasks, and homework guidelines to help you build a solid foundation in JavaScript and testing workflows.

## Quick start

Prerequisites:

- Node.js 22.22.3 baseline (newer supported stable/LTS versions are welcome; we can raise the baseline later)
- npm bundled with Node.js (prefer a current compatible version)
- VS Code (recommended) with ESLint and Prettier extensions

Setup:

```bash
# Install dependencies
npm install
```

Open in VS Code and install the recommended extensions when prompted.

## Repository structure

Top-level layout and where to look for things:

```
lectures/
	01-development-env-basics/
		examples/                         # Runnable JavaScript examples
			01-environment-check.js
			02-variables-and-data.js
			03-functions.js
			04-qa-validation.js
		homework/
			homework-assignment.md           # Assignment instructions
			homework-solved.js               # Empty student solution starter
		practice/
			01-test-data-types.js
			02-build-request-details.js
			03-response-thresholds.js
			timer-html/
				index.html
	02-js-fundamentals-for-testing/
		examples/                         # Runnable JavaScript examples
			01-strings-and-methods.js
			02-numbers-and-operators.js
			03-comparisons-and-logic.js
			04-conditionals-and-ternary.js
		homework/
			homework-assignment.md           # Assignment instructions
			homework-solved.js               # Empty student solution starter
		practice/
			01-string-cleanup.js
			02-number-calculations.js
			03-retry-decision.js

resources/
	lecture-01/                 # Extra reading, tips, and settings
		extensions-settings.md
		lecture-01.md
		npm-npx.md
	lecture-02/
		lecture-02.md

homework-submission-guide.md  # GitHub Classroom workflow, folder structure, naming
eslint.config.mjs             # ESLint flat config (ES Modules)
package.json                  # Dev tooling (ESLint, Prettier); type: module
LICENSE
```

## Linting and formatting

This repo uses ESLint and Prettier for code quality and formatting.

- ESLint config: `eslint.config.mjs`
- Prettier: installed as a dev dependency; use default settings unless the course adds a config file later.

Run locally:

```bash
# Check lint errors
npx eslint .

# Auto-fix lint issues where possible
npx eslint . --fix

# Check formatting
npx prettier . --check

# Format files in place
npx prettier . --write
```

Tip: Install the "ESLint" and "Prettier - Code formatter" VS Code extensions for on-save feedback and formatting. See `resources/lecture-01/extensions-settings.md` for more details and helpful extensions.

## Run the example code

You can run the JS examples directly with Node:

```bash
node lectures/01-development-env-basics/examples/01-environment-check.js
node lectures/01-development-env-basics/examples/02-variables-and-data.js
node lectures/01-development-env-basics/examples/03-functions.js
node lectures/01-development-env-basics/examples/04-qa-validation.js
```

If you prefer, open the files in VS Code and use the built-in Run/Debug features.

## Homework workflow

Read `homework-submission-guide.md` thoroughly. In short:

- Keep your work inside `lectures/<lecture-folder-name>/homework/` following the exact structure required by the assignment.
- Use ES Modules (`import`/`export`), as the project is configured with `"type": "module"`.
- This course uses **GitHub Classroom**. Push directly to `main` — the Feedback PR updates automatically.
- Commit in small, meaningful units. Suggested format: `<type>(<scope>): <summary>` where scope often matches `task01`, `task02`, etc.

For Lecture 1, read [the homework assignment](lectures/01-development-env-basics/homework/homework-assignment.md) and complete the provided `homework-solved.js` file.

For Lecture 2, read [the homework assignment](lectures/02-js-fundamentals-for-testing/homework/homework-assignment.md) and complete the provided `homework-solved.js` file.

Example (abbreviated):

```bash
git checkout main
git pull --ff-only

# Work and commit per task
git add lectures/01-development-env-basics/homework/task01
git commit -m "feat(task01): implement verify-setup checks"

# Push to main — the Feedback PR updates automatically
git push origin main
```

## Scripts

The lecture-specific script in `package.json` runs only the Lecture 1 homework solution file:

```bash
npm run test:lecture-01
# Runs: node lectures/01-development-env-basics/homework/homework-solved.js

npm run test:lecture-02
# Runs: node lectures/02-js-fundamentals-for-testing/homework/homework-solved.js
```

Use the `test:lecture-<number>` naming pattern for future lecture-specific scripts. There is no generic `test` script, so each command clearly identifies which lecture it runs.

You can still run linters and formatters via `npx` (see commands above). If you want to add convenience scripts later, consider:

- `"lint": "eslint ."`
- `"lint:fix": "eslint . --fix"`
- `"format": "prettier . --write"`

Note: Don’t modify shared tooling unless instructed by the course.

## Troubleshooting

- ESLint not running? Check `node -v` and use Node.js 22.22.3 or a newer supported stable/LTS version.
- VS Code not showing lint errors? Make sure the ESLint extension is enabled and the workspace trust is granted.
- Prettier not formatting on save? Check that the Prettier extension is installed and selected as the default formatter, and that Format on Save is enabled.
- GitHub Classroom issues? Check the Feedback PR for error messages or contact the instructor.

## License

Copyright (c) 2026 skillorepos

This project is licensed under the [MIT License](LICENSE).
