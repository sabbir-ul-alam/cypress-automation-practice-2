describe("Newsletter Subscribe Form", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })

    it("HAPPY PATH: allows users to subscribe to the email list", () => {
        cy.getByData("email-input").type("sualsabbir@gmail.com")
        cy.getByData("submit-button").click()
        cy.getByData("success-message")
            .should("exist")
            .contains("sualsabbir@gmail.com")


    })

    it("UNHAPPY PATH: does not allow an invalid email address", () => {
        cy.getByData("email-input").type(".com")
        cy.getByData("submit-button").click()
        cy.getByData("success-message")
            .should("not.exist")
    })

    it.only("user can not sign up if already exists", () => {
        cy.getByData("email-input").type("john@example.com")
        cy.getByData("submit-button").click()
        cy.getByData("server-error-message")
            .should("exist")
            .contains("already exists")
         })
})
