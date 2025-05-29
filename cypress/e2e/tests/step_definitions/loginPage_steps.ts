/// <reference types="cypress" />

import { Given,  When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { LoginPage } from "../../../support/pages/loginPage";



Given("I am on the Sign In page", ()=>{
    const loginPage = new LoginPage();
    loginPage.goTo("http://localhost:3000/signin");

})

Then("I should see the logo and app name",()=>{
    cy.get(".SignInForm-logo").should("be.visible");
    cy.get("title").should("have.text","Cypress Real World App");
})

Then('I should see "Sign in" heading',()=>{
    cy.get("h1").contains("Sign in").should("be.visible").should("have.text","Sign in");
})

When('I enter "validuser" in the Username field',function(){
    

})


