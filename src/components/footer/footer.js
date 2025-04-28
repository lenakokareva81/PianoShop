import styled from "styled-components";
import { NavContact } from "./components";
import logo from "../public/logo_black.svg";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  width: 1170px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  flex-direction: column;
`;

const PrivacyPolicy = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 50px 0 95px 0;
  border-top: 1px solid rgb(7%, 7%, 7%, 0.1);;
}
  `;
const Policy = styled.div`
  font-family: Graphik LCG;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #111111;
  width: 200px;
`;
const Agreement = styled.div`
  font-family: Graphik LCG;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #111111;
  width: 800px;
  opacity: 0.4;
`;
const Contacts = styled.div`
  margin: 90px 0px 0 0;
  width: 270px;
`;
const Logo = styled(Link)`
  margin: 0 0 30px 0;
`;
const FooterContainer = ({ className }) => (
  <footer className={className}>
    <Wrapper>
      <Contacts>
        <Logo to="/">
          {" "}
          <img src={logo} alt="" />{" "}
        </Logo>
        <NavContact
          id="fa-phone"
          contact="8 (999) 888-77-66"
          link="/contacts"
        />
        <NavContact
          id="fa-envelope-o"
          contact="Hello@iamlp.ru"
          link="/contacts"
        />
        <NavContact id="fa-whatsapp" contact="whatsapp" link="/contacts" />
        <NavContact id="fa-telegram" contact="Вконтакте" link="/contacts" />
      </Contacts>
      <PrivacyPolicy>
        {" "}
        <Policy>Политика конфиценциальности Реквизиты</Policy>
        <Agreement>
          {" "}
          Любое использование материалов с сайта запрещено без письменного
          разрешения администрации сайта. Указанные на сайте цены не являются
          публичной офертой могут быть изменены в любое время. © ООО
          «Лав-Пиано» 2022 - бесконечность. Все права защищены.
        </Agreement>
      </PrivacyPolicy>
    </Wrapper>
  </footer>
);
export const Footer = styled(FooterContainer)`
  background-color: #f8f6f4;
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 570px;
  margin-bottom: 0px;
`;
