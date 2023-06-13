import React from "react";
import { Container, Row, Col } from "react-grid-system";
import {
  aloha,
  internal,
  ilusion,
  rainbow,
  ladyrose,
  vallery,
} from "../../assets/brand-logo";

const BrandSection = () => {
  const brandLogos = [aloha, internal, ilusion, rainbow, ladyrose, vallery];

  return (
    <div className="flex justify-center sm:flex sm:justify-between lg:my-20 bg-slate-300 py-10">
      <Container fluid>
        <div className="my-10">
          <h3 className="text-2xl text-center font-medium text-black">
            Temukan brand-brand terkenal yang siap memberikan Anda pilihan
            terbaik dalam koleksi tekstil. Dari brand-brand bergengsi hingga
            brand-brand yang sedang naik daun, kami menyediakan produk-produk
            yang mengikuti tren terbaru dan memenuhi kebutuhan Anda.
          </h3>
        </div>
        <Row>
          {brandLogos.map((logo, index) => (
            <Col key={index} lg={2} md={4} sm={6}>
              <img
                src={logo}
                alt="img"
                className="lg:w-28 w-48 lg:ml-8 md:ml-20 my-5 max-[600px]:ml-20"
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default BrandSection;
