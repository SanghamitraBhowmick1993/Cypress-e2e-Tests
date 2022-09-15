class CurrentTemperature {

    visit() {
        cy.visit("https://weathershopper.pythonanywhere.com/")
    }
    chooseTemperature() {
        cy.get('[id=temperature]').invoke('text').then((val) => {
            cy.log(val);
            if (val > "19 °C") {
                cy.get("[href='/sunscreen']").click()
            } else if (val < "19 °C") {
                cy.get("[href='/moisturizer']").click()
            }
        })
    }
}

export default CurrentTemperature