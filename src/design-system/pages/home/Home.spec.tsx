/* eslint-disable array-callback-return */
/* eslint-disable import/first */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-no-constructed-context-values */

import {
  findByTestId,
  fireEvent,
  getByRole,
  getByText,
  queryAllByText,
  render,
  screen,
} from "@testing-library/react";

import { CartContextProvider } from "@/state/cartContext";

import App from "@/App";

describe("Home", () => {
  test("renders ", async () => {
    const { getByTestId } = render(
      <CartContextProvider>
        <App />
      </CartContextProvider>
    );
    const homeComponent = getByTestId(/home/i);
    expect(homeComponent).toBeInTheDocument();
  });
  test("add to cart button disabled if quantity is zero", async () => {
    const { getByTestId } = render(
      <CartContextProvider>
        <App />
      </CartContextProvider>
    );
    const addToCartButton = screen.getByRole("button", { name: "Add to Cart" });
    expect(addToCartButton).toBeDisabled();
  });
  test("add to cart", async () => {
    const { getByTestId } = render(
      <CartContextProvider>
        <App />
      </CartContextProvider>
    );
    expect(getByTestId(/add/i)).toBeInTheDocument();
    expect(getByTestId(/quantity/i)).toBeInTheDocument();
    expect(getByTestId(/span/i)).toBeInTheDocument();
    const addButton = getByTestId(/add/i);
    fireEvent.click(addButton);
    fireEvent.click(addButton);
    fireEvent.click(addButton);
    expect(getByTestId(/quantity/i).innerHTML).toBe("3");
    const addToCartButton = screen.getByRole("button", { name: "Add to Cart" });

    expect(addToCartButton).toBeInTheDocument();
    fireEvent.click(addToCartButton);
    expect(getByTestId(/span/i)).toHaveTextContent("3");

    screen.getAllByTestId(/cart-desktop/i).map((item) => {
      expect(item).toBeInTheDocument();
    });
    screen.getAllByTestId(/cart-desktop/i).map((item) => {
      expect(item).toHaveTextContent("3");
    });
  });

  test("clicking on cart button open cart modal mobile", async () => {
    const { getByTestId } = render(
      <CartContextProvider>
        <App />
      </CartContextProvider>
    );

    const modals = screen.queryAllByTestId(/cartmodal/i);
    expect(modals.length).toBe(0);
    const openModalButton = getByTestId(/openCartMobile/i);
    fireEvent.click(openModalButton);
    screen.queryAllByTestId(/cartmodal/i).map((item) => {
      expect(item).toHaveTextContent("Your cart is empty");
    });
  });
  test("cart modal render cart content", async () => {
    const { getByTestId } = render(
      <CartContextProvider>
        <App />
      </CartContextProvider>
    );
    const addButton = getByTestId(/add/i);
    fireEvent.click(addButton);
    fireEvent.click(addButton);
    fireEvent.click(addButton);
    const addToCartButton = screen.getByRole("button", { name: "Add to Cart" });
    fireEvent.click(addToCartButton);
    const openModalButton = getByTestId(/openCartDesktop/i);
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
    const { getByTestId } = render(
      <CartContextProvider>
        <App />
      </CartContextProvider>
    );
    const addButton = getByTestId(/add/i);
    fireEvent.click(addButton);
    fireEvent.click(addButton);
    fireEvent.click(addButton);
    const addToCartButton = screen.getByRole("button", { name: "Add to Cart" });
    fireEvent.click(addToCartButton);
    const openModalButton = getByTestId(/openCartDesktop/i);
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
});
