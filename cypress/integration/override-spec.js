/// <reference types="cypress" />

it('overrides the config', () => {
  cy.visit('/', {
    onBeforeLoad(win) {
      Object.defineProperty(win, 'Config', {
        // ignore the config the application sets
        // and instead use our own test config object
        set: cy.stub().as('setConfig'),
        get() {
          return {
            title: 'Cypress Test',
            showCount: false,
          }
        },
      })
    },
  })
  cy.contains('h1', 'Cypress Test')
  cy.get('[data-cy="pending-count"]').should('not.exist')
})
