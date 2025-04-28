import styled from "styled-components";
import { Icon } from "../icon/icon";
import { TextComment } from "../text-comment/text-comment";

const PricePanelContainer = ({ className, colors, activeColor, margin }) => {
  return (
    <div className={className}>
      <div className="iconContainer">
        <Icon
          id="fa-shopping-cart"
          size="14px"
          margin="0px 0px 0 0"
          color="black"
        />
      </div>
      <div className="priceWrapper">
        {colors[activeColor] && (
          <div className="price">{colors[activeColor].price} ₽</div>
        )}
        <TextComment>в рассрочку / в кредит</TextComment>
      </div>
    </div>
  );
};

export const PricePanel = styled(PricePanelContainer)`
  margin: ${({ margin = "0" }) => margin};
  width: 100%;
  display: flex;
  & .iconContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 46px;
    height: 46px;
    gap: 11.5px;
    padding-top: 11.5px;
    padding-right: 27.6px;
    padding-bottom: 11.5px;
    padding-left: 27.6px;
    background: rgba(242, 242, 242, 1);
  }
  & .priceWrapper {
    margin-top: -5px;
    padding-left: 30px;
  }
  & .price {
    // font-family: Graphik LCG;
    font-weight: 900;
    font-size: 24px;
    // line-height: 150%;
    letter-spacing: 0%;
  }
`;
