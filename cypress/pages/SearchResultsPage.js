class SearchResultsPage{

    elements = {
       searchResultsTitle: () => cy.get('[data-test-id="search-results-title"]'),
       noResultsSubText: () => cy.get('[class="si__suggested-term"]')
    }
    verifySearchResultsTitle(){
        this.elements.searchResultsTitle().should('contain', /\d+ results for ‘\w+’/);
    }

    verifyNoResultsTitle(){
        this.elements.searchResultsTitle().should('contain','0 results for');
    }

    verifyNoResultsSubText(){
        this.elements.noResultsSubText().should('contain','Sorry, we couldn\'t find anything for ');
    }   
}

export default new SearchResultsPage();