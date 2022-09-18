import "./slider.sass";
import { useState } from "react";
import { ReactComponent as LeftArrow } from "@/assets/icon-previous.svg";
import { ReactComponent as RightArrow } from "@/assets/icon-next.svg";
import Icon from "@/design-system/atoms/icon/Icon";

type SliderProps = {
  content: string[];
};
const Slider: React.FC<SliderProps> = (props: SliderProps) => {
  const { content } = props;
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const handleForward = () => {
    if (currentSlide === content.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentSlide === 0) {
      setCurrentSlide(content.length - 1);
    } else {
      setCurrentSlide((prev) => prev - 1);
    }
  };
  const handleKeyPressForward = (e: React.KeyboardEvent<HTMLSpanElement>) => {
    if (e.key === "Enter") {
      if (currentSlide === content.length) {
        setCurrentSlide(0);
      } else {
        setCurrentSlide((prev) => prev + 1);
      }
    }
  };
  const handleKeyPressBack = (e: React.KeyboardEvent<HTMLSpanElement>) => {
    if (e.key === "Enter") {
      if (currentSlide === 0) {
        setCurrentSlide(content.length);
      } else {
        setCurrentSlide((prev) => prev - 1);
      }
    }
  };

  return (
    <div data-testid="slider" className="slider">
      <img src={content[currentSlide]} alt="shoe 1" />
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
