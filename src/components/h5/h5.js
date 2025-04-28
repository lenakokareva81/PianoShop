import styled from "styled-components";

const H5Container = ({ children, className, margin }) => {
  return <h4 className={className}>{children}</h4>;
};

export const H5 = styled(H5Container)`
 margin: ${({ margin = "0" }) => margin};
  / font-family: Graphik LCG;
  font-weight: 900;
  font-size: 24px;
  // line-height: 130%;
  // letter-spacing: 0%;
`;
