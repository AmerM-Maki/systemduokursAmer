/// <reference types="cypress" />

describe('Example tests', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com/')
  })

  it('Finding browsers error', () => {
    // When
    cy.get('a[href="/contact_us"]').should('be.visible').click()
    // Then
    cy.url().get('.title').eq(0).should('contain', 'Contact ')
    cy.get('.contact-form').should('be.visible')
    // When
    cy.get('[data-qa="name"]').clear().type('Amer')
    cy.get('[data-qa="subject"]').clear().type('First subject')
    cy.get('[data-qa="message"]').clear().type('Short message')
    // And
    cy.get('[data-qa="submit-button"]').should('be.enabled').click()
  })
})
