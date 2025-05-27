// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

declare namespace Cypress {
    interface Chainable {
        getByData(dataAttribute: string): Chainable<JQuery<HTMLElement>>
    }
}

Cypress.Commands.add("getByData", (selector) => {
    return cy.get(`[data-test=${selector}]`)
})

Cypress.Commands.add("createTransaction", (payload) => {
    const log = Cypress.log({
        name: "createTransaction",
        displayName: "CREATE TRANSACTION",
        message: [
            `(${payload.transactionType}) : ${payload.sender.id} and ${payload.receiver.id}`,

        ],
        autoEnd: false,
        consoleProps() {
            return payload
        }
    })
    return cy
        .window({ log: false })
        .then((win) => {
            log.snapshot("before")
            win.createTransactionService.send("SET_USERS", payload)

            const createPayload = pick(
                ["amount", "description", "transactionType"],
                payload
            )

            return win.createTransactionService.send("CREATE", {
                ...createPayload,
                senderId: payload.sender.id,
                receiverId: payload.receiver.id,
            })
        })
        .then(() => {
            log.snapshot("after")
            log.end()


        })
})
