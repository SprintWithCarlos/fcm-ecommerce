import { render, screen } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";

import Sidebar from "./Sidebar";

describe("Sidebar", () => {
  beforeAll(() => {
    render(
      <BrowserRouter>
        <Sidebar
          content={[]}
          state={{ isOpen: false, setIsOpen: (arg0: boolean) => {} }}
        />
      </BrowserRouter>
    );
  });
  test("renders Sidebar", async () => {
    const sidebarComponent = screen.queryByTestId(/sidebar/i);
    expect(sidebarComponent).toBeInTheDocument();
  });
});
