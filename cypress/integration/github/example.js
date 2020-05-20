describe('GitHub', () => {
  before(() => {
    cy.loginGithub();
  });

  // Some real use case on common applications.
  // @NOTE - will not work since this repo is not running any UI service to test.
  it('Login Failed - Go visit our repo', () => {
    cy.visit('https://github.com/ohadsh535/cypress-boilerplate');
    // Verify redirect was not applied.

    // Making sure this is part of our authored boilerplate(s) by url convention
    cy.url().should('contain', 'ohadsh535');
    cy.url().should('contain', 'boilerplate');
  })
});
