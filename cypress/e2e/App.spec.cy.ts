describe('App e2e test', () => {
  it('renders the home page', () => {
    cy.visit('/');
    cy.contains('Home');
  });

  it('renders the about page', () => {
    cy.visit('/about');
    cy.contains('About');
  });

  it('renders the form page', () => {
    cy.visit('/form');
    cy.contains('Form');
  });

  it('renders the 404 page', () => {
    cy.visit('/non-existent-page');
    cy.contains('404');
  });
});
