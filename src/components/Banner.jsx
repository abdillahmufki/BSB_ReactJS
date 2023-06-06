import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "react-grid-system";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Banner.css";

import { EffectFade, Navigation, Pagination } from "swiper";

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
    <Container className="lg:px-20 max-[600px]:p-5 my-10">
      <div className="my-10">
        <h3 className="text-2xl font-semibold text-center max-[600px]:text-xl">
          Kami adalah perusahaan terkemuka di bidang Distribusi Tekstil dengan
          spesialisasi pada Produk Internal Group. Dari perlengkapan tidur
          hingga aksesori rumah tangga, kami menawarkan koleksi lengkap produk
          berkualitas tinggi.
        </h3>
      </div>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        {dataImage.map((item) => (
          <SwiperSlide key={item.id}>
            <img
              src={item.img}
              alt="banner"
              className="rounded-tl-[50px] rounded-br-[50px] bg-opacity-20"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
