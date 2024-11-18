/// <reference types="cypress" />

describe('Example tests', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com/')
  })
  it('Navigate to registration form', () => {
    // When
    cy.get('a[href*="login"]').should('be.visible').click()

    // Then
    cy.get('.signup-form').should('be.visible')
  })
})
