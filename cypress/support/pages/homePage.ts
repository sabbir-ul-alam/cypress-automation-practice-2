export class HomePage{

    path: string = '/';

    getUrl(): Cypress.Chainable<string>{
         return cy.url();
    }

}