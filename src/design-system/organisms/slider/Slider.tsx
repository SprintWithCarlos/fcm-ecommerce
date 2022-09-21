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
    if (cart.images && currentSlide === cart.images.full.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (cart.images && currentSlide === 0) {
      setCurrentSlide(cart.images.full.length - 1);
    } else {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  return (
    <div data-testid="slider" className="slider">
      {isOpen && (
        <Modal>
          <Lightbox stateSetter={setIsOpen} images={cart.images!} />
        </Modal>
      )}
      <img
        src={cart.images?.full[currentSlide]}
        className="mobile"
        alt="shoe 1"
        data-testid="mobile"
      />
      <button data-testid="image" type="button" onClick={() => setIsOpen(true)}>
        <img
          src={cart.images?.full[currentSlide]}
          className="desktop"
          alt="shoe 1"
          data-testid="img"
        />
      </button>
      <div className="thumb-strip">
        {cart.images?.thumbnails.map((item, i) => (
          <button
            type="button"
            onClick={() => setCurrentSlide(i)}
            key={item}
            data-testid="setCurrent"
          >
            <img
              data-testid="thumbnail"
              key={item}
              src={item}
              alt={item}
              className={currentSlide === i ? "active" : ""}
            />
          </button>
        ))}
      </div>
      <div className="affordances">
        <button
          type="button"
          className="affordance"
          onClick={() => handleBack()}
          data-testid="back"
        >
          <Icon
            src={<LeftArrow />}
            name="leftArrow"
            size={{ width: "auto", height: "20px" }}
          />
        </button>
        <button
          className="affordance"
          onClick={() => handleForward()}
          type="button"
          data-testid="next"
        >
          <Icon
            src={<RightArrow />}
            name="rightArrow"
            size={{ width: "auto", height: "20px" }}
          />
        </button>
      </div>
    </div>
  );
};
export default Slider;
