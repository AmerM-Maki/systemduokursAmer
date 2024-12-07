/// <reference types="cypress" />

import { registrationPage, contactUsPage } from '../../utils/initialize'

describe('Registration tests', () => {
  let newEmail
  beforeEach('Navigate to automationexercise', () => {
    newEmail = `aid${Date.now()}@example.com`
    cy.visit('/')
  })

  it('Navigate to registration form', () => {
    // When
    registrationPage.getNavigation().visit()

    // Then
    registrationPage.shouldSignUpFormBeVisible({ visible: true })

    // When
    registrationPage.populateEmailandName({ email: newEmail, name: 'Amer' })

    // Then
    registrationPage.shouldRegistrationFormBeOpened({ visible: true })
  })

  it('Succesfull registration', () => {
    // When
    registrationPage.getNavigation().visit()

    // Then
    registrationPage.shouldSignUpFormBeVisible({ visible: true })

    // When
    registrationPage.populateEmailandName({ email: newEmail, name: 'Aid' })

    // Then
    cy.get('form[action*="signup"]').should('be.visible')

    // When
    registrationPage.registerUser({
      title: 'Mr',
      password: 'Test12345',
      dayOfBirth: 7,
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
      mobileNumber: '061123321',
    })

    // Then
    registrationPage.shouldUserBeRegistered({
      success: true,
      successMessage: 'Account Created!',
    })
  })
})
