# npm and npx Basics

## Check the installation

```bash
node --version
npm --version
```

If a command is not recognized after installation, restart the terminal or VS Code. On Windows, check that Node.js was added to `PATH`.
Use Node.js 22.22.3 as the course baseline; a newer supported stable/LTS release is also fine. Use the compatible npm version bundled with Node.js.

## Start a project

```bash
mkdir qa-automation-course
cd qa-automation-course
npm init -y
```

`npm init -y` creates a starter `package.json` without asking setup questions.

## Add project scripts

```json
{
  "scripts": {
    "test:lecture-01": "node test.js",
    "lint": "eslint ."
  }
}
```

Run scripts with `npm run test:lecture-01` and `npm run lint`.

## Install development tools

```bash
npm install eslint@latest prettier@latest --save-dev
```

The `@latest` tag selects each tool's latest stable release. The `--save-dev` option records tools used mainly for development and testing in `devDependencies`. `package-lock.json` records the resolved dependency versions; `node_modules/` contains the installed packages and should not be committed.

## Run command-line tools with npx

Use `npx` to run a package's command-line tool directly, without adding a script for each command:

```bash
npx eslint .
npx prettier . --check
```

After dependencies are installed, `npx` uses the project's local tools from `node_modules/.bin`. If a package is missing, `npx` may offer to download it, so install the project dependencies first. Use `npm run <script-name>` for commands defined in `package.json`, such as `npm run test:lecture-01`.
