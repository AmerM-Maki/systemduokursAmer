/// <reference types="cypress" />

import { registrationPage, loginPage } from '../../utils/initialize'

describe('Login tests', () => {
  let email
  let newEmail
  let invalidEmail

  beforeEach(() => {
    email = `amer${Date.now()}@example.com`
    newEmail = `amer${Date.now()}@example.com`
    invalidEmail = `amer${Date.now()}gmail.com`
    cy.visit('/')
    // When
    registrationPage.getNavigation().visit()

    // Then
    registrationPage.shouldSignupFormBeVisible({ visible: true })
    // When
    registrationPage.populateEmailandName({ email: newEmail, name: 'Amer' })

    // Then
    registrationPage.shouldRegistrationFormBeVisible({ visible: true })

    // When
    registrationPage.registerUser({
      title: 'Mr',
      password: 'Test12345',
      dayOfBirth: 13,
      monthOfBirth: 2,
      yearOfBirth: '1997',
      newsletter: true,
      specialOffers: true,
      firstName: 'Amer',
      lastName: 'Muhic',
      company: 'SystemDuo',
      address: 'Zmaja od Bosne',
      country: 'Canada',
      state: 'Sarajevo',
      city: 'Sarajevo',
      zipcode: '71000',
      mobileNumber: '061123123',
    })
    // Then
    registrationPage.shouldUserBeRegistered({
      success: true,
      successMessage: 'Account Created!',
    })
    registrationPage.registeredUserLogin({
      visible: true,
    })
  })

  it('Login', () => {
    // When
    registrationPage.populateLoginDetails({
      email: newEmail,
      password: 'Test12345',
    })
    registrationPage.clickLoginButton({
      visible: true,
    })
    // Then
    registrationPage.shouldUserBeLogged({ visible: true })
  })

  it.only('Login unsuccesfull', () => {
    // When
    registrationPage.populateLoginDetails({
      email: newEmail,
      password: 'Test',
    })
    registrationPage.clickLoginButton({ visible: true })

    // Then
    loginPage.shouldLoginErrorMessageBe({ visible: true })
  })
})
