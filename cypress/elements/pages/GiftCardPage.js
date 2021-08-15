import Navbar from '../components/Navbar';

const path = '/dp/B07TMNGSN4/ref=s9_acss_bw_cg_gclptcg_1a1_w'
    +'?pf_rd_m=ATVPDKIKX0DER'
    +'&pf_rd_s=merchandised-search-4'
    +'&pf_rd_r=8ZK0PVRJRP35B7T78X2N'
    +'&pf_rd_t=101'
    +'&pf_rd_p=a7b85e29-6baa-4157-90f1-4cf0facf735b'
    +'&pf_rd_i=2238192011'

class GiftCardPage {
    constructor() {
        this.navbar = new Navbar();
    }

    addToCard() {
      cy.intercept('/gp/product/handle-buy-box/ref=*').as('post')
      cy.get('#gc-buy-box-atc').click();
    }

    fillInformation(to, from, message, quantity) {
      cy.get('#gc-customization-type-button-Animated').click();
      cy.get('#gc-design-mini-picker li').eq(Math.floor(Math.random() * 2)).click();
      cy.get('#gc-order-form-custom-amount').type(Math.floor(Math.random() * 100) + 1);
      cy.get('#gc-recipient-field textarea').type(to);
      cy.get('#gc-order-form-senderName').type(from);
      cy.get('#gc-order-form-message').clear().type(message);
      cy.get('#gc-order-form-quantity').clear().type(quantity);
      cy.get('#gc-order-form-date-val').click();
      cy.get('[data-action=a-cal-select-date][aria-disabled=false]').eq(1).click();
    }

    visit() {
      cy.visit(path);
      return this;
    }
  }
  
  export default GiftCardPage;