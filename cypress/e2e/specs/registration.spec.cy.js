/// <reference types="cypress" />
let email
describe('Example tests', () => {
  beforeEach(() => {
    email = `amer${Date.now()}@example.com`
    cy.visit('https://automationexercise.com/')
  })
  it('Navigate to registration form', () => {
    // When
    cy.get('a[href*="login"]').should('be.visible').click()

    // Then
    cy.get('.signup-form').should('be.visible')
  })
})
