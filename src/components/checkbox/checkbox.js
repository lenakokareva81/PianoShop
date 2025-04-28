import styled from "styled-components";
import { forwardRef } from "react";

const CheckboxContainer = forwardRef(
  ({ className, width, label, checked, ...props }, ref) => {
    return (
      <div className={className}>
        <input
          type="checkbox"
          id="wr"
          checked={checked}
          name="wr"
          {...props}
          ref={ref}
        />
        <label for="wr">{label}</label>
      </div>
    );
  }
);

export const Checkbox = styled(CheckboxContainer)`
  display: flex;
  margin: ${({ margin = "0" }) => margin};
  & > label {
    // font-family: Graphik LCG;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: 0%;
  }
  & > input {
    width: 20px;
    height: 20px;
    font-weight: 400;

    accent-color: #111111;
  }
`;
