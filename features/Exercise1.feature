  Feature: Access a Product on eBay
  In order to applying Searching product on eBay
  As a user
  I want Access a Product via Search

  @scenario_2
  Scenario: Access a Product via Search
Given user already open eBay
And user input macbook  they want to search on the search bar
And user click searching
And user see result searching
And user selected search category to Books & Magazines
When user click search
Then user can to be able to see result for Books & Magazines
