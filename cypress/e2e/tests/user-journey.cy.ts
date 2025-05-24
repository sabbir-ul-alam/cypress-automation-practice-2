describe("user journey",()=>{
    it("user find a course on the home page and complete the courses lessions",()=>{
        cy.visit("http://localhost:3000/")
        cy.getByData("course-0").contains("Get started").click()
        cy.location("pathname").should("equal","/testing-your-first-application")
        cy.getByData("next-lesson-button").click()
        cy.location("pathname").should("equal","/testing-your-first-application/app-install-and-overview")
        cy.getByData("challenge-answer-0").check()
        cy.getByData("next-lesson-button").should("exist").click()
        //we can also use contain to check if the path name is there on the url
        cy.location("pathname").should("contain","installing-cypress-and-writing-our-first-test")
        cy.getByData("challenge-answer-0").check()
        cy.getByData("next-lesson-button").should("be.visible").click()
        cy.location("pathname").should("contain","setting-up-data-before-each-test")
        cy.getByData("challenge-answer-0").check()
        cy.getByData("next-lesson-button").should("have.text","Complete Course").click()
        cy.location("pathname").should("eq","/")

    })
})