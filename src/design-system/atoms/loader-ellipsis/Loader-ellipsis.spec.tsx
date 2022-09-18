import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "@/state/store";
import LoaderEllipsis from "./Loader-ellipsis";

describe("Loader-ellipsis", () => {
  beforeAll(() => {
    render(
      <Provider store={store}>
        <LoaderEllipsis />
      </Provider>
    );
  });

  test("renders ", async () => {
    const loaderEllipsisComponent = screen.queryByTestId(/loader-ellipsis/i);
    expect(loaderEllipsisComponent).toBeInTheDocument();
  });
});
