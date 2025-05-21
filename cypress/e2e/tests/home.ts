describe("home page", () => {

  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  context("Hero Section", () => {
    it("the h1 contains the correct text", () => {
      // cy.visit("http://localhost:3000")
      cy.getByData("hero-heading").contains("Testing Next.js Applications with Cypress")
    })

    it("the features on the homepage are correct", () => {
      // cy.visit("http://localhost:3000")
      cy.get("dt").eq(0).contains("4 Courses")
    })

  })

  context("Courses section",()=>{
    it("course: testing your first nextJs app",()=>{
      cy.getByData('course-0').find('a')
      .contains("Get started").click()

      cy.location("pathname")
      .should('equal',"/testing-your-first-application")
    })

    it("course: testing foundations",()=>{
      cy.getByData('course-1').find('a')
      .contains('Get started').click()

      cy.location("pathname")
      .should("equal","/testing-foundations")


    })

    it.only('course: cypress fundamentals',()=>{
      cy.getByData('course-2').find('a')
      .contains("Get started").click()

      cy.location("pathname")
      .should("equal","/cypress-fundamentals")
    })


  })
})
