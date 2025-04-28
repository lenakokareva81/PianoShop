// import styled from "styled-components";
// import { H2, H3, H5 } from "../PianoShop/src/components";
// //

// const DeliveryContainer = ({ className }) => {
//   return (
//     <div className={className}>
//       <H2>Доставка</H2>
//     </div>
//   );
// };

// export const Delivery = styled(DeliveryContainer)``;

import styled from "styled-components";
import { H2, H3, H5 } from "../../components";
import circleIcon from "../../components/public/exclamation-circle.svg";
import map from "../../components/public/Frame 357.png";
import { BoxContainer } from "./box-container/box-container";

const DeliveryContainer = ({ children, className, margin }) => {
  return (
    <div className={className}>
      <H2>Доставка</H2>
      <H3 margin="80px 0 50px 0">Москва/МО и Санкт-Петербург/ЛО</H3>
      <div>
        <H5 margin="0px 0 30px 0">Наши курьеры </H5>
        <ul>
          <li>
            Доставка выполняется в согласованную предварительно с клиентом дату.
          </li>
          <li>
            Для доставки существуют два опциональных временных периода: 12-17;
            17-22. Изменение данных временных периодов в меньшую сторону
            возможно по просьбе клиента за дополнительную оплату.
          </li>
          <li>
            Наши курьеры вовремя доставят ваш заказ, будут тактичны и вежливы,
            обладают большим опытом в осуществлении подъема и сборки
            инструментов любых габаритов.
          </li>
        </ul>
      </div>
      <div className="textContainer">
        <BoxContainer
          width="400px"
          header="Бесплатно"
          text="В пределах Кад/Мкад при заказе от 10000 руб.Самовывоз"
        />
        <BoxContainer
          width="195px"
          header="+ 50 руб./км"
          text="За пределы Кад/Мкад"
        />
        <BoxContainer
          width="313px"
          header="+800 руб."
          text="В пределах Кад/Мкад при заказе менее 10000 руб."
        />
        <BoxContainer width="200px" header="+ 800 руб" text="точное время" />
      </div>

      <div className="textContainer">
        <div className="contactContainer">
          <p className="pBold">Адрес</p>
          <p>Санкт-Петербург, ул. Миллионная, д.38</p>
          <p className="pBold">Время работы</p>
          <p>Пн-Вс 11.00 - 19.00 по МСК</p>
          <p className="pBold">По телефону</p>
          <p>
            8 (999) 888-77-66
            <span className="span">(бесплатно в Санкт-Петербурге) </span>
          </p>
          <p>
            8 495 278-18-14 <span className="span"> (бесплатно в Москве)</span>
          </p>
          <p>
            8 (999) 888-77-66<span className="span"> (бесплатно по РФ)</span>
          </p>
        </div>
        <div className="mapContainer">
          <img src={map} alt="" />
        </div>
      </div>

      <div className="textContainer">
        <div className="textInfo">
          <H3 margin="0 0 50px 0">Город c терминалом выдачи ТК</H3>
          <H5 margin="0 0 30px 0">Доставка транспортной компанией</H5>
          <p>
            Мы отправляем Ваш товар из Москвы или Санкт-Петербурга, пользуясь
            услугами перевозчика. Стоимость рассчитывается для каждого заказа
            индивидуально и зависит от габаритов товара, веса, дальности
            доставки и выбранных дополнительных услуг.
          </p>
          <p>
            Товар приходит на терминал транспортной компании в ближайший к Вам
            населенный пункт, затем передаётся курьеру транспортной компании и
            доставляется в ваш населенный пункт прямо на ваш домашний адрес.
            Оператор транспортной компании свяжется с Вами, когда товар приедет
            к ним на терминал и заранее согласует с Вами дату доставки.
          </p>
        </div>
        <div className="textmemory">
          <img src={circleIcon} alt="" />
          <p>
            Помните, что перевозчик — это сторонняя организация, оказывающая
            услугу нам и Вам, внимательно отнеситесь к приему товара на
            терминале или у себя дома.
          </p>
          <p>
            Инструкция о приемке товара будет отправлена Вам нашими логистами
            вместе с трек данными Вашей отправки.
          </p>
        </div>
      </div>

      <div className="textContainer">
        <div className="textInfo">
          <H3 margin="0 0 50px 0">Город без терминалом выдачи ТК</H3>
          <H5 margin="0 0 30px 0">Доставка транспортной компанией</H5>
          <p>
            Мы отправляем Ваш товар из Москвы или Санкт-Петербурга, пользуясь
            услугами перевозчика. Стоимость рассчитывается для каждого заказа
            индивидуально и зависит от габаритов товара, веса, дальности
            доставки и выбранных дополнительных услуг.
          </p>
          <p>
            Товар приходит на терминал транспортной компании в ближайший к Вам
            населенный пункт, затем передаётся курьеру транспортной компании и
            доставляется в ваш населенный пункт прямо на ваш домашний адрес.
            Оператор транспортной компании свяжется с Вами, когда товар приедет
            к ним на терминал и заранее согласует с Вами дату доставки.
          </p>
        </div>
        <div className="textmemory">
          <img src={circleIcon} alt="" />
          <p>
            Помните, что перевозчик — это сторонняя организация, оказывающая
            услугу нам и Вам, внимательно отнеситесь к приему товара на
            терминале или у себя дома.
          </p>
          <p>
            Инструкция о приемке товара будет отправлена Вам нашими логистами
            вместе с трек данными Вашей отправки.
          </p>
        </div>
      </div>
    </div>
  );
};

export const Delivery = styled(DeliveryContainer)`
  display: flex;
  flex-direction: column;
  width: 1170px;
  & .textContainer {
    display: flex;
    margin-top: 80px;
    justify-content: space-between;
  }
  & .textInfo {
    width: 755px;
    // font-family: Graphik LCG;
    font-size: 16px;
  }
  & .textmemory {
    background-color: rgba(248, 246, 244, 1);
    width: 365px;
    padding-top: 30px;
    padding-right: 50px;
    padding-bottom: 30px;
    padding-left: 50px;
    font-family: Graphik LCG;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: 0%;
  }
  & .mapContainer {
    width: 750px;
    height: 330px;
  }
  & .pBold {
    // font-family: Graphik LCG;
    font-family: bold;
    font-weight: 600;
    font-size: 16px;
  }
  & .span {
    // font-family: Graphik LCG;
    font-weight: 400;
    font-size: 14px;
    color: rgba(127, 127, 127, 1);
  }
  & li {
    margin: 0px 0 20px 0;
  }
`;
