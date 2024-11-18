/// <reference types="cypress" />

describe('Example tests', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com/')
  })

  it('Navigate to login page', () => {
    cy.get('a[href="/login"]').should('be.visible').click()
    cy.url().should('contain', 'login')
    cy.get('[data-qa="login-email"]')
      .should('be.visible')
      .and('not.be.disabled')
    cy.get('[data-qa="signup-name"]')
      .should('be.visible')
      .and('not.be.disabled')
  })

  it('Navigate to contact us form', () => {
    cy.get('a[href*="/contact"]').should('be.visible').click()
    cy.url().should('contain', 'contact_us')
    cy.contains('h2', 'contact us', { matchCase: false }).should('be.visible')
    cy.get('div.bg').find('h2').contains('contact us', { matchCase: false })
  })
})
