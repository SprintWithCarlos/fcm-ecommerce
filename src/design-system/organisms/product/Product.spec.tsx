import { fireEvent, render, screen } from "@testing-library/react";
import Product from "./Product";

describe("Product", () => {
  beforeEach(() => {
    render(<Product />);
  });

  test("renders ", async () => {
    const productComponent = screen.queryByTestId(/product/i);
    expect(productComponent).toBeInTheDocument();
  });

  test("increase quantity by clicking on plus button", async () => {
    const addButton = await screen.findByTestId(/add/i);
    fireEvent.click(addButton);
    fireEvent.click(addButton);
    fireEvent.click(addButton);
    const quantityComponent = screen.queryByTestId(/quantity/i);
    expect(quantityComponent?.innerHTML).toBe("3");
  });
  test("decrease quantity by clicking on less button", async () => {
    const addButton = await screen.findByTestId(/add/i);
    fireEvent.click(addButton);
    fireEvent.click(addButton);
    fireEvent.click(addButton);
    const lessButton = await screen.findByTestId(/less/i);
    fireEvent.click(lessButton);

    const quantityComponent = screen.queryByTestId(/quantity/i);
    expect(quantityComponent?.innerHTML).toBe("2");
  });
});
