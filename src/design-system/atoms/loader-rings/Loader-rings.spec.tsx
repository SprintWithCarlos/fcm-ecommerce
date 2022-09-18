import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "@/state/store";
import LoaderRing from "./Loader-rings";

describe("Loader", () => {
  beforeAll(() => {
    render(
      <Provider store={store}>
        <LoaderRing />
      </Provider>
    );
  });

  test("renders ", async () => {
    const loaderComponent = screen.queryByTestId(/loader/i);
    expect(loaderComponent).toBeInTheDocument();
  });
});
