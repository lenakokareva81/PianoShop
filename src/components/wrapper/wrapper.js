import styled from "styled-components";

const WrapperContainer = ({ className }) => <div className={className}></div>;
export const Wrapper = styled(WrapperContainer)`
  width: 1170px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;
