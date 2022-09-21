/* eslint-disable array-callback-return */
/* eslint-disable import/first */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-no-constructed-context-values */

import { fireEvent, render, screen } from "@testing-library/react";

import { CartContextProvider } from "@/state/cartContext";

import App from "@/App";

describe("Home", () => {
  beforeEach(() => {
    render(
      <CartContextProvider>
        <App />
      </CartContextProvider>
    );
  });
  test("renders Home", async () => {
    const homeComponent = screen.getByTestId(/home/i);
    expect(homeComponent).toBeInTheDocument();
  });
  test("add to cart button disabled if quantity is zero", async () => {
    const addToCartButton = screen.getByRole("button", { name: "Add to Cart" });
    expect(addToCartButton).toBeDisabled();
  });
  test("add to cart", async () => {
    expect(screen.getByTestId(/add/i)).toBeInTheDocument();
    expect(screen.getByTestId(/quantity/i)).toBeInTheDocument();
    const addButton = screen.getByTestId(/add/i);
    fireEvent.click(addButton);
    fireEvent.click(addButton);
    fireEvent.click(addButton);
    expect(screen.getByTestId(/quantity/i).innerHTML).toBe("3");
    const addToCartButton = screen.getByRole("button", { name: "Add to Cart" });

    expect(addToCartButton).toBeInTheDocument();
    fireEvent.click(addToCartButton);

    screen.getAllByTestId(/cart-desktop/i).map((item) => {
      expect(item).toBeInTheDocument();
    });
    screen.getAllByTestId(/cart-desktop/i).map((item) => {
      expect(item).toHaveTextContent("3");
    });
  });

  test("clicking on cart button open cart modal mobile", async () => {
    const modals = screen.queryAllByTestId(/cartmodal/i);
    expect(modals.length).toBe(0);
    const openModalButton = screen.getByTestId(/openCartMobile/i);
    fireEvent.click(openModalButton);
    screen.queryAllByTestId(/cartmodal/i).map((item) => {
      expect(item).toHaveTextContent("Your cart is empty");
    });
  });

  test("cart modal render cart content", async () => {
    const addButton = screen.getByTestId(/add/i);
    fireEvent.click(addButton);
    fireEvent.click(addButton);
    fireEvent.click(addButton);
    const addToCartButton = screen.getByRole("button", { name: "Add to Cart" });
    fireEvent.click(addToCartButton);
    const openModalButton = screen.getByTestId(/openCartDesktop/i);
    fireEvent.click(openModalButton);
    const cartModals = screen.getAllByTestId(/cartmodal/i);
    cartModals.map((item) => {
      expect(item.querySelector("img")).toHaveAttribute(
        "src",
        "/image-product-1-thumbnail.jpg"
      );
    });
  });
  test("clicking in thrash icon eliminate reset cart", async () => {
    const addButton = screen.getByTestId(/add/i);
    fireEvent.click(addButton);
    fireEvent.click(addButton);
    fireEvent.click(addButton);
    const addToCartButton = screen.getByRole("button", { name: "Add to Cart" });
    fireEvent.click(addToCartButton);
    const openModalButton = screen.getByTestId(/openCartDesktop/i);
    fireEvent.click(openModalButton);
    const cartModals = screen.getAllByTestId(/cartmodal/i);
    cartModals.map((item) => {
      expect(item.querySelector("img")).toHaveAttribute(
        "src",
        "/image-product-1-thumbnail.jpg"
      );
    });

    screen.getAllByTestId(/trash/i).map((item) => {
      fireEvent.click(item);
      screen.getAllByText("Your cart is empty").map((item) => {
        expect(item).toBeInTheDocument();
      });
    });
  });
  test("clicking on main image opens lightroom", async () => {
    const openLightroomButton = screen.getByTestId(/image/i);
    fireEvent.click(openLightroomButton);
    expect(screen.getByTestId(/lightbox/i)).toBeInTheDocument();
  });
});
