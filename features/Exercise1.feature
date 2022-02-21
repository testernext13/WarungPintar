  Feature: Access a Product on eBay
  In order to applying Searching product on eBay
  As a user
  I want Access a product via category after applying multiple filters
  I want Access a Product via Search

  @scenario_1
  Scenario: Access a Product via category after applying multiple filters
Given user already open eBay
And user access electronics category page
And user navigate to cell phones,smart watches & Accesories page
And user navigate to cell phones & Smartphones
And user added filters
And user added filter screen size
And user selected screen size 6 in or more
And user added filter price
And user input price 12000000
And user added filter item location
And user selected item location Asia
When user click apply on pop-up filters
Then user can to be able to see result for 3 filters applied


  @scenario_2
  Scenario: Access a Product via Search
Given user already open eBay
And user input macbook  they want to search on the search bar
And user click searching
And user see result searching
And user selected search category to Books & Magazines
When user click search
Then user can to be able to see result for Books & Magazines
