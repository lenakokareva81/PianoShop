import styled from "styled-components";
import { forwardRef } from "react";

const InputContainer = forwardRef(({ className, width, ...props }, ref) => {
  return <input className={className} {...props} ref={ref} />;
});

export const Input = styled(InputContainer)`
  width: ${({ width = "100%" }) => width};
  margin: ${({ margin = "0" }) => margin};
  border: 1px solid #7f7f7f4d;

  height: 46px;
  gap: 10px;
  border-width: 1px;
  padding-top: 7px;
  padding-right: 20px;
  padding-left: 20px;
`;
