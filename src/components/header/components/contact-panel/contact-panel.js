import { Link } from "react-router-dom";
import { Icon } from "../../../index";
import logo from "../../../public/logo.svg";
import styled from "styled-components";

const RightAligned = styled.div`
  display: flex;
  justify-content: flex-start;
  color: #ffffff;
`;

const Adress = styled(Link)`
  font-family: Graphik LCG;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #ffffff;
  display: flex;
  align-items: center;
`;

const PhoneContact = styled(Link)`
  font-family: Graphik LCG;
  font-weight: 600;
  font-size: 16px;
  line-height: 32px;
  color: #ffffff;
  display: flex;
  font-weight: bolder;
  margin: 0px 0px 0px 83px;
`;
const Logo = styled(Link)``;

const Wrapper = styled.div`
  width: 1170px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

const ContactPanelContainer = ({ className }) => {
  return (
    <div className={className}>
      <Wrapper>
        <Logo to="/">
          {" "}
          <img src={logo} alt="" />{" "}
        </Logo>
        <RightAligned>
          <Adress to="/contacts">
            <Icon id="fa-map-marker" margin="0 5px 0 0" size="16px" />
            Санкт-Петербург
          </Adress>

          <PhoneContact to="/">
            <Icon id="fa-phone" margin="0 5px 0 0" size="16px" />8 (999)
            888-77-66
          </PhoneContact>
        </RightAligned>
      </Wrapper>
    </div>
  );
};

export const ContactPanel = styled(ContactPanelContainer)`
  display: flex;

  width: 100vw;
`;
