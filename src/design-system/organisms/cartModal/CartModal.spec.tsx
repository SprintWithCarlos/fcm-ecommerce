import { render, screen } from "@testing-library/react";
import CartModal from "./CartModal";

describe("CartModal", () => {
  beforeEach(() => {
    render(<CartModal />);
  });

  test("renders ", async () => {
    const cartModalComponent = screen.queryByTestId(/cartModal/i);
    expect(cartModalComponent).toBeInTheDocument();
  });
});
