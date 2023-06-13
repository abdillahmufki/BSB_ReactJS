import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "react-grid-system";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Banner.css";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";

import { img1, img2, img3, img4, img5 } from "../assets/banner";

const dataImage = [
  {
    id: 1,
    img: img1,
  },
  {
    id: 2,
    img: img2,
  },
  {
    id: 3,
    img: img3,
  },
  {
    id: 4,
    img: img4,
  },
  {
    id: 5,
    img: img5,
  },
];

export default function Banner() {
  return (
    <Container className="lg:px-20 max-[600px]:p-5">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        // navigation={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        {dataImage.map((item) => (
          <SwiperSlide key={item.id}>
            <img
              src={item.img}
              alt="banner"
              className="rounded-tl-[50px] rounded-br-[50px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
