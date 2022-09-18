import { render, screen } from "@testing-library/react";
import Modal from "./Modal";

describe("Modal", () => {
  beforeAll(() => {
    render(<Modal>Test</Modal>);
  });

  test("renders ", async () => {
    const modalComponent = screen.queryByTestId(/modal/i);
    expect(modalComponent).toBeInTheDocument();
  });
});
