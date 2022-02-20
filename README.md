# WarungPintar HomeTest

Pre-condition Automation framework :

1.Testing automation framework i used CodeceptJS with Puppeteer Gherkin.
2. For support Gherkin feature and steps scripts, Install extension :
- Cucumber (Gherkin) Full Support
- Feature syntax Highlight & Snippets (Cucumber/Gherkin)
- Snippets and Syntax Highlight for gherkin (cucumber)
3. To provide element selectors, i will be grouping with Page Object.

Do i selected to create Automate :

Exercise 1:
For this exercise, I creating a test script for the Scenario 1 Access a Product via category after applying multiple filters on www.ebay.com. And Scenario 2 :  Access a Product via Search on www.ebay.com.

Exercise 2:
For this exercise, you will be creating end-to-end (e2e) tests for creating a gist.
User Stories
As a user
  I want to create a public gist.
  I want to edit an existing gist.
  I want to delete an existing gist.
  I want see my list of gists.
  
 
How to run Automation Script :

1. Before to running, at codecept.conf.js file must be settings gherkin: features & steps with selected path Exercise files to running. (exp : './features/Exercise2.feature' & './step_definitions/exercise2.steps.js') 
2. To running selected scenario can use @tags selected scenario, (exp:  npx codeceptjs run --grep "@scenario_view")
