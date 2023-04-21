describe('Home page e2e tests', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.intercept('GET', 'https://api.unsplash.com/**').as('getUnsplash');
  });

  it('Should get cards from the API', () => {
    cy.get('input[type=text]').type('dog{enter}');
    cy.wait('@getUnsplash');
    cy.get('[data-testid="cards__container"]').children('div').should('have.length', 6);
    cy.get('[data-testid="card"]').first().should('contain', 'dog');
  });

  it('Should open modal window with description when clicking on the card', () => {
    cy.wait('@getUnsplash');
    cy.get('[data-testid="card"]').first().click();
    cy.get('[data-testid="modal-card"]').should('be.visible');
    cy.get('[data-testid="modal-title"]').should('be.visible');
    cy.get('[data-testid="modal-description"]').should('have.length.at.least', 1);
    cy.get('[data-testid="modal-image"]')
      .should('have.attr', 'src')
      .and('include', 'https://images.unsplash.com/');
  });

  it('Should save the search value, when changing routes', () => {
    cy.get('input[type=text]').type('test{enter}');
    cy.contains('About').click();
    cy.contains('Home').click();
    cy.get('input[type=text]').should('have.value', 'test');
  });
});
