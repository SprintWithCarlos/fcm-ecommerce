describe("empty spec", () => {
  it("passes", () => {
    cy.visit("/login");
    cy.get('[data-testid="email-input"]').type("email test");
    cy.get('[data-testid="password-input"]').type("passwordtest");
    cy.get(".login-button").click();
    cy.get('[data-testid="userdata"]')
      .should("be.visible")
      .should("contain", "User: Leanne Graham");
  });
});
