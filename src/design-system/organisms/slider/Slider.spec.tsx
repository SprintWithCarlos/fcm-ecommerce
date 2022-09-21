/* eslint-disable react/jsx-no-constructed-context-values */
import { fireEvent, render, screen } from "@testing-library/react";
import { CartContext } from "@/state/cartContext";
import Slider from "./Slider";

describe("Slider with no images", () => {
  test("renders ", async () => {
    render(
      <CartContext.Provider
        value={{
          cart: {
            name: "",
            description: "",
            discount: 0,
            fullPrice: 0,
            images: {
              full: [],
              thumbnails: [],
            },
            price: 0,
            quantity: 0,
            total: 0,
          },
          dispatch: () => {},
        }}
      >
        <Slider />
      </CartContext.Provider>
    );
    const sliderComponent = screen.queryByTestId(/slider/i);
    expect(sliderComponent).toBeInTheDocument();
  });
});
describe("Slider", () => {
  beforeEach(() => {
    render(
      <CartContext.Provider
        value={{
          cart: {
            name: "",
            description: "",
            discount: 0,
            fullPrice: 0,
            images: {
              full: ["1.jpg", "2.jpg", "3.jpg"],
              thumbnails: ["1t.jpg", "2t.jpg", "3t.jpg"],
            },
            price: 0,
            quantity: 0,
            total: 0,
          },
          dispatch: () => {},
        }}
      >
        <Slider />
      </CartContext.Provider>
    );
  });

  test("renders ", async () => {
    const sliderComponent = screen.queryByTestId(/slider/i);
    expect(sliderComponent).toBeInTheDocument();
  });
  test("lightbox is mounted when image is clicked", async () => {
    const image = await screen.findByTestId(/image/i);
    fireEvent.click(image);
    const lightboxComponent = screen.queryByTestId(/lightbox/i);
    expect(lightboxComponent).toBeInTheDocument();
  });
  test("lightbox is unmounted when button 'close' is clicked", async () => {
    const image = await screen.findByTestId(/image/i);
    fireEvent.click(image);
    const lightboxComponent = screen.queryByTestId(/lightbox/i);
    const closeButton = await screen.findByTestId(/close/i);
    fireEvent.click(closeButton);
    expect(lightboxComponent).not.toBeInTheDocument();
  });
  test("next button moves src forward ", async () => {
    window.dispatchEvent(new Event("resize"));
    const nextButton = await screen.findByTestId(/next/i);
    fireEvent.click(nextButton);
    const imageComponent = await screen.findByTestId(/mobile/i);
    expect(imageComponent).toHaveAttribute("src", "2.jpg");
  });
  test("back button moves src backwards ", async () => {
    const nextButton = await screen.findByTestId(/next/i);
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    const backButton = await screen.findByTestId(/back/i);
    fireEvent.click(backButton);
    const imageComponent = await screen.findByTestId(/mobile/i);
    expect(imageComponent).toHaveAttribute("src", "2.jpg");
  });
  test("back button circles back to last pic when clicked on first image ", async () => {
    const backButton = await screen.findByTestId(/back/i);
    fireEvent.click(backButton);
    const imageComponent = await screen.findByTestId(/mobile/i);
    expect(imageComponent).toHaveAttribute("src", "3.jpg");
  });
  test("next button restart count when reach end of array ", async () => {
    const nextButton = await screen.findByTestId(/next/i);
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    const imageComponent = await screen.findByTestId(/mobile/i);
    expect(imageComponent).toHaveAttribute("src", "1.jpg");
  });
  describe("Test Desktop Version", () => {
    beforeAll(() => {
      window.innerWidth = 1440;
      window.dispatchEvent(new Event("resize"));
    });

    test("click over thumbnail changes main image ", async () => {
      const thumbImage = await screen.findAllByTestId(/thumbnail/i);
      fireEvent.click(thumbImage[1]);
      const imageComponent = await screen.findByTestId(/img/i);
      expect(imageComponent).toHaveAttribute("src", "2.jpg");
    });
  });
});
