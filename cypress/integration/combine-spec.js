/// <reference types="cypress" />

it('combines the config', () => {
  cy.visit('/', {
    onBeforeLoad(win) {
      let appValue
      Object.defineProperty(win, 'Config', {
        set(v) {
          appValue = v
        },
        get() {
          // returns a combined config
          return {
            ...appValue,
            title: 'Cypress Test',
          }
        },
      })
    },
  })
  // we only check the property we have set
  cy.contains('h1', 'Cypress Test')
})
