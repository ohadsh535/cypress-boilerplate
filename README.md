This directory exists to cover E2E test across the Indeni Platoform using [cypress](https://www.cypress.io/)<br/>
Cypress scripts are producing screenshots and videos of the scripts run.<br/>
Scripts can be found on `/cypress/integration/my-app`

## Prerequisites
Install Cypress as dev dependency<br/>
`npm install cypress --save-dev`

## Available Scripts

## `npm run cypress` \ `cypress open`

Opens the Cypress UI so you may review and run all the existing Cypress scripts available.<br/>
On first run if not exists, creates the cypress default Directories and some examples.<br/>
Running through the UI allows you to review the running procedures on top of the application and see the steps runtime.

## `npm run test:e2e` \ `cypress run`

Runs the cypress scripts without browser, and produce a report of success / failure of the scripts.

## Guidelines

See the file `common/integration.template.js`, listing and documenting common requests.

## Directories / files

`/integration/indeni` - Cypress scripts<br/>
`/support` - Common commands, example (Login)<br/>
`/cy_templates` - Common boilerplate of script + documentation on commands <br/>
`/screenshots` \ `/videos` - Last run(s) recordings <br/>
`/fixtures` - Mock data for requested routes responses<br/>
`/cypress.json` - Define your baseUrl and project properties.
