import { values } from 'cypress/types/lodash'
import { Page } from '../pageobjects/base.po'

export class ContactUsPage extends Page {
  constructor() {
    super(`login`, cy)
  }

  clickLoginButton = (options: { visible: boolean }) => {
    this.loginButton
      .should(options.visible ? 'be.visible' : 'not.exist')
      .click()
  }
  shouldLoginErrorMessageBe = (options: {
    success: boolean
    successMessage?: string
  }) => {
    if (options.success) {
      this.errorMessage.should('be.visible')
      options.successMessage &&
        this.errorMessage.should('contain.text', options.successMessage)
    } else {
      this.errorMessage.should('not.exist')
    }
  }
  get loginButton() {
    return cy.get('[data-qa="login-button"]')
  }
  get errorMessage() {
    return this.cy.get('p[style="color: red;"]')
  }
}
