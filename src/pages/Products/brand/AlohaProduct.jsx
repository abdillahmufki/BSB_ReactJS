/* eslint-disable react/prop-types */
import React, { useState } from "react";
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
      className="relative min-h-screen w-screen bg-cover bg-center bg-no-repeat md:min-h-screen"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="flex justify-center pt-36">
        <img
          src={logoImage}
          alt="logo brand"
          className="max-w-16 absolute bottom-0 w-auto"
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
    <div className="mt-90 overflow-hidden">
      <Banner bannerImage={banner} logoImage={imageLogo} />
      <div className="my-24 flex justify-center gap-x-5 px-10 text-center font-bold">
        <div className="grid grid-cols-2 items-center justify-center gap-8 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-3 xl:grid-cols-3">
          {products.map((product, index) => (
            <div
              key={index}
              className="cursor-pointer rounded-xl bg-[#f5f5f5] p-6 shadow-md duration-200 ease-in hover:scale-110 lg:col-span-1"
              onClick={() => handleProductClick(product.name)}
            >
              <img
                src={product.image}
                alt="icon"
                className="mb-3 w-14 max-[600px]:ml-3 max-[600px]:w-16 lg:ml-7"
              />
              <h2>{product.name}</h2>
            </div>
          ))}
        </div>
      </div>
      {selectedProduct && (
        <div className="product-component">{renderProductComponent()}</div>
      )}
    </div>
  );
};

export default AlohaProduct;
