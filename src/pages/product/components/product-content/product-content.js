import styled from "styled-components";
import { Button, H3, H5, Icon, TextComment } from "../../../../components";
import { CLOSE_MODAL, openModal } from "../../../../actions";

import { useDispatch } from "react-redux";
import { Slider } from "./components/slaider/slaider";
import { ButtonIcon } from "../../../../components/header/components";
import { Sidebar } from "./components";
import { useState } from "react";

const ProductContentContainer = ({
  className,
  product: {
    id,
    title,
    imageUrl,
    description,
    polyphony,
    colors,
    power,
    timbres,
    price,
    categories,
    available,
    specifications,
    unusualFeature,
    sizes,
  },
}) => {
  const [activeColor, setActiveColor] = useState(0);
  const dispatch = useDispatch();
  // const requestserver = useServerRequest();
  console.log(colors[activeColor]);
  const orderQuickly = () => {
    dispatch(
      openModal({
        text: "Купить в 1 клик",
        onConfirm: () =>
          dispatch(
            openModal({
              text: "Мы вам скоро перезвоним!",
              type: "information",

              onCancel: () => dispatch(CLOSE_MODAL),
            })
          ),
        // dispatch(removeCommentAsync(requestserver, id, postId, content));

        onCancel: () => dispatch(CLOSE_MODAL),
      })
    );
    const confirmationInformation = () => {
      dispatch(
        openModal({
          text: "вам скоро перезвонят",
          onConfirm: () => dispatch(CLOSE_MODAL),

          onCancel: () => dispatch(CLOSE_MODAL),
        })
      );
    };
  };
  return (
    <div className={className}>
      <h4>{title}</h4>
      <div className="manual">
        <Icon
          id="fa-file-text-o"
          size="14px"
          margin="0px 10px 0 0"
          color="black"
        />
        скачать инструкцию{" "}
        <TextComment margin=" 0 0 0 16px">
          {" "}
          | артикул:123123786123123
        </TextComment>
      </div>
      <div className="control-panel">
        <div className="menu">описание</div>
        <div className="buttons">
          <ButtonIcon id="fa-sliders" index="4" link="/" color="black" />
          <ButtonIcon id="fa-star-o" index="4" link="/" color="black" />
        </div>
      </div>
      <div className="content">
        {colors[activeColor] && (
          <Slider imageUrl={colors[activeColor].image_url} title={title} />
        )}
        <Sidebar
          colors={colors}
          polyphony={polyphony}
          power={power}
          timbres={timbres}
          available={available}
          orderQuickly={orderQuickly}
          activeColor={activeColor}
          setActiveColor={setActiveColor}
        />
      </div>
      <div className="description">
        <H3>описание</H3>
        {description}
      </div>
      <div>
        <H5>размеры</H5>
        {/* <p className="text-bold">длина, см</p>
        {size.length}
        <p className="text-bold">ширина, см</p>
        {size.width}
        <p className="text-bold">высота , см</p>
        {size.height}
        <p className="text-bold">вес, кг</p>
        {size.weight} */}
      </div>
    </div>
  );
};

export const ProductContent = styled(ProductContentContainer)`
  & .manual {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-family: Graphik LCG;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
  }
  & .control-panel {
    display: flex;
    margin: 30px 0 30px 0;
    width: 100%;
    height: 46px;
    justify-content: space-between;
    border-top: 1px solid black;
    padding-top: 20px;
    & .menu {
      font-family: Graphik LCG;
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      letter-spacing: 0%;
    }
    & .buttons {
      display: flex;
    }
  }
  & .content {
    display: flex;
  }
  & .description {
    padding-bottom: 30px;
    border-bottom: 1px dashed gray;
  }
  & .text-bold {
    // font-family: Graphik LCG;
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0%;
  }
`;
