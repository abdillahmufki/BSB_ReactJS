import React, { useEffect } from "react";
import { Container, Row, Col } from "react-grid-system";
import { quality, delivery, trusted, bestPrice } from "../../assets/icon";
import imgMockUP from "../../assets/content/mocup.avif";

import AOS from "aos";
import "aos/dist/aos.css";

const features = [
  {
    icon: quality,
    title: "Kualitas Terbaik",
    description:
      "Kami menyediakan tekstil berkualitas tinggi yang telah terbukti memenuhi standar industri tertinggi. Dengan kerja keras dan pengalaman kami, kami menghadirkan produk yang tahan lama dan memukau.",
    color: "bg-orange-600 text-white",
  },
  {
    icon: delivery,
    title: "Pengiriman Cepat",
    description:
      "Kami memahami pentingnya waktu dalam bisnis. Oleh karena itu, kami menjamin pengiriman tepat waktu untuk memastikan Anda mendapatkan produk Anda dengan cepat dan efisien.",
    color: "hover:bg-orange-600",
  },
  {
    icon: trusted,
    title: "Layanan Pelanggan Profesional",
    description:
      "Kami berkomitmen untuk memberikan pengalaman pelanggan yang luar biasa dan memastikan kepuasan Anda adalah prioritas utama kami.",
    color: "hover:bg-orange-600",
  },
  {
    icon: bestPrice,
    title: "Harga Kompetitif",
    description:
      "Kami menyadari pentingnya keberlanjutan bisnis Anda, itulah mengapa kami menawarkan harga yang kompetitif dan fleksibel. Kami berusaha memberikan nilai terbaik bagi setiap pesanan.",
    color: "hover:bg-orange-600",
  },
];

const data = {
  heading: "Mengapa Memilih Kami?",
};

const ChooseMe = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      easing: "ease-out",
      delay: 300,
    });
  }, []);
  return (
    <div className="my-10 flex justify-center lg:my-40 lg:px-10">
      <Container fluid>
        <div className="block rounded-xl border-gray-200 bg-gray-300 p-6 shadow-md lg:p-20">
          <Row className="gap-y-10">
            <Col lg={6} md={12} sm={12} data-aos="fade-right">
              <div className="my-10">
                <h3 className="text-4xl font-semibold max-[480px]:text-2xl">
                  {data.heading}
                </h3>
              </div>
              <div className="mt-3 max-[728px]:ml-8 lg:ml-7">
                <div className="mockup-phone max-[600px]:hidden">
                  <div className="camera"></div>
                  <div className="display">
                    <div className="artboard artboard-demo phone-1">
                      <img src={imgMockUP} alt="banner" width={400} />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6} md={12} sm={12} data-aos="fade-left">
              <div>
                <Row className="gap-y-10">
                  {features.map((feature, index) => (
                    <Col lg={6} md={6} sm={12} key={index}>
                      <div
                        className={`${feature.color} rounded-2xl p-5 text-black duration-200 ease-in hover:text-white`}
                      >
                        <div className="my-3 w-14 rounded-full bg-[#fff] p-4 shadow-sm">
                          <img src={feature.icon} width={50} alt="icon" />
                        </div>
                        <h4 className="text-lg font-semibold">
                          {feature.title}
                        </h4>
                        <p>{feature.description}</p>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default ChooseMe;
