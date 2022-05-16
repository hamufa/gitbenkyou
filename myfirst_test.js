
describe('My First Test', () => {
    it('Visit the Kitchen Sink', () => {
      cy.visit('https://example.cypress.io')
      // cy.get('h1').contain('Kitchen Sink')
      // cy.contains('get').click()
      cy.url().should('include','/commands/actions')
      cy.get('.action-email')
        .type('fake@email.com')
        .should('have.value', 'fake@email.com')
  
     })
    })