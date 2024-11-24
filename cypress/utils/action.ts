export class Action {
    static goToURL(url: string) {
        cy.visit(url);
    }

    static clickByCss(locator: string) {
        cy.get(locator).click();
    }

    static clickByXpath(locator: string) {
        cy.xpath(locator).click();
    }

    static insertByCss(locator: string, value: string) {
        cy.get(locator).clear();
        cy.get(locator).type(value);
    }

    static selectDropdownValue(locator: string, value: string) {
        cy.get(locator).select(value);
    }
}