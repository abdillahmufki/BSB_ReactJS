import React from "react";
import { Container, Row, Col } from "react-grid-system";
import img from "../../assets/images/imgBg.jpg";
const HeroAbout = () => {
  const data = {
    description:
      "PT. Buana Selaras Berjaya bergerak di bidang Distribusi Tekstil khususnya Produk Internal Group. Produk meliputi perlengkapan tidur seperti sprei, bed cover, selimut, karpet, keset, handuk, bantal, guling, dll. Kami memiliki 7 brands   yaitu Vallery Quincy, Emily, Internal, Lady Rose, Illusions, Aloha, Adele. Kami berpusat di Bandung dan memiliki 3 cabang di Kota Yogya, Pekalongan dan Ungaran.",
  };
  return (
    <>
      <Container className="min-h-screen pt-3">
        <div>
          <h1 className="text-4xl text-center my-10 font-bold">Tentang Kami</h1>
        </div>
        <Row className="gap-y-8">
          <Col lg={6} md={6} sm={12}>
            <img src={img} alt="Kantor Bsb" className="rounded-md" />
          </Col>
          <Col lg={6} md={6} sm={12}>
            <div className="lg:mt-16">
              <div className="my-5">
                <p className="text-xl max-[600px]:text-lg text-black">
                  {data.description}
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HeroAbout;
