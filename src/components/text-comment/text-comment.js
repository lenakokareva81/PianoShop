import styled from "styled-components";

const TextCommentContainer = ({ children, className, margin, size }) => {
  return <span className={className}>{children}</span>;
};

export const TextComment = styled(TextCommentContainer)`
  margin: ${({ margin = "0" }) => margin};
  font-family: Graphik LCG;
  font-weight: 400;
  font-size: ${({ size = "12px" }) => size};
  // line-height: 150%;
  letter-spacing: 0%;
  color: rgba(17, 17, 17, 0.3);
`;
