import { useState } from "react";
import styled from "styled-components";
import {
  Button,
  Checkbox,
  ColorSlider,
  PricePanel,
  TextComment,
} from "../../../../../../components";
import { Specification } from "../specification/specification";

const SidebarContainer = ({
  className,
  colors,
  price,
  polyphony,
  power,
  timbres,
  available,
  orderQuickly,
  activeColor,
  setActiveColor,
}) => {
  return (
    <div className={className}>
      <ColorSlider
        colors={colors}
        activeColor={activeColor}
        setActiveColor={setActiveColor}
      />
      <Checkbox
        width="16px"
        height="16px"
        label="в наличии"
        checked={available}
        readOnly
      />

      <PricePanel colors={colors} activeColor={activeColor} margin="30px 0" />
      <Button
        width="300px"
        height="46px"
        onClick={() => orderQuickly()}
        margin="30px 0"
      >
        заказать в один клик
      </Button>
      <Specification
        specification={polyphony}
        text="Полифорния"
        margin="0 0 16px 0"
      />
      <Specification
        specification={power}
        text="Мощность, Вт"
        margin="0 0 16px 0"
      />
      <Specification
        specification={timbres}
        text="Тембры"
        margin="0 0 16px 0"
      />
    </div>
  );
};

export const Sidebar = styled(SidebarContainer)`
  width: 300px;
  & .checkbox {
    width: 16px;
    height: 16px;
  }
`;
