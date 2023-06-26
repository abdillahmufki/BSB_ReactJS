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
      name: "Illusion",
      logo: ilusion,
      path: "/illusion",
    },
    {
      name: "Internal",
      logo: internal,
      path: "/internal",
    },
    {
      name: "Lady Rose",
      logo: ladyrose,
      path: "/ladyrose",
    },
    {
      name: "Vallery Quincy",
      logo: vallery,
      path: "/valeryquincy",
    },
    {
      name: "Rainbow",
      logo: rainbow,
      path: "/rainbow",
    },
  ];

  return (
    <>
      <Container className="my-10 py-14">
        <div className="pb-10">
          <h2 className="mb-5 text-center text-2xl font-semibold">
            Kualitas Terbaik yang Anda Percaya, Kenyamanan yang Anda Nikmati.
          </h2>
        </div>
        <Row className="gap-y-3">
          {brandLogos.map((brand, index) => (
            <Col key={index} lg={2} md={4} sm={6}>
              <Link to={brand.path}>
                <div className="cursor-pointer rounded-lg bg-[#fff] p-5 shadow-xl transition-transform duration-300 hover:scale-105 lg:w-44">
                  <img
                    src={brand.logo}
                    alt="img"
                    width={100}
                    className="ml-5"
                  />
                  <p className="text-center font-semibold uppercase">
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
