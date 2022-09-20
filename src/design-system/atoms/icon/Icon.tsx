/* eslint-disable indent */
import React from "react";
import "./icon.sass";

interface IconProps {
  // src: any;
  src: React.ReactNode;
  // src: React.FC;
  // src: React.ReactComponentElement<any>;

  name: string;
  size?: {
    width?: string;
    height?: string;
  };
  colors?: Record<string, any>;
  counter?: number;
  rounded?: boolean;
}
const Icon: React.FC<IconProps> = (props: IconProps) => {
  const { src, name, size, counter, colors, rounded } = props;
  return (
    <div
      data-testid={name}
      className="icon"
      style={{
        height: `${size?.height ?? "20px"}`,
        width: `${size?.width ?? "20px"}`,

        color: `${colors?.color ?? ""}`,
        // backgroundColor: `${colors?.backgroundColor ?? ""}`,
        borderRadius: `${rounded ? "50%" : ""}`,
      }}
    >
      {/* {React.createElement(src, null)} */}
      {/* <Image /> */}
      {src}
      {counter && counter > 0 && (
        <span data-testid={name} className="counter first">
          {counter}
        </span>
      )}
    </div>
  );
};
export default Icon;
