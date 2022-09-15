class CardPayment{
   clickPayWithCard(){
    cy.get("button[type='submit']").click()
   } 

   switchToTheiFrameAndEnterPaymentDetails(email,cardNm,expiration,cvc,zip){//jQuery https://github.com/cypress-io/cypress/issues/136
   
    cy.getWithinIframe('[id="email"]').type(email);
    cy.getWithinIframe('[id="card_number"]').type(cardNm);
    cy.getWithinIframe('[id="cc-exp"]').type(expiration);
    cy.getWithinIframe('[id="cc-csc"]').type(cvc);
    cy.getWithinIframe('[id="billing-zip"]').type(zip);
    cy.getWithinIframe('[class="iconTick"]').click();

    }
}

export default CardPayment