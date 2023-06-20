import React from "react";
import { Container, Row, Col } from "react-grid-system";
import { Link } from "react-router-dom";
import {
  aloha,
  ilusion,
  internal,
  ladyrose,
  vallery,
  rainbow,
} from "../../assets/brand-logo";
const AllBrandProducts = () => {
  const brandLogos = [
    {
      name: "Aloha",
      logo: aloha,
      path: "/aloha",
    },
    {
      name: "Internal",
      logo: internal,
      path: "/aloha",
    },
    {
      name: "Illusion",
      logo: ilusion,
      path: "/aloha",
    },
    {
      name: "Lady Rose",
      logo: ladyrose,
      path: "/aloha",
    },
    {
      name: "Vallery",
      logo: vallery,
      path: "/aloha",
    },
    {
      name: "Rainbow",
      logo: rainbow,
      path: "/aloha",
    },
  ];

  return (
    <>
      <Container className="my-10 py-14">
        <div className="pb-10">
          <h2 className="text-center text-2xl font-semibold mb-5">
            Kualitas Terbaik yang Anda Percaya, Kenyamanan yang Anda Nikmati.
          </h2>
        </div>
        <Row className="gap-y-3">
          {brandLogos.map((brand, index) => (
            <Col key={index} lg={2} md={4} sm={6}>
              <Link to={brand.path}>
                <div className="bg-[#fff] lg:w-40 rounded-lg shadow-xl p-5 hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <img
                    src={brand.logo}
                    alt="img"
                    width={100}
                    className="ml-3"
                  />
                  <p className="text-center uppercase font-semibold">
                    {brand.name}
                  </p>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default AllBrandProducts;
