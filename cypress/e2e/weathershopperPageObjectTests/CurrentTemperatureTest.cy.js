import CurrentTemperature from "../weathershopperPageObjects/CurrentTemperature.cy"
import AddProductsToCart from "../weathershopperPageObjects/AddProductsToCart.cy"
import CardPayment from "../weathershopperPageObjects/CardPayment.cy"



describe('Test Suite', function () {
  it('Valid temperature check', function () {
    const ct = new CurrentTemperature()
    const ap = new AddProductsToCart()
    const cp = new CardPayment()


    ct.visit()
    ct.chooseTemperature()
    cy.get("div[class^='row justify-content-center']:nth-of-type(1)>h2").invoke('text')
      .then((val) => {
        cy.log(val);
        if (val == "Moisturizers") {
          cy.title().should('equal', 'The Best Moisturizers in the World!')
          ap.addAlmondToCart()
          ap.addAloeToCart()
        }
        else if (val == "Sunscreens") {
          cy.title().should('equal', 'The Best Sunscreens in the World!')
          ap.addSPF30ToCart()
          ap.addSPF50ToCart()
        }

      })
      ap.clickCart()
      cy.title().should('equal', 'Cart Items')
      cp.clickPayWithCard()
      cy.wait(3000)
      cp.switchToTheiFrameAndEnterPaymentDetails('hello@gmail.com','4242424242424242','01/23','456','235653')
      cy.wait(5000)
      cy.title().should('equal', 'Confirmation')

   
  })
})