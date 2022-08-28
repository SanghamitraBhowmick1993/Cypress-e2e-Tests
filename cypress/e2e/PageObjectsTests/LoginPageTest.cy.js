import LoginPage from "../PageObjects/LoginPage.cy";

describe('Test Suite',function(){
    it('Valid Login Tests',function(){
        const lp = new LoginPage()
        lp.visit()
        lp.fillEmail('admin@yourstore.com')
        lp.fillPassword('admin')
        lp.submit()
        cy.title().should('equal','Dashboard / nopCommerce administration')

    })
})