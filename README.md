# Cypress demo

## Install dependencies
`npm install`

## To run
`npm run cypress:run`

## Description

Example Cypress.io tests that executes both traditional spec files as well ass cucumber/gherkin syntax tests.
Test files are located in `./cypress/integration/`
Page object and component files can be found under `./cypress/elements/`

### Example spec file
```
describe('The search results', () => {
    it('can be sorted', () => {
        const search = new HomePage()
            .visit()
            .navbar.search('Nikon');

        const productPage = search
            .sort()
            .selectProduct(1);

        productPage.assertTitle('Nikon D D800E');
    })
  })
```

### Example feature file
```
Feature: Amazon.com eGift Card

  I want to give a gift card

  Background:

    Given I open the eGift Card page
  
  Scenario Outline: Select animated card category

    When I fill in <to>, <from>, <message> and <quantity> information
    And add the product to cart
    Then the product is successfully added
  
    Examples:
      | to | from | message | quantity |
      | "lucia.hirvi@outlook.com" | "Jonne Hirvi" | "Good Job!" | 1 |
      | "jonne.hirvi@outlook.com" | "Lucia Hirvi" | "Hello!" | 2 |
```
