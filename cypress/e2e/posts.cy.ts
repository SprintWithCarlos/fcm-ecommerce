import { faker } from "@faker-js/faker";

describe("Post List", () => {
  it("should display all posts", () => {
    cy.visit("/");
    cy.get("[data-testid='posts']").should("be.visible");

    cy.get(`[data-testid="link-post${faker.datatype.number({ min: 1, max: 100 })}"]`).click();
    cy.get("[data-testid='post-title']").should("be.visible");
  });
});
