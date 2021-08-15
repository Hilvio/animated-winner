import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import GiftCardPage from '../../elements/pages/GiftCardPage';

const giftCardPage = new GiftCardPage();

And('add the product to cart', () => {
  giftCardPage.addToCard();
})
  
Given('I open the eGift Card page', () => {
  giftCardPage.visit();
})

Then('the product is successfully added', () => {
  cy.wait('@post').its('response').should('have.property', 'statusCode', 200)
})

When('I fill in {string}, {string}, {string} and {int} information', (to, from, message, quantity) => {
  giftCardPage.fillInformation(to, from, message, quantity);
})