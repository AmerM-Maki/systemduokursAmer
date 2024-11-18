/// <reference types="cypress" />

describe('Example tests', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com/')
  })

  it('Navigate to Contact us', () => {
    cy.get('a[href="/contact_us"]').should('be.visible').click()
    cy.url().should('contain', 'contact')
    cy.get('.bg').find('h2')
    cy.get('input').should('be.empty').and('be.visible')
    cy.get('[data-qa="name"]').type('Name')
    cy.get('[data-qa="email"]').type('example@gmail.com')
    cy.get('[data-qa="subject"]').type('Subject')
    cy.get('[data-qa="message"]').type('ShortMessage')
    cy.get('[data-qa="submit-button"]').click()
    cy.get('#form-section').find('.btn-success').click()
    cy.url().should('not.contain', 'contact')
  })
})
