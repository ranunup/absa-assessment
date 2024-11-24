declare namespace Cypress {
  interface Chainable<Subject = any> {
    apiGET(endPoint: string): Cypress.Chainable<Cypress.Response<any>>;
  }
}
