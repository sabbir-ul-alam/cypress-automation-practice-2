import { BlobOptions } from "buffer";
import { HomePage } from "./homePage";
import { SignUpPage } from "./signUpPage";
export class LoginPage {

    usernameInputField: string = "#username";
    passwordInputField: string = "#password";
    remembermeCheckBox: string = "signin-remember-me";
    signinButton: string = "signin-submit";
    shouldCheck: boolean = false;
    signUpButton: string = "signup";

    goTo(url: string): void {
        cy.visit(url)
    }

    shouldCheckRememberme( val: boolean): void{
        this.shouldCheck=val;
    }

    signIn(username: string, password: string): HomePage {
        cy.get(this.usernameInputField).type(username);
        cy.get(this.passwordInputField).type(password);
        if(this.shouldCheck){
            // cy.getByData(this.remembermeCheckBox).find("input").check(); //it works
            cy.getByData(this.remembermeCheckBox).click(); // its better as we can tap on the label too also input is inside label
        }
        cy.getByData(this.signinButton).click();
        return new HomePage();
    }

    signUP(): SignUpPage{
        cy.getByData(this.signUpButton).click();
        return new SignUpPage;
    }





}