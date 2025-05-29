Feature: Sign In Page - Real World App

  Background:
    Given I am on the Sign In page

  Scenario: Verify all UI elements are visible
    Then I should see the logo and app name
    And I should see "Sign in" heading
    # And I should see the Username field
    # And I should see the Password field
    # And I should see the Remember Me checkbox
    # And I should see the Sign In button
    # And I should see the "Don't have an account? Sign Up" link
    # And I should see the "Built by Cypress" footer text

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
    When I click the Sign In button
    Then I should see "Username is required" error
    And I should see a password validation error

  Scenario: Attempt to sign in with empty password
    Given I enter "testuser" in the Username field
    When I click the Sign In button
    Then I should see a password validation error

  Scenario: Attempt to sign in with empty username
    Given I enter "password123" in the Password field
    When I click the Sign In button
    Then I should see "Username is required" error

  Scenario: Attempt to sign in with invalid credentials
    Given I enter "wronguser" in the Username field
    And I enter "wrongpass" in the Password field
    When I click the Sign In button
    Then I should see an "Invalid username or password" error message

  Scenario: Use 'Remember Me' option
    Given I enter "validuser" in the Username field
    And I enter "validpass" in the Password field
    And I check the Remember Me checkbox
    When I click the Sign In button
    Then I should remain logged in on next visit

  Scenario: Navigate to Sign Up page
    When I click the "Don't have an account? Sign Up" link
    Then I should be redirected to the Sign Up page

  Scenario: Check keyboard navigation order
    Then I should be able to navigate the form using the keyboard in order

  Scenario: Check placeholders in input fields
    Then the Username field should have placeholder "Username"
    And the Password field should have placeholder "Password"
