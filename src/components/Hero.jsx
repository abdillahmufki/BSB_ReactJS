import React from "react";
import Button from "./Button";
import { Container, Row, Col } from "react-grid-system";
import Banner from "./Banner";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <Container fluid className="min-h-fit bg-[#fff] lg:mt-[140px] my-20">
        <Row className="gap-y-10 lg:px-10">
          <Col lg={5} md={4} sm={12}>
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
