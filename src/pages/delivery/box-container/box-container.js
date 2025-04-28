import styled from "styled-components";

const BoxContainerContainer = ({ className, width, header, text }) => {
  return (
    <div className={className}>
      <p className="pBold">{header}</p>
      <p className="text">{text}</p>
    </div>
  );
};

export const BoxContainer = styled(BoxContainerContainer)`
  margin: ${({ margin = "0" }) => margin};
  width: ${({ width = "195px" }) => width};
  border: 2px solid rgba(17, 17, 17, 0.2);
  padding: 30px;

  & .pBold {
    //   font-family: Graphik LCG;
    font-weight: 700;
    font-size: 14px;
  }
  & .text {
    //   font-family: Graphik LCG;
    font-weight: 400;
    font-size: 14px;
  }
`;
