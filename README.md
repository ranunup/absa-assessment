# Cypress Framework

Executes API and Web UI automated tests.

## Framework Structure

Folders to note:
- `e2e` - contains test scripts.
- `fixtures` - contains test data.
- `results` - will contain test execution results which will be merged into a single report.
- `screenshots` - will contain screenshots post test execution.
- `support` - contains custom commands.
- `utils` - contains supporter files used as part of test execution, these include locators, actions, assertions and page objects.
- `videos` - will contain test recordings post execution.
- `mochawesome-report` - will contain a combined html report named results.html post execution.

Files to note:
- `cypress.config.ts` - contains Cypress configuration settings.
- `cypress.env.json` - contains test parameters (may be used as an alternative way of storing test data).

## Setting up for test execution

1. Install the most recent (above 16) `Node.js` - version v16.20.2 with npm 8.19.4 was used to run this project.
2. Run `npm ci` to install Node packages from `package-lock.json` alternatively run `npm install`.

## Test Execution

1. Verify that a node_modules folder has been created with relevant packages.
2. Ensure you are on the root folder(absa-assessment) and open the console/cli.

- To run all test specs and generate artefacts at once:
    - run command `npm run execute-tests-and-compile-reports` (see package.json scripts section)

- To run an individual test spec in headed mode:
    - run command `npx cypress run --spec path/to/file/script-name.cy.ts --headed`

- To run tests using the Cypress test tray (this will be advantageous when wanting to see logged API responses):
    - run command `npx cypress open`.
    - Select the E2E Testing option.
    - Select your preferred browser.
    - Navigate to test script you wish to execute and select it (note - this option will not generate test artefacts).
