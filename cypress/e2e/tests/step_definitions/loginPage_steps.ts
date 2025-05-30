/// <reference types="cypress" />

import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import { LoginPage } from "../../../support/pages/loginPage";
import { contains, when } from "jquery";
import { match } from "assert";

const loginPage = new LoginPage();


Given("I am on the Sign In page", () => {
    loginPage.goTo("http://localhost:3000/signin");

})

Then("I should see the logo and app name", () => {
    cy.get(".SignInForm-logo").should("be.visible");
    cy.get("title").should("have.text", "Cypress Real World App");
})

Then('I should see "Sign in" heading', () => {
    cy.get("h1").contains("Sign in").should("be.visible").should("have.text", "Sign in");
})

Given('I enter "validuser" in the Username field', function (table: DataTable) {
    loginPage.fillUsername(table.raw()[1][0])
})

Given('I enter "validpass" in the Password field', function (table: DataTable) {
    loginPage.fillPassword(table.raw()[1][0])
})

When(/^I click the Sign In button$/, function () {
    this.homePage = loginPage.clickSignInButton();
})

Then(/^I should be redirected to the dashboard$/, function () {
    // cy.pause();
    this.homePage.getUrl().should("eq", 'http://localhost:3000/');
})

When(/^username field is empty$/, function () {
    cy.getByData(loginPage.usernameInputField).find("input").clear().should("be.empty");
})

When(/^password field is empty$/, function () {
    cy.get(loginPage.passwordInputField).clear().should("be.empty");
})

Then(/^I should not be able to click signIn$/, () => {
    cy.getByData(loginPage.signinButton).should("be.disabled");
})

Given(/^I enter "wronguser" in the Username field$/, function (table: DataTable) {
    loginPage.fillUsername(table.raw()[1][0]);
})

Given(/^I enter "wrongpass" in the Password field$/, function (table: DataTable) {
    loginPage.fillPassword(table.raw()[1][0]);
})


Then(/^I should see an "Username or password is invalid" error message$/, function (table: DataTable) {
    cy.getByData(loginPage.signinErrorMessage).should("be.visible").should("have.text", table.raw()[1][0]);
})


When(/^I enter "password123" in the Password field$/, function (table: DataTable) {
    loginPage.fillPassword(table.raw()[1][0]);
})


Then(/^I should see "Username is required" error$/, function (table: DataTable) {
    cy.getByData(loginPage.usernameInputField).find("p").should("be.visible").should("have.text", table.raw()[1][0])
})


When(/^I click the "Don't have an account\? Sign Up" link$/, function () {
    this.signupPage = loginPage.clicklSignUpButton();
})

Then(/^I should be redirected to the Sign Up page$/, function () {
    this.signupPage.getUrl().should('contains', this.signupPage.path);
})

Then(/^I should be able to navigate the form using the keyboard in order$/, () => {
    const tabOrderSelectors = [
        '[data-test="signin-username"] input',
        '[data-test="signin-password"] input',
        '[data-test="signin-remember-me"] input',
        'a',
    ];

    // cy.get(".SignInForm-logo").click();
    // cy.realPress("Tab");
    tabOrderSelectors.forEach((selector, index) => {
        cy.focused().should("match", selector);
        cy.realPress("Tab");
    })

})

Then (/^the Password field should have placeholder "Password"$/,()=>{
cy.get("#password-label").should("have.text","Password");

})

