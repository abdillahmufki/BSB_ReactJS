/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Container, Row, Col } from "react-grid-system";
import banner from "../../../assets/banner/01.jpg";
import imageLogo from "../../../assets/brand-logo/aloha.png";
import bedCover from "../../../assets/category/sprei1.png";
import sprei from "../../../assets/category/bed1.png";
import spreiSinggle from "../../../assets/category/singlebed.png";
import BedCoverMotif from "./catalog/aloha/BedCoverMotif";
import BedCoverEmbos from "./catalog/aloha/BedCoverEmbos";
import SpreiMotif from "./catalog/aloha/SpreiMotif";
import SpreiEmboss from "./catalog/aloha/SpreiEmboss";
import SpreiSinggleMotif from "./catalog/aloha/SpreiSinggleMotif";
import SpreiSinggleEmboss from "./catalog/aloha/SpreiSinggleEmboss";

const Banner = ({ bannerImage, logoImage }) => {
  return (
    <div
      className="relative w-screen bg-cover bg-center bg-no-repeat md:min-h-screen"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="flex justify-center pt-36">
        <img
          src={logoImage}
          alt="logo brand"
          className="absolute bottom-0 w-auto max-[600px]:w-16"
        />
      </div>
    </div>
  );
};

const AlohaProduct = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const renderProductComponent = () => {
    switch (selectedProduct) {
      case "Bed Cover":
        return (
          <>
            <BedCoverMotif />
            <BedCoverEmbos />
          </>
        );
      case "Sprei":
        return (
          <>
            <SpreiMotif />
            <SpreiEmboss />
          </>
        );
      case "Sprei Singgle":
        return (
          <>
            <SpreiSinggleMotif />
            <SpreiSinggleEmboss />
          </>
        );
      default:
        return null;
    }
  };

  const products = [
    { name: "Bed Cover", image: bedCover },
    { name: "Sprei", image: sprei },
    { name: "Sprei Singgle", image: spreiSinggle },
  ];

  return (
    <Container fluid className="mt-20 min-h-screen">
      <Row>
        {" "}
        <Banner bannerImage={banner} logoImage={imageLogo} />
      </Row>
      <Col lg={12} className="my-28">
        <div className="flex cursor-pointer justify-center text-center text-base font-bold text-gray-500">
          <Row className="gap-y-5">
            {products.map((product, index) => (
              <Col key={index} lg={4} md={4} sm={12}>
                <div
                  className="w-48 rounded-xl bg-[#f5f5f5] p-10 shadow-md duration-200 ease-in hover:scale-110"
                  onClick={() => handleProductClick(product.name)}
                >
                  <img
                    src={product.image}
                    alt="icon"
                    width={64}
                    className="mb-5 ml-6"
                  />
                  <h2>{product.name}</h2>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Col>
      {selectedProduct && (
        <div className="product-component">{renderProductComponent()}</div>
      )}
    </Container>
  );
};

export default AlohaProduct;
