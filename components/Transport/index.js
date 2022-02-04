import { AboutTransport } from "../../styled-components/Transport.styled";
import { useState } from "react";

export const Transport = () => {
  const [state, setState] = useState(true);
  return (
    <AboutTransport>
      <h2>Транспорт</h2>
      <img
        src={
          state
            ? "/img/stock-photo-a-truck-carrying-a-bulky-load-the-big-truck-1291483948.jpg"
            : "/img/detail-of-a-modern-natural-gas-processing-plant-PJU5R2F.jpg"
        }
      ></img>
      <div
        onMouseOver={() => {
          setState(true);
        }}
      >
        <h4>Автотранспорт</h4>
        <p>
          — Собственная автотранспортная компания <br />
          — Перевозка негаборитных и тяжеловесных грузов <br />— Доставка в
          любую точку России
        </p>
      </div>
      <div
        onMouseOver={() => {
          setState(false);
        }}
      >
        <h4>
          Железнодорожный <br /> транспорт
        </h4>
        <p>На заводе имеется ж/д ветка, заходящая в производственное здание</p>
      </div>
    </AboutTransport>
  );
};
