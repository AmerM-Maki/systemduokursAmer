/// <reference types="cypress" />
let email
describe('Product tests', () => {
  beforeEach(() => {
    email = `amer${Date.now()}@example.com`
    cy.visit('https://automationexercise.com/')
  })
  it('Find products on page', () => {
    cy.get('.single-products').first().should('be.visible')
    cy.get('.single-products')
      .first()
      .find('.productinfo')
      .find('h2')
      .should('be.visible')
    // cy.get('.single-products').first().find('.productinfo h2').should('be.visible')
    // cy.get('.single-products').first().find('.productinfo h2').should('be.visible')
    // cy.get('.single-products .productinfo h2').first().should('be.visible').and('contain.text', 'Rs. 500')
    cy.contains('Winter Top')
      .parents('.single-products')
      .find('.productinfo')
      .as('wantedProduct')

    cy.get('@wantedProduct').should('be.visible')

    cy.get('@wantedProduct').find('h2').should('contain.text', 'Rs. 600')

    cy.get('@wantedProduct').parents('.product-image-wrapper').find('.choose a')

    cy.get('@wantedProduct').trigger('mouseenter') // hover preko elementa
  })

  it('Check picture', () => {
    cy.contains('Winter Top')
      .parents('.single-products')
      .find('.productinfo')
      .as('wantedProduct')
    cy.get('@wantedProduct')
      .find('img')
      .should('have.attr', 'src', '/get_product_picture/5')
      .and('be.visible')
  })

  it('View product', () => {
    cy.contains('Winter Top')
      .parents('.product-image-wrapper')
      .find('.choose')
      .as('wantedProduct')
    cy.get('@wantedProduct')
      .find('a[href="/product_details/5"]')
      .should('be.visible')
      .click()
    cy.url().get('.product-details').find('.view-product').should('be.visible')
  })

  it.only('Added to cart', () => {
    cy.contains('Winter Top')
      .parents('.product-image-wrapper')
      .find('.single-products')
      .as('wantedProduct')
    cy.get('@wantedProduct')
      .trigger('mouseenter')
      .find('.overlay-content', 'a')
      .click({ force: true })
    cy.get('.modal-title').parents('#cartModal').and('contain.text', 'Added!')
  })
})
