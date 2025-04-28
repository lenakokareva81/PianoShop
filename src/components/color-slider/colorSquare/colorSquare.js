import styled from "styled-components";

const ColorSquareContainer = ({ className, color }) => {
  return <div className={className}></div>;
};

export const ColorSquare = styled(ColorSquareContainer)`
    width: 24px;
    height: 24px;
    background: ${({ color = " #800000 " }) => color};
  }
`;
