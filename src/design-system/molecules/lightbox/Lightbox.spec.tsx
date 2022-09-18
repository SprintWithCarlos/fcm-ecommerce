import { render, screen } from "@testing-library/react";
import Lightbox from "./Lightbox";

describe("Lightbox", () => {
  beforeEach(() => {
    render(<Lightbox />);
  });

  test("renders ", async () => {
    const lightboxComponent = screen.queryByTestId(/lightbox/i);
    expect(lightboxComponent).toBeInTheDocument();
  });
});

