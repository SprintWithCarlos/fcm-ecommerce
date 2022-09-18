import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";

describe("Navbar", () => {
  beforeAll(() => {
    render(<Navbar />, { wrapper: BrowserRouter });
  });

  test("renders ", async () => {
    const navbarcomponent = screen.queryByTestId(/navbar/i);
    expect(navbarcomponent).toBeInTheDocument();
  });
});
