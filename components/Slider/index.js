import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";

export const Slider = () => {
  const data = [
    {
      id: 0,
      username: "Vladislav",
      age: 21,
    },
    {
      id: 1,
      username: "Kirill",
      age: 19,
    },
    {
      id: 2,
      username: "Vitaliy",
      age: 21,
    },
    {
      id: 3,
      username: "Vitaliy",
      age: 21,
    },
    {
      id: 4,
      username: "Vitaliy",
      age: 21,
    },
  ];
  return (
    <Swiper
      modules={(Navigation, Pagination, Scrollbar, A11y)}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      spaceBetween={20}
      slidesPerView={1}
      effect="slide"
      onSlideChange={() => {
        console.log("slide change");
      }}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {data.map((user) => (
        <SwiperSlide key={user.id}>
          <div style={{ width: "300px", height: "300px" }}>{user.username}</div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
