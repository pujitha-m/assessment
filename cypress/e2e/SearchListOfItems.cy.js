import HomePage from "../pages/HomePage";
import GroceriesPage from "../pages/GroceriesPage";
import SearchAListOfItemsPage from "../pages/SearchAListOfItemsPage";
import SearchResultsPage from "../pages/SearchResultsPage";

describe('Search A List Of Items Page Search Functionality', () => {
    beforeEach( () => {
        // Visit the home page before each test
        cy.visit('/');
        // Load test data from a fixture file
        cy.fixture("testData.json").then((data) => {
            globalThis.data = data;
        })
    });

    it('Verify Search For Products With Valid Search Seperated By Enter Key', () => {
        //Click on sainsburys logo to navigate to Groceries page
        HomePage.clickSainsburysLogo();
        //Click on Search a list of items hyperlink
        GroceriesPage.clicksearchAListOfItemsLink();
        //Enter list of products desired to search seperated by enter key
        SearchAListOfItemsPage.enterYourShoppingListSeparatedByEnterKey(data.searchListOfItems);
        //Click Find Products button
        SearchAListOfItemsPage.clickfindProductsButton();
        //Verify search results
        SearchResultsPage.verifySearchResultsTitle();  
    });

    it('Verify Search For Products With Valid Search Seperated By Comma', () => {
        //Click on sainsburys logo to navigate to Groceries page
        HomePage.clickSainsburysLogo();
        //Click on Search a list of items hyperlink
        GroceriesPage.clicksearchAListOfItemsLink();
        //Enter list of products desired to search seperated by comma
        SearchAListOfItemsPage.enterYourShoppingListSeparatedByComma(data.searchListOfItems);
        //Click Find Products button
        SearchAListOfItemsPage.clickfindProductsButton();
        //Verify search results
        SearchResultsPage.verifySearchResultsTitle();  
    });

    it('Verify Search For Products With Invalid Format', () => {
        //Click on sainsburys logo to navigate to Groceries page
        HomePage.clickSainsburysLogo();
        //Click on Search a list of items hyperlink
        GroceriesPage.clicksearchAListOfItemsLink();
        //Enter list of products desired to search
        SearchAListOfItemsPage.enterYourInvalidShoppingList(data.searchListOfItems);
        //Click Find Products button
        SearchAListOfItemsPage.clickfindProductsButton();
        //Verify search results
        SearchResultsPage.verifySearchResultsTitle();  
    });
});