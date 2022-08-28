describe('Salesforce e2e', () =>{
it('start a free trail',() =>{
    cy.visit("https://app.hubspot.com");
    cy.title().should('equal','HubSpot Login')
    cy.get("a[href^='https://app.hubspot.com/signup-hubspot']").click //starts with (^=)
    cy.title().should('contain','Get started with HubSpot')

})
})