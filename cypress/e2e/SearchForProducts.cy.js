import HomePage from "../pages/HomePage";
import SearchResultsPage from "../pages/SearchResultsPage";
import GroceriesPage from "../pages/GroceriesPage";

describe('Home Page Search Functionality', () => {
    beforeEach( () => {
        // Visit the home page before each test
        cy.visit('/');
        // Load test data from a fixture file
        cy.fixture("testData.json").then((data) => {
            globalThis.data = data;
        })
    });

    it('Verify Valid Search Criteria', () => {   
        //Enter a valid search text
        HomePage.enterSearchForProducts(data.searchProduct);
        //Click on Search button
        HomePage.clickSearchButton();
        //Verify search results
        SearchResultsPage.verifySearchResultsTitle();    
    });
    
    it('Verify InValid Search Criteria', () => {
        //Enter a invalid search text
        HomePage.enterSearchForProducts(data.invalidSearch);
        //Click on Search button
        HomePage.clickSearchButton();
        //Verify search results
        SearchResultsPage.verifyNoResultsTitle();
        SearchResultsPage.verifyNoResultsSubText();    
    });
});