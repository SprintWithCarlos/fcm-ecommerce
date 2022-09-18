import { render, screen } from "@testing-library/react";
import Slider from "./Slider";

describe("Slider", () => {
  beforeEach(() => {
    render(<Slider />);
  });

  test("renders ", async () => {
    const sliderComponent = screen.queryByTestId(/slider/i);
    expect(sliderComponent).toBeInTheDocument();
  });
});

