import ProductPage from './ProductPage';

class SearchPage {

  selectProduct(index=0) {
    cy.get(`.s-search-results [data-index='${index}'] h2 a`).click();
    return new ProductPage();
  }

  sort() {
    cy.get('[data-component-type=s-result-info-bar] form').click();
    cy.get('#s-result-sort-select_2').click();
    return this;
  }
}

export default SearchPage;