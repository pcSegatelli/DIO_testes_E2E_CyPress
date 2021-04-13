// ***********************************************************
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import { createPartiallyEmittedExpression } from 'typescript'
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.Commands.add('login', (username, password) =>
{ 
    cy.visit('/login')
    cy.url().should('include', '/login')
    cy.get('[formcontrolname-email]').type(username)
    cy.get('[formcontrolname=password]').type(password)
    cy.get('.btn').click()
})

