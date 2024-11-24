export class Assert {

  static elementIsVisible(element: string) {
    cy.get(element).should('be.visible');
  }

  static columnHasUniqueValue(value: string) {
    cy.xpath(`//tr/td[text()= "${value}"]`).should('have.length', 1);
  }

  static tableContainsValue(value: string) {
    cy.xpath(`//table[contains(., "${value}")]`).should('have.length.greaterThan', 0);
  }
}