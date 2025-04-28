import { useState } from "react";
import styled from "styled-components";
import { TextComment } from "../text-comment/text-comment";
import { ColorSquare } from "./colorSquare";

const ColorSliderContainer = ({
  className,
  colors,
  activeColor,
  setActiveColor,
}) => {
  return (
    <div className={className}>
      <div className="bigImg">
        {colors[activeColor] && (
          <div className="colorName">
            <TextComment margin=" 0 16px 0  0 ">Цвет:</TextComment>
            {colors[activeColor].name}
          </div>
        )}
      </div>
      <div className="smallSquares">
        {colors &&
          colors.map((color, index) => (
            // <ColorSquare key={index} color={color.value} />
            <div
              key={index}
              className={
                index === activeColor
                  ? "wrappercolorSquare active"
                  : "wrappercolorSquare"
              }
              onClick={() => setActiveColor(index)}
            >
              <ColorSquare color={color.value} />
              {/* <div key={index} className="colorSquare"></div> */}
            </div>
          ))}
      </div>
    </div>
  );
};

export const ColorSlider = styled(ColorSliderContainer)`
  width: 100%;
  margin: 0 0 40px 0;
  height: 61px;

  display: flex;

  flex-direction: column;

  & .smallSquares {
    display: flex;
    margin: 16px 0 0px 0;
  }
  & .wrappercolorSquare {
    width: 34px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & .active {
    border: 2px solid black;
  }
`;
