/// <reference types="cypress" />



describe('FirstTests', () => {
  beforeEach(() => {
    
    cy.visit('https://automationexercise.com/')
  })

  it('', () => {
   
    cy.get('.logo').should('be.visible')

  })

  



})
