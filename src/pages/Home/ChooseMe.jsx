import React from "react";
import { Container, Row, Col } from "react-grid-system";
import img from "../../assets/banner/01.jpg";
import { quality, delivery, trusted, bestPrice } from "../../assets/icon";

const features = [
  {
    icon: quality,
    title: "Kualitas Terbaik",
    description:
      "Kami menyediakan tekstil berkualitas tinggi yang telah terbukti memenuhi standar industri tertinggi. Dengan kerja keras dan pengalaman kami, kami menghadirkan produk yang tahan lama dan memukau.",
    color: "bg-orange-600",
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

const ChooseMe = () => {
  return (
    <div className="flex justify-center lg:px-10 my-10 lg:my-40">
      <Container fluid>
        <div className="bg-slate-300 shadow-md lg:p-20 p-10 rounded-2xl">
          <Row>
            <Col>
              <div className="my-10">
                <h3 className="text-4xl font-semibold">
                  Mengapa Memilih Kami?
                </h3>
              </div>
              <div className="bg-[#0504DE] w-60 lg:p-8 p-5 h-80 my-5 rounded-2xl">
                <img
                  src={img}
                  alt="banner"
                  className="rounded-2xl lg:absolute lg:float-right"
                  width={400}
                />
              </div>
            </Col>
            <Col>
              <div>
                <Row className="gap-y-10">
                  {features.map((feature, index) => (
                    <Col lg={6} md={6} sm={12} key={index}>
                      <div
                        className={`${feature.color} p-5 rounded-2xl text-black hover:text-white`}
                      >
                        <div className="bg-[#fff] p-4 rounded-full w-14 shadow-sm my-3">
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
