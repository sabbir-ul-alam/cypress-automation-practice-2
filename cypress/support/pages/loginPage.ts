import { BlobOptions } from "buffer";
import { HomePage } from "./homePage";
import { SignUpPage } from "./signUpPage";
import { BasePage } from "./basePage";
export class LoginPage  extends BasePage{
    path: string = '/signin'
    usernameInputField: string = "signin-username";
    passwordInputField: string = "#password";
    remembermeCheckBox: string = "signin-remember-me";
    signinButton: string = "signin-submit";
    signUpButton: string = "signup";
    signinErrorMessage: string = "signin-error";

    checkRememberme(): void {
        // cy.getByData(this.remembermeCheckBox).find("input").check(); //it works
        cy.getByData(this.remembermeCheckBox).click(); // its better as we can tap on the label too also input is inside label
    }

    fillUsername(username: string): void {
        cy.getByData(this.usernameInputField).type(username);
    }

    fillPassword(password: string): void {
        cy.get(this.passwordInputField).type(password);
    }

    clickSignInButton(): HomePage {
        cy.getByData(this.signinButton).click();
        return new HomePage();
    }

    signIn(username: string, password: string, optional?: { rememberme?: boolean }): HomePage {
        this.fillUsername(username);
        this.fillPassword(password);
        if (optional?.rememberme) {
            this.checkRememberme();
        }
        cy.getByData(this.signinButton).click();
        return new HomePage();
    }

    clicklSignUpButton(): SignUpPage {
        cy.getByData(this.signUpButton).click();
        return new SignUpPage;
    }

    // goTo(url: string): void {
    //     cy.visit(url)
    // }

    getUrl(): Cypress.Chainable<string>{
         return cy.url();
    }





}