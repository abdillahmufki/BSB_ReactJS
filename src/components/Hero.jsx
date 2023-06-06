import React from "react";
import Button from "./Button";
import { Container, Row, Col } from "react-grid-system";
import img from "../assets/images/imgBg.jpg";

const Hero = () => {
  return (
    <>
      <Container fluid className="min-h-screen bg-[#fff] lg:mt-[140px]">
        <Row className="gap-y-10 lg:px-20">
          <Col lg={6} sm={12}>
            <div className="text-center lg:px-3">
              <h3 className="text-2xl max-[600px]:text-lg font-medium my-5">
                Selamat datang di PT. Buana Selaras Berjaya!
              </h3>
              <h2 className="text-5xl max-[600px]:text-xl font-bold my-5">
                Menjadi Pilihan Utama untuk Produk Tekstil Berkualitas
              </h2>
              <p className="my-5">
                Kami menghadirkan keindahan dan kenyamanan dalam setiap jahitan.
                Sprei, bed cover, selimut, dan banyak lagi, semuanya ada di
                sini.
              </p>
              <Button text="Contact Us" />
            </div>
          </Col>
          <Col lg={6} sm={12}>
            <div className="text-center">
              <img src={img} alt="hero" className="rounded-2xl lg:mt-7" />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Hero;
