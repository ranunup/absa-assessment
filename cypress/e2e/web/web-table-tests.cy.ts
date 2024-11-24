import { Action } from "../../utils/action";
import { Assert } from "../../utils/assert";
import { Locator } from "../../utils/locator";
import { UserPO } from "../../utils/userPO";

describe("Web Table Tests", () => {
  it(`
        1. Navigate to web-tables site 
        2. Validate you're on the user list table 
        3. Click Add User link 
        4. Add users 
        5. Verify added users are unique 
        6. Verify users are added to the list
    `, () => {
    // navigate to web tables site
    Action.goToURL(Cypress.env("webTables.url"));

    // verify user list table is visible
    Assert.elementIsVisible(Locator.userListTable);
    cy.screenshot(`navigation-success`);

    cy.fixture("users").then((usersFixture) => {
      if (usersFixture) {
        for (const user of usersFixture?.users) {
          // add user
          UserPO.addUser(user);

          // verify table has unique(one) username
          Assert.columnHasUniqueValue(user?.username);

          // verify user details have been added to the table
          Assert.tableContainsValue(user?.firstName);
          Assert.tableContainsValue(user?.lastName);
          Assert.tableContainsValue(user?.cell);

          // take screenshot after user has been added to table
          cy.screenshot(`${user?.firstName}-add-success`);
        }
      }
    });
  });
});
