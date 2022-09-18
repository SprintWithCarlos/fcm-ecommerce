import { render, screen } from "@testing-library/react";
import Product from "./Product";

describe("Product", () => {
  beforeEach(() => {
    render(<Product />);
  });

  test("renders ", async () => {
    const productComponent = screen.queryByTestId(/product/i);
    expect(productComponent).toBeInTheDocument();
  });
});

