import { useState } from "react";
import styled from "styled-components";

const SliderContainer = ({ className, imageUrl, title }) => {
  const [activeImg, setActiveImg] = useState(0);

  return (
    <div className={className}>
      <div className="smallIcons">
        {imageUrl &&
          imageUrl.map(({ imgUrl }, index) => (
            <div
              key={index}
              className={index === activeImg ? "smallIcon active" : "smallIcon"}
              onClick={() => setActiveImg(index)}
            >
              <img className="img" src={imgUrl} alt={title} />
            </div>
          ))}
      </div>
      <div className="bigImg">
        {imageUrl && (
          <img className="img" src={imageUrl[activeImg].imgUrl} alt={title} />
        )}
      </div>
    </div>
  );
};

export const Slider = styled(SliderContainer)`
  width: 770px;
  height: 480px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  & .smallIcons {
    padding-top: 7px;
    width: 100px;
    justify-content: space-between;
  }
  & .smallIcon {
    width: 100%;
    height: 100px;
    padding: 20px;
    justify-content: space-between;
  }
  & .active {
    border: 2px solid black;
  }
  & .bigImg {
    width: 480px;
    height: 480px;
    padding: 55px;
  }
  & .img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
