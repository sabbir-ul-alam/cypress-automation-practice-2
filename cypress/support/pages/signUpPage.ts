import { BasePage } from "./basePage";
import { LoginPage } from "./loginPage";

export class SignUpPage extends BasePage{
    path:string = "/signup"
    signupHeader: string = "signup-title";
    firstNameField: string = "signup-first-name";
    lastNameField: string = "signup-last-name";
    userNameField: string = "signup-username";
    passwordField: string = "signup-password";
    confirmPasswordField: string = "signup-confirmPassword";
    signupButton: string = "signup-submit";
    signinLink: string = ""
    getUrl(): Cypress.Chainable<string>{
         return cy.url();
    }

    fillFirstNameField(name: string): void{
    cy.getByData(this.firstNameField)
    .type(name);
    }

    fillLastName(name:string):void{
        cy.getByData(this.lastNameField)
        .type(name);
    }

    fillUserName(name:string): void{

        cy.getByData(this.userNameField)
        .type(name)
    }

    fillPassword(password: string): void{
        cy.getByData(this.passwordField)
        .type(password)
    }

    fillConfirmPassword(password: string): void{
        cy.getByData(this.confirmPasswordField)
        .type(password);
    }

    clickSignUpButton(): LoginPage{
        cy.getByData(this.signupButton).click();
        return new LoginPage();

    }







}