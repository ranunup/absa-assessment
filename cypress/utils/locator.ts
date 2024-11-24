export enum Locator {
  // user list form
  userListTable = 'table[table-title="Smart Table example"]',
  addUserLink = 'button[type="add"]',

  // add user form
  firstNameInput = 'input[name="FirstName"]',
  lastNameInput = 'input[name="LastName"]',
  usernameInput = 'input[name="UserName"]',
  passwordInput = 'input[name="Password"]',
  aaaCompanyRadioBtn = '//label[normalize-space()="Company AAA"]/input[@type="radio"]',
  bbbCompanyRadioBtn = '//label[normalize-space()="Company BBB"]/input[@type="radio"]',
  roleDropdown = 'select[name="RoleId"]',
  emailInput = 'input[name="Email"]',
  cellPhoneInput = 'input[name="Mobilephone"]',
  saveButton = 'button.btn-success'
}
