/// <reference types="cypress" />

it('sets the window config', () => {
  cy.visit('/')
    // cy.visit yields the window object
    .should('have.property', 'Config')
    .should('have.keys', 'title', 'showCount')
    .its('title')
    .then((title) => {
      cy.contains('h1', title)
    })
})
