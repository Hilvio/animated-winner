class ProductPage {

    assertTitle(text) {
      cy
      .get('#productTitle')
      .should('contain', text);
    }
  }
  
  export default ProductPage;