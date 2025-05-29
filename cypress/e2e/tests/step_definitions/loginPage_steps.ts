/// <reference types="cypress" />

import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import { LoginPage } from "../../../support/pages/loginPage";
import { when } from "jquery";

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

Given('I enter "validuser" in the Username field', function(table: DataTable){
    loginPage.fillUsername(table.raw()[1][0])
})

Given('I enter "validpass" in the Password field', function(table: DataTable){
    loginPage.fillPassword(table.raw()[1][0])
})

When(/^I click the Sign In button$/,function(){
    this.homePage = loginPage.clickSignInButton();
})

Then(/^I should be redirected to the dashboard$/,function(){
    // cy.pause();
    this.homePage.getUrl().should("eq",'http://localhost:3000/');
})




