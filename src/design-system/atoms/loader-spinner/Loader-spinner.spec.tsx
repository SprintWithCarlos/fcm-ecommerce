import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import LoaderSpinner from "./Loader-spinner";

describe("Loader-spinner", () => {
  beforeAll(() => {
    render(<LoaderSpinner />);
  });

  test("renders ", async () => {
    const loaderSpinnerComponent = screen.queryByTestId(/loader-spinner/i);
    expect(loaderSpinnerComponent).toBeInTheDocument();
  });
});
