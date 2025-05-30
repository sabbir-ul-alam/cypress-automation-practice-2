export class SignUpPage{
    path:string = "/signup"
    signupHeader: string = "signup-title";

    getUrl(): Cypress.Chainable<string>{
         return cy.url();
    }

}