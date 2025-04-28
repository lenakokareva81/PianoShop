import styled from "styled-components";
import { Icon } from "../../../index";

const TopLabelContainer = ({ className }) => (
  <div className={className}>
    <Icon id="fa-map-marker" size="12px" margin="0 10px 0 0" />
    МАГАЗИНЫ ОТКРЫТЫ ПО НОВОМУ АДРЕСУ
  </div>
);
export const TopLabel = styled(TopLabelContainer)`
  height: 32px;
  width: 100vw;
  font-family: Graphik LCG;
  font-weight: 600;
  font-size: 12px;
  line-height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  color: #ffffff;
  background: #11111180;
`;
