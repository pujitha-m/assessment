class HomePage{

    elements = {
        searchForProducts: () => cy.get('[data-testid="search-term"]'),
        searchButton: () => cy.get('[data-testid="search-btn"]'),
        sainsburysLogo: () => cy.get('[data-testid="sainsburys-logo-link"]'),
        searchAListOfItemsLink: () => cy.get('[class="findMultiProduct"]')
    }
    
    enterSearchForProducts(searchItem){
       this.elements.searchForProducts().click({force: true});
       this.elements.searchForProducts().type(searchItem,{force: true});
    }

    clickSearchButton(){
        this.elements.searchButton().click({force: true});
     }

    clickSainsburysLogo(){
       this.elements.sainsburysLogo().click({force: true});
    }

    clicksearchAListOfItemsLink(){
        this.elements.searchAListOfItemsLink().click({force: true});
    }
}

export default new HomePage();