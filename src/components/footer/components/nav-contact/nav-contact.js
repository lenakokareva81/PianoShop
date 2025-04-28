import styled from "styled-components";
import { Icon } from "../../../index";
import { Link } from "react-router-dom";

const Contact = styled.div`
  font-family: Graphik LCG;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
`;

const NavContactContainer = ({ className, id, contact, link }) => (
  <Link className={className} to={link}>
    <Icon id={id} size="15px" margin="0px 10px 0px 0px" />
    <Contact>{contact}</Contact>
  </Link>
);
export const NavContact = styled(NavContactContainer)`
  display: flex;
  margin: 0 0 20px 0;
`;
