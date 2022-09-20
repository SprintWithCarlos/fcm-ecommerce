import { render, screen } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";

import NoMatch from "./NoMatch";

describe("NoMatch", () => {
  beforeEach(() => {
    render(<NoMatch />, { wrapper: BrowserRouter });
  });

  test("renders ", async () => {
    const nomatchComponent = screen.queryByTestId(/nomatch/i);
    expect(nomatchComponent).toBeInTheDocument();
  });
});
