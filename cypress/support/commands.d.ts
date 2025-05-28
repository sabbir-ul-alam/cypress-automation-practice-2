// Make this file a module and augment global Cypress types
/// <reference types="cypress" />

export {}; // Important for nodenext

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to get elements by data-test attribute
       * @example cy.getByData('login-button')
       */
      getByData(dataAttribute: string): Chainable<JQuery<HTMLElement>>;
    }
  }
}


// declare namespace Cypress {
//     interface Chainable {
//         getByData(dataAttribute: string): Chainable<JQuery<HTMLElement>>
//     }
// }