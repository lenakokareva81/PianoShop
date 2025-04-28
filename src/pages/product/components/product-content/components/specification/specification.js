import styled from "styled-components";
import { TextComment } from "../../../../../../components";

const SpecificationContainer = ({ className, margin, text, specification }) => {
  return (
    <div className={className}>
      <TextComment margin=" 0 0 0 0px" size="16px">
        {text}
      </TextComment>
      <div> {specification}</div>
    </div>
  );
};

export const Specification = styled(SpecificationContainer)`
  margin: ${({ margin = "0" }) => margin};
  display: flex;
  justify-content: space-between;
  align-items: center;
  display: flex;
  border-bottom: 1px dashed gray;
`;
