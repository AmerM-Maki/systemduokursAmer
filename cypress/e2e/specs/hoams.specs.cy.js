/// <reference types="cypress" />
describe('form', () => {
  it('is not valid', () => {
    cy.visit('https://automationexercise.com/contact_us')
    // When
    cy.get('a[href="/contact_us"]').should('be.visible').click()
    // Then
    cy.url().get('.title').eq(0).should('contain', 'Contact ')
    cy.get('.contact-form').should('be.visible')
    // When
    cy.get('[data-qa="name"]').clear().type('Amer')
    cy.get('[data-qa="subject"]').clear().type('First subject')
    cy.get('[data-qa="message"]').clear().type('Short message')
    // cy.get('[data-qa="email"]').clear().type('amer@example.com')
    cy.get('[data-qa="submit-button"]').should('be.enabled').click()
    // And
    cy.get('[data-qa="email"]')
      .invoke('prop', 'validationMessage')
      .should('equal', 'Please fill out this field.')
    // Then
  })
})
