import {
  findByTestId,
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import Lightbox from "./Lightbox";

describe("Lightbox with no images", () => {
  test("renders ", async () => {
    render(
      <Lightbox
        stateSetter={() => {}}
        images={{
          full: [],
          thumbnails: [],
        }}
      />
    );
    const lightboxComponent = screen.queryByTestId(/lightbox/i);
    expect(lightboxComponent).toBeInTheDocument();
  });
});
describe("Lightbox", () => {
  beforeEach(() => {
    render(
      <Lightbox
        stateSetter={() => {}}
        images={{
          full: ["1.jpg", "2.jpg", "3.jpg"],
          thumbnails: ["1t.jpg", "2t.jpg", "3t.jpg"],
        }}
      />
    );
  });

  test("renders ", async () => {
    const lightboxComponent = screen.queryByTestId(/lightbox/i);
    expect(lightboxComponent).toBeInTheDocument();
  });
  test("next button moves src forward ", async () => {
    const nextButton = await screen.findByTestId(/next/i);
    fireEvent.click(nextButton);
    const imageComponent = await screen.findByTestId(/image/i);
    expect(imageComponent).toHaveAttribute("src", "2.jpg");
  });
  test("next button restart count when reach end of array ", async () => {
    const nextButton = await screen.findByTestId(/next/i);
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    const imageComponent = await screen.findByTestId(/image/i);
    expect(imageComponent).toHaveAttribute("src", "1.jpg");
  });
  test("back button moves src backwards ", async () => {
    const backButton = await screen.findByTestId(/back/i);
    fireEvent.click(backButton);
    const imageComponent = await screen.findByTestId(/image/i);
    expect(imageComponent).toHaveAttribute("src", "3.jpg");
  });
  test("click over thumbnail changes main image ", async () => {
    const nextButton = await screen.findByTestId(/back/i);
    fireEvent.click(nextButton);
    fireEvent.click(nextButton); // main is at images.full[2]
    const thumbImage = await screen.findAllByTestId(/thumbnail/i);
    fireEvent.click(thumbImage[1]);
    const imageComponent = await screen.findByTestId(/image/i);
    expect(imageComponent).toHaveAttribute("src", "2.jpg");
  });
});
