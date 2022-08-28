describe('Login to Hubspot', () => {
    it('finds the content "type"', () => {
      cy.visit('https://www.freshworks.com/')
      cy.contains('Customers').click()
      cy.url().should('include','/customers')
      cy.get('h1:nth-of-type(1)')
      .should('be.visible')
      .and('contain','Freshworks')
      .and('have.length',1)

      cy.get('ul.footer-nav li').should('have.length',24)
      cy.get('ul.footer-nav li').find("a[href*='footer']")
      .should('have.length',6)
    })
  })