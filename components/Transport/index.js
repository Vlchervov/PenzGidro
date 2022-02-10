import {
  AboutTransport,
  TransportWrapper,
} from "../../styled-components/Transport.styled";
import { useState } from "react";
import SwiperCore, { Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "react-responsive";

SwiperCore.use([Keyboard]);

export const Transport = () => {
  const isMobile = useMediaQuery({ maxWidth: "812px" });
  const [slider, setSlider] = useState(false);
  const [state, setState] = useState(false);
  const SwiperOptions = {
    speed: 2500,
    slidesPerView: 1,
    resizeObserver: true,
    keyboard: {
      onlyInViewport: true,
    },
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
  };
  return (
    <>
      {isMobile && (
        <>
          <h2
            style={{
              color: "#1C1C1C",
              fontFamily: "Gilroy",
              fontWeight: "300",
              fontSize: "35px",
              paddingLeft: "29px",
            }}
          >
            Транспорт
          </h2>
          <a
            style={{
              position: "relative",
              paddingLeft: "29px",
              color: "#1C1C1C",
              fontFamily: "Gilroy",
              fontSize: "16px",
            }}
          >
            {slider ? "02/02" : "01/02"}
          </a>
          <Swiper
            {...SwiperOptions}
            onSlideChange={() => setSlider(slider === false ? true : false)}
          >
            <SwiperSlide>
              <img
                style={{
                  width: "80vw",
                  paddingRight: "29px",
                  transform: "scale(-1, 1)",
                }}
                src="/img/stock-photo-a-truck-carrying-a-bulky-load-the-big-truck-1291483948.jpg"
              ></img>
              <h4
                style={{
                  fontFamily: "Gilroy",
                  color: "#1C1C1C",
                  fontSize: "20px",
                  paddingLeft: "29px",
                }}
              >
                Автотранспорт
              </h4>
              <p
                style={{
                  fontFamily: "Gilroy",
                  color: "#1C1C1C",
                  paddingLeft: "29px",
                  paddingRight: "31px",
                  fontSize: "18px",
                  lineHeight: "25px",
                }}
              >
                — Собственная автотранспортная компания <br />— Перевозка
                негаборитных и тяжеловесных грузов <br />— Доставка в любую
                точку России
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <img
                style={{
                  width: "80vw",
                  paddingRight: "29px",
                  transform: "scale(-1, 1)",
                }}
                src="/img/stock-photo-a-truck-carrying-a-bulky-load-the-big-truck-1291483948.jpg"
              ></img>
              <h4
                style={{
                  fontFamily: "Gilroy",
                  color: "#1C1C1C",
                  fontSize: "20px",
                  paddingLeft: "29px",
                }}
              >
                Железнодорожный <br /> транспорт
              </h4>
              <p
                style={{
                  fontFamily: "Gilroy",
                  color: "#1C1C1C",
                  paddingLeft: "29px",
                  paddingRight: "31px",
                  fontSize: "18px",
                  lineHeight: "25px",
                }}
              >
                На заводе имеется ж/д ветка, заходящая в производственное здание
              </p>
            </SwiperSlide>
          </Swiper>
        </>
      )}
      {!isMobile && (
        <AboutTransport change={state}>
          <h2>Транспорт</h2>
          <TransportWrapper>
            <img
              src={
                state
                  ? "/img/stock-photo-a-truck-carrying-a-bulky-load-the-big-truck-1291483948.jpg"
                  : "/img/detail-of-a-modern-natural-gas-processing-plant-PJU5R2F.jpg"
              }
            ></img>
            <div className="techDescription">
              <div
                className="transportDescription"
                onMouseOver={() => {
                  setState(true);
                }}
              >
                <h4>Автотранспорт</h4>
                <p>
                  — Собственная автотранспортная компания <br />— Перевозка
                  негаборитных и тяжеловесных грузов <br />— Доставка в любую
                  точку России
                </p>
              </div>
              <div
                className="railWayDescription"
                onMouseOver={() => {
                  setState(false);
                }}
              >
                <h4>
                  Железнодорожный <br /> транспорт
                </h4>
                <p>
                  На заводе имеется ж/д ветка, заходящая в производственное
                  здание
                </p>
              </div>
            </div>
          </TransportWrapper>
        </AboutTransport>
      )}
    </>
  );
};
