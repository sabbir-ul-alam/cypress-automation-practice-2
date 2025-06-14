Feature: User Sign-Up

  Background:
    Given I open the sign-up page
#   Scenario: Submit the form with all fields empty
#     When I click the Sign Up button
#     Then I should see validation messages for all required fields
#   Scenario: Submit the form with only First Name filled
#     When I enter "John" in the First Name field
#     And I click the Sign Up button
#     Then I should see validation messages for Username and Password
#   Scenario: Submit the form with mismatched passwords
#     When I enter "John" in the First Name field
#     And I enter "Doe" in the Last Name field
#     And I enter "john123" in the Username field
#     And I enter "pass123" in the Password field
#     And I enter "different123" in the Confirm Password field
#     And I click the Sign Up button
#     Then I should see "Passwords do not match"
#   Scenario: Successful sign-up
#     When I enter "John" in the First Name field
#     And I enter "Doe" in the Last Name field
#     And I enter a unique username "johnny_new123"
#     And I enter "securePassword123" in the Password field
#     And I enter "securePassword123" in the Confirm Password field
#     And I click the Sign Up button
#     Then I should be redirected to the home page

  Scenario: Successful sign-up
    When I enter all the valid data for all fields
    |firstName|John|
    |lastName|Doe|
    |userName|johnny_new123|
    |password|pass123|
    |confirmPassword|pass123|
    Then the Password field should be of type "password"
    When I click on the sign up button
    Then I should be redirected to the login page

Scenario: Mock-response signup Successful 
    When I enter all the valid data for all fields
    |firstName|John1|
    |lastName|Doe1|
    |userName|johnny_new1234|
    |password|pass123|
    |confirmPassword|pass123|
    And I click on the sign up button to mock api response
    Then I should be redirected to the login page

  Scenario: Mock-request signup Successful
    When I enter all the valid data for all fields
    |firstName|John1|
    |lastName|Doe1|
    |userName|johnny_new1234|
    |password|pass123|
    |confirmPassword|pass123|
    And I click on the signup button to mock api request
    Then I should be redirected to the login page
#   Scenario: Try to use an existing username
#     When I enter all valid data with username "existingUser"
#     And I click the Sign Up button
#     Then I should see "Username already exists"

#   Scenario: Password fields should mask the input
#     Then the Password field should be of type "password"
#     And the Confirm Password field should be of type "password"

  