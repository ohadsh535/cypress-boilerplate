// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// Simulate a command for logging into platform.
Cypress.Commands.add("loginUI", (username = 'DEFAULT_USER', password = 'DEF_USER_PASSWORD') => {
  const yourTargetUrl = '/login'; // relative to current service. Can be controlled for production / local tests.
  cy.visit(yourTargetUrl);
  cy.get('input#field-username').type(username);
  cy.get('input#field-password').type(password);
  cy.get('#btn-login').click();
});

Cypress.Commands.add("loginGithub", (username = 'DEFAULT_USER', password = 'DEF_USER_PASSWORD') => {
  const yourTargetUrl = 'http://github.com/login';

  cy.visit(yourTargetUrl);
  cy.get('.auth-form-body input#login_field').type(username);
  cy.get('.auth-form-body input#password').type(password);
  cy.get('.auth-form-body input[type=submit]').click();
});
