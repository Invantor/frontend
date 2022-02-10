/// <reference types="cypress" />

describe("invantor application", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    // cy.visit(`${Cypress.config("baseUrl")}`);
    cy.clearLocalStorage();
    cy.visit("http://localhost:3001/signin");
    cy.get("[data-cy=username-field]").type("admin@admin.com");
    cy.get("[data-cy=password-field]").type("password123");
    cy.get("#login-button").click();
    cy.findByRole("tab", { name: "Drinks" }).click();
  });

  it("Drink should NOT be created with Missing Volume", () => {
    cy.findByRole("button", { name: "Create" }).click();
    cy.findByRole("textbox", { name: "Name" }).type("New_Drink_Entry");
    cy.findByRole("button", { name: "alcohol_id" }).click();
    cy.findByRole("textbox", { name: "Name" }).type("New_Drink_Entry");
    cy.findByRole("textbox", { name: "Critical Volume" }).type("500");
    cy.findByRole("button", { name: "Submit" }).click();
    cy.findByRole("alert")
      .should("contain", "Volume in ml can't be blank")
      .and("be.visible");
  });

  // it("Drink should NOT be created with Missing Name", () => {
  //   cy.findByRole("button", { name: "Create" }).click();
  //   cy.findByRole("textbox", { name: "Volume In Ml" }).type("500");
  //   cy.findByRole("textbox", { name: "Critical Volume" }).type("500");
  //   cy.findByRole("button", { name: "Submit" }).click();
  //   cy.findByRole("alert")
  //     .should("contain", "Name can't be blank")
  //     .and("be.visible");
  // });

  // it("Drink should NOT be created with missing Critical Volume", () => {
  //   cy.findByRole("button", { name: "Create" }).click();
  //   cy.findByRole("textbox", { name: "Name" }).type("New_Drink_Entry");
  //   cy.findByRole("textbox", { name: "Volume In Ml" }).type("500");
  //   cy.findByRole("button", { name: "Submit" }).click();
  //   cy.findByRole("alert")
  //     .should("contain", "Critical volume can't be blank")
  //     .and("be.visible");
  // });

  // it("Drink should NOT be created with When Volume in mL is not an integer", () => {
  //   cy.findByRole("button", { name: "Create" }).click();
  //   cy.findByRole("textbox", { name: "Name" }).type("New_Drink_Entry");
  //   cy.findByRole("textbox", { name: "Volume In Ml" }).type("Five Hundred");
  //   cy.findByRole("textbox", { name: "Critical Volume" }).type("500");
  //   cy.findByRole("button", { name: "Submit" }).click();
  //   cy.findByRole("alert")
  //     .should("contain", "Volume in ml is not a number")
  //     .and("be.visible");
  // });

  // it("Drink should NOT be created with When Critical Volume not an integer", () => {
  //   cy.findByRole("button", { name: "Create" }).click();
  //   cy.findByRole("textbox", { name: "Name" }).type("New_Drink_Entry");
  //   cy.findByRole("textbox", { name: "Volume In Ml" }).type("500");
  //   cy.findByRole("textbox", { name: "Critical Volume" }).type("Five Hundred");
  //   cy.findByRole("button", { name: "Submit" }).click();
  //   cy.findByRole("alert")
  //     .should("contain", "Critical volume is not a number")
  //     .and("be.visible");
  // });

  // it("Drink SHOULD be created When correct parameters are passed.", () => {
  //   cy.findByRole("button", { name: "Create" }).click();
  //   cy.findByRole("textbox", { name: "Name" }).type("New_Drink_Entry");
  //   cy.findByRole("textbox", { name: "Volume In Ml" }).type("500");
  //   cy.findByRole("textbox", { name: "Critical Volume" }).type("1000");
  //   cy.findByRole("button", { name: "Submit" }).click();
  //   cy.findByRole("alert")
  //     .should("contain", "Successfully Created")
  //     .and("be.visible");
  // });
  // it("Drink should NOT be created When an mixer with the same name already exists.", () => {
  //   cy.findByRole("button", { name: "Create" }).click();
  //   cy.findByRole("textbox", { name: "Name" }).type("New_Drink_Entry");
  //   cy.findByRole("textbox", { name: "Volume In Ml" }).type("500");
  //   cy.findByRole("textbox", { name: "Critical Volume" }).type("1000");
  //   cy.findByRole("button", { name: "Submit" }).click();
  //   cy.findByRole("alert")
  //     .should("contain", "Name has already been taken")
  //     .and("be.visible");
  // });

  // it("Search function SHOULD return the matching entry", () => {
  //   cy.findByRole("button", { name: "Show" }).click();
  //   cy.findByRole("textbox", { name: "Search..." }).type("New_Drink_entry");
  //   cy.get("[data-cy=table-body]")
  //     .find("[data-cy=table-row]")
  //     .should("have.length", 1)
  //     .and("contain", "New_Drink_Entry");
  // });

  // it("Edit button SHOULD bring up the edit modal when clicked", () => {
  //   cy.findByRole("button", { name: "Show" }).click();
  //   cy.findByRole("textbox", { name: "Search..." }).type("New_Drink_entry");
  //   cy.get("[data-cy=table-body]")
  //     .find("[data-cy=table-row]")
  //     .find("[data-cy=edit-button]")
  //     .click();
  //   cy.get("[data-cy=edit-modal]").should("be.visible");
  // });

  // it("Drink should NOT be successfully edited to a name that already exists in the system", () => {
  //   cy.findByRole("button", { name: "Show" }).click();
  //   cy.findByRole("textbox", { name: "Search..." }).type("New_Drink_entry");
  //   cy.get("[data-cy=table-body]")
  //     .find("[data-cy=table-row]")
  //     .find("[data-cy=edit-button]")
  //     .click();
  //   cy.get("[data-cy=edit-name]").clear().type("Jim Beam");
  //   cy.findByRole("button", { name: "Submit" }).click();
  //   cy.findByRole("alert")
  //     .should("contain", "Name has already been taken")
  //     .and("be.visible");
  // });

  // it("Drink should NOT be successfully edited if Name is blank", () => {
  //   cy.findByRole("button", { name: "Show" }).click();
  //   cy.findByRole("textbox", { name: "Search..." }).type("New_Drink_entry");
  //   cy.get("[data-cy=table-body]")
  //     .find("[data-cy=table-row]")
  //     .find("[data-cy=edit-button]")
  //     .click();
  //   cy.get("[data-cy=edit-name]").clear();
  //   cy.findByRole("button", { name: "Submit" }).click();
  //   cy.findByRole("alert")
  //     .should("contain", "Name can't be blank")
  //     .and("be.visible");
  // });

  // it("Drink should NOT be successfully edited if Volume in ML is blank", () => {
  //   cy.findByRole("button", { name: "Show" }).click();
  //   cy.findByRole("textbox", { name: "Search..." }).type("New_Drink_entry");
  //   cy.get("[data-cy=table-body]")
  //     .find("[data-cy=table-row]")
  //     .find("[data-cy=edit-button]")
  //     .click();
  //   cy.get("[data-cy=edit-volume]").clear();
  //   cy.findByRole("button", { name: "Submit" }).click();
  //   cy.findByRole("alert")
  //     .should("contain", "Volume in ml can't be blank")
  //     .and("be.visible");
  // });

  // it("Drink should NOT be successfully edited Critical Volume is blank", () => {
  //   cy.findByRole("button", { name: "Show" }).click();
  //   cy.findByRole("textbox", { name: "Search..." }).type("New_Drink_entry");
  //   cy.get("[data-cy=table-body]")
  //     .find("[data-cy=table-row]")
  //     .find("[data-cy=edit-button]")
  //     .click();
  //   cy.get("[data-cy=edit-criticalvolume]").clear();
  //   cy.findByRole("button", { name: "Submit" }).click();
  //   cy.findByRole("alert")
  //     .should("contain", "Critical volume can't be blank")
  //     .and("be.visible");
  // });

  // it("Drink should NOT be successfully edited if volume is not an interger", () => {
  //   cy.findByRole("button", { name: "Show" }).click();
  //   cy.findByRole("textbox", { name: "Search..." }).type("New_Drink_entry");
  //   cy.get("[data-cy=table-body]")
  //     .find("[data-cy=table-row]")
  //     .find("[data-cy=edit-button]")
  //     .click();
  //   cy.get("[data-cy=edit-volume]").clear().type("Five Hundred");
  //   cy.findByRole("button", { name: "Submit" }).click();
  //   cy.findByRole("alert")
  //     .should("contain", "Volume in ml is not a number")
  //     .and("be.visible");
  // });

  // it("Drink should NOT be successfully edited if critical volume is not an interger", () => {
  //   cy.findByRole("button", { name: "Show" }).click();
  //   cy.findByRole("textbox", { name: "Search..." }).type("New_Drink_entry");
  //   cy.get("[data-cy=table-body]")
  //     .find("[data-cy=table-row]")
  //     .find("[data-cy=edit-button]")
  //     .click();
  //   cy.get("[data-cy=edit-criticalvolume]").clear().type("Five Hundred");
  //   cy.findByRole("button", { name: "Submit" }).click();
  //   cy.findByRole("alert")
  //     .should("contain", "Critical volume is not a number")
  //     .and("be.visible");
  // });

  // it("Drink SHOULD be successfully edited if correct parameters are provided", () => {
  //   cy.findByRole("button", { name: "Show" }).click();
  //   cy.findByRole("textbox", { name: "Search..." }).type("New_Drink_entry");
  //   cy.get("[data-cy=table-body]")
  //     .find("[data-cy=table-row]")
  //     .find("[data-cy=edit-button]")
  //     .click();
  //   cy.get("[data-cy=edit-name]").clear().type("New_Drink_Entry_V2");
  //   cy.get("[data-cy=edit-volume]").clear().type("1000");
  //   cy.get("[data-cy=edit-criticalvolume]").clear().type("2000");
  //   cy.findByRole("button", { name: "Submit" }).click();
  //   cy.findByRole("alert")
  //     .should("contain", "Successfully Updated")
  //     .and("be.visible");
  // });
});
``;
