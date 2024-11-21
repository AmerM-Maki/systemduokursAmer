/// <reference types="cypress" />
describe('form', () => {
  it('is not valid', () => {
    cy.visit('https://automationexercise.com/contact_us')   
    cy.get('a[href="/contact_us"]').should('be.visible').click()  
    cy.url().get('.title').eq(0).should('contain', 'Contact ')
    cy.get('.contact-form').should('be.visible')   
    cy.get('[data-qa="name"]').clear().type('Amer')
    cy.get('[data-qa="subject"]').clear().type('First subject')
    cy.get('[data-qa="message"]').clear().type('Short message')
    // cy.get('[data-qa="email"]').clear().type('amer@example.com')
    cy.get('[data-qa="submit-button"]').should('be.enabled').click()
    cy.get('[data-qa="email"]')
      .invoke('prop', 'validationMessage')
      .should('eq', 'Please fill out this field.') 
  // cy.get('input:invalid).should('be.visible').invoke('prop', 'validationMessage').should('eq', 'Please fill out this field.') 
    })
})
