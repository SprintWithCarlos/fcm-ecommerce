import { render, screen } from "@testing-library/react";
import Home from "./Home";

describe("Home", () => {
  beforeEach(() => {
    render(<Home />);
  });

  test("renders ", async () => {
    const homeComponent = screen.queryByTestId(/home/i);
    expect(homeComponent).toBeInTheDocument();
  });
});

