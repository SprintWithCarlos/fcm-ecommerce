import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "@/state/store";
import Sidebar from "./Sidebar";

describe("Sidebar", () => {
  beforeAll(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Sidebar />
        </BrowserRouter>
      </Provider>
    );
  });
  test("renders ", async () => {
    const sidebarComponent = screen.queryByTestId(/sidebar/i);
    expect(sidebarComponent).toBeInTheDocument();
  });
});
