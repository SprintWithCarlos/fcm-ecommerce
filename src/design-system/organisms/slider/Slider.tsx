import "./slider.sass";
import { useContext, useState } from "react";
import { ReactComponent as LeftArrow } from "@/assets/icon-previous.svg";
import { ReactComponent as RightArrow } from "@/assets/icon-next.svg";
import { ReactComponent as CloseIcon } from "@/assets/icon-close.svg";
import Icon from "@/design-system/atoms/icon/Icon";
import { CartContext } from "@/state/cartContext";
import Modal from "../modal/Modal";
import Lightbox from "@/design-system/molecules/lightbox/Lightbox";

const Slider: React.FC = () => {
  const { cart } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const handleForward = () => {
    if (currentSlide === cart.images.full.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentSlide === 0) {
      setCurrentSlide(cart.images.full.length - 1);
    } else {
      setCurrentSlide((prev) => prev - 1);
    }
  };
  const handleKeyPressForward = (e: React.KeyboardEvent<HTMLSpanElement>) => {
    if (e.key === "Enter") {
      if (currentSlide === cart.images.full.length) {
        setCurrentSlide(0);
      } else {
        setCurrentSlide((prev) => prev + 1);
      }
    }
  };
  const handleKeyPressBack = (e: React.KeyboardEvent<HTMLSpanElement>) => {
    if (e.key === "Enter") {
      if (currentSlide === 0) {
        setCurrentSlide(cart.images.full.length);
      } else {
        setCurrentSlide((prev) => prev - 1);
      }
    }
  };

  return (
    <div data-testid="slider" className="slider">
      {isOpen && (
        <Modal>
          <Lightbox stateSetter={setIsOpen} images={cart.images} />
        </Modal>
      )}
      <img
        src={cart.images.full[currentSlide]}
        className="mobile"
        alt="shoe 1"
      />
      <button type="button" onClick={() => setIsOpen(true)}>
        <img
          src={cart.images.full[currentSlide]}
          className="desktop"
          alt="shoe 1"
        />
      </button>
      <div className="thumb-strip">
        {cart.images.thumbnails.map((item, i) => (
          <button type="button" onClick={() => setCurrentSlide(i)} key={item}>
            <img
              key={item}
              src={item}
              alt={item}
              className={currentSlide === i ? "active" : ""}
            />
          </button>
        ))}
      </div>
      <div className="affordances">
        <span
          className="affordance"
          role="button"
          tabIndex={-1}
          onClick={() => handleBack()}
          onKeyDown={(e) => handleKeyPressBack(e)}
        >
          <Icon
            src={<LeftArrow />}
            name="leftArrow"
            size={{ width: "auto", height: "20px" }}
          />
        </span>
        <span
          className="affordance"
          onClick={() => handleForward()}
          onKeyDown={(e) => handleKeyPressForward(e)}
          role="button"
          tabIndex={-1}
        >
          <Icon
            src={<RightArrow />}
            name="rightArrow"
            size={{ width: "auto", height: "20px" }}
          />
        </span>
      </div>
    </div>
  );
};
export default Slider;
