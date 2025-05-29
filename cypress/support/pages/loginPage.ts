import { BlobOptions } from "buffer";
import { HomePage } from "./homePage";
import { SignUpPage } from "./signUpPage";
export class LoginPage {

    usernameInputField: string = "#username";
    passwordInputField: string = "#password";
    remembermeCheckBox: string = "signin-remember-me";
    signinButton: string = "signin-submit";
    signUpButton: string = "signup";

    checkRememberme(): void {
        // cy.getByData(this.remembermeCheckBox).find("input").check(); //it works
        cy.getByData(this.remembermeCheckBox).click(); // its better as we can tap on the label too also input is inside label
    }

    fillUsername(username: string): void {
        cy.get(this.usernameInputField).type(username);
    }

    fillPassword(password: string): void {
        cy.get(this.passwordInputField).type(password);
    }

    signIn(username: string, password: string, optional?: { rememberme?: boolean }): HomePage 
    {
        this.fillUsername(username);
        this.fillPassword(password);
        if (optional?.rememberme) {
            this.checkRememberme();
        }
        cy.getByData(this.signinButton).click();
        return new HomePage();
    }

    signUP(): SignUpPage {
        cy.getByData(this.signUpButton).click();
        return new SignUpPage;
    }

    goTo(url: string): void {
        cy.visit(url)
    }





}