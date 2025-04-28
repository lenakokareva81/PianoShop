import styled from "styled-components";

const H3Container = ({ children, className, margin }) => {
  return <h4 className={className}>{children}</h4>;
};

export const H3 = styled(H3Container)`
 margin: ${({ margin = "0" }) => margin};
  / font-family: Graphik LCG;
  font-weight: 900;
  font-size: 28px;
  
`;
