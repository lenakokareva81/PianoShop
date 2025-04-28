import { useState } from "react";
import styled from "styled-components";
import { Input } from "../../../../../components";

const SpecificationBlockContainer = ({
  className,
  text,
  value,
  onChange,
  index,
  margin,
  width,
}) => {
  return (
    <div className={className}>
      <p className="text">{text}</p>
      <Input id={index} value={value} placeholder={text} onChange={onChange} />
    </div>
  );
};

export const SpecificationBlock = styled(SpecificationBlockContainer)`
  margin: ${({ margin = "0" }) => margin};
  width: ${({ width = "300px" }) => width};
  display: flex;
  & .text {
    margin: 10px 10px 0 0;
    font-size: 20px;
  }
`;
