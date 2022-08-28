describe('My First Test', () => {
  it('finds the content "type"', () => {
    cy.visit('https://app.hubspot.com')

    cy.contains('type')
  })
})