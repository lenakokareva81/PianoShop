import styled from "styled-components";

const ErrorMessageContainer = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

export const ErrorMessage = styled(ErrorMessageContainer)`
  background-color: #fdbdbd;
  margin: 20px 0 0 0;
  padding: 5px;
  font-size: 18px;
  width: 100%;
`;
