/// <reference types="cypress" />
describe('form', () => {
  let email
  beforeEach(() => {
    email = `amer${Date.now()}@example.com`
    cy.visit('https://automationexercise.com/')
  })
  it('Registration invalid inputs', () => {
    // When
    cy.get('a[href*="login"]').should('be.visible').click()
    // Then
    cy.get('.signup-form').should('be.visible')
    //When
    cy.get('[data-qa="signup-name"]').clear().type('Amer')
    cy.get('[data-qa="signup-email"]').clear().type(email)
    cy.get('[data-qa="signup-button"]').click()
    //Then
    cy.get('form[action*="signup"]').should('be.visible')
    //Then
    cy.get('input[type="radio"').should('be.visible').check('Mr')
    cy.get('[data-qa="email"]')
      .should('be.disabled')
      .and('have.attr', 'value', email)
    cy.get('[data-qa="password"]').clear().type('Test12345')
    cy.get('[data-qa="days"]').select(7)
    cy.get('[data-qa="months"]').select(2)
    cy.get('[data-qa="years"]').select('1997')
    cy.get('#newsletter').check()
    cy.get('#optin').check()
    //cy.get('[data-qa="first_name"]').clear().type('Amer')
    cy.get('[data-qa="last_name"]').clear().type('Muhic')
    cy.get('[data-qa="address"]').clear().type('Sarajevo')
    cy.get('[data-qa="country"]').select('Canada')
    cy.get('[data-qa="state"]').clear().type('Sarajevo')
    cy.get('[data-qa="city"]').clear().type('Sarajevo')
    cy.get('[data-qa="zipcode"]').clear().type('71000')
    cy.get('[data-qa="mobile_number"]').clear().type('512442112')
    //When
    cy.get('[data-qa="create-account"]').should('be.enabled').click()
    //Then
    // cy.get('[data-qa="account-created"]').should('be.visible').and('contain.text', 'Account Created!')
    // Then

    //cy.get('[data-qa="password"]').invoke('prop', 'validationMessage').should('equal', 'Please fill out this field.')
    cy.get('[data-qa="first_name"]')
      .invoke('prop', 'validationMessage')
      .should('equal', 'Please fill out this field.')
    //cy.get('[data-qa="last_name"]').invoke('prop', 'validationMessage').should('equal', 'Please fill out this field.')
    //cy.get('[data-qa="address"]').invoke('prop', 'validationMessage').should('equal', 'Please fill out this field.')
    //cy.get('[data-qa="country"]').invoke('prop', 'validationMessage').should('equal', 'Please fill out this field.')
    //cy.get('[data-qa="state"]').invoke('prop', 'validationMessage').should('equal', 'Please fill out this field.')
    //cy.get('[data-qa="city"]').invoke('prop', 'validationMessage').should('equal', 'Please fill out this field.')
    //cy.get('[data-qa="zipcode"]').invoke('prop', 'validationMessage').should('equal', 'Please fill out this field.')
    //cy.get('[data-qa="mobile_number"]').invoke('prop', 'validationMessage').should('equal', 'Please fill out this field.')
    //cy.get('[data-qa="mobile_number"]').invoke('prop', 'validationMessage').should('equal', 'Please fill out this field.')
  })
})
