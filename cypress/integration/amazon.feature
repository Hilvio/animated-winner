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