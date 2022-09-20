import { fireEvent, render, screen } from "@testing-library/react";
import Drawer from "./Drawer";

describe("Drawer", () => {
  beforeEach(() => {
    render(<Drawer position="left" content={[]} />);
  });

  test("renders Drawer", async () => {
    const drawerComponent = screen.queryByTestId(/drawer/i);

    expect(drawerComponent).toBeInTheDocument();
  });
  test("renders Sidebar when clicked", async () => {
    const menuButton = await screen.findByTestId(/menu/i);
    fireEvent.click(menuButton);
    const sidebarComponent = screen.queryByTestId(/sidebar/i);
    expect(sidebarComponent).toBeInTheDocument();
  });
  test("close Sidebar when close button is clicked", async () => {
    const menuButton = await screen.findByTestId(/menu/i);
    fireEvent.click(menuButton);
    fireEvent.click(screen.getByTestId(/draw-c/i));
    const sidebarComponent = screen.getByTestId(/sidebar/i);
    expect(sidebarComponent.classList.contains("isOpen")).toBeFalsy();
  });
  test("renders Sidebar at correct position", async () => {
    const menuButton = await screen.findByTestId(/menu/i);
    fireEvent.click(menuButton);
    const drawerContainer = await screen.findByTestId(/container/i);
    expect(drawerContainer?.classList).toMatchObject({
      0: "sidebar__container-left",
      1: "isOpen",
    });
  });
});
