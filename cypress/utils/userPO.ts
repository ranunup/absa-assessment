import { Action } from "./action";
import { Locator } from "./locator";

export class UserPO {
  // add user
  static addUser(user: any) {
    Action.clickByCss(Locator.addUserLink);
    Action.insertByCss(Locator.firstNameInput, user?.firstName);
    Action.insertByCss(Locator.lastNameInput, user?.lastName);
    Action.insertByCss(Locator.usernameInput, user?.username);
    Action.insertByCss(Locator.passwordInput, user?.password);

    // determine radio button to select
    if (/AAA/.test(user?.customer)) {
      Action.clickByXpath(Locator.aaaCompanyRadioBtn);
    } else {
      Action.clickByXpath(Locator.bbbCompanyRadioBtn);
    }
    Action.selectDropdownValue(Locator.roleDropdown, user?.role);
    Action.insertByCss(Locator.emailInput, user?.email);
    Action.insertByCss(Locator.cellPhoneInput, user?.cell);
    
    // take screenshot before saving form
    cy.screenshot(`${user?.firstName}-add`);

    // save user form
    Action.clickByCss(Locator.saveButton);
  }
}
