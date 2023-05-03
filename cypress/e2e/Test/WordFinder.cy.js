describe("Serach the word and find de results", () => {
  it("Serach the word", () => {
    cy.visit("https://www.google.com/");
    cy.get("#APjFqb").type("Typescript{enter}").wait(4000);
    cy.get('[href="https://www.typescriptlang.org/"] > .LC20lb')
      .should("have.text", "TypeScript: JavaScript With Syntax For Types.")
      .scrollIntoView()
      .wait(4000);
    cy.wait(3000);
    cy.get(":nth-child(6) > .g > .kvH3mc > .jGGQ5e > .yuRUbf > a > .LC20lb")
      .should(
        "have.text",
        "TypeScript: qué es, diferencias con JavaScript y por ... - Profile"
      )
      .scrollIntoView()
      .wait(4000);
  });
});
