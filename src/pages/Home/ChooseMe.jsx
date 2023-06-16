import React from "react";
import { Container, Row, Col } from "react-grid-system";
import { quality, delivery, trusted, bestPrice } from "../../assets/icon";
import imgMockUP from "../../assets/content/mocup.avif";

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

const ChooseMe = () => {
  return (
    <div className="flex justify-center lg:px-10 my-10 lg:my-40">
      <Container fluid>
        <div className="block p-6 bg-gray-300 border-gray-200 rounded-xl shadow-md lg:p-20">
          <Row className="gap-y-10">
            <Col lg={6} md={12} sm={12}>
              <div className="my-10">
                <h3 className="text-4xl max-[480px]:text-2xl font-semibold">
                  Mengapa Memilih Kami?
                </h3>
              </div>
              <div className="lg:ml-7 max-[728px]:ml-8 mt-3">
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
            <Col lg={6} md={12} sm={12}>
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
