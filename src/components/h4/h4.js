import styled from "styled-components";

const H4Container = ({ children, className, margin }) => {
  return <h4 className={className}>{children}</h4>;
};

export const H4 = styled(H4Container)`
 margin: ${({ margin = "0" }) => margin};
  / font-family: Graphik LCG;
  font-weight: 900;
  font-size: 28px;
  line-height: 130%;
  letter-spacing: 0%;
`;
