import CatalogProductSearch from "../PageObjects/CatalogProductSearch.cy";
import LoginPage from "../PageObjects/LoginPage.cy";


describe('Test Suite',function(){
    it('Valid Login Tests',function(){
        const lp = new LoginPage()
        const cp = new CatalogProductSearch()
        lp.visit()
        lp.fillEmail('admin@yourstore.com')
        lp.fillPassword('admin')
        lp.submit()
        cy.title().should('equal','Dashboard / nopCommerce administration')
        cy.wait(2000)
        cp.catalog('Product')
        cp.selectProduct()
      //   cp.lookupProduct()
      //   cp.enterProductNameToSearch('MacBook')
      //   cp.search()
      //   cy.get('[class=odd]')
      // .should('contain','MacBook')

    })
})