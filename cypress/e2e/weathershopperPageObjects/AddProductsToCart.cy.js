class AddProductsToCart {

    addSPF30ToCart() {
        const productNm = cy.get("div[class='text-center col-4'] > p[class^='font-weight-bold top-space-']")
        const productPrice = cy.get("div[class='text-center col-4'] > p[class^='font-weight-bold top-space-'] +p")
        const val = cy.contains("SPF-30").parent()
            .find('p').parent().find('button').click()

    }

    addSPF50ToCart() {
        cy.contains("SPF-50").parent()
            .find('p').parent().find('button').click()

    }
    addAloeToCart() {
        cy.contains("Aloe").parent()
            .find('p').parent().find('button').click()

    }
    addAlmondToCart() {
        cy.contains("Almond").parent()
            .find('p').parent().find('button').click()

    }
    clickCart(){
        cy.get('#cart').click()
    }
}



export default AddProductsToCart