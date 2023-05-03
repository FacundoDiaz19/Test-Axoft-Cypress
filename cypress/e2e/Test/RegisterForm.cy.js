let Chance = require("chance");
let chance = new Chance();
let email = chance.email();

describe("register user and Login", () => {
  it("register as a user", () => {
    cy.visit("https://www.fullh4rd.com.ar/");
    cy.get(".item-user > .dropdown-opener > :nth-child(1)").click().wait(2000);
    cy.get(".dropdown > ul > :nth-child(1) > a").click().wait(4000);
    cy.contains("Registro de usuario").scrollIntoView().wait(4000);
    cy.get("#myBtn").click({ force: true }).scrollIntoView().wait(5000);
    cy.get("#danger").should("have.text", "Ingresar teléfono").wait(2000);
    cy.contains("Registro de usuario").scrollIntoView().wait(4000);
    cy.get("#email").type(email, { force: true }).wait(2000);
    cy.get("#password").type("12345678", { force: true }).wait(2000);
    cy.get("#password2").type("12345678", { force: true }).wait(2000);
    cy.get("#nombre").type(chance.name(), { force: true }).wait(2000);
    cy.get("#apellido").type(chance.last(), { force: true }).wait(2000);
    cy.get("#dni").type(chance.ssn(), { force: true }).wait(2000);
    cy.get("#tel")
      .type(chance.natural({ min: 1e7, max: 1e8 - 1 }), { force: true })
      .wait(2000);
    cy.get("#myBtn").click({ force: true }).wait(5000);
    cy.get(".dropdown > ul > :nth-child(2) > a")
      .click({ force: true })
      .wait(4000);
  });
});
