import React, { useEffect } from "react";
import Button from "./Button";
import { Container, Row, Col } from "react-grid-system";
import Banner from "./Banner";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out",
      delay: 200,
    });
  }, []);
  return (
    <>
      <Container
        fluid
        className="my-20 min-h-fit bg-[#fff] lg:mt-[140px]"
        data-aos="fade-down"
      >
        <Row className="gap-y-10 lg:px-10">
          <Col lg={5} md={4} sm={12}>
            <div className="text-center lg:px-3">
              <h3 className="my-5 text-2xl font-medium max-[600px]:text-lg">
                Selamat datang di PT. Buana Selaras Berjaya!
              </h3>
              <h2 className="my-5 text-5xl font-bold max-[600px]:text-xl">
                Menjadi Pilihan Utama untuk Produk Tekstil Berkualitas
              </h2>
              <p className="my-5">
                Kami menghadirkan keindahan dan kenyamanan dalam setiap jahitan.
                Sprei, bed cover, selimut, dan banyak lagi, semuanya ada di
                sini.
              </p>
              <Link to="/contact">
                <Button>Kontak Kami</Button>
              </Link>
            </div>
          </Col>
          <Col lg={7} md={8} sm={12}>
            <Banner />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Hero;
