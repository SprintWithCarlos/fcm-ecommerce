/* eslint-disable consistent-return */
describe("Mobile", () => {
  it("passes", () => {
    cy.viewport("macbook-15");

    cy.visit("/");

    // Check menus
    const menus = ["collections", "men", "women", "about", "contact"];
    menus.forEach((menu) => {
      cy.get(`.menu > [href="/${menu}"]`).click();
      cy.get(".wrapper").should("be.visible");
      cy.get("p > a").click();
    });
    // Check cart modal empty state
    cy.get('[data-testid="openCartDesktop"]').click();
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
    cy.get('[data-testid="openCartDesktop"]').click();
    cy.get('.icon > [data-testid="cart-desktop"]')
      .should("be.visible")
      .should(($span) => {
        const text = $span.text();
        expect(text).to.match(/3/);
      });
    cy.get('[data-testid="openCartDesktop"]').click();
    cy.get('.navbar > .right > [data-testid="cartModal"] > .column > :nth-child(1) > img').should(
      "have.attr",
      "src",
      "/image-product-1-thumbnail.jpg"
    );
    // Reset cart
    cy.get(
      '.navbar > .right > [data-testid="cartModal"] > .column > :nth-child(1) > [data-testid="trash"]'
    ).click();
    cy.get('[data-testid="cartModal"]')
      .should("be.visible")
      .should(($span) => {
        const text = $span.text();
        expect(text).to.match(/Your cart is empty/);
      });
    cy.get('[data-testid="openCartDesktop"]').click();

    cy.get(".thumb-strip ").should(($div) => {
      const buttons = $div.children();
      Array(buttons).forEach(($button) => {
        const images = $button.children();
        Array(images).forEach((image, i) => {
          expect(image).to.have.attr("src", `/image-product-${i + 1}-thumbnail.jpg`);
        });
      });
    });
    [...Array(4)].forEach((item, i) => {
      cy.get('[data-testid="img"]').should("have.attr", "src", `/image-product-${i + 1}.jpg`);
      if (i < 3) {
        cy.get(`:nth-child(${i + 2}) > [data-testid="thumbnail"]`).click();
      }
    });
    cy.get('[data-testid="img"]').click();
    cy.get('[data-testid="lightbox"]').should("be.visible");
    [...Array(4)].forEach((item, i) => {
      cy.get('[data-testid="image"]').should("have.attr", "src", `/image-product-${i + 1}.jpg`);
      if (i < 3) {
        cy.get('.lightbox__wrapper > .thumb-strip > :nth-child(1) > [data-testid="thumbnail"]');
        cy.get(
          `.lightbox__wrapper > .thumb-strip > :nth-child(${i + 2}) > [data-testid="thumbnail"] `
        ).click();
      }
    });

    // Check slider forward
    [...Array(4)].forEach((item) => {
      cy.get('.lightbox__wrapper > .affordances > [data-testid="next"]').click();
      if (item < 4) {
        return cy
          .get('[data-testid="image"]')
          .should("have.attr", "src", `/image-product-${item + 1}.jpg`);
      }

      if (item === 4) {
        return cy.get('[data-testid="image"]').should("have.attr", "src", `/image-product-1.jpg`);
      }
    });
    // Check slider backwards
    [...Array(4)].forEach((item) => {
      cy.get('.lightbox__wrapper > .affordances > [data-testid="back"]').click();
      if (item < 4) {
        return cy
          .get('[data-testid="image"]')
          .should("have.attr", "src", `/image-product-${item - 1}.jpg`);
      }

      if (item === 0) {
        return cy.get('[data-testid="image"]').should("have.attr", "src", `/image-product-4.jpg`);
      }
    });
    cy.get('[data-testid="icon-cl"]').click();
  });
});
