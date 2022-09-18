import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "@/state/store";
import LoaderSpinner from "./Loader-spinner";

describe("Loader-spinner", () => {
  beforeAll(() => {
    render(
      <Provider store={store}>
        <LoaderSpinner />
      </Provider>
    );
  });

  test("renders ", async () => {
    const loaderSpinnerComponent = screen.queryByTestId(/loader-spinner/i);
    expect(loaderSpinnerComponent).toBeInTheDocument();
  });
});
