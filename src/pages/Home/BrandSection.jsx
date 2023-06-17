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

  const data = {
    heading:
      "Temukan brand-brand terkenal yang siap memberikan Anda pilihan  terbaik dalam koleksi tekstil. Dari brand-brand bergengsi hingga brand-brand yang sedang naik daun, kami menyediakan produk-produk  yang mengikuti tren terbaru dan memenuhi kebutuhan Anda.",
  };
  return (
    <div className="flex justify-center sm:flex sm:justify-between lg:my-20 bg-gray-300 py-10">
      <Container>
        <div className="my-10">
          <h3 className="text-2xl text-center font-medium text-black">
            {data.heading}
          </h3>
        </div>
        <Row className="gap-y-3">
          {brandLogos.map((logo, index) => (
            <Col key={index} lg={2} md={4} sm={6}>
              <div className="bg-[#f5f5f5] rounded-md shadow-md p-5">
                <img src={logo} alt="img" width={100} className="ml-3" />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default BrandSection;
