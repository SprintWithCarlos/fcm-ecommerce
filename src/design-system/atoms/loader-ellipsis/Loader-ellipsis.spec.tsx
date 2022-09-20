import { render, screen } from "@testing-library/react";

import LoaderEllipsis from "./Loader-ellipsis";

describe("Loader-ellipsis", () => {
  beforeAll(() => {
    render(<LoaderEllipsis color="blue" />);
  });

  test("renders ", async () => {
    const loaderEllipsisComponent = screen.queryByTestId(/loader-ellipsis/i);
    expect(loaderEllipsisComponent).toBeInTheDocument();
  });
});
