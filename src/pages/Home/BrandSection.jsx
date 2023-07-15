import React, { useEffect } from "react";
import { Container, Row, Col } from "react-grid-system";
import {
  aloha,
  internal,
  ilusion,
  rainbow,
  ladyrose,
  vallery,
} from "../../assets/brand-logo";

import AOS from "aos";
import "aos/dist/aos.css";

const BrandSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      easing: "ease-out",
      delay: 200,
    });
  }, []);
  const brandLogos = [
    {
      src: aloha,
      alt: "Aloha",
      link: "/aloha",
    },
    {
      src: ilusion,
      alt: "Illusion",
      link: "/illusion",
    },
    {
      src: internal,
      alt: "Internal",
      link: "/internal",
    },
    {
      src: ladyrose,
      alt: "Lady Rose",
      link: "/ladyrose",
    },
    {
      src: vallery,
      alt: "Vallery Quincy",
      link: "/valeryquincy",
    },
    {
      src: rainbow,
      alt: "Rainbow",
      link: "/rainbow",
    },
  ];

  const data = {
    heading:
      "Temukan brand-brand terkenal yang siap memberikan Anda pilihan  terbaik dalam koleksi tekstil. Dari brand-brand bergengsi hingga brand-brand yang sedang naik daun, kami menyediakan produk-produk  yang mengikuti tren terbaru dan memenuhi kebutuhan Anda.",
  };
  return (
    <div className="flex justify-center bg-gray-300 py-10 sm:flex sm:justify-between lg:my-20">
      <Container>
        <div className="my-10">
          <h3
            className="text-center text-2xl font-medium text-black"
            data-aos="fade-down"
          >
            {data.heading}
          </h3>
        </div>
        <Row className="gap-y-3">
          {brandLogos.map((brandLogo, index) => (
            <Col lg={2} md={2} sm={4} key={index} data-aos="fade-up-right">
              <div className="flex scale-100 justify-center rounded-md bg-white shadow-md duration-100 ease-in hover:scale-110">
                <a href={brandLogo.link}>
                  <img
                    src={brandLogo.src}
                    alt={brandLogo.alt}
                    className="h-32 w-32"
                  />
                </a>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default BrandSection;