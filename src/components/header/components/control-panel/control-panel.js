import { Link, useNavigate } from "react-router-dom";
import { Icon } from "../../../index";
import { ButtonIcon } from "../index";
import { useSelector } from "react-redux";
import {
  selectUserRole,
  selectUserLogin,
  selectUserSession,
} from "../../../../selectors/index";
import { ROLE } from "../../../../constans";
import { useDispatch } from "react-redux";
import { logout } from "../../../../actions";
import styled from "styled-components";

const LeftAligned = styled.div`
  display: flex;
  justify-content: flex-start;
  color: #ffffff;
`;
const RightAligned = styled.div`
  display: flex;
  justify-content: flex-start;
  color: #ffffff;
`;

const StyledLink = styled(Link)`
  display: flex;
  width: 99px;
  justify-content: space-evenly;
  color: #ffffff;
  font-family: Graphik LCG;
  font-weight: 400;
  font-size: 16px;
  line-height: 53px;
  letter-spacing: 0%;
  &:hover,
  :active {
    &::before {
      content: "☰";
    }
    color: black;
    background-color: #ffffff;
  }
`;

const Wrapper = styled.div`
  width: 1170px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

const ControlPanelContainer = ({ className }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const roleId = useSelector(selectUserRole);
  const login = useSelector(selectUserLogin);
  const session = useSelector(selectUserSession);
  const onLogout = () => {
    dispatch(logout(session));
    sessionStorage.removeItem("userData");
  };

  return (
    <div className={className}>
      <Wrapper>
        <LeftAligned>
          <StyledLink to="/products">Каталог</StyledLink>
          <StyledLink to="/delivery">Доставка</StyledLink>
          <StyledLink to="/payment">Oплата</StyledLink>
          <StyledLink to="/stock">Акции</StyledLink>
          <StyledLink to="/about_as">О нас</StyledLink>
          <StyledLink to="/contacts">Контакты</StyledLink>
          <Icon id="fa-search" size="18px" margin="15px 0px 0px 40px" />
        </LeftAligned>

        <RightAligned>
          {roleId === ROLE.GUEST ? (
            <ButtonIcon id="fa fa-sign-in" link="/login" color="white" />
          ) : (
            <>
              <ButtonIcon id="fa fa-users" link="/users" color="white" />
              <ButtonIcon id="fa-sliders" index="4" link="/" color="white" />
              <ButtonIcon id="fa-star-o" index="4" link="/" color="white" />
              <ButtonIcon
                id="fa-shopping-bag"
                index="12"
                link="/"
                color="white"
              />
              <Icon
                id="fa fa-sign-out"
                margin="12px 0  0 10px"
                onClick={onLogout}
                color="white"
              />
            </>
          )}
        </RightAligned>
      </Wrapper>
    </div>
  );
};

export const ControlPanel = styled(ControlPanelContainer)`
  display: flex;
  background: rgb(7%, 7%, 7%, 0.4);
  width: 100vw;
  height: 53px;
  top: 121px;
`;
