class SearchAListOfItemsPage{

    elements = {
       shoppingListTextArea: () => cy.get('[id="shopping-list"]'),
       findProductsButton: () => cy.get('[class="btn-find-products"]')
    }
    
    enterYourShoppingListSeparatedByEnterKey(listOfItems){
        listOfItems.forEach((item) => {
            this.elements.shoppingListTextArea().type(item + '{enter}', {force: true});
        });
    }

    enterYourShoppingListSeparatedByComma(listOfItems){
        listOfItems.forEach((item) => {
            this.elements.shoppingListTextArea().type(item + ',', {force: true});
        });
    }

    enterYourInvalidShoppingList(searchItem){
        searchItem.forEach((item) => {
            this.elements.shoppingListTextArea().type(item, {force: true});
        });
    }

    clickfindProductsButton(){
        this.elements.findProductsButton().click({force: true});
    }    
}

export default new SearchAListOfItemsPage();