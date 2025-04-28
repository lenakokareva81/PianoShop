import styled from "styled-components";

const ButtonContainer = ({ children, className, width, height, ...props }) => {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export const Button = styled(ButtonContainer)`
  width: ${({ width = "100%" }) => width};
  margin: ${({ margin = "0" }) => margin};
  display: flex;

  background-color: white;
  // font-family: Graphik LCG;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0%;
  text-transform: uppercase;
  justify-content: center;
  align-items: center;
  border: 2px solid #111111;

  height: ${({ height = "46px" }) => height};
  gap: 19px;
`;
