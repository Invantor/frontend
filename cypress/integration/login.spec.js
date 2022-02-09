/// <reference types="cypress" />

// https://on.cypress.io/introduction-to-cypress

describe("invantor application", () => {
  // beforeEach(() => {
  //   // Cypress starts out with a blank slate for each test
  //   // so we must tell it to visit our website with the `cy.visit()` command.
  //   // Since we want to visit the same URL at the start of all our tests,
  //   // we include it in our beforeEach function so that it runs before each test
  //   // cy.visit(`${Cypress.config("baseUrl")}`);
  //   cy.visit("http://localhost:3001/signin");
  // });

  // it("Should redirect user to signin page if user is not logged in", () => {
  //   cy.url().should("include", "signin");
  //   // cy.get(`[data-cy="password-field"]`).type("password");
  //   // cy.get("#login-button").click();
  //   // cy.get("#banner-div")
  //   //   .children()
  //   //   .should("contain", "Invalid Login Details")
  //   //   .and("be.visible");
  // });

  it("Login should fail if username is not provided", () => {
    cy.clearLocalStorage();
    cy.visit("http://localhost:3001/signin");
    // cy.get("[data-cy=password-field]").type("password");
    // cy.get("#login-button").click();
    // cy.get("#banner-div")
    //   .children()
    //   .should("contain", "Invalid Login Details")
    //   .and("be.visible");
  });

  it("Login should fail if password is not provided", () => {
    cy.clearLocalStorage();
    cy.visit("http://localhost:3001/signin");
    // cy.get("[data-cy=username-field]").type("USERNAME");
    // cy.get("#login-button").click();
    // cy.get("#banner-div")
    //   .children()
    //   .should("contain", "Invalid Login Details")
    //   .and("be.visible");
  });
});

// describe("Login Fail", () => {
//   beforeEach(() => {
//     cy.visit("http://localhost:3001/");
//   });

//   it("Present an error message when username is not provided.", () => {
//     cy.get("#password").type("password");
//     cy.get("#login-button").click();
//     cy.get("#login-banner").should("be.visible");
//   });
// });
