Feature: Board Intelligence: Home page Test Cases
  As user I want to check the Board Intelligence web page

  @smoke
  Scenario: Verify that user can see the logo present on home page
    Given I launch the home page and I accept the alert
    Then I should be able to see the Board Intelligence logo
  @smoke
  Scenario: Verify that page title is correct
    Given I launch the home page and I accept the alert
    Then I verify the page title displayed
  @smoke
  Scenario: Verify that homepage message text is correct
    Given I launch the home page and I accept the alert
    Then I verify the homepage message text is correct
  @sanity
  Scenario: Count the number of links present on Home page and also print all the links
    Given I launch the home page and I accept the alert
    Then I should be able to count number of links present
    And I should be able to print out all the links


