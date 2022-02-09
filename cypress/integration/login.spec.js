/// <reference types="cypress" />

const getInputByLabel = (label) => {
  return cy
    .contains("label", label)
    .invoke("attr", "for")
    .then((id) => {
      cy.get("#" + id);
    });
};

describe("invantor application", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    // cy.visit(`${Cypress.config("baseUrl")}`);
    cy.clearLocalStorage();
  });

  it("Login should fail if username is not provided", () => {
    cy.clearLocalStorage();
    cy.visit("http://localhost:3001/signin");
    getInputByLabel("Password").type("password");
    // cy.get("#login-button").click();
    // cy.get("#banner-div")
    //   .children()
    //   .should("contain", "Invalid Login Details")
    //   .and("be.visible");
    // cy.findByRole("alert")
    //   .should("contain", "Invalid Login Details")
    //   .and("be.visible");
  });

  it("Login should fail if password is not provided", () => {
    // cy.clearLocalStorage();
    cy.visit("http://localhost:3001/signin");
    cy.findByRole("textbox", { name: "Username" }).type("USERNAME");
    // cy.get("#login-button").click();
    // cy.get("#banner-div")
    //   .children()
    //   .should("contain", "Invalid Login Details")
    //   .and("be.visible");
    // cy.findByRole("alert")
    //   .should("contain", "Invalid Login Details")
    //   .and("be.visible");
  });

  // it("Admin Login should succeed if correct credentials are provided", () => {
  //   cy.visit("http://localhost:3001/signin");
  //   cy.get("[data-cy=username-field]").type("admin@admin.com");
  //   cy.get("[data-cy=password-field]").type("password123");
  //   cy.get("#login-button").click();
  //   cy.contains("Low Stock");
  // });
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
