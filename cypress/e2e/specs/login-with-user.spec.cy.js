/// <reference types="cypress" />

describe('Testing login', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com/')
  })

  it('Registration', () => {
    // When
    cy.get('a[href*="login"]').should('be.visible').click()
    // Then
    cy.get('.signup-form').should('be.visible')
    //When
    cy.get('[data-qa="signup-name"]').clear().type('Amer')
    cy.get('[data-qa="signup-email"]').clear().type('amer@example.com')
    cy.get('[data-qa="signup-button"]').click()
    //Then
    cy.get('form[action*="signup"]').should('be.visible')
    //When
    cy.get('input[type="radio"').should('be.visible').check('Mr')
    cy.get('[data-qa="email"')
      .should('be.disabled')
      .and('have.attr', 'value', 'amer@example.com')
    cy.get('[data-qa="password"]').clear().type('Test12345')
    cy.get('[data-qa="days"]').select(7)
    cy.get('[data-qa="months"]').select(2)
    cy.get('[data-qa="years"]').select('1997')
    cy.get('#newsletter').check()
    cy.get('#optin').check()
    cy.get('[data-qa="first_name"]').clear().type('Amer')
    cy.get('[data-qa="last_name"]').clear().type('Muhic')
    cy.get('[data-qa="address"]').clear().type('Sarajevo')
    cy.get('[data-qa="country"]').select('Canada')
    cy.get('[data-qa="state"]').clear().type('Sarajevo')
    cy.get('[data-qa="city"]').clear().type('Sarajevo')
    cy.get('[data-qa="zipcode"]').clear().type('71000')
    cy.get('[data-qa="mobile_number"]').clear().type('512442112')
    //Then
    cy.get('[data-qa="create-account"]').should('be.visible').click()
    //Then
    cy.get('[data-qa="account-created"]')
      .should('be.visible')
      .and('contain.text', 'Account Created!')
  })

  it.only('Login with user details', () => {
    //When
    cy.get('a[href="/login"]').should('be.visible').click()
    //Then
    cy.url()
      .get('.login-form')
      .contains('Login to your account')
      .and('be.visible')
    //And
    cy.get('[data-qa="login-email"]').clear().type('amer1732812730101@example.com')
    cy.get('[data-qa="login-password"]').clear().type('Test12345')
    //Than
    cy.get('[data-qa="login-button"]').click()
    //When
    cy.url()
      .get('.navbar-nav')
      .find('li')
      //.eq(9)
      .should('contain.text', 'Logged in as')
  })
})
