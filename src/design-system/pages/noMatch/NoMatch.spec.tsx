import { render, screen } from "@testing-library/react";
import NoMatch from "./NoMatch";

describe("NoMatch", () => {
  beforeEach(() => {
    render(<NoMatch />);
  });

  test("renders ", async () => {
    const nomatchComponent = screen.queryByTestId(/nomatch/i);
    expect(nomatchComponent).toBeInTheDocument();
  });
});
