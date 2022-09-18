import { render, screen } from "@testing-library/react";
import Drawer from "./Drawer";

describe("Drawer", () => {
  beforeEach(() => {
    render(<Drawer />);
  });

  test("renders ", async () => {
    const drawerComponent = screen.queryByTestId(/drawer/i);
    expect(drawerComponent).toBeInTheDocument();
  });
});

