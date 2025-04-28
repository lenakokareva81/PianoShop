import { ControlPanel, TopLabel, ContactPanel } from "./components";
import bg from "../public/bg.png";
import styled from "styled-components";

const HeaderContainer = ({ className }) => (
  <header className={className}>
    <TopLabel />
    <ContactPanel />
    <ControlPanel />
  </header>
);
export const Header = styled(HeaderContainer)`
  height: 174px;
  width: 100vw;
  position: fixed;
  background-image: url(${bg});
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  font-family: Graphik LCG;
`;
