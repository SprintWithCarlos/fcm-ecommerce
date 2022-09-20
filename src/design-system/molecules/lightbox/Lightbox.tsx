import { useState } from "react";
import { ReactComponent as LeftArrow } from "@/assets/icon-previous.svg";
import { ReactComponent as RightArrow } from "@/assets/icon-next.svg";
import { ReactComponent as CloseIcon } from "@/assets/icon-close.svg";
import "./lightbox.sass";
import Icon from "@/design-system/atoms/icon/Icon";

type LightboxProps = {
  stateSetter: React.Dispatch<React.SetStateAction<boolean>>;
  images: { full: string[]; thumbnails: string[] };
};
const Lightbox: React.FC<LightboxProps> = (props: LightboxProps) => {
  const { stateSetter: setIsOpen, images } = props;
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const handleForward = () => {
    if (currentSlide === images.full.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentSlide === 0) {
      setCurrentSlide(images.full.length - 1);
    } else {
      setCurrentSlide((prev) => prev - 1);
    }
  };
  return (
    <div data-testid="lightbox" className="lightbox">
      <div className="lightbox__wrapper">
        <div className="row">
          <button
            className="close"
            data-testid="close"
            type="button"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <Icon name="icon-cl" src={<CloseIcon />} />
          </button>
        </div>
        <div className="row">
          <img
            data-testid="image"
            src={images.full[currentSlide]}
            alt="shoe 1"
          />
        </div>
        <div className="affordances">
          <button
            type="button"
            className="affordance"
            data-testid="back"
            onClick={() => handleBack()}
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
        <div className="thumb-strip">
          {images.thumbnails.map((item, i) => (
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
      </div>
    </div>
  );
};
export default Lightbox;
