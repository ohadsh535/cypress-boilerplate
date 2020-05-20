describe('Login To Platform', () => {

  // run before every test
  beforeEach(() => {
    // Should login the UI with our default user - admin.
    cy.loginUI();
  });

  // OR

  // run once before all tests below
  before(() => {
    // Should login the UI with our default user - admin.
    cy.loginUI();
  });


  it('Example for Cypress Integration', () => {
    // Request paths required on this test.
    // - use this to get a higher level of request about to take place in this test script.
    const rp = {
      articlesData: {
        method: 'POST',
        url: '/api/v1/ui/articles',
        alias: 'articlesData'
      }
    };

    // This command enables you to wait for requested routes to respond. required by `cy.route()`
    cy.server();

    // --- Wait for request to finish. ---
    // Add listener(s) to requests of any method and name them. Should declare the listener prior to request being made.
    cy.route(rp.articlesData.method, rp.articlesData.url).as(rp.articlesData.alias);
    // will work exactly as: cy.route('POST', '/api/v1/ui/articles').as('articlesData');

    // Wait for data to be retrieved, optional extend of timeout for request (Default: 5000 - 5 seconds)
    // Note: timeout limit is waiting for response, opposed to cy.wait(3000), which is waiting for time period and not to response.
    cy.wait('@articlesData', { timeout: 20000 });
    // end --- Wait for request to finish. ---

    // Moving to URL, allowing the page load timeout.
    // NOTE: would not prefer to navigate directly to paths rather than using menu navigation clicks.
    cy.visit('/articles', { timeout: 7000 });

    // Waiting for DOM element. timeout is optional, if element is rendered after the page load.
    // cy.get() -> expect a query selector path, can be tested with document.querySelector() via console.
    cy.get('button[name="articles-category--sports"]', { timeout: 5000 });

    // Clicking a dom element
    cy.get('button[name="articles-category--sports"]').click();

    // Setting a delay, before next command.
    cy.wait(3000);

    // Text existence validation
    cy.get('h2.page-title').should('be.text', 'Sports Articles');

    // exist / not exist dom element
    cy.get('.related-categories a[name=economics]').should('not.exist');
    cy.get('.related-categories a[name=basketball]').should('exist');

    // Typing inputs on UI.
    cy.get('#search').type('NBA conference finals');

    // Clearing localstorage.
    cy.clearLocalStorage('__indeni_issues_table_settings');
  });
});
