import { get, values } from 'cypress/types/lodash'
import { Page } from '../pageobjects/base.po'

export class RegistrationPage extends Page {
  constructor() {
    super(`login`, cy)
  }

  populateEmailandName = (values: { email: string; name: string }) => {
    this.nameInputRegistration.clear().type(values.name)
    this.emailInputRegistration.clear().type(values.email)
    this.signupButton.click()
  }

  shouldRegistrationFormBeOpened = (options: { visible: boolean }) => {
    this.registrationForm.should(options.visible ? 'be.visible' : 'not.exist')
  }

  shouldSignUpFormBeVisible = (options: { opened: boolean }) => {
    this.signUpForm.should('be.visible')
  }

  registerUser = (values: {
    title: string
    name?: string
    password: string
    dayOfBirth: number
    monthOfBirth: number
    yearOfBirth: string
    newsletter: boolean
    specialOffers: boolean
    firstName: string
    lastName: string
    company?: string
    address: string
    country: string
    state: string
    city: string
    zipcode: string
    mobileNumber: string
  }) => {
    this.titleRadioButton.check(values.title)
    values.name && this.nameInput.clear().type(values.name)
    this.passwordInput.clear().type(values.password)
    this.dayOfBirthSelector.select(values.dayOfBirth)
    this.monthOfBirthSelector.select(values.monthOfBirth)
    this.yearOfBirthSelector.select(values.yearOfBirth)
    values.newsletter && this.newsletterCheckbox.check()
    values.newsletter && this.specialOfferCheckbox.check()
    this.firstNameInput.clear().type(values.firstName)
    this.lastNameInput.clear().type(values.lastName)
    values.company && this.inputCompanyField.clear().type(values.company)
    this.inputAddressField.clear().type(values.address)
    this.countrySelector.select(values.country)
    this.inputStateField.clear().type(values.state)
    this.inputCityField.clear().type(values.city)
    this.inputZipcodeField.clear().type(values.zipcode)
    this.inputMobileNumberField.clear().type(values.mobileNumber)
    this.createAccountButton.should('be.visible').click()
  }
  shouldUserBeRegistered = (options: {
    success: boolean
    successMessage?: string
  }) => {
    if (options.success) {
      this.accountCreatedMessage.should('be.visible')
      options.successMessage &&
        this.accountCreatedMessage.should(
          'contain.text',
          options.successMessage
        )
    } else {
      this.accountCreatedMessage.should('not.exist')
    }
  }

  get emailInputRegistration() {
    return cy.get('[data-qa="signup-email"]')
  }

  get nameInputRegistration() {
    return this.cy.get('[data-qa="signup-name"]')
  }

  get signupButton() {
    return this.cy.get('[data-qa="signup-button"]')
  }
  get registrationForm() {
    return cy.get('form[action*="signup"]')
  }
  get signUpForm() {
    return this.cy.get('.signup-form')
  }
  get titleRadioButton() {
    return this.cy.get('input[type="radio"]')
  }
  get nameInput() {
    return this.cy.get('[data-qa="name"]')
  }
  get passwordInput() {
    return this.cy.get('[data-qa="password"]')
  }
  get dayOfBirthSelector() {
    return this.cy.get('[data-qa="days"]')
  }
  get monthOfBirthSelector() {
    return this.cy.get('[data-qa="months"]')
  }
  get yearOfBirthSelector() {
    return this.cy.get('[data-qa="years"]')
  }
  get newsletterCheckbox() {
    return this.cy.get('#newsletter')
  }
  get specialOfferCheckbox() {
    return this.cy.get('#optin')
  }
  get firstNameInput() {
    return this.cy.get('[data-qa="first_name"]')
  }
  get lastNameInput() {
    return this.cy.get('[data-qa="last_name"]')
  }
  get inputCompanyField() {
    return this.cy.get('[data-qa="company"]')
  }
  get inputAddressField() {
    return this.cy.get('[data-qa="address"]')
  }
  get countrySelector() {
    return this.cy.get('[data-qa="country"]')
  }
  get inputStateField() {
    return this.cy.get('[data-qa="state"]')
  }
  get inputCityField() {
    return this.cy.get('[data-qa="city"]')
  }
  get inputZipcodeField() {
    return this.cy.get('[data-qa="zipcode"]')
  }
  get inputMobileNumberField() {
    return this.cy.get('[data-qa="mobile_number"]')
  }
  get createAccountButton() {
    return this.cy.get('[data-qa="create-account"]')
  }
  get accountCreatedMessage() {
    return this.cy.get('[data-qa="account-created"]')
  }
}
