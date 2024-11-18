/// <reference types="cypress" />

describe('Example tests', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com/')
  })

  it('Navigate to contact us form', () => {
    cy.get('a[href*="/contact"]').should('be.visible').click()
    cy.url().should('contain', 'contact_us')
    cy.contains('h2', 'contact us', { matchCase: false }).should('be.visible')
    cy.get('div.bg').find('h2').contains('contact us', { matchCase: false })
    cy.get('h2').first().should('be.visible') // Contact us element
    cy.get('h2').eq(1).should('be.visible') // Get in touch element
  })
  it.only('Send message through contact us form', () => {
    cy.get('a[href*="/contact"]').should('be.visible').click()
    cy.url().should('contain', 'contact_us')
    cy.get('[data-qa="name"]').should('be.visible').clear().type('Amer')
    cy.get('[data-qa="email"]')
      .should('be.visible')
      .clear()
      .type('amer@example.com')
    cy.get('[data-qa="subject"]')
      .should('be.visible')
      .clear()
      .type('Subject name')
    cy.get('[data-qa="message"]')
      .should('be.visible')
      .clear()
      .type('This is short message')
    cy.get('[data-qa="submit-button"]').should('be.enabled').click()
    cy.get('.alert-success').should('be.visible')
    cy.get('.alert-success').contains(
      'Success! Your details have been submitted successfully.',
      { matchCase: false }
    ) // Drugi nacin
  })
})
