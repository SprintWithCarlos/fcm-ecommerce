/* eslint-disable consistent-return */
describe("Mobile", () => {
  it("passes", () => {
    cy.viewport("iphone-6");

    cy.visit("/");
    // Open and Close Drawer
    cy.get('[data-testid="menu"]').click();
    cy.get('[data-testid="sidebar"]').should("be.visible");
    cy.get('[data-testid="draw-c"]').click();
    cy.get('[data-testid="sidebar"]').should("not.be.visible");
    // Check menus
    const menus = ["collections", "men", "women", "about", "contact"];
    menus.forEach((menu) => {
      cy.get('[data-testid="menu"]').click();
      cy.get(`ul > [href="/${menu}"]`).click();
      cy.get(".wrapper").should("be.visible");
      cy.get("p > a").click();
    });
    // Check cart modal empty state
    cy.get('[data-testid="openCartMobile"]').click();
    cy.get('[data-testid="cartModal"]')
      .should("be.visible")
      .should(($span) => {
        const text = $span.text();
        expect(text).to.match(/Your cart is empty/);
      });
    // Check add to cart button initial state (disabled)
    cy.get('[data-testid="button"]').should("have.attr", "disabled", "disabled");
    // cy.get('[data-testid="openCartMobile"]').click();
    // Add to cart
    cy.get('[data-testid="add"]').click();
    cy.get('[data-testid="add"]').click();
    cy.get('[data-testid="add"]').click();
    cy.get('[data-testid="button"').click();
    cy.get('[data-testid="openCartMobile"]').click();
    cy.get('.icon > [data-testid="cart-mobile"]')
      .should("be.visible")
      .should(($span) => {
        const text = $span.text();
        expect(text).to.match(/3/);
      });
    cy.get('[data-testid="openCartMobile"]').click();
    cy.get(
      '.navbar-mobile > .right > [data-testid="cartModal"] > .column > :nth-child(1) > img'
    ).should("have.attr", "src", "/image-product-1-thumbnail.jpg");
    // Reset cart
    cy.get(
      '.navbar-mobile > .right > [data-testid="cartModal"] > .column > :nth-child(1) > [data-testid="trash"]'
    ).click();
    cy.get('[data-testid="cartModal"]')
      .should("be.visible")
      .should(($span) => {
        const text = $span.text();
        expect(text).to.match(/Your cart is empty/);
      });
    cy.get('[data-testid="openCartMobile"]').click();
    // Check slider forward
    [...Array(4)].forEach((item) => {
      cy.get('[data-testid="next"]').click();
      if (item < 4) {
        return cy
          .get('[data-testid="mobile"]')
          .should("have.attr", "src", `/image-product-${item + 1}.jpg`);
      }

      if (item === 4) {
        return cy.get('[data-testid="mobile"]').should("have.attr", "src", `/image-product-1.jpg`);
      }
    });
    // Check slider backwards
    [...Array(4)].forEach((item) => {
      cy.get('[data-testid="back"]').click();
      if (item < 4) {
        return cy
          .get('[data-testid="mobile"]')
          .should("have.attr", "src", `/image-product-${item - 1}.jpg`);
      }

      if (item === 0) {
        return cy.get('[data-testid="mobile"]').should("have.attr", "src", `/image-product-4.jpg`);
      }
    });
  });
});
