/// <reference types="cypress" />

describe("invantor application", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    // cy.visit(`${Cypress.config("baseUrl")}`);
    cy.clearLocalStorage();
  });

  it("Alcohol should NOT be created with Missing Name", () => {
    cy.visit("http://localhost:3001/signin");
    cy.get("[data-cy=username-field]").type("admin@admin.com");
    cy.get("[data-cy=password-field]").type("password123");
    cy.get("#login-button").click();
    cy.findByRole("tab", { name: "Alcohols" }).click();
    cy.findByRole("button", { name: "Create" }).click();
    cy.findByRole("textbox", { name: "Volume In Ml" }).type("500");
    cy.findByRole("button", { name: "Submit" }).click();
    cy.findByRole("alert")
      .should("match", "Name can't be blank")
      .and("be.visible");
  });

  it("Alcohol should NOT be created with Missing Volume", () => {
    cy.visit("http://localhost:3001/signin");
    cy.get("[data-cy=username-field]").type("admin@admin.com");
    cy.get("[data-cy=password-field]").type("password123");
    cy.get("#login-button").click();
    cy.findByRole("tab", { name: "Alcohols" }).click();
    cy.findByRole("button", { name: "Create" }).click();
    cy.findByRole("textbox", { name: "Name" }).type("New_Alcohol_Entry");
    cy.findByRole("button", { name: "Submit" }).click();
    cy.findByRole("alert")
      .should("match", "Name can't be blank")
      .and("be.visible");
  });

  //   it("Alcohol should be created with correct details", () => {
  //     cy.visit("http://localhost:3001/signin");
  //     cy.get("[data-cy=username-field]").type("admin@admin.com");
  //     cy.get("[data-cy=password-field]").type("password123");
  //     cy.get("#login-button").click();
  //     cy.findByRole("tab", { name: "Alcohols" }).click();
  //     cy.findByRole("button", { name: "Create" }).click();
  //     cy.findByRole("textbox", { name: "Name" }).type("New_Alcohol_Entry");
  //     cy.findByRole("textbox", { name: "Volume In Ml" }).type("500");
  //     cy.findByRole("button", { name: "Submit" }).click();
  //     cy.findByRole("alert")
  //       .should("contain", "Successfully Created")
  //       .and("be.visible");
  //   });
});
