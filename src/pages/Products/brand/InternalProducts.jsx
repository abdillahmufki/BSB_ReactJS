/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Container, Row } from "react-grid-system";

import banner from "../../../assets/banner/06.jpg";
import imageLogo from "../../../assets/brand-logo/internal2.png";

import bedCover from "../../../assets/category/bc.png";
import sprei from "../../../assets/category/sprei.png";
import blanket from "../../../assets/category/blanket.png";
import blanketBaby from "../../../assets/category/babyblanket.png";
import keset from "../../../assets/category/keset.png";

import {
  BedCover,
  BedCoverNew,
  BedCoverSinggle,
  SpreiNew,
  Sprei,
  SpreiSinggle,
  Blanket,
  BlanketNew,
  BlanketBaby,
  Keset,
  KesetCendol,
} from "../brand/catalog/internal";

const Banner = ({ bannerImage, logoImage }) => {
  return (
    <>
      <div
        className="md:min-h-screen w-screen bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="pt-36 flex justify-center">
          <div className="bg-white p-5 rounded-md shadow-md absolute bottom-10">
            <img
              src={logoImage}
              alt="logo brand"
              className="w-auto max-[600px]:w-16"
            />
          </div>
        </div>
      </div>
    </>
  );
};

const InternalProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const renderProductComponent = () => {
    switch (selectedProduct) {
      case "Bed Cover":
        return (
          <>
            <BedCoverNew />
            <BedCover />
            <BedCoverSinggle />
          </>
        );
      case "Sprei":
        return (
          <>
            <SpreiNew />
            <Sprei />
            <SpreiSinggle />
          </>
        );
      case "Blanket":
        return (
          <>
            <BlanketNew />
            <Blanket />
          </>
        );
      case "Blanket Baby":
        return (
          <>
            <BlanketBaby />
          </>
        );
      case "Keset":
        return (
          <>
            <Keset />
            <KesetCendol />
          </>
        );
      default:
        return null;
    }
  };

  const products = [
    { name: "Bed Cover", image: bedCover },
    { name: "Sprei", image: sprei },
    { name: "Blanket", image: blanket },
    { name: "Blanket Baby", image: blanketBaby },
    { name: "Keset", image: keset },
  ];
  return (
    <Container fluid className="mt-[90px]">
      <Row>
        <Banner bannerImage={banner} logoImage={imageLogo} />
      </Row>
      <div className="flex justify-center gap-x-5 my-24 px-10 text-center font-bold">
        {products.map((product, index) => (
          <div key={index}>
            <div
              className="bg-[#f5f5f5] shadow-md rounded-xl w-44 p-6 hover:scale-110 ease-in duration-200"
              onClick={() => handleProductClick(product.name)}
            >
              <img
                src={product.image}
                alt="icon"
                width={100}
                className="ml-4"
              />
              <h2>{product.name}</h2>
            </div>
          </div>
        ))}
      </div>
      {selectedProduct && (
        <div className="product-component">{renderProductComponent()}</div>
      )}
    </Container>
  );
};

export default InternalProducts;
