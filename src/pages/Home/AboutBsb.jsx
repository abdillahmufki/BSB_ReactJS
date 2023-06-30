import React, { useEffect } from "react";
// Import Swiper React components
import { Container, Row, Col } from "react-grid-system";
import { Swiper, SwiperSlide } from "swiper/react";
import img from "../../assets/images/about.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

import AOS from "aos";
import "aos/dist/aos.css";
const AboutBsb = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-out",
      delay: 200,
    });
  }, []);
  return (
    <>
      <Container
        fluid
        className="min-h-full bg-gray-300 px-10 py-10 text-black lg:py-32"
        data-aos="fade-right"
      >
        <div>
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="text-center"
          >
            <SwiperSlide>
              <div>
                <div>
                  <h2 className="text-4xl font-semibold max-[728px]:text-2xl">
                    Buana Selaras Berjaya
                  </h2>
                </div>
                <div>
                  <p className="text-xl font-normal max-[728px]:text-lg">
                    PT. Buana Selaras Berjaya adalah Perusahaan yang bergerak di
                    distribusi Produk Tekstil, <br /> Khususnya produk Internal
                    Group.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="lg:px-10">
                <div>
                  <h2 className="text-4xl font-semibold max-[728px]:text-2xl">
                    Glance
                  </h2>
                </div>
                <div>
                  <p className="text-xl font-normal max-[728px]:text-lg">
                    Perusahaan kami saat ini memiliki 3 cabang di Jawa Tengah
                    yakni di Ungaran, Yogya dan Pekalongan. <br /> PT. Buana
                    Selaras Berjaya berdiri sejak tahun 2018 dengan Kantor Pusat
                    yang <br /> berlokasi di Jl. Sukamulya No. 9 - 11 Bojongloa
                    Kaler, Bandung
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
      <Container className="pt-16">
        <Row>
          <Col lg={6} md={6} sm={12}>
            <div className="lg:mt-16 lg:px-5">
              <div>
                <h2 className="text-4xl font-semibold">
                  Mewujudkan product kami hingga{" "}
                  <i className="text-orange-400">Pelosok Negeri</i>
                </h2>
              </div>
              <div className="my-10">
                <p className="text-lg text-gray-600">
                  &quot;PT. BSB berfokus pada upaya-upaya untuk memastikan
                  ketersediaan product berdasarkan prinsip availability,
                  accessibility, affordability, acceptability dan sustainability
                  &quot;
                </p>
              </div>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <div className="relative overflow-hidden bg-cover bg-no-repeat">
              <img
                src={img}
                alt="image"
                className="rounded-md transition duration-300 ease-in-out hover:scale-110 hover:rounded-md"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutBsb;
