import 'cypress-file-upload';

describe('Form page tests', () => {
  beforeEach(() => {
    cy.visit('/form');
  });

  it('Should generate a card and save the submission after changing routes', () => {
    cy.get('input[type=text]').eq(0).type('Greg');
    cy.get('input[type=text]').eq(1).type('Zubarev');
    cy.get('input[type=date]').type('2022-11-12');
    cy.get('select').select('Sport');
    cy.get('input[type=radio]').eq(0).check();
    cy.get('input[type=file]').selectFile('cypress/fixtures/test-image.jpg');
    cy.get('textarea').type('description');
    cy.get('input[type=checkbox]').check();
    cy.get('form').submit();
    cy.get('[data-testid="card"]').should('be.visible');
    cy.contains('About').click();
    cy.contains('Form').click();
    cy.get('[data-testid="card"]').should('be.visible');
  });
});
