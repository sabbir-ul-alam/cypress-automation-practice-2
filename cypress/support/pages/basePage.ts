export class BasePage{

    goTo(url):void{
        cy.visit(url);
    }
}