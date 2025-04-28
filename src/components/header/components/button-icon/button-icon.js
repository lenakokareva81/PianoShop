import styled from "styled-components";
import { Icon } from "../../../index";
import { Link } from "react-router-dom";

const Index = styled.div`
  font-family: Graphik LCG;
  font-weight: 400;
  font-size: 10px;
  line-height: 150%;
  letter-spacing: 0%;
  text-align: center;
  vertical-align: middle;
  color: #ffffff;
`;

const ButtonIconContainer = ({ className, id, index = null, link, color }) => (
  <Link className={className} to={link}>
    <Icon id={id} size="18px" margin="0px 3px 0px 20px" color={color} />
    {index || <Index>{index}</Index>}
  </Link>
);
export const ButtonIcon = styled(ButtonIconContainer)`
  display: flex;
  align-items: center;
  color: #ffffff;
`;
