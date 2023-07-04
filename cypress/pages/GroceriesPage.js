class GroceriesPage{

    elements = {
        searchTextBox:() => cy.get('[id="search"]'),
        searchAListOfItemsLink: () => cy.get('[class="findMultiProduct"]'),
        clearSearch:() => cy.get('[id="clearSearch"]')
    }
    
    //Click on Search A List Of Items Link
    clicksearchAListOfItemsLink(){
        this.elements.searchAListOfItemsLink().click({force: true});
    }

    //Click Clear Search i.e. x button in the right corner of the text box
    clickClearSearch(){
        this.elements.clearSearch().click({force: true});
    }

    //Verify Search Text Box Has No Text
    verifySearchTextBoxHasNoValue(){
        this.elements.searchTextBox().should('have.value', '');
    }
}

export default new GroceriesPage();