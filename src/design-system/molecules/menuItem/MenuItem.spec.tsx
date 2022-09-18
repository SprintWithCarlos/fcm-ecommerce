import { render, screen } from "@testing-library/react";
import MenuItem from "./MenuItem";
import { ReactComponent as DashboardIcon } from "@/design-system/atoms/icons/dashboard.svg";

describe("MenuItem", () => {
  beforeAll(() => {
    render(<MenuItem text="test" icon={<DashboardIcon />} />);
  });
  test("renders ", async () => {
    const menuItemComponent = screen.queryByTestId(/menuItem/i);
    expect(menuItemComponent).toBeInTheDocument();
  });
});
