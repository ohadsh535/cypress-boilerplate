describe('GitHub', () => {
  before(() => {
    const githubUser = 'GITHUB_USER';
    const githubPass = 'XXXXXX';
    cy.loginGithub(githubUser, githubPass);
  });

  it('Login Attempt + Go visit our repo', () => {
    // Verify redirect was not applied.
    cy.visit('https://github.com/ohadsh535/cypress-boilerplate');

    // Making sure this is part of our authored boilerplate(s) by url convention
    cy.url().should('contain', 'ohadsh535');
    cy.url().should('contain', 'boilerplate');

    // Navigate to issues tab by selector.
    cy.get('.readability-menu > nav > ul > li:nth-child(2) > a').click();
    // Make sure we have 0 open issues on this repo.
    cy.get('.table-list-header-toggle.states > a.btn-link:first-child').should('contain.text', '0 Open');
  });

});

