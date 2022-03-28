/// <reference types="cypress" />

it('adds todos', () => {
  cy.visit('/')
  cy.get('input[placeholder="Add new todo here"]')
    .type('Learn Cypress{enter}')
    .type('Learn JavaScript{enter}')
  cy.get('[data-cy=todo]').should('have.length', 2)
  cy.contains('[data-cy="pending-count"]', '2')
  cy.contains('[data-cy=todo]', 'Learn JavaScript').find('[alt=remove]').click()
  cy.contains('[data-cy=todo]', 'Learn Cypress').should('be.visible')
  cy.contains('[data-cy="pending-count"]', '1')
  cy.get('[data-cy=todo]').should('have.length', 1)
})
