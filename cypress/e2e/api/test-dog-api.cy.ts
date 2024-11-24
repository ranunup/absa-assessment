describe("dog.ceo API tests", () => {
  let body: any;
  it(`
        1. Perform an API request to list all dog breeds 
        2. Validate retriever exists on response
    `, () => {
    // perform API call to list all dog breeds
    cy.apiGET(Cypress.env("all.dog.breeds")).then((response) => {
      body = response.body;

      // log response
      cy.log("All dog breeds => ", JSON.stringify(body));

      // verify retriever is included on response
      expect(body?.message).to.include.keys("retriever");
    });
  });

  it(`
        1. Perform an API request list sub-breeds for retriever
    `, () => {
    // perform API call to list retriever sub-breeds
    cy.apiGET(Cypress.env("retriever.sub-breeds")).then((response) => {
      body = response.body;

      // log response
      cy.log("Retriever sub-reeds => ", JSON.stringify(body));
    });
  });

  it(`
        1. Perform an API request to list a random image of golden retriever sub-breed
    `, () => {
    // perform API call to list random image of golden retriever sub-breed
    cy.apiGET(Cypress.env("random.golden.retriever.images")).then(
      (response) => {
        body = response.body;

        // log response
        cy.log("Random golden retriever image => ", JSON.stringify(body));
      }
    );
  });
});
