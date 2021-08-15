import Navbar from '../components/Navbar';

class HomePage {
    constructor() {
        this.navbar = new Navbar();
    }

    visit() {
      cy.visit('/');
      return this;
    }
  }
  
  export default HomePage;