Feature: Sign In Page - Real World App

  Background:
    Given I am on the Sign In page

  Scenario: Verify all UI elements are visible
    Then I should see the logo and app name
    And I should see "Sign in" heading

  Scenario: Successful login with valid credentials
    Given I enter "validuser" in the Username field
    |username|
    |Heath93|
    And I enter "validpass" in the Password field
    |password|
    |s3cret|
    When I click the Sign In button
    Then I should be redirected to the dashboard

  Scenario: Attempt to sign in with empty fields
    When username field is empty
    And password field is empty
    Then I should not be able to click signIn

  # Scenario: Attempt to sign in with empty password
  #   Given I enter "testuser" in the Username field
  #   When I click the Sign In button
  #   Then I should see a password validation error

  Scenario: Attempt to sign in with empty username
    When I enter "password123" in the Password field
    |password|
    |password123|
    Then I should see "Username is required" error
    |erro|
    |Username is required|
    
  Scenario: Attempt to sign in with invalid credentials
    Given I enter "wronguser" in the Username field
    |username|
    |wronguser|
    And I enter "wrongpass" in the Password field
    |password|
    |wrongpass|
    When I click the Sign In button
    Then I should see an "Username or password is invalid" error message
    |error|
    |Username or password is invalid|

  # Scenario: Use 'Remember Me' option
  #   Given I enter "validuser" in the Username field
  #   And I enter "validpass" in the Password field
  #   And I check the Remember Me checkbox
  #   When I click the Sign In button
  #   Then I should remain logged in on next visit

  Scenario: Navigate to Sign Up page
    When I click the "Don't have an account? Sign Up" link
    Then I should be redirected to the Sign Up page

  Scenario: Check keyboard navigation order
    Then I should be able to navigate the form using the keyboard in order

  Scenario: Check placeholders in input fields
    Then the Password field should have placeholder "Password"
    # And the Password field should have placeholder "Password"
