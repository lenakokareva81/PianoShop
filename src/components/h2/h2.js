import styled from "styled-components";

const H2Container = ({ children, className, margin }) => {
  return <h4 className={className}>{children}</h4>;
};

export const H2 = styled(H2Container)`
 margin: ${({ margin = "0" }) => margin};
  / font-family: Graphik LCG;
font-weight: 900;
font-size: 36px;
  letter-spacing: 0%;
`;
