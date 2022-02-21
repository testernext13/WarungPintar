  Feature: E2E for creating a gist
  In order to creating end-to-end (e2e) tests for creating a gist
  As a user
  I want to create a public gist
  I want to edit an existing gist
  I want to delete an existing gist
  I want see my list of gists

  @scenario_create
  Scenario: Create a public gist
Given user already access login page github
And user input email address
And user input password
And user click Sign in button
And user navigate to gist page
And user input description
And user input filename
And user input notes
When user click create gist button
Then user can to be able to see gist name

  @scenario_edit
  Scenario: Edit an existing gist
Given user already access login page github
And user input email address
And user input password
And user click Sign in button
And user navigate to gist page existing list
And user selected existing gists testing13
And user click edit
And user edit gist filename
And user click update public gist button
When user navigate Revision tabbing menu
Then user can to be able to see Revisions list

  @scenario_delete
  Scenario: Delete an existing gist
Given user already access login page github
And user input email address
And user input password
And user click Sign in button
And user navigate to gist page
And user navigate existing gists
And user click Delete button
When user accept alert delete
Then user can to be able to see message Gist deleted successfully

  @scenario_view
  Scenario: see my list of gists
Given user already access login page github
And user input email address
And user input password
And user click Sign in button
When user navigate to all my gist page
Then user can to be able to see all gist list