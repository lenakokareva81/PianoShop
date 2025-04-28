import styled from "styled-components";

import { useDispatch } from "react-redux";

import { useLayoutEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useServerRequest } from "../../../hooks";
import { H4, H5, Input } from "../../../components";
import { SpecificationBlock } from "./components";

const ProductFormContainer = ({
  className,
  product: {
    id,
    title,
    description,
    polyphony,
    colors,
    power,
    timbres,
    price,
    available,
    sizes,
  },
}) => {
  const contentRef = useRef(null);
  const navigate = useNavigate();
  const requestServer = useServerRequest();
  const dispatch = useDispatch();
  const [titleValue, setTilelValue] = useState(title);

  const [polyphonyValue, setPolyphonyValue] = useState(polyphony);
  const [powerValue, setPowerValue] = useState(power);
  const [timbresValue, setTimbresValue] = useState(timbres);
  const [availableValue, setavAilableValue] = useState(available);

  const [descriptionValue, setDescriptionlValue] = useState(description);
  const [priceValue, setPriceValue] = useState(price);

  const [sizesArr, setSizesArr] = useState(sizes);
  const [colorsArr, setColorsArr] = useState(colors);

  useLayoutEffect(() => {
    setTilelValue(title);
    setPolyphonyValue(polyphony);
    setTimbresValue(timbres);
    setPowerValue(power);
    setDescriptionlValue(description);
    setSizesArr(sizes);
  }, [title, polyphony, timbres, power, description, sizes]);

  const onTitleChange = ({ target }) => setTilelValue(target.value);

  const onPolyphonyChange = ({ target }) => setPolyphonyValue(target.value);
  const onPowerChange = ({ target }) => setPowerValue(target.value);
  const onTimbresChange = ({ target }) => setTimbresValue(target.value);
  const onavAilableChange = ({ target }) => setavAilableValue(target.value);
  const onSizesChange = ({ target }) => {
    const indexSize = Number(target.id);
    let newSizes = [];
    sizesArr.map(({ name, value }, index) =>
      index === indexSize
        ? newSizes.push({ name, value: target.value })
        : newSizes.push({ name, value })
    );

    setSizesArr(newSizes);
  };

  // const requestserver = useServerRequest();

  return (
    <div className={className}>
      <H4 margin="20px 0 10px 0">название модели</H4>
      <Input
        value={titleValue}
        placeholder="...название модели"
        onChange={onTitleChange}
      />
      <H4 margin="20px 0 10px 0">свойства</H4>
      <div className="specifications">
        <SpecificationBlock
          text="полифония"
          value={polyphonyValue}
          onChange={onPolyphonyChange}
          margin="20px 0"
          width="300px"
        />
        <SpecificationBlock
          text="темб"
          value={timbresValue}
          onChange={onTimbresChange}
          margin="20px"
          width="300px"
        />
        <SpecificationBlock
          text="мощность,вт"
          value={powerValue}
          onChange={onPowerChange}
          margin="20px"
          width="300px"
        />
      </div>
      <H4 margin="20px 0 10px 0">габариты</H4>
      {sizes &&
        sizesArr.map(({ name, value }, index) => (
          <SpecificationBlock
            key={index}
            text={name}
            value={value}
            index={index}
            onChange={onSizesChange}
            margin="20px 0"
            width="300px"
          />
        ))}
    </div>
  );
};

export const ProductForm = styled(ProductFormContainer)`
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
  & .specifications {
    display: flex;
    justify-content: space-between;
  }
`;
