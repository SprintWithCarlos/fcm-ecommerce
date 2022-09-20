import { render, screen } from "@testing-library/react";
import LoaderRing from "./Loader-rings";

describe("Loader", () => {
  beforeAll(() => {
    render(<LoaderRing />);
  });

  test("renders ", async () => {
    const loaderComponent = screen.queryByTestId(/loader/i);
    expect(loaderComponent).toBeInTheDocument();
  });
});
