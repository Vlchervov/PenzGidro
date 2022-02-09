import { AboutTransport } from "../../styled-components/Transport.styled";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "react-responsive";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";

export const Transport = () => {
  const isMobile = useMediaQuery({ maxWidth: "812px" });
  const [slider, setSlider] = useState(null);
  const [state, setState] = useState(true);
  return (
    <>
      {isMobile ? (
        <Swiper
          onSwiper={setSlider}
          slidesPerView={1}
          pagination={{ clickable: true }}
          resizeObserver={true}
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
              негаборитных и тяжеловесных грузов <br />— Доставка в любую точку
              России
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
          </SwiperSlide>
        </Swiper>
      ) : (
        <AboutTransport change={state}>
          <h2>Транспорт</h2>
          <div>
            <img
              src={
                state
                  ? "/img/stock-photo-a-truck-carrying-a-bulky-load-the-big-truck-1291483948.jpg"
                  : "/img/detail-of-a-modern-natural-gas-processing-plant-PJU5R2F.jpg"
              }
            ></img>
            <div className="techDescription">
              <div
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
          </div>
        </AboutTransport>
      )}
    </>
  );
};
