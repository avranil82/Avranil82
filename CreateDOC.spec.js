/// <reference types="cypress" />
describe("Login Tests", function () {
  beforeEach(() => {
    const username = Cypress.env("username");
    const password = Cypress.env("password");
    cy.login(username, password);
  });

  it("Go to Root Page", function () {
    cy.visit("/");
    cy.get("form > .btn").click();
    cy.get('[href="/Offender/Create"]').click();

    //Create new record
    cy.get("#LastName").type("Hall");
    cy.get("#FirstName").type("Jeff");
    cy.get("#RaceId").select("White");
    cy.get("#SexId").select("Male");
    cy.get("#DateOfBirth").type("1965-12-10");
    cy.get("#AssignedStatusId").select("B - PROBATION");

    cy.get("#ReasonId").select("101 - NEW CONVICTION/COMMITMENT");

    cy.get("#AssignedLocation").type("0200 - AMIT");
    cy.get("#AssignedLocation-ResultsList").first().click();

    cy.get("#PhysicalLocation").type("0100 - ALEXANDRIA DISTRICT");
    cy.get("#PhysicalLocation-ResultsList").first().click();

    cy.get("#AssignedDate").type("2020-11-11");
    cy.get("#SecondaryButton").click();
  });
});
