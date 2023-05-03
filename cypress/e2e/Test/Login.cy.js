describe("Login in the app and check the username account", () => {
  it("login in the app", () => {
    cy.visit("https://www.fullh4rd.com.ar/");
    cy.get(".item-user > .dropdown-opener > :nth-child(1)").click().wait(2000);
    cy.get(".dropdown > ul > :nth-child(2) > a").click().wait(4000);
    cy.contains("Iniciar sesión").scrollIntoView().wait(3000);
    cy.get("#Login > :nth-child(1) > #email")
      .type("yaki_z10@hotmail.com", { force: true })
      .wait(2000);
    cy.get("#password").type("facundo.19", { force: true }).wait(2000);
    cy.get('[style="margin:25px auto 0"] > .cta > div > .btn')
      .click({ force: true })
      .wait(4000);
    cy.get(".dropdown-opener > :nth-child(1) > img")
      .click({ force: true })
      .wait(3000);
    cy.get(".dropdown > ul > :nth-child(1) > a")
      .click({ force: true })
      .wait(2000);
    cy.get(".dropdown-opener > :nth-child(1) > img")
      .click({ force: true })
      .wait(2000);
    cy.get(".dropdown > ul > :nth-child(3) > a")
      .click({ force: true })
      .wait(2000);
  });
});
