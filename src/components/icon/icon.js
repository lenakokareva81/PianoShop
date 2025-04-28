import styled from "styled-components";

const IconContainer = ({
  className,
  id,
  size,
  margin,
  disabled,
  color,
  ...props
}) => (
  <div className={className} {...props}>
    <i className={`fa ${id}`} aria-hidden="true"></i>
  </div>
);

export const Icon = styled(IconContainer)`
  font-size: ${({ size = "24px" }) => size};
  margin: ${({ margin = "0" }) => margin};

  color: ${({ color = "black" }) => color};
  cursor: pointer;
`;

// color: ${({ disabled }) => (disabled ? "#ccc" : "#000")};
