/// <reference types="cypress" />

import { mockInBundle } from 'mock-in-bundle'

it('mocks the Config module', () => {
  mockInBundle('src/Config.tsx', { default: { title: 'Mock Test' } })
  cy.visit('/')
  cy.contains('h1', 'Mock Test')
})
