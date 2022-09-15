class CatalogProductSearch {

    catalog(value) {
        cy.get("[class='brand-image-xs logo-xs']").click()
        const field = cy.get("[placeholder='Search']")
        field.type(value)
        return this
    }
    selectProduct() {
        cy.get("[id='user-selection']:nth-of-type(1)").click()
    }
    lookupProduct() {
        cy.get("[href='/Admin/Product/List']").click()
    }
    enterProductNameToSearch(value) {
        const field = cy.get('[id=SearchProductName]')
        field.clear()
        field.type(value)
        return this
    }
    search() {
        cy.get('[id=search-products]').click()

    }

}
export default CatalogProductSearch