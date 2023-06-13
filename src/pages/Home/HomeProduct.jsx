import React from "react";
import { Container, Row, Col } from "react-grid-system";
import { Link } from "react-router-dom";
import bcembos from "../../assets/catalogue/itg_aloha/bcemboss/Aqua.jpg";
import sarungKasur from "../../assets/catalogue/itg_illusions/sarung_kasur/Arilla.jpg";
import blanket from "../../assets/catalogue/itg_internal/blanketnew/luvie.jpg";
import karpet from "../../assets/catalogue/itg_lady_rose/karpet/Aquatic.jpg";
import sprei from "../../assets/catalogue/itg_internal/spnew/Agnes.jpg";
import keset from "../../assets/catalogue/itg_vallery_quincy/keset/Amber.jpg";

const HomeProduct = () => {
  const products = [
    {
      link: "#",
      imageUrl: bcembos,
      title: "Bed Cover",
      text: "Aloha",
    },
    {
      link: "#",
      imageUrl: sarungKasur,
      title: "Sarung Kasur",
      text: "Illusions",
    },
    {
      link: "#",
      imageUrl: blanket,
      title: "Blanket",
      text: "Internal",
    },
    {
      link: "#",
      imageUrl: karpet,
      title: "Karpet",
      text: "Rose",
    },
    {
      link: "#",
      imageUrl: sprei,
      title: "Sprei",
      text: "Rainbow",
    },
    {
      link: "#",
      imageUrl: keset,
      title: "Keset",
      text: "Quincy",
    },
  ];

  return (
    <div className="flex justify-center my-10 lg:my-20">
      <Container>
        <div className="lg:px-10 my-20">
          <h2 className="text-2xl font-semibold text-center">
            Kami menawarkan beragam pilihan kain berkualitas tinggi untuk
            memenuhi kebutuhan berbagai industri, mulai dari fashion hingga
            dekorasi rumah. Dengan koleksi kain yang beragam, Anda dapat
            menemukan bahan yang tepat untuk produk Anda.
          </h2>
        </div>
        <Row className="gap-y-5">
          {products.map((product, index) => (
            <Col lg={4} md={4} sm={6} key={index}>
              <div className="p-1">
                <div className="group relative block overflow-hidden rounded-md transition-all duration-500">
                  <Link
                    to={product.link}
                    className="lightbox transition-all duration-500 group-hover:scale-105 tobii-zoom"
                  >
                    <img src={product.imageUrl} />
                  </Link>
                  <div className="absolute -bottom-52 group-hover:bottom-2 right-2 left-2 transition-all duration-500 bg-white dark:bg-slate-900 p-4 rounded shadow dark:shadow-gray-700">
                    <a
                      href={product.link}
                      className="hover:text-primary-600 text-lg transition duration-500 font-medium"
                    >
                      {product.title}
                    </a>
                    <h6 className="text-slate-400">{product.text}</h6>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default HomeProduct;
