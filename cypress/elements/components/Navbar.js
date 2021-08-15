import SearchPage from '../pages/SearchPage';

class Navbar {
    search(text) {
      cy.get('#twotabsearchtextbox').type(text);
      cy.get('#nav-search-submit-button').click();
      return new SearchPage();
    }
  }
  
  export default Navbar;