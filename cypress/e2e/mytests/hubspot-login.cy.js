describe('Login to Hubspot', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
    it('finds the content "type"', () => {
      cy.visit('https://app.hubspot.com')
      cy.get('#username').type('testuser@gmail.com')
      cy.get('#password').type('testpassword')
      cy.get('#loginBtn').click()
      cy.screenshot()
    })
  })