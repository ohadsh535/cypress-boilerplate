describe('Application Settings', () => {
  before(() => {
    cy.loginUI();
  });

  // Some real use case on common applications.
  // @NOTE - will not work since this repo is not running any UI service to test.
  it('Navigate to application settings - Should fail', () => {
    cy.visit('/admin/settings');
    // Verify redirect was not applied.
    cy.url().should('contain', '/admin/settings');

    cy.server();
    cy.request('/api/v1/system/settings').as('settings');
    cy.get('@settings').then((response) => {
      console.log(response);
      // ... continue testing configuration, based on the response data.
    });

    // .. other test commands.
  })
});
