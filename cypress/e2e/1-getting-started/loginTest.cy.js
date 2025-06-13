/// <reference types="cypress" />


describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('https://practicetestautomation.com/practice-test-login/')
  })

  it('user login', () => {
    cy.get('#username').type('student');
    cy.get('#password').type('Password123');
    cy.get('#submit').click();
    cy.url().should('include','/logged-in-successfully/')

   
  })

})
